import { describe, expect, it } from 'vitest';
import {
  DBFS_FLOOR,
  calculateDominantFrequency,
  calculateNoiseFloor,
  calculateRms,
  calculateSignalMetrics,
  clamp,
  classifySignal,
  toDbfs,
} from './logic';

const metricsAt = (rmsDbfs: number, peakDbfs: number, clippedSamples = 0) => ({
  rms: 0.1,
  peak: 0.2,
  rmsDbfs,
  peakDbfs,
  clippedSamples,
});

describe('microphone signal analysis', () => {
  it('clamps values to the requested interval', () => {
    expect(clamp(-2, 0, 1)).toBe(0);
    expect(clamp(0.4, 0, 1)).toBe(0.4);
    expect(clamp(4, 0, 1)).toBe(1);
  });

  it('calculates RMS and handles an empty buffer', () => {
    expect(calculateRms(new Float32Array())).toBe(0);
    expect(calculateRms(new Float32Array([1, -1]))).toBe(1);
  });

  it('converts amplitude to bounded dBFS', () => {
    expect(toDbfs(1)).toBe(0);
    expect(toDbfs(0)).toBe(DBFS_FLOOR);
    expect(toDbfs(2)).toBe(0);
  });

  it('calculates level, peak, and clipped sample count', () => {
    const result = calculateSignalMetrics(new Float32Array([0.5, -1, 0.5, 0]));
    expect(result.rms).toBeCloseTo(Math.sqrt(0.375));
    expect(result.peak).toBe(1);
    expect(result.peakDbfs).toBe(0);
    expect(result.clippedSamples).toBe(1);
  });

  it('classifies each practical signal state', () => {
    expect(classifySignal(metricsAt(-20, -3, 1))).toBe('clipping');
    expect(classifySignal(metricsAt(-20, -0.05))).toBe('clipping');
    expect(classifySignal(metricsAt(-70, -50))).toBe('silent');
    expect(classifySignal(metricsAt(-40, -20))).toBe('quiet');
    expect(classifySignal(metricsAt(-20, -3))).toBe('hot');
    expect(classifySignal(metricsAt(-20, -12))).toBe('healthy');
  });

  it('finds the strongest audible analysis bin', () => {
    const spectrum = new Float32Array([-90, -80, -10, -40, -30]);
    expect(calculateDominantFrequency(spectrum, 8000, 8)).toBe(2000);
  });

  it('returns zero when a dominant frequency cannot be found', () => {
    expect(calculateDominantFrequency(new Float32Array(), 48000, 2048)).toBe(0);
    expect(calculateDominantFrequency(new Float32Array(2), 0, 2048)).toBe(0);
    expect(calculateDominantFrequency(new Float32Array(2), 48000, 0)).toBe(0);
    expect(calculateDominantFrequency(new Float32Array(1), 48000, 2048)).toBe(0);
  });

  it('combines room tone readings as signal power', () => {
    expect(calculateNoiseFloor([])).toBe(DBFS_FLOOR);
    expect(calculateNoiseFloor([0.1, 0.1])).toBeCloseTo(-20);
  });
});
