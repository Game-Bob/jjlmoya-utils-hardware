export interface SubwooferCrossoverTestUI extends Record<string, string> {
  sweepLabel: string;
  currentFrequency: string;
  targetFrequency: string;
  elapsed: string;
  statusReady: string;
  statusRunning: string;
  statusStopped: string;
  start: string;
  stop: string;
  markDropout: string;
  reset: string;
  volume: string;
  duration: string;
  safeStart: string;
  roomNote: string;
  dropoutLabel: string;
  dropoutEmpty: string;
  crossoverEstimate: string;
}
