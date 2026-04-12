import type { HardwareToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import TestRatonComponent from './component.astro';
import TestRatonSEO from './seo.astro';
import TestRatonBibliography from './bibliography.astro';

import type { TestRatonUI } from './ui';
export type TestRatonLocaleContent = ToolLocaleContent<TestRatonUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const testRaton: HardwareToolEntry<TestRatonUI> = {
  id: 'test-raton',
  icons: {
    bg: 'mdi:mouse-variant',
    fg: 'mdi:mouse',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { TestRatonComponent, TestRatonSEO, TestRatonBibliography };

export const TEST_RATON_TOOL: ToolDefinition = {
  entry: testRaton,
  Component: TestRatonComponent,
  SEOComponent: TestRatonSEO,
  BibliographyComponent: TestRatonBibliography,
};
