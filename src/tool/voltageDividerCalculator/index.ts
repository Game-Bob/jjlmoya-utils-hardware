import { voltageDividerCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const VOLTAGE_DIVIDER_CALCULATOR_TOOL: ToolDefinition = {
  entry: voltageDividerCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
