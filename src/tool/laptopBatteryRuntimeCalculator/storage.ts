import type { RuntimeInputs } from './logic';

const STORAGE_KEY = 'jjlmoya-laptop-battery-runtime';

export function loadRuntimeInputs(fallback: RuntimeInputs): RuntimeInputs {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored) as RuntimeInputs;
    if (!parsed || !Array.isArray(parsed.scenarios)) return fallback;
    return parsed;
  } catch {
    return fallback;
  }
}

export function saveRuntimeInputs(inputs: RuntimeInputs): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {}
}
