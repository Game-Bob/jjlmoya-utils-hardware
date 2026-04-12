export class StatisticalFilter {
  private samples: number[] = [];
  private readonly MAX_THRESHOLD: number = 10000;
  private readonly STD_DEV_MULTIPLIER: number = 4;
  private readonly MIN_SAMPLES: number = 20;

  public isOutlier(value: number): boolean {
    if (value > this.MAX_THRESHOLD) return true;

    if (this.samples.length < this.MIN_SAMPLES) {
      this.samples.push(value);
      return false;
    }

    const total: number = this.samples.reduce((acc: number, val: number) => acc + val, 0);
    const avg: number = total / this.samples.length;
    
    const squareDiffs: number = this.samples.reduce((acc: number, val: number) => {
      const diff: number = val - avg;
      return acc + (diff * diff);
    }, 0);
    
    const stdDev: number = Math.sqrt(squareDiffs / this.samples.length);

    if (stdDev === 0) return false;

    const isFiltered: boolean = Math.abs(value - avg) > stdDev * this.STD_DEV_MULTIPLIER;

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
