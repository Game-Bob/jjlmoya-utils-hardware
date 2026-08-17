import type { PsuPowerRequirementUI } from './ui';
import type { PsuInput, PsuResult } from './logic';

interface PsuNodeConfig {
  label: string;
  watts: number;
  unit: string;
  x: number;
  y: number;
  kind: string;
  targetX: number;
  targetY: number;
  max: number;
}

export function renderPsuDiagram(input: PsuInput, result: PsuResult, ui: PsuPowerRequirementUI): string {
  const max = Math.max(result.recommendedPsuWatts, result.currentPsuWatts, 1);
  const status = getStatus(result);
  const nodes = renderNodes(input, ui, max);
  const readings = renderReadings(result, ui);
  const core = renderCore(result, status, ui, max);
  return `<svg class="psu-diagram" viewBox="0 0 760 380" role="img" aria-label="${escapeText(ui.diagramTitle)}"><defs>${renderDefs()}</defs><text class="psu-art-caption" x="380" y="27">${escapeText(ui.diagramTitle)}</text>${readings}${nodes}${core}</svg>`;
}

function renderDefs(): string {
  return '<linearGradient id="psu-energy" x1="0" x2="1"><stop offset="0" stop-color="var(--n-accent)" /><stop offset="1" stop-color="var(--n-good)" /></linearGradient><filter id="psu-glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';
}

function renderNodes(input: PsuInput, ui: PsuPowerRequirementUI, max: number): string {
  const configs: PsuNodeConfig[] = [
    { label: ui.cpuWatts, watts: input.cpuWatts, unit: ui.wattsUnit, x: 72, y: 92, kind: 'cpu', targetX: 290, targetY: 155, max },
    { label: ui.gpuWatts, watts: input.gpuWatts, unit: ui.wattsUnit, x: 72, y: 210, kind: 'gpu', targetX: 290, targetY: 210, max },
    { label: ui.motherboardWatts, watts: input.motherboardWatts, unit: ui.wattsUnit, x: 72, y: 328, kind: 'board', targetX: 290, targetY: 265, max },
    { label: ui.storageWatts, watts: input.storageWatts, unit: ui.wattsUnit, x: 688, y: 92, kind: 'storage', targetX: 470, targetY: 155, max },
    { label: ui.fansWatts, watts: input.fansWatts, unit: ui.wattsUnit, x: 688, y: 210, kind: 'fans', targetX: 470, targetY: 210, max },
    { label: ui.peripheralsWatts, watts: input.peripheralsWatts, unit: ui.wattsUnit, x: 688, y: 328, kind: 'peripherals', targetX: 470, targetY: 265, max },
  ];
  return configs.map(renderNode).join('');
}

function renderReadings(result: PsuResult, ui: PsuPowerRequirementUI): string {
  return `<g class="psu-reading psu-reading-minimum"><rect x="218" y="45" width="132" height="48" rx="12" /><text x="284" y="64">${escapeText(ui.minimumMarker)}</text><text class="psu-reading-value" x="284" y="83">${Math.round(result.minimumPsuWatts)} ${escapeText(ui.wattsUnit)}</text></g><g class="psu-reading psu-reading-recommended"><rect x="410" y="45" width="132" height="48" rx="12" /><text x="476" y="64">${escapeText(ui.recommendedMarker)}</text><text class="psu-reading-value" x="476" y="83">${Math.round(result.recommendedPsuWatts)} ${escapeText(ui.wattsUnit)}</text></g>`;
}

function renderCore(result: PsuResult, status: string, ui: PsuPowerRequirementUI, max: number): string {
  const capacity = Math.min(100, result.currentPsuWatts / max * 100);
  return `<g class="psu-core psu-core-${status}"><circle class="psu-core-halo" cx="380" cy="210" r="112" /><rect class="psu-art-body" x="290" y="122" width="180" height="176" rx="24" /><rect class="psu-art-inset" x="306" y="138" width="148" height="144" rx="17" /><circle class="psu-core-ring" cx="380" cy="210" r="98" pathLength="100" /><circle class="psu-core-ring-fill" cx="380" cy="210" r="98" pathLength="100" stroke-dasharray="${capacity} 100" /><circle class="psu-art-fan" cx="380" cy="210" r="51" /><circle class="psu-art-fan-core" cx="380" cy="210" r="12" /><path class="psu-art-blades" d="M 380 198 C 351 171 347 197 369 210 C 347 223 351 249 380 222 C 409 249 413 223 391 210 C 413 197 409 171 380 198 Z" /><text class="psu-art-label" x="380" y="239">PSU</text><circle class="psu-art-led psu-art-led-${status}" cx="437" cy="265" r="5" filter="url(#psu-glow)" /><text class="psu-core-value" x="380" y="270">${Math.round(result.currentPsuWatts)} ${escapeText(ui.wattsUnit)}</text><text class="psu-core-label" x="380" y="289">${escapeText(ui.currentMarker)}</text></g>`;
}

function renderNode(config: PsuNodeConfig): string {
  const radius = 18 + Math.min(14, config.watts / config.max * 26);
  const leftSide = config.x < 300;
  const startX = leftSide ? config.x + 32 : config.x - 32;
  const curveX = leftSide ? startX + 84 : startX - 84;
  const targetY = getTargetY(config);
  const path = `M ${startX} ${config.y} C ${curveX} ${config.y}, ${config.targetX + (leftSide ? -38 : 38)} ${targetY}, ${config.targetX} ${targetY}`;
  return `<g class="psu-node-group" tabindex="0" aria-label="${escapeText(`${config.label} ${Math.round(config.watts)} ${config.unit}`)}"><path id="psu-cable-${config.kind}" class="psu-cable psu-cable-${config.kind}" d="${path}" stroke-width="${Math.max(3.5, config.watts / config.max * 8)}" /><circle class="psu-energy-pulse psu-energy-pulse-${config.kind}" r="3"><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#psu-cable-${config.kind}" /></animateMotion></circle><circle class="psu-node psu-node-${config.kind}" cx="${config.x}" cy="${config.y}" r="${radius}" /><text class="psu-node-label" x="${config.x}" y="${config.y - 28}" text-anchor="middle">${escapeText(config.label)}</text><text class="psu-node-value" x="${config.x}" y="${config.y + 4}" text-anchor="middle">${Math.round(config.watts)} ${escapeText(config.unit)}</text></g>`;
}

function getTargetY(config: PsuNodeConfig): number {
  if (config.kind === 'gpu') return 194;
  if (config.kind === 'fans') return 226;
  return config.targetY;
}

function getStatus(result: PsuResult): string {
  if (result.currentPsuWatts < result.minimumPsuWatts) return 'insufficient';
  if (result.currentPsuWatts < result.recommendedPsuWatts) return 'tight';
  if (result.currentPsuWatts <= result.recommendedPsuWatts * 1.6) return 'recommended';
  return 'oversized';
}

function escapeText(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}
