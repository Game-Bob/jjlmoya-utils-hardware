import { PipelineEstimator } from './pipelineEstimator';

export interface PipelineElements {
  pipeUsbVal: HTMLElement | null;
  pipeOsVal: HTMLElement | null;
  pipeFrameVal: HTMLElement | null;
  pipeDisplayVal: HTMLElement | null;
  pipeUsbBar: HTMLElement | null;
  pipeOsBar: HTMLElement | null;
  pipeFrameBar: HTMLElement | null;
  pipeDisplayBar: HTMLElement | null;
}

export class PipelineRenderer {
  private elements: PipelineElements;

  constructor(elements: PipelineElements) {
    this.elements = elements;
  }

  public update(avgMs: number, fps: number): void {
    const b = PipelineEstimator.calculateBreakdown(avgMs, fps);

    this.setText(this.elements.pipeUsbVal, `${b.usbMs} ms (${b.usbPct}%)`);
    this.setText(this.elements.pipeOsVal, `${b.osMs} ms (${b.osPct}%)`);
    this.setText(this.elements.pipeFrameVal, `${b.frameMs} ms (${b.framePct}%)`);
    this.setText(this.elements.pipeDisplayVal, `${b.displayMs} ms (${b.displayPct}%)`);

    this.setWidth(this.elements.pipeUsbBar, b.usbPct);
    this.setWidth(this.elements.pipeOsBar, b.osPct);
    this.setWidth(this.elements.pipeFrameBar, b.framePct);
    this.setWidth(this.elements.pipeDisplayBar, b.displayPct);
  }

  private setText(el: HTMLElement | null, text: string): void {
    if (el) el.textContent = text;
  }

  private setWidth(el: HTMLElement | null, pct: number): void {
    if (el) el.style.width = `${pct}%`;
  }
}
