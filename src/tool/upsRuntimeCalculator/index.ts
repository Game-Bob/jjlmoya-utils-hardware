import { upsRuntimeCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const UPS_RUNTIME_CALCULATOR_TOOL: ToolDefinition = {
  entry: upsRuntimeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
