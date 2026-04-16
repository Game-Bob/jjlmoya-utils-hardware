import type { HardwareToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import PixelesPantallaComponent from './component.astro';
import PixelesPantallaSEO from './seo.astro';
import PixelesPantallaBibliography from './bibliography.astro';

import type { PixelesPantallaUI } from './ui';
export type PixelesPantallaLocaleContent = ToolLocaleContent<PixelesPantallaUI>;

export const pixelesPantalla: HardwareToolEntry<PixelesPantallaUI> = {
  id: 'pixeles-pantalla',
  icons: {
    bg: 'mdi:monitor-dashboard',
    fg: 'mdi:monitor-shimmer',
  },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { PixelesPantallaComponent, PixelesPantallaSEO, PixelesPantallaBibliography };

export const PIXELES_PANTALLA_TOOL: ToolDefinition = {
  entry: pixelesPantalla,
  Component: PixelesPantallaComponent,
  SEOComponent: PixelesPantallaSEO,
  BibliographyComponent: PixelesPantallaBibliography,
};
