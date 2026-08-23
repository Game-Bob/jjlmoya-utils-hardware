import {
  formatCurrent,
  formatPower,
  formatResistance,
  formatVoltage,
  type DividerResult,
} from './logic';
import type { VoltageDividerUI } from './ui';
import { evaluateDivider } from './evaluator';

export function renderDividerResult(root: HTMLElement, result: DividerResult, ui: VoltageDividerUI): void {
  const output = root.querySelector<HTMLElement>('[data-output]');
  const status = root.querySelector<HTMLElement>('[data-status]');
  const diagram = root.querySelector<HTMLElement>('[data-diagram]');
  if (!output || !status || !diagram) return;
  const evaluation = evaluateDivider(result);
  status.className = `divider-status divider-status-${evaluation.tone}`;
  status.textContent = statusText(result, ui);
  output.innerHTML = result.valid ? resultMarkup(result, ui) : invalidMarkup(result, ui);
  diagram.innerHTML = diagramMarkup(result, ui);
}

function resultMarkup(result: DividerResult, ui: VoltageDividerUI): string {
  return `<div class="divider-output-main"><span>${escapeHtml(ui.outputLabel)}</span><strong>${escapeHtml(formatVoltage(result.outputVolts))}</strong><small>${escapeHtml(ui.ratioLabel)} ${escapeHtml(formatRatio(result.ratio))}</small></div><div class="divider-output-grid"><div><span>${escapeHtml(ui.currentLabel)}</span><strong>${escapeHtml(formatCurrent(result.currentMilliamps))}</strong></div><div><span>${escapeHtml(ui.totalPowerLabel)}</span><strong>${escapeHtml(formatPower(result.totalPowerWatts))}</strong></div><div><span>${escapeHtml(ui.topPowerLabel)}</span><strong>${escapeHtml(formatPower(result.topPowerWatts))}</strong></div><div><span>${escapeHtml(ui.bottomPowerLabel)}</span><strong>${escapeHtml(formatPower(result.bottomPowerWatts))}</strong></div></div>`;
}

function invalidMarkup(result: DividerResult, ui: VoltageDividerUI): string {
  const detail = result.status === 'target-invalid' ? ui.targetHint : ui.hint;
  return `<div class="divider-invalid"><strong>${escapeHtml(result.status === 'target-invalid' ? ui.statusTargetInvalid : ui.statusInvalid)}</strong><span>${escapeHtml(detail)}</span></div>`;
}

function diagramMarkup(result: DividerResult, ui: VoltageDividerUI): string {
  const level = result.valid ? Math.max(0, Math.min(1, result.ratio)) : 0.5;
  const tapY = 170;
  const outputX = 378 + level * 22;
  return `<svg viewBox="0 0 520 340" role="img" aria-label="${escapeHtml(ui.formulaHeader)}"><path class="divider-rail" d="M120 48h280M120 292h280"/><path class="divider-wire" d="M120 48v24M400 48v24M260 48v42M260 148v44M260 250v42M120 268v24M400 268v24"/><rect class="divider-resistor divider-resistor-top" x="222" y="90" width="76" height="58" rx="16"/><rect class="divider-resistor divider-resistor-bottom" x="222" y="192" width="76" height="58" rx="16"/><path class="divider-tap" d="M260 ${tapY}h${outputX - 260}"/><circle class="divider-node" cx="260" cy="${tapY}" r="10"/><circle class="divider-glow" cx="260" cy="${tapY}" r="24"/><text class="divider-label divider-label-supply" x="44" y="38">${escapeHtml(ui.supplyNode)}</text><text class="divider-label divider-label-small" x="412" y="38">${escapeHtml(formatVoltage(result.supplyVolts))}</text><text class="divider-label" x="260" y="124">R1 ${escapeHtml(formatResistance(result.topOhms))}</text><text class="divider-label divider-label-tap" x="${outputX + 12}" y="${tapY + 5}">${escapeHtml(ui.tapNode)} ${escapeHtml(formatVoltage(result.outputVolts))}</text><text class="divider-label" x="260" y="226">R2 ${escapeHtml(formatResistance(result.bottomOhms))}</text><text class="divider-label divider-label-ground" x="44" y="318">${escapeHtml(ui.groundNode)}</text></svg>`;
}

function statusText(result: DividerResult, ui: VoltageDividerUI): string {
  if (result.status === 'nominal') return ui.statusNominal;
  if (result.status === 'target-invalid') return ui.statusTargetInvalid;
  return ui.statusInvalid;
}

function formatRatio(value: number): string {
  return Number((value * 100).toFixed(1)).toString() + '%';
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] ?? char));
}
