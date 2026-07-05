import { webMidiKeyboardTester } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const WEBMIDI_KEYBOARD_TESTER_TOOL: ToolDefinition = {
  entry: webMidiKeyboardTester,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
