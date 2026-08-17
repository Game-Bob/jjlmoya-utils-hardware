import type { PsuResult } from './logic';

export type PsuStatus = 'insufficient' | 'tight' | 'recommended' | 'oversized';

export function evaluatePsuResult(result: PsuResult): PsuStatus {
  if (result.currentPsuWatts < result.minimumPsuWatts) return 'insufficient';
  if (result.currentPsuWatts < result.recommendedPsuWatts) return 'tight';
  if (result.currentPsuWatts <= result.recommendedPsuWatts * 1.6) return 'recommended';
  return 'oversized';
}
