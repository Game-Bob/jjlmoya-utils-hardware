import type { HardwareToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';

import EstimadorSaludBateriaComponent from './component.astro';
import EstimadorSaludBateriaSEO from './seo.astro';
import EstimadorSaludBateriaBibliography from './bibliography.astro';

import type { EstimadorSaludBateriaUI } from './ui';
export type EstimadorSaludBateriaLocaleContent = ToolLocaleContent<EstimadorSaludBateriaUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const estimadorSaludBateria: HardwareToolEntry<EstimadorSaludBateriaUI> = {
  id: 'estimador-salud-bateria',
  icons: {
    bg: 'mdi:battery-heart-variant',
    fg: 'mdi:battery-charging-high',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { EstimadorSaludBateriaComponent, EstimadorSaludBateriaSEO, EstimadorSaludBateriaBibliography };

export const ESTIMADOR_SALUD_BATERIA_TOOL: ToolDefinition = {
  entry: estimadorSaludBateria,
  Component: EstimadorSaludBateriaComponent,
  SEOComponent: EstimadorSaludBateriaSEO,
  BibliographyComponent: EstimadorSaludBateriaBibliography,
};
