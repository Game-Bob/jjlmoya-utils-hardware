import { describe, expect, it } from 'vitest';
import { evaluateBatteryHealth, evaluateRuntime, evaluateRuntimeState } from './evaluator';

describe('laptop battery runtime evaluation', () => {
  it('classifies runtime thresholds from comfortable to urgent', () => {
    expect(evaluateRuntime(6)).toBe('comfortable');
    expect(evaluateRuntime(3)).toBe('workable');
    expect(evaluateRuntime(1)).toBe('tight');
    expect(evaluateRuntime(0.99)).toBe('urgent');
  });

  it('classifies battery health thresholds from excellent to worn', () => {
    expect(evaluateBatteryHealth(90)).toBe('excellent');
    expect(evaluateBatteryHealth(80)).toBe('good');
    expect(evaluateBatteryHealth(60)).toBe('aging');
    expect(evaluateBatteryHealth(59)).toBe('worn');
  });

  it('combines the workload and battery health signals', () => {
    expect(evaluateRuntimeState({ healthPercent: 86, runtimeHours: 2.5 })).toEqual({
      status: 'tight',
      healthStatus: 'good',
    });
  });
});
