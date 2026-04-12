export class MovingAverage {
  private window: number[] = [];
  private readonly size: number;

  constructor(size: number = 20) {
    this.size = size;
  }

  public next(value: number): number {
    this.window.push(value);
    if (this.window.length > this.size) {
      this.window.shift();
    }
    return this.window.reduce((acc, val) => acc + val, 0) / this.window.length;
  }

  public reset(): void {
    this.window = [];
  }
}
