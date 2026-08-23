import type { SignalState } from './logic';
import type { MicrophoneSpectrumTesterUI } from './ui';

export interface SignalEvaluation {
  label: string;
  tone: SignalState;
}

const labels = (ui: MicrophoneSpectrumTesterUI): Record<SignalState, string> => ({
  silent: ui.silentSignal,
  quiet: ui.quietSignal,
  healthy: ui.healthySignal,
  hot: ui.hotSignal,
  clipping: ui.clippingSignal,
});

export const evaluateSignal = (
  state: SignalState,
  ui: MicrophoneSpectrumTesterUI,
): SignalEvaluation => ({ label: labels(ui)[state], tone: state });
