import type { LatencyStats } from './statsCalculator';

export class ReportGenerator {
  public static generateReport(stats: LatencyStats, fps: number, frameTimeMs: number): string {
    const lines = [
      'Input Lag & System Latency Benchmark Report',
      '==========================================',
      `Average Latency : ${stats.avgMs} ms`,
      `Minimum Latency : ${stats.minMs} ms`,
      `Maximum Latency : ${stats.maxMs} ms`,
      `Latency Jitter  : ${stats.jitterMs} ms`,
      `Samples Taken   : ${stats.count}`,
      `Latency Rating  : ${stats.grade.toUpperCase()}`,
      `Measured FPS    : ${fps}`,
      `Frame Duration  : ${frameTimeMs} ms`,
      `Benchmark Time  : ${new Date().toISOString()}`,
      '==========================================',
      'Tested via Hardware Input Lag Utility',
    ];
    return lines.join('\n');
  }
}
