import type { LatencySample } from './statsCalculator';

interface TimelineBounds {
  w: number;
  h: number;
  pad: number;
  plotW: number;
  plotH: number;
  maxMs: number;
}

export class TimelineChart {
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

  public render(samples: LatencySample[]): void {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const padding = 30;

    const bounds: TimelineBounds = {
      w: width,
      h: height,
      pad: padding,
      plotW: width - padding * 2,
      plotH: height - padding * 2,
      maxMs: 40,
    };

    this.ctx.clearRect(0, 0, width, height);
    this.drawThresholdLines(bounds);

    if (samples.length === 0) {
      this.drawEmptyMessage(width, height);
      return;
    }

    this.drawSampleBars(samples, bounds);
  }

  private drawEmptyMessage(width: number, height: number): void {
    this.ctx.fillStyle = '#64748b';
    this.ctx.font = '500 13px system-ui';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('No latency samples recorded yet', width / 2, height / 2);
  }

  private drawThresholdLines(b: TimelineBounds): void {
    const thresholds = [
      { ms: 16.67, label: '60Hz (16.7ms)', color: 'rgba(239, 68, 68, 0.4)' },
      { ms: 6.94, label: '144Hz (6.9ms)', color: 'rgba(245, 158, 11, 0.4)' },
      { ms: 4.17, label: '240Hz (4.2ms)', color: 'rgba(34, 197, 94, 0.4)' },
    ];

    for (const t of thresholds) {
      const y = b.h - b.pad - (t.ms / b.maxMs) * b.plotH;
      if (y >= b.pad) {
        this.ctx.beginPath();
        this.ctx.setLineDash([4, 4]);
        this.ctx.moveTo(b.pad, y);
        this.ctx.lineTo(b.w - b.pad, y);
        this.ctx.strokeStyle = t.color;
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = t.color;
        this.ctx.font = '500 10px system-ui';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(t.label, b.w - b.pad - 4, y - 3);
      }
    }
  }

  private drawSampleBars(samples: LatencySample[], b: TimelineBounds): void {
    const maxDisplay = 20;
    const recent = samples.slice(-maxDisplay);
    const barW = Math.max(8, Math.floor(b.plotW / maxDisplay) - 6);

    recent.forEach((sample, idx) => {
      const x = b.pad + idx * (barW + 6) + 4;
      const barH = (Math.min(sample.latencyMs, b.maxMs) / b.maxMs) * b.plotH;
      const y = b.h - b.pad - barH;

      let color = '#22c55e';
      if (sample.latencyMs > 35) color = '#ef4444';
      else if (sample.latencyMs > 20) color = '#f59e0b';
      else if (sample.latencyMs > 10) color = '#3b82f6';

      this.ctx.fillStyle = color;
      this.ctx.beginPath();
      this.ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
      this.ctx.fill();

      this.ctx.fillStyle = '#94a3b8';
      this.ctx.font = '500 9px system-ui';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(`${sample.latencyMs}`, x + barW / 2, y - 4);
    });
  }
}
