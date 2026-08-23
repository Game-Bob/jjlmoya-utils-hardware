export const DBFS_FLOOR = -96;

export type SignalState = 'silent' | 'quiet' | 'healthy' | 'hot' | 'clipping';

export interface SignalMetrics {
  rms: number;
  peak: number;
  rmsDbfs: number;
  peakDbfs: number;
  clippedSamples: number;
}

export const clamp = (value: number, minimum: number, maximum: number): number => (
  Math.min(Math.max(value, minimum), maximum)
);

export const calculateRms = (samples: Float32Array): number => {
  if (samples.length === 0) return 0;
  const sum = samples.reduce((total, sample) => total + sample * sample, 0);
  return Math.sqrt(sum / samples.length);
};

export const toDbfs = (amplitude: number): number => {
  if (amplitude <= 0) return DBFS_FLOOR;
  return clamp(20 * Math.log10(amplitude), DBFS_FLOOR, 0);
};

export const calculateSignalMetrics = (samples: Float32Array): SignalMetrics => {
  const peak = samples.reduce((maximum, sample) => Math.max(maximum, Math.abs(sample)), 0);
  const clippedSamples = samples.reduce((count, sample) => count + Number(Math.abs(sample) >= 0.99), 0);
  const rms = calculateRms(samples);
  return { rms, peak, rmsDbfs: toDbfs(rms), peakDbfs: toDbfs(peak), clippedSamples };
};

const hasInvalidAnalysisInput = (values: Float32Array, sampleRate: number, fftSize: number): boolean => (
  values.length === 0 || sampleRate <= 0 || fftSize <= 0
);

export const classifySignal = (metrics: SignalMetrics): SignalState => {
  if (metrics.clippedSamples > 0 || metrics.peakDbfs >= -0.1) return 'clipping';
  if (metrics.rmsDbfs <= -60) return 'silent';
  if (metrics.rmsDbfs < -35) return 'quiet';
  if (metrics.peakDbfs > -6) return 'hot';
  return 'healthy';
};

export const calculateDominantFrequency = (
  values: Float32Array,
  sampleRate: number,
  fftSize: number,
): number => {
  if (hasInvalidAnalysisInput(values, sampleRate, fftSize)) return 0;
  const binWidth = sampleRate / fftSize;
  const firstBin = Math.max(1, Math.ceil(60 / binWidth));
  const lastBin = Math.min(values.length - 1, Math.floor(12000 / binWidth));
  if (lastBin < firstBin) return 0;
  let strongestBin = firstBin;
  for (let index = firstBin + 1; index <= lastBin; index += 1) {
    const current = values[index] ?? DBFS_FLOOR;
    const strongest = values[strongestBin] ?? DBFS_FLOOR;
    if (current > strongest) strongestBin = index;
  }
  return strongestBin * binWidth;
};

export const calculateNoiseFloor = (rmsReadings: number[]): number => {
  if (rmsReadings.length === 0) return DBFS_FLOOR;
  const power = rmsReadings.reduce((sum, value) => sum + value * value, 0);
  return toDbfs(Math.sqrt(power / rmsReadings.length));
};
