import { describe, expect, it } from 'vitest';
import {
  calculateStats,
  formatMetric,
  hasIntentionalMovement,
  normalizeDuration,
  percentile,
  progressRatio,
  stickMagnitude,
  trimmedMean,
  validIntervals,
} from './logic';

describe('gamepad polling rate logic', () => {
  it('normalizes supported durations', () => {
    expect(normalizeDuration(5000)).toBe(5000);
    expect(normalizeDuration(10000)).toBe(10000);
    expect(normalizeDuration(20000)).toBe(20000);
    expect(normalizeDuration(12000)).toBe(10000);
  });

  it('calculates interpolated percentiles and clamps the ratio', () => {
    expect(percentile([], 0.5)).toBe(0);
    expect(percentile([1, 2, 4], 0.5)).toBe(2);
    expect(percentile([1, 3], 0.25)).toBe(1.5);
    expect(percentile([2, 4], -1)).toBe(2);
    expect(percentile([2, 4], 2)).toBe(4);
  });

  it('uses a trimmed mean without removing every sample', () => {
    expect(trimmedMean([])).toBe(0);
    expect(trimmedMean([4])).toBe(4);
    expect(trimmedMean([1, 2, 3, 100], 0.25)).toBe(2.5);
  });

  it('filters unusable timestamp intervals', () => {
    expect(validIntervals([1, 0, -1, 250, 251, Number.NaN, Number.POSITIVE_INFINITY])).toEqual([1, 250]);
  });

  it('summarizes stable timestamp intervals', () => {
    const stats = calculateStats([4, 4, 4, 4], 1000);
    expect(stats.samples).toBe(4);
    expect(stats.elapsedMs).toBe(1000);
    expect(stats.observedHz).toBe(250);
    expect(stats.averageIntervalMs).toBe(4);
    expect(stats.medianIntervalMs).toBe(4);
    expect(stats.jitterMs).toBe(0);
    expect(stats.minimumIntervalMs).toBe(4);
    expect(stats.maximumIntervalMs).toBe(4);
  });

  it('returns empty statistics safely', () => {
    const stats = calculateStats([], -10);
    expect(stats.samples).toBe(0);
    expect(stats.elapsedMs).toBe(0);
    expect(stats.observedHz).toBe(0);
    expect(stats.jitterMs).toBe(0);
  });

  it('measures the first stick magnitude', () => {
    expect(stickMagnitude([])).toBe(0);
    expect(stickMagnitude([0.3, 0.4])).toBe(0.5);
    expect(stickMagnitude([1, 1])).toBe(1);
    expect(hasIntentionalMovement([0.1, 0.1])).toBe(false);
    expect(hasIntentionalMovement([0.3, 0], 0.3)).toBe(true);
  });

  it('clamps progress and handles invalid duration', () => {
    expect(progressRatio(5, 0)).toBe(0);
    expect(progressRatio(-5, 10)).toBe(0);
    expect(progressRatio(5, 10)).toBe(0.5);
    expect(progressRatio(15, 10)).toBe(1);
  });

  it('formats positive finite metrics only', () => {
    expect(formatMetric(125.456, 1)).toBe('125.5');
    expect(formatMetric(0, 1)).toBe('');
    expect(formatMetric(Number.NaN, 1)).toBe('');
  });
});
