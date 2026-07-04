import type { ToolDefinition } from '../../types';
import { mouseJitterAngleSnappingTest } from './entry';
export * from './entry';
export const MOUSE_JITTER_ANGLE_SNAPPING_TEST_TOOL: ToolDefinition = {
  entry: mouseJitterAngleSnappingTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
