import type { HardwareCategoryEntry } from '../types';

export const hardwareCategory: HardwareCategoryEntry = {
  icon: 'mdi:memory',
  tools: [],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

