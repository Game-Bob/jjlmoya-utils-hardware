import type { ToolDefinition } from '../../types';
import { oledScreenBurnInFixer } from './entry';
export * from './entry';
export const OLED_SCREEN_BURN_IN_FIXER_TOOL: ToolDefinition = {
  entry: oledScreenBurnInFixer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
