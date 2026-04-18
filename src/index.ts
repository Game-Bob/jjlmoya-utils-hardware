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

export { PixelesPantallaComponent, PixelesPantallaSEO, PixelesPantallaBibliography, PIXELES_PANTALLA_TOOL } from './tool/deadPixelTest/index';
export { TestTecladoComponent, TestTecladoSEO, TestTecladoBibliography, TEST_TECLADO_TOOL } from './tool/keyboardTest/index';
export { TestMandoComponent, TestMandoSEO, TestMandoBibliography, TEST_MANDO_TOOL } from './tool/gamepadTest/index';
export { ProbadorVibracionMandoComponent, ProbadorVibracionMandoSEO, ProbadorVibracionMandoBibliography, PROBADOR_VIBRACION_MANDO_TOOL } from './tool/gamepadVibrationTester/index';
export { TestRatonComponent, TestRatonSEO, TestRatonBibliography, TEST_RATON_TOOL } from './tool/mousePollingTest/index';
export { EstimadorSaludBateriaComponent, EstimadorSaludBateriaSEO, EstimadorSaludBateriaBibliography, ESTIMADOR_SALUD_BATERIA_TOOL } from './tool/batteryHealthEstimator/index';
export { ToneGeneratorComponent, ToneGeneratorSEO, ToneGeneratorBibliography, TONE_GENERATOR_TOOL } from './tool/toneGenerator/index';
