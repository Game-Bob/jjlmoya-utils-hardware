export interface SpectrumCanvasUI extends Record<string, string> {
  badge: string;
  title: string;
  description: string;
  btnStartCalibration: string;
  btnFullscreen: string;
  kbdFullscreen: string;
  kbdFullscreenLabel: string;
  kbdReset: string;
  kbdResetLabel: string;
  kbdEsc: string;
  kbdEscLabel: string;
  gamutSRGB: string;
  gamutDCIP3: string;
  gamutToggle: string;
  hardwareName: string;
  hardwareNamePlaceholder: string;
  purityTest: string;
  gradientTest: string;
  blackHoleTest: string;
  whitePointTest: string;
  colorCheckpoint: string;
  generateReport: string;
  viewResults: string;
  btnExit: string;
  compareSideBySide: string;
}
