export * from './entry';
export const PIXELES_PANTALLA_TOOL: ToolDefinition = {
  entry: pixelesPantalla,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
