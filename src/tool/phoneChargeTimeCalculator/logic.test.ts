import { describe, expect, it } from 'vitest';
import { calculatePhoneChargeTime, validatePhoneChargeInput, type PhoneChargeTimeInput } from './logic';

const validInput: PhoneChargeTimeInput = {
  capacityMah: 4000,
  currentPercent: 20,
  targetPercent: 80,
  chargerWatts: 20,
  efficiencyPercent: 85,
};

describe('phone charge time calculator', () => {
  it('estimates energy and time from the battery and charger inputs', () => {
    const result = calculatePhoneChargeTime(validInput);
    expect(result).not.toBeNull();
    expect(result?.capacityWh).toBeCloseTo(15.4, 6);
    expect(result?.energyNeededWh).toBeCloseTo(9.24, 6);
    expect(result?.estimatedMinutes).toBeGreaterThan(30);
    expect(result?.estimatedMinutes).toBeLessThan(60);
  });

  it('adds a taper allowance for a target above 70 percent', () => {
    const result = calculatePhoneChargeTime(validInput);
    expect(result?.taperFactor).toBe(1.0833333333333333);
  });

  it('returns faster scenarios for higher charger power', () => {
    const result = calculatePhoneChargeTime(validInput);
    expect(result).not.toBeNull();
    const scenarios = result!.scenarios;
    expect(scenarios.map((scenario) => scenario.watts)).toEqual([5, 15, 30]);
    expect(scenarios[0]!.minutes).toBeGreaterThan(scenarios[1]!.minutes);
    expect(scenarios[1]!.minutes).toBeGreaterThan(scenarios[2]!.minutes);
  });

  it('rejects an impossible target order', () => {
    const validation = validatePhoneChargeInput({ ...validInput, targetPercent: 20 });
    expect(validation).toEqual({ valid: false, field: 'target', reason: 'target-order' });
    expect(calculatePhoneChargeTime({ ...validInput, targetPercent: 20 })).toBeNull();
  });

  it.each([
    [{ ...validInput, capacityMah: 0 }, 'capacity'],
    [{ ...validInput, currentPercent: 101 }, 'current'],
    [{ ...validInput, chargerWatts: -1 }, 'power'],
    [{ ...validInput, efficiencyPercent: 40 }, 'efficiency'],
  ] as const)('rejects invalid ranges and empty values', (input, reason) => {
    expect(validatePhoneChargeInput(input).reason).toBe(reason);
  });
});
