export interface SweepSnapshot {
  frequencyHz: number;
  progress: number;
  elapsedSeconds: number;
}

export const SWEEP_START_HZ = 200;
export const SWEEP_END_HZ = 10;

export function getExponentialSweepFrequency(
  elapsedSeconds: number,
  durationSeconds: number,
  startHz = SWEEP_START_HZ,
  endHz = SWEEP_END_HZ,
): SweepSnapshot {
  const safeDuration = Math.max(1, durationSeconds);
  const progress = Math.min(1, Math.max(0, elapsedSeconds / safeDuration));
  const frequencyHz = startHz * Math.pow(endHz / startHz, progress);

  return {
    frequencyHz,
    progress,
    elapsedSeconds: Math.max(0, elapsedSeconds),
  };
}

export function formatFrequency(value: number): string {
  if (value >= 100) return `${Math.round(value)} Hz`;
  return `${value.toFixed(1)} Hz`;
}
