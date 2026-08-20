import type { BandCount, CalculationMode, ResistorColor } from './logic';

interface ResistorStoredState {
  mode: CalculationMode;
  bandCount: BandCount;
  colors: ResistorColor[];
  targetOhms: number;
  tolerancePercent: 1 | 2 | 5 | 10 | 20;
  smdCode: string;
}

const STORAGE_KEY = 'jjlmoya-resistor-color-code-state';

export function loadResistorState(fallback: ResistorStoredState): ResistorStoredState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<ResistorStoredState>;
    return { ...fallback, ...parsed };
  } catch {
    return fallback;
  }
}

export function saveResistorState(state: ResistorStoredState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

