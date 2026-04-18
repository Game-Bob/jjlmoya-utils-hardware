import { testTeclado } from './entry';
export * from './entry';
export const TEST_TECLADO_TOOL: ToolDefinition = {
  entry: testTeclado,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
