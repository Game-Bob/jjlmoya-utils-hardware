export interface LatencySample {
  id: number;
  timestamp: number;
  latencyMs: number;
  inputType: 'pointer' | 'key';
  keyName?: string;
}

export interface LatencyStats {
  count: number;
  avgMs: number;
  minMs: number;
  maxMs: number;
  jitterMs: number;
  grade: 'ultra-fast' | 'fast' | 'moderate' | 'high';
}

export class StatsCalculator {
  public static calculateStats(samples: LatencySample[]): LatencyStats {
    if (samples.length === 0) {
      return this.createEmptyStats();
    }

    const latencies = samples.map((s) => s.latencyMs);
    const count = latencies.length;
    const minMs = Math.min(...latencies);
    const maxMs = Math.max(...latencies);
    const sum = latencies.reduce((acc, val) => acc + val, 0);
    const avgMs = sum / count;

    const stdDev = this.calculateStdDev(latencies, avgMs, count);
    const grade = this.determineGrade(avgMs);

    return {
      count,
      avgMs: Number(avgMs.toFixed(2)),
      minMs: Number(minMs.toFixed(2)),
      maxMs: Number(maxMs.toFixed(2)),
      jitterMs: Number(stdDev.toFixed(2)),
      grade,
    };
  }

  private static createEmptyStats(): LatencyStats {
    return {
      count: 0,
      avgMs: 0,
      minMs: 0,
      maxMs: 0,
      jitterMs: 0,
      grade: 'ultra-fast',
    };
  }

  private static calculateStdDev(latencies: number[], avgMs: number, count: number): number {
    let varianceSum = 0;
    for (const val of latencies) {
      varianceSum += Math.pow(val - avgMs, 2);
    }
    return Math.sqrt(varianceSum / count);
  }

  private static determineGrade(avgMs: number): 'ultra-fast' | 'fast' | 'moderate' | 'high' {
    if (avgMs > 35) return 'high';
    if (avgMs > 20) return 'moderate';
    if (avgMs > 10) return 'fast';
    return 'ultra-fast';
  }
}
