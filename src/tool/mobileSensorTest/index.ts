import { mobileSensorTest } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const MOBILE_SENSOR_TEST_TOOL: ToolDefinition = {
  entry: mobileSensorTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
