import type { AudioDelayTestUI } from './ui';
import type { DiagnosticState } from './evaluator';
import { formatMilliseconds, formatSignedMilliseconds } from './logic';

export interface AudioDelayViews {
  root: HTMLElement;
  status: HTMLElement;
  latency: HTMLElement[];
  alignment: HTMLElement[];
  confidence: HTMLElement;
  samples: HTMLElement;
  calibration: HTMLInputElement;
  calibrationValue: HTMLElement;
  micButton: HTMLButtonElement;
  startButton: HTMLButtonElement;
  copyButton: HTMLButtonElement;
  orbit: HTMLElement;
}

function query<T extends Element>(root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing audio delay view: ${selector}`);
  return element;
}

function queryAll<T extends Element>(root: HTMLElement, selector: string): T[] {
  return Array.from(root.querySelectorAll<T>(selector));
}

export function getViews(root: HTMLElement): AudioDelayViews {
  return {
    root,
    status: query(root, '[data-status]'),
    latency: queryAll(root, '[data-latency]'),
    alignment: queryAll(root, '[data-alignment]'),
    confidence: query(root, '[data-confidence]'),
    samples: query(root, '[data-samples]'),
    calibration: query(root, '[data-calibration]'),
    calibrationValue: query(root, '[data-calibration-value]'),
    micButton: query(root, '[data-enable-mic]'),
    startButton: query(root, '[data-start]'),
    copyButton: query(root, '[data-copy]'),
    orbit: query(root, '[data-orbit]'),
  };
}

export function setStatus(views: AudioDelayViews, text: string, state: string): void {
  views.status.textContent = text;
  views.root.dataset.state = state;
}

export function setAlignment(views: AudioDelayViews, value: number): void {
  views.calibration.value = String(value);
  views.calibrationValue.textContent = formatSignedMilliseconds(value);
  views.root.style.setProperty('--adt-offset', `${value}ms`);
}

export function setMicState(views: AudioDelayViews, text: string, active: boolean): void {
  views.micButton.textContent = text;
  views.micButton.dataset.active = String(active);
}

export function setPulse(views: AudioDelayViews, active: boolean): void {
  views.orbit.classList.toggle('is-pulsing', active);
}

export function updateSummary(views: AudioDelayViews, diagnostic: DiagnosticState, ui: AudioDelayTestUI): void {
  const summary = diagnostic.summary;
  views.latency.forEach((element) => {
    element.textContent = formatMilliseconds(summary.latencyMs);
  });
  views.alignment.forEach((element) => {
    element.textContent = formatSignedMilliseconds(summary.alignmentMs);
  });
  views.confidence.textContent = confidenceText(summary.confidence, ui);
  views.samples.textContent = String(summary.samples);
  views.confidence.dataset.tone = diagnostic.tone;
}

function confidenceText(level: DiagnosticState['summary']['confidence'], ui: AudioDelayTestUI): string {
  if (level === 'manual') return ui.manualConfidence;
  if (level === 'high') return ui.highConfidence;
  if (level === 'medium') return ui.mediumConfidence;
  return ui.lowConfidence;
}

export function setCopyState(views: AudioDelayViews, text: string): void {
  views.copyButton.textContent = text;
  window.setTimeout(() => {
    views.copyButton.textContent = views.copyButton.dataset.defaultText ?? text;
  }, 1600);
}
