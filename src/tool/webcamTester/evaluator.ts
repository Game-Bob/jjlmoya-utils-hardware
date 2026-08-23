import type { WebcamTesterUI } from './ui';

export type CameraErrorCode = 'denied' | 'missing' | 'busy' | 'secure' | 'unknown';

const ERROR_NAMES: Record<string, CameraErrorCode> = {
  NotAllowedError: 'denied',
  SecurityError: 'denied',
  NotFoundError: 'missing',
  DevicesNotFoundError: 'missing',
  NotReadableError: 'busy',
  TrackStartError: 'busy',
};

export const classifyCameraError = (error: unknown, secureContext: boolean): CameraErrorCode => {
  if (!secureContext) return 'secure';
  if (!(error instanceof Error)) return 'unknown';
  return ERROR_NAMES[error.name] ?? 'unknown';
};

export const getCameraErrorMessage = (code: CameraErrorCode, ui: WebcamTesterUI): string => {
  const messages: Record<CameraErrorCode, string> = {
    denied: ui.errorPermissionDenied,
    missing: ui.errorNoCamera,
    busy: ui.errorInUse,
    secure: ui.errorSecureContext,
    unknown: ui.errorGeneric,
  };
  return messages[code];
};
