export interface UpsLoadItem {
  name: string;
  watts: number;
}

export interface UpsRuntimeInput {
  loadItems: UpsLoadItem[];
  batteryWh: number;
  inverterEfficiency: number;
  powerFactor: number;
  reservePercent: number;
}

export interface UpsRuntimeResult {
  totalWatts: number;
  usableWh: number;
  runtimeMinutes: number;
  recommendedWatts: number;
  recommendedVa: number;
  loadBand: 'light' | 'balanced' | 'heavy';
}

export function calculateUpsRuntime(input: UpsRuntimeInput): UpsRuntimeResult {
  const totalWatts = input.loadItems.reduce((sum, item) => sum + Math.max(0, item.watts), 0);
  const efficiency = Math.min(0.98, Math.max(0.5, input.inverterEfficiency));
  const reserve = Math.min(0.8, Math.max(0, input.reservePercent / 100));
  const powerFactor = Math.min(1, Math.max(0.4, input.powerFactor));
  const usableWh = Math.max(0, input.batteryWh) * efficiency * (1 - reserve);
  const runtimeMinutes = totalWatts > 0 ? (usableWh / totalWatts) * 60 : 0;
  const recommendedWatts = Math.ceil((totalWatts * 1.25) / 10) * 10;
  const recommendedVa = Math.ceil((recommendedWatts / powerFactor) / 50) * 50;
  const loadRatio = totalWatts / Math.max(1, recommendedWatts);
  let loadBand: UpsRuntimeResult['loadBand'] = 'heavy';
  if (loadRatio < 0.45) {
    loadBand = 'light';
  } else if (loadRatio < 0.78) {
    loadBand = 'balanced';
  }

  return {
    totalWatts,
    usableWh,
    runtimeMinutes,
    recommendedWatts,
    recommendedVa,
    loadBand,
  };
}
