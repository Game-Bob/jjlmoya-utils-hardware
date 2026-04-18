export * from './entry';
export const TONE_GENERATOR_TOOL: ToolDefinition = {
  entry: toneGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
