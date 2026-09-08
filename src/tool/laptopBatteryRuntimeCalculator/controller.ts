import { renderRuntimeResults } from './dom-views';
import { calculateRuntimeSummary, type RuntimeInputs } from './logic';
import { loadRuntimeInputs, saveRuntimeInputs } from './storage';
import type { LaptopBatteryRuntimeUI } from './ui';

interface MountOptions {
  root: HTMLElement;
  ui: LaptopBatteryRuntimeUI;
  initialState: RuntimeInputs;
  locale: string;
}

function findInput(root: HTMLElement, field: string): HTMLInputElement | null {
  return root.querySelector<HTMLInputElement>(`[data-field="${field}"]`);
}

function readInputs(root: HTMLElement): RuntimeInputs {
  const scenarios = ['light', 'balanced', 'intense'].map((id) => ({
    id,
    powerWatts: Number(findInput(root, `${id}Power`)?.value ?? 1),
  }));
  return {
    designCapacityWh: Number(findInput(root, 'designCapacity')?.value ?? 60),
    batteryHealthPercent: Number(findInput(root, 'batteryHealth')?.value ?? 100),
    chargePercent: Number(findInput(root, 'chargePercent')?.value ?? 100),
    scenarios,
  };
}

function syncPair(root: HTMLElement, field: string, value: string): void {
  const input = findInput(root, field);
  const range = root.querySelector<HTMLInputElement>(`[data-range="${field}"]`);
  if (input) input.value = value;
  if (range) range.value = value;
}

function setState(root: HTMLElement, state: RuntimeInputs): void {
  syncPair(root, 'designCapacity', String(state.designCapacityWh));
  syncPair(root, 'batteryHealth', String(state.batteryHealthPercent));
  syncPair(root, 'chargePercent', String(state.chargePercent));
  state.scenarios.forEach((scenario) => syncPair(root, `${scenario.id}Power`, String(scenario.powerWatts)));
}

function applyPreset(root: HTMLElement, preset: string): void {
  const values: Record<string, number[]> = {
    balanced: [10, 20, 45],
    travel: [7, 14, 28],
    creative: [18, 35, 75],
  };
  const selected = values[preset] ?? [10, 20, 45];
  ['light', 'balanced', 'intense'].forEach((id, index) => syncPair(root, `${id}Power`, String(selected[index] ?? 1)));
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => {
    button.dataset.active = String(button.dataset.preset === preset);
  });
}

function update(root: HTMLElement, ui: LaptopBatteryRuntimeUI, locale: string): void {
  const state = readInputs(root);
  const summary = calculateRuntimeSummary(state);
  root.dataset.healthPercent = String(state.batteryHealthPercent);
  root.dataset.chargePercent = String(state.chargePercent);
  renderRuntimeResults(root, summary, ui, locale);
  saveRuntimeInputs(state);
}

export function mountLaptopBatteryRuntime(options: MountOptions): void {
  const { root, ui, initialState, locale } = options;
  const state = loadRuntimeInputs(initialState);
  setState(root, state);
  root.querySelectorAll<HTMLInputElement>('input').forEach((input) => {
    input.addEventListener('input', () => {
      const field = input.dataset.field ?? input.dataset.range;
      if (field) syncPair(root, field, input.value);
      update(root, ui, locale);
    });
  });
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => {
    button.addEventListener('click', () => {
      applyPreset(root, button.dataset.preset ?? 'balanced');
      update(root, ui, locale);
    });
  });
  update(root, ui, locale);
}
