import { ohmLawPowerCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const OHM_LAW_POWER_CALCULATOR_TOOL: ToolDefinition = {
  entry: ohmLawPowerCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
