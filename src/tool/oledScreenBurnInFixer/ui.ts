export interface OledScreenBurnInFixerUI extends Record<string, string> {
  safetyTitle: string;
  safetyBody: string;
  safetyChecklist: string;
  safetyConfirm: string;
  safetyContinue: string;
  startRepair: string;
  controlsLabel: string;
  modeLabel: string;
  modeCycle: string;
  modeNoise: string;
  modeHybrid: string;
  modeCycleDescription: string;
  modeNoiseDescription: string;
  modeHybridDescription: string;
  speedLabel: string;
  durationLabel: string;
  durationShort: string;
  durationStandard: string;
  durationDeep: string;
  durationShortDescription: string;
  durationStandardDescription: string;
  durationDeepDescription: string;
  fullscreenHint: string;
  intensityLabel: string;
  warningBadge: string;
}
