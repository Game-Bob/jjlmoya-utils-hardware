import type { ResistorColor, ResistorResult } from './logic';
import type { ResistorColorCodeUI } from './ui';

const COLOR_HEX: Record<ResistorColor, string> = { black: '#111', brown: '#7b432d', red: '#d9473f', orange: '#ef8b35', yellow: '#e7c84a', green: '#58a86a', blue: '#4c82c4', violet: '#8664b6', gray: '#9a9da3', white: '#f4efe1', gold: '#c79b45', silver: '#b7bdc8' };
const BAND_X = [182, 238, 294, 350, 406, 462];

export function renderResistorScene(colors: ResistorColor[], result: ResistorResult, ui: ResistorColorCodeUI): string {
  const bands = colors.map((color, index) => '<rect class="resistor-band-svg resistor-band-' + (index + 1) + '" data-svg-band="' + index + '" x="' + BAND_X[index] + '" y="56" width="28" height="108" rx="3" fill="' + (COLOR_HEX[color] ?? '#888') + '" tabindex="0" role="button" aria-label="' + ui.bandLabel + ' ' + (index + 1) + ': ' + colorLabel(color, ui) + '"></rect>').join('');
  const resultText = result.valid ? result.valueOhms + ' Ω' : '—';
  const accessibleResultText = result.valid ? resultText : ui.statusInvalid;
  return '<div class="resistor-scene" aria-label="' + accessibleResultText + '"><svg class="resistor-svg" data-resistor-svg viewBox="0 0 680 220" role="img" aria-label="' + accessibleResultText + '"><line class="resistor-wire-svg" x1="24" y1="110" x2="182" y2="110"></line><rect class="resistor-body-svg" x="160" y="44" width="352" height="132" rx="28"></rect>' + bands + '<line class="resistor-wire-svg" x1="512" y1="110" x2="656" y2="110"></line></svg><div class="resistor-scene-caption"><span>' + ui.resistance + '</span><strong>' + resultText + '</strong></div></div>';
}

export function colorLabel(color: ResistorColor, ui: ResistorColorCodeUI): string {
  const key = 'color' + color.slice(0, 1).toUpperCase() + color.slice(1) as keyof ResistorColorCodeUI;
  return ui[key] ?? color;
}

