export interface ColorTest {
  name: string;
  description: string;
  instruction: string;
  colors: string[];
}

export const SRGB_TESTS: ColorTest[] = [
  {
    name: 'Spectral Purity',
    description: 'Primary & secondary colors',
    instruction: 'Watch for consistent, pure colors. Any color shift or banding indicates display inaccuracy.',
    colors: ['#000', '#fff', '#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'],
  },
  {
    name: 'Gradient Dynamics',
    description: 'Smooth color transitions',
    instruction: 'Look for banding (visible steps) instead of smooth gradients. Banding = poor color depth or calibration.',
    colors: [],
  },
  {
    name: 'Black Crush Detection',
    description: 'Shadow detail test',
    instruction: 'Can you see all 6 shades? If blacks blur together, your display is crushing shadow details.',
    colors: ['#000', '#111', '#222', '#333', '#444', '#555'],
  },
  {
    name: 'White Point Calibration',
    description: 'Brightness & temperature',
    instruction: 'Check for color tint in whites. A neutral white has no warm (yellow) or cool (blue) cast.',
    colors: ['#fff', '#f5f5f5', '#e8e8e8', '#d0d0d0', '#b0b0b0'],
  },
];

export const DCIP3_TESTS: ColorTest[] = [
  {
    name: 'Spectral Purity (DCI-P3)',
    description: 'Cinema gamut colors',
    instruction: 'DCI-P3 covers more colors than sRGB. Watch for vibrant, saturated colors without clipping.',
    colors: ['#000', '#fff', '#ff0000', '#00ff00', '#0000ff'],
  },
  {
    name: 'Gradient Dynamics',
    description: 'Smooth color transitions',
    instruction: 'Cinema displays should show silky-smooth gradients. Any stepping = insufficient bit depth.',
    colors: [],
  },
  {
    name: 'Black Crush Detection',
    description: 'Shadow detail test',
    instruction: 'Can you see all 6 shades? If blacks blur together, your display is crushing shadow details.',
    colors: ['#000', '#111', '#222', '#333', '#444', '#555'],
  },
  {
    name: 'White Point Calibration',
    description: 'Brightness & temperature',
    instruction: 'Check for color tint in whites. A neutral white has no warm (yellow) or cool (blue) cast.',
    colors: ['#fff', '#f5f5f5', '#e8e8e8', '#d0d0d0', '#b0b0b0'],
  },
];

export class SpectrumCanvasTest {
  private currentTestIndex = 0;
  private currentColorIndex = 0;
  private gamut: 'srgb' | 'dcip3' = 'srgb';
  private tests: ColorTest[] = SRGB_TESTS;
  private testBg: HTMLElement | null = null;
  private testName: HTMLElement | null = null;
  private testDescription: HTMLElement | null = null;
  private progressBar: HTMLElement | null = null;
  private testOverlay: HTMLElement | null = null;
  private dashboard: HTMLElement | null = null;

  constructor() {
    this.testBg = document.getElementById('test-bg');
    this.testName = document.getElementById('test-name');
    this.testDescription = document.getElementById('test-description');
    this.progressBar = document.querySelector('.sc-progress-bar');
    this.testOverlay = document.getElementById('test-overlay');
    this.dashboard = document.getElementById('dashboard');
  }

  start(gamut: 'srgb' | 'dcip3' = 'srgb') {
    this.gamut = gamut;
    this.tests = gamut === 'dcip3' ? DCIP3_TESTS : SRGB_TESTS;
    this.currentTestIndex = 0;
    this.currentColorIndex = 0;
    this.showCurrentTest();
    this.attachKeyboardListeners();
  }

  private showCurrentTest() {
    const test = this.tests[this.currentTestIndex];
    if (!test) return;

    if (this.testName) {
      this.testName.textContent = test.name;
    }

    if (this.testDescription) {
      this.testDescription.textContent = test.instruction;
    }

    this.updateProgress();
    this.displayColor();

    const win = window as Record<string, unknown>;
    if (win.updateTestUI) {
      (win.updateTestUI as () => void)();
    }
  }

  private displayColor() {
    const test = this.tests[this.currentTestIndex];
    if (!test || !this.testBg) return;

    if (test.colors.length === 0) {
      this.testBg.style.backgroundColor = '';
      this.testBg.style.background =
        'linear-gradient(90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)';
    } else {
      this.testBg.style.background = '';
      const color = test.colors[this.currentColorIndex % test.colors.length];
      this.testBg.style.backgroundColor = color;
    }
  }

  private updateProgress() {
    const totalTests = this.tests.length;
    const progress = ((this.currentTestIndex + 1) / totalTests) * 100;
    if (this.progressBar) {
      this.progressBar.style.width = `${progress}%`;
    }
  }

  nextColor() {
    const test = this.tests[this.currentTestIndex];

    if (!test || test.colors.length === 0) {
      this.nextTest();
      return;
    }

    this.currentColorIndex++;

    if (this.currentColorIndex >= test.colors.length) {
      this.nextTest();
    } else {
      this.displayColor();
    }
  }

  prevColor() {
    const test = this.tests[this.currentTestIndex];

    if (!test || test.colors.length === 0) {
      if (this.currentTestIndex === 0) return;
      this.currentTestIndex--;
      this.currentColorIndex = 0;
      this.showCurrentTest();
      return;
    }

    this.currentColorIndex--;

    if (this.currentColorIndex < 0) {
      if (this.currentTestIndex === 0) {
        this.currentColorIndex = 0;
        return;
      }
      this.currentTestIndex--;
      const prevTest = this.tests[this.currentTestIndex];
      this.currentColorIndex = prevTest.colors.length - 1;
      this.showCurrentTest();
    } else {
      this.displayColor();
    }
  }

  nextTest() {
    this.currentTestIndex++;
    this.currentColorIndex = 0;

    if (this.currentTestIndex >= this.tests.length) {
      setTimeout(() => this.finish(), 300);
    } else {
      this.showCurrentTest();
    }
  }

  reset() {
    this.currentTestIndex = 0;
    this.currentColorIndex = 0;
    this.showCurrentTest();
  }

  finish() {
    if (this.testOverlay) {
      this.testOverlay.style.display = 'none';
    }
    if (this.testBg) {
      this.testBg.style.backgroundColor = '';
      this.testBg.style.background = '';
    }
    this.currentTestIndex = 0;
    this.currentColorIndex = 0;
  }

  private attachKeyboardListeners() {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        this.nextColor();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        this.reset();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        this.finish();
        document.removeEventListener('keydown', handleKeydown);
      }
    };

    document.addEventListener('keydown', handleKeydown);
  }
}
