import { calculatePsuRequirement, PSU_PRESETS, type PsuInput, type PsuPresetId } from './logic';
import { renderPsuDiagram } from './dom-views';
import { evaluatePsuResult, type PsuStatus } from './evaluator';
import { readPsuState, writePsuState } from './storage';
import type { PsuPowerRequirementUI } from './ui';

type NumericKey = keyof PsuInput;

export class PsuPowerRequirementController {
  private readonly root: HTMLElement;
  private readonly ui: PsuPowerRequirementUI;
  private input: PsuInput;

  constructor(root: HTMLElement, ui: PsuPowerRequirementUI) {
    this.root = root;
    this.ui = ui;
    this.input = this.loadInput();
    this.bindInputs();
    this.bindPresets();
    this.bindAdvancedToggle();
    this.syncPresetState();
    this.updateFields();
    this.render();
  }

  private loadInput(): PsuInput {
    const initial = parseInitial(this.root.dataset.initial);
    const saved = readPsuState();
    return normalizeInput({ ...initial, ...saved }, initial);
  }

  private bindInputs(): void {
    this.root.querySelectorAll<HTMLInputElement>('[data-key]').forEach((element) => {
      element.addEventListener('input', () => this.handleInput(element));
    });
  }

  private bindPresets(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => {
      button.addEventListener('click', () => this.applyPreset(button.dataset.preset as PsuPresetId));
    });
  }

  private bindAdvancedToggle(): void {
    const button = this.root.querySelector<HTMLButtonElement>('[data-advanced-toggle]');
    if (button) button.addEventListener('click', () => toggleAdvanced(this.root, button, this.ui));
  }

  private handleInput(element: HTMLInputElement): void {
    const key = element.dataset.key as NumericKey;
    this.input[key] = Number(element.value) as never;
    syncField(this.root, key, element.value);
    this.syncPresetState();
    this.render();
  }

  private applyPreset(presetId: PsuPresetId): void {
    const preset = PSU_PRESETS[presetId];
    if (!preset) return;
    this.input = { ...preset };
    this.root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => button.classList.toggle('active', button.dataset.preset === presetId));
    this.updateFields();
    this.render();
  }

  private updateFields(): void {
    Object.entries(this.input).forEach(([key, value]) => syncField(this.root, key as NumericKey, String(value)));
  }

  private syncPresetState(): void {
    const activePreset = Object.entries(PSU_PRESETS).find(([, preset]) => isSameInput(preset, this.input))?.[0];
    this.root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => button.classList.toggle('active', button.dataset.preset === activePreset));
  }

  private render(): void {
    const result = calculatePsuRequirement(this.input);
    const status = evaluatePsuResult(result);
    updateOutput(this.root, 'baseLoadWatts', formatWatts(result.baseLoadWatts));
    updateOutput(this.root, 'minimumPsuWatts', formatWatts(result.minimumPsuWatts));
    updateOutput(this.root, 'recommendedPsuWatts', formatWatts(result.recommendedPsuWatts));
    updateOutput(this.root, 'currentPsuWatts', formatWatts(result.currentPsuWatts));
    updateOutput(this.root, 'headroomWatts', formatSignedWatts(result.headroomWatts));
    this.updateStatus(status);
    this.updateDiagram(result);
    writePsuState(this.input);
  }

  private updateStatus(status: PsuStatus): void {
    const element = this.root.querySelector<HTMLElement>('[data-status]');
    if (!element) return;
    element.className = `psu-live-verdict psu-status psu-status-${status}`;
    element.textContent = getStatusLabel(status, this.ui);
    updateOutput(this.root, 'summary', `${this.ui.summaryPrefix} ${getAdvice(status, this.ui)}`);
  }

  private updateDiagram(result: ReturnType<typeof calculatePsuRequirement>): void {
    const diagram = this.root.querySelector<HTMLElement>('[data-diagram]');
    if (diagram) diagram.innerHTML = renderPsuDiagram(this.input, result, this.ui);
  }
}

function parseInitial(value: string | undefined): PsuInput {
  try {
    return JSON.parse(value ?? '{}') as PsuInput;
  } catch {
    return { ...PSU_PRESETS.gaming };
  }
}

function normalizeInput(candidate: Partial<PsuInput>, fallback: PsuInput): PsuInput {
  return {
    cpuWatts: readValue(candidate.cpuWatts, fallback.cpuWatts),
    gpuWatts: readValue(candidate.gpuWatts, fallback.gpuWatts),
    motherboardWatts: readValue(candidate.motherboardWatts, fallback.motherboardWatts),
    storageWatts: readValue(candidate.storageWatts, fallback.storageWatts),
    fansWatts: readValue(candidate.fansWatts, fallback.fansWatts),
    peripheralsWatts: readValue(candidate.peripheralsWatts, fallback.peripheralsWatts),
    currentPsuWatts: readValue(candidate.currentPsuWatts, fallback.currentPsuWatts),
    transientMarginPercent: readValue(candidate.transientMarginPercent, fallback.transientMarginPercent),
    growthMarginPercent: readValue(candidate.growthMarginPercent, fallback.growthMarginPercent),
  };
}

function readValue(value: number | undefined, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function isSameInput(left: PsuInput, right: PsuInput): boolean {
  return (Object.keys(left) as NumericKey[]).every((key) => left[key] === right[key]);
}

function syncField(root: HTMLElement, key: NumericKey, value: string): void {
  root.querySelectorAll<HTMLInputElement>(`[data-key="${key}"]`).forEach((element) => {
    if (element.value !== value) element.value = value;
  });
  const label = root.querySelector<HTMLElement>(`[data-range-label="${key}"]`);
  if (label) label.textContent = `${value}%`;
}

function updateOutput(root: HTMLElement, key: string, value: string): void {
  const element = root.querySelector<HTMLElement>(`[data-output="${key}"]`);
  if (element) element.textContent = value;
}

function toggleAdvanced(root: HTMLElement, button: HTMLButtonElement, ui: PsuPowerRequirementUI): void {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isOpen));
  button.textContent = isOpen ? ui.showAdvanced : ui.hideAdvanced;
  root.querySelectorAll<HTMLElement>('[data-advanced-field], [data-advanced-panel]').forEach((element) => {
    element.hidden = isOpen;
  });
}

function formatWatts(value: number): string {
  return Math.round(value).toLocaleString('en-US');
}

function formatSignedWatts(value: number): string {
  return `${value >= 0 ? '+' : ''}${formatWatts(value)}`;
}

function getStatusLabel(status: PsuStatus, ui: PsuPowerRequirementUI): string {
  const labels: Record<PsuStatus, string> = { insufficient: ui.statusInsufficient, tight: ui.statusTight, recommended: ui.statusRecommended, oversized: ui.statusOversized };
  return labels[status];
}

function getAdvice(status: PsuStatus, ui: PsuPowerRequirementUI): string {
  const advice: Record<PsuStatus, string> = { insufficient: ui.adviceInsufficient, tight: ui.adviceTight, recommended: ui.adviceRecommended, oversized: ui.adviceOversized };
  return advice[status];
}
