export interface RefreshRateDetectorUI extends Record<string, string> {
  modeStable: string;
  modeFast: string;
  currentHz: string;
  averageHz: string;
  maxHz: string;
  minHz: string;
}
