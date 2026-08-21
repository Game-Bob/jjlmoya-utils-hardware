export type LedColor = 'infrared' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'white' | 'uv';
export type ESeries = 'e12' | 'e24';
export type BandColor = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'gray' | 'white' | 'gold' | 'silver';
export type LedMessage = 'ready' | 'tight' | 'hotter' | 'overdriven' | 'no-headroom' | 'invalid';
export type BandRole = 'digit' | 'multiplier' | 'tolerance';

export interface LedInput {
  supplyVolts: number;
  forwardVolts: number;
  currentMilliamps: number;
  ledCount: number;
  series: ESeries;
  color: LedColor;
}

export interface LedPreset {
  forwardVolts: number;
  currentMilliamps: number;
}

export interface LedResult {
  valid: boolean;
  message: LedMessage;
  exactOhms: number;
  standardOhms: number;
  resistorDropVolts: number;
  actualMilliamps: number;
  resistorWatts: number;
  recommendedWatts: number;
  brightnessRatio: number;
  bands: BandColor[];
}

export const LED_COLORS: LedColor[] = ['infrared', 'red', 'orange', 'yellow', 'green', 'blue', 'white', 'uv'];
export const SUPPLY_PRESETS = [3.3, 5, 9, 12, 24];
export const E12 = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];
export const E24 = [10, 11, 12, 13, 15, 16, 18, 20, 22, 24, 27, 30, 33, 36, 39, 43, 47, 51, 56, 62, 68, 75, 82, 91];
export const LED_PRESETS: Record<LedColor, LedPreset> = {
  infrared: { forwardVolts: 1.3, currentMilliamps: 20 },
  red: { forwardVolts: 2, currentMilliamps: 20 },
  orange: { forwardVolts: 2.1, currentMilliamps: 20 },
  yellow: { forwardVolts: 2.2, currentMilliamps: 20 },
  green: { forwardVolts: 2.2, currentMilliamps: 20 },
  blue: { forwardVolts: 3.2, currentMilliamps: 20 },
  white: { forwardVolts: 3.2, currentMilliamps: 20 },
  uv: { forwardVolts: 3.4, currentMilliamps: 20 },
};

const POWER_RATINGS = [0.125, 0.25, 0.5, 1, 2, 5];
const BAND_DIGITS: BandColor[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
const MULTIPLIER_BANDS: BandColor[] = ['silver', 'gold', 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
const DIGIT_VALUES: Partial<Record<BandColor, number>> = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9 };
const MULTIPLIER_EXP: Partial<Record<BandColor, number>> = { silver: -2, gold: -1, black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9 };
const TOLERANCE_TEXT: Partial<Record<BandColor, string>> = { gold: '5%', silver: '10%', brown: '1%' };

export function defaultLedInput(): LedInput {
  return { supplyVolts: 5, forwardVolts: 2, currentMilliamps: 20, ledCount: 1, series: 'e24', color: 'red' };
}

export function applyColorPreset(color: LedColor, input: LedInput): LedInput {
  const preset = LED_PRESETS[color];
  return { ...input, color, forwardVolts: preset.forwardVolts, currentMilliamps: preset.currentMilliamps };
}

export function calculateLedResistor(input: LedInput): LedResult {
  if (!isFiniteInput(input)) return emptyResult('invalid');
  const drop = input.supplyVolts - input.ledCount * input.forwardVolts;
  const targetAmps = input.currentMilliamps / 1000;
  if (drop <= 0 || targetAmps <= 0) return emptyResult('no-headroom');
  return readyResult(input, drop, targetAmps);
}

export function nearestStandardOhms(ohms: number, series: ESeries): number {
  const values = series === 'e12' ? E12 : E24;
  const exp = Math.floor(Math.log10(ohms));
  const scaled = ohms / 10 ** (exp - 1);
  return Number((pickPreferred(scaled, values) * 10 ** (exp - 1)).toPrecision(3));
}

export function bandsForOhms(ohms: number, series: ESeries): BandColor[] {
  const exp = Math.floor(Math.log10(ohms));
  let digits = Math.round(ohms / 10 ** (exp - 1));
  let multiplierExp = exp - 1;
  if (digits >= 100) {
    digits = 10;
    multiplierExp += 1;
  }
  return [digitBand(Math.floor(digits / 10)), digitBand(digits % 10), MULTIPLIER_BANDS[multiplierExp + 2] ?? 'black', series === 'e12' ? 'silver' : 'gold'];
}

function digitBand(index: number): BandColor {
  return BAND_DIGITS[index] ?? 'black';
}

export function formatOhms(value: number): string {
  if (!Number.isFinite(value)) return '0 Ω';
  if (value >= 1_000_000) return trimNumber(value / 1_000_000) + ' MΩ';
  if (value >= 1_000) return trimNumber(value / 1_000) + ' kΩ';
  return trimNumber(value) + ' Ω';
}

export function formatWatts(value: number): string {
  if (!Number.isFinite(value)) return '0 W';
  if (value < 1) return Number((value * 1000).toFixed(1)).toString() + ' mW';
  return trimNumber(value) + ' W';
}

export function formatMilliamps(value: number): string {
  if (!Number.isFinite(value)) return '0 mA';
  return Number(value.toFixed(1)).toString() + ' mA';
}

export function recommendedWattage(resistorWatts: number): number {
  const target = resistorWatts * 2;
  return POWER_RATINGS.find((rating) => rating >= target) ?? 5;
}

export function bandMeaning(color: BandColor, role: BandRole): string {
  if (role === 'digit') return String(DIGIT_VALUES[color] ?? 0);
  if (role === 'tolerance') return TOLERANCE_TEXT[color] ?? '';
  return multiplierText(MULTIPLIER_EXP[color]);
}

export function seriesLabel(series: ESeries): string {
  return series === 'e12' ? 'E12' : 'E24';
}

function readyResult(input: LedInput, drop: number, targetAmps: number): LedResult {
  const exactOhms = drop / targetAmps;
  const standardOhms = nearestStandardOhms(exactOhms, input.series);
  const actualAmps = drop / standardOhms;
  const actualMilliamps = actualAmps * 1000;
  const resistorWatts = drop * actualAmps;
  return {
    valid: true,
    message: classifyResult({ actualMilliamps, drop, resistorWatts }),
    exactOhms,
    standardOhms,
    resistorDropVolts: drop,
    actualMilliamps,
    resistorWatts,
    recommendedWatts: recommendedWattage(resistorWatts),
    brightnessRatio: brightnessRatio(actualMilliamps),
    bands: bandsForOhms(standardOhms, input.series),
  };
}

function emptyResult(message: LedMessage): LedResult {
  return { valid: false, message, exactOhms: 0, standardOhms: 0, resistorDropVolts: 0, actualMilliamps: 0, resistorWatts: 0, recommendedWatts: 0, brightnessRatio: 0, bands: [] };
}

function isFiniteInput(input: LedInput): boolean {
  return isPositive(input.supplyVolts) && isPositive(input.forwardVolts) && isPositive(input.currentMilliamps) && Number.isInteger(input.ledCount) && input.ledCount >= 1 && input.ledCount <= 5;
}

function isPositive(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

function pickPreferred(scaled: number, values: number[]): number {
  const first = values[0] ?? 10;
  const options = [...values, first * 10];
  return options.reduce((best, option) => (isBetterPreferred(scaled, option, best) ? option : best), first);
}

function isBetterPreferred(scaled: number, option: number, best: number): boolean {
  const optionDistance = Math.abs(scaled - option);
  const bestDistance = Math.abs(scaled - best);
  if (optionDistance < bestDistance) return true;
  if (optionDistance > bestDistance) return false;
  return option > best;
}

function classifyResult(input: { actualMilliamps: number; drop: number; resistorWatts: number }): LedMessage {
  if (input.actualMilliamps > 30) return 'overdriven';
  if (recommendedWattage(input.resistorWatts) >= 0.5) return 'hotter';
  if (input.drop < 1) return 'tight';
  return 'ready';
}

function brightnessRatio(actualMilliamps: number): number {
  return Math.min(1.15, actualMilliamps / 20);
}

function multiplierText(exponent: number | undefined): string {
  if (exponent === undefined) return 'x1';
  return 'x' + 10 ** exponent;
}

function trimNumber(value: number): string {
  return Number(value.toFixed(3)).toString();
}
