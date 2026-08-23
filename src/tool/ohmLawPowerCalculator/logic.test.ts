import { describe, expect, it } from 'vitest';
import { createEmptyState, pairKey, solveOhmsLaw, type OhmState } from './logic';

describe('Ohm law and power solver', () => {
  it.each([
    ['voltage-current', ['voltage', 'current'], { voltage: 12, current: 2 }, { resistance: 6, power: 24 }],
    ['voltage-resistance', ['voltage', 'resistance'], { voltage: 12, resistance: 6 }, { current: 2, power: 24 }],
    ['voltage-power', ['voltage', 'power'], { voltage: 12, power: 24 }, { current: 2, resistance: 6 }],
    ['current-resistance', ['current', 'resistance'], { current: 2, resistance: 6 }, { voltage: 12, power: 24 }],
    ['current-power', ['current', 'power'], { current: 2, power: 24 }, { voltage: 12, resistance: 6 }],
    ['resistance-power', ['resistance', 'power'], { resistance: 6, power: 24 }, { voltage: 12, current: 2 }],
  ])('solves the %s pair', (_key, known, values, expected) => {
    const state = { known, values: { voltage: null, current: null, resistance: null, power: null, ...values } } as OhmState;
    const result = solveOhmsLaw(state);
    expect(result?.values).toMatchObject({ ...values, ...expected });
  });

  it('rejects blank and non-positive inputs', () => {
    const empty = createEmptyState();
    expect(solveOhmsLaw(empty)).toBeNull();
    expect(solveOhmsLaw({ ...empty, values: { ...empty.values, voltage: 0, current: 2 } })).toBeNull();
    expect(solveOhmsLaw({ ...empty, values: { ...empty.values, voltage: -1, current: 2 } })).toBeNull();
  });

  it('normalizes pair keys for formula selection', () => {
    expect(pairKey(['power', 'voltage'])).toBe('voltage-power');
  });
});
