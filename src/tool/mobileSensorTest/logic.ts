export interface MobileSensorSnapshot {
  alpha: number;
  beta: number;
  gamma: number;
  accelerationX: number;
  accelerationY: number;
  accelerationZ: number;
  rotationAlpha: number;
  rotationBeta: number;
  rotationGamma: number;
}

export interface MobileSensorAssessment {
  levelOffset: number;
  motionMagnitude: number;
  stability: 'steady' | 'moving' | 'shaking';
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function safeNumber(value: number | null | undefined): number {
  return Number.isFinite(value) ? Number(value) : 0;
}

export function assessMobileSensors(snapshot: MobileSensorSnapshot): MobileSensorAssessment {
  const levelOffset = Math.hypot(snapshot.beta, snapshot.gamma);
  const motionMagnitude = Math.hypot(snapshot.accelerationX, snapshot.accelerationY, snapshot.accelerationZ);
  let stability: MobileSensorAssessment['stability'] = 'steady';

  if (motionMagnitude > 18) {
    stability = 'shaking';
  } else if (motionMagnitude > 3 || levelOffset > 12) {
    stability = 'moving';
  }

  return { levelOffset, motionMagnitude, stability };
}
