import type { ToolDefinition } from '../../types';
import { phoneChargeTimeCalculator } from './entry';

export * from './entry';

export const PHONE_CHARGE_TIME_CALCULATOR_TOOL: ToolDefinition = {
  entry: phoneChargeTimeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
