import { MovingAverage } from './MovingAverage';
import { StatisticalFilter } from './StatisticalFilter';

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
  private history: number[] = [];
  private readonly MAX_HISTORY: number = 100;
  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  private lastMouseEvent: MouseEvent | null = null;
  private lastTime: number = 0;
  private maxHz: number = 0;
  private totalHistory: number[] = [];
  private filter: StatisticalFilter = new StatisticalFilter();
  private smoother: MovingAverage = new MovingAverage(20);

  constructor(el: UIToolElements) {
    this.el = el;
    this.ctx = el.canvas?.getContext('2d') ?? null;
    this.init();
  }

  private init(): void {
    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.el.area?.addEventListener('mousemove', (e: MouseEvent) => this.processMove(e));
    this.el.area?.addEventListener('mouseleave', () => this.handleMouseLeave());
  }

  private resize(): void {
    const { area, canvas } = this.el;
    if (!area || !canvas) return;
    const rect = area.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  private processMove(e: MouseEvent): void {
    this.lastMouseEvent = e;
    const now: number = performance.now();
    this.calculateHz(now);
    this.lastTime = now;
    this.refreshIdleTimer();
  }

  private calculateHz(now: number): void {
    if (this.lastTime <= 0) return;
    const delta: number = now - this.lastTime;
    if (delta <= 0.5 || delta >= 200) return;

    const hz: number = 1000 / delta;
    if (this.filter.isOutlier(hz)) return;

    this.processValidMove(hz);
  }

  private processValidMove(hz: number): void {
    const smoothed: number = this.smoother.next(hz);
    this.history.push(smoothed);
    if (this.history.length > this.MAX_HISTORY) this.history.shift();
    
    this.totalHistory.push(hz);
    if (this.totalHistory.length > 200) this.totalHistory.shift();
    
    if (hz > this.maxHz) this.maxHz = hz;
    const avg: number = this.totalHistory.reduce((acc: number, val: number) => acc + val, 0) / this.totalHistory.length;
    
    this.updateUI(hz, avg);
  }

  private refreshIdleTimer(): void {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => this.reset(), 100);
  }

  private updateUI(hz: number, avg: number): void {
    const { max, avg: avgEl, placeholder } = this.el;
    if (max) max.textContent = Math.round(this.maxHz).toString();
    if (avgEl) avgEl.textContent = Math.round(avg).toString();
    if (placeholder) placeholder.style.opacity = '0';
    this.updateFollower(hz);
    this.updateGraph();
  }

  private updateFollower(hz: number): void {
    const { follower, area } = this.el;
    if (!follower || !this.lastMouseEvent || !area) return;
    follower.textContent = `${Math.round(hz)} Hz`;
    const rect = area.getBoundingClientRect();
    const x: number = this.lastMouseEvent.clientX - rect.left + 15;
    const y: number = this.lastMouseEvent.clientY - rect.top + 15;
    follower.style.transform = `translate(${x}px, ${y}px)`;
    follower.style.opacity = '1';
  }

  private updateGraph(): void {
    const ctx = this.ctx;
    const canvas = this.el.canvas;
    if (!ctx || !canvas) return;
    const { width: w, height: h } = canvas;
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    const currentMax: number = Math.max(1000, ...this.history);
    const stepX: number = w / this.MAX_HISTORY;
    this.history.forEach((hz: number, i: number) => {
      const x: number = i * stepX;
      const y: number = h - (hz / currentMax) * (h * 0.8);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  private reset(): void {
    this.lastTime = 0;
    this.filter.reset();
    this.smoother.reset();
    this.totalHistory = [];
    if (this.el.follower) this.el.follower.style.opacity = '0';
  }

  private handleMouseLeave(): void {
    this.reset();
  }
}
