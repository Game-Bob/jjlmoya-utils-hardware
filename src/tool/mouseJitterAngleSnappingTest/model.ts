export type TraceState = 'clean' | 'jitter' | 'snapping';

export interface PointSample { x: number; y: number; t: number; fresh?: boolean; }
export interface TraceEvent { state: TraceState; value: string; }

export interface Elements {
  stage: HTMLElement | null;
  canvas: HTMLCanvasElement | null;
  samples: HTMLElement | null;
  jitterScore: HTMLElement | null;
  snappingScore: HTMLElement | null;
  straightness: HTMLElement | null;
  deviation: HTMLElement | null;
  status: HTMLElement | null;
  sensitivity: HTMLInputElement | null;
  sensitivityValue: HTMLElement | null;
  reset: HTMLElement | null;
  log: HTMLElement | null;
}

export interface Labels {
  statusIdle: string;
  statusHealthy: string;
  statusJitter: string;
  statusSnapping: string;
  statusMixed: string;
  emptyLog: string;
  jitterEvent: string;
  snappingEvent: string;
  combinedEvent: string;
  cleanEvent: string;
  pxUnit: string;
  percentUnit: string;
}

export const MAX_POINTS = 2400;
export const MAX_LOG = 9;
export const WINDOW_SIZE = 32;
