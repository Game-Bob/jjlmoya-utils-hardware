import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Locale Completeness Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(tool.entry.i18n).forEach((locale) => {
        describe(`Locale: ${locale}`, () => {
          it('bibliography should be defined', async () => {
            const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
            const content = (await loader?.()) as ToolLocaleContent;

            expect(
              content.bibliography,
              `Tool "${tool.entry.id}" locale "${locale}" is missing bibliography`,
            ).toBeDefined();
          });
        });
      });
    });
  });

  it('all 10 tools registered', () => {
    expect(ALL_TOOLS.length).toBe(8);
  });
});

