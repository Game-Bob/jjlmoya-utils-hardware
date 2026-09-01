export type Layer = "external" | "internal";
export type CurrentMode = "steady" | "pulse";

export interface TraceInputs {
  mode: CurrentMode;
  currentA: number;
  pulseCurrentA: number;
  pulseDurationMs: number;
  dutyCyclePercent: number;
  layer: Layer;
  copperThicknessUm: number;
  temperatureRiseC: number;
  lengthMm: number;
  availableWidthMm: number;
  targetImpedanceOhm: number;
  dielectricHeightMm: number;
  dielectricConstant: number;
}

export interface TraceResult {
  thermalCurrentA: number;
  requiredAreaMil2: number;
  thermalWidthMm: number;
  targetWidthMm: number;
  impedanceAtThermalWidthOhm: number;
  impedanceDeltaPercent: number;
  resistanceOhm: number;
  voltageDropV: number;
  powerLossW: number;
  pulseEnergyMj: number;
  widthMarginMm: number;
  layerModel: string;
}

export const DEFAULT_INPUTS: TraceInputs = {
  mode: "steady",
  currentA: 2,
  pulseCurrentA: 5,
  pulseDurationMs: 10,
  dutyCyclePercent: 10,
  layer: "external",
  copperThicknessUm: 35,
  temperatureRiseC: 10,
  lengthMm: 100,
  availableWidthMm: 1.2,
  targetImpedanceOhm: 50,
  dielectricHeightMm: 0.18,
  dielectricConstant: 4.1,
};

const MIL_TO_MM = 0.0254;
const UM_PER_MIL = 25.4;
const COPPER_RESISTIVITY = 1.724e-8;
const COPPER_TEMP_COEFFICIENT = 0.00393;

export function isPositiveFinite(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

export function parseInputValue(raw: string): number | null {
  const value = Number(raw.trim());
  return raw.trim() && Number.isFinite(value) ? value : null;
}

export function validateInputs(input: TraceInputs): boolean {
  const common = [
    input.currentA,
    input.copperThicknessUm,
    input.temperatureRiseC,
    input.lengthMm,
    input.availableWidthMm,
    input.targetImpedanceOhm,
    input.dielectricHeightMm,
    input.dielectricConstant,
  ];
  const pulse =
    input.mode === "pulse"
      ? [input.pulseCurrentA, input.pulseDurationMs, input.dutyCyclePercent]
      : [];
  return (
    [...common, ...pulse].every(isPositiveFinite) &&
    input.temperatureRiseC <= 100 &&
    input.dutyCyclePercent <= 100
  );
}

export function copperThicknessMil(thicknessUm: number): number {
  return thicknessUm / UM_PER_MIL;
}

export function thermalCurrent(input: TraceInputs): number {
  return input.mode === "pulse"
    ? input.pulseCurrentA * Math.sqrt(input.dutyCyclePercent / 100)
    : input.currentA;
}

export function requiredCopperAreaMil2(
  currentA: number,
  temperatureRiseC: number,
  layer: Layer,
): number {
  const k = layer === "external" ? 0.048 : 0.024;
  return Math.pow(currentA / (k * Math.pow(temperatureRiseC, 0.44)), 1 / 0.725);
}

function microstripImpedance(
  widthMil: number,
  heightMil: number,
  thicknessMil: number,
  dielectricConstant: number,
): number {
  return (
    (87 / Math.sqrt(dielectricConstant + 1.41)) *
    Math.log((5.98 * heightMil) / (0.8 * widthMil + thicknessMil))
  );
}

function striplineImpedance(
  widthMil: number,
  heightMil: number,
  thicknessMil: number,
  dielectricConstant: number,
): number {
  return (
    (60 / Math.sqrt(dielectricConstant)) *
    Math.log(
      (4 * heightMil) / (0.67 * Math.PI * (thicknessMil + 0.8 * widthMil)),
    )
  );
}

export function calculateImpedance(
  input: Pick<
    TraceInputs,
    "layer" | "copperThicknessUm" | "dielectricHeightMm" | "dielectricConstant"
  >,
  widthMm: number,
): number {
  const widthMil = widthMm / MIL_TO_MM;
  const heightMil = input.dielectricHeightMm / MIL_TO_MM;
  const thicknessMil = copperThicknessMil(input.copperThicknessUm);
  return input.layer === "external"
    ? microstripImpedance(
        widthMil,
        heightMil,
        thicknessMil,
        input.dielectricConstant,
      )
    : striplineImpedance(
        widthMil,
        heightMil,
        thicknessMil,
        input.dielectricConstant,
      );
}

export function widthForTargetImpedance(input: TraceInputs): number {
  let low = 0.01;
  let high = 100;
  for (let index = 0; index < 48; index += 1) {
    const middle = (low + high) / 2;
    const impedance = calculateImpedance(input, middle);
    if (impedance > input.targetImpedanceOhm) low = middle;
    else high = middle;
  }
  return (low + high) / 2;
}

function traceResistance(input: TraceInputs, widthMm: number): number {
  const temperature = 20 + input.temperatureRiseC / 2;
  const resistivity =
    COPPER_RESISTIVITY * (1 + COPPER_TEMP_COEFFICIENT * (temperature - 20));
  const lengthM = input.lengthMm / 1000;
  const crossSectionM2 = (widthMm / 1000) * (input.copperThicknessUm / 1e6);
  return (resistivity * lengthM) / crossSectionM2;
}

export function calculateTrace(input: TraceInputs): TraceResult | null {
  if (!validateInputs(input)) return null;
  const thermalA = thermalCurrent(input);
  const area = requiredCopperAreaMil2(
    thermalA,
    input.temperatureRiseC,
    input.layer,
  );
  const widthMm =
    (area / copperThicknessMil(input.copperThicknessUm)) * MIL_TO_MM;
  const targetWidth = widthForTargetImpedance(input);
  const impedance = calculateImpedance(input, widthMm);
  const resistance = traceResistance(input, widthMm);
  return createTraceResult(input, {
    thermalA,
    area,
    widthMm,
    targetWidth,
    impedance,
    resistance,
  });
}

function createTraceResult(
  input: TraceInputs,
  values: {
    thermalA: number;
    area: number;
    widthMm: number;
    targetWidth: number;
    impedance: number;
    resistance: number;
  },
): TraceResult {
  const peakCurrent =
    input.mode === "pulse" ? input.pulseCurrentA : input.currentA;
  const electrical = electricalFields(input, peakCurrent, values.resistance);
  return {
    thermalCurrentA: values.thermalA,
    requiredAreaMil2: values.area,
    thermalWidthMm: values.widthMm,
    targetWidthMm: values.targetWidth,
    impedanceAtThermalWidthOhm: values.impedance,
    impedanceDeltaPercent:
      ((values.impedance - input.targetImpedanceOhm) /
        input.targetImpedanceOhm) *
      100,
    resistanceOhm: values.resistance,
    ...electrical,
    widthMarginMm: input.availableWidthMm - values.widthMm,
    layerModel: input.layer === "external" ? "microstrip" : "stripline",
  };
}

function electricalFields(
  input: TraceInputs,
  peakCurrent: number,
  resistance: number,
): Pick<TraceResult, "voltageDropV" | "powerLossW" | "pulseEnergyMj"> {
  return {
    voltageDropV: peakCurrent * resistance,
    powerLossW: peakCurrent * peakCurrent * resistance,
    pulseEnergyMj:
      input.mode === "pulse"
        ? peakCurrent * peakCurrent * resistance * input.pulseDurationMs
        : 0,
  };
}

export function createDefaultState(): TraceInputs {
  return { ...DEFAULT_INPUTS };
}
