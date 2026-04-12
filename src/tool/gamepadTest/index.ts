import type { HardwareToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import TestMandoComponent from './component.astro';
import TestMandoSEO from './seo.astro';
import TestMandoBibliography from './bibliography.astro';

import type { TestMandoUI } from './ui';
export type TestMandoLocaleContent = ToolLocaleContent<TestMandoUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const testMando: HardwareToolEntry<TestMandoUI> = {
  id: 'test-mando',
  icons: {
    bg: 'mdi:gamepad-variant',
    fg: 'mdi:gamepad-circle',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { TestMandoComponent, TestMandoSEO, TestMandoBibliography };

export const TEST_MANDO_TOOL: ToolDefinition = {
  entry: testMando,
  Component: TestMandoComponent,
  SEOComponent: TestMandoSEO,
  BibliographyComponent: TestMandoBibliography,
};
