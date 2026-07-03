type MouseButtonId = 'left' | 'middle' | 'right' | 'back' | 'forward' | 'other';

interface ButtonState {
  count: number;
  lastTime: number;
  suspicious: number;
  fastestGap: number;
}

export interface ClickSample {
  button: MouseButtonId;
  label: string;
  gap: number;
  suspicious: boolean;
}

interface MouseDoubleClickElements {
  target: HTMLElement | null;
  total: HTMLElement | null;
  suspicious: HTMLElement | null;
  fastest: HTMLElement | null;
  score: HTMLElement | null;
  status: HTMLElement | null;
  threshold: HTMLInputElement | null;
  thresholdValue: HTMLElement | null;
  lastGap: HTMLElement | null;
  log: HTMLElement | null;
  reset: HTMLElement | null;
  buttons: NodeListOf<HTMLElement>;
}

interface MouseDoubleClickLabels {
  statusIdle: string;
  statusClean: string;
  statusWarning: string;
  emptyLog: string;
  leftButton: string;
  middleButton: string;
  rightButton: string;
  backButton: string;
  forwardButton: string;
  otherButton: string;
  thresholdUnit: string;
  cleanEvent: string;
  suspiciousEvent: string;
}

const BUTTON_FROM_CODE: Record<number, MouseButtonId> = {
  0: 'left',
  1: 'middle',
  2: 'right',
  3: 'back',
  4: 'forward',
};

export class MouseDoubleClickTester {
  private threshold = 80;
  private samples: ClickSample[] = [];
  private readonly states = new Map<MouseButtonId, ButtonState>();

  constructor(
    private readonly elements: MouseDoubleClickElements,
    private readonly labels: MouseDoubleClickLabels,
  ) {
    this.threshold = Number(elements.threshold?.value ?? 80);
    this.bindEvents();
    this.render();
  }

  private bindEvents() {
    this.elements.target?.addEventListener('pointerdown', (event) => this.recordPointer(event));
    this.elements.target?.addEventListener('contextmenu', (event) => event.preventDefault());
    this.elements.target?.addEventListener('auxclick', (event) => event.preventDefault());
    this.elements.threshold?.addEventListener('input', () => {
      this.threshold = Number(this.elements.threshold?.value ?? 80);
      this.recalculateSuspicion();
      this.render();
    });
    this.elements.reset?.addEventListener('click', () => this.reset());
  }

  private recordPointer(event: PointerEvent) {
    event.preventDefault();

    const button = BUTTON_FROM_CODE[event.button] ?? 'other';
    const now = performance.now();
    const state = this.getButtonState(button);
    const gap = state.lastTime > 0 ? now - state.lastTime : 0;
    const suspicious = gap > 0 && gap <= this.threshold;

    state.count++;
    state.lastTime = now;

    if (gap > 0) {
      state.fastestGap = Math.min(state.fastestGap, gap);
      if (suspicious) state.suspicious++;
      this.samples.unshift({
        button,
        label: this.getButtonLabel(button),
        gap,
        suspicious,
      });
    }

    this.flashButton(button, suspicious);
    this.render();
  }

  private getButtonState(button: MouseButtonId) {
    const existing = this.states.get(button);
    if (existing) return existing;

    const state: ButtonState = {
      count: 0,
      lastTime: 0,
      suspicious: 0,
      fastestGap: Infinity,
    };
    this.states.set(button, state);
    return state;
  }

  private recalculateSuspicion() {
    for (const state of this.states.values()) {
      state.suspicious = 0;
    }

    this.samples = this.samples.map((sample) => {
      const suspicious = sample.gap <= this.threshold;
      if (suspicious) {
        this.getButtonState(sample.button).suspicious++;
      }
      return { ...sample, suspicious };
    });
  }

  private reset() {
    this.states.clear();
    this.samples = [];
    this.elements.buttons.forEach((button) => {
      button.dataset.count = '0';
      button.dataset.state = '';
    });
    this.render();
  }

  private getTotals() {
    let total = 0;
    let suspicious = 0;
    let fastestGap = Infinity;

    for (const state of this.states.values()) {
      total += state.count;
      suspicious += state.suspicious;
      fastestGap = Math.min(fastestGap, state.fastestGap);
    }

    return { total, suspicious, fastestGap };
  }

  private getScore() {
    const { total, suspicious } = this.getTotals();
    if (total < 2) return 100;
    const cleanRatio = 1 - suspicious / Math.max(total - 1, 1);
    return Math.max(0, Math.round(cleanRatio * 100));
  }

  private render() {
    const score = this.getScore();
    const totals = this.getTotals();
    const lastSample = this.samples[0];

    this.renderMetrics(score, totals, lastSample);
    this.renderButtonCounts();
    this.renderStatus(totals.total, totals.suspicious);
    this.renderLog();
  }

  private renderMetrics(score: number, totals: ReturnType<MouseDoubleClickTester['getTotals']>, lastSample: ClickSample | undefined) {
    this.setText(this.elements.total, String(totals.total));
    this.setText(this.elements.suspicious, String(totals.suspicious));
    this.setText(this.elements.fastest, this.formatGap(totals.fastestGap));
    this.setText(this.elements.score, `${score}%`);
    this.setText(this.elements.thresholdValue, String(this.threshold));
    this.setText(this.elements.lastGap, lastSample ? `${lastSample.label} ${this.formatGap(lastSample.gap)}` : '--');
  }

  private setText(element: HTMLElement | null, value: string) {
    if (element) element.textContent = value;
  }

  private formatGap(gap: number) {
    return Number.isFinite(gap) ? `${Math.round(gap)} ${this.labels.thresholdUnit}` : '--';
  }

  private renderButtonCounts() {
    this.elements.buttons.forEach((element) => {
      const button = (element.dataset.button ?? 'other') as MouseButtonId;
      const state = this.states.get(button);
      element.dataset.count = String(state?.count ?? 0);
      element.dataset.state = state && state.suspicious > 0 ? 'warning' : '';
    });
  }

  private renderStatus(total: number, suspicious: number) {
    if (!this.elements.status) return;

    if (total < 2) {
      this.elements.status.textContent = this.labels.statusIdle;
      this.elements.status.dataset.state = 'clean';
      return;
    }

    this.elements.status.textContent = suspicious > 0 ? this.labels.statusWarning : this.labels.statusClean;
    this.elements.status.dataset.state = suspicious > 0 ? 'warning' : 'clean';
  }

  private renderLog() {
    if (!this.elements.log) return;

    if (this.samples.length === 0) {
      this.elements.log.innerHTML = `<li class="mdct-empty">${this.labels.emptyLog}</li>`;
      return;
    }

    this.elements.log.innerHTML = this.samples
      .slice(0, 14)
      .map((sample) => {
        const state = sample.suspicious ? 'suspect' : 'clean';
        const label = sample.suspicious ? this.labels.suspiciousEvent : this.labels.cleanEvent;
        return `<li class="mdct-log-item ${state}"><b>${sample.label}</b><span>${Math.round(sample.gap)} ${this.labels.thresholdUnit}</span><em>${label}</em></li>`;
      })
      .join('');
  }

  private flashButton(button: MouseButtonId, suspicious: boolean) {
    this.elements.target?.setAttribute('data-flash', suspicious ? 'warning' : 'clean');
    const visualButton = Array.from(this.elements.buttons).find((element) => element.dataset.button === button);
    if (visualButton) visualButton.dataset.flash = suspicious ? 'warning' : 'clean';

    window.setTimeout(() => {
      this.elements.target?.setAttribute('data-flash', '');
      if (visualButton) visualButton.dataset.flash = '';
    }, 180);
  }

  private getButtonLabel(button: MouseButtonId) {
    const labels: Record<MouseButtonId, string> = {
      left: this.labels.leftButton,
      middle: this.labels.middleButton,
      right: this.labels.rightButton,
      back: this.labels.backButton,
      forward: this.labels.forwardButton,
      other: this.labels.otherButton,
    };
    return labels[button];
  }
}
