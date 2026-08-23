import { describe, expect, it } from 'vitest';
import {
  buildCameraMetrics,
  calculateObservedFps,
  classifyFrameDelivery,
  formatAspectRatio,
  getOrientation,
  median,
} from './logic';

describe('webcam tester logic', () => {
  it('calculates medians for empty, odd and even samples', () => {
    expect(median([])).toBe(0);
    expect(median([8, 2, 4])).toBe(4);
    expect(median([10, 2, 6, 4])).toBe(5);
  });

  it('calculates observed frame rate from positive intervals', () => {
    expect(calculateObservedFps([])).toBe(0);
    expect(calculateObservedFps([0, 40, 20, 60])).toBeCloseTo(25);
  });

  it('describes common and uncommon aspect ratios', () => {
    expect(formatAspectRatio(1920, 1080)).toBe('16:9');
    expect(formatAspectRatio(640, 480)).toBe('4:3');
    expect(formatAspectRatio(1500, 1000)).toBe('3:2');
    expect(formatAspectRatio(1000, 1000)).toBe('1:1');
    expect(formatAspectRatio(1080, 1920)).toBe('9:16');
    expect(formatAspectRatio(1234, 777)).toBe('1.59:1');
    expect(formatAspectRatio(0, 777)).toBe('');
  });

  it('detects video orientation', () => {
    expect(getOrientation(1920, 1080)).toBe('landscape');
    expect(getOrientation(1080, 1920)).toBe('portrait');
    expect(getOrientation(1000, 1000)).toBe('square');
  });

  it('classifies observed delivery against configured rate', () => {
    expect(classifyFrameDelivery(0, 30)).toBe('pending');
    expect(classifyFrameDelivery(30, 0)).toBe('pending');
    expect(classifyFrameDelivery(29, 30)).toBe('stable');
    expect(classifyFrameDelivery(20, 30)).toBe('reduced');
    expect(classifyFrameDelivery(10, 30)).toBe('constrained');
  });

  it('builds a complete camera metric set', () => {
    const metrics = buildCameraMetrics({
      width: 1280,
      height: 720,
      configuredFps: 30,
      frameTimestamps: [0, 33.3, 66.6, 99.9],
    });
    expect(metrics.resolution).toBe('1280 x 720');
    expect(metrics.aspectRatio).toBe('16:9');
    expect(metrics.orientation).toBe('landscape');
    expect(metrics.observedFps).toBeCloseTo(30.03, 1);
    expect(metrics.frameDelivery).toBe('stable');
  });

  it('leaves unavailable resolution values empty', () => {
    const metrics = buildCameraMetrics({
      width: 0,
      height: 0,
      configuredFps: 0,
      frameTimestamps: [],
    });
    expect(metrics.resolution).toBe('');
    expect(metrics.frameDelivery).toBe('pending');
  });
});
