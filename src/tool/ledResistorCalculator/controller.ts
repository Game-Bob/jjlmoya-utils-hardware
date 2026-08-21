import { applyColorPreset, calculateLedResistor, LED_COLORS, SUPPLY_PRESETS, type ESeries, type LedColor, type LedInput } from './logic';
import { buyParts, renderCircuitScene } from './dom-views';
import { normalizeLedInput, parseInitialInput, readLedState, writeLedState } from './storage';
import type { LedResistorUI } from './ui';

type NumericKey = 'supplyVolts' | 'forwardVolts' | 'currentMilliamps';

export class LedResistorController {
  private readonly root: HTMLElement;
  private readonly ui: LedResistorUI;
  private input: LedInput;

  constructor(root: HTMLElement, ui: LedResistorUI) {
    this.root = root;
    this.ui = ui;
    this.input = this.loadInput();
    this.bindEvents();
    this.syncFields();
    this.render();
  }

  private loadInput(): LedInput {
    return normalizeLedInput({ ...parseInitialInput(this.root.dataset.initial), ...readLedState() }, parseInitialInput(this.root.dataset.initial));
  }

  private bindEvents(): void {
    this.bindNumericInputs();
    this.bindColorButtons();
    this.bindSupplyButtons();
    this.bindCountButtons();
    this.bindSeriesButtons();
    this.bindAdvancedToggle();
  }

  private bindNumericInputs(): void {
    this.root.querySelectorAll<HTMLInputElement>('[data-key]').forEach((element) => {
      element.addEventListener('input', () => this.handleNumeric(element));
    });
  }

  private bindColorButtons(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-color]').forEach((button) => {
      button.addEventListener('click', () => this.applyColor(button.dataset.color as LedColor));
    });
  }

  private bindSupplyButtons(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-supply]').forEach((button) => {
      button.addEventListener('click', () => this.applySupply(Number(button.dataset.supply)));
    });
  }

  private bindCountButtons(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-count]').forEach((button) => {
      button.addEventListener('click', () => this.applyCount(Number(button.dataset.count)));
    });
  }

  private bindSeriesButtons(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-series]').forEach((button) => {
      button.addEventListener('click', () => this.applySeries(button.dataset.series as ESeries));
    });
  }

  private bindAdvancedToggle(): void {
    const button = this.root.querySelector<HTMLButtonElement>('[data-advanced-toggle]');
    if (button) button.addEventListener('click', () => toggleAdvanced(this.root, button, this.ui));
  }

  private handleNumeric(element: HTMLInputElement): void {
    const key = element.dataset.key as NumericKey;
    this.input[key] = Number(element.value);
    this.input = normalizeLedInput(this.input, this.input);
    syncField(this.root, key, String(this.input[key]));
    this.render();
  }

  private applyColor(color: LedColor): void {
    if (!LED_COLORS.includes(color)) return;
    this.input = applyColorPreset(color, this.input);
    this.syncFields();
    this.render();
  }

  private applySupply(volts: number): void {
    if (!SUPPLY_PRESETS.includes(volts)) return;
    this.input.supplyVolts = volts;
    this.syncFields();
    this.render();
  }

  private applyCount(count: number): void {
    this.input.ledCount = count;
    this.input = normalizeLedInput(this.input, this.input);
    this.render();
  }

  private applySeries(series: ESeries): void {
    this.input.series = series;
    this.input = normalizeLedInput(this.input, this.input);
    this.render();
  }

  private syncFields(): void {
    syncField(this.root, 'supplyVolts', String(this.input.supplyVolts));
    syncField(this.root, 'forwardVolts', String(this.input.forwardVolts));
    syncField(this.root, 'currentMilliamps', String(this.input.currentMilliamps));
  }

  private render(): void {
    const result = calculateLedResistor(this.input);
    const scene = this.root.querySelector<HTMLElement>('[data-scene]');
    if (scene) scene.innerHTML = renderCircuitScene(this.input, result, this.ui);
    const buy = buyParts(result, this.input);
    setText(this.root, '[data-buy-ohms]', buy.ohms);
    setText(this.root, '[data-buy-watts]', buy.watts);
    setText(this.root, '[data-buy-series]', buy.series);
    this.updateButtons();
    this.root.dataset.led = this.input.color;
    this.root.dataset.status = result.message;
    writeLedState(this.input);
  }

  private updateButtons(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-color]').forEach((button) => button.classList.toggle('active', button.dataset.color === this.input.color));
    this.root.querySelectorAll<HTMLButtonElement>('[data-supply]').forEach((button) => button.classList.toggle('active', Number(button.dataset.supply) === this.input.supplyVolts));
    this.root.querySelectorAll<HTMLButtonElement>('[data-count]').forEach((button) => button.classList.toggle('active', Number(button.dataset.count) === this.input.ledCount));
    this.root.querySelectorAll<HTMLButtonElement>('[data-series]').forEach((button) => button.classList.toggle('active', button.dataset.series === this.input.series));
  }
}

function toggleAdvanced(root: HTMLElement, button: HTMLButtonElement, ui: LedResistorUI): void {
  const panel = root.querySelector<HTMLElement>('[data-advanced-panel]');
  const open = Boolean(panel?.hasAttribute('hidden'));
  panel?.toggleAttribute('hidden', !open);
  button.setAttribute('aria-expanded', String(open));
  button.textContent = open ? ui.hideDatasheet : ui.showDatasheet;
}

function syncField(root: HTMLElement, key: NumericKey, value: string): void {
  root.querySelectorAll<HTMLInputElement>('[data-key="' + key + '"]').forEach((element) => {
    element.value = value;
  });
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
}
