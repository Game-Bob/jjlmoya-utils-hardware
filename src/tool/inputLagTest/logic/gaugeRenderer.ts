interface GaugeBounds {
  cx: number;
  cy: number;
  r: number;
  start: number;
  end: number;
  val: number;
  max: number;
  color: string;
}

export class GaugeRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Canvas context not available');
    }
    this.ctx = context;
  }

  public draw(valMs: number, maxRangeMs: number = 50): void {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const bounds: GaugeBounds = {
      cx: width / 2,
      cy: height / 2 + 10,
      r: Math.min(width, height) / 2 - 20,
      start: Math.PI * 0.8,
      end: Math.PI * 2.2,
      val: valMs,
      max: maxRangeMs,
      color: this.getGradeColor(valMs),
    };

    this.ctx.clearRect(0, 0, width, height);
    this.drawArcs(bounds);
    this.drawTextLabels(bounds.cx, bounds.cy, valMs, bounds.color);
  }

  private getGradeColor(valMs: number): string {
    if (valMs > 35) return '#ef4444';
    if (valMs > 20) return '#f59e0b';
    if (valMs > 10) return '#3b82f6';
    return '#22c55e';
  }

  private drawArcs(b: GaugeBounds): void {
    this.ctx.lineWidth = 14;
    this.ctx.lineCap = 'round';

    this.ctx.beginPath();
    this.ctx.arc(b.cx, b.cy, b.r, b.start, b.end);
    this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    this.ctx.stroke();

    if (b.val > 0) {
      const clamped = Math.min(Math.max(b.val, 0), b.max);
      const curr = b.start + (clamped / b.max) * (b.end - b.start);
      this.ctx.beginPath();
      this.ctx.arc(b.cx, b.cy, b.r, b.start, curr);
      this.ctx.strokeStyle = b.color;
      this.ctx.stroke();
    }
  }

  private drawTextLabels(cx: number, cy: number, val: number, color: string): void {
    this.ctx.fillStyle = color;
    this.ctx.font = '700 28px system-ui';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(val > 0 ? `${val} ms` : '0 ms', cx, cy - 5);


    this.ctx.fillStyle = '#64748b';
    this.ctx.font = '600 12px system-ui';
    this.ctx.fillText('AVG LATENCY', cx, cy + 22);
  }
}
