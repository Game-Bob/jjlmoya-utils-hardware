import { describe, expect, it } from 'vitest';
import { calculatePsuRequirement, PSU_PRESETS, type PsuInput } from './logic';

describe('calculatePsuRequirement', () => {
  it('calculates load, reserves, recommendations, and headroom', () => {
    const result = calculatePsuRequirement(PSU_PRESETS.gaming);
    expect(result.baseLoadWatts).toBe(530);
    expect(result.transientReserveWatts).toBe(53);
    expect(result.growthReserveWatts).toBe(79.5);
    expect(result.minimumPsuWatts).toBe(600);
    expect(result.recommendedPsuWatts).toBe(700);
    expect(result.headroomWatts).toBe(-50);
    expect(result.headroomPercent).toBeCloseTo(-7.142857);
  });

  it('clamps negative and invalid values to zero', () => {
    const input: PsuInput = { cpuWatts: -10, gpuWatts: Number.NaN, motherboardWatts: 20, storageWatts: 0, fansWatts: 0, peripheralsWatts: 0, currentPsuWatts: -1, transientMarginPercent: -20, growthMarginPercent: Number.NaN };
    expect(calculatePsuRequirement(input)).toEqual({ baseLoadWatts: 20, transientReserveWatts: 0, growthReserveWatts: 0, minimumPsuWatts: 50, recommendedPsuWatts: 50, currentPsuWatts: 0, headroomWatts: -50, headroomPercent: -100 });
  });

  it('caps unusually large margin values', () => {
    const input = { ...PSU_PRESETS.office, transientMarginPercent: 100, growthMarginPercent: 100 };
    const result = calculatePsuRequirement(input);
    expect(result.transientReserveWatts).toBe(107.5);
    expect(result.growthReserveWatts).toBe(107.5);
    expect(result.recommendedPsuWatts).toBe(450);
  });

  it('returns zero recommendations for an empty build', () => {
    const input: PsuInput = { cpuWatts: 0, gpuWatts: 0, motherboardWatts: 0, storageWatts: 0, fansWatts: 0, peripheralsWatts: 0, currentPsuWatts: 0, transientMarginPercent: 10, growthMarginPercent: 15 };
    expect(calculatePsuRequirement(input).recommendedPsuWatts).toBe(0);
  });
});
