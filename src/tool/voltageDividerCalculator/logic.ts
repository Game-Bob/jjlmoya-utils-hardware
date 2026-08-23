export type DividerMode = 'predict' | 'target';

export interface DividerInput {
  mode: DividerMode;
  supplyVolts: number;
  topOhms: number;
  bottomOhms: number;
  targetVolts: number;
}

export type DividerStatus = 'nominal' | 'invalid' | 'target-invalid';

export interface DividerResult {
  valid: boolean;
  status: DividerStatus;
  supplyVolts: number;
  topOhms: number;
  bottomOhms: number;
  outputVolts: number;
  currentMilliamps: number;
  topPowerWatts: number;
  bottomPowerWatts: number;
  totalPowerWatts: number;
  ratio: number;
}

export function defaultDividerInput(): DividerInput {
  return { mode: 'predict', supplyVolts: 12, topOhms: 10000, bottomOhms: 10000, targetVolts: 6 };
}

export function calculateDivider(input: DividerInput): DividerResult {
  if (!hasPositiveValues(input)) return emptyResult(input, 'invalid');
  const bottomOhms = input.mode === 'target' ? targetResistance(input) : input.bottomOhms;
  if (!Number.isFinite(bottomOhms) || bottomOhms <= 0) return emptyResult(input, 'target-invalid');
  const currentAmps = input.supplyVolts / (input.topOhms + bottomOhms);
  const outputVolts = currentAmps * bottomOhms;
  return buildResult(input, bottomOhms, outputVolts, currentAmps);
}

export function formatVoltage(value: number): string {
  return formatNumber(value, 3) + ' V';
}

export function formatResistance(value: number): string {
  if (!Number.isFinite(value)) return '0 Ω';
  if (value >= 1_000_000) return formatNumber(value / 1_000_000, 3) + ' MΩ';
  if (value >= 1_000) return formatNumber(value / 1_000, 3) + ' kΩ';
  return formatNumber(value, 2) + ' Ω';
}

export function formatCurrent(value: number): string {
  if (!Number.isFinite(value)) return '0 mA';
  return formatNumber(value, 3) + ' mA';
}

export function formatPower(value: number): string {
  if (!Number.isFinite(value)) return '0 W';
  if (value < 0.001) return formatNumber(value * 1_000_000, 2) + ' µW';
  if (value < 1) return formatNumber(value * 1_000, 2) + ' mW';
  return formatNumber(value, 3) + ' W';
}

function hasPositiveValues(input: DividerInput): boolean {
  return Number.isFinite(input.supplyVolts) && input.supplyVolts > 0
    && Number.isFinite(input.topOhms) && input.topOhms > 0
    && (input.mode === 'target' || (Number.isFinite(input.bottomOhms) && input.bottomOhms > 0));
}

function targetResistance(input: DividerInput): number {
  if (!Number.isFinite(input.targetVolts) || input.targetVolts <= 0 || input.targetVolts >= input.supplyVolts) return Number.NaN;
  return input.topOhms * input.targetVolts / (input.supplyVolts - input.targetVolts);
}

function buildResult(input: DividerInput, bottomOhms: number, outputVolts: number, currentAmps: number): DividerResult {
  const topPowerWatts = currentAmps ** 2 * input.topOhms;
  const bottomPowerWatts = currentAmps ** 2 * bottomOhms;
  const status = input.mode === 'target' && Math.abs(outputVolts - input.targetVolts) > 0.000001 ? 'target-invalid' : 'nominal';
  return {
    valid: status === 'nominal',
    status,
    supplyVolts: input.supplyVolts,
    topOhms: input.topOhms,
    bottomOhms,
    outputVolts,
    currentMilliamps: currentAmps * 1_000,
    topPowerWatts,
    bottomPowerWatts,
    totalPowerWatts: topPowerWatts + bottomPowerWatts,
    ratio: outputVolts / input.supplyVolts,
  };
}

function emptyResult(input: DividerInput, status: DividerStatus): DividerResult {
  return {
    valid: false,
    status,
    supplyVolts: input.supplyVolts,
    topOhms: input.topOhms,
    bottomOhms: 0,
    outputVolts: 0,
    currentMilliamps: 0,
    topPowerWatts: 0,
    bottomPowerWatts: 0,
    totalPowerWatts: 0,
    ratio: 0,
  };
}

function formatNumber(value: number, decimals: number): string {
  return Number(value.toFixed(decimals)).toString();
}
