export { hardwareCategory } from './category';
export { default as hardwareCategorySEO } from './category/seo.astro';

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

export { ALL_TOOLS } from './tools';

export { PixelesPantallaComponent, PixelesPantallaSEO, PixelesPantallaBibliography, PIXELES_PANTALLA_TOOL } from './tool/pixelesPantalla/index';
export { TestTecladoComponent, TestTecladoSEO, TestTecladoBibliography, TEST_TECLADO_TOOL } from './tool/testTeclado/index';

