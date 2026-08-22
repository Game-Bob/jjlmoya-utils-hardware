import type { MeasurementStats } from './logic';
import type { GamepadPollingRateCheckerUI } from './ui';

export type Confidence = 'low' | 'medium' | 'high';
export type StatusTone = 'idle' | 'active' | 'warning' | 'complete';

export interface MeasurementEvaluation {
  text: string;
  tone: StatusTone;
  confidence: Confidence;
}

export interface EvaluationInput {
  supported: boolean;
  connected: boolean;
  running: boolean;
  completed: boolean;
  stopped: boolean;
  elapsedMs: number;
  moving: boolean;
  stats: MeasurementStats;
}

export function evaluateConfidence(stats: MeasurementStats): Confidence {
  if (stats.samples < 40 || stats.averageIntervalMs <= 0) return 'low';
  const relativeJitter = stats.jitterMs / stats.averageIntervalMs;
  if (stats.samples >= 120 && relativeJitter <= 0.5) return 'high';
  return 'medium';
}

function activeStatus(input: EvaluationInput, ui: GamepadPollingRateCheckerUI): string {
  const needsMovement = input.elapsedMs > 1500 && !input.moving;
  if (input.running && needsMovement) return ui.statusNeedsMovement;
  if (input.running) return ui.statusMeasuring;
  if (input.stats.samples > 0) return ui.statusComplete;
  return ui.statusReady;
}

function statusText(input: EvaluationInput, ui: GamepadPollingRateCheckerUI): string {
  if (!input.supported) return ui.statusUnsupported;
  if (!input.connected) return ui.statusDisconnected;
  if (input.completed) return ui.statusComplete;
  if (input.stopped) return ui.statusStopped;
  return activeStatus(input, ui);
}

function statusTone(input: EvaluationInput): StatusTone {
  if (!input.supported || !input.connected) return 'warning';
  if (input.completed) return 'complete';
  if (input.running) return input.moving ? 'active' : 'warning';
  return 'idle';
}

export function evaluateMeasurement(
  input: EvaluationInput,
  ui: GamepadPollingRateCheckerUI,
): MeasurementEvaluation {
  return {
    text: statusText(input, ui),
    tone: statusTone(input),
    confidence: evaluateConfidence(input.stats),
  };
}

export function confidenceLabel(confidence: Confidence, ui: GamepadPollingRateCheckerUI): string {
  if (confidence === 'high') return ui.confidenceHigh;
  if (confidence === 'medium') return ui.confidenceMedium;
  return ui.confidenceLow;
}
