import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tone-frequency-generator';
const title = 'Online Tone and Frequency Generator';
const description =
  'Generate sine, square, triangle and sawtooth waves. Test your speakers, headphones or subwoofer with frequencies from 20Hz to 20kHz.';

const faqData = [
  {
    question: 'What is a frequency generator used for?',
    answer:
      'It is used to test the frequency response of speakers and headphones, detect unwanted resonances in furniture, find gaps in your hearing range, or even help calm tinnitus through notch therapy.',
  },
  {
    question: 'What is a sine wave versus a square wave?',
    answer:
      'A sine wave is a pure tone with no harmonics (smooth and round). A square wave is rich in odd harmonics and sounds much more aggressive or digital. The triangle wave sits in between, useful for audio synthesis.',
  },
  {
    question: 'Can I damage my speakers with this tool?',
    answer:
      'Yes, if you use very high volumes at extreme frequencies (especially bass below 30Hz or treble above 15kHz). Always start with a low system volume and increase gradually.',
  },
  {
    question: 'What is the human hearing range?',
    answer:
      'Theoretically 20Hz to 20,000Hz (20kHz). However, with age it is normal to lose the ability to hear above 15kHz. This test can help you verify your personal upper limit.',
  },
];

const howToData = [
  {
    name: 'Select the waveform type',
    text: 'Choose between Sine (pure), Square, Triangle or Sawtooth depending on the type of test you want to perform.',
  },
  {
    name: 'Adjust the frequency',
    text: 'Move the slider to navigate the audible spectrum. Use the 60Hz, 440Hz or 1kHz shortcuts to quickly access reference frequencies.',
  },
  {
    name: 'Control the volume',
    text: 'Make sure your speaker volume is low before pressing Play. You can adjust the gain directly from the tool.',
  },
  {
    name: 'Analyse the response',
    text: 'Listen for possible distortions or moments when the sound disappears. This will indicate the physical limits of your audio hardware.',
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

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Everything About Frequencies and Sound Waves', level: 2 },
    {
      type: 'paragraph',
      html: 'Sound is pure physics in motion. This tool lets you manipulate sound waves in real time, from the deepest bass you can feel in your chest to the ultrasonic highs only animals can perceive.',
    },
    { type: 'title', text: 'Human Hearing Range and Presbycusis', level: 3 },
    {
      type: 'paragraph',
      html: 'A healthy human ear perceives sounds between <strong>20Hz and 20kHz</strong>. With age, the upper limit drops: most adults over 50 cannot hear above 12kHz. The 17.4kHz tone, known as the "mosquito tone", is a classic test that only teenagers can typically pass.',
    },
    { type: 'title', text: 'Wave Types and Their Uses', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sine:</strong> pure tone with no harmonics, used in medical hearing tests and instrument calibration. <strong>Square:</strong> rich in odd harmonics, sounds like retro 8-bit consoles. <strong>Sawtooth:</strong> contains all harmonics, the basis of electronic music synthesisers. <strong>Triangle:</strong> midpoint between sine and square -smoother than square but with more harmonic content than sine.',
    },
    { type: 'title', text: 'Speaker Testing and Vibration Cleaning', level: 3 },
    {
      type: 'paragraph',
      html: 'A low-frequency wave (typically <strong>165Hz</strong>) at maximum volume with a square or sawtooth shape forces the speaker diaphragm to vibrate violently, mechanically expelling water droplets trapped in the grille. Do not play extremely high frequencies at maximum volume for long periods: even if you cannot hear them, the energy can damage your equipment\'s tweeters.',
    },
  ],
  ui: {
    badge: 'Audio Generator',
    title: 'Tone Generator',
    description: 'Generate pure frequencies for audio testing.',
    freqLabel: 'Frequency',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Sub-bass)',
    rangeMax: '20kHz (Ultrasound)',
    waveLabel: 'Waveform',
    waveSine: 'Sine',
    waveSquare: 'Square',
    waveSawtooth: 'Sawtooth',
    waveTriangle: 'Triangle',
    volLabel: 'Volume',
    btnPlay: 'PLAY TONE',
    btnStop: 'STOP',
  },
};
