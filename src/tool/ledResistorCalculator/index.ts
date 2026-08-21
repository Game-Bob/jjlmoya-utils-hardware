import { ledResistorCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const LED_RESISTOR_CALCULATOR_TOOL: ToolDefinition = {
  entry: ledResistorCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
