export interface RuntimeScenarioInput {
  id: string;
  powerWatts: number;
}

export interface RuntimeInputs {
  designCapacityWh: number;
  batteryHealthPercent: number;
  chargePercent: number;
  scenarios: RuntimeScenarioInput[];
}

export interface RuntimeScenario extends RuntimeScenarioInput {
  runtimeHours: number;
  trackPercent: number;
}

export interface RuntimeSummary {
  fullChargeCapacityWh: number;
  availableEnergyWh: number;
  scenarios: RuntimeScenario[];
  shortestScenarioId: string;
}

const MAX_TRACK_HOURS = 12;

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function safeNumber(value: number, fallback: number): number {
  return Number.isFinite(value) ? value : fallback;
}

function normalizeScenario(scenario: RuntimeScenarioInput): RuntimeScenarioInput {
  return {
    id: scenario.id,
    powerWatts: clamp(safeNumber(scenario.powerWatts, 1), 1, 300),
  };
}

export function calculateRuntimeSummary(inputs: RuntimeInputs): RuntimeSummary {
  const designCapacityWh = clamp(safeNumber(inputs.designCapacityWh, 60), 1, 200);
  const batteryHealthPercent = clamp(safeNumber(inputs.batteryHealthPercent, 100), 1, 100);
  const chargePercent = clamp(safeNumber(inputs.chargePercent, 100), 0, 100);
  const fullChargeCapacityWh = designCapacityWh * (batteryHealthPercent / 100);
  const availableEnergyWh = fullChargeCapacityWh * (chargePercent / 100);
  const scenarios = inputs.scenarios.map((scenario) => {
    const normalized = normalizeScenario(scenario);
    const runtimeHours = availableEnergyWh / normalized.powerWatts;
    return {
      ...normalized,
      runtimeHours,
      trackPercent: clamp((runtimeHours / MAX_TRACK_HOURS) * 100, 0, 100),
    };
  });
  const shortestScenario = scenarios.reduce(
    (shortest, scenario) => (scenario.runtimeHours < shortest.runtimeHours ? scenario : shortest),
    scenarios[0] ?? { id: '', powerWatts: 1, runtimeHours: 0, trackPercent: 0 },
  );

  return {
    fullChargeCapacityWh,
    availableEnergyWh,
    scenarios,
    shortestScenarioId: shortestScenario.id,
  };
}

export function getDefaultRuntimeInputs(): RuntimeInputs {
  return {
    designCapacityWh: 60,
    batteryHealthPercent: 86,
    chargePercent: 72,
    scenarios: [
      { id: 'light', powerWatts: 10 },
      { id: 'balanced', powerWatts: 20 },
      { id: 'intense', powerWatts: 45 },
    ],
  };
}
