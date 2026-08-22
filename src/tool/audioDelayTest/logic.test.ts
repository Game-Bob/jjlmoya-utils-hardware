import { describe, expect, it } from 'vitest';
import {
  clamp,
  confidenceFor,
  formatMilliseconds,
  formatSignedMilliseconds,
  manualSummary,
  median,
  percentile,
  summarizeMeasurements,
} from './logic';

describe('audio delay logic', () => {
  it('clamps a value to the calibration range', () => {
    expect(clamp(-400, -250, 250)).toBe(-250);
    expect(clamp(80, -250, 250)).toBe(80);
    expect(clamp(400, -250, 250)).toBe(250);
  });

  it('calculates median and percentiles without mutating input', () => {
    const values = [30, 10, 20, 40];
    expect(median(values)).toBe(25);
    expect(percentile(values, 0.75)).toBe(32.5);
    expect(values).toEqual([30, 10, 20, 40]);
    expect(median([])).toBeNull();
    expect(percentile([], 0.5)).toBeNull();
  });

  it('formats measured and signed values', () => {
    expect(formatMilliseconds(null)).toBe('Not measured');
    expect(formatMilliseconds(24.6)).toBe('25 ms');
    expect(formatSignedMilliseconds(-12.4)).toBe('-12 ms');
    expect(formatSignedMilliseconds(0)).toBe('0 ms');
    expect(formatSignedMilliseconds(12.4)).toBe('+12 ms');
  });

  it('assigns confidence from sample count and jitter', () => {
    expect(confidenceFor(6, 12)).toBe('high');
    expect(confidenceFor(3, 30)).toBe('medium');
    expect(confidenceFor(8, 50)).toBe('low');
    expect(confidenceFor(0, null)).toBe('low');
  });

  it('summarizes microphone measurements', () => {
    const result = summarizeMeasurements('bluetooth', [90, 100, 110, 100, 95, 105], 8);
    expect(result.latencyMs).toBe(100);
    expect(result.jitterMs).toBe(15);
    expect(result.samples).toBe(6);
    expect(result.alignmentMs).toBe(8);
    expect(result.confidence).toBe('high');
  });

  it('keeps manual calibration distinct from measured latency', () => {
    const result = manualSummary('video', -42);
    expect(result.latencyMs).toBeNull();
    expect(result.alignmentMs).toBe(-42);
    expect(result.confidence).toBe('manual');
  });
});
