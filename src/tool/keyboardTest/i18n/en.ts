import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'keyboard-test';
const title = 'Online Keyboard Test & Ghosting Detector';
const description = 'Check if your keyboard suffers from Ghosting or Key Jamming. Real-time key visualizer and N-Key Rollover counter.';

const faqData = [
  {
    question: 'What is Ghosting on a keyboard?',
    answer: 'It\'s a defect that occurs when you press multiple keys at once and the computer doesn\'t register some of them. It\'s due to limitations in the keyboard\'s internal electrical matrix that cannot process certain combinations.',
  },
  {
    question: 'What does N-Key Rollover (NKRO) mean?',
    answer: 'NKRO means the keyboard can register as many keys as you can press simultaneously without failure. It\'s a premium feature, common in high-end mechanical and gaming keyboards.',
  },
  {
    question: 'Why does my keyboard fail when I press 3 keys at once?',
    answer: 'Most cheap office keyboards have a 2 or 3-key rollover. This is sufficient for typing but insufficient for intensive gaming or complex shortcuts.',
  },
  {
    question: 'How can I fix a key that doesn\'t respond?',
    answer: 'If the test doesn\'t detect the keypress, it could be dirt under the switch, electrical contact failure, or a damaged cable. Try cleaning the keyboard with compressed air before giving up.',
  },
];

const howToData = [
  {
    name: 'Focus the visualizer',
    text: 'Click anywhere on the page to ensure the browser has focus and can capture hardware keypresses.',
  },
  {
    name: 'Run the response test',
    text: 'Press each key on your keyboard one by one. The corresponding key on screen will light up green if it works correctly.',
  },
  {
    name: 'Check for ghosting',
    text: 'Press common gaming keys (W, A, S, D, Space, Shift) all at once to see if they lock or all light up.',
  },
  {
    name: 'Verify maximum rollover',
    text: 'Try pressing as many keys as you can with both hands and watch the maximum simultaneous keypress counter.',
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

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Online Keyboard Test: Detect Ghosting and N-Key Rollover',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'An interactive tool for keyboard diagnostics. Check if your peripheral suffers from ghosting, jamming, or rollover limitations. Visually clear with support for all keyboard types.',
    },
    {
      type: 'title',
      text: 'What is Ghosting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ghosting occurs when you press a specific combination of keys and the keyboard registers a phantom keypress you didn\'t make. This is due to limitations in the internal circuit matrix.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover and Maximum Rollover',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Allows registering all pressed keys simultaneously. <strong>6KRO:</strong> Old USB standard limit. <strong>2-3KRO:</strong> Common on cheap keyboards, sufficient for typing.',
    },
    {
      type: 'title',
      text: 'Mechanical vs Membrane Keyboards',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mechanical keyboards have individual switches with isolated diodes, eliminating ghosting. Membrane keyboards share conductor traces, causing failures in simultaneous combinations.',
    },
  ],
  ui: {
    badge: 'Input Test',
    title: 'Keyboard Test and Ghosting Detector',
    description: 'Verify N-Key Rollover and detect failed keys.',
    simultaneousLabel: 'Simultaneous',
    eventLogLabel: 'Event Log',
    resetBtn: 'Reset',
  },
};
