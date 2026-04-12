import type { ToolDefinition } from './types';
import { PIXELES_PANTALLA_TOOL } from './tool/pixelesPantalla/index';
import { TEST_TECLADO_TOOL } from './tool/testTeclado/index';

export const ALL_TOOLS: ToolDefinition[] = [PIXELES_PANTALLA_TOOL, TEST_TECLADO_TOOL];

