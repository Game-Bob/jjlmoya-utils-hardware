import type { ToolDefinition } from '../../types';
import { laptopBatteryRuntime } from './entry';

export * from './entry';

export const LAPTOP_BATTERY_RUNTIME_TOOL: ToolDefinition = {
  entry: laptopBatteryRuntime,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
