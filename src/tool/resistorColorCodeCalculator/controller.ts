import { allowedColorsForBand, calculateFromColors, calculateFromSmd, calculateFromTarget, defaultColorsForBandCount, type BandCount, type CalculationMode, type ResistorColor, type ResistorResult } from './logic';
import { renderResistorScene, colorLabel } from './dom-views';
import { evaluateResult } from './evaluator';
import { loadResistorState, saveResistorState } from './storage';
import type { ResistorColorCodeUI } from './ui';

const palette: ResistorColor[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white', 'gold', 'silver'];

export class ResistorColorCodeController {
  private readonly state: ReturnType<typeof loadResistorState>;
  private activeBand = 0;

  constructor(private readonly root: HTMLElement, private readonly ui: ResistorColorCodeUI) {
    this.state = loadResistorState(this.readInitialState());
    this.bindEvents();
    this.render();
  }

  private bindEvents(): void {
    this.bindModeEvents();
    this.bindBandCountEvents();
    this.bindPaletteEvents();
    this.bindSceneEvents();
    this.bindTargetEvents();
    this.bindToleranceEvents();
    this.bindSmdEvents();
  }

  private bindModeEvents(): void {
    this.root.querySelectorAll<HTMLElement>('[data-mode]').forEach((button) => button.addEventListener('click', () => {
      this.state.mode = button.dataset.mode as CalculationMode;
      this.render();
    }));
  }

  private bindBandCountEvents(): void {
    this.root.querySelectorAll<HTMLElement>('[data-band-count]').forEach((button) => button.addEventListener('click', () => {
      this.state.bandCount = Number(button.dataset.bandCount) as BandCount;
      this.state.colors = defaultColorsForBandCount(this.state.bandCount);
      this.activeBand = 0;
      this.render();
    }));
  }

  private bindPaletteEvents(): void {
    this.root.querySelectorAll<HTMLElement>('[data-band]').forEach((button) => button.addEventListener('click', () => {
      this.selectBand(Number(button.dataset.band));
    }));
    this.root.querySelectorAll<HTMLElement>('[data-color]').forEach((button) => this.bindColorButton(button));
  }

  private bindSceneEvents(): void {
    const scene = this.root.querySelector<HTMLElement>('[data-scene]');
    scene?.addEventListener('click', (event) => {
      const band = this.sceneBand(event.target);
      if (band !== null) this.selectBand(band);
    });
    scene?.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const band = this.sceneBand(event.target);
      if (band === null) return;
      event.preventDefault();
      this.selectBand(band);
    });
    scene?.addEventListener('dragover', (event) => {
      if (this.draggedColor(event)) event.preventDefault();
    });
    scene?.addEventListener('drop', (event) => {
      const color = this.draggedColor(event);
      if (!color) return;
      event.preventDefault();
      const band = this.sceneBand(event.target) ?? this.activeBand;
      if (!this.isAllowedColor(color, band)) return;
      this.applyColor(color, band, false);
    });
  }

  private bindColorButton(button: HTMLElement): void {
    button.addEventListener('click', () => {
      const color = this.readColor(button.dataset.color);
      if (color && !this.isAllowedColor(color, this.activeBand)) return;
      if (color) this.applyColor(color, this.activeBand);
    });
    button.addEventListener('dragstart', (event) => {
      const color = this.readColor(button.dataset.color);
      if (!color || !event.dataTransfer) return;
      event.dataTransfer.effectAllowed = 'copy';
      event.dataTransfer.setData('text/plain', color);
    });
  }

  private bindTargetEvents(): void {
    this.root.querySelector<HTMLInputElement>('[data-target]')?.addEventListener('input', (event) => {
      this.state.targetOhms = Number((event.target as HTMLInputElement).value);
      this.render();
    });
  }

  private bindToleranceEvents(): void {
    this.root.querySelectorAll<HTMLElement>('[data-tolerance]').forEach((button) => button.addEventListener('click', () => {
      this.state.tolerancePercent = Number(button.dataset.tolerance) as 1 | 2 | 5 | 10 | 20;
      this.render();
    }));
  }

  private bindSmdEvents(): void {
    this.root.querySelector<HTMLInputElement>('[data-smd]')?.addEventListener('input', (event) => {
      this.state.smdCode = (event.target as HTMLInputElement).value;
      this.render();
    });
  }

  private render(): void {
    const result = this.calculate();
    this.updateModeButtons();
    this.updateBandCountButtons();
    this.updateToleranceButtons();
    this.updateScene(result);
    this.updateReadout(result);
    this.renderPalette();
    this.renderBandButtons(result.colors.length ? result.colors : this.state.colors);
    this.updateSceneSelection();
    saveResistorState(this.state);
  }

  private updateModeButtons(): void {
    this.root.dataset.mode = this.state.mode;
    this.root.querySelectorAll<HTMLElement>('[data-mode]').forEach((button) => button.classList.toggle('active', button.dataset.mode === this.state.mode));
  }

  private updateBandCountButtons(): void {
    this.root.querySelectorAll<HTMLElement>('[data-band-count]').forEach((button) => button.classList.toggle('active', Number(button.dataset.bandCount) === this.state.bandCount));
  }

  private updateToleranceButtons(): void {
    this.root.querySelectorAll<HTMLElement>('[data-tolerance]').forEach((button) => button.classList.toggle('active', Number(button.dataset.tolerance) === this.state.tolerancePercent));
  }

  private updateScene(result: ResistorResult): void {
    const scene = this.root.querySelector<HTMLElement>('[data-scene]');
    if (scene) scene.innerHTML = renderResistorScene(result.colors.length ? result.colors : this.state.colors, result, this.ui);
  }

  private updateReadout(result: ResistorResult): void {
    this.updateMeasurements(result);
    this.updateStatus(result);
  }

  private updateMeasurements(result: ResistorResult): void {
    this.setText('[data-value]', valueText(result));
    this.setText('[data-range]', rangeText(result, this.ui));
    this.setText('[data-tolerance-value]', toleranceText(result));
    this.setText('[data-tempco]', tempcoText(result, this.ui));
    this.setText('[data-requested]', requestedText(result));
  }

  private updateStatus(result: ResistorResult): void {
    const evaluation = evaluateResult(result, this.ui.statusReady, this.ui.statusCheck, this.ui.statusInvalid);
    const badge = this.root.querySelector<HTMLElement>('[data-status]');
    if (badge) {
      badge.textContent = evaluation.value;
      badge.dataset.status = evaluation.status;
    }
  }

  private setText(selector: string, value: string): void {
    const element = this.root.querySelector<HTMLElement>(selector);
    if (element) element.textContent = value;
  }

  private renderPalette(): void {
    const paletteRoot = this.root.querySelector<HTMLElement>('[data-palette]');
    if (!paletteRoot) return;
    paletteRoot.innerHTML = palette.map((color) => this.paletteButton(color)).join('');
    paletteRoot.querySelectorAll<HTMLElement>('[data-color]').forEach((button) => this.bindColorButton(button));
  }

  private paletteButton(color: ResistorColor): string {
    const allowed = this.isAllowedColor(color, this.activeBand);
    const active = allowed && color === this.state.colors[this.activeBand] ? ' active' : '';
    const disabled = allowed ? '' : ' disabled';
    return '<button type="button" draggable="' + (allowed ? 'true' : 'false') + '" class="color-chip color-chip-' + color + active + '" data-color="' + color + '" aria-label="' + colorLabel(color, this.ui) + '" aria-disabled="' + (!allowed) + '" aria-pressed="' + (active ? 'true' : 'false') + '"' + disabled + '><span></span><strong>' + colorLabel(color, this.ui) + '</strong></button>';
  }

  private renderBandButtons(colors: ResistorColor[]): void {
    this.root.querySelectorAll<HTMLElement>('[data-band]').forEach((button) => {
      const index = Number(button.dataset.band);
      button.hidden = index >= this.state.bandCount;
      button.classList.toggle('active', index === this.activeBand);
      button.setAttribute('aria-pressed', index === this.activeBand ? 'true' : 'false');
      const label = button.querySelector('span');
      const color = colors[index] ?? this.state.colors[index] ?? 'black';
      if (label) label.textContent = index + 1 + ': ' + colorLabel(color, this.ui);
    });
  }

  private updateSceneSelection(): void {
    this.root.querySelectorAll<HTMLElement>('[data-svg-band]').forEach((band) => band.classList.toggle('active', Number(band.dataset.svgBand) === this.activeBand));
  }

  private selectBand(index: number): void {
    this.state.mode = 'decode';
    this.activeBand = Math.max(0, Math.min(index, this.state.bandCount - 1));
    this.render();
  }

  private applyColor(color: ResistorColor, index: number, advance = true): void {
    this.state.mode = 'decode';
    this.activeBand = Math.max(0, Math.min(index, this.state.bandCount - 1));
    if (!this.isAllowedColor(color, this.activeBand)) return;
    this.state.colors[this.activeBand] = color;
    if (advance) this.activeBand = Math.min(this.activeBand + 1, this.state.bandCount - 1);
    this.render();
  }

  private sceneBand(target: EventTarget | null): number | null {
    const element = target instanceof Element ? target.closest<HTMLElement>('[data-svg-band]') : null;
    const index = element?.dataset.svgBand;
    return index === undefined ? null : Number(index);
  }

  private draggedColor(event: DragEvent): ResistorColor | null {
    return this.readColor(event.dataTransfer?.getData('text/plain'));
  }

  private isAllowedColor(color: ResistorColor, index: number): boolean {
    return allowedColorsForBand(this.state.bandCount, index).includes(color);
  }

  private readColor(value: string | undefined): ResistorColor | null {
    return palette.includes(value as ResistorColor) ? value as ResistorColor : null;
  }

  private calculate(): ResistorResult {
    if (this.state.mode === 'decode' && !calculateFromColors({ bandCount: this.state.bandCount, colors: this.state.colors }).valid) this.state.colors = defaultColorsForBandCount(this.state.bandCount);
    if (this.state.mode === 'reverse') return calculateFromTarget({ bandCount: this.state.bandCount, targetOhms: this.state.targetOhms, tolerancePercent: this.state.tolerancePercent });
    if (this.state.mode === 'smd') return calculateFromSmd({ code: this.state.smdCode });
    return calculateFromColors({ bandCount: this.state.bandCount, colors: this.state.colors });
  }

  private readInitialState() {
    const initial = JSON.parse(this.root.dataset.initial ?? '{}');
    return {
      mode: initial.mode as CalculationMode,
      bandCount: initial.bandCount as BandCount,
      colors: initial.colors as ResistorColor[],
      targetOhms: initial.targetOhms as number,
      tolerancePercent: initial.tolerancePercent as 1 | 2 | 5 | 10 | 20,
      smdCode: initial.smdCode as string,
    };
  }
}

function formatResult(value: number): string {
  if (value >= 1_000_000_000) return trim(value / 1_000_000_000) + ' GΩ';
  if (value >= 1_000_000) return trim(value / 1_000_000) + ' MΩ';
  if (value >= 1_000) return trim(value / 1_000) + ' kΩ';
  return trim(value) + ' Ω';
}

function trim(value: number): string {
  return Number(value.toFixed(3)).toString();
}

function valueText(result: ResistorResult): string {
  return result.valid ? formatResult(result.valueOhms) : '—';
}

function rangeText(result: ResistorResult, ui: ResistorColorCodeUI): string {
  if (!result.valid) return '—';
  if (result.tolerancePercent > 0) return formatResult(result.minOhms) + ' - ' + formatResult(result.maxOhms);
  return ui.smdNote;
}

function toleranceText(result: ResistorResult): string {
  return result.valid && result.tolerancePercent > 0 ? '±' + result.tolerancePercent + '%' : '—';
}

function tempcoText(result: ResistorResult, ui: ResistorColorCodeUI): string {
  if (!result.valid) return '—';
  return result.tempcoPpm ? result.tempcoPpm + ' ppm/°C' : ui.noTempco;
}

function requestedText(result: ResistorResult): string {
  if (!result.valid) return '—';
  return result.requestedOhms ? formatResult(result.requestedOhms) : '-';
}
