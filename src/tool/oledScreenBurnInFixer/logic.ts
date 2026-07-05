type RepairMode = 'cycle' | 'noise' | 'hybrid';

interface RepairElements {
  root: HTMLElement | null;
  canvas: HTMLCanvasElement | null;
  modal: HTMLElement | null;
  confirm: HTMLInputElement | null;
  start: HTMLButtonElement | null;
  safetyContinue: HTMLButtonElement | null;
  mode: HTMLInputElement | null;
  modeOptions: HTMLButtonElement[];
  speed: HTMLInputElement | null;
  duration: HTMLInputElement | null;
  durationOptions: HTMLButtonElement[];
  intensity: HTMLInputElement | null;
}

export class OledScreenBurnInFixer {
  private context: CanvasRenderingContext2D | null = null;
  private running = false;
  private raf = 0;
  private startedAt = 0;
  private lastNoiseFrame = 0;
  private noiseBuffer: ImageData | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(private readonly elements: RepairElements) {
    this.context = elements.canvas?.getContext('2d', { alpha: false }) ?? null;
    this.bindEvents();
    this.observeCanvasSize();
  }

  private bindEvents() {
    window.addEventListener('resize', () => this.resizeFullscreenCanvas());
    document.addEventListener('fullscreenchange', () => this.handleFullscreenChange());
    this.elements.confirm?.addEventListener('change', () => this.renderSafetyState());
    this.elements.start?.addEventListener('click', () => this.start());
    this.elements.safetyContinue?.addEventListener('click', () => this.dismissSafetyModal());
    this.elements.modeOptions.forEach((button) => {
      button.addEventListener('click', () => this.selectMode(button));
    });
    this.elements.durationOptions.forEach((button) => {
      button.addEventListener('click', () => this.selectDuration(button));
    });
    this.elements.speed?.addEventListener('input', () => this.paintPreview());
    this.elements.intensity?.addEventListener('input', () => this.paintPreview());
  }

  private renderSafetyState() {
    const disabled = this.elements.confirm?.checked !== true;
    if (this.elements.start) this.elements.start.disabled = disabled;
    if (this.elements.safetyContinue) this.elements.safetyContinue.disabled = disabled;
  }

  private dismissSafetyModal() {
    if (this.elements.confirm?.checked !== true) return;
    this.elements.modal?.setAttribute('hidden', '');
  }

  private selectMode(button: HTMLButtonElement) {
    const mode = button.dataset.mode as RepairMode | undefined;
    if (!mode || !this.elements.mode) return;

    this.elements.mode.value = mode;
    this.elements.modeOptions.forEach((option) => {
      const selected = option === button;
      option.classList.toggle('is-selected', selected);
      option.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
    this.paintPreview();
  }

  private selectDuration(button: HTMLButtonElement) {
    const duration = button.dataset.duration;
    if (!duration || !this.elements.duration) return;

    this.elements.duration.value = duration;
    this.elements.durationOptions.forEach((option) => {
      const selected = option === button;
      option.classList.toggle('is-selected', selected);
      option.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
  }

  private async start() {
    if (this.elements.confirm?.checked !== true) return;

    this.running = true;
    this.startedAt = performance.now();
    this.lastNoiseFrame = 0;
    this.elements.root?.classList.add('osf-active');

    try {
      await this.elements.root?.requestFullscreen();
    } catch {
      this.elements.root?.classList.add('osf-windowed');
    }

    this.resizeFullscreenCanvas();
    this.loop();
  }

  private stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.elements.root?.classList.remove('osf-active', 'osf-windowed');
    this.paintPreview();
    if (document.fullscreenElement === this.elements.root) void document.exitFullscreen();
  }

  private loop = () => {
    if (!this.running) return;

    const elapsed = this.getElapsedSeconds();
    if (elapsed >= this.getDurationSeconds()) {
      this.stop();
      return;
    }

    this.paintFrame(performance.now());
    this.raf = requestAnimationFrame(this.loop);
  };

  private paintFrame(now: number) {
    if (!this.context || !this.elements.canvas) return;

    const mode = this.getMode();
    const speed = this.getSpeed();
    const phase = Math.floor((now / 1000) * speed) % 6;

    if (mode === 'noise' || (mode === 'hybrid' && phase % 2 === 1)) {
      this.paintNoise(now);
      return;
    }

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffffff', '#000000', '#ffff00'];
    this.context.fillStyle = colors[phase] ?? '#ffffff';
    this.context.fillRect(0, 0, this.elements.canvas.width, this.elements.canvas.height);
  }

  private paintNoise(now: number) {
    if (!this.context || !this.elements.canvas) return;
    if (now - this.lastNoiseFrame < 24) return;

    const canvas = this.elements.canvas;
    const width = Math.max(1, Math.floor(canvas.width / 4));
    const height = Math.max(1, Math.floor(canvas.height / 4));
    const buffer = this.noiseBuffer && this.noiseBuffer.width === width && this.noiseBuffer.height === height
      ? this.noiseBuffer
      : this.context.createImageData(width, height);
    const data = buffer.data;
    const intensity = this.getIntensity();

    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255 * intensity;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 255;
    }

    this.noiseBuffer = buffer;
    this.context.putImageData(buffer, 0, 0);
    this.context.imageSmoothingEnabled = false;
    this.context.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
    this.lastNoiseFrame = now;
  }

  private paintPreview() {
    if (this.running || !this.context || !this.elements.canvas) return;
    const canvas = this.elements.canvas;
    const mode = this.getMode();

    if (mode === 'noise') {
      this.paintNoise(performance.now() + 1000);
      return;
    }

    const gradient = this.context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f43f5e');
    gradient.addColorStop(0.32, mode === 'cycle' ? '#22c55e' : '#ffffff');
    gradient.addColorStop(0.64, '#2563eb');
    gradient.addColorStop(1, mode === 'hybrid' ? '#05070b' : '#ffffff');
    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, canvas.width, canvas.height);
  }

  private observeCanvasSize() {
    const canvas = this.elements.canvas;
    if (!canvas) return;

    this.resizeObserver = new ResizeObserver((entries) => {
      const box = entries[0]?.contentRect;
      if (!box) return;
      this.resizeCanvas(box.width, box.height);
    });
    this.resizeObserver.observe(canvas);
    this.resizeCanvas(640, 360);
  }

  private resizeFullscreenCanvas() {
    if (!this.running) return;
    this.resizeCanvas(window.innerWidth, window.innerHeight);
  }

  private resizeCanvas(width: number, height: number) {
    const canvas = this.elements.canvas;
    if (!canvas) return;

    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(320, Math.floor(width * ratio));
    canvas.height = Math.max(180, Math.floor(height * ratio));
    this.noiseBuffer = null;
    this.paintPreview();
  }

  private handleFullscreenChange() {
    if (!document.fullscreenElement && this.running) this.stop();
  }

  private getElapsedSeconds() {
    if (!this.running) return 0;
    return Math.max(0, Math.floor((performance.now() - this.startedAt) / 1000));
  }

  private getDurationSeconds() {
    return Math.max(60, Number(this.elements.duration?.value ?? 10) * 60);
  }

  private getSpeed() {
    return Math.max(2, Number(this.elements.speed?.value ?? 18));
  }

  private getIntensity() {
    return Math.max(0.2, Number(this.elements.intensity?.value ?? 1));
  }

  private getMode() {
    return (this.elements.mode?.value ?? 'hybrid') as RepairMode;
  }

}
