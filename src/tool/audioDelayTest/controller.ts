import { evaluateManual, evaluateMeasurements, type DiagnosticState } from './evaluator';
import type { AudioDelayMode, LatencySummary } from './logic';
import { clamp } from './logic';
import { readSettings, writeSettings } from './storage';
import {
  getViews,
  setAlignment,
  setCopyState,
  setMicState,
  setPulse,
  setStatus,
  updateSummary,
  type AudioDelayViews,
} from './dom-views';
import type { AudioDelayTestUI } from './ui';

interface RuntimeState {
  context: AudioContext | null;
  analyser: AnalyserNode | null;
  micStream: MediaStream | null;
  running: boolean;
  mode: AudioDelayMode;
  alignmentMs: number;
  measurements: number[];
  expectedMicTimes: number[];
  pulseTimer: number | null;
  micFrame: number | null;
  lastDetection: number;
}

const MODES: AudioDelayMode[] = ['speakers', 'wired', 'bluetooth', 'video'];

export function mountAudioDelayTest(root: HTMLElement, ui: AudioDelayTestUI): void {
  const views = getViews(root);
  const settings = readSettings();
  const state: RuntimeState = {
    context: null,
    analyser: null,
    micStream: null,
    running: false,
    mode: settings.mode,
    alignmentMs: clamp(settings.alignmentMs, -250, 250),
    measurements: [],
    expectedMicTimes: [],
    pulseTimer: null,
    micFrame: null,
    lastDetection: 0,
  };
  bindMode(root, state);
  bindControls(views, state, ui);
  setAlignment(views, state.alignmentMs);
  selectMode(root, state.mode);
  updateResult(views, state, ui);
}

function bindMode(root: HTMLElement, state: RuntimeState): void {
  root.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      const mode = button.dataset.mode;
      if (!mode || !MODES.includes(mode as AudioDelayMode)) return;
      state.mode = mode as AudioDelayMode;
      selectMode(root, state.mode);
      writeSettings({ mode: state.mode, alignmentMs: state.alignmentMs });
    });
  });
}

function selectMode(root: HTMLElement, mode: AudioDelayMode): void {
  root.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((button) => {
    button.dataset.active = String(button.dataset.mode === mode);
  });
}

function bindControls(views: AudioDelayViews, state: RuntimeState, ui: AudioDelayTestUI): void {
  views.startButton.addEventListener('click', () => toggleTest(views, state, ui));
  views.micButton.addEventListener('click', () => enableMicrophone(views, state, ui));
  views.calibration.addEventListener('input', () => changeAlignment(views, state));
  views.copyButton.addEventListener('click', () => copyResult(views, state, ui));
  views.root.querySelector('[data-reset]')?.addEventListener('click', () => resetTest(views, state, ui));
}

function changeAlignment(views: AudioDelayViews, state: RuntimeState): void {
  state.alignmentMs = clamp(Number(views.calibration.value), -250, 250);
  setAlignment(views, state.alignmentMs);
  writeSettings({ mode: state.mode, alignmentMs: state.alignmentMs });
}

async function toggleTest(views: AudioDelayViews, state: RuntimeState, ui: AudioDelayTestUI): Promise<void> {
  if (state.running) {
    stopTest(views, state, ui);
    return;
  }
  const context = await getAudioContext(views, state, ui);
  if (!context) return;
  state.running = true;
  state.measurements = [];
  state.expectedMicTimes = [];
  views.startButton.textContent = ui.stopTest;
  setStatus(views, ui.statusRunning, 'running');
  queuePulse(views, state);
  state.pulseTimer = window.setInterval(() => queuePulse(views, state), 1000);
}

function stopTest(views: AudioDelayViews, state: RuntimeState, ui: AudioDelayTestUI): void {
  if (state.pulseTimer !== null) window.clearInterval(state.pulseTimer);
  state.pulseTimer = null;
  state.running = false;
  state.expectedMicTimes = [];
  views.startButton.textContent = ui.startTest;
  setPulse(views, false);
  setStatus(views, ui.statusReady, 'ready');
  updateResult(views, state, ui);
}

async function getAudioContext(views: AudioDelayViews, state: RuntimeState, ui: AudioDelayTestUI): Promise<AudioContext | null> {
  if (!window.AudioContext) {
    setStatus(views, ui.limitationText, 'error');
    return null;
  }
  state.context ??= new AudioContext();
  await state.context.resume();
  return state.context;
}

function queuePulse(views: AudioDelayViews, state: RuntimeState): void {
  if (!state.context || !state.running) return;
  const leadMs = 180;
  const wallTime = performance.now() + leadMs;
  const audioTime = state.context.currentTime + leadMs / 1000;
  state.expectedMicTimes.push(wallTime);
  playClick(state.context, audioTime);
  const visualDelay = Math.max(0, leadMs + state.alignmentMs);
  window.setTimeout(() => activatePulse(views), visualDelay);
}

function playClick(context: AudioContext, startAt: number): void {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.frequency.value = 880;
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(0.18, startAt + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.07);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(startAt);
  oscillator.stop(startAt + 0.08);
}

function activatePulse(views: AudioDelayViews): void {
  setPulse(views, true);
  window.setTimeout(() => setPulse(views, false), 110);
}

async function enableMicrophone(views: AudioDelayViews, state: RuntimeState, ui: AudioDelayTestUI): Promise<void> {
  if (!navigator.mediaDevices?.getUserMedia) {
    setStatus(views, ui.noMic, 'error');
    return;
  }
  try {
    state.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const context = await getAudioContext(views, state, ui);
    if (!context) return;
    state.analyser = context.createAnalyser();
    state.analyser.fftSize = 2048;
    context.createMediaStreamSource(state.micStream).connect(state.analyser);
    setMicState(views, ui.micEnabled, true);
    setStatus(views, ui.statusWaiting, 'mic-ready');
    pollMicrophone(views, state, ui);
  } catch {
    setStatus(views, ui.permissionDenied, 'error');
  }
}

function pollMicrophone(views: AudioDelayViews, state: RuntimeState, ui: AudioDelayTestUI): void {
  if (!state.analyser) return;
  const buffer = new Uint8Array(state.analyser.fftSize);
  state.analyser.getByteTimeDomainData(buffer);
  const peak = Math.max(...buffer.map((value) => Math.abs(value - 128))) / 128;
  if (peak > 0.2) recordMicrophonePulse(views, state, ui);
  state.micFrame = window.requestAnimationFrame(() => pollMicrophone(views, state, ui));
}

function recordMicrophonePulse(views: AudioDelayViews, state: RuntimeState, ui: AudioDelayTestUI): void {
  const now = performance.now();
  if (now - state.lastDetection < 180) return;
  const expected = state.expectedMicTimes.shift();
  if (expected === undefined) return;
  const latency = now - expected;
  state.lastDetection = now;
  if (latency >= 0 && latency < 1000) state.measurements.push(latency);
  updateResult(views, state, ui);
}

function updateResult(views: AudioDelayViews, state: RuntimeState, ui: AudioDelayTestUI): DiagnosticState {
  const diagnostic = state.measurements.length > 0
    ? evaluateMeasurements(state.mode, state.measurements, state.alignmentMs)
    : evaluateManual(state.mode, state.alignmentMs);
  updateSummary(views, diagnostic, ui);
  return diagnostic;
}

async function copyResult(views: AudioDelayViews, state: RuntimeState, ui: AudioDelayTestUI): Promise<void> {
  const diagnostic = updateResult(views, state, ui);
  const summary = reportText(diagnostic.summary, ui);
  if (!navigator.clipboard) return;
  await navigator.clipboard.writeText(summary);
  setCopyState(views, ui.copied);
}

function reportText(summary: LatencySummary, ui: AudioDelayTestUI): string {
  return `${ui.resultTitle}\n${ui.latencyLabel}: ${summary.latencyMs === null ? ui.notMeasured : `${Math.round(summary.latencyMs)} ms`}\n${ui.alignmentLabel}: ${Math.round(summary.alignmentMs)} ms\n${ui.samplesLabel}: ${summary.samples}`;
}

function resetTest(views: AudioDelayViews, state: RuntimeState, ui: AudioDelayTestUI): void {
  state.measurements = [];
  state.expectedMicTimes = [];
  state.alignmentMs = 0;
  setAlignment(views, 0);
  writeSettings({ mode: state.mode, alignmentMs: 0 });
  updateResult(views, state, ui);
}
