export type StereoChannel = 'left' | 'center' | 'right' | 'sweep';

export interface StereoPanPoint {
  label: StereoChannel;
  pan: number;
  frequency: number;
}

export const stereoPanPoints: StereoPanPoint[] = [
  { label: 'left', pan: -1, frequency: 440 },
  { label: 'center', pan: 0, frequency: 523.25 },
  { label: 'right', pan: 1, frequency: 659.25 },
  { label: 'sweep', pan: 0, frequency: 587.33 },
];

export function getStereoBalance(leftLevel: number, rightLevel: number): number {
  const left = Math.max(0, leftLevel);
  const right = Math.max(0, rightLevel);
  const total = left + right;
  if (total === 0) return 0;
  return (right - left) / total;
}
