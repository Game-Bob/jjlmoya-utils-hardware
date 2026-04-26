import type { HardwareCategoryEntry } from '../types';
import { pixelesPantalla } from '../tool/deadPixelTest/index';
import { testTeclado } from '../tool/keyboardTest/index';
import { testMando } from '../tool/gamepadTest/index';
import { probadorVibracionMando } from '../tool/gamepadVibrationTester/index';
import { testRaton } from '../tool/mousePollingTest/index';
import { estimadorSaludBateria } from '../tool/batteryHealthEstimator/index';
import { toneGenerator } from '../tool/toneGenerator/index';
import { refreshRateDetector } from '../tool/refreshRateDetector/index';
import { spectrumCanvas } from '../tool/colorAccuracyTest/index';

export const hardwareCategory: HardwareCategoryEntry = {
  icon: 'mdi:memory',
  tools: [pixelesPantalla, testTeclado, testMando, probadorVibracionMando, testRaton, estimadorSaludBateria, toneGenerator, refreshRateDetector, spectrumCanvas],
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
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
