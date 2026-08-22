import type { AudioDelayMode } from './logic';

interface AudioDelaySettings {
  mode: AudioDelayMode;
  alignmentMs: number;
}

const STORAGE_KEY = 'jjlmoya-audio-delay-test';

const defaultSettings: AudioDelaySettings = {
  mode: 'bluetooth',
  alignmentMs: 0,
};

function isMode(value: unknown): value is AudioDelayMode {
  return value === 'speakers' || value === 'wired' || value === 'bluetooth' || value === 'video';
}

export function readSettings(): AudioDelaySettings {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultSettings;
    const parsed = JSON.parse(raw) as Partial<AudioDelaySettings>;
    return {
      mode: isMode(parsed.mode) ? parsed.mode : defaultSettings.mode,
      alignmentMs: typeof parsed.alignmentMs === 'number' ? parsed.alignmentMs : defaultSettings.alignmentMs,
    };
  } catch {
    return defaultSettings;
  }
}

export function writeSettings(settings: AudioDelaySettings): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
  }
}
