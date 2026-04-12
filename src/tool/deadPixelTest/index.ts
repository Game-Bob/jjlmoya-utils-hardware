import type { HardwareToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import PixelesPantallaComponent from './component.astro';
import PixelesPantallaSEO from './seo.astro';
import PixelesPantallaBibliography from './bibliography.astro';

import type { PixelesPantallaUI } from './ui';
export type PixelesPantallaLocaleContent = ToolLocaleContent<PixelesPantallaUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const pixelesPantalla: HardwareToolEntry<PixelesPantallaUI> = {
  id: 'pixeles-pantalla',
  icons: {
    bg: 'mdi:monitor-dashboard',
    fg: 'mdi:monitor-shimmer',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { PixelesPantallaComponent, PixelesPantallaSEO, PixelesPantallaBibliography };

export const PIXELES_PANTALLA_TOOL: ToolDefinition = {
  entry: pixelesPantalla,
  Component: PixelesPantallaComponent,
  SEOComponent: PixelesPantallaSEO,
  BibliographyComponent: PixelesPantallaBibliography,
};
