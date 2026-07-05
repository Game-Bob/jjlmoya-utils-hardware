interface MouseDpiAnalyzerElements {
  root: HTMLElement | null;
  capture: HTMLButtonElement | null;
  presetButtons: NodeListOf<HTMLButtonElement>;
  reset: HTMLButtonElement | null;
  status: HTMLElement | null;
  referenceValue: HTMLElement | null;
  progress: HTMLElement | null;
  dpi: HTMLElement | null;
  pixels: HTMLElement | null;
  distance: HTMLElement | null;
  ratio: HTMLElement | null;
  samples: HTMLElement | null;
  acceleration: HTMLElement | null;
  rulerContainer: HTMLElement | null;
  rulerEndVal: HTMLElement | null;
}

interface MouseDpiAnalyzerLabels {
  statusReady: string;
  statusTracking: string;
  statusDone: string;
  accelerationLow: string;
  accelerationMedium: string;
  accelerationHigh: string;
  initialAccelerationValue: string;
  pixelUnit: string;
  pixelsPerInchUnit: string;
  millimeterUnit: string;
  inchUnit: string;
}

interface MotionSample {
  pixels: number;
  time: number;
}

const MM_PER_INCH = 25.4;
const DEFAULT_DISTANCE_MM = 5;

export class MouseDpiAnalyzer {
  private tracking = false;
  private rawX = 0;
  private rawY = 0;
  private samples: MotionSample[] = [];
  private lastTime = 0;
  private distanceMm = DEFAULT_DISTANCE_MM;
  private recordBound = (event: MouseEvent) => this.record(event);
  private stopBound = () => this.stop();

  constructor(
    private readonly elements: MouseDpiAnalyzerElements,
    private readonly labels: MouseDpiAnalyzerLabels,
  ) {
    this.bindEvents();
    this.updateRuler();
    this.render();
  }

  private bindEvents() {
    this.elements.capture?.addEventListener('pointerdown', (event) => this.start(event));
    this.elements.reset?.addEventListener('click', () => this.reset());
    this.elements.presetButtons.forEach((button) => {
      button.addEventListener('click', () => this.setDistance(Number(button.dataset.distance ?? DEFAULT_DISTANCE_MM)));
    });
    document.addEventListener('pointerlockchange', () => this.onPointerLockChange());
  }

  private start(event: PointerEvent) {
    event.preventDefault();
    this.rawX = 0;
    this.rawY = 0;
    this.samples = [];
    this.lastTime = performance.now();
    this.tracking = true;
    this.elements.root?.setAttribute('data-state', 'tracking');
    this.setText(this.elements.status, this.labels.statusTracking);

    const capture = this.elements.capture;
    if (capture) {
      try {
        const promise = capture.requestPointerLock({ unadjustedMovement: true }) as unknown;
        if (promise instanceof Promise) {
          promise.catch(() => {
            capture.requestPointerLock();
          });
        }
      } catch {
        capture.requestPointerLock();
      }
    }

    document.addEventListener('mousemove', this.recordBound);
    document.addEventListener('mouseup', this.stopBound);
    this.render();
  }

  private onPointerLockChange() {
    if (document.pointerLockElement !== this.elements.capture && this.tracking) {
      this.stop();
    }
  }

  private record(event: MouseEvent) {
    if (!this.tracking) return;
    event.preventDefault();

    const dx = event.movementX;
    const dy = event.movementY;
    const now = performance.now();
    const pixels = Math.hypot(dx, dy);

    this.rawX += dx;
    this.rawY += dy;
    if (pixels > 0) {
      this.samples.push({ pixels, time: Math.max(now - this.lastTime, 1) });
    }
    this.lastTime = now;
    this.render();
  }

  private stop() {
    if (!this.tracking) return;
    this.tracking = false;
    document.removeEventListener('mousemove', this.recordBound);
    document.removeEventListener('mouseup', this.stopBound);
    if (document.pointerLockElement === this.elements.capture) {
      document.exitPointerLock();
    }
    this.elements.root?.setAttribute('data-state', 'done');
    this.setText(this.elements.status, this.labels.statusDone);
    this.render();
  }

  private reset() {
    this.tracking = false;
    document.removeEventListener('mousemove', this.recordBound);
    document.removeEventListener('mouseup', this.stopBound);
    if (document.pointerLockElement === this.elements.capture) {
      document.exitPointerLock();
    }
    this.rawX = 0;
    this.rawY = 0;
    this.samples = [];
    this.elements.root?.setAttribute('data-state', 'ready');
    this.setText(this.elements.status, this.labels.statusReady);
    this.render();
  }

  private getDistanceMm() {
    return this.distanceMm;
  }

  private setDistance(distanceMm: number) {
    this.distanceMm = Number.isFinite(distanceMm) ? distanceMm : DEFAULT_DISTANCE_MM;
    this.elements.presetButtons.forEach((button) => {
      button.classList.toggle('is-active', Number(button.dataset.distance) === this.distanceMm);
    });
    this.updateRuler();
    this.reset();
  }

  private updateRuler() {
    if (this.elements.rulerContainer) {
      this.elements.rulerContainer.style.setProperty('--mda-ruler-width', `${this.distanceMm}mm`);
    }
    this.setText(this.elements.rulerEndVal, this.formatDistance(this.distanceMm));
  }

  private getPurePixels() {
    return Math.hypot(this.rawX, this.rawY);
  }

  private getDpi() {
    const inches = this.getDistanceMm() / MM_PER_INCH;
    return inches > 0 ? this.getPurePixels() / inches : 0;
  }

  private getAccelerationLabel() {
    if (this.samples.length < 8) return this.labels.initialAccelerationValue;

    const speeds = this.samples.map((sample) => sample.pixels / sample.time).filter((speed) => Number.isFinite(speed));
    const average = speeds.reduce((sum, speed) => sum + speed, 0) / Math.max(speeds.length, 1);
    const variance = speeds.reduce((sum, speed) => sum + Math.abs(speed - average), 0) / Math.max(speeds.length, 1);
    const drift = average > 0 ? variance / average : 0;

    if (drift < 0.35) return this.labels.accelerationLow;
    if (drift < 0.75) return this.labels.accelerationMedium;
    return this.labels.accelerationHigh;
  }

  private render() {
    const distanceMm = this.getDistanceMm();
    const distanceIn = distanceMm / MM_PER_INCH;
    const pixels = this.getPurePixels();
    const dpi = this.getDpi();
    const distanceLabel = this.formatDistance(distanceMm);

    if (this.elements.root?.getAttribute('data-state') === 'done') {
      this.setText(this.elements.dpi, Math.round(dpi).toLocaleString('en-US'));
    } else {
      this.setText(this.elements.dpi, '0');
    }

    this.setText(this.elements.pixels, `${Math.round(pixels).toLocaleString('en-US')} ${this.labels.pixelUnit}`);
    this.setText(this.elements.distance, distanceLabel);
    this.setText(this.elements.referenceValue, distanceLabel);
    this.setText(this.elements.ratio, `${Math.round(pixels / Math.max(distanceIn, 0.01)).toLocaleString('en-US')} ${this.labels.pixelsPerInchUnit}`);
    this.setText(this.elements.samples, String(this.samples.length));
    this.setText(this.elements.acceleration, this.getAccelerationLabel());
  }

  private setText(element: HTMLElement | null, value: string) {
    if (element) element.textContent = value;
  }

  private formatDistance(distanceMm: number) {
    if (distanceMm === MM_PER_INCH) return `1 ${this.labels.inchUnit}`;
    return `${distanceMm.toFixed(distanceMm % 1 === 0 ? 0 : 1)} ${this.labels.millimeterUnit}`;
  }
}
