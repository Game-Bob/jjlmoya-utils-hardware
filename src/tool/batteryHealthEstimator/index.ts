export * from './entry';
export const ESTIMADOR_SALUD_BATERIA_TOOL: ToolDefinition = {
  entry: estimadorSaludBateria,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
