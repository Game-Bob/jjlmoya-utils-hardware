import { microphoneSpectrumTester } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const MICROPHONE_SPECTRUM_TESTER_TOOL: ToolDefinition = {
  entry: microphoneSpectrumTester,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
