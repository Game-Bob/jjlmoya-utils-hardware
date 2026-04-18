import { probadorVibracionMando } from './entry';
export * from './entry';
export const PROBADOR_VIBRACION_MANDO_TOOL: ToolDefinition = {
  entry: probadorVibracionMando,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
