import type { ToolDefinition } from '../../types';
import { mouseDoubleClickTest } from './entry';
export * from './entry';
export const MOUSE_DOUBLE_CLICK_TEST_TOOL: ToolDefinition = {
  entry: mouseDoubleClickTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
