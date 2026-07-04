import { webBluetoothBleScanner } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const WEB_BLUETOOTH_BLE_SCANNER_TOOL: ToolDefinition = {
  entry: webBluetoothBleScanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
