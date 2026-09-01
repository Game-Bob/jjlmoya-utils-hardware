import { createDefaultState, type TraceInputs } from "./logic";

const STORAGE_KEY = "jjlmoya-pcb-trace-width-impedance-checker";
const UNIT_STORAGE_KEY = "jjlmoya-pcb-trace-width-impedance-checker-units";
export type UnitSystem = "metric" | "imperial";
const NUMBER_FIELDS: (keyof TraceInputs)[] = [
  "currentA",
  "pulseCurrentA",
  "pulseDurationMs",
  "dutyCyclePercent",
  "copperThicknessUm",
  "temperatureRiseC",
  "lengthMm",
  "availableWidthMm",
  "targetImpedanceOhm",
  "dielectricHeightMm",
  "dielectricConstant",
];

function hasNumberFields(candidate: Partial<TraceInputs>): boolean {
  return NUMBER_FIELDS.every((field) => typeof candidate[field] === "number");
}

function isStoredState(value: unknown): value is TraceInputs {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<TraceInputs>;
  return (
    (candidate.mode === "steady" || candidate.mode === "pulse") &&
    (candidate.layer === "external" || candidate.layer === "internal") &&
    hasNumberFields(candidate)
  );
}

export function loadTraceState(): TraceInputs {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return createDefaultState();
    const parsed: unknown = JSON.parse(stored);
    return isStoredState(parsed) ? parsed : createDefaultState();
  } catch {
    return createDefaultState();
  }
}

export function saveTraceState(state: TraceInputs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}

export function loadUnitSystem(): UnitSystem {
  try {
    return localStorage.getItem(UNIT_STORAGE_KEY) === "imperial"
      ? "imperial"
      : "metric";
  } catch {
    return "metric";
  }
}

export function saveUnitSystem(units: UnitSystem): void {
  try {
    localStorage.setItem(UNIT_STORAGE_KEY, units);
  } catch {
    return;
  }
}
