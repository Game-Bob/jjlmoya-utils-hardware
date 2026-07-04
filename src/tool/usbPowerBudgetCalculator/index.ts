import { usbPowerBudgetCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const USB_POWER_BUDGET_CALCULATOR_TOOL: ToolDefinition = {
  entry: usbPowerBudgetCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
