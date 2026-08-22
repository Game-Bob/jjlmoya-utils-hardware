import type { AudioDelayMode, ConfidenceLevel, LatencySummary } from './logic';
import { manualSummary, summarizeMeasurements } from './logic';

export interface DiagnosticState {
  summary: LatencySummary;
  label: string;
  tone: 'neutral' | 'positive' | 'caution';
}

const confidenceLabels: Record<ConfidenceLevel, string> = {
  manual: 'Manual calibration',
  low: 'Low confidence',
  medium: 'Medium confidence',
  high: 'High confidence',
};

export function evaluateMeasurements(
  mode: AudioDelayMode,
  measurements: number[],
  alignmentMs: number,
): DiagnosticState {
  const summary = summarizeMeasurements(mode, measurements, alignmentMs);
  return {
    summary,
    label: confidenceLabels[summary.confidence],
    tone: summary.confidence === 'high' ? 'positive' : 'caution',
  };
}

export function evaluateManual(mode: AudioDelayMode, alignmentMs: number): DiagnosticState {
  const summary = manualSummary(mode, alignmentMs);
  return {
    summary,
    label: confidenceLabels.manual,
    tone: 'neutral',
  };
}
