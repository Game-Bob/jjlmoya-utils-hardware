import type { HardwareToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import TestTecladoComponent from './component.astro';
import TestTecladoSEO from './seo.astro';
import TestTecladoBibliography from './bibliography.astro';

import type { TestTecladoUI } from './ui';
export type TestTecladoLocaleContent = ToolLocaleContent<TestTecladoUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const testTeclado: HardwareToolEntry<TestTecladoUI> = {
  id: 'test-teclado',
  icons: {
    bg: 'mdi:keyboard-variant',
    fg: 'mdi:keyboard-check',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { TestTecladoComponent, TestTecladoSEO, TestTecladoBibliography };

export const TEST_TECLADO_TOOL: ToolDefinition = {
  entry: testTeclado,
  Component: TestTecladoComponent,
  SEOComponent: TestTecladoSEO,
  BibliographyComponent: TestTecladoBibliography,
};
