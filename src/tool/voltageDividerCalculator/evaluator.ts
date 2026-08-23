import type { DividerResult } from './logic';

export type DividerTone = 'good' | 'warning';

export interface DividerEvaluation {
  tone: DividerTone;
  label: 'nominal' | 'invalid' | 'target-invalid';
}

export function evaluateDivider(result: DividerResult): DividerEvaluation {
  if (result.status === 'nominal') return { tone: 'good', label: 'nominal' };
  return { tone: 'warning', label: result.status };
}
