import { LED_COLORS, defaultLedInput, type ESeries, type LedColor, type LedInput } from './logic';

const STORAGE_KEY = 'jjlmoya-led-resistor-calculator-state';

export function readLedState(): Partial<LedInput> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Partial<LedInput>;
  } catch {
    return {};
  }
}

export function writeLedState(input: LedInput): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}

export function normalizeLedInput(candidate: Partial<LedInput>, fallback: LedInput): LedInput {
  return {
    supplyVolts: clampNumber(candidate.supplyVolts, fallback.supplyVolts, 1, 48),
    forwardVolts: clampNumber(candidate.forwardVolts, fallback.forwardVolts, 0.7, 5),
    currentMilliamps: clampNumber(candidate.currentMilliamps, fallback.currentMilliamps, 1, 350),
    ledCount: Math.round(clampNumber(candidate.ledCount, fallback.ledCount, 1, 5)),
    series: validSeries(candidate.series) ? candidate.series : fallback.series,
    color: validColor(candidate.color) ? candidate.color : fallback.color,
  };
}

export function parseInitialInput(value: string | undefined): LedInput {
  try {
    return normalizeLedInput(JSON.parse(value ?? '{}') as Partial<LedInput>, defaultLedInput());
  } catch {
    return defaultLedInput();
  }
}

function clampNumber(value: number | undefined, fallback: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value as number));
}

function validSeries(value: unknown): value is ESeries {
  return value === 'e12' || value === 'e24';
}

function validColor(value: unknown): value is LedColor {
  return LED_COLORS.includes(value as LedColor);
}
