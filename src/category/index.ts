import type { HardwareCategoryEntry } from '../types';
import { pixelesPantalla } from '../tool/deadPixelTest/index';
import { testTeclado } from '../tool/keyboardTest/index';
import { testMando } from '../tool/gamepadTest/index';
import { probadorVibracionMando } from '../tool/gamepadVibrationTester/index';
import { testRaton } from '../tool/mousePollingTest/index';
import { estimadorSaludBateria } from '../tool/batteryHealthEstimator/index';
import { toneGenerator } from '../tool/toneGenerator/index';

export const hardwareCategory: HardwareCategoryEntry = {
  icon: 'mdi:memory',
  tools: [pixelesPantalla, testTeclado, testMando, probadorVibracionMando, testRaton, estimadorSaludBateria, toneGenerator],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
