import { hasAnyInput, isPositiveFinite, solveOhmsLaw, type OhmResult, type OhmState } from './logic';

export type EvaluationStatus = 'empty' | 'invalid' | 'ready';

export interface OhmEvaluation {
  status: EvaluationStatus;
  result: OhmResult | null;
}

export function evaluateOhmState(state: OhmState): OhmEvaluation {
  const knownValues = state.known.map((quantity) => state.values[quantity]);
  const hasInvalid = knownValues.some((value) => !isPositiveFinite(value));
  if (!hasAnyInput(state)) return { status: 'empty', result: null };
  if (hasInvalid) return { status: 'invalid', result: null };
  return { status: 'ready', result: solveOhmsLaw(state) };
}
