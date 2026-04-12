import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';

const slug = 'gamepad-vibration-tester';
const title = 'Online Gamepad Vibration Tester';
const description =
  'Test the haptic motors and Dual-Rumble vibration of your gamepad in the browser. Supports Xbox, DualShock, DualSense and generic controllers.';

const faqData = [
  {
    question: 'What do I need to test my gamepad online?',
    answer:
      'Just connect your gamepad to the computer or mobile device via USB cable or pair it via Bluetooth. Once linked, press any button to be detected.',
  },
  {
    question: 'Does it work with any gamepad model?',
    answer:
      'Most modern gamepads from well-known brands (like PlayStation or Xbox) are compatible if your device and operating system support it.',
  },
  {
    question: 'The right side of my gamepad vibrates less than the left, is that normal?',
    answer:
      'Yes, completely normal. Gamepads usually have an asymmetric design where one side handles strong, deep vibrations and the other handles fast, subtle vibrations.',
  },
  {
    question: 'Does running these tests drain a lot of battery?',
    answer:
      'Vibration is one of the most energy-consuming functions in a wireless gamepad. Running continuous, long tests will drain the battery faster than usual.',
  },
];

const howToData = [
  {
    name: 'Connect and turn on your gamepad',
    text: 'Link your gamepad to your PC, Mac or mobile via USB cable or Bluetooth.',
  },
  {
    name: 'Press a button on the gamepad',
    text: 'Browsers require you to press at least one button for the gamepad to be detected and start web communication.',
  },
  {
    name: 'Adjust the vibration motors',
    text: 'Configure the power of the Strong Motor (Low) and Fine Motor (High) independently.',
  },
  {
    name: 'Run the patterns',
    text: 'Press one of the presets or manually configure the parameters and send the signal to feel each component.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    {
      name: 'How haptic vibration works — HobbyConsolas',
      url: 'https://www.hobbyconsolas.com/reportajes/como-funciona-vibracion-haptica-mando-dualsense-ps5-757673',
    },
    {
      name: 'Gamepad API — W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'How to audit your gaming gamepad vibration', level: 2 },
    {
      type: 'paragraph',
      html: 'Haptic feedback is one of the most immersive elements of gaming hardware. When a motor fails, the first symptoms are usually abnormal buzzing or asymmetric vibrations. Diagnosing them early prevents major failures.',
    },
    { type: 'title', text: 'Why run the vibration test?', level: 3 },
    {
      type: 'paragraph',
      html: 'When buying a second-hand gamepad, after updating drivers or after a drop, testing the haptic motors helps distinguish real hardware failures from software issues. Compatible with Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro and generic USB gamepads.',
    },
    { type: 'title', text: 'Dual-Rumble vs. Linear Actuator Architecture', level: 3 },
    {
      type: 'paragraph',
      html: 'Classic gamepads (Xbox, DualShock) use two asymmetric micro-motors: the left one generates deep, rumbling vibrations; the right one produces fast, high-pitched buzzing. Advanced devices like the DualSense use linear actuators that simulate textures and resistance.',
    },
    { type: 'title', text: 'Symptom-based diagnostic guide', level: 3 },
    {
      type: 'paragraph',
      html: 'Activate each motor independently at 100%. If both sound the same, the gamepad may be a replica with a single motor. If one does not respond, check the connection before opening the chassis. Test fractional intensities: quality motors respond gradually, not like an on/off switch.',
    },
  ],
  ui: {
    badge: 'Vibration Test',
    title: 'Gamepad Vibration Tester',
    description: 'Direct control over the Dual-Rumble motor of your gamepad.',
    deviceDisconnected: 'Gamepad Disconnected',
    deviceDisconnectedSub: 'Press a button on your gamepad to start',
    deviceFallback: 'Gamepad Connected',
    deviceConnectedSub: 'Stable connection. Ready to test.',
    noSupportWarning: "No Dual-Rumble support detected in your browser. Using basic generic vibration.",
    tabPresets: 'Top Presets',
    tabCustom: 'Pure Precision',
    presetHeavyTitle: 'Hammer Strike',
    presetHeavyDesc: 'Heavy motor at max for 300ms. Simulates a strong hit.',
    presetLightTitle: 'Bee Buzz',
    presetLightDesc: 'Right motor only. Ideal for detecting unusual buzzing.',
    presetHeartbeatTitle: 'Racing Heart',
    presetHeartbeatDesc: 'Subtle consecutive pulses. Perfect for checking inertial retention.',
    presetSongTitle: 'Coin Rhythm',
    presetSongDesc: 'Simulates consecutive coin sounds. Short and tactile.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Queen's classic in your hands: boom, boom, clap!",
    presetEarthquakeTitle: 'Maximum Earthquake!',
    presetEarthquakeDesc: 'Both motors at 100% explosive force. VERY intense.',
    customStrongLabel: 'Strong Force (Left)',
    customWeakLabel: 'Weak Force (Right)',
    customDurationLabel: 'Pulse Duration',
    btnSendSignal: 'SEND SIGNAL NOW',
  },
};
