import type { ToolDefinition } from '../../types';
import { backlightBleedBloomingTest } from './entry';

export * from './entry';

export const BACKLIGHT_BLEED_BLOOMING_TEST_TOOL: ToolDefinition = {
  entry: backlightBleedBloomingTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
