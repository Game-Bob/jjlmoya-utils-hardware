import { describe, expect, it } from 'vitest';
import { allowedColorsForBand, calculateFromColors, calculateFromSmd, calculateFromTarget, defaultColorsForBandCount, formatOhms } from './logic';

describe('resistor color code calculations', () => {
  it('decodes a four-band resistor', () => {
    const result = calculateFromColors({ bandCount: 4, colors: ['yellow', 'violet', 'red', 'gold'] });
    expect(result).toMatchObject({ valid: true, valueOhms: 4700, tolerancePercent: 5, minOhms: 4465, maxOhms: 4935 });
  });

  it('decodes five and six band precision resistors', () => {
    const five = calculateFromColors({ bandCount: 5, colors: ['brown', 'black', 'black', 'red', 'brown'] });
    const six = calculateFromColors({ bandCount: 6, colors: ['brown', 'black', 'black', 'red', 'brown', 'red'] });
    expect(five.valueOhms).toBe(10000);
    expect(five.tolerancePercent).toBe(1);
    expect(six.tempcoPpm).toBe(50);
  });

  it('uses twenty percent tolerance for a three-band code', () => {
    const result = calculateFromColors({ bandCount: 3, colors: ['red', 'violet', 'brown'] });
    expect(result).toMatchObject({ valueOhms: 270, tolerancePercent: 20, minOhms: 216, maxOhms: 324 });
  });

  it('builds a reverse code from a target value', () => {
    const result = calculateFromTarget({ bandCount: 4, targetOhms: 4700, tolerancePercent: 5 });
    expect(result.colors).toEqual(['yellow', 'violet', 'red', 'gold']);
    expect(result.requestedOhms).toBe(4700);
  });

  it('supports decimal SMD notation and rejects malformed codes', () => {
    expect(calculateFromSmd({ code: '4R7' }).valueOhms).toBe(4.7);
    expect(calculateFromSmd({ code: '472' }).valueOhms).toBe(4700);
    expect(calculateFromSmd({ code: 'oops' }).valid).toBe(false);
  });

  it('formats common resistance units', () => {
    expect(formatOhms(4.7)).toBe('4.7 Ω');
    expect(formatOhms(4700)).toBe('4.7 kΩ');
    expect(formatOhms(4_700_000)).toBe('4.7 MΩ');
  });

  it('only allows colors supported by each band role', () => {
    expect(allowedColorsForBand(6, 4)).not.toContain('yellow');
    expect(allowedColorsForBand(6, 5)).not.toContain('white');
    expect(allowedColorsForBand(6, 5)).toContain('yellow');
    expect(calculateFromColors({ bandCount: 6, colors: defaultColorsForBandCount(6) }).valid).toBe(true);
  });
});

