type ScrollAxis = 'vertical' | 'horizontal';
type ScrollDirection = 'up' | 'down' | 'left' | 'right' | 'none';
type ScrollState = 'clean' | 'reversal' | 'jitter';

interface ScrollSample { axis: ScrollAxis; direction: ScrollDirection; delta: number; time: number; state: ScrollState; }

interface AxisState {
  lastDirection: ScrollDirection;
  lastTime: number;
  run: number;
  longestRun: number;
  reversals: number;
  jitter: number;
  total: number;
}

interface MouseScrollElements {
  capture: HTMLElement | null;
  score: HTMLElement | null;
  status: HTMLElement | null;
  total: HTMLElement | null;
  reversals: HTMLElement | null;
  longestRun: HTMLElement | null;
  lastDelta: HTMLElement | null;
  dominant: HTMLElement | null;
  sensitivity: HTMLInputElement | null;
  sensitivityValue: HTMLElement | null;
  reset: HTMLElement | null;
  log: HTMLElement | null;
  verticalNeedle: HTMLElement | null;
  horizontalNeedle: HTMLElement | null;
  verticalMeter: HTMLElement | null;
  horizontalMeter: HTMLElement | null;
}

interface MouseScrollLabels {
  statusIdle: string; statusClean: string; statusWarning: string; statusMixed: string;
  upward: string; downward: string; leftward: string; rightward: string; noDirection: string;
  sensitivityUnit: string; emptyLog: string; cleanEvent: string; reversalEvent: string; jitterEvent: string;
  verticalAxis: string; horizontalAxis: string; noDataValue: string;
}

const REVERSAL_WINDOW_MS = 180;
const MAX_LOG_ITEMS = 16;

export class MouseScrollTester {
  private sensitivity = 12;
  private readonly samples: ScrollSample[] = [];
  private readonly axes: Record<ScrollAxis, AxisState> = {
    vertical: this.createAxisState(),
    horizontal: this.createAxisState(),
  };

  constructor(
    private readonly elements: MouseScrollElements,
    private readonly labels: MouseScrollLabels,
  ) {
    this.sensitivity = Number(elements.sensitivity?.value ?? 12);
    this.bindEvents();
    this.render();
  }

  private bindEvents() {
    this.elements.capture?.addEventListener('wheel', (event) => this.recordWheel(event), { passive: false });
    this.elements.capture?.addEventListener('click', () => this.elements.capture?.focus());
    this.elements.capture?.addEventListener('focusin', () => this.setCaptureState(true));
    this.elements.capture?.addEventListener('pointerleave', () => {
      if (document.activeElement !== this.elements.capture) this.setCaptureState(false);
    });
    this.elements.capture?.addEventListener('blur', () => this.setCaptureState(false));
    this.elements.sensitivity?.addEventListener('input', () => {
      this.sensitivity = Number(this.elements.sensitivity?.value ?? 12);
      this.recalculate();
      this.render();
    });
    this.elements.reset?.addEventListener('click', () => this.reset());
  }

  private recordWheel(event: WheelEvent) {
    event.preventDefault();
    this.elements.capture?.focus();
    this.setCaptureState(true);

    const axis: ScrollAxis = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? 'horizontal' : 'vertical';
    const delta = axis === 'horizontal' ? event.deltaX : event.deltaY;
    const magnitude = Math.abs(delta);
    if (magnitude < 0.2) return;

    const direction = this.getDirection(axis, delta);
    const state = this.classify(axis, direction, magnitude, performance.now());
    const sample: ScrollSample = { axis, direction, delta, time: performance.now(), state };

    this.samples.unshift(sample);
    this.samples.length = Math.min(this.samples.length, 80);
    this.updateAxis(axis, sample);
    this.animateNeedles(axis, delta, state);
    this.render();
  }

  private classify(axis: ScrollAxis, direction: ScrollDirection, magnitude: number, now: number): ScrollState {
    const state = this.axes[axis];
    if (magnitude < this.sensitivity) return 'jitter';
    if (
      state.lastDirection !== 'none' &&
      direction !== state.lastDirection &&
      now - state.lastTime <= REVERSAL_WINDOW_MS
    ) {
      return 'reversal';
    }
    return 'clean';
  }

  private updateAxis(axis: ScrollAxis, sample: ScrollSample) {
    const state = this.axes[axis];
    state.total++;

    if (sample.state === 'reversal') {
      state.reversals++;
      state.run = 1;
    } else if (sample.direction === state.lastDirection) {
      state.run++;
    } else {
      state.run = 1;
    }

    if (sample.state === 'jitter') state.jitter++;
    state.longestRun = Math.max(state.longestRun, state.run);
    state.lastDirection = sample.direction;
    state.lastTime = sample.time;
  }

  private recalculate() {
    const oldSamples = [...this.samples].reverse();
    this.reset(false);
    oldSamples.forEach((sample) => {
      const state = this.classify(sample.axis, sample.direction, Math.abs(sample.delta), sample.time);
      const nextSample = { ...sample, state };
      this.samples.unshift(nextSample);
      this.updateAxis(nextSample.axis, nextSample);
    });
  }

  private reset(render = true) {
    this.samples.length = 0;
    this.axes.vertical = this.createAxisState();
    this.axes.horizontal = this.createAxisState();
    this.setMeter(this.elements.verticalMeter, 0);
    this.setMeter(this.elements.horizontalMeter, 0);
    if (render) this.render();
  }

  private createAxisState(): AxisState {
    return { lastDirection: 'none', lastTime: 0, run: 0, longestRun: 0, reversals: 0, jitter: 0, total: 0 };
  }

  private getDirection(axis: ScrollAxis, delta: number): ScrollDirection {
    if (axis === 'vertical') return delta < 0 ? 'up' : 'down';
    return delta < 0 ? 'left' : 'right';
  }

  private getTotals() {
    const total = this.axes.vertical.total + this.axes.horizontal.total;
    const reversals = this.axes.vertical.reversals + this.axes.horizontal.reversals;
    const jitter = this.axes.vertical.jitter + this.axes.horizontal.jitter;
    const longestRun = Math.max(this.axes.vertical.longestRun, this.axes.horizontal.longestRun);
    return { total, reversals, jitter, longestRun };
  }

  private getScore() {
    const { total, reversals, jitter } = this.getTotals();
    if (total === 0) return 100;
    const reversalPenalty = reversals * 18;
    const jitterPenalty = Math.round((jitter / total) * 22);
    return Math.max(0, Math.min(100, 100 - reversalPenalty - jitterPenalty));
  }

  private render() {
    const totals = this.getTotals();
    const score = this.getScore();
    const last = this.samples[0];

    this.setText(this.elements.score, `${score}%`);
    this.setText(this.elements.total, String(totals.total));
    this.setText(this.elements.reversals, String(totals.reversals));
    this.setText(this.elements.longestRun, String(totals.longestRun));
    this.setText(this.elements.lastDelta, last ? this.formatDelta(last.delta) : this.labels.noDataValue);
    this.setText(this.elements.dominant, this.getDominantDirection());
    this.setText(this.elements.sensitivityValue, String(this.sensitivity));
    this.renderStatus(totals.total, totals.reversals, totals.jitter);
    this.renderLog();
  }

  private renderStatus(total: number, reversals: number, jitter: number) {
    if (!this.elements.status) return;
    if (total === 0) {
      this.elements.status.textContent = this.labels.statusIdle;
      this.elements.status.dataset.state = 'idle';
      return;
    }
    if (reversals > 0) {
      this.elements.status.textContent = this.labels.statusWarning;
      this.elements.status.dataset.state = 'warning';
      return;
    }
    if (jitter > total * 0.35) {
      this.elements.status.textContent = this.labels.statusMixed;
      this.elements.status.dataset.state = 'mixed';
      return;
    }
    this.elements.status.textContent = this.labels.statusClean;
    this.elements.status.dataset.state = 'clean';
  }

  private renderLog() {
    if (!this.elements.log) return;
    if (this.samples.length === 0) {
      this.elements.log.innerHTML = `<li class="mst-empty">${this.labels.emptyLog}</li>`;
      return;
    }
    this.elements.log.innerHTML = this.samples
      .slice(0, MAX_LOG_ITEMS)
      .map((sample) => {
        const stateLabel = this.getStateLabel(sample.state);
        const axisLabel = sample.axis === 'vertical' ? this.labels.verticalAxis : this.labels.horizontalAxis;
        return `<li class="mst-log-item ${sample.state}"><b>${this.getDirectionLabel(sample.direction)}</b><span>${axisLabel} ${this.formatDelta(sample.delta)}</span><em>${stateLabel}</em></li>`;
      })
      .join('');
  }

  private animateNeedles(axis: ScrollAxis, delta: number, state: ScrollState) {
    const needle = axis === 'vertical' ? this.elements.verticalNeedle : this.elements.horizontalNeedle;
    const meter = axis === 'vertical' ? this.elements.verticalMeter : this.elements.horizontalMeter;
    const normalized = Math.max(-1, Math.min(1, delta / 120));
    const offset = normalized * 42;
    if (needle) {
      needle.style.setProperty('--mst-needle-offset', `${offset}%`);
      needle.dataset.state = state;
      window.setTimeout(() => {
        needle.style.setProperty('--mst-needle-offset', '0%');
        needle.dataset.state = '';
      }, 170);
    }
    this.setMeter(meter, Math.min(100, Math.abs(delta)));
  }

  private setMeter(element: HTMLElement | null, value: number) {
    element?.style.setProperty('--mst-meter', `${value}%`);
  }

  private getDominantDirection() {
    const last = this.samples[0];
    return last ? this.getDirectionLabel(last.direction) : this.labels.noDirection;
  }

  private getDirectionLabel(direction: ScrollDirection) {
    const labels: Record<ScrollDirection, string> = { up: this.labels.upward, down: this.labels.downward, left: this.labels.leftward, right: this.labels.rightward, none: this.labels.noDirection };
    return labels[direction];
  }

  private getStateLabel(state: ScrollState) {
    const labels: Record<ScrollState, string> = { clean: this.labels.cleanEvent, reversal: this.labels.reversalEvent, jitter: this.labels.jitterEvent };
    return labels[state];
  }

  private formatDelta(delta: number) {
    const rounded = Math.round(delta * 10) / 10;
    return `${rounded > 0 ? '+' : ''}${rounded}`;
  }

  private setText(element: HTMLElement | null, value: string) {
    if (element) element.textContent = value;
  }

  private setCaptureState(active: boolean) {
    if (this.elements.capture) this.elements.capture.dataset.captureState = active ? 'active' : 'locked';
  }
}
