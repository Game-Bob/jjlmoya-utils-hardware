export type PhaseMode = 'normal' | 'inverted';
export type TestSignal = 'pink' | 'sine';

export function getChannelGain(mode: PhaseMode): { left: 1; right: 1 | -1 } {
  return { left: 1, right: mode === 'inverted' ? -1 : 1 };
}

export function clampOutputLevel(value: number): number {
  return Math.min(0.7, Math.max(0.02, value));
}

export function formatPhaseLabel(mode: PhaseMode): string {
  return mode === 'inverted' ? '180 deg inverted' : '0 deg normal';
}
