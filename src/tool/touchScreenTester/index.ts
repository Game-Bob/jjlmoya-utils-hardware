import { touchScreenTester } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const TOUCH_SCREEN_TESTER_TOOL: ToolDefinition = {
  entry: touchScreenTester,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
