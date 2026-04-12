export interface UIToolElements {
  avg: HTMLElement | null;
  max: HTMLElement | null;
  follower: HTMLElement | null;
  placeholder: HTMLElement | null;
  canvas: HTMLCanvasElement | null;
  area: HTMLElement | null;
}

export class RatonManager {
  private el: UIToolElements;
  private ctx: CanvasRenderingContext2D | null;
  private worker: Worker;
  private history: number[] = [];
  private readonly MAX_HISTORY = 100;
  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  private lastMouseEvent: MouseEvent | null = null;

  constructor(el: UIToolElements, workerUrl: URL) {
    this.el = el;
    this.ctx = el.canvas?.getContext('2d') ?? null;
    this.worker = new Worker(workerUrl, { type: 'module' });
    this.init();
  }

  private init(): void {
    window.addEventListener('resize', () => this.resize());
    this.resize();

    this.worker.onmessage = (event) => this.handleWorkerMessage(event.data);

    this.el.area?.addEventListener('mousemove', (e) => this.processMove(e));
    this.el.area?.addEventListener('mouseleave', () => this.handleMouseLeave());
  }

  private resize(): void {
    if (!this.el.area || !this.el.canvas) return;
    const rect = this.el.area.getBoundingClientRect();
    this.el.canvas.width = rect.width;
    this.el.canvas.height = rect.height;
  }

  private handleWorkerMessage(data: { hz: number; smoothedHz: number; avgHz: number; maxHz: number }): void {
    const { hz, smoothedHz, avgHz, maxHz } = data;
    
    this.history.push(smoothedHz);
    if (this.history.length > this.MAX_HISTORY) this.history.shift();
    
    if (this.el.max) this.el.max.textContent = Math.round(maxHz).toString();
    if (this.el.avg) this.el.avg.textContent = Math.round(avgHz).toString();
    
    this.updateGraph();

    if (this.el.follower && this.lastMouseEvent) {
      this.el.follower.textContent = `${Math.round(hz)} Hz`;
      const rect = this.el.area!.getBoundingClientRect();
      this.el.follower.style.transform = `translate(${this.lastMouseEvent.clientX - rect.left + 15}px, ${this.lastMouseEvent.clientY - rect.top + 15}px)`;
      this.el.follower.style.opacity = '1';
    }
    
    if (this.el.placeholder) this.el.placeholder.style.opacity = '0';
  }

  private updateGraph(): void {
    if (!this.ctx || !this.el.canvas) return;
    const { width: w, height: h } = this.el.canvas;
    this.ctx.clearRect(0, 0, w, h);
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#10b981';
    this.ctx.lineWidth = 2;
    const currentMax = Math.max(1000, ...this.history);
    const stepX = w / this.MAX_HISTORY;
    this.history.forEach((hz, i) => {
      const x = i * stepX;
      const y = h - (hz / currentMax) * (h * 0.8);
      if (i === 0) this.ctx!.moveTo(x, y);
      else this.ctx!.lineTo(x, y);
    });
    this.ctx.stroke();
  }

  private processMove(e: MouseEvent): void {
    this.lastMouseEvent = e;
    this.worker.postMessage({ time: performance.now() });
    
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      if (this.el.follower) this.el.follower.style.opacity = '0';
      this.worker.postMessage('reset');
    }, 100);
  }

  private handleMouseLeave(): void {
    if (this.el.follower) this.el.follower.style.opacity = '0';
    this.worker.postMessage('reset');
  }
}
