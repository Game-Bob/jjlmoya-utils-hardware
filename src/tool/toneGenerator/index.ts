import type { HardwareToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import ToneGeneratorComponent from './component.astro';
import ToneGeneratorSEO from './seo.astro';
import ToneGeneratorBibliography from './bibliography.astro';

import type { ToneGeneratorUI } from './ui';
export type ToneGeneratorLocaleContent = ToolLocaleContent<ToneGeneratorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const toneGenerator: HardwareToolEntry<ToneGeneratorUI> = {
  id: 'generador-tonos',
  icons: {
    bg: 'mdi:sine-wave',
    fg: 'mdi:waveform',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ToneGeneratorComponent, ToneGeneratorSEO, ToneGeneratorBibliography };

export const TONE_GENERATOR_TOOL: ToolDefinition = {
  entry: toneGenerator,
  Component: ToneGeneratorComponent,
  SEOComponent: ToneGeneratorSEO,
  BibliographyComponent: ToneGeneratorBibliography,
};
