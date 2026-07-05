export interface SpeakerPhaseTesterUI extends Record<string, string> {
  normal: string;
  inverted: string;
  stop: string;
  pause: string;
  volume: string;
  noiseColor: string;
  pinkNoise: string;
  sineTone: string;
  frequency: string;
  statusReady: string;
  statusNormal: string;
  statusInverted: string;
  instruction: string;
  channelLabel: string;
  leftChannel: string;
  rightChannel: string;
  leftShort: string;
  rightShort: string;
  polarityNormal: string;
  polarityInverted: string;
  safety: string;
}
