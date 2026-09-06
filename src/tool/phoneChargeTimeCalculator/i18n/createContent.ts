import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

interface PhoneChargeTimeCalculatorContentInput {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faq: FAQItem[];
  howTo: HowToStep[];
  seo: SEOSection[];
  ui: PhoneChargeTimeCalculatorUI;
}

export function createPhoneChargeTimeCalculatorContent(
  input: PhoneChargeTimeCalculatorContentInput,
): ToolLocaleContent<PhoneChargeTimeCalculatorUI> {
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: input.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: input.title,
    description: input.description,
    step: input.howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: input.title,
    description: input.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    inLanguage: input.locale,
  };

  return {
    slug: input.slug,
    title: input.title,
    description: input.description,
    faq: input.faq,
    bibliography,
    howTo: input.howTo,
    schemas: [faqSchema, howToSchema, appSchema],
    seo: input.seo,
    ui: input.ui,
  };
}
