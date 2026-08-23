import type { FrameDelivery } from './logic';
import type { WebcamTesterUI } from './ui';

export interface CameraViewMetrics {
  resolution: string;
  aspectRatio: string;
  orientation: 'landscape' | 'portrait' | 'square';
  configuredFps: number;
  observedFps: number;
  frameDelivery: FrameDelivery;
}

const setText = (root: HTMLElement, selector: string, value: string): void => {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
};

const formatFps = (value: number, ui: WebcamTesterUI): string => {
  if (value <= 0) return ui.emptyValue;
  return `${value.toFixed(1)} ${ui.fpsUnit}`;
};

const orientationText = (value: CameraViewMetrics['orientation'], ui: WebcamTesterUI): string => {
  const labels = {
    landscape: ui.landscapeValue,
    portrait: ui.portraitValue,
    square: ui.squareValue,
  };
  return labels[value];
};

const deliveryText = (value: FrameDelivery, ui: WebcamTesterUI): string => {
  const labels = {
    stable: ui.frameStable,
    reduced: ui.frameReduced,
    constrained: ui.frameConstrained,
    pending: ui.framePending,
  };
  return labels[value];
};

export const renderMetrics = (
  root: HTMLElement,
  metrics: CameraViewMetrics,
  ui: WebcamTesterUI,
): void => {
  setText(root, '[data-metric="resolution"]', metrics.resolution || ui.emptyValue);
  setText(root, '[data-metric="aspect"]', metrics.aspectRatio || ui.emptyValue);
  setText(root, '[data-metric="orientation"]', orientationText(metrics.orientation, ui));
  setText(root, '[data-metric="configured-fps"]', formatFps(metrics.configuredFps, ui));
  setText(root, '[data-metric="observed-fps"]', formatFps(metrics.observedFps, ui));
  setText(root, '[data-metric="delivery"]', deliveryText(metrics.frameDelivery, ui));
  root.dataset.frameDelivery = metrics.frameDelivery;
  root.style.setProperty('--webcam-frame-energy', `${Math.min(metrics.observedFps / 60, 1)}`);
};

export const setStageState = (
  root: HTMLElement,
  state: 'idle' | 'starting' | 'active' | 'error' | 'stopped',
  message: string,
): void => {
  root.dataset.state = state;
  setText(root, '[data-status-message]', message);
};

const createDeviceOption = (
  device: MediaDeviceInfo,
  index: number,
  activeId: string,
  ui: WebcamTesterUI,
): HTMLButtonElement => {
  const option = document.createElement('button');
  option.type = 'button';
  option.className = 'camera-room__device-option';
  option.dataset.cameraId = device.deviceId;
  option.setAttribute('role', 'option');
  option.setAttribute('aria-selected', String(device.deviceId === activeId));
  option.textContent = device.label || `${ui.defaultDevice} ${index + 1}`;
  return option;
};

export const renderDevices = (
  root: HTMLElement,
  devices: MediaDeviceInfo[],
  activeId: string,
  ui: WebcamTesterUI,
): void => {
  const list = root.querySelector<HTMLElement>('[data-camera-options]');
  const trigger = root.querySelector<HTMLElement>('[data-camera-trigger-label]');
  const picker = root.querySelector<HTMLElement>('[data-camera-picker]');
  const triggerButton = root.querySelector<HTMLButtonElement>('[data-camera-trigger]');
  if (!list || !trigger || !picker || !triggerButton) return;
  list.replaceChildren(...devices.map((device, index) => (
    createDeviceOption(device, index, activeId, ui)
  )));
  const activeIndex = devices.findIndex((device) => device.deviceId === activeId);
  const active = activeIndex >= 0 ? devices[activeIndex] : devices[0];
  trigger.textContent = active?.label || ui.defaultDevice;
  const hasChoice = devices.length > 1;
  picker.hidden = !hasChoice;
  triggerButton.disabled = !hasChoice;
  root.dataset.deviceCount = String(devices.length);
};

export const setToggleState = (
  button: HTMLButtonElement,
  active: boolean,
): void => {
  button.setAttribute('aria-pressed', String(active));
  button.dataset.active = String(active);
};
