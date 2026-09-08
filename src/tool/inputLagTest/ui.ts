export interface InputLagTestUI extends Record<string, string> {
  title: string;
  badge: string;
  modeInstant: string;
  modeKey: string;
  modeVisual: string;
  targetClickPrompt: string;
  labelAvgLatency: string;
  labelMinLatency: string;
  labelMaxLatency: string;
  labelJitter: string;
  labelFps: string;
  labelFrameTime: string;
  labelSamples: string;
  gradeUltraFast: string;
  gradeFast: string;
  gradeModerate: string;
  gradeHigh: string;
  btnReset: string;
  btnCopyReport: string;
  reportCopied: string;
  historyTitle: string;
  pipelineTitle: string;
  distributionTitle: string;
}
