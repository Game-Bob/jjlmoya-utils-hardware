import type { ToolDefinition } from '../../types';
import { monitorGhostingTest } from './entry';
export * from './entry';
export const MONITOR_GHOSTING_TEST_TOOL: ToolDefinition = {
  entry: monitorGhostingTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
