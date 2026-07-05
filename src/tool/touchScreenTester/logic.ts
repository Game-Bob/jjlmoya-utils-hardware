export interface TouchPoint {
  id: number;
  x: number;
  y: number;
}

export interface TouchMetrics {
  activeTouches: number;
  peakTouches: number;
  coveragePercent: number;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function calculateCoveragePercent(markedCells: number, totalCells: number): number {
  if (totalCells <= 0) return 0;
  return clamp((markedCells / totalCells) * 100, 0, 100);
}

export function summarizeTouchMetrics(activeTouches: number, peakTouches: number, markedCells: number, totalCells: number): TouchMetrics {
  return {
    activeTouches,
    peakTouches: Math.max(activeTouches, peakTouches),
    coveragePercent: calculateCoveragePercent(markedCells, totalCells),
  };
}
