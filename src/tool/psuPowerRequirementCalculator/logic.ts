export type PsuPresetId = 'office' | 'gaming' | 'highEnd' | 'workstation' | 'miniPc';

export interface PsuInput {
  cpuWatts: number;
  gpuWatts: number;
  motherboardWatts: number;
  storageWatts: number;
  fansWatts: number;
  peripheralsWatts: number;
  currentPsuWatts: number;
  transientMarginPercent: number;
  growthMarginPercent: number;
}

export interface PsuResult {
  baseLoadWatts: number;
  transientReserveWatts: number;
  growthReserveWatts: number;
  minimumPsuWatts: number;
  recommendedPsuWatts: number;
  currentPsuWatts: number;
  headroomWatts: number;
  headroomPercent: number;
}

export const PSU_PRESETS: Record<PsuPresetId, PsuInput> = {
  office: { cpuWatts: 65, gpuWatts: 0, motherboardWatts: 70, storageWatts: 40, fansWatts: 10, peripheralsWatts: 30, currentPsuWatts: 400, transientMarginPercent: 10, growthMarginPercent: 15 },
  gaming: { cpuWatts: 95, gpuWatts: 250, motherboardWatts: 80, storageWatts: 25, fansWatts: 30, peripheralsWatts: 50, currentPsuWatts: 650, transientMarginPercent: 10, growthMarginPercent: 15 },
  highEnd: { cpuWatts: 150, gpuWatts: 450, motherboardWatts: 110, storageWatts: 50, fansWatts: 50, peripheralsWatts: 80, currentPsuWatts: 850, transientMarginPercent: 12, growthMarginPercent: 15 },
  workstation: { cpuWatts: 200, gpuWatts: 450, motherboardWatts: 160, storageWatts: 75, fansWatts: 60, peripheralsWatts: 100, currentPsuWatts: 1000, transientMarginPercent: 12, growthMarginPercent: 20 },
  miniPc: { cpuWatts: 65, gpuWatts: 120, motherboardWatts: 70, storageWatts: 25, fansWatts: 15, peripheralsWatts: 30, currentPsuWatts: 450, transientMarginPercent: 10, growthMarginPercent: 15 },
};

const loadKeys: Array<keyof Pick<PsuInput, 'cpuWatts' | 'gpuWatts' | 'motherboardWatts' | 'storageWatts' | 'fansWatts' | 'peripheralsWatts'>> = ['cpuWatts', 'gpuWatts', 'motherboardWatts', 'storageWatts', 'fansWatts', 'peripheralsWatts'];

export function calculatePsuRequirement(input: PsuInput): PsuResult {
  const baseLoadWatts = loadKeys.reduce((total, key) => total + positive(input[key]), 0);
  const transientReserveWatts = baseLoadWatts * percentage(input.transientMarginPercent);
  const growthReserveWatts = baseLoadWatts * percentage(input.growthMarginPercent);
  const minimumPsuWatts = roundUp(baseLoadWatts + transientReserveWatts);
  const recommendedPsuWatts = roundUp(baseLoadWatts + transientReserveWatts + growthReserveWatts);
  const currentPsuWatts = positive(input.currentPsuWatts);
  const headroomWatts = currentPsuWatts - recommendedPsuWatts;
  const headroomPercent = recommendedPsuWatts > 0 ? (headroomWatts / recommendedPsuWatts) * 100 : 0;
  return { baseLoadWatts, transientReserveWatts, growthReserveWatts, minimumPsuWatts, recommendedPsuWatts, currentPsuWatts, headroomWatts, headroomPercent };
}

function positive(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function percentage(value: number): number {
  return Math.min(0.5, Math.max(0, positive(value) / 100));
}

function roundUp(value: number): number {
  return value > 0 ? Math.ceil(value / 50) * 50 : 0;
}
