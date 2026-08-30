export type BandCount = 3 | 4 | 5 | 6;
export type ResistorColor = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'gray' | 'white' | 'gold' | 'silver';
export type CalculationMode = 'decode' | 'reverse' | 'smd';

export interface DecodeInput {
  bandCount: BandCount;
  colors: ResistorColor[];
}

export interface ReverseInput {
  bandCount: BandCount;
  targetOhms: number;
  tolerancePercent: 1 | 2 | 5 | 10 | 20;
}

export interface SmdInput {
  code: string;
}

export interface ResistorResult {
  valid: boolean;
  valueOhms: number;
  tolerancePercent: number;
  minOhms: number;
  maxOhms: number;
  tempcoPpm: number | null;
  colors: ResistorColor[];
  requestedOhms: number | null;
  message: 'ready' | 'invalid' | 'unsupported';
}

export const COLOR_NAMES: ResistorColor[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white', 'gold', 'silver'];

export function allowedColorsForBand(bandCount: BandCount, index: number): ResistorColor[] {
  const digitCount = bandCount <= 4 ? 2 : 3;
  if (index < digitCount) return COLOR_NAMES.slice(0, 10);
  if (index === digitCount) return [...COLOR_NAMES];
  if (index === digitCount + 1) return ['brown', 'red', 'green', 'blue', 'violet', 'gray', 'gold', 'silver'];
  if (bandCount === 6 && index === 5) return ['brown', 'red', 'orange', 'yellow', 'blue', 'violet', 'gray'];
  return [];
}

export function defaultColorsForBandCount(bandCount: BandCount): ResistorColor[] {
  if (bandCount === 3) return ['yellow', 'violet', 'red'];
  if (bandCount === 4) return ['yellow', 'violet', 'red', 'gold'];
  const colors: ResistorColor[] = ['brown', 'black', 'black', 'red', 'brown'];
  if (bandCount === 6) colors.push('brown');
  return colors;
}

interface ReadyResultInput {
  valueOhms: number;
  tolerancePercent: number;
  colors: ResistorColor[];
  tempcoPpm: number | null;
  requestedOhms: number | null;
}

interface DecodedBandValues {
  valueOhms: number;
  tolerancePercent: number;
  tempcoPpm: number | null;
}

interface TargetParts {
  significant: number;
  multiplierExponent: number;
}



const DIGITS: Partial<Record<ResistorColor, number>> = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9 };
const MULTIPLIERS: Partial<Record<ResistorColor, number>> = { black: 1, brown: 10, red: 100, orange: 1000, yellow: 10000, green: 100000, blue: 1000000, violet: 10000000, gray: 100000000, white: 1000000000, gold: 0.1, silver: 0.01 };
const TOLERANCES: Partial<Record<ResistorColor, number>> = { brown: 1, red: 2, green: 0.5, blue: 0.25, violet: 0.1, gray: 0.05, gold: 5, silver: 10 };
const TEMPCO: Partial<Record<ResistorColor, number>> = { brown: 100, red: 50, orange: 15, yellow: 25, blue: 10, violet: 5, gray: 1 };

export function calculateFromColors(input: DecodeInput): ResistorResult {
  const decoded = decodeBandValues(input);
  if (!decoded) return invalidResult(input.colors);
  return readyResult({ ...decoded, colors: input.colors, requestedOhms: null });
}

export function calculateFromTarget(input: ReverseInput): ResistorResult {
  const digitCount = input.bandCount <= 4 ? 2 : 3;
  const parts = getTargetParts(input.targetOhms, digitCount);
  if (!parts) return invalidResult([]);
  const colors = buildTargetColors(parts, input);
  if (!colors) return invalidResult([]);
  const tolerancePercent = input.bandCount === 3 ? 20 : input.tolerancePercent;
  const tempcoPpm = input.bandCount === 6 ? 100 : null;
  return readyResult({ valueOhms: parts.significant * 10 ** parts.multiplierExponent, tolerancePercent, colors, tempcoPpm, requestedOhms: input.targetOhms });
}

export function calculateFromSmd(input: SmdInput): ResistorResult {
  const code = input.code.trim().toUpperCase();
  if (!/^\d{3,4}$/.test(code) && !/^\d{1,2}R\d{1,2}$/.test(code)) return invalidResult([]);
  const valueOhms = code.includes('R') ? Number(code.replace('R', '.')) : Number(code.slice(0, -1)) * 10 ** Number(code.slice(-1));
  if (!Number.isFinite(valueOhms) || valueOhms < 0) return invalidResult([]);
  return readyResult({ valueOhms, tolerancePercent: 0, colors: [], tempcoPpm: null, requestedOhms: null });
}

export function formatOhms(value: number): string {
  if (!Number.isFinite(value)) return '0 Ω';
  if (value >= 1_000_000_000) return trimNumber(value / 1_000_000_000) + ' GΩ';
  if (value >= 1_000_000) return trimNumber(value / 1_000_000) + ' MΩ';
  if (value >= 1_000) return trimNumber(value / 1_000) + ' kΩ';
  return trimNumber(value) + ' Ω';
}

function readyResult(input: ReadyResultInput): ResistorResult {
  const { valueOhms, tolerancePercent, colors, tempcoPpm, requestedOhms } = input;
  return { valid: true, valueOhms, tolerancePercent, minOhms: valueOhms * (1 - tolerancePercent / 100), maxOhms: valueOhms * (1 + tolerancePercent / 100), tempcoPpm, colors, requestedOhms, message: 'ready' };
}

function invalidResult(colors: ResistorColor[]): ResistorResult {
  return { valid: false, valueOhms: 0, tolerancePercent: 0, minOhms: 0, maxOhms: 0, tempcoPpm: null, colors, requestedOhms: null, message: 'invalid' };
}

function colorForMultiplier(exponent: number): ResistorColor | null {
  const colors: ResistorColor[] = ['silver', 'gold', 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
  return colors[exponent + 2] ?? null;
}

function colorForTolerance(percent: number): ResistorColor {
  if (percent === 1) return 'brown';
  if (percent === 2) return 'red';
  if (percent === 5) return 'gold';
  if (percent === 10) return 'silver';
  return 'brown';
}

function trimNumber(value: number): string {
  return Number(value.toFixed(3)).toString();
}


function decodeBandValues(input: DecodeInput): DecodedBandValues | null {
  const { bandCount, colors } = input;
  if (colors.length !== bandCount) return null;
  const digitCount = bandCount <= 4 ? 2 : 3;
  const significant = readSignificant(colors, digitCount);
  const multiplier = readMultiplier(colors[digitCount]);
  const tolerancePercent = readTolerance(colors[digitCount + 1], bandCount);
  const tempcoPpm = readTempco(colors[5], bandCount);
  if (significant === null || multiplier === null || tolerancePercent === null) return null;
  if (bandCount === 6 && tempcoPpm === null) return null;
  return { valueOhms: significant * multiplier, tolerancePercent, tempcoPpm };
}

function readSignificant(colors: ResistorColor[], digitCount: number): number | null {
  const digits = colors.slice(0, digitCount).map((color) => color ? DIGITS[color] : undefined);
  if (digits.some((digit) => digit === undefined)) return null;
  return Number(digits.join(''));
}

function readMultiplier(color: ResistorColor | undefined): number | null {
  return color ? MULTIPLIERS[color] ?? null : null;
}

function readTolerance(color: ResistorColor | undefined, bandCount: BandCount): number | null {
  if (bandCount === 3) return 20;
  return color ? TOLERANCES[color] ?? null : null;
}

function readTempco(color: ResistorColor | undefined, bandCount: BandCount): number | null {
  if (bandCount !== 6) return null;
  return color ? TEMPCO[color] ?? null : null;
}

function getTargetParts(targetOhms: number, digitCount: number): TargetParts | null {
  if (!Number.isFinite(targetOhms) || targetOhms <= 0) return null;
  const exponentBase = Math.floor(Math.log10(targetOhms));
  let multiplierExponent = exponentBase - digitCount + 1;
  let significant = Math.round(targetOhms / 10 ** multiplierExponent);
  if (significant >= 10 ** digitCount) {
    significant = Math.round(significant / 10);
    multiplierExponent += 1;
  }
  if (multiplierExponent < -2 || multiplierExponent > 9 || significant < 10 ** (digitCount - 1)) return null;
  return { significant, multiplierExponent };
}

function buildTargetColors(parts: TargetParts, input: ReverseInput): ResistorColor[] | null {
  const digitCount = input.bandCount <= 4 ? 2 : 3;
  const digitText = String(parts.significant).padStart(digitCount, '0');
  const colors = digitText.split('').map((digit) => COLOR_NAMES[Number(digit)]) as ResistorColor[];
  const multiplierColor = colorForMultiplier(parts.multiplierExponent);
  if (!multiplierColor) return null;
  colors.push(multiplierColor);
  if (input.bandCount >= 4) colors.push(colorForTolerance(input.tolerancePercent));
  if (input.bandCount === 6) colors.push('brown');
  return colors;
}



