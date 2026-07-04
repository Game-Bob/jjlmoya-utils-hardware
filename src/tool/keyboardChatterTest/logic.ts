export type ChatterSeverity = 'normal' | 'suspect' | 'chatter';

export interface ChatterThresholds {
  suspectMs: number;
  chatterMs: number;
}

export const defaultChatterThresholds: ChatterThresholds = {
  suspectMs: 50,
  chatterMs: 30,
};

export function classifyKeyDelta(deltaMs: number, thresholds = defaultChatterThresholds): ChatterSeverity {
  if (deltaMs < thresholds.chatterMs) return 'chatter';
  if (deltaMs <= thresholds.suspectMs) return 'suspect';
  return 'normal';
}

export function formatDelta(deltaMs: number | null): string {
  if (deltaMs === null || !Number.isFinite(deltaMs)) return '--';
  return `${Math.max(0, deltaMs).toFixed(1)} ms`;
}

