export interface CameraMetricsInput {
  width: number;
  height: number;
  configuredFps: number;
  frameTimestamps: number[];
}

export type CameraOrientation = 'landscape' | 'portrait' | 'square';
export type FrameDelivery = 'stable' | 'reduced' | 'constrained' | 'pending';

const KNOWN_RATIOS = [
  { value: 16 / 9, label: '16:9' },
  { value: 4 / 3, label: '4:3' },
  { value: 3 / 2, label: '3:2' },
  { value: 1, label: '1:1' },
  { value: 9 / 16, label: '9:16' },
];

const positiveDeltas = (timestamps: number[]): number[] => timestamps
  .slice(1)
  .map((value, index) => value - (timestamps[index] ?? value))
  .filter((value) => value > 0);

export const median = (values: number[]): number => {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((left, right) => left - right);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[middle] ?? 0;
  return ((sorted[middle - 1] ?? 0) + (sorted[middle] ?? 0)) / 2;
};

export const calculateObservedFps = (timestamps: number[]): number => {
  const interval = median(positiveDeltas(timestamps));
  if (interval === 0) return 0;
  return 1000 / interval;
};

export const getOrientation = (width: number, height: number): CameraOrientation => {
  if (width === height) return 'square';
  return width > height ? 'landscape' : 'portrait';
};

export const formatAspectRatio = (width: number, height: number): string => {
  if (width <= 0 || height <= 0) return '';
  const ratio = width / height;
  const match = KNOWN_RATIOS.find((item) => Math.abs(item.value - ratio) < 0.025);
  return match?.label ?? `${ratio.toFixed(2)}:1`;
};

export const classifyFrameDelivery = (
  observedFps: number,
  configuredFps: number,
): FrameDelivery => {
  if (observedFps <= 0 || configuredFps <= 0) return 'pending';
  const deliveryRatio = observedFps / configuredFps;
  if (deliveryRatio >= 0.9) return 'stable';
  if (deliveryRatio >= 0.6) return 'reduced';
  return 'constrained';
};

export const buildCameraMetrics = (input: CameraMetricsInput) => {
  const observedFps = calculateObservedFps(input.frameTimestamps);
  return {
    resolution: input.width > 0 && input.height > 0 ? `${input.width} x ${input.height}` : '',
    aspectRatio: formatAspectRatio(input.width, input.height),
    orientation: getOrientation(input.width, input.height),
    configuredFps: input.configuredFps,
    observedFps,
    frameDelivery: classifyFrameDelivery(observedFps, input.configuredFps),
  };
};
