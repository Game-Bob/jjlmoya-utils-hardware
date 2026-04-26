import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-refresh-rate-detector';
const title = 'Monitor Refresh Rate Detector';
const description = 'Instantly detect your monitor\'s refresh rate with precision using requestAnimationFrame. Test frame stability and compare with industry standards.';

const faqData = [
  {
    question: 'What is refresh rate (Hz)?',
    answer: 'Refresh rate is how many times per second your monitor updates the image. A 60Hz monitor refreshes 60 times per second, while 144Hz refreshes 144 times. Higher rates result in smoother motion.',
  },
  {
    question: 'How accurate is this detector?',
    answer: 'This tool uses requestAnimationFrame, which synchronizes with your monitor\'s refresh cycle. Accuracy depends on system load. The stable mode measures for longer periods for greater precision.',
  },
  {
    question: 'What\'s the difference between Stable and Fast mode?',
    answer: 'Fast mode measures for a short time (~3 seconds) for quick feedback. Stable mode takes longer (~10 seconds) to filter out system noise and provide more reliable results.',
  },
  {
    question: 'Why is my detected Hz different from what my monitor says?',
    answer: 'This can happen if: your cable connection is loose, drivers are outdated, or your OS scaling interferes. Try unplugging and re-plugging your display cable, or updating GPU drivers.',
  },
  {
    question: 'What refresh rates do modern monitors support?',
    answer: 'Common standards are 60Hz (basic), 75Hz, 120Hz, 144Hz (gaming), 240Hz (competitive gaming), and 360Hz (professional esports).',
  },
];

const howToData = [
  {
    name: 'Load the tool',
    text: 'Simply open this page. The detector starts measuring immediately.',
  },
  {
    name: 'Wait for stabilization',
    text: 'Choose Stable or Fast mode. Let the measurement complete without moving the window.',
  },
  {
    name: 'Check the speedometer',
    text: 'Your monitor\'s refresh rate appears as a smooth dial, with benchmark stats (min/max/avg).',
  },
  {
    name: 'Compare with standards',
    text: 'The tool shows which standard your monitor matches (60, 75, 120, 144, 240, 360Hz).',
  },
  {
    name: 'Optional: test frame skipping',
    text: 'Watch the animated square cross the screen to visually confirm fluidity.',
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

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Monitor Refresh Rate Detector: Test Your Display Hz Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Instantly detect your monitor\'s refresh rate (60Hz, 144Hz, 240Hz, etc.) with precision. Test frame stability and verify your display is performing at its rated specifications.',
    },
    {
      type: 'title',
      text: 'Why Monitor Refresh Rate Matters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Refresh rate determines how smooth motion appears on your screen. Gamers benefit from 144Hz+ monitors, while general users find 60Hz adequate. This tool helps confirm your monitor is actually delivering its advertised refresh rate.',
    },
    {
      type: 'title',
      text: 'How to Detect Your Refresh Rate',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Load this detector—measurement begins immediately',
        'Choose between Fast (3s) or Stable (10s) measurement mode',
        'Read your monitor\'s Hz from the speedometer dial',
        'Compare against industry standards (60, 75, 120, 144, 240, 360Hz)',
      ],
    },
    {
      type: 'title',
      text: 'Common Refresh Rate Standards',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Standard', 'Use Case', 'Typical User'],
      rows: [
        ['60Hz', 'General Computing', 'Office, Web Browsing'],
        ['75Hz', 'Light Gaming', 'Casual Gamers'],
        ['120Hz', 'Multimedia', 'Console, Streaming'],
        ['144Hz', 'Competitive Gaming', 'FPS, Fast-Paced Games'],
        ['240Hz+', 'Professional Esports', 'Pro Gamers, Streamers'],
      ],
    },
    {
      type: 'title',
      text: 'Troubleshooting: Display Shows Lower Hz Than Expected',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Check HDMI/DisplayPort cable connections—loose cables reduce bandwidth',
        'Update your GPU drivers (NVIDIA, AMD, Intel)',
        'Check OS display settings to ensure high refresh rate is enabled',
        'Try different cables or ports on your monitor',
        'Restart your computer and re-test',
      ],
    },
    {
      type: 'title',
      text: 'The Tech Behind This Detector',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This tool uses the browser\'s requestAnimationFrame API, which synchronizes directly with your monitor\'s refresh cycle. By measuring the time between animation frames, we calculate your exact refresh rate with high precision—no special hardware needed.',
    },
  ],
  ui: {
    badge: 'Display Test',
    title: 'Monitor Refresh Rate Detector',
    description: 'Detect your display\'s refresh rate instantly',
    modeStable: 'Stable (10s, precise)',
    modeFast: 'Fast (3s, quick)',
    measurementStatus: 'Measuring...',
    currentHz: 'Current',
    averageHz: 'Average',
    maxHz: 'Maximum',
    minHz: 'Minimum',
    standardDetected: 'Standard Detected',
    frameSkippingTest: 'Frame Skipping Test',
    startMeasurement: 'Start Measurement',
    resetMeasurement: 'Reset',
    copyResult: 'Copy Result',
    copiedFeedback: 'Copied to clipboard!',
    optimalConfiguration: '[OK] Optimal Configuration',
    suboptimalConfiguration: '[WARNING] Below Optimal',
    unstableRefreshRate: '[WARNING] Unstable Refresh Rate',
    measurementNotStarted: 'Ready to measure',
    switchMonitorHint: 'Drag window to another monitor to test it',
    incompatibleBrowserMsg: 'Your browser doesn\'t support requestAnimationFrame',
  },
};
