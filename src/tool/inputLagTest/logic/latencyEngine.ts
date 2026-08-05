import type { LatencySample } from './statsCalculator';

export type LatencyCallback = (sample: LatencySample) => void;

export class LatencyEngine {
  private samples: LatencySample[] = [];
  private nextId: number = 1;
  private onSampleCallback: LatencyCallback | null = null;
  private pendingInputTime: number | null = null;
  private pendingInputType: 'pointer' | 'key' | null = null;
  private pendingKeyName: string | undefined = undefined;
  private isListening: boolean = false;

  constructor(onSample?: LatencyCallback) {
    if (onSample) {
      this.onSampleCallback = onSample;
    }
  }

  public startListening(): void {
    this.isListening = true;
  }

  public stopListening(): void {
    this.isListening = false;
    this.pendingInputTime = null;
    this.pendingInputType = null;
    this.pendingKeyName = undefined;
  }

  public registerInput(type: 'pointer' | 'key', keyName?: string): void {
    if (!this.isListening || this.pendingInputTime !== null) {
      return;
    }

    this.pendingInputTime = performance.now();
    this.pendingInputType = type;
    this.pendingKeyName = keyName;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => this.processPendingSample());
    });
  }

  private processPendingSample(): void {
    if (this.pendingInputTime === null || this.pendingInputType === null) {
      return;
    }

    const renderTime = performance.now();
    const rawLatency = renderTime - this.pendingInputTime;
    const adjustedLatency = Math.max(0.1, rawLatency / 2);

    const sample: LatencySample = {
      id: this.nextId++,
      timestamp: renderTime,
      latencyMs: Number(adjustedLatency.toFixed(2)),
      inputType: this.pendingInputType,
      keyName: this.pendingKeyName,
    };

    this.samples.push(sample);
    this.pendingInputTime = null;
    this.pendingInputType = null;
    this.pendingKeyName = undefined;

    if (this.onSampleCallback) {
      this.onSampleCallback(sample);
    }
  }

  public getSamples(): LatencySample[] {
    return [...this.samples];
  }

  public clearSamples(): void {
    this.samples = [];
    this.nextId = 1;
    this.pendingInputTime = null;
    this.pendingInputType = null;
    this.pendingKeyName = undefined;
  }
}
