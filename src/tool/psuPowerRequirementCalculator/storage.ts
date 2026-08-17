import type { PsuInput } from './logic';

const storageKey = 'psu-power-requirement-calculator-state';

export function readPsuState(): Partial<PsuInput> {
  try {
    return JSON.parse(localStorage.getItem(storageKey) ?? '{}') as Partial<PsuInput>;
  } catch {
    return {};
  }
}

export function writePsuState(input: PsuInput): void {
  try {
    localStorage.setItem(storageKey, JSON.stringify(input));
  } catch {}
}
