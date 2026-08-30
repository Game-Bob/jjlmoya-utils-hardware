import { confidenceLabel, type MeasurementEvaluation } from './evaluator';
import { formatMetric, type MeasurementStats } from './logic';
import type { GamepadPollingRateCheckerUI } from './ui';

function setText(root: HTMLElement, selector: string, value: string): void {
  const node = root.querySelector<HTMLElement>(selector);
  if (node) node.textContent = value;
}

export function buildTracePath(values: number[]): string {
  const recent = values.slice(-72);
  if (recent.length < 2) return 'M0 64 L640 64';
  const low = Math.min(...recent);
  const high = Math.max(...recent);
  const span = Math.max(0.01, high - low);
  return recent.map((value, index) => {
    const x = (index / (recent.length - 1)) * 640;
    const y = 112 - ((value - low) / span) * 96;
    return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
}

export function renderMetrics(
  root: HTMLElement,
  stats: MeasurementStats,
  ui: GamepadPollingRateCheckerUI,
): void {
  setText(root, '[data-rate-value]', formatMetric(stats.observedHz, 1) || ui.emptyValue);
  setText(root, '[data-interval-value]', formatMetric(stats.averageIntervalMs, 2) || ui.emptyValue);
  setText(root, '[data-jitter-value]', formatMetric(stats.jitterMs, 2) || ui.emptyValue);
  setText(root, '[data-samples-value]', String(stats.samples));
  root.style.setProperty('--gpr-rate', String(Math.min(1, stats.observedHz / 1000)));
}

export function renderTrace(root: HTMLElement, intervals: number[]): void {
  const path = root.querySelector<SVGPathElement>('[data-trace-path]');
  if (path) path.setAttribute('d', buildTracePath(intervals));
}

export function renderStatus(
  root: HTMLElement,
  evaluation: MeasurementEvaluation,
  ui: GamepadPollingRateCheckerUI,
): void {
  setText(root, '[data-status-text]', evaluation.text);
  setText(root, '[data-confidence-value]', confidenceLabel(evaluation.confidence, ui));
  const status = root.querySelector<HTMLElement>('[data-status]');
  if (status) status.dataset.tone = evaluation.tone;
}

export function renderStick(root: HTMLElement, axes: readonly number[]): void {
  const x = Math.max(-1, Math.min(1, axes[0] ?? 0));
  const y = Math.max(-1, Math.min(1, axes[1] ?? 0));
  root.style.setProperty('--gpr-stick-x', x.toFixed(3));
  root.style.setProperty('--gpr-stick-y', y.toFixed(3));
}

export function renderProgress(root: HTMLElement, ratio: number): void {
  const progress = root.querySelector<HTMLElement>('[data-progress]');
  const percent = Math.round(ratio * 100);
  const normalizedRatio = percent === 100 ? 1 : ratio;
  const ring = root.querySelector<SVGCircleElement>('[data-progress-ring]');
  if (ring) ring.setAttribute('stroke-dashoffset', String(100 - normalizedRatio * 100));
  if (progress) {
    progress.setAttribute('aria-valuenow', String(percent));
    progress.textContent = `${percent}%`;
  }
}
