export type AudioDelayMode = 'speakers' | 'wired' | 'bluetooth' | 'video';

export type ConfidenceLevel = 'manual' | 'low' | 'medium' | 'high';

export interface LatencySummary {
  mode: AudioDelayMode;
  latencyMs: number | null;
  alignmentMs: number;
  jitterMs: number | null;
  samples: number;
  confidence: ConfidenceLevel;
}

export function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

export function median(values: number[]): number | null {
  if (values.length === 0) return null;
  const ordered = [...values].sort((left, right) => left - right);
  const middle = Math.floor(ordered.length / 2);
  if (ordered.length % 2 === 1) return ordered[middle]!;
  return (ordered[middle - 1]! + ordered[middle]!) / 2;
}

export function percentile(values: number[], ratio: number): number | null {
  if (values.length === 0) return null;
  const ordered = [...values].sort((left, right) => left - right);
  const position = (ordered.length - 1) * clamp(ratio, 0, 1);
  const lower = Math.floor(position);
  const upper = Math.ceil(position);
  if (lower === upper) return ordered[lower]!;
  const weight = position - lower;
  return ordered[lower]! + (ordered[upper]! - ordered[lower]!) * weight;
}

export function formatMilliseconds(value: number | null): string {
  if (value === null || !Number.isFinite(value)) return 'Not measured';
  return `${Math.round(value)} ms`;
}

export function formatSignedMilliseconds(value: number): string {
  const rounded = Math.round(value);
  if (rounded === 0) return '0 ms';
  return `${rounded > 0 ? '+' : ''}${rounded} ms`;
}

export function confidenceFor(samples: number, jitterMs: number | null): ConfidenceLevel {
  if (samples >= 6 && jitterMs !== null && jitterMs <= 18) return 'high';
  if (samples >= 3 && jitterMs !== null && jitterMs <= 40) return 'medium';
  return 'low';
}

export function summarizeMeasurements(
  mode: AudioDelayMode,
  measurements: number[],
  alignmentMs: number,
): LatencySummary {
  const latencyMs = median(measurements);
  const low = percentile(measurements, 0.1);
  const high = percentile(measurements, 0.9);
  const jitterMs = low === null || high === null ? null : high - low;
  return {
    mode,
    latencyMs,
    alignmentMs,
    jitterMs,
    samples: measurements.length,
    confidence: confidenceFor(measurements.length, jitterMs),
  };
}

export function manualSummary(mode: AudioDelayMode, alignmentMs: number): LatencySummary {
  return {
    mode,
    latencyMs: null,
    alignmentMs,
    jitterMs: null,
    samples: 0,
    confidence: 'manual',
  };
}
