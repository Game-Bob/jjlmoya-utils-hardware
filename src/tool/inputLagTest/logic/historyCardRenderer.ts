import type { LatencySample } from './statsCalculator';

export class HistoryCardRenderer {
  private container: HTMLElement | null;

  constructor(container: HTMLElement | null) {
    this.container = container;
  }

  public appendCard(sample: LatencySample): void {
    if (!this.container) {
      return;
    }

    const qualityClass = this.getQualityClass(sample.latencyMs);
    const card = document.createElement('div');
    card.className = `ilt-sample-card ${qualityClass}`;

    const numSpan = document.createElement('span');
    numSpan.className = 'ilt-sample-num';
    numSpan.textContent = `#${sample.id}`;

    const typeSpan = document.createElement('span');
    typeSpan.className = 'ilt-sample-type';
    typeSpan.textContent = sample.keyName || sample.inputType.toUpperCase();

    const valSpan = document.createElement('span');
    valSpan.className = 'ilt-sample-val';
    valSpan.textContent = `${sample.latencyMs} ms`;

    card.appendChild(numSpan);
    card.appendChild(typeSpan);
    card.appendChild(valSpan);

    this.container.insertBefore(card, this.container.firstChild);
    this.trimContainer();
  }

  private getQualityClass(ms: number): string {
    if (ms > 35) return 'high';
    if (ms > 20) return 'moderate';
    if (ms > 10) return 'fast';
    return 'ultra';
  }

  private trimContainer(): void {
    if (!this.container) return;
    while (this.container.children.length > 12) {
      this.container.removeChild(this.container.lastChild!);
    }
  }

  public clear(): void {
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}
