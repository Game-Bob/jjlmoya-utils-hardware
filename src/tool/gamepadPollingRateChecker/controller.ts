import { evaluateMeasurement } from './evaluator';
import {
  calculateStats,
  hasIntentionalMovement,
  normalizeDuration,
  progressRatio,
  type MeasurementDuration,
  type MeasurementStats,
} from './logic';
import { renderMetrics, renderProgress, renderStatus, renderStick, renderTrace } from './dom-views';
import { loadDuration, saveDuration } from './storage';
import type { GamepadPollingRateCheckerUI } from './ui';

const EMPTY_STATS = calculateStats([], 0);

class GamepadPollingController {
  private readonly channel = new MessageChannel();
  private duration: MeasurementDuration = loadDuration();
  private selectedIndex = -1;
  private intervals: number[] = [];
  private stats: MeasurementStats = EMPTY_STATS;
  private lastTimestamp = 0;
  private startedAt = 0;
  private lastYield = 0;
  private lastPaint = 0;
  private running = false;
  private completed = false;
  private stopped = false;
  private moving = false;
  private axes: readonly number[] = [0, 0];

  constructor(
    private readonly root: HTMLElement,
    private readonly ui: GamepadPollingRateCheckerUI,
  ) {}

  mount(): void {
    this.channel.port1.onmessage = () => this.sample();
    this.bindActions();
    this.bindDeviceEvents();
    this.refreshDevices();
    this.selectDuration(this.duration);
    this.render();
  }

  private bindActions(): void {
    this.root.querySelector('[data-device-trigger]')?.addEventListener('click', () => this.toggleDeviceList());
    this.root.querySelector('[data-start]')?.addEventListener('click', () => this.start());
    this.root.querySelector('[data-stop]')?.addEventListener('click', () => this.stop(true));
    this.root.querySelector('[data-reset]')?.addEventListener('click', () => this.reset());
    this.root.querySelectorAll<HTMLElement>('[data-duration]').forEach((button) => {
      button.addEventListener('click', () => this.selectDuration(normalizeDuration(Number(button.dataset.duration))));
    });
  }

  private bindDeviceEvents(): void {
    window.addEventListener('gamepadconnected', () => this.refreshDevices());
    window.addEventListener('gamepaddisconnected', () => this.handleDisconnect());
    document.addEventListener('click', (event) => this.handleOutsideClick(event));
    document.addEventListener('keydown', (event) => this.handleKeydown(event));
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.running) this.stop(true);
    });
  }

  private handleOutsideClick(event: MouseEvent): void {
    if (!this.root.querySelector('[data-device-select]')?.contains(event.target as Node)) {
      this.closeDeviceList();
    }
  }

  private handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') this.closeDeviceList();
  }

  private gamepads(): Gamepad[] {
    if (!('getGamepads' in navigator)) return [];
    return Array.from(navigator.getGamepads()).filter((gamepad): gamepad is Gamepad => Boolean(gamepad));
  }

  private refreshDevices(): void {
    const gamepads = this.gamepads();
    if (!gamepads.some((gamepad) => gamepad.index === this.selectedIndex)) {
      this.selectedIndex = gamepads[0]?.index ?? -1;
    }
    this.renderDeviceOptions(gamepads);
    this.setActionState();
    this.render();
  }

  private renderDeviceOptions(gamepads: Gamepad[]): void {
    const list = this.root.querySelector<HTMLElement>('[data-device-list]');
    if (!list) return;
    list.replaceChildren(...gamepads.map((gamepad) => this.createDeviceOption(gamepad)));
    const selected = gamepads.find((gamepad) => gamepad.index === this.selectedIndex);
    const label = selected?.id || (gamepads.length ? this.ui.deviceFallback : this.ui.devicePlaceholder);
    this.setText('[data-device-value]', label);
  }

  private createDeviceOption(gamepad: Gamepad): HTMLButtonElement {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'gpr-device-option';
    option.textContent = gamepad.id || `${this.ui.deviceFallback} ${gamepad.index + 1}`;
    option.setAttribute('role', 'option');
    option.setAttribute('aria-selected', String(gamepad.index === this.selectedIndex));
    option.addEventListener('click', () => this.chooseDevice(gamepad.index));
    return option;
  }

  private chooseDevice(index: number): void {
    this.selectedIndex = index;
    this.reset();
    this.closeDeviceList();
    this.refreshDevices();
  }

  private toggleDeviceList(): void {
    const trigger = this.root.querySelector<HTMLElement>('[data-device-trigger]');
    const list = this.root.querySelector<HTMLElement>('[data-device-list]');
    const open = trigger?.getAttribute('aria-expanded') !== 'true';
    trigger?.setAttribute('aria-expanded', String(open));
    if (list) list.hidden = !open;
  }

  private closeDeviceList(): void {
    this.root.querySelector('[data-device-trigger]')?.setAttribute('aria-expanded', 'false');
    const list = this.root.querySelector<HTMLElement>('[data-device-list]');
    if (list) list.hidden = true;
  }

  private selectDuration(duration: MeasurementDuration): void {
    this.duration = duration;
    saveDuration(duration);
    this.root.querySelectorAll<HTMLElement>('[data-duration]').forEach((button) => {
      const active = Number(button.dataset.duration) === duration;
      button.dataset.active = String(active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  private start(): void {
    if (this.selectedIndex < 0 || this.running) return;
    this.intervals = [];
    this.stats = EMPTY_STATS;
    this.lastTimestamp = 0;
    this.startedAt = performance.now();
    this.lastYield = this.startedAt;
    this.running = true;
    this.completed = false;
    this.stopped = false;
    this.setActionState();
    this.channel.port2.postMessage(null);
  }

  private stop(manual: boolean): void {
    this.running = false;
    this.completed = !manual;
    this.stopped = manual;
    if (!manual) this.stats = { ...this.stats, elapsedMs: this.duration };
    this.setActionState();
    this.render();
  }

  private reset(): void {
    this.running = false;
    this.completed = false;
    this.stopped = false;
    this.intervals = [];
    this.stats = EMPTY_STATS;
    this.lastTimestamp = 0;
    this.axes = [0, 0];
    this.setActionState();
    this.render();
  }

  private sample(): void {
    if (!this.running) return;
    const now = performance.now();
    const gamepad = this.gamepads().find((item) => item.index === this.selectedIndex);
    if (!gamepad) {
      this.handleDisconnect();
      return;
    }
    this.capture(gamepad);
    this.stats = calculateStats(this.intervals, now - this.startedAt);
    if (now - this.lastPaint >= 32) this.paint(now);
    if (now - this.startedAt >= this.duration) this.stop(false);
    else this.queueNext(now);
  }

  private capture(gamepad: Gamepad): void {
    this.axes = gamepad.axes;
    this.moving = hasIntentionalMovement(gamepad.axes);
    const timestamp = gamepad.timestamp;
    if (timestamp > this.lastTimestamp && this.lastTimestamp > 0 && this.moving) {
      this.intervals.push(timestamp - this.lastTimestamp);
    }
    if (timestamp > this.lastTimestamp) this.lastTimestamp = timestamp;
  }

  private queueNext(now: number): void {
    if (now - this.lastYield > 8) {
      this.lastYield = now;
      window.setTimeout(() => this.channel.port2.postMessage(null), 0);
      return;
    }
    this.channel.port2.postMessage(null);
  }

  private paint(now: number): void {
    this.lastPaint = now;
    this.render();
  }

  private handleDisconnect(): void {
    this.running = false;
    this.selectedIndex = -1;
    this.refreshDevices();
    this.setActionState();
  }

  private render(): void {
    const supported = 'getGamepads' in navigator;
    const connected = this.selectedIndex >= 0;
    const evaluation = evaluateMeasurement({
      supported, connected, running: this.running, completed: this.completed,
      stopped: this.stopped, elapsedMs: this.stats.elapsedMs, moving: this.moving, stats: this.stats,
    }, this.ui);
    renderMetrics(this.root, this.stats, this.ui);
    renderTrace(this.root, this.intervals);
    renderStatus(this.root, evaluation, this.ui);
    renderStick(this.root, this.axes);
    renderProgress(this.root, progressRatio(this.stats.elapsedMs, this.duration));
    this.root.dataset.running = String(this.running);
  }

  private setActionState(): void {
    const connected = this.selectedIndex >= 0;
    const start = this.root.querySelector<HTMLButtonElement>('[data-start]');
    const stop = this.root.querySelector<HTMLButtonElement>('[data-stop]');
    if (start) start.disabled = !connected || this.running;
    if (stop) stop.disabled = !this.running;
  }

  private setText(selector: string, value: string): void {
    const node = this.root.querySelector<HTMLElement>(selector);
    if (node) node.textContent = value;
  }
}

function readUI(root: HTMLElement): GamepadPollingRateCheckerUI | null {
  const script = root.nextElementSibling;
  if (!(script instanceof HTMLScriptElement)) return null;
  try {
    return JSON.parse(script.textContent || '') as GamepadPollingRateCheckerUI;
  } catch {
    return null;
  }
}

export function mountGamepadPollingRateCheckers(): void {
  document.querySelectorAll<HTMLElement>('[data-gamepad-polling-root]').forEach((root) => {
    if (root.dataset.mounted === 'true') return;
    const ui = readUI(root);
    if (ui) {
      root.dataset.mounted = 'true';
      new GamepadPollingController(root, ui).mount();
    }
  });
}
