import type { ToolDefinition } from '../../types';
import { subwooferCrossoverTest } from './entry';

export * from './entry';

export const SUBWOOFER_CROSSOVER_TEST_TOOL: ToolDefinition = {
  entry: subwooferCrossoverTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
