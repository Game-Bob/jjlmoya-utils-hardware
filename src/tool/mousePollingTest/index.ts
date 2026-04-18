export * from './entry';
export const TEST_RATON_TOOL: ToolDefinition = {
  entry: testRaton,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
