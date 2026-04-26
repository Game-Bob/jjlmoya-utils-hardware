import { refreshRateDetector } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const REFRESH_RATE_DETECTOR_TOOL: ToolDefinition = {
  entry: refreshRateDetector,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
