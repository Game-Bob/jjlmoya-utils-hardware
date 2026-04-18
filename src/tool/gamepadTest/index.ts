import { testMando } from './entry';
export * from './entry';
export const TEST_MANDO_TOOL: ToolDefinition = {
  entry: testMando,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
