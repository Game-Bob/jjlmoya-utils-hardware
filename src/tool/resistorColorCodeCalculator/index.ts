import { resistorColorCodeCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const RESISTOR_COLOR_CODE_CALCULATOR_TOOL: ToolDefinition = {
  entry: resistorColorCodeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

