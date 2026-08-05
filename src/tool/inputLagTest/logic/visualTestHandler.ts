export interface VisualHandlerElements {
  targetArea: HTMLElement | null;
  targetPrompt: HTMLElement | null;
}

export interface VisualHandlerConfig {
  promptClick: string;
  promptWait: string;
  promptNow: string;
}

export type VisualReadyCallback = () => void;

export class VisualTestHandler {
  private elements: VisualHandlerElements;
  private config: VisualHandlerConfig;
  private timeoutId: number | null = null;
  private state: 'idle' | 'waiting' | 'ready' = 'idle';

  constructor(elements: VisualHandlerElements, config: VisualHandlerConfig) {
    this.elements = elements;
    this.config = config;
  }

  public getState(): 'idle' | 'waiting' | 'ready' {
    return this.state;
  }

  public handleVisualClick(onTrigger: VisualReadyCallback): void {
    if (this.state === 'idle') {
      this.startTimer();
    } else if (this.state === 'waiting') {
      this.reset();
    } else if (this.state === 'ready') {
      onTrigger();
      this.reset();
    }
  }

  private startTimer(): void {
    this.state = 'waiting';
    this.updateTargetClass('waiting', 'ready');
    this.setPrompt(this.config.promptWait);

    const delay = 1500 + Math.random() * 2500;
    this.timeoutId = window.setTimeout(() => {
      this.state = 'ready';
      this.updateTargetClass('ready', 'waiting');
      this.setPrompt(this.config.promptNow);
    }, delay);
  }

  public reset(): void {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    this.state = 'idle';
    if (this.elements.targetArea) {
      this.elements.targetArea.classList.remove('waiting', 'ready');
    }
    this.setPrompt(this.config.promptClick);
  }

  private updateTargetClass(addClass: string, removeClass: string): void {
    if (this.elements.targetArea) {
      this.elements.targetArea.classList.add(addClass);
      this.elements.targetArea.classList.remove(removeClass);
    }
  }

  private setPrompt(text: string): void {
    if (this.elements.targetPrompt) {
      this.elements.targetPrompt.textContent = text;
    }
  }
}
