export interface ProbadorVibracionMandoUI extends Record<string, string> {
  badge: string;
  title: string;
  description: string;
  deviceDisconnected: string;
  deviceDisconnectedSub: string;
  deviceFallback: string;
  deviceConnectedSub: string;
  noSupportWarning: string;
  tabPresets: string;
  tabCustom: string;
  presetHeavyTitle: string;
  presetHeavyDesc: string;
  presetLightTitle: string;
  presetLightDesc: string;
  presetHeartbeatTitle: string;
  presetHeartbeatDesc: string;
  presetSongTitle: string;
  presetSongDesc: string;
  presetRockYouTitle: string;
  presetRockYouDesc: string;
  presetEarthquakeTitle: string;
  presetEarthquakeDesc: string;
  customStrongLabel: string;
  customWeakLabel: string;
  customDurationLabel: string;
  btnSendSignal: string;
}
