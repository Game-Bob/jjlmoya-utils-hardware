export type MeasurementDuration = 5000 | 10000 | 20000;

export interface MeasurementStats {
  samples: number;
  elapsedMs: number;
  observedHz: number;
  averageIntervalMs: number;
  medianIntervalMs: number;
  jitterMs: number;
  minimumIntervalMs: number;
  maximumIntervalMs: number;
}

const DEFAULT_DURATION: MeasurementDuration = 10000;

export function normalizeDuration(value: number): MeasurementDuration {
  if (value === 5000 || value === 20000) return value;
  return DEFAULT_DURATION;
}

export function percentile(values: number[], ratio: number): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((left, right) => left - right);
  const position = Math.min(1, Math.max(0, ratio)) * (sorted.length - 1);
  const lower = Math.floor(position);
  const upper = Math.ceil(position);
  const fraction = position - lower;
  const lowerValue = sorted[lower] ?? 0;
  const upperValue = sorted[upper] ?? lowerValue;
  return lowerValue + (upperValue - lowerValue) * fraction;
}

export function trimmedMean(values: number[], trimRatio = 0.1): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((left, right) => left - right);
  const trim = Math.min(Math.floor(sorted.length * trimRatio), Math.floor((sorted.length - 1) / 2));
  const kept = sorted.slice(trim, sorted.length - trim);
  return kept.reduce((sum, value) => sum + value, 0) / kept.length;
}

export function validIntervals(values: number[]): number[] {
  return values.filter((value) => Number.isFinite(value) && value > 0 && value <= 250);
}

export function calculateStats(values: number[], elapsedMs: number): MeasurementStats {
  const intervals = validIntervals(values);
  const averageIntervalMs = trimmedMean(intervals);
  const low = percentile(intervals, 0.05);
  const high = percentile(intervals, 0.95);
  return {
    samples: intervals.length,
    elapsedMs: Math.max(0, elapsedMs),
    observedHz: averageIntervalMs > 0 ? 1000 / averageIntervalMs : 0,
    averageIntervalMs,
    medianIntervalMs: percentile(intervals, 0.5),
    jitterMs: Math.max(0, high - low),
    minimumIntervalMs: percentile(intervals, 0),
    maximumIntervalMs: percentile(intervals, 1),
  };
}

export function stickMagnitude(axes: readonly number[]): number {
  if (axes.length < 2) return 0;
  return Math.min(1, Math.hypot(axes[0] ?? 0, axes[1] ?? 0));
}

export function hasIntentionalMovement(axes: readonly number[], threshold = 0.22): boolean {
  return stickMagnitude(axes) >= threshold;
}

export function progressRatio(elapsedMs: number, durationMs: number): number {
  if (durationMs <= 0) return 0;
  return Math.min(1, Math.max(0, elapsedMs / durationMs));
}

export function formatMetric(value: number, digits: number): string {
  if (!Number.isFinite(value) || value <= 0) return '';
  return value.toFixed(digits);
}
