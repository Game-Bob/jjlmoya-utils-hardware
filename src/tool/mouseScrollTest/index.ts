import type { ToolDefinition } from '../../types';
import { mouseScrollTest } from './entry';
export * from './entry';
export const MOUSE_SCROLL_TEST_TOOL: ToolDefinition = {
  entry: mouseScrollTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
