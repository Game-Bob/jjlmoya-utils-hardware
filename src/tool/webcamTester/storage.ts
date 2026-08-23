export interface WebcamPreferences {
  mirror: boolean;
  guide: boolean;
  deviceId: string;
}

const STORAGE_KEY = 'webcam-tester-preferences';
const DEFAULTS: WebcamPreferences = { mirror: true, guide: true, deviceId: '' };

const isPreferences = (value: unknown): value is WebcamPreferences => {
  if (!value || typeof value !== 'object') return false;
  const item = value as Record<string, unknown>;
  return typeof item.mirror === 'boolean'
    && typeof item.guide === 'boolean'
    && typeof item.deviceId === 'string';
};

export const loadPreferences = (): WebcamPreferences => {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
    return isPreferences(parsed) ? parsed : DEFAULTS;
  } catch {
    return DEFAULTS;
  }
};

export const savePreferences = (preferences: WebcamPreferences): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {}
};
