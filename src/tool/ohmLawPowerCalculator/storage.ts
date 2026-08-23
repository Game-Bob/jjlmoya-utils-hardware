import { DEFAULT_STATE, QUANTITIES, type OhmState, type Quantity } from './logic';

const STORAGE_KEY = 'jjlmoya-ohm-law-power-calculator';

function isQuantity(value: unknown): value is Quantity {
  return typeof value === 'string' && QUANTITIES.includes(value as Quantity);
}

function hasValidKnown(candidate: Partial<OhmState>): boolean {
  if (!Array.isArray(candidate.known) || candidate.known.length !== 2) return false;
  const [first, second] = candidate.known;
  return isQuantity(first) && isQuantity(second) && first !== second;
}

function hasValidValues(candidate: Partial<OhmState>): boolean {
  if (!candidate.values || typeof candidate.values !== 'object') return false;
  return QUANTITIES.every((quantity) => {
    const item = (candidate.values as Record<string, unknown>)[quantity];
    return item === null || (typeof item === 'number' && Number.isFinite(item));
  });
}

function isStoredState(value: unknown): value is OhmState {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<OhmState>;
  return hasValidKnown(candidate) && hasValidValues(candidate);
}

export function loadOhmState(): OhmState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    return isStoredState(parsed) ? parsed : { ...DEFAULT_STATE, values: { ...DEFAULT_STATE.values } };
  } catch {
    return { ...DEFAULT_STATE, values: { ...DEFAULT_STATE.values } };
  }
}

export function saveOhmState(state: OhmState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
