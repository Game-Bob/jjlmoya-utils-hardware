import { audioDelayTest } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const AUDIO_DELAY_TEST_TOOL: ToolDefinition = {
  entry: audioDelayTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
