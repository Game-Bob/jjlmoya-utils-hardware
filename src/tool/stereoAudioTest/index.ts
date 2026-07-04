import { stereoAudioTest } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const STEREO_AUDIO_TEST_TOOL: ToolDefinition = {
  entry: stereoAudioTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
