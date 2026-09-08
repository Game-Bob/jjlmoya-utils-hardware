import { describe, expect, it } from 'vitest';
import { calculateRuntimeSummary, clamp, getDefaultRuntimeInputs } from './logic';

describe('laptop battery runtime logic', () => {
  it('calculates current capacity, available energy, and runtime per workload', () => {
    const summary = calculateRuntimeSummary({
      designCapacityWh: 60,
      batteryHealthPercent: 80,
      chargePercent: 50,
      scenarios: [
        { id: 'light', powerWatts: 10 },
        { id: 'intense', powerWatts: 40 },
      ],
    });

    expect(summary.fullChargeCapacityWh).toBe(48);
    expect(summary.availableEnergyWh).toBe(24);
    expect(summary.scenarios[0]?.runtimeHours).toBe(2.4);
    expect(summary.scenarios[1]?.runtimeHours).toBe(0.6);
    expect(summary.shortestScenarioId).toBe('intense');
  });

  it('clamps invalid numeric inputs to safe calculation bounds', () => {
    const summary = calculateRuntimeSummary({
      designCapacityWh: Number.NaN,
      batteryHealthPercent: 140,
      chargePercent: -5,
      scenarios: [{ id: 'custom', powerWatts: 0 }],
    });

    expect(summary.fullChargeCapacityWh).toBe(60);
    expect(summary.availableEnergyWh).toBe(0);
    expect(summary.scenarios[0]?.powerWatts).toBe(1);
    expect(summary.scenarios[0]?.runtimeHours).toBe(0);
  });

  it('returns a useful default planning state', () => {
    const defaults = getDefaultRuntimeInputs();
    expect(defaults.scenarios).toHaveLength(3);
    expect(clamp(4, 0, 3)).toBe(3);
    expect(clamp(-1, 0, 3)).toBe(0);
    expect(clamp(2, 0, 3)).toBe(2);
  });
});
