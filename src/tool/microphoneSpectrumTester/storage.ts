const STORAGE_KEY = 'microphone-spectrum-tester-preferences';

export interface MicrophonePreferences {
  deviceId: string;
}

const defaults: MicrophonePreferences = { deviceId: '' };

export const loadPreferences = (): MicrophonePreferences => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaults;
    const parsed = JSON.parse(stored) as Partial<MicrophonePreferences>;
    return { deviceId: typeof parsed.deviceId === 'string' ? parsed.deviceId : '' };
  } catch {
    return defaults;
  }
};

export const savePreferences = (preferences: MicrophonePreferences): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {}
};
