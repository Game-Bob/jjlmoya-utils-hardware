export function formatNumber(value: number, digits = 3): string {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
  }).format(value);
}

export function formatSignedPercent(value: number): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${formatNumber(value, 1)}%`;
}

type InputField =
  | "currentA"
  | "pulseCurrentA"
  | "pulseDurationMs"
  | "dutyCyclePercent"
  | "copperThicknessUm"
  | "temperatureRiseC"
  | "lengthMm"
  | "availableWidthMm"
  | "targetImpedanceOhm"
  | "dielectricHeightMm"
  | "dielectricConstant";

const METRIC_INPUT_DIGITS: Record<InputField, number> = {
  currentA: 3,
  pulseCurrentA: 3,
  pulseDurationMs: 2,
  dutyCyclePercent: 2,
  copperThicknessUm: 2,
  temperatureRiseC: 2,
  lengthMm: 3,
  availableWidthMm: 3,
  targetImpedanceOhm: 2,
  dielectricHeightMm: 3,
  dielectricConstant: 3,
};

const IMPERIAL_INPUT_DIGITS: Record<InputField, number> = {
  ...METRIC_INPUT_DIGITS,
  copperThicknessUm: 3,
  temperatureRiseC: 1,
  lengthMm: 4,
  availableWidthMm: 4,
  dielectricHeightMm: 4,
};

export function formatInputValue(
  value: number,
  field: InputField,
  units: "metric" | "imperial",
): string {
  const digits = inputDigits(field, units);
  return String(Number(value.toFixed(digits)));
}

function inputDigits(field: InputField, units: "metric" | "imperial"): number {
  return (units === "imperial" ? IMPERIAL_INPUT_DIGITS : METRIC_INPUT_DIGITS)[
    field
  ];
}
