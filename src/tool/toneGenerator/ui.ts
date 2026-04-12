export interface ToneGeneratorUI extends Record<string, string> {
  badge: string;
  title: string;
  description: string;
  freqLabel: string;
  preset60: string;
  preset440: string;
  preset1k: string;
  rangeMin: string;
  rangeMax: string;
  waveLabel: string;
  waveSine: string;
  waveSquare: string;
  waveSawtooth: string;
  waveTriangle: string;
  volLabel: string;
  btnPlay: string;
  btnStop: string;
}
