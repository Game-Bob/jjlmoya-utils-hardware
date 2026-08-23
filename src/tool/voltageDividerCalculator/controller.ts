import { calculateDivider, defaultDividerInput, type DividerInput, type DividerMode } from './logic';
import { renderDividerResult } from './dom-views';
import { loadDividerInput, saveDividerInput } from './storage';
import type { VoltageDividerUI } from './ui';

export function mountVoltageDivider(root: HTMLElement, ui: VoltageDividerUI): void {
  let input = loadDividerInput(defaultDividerInput());
  const controls = getControls(root);
  if (!controls) return;
  syncControls(controls, input);
  update(root, controls, input, ui);
  root.addEventListener('input', () => {
    input = readInput(controls, input);
    saveDividerInput(input);
    update(root, controls, input, ui);
  });
  root.addEventListener('change', () => {
    input = readInput(controls, input);
    saveDividerInput(input);
    update(root, controls, input, ui);
  });
}

interface Controls {
  mode: NodeListOf<HTMLInputElement>;
  supply: HTMLInputElement;
  top: HTMLInputElement;
  bottom: HTMLInputElement;
  target: HTMLInputElement;
  bottomField: HTMLElement;
  targetField: HTMLElement;
}

function getControls(root: HTMLElement): Controls | null {
  const mode = root.querySelectorAll<HTMLInputElement>('input[name="divider-mode"]');
  const supply = root.querySelector<HTMLInputElement>('[data-input="supply"]');
  const top = root.querySelector<HTMLInputElement>('[data-input="top"]');
  const bottom = root.querySelector<HTMLInputElement>('[data-input="bottom"]');
  const target = root.querySelector<HTMLInputElement>('[data-input="target"]');
  const bottomField = root.querySelector<HTMLElement>('[data-field="bottom"]');
  const targetField = root.querySelector<HTMLElement>('[data-field="target"]');
  if (!supply || !top || !bottom || !target || !bottomField || !targetField || mode.length === 0) return null;
  return { mode, supply, top, bottom, target, bottomField, targetField };
}

function syncControls(controls: Controls, input: DividerInput): void {
  controls.mode.forEach((radio) => { radio.checked = radio.value === input.mode; });
  controls.supply.value = String(input.supplyVolts);
  controls.top.value = String(input.topOhms);
  controls.bottom.value = String(input.bottomOhms);
  controls.target.value = String(input.targetVolts);
  toggleModeFields(controls, input.mode);
}

function readInput(controls: Controls, previous: DividerInput): DividerInput {
  const mode = Array.from(controls.mode).find((radio) => radio.checked)?.value;
  return {
    mode: mode === 'target' ? 'target' : 'predict',
    supplyVolts: numberValue(controls.supply.value, previous.supplyVolts),
    topOhms: numberValue(controls.top.value, previous.topOhms),
    bottomOhms: numberValue(controls.bottom.value, previous.bottomOhms),
    targetVolts: numberValue(controls.target.value, previous.targetVolts),
  };
}

function numberValue(raw: string, fallback: number): number {
  const value = Number(raw);
  if (raw.trim() === '') return Number.NaN;
  return Number.isFinite(value) ? value : fallback;
}

function update(root: HTMLElement, controls: Controls, input: DividerInput, ui: VoltageDividerUI): void {
  toggleModeFields(controls, input.mode);
  updateCopy(root, input.mode, ui);
  renderDividerResult(root, calculateDivider(input), ui);
}

function toggleModeFields(controls: Controls, mode: DividerMode): void {
  const targetMode = mode === 'target';
  controls.bottomField.hidden = targetMode;
  controls.targetField.hidden = !targetMode;
  controls.bottom.disabled = targetMode;
  controls.target.disabled = !targetMode;
}

function updateCopy(root: HTMLElement, mode: DividerMode, ui: VoltageDividerUI): void {
  const hint = root.querySelector<HTMLElement>('[data-mode-hint]');
  const predictFormula = root.querySelector<HTMLElement>('[data-formula-predict]');
  const targetFormula = root.querySelector<HTMLElement>('[data-formula-target]');
  if (!hint || !predictFormula || !targetFormula) return;
  const targetMode = mode === 'target';
  hint.textContent = targetMode ? ui.targetHint : ui.hint;
  predictFormula.hidden = targetMode;
  targetFormula.hidden = !targetMode;
}
