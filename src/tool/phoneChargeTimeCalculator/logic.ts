export interface PhoneChargeTimeInput {
  capacityMah: number;
  currentPercent: number;
  targetPercent: number;
  chargerWatts: number;
  efficiencyPercent: number;
}

export interface PhoneChargeScenario {
  watts: number;
  minutes: number;
}

export interface PhoneChargeTimeResult {
  capacityWh: number;
  energyNeededWh: number;
  estimatedMinutes: number;
  taperFactor: number;
  scenarios: PhoneChargeScenario[];
}

export interface PhoneChargeValidation {
  valid: boolean;
  field?: 'capacity' | 'current' | 'target' | 'power' | 'efficiency';
  reason?: 'capacity' | 'current' | 'target' | 'target-order' | 'power' | 'efficiency';
}

const NOMINAL_BATTERY_VOLTAGE = 3.85;
const SCENARIO_WATTS = [5, 15, 30];

function invalidValidation(field: NonNullable<PhoneChargeValidation['field']>, reason: NonNullable<PhoneChargeValidation['reason']>): PhoneChargeValidation {
  return { valid: false, field, reason };
}

function validateCapacity(input: PhoneChargeTimeInput): PhoneChargeValidation | null {
  return !Number.isFinite(input.capacityMah) || input.capacityMah <= 0 ? invalidValidation('capacity', 'capacity') : null;
}

function validateCurrent(input: PhoneChargeTimeInput): PhoneChargeValidation | null {
  return !Number.isFinite(input.currentPercent) || input.currentPercent < 0 || input.currentPercent > 100 ? invalidValidation('current', 'current') : null;
}

function validateTarget(input: PhoneChargeTimeInput): PhoneChargeValidation | null {
  return !Number.isFinite(input.targetPercent) || input.targetPercent < 1 || input.targetPercent > 100 ? invalidValidation('target', 'target') : null;
}

function validateTargetOrder(input: PhoneChargeTimeInput): PhoneChargeValidation | null {
  return input.targetPercent <= input.currentPercent ? invalidValidation('target', 'target-order') : null;
}

function validatePower(input: PhoneChargeTimeInput): PhoneChargeValidation | null {
  return !Number.isFinite(input.chargerWatts) || input.chargerWatts <= 0 ? invalidValidation('power', 'power') : null;
}

function validateEfficiency(input: PhoneChargeTimeInput): PhoneChargeValidation | null {
  return !Number.isFinite(input.efficiencyPercent) || input.efficiencyPercent < 50 || input.efficiencyPercent > 100 ? invalidValidation('efficiency', 'efficiency') : null;
}

export function validatePhoneChargeInput(input: PhoneChargeTimeInput): PhoneChargeValidation {
  const validation = [validateCapacity, validateCurrent, validateTarget, validateTargetOrder, validatePower, validateEfficiency]
    .map((check) => check(input))
    .find((result) => result !== null);
  if (validation) return validation;
  return { valid: true };
}

function taperFactorForTarget(targetPercent: number): number {
  return 1 + Math.max(0, targetPercent - 70) / 30 * 0.25;
}

function minutesForWatts(input: PhoneChargeTimeInput, watts: number): number {
  const capacityWh = input.capacityMah * NOMINAL_BATTERY_VOLTAGE / 1000;
  const energyNeededWh = capacityWh * (input.targetPercent - input.currentPercent) / 100;
  const deliveredWatts = watts * input.efficiencyPercent / 100;
  return energyNeededWh / deliveredWatts * 60 * taperFactorForTarget(input.targetPercent);
}

export function calculatePhoneChargeTime(input: PhoneChargeTimeInput): PhoneChargeTimeResult | null {
  if (!validatePhoneChargeInput(input).valid) return null;
  const capacityWh = input.capacityMah * NOMINAL_BATTERY_VOLTAGE / 1000;
  const energyNeededWh = capacityWh * (input.targetPercent - input.currentPercent) / 100;
  const taperFactor = taperFactorForTarget(input.targetPercent);
  return {
    capacityWh,
    energyNeededWh,
    estimatedMinutes: minutesForWatts(input, input.chargerWatts),
    taperFactor,
    scenarios: SCENARIO_WATTS.map((watts) => ({ watts, minutes: minutesForWatts(input, watts) })),
  };
}
