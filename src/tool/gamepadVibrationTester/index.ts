import type { HardwareToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import ProbadorVibracionMandoComponent from './component.astro';
import ProbadorVibracionMandoSEO from './seo.astro';
import ProbadorVibracionMandoBibliography from './bibliography.astro';

import type { ProbadorVibracionMandoUI } from './ui';
export type ProbadorVibracionMandoLocaleContent = ToolLocaleContent<ProbadorVibracionMandoUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const probadorVibracionMando: HardwareToolEntry<ProbadorVibracionMandoUI> = {
  id: 'probador-vibracion-mando',
  icons: {
    bg: 'mdi:vibrate',
    fg: 'mdi:gamepad-variant',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ProbadorVibracionMandoComponent, ProbadorVibracionMandoSEO, ProbadorVibracionMandoBibliography };

export const PROBADOR_VIBRACION_MANDO_TOOL: ToolDefinition = {
  entry: probadorVibracionMando,
  Component: ProbadorVibracionMandoComponent,
  SEOComponent: ProbadorVibracionMandoSEO,
  BibliographyComponent: ProbadorVibracionMandoBibliography,
};
