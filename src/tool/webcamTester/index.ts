import type { ToolDefinition } from '../../types';
import { webcamTester } from './entry';

export * from './entry';

export const WEBCAM_TESTER_TOOL: ToolDefinition = {
  entry: webcamTester,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
