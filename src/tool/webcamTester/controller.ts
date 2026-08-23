import { buildCameraMetrics } from './logic';
import { loadPreferences, savePreferences, type WebcamPreferences } from './storage';
import { classifyCameraError, getCameraErrorMessage } from './evaluator';
import {
  renderDevices,
  renderMetrics,
  setStageState,
  setToggleState,
} from './dom-views';
import type { WebcamTesterUI } from './ui';

type FrameVideoElement = HTMLVideoElement;

interface TesterElements {
  video: FrameVideoElement;
  start: HTMLButtonElement;
  stop: HTMLButtonElement;
  mirror: HTMLButtonElement;
  guide: HTMLButtonElement;
  cameraTrigger: HTMLButtonElement;
  cameraOptions: HTMLElement;
}

interface TesterState {
  stream: MediaStream | null;
  frameHandle: number;
  frameTimestamps: number[];
  preferences: WebcamPreferences;
  activeDeviceId: string;
}

interface TesterRuntime {
  root: HTMLElement;
  state: TesterState;
  elements: TesterElements;
  ui: WebcamTesterUI;
}

const getElements = (root: HTMLElement): TesterElements | null => {
  const video = root.querySelector<FrameVideoElement>('[data-camera-video]');
  const start = root.querySelector<HTMLButtonElement>('[data-start-camera]');
  const stop = root.querySelector<HTMLButtonElement>('[data-stop-camera]');
  const mirror = root.querySelector<HTMLButtonElement>('[data-toggle-mirror]');
  const guide = root.querySelector<HTMLButtonElement>('[data-toggle-guide]');
  const cameraTrigger = root.querySelector<HTMLButtonElement>('[data-camera-trigger]');
  const cameraOptions = root.querySelector<HTMLElement>('[data-camera-options]');
  if (!video || !start || !stop || !mirror || !guide) return null;
  if (!cameraTrigger || !cameraOptions) return null;
  return { video, start, stop, mirror, guide, cameraTrigger, cameraOptions };
};

const stopStream = (state: TesterState, elements: TesterElements): void => {
  state.stream?.getTracks().forEach((track) => track.stop());
  if (state.frameHandle) elements.video.cancelVideoFrameCallback?.(state.frameHandle);
  elements.video.srcObject = null;
  state.stream = null;
  state.frameHandle = 0;
  state.frameTimestamps = [];
};

const readTrackMetrics = (state: TesterState, elements: TesterElements) => {
  const track = state.stream?.getVideoTracks()[0];
  const settings = track ? track.getSettings() : {};
  const width = settings.width || elements.video.videoWidth;
  const height = settings.height || elements.video.videoHeight;
  return buildCameraMetrics({
    width,
    height,
    configuredFps: settings.frameRate || 0,
    frameTimestamps: state.frameTimestamps,
  });
};

const observeFrames = (
  root: HTMLElement,
  state: TesterState,
  elements: TesterElements,
  ui: WebcamTesterUI,
): void => {
  const callback = (now: number) => {
    if (!state.stream) return;
    state.frameTimestamps = [...state.frameTimestamps.slice(-89), now];
    renderMetrics(root, readTrackMetrics(state, elements), ui);
    state.frameHandle = elements.video.requestVideoFrameCallback?.(callback) ?? 0;
  };
  state.frameHandle = elements.video.requestVideoFrameCallback?.(callback) ?? 0;
  renderMetrics(root, readTrackMetrics(state, elements), ui);
};

const getVideoDevices = async (): Promise<MediaDeviceInfo[]> => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((device) => device.kind === 'videoinput');
};

const getConstraints = (deviceId: string): MediaStreamConstraints => {
  const video: MediaTrackConstraints = {
    width: { ideal: 1920 },
    height: { ideal: 1080 },
    frameRate: { ideal: 30 },
  };
  if (deviceId) video.deviceId = { exact: deviceId };
  return { audio: false, video };
};

const activateStream = async (
  runtime: TesterRuntime,
  deviceId = '',
): Promise<void> => {
  const { root, state, elements, ui } = runtime;
  stopStream(state, elements);
  setStageState(root, 'starting', ui.statusStarting);
  const stream = await navigator.mediaDevices.getUserMedia(getConstraints(deviceId));
  state.stream = stream;
  elements.video.srcObject = stream;
  await elements.video.play();
  const settings = stream.getVideoTracks()[0]?.getSettings();
  state.activeDeviceId = settings?.deviceId ?? deviceId;
  state.preferences.deviceId = state.activeDeviceId;
  savePreferences(state.preferences);
  renderDevices(root, await getVideoDevices(), state.activeDeviceId, ui);
  setStageState(root, 'active', ui.statusReady);
  observeFrames(root, state, elements, ui);
};

const handleStart = async (
  runtime: TesterRuntime,
  deviceId = '',
): Promise<void> => {
  const { root, state, elements, ui } = runtime;
  try {
    await activateStream(runtime, deviceId);
  } catch (error) {
    stopStream(state, elements);
    const code = classifyCameraError(error, window.isSecureContext);
    setStageState(root, 'error', getCameraErrorMessage(code, ui));
    const label = elements.start.querySelector('span:last-child');
    if (label) label.textContent = ui.retryAction;
  }
};

const togglePreference = (
  root: HTMLElement,
  state: TesterState,
  button: HTMLButtonElement,
  key: 'mirror' | 'guide',
): void => {
  state.preferences[key] = !state.preferences[key];
  root.dataset[key] = String(state.preferences[key]);
  setToggleState(button, state.preferences[key]);
  savePreferences(state.preferences);
};

const closeDeviceList = (elements: TesterElements): void => {
  elements.cameraTrigger.setAttribute('aria-expanded', 'false');
  elements.cameraOptions.hidden = true;
};

const bindDevicePicker = (
  root: HTMLElement,
  state: TesterState,
  elements: TesterElements,
  ui: WebcamTesterUI,
): void => {
  elements.cameraTrigger.addEventListener('click', () => {
    const open = elements.cameraTrigger.getAttribute('aria-expanded') === 'true';
    elements.cameraTrigger.setAttribute('aria-expanded', String(!open));
    elements.cameraOptions.hidden = open;
  });
  elements.cameraOptions.addEventListener('click', (event) => {
    const option = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-camera-id]');
    if (!option) return;
    closeDeviceList(elements);
      void handleStart({ root, state, elements, ui }, option.dataset.cameraId);
  });
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closeDeviceList(elements);
  });
};

const bindControls = (
  root: HTMLElement,
  state: TesterState,
  elements: TesterElements,
  ui: WebcamTesterUI,
): void => {
  elements.start.addEventListener('click', () => {
      void handleStart({ root, state, elements, ui }, state.preferences.deviceId);
  });
  elements.stop.addEventListener('click', () => {
    stopStream(state, elements);
    setStageState(root, 'stopped', ui.statusStopped);
  });
  elements.mirror.addEventListener('click', () => {
    togglePreference(root, state, elements.mirror, 'mirror');
  });
  elements.guide.addEventListener('click', () => {
    togglePreference(root, state, elements.guide, 'guide');
  });
};

const applyInitialState = (
  root: HTMLElement,
  state: TesterState,
  elements: TesterElements,
): void => {
  root.dataset.mirror = String(state.preferences.mirror);
  root.dataset.guide = String(state.preferences.guide);
  setToggleState(elements.mirror, state.preferences.mirror);
  setToggleState(elements.guide, state.preferences.guide);
};

export const initWebcamTester = (root: HTMLElement, ui: WebcamTesterUI): void => {
  const elements = getElements(root);
  if (!elements) return;
  const state: TesterState = {
    stream: null,
    frameHandle: 0,
    frameTimestamps: [],
    preferences: loadPreferences(),
    activeDeviceId: '',
  };
  applyInitialState(root, state, elements);
  if (!navigator.mediaDevices?.getUserMedia) {
    setStageState(root, 'error', ui.statusUnsupported);
    elements.start.disabled = true;
    return;
  }
  bindControls(root, state, elements, ui);
  bindDevicePicker(root, state, elements, ui);
  window.addEventListener('pagehide', () => stopStream(state, elements));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && state.stream) setStageState(root, 'active', ui.statusHidden);
  });
};
