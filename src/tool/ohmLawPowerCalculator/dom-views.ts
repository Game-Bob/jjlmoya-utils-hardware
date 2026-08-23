import { formatNumber } from './format';
import type { OhmEvaluation } from './evaluator';
import type { OhmLawPowerCalculatorUI } from './ui';
import type { OhmState, Quantity, SolvedValues } from './logic';

export interface OhmViewLabels {
  voltage: string;
  current: string;
  resistance: string;
  power: string;
}

interface OrbitViewOptions {
  root: HTMLElement;
  state: OhmState;
  evaluation: OhmEvaluation;
  labels: OhmViewLabels;
  ui: OhmLawPowerCalculatorUI;
}

const META: Record<Quantity, { x: number; y: number; label: keyof OhmViewLabels; unit: string; trace: string }> = {
  voltage: { x: 180, y: 38, label: 'voltage', unit: 'V', trace: 'M180 112 V 76' },
  current: { x: 304, y: 150, label: 'current', unit: 'A', trace: 'M232 150 H 252' },
  resistance: { x: 180, y: 262, label: 'resistance', unit: 'Ω', trace: 'M180 188 V 224' },
  power: { x: 56, y: 150, label: 'power', unit: 'W', trace: 'M128 150 H 108' },
};

function terminalNode(quantity: Quantity, values: SolvedValues, known: Quantity[], labels: OhmViewLabels): string {
  const { x, y, label, unit } = META[quantity];
  const active = known.includes(quantity) ? 'is-known' : 'is-solved';
  return `<g class="terminal ${active}" transform="translate(${x} ${y})"><rect x="-48" y="-23" width="96" height="46" rx="5"></rect><circle class="terminal-dot" cy="-23" r="4"></circle><text class="terminal-label" y="-4">${labels[label]}</text><text class="terminal-value" y="14">${formatNumber(values[quantity])} ${unit}</text></g>`;
}

function circuitCore(values: SolvedValues): string {
  const traces = Object.values(META).map(({ trace }) => `<path class="circuit-trace" d="${trace}"></path>`).join('');
  return `${traces}<rect class="circuit-core" x="128" y="112" width="104" height="76" rx="9"></rect><path class="resistor-symbol" d="M145 150 h12 l7 -14 l12 28 l12 -28 l12 28 l7 -14 h12"></path><text class="circuit-core-label" x="180" y="132">OHM</text><text class="circuit-core-value" x="180" y="178">${formatNumber(values.power)} W</text>`;
}

export function renderOrbit({ root, state, evaluation, labels, ui }: OrbitViewOptions): void {
  const figure = root.querySelector<HTMLElement>('[data-orbit]');
  if (!figure) return;
  if (!evaluation.result) {
    figure.innerHTML = `<div class="orbit-empty"><span class="orbit-empty-mark">V I R P</span><span>${ui.orbitCaption}</span></div>`;
    return;
  }
  const values = evaluation.result.values;
  const nodes = Object.keys(META).map((quantity) => terminalNode(quantity as Quantity, values, state.known, labels)).join('');
  figure.innerHTML = `<svg class="ohm-orbit" viewBox="0 0 360 300" role="img" aria-label="${ui.orbitCaption}">${circuitCore(values)}${nodes}</svg>`;
}

export function renderStatus(root: HTMLElement, evaluation: OhmEvaluation, ui: OhmLawPowerCalculatorUI): void {
  const status = root.querySelector<HTMLElement>('[data-status]');
  if (!status) return;
  const messages = { empty: ui.statusEmpty, invalid: ui.statusInvalid, ready: ui.statusReady };
  status.dataset.state = evaluation.status;
  status.textContent = messages[evaluation.status];
}

export function renderFormula(root: HTMLElement, evaluation: OhmEvaluation, ui: OhmLawPowerCalculatorUI): void {
  const formula = root.querySelector<HTMLElement>('[data-formula]');
  if (!formula) return;
  formula.textContent = evaluation.result ? `${ui.formulaHint} ${formulaText(evaluation.result.formula)}` : ui.formulaHint;
}

function formulaText(key: string): string {
  const formulas: Record<string, string> = {
    'voltage-current': 'R = V / I and P = V × I',
    'voltage-resistance': 'I = V / R and P = V² / R',
    'voltage-power': 'I = P / V and R = V² / P',
    'current-resistance': 'V = I × R and P = I² × R',
    'current-power': 'V = P / I and R = P / I²',
    'resistance-power': 'V = √(P × R) and I = √(P / R)',
  };
  return formulas[key] ?? '';
}

export function renderResults(root: HTMLElement, evaluation: OhmEvaluation, ui: OhmLawPowerCalculatorUI): void {
  const result = evaluation.result?.values;
  const cards = root.querySelectorAll<HTMLElement>('[data-result-card]');
  cards.forEach((card) => {
    const quantity = card.dataset.resultCard as Quantity;
    const value = card.querySelector<HTMLElement>('[data-result-value]');
    const badge = card.querySelector<HTMLElement>('[data-result-badge]');
    if (!value || !badge) return;
    value.textContent = result ? formatNumber(result[quantity]) : '—';
    badge.textContent = result && evaluation.status === 'ready' ? ui.solvedBadge : ui.resultHint;
    card.dataset.state = result ? 'ready' : 'empty';
  });
}

export function formatMeasurement(value: number, unit: string): string {
  return `${formatNumber(value)} ${unit}`;
}
