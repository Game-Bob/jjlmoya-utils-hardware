import { webUsbSerialMonitor } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const WEB_USB_SERIAL_MONITOR_TOOL: ToolDefinition = {
  entry: webUsbSerialMonitor,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

