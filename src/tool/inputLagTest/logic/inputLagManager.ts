import { LatencyEngine } from './latencyEngine';
import { FrameMonitor } from './frameMonitor';
import { StatsCalculator } from './statsCalculator';
import { GaugeRenderer } from './gaugeRenderer';
import { TimelineChart } from './timelineChart';
import { DistributionChart } from './distributionChart';
import { ReportGenerator } from './reportGenerator';
import { VisualTestHandler } from './visualTestHandler';
import { HistoryCardRenderer } from './historyCardRenderer';
import { PipelineRenderer } from './pipelineRenderer';
import type { LatencySample } from './statsCalculator';

export interface ManagerElements {
  targetArea: HTMLElement | null;
  targetPrompt: HTMLElement | null;
  avgLatency: HTMLElement | null;
  minLatency: HTMLElement | null;
  maxLatency: HTMLElement | null;
  jitter: HTMLElement | null;
  fps: HTMLElement | null;
  frameTime: HTMLElement | null;
  samplesCount: HTMLElement | null;
  gradeBadge: HTMLElement | null;
  historyContainer: HTMLElement | null;
  btnReset: HTMLElement | null;
  btnCopyReport: HTMLElement | null;
  modeInstantBtn: HTMLElement | null;
  modeKeyBtn: HTMLElement | null;
  modeVisualBtn: HTMLElement | null;
  gaugeCanvas: HTMLCanvasElement | null;
  chartCanvas: HTMLCanvasElement | null;
  distCanvas: HTMLCanvasElement | null;
  pipeUsbVal: HTMLElement | null;
  pipeOsVal: HTMLElement | null;
  pipeFrameVal: HTMLElement | null;
  pipeDisplayVal: HTMLElement | null;
  pipeUsbBar: HTMLElement | null;
  pipeOsBar: HTMLElement | null;
  pipeFrameBar: HTMLElement | null;
  pipeDisplayBar: HTMLElement | null;
}

export interface ManagerConfig {
  promptClick: string;
  promptKey: string;
  promptWait: string;
  promptNow: string;
  gradeUltraFast: string;
  gradeFast: string;
  gradeModerate: string;
  gradeHigh: string;
  reportCopied: string;
}

export class InputLagManager {
  private elements: ManagerElements;
  private config: ManagerConfig;
  private engine: LatencyEngine;
  private frameMon: FrameMonitor;
  private visualHandler: VisualTestHandler;
  private cardRenderer: HistoryCardRenderer;
  private pipeRenderer: PipelineRenderer;
  private gauge: GaugeRenderer | null = null;
  private timeline: TimelineChart | null = null;
  private dist: DistributionChart | null = null;
  private currentMode: 'instant' | 'key' | 'visual' = 'instant';
  private fpsVal: number = 60;
  private frameTimeVal: number = 16.67;

  constructor(elements: ManagerElements, config: ManagerConfig) {
    this.elements = elements;
    this.config = config;

    this.initRenderers();
    this.visualHandler = new VisualTestHandler(
      { targetArea: elements.targetArea, targetPrompt: elements.targetPrompt },
      { promptClick: config.promptClick, promptWait: config.promptWait, promptNow: config.promptNow }
    );
    this.cardRenderer = new HistoryCardRenderer(elements.historyContainer);
    this.pipeRenderer = new PipelineRenderer({
      pipeUsbVal: elements.pipeUsbVal, pipeOsVal: elements.pipeOsVal,
      pipeFrameVal: elements.pipeFrameVal, pipeDisplayVal: elements.pipeDisplayVal,
      pipeUsbBar: elements.pipeUsbBar, pipeOsBar: elements.pipeOsBar,
      pipeFrameBar: elements.pipeFrameBar, pipeDisplayBar: elements.pipeDisplayBar,
    });

    this.engine = new LatencyEngine((sample) => this.handleNewSample(sample));
    this.frameMon = new FrameMonitor((stats) => this.handleFrameUpdate(stats.fps, stats.frameTimeMs));

    this.init();
  }

  private initRenderers(): void {
    if (this.elements.gaugeCanvas) this.gauge = new GaugeRenderer(this.elements.gaugeCanvas);
    if (this.elements.chartCanvas) this.timeline = new TimelineChart(this.elements.chartCanvas);
    if (this.elements.distCanvas) this.dist = new DistributionChart(this.elements.distCanvas);
  }

  private init(): void {
    this.frameMon.start();
    this.engine.startListening();
    this.bindEvents();
    this.setMode('instant');
    this.renderVisualizers();
  }

  private handleFrameUpdate(fps: number, frameTimeMs: number): void {
    this.fpsVal = fps;
    this.frameTimeVal = frameTimeMs;
    if (this.elements.fps) this.elements.fps.textContent = String(fps);
    if (this.elements.frameTime) this.elements.frameTime.textContent = `${frameTimeMs} ms`;
  }

  private bindEvents(): void {
    if (this.elements.targetArea) {
      this.elements.targetArea.addEventListener('pointerdown', (e) => this.handlePointerDown(e));
    }
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));

    this.bindBtn(this.elements.btnReset, () => this.resetData());
    this.bindBtn(this.elements.btnCopyReport, () => this.copyReport());
    this.bindBtn(this.elements.modeInstantBtn, () => this.setMode('instant'));
    this.bindBtn(this.elements.modeKeyBtn, () => this.setMode('key'));
    this.bindBtn(this.elements.modeVisualBtn, () => this.setMode('visual'));
  }

  private bindBtn(btn: HTMLElement | null, action: () => void): void {
    if (btn) {
      btn.addEventListener('click', (e) => {
        (e.currentTarget as HTMLElement)?.blur();
        action();
      });
    }
  }

  public setMode(mode: 'instant' | 'key' | 'visual'): void {
    this.currentMode = mode;
    this.visualHandler.reset();
    this.updateModeButtons();

    if (this.elements.targetArea) {
      this.elements.targetArea.className = `ilt-target-area ${mode}`;
    }
    if (this.elements.targetPrompt) {
      this.elements.targetPrompt.textContent = mode === 'key' ? this.config.promptKey : this.config.promptClick;
    }
  }

  private updateModeButtons(): void {
    this.toggleActive(this.elements.modeInstantBtn, this.currentMode === 'instant');
    this.toggleActive(this.elements.modeKeyBtn, this.currentMode === 'key');
    this.toggleActive(this.elements.modeVisualBtn, this.currentMode === 'visual');
  }

  private toggleActive(el: HTMLElement | null, active: boolean): void {
    if (el) el.classList.toggle('active', active);
  }

  private handlePointerDown(e: PointerEvent): void {
    if (this.currentMode === 'key') return;
    e.preventDefault();
    if (this.currentMode === 'visual') {
      this.visualHandler.handleVisualClick(() => this.engine.registerInput('pointer', 'REACTION'));
      return;
    }
    this.flashTarget();
    this.engine.registerInput('pointer', 'MOUSE');
  }

  private isTextInput(target: EventTarget | null): boolean {
    return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (e.repeat || this.isTextInput(e.target)) return;
    if (this.currentMode !== 'key' && e.code !== 'Space') return;

    e.preventDefault();
    if (e.target instanceof HTMLButtonElement) e.target.blur();
    const label = e.code === 'Space' ? 'SPACE' : e.key.toUpperCase();

    if (this.currentMode === 'visual') {
      this.visualHandler.handleVisualClick(() => this.engine.registerInput('key', label));
      return;
    }
    this.flashTarget();
    this.engine.registerInput('key', label);
  }

  private flashTarget(): void {
    if (!this.elements.targetArea) return;
    this.elements.targetArea.classList.add('flash');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (this.elements.targetArea) this.elements.targetArea.classList.remove('flash');
      });
    });
  }

  private handleNewSample(sample: LatencySample): void {
    this.updateStatsUI();
    this.cardRenderer.appendCard(sample);
    this.renderVisualizers();
    const stats = StatsCalculator.calculateStats(this.engine.getSamples());
    this.pipeRenderer.update(stats.avgMs, this.fpsVal);
  }

  private renderVisualizers(): void {
    const samples = this.engine.getSamples();
    const stats = StatsCalculator.calculateStats(samples);
    if (this.gauge) this.gauge.draw(stats.avgMs);
    if (this.timeline) this.timeline.render(samples);
    if (this.dist) this.dist.render(samples);
  }

  private updateStatsUI(): void {
    const samples = this.engine.getSamples();
    const stats = StatsCalculator.calculateStats(samples);

    this.setText(this.elements.avgLatency, String(stats.avgMs));
    this.setText(this.elements.minLatency, String(stats.minMs));
    this.setText(this.elements.maxLatency, String(stats.maxMs));
    this.setText(this.elements.jitter, String(stats.jitterMs));
    this.setText(this.elements.samplesCount, String(stats.count));

    if (this.elements.gradeBadge) {
      this.elements.gradeBadge.className = `ilt-badge ${stats.grade}`;
      this.elements.gradeBadge.textContent = this.getGradeLabel(stats.grade);
    }
  }

  private getGradeLabel(grade: string): string {
    if (grade === 'fast') return this.config.gradeFast;
    if (grade === 'moderate') return this.config.gradeModerate;
    if (grade === 'high') return this.config.gradeHigh;
    return this.config.gradeUltraFast;
  }

  private setText(el: HTMLElement | null, text: string): void {
    if (el) el.textContent = text;
  }

  private copyReport(): void {
    const samples = this.engine.getSamples();
    const stats = StatsCalculator.calculateStats(samples);
    const reportText = ReportGenerator.generateReport(stats, this.fpsVal, this.frameTimeVal);

    navigator.clipboard.writeText(reportText).then(() => {
      if (this.elements.btnCopyReport) {
        const orig = this.elements.btnCopyReport.textContent;
        this.elements.btnCopyReport.textContent = this.config.reportCopied;
        setTimeout(() => {
          if (this.elements.btnCopyReport) this.elements.btnCopyReport.textContent = orig;
        }, 2000);
      }
    });
  }

  private resetData(): void {
    this.engine.clearSamples();
    this.visualHandler.reset();
    this.updateStatsUI();
    this.renderVisualizers();
    this.pipeRenderer.update(0, this.fpsVal);
    this.cardRenderer.clear();
  }

  public destroy(): void {
    this.engine.stopListening();
    this.frameMon.stop();
    this.visualHandler.reset();
  }
}
