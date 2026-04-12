import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';

const slug = 'mouse-polling-rate-test';
const title = 'Online Mouse Polling Rate Test';
const description =
  'Check the real Hz of your mouse. Verify if your gaming mouse works at 1000Hz or more with our professional tool.';

const faqData = [
  {
    question: 'What is the Polling Rate of a mouse?',
    answer:
      'It is the frequency at which the mouse reports its position to the computer, measured in Hz. A polling rate of 1000Hz means the mouse sends data every 1 millisecond, providing much smoother movement.',
  },
  {
    question: 'Why does my test not reach 1000Hz constantly?',
    answer:
      'The browser can only measure polling rate when the mouse is moving. If you move it slowly or your CPU is very busy, the measurement may fluctuate. Move the mouse in fast circles to get the real maximum peak.',
  },
  {
    question: 'Is it better to have the highest polling rate possible?',
    answer:
      'Generally yes for gaming (1000Hz or more), as it reduces lag. However, extremely high rates (4000Hz or 8000Hz) consume a lot of CPU resources and not all games are optimized for them.',
  },
  {
    question: 'How does the monitor refresh rate affect the mouse?',
    answer:
      'If you have a 144Hz or 240Hz monitor, a low polling rate (125Hz) will make the pointer look choppy. For high-frequency monitors, it is essential to use at least 500Hz or 1000Hz.',
  },
];

const howToData = [
  {
    name: 'Prepare the test area',
    text: 'Place the cursor inside the capture zone of the tool.',
  },
  {
    name: 'Move the mouse quickly',
    text: 'Make fast, wide circular movements. The tool will calculate the intervals between each mousemove event sent by the hardware.',
  },
  {
    name: 'Observe the stability graph',
    text: 'Check if the Hz line is constant or has sudden drops, which could indicate interference in wireless mice or CPU issues.',
  },
  {
    name: 'Analyze the response time',
    text: 'Check the average Delay in milliseconds. A good gaming mouse should stay close to 1ms average latency.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    {
      name: 'Gamepad Polling Rate — Logitech',
      url: 'https://www.logitechg.com/en-us/innovation/delta-zero.html',
    },
    {
      name: 'USB HID Polling Rate — USB Implementers Forum',
      url: 'https://www.usb.org/hid',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Definitive Guide to Polling Rate', level: 2 },
    {
      type: 'paragraph',
      html: 'When you physically move your mouse on the mousepad, that analog movement must be translated into digital signals your computer understands. The <strong>Polling Rate</strong> is the frequency at which the mouse "reports" its position to the PC. It is measured in Hertz (Hz).',
    },
    { type: 'title', text: 'Polling Rate Levels and Their Uses', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> — The mouse reports every 8 milliseconds. Fine for office use but feels choppy on 144Hz monitors. <strong>1000 Hz</strong> — The gaming gold standard: reports every 1 ms. Smooth movement with no perceptible delay. <strong>8000 Hz</strong> — Cutting-edge technology (Razer, Logitech). Reports every 0.125 ms but requires a powerful CPU.',
    },
    { type: 'title', text: 'Why Do My Hz Fluctuate?', level: 3 },
    {
      type: 'paragraph',
      html: 'Completely normal. Most modern mice have a dynamic polling rate to save power. If you move the mouse slowly, it sends fewer reports because there is less new data. Only fast, continuous movements push the sensor to its real maximum peak.',
    },
    { type: 'title', text: 'Polling Rate vs DPI: The Big Confusion', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong> is sensitivity: how many pixels the cursor moves per inch of physical movement. <strong>Hz (Polling Rate)</strong> is update frequency: how smoothly and timely that movement is reported. Both parameters are independent and complementary.',
    },
  ],
  ui: {
    badge: 'Mouse Test',
    title: 'Polling Rate Checker',
    description: 'Move the mouse in fast circles to measure the Hz.',
    labelAvg: 'Average',
    labelPeak: 'Peak',
    placeholder: 'Move the mouse here',
  },
};
