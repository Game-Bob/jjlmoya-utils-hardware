import { describe, expect, it } from 'vitest';
import { calculateDivider, defaultDividerInput, formatPower, formatResistance, type DividerInput } from './logic';

describe('voltage divider logic', () => {
  it('predicts a midpoint divider', () => {
    const result = calculateDivider(defaultDividerInput());
    expect(result.valid).toBe(true);
    expect(result.outputVolts).toBeCloseTo(6);
    expect(result.currentMilliamps).toBeCloseTo(0.6);
    expect(result.topPowerWatts).toBeCloseTo(0.0036);
    expect(result.bottomPowerWatts).toBeCloseTo(0.0036);
  });

  it('solves the lower resistance for a target output', () => {
    const input: DividerInput = { mode: 'target', supplyVolts: 12, topOhms: 10_000, bottomOhms: 0, targetVolts: 4 };
    const result = calculateDivider(input);
    expect(result.valid).toBe(true);
    expect(result.bottomOhms).toBeCloseTo(5_000);
    expect(result.outputVolts).toBeCloseTo(4);
  });

  it('rejects a target at or above the supply', () => {
    const input: DividerInput = { ...defaultDividerInput(), mode: 'target', targetVolts: 12 };
    expect(calculateDivider(input).status).toBe('target-invalid');
  });

  it('rejects nonpositive circuit values', () => {
    const input: DividerInput = { ...defaultDividerInput(), topOhms: 0 };
    expect(calculateDivider(input).status).toBe('invalid');
  });

  it('formats engineering values for the result scene', () => {
    expect(formatResistance(2_200_000)).toBe('2.2 MΩ');
    expect(formatResistance(4_700)).toBe('4.7 kΩ');
    expect(formatPower(0.0004)).toBe('400 µW');
    expect(formatPower(0.25)).toBe('250 mW');
  });
});
