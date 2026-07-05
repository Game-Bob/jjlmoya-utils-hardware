import { speakerPhaseTester } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const SPEAKER_PHASE_TESTER_TOOL: ToolDefinition = {
  entry: speakerPhaseTester,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
