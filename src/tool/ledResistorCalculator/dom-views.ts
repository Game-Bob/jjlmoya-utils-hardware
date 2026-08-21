import { bandMeaning, formatMilliamps, formatOhms, formatWatts, seriesLabel, type BandColor, type BandRole, type LedColor, type LedInput, type LedResult } from './logic';
import { evaluateLedResult } from './evaluator';
import type { LedResistorUI } from './ui';

export function renderCircuitScene(input: LedInput, result: LedResult, ui: LedResistorUI): string {
  return '<div class="lrc-scene" data-status="' + result.message + '" data-led="' + input.color + '">' + formulaMarkup(input, result) + '<svg class="lrc-board" viewBox="0 0 760 300" role="img" aria-label="' + ariaLabel(result, ui) + '">' + glowFilter() + tracesMarkup(result) + psuMarkup(input, ui) + resistorMarkup(result, ui) + ledMarkup(input, result, ui) + groundMarkup(ui) + '</svg>' + legendMarkup(result) + warningMarkup(result, ui) + '</div>';
}

export function colorLabel(color: LedColor, ui: LedResistorUI): string {
  const key = ('color' + color.charAt(0).toUpperCase() + color.slice(1)) as keyof LedResistorUI;
  return ui[key] ?? color;
}

export interface BuyParts {
  ohms: string;
  watts: string;
  series: string;
}

export function buyParts(result: LedResult, input: LedInput): BuyParts {
  if (!result.valid) return { ohms: '-', watts: '-', series: seriesLabel(input.series) };
  return { ohms: formatOhms(result.standardOhms), watts: formatWatts(result.recommendedWatts), series: seriesLabel(input.series) };
}

function formulaMarkup(input: LedInput, result: LedResult): string {
  if (!result.valid) return '<p class="lrc-formula">' + chainText(input) + '</p>';
  return '<p class="lrc-formula">(' + trim(input.supplyVolts) + ' V - ' + chainText(input) + ') / ' + trim(input.currentMilliamps) + ' mA = ' + formatOhms(result.exactOhms) + '</p>';
}

function chainText(input: LedInput): string {
  if (input.ledCount === 1) return trim(input.forwardVolts) + ' V';
  return input.ledCount + ' x ' + trim(input.forwardVolts) + ' V';
}

function glowFilter(): string {
  return '<defs><filter id="lrc-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="lrc-heat-blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter></defs>';
}

function tracesMarkup(result: LedResult): string {
  const flow = result.valid ? ' lrc-flow' : ' lrc-trace-dead';
  return '<path class="lrc-trace-glow' + flow + '" d="M146 150 H214"/><path class="lrc-trace' + flow + '" d="M146 150 H214"/><path class="lrc-trace-glow' + flow + '" d="M396 150 H468"/><path class="lrc-trace' + flow + '" d="M396 150 H468"/><path class="lrc-trace-glow' + flow + '" d="M556 150 H668"/><path class="lrc-trace' + flow + '" d="M556 150 H668"/>';
}

function psuMarkup(input: LedInput, ui: LedResistorUI): string {
  return '<g class="lrc-psu"><rect class="lrc-psu-body" x="36" y="88" width="110" height="124" rx="16"/><text class="lrc-part-kicker" x="91" y="118">' + ui.supplyLabel + '</text><text class="lrc-part-value" x="91" y="158">' + trim(input.supplyVolts) + ' V</text><text class="lrc-part-note" x="91" y="184">' + input.ledCount + ' x LED</text></g>';
}

function resistorMarkup(result: LedResult, ui: LedResistorUI): string {
  const ohms = result.valid ? formatOhms(result.standardOhms) : '-';
  const watts = result.valid ? formatWatts(result.recommendedWatts) : '-';
  return '<g class="lrc-resistor ' + heatClass(result) + '"><rect class="lrc-resistor-lead" x="206" y="144" width="18" height="12" rx="2"/><rect class="lrc-resistor-lead" x="388" y="144" width="18" height="12" rx="2"/><rect class="lrc-resistor-body" x="218" y="118" width="176" height="64" rx="20"/><rect class="lrc-resistor-heat" x="230" y="126" width="152" height="48" rx="16"/>' + bandMarkup(result.bands) + '<text class="lrc-part-kicker" x="306" y="214">' + ui.resistorLabel + '</text><text class="lrc-part-value" x="306" y="236">' + ohms + '</text><text class="lrc-part-watts" x="306" y="256">' + watts + '</text></g>';
}

function bandMarkup(bands: BandColor[]): string {
  return [248, 278, 308, 338].map((x, index) => '<rect class="lrc-band lrc-band-' + (bands[index] ?? 'black') + '" x="' + x + '" y="118" width="16" height="64"></rect>').join('');
}

function ledMarkup(input: LedInput, result: LedResult, ui: LedResistorUI): string {
  const glow = result.valid ? ' lrc-led-lit' : '';
  const current = result.valid ? formatMilliamps(result.actualMilliamps) : '0 mA';
  return '<g class="lrc-led lrc-led-' + input.color + glow + '" style="--n-glow: ' + result.brightnessRatio + '"><circle class="lrc-led-pad" cx="512" cy="154" r="26"/><rect class="lrc-led-lead" x="498" y="148" width="5" height="16"/><rect class="lrc-led-lead" x="521" y="148" width="5" height="16"/><rect class="lrc-led-rim" x="482" y="146" width="60" height="10" rx="2"/><rect class="lrc-led-can" x="492" y="118" width="40" height="32" rx="3"/><path class="lrc-led-dome" d="M492 124 C492 84 532 84 532 124 Z"/><text class="lrc-part-kicker" x="458" y="154">' + (ui.anodeLabel || 'A+') + '</text><text class="lrc-part-kicker" x="566" y="154">' + (ui.cathodeLabel || 'K-') + '</text><text class="lrc-part-value" x="512" y="236">' + current + '</text><text class="lrc-part-note" x="512" y="256">' + colorLabel(input.color, ui) + '</text></g>';
}

function groundMarkup(ui: LedResistorUI): string {
  return '<g class="lrc-gnd"><path class="lrc-gnd-stem" d="M668 150 V186"/><path class="lrc-gnd-line" d="M652 186 H684"/><path class="lrc-gnd-line" d="M658 196 H678"/><path class="lrc-gnd-line" d="M664 206 H672"/><text class="lrc-part-kicker" x="668" y="238">' + ui.groundLabel + '</text></g>';
}

function legendMarkup(result: LedResult): string {
  if (result.bands.length < 4) return '';
  const roles: BandRole[] = ['digit', 'digit', 'multiplier', 'tolerance'];
  return '<div class="lrc-legend">' + result.bands.map((color, index) => legendItem(color, roles[index] ?? 'digit')).join('') + '</div>';
}

function legendItem(color: BandColor, role: 'digit' | 'multiplier' | 'tolerance'): string {
  return '<span class="lrc-legend-item"><span class="lrc-legend-swatch lrc-band-' + color + '"></span>' + bandMeaning(color, role) + '</span>';
}

function warningMarkup(result: LedResult, ui: LedResistorUI): string {
  const evaluation = evaluateLedResult(result, ui);
  if (!evaluation.visible) return '';
  return '<p class="lrc-warning" data-status="' + evaluation.status + '">' + evaluation.value + '</p>';
}

function heatClass(result: LedResult): string {
  if (!result.valid) return 'lrc-resistor-cold';
  if (result.message === 'hotter') return 'lrc-resistor-hot';
  if (result.resistorWatts >= 0.05) return 'lrc-resistor-warm';
  return 'lrc-resistor-cold';
}

function ariaLabel(result: LedResult, ui: LedResistorUI): string {
  if (!result.valid) return ui.statusInvalid;
  return ui.buyLabel + ' ' + formatOhms(result.standardOhms);
}

function trim(value: number): string {
  return Number(value.toFixed(2)).toString();
}
