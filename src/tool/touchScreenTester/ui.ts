export interface TouchScreenTesterUI extends Record<string, string> {
  activeTouchesLabel: string;
  peakTouchesLabel: string;
  coverageLabel: string;
  statusReady: string;
  statusDrawing: string;
  statusCleared: string;
  clearButton: string;
  fullscreenButton: string;
  exitFullscreenButton: string;
  canvasLabel: string;
  unsupportedTouch: string;
}
