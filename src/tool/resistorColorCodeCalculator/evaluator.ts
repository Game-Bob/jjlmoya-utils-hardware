import type { ResistorResult } from './logic';

export type ResultStatus = 'ready' | 'check' | 'invalid';

export interface ResultEvaluation {
  status: ResultStatus;
  value: string;
}

export function evaluateResult(result: ResistorResult, ready: string, check: string, invalid: string): ResultEvaluation {
  if (!result.valid) return { status: 'invalid', value: invalid };
  if (result.requestedOhms !== null && relativeError(result.valueOhms, result.requestedOhms) > 0.05) return { status: 'check', value: check };
  return { status: 'ready', value: ready };
}

function relativeError(actual: number, requested: number): number {
  return Math.abs(actual - requested) / requested;
}

