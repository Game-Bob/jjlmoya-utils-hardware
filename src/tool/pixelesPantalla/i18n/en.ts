import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';

const slug = 'dead-pixel-tester';
const title = 'Dead Pixel Test and Screen Repair Tool';
const description =
  'Check if your monitor has dead or stuck pixels and repair them with our high-frequency strobe tool online.';

const faqData = [
  {
    question: 'What is the difference between a dead pixel and a stuck pixel?',
    answer:
      'A dead pixel is permanently black because it receives no power (burnt transistor). A stuck pixel is usually a bright color (red, green, or blue) and can be revived by rapid strobe stimulation.',
  },
  {
    question: 'How does the repair tool (Strobe) work?',
    answer:
      'Our tool generates rapid flashing of primary colors at high speed. This can force the stuck liquid crystal pixel to unlock. It\'s recommended to let it work for 10 to 30 minutes.',
  },
  {
    question: 'Can dead pixels appear due to temperature?',
    answer:
      'Yes, extreme temperatures can affect the panel. However, the most common causes are manufacturing defects or physical impacts that damage the liquid crystal electrical contacts.',
  },
  {
    question: 'How many dead pixels are covered by warranty?',
    answer:
      'It depends on the manufacturer and ISO 9241-307 standard. Generally, brands consider up to 2 or 3 bright pixels "normal" on Class 1 panels, while Class 0 panels allow none.',
  },
];

const howToData = [
  {
    name: 'Clean the screen',
    text: 'Before starting, thoroughly clean your monitor with a microfiber cloth to avoid confusing dust with a dead pixel.',
  },
  {
    name: 'Enter fullscreen mode',
    text: 'Press F11 or the fullscreen button so the browser interface doesn\'t interfere with defect detection.',
  },
  {
    name: 'Alternate colors',
    text: 'Switch between black, white, red, green, and blue backgrounds. Look for any spots that don\'t match the background color.',
  },
  {
    name: 'Start the repair cycle',
    text: 'If you find a bright spot, position the Strobe tool over it and let it run for at least 20 minutes.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<PixelesPantallaUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Standards',
  bibliography: [
    {
      name: 'ISO/IEC 9241-307: Display ergonomics and related equipment',
      url: 'https://www.iso.org/standard/72025.html',
    },
    {
      name: 'Dead Pixel Policy - Common Standards (VESA)',
      url: 'https://www.vesa.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Complete Guide: Dead Pixels, Stuck Pixels, and How to Repair Them',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Noticed a strange spot on your screen that won\'t change color? It could be a panel defect. This tool helps you diagnose whether your monitor has <strong>dead pixels</strong> or <strong>stuck pixels</strong> and offers a solution to try to repair them.',
    },
    {
      type: 'title',
      text: 'What Is the Difference Between a Dead Pixel and a Stuck Pixel?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'There are two main types of pixel defects in modern monitors, each with distinct characteristics and solutions.',
    },
    {
      type: 'title',
      text: 'Stuck Pixel',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'This is the most common defect. It occurs when one or more subpixels (Red, Green, or Blue) become stuck in the "on" state. <strong>Symptom:</strong> You\'ll see a permanent bright colored dot (red, green, blue, or white) against a dark background. <strong>Often repairable.</strong> The liquid crystal still responds; it\'s simply "locked" in a specific polarization. Our Strobe repair tool attempts to unlock it with rapid voltage stimulation.',
    },
    {
      type: 'title',
      text: 'Dead Pixel',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Occurs when the transistor controlling the pixel fails completely and won\'t pass light. <strong>Symptom:</strong> A permanent black dot, especially visible against light or white backgrounds. <strong>Difficult to repair (usually permanent).</strong> The damage is at the hardware level (burnt circuit). No electrical stimulation can fix it. Usually requires panel replacement.',
    },
    {
      type: 'title',
      text: 'How Does the Strobe Repair Tool Work?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The "Repair Pixel" function uses a technique known as <strong>Pixel Exercising</strong>. It generates a high-frequency random noise pattern (rapid color flashing) over the affected area.',
    },
    {
      type: 'title',
      text: 'The Mechanism: Liquid Crystal and Voltage',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'LCD monitors use liquid crystals that change their transparency based on applied voltage. When a subpixel gets stuck, it means the crystal is "frozen" in a specific polarization. Rapid voltage changes (achieved through rapid primary color shifts) attempt to "exercise" the crystal and force it to change state.',
    },
    {
      type: 'title',
      text: 'Usage Recommendations',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>It\'s recommended to run the tool over the affected area for at least <strong>10 to 20 minutes</strong>.</li><li>If it doesn\'t work, try longer sessions (up to 1 hour) or apply very light pressure with a microfiber cloth over the pixel (at your own risk).</li><li>In some cases, gently warming the monitor with a hair dryer (on low temperature) before activating Strobe improves results.</li></ul>',
    },
    {
      type: 'title',
      text: 'Epilepsy Warning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The repair mode uses rapidly flashing lights at high speed. If you have photosensitive epilepsy or light sensitivity, <strong>DO NOT use this function</strong>. Exposure to flashing patterns can trigger seizures in susceptible individuals.',
    },
    {
      type: 'title',
      text: 'When to Seek Warranty or Replacement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If you confirm defective pixels (especially multiple dead pixels), you can use our test as evidence for warranty claims. Many manufacturers consider more than 2-3 bright pixels or 1 dead pixel a manufacturing defect that qualifies for replacement under ISO 9241-307 (Class 1) standard.',
    },
    {
      type: 'title',
      text: 'History of Dead Pixel Standards',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For decades, LCD monitors have suffered pixel defects due to manufacturing complexity. A Full HD panel (1920×1080) contains 6,220,800 pixels (18,662,400 subpixels). The statistical probability of defects is inevitable. That\'s why standards like ISO 9241-307 exist to define "acceptable dead pixels" based on monitor class.',
    },
  ],
  ui: {
    badge: 'Screen Utility',
    title: 'Dead or Stuck Pixels?',
    description:
      'Check your monitor\'s condition with pure solid colors and repair stuck pixels with our high-frequency stimulation tool.',
    btnStartTest: 'Start Test',
    btnStartFix: 'Repair Pixel',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Fullscreen',
    kbdSpace: 'Space',
    kbdSpaceLabel: 'Change Color',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Exit',
    colorBlack: 'Black',
    colorWhite: 'White',
    colorRed: 'Red',
    colorGreen: 'Green',
    colorBlue: 'Blue',
    btnToggleFixer: 'Open Repair Tool (Strobe)',
    btnExit: 'Exit (ESC)',
  },
};
