import {
  renderModelLabel,
  renderResults,
  renderScene,
  renderStatus,
  syncUnitLabels,
} from "./dom-views";
import { evaluateTrace } from "./evaluator";
import { formatInputValue } from "./format";
import {
  createDefaultState,
  parseInputValue,
  type CurrentMode,
  type Layer,
  type TraceInputs,
} from "./logic";
import {
  loadTraceState,
  loadUnitSystem,
  saveTraceState,
  saveUnitSystem,
  type UnitSystem,
} from "./storage";
import type { PcbTraceWidthImpedanceCheckerUI } from "./ui";

type DisplayField = keyof Pick<
  TraceInputs,
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
  | "dielectricConstant"
>;

const LENGTH_FIELDS: DisplayField[] = [
  "copperThicknessUm",
  "lengthMm",
  "availableWidthMm",
  "dielectricHeightMm",
];
const PRESETS: Record<string, TraceInputs> = {
  logic: { ...createDefaultState(), currentA: 2, availableWidthMm: 1.2 },
  signal: {
    ...createDefaultState(),
    currentA: 0.05,
    lengthMm: 80,
    availableWidthMm: 0.2,
    dielectricHeightMm: 0.15,
  },
  pulse: {
    ...createDefaultState(),
    mode: "pulse",
    pulseCurrentA: 8,
    pulseDurationMs: 2,
    dutyCyclePercent: 1,
    copperThicknessUm: 70,
    temperatureRiseC: 20,
    lengthMm: 50,
    availableWidthMm: 1.5,
  },
};

function readUnit(root: HTMLElement): UnitSystem {
  return root.dataset.units === "imperial" ? "imperial" : "metric";
}

function toDisplay(
  field: DisplayField,
  value: number,
  units: UnitSystem,
): number {
  if (units === "metric") return value;
  if (field === "copperThicknessUm") return value / 25.4;
  if (field === "temperatureRiseC") return value * 1.8;
  if (LENGTH_FIELDS.includes(field)) return value / 25.4;
  return value;
}

function toPhysical(
  field: DisplayField,
  value: number,
  units: UnitSystem,
): number {
  if (units === "metric") return value;
  if (field === "copperThicknessUm") return value * 25.4;
  if (field === "temperatureRiseC") return value / 1.8;
  if (LENGTH_FIELDS.includes(field)) return value * 25.4;
  return value;
}

function syncChoiceButtons(
  root: HTMLElement,
  selector: string,
  value: string,
): void {
  root.querySelectorAll<HTMLElement>(selector).forEach((button) => {
    const key = selector === "[data-unit]" ? "unit" : selector.slice(6, -1);
    button.classList.toggle("is-active", button.dataset[key] === value);
  });
}

function syncButtons(
  root: HTMLElement,
  state: TraceInputs,
  units: UnitSystem,
): void {
  syncChoiceButtons(root, "[data-mode]", state.mode);
  syncChoiceButtons(root, "[data-layer]", state.layer);
  syncChoiceButtons(root, "[data-unit]", units);
  root
    .querySelectorAll<HTMLElement>("[data-preset]")
    .forEach((button) =>
      button.classList.toggle(
        "is-active",
        button.dataset.preset === root.dataset.preset,
      ),
    );
  root
    .querySelectorAll<HTMLElement>("[data-pulse-only]")
    .forEach((element) => (element.hidden = state.mode !== "pulse"));
  root
    .querySelectorAll<HTMLElement>("[data-pulse-result]")
    .forEach((element) => (element.hidden = state.mode !== "pulse"));
}

function syncInputs(
  root: HTMLElement,
  state: TraceInputs,
  units: UnitSystem,
): void {
  root.querySelectorAll<HTMLInputElement>("[data-field]").forEach((input) => {
    const field = input.dataset.field as DisplayField;
    input.value = formatInputValue(
      toDisplay(field, state[field] as number, units),
      field,
      units,
    );
  });
}

function refresh(
  root: HTMLElement,
  state: TraceInputs,
  ui: PcbTraceWidthImpedanceCheckerUI,
): void {
  const units = readUnit(root);
  const evaluation = evaluateTrace(state);
  syncButtons(root, state, units);
  syncInputs(root, state, units);
  syncUnitLabels(root, units);
  renderStatus(root, evaluation, ui);
  renderResults(root, evaluation, ui, units);
  renderScene(root, evaluation, ui, units);
  renderModelLabel(root, state.layer, ui);
  saveTraceState(state);
}

function changeField(
  state: TraceInputs,
  input: HTMLInputElement,
  units: UnitSystem,
): TraceInputs {
  const field = input.dataset.field as DisplayField;
  const parsed = parseInputValue(input.value);
  return {
    ...state,
    [field]: parsed === null ? 0 : toPhysical(field, parsed, units),
  };
}

function clickedMode(
  state: TraceInputs,
  target: HTMLElement,
): TraceInputs | null {
  const mode = target.closest<HTMLElement>("[data-mode]")?.dataset.mode as
    | CurrentMode
    | undefined;
  return mode ? { ...state, mode } : null;
}

function clickedLayer(
  state: TraceInputs,
  target: HTMLElement,
): TraceInputs | null {
  const layer = target.closest<HTMLElement>("[data-layer]")?.dataset.layer as
    | Layer
    | undefined;
  return layer ? { ...state, layer } : null;
}

function clickedPreset(
  root: HTMLElement,
  target: HTMLElement,
): TraceInputs | null {
  const preset = target.closest<HTMLElement>("[data-preset]")?.dataset.preset;
  if (preset && PRESETS[preset]) {
    root.dataset.preset = preset;
    return { ...PRESETS[preset] };
  }
  if (target.closest("[data-reset]")) {
    root.dataset.preset = "";
    return createDefaultState();
  }
  return null;
}

function handleClick(
  root: HTMLElement,
  state: TraceInputs,
  target: HTMLElement,
): TraceInputs {
  const mode = clickedMode(state, target);
  if (mode) return mode;
  const layer = clickedLayer(state, target);
  if (layer) return layer;
  const preset = clickedPreset(root, target);
  if (preset) return preset;
  const units = target.closest<HTMLElement>("[data-unit]")?.dataset.unit as
    | UnitSystem
    | undefined;
  if (units) {
    root.dataset.units = units;
    saveUnitSystem(units);
  }
  return state;
}

export function mountPcbTraceController(
  root: HTMLElement,
  ui: PcbTraceWidthImpedanceCheckerUI,
): void {
  let state = loadTraceState();
  root.dataset.units = loadUnitSystem();
  refresh(root, state, ui);
  root.addEventListener("input", (event) => {
    const input = (event.target as HTMLElement).closest<HTMLInputElement>(
      "[data-field]",
    );
    if (input) {
      state = changeField(state, input, readUnit(root));
      refresh(root, state, ui);
    }
  });
  root.addEventListener("click", (event) => {
    const next = handleClick(root, state, event.target as HTMLElement);
    if (next !== state) state = next;
    refresh(root, state, ui);
  });
}
