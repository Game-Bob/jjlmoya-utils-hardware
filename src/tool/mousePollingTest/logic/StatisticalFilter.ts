export interface FilterConfig {
  maxThreshold?: number;
  stdDevMultiplier?: number;
  minSamples?: number;
}

export class StatisticalFilter {
  private samples: number[] = [];
  private readonly config: FilterConfig;

  constructor(config: FilterConfig = {}) {
    this.config = {
      maxThreshold: 1100,
      stdDevMultiplier: 2,
      minSamples: 20,
      ...config,
    };
  }

  public isOutlier(value: number): boolean {
    if (this.config.maxThreshold && value > this.config.maxThreshold) {
      return true;
    }

    if (this.samples.length < (this.config.minSamples || 20)) {
      this.samples.push(value);
      return false;
    }

    const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
    const stdDev = Math.sqrt(
      this.samples.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / this.samples.length
    );

    const isFiltered = Math.abs(value - avg) > stdDev * (this.config.stdDevMultiplier || 2.5);

    if (!isFiltered) {
      this.samples.push(value);
      if (this.samples.length > 100) this.samples.shift();
    }

    return isFiltered;
  }

  public reset(): void {
    this.samples = [];
  }
}
