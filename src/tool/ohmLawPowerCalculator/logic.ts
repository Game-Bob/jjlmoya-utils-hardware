export const QUANTITIES = ['voltage', 'current', 'resistance', 'power'] as const;

export type Quantity = (typeof QUANTITIES)[number];
export type KnownPair = [Quantity, Quantity];
export type KnownValues = Record<Quantity, number | null>;
export type SolvedValues = Record<Quantity, number>;

export interface OhmState {
  known: KnownPair;
  values: KnownValues;
}

export interface OhmResult {
  values: SolvedValues;
  formula: string;
}

const ORDER: Record<Quantity, number> = {
  voltage: 0,
  current: 1,
  resistance: 2,
  power: 3,
};

export const DEFAULT_STATE: OhmState = {
  known: ['voltage', 'current'],
  values: { voltage: 5, current: 2, resistance: null, power: null },
};

export function isPositiveFinite(value: number | null): value is number {
  return value !== null && Number.isFinite(value) && value > 0;
}

export function parseInputValue(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const value = Number(trimmed);
  return Number.isFinite(value) ? value : null;
}

export function pairKey(pair: KnownPair): string {
  return [...pair].sort((a, b) => ORDER[a] - ORDER[b]).join('-');
}

function fromVoltageCurrent(voltage: number, current: number): SolvedValues {
  return { voltage, current, resistance: voltage / current, power: voltage * current };
}

function fromVoltageResistance(voltage: number, resistance: number): SolvedValues {
  return { voltage, current: voltage / resistance, resistance, power: (voltage * voltage) / resistance };
}

function fromVoltagePower(voltage: number, power: number): SolvedValues {
  return { voltage, current: power / voltage, resistance: (voltage * voltage) / power, power };
}

function fromCurrentResistance(current: number, resistance: number): SolvedValues {
  return { voltage: current * resistance, current, resistance, power: current * current * resistance };
}

function fromCurrentPower(current: number, power: number): SolvedValues {
  return { voltage: power / current, current, resistance: power / (current * current), power };
}

function fromResistancePower(resistance: number, power: number): SolvedValues {
  return { voltage: Math.sqrt(power * resistance), current: Math.sqrt(power / resistance), resistance, power };
}

const PAIR_SOLVERS: Record<string, (first: number, second: number) => SolvedValues> = {
  'voltage-current': fromVoltageCurrent,
  'voltage-resistance': fromVoltageResistance,
  'voltage-power': fromVoltagePower,
  'current-resistance': fromCurrentResistance,
  'current-power': fromCurrentPower,
  'resistance-power': fromResistancePower,
};

function solvePair(pair: KnownPair, first: number, second: number): SolvedValues | null {
  if (!isPositiveFinite(first) || !isPositiveFinite(second)) return null;
  const solver = PAIR_SOLVERS[pairKey(pair)];
  return solver ? solver(first, second) : null;
}

export function solveOhmsLaw(state: OhmState): OhmResult | null {
  const [firstQuantity, secondQuantity] = state.known;
  if (firstQuantity === secondQuantity) return null;
  const first = state.values[firstQuantity];
  const second = state.values[secondQuantity];
  if (!isPositiveFinite(first) || !isPositiveFinite(second)) return null;
  const ordered = [...state.known].sort((a, b) => ORDER[a] - ORDER[b]) as KnownPair;
  const orderedValues = ordered.map((quantity) => state.values[quantity]) as [number, number];
  const values = solvePair(ordered, orderedValues[0], orderedValues[1]);
  if (!values) return null;
  return { values, formula: pairKey(ordered) };
}

export function hasAnyInput(state: OhmState): boolean {
  return state.known.some((quantity) => state.values[quantity] !== null);
}

export function createEmptyState(): OhmState {
  return { known: [...DEFAULT_STATE.known], values: { voltage: null, current: null, resistance: null, power: null } };
}
