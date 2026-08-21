import { describe, expect, it } from 'vitest';
import { applyColorPreset, bandMeaning, bandsForOhms, calculateLedResistor, defaultLedInput, formatMilliamps, formatOhms, formatWatts, LED_PRESETS, nearestStandardOhms, recommendedWattage, seriesLabel } from './logic';

describe('led resistor calculations', () => {
  it('sizes a red indicator LED on a 5 V rail to 150 ohms', () => {
    const result = calculateLedResistor(defaultLedInput());
    expect(result).toMatchObject({
      valid: true,
      message: 'ready',
      exactOhms: 150,
      standardOhms: 150,
      resistorDropVolts: 3,
      actualMilliamps: 20,
      resistorWatts: 0.06,
      recommendedWatts: 0.125,
    });
    expect(result.bands).toEqual(['brown', 'green', 'brown', 'gold']);
  });

  it('rounds a 5 V blue LED to the nearest E24 value', () => {
    const result = calculateLedResistor({ ...defaultLedInput(), color: 'blue', forwardVolts: 3.2 });
    expect(result.exactOhms).toBeCloseTo(90);
    expect(result.standardOhms).toBe(91);
    expect(result.message).toBe('ready');
    expect(result.actualMilliamps).toBeCloseTo(19.78, 1);
  });

  it('picks the higher preferred value on a tie', () => {
    expect(nearestStandardOhms(65, 'e24')).toBe(68);
    expect(nearestStandardOhms(11, 'e12')).toBe(12);
  });

  it('wraps to the next decade when closer than the top E24 value', () => {
    expect(nearestStandardOhms(96, 'e24')).toBe(100);
    expect(bandsForOhms(100, 'e24')).toEqual(['brown', 'black', 'brown', 'gold']);
  });

  it('uses a silver tolerance band for E12 parts', () => {
    const result = calculateLedResistor({ ...defaultLedInput(), series: 'e12' });
    expect(result.standardOhms).toBe(150);
    expect(result.bands[3]).toBe('silver');
  });

  it('accounts for LEDs in series', () => {
    const result = calculateLedResistor({ ...defaultLedInput(), ledCount: 2, supplyVolts: 12, forwardVolts: 3.2, color: 'white' });
    expect(result.resistorDropVolts).toBeCloseTo(5.6);
    expect(result.exactOhms).toBeCloseTo(280);
    expect(result.standardOhms).toBe(270);
  });

  it('warns when resistor voltage drop is under one volt', () => {
    const result = calculateLedResistor({ ...defaultLedInput(), supplyVolts: 3.3, forwardVolts: 3.2, color: 'blue' });
    expect(result.valid).toBe(true);
    expect(result.message).toBe('tight');
    expect(result.standardOhms).toBe(5.1);
  });

  it('warns when the resistor needs a half watt or larger rating', () => {
    const result = calculateLedResistor({ ...defaultLedInput(), supplyVolts: 12 });
    expect(result.resistorWatts).toBeCloseTo(0.196, 3);
    expect(result.recommendedWatts).toBe(0.5);
    expect(result.message).toBe('hotter');
  });

  it('flags currents above 30 mA as overdriven for indicator LEDs', () => {
    const result = calculateLedResistor({ ...defaultLedInput(), currentMilliamps: 50 });
    expect(result.actualMilliamps).toBeGreaterThan(30);
    expect(result.message).toBe('overdriven');
  });

  it('rejects a supply that cannot cover LED voltage', () => {
    const result = calculateLedResistor({ ...defaultLedInput(), supplyVolts: 3.3, forwardVolts: 3.4, color: 'uv' });
    expect(result.valid).toBe(false);
    expect(result.message).toBe('no-headroom');
  });

  it('rejects non finite or out of range inputs', () => {
    expect(calculateLedResistor({ ...defaultLedInput(), supplyVolts: 0 }).message).toBe('invalid');
    expect(calculateLedResistor({ ...defaultLedInput(), currentMilliamps: Number.NaN }).message).toBe('invalid');
    expect(calculateLedResistor({ ...defaultLedInput(), ledCount: 0 }).message).toBe('invalid');
    expect(calculateLedResistor({ ...defaultLedInput(), ledCount: 6 }).message).toBe('invalid');
  });

  it('applies color presets and formats units', () => {
    const next = applyColorPreset('blue', defaultLedInput());
    expect(next).toMatchObject({ color: 'blue', ...LED_PRESETS.blue });
    expect(formatOhms(150)).toBe('150 Ω');
    expect(formatOhms(4700)).toBe('4.7 kΩ');
    expect(formatOhms(2_200_000)).toBe('2.2 MΩ');
    expect(formatOhms(Number.NaN)).toBe('0 Ω');
    expect(formatWatts(0.06)).toBe('60 mW');
    expect(formatWatts(1.5)).toBe('1.5 W');
    expect(formatWatts(Number.NaN)).toBe('0 W');
    expect(formatMilliamps(19.78)).toBe('19.8 mA');
    expect(formatMilliamps(Number.NaN)).toBe('0 mA');
    expect(recommendedWattage(0.06)).toBe(0.125);
    expect(recommendedWattage(0.2)).toBe(0.5);
    expect(recommendedWattage(4)).toBe(5);
  });

  it('encodes gold and silver multipliers for fractional ohms', () => {
    expect(bandsForOhms(4.7, 'e24')).toEqual(['yellow', 'violet', 'gold', 'gold']);
    expect(bandsForOhms(0.47, 'e12')).toEqual(['yellow', 'violet', 'silver', 'silver']);
    expect(bandsForOhms(10_000, 'e24')).toEqual(['brown', 'black', 'orange', 'gold']);
    expect(bandsForOhms(99.6, 'e24')).toEqual(['brown', 'black', 'brown', 'gold']);
    expect(bandsForOhms(1e12, 'e24')[2]).toBe('black');
  });

  it('explains band digits, multipliers, and tolerance', () => {
    expect(bandMeaning('brown', 'digit')).toBe('1');
    expect(bandMeaning('green', 'digit')).toBe('5');
    expect(bandMeaning('brown', 'multiplier')).toBe('x10');
    expect(bandMeaning('gold', 'multiplier')).toBe('x0.1');
    expect(bandMeaning('gold', 'tolerance')).toBe('5%');
    expect(bandMeaning('silver', 'tolerance')).toBe('10%');
    expect(seriesLabel('e24')).toBe('E24');
  });
});
