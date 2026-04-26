export { hardwareCategory } from './category';
export const hardwareCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  HardwareToolEntry,
  HardwareCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

export { PIXELES_PANTALLA_TOOL } from './tool/deadPixelTest/index';
export { TEST_TECLADO_TOOL } from './tool/keyboardTest/index';
export { TEST_MANDO_TOOL } from './tool/gamepadTest/index';
export { PROBADOR_VIBRACION_MANDO_TOOL } from './tool/gamepadVibrationTester/index';
export { TEST_RATON_TOOL } from './tool/mousePollingTest/index';
export { ESTIMADOR_SALUD_BATERIA_TOOL } from './tool/batteryHealthEstimator/index';
export { TONE_GENERATOR_TOOL } from './tool/toneGenerator/index';
export { REFRESH_RATE_DETECTOR_TOOL } from './tool/refreshRateDetector/index';
export { SPECTRUM_CANVAS_TOOL } from './tool/colorAccuracyTest/index';
