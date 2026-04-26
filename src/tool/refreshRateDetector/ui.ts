export interface RefreshRateDetectorUI extends Record<string, string> {
  badge: string;
  title: string;
  description: string;
  modeStable: string;
  modeFast: string;
  measurementStatus: string;
  currentHz: string;
  averageHz: string;
  maxHz: string;
  minHz: string;
  standardDetected: string;
  frameSkippingTest: string;
  startMeasurement: string;
  resetMeasurement: string;
  copyResult: string;
  copiedFeedback: string;
  optimalConfiguration: string;
  suboptimalConfiguration: string;
  unstableRefreshRate: string;
  measurementNotStarted: string;
  switchMonitorHint: string;
  incompatibleBrowserMsg: string;
}
