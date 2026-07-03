export type GhostingBackground = 'dark' | 'light' | 'grid';
export type GhostingPattern = 'bars' | 'text' | 'ufo';

interface GhostingElements {
  root: HTMLElement | null;
  monitor: HTMLElement | null;
  track: HTMLElement | null;
  target: HTMLElement | null;
  speed: HTMLInputElement | null;
  trail: HTMLInputElement | null;
  background: HTMLSelectElement | null;
  pattern: HTMLSelectElement | null;
  pursuit: HTMLInputElement | null;
  fullscreen: HTMLElement | null;
  pause: HTMLElement | null;
  reset: HTMLElement | null;
  speedValue: HTMLElement | null;
  trailValue: HTMLElement | null;
  blur: HTMLElement | null;
  frameStep: HTMLElement | null;
  persistence: HTMLElement | null;
  sampleCount: HTMLElement | null;
}

interface GhostingLabels {
  pixelsPerSecondUnit: string;
  pixelUnit: string;
  millisecondUnit: string;
  fullscreen: string;
  exitFullscreen: string;
  pause: string;
  resume: string;
}

export class MonitorGhostingLab {
  private speed = 960;
  private trail = 5;
  private background: GhostingBackground = 'dark';
  private pattern: GhostingPattern = 'bars';
  private pursuit = true;
  private paused = false;
  private resizeObserver: ResizeObserver | null = null;

  constructor(
    private readonly elements: GhostingElements,
    private readonly labels: GhostingLabels,
  ) {
    this.syncFromControls();
    this.bindEvents();
    this.observeMotionArea();
    this.render();
  }

  private bindEvents() {
    this.bindControl(this.elements.speed, 'input');
    this.bindControl(this.elements.trail, 'input');
    this.bindControl(this.elements.background, 'change');
    this.bindControl(this.elements.pattern, 'change');
    this.bindControl(this.elements.pursuit, 'change');
    this.bindClick(this.elements.fullscreen, () => this.toggleFullscreen());
    this.bindClick(this.elements.pause, () => this.togglePaused());
    document.addEventListener('fullscreenchange', () => this.renderFullscreenLabel());
    this.bindClick(this.elements.reset, () => this.reset());
  }

  private updateFromControls() {
    this.syncFromControls();
    this.render();
  }

  private syncFromControls() {
    this.speed = this.getInputNumber(this.elements.speed, 960);
    this.trail = this.getInputNumber(this.elements.trail, 5);
    this.background = this.getSelectValue(this.elements.background, 'dark');
    this.pattern = this.getSelectValue(this.elements.pattern, 'bars');
    this.pursuit = this.elements.pursuit?.checked === true;
  }

  private bindControl(element: HTMLElement | null, eventName: 'change' | 'input') {
    element?.addEventListener(eventName, () => this.updateFromControls());
  }

  private bindClick(element: HTMLElement | null, handler: () => void) {
    element?.addEventListener('click', handler);
  }

  private getInputNumber(element: HTMLInputElement | null, fallback: number) {
    return Number(element?.value ?? fallback);
  }

  private getSelectValue<T extends string>(element: HTMLSelectElement | null, fallback: T) {
    return (element?.value ?? fallback) as T;
  }

  private reset() {
    if (this.elements.speed) this.elements.speed.value = '960';
    if (this.elements.trail) this.elements.trail.value = '5';
    if (this.elements.background) this.elements.background.value = 'dark';
    if (this.elements.pattern) this.elements.pattern.value = 'bars';
    if (this.elements.pursuit) this.elements.pursuit.checked = true;
    this.paused = false;
    this.updateFromControls();
  }

  private render() {
    this.renderRootState();
    this.renderText();
    this.renderFullscreenLabel();
    this.renderPauseLabel();
  }

  private observeMotionArea() {
    if (!this.elements.track || !this.elements.target) return;

    this.resizeObserver = new ResizeObserver(() => this.renderRootState());
    this.resizeObserver.observe(this.elements.track);
    this.resizeObserver.observe(this.elements.target);
  }

  private async toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await this.elements.monitor?.requestFullscreen();
  }

  private togglePaused() {
    this.paused = !this.paused;
    this.render();
  }

  private getEstimatedBlur() {
    return Math.round((this.speed / 240) * this.trail);
  }

  private getTravelDuration() {
    const travelDistance = this.getTravelDistance();
    const duration = travelDistance / this.speed;

    return Math.max(0.35, Math.min(12, duration)).toFixed(2);
  }

  private getTravelDistance() {
    const trackWidth = this.elements.track?.clientWidth ?? 0;
    const targetWidth = this.elements.target?.getBoundingClientRect().width ?? 0;

    return Math.max(120, trackWidth - targetWidth);
  }

  private getFrameStep() {
    return Math.round((this.speed / 144) * 10) / 10;
  }

  private getPersistence() {
    return Math.round((this.trail / 10) * 16.7 * 10) / 10;
  }

  private getSampleCount() {
    return Math.max(3, Math.round(this.trail * 2.4));
  }

  private renderFullscreenLabel() {
    this.setText(this.elements.fullscreen, document.fullscreenElement ? this.labels.exitFullscreen : this.labels.fullscreen);
  }

  private renderPauseLabel() {
    this.setText(this.elements.pause, this.paused ? this.labels.resume : this.labels.pause);
  }

  private renderText() {
    this.setText(this.elements.speedValue, `${this.speed} ${this.labels.pixelsPerSecondUnit}`);
    this.setText(this.elements.trailValue, String(this.trail));
    this.setText(this.elements.blur, `${this.getEstimatedBlur()} ${this.labels.pixelUnit}`);
    this.setText(this.elements.frameStep, `${this.getFrameStep()} ${this.labels.pixelUnit}`);
    this.setText(this.elements.persistence, `${this.getPersistence()} ${this.labels.millisecondUnit}`);
    this.setText(this.elements.sampleCount, String(this.getSampleCount()));
  }

  private setText(element: HTMLElement | null, value: string) {
    if (element) element.textContent = value;
  }

  private renderRootState() {
    if (!this.elements.root) return;

    this.elements.root.style.setProperty('--mgt-duration', `${this.getTravelDuration()}s`);
    this.elements.root.style.setProperty('--mgt-trail-opacity', String(this.trail / 10));
    this.elements.root.dataset.background = this.background;
    this.elements.root.dataset.pattern = this.pattern;
    this.elements.root.dataset.pursuit = this.pursuit ? 'on' : 'off';
    this.elements.root.dataset.paused = this.paused ? 'true' : 'false';
  }
}
