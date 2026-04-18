import { describe, it, expect } from 'vitest';
import { hardwareCategory as toolsCategory } from '../category/index';
import type { CategoryLocaleContent } from '../types';

const EXPECTED_LOCALES = [
  'de', 'en', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh'
];

const sharingLocales = ['ja', 'ko', 'zh'];

describe('Category Validation', () => {
  it('should have all 15 required locales', () => {
    const registeredLocales = Object.keys(toolsCategory.i18n);
    EXPECTED_LOCALES.forEach((locale) => {
      expect(
        registeredLocales,
        `Category is missing locale "${locale}"`,
      ).toContain(locale);
    });
  });

  describe('Category Slug Validation', () => {
    it('every locale should have a unique, translated slug and follow format rules', async () => {
      const slugs = new Map<string, string>();
      const locales = Object.keys(toolsCategory.i18n);

      let enSlug = '';
      if (locales.includes('en')) {
        const enLoader = toolsCategory.i18n['en' as keyof typeof toolsCategory.i18n];
        const enContent = (await enLoader?.()) as CategoryLocaleContent;
        enSlug = enContent.slug;
      }

      for (const locale of locales) {
        const loader = toolsCategory.i18n[locale as keyof typeof toolsCategory.i18n];
        const content = (await loader?.()) as CategoryLocaleContent;

        expect(
          content.slug,
          `Category locale "${locale}" has an invalid slug ("${content.slug}"). Slugs must be transliterated (only a-z, 0-9, and -).`,
        ).toMatch(/^[a-z0-9-]+$/);

        expect(
          content.slug,
          `Category locale "${locale}" slug ("${content.slug}") cannot end with a 2-letter language code (e.g., -ja, -ru, -ko).`,
        ).not.toMatch(/-[a-z]{2}$/);

        if (locale !== 'en') {
          if (sharingLocales.includes(locale)) {
            expect(
              content.slug,
              `Category locale "${locale}" must use the same slug as "en" ("${enSlug}").`,
            ).toBe(enSlug);
          } else {
            expect(
              content.slug,
              `Category locale "${locale}" has the same slug as "en" ("${enSlug}"). Cada slug tiene que estar en su propio idioma`,
            ).not.toBe(enSlug);

            if (slugs.has(content.slug)) {
              const previousLocale = slugs.get(content.slug);
              expect(
                false,
                `Category locales "${locale}" and "${previousLocale}" share the same slug ("${content.slug}"). Cada slug tiene que estar en su propia idioma`,
              ).toBe(true);
            }
            slugs.set(content.slug, locale);
          }
        }
      }
    });
  });
});
