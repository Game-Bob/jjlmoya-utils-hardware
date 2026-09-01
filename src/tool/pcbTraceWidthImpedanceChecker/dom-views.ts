import { formatNumber, formatSignedPercent } from "./format";
import type { TraceEvaluation } from "./evaluator";
import type { PcbTraceWidthImpedanceCheckerUI } from "./ui";

type DisplayUnits = "metric" | "imperial";

export function syncUnitLabels(root: HTMLElement, units: DisplayUnits): void {
  const labels: Record<string, string> =
    units === "metric"
      ? {
          copperThicknessUm: "µm",
          temperatureRiseC: "°C",
          lengthMm: "mm",
          availableWidthMm: "mm",
          dielectricHeightMm: "mm",
        }
      : {
          copperThicknessUm: "mil",
          temperatureRiseC: "°F",
          lengthMm: "in",
          availableWidthMm: "in",
          dielectricHeightMm: "in",
        };
  root.querySelectorAll<HTMLElement>("[data-unit-label]").forEach((element) => {
    element.textContent =
      labels[element.dataset.unitLabel ?? ""] ?? element.textContent;
  });
}

function resultText(value: number | undefined, unit: string): string {
  return value === undefined ? "-" : `${formatNumber(value)} ${unit}`;
}

function barWidth(value: number, maximum: number): number {
  return Math.max(10, Math.min(430, (value / maximum) * 430));
}

function lengthValue(valueMm: number, units: DisplayUnits): number {
  return units === "metric" ? valueMm : valueMm / 25.4;
}

function lengthUnit(units: DisplayUnits): string {
  return units === "metric" ? "mm" : "in";
}

export function renderScene(
  root: HTMLElement,
  evaluation: TraceEvaluation,
  ui: PcbTraceWidthImpedanceCheckerUI,
  units: DisplayUnits,
): void {
  const scene = root.querySelector<HTMLElement>("[data-trace-scene]");
  if (!scene) return;
  const result = evaluation.result;
  if (!result) {
    scene.innerHTML = `<div class="pcb-scene-empty"><span class="pcb-scene-empty-line"></span><span>${ui.sceneCaption}</span></div>`;
    return;
  }
  const maximum = Math.max(result.thermalWidthMm, result.targetWidthMm, 0.8);
  const thermal = barWidth(result.thermalWidthMm, maximum);
  const target = barWidth(result.targetWidthMm, maximum);
  const available = barWidth(
    Math.max(result.widthMarginMm + result.thermalWidthMm, 0.01),
    maximum,
  );
  const unit = lengthUnit(units);
  scene.innerHTML = `<svg class="pcb-scene" viewBox="0 0 520 290" role="img" aria-label="${ui.sceneLabel}"><rect class="scene-board" x="20" y="28" width="480" height="234" rx="18"></rect><path class="scene-plane" d="M44 80H476M44 210H476"></path><path class="scene-trace-shadow" d="M45 145H475"></path><rect class="scene-available" x="45" y="${145 - available / 16}" width="430" height="${available / 8}" rx="${available / 16}"></rect><rect class="scene-thermal" x="45" y="${145 - thermal / 16}" width="430" height="${thermal / 8}" rx="${thermal / 16}"></rect><path class="scene-target" d="M45 ${145 - target / 16}H475" style="stroke-width:${Math.max(3, target / 8)}"></path><circle class="scene-node" cx="74" cy="145" r="10"></circle><circle class="scene-node" cx="446" cy="145" r="10"></circle><text class="scene-label" x="45" y="63">${ui.thermalLineLabel}</text><text class="scene-label" x="45" y="238">${ui.availableLineLabel}</text><text class="scene-label scene-label-target" x="475" y="63" text-anchor="end">${ui.referenceLineLabel}</text><text class="scene-value" x="475" y="104" text-anchor="end">${formatNumber(lengthValue(result.thermalWidthMm, units))} ${unit}</text><text class="scene-value scene-value-target" x="475" y="188" text-anchor="end">${formatNumber(lengthValue(result.targetWidthMm, units))} ${unit}</text></svg>`;
}

export function renderStatus(
  root: HTMLElement,
  evaluation: TraceEvaluation,
  ui: PcbTraceWidthImpedanceCheckerUI,
): void {
  const status = root.querySelector<HTMLElement>("[data-status]");
  if (!status) return;
  const messages = {
    empty: ui.statusEmpty,
    invalid: ui.statusInvalid,
    ready: ui.statusReady,
  };
  status.dataset.state = evaluation.status;
  status.textContent = messages[evaluation.status];
}

function updateValues(root: HTMLElement, values: Record<string, string>): void {
  root
    .querySelectorAll<HTMLElement>("[data-result-value]")
    .forEach((element) => {
      element.textContent = values[element.dataset.resultValue ?? ""] ?? "-";
    });
}

function badgeText(
  result: TraceEvaluation["result"],
  ui: PcbTraceWidthImpedanceCheckerUI,
): { thermal: string; impedance: string } {
  if (!result)
    return { thermal: ui.thermalBadge, impedance: ui.impedanceBadge };
  const widthText =
    result.widthMarginMm >= 0 ? ui.widthFits : ui.widthDoesNotFit;
  const impedanceText =
    Math.abs(result.impedanceDeltaPercent) <= 10
      ? ui.impedanceClose
      : ui.impedanceFar;
  return {
    thermal: widthText,
    impedance: `${formatSignedPercent(result.impedanceDeltaPercent)} ${impedanceText}`,
  };
}

function updateBadges(
  root: HTMLElement,
  badges: { thermal: string; impedance: string },
): void {
  const thermalBadge = root.querySelector<HTMLElement>("[data-thermal-badge]");
  const impedanceBadge = root.querySelector<HTMLElement>(
    "[data-impedance-badge]",
  );
  if (thermalBadge) thermalBadge.textContent = badges.thermal;
  if (impedanceBadge) impedanceBadge.textContent = badges.impedance;
}

export function renderResults(
  root: HTMLElement,
  evaluation: TraceEvaluation,
  ui: PcbTraceWidthImpedanceCheckerUI,
  units: DisplayUnits,
): void {
  const result = evaluation.result;
  const unit = lengthUnit(units);
  const values: Record<string, string> = {
    thermalWidth: resultText(
      result ? lengthValue(result.thermalWidthMm, units) : undefined,
      unit,
    ),
    availableWidth: resultText(
      result ? lengthValue(result.widthMarginMm, units) : undefined,
      `${unit} margin`,
    ),
    impedance: resultText(result?.impedanceAtThermalWidthOhm, "Ω"),
    drop: resultText(result?.voltageDropV, "V"),
    loss: resultText(result?.powerLossW, "W"),
    pulseEnergy: resultText(result?.pulseEnergyMj, "mJ"),
  };
  updateValues(root, values);
  const badges = badgeText(result, ui);
  updateBadges(root, badges);
  root.querySelectorAll<HTMLElement>("[data-result-card]").forEach((card) => {
    card.dataset.state = result ? "ready" : "empty";
  });
}

export function renderModelLabel(
  root: HTMLElement,
  inputLayer: string,
  ui: PcbTraceWidthImpedanceCheckerUI,
): void {
  const element = root.querySelector<HTMLElement>("[data-model-label]");
  if (element)
    element.textContent =
      inputLayer === "external" ? ui.externalModel : ui.internalModel;
}
