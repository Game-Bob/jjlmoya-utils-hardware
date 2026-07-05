export interface WaterEjectorUI extends Record<string, string> {
  statusIdle: string;
  statusPlaying: string;
  statusComplete: string;
  frequencyLabel: string;
  volumeLabel: string;
  durationLabel: string;
  startButton: string;
  stopButton: string;
  hertzUnit: string;
  secondsShort: string;
  presetGentle: string;
  presetStandard: string;
  presetDeep: string;
  safetyTitle: string;
  safetyText: string;
  bestResult: string;
  bestResultText: string;
}
