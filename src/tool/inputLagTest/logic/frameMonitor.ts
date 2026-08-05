export interface FrameStats {
  fps: number;
  frameTimeMs: number;
}

export type FrameCallback = (stats: FrameStats) => void;

export class FrameMonitor {
  private lastTime: number = 0;
  private frameCount: number = 0;
  private animId: number | null = null;
  private onFrameUpdate: FrameCallback | null = null;
  private currentFps: number = 0;
  private currentFrameTime: number = 0;

  constructor(onUpdate?: FrameCallback) {
    if (onUpdate) {
      this.onFrameUpdate = onUpdate;
    }
  }

  public start(): void {
    if (this.animId !== null) {
      return;
    }
    this.lastTime = performance.now();
    this.frameCount = 0;
    this.loop();
  }

  public stop(): void {
    if (this.animId !== null) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  private loop = (): void => {
    const now = performance.now();
    this.frameCount++;

    const delta = now - this.lastTime;
    if (delta >= 500) {
      this.currentFps = Math.round((this.frameCount * 1000) / delta);
      this.currentFrameTime = Number((1000 / Math.max(1, this.currentFps)).toFixed(2));

      if (this.onFrameUpdate) {
        this.onFrameUpdate({
          fps: this.currentFps,
          frameTimeMs: this.currentFrameTime,
        });
      }

      this.frameCount = 0;
      this.lastTime = now;
    }

    this.animId = requestAnimationFrame(this.loop);
  };
}
