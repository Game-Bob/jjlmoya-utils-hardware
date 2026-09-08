import type { LaptopBatteryRuntimeUI } from './ui';
import { evaluateBatteryHealth, evaluateRuntime } from './evaluator';
import type { RuntimeSummary } from './logic';

function formatNumber(value: number, locale: string, maximumFractionDigits = 1): string {
  return new Intl.NumberFormat(locale, { maximumFractionDigits }).format(value);
}

function formatDuration(hours: number): string {
  const totalMinutes = Math.max(0, Math.round(hours * 60));
  const displayHours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (displayHours === 0) return `${minutes} min`;
  if (minutes === 0) return `${displayHours} h`;
  return `${displayHours} h ${minutes} min`;
}

function setText(root: HTMLElement, role: string, value: string): void {
  const node = root.querySelector<HTMLElement>(`[data-role="${role}"]`);
  if (node) node.textContent = value;
}

function getStatusLabel(status: ReturnType<typeof evaluateRuntime>, ui: LaptopBatteryRuntimeUI): string {
  const labels = {
    comfortable: ui.statusComfortable,
    workable: ui.statusWorkable,
    tight: ui.statusTight,
    urgent: ui.statusUrgent,
  };
  return labels[status];
}

function getHealthLabel(status: ReturnType<typeof evaluateBatteryHealth>, ui: LaptopBatteryRuntimeUI): string {
  const labels = {
    excellent: ui.healthStateExcellent,
    good: ui.healthStateGood,
    aging: ui.healthStateAging,
    worn: ui.healthStateWorn,
  };
  return labels[status];
}

function getScenarioLabel(id: string, ui: LaptopBatteryRuntimeUI): string {
  const labels: Record<string, string> = {
    light: ui.scenarioLight,
    balanced: ui.scenarioBalanced,
    intense: ui.scenarioIntense,
  };
  return labels[id] ?? id;
}

interface ScenarioViewOptions {
  root: HTMLElement;
  summary: RuntimeSummary;
  scenario: RuntimeSummary['scenarios'][number];
  ui: LaptopBatteryRuntimeUI;
  locale: string;
}

function updateScenario(options: ScenarioViewOptions): void {
  const { root, summary, scenario, ui, locale } = options;
  const row = root.querySelector<HTMLElement>(`[data-scenario-row="${scenario.id}"]`);
  const fill = root.querySelector<HTMLElement>(`[data-scenario-fill="${scenario.id}"]`);
  const marker = root.querySelector<HTMLElement>(`[data-scenario-marker="${scenario.id}"]`);
  const status = evaluateRuntime(scenario.runtimeHours);
  if (row) {
    row.dataset.status = status;
    row.dataset.active = String(summary.shortestScenarioId === scenario.id);
  }
  if (fill) fill.style.width = `${scenario.trackPercent}%`;
  if (marker) marker.style.left = `${scenario.trackPercent}%`;
  setText(root, `${scenario.id}-runtime`, formatDuration(scenario.runtimeHours));
  setText(root, `${scenario.id}-power`, `${formatNumber(scenario.powerWatts, locale, 0)} W`);
  setText(root, `${scenario.id}-status`, getStatusLabel(status, ui));
}

export function renderRuntimeResults(root: HTMLElement, summary: RuntimeSummary, ui: LaptopBatteryRuntimeUI, locale: string): void {
  setText(root, 'full-capacity', `${formatNumber(summary.fullChargeCapacityWh, locale)} Wh`);
  setText(root, 'available-energy', `${formatNumber(summary.availableEnergyWh, locale)} Wh`);
  setText(root, 'shortest-scenario', getScenarioLabel(summary.shortestScenarioId, ui));
  setText(root, 'charge-display', `${root.dataset.chargePercent ?? 0}%`);
  const batteryLevel = root.querySelector<HTMLElement>('[data-role="battery-level"]');
  if (batteryLevel) batteryLevel.style.height = `${root.dataset.chargePercent ?? 0}%`;
  setText(root, 'health-state', getHealthLabel(evaluateBatteryHealth(Number(root.dataset.healthPercent ?? 0)), ui));
  summary.scenarios.forEach((scenario) => updateScenario({ root, summary, scenario, ui, locale }));
}
