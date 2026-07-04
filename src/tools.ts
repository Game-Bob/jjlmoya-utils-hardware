export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { PIXELES_PANTALLA_TOOL } from './tool/deadPixelTest/index';
import { TEST_TECLADO_TOOL } from './tool/keyboardTest/index';
import { TEST_MANDO_TOOL } from './tool/gamepadTest/index';
import { PROBADOR_VIBRACION_MANDO_TOOL } from './tool/gamepadVibrationTester/index';
import { TEST_RATON_TOOL } from './tool/mousePollingTest/index';
import { ESTIMADOR_SALUD_BATERIA_TOOL } from './tool/batteryHealthEstimator/index';
import { TONE_GENERATOR_TOOL } from './tool/toneGenerator/index';
import { REFRESH_RATE_DETECTOR_TOOL } from './tool/refreshRateDetector/index';
import { SPECTRUM_CANVAS_TOOL } from './tool/colorAccuracyTest/index';
import { MOUSE_DOUBLE_CLICK_TEST_TOOL } from './tool/mouseDoubleClickTest/index';
import { MOUSE_SCROLL_TEST_TOOL } from './tool/mouseScrollTest/index';
import { MONITOR_GHOSTING_TEST_TOOL } from './tool/monitorGhostingTest/index';
import { UPS_RUNTIME_CALCULATOR_TOOL } from './tool/upsRuntimeCalculator/index';
import { STEREO_AUDIO_TEST_TOOL } from './tool/stereoAudioTest/index';
import { WEB_BLUETOOTH_BLE_SCANNER_TOOL } from './tool/webBluetoothBleScanner/index';

export const ALL_TOOLS: ToolDefinition[] = [PIXELES_PANTALLA_TOOL, TEST_TECLADO_TOOL, TEST_MANDO_TOOL, PROBADOR_VIBRACION_MANDO_TOOL, TEST_RATON_TOOL, MOUSE_DOUBLE_CLICK_TEST_TOOL, MOUSE_SCROLL_TEST_TOOL, ESTIMADOR_SALUD_BATERIA_TOOL, TONE_GENERATOR_TOOL, REFRESH_RATE_DETECTOR_TOOL, MONITOR_GHOSTING_TEST_TOOL, SPECTRUM_CANVAS_TOOL, UPS_RUNTIME_CALCULATOR_TOOL, STEREO_AUDIO_TEST_TOOL, WEB_BLUETOOTH_BLE_SCANNER_TOOL];
