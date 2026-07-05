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
export { MOUSE_DOUBLE_CLICK_TEST_TOOL } from './tool/mouseDoubleClickTest/index';
export { MOUSE_SCROLL_TEST_TOOL } from './tool/mouseScrollTest/index';
export { MOUSE_DPI_ANALYZER_TOOL } from './tool/mouseDpiAnalyzer/index';
export { ESTIMADOR_SALUD_BATERIA_TOOL } from './tool/batteryHealthEstimator/index';
export { TONE_GENERATOR_TOOL } from './tool/toneGenerator/index';
export { SUBWOOFER_CROSSOVER_TEST_TOOL } from './tool/subwooferCrossoverTest/index';
export { REFRESH_RATE_DETECTOR_TOOL } from './tool/refreshRateDetector/index';
export { MONITOR_GHOSTING_TEST_TOOL } from './tool/monitorGhostingTest/index';
export { BACKLIGHT_BLEED_BLOOMING_TEST_TOOL } from './tool/backlightBleedBloomingTest/index';
export { OLED_SCREEN_BURN_IN_FIXER_TOOL } from './tool/oledScreenBurnInFixer/index';
export { SPECTRUM_CANVAS_TOOL } from './tool/colorAccuracyTest/index';
export { UPS_RUNTIME_CALCULATOR_TOOL } from './tool/upsRuntimeCalculator/index';
export { STEREO_AUDIO_TEST_TOOL } from './tool/stereoAudioTest/index';
export { WEB_BLUETOOTH_BLE_SCANNER_TOOL } from './tool/webBluetoothBleScanner/index';
export { WEBMIDI_KEYBOARD_TESTER_TOOL } from './tool/webMidiKeyboardTester/index';
export { KEYBOARD_CHATTER_TEST_TOOL } from './tool/keyboardChatterTest/index';
export { WEB_USB_SERIAL_MONITOR_TOOL } from './tool/webUsbSerialMonitor/index';
export { USB_POWER_BUDGET_CALCULATOR_TOOL } from './tool/usbPowerBudgetCalculator/index';
export { MOBILE_SENSOR_TEST_TOOL } from './tool/mobileSensorTest/index';
export { MOUSE_JITTER_ANGLE_SNAPPING_TEST_TOOL } from './tool/mouseJitterAngleSnappingTest/index';
export { TOUCH_SCREEN_TESTER_TOOL } from './tool/touchScreenTester/index';
