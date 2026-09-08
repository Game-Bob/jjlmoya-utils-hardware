export type RuntimeStatus = 'comfortable' | 'workable' | 'tight' | 'urgent';

export interface RuntimeEvaluation {
  status: RuntimeStatus;
  healthStatus: 'excellent' | 'good' | 'aging' | 'worn';
}

export function evaluateRuntime(runtimeHours: number): RuntimeStatus {
  if (runtimeHours >= 6) return 'comfortable';
  if (runtimeHours >= 3) return 'workable';
  if (runtimeHours >= 1) return 'tight';
  return 'urgent';
}

export function evaluateBatteryHealth(healthPercent: number): RuntimeEvaluation['healthStatus'] {
  if (healthPercent >= 90) return 'excellent';
  if (healthPercent >= 80) return 'good';
  if (healthPercent >= 60) return 'aging';
  return 'worn';
}

export function evaluateRuntimeState(input: { healthPercent: number; runtimeHours: number }): RuntimeEvaluation {
  return {
    status: evaluateRuntime(input.runtimeHours),
    healthStatus: evaluateBatteryHealth(input.healthPercent),
  };
}
