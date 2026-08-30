import { normalizeDuration, type MeasurementDuration } from './logic';

const STORAGE_KEY = 'gamepad-polling-rate-duration';

export function loadDuration(): MeasurementDuration {
  try {
    if (typeof window === 'undefined') return 10000;
    return normalizeDuration(Number(window.localStorage.getItem(STORAGE_KEY)));
  } catch {
    return 10000;
  }
}

export function saveDuration(duration: MeasurementDuration): void {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, String(duration));
    }
  } catch {}
}
