import { evaluateOhmState } from './evaluator';
import { renderFormula, renderOrbit, renderResults, renderStatus } from './dom-views';
import { DEFAULT_STATE, QUANTITIES, parseInputValue, type KnownPair, type KnownValues, type OhmState, type Quantity } from './logic';
import { loadOhmState, saveOhmState } from './storage';
import type { OhmLawPowerCalculatorUI } from './ui';

const PRESETS: Record<string, OhmState> = {
  led: { known: ['voltage', 'current'], values: { voltage: 3.3, current: 0.02, resistance: null, power: null } },
  usb: { known: ['voltage', 'power'], values: { voltage: 5, current: null, resistance: null, power: 10 } },
  amplifier: { known: ['resistance', 'power'], values: { voltage: null, current: null, resistance: 8, power: 20 } },
};

function copyState(state: OhmState): OhmState {
  return { known: [...state.known] as KnownPair, values: { ...state.values } };
}

function selectedKnown(state: OhmState, quantity: Quantity): OhmState {
  if (state.known.includes(quantity)) return state;
  const values: KnownValues = { ...state.values };
  return { known: [state.known[1], quantity], values };
}

function syncControls(root: HTMLElement, state: OhmState, solved: Record<Quantity, number> | null): void {
  root.querySelectorAll<HTMLElement>('[data-known-toggle]').forEach((button) => {
    const quantity = button.dataset.quantity as Quantity;
    const active = state.known.includes(quantity);
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  root.querySelectorAll<HTMLInputElement>('[data-value-input]').forEach((input) => {
    const quantity = input.dataset.quantity as Quantity;
    const active = state.known.includes(quantity);
    input.disabled = !active;
    const value = active ? state.values[quantity] : solved?.[quantity] ?? null;
    input.value = value === null ? '' : String(value);
  });
}

function refresh(root: HTMLElement, state: OhmState, ui: OhmLawPowerCalculatorUI): void {
  const evaluation = evaluateOhmState(state);
  syncControls(root, state, evaluation.result?.values ?? null);
  renderStatus(root, evaluation, ui);
  renderFormula(root, evaluation, ui);
  renderResults(root, evaluation, ui);
  renderOrbit({
    root,
    state,
    evaluation,
    labels: {
      voltage: ui.voltageLabel,
      current: ui.currentLabel,
      resistance: ui.resistanceLabel,
      power: ui.powerLabel,
    },
    ui,
  });
  saveOhmState(state);
}

function handleInput(root: HTMLElement, state: OhmState, ui: OhmLawPowerCalculatorUI, input: HTMLInputElement): OhmState {
  const quantity = input.dataset.quantity as Quantity;
  const next = copyState(state);
  next.values[quantity] = parseInputValue(input.value);
  refresh(root, next, ui);
  return next;
}

function handleClick(root: HTMLElement, state: OhmState, ui: OhmLawPowerCalculatorUI, target: HTMLElement): OhmState {
  const toggle = target.closest<HTMLElement>('[data-known-toggle]');
  if (toggle) {
    const quantity = toggle.dataset.quantity as Quantity;
    const next = selectedKnown(state, quantity);
    refresh(root, next, ui);
    return next;
  }
  const preset = target.closest<HTMLElement>('[data-preset]')?.dataset.preset;
  if (preset && PRESETS[preset]) {
    const next = copyState(PRESETS[preset]);
    refresh(root, next, ui);
    return next;
  }
  if (target.closest('[data-reset]')) {
    const next = copyState(DEFAULT_STATE);
    refresh(root, next, ui);
    return next;
  }
  return state;
}

export function mountOhmController(root: HTMLElement, ui: OhmLawPowerCalculatorUI): void {
  let state = loadOhmState();
  refresh(root, state, ui);
  root.addEventListener('input', (event) => {
    const input = (event.target as HTMLElement).closest<HTMLInputElement>('[data-value-input]');
    if (input) state = handleInput(root, state, ui, input);
  });
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    state = handleClick(root, state, ui, target);
  });
}

export function quantityLabels(ui: OhmLawPowerCalculatorUI): Record<Quantity, string> {
  return Object.fromEntries(QUANTITIES.map((quantity) => [quantity, ui[`${quantity}Label` as keyof OhmLawPowerCalculatorUI]])) as Record<Quantity, string>;
}
