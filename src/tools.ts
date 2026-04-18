export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { PIXELES_PANTALLA_TOOL } from './tool/deadPixelTest/index';
import { TEST_TECLADO_TOOL } from './tool/keyboardTest/index';
import { TEST_MANDO_TOOL } from './tool/gamepadTest/index';
import { PROBADOR_VIBRACION_MANDO_TOOL } from './tool/gamepadVibrationTester/index';
import { TEST_RATON_TOOL } from './tool/mousePollingTest/index';
import { ESTIMADOR_SALUD_BATERIA_TOOL } from './tool/batteryHealthEstimator/index';
import { TONE_GENERATOR_TOOL } from './tool/toneGenerator/index';

export const ALL_TOOLS: ToolDefinition[] = [PIXELES_PANTALLA_TOOL, TEST_TECLADO_TOOL, TEST_MANDO_TOOL, PROBADOR_VIBRACION_MANDO_TOOL, TEST_RATON_TOOL, ESTIMADOR_SALUD_BATERIA_TOOL, TONE_GENERATOR_TOOL];

