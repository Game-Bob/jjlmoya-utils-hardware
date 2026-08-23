import { createMicrophoneEngine, listMicrophones, stopMicrophoneEngine } from './audio-engine';
import type { MicrophoneEngine } from './audio-engine';
import { clearSpectrum, readCanvasPalette, renderSpectrumFrame } from './dom-views';
import { evaluateSignal } from './evaluator';
import {
  calculateDominantFrequency,
  calculateNoiseFloor,
  calculateSignalMetrics,
  classifySignal,
  clamp,
} from './logic';
import { loadPreferences, savePreferences } from './storage';
import type { MicrophoneSpectrumTesterUI } from './ui';

interface Elements {
  start: HTMLButtonElement;
  capture: HTMLButtonElement;
  device: HTMLButtonElement;
  menu: HTMLElement;
  status: HTMLElement;
  signal: HTMLElement;
  level: HTMLElement;
  peak: HTMLElement;
  frequency: HTMLElement;
  noise: HTMLElement;
  canvas: HTMLCanvasElement;
}

interface Runtime {
  engine: MicrophoneEngine | null;
  frameId: number;
  captureUntil: number;
  noiseReadings: number[];
}

interface ControllerContext {
  root: HTMLElement;
  elements: Elements;
  runtime: Runtime;
  ui: MicrophoneSpectrumTesterUI;
}

const select = <T extends Element>(root: HTMLElement, selector: string): T => {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing microphone tester element: ${selector}`);
  return element;
};

const getElements = (root: HTMLElement): Elements => ({
  start: select(root, '[data-mst-start]'),
  capture: select(root, '[data-mst-capture]'),
  device: select(root, '[data-mst-device]'),
  menu: select(root, '[data-mst-menu]'),
  status: select(root, '[data-mst-status]'),
  signal: select(root, '[data-mst-signal]'),
  level: select(root, '[data-mst-level]'),
  peak: select(root, '[data-mst-peak]'),
  frequency: select(root, '[data-mst-frequency]'),
  noise: select(root, '[data-mst-noise]'),
  canvas: select(root, '[data-mst-canvas]'),
});

const formatDb = (value: number, unit: string): string => `${value.toFixed(1)} ${unit}`;

const formatFrequency = (value: number, unit: string): string => {
  if (value <= 0) return `0 ${unit}`;
  return value >= 1000 ? `${(value / 1000).toFixed(1)} k${unit}` : `${Math.round(value)} ${unit}`;
};

const setStatus = (root: HTMLElement, elements: Elements, state: string, text: string): void => {
  root.dataset.state = state;
  elements.status.textContent = text;
};

const resetReadings = (elements: Elements, ui: MicrophoneSpectrumTesterUI): void => {
  elements.level.textContent = ui.noSignalLevel;
  elements.peak.textContent = ui.noSignalPeak;
  elements.frequency.textContent = ui.noSignalFrequency;
  elements.noise.textContent = ui.unmeasured;
  elements.signal.textContent = ui.silentSignal;
};

const closeMenu = (elements: Elements): void => {
  elements.menu.hidden = true;
  elements.device.setAttribute('aria-expanded', 'false');
};

const toggleMenu = (elements: Elements): void => {
  const willOpen = elements.menu.hidden;
  elements.menu.hidden = !willOpen;
  elements.device.setAttribute('aria-expanded', String(willOpen));
  if (willOpen) elements.menu.querySelector<HTMLButtonElement>('button')?.focus();
};

const renderDeviceMenu = (
  elements: Elements,
  devices: MediaDeviceInfo[],
  ui: MicrophoneSpectrumTesterUI,
): void => {
  elements.menu.replaceChildren(...devices.map((device, index) => {
    const option = document.createElement('button');
    option.type = 'button';
    option.role = 'option';
    option.dataset.deviceId = device.deviceId;
    option.textContent = device.label || `${ui.defaultDevice} ${index + 1}`;
    return option;
  }));
};

const updateDeviceLabel = (elements: Elements, devices: MediaDeviceInfo[], deviceId: string, ui: MicrophoneSpectrumTesterUI): void => {
  const selected = devices.find((device) => device.deviceId === deviceId);
  elements.device.querySelector('[data-mst-device-label]')!.textContent = selected?.label || ui.defaultDevice;
  elements.menu.querySelectorAll<HTMLButtonElement>('[data-device-id]').forEach((option) => {
    option.setAttribute('aria-selected', String(option.dataset.deviceId === deviceId));
  });
};

const stopRuntime = async (runtime: Runtime): Promise<void> => {
  cancelAnimationFrame(runtime.frameId);
  if (runtime.engine) await stopMicrophoneEngine(runtime.engine);
  runtime.engine = null;
  runtime.captureUntil = 0;
  runtime.noiseReadings = [];
};

const finishNoiseCapture = (context: ControllerContext): void => {
  const { runtime, elements, ui } = context;
  elements.noise.textContent = formatDb(calculateNoiseFloor(runtime.noiseReadings), ui.dbfsUnit);
  elements.capture.textContent = ui.noiseCaptured;
  elements.capture.disabled = false;
  runtime.captureUntil = 0;
  runtime.noiseReadings = [];
};

const updateCapture = (context: ControllerContext, rms: number, now: number): void => {
  const { runtime } = context;
  if (runtime.captureUntil === 0) return;
  if (now < runtime.captureUntil) runtime.noiseReadings.push(rms);
  else finishNoiseCapture(context);
};

const updateReadings = (context: ControllerContext, engine: MicrophoneEngine): number => {
  const { root, elements, ui } = context;
  const metrics = calculateSignalMetrics(engine.timeData);
  const state = classifySignal(metrics);
  const evaluation = evaluateSignal(state, ui);
  const dominant = calculateDominantFrequency(engine.frequencyData, engine.context.sampleRate, engine.analyser.fftSize);
  elements.level.textContent = state === 'silent' ? ui.noSignalLevel : formatDb(metrics.rmsDbfs, ui.dbfsUnit);
  elements.peak.textContent = state === 'silent' ? ui.noSignalPeak : formatDb(metrics.peakDbfs, ui.dbfsUnit);
  elements.frequency.textContent = state === 'silent' ? ui.noSignalFrequency : formatFrequency(dominant, ui.hzUnit);
  elements.signal.textContent = evaluation.label;
  root.dataset.tone = evaluation.tone;
  root.style.setProperty('--n-mic-level', String(clamp((metrics.rmsDbfs + 60) / 60, 0, 1)));
  return metrics.rms;
};

const animate = (context: ControllerContext): void => {
  const { root, elements, runtime } = context;
  const engine = runtime.engine;
  if (!engine) return;
  engine.analyser.getFloatTimeDomainData(engine.timeData);
  engine.analyser.getFloatFrequencyData(engine.frequencyData);
  const rms = updateReadings(context, engine);
  updateCapture(context, rms, performance.now());
  renderSpectrumFrame({
    canvas: elements.canvas,
    samples: engine.timeData,
    frequencies: engine.frequencyData,
    sampleRate: engine.context.sampleRate,
    fftSize: engine.analyser.fftSize,
    palette: readCanvasPalette(root),
  });
  runtime.frameId = requestAnimationFrame(() => animate(context));
};

const selectedDeviceId = (engine: MicrophoneEngine): string => engine.stream.getAudioTracks()[0]?.getSettings().deviceId ?? '';

const startRuntime = async (context: ControllerContext, deviceId: string): Promise<void> => {
  const { root, elements, runtime, ui } = context;
  setStatus(root, elements, 'requesting', ui.statusRequesting);
  elements.start.disabled = true;
  runtime.engine = await createMicrophoneEngine(deviceId);
  const devices = await listMicrophones();
  const activeId = selectedDeviceId(runtime.engine);
  renderDeviceMenu(elements, devices, ui);
  updateDeviceLabel(elements, devices, activeId, ui);
  elements.device.disabled = devices.length < 2;
  elements.capture.disabled = false;
  elements.start.textContent = ui.stopMicrophone;
  setStatus(root, elements, 'live', ui.statusLive);
  animate(context);
  elements.start.disabled = false;
};

const errorText = (error: unknown, ui: MicrophoneSpectrumTesterUI): string => error instanceof DOMException && error.name === 'NotAllowedError' ? ui.statusDenied : ui.statusError;

const stopAndReset = async (context: ControllerContext): Promise<void> => {
  const { root, elements, runtime, ui } = context;
  await stopRuntime(runtime);
  elements.start.textContent = ui.startMicrophone;
  elements.capture.textContent = ui.captureNoise;
  elements.capture.disabled = true;
  elements.device.disabled = true;
  closeMenu(elements);
  resetReadings(elements, ui);
  clearSpectrum(elements.canvas);
  setStatus(root, elements, 'idle', ui.statusIdle);
};

const beginCapture = (context: ControllerContext): void => {
  const { runtime, elements, ui } = context;
  if (!runtime.engine || runtime.captureUntil > 0) return;
  runtime.noiseReadings = [];
  runtime.captureUntil = performance.now() + 3000;
  elements.capture.textContent = ui.capturingNoise;
  elements.capture.disabled = true;
};

const handleStart = async (context: ControllerContext): Promise<void> => {
  const { root, elements, runtime, ui } = context;
  if (runtime.engine) return stopAndReset(context);
  if (!navigator.mediaDevices?.getUserMedia) {
    setStatus(root, elements, 'error', ui.statusUnsupported);
    return;
  }
  try {
    await startRuntime(context, loadPreferences().deviceId);
  } catch (error) {
    await stopRuntime(runtime);
    setStatus(root, elements, 'error', errorText(error, ui));
    elements.start.disabled = false;
  }
};

const handleDeviceSelection = async (context: ControllerContext, event: Event): Promise<void> => {
  const { root, elements, runtime, ui } = context;
  const option = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-device-id]');
  if (!option) return;
  savePreferences({ deviceId: option.dataset.deviceId ?? '' });
  closeMenu(elements);
  await stopRuntime(runtime);
  try {
    await startRuntime(context, option.dataset.deviceId ?? '');
  } catch (error) {
    setStatus(root, elements, 'error', errorText(error, ui));
    elements.start.disabled = false;
  }
};

const bindEvents = (context: ControllerContext): void => {
  const { root, elements, runtime } = context;
  elements.start.addEventListener('click', () => void handleStart(context));
  elements.capture.addEventListener('click', () => beginCapture(context));
  elements.device.addEventListener('click', () => toggleMenu(elements));
  elements.menu.addEventListener('click', (event) => void handleDeviceSelection(context, event));
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu(elements);
  });
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closeMenu(elements);
  });
  window.addEventListener('pagehide', () => void stopRuntime(runtime), { once: true });
};

export const initMicrophoneSpectrumTester = (root: HTMLElement, ui: MicrophoneSpectrumTesterUI): void => {
  const context: ControllerContext = {
    root,
    elements: getElements(root),
    runtime: { engine: null, frameId: 0, captureUntil: 0, noiseReadings: [] },
    ui,
  };
  resetReadings(context.elements, ui);
  clearSpectrum(context.elements.canvas);
  bindEvents(context);
};
