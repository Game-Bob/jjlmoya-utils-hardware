import { clamp } from './logic';

interface CanvasPalette {
  grid: string;
  spectrum: string;
  hot: string;
  waveform: string;
  glow: string;
}

export interface SpectrumFrame {
  canvas: HTMLCanvasElement;
  samples: Float32Array;
  frequencies: Float32Array;
  sampleRate: number;
  fftSize: number;
  palette: CanvasPalette;
}

interface DrawingSurface {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
}

const token = (styles: CSSStyleDeclaration, name: string): string => (
  styles.getPropertyValue(name).trim()
);

export const readCanvasPalette = (root: HTMLElement): CanvasPalette => {
  const styles = getComputedStyle(root);
  return {
    grid: token(styles, '--n-mic-grid'),
    spectrum: token(styles, '--n-mic-cyan'),
    hot: token(styles, '--n-mic-amber'),
    waveform: token(styles, '--n-mic-mint'),
    glow: token(styles, '--n-mic-glow'),
  };
};

const prepareCanvas = (canvas: HTMLCanvasElement): DrawingSurface | null => {
  const context = canvas.getContext('2d');
  if (!context) return null;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(canvas.clientWidth, 1);
  const height = Math.max(canvas.clientHeight, 1);
  const pixelWidth = Math.round(width * ratio);
  const pixelHeight = Math.round(height * ratio);
  if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
  }
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, width, height);
  return { context, width, height };
};

const spectrumBin = (ratio: number, frame: SpectrumFrame): number => {
  const frequency = 60 * (12000 / 60) ** ratio;
  const index = Math.round(frequency * frame.fftSize / frame.sampleRate);
  return clamp(index, 0, frame.frequencies.length - 1);
};

const drawOrbit = (surface: DrawingSurface, palette: CanvasPalette): void => {
  const { context, width, height } = surface;
  const radius = Math.min(width * 0.38, height * 0.43);
  context.beginPath();
  context.arc(width / 2, height * 0.73, radius, Math.PI, Math.PI * 2);
  context.strokeStyle = palette.grid;
  context.lineWidth = 1;
  context.stroke();
};

const drawSpectrum = (surface: DrawingSurface, frame: SpectrumFrame): void => {
  const { context, width, height } = surface;
  const centerX = width / 2;
  const centerY = height * 0.73;
  const baseRadius = Math.min(width * 0.38, height * 0.43);
  const reach = Math.min(height * 0.2, width * 0.16);
  for (let bar = 0; bar < 84; bar += 1) {
    const ratio = bar / 83;
    const value = frame.frequencies[spectrumBin(ratio, frame)] ?? -96;
    const strength = clamp((value + 96) / 96, 0, 1);
    drawSpectrumBar(context, { centerX, centerY, baseRadius, reach, ratio, strength }, frame.palette);
  }
};

interface SpectrumBarGeometry {
  centerX: number;
  centerY: number;
  baseRadius: number;
  reach: number;
  ratio: number;
  strength: number;
}

const drawSpectrumBar = (
  context: CanvasRenderingContext2D,
  geometry: SpectrumBarGeometry,
  palette: CanvasPalette,
): void => {
  const angle = Math.PI + geometry.ratio * Math.PI;
  const length = 4 + geometry.reach * geometry.strength ** 1.4;
  context.beginPath();
  context.moveTo(
    geometry.centerX + Math.cos(angle) * geometry.baseRadius,
    geometry.centerY + Math.sin(angle) * geometry.baseRadius,
  );
  context.lineTo(
    geometry.centerX + Math.cos(angle) * (geometry.baseRadius + length),
    geometry.centerY + Math.sin(angle) * (geometry.baseRadius + length),
  );
  context.strokeStyle = geometry.strength > 0.84 ? palette.hot : palette.spectrum;
  context.globalAlpha = 0.22 + geometry.strength * 0.78;
  context.lineWidth = 2.5;
  context.shadowBlur = 12;
  context.shadowColor = palette.glow;
  context.stroke();
  context.globalAlpha = 1;
  context.shadowBlur = 0;
};

const drawWaveform = (surface: DrawingSurface, frame: SpectrumFrame): void => {
  const { context, width, height } = surface;
  const centerY = height * 0.73;
  context.beginPath();
  frame.samples.forEach((sample, index) => {
    const x = index / Math.max(frame.samples.length - 1, 1) * width;
    const y = centerY + sample * Math.min(height * 0.16, 90);
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  context.strokeStyle = frame.palette.waveform;
  context.lineWidth = 1.5;
  context.shadowBlur = 14;
  context.shadowColor = frame.palette.glow;
  context.stroke();
  context.shadowBlur = 0;
};

export const renderSpectrumFrame = (frame: SpectrumFrame): void => {
  const surface = prepareCanvas(frame.canvas);
  if (!surface) return;
  drawOrbit(surface, frame.palette);
  drawSpectrum(surface, frame);
  drawWaveform(surface, frame);
};

export const clearSpectrum = (canvas: HTMLCanvasElement): void => {
  const surface = prepareCanvas(canvas);
  if (surface) drawOrbit(surface, readCanvasPalette(canvas.closest<HTMLElement>('[data-mst-root]') ?? canvas));
};
