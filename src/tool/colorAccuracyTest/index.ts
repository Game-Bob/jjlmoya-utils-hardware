import type { ToolDefinition } from '../../types';
import { spectrumCanvas } from './entry';
export * from './entry';
export const SPECTRUM_CANVAS_TOOL: ToolDefinition = {
  entry: spectrumCanvas,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
