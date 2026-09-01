import type { FAQPage, HowTo, SoftwareApplication } from "schema-dts";
import type { WithContext } from "schema-dts";
import type { FAQItem, HowToStep, SEOSection } from "../../types";
import type { PcbTraceWidthImpedanceCheckerLocaleContent } from "./entry";
import type { PcbTraceWidthImpedanceCheckerUI } from "./ui";
import { bibliography } from "./bibliography";

export interface LocalizedTraceCopy {
  slug: string;
  title: string;
  description: string;
  ui: PcbTraceWidthImpedanceCheckerUI;
  seo: SEOSection[];
  faqTitle: string;
  faq: FAQItem[];
  bibliographyTitle: string;
  howTo: HowToStep[];
}

export function makeLocaleContent(
  copy: LocalizedTraceCopy,
): PcbTraceWidthImpedanceCheckerLocaleContent {
  return {
    ...copy,
    bibliography,
    schemas: [
      createAppSchema(copy),
      createFaqSchema(copy),
      createHowToSchema(copy),
    ],
  };
}

function createAppSchema(
  copy: LocalizedTraceCopy,
): WithContext<SoftwareApplication> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: copy.title,
    description: copy.description,
    applicationCategory: "EngineeringApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

function createFaqSchema(copy: LocalizedTraceCopy): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function createHowToSchema(copy: LocalizedTraceCopy): WithContext<HowTo> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: copy.title,
    step: copy.howTo.map((item) => ({
      "@type": "HowToStep",
      name: item.name,
      text: item.text,
    })),
  };
}
