import type { ToolDefinition } from '../../types';
import { waterEjector } from './entry';

export * from './entry';

export const WATER_EJECTOR_TOOL: ToolDefinition = {
  entry: waterEjector,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
