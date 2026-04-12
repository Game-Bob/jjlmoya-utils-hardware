import type { HardwareCategoryEntry } from '../types';
import { pixelesPantalla } from '../tool/pixelesPantalla/index';
import { testTeclado } from '../tool/testTeclado/index';

export const hardwareCategory: HardwareCategoryEntry = {
  icon: 'mdi:memory',
  tools: [pixelesPantalla, testTeclado],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

