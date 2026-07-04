import { keyboardChatterTest } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const KEYBOARD_CHATTER_TEST_TOOL: ToolDefinition = {
  entry: keyboardChatterTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

