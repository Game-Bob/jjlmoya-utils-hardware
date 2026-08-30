import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-polling-rate-checker';
const title = 'Gamepad Polling Test';
const description = 'Measure the browser observed update rate, report interval and timing stability of a USB or Bluetooth gamepad.';

const faq = [
  {
    question: 'What does this gamepad polling rate checker measure?',
    answer: 'It measures changes in the Gamepad timestamp exposed to the browser while you move an analog stick. The reported Hertz value is an observed browser update rate, not a direct electrical measurement of the USB polling interval.',
  },
  {
    question: 'Can a browser verify that my controller is running at 1000 Hz?',
    answer: 'It can show whether timestamp updates are reaching the page at a high and consistent rate, but it cannot certify a 1000 Hz USB overclock. Browser scheduling, timer precision, operating system handling and the Gamepad implementation can hide or group hardware reports.',
  },
  {
    question: 'Why do I need to move the analog stick in circles?',
    answer: 'Continuous circular movement keeps both axes changing and provides a useful stream of fresh controller states. Holding the stick still can leave too few meaningful updates for a stable comparison.',
  },
  {
    question: 'Can I compare USB and Bluetooth controller performance?',
    answer: 'Yes, repeat the same duration and circular movement for each connection and compare observed rate, interval and jitter in the same browser. Treat the result as a relative browser based comparison rather than total input latency.',
  },
];

const howTo = [
  {
    name: 'Connect and activate the gamepad',
    text: 'Connect the controller by USB or Bluetooth, then press a button so the browser exposes it through the Gamepad API.',
  },
  {
    name: 'Choose the device and duration',
    text: 'Select the intended controller and use ten seconds for a balanced first measurement.',
  },
  {
    name: 'Move one analog stick continuously',
    text: 'Start the measurement and draw smooth circles with the left stick until the progress ring completes.',
  },
  {
    name: 'Read the observed timing',
    text: 'Compare Hertz, average update interval, jitter and confidence, then repeat under the same conditions if needed.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Gamepad Polling Rate Questions',
  faq,
  bibliographyTitle: 'Technical References',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Measure Browser Observed Gamepad Polling Rate',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This checker watches the high resolution timestamp attached to the selected gamepad while an analog stick is moving. It removes extreme intervals, calculates a stable average interval and converts that interval to an observed rate with <strong>1000 divided by milliseconds</strong>. Everything runs locally in the current page.',
    },
    {
      type: 'table',
      headers: ['Reading', 'What it describes', 'What it does not prove'],
      rows: [
        ['Observed rate', 'Timestamp updates exposed to this page each second', 'The electrical USB polling rate'],
        ['Update interval', 'Average time between browser visible timestamp changes', 'Total button to screen latency'],
        ['Jitter', 'Spread between the 5th and 95th percentile intervals', 'A hardware fault by itself'],
        ['Confidence', 'Sample quantity and consistency for this run', 'Laboratory grade accuracy'],
      ],
    },
    {
      type: 'title',
      text: 'How to Run a Repeatable Controller Hertz Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Close demanding background work, keep this tab visible and move the same stick in smooth circles for each run. Use the same browser, connection method and duration when comparing controller firmware, USB settings or Bluetooth behavior. A ten second window usually collects enough reports without making the test tedious.',
    },
    {
      type: 'tip',
      title: 'Compare like with like',
      html: 'Run at least two passes after changing a cable, Bluetooth adapter, USB port or operating system setting. A single peak is less useful than a repeatable observed rate with narrow jitter.',
    },
    {
      type: 'title',
      text: 'Why This Is Not an End to End Latency Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The Gamepad API exposes controller state after the operating system and browser have processed it. It does not see the electrical report at the cable, the game engine input loop, rendering, display scanout or pixel response. The update interval is therefore useful for browser level diagnostics, but it must not be presented as complete input latency.',
    },
  ],
  ui: {
    privacyNote: 'Local signal only',
    stepConnect: 'Connect and press a button',
    stepMove: 'Move one stick in circles',
    stepRead: 'Compare rate and stability',
    deviceLabel: 'Active gamepad',
    devicePlaceholder: 'Press a controller button to detect it',
    deviceFallback: 'Connected gamepad',
    durationLabel: 'Measurement window',
    durationFive: '5 sec',
    durationTen: '10 sec',
    durationTwenty: '20 sec',
    startAction: 'Start trace',
    stopAction: 'Stop',
    resetAction: 'Reset',
    orbitInstruction: 'Move the left stick in smooth circles during the whole trace',
    traceLabel: 'Live timestamp trace',
    observedRateLabel: 'Browser observed rate',
    intervalLabel: 'Update interval',
    jitterLabel: 'Timing spread',
    samplesLabel: 'Valid intervals',
    confidenceLabel: 'Run confidence',
    confidenceLow: 'Low',
    confidenceMedium: 'Medium',
    confidenceHigh: 'High',
    statusWaiting: 'Waiting for a compatible controller',
    statusReady: 'Controller ready. Start the trace when your hand is on the stick.',
    statusMeasuring: 'Recording timestamp changes locally',
    statusNeedsMovement: 'Keep the stick moving in wider circles to collect useful updates',
    statusComplete: 'Trace complete. Repeat under the same conditions to compare.',
    statusUnsupported: 'This browser does not expose the Gamepad API',
    statusDisconnected: 'No active controller. Connect one and press a button.',
    statusStopped: 'Trace stopped. The partial result remains visible.',
    limitHeading: 'Browser measurement limit',
    limitBody: 'This estimates updates visible through the Gamepad API. It does not certify USB polling, controller overclocking or total input latency.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'intervals',
    progressLabel: 'Measurement progress',
  },
};
