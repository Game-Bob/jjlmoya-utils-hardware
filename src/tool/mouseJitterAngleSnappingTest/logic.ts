import { MAX_LOG, MAX_POINTS, WINDOW_SIZE, type Elements, type Labels, type PointSample, type TraceEvent, type TraceState } from './model';
import { drawGrid, drawNodes, drawTrace } from './render';

export class MouseJitterAngleSnappingTester {
  private readonly points: PointSample[] = [];
  private readonly events: TraceEvent[] = [];
  private ctx: CanvasRenderingContext2D | null = null;
  private raf = 0;
  private dirty = true;
  private active = false;
  private nextPointFresh = true;
  private sensitivity = 50;
  private metrics = { jitter: 0, snapping: 0, straightness: 0, deviation: 0 };

  constructor(
    private readonly elements: Elements,
    private readonly labels: Labels,
  ) {
    this.ctx = elements.canvas?.getContext('2d') ?? null;
    this.sensitivity = Number(elements.sensitivity?.value ?? 50);
    this.bind();
    this.resize();
    this.render();
  }

  private bind() {
    window.addEventListener('resize', () => this.resize());
    this.elements.stage?.addEventListener('pointerdown', (event) => this.start(event));
    this.elements.stage?.addEventListener('pointermove', (event) => this.move(event));
    this.elements.stage?.addEventListener('pointerup', () => this.stop());
    this.elements.stage?.addEventListener('pointerleave', () => this.stop());
    this.elements.sensitivity?.addEventListener('input', () => {
      this.sensitivity = Number(this.elements.sensitivity?.value ?? 50);
      this.analyze();
      this.dirty = true;
      this.renderPanel();
    });
    this.elements.reset?.addEventListener('click', () => this.reset());
  }

  private resize() {
    const canvas = this.elements.canvas;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    this.ctx = canvas.getContext('2d');
    this.ctx?.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.dirty = true;
  }

  private getCss(name: string, fallback: string) {
    return getComputedStyle(this.elements.stage ?? document.documentElement).getPropertyValue(name).trim() || fallback;
  }

  private addPoint(event: PointerEvent) {
    const canvas = this.elements.canvas;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    this.points.push({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      t: performance.now(),
      fresh: this.nextPointFresh,
    });
    this.nextPointFresh = false;
    if (this.points.length > MAX_POINTS) this.points.splice(0, this.points.length - MAX_POINTS);
    this.analyze();
    this.dirty = true;
  }

  private draw() {
    const canvas = this.elements.canvas;
    const ctx = this.ctx;
    if (!canvas || !ctx) return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    ctx.clearRect(0, 0, width, height);
    drawGrid(ctx, width, height, (name, fallback) => this.getCss(name, fallback));

    if (this.points.length > 1) {
      const options = { points: this.points, jitter: this.metrics.jitter, getCss: (name: string, fallback: string) => this.getCss(name, fallback) };
      drawTrace(ctx, options);
      drawNodes(ctx, options);
    }

    this.dirty = false;
  }

  private start(event: PointerEvent) {
    this.active = true;
    this.nextPointFresh = true;
    this.elements.stage?.setPointerCapture(event.pointerId);
    this.addPoint(event);
  }

  private move(event: PointerEvent) {
    if (!this.active) return;
    const coalesced = typeof event.getCoalescedEvents === 'function' ? event.getCoalescedEvents() : [event];
    coalesced.forEach((sample) => this.addPoint(sample));
  }

  private stop() {
    this.active = false;
  }

  private analyze() {
    if (this.points.length < 4) {
      this.resetMetrics();
      return;
    }

    const recent = this.points.slice(-Math.max(WINDOW_SIZE, Math.round(this.sensitivity * 0.7)));
    const deviations = this.getLineDeviations(recent);
    const averageDeviation = deviations.reduce((sum, value) => sum + value, 0) / Math.max(1, deviations.length);
    const maxDeviation = Math.max(...deviations, 0);
    const angles = this.getAngles(recent);
    const straightness = this.getStraightness(angles);
    const jitter = Math.min(100, Math.round((averageDeviation * 12 + maxDeviation * 3) * (100 / this.sensitivity)));
    const snapping = Math.min(100, Math.round(straightness * 100));

    this.metrics = { jitter, snapping, straightness: Math.round(straightness * 100), deviation: Math.round(averageDeviation * 10) / 10 };

    this.recordEvent();
    this.renderPanel();
  }

  private resetMetrics() {
    this.metrics = { jitter: 0, snapping: 0, straightness: 0, deviation: 0 };
    this.renderPanel();
  }

  private getLineDeviations(points: PointSample[]) {
    const first = points[0];
    const last = points[points.length - 1];
    const dx = last.x - first.x;
    const dy = last.y - first.y;
    const length = Math.hypot(dx, dy);
    if (length < 1) return [0];
    return points.slice(1, -1).map((point) => Math.abs(dy * point.x - dx * point.y + last.x * first.y - last.y * first.x) / length);
  }

  private getAngles(points: PointSample[]) {
    const angles: number[] = [];
    for (let i = 1; i < points.length; i++) {
      const dx = points[i].x - points[i - 1].x;
      const dy = points[i].y - points[i - 1].y;
      if (Math.hypot(dx, dy) >= 1.5) angles.push(Math.atan2(dy, dx));
    }
    return angles;
  }

  private getStraightness(angles: number[]) {
    if (angles.length < 5) return 0;
    const snapped = angles.filter((angle) => {
      const degrees = Math.abs((angle * 180) / Math.PI);
      const axis = Math.min(degrees % 90, 90 - (degrees % 90));
      return axis <= 2.2;
    }).length;
    return snapped / angles.length;
  }

  private recordEvent() {
    if (this.points.length % 18 !== 0) return;
    let state: TraceState = 'clean';
    let value = this.labels.cleanEvent;
    if (this.metrics.jitter > 58 && this.metrics.snapping > 58) {
      state = 'jitter';
      value = this.labels.combinedEvent;
    } else if (this.metrics.jitter > 58) {
      state = 'jitter';
      value = `${this.labels.jitterEvent} ${this.metrics.deviation}${this.labels.pxUnit}`;
    } else if (this.metrics.snapping > 70) {
      state = 'snapping';
      value = `${this.labels.snappingEvent} ${this.metrics.snapping}${this.labels.percentUnit}`;
    }
    this.events.unshift({ state, value });
    this.events.length = Math.min(this.events.length, MAX_LOG);
  }

  private render() {
    if (this.dirty) this.draw();
    this.raf = window.requestAnimationFrame(() => this.render());
  }

  private setText(element: HTMLElement | null, value: string) {
    if (element) element.textContent = value;
  }

  private renderPanel() {
    this.setText(this.elements.samples, String(this.points.length));
    this.setText(this.elements.jitterScore, `${this.metrics.jitter}${this.labels.percentUnit}`);
    this.setText(this.elements.snappingScore, `${this.metrics.snapping}${this.labels.percentUnit}`);
    this.setText(this.elements.straightness, `${this.metrics.straightness}${this.labels.percentUnit}`);
    this.setText(this.elements.deviation, `${this.metrics.deviation}${this.labels.pxUnit}`);
    this.setText(this.elements.sensitivityValue, String(this.sensitivity));
    this.renderStatus();
    this.renderLog();
  }

  private renderStatus() {
    const status = this.elements.status;
    if (!status) return;
    let text = this.labels.statusIdle;
    let state = 'idle';
    if (this.points.length > 8) {
      const hasJitter = this.metrics.jitter > 58;
      const hasSnapping = this.metrics.snapping > 70;
      if (hasJitter && hasSnapping) {
        text = this.labels.statusMixed;
        state = 'mixed';
      } else if (hasJitter) {
        text = this.labels.statusJitter;
        state = 'jitter';
      } else if (hasSnapping) {
        text = this.labels.statusSnapping;
        state = 'snapping';
      } else {
        text = this.labels.statusHealthy;
        state = 'healthy';
      }
    }
    status.textContent = text;
    status.dataset.state = state;
  }

  private renderLog() {
    const log = this.elements.log;
    if (!log) return;
    if (this.events.length === 0) {
      log.innerHTML = `<li class="mjas-empty">${this.labels.emptyLog}</li>`;
      return;
    }
    log.innerHTML = this.events.map((event) => `<li class="${event.state}"><span>${event.value}</span></li>`).join('');
  }

  private reset() {
    this.points.length = 0;
    this.events.length = 0;
    this.metrics = { jitter: 0, snapping: 0, straightness: 0, deviation: 0 };
    this.dirty = true;
    this.renderPanel();
  }
}
