import type { LatencySample } from './statsCalculator';

interface ChartDimensions {
  w: number;
  h: number;
  pad: number;
}

export class DistributionChart {
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
    const dim: ChartDimensions = {
      w: this.canvas.width,
      h: this.canvas.height,
      pad: 25,
    };

    this.ctx.clearRect(0, 0, dim.w, dim.h);

    if (samples.length < 3) {
      this.drawEmptyMessage(dim.w, dim.h);
      return;
    }

    const latencies = samples.map((s) => s.latencyMs);
    const minVal = Math.floor(Math.min(...latencies));
    const maxVal = Math.ceil(Math.max(...latencies));
    const range = Math.max(10, maxVal - minVal + 4);

    const { bins, maxBinVal } = this.computeBins(latencies, minVal, range);
    this.drawHistogramBars(bins, maxBinVal, dim);
    this.drawAverageLine(latencies, minVal, range, dim);
  }

  private drawEmptyMessage(width: number, height: number): void {
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '500 12px system-ui';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Collect at least 3 samples for latency distribution curve', width / 2, height / 2);
  }

  private computeBins(latencies: number[], minVal: number, range: number): { bins: number[]; maxBinVal: number } {
    const binCount = 12;
    const binSize = range / binCount;
    const bins = new Array<number>(binCount).fill(0);

    for (const val of latencies) {
      const idx = Math.min(binCount - 1, Math.floor((val - (minVal - 2)) / binSize));
      if (idx >= 0) {
        bins[idx] = (bins[idx] ?? 0) + 1;
      }
    }

    return { bins, maxBinVal: Math.max(1, ...bins) };
  }

  private drawHistogramBars(bins: number[], maxBinVal: number, dim: ChartDimensions): void {
    const plotWidth = dim.w - dim.pad * 2;
    const plotHeight = dim.h - dim.pad * 2;
    const barWidth = plotWidth / bins.length;

    bins.forEach((binVal, i) => {
      const x = dim.pad + i * barWidth;
      const barH = (binVal / maxBinVal) * plotHeight;
      const y = dim.h - dim.pad - barH;

      this.ctx.fillStyle = 'rgba(59, 130, 246, 0.35)';
      this.ctx.fillRect(x + 2, y, barWidth - 4, barH);
      this.ctx.strokeStyle = '#3b82f6';
      this.ctx.lineWidth = 1;
      this.ctx.strokeRect(x + 2, y, barWidth - 4, barH);
    });
  }

  private drawAverageLine(
    latencies: number[], minVal: number, range: number, dim: ChartDimensions
  ): void {
    const avg = latencies.reduce((a, b) => a + b, 0) / latencies.length;
    const avgX = dim.pad + ((avg - (minVal - 2)) / range) * (dim.w - dim.pad * 2);

    this.ctx.beginPath();
    this.ctx.setLineDash([3, 3]);
    this.ctx.moveTo(avgX, dim.pad);
    this.ctx.lineTo(avgX, dim.h - dim.pad);
    this.ctx.strokeStyle = '#22c55e';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    this.ctx.fillStyle = '#22c55e';
    this.ctx.font = '600 10px system-ui';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`AVG ${avg.toFixed(1)}ms`, avgX, dim.pad - 5);
  }
}
