import type { ToolDefinition } from '../../types';
import { gamepadPollingRateChecker } from './entry';

export * from './entry';

export const GAMEPAD_POLLING_RATE_CHECKER_TOOL: ToolDefinition = {
  entry: gamepadPollingRateChecker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
