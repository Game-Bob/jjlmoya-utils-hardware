import type { ToolDefinition } from '../../types';
import { mouseDpiAnalyzer } from './entry';
export * from './entry';

export const MOUSE_DPI_ANALYZER_TOOL: ToolDefinition = {
  entry: mouseDpiAnalyzer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
