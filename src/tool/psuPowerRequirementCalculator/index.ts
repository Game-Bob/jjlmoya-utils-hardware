import { psuPowerRequirementCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const PSU_POWER_REQUIREMENT_CALCULATOR_TOOL: ToolDefinition = {
  entry: psuPowerRequirementCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
