import { calculateFromColors, defaultColorsForBandCount, type BandCount, type CalculationMode, type ResistorColor } from './logic';

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
    const bandCount = validBandCount(parsed.bandCount) ? parsed.bandCount : fallback.bandCount;
    const state = { ...fallback, ...parsed, bandCount, colors: Array.isArray(parsed.colors) ? parsed.colors : fallback.colors };
    if (state.mode === 'decode' && !calculateFromColors({ bandCount: state.bandCount, colors: state.colors }).valid) {
      state.colors = defaultColorsForBandCount(state.bandCount);
    }
    return state;
  } catch {
    return fallback;
  }
}

function validBandCount(value: unknown): value is BandCount {
  return [3, 4, 5, 6].includes(value as BandCount);
}

export function saveResistorState(state: ResistorStoredState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

