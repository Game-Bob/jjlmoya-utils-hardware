import type { LedMessage, LedResult } from './logic';
import type { LedResistorUI } from './ui';

export interface LedEvaluation {
  status: LedMessage;
  value: string;
  visible: boolean;
}

export function evaluateLedResult(result: LedResult, ui: LedResistorUI): LedEvaluation {
  const value = statusLabel(result.message, ui);
  return { status: result.message, value, visible: result.message !== 'ready' };
}

function statusLabel(message: LedMessage, ui: LedResistorUI): string {
  if (message === 'tight') return ui.statusTight;
  if (message === 'hotter') return ui.statusHotter;
  if (message === 'overdriven') return ui.statusOverdriven;
  if (message === 'no-headroom') return ui.statusNoHeadroom;
  if (message === 'invalid') return ui.statusInvalid;
  return '';
}
