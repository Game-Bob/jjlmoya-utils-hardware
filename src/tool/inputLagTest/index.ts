import { testInputLag } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const INPUT_LAG_TEST_TOOL: ToolDefinition = {
  entry: testInputLag,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
