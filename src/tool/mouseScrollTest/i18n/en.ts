import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-scroll-test';
const title = 'Mouse Scroll Test';
const description =
  'Diagnose mouse wheel skips, reverse jumps, inconsistent scroll direction, and weak encoder signals with a local browser-based scroll wheel test.';

const faqData = [
  {
    question: 'What does a mouse scroll test detect?',
    answer:
      'A mouse scroll test records wheel events and looks for unstable direction changes, weak tiny deltas, and inconsistent scrolling. These symptoms often appear when the wheel encoder is dirty, worn, misaligned, or electronically noisy.',
  },
  {
    question: 'What is a reverse scroll jump?',
    answer:
      'A reverse jump happens when you scroll in one direction but the computer receives a short event in the opposite direction. If it repeats during steady scrolling, it is a strong sign of wheel encoder bounce or contamination.',
  },
  {
    question: 'Can this test work with touchpads?',
    answer:
      'Yes, but the result is most meaningful for physical mouse wheels. Touchpads and smooth-scroll wheels create many small deltas, so the sensitivity control helps separate intentional fine movement from suspicious jitter.',
  },
  {
    question: 'Does the test upload my mouse data?',
    answer:
      'No. The calculation runs locally in your browser. The tool only uses wheel events while your pointer is inside the capture area.',
  },
];

const howToData = [
  {
    name: 'Place the pointer over the capture pad',
    text: 'Move the cursor into the scroll lab area so the page can capture wheel events without moving the surrounding document.',
  },
  {
    name: 'Scroll steadily in one direction',
    text: 'Test one direction at a time: roll slowly upward for several clicks, reset or pause, then test downward separately. Fast intentional direction changes can create false reverse-jump readings.',
  },
  {
    name: 'Watch for reverse jumps',
    text: 'If the reversal counter rises while your finger is still moving in one direction, repeat the same motion to confirm the pattern.',
  },
  {
    name: 'Tune the sensitivity',
    text: 'Raise sensitivity for smooth touchpads or lower it for strict mechanical wheel testing. The stability score updates immediately.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
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
      text: 'Mouse Scroll Test: Find Wheel Skips and Reverse Jumps',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A failing mouse wheel rarely breaks all at once. It usually starts with tiny symptoms: one notch scrolls the wrong way, a page jumps upward while you are scrolling down, or the wheel feels normal but the browser receives inconsistent events. This mouse scroll test records the wheel signal that reaches the browser and highlights the patterns that matter for diagnosis.',
    },
    {
      type: 'paragraph',
      html: 'The goal is not to count how far a page moved. The useful signal is <strong>direction consistency</strong>. When you roll a mechanical wheel steadily downward, the event stream should stay downward. Short opposite-direction events inside a narrow time window are suspicious because they match the way dirty or worn scroll encoders misread wheel movement.',
    },
    {
      type: 'title',
      text: 'What the Tool Measures',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Total wheel ticks captured inside the test pad',
        'Reverse jumps: fast sign changes that occur while the previous direction is still recent',
        'Longest clean run: how many consecutive events stayed in a consistent direction',
        'Last delta: the raw direction and size of the most recent wheel event',
        'Vertical versus horizontal activity, useful for tilt wheels and trackpads',
      ],
    },
    {
      type: 'table',
      headers: ['Signal', 'Healthy Pattern', 'Suspicious Pattern'],
      rows: [
        ['Vertical wheel', 'Long runs of up or down events during steady scrolling', 'Alternating up/down events while your finger keeps one direction'],
        ['Horizontal tilt', 'Left or right events only when using tilt or horizontal gestures', 'Unexpected side movement during normal vertical wheel use'],
        ['Small deltas', 'Occasional small values on smooth wheels or touchpads', 'A high share of tiny unstable values on a notched mechanical wheel'],
        ['Stability score', 'Stays high across several deliberate passes', 'Drops repeatedly because reversals occur in the same direction test'],
      ],
    },
    {
      type: 'title',
      text: 'Common Causes of Scroll Wheel Skipping',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Most mouse wheels use an encoder that converts rotation into pulses. Dust, oxidation, worn contacts, a loose wheel axle, firmware filtering problems, or a damaged cable can make those pulses inconsistent. When the encoder briefly reports the wrong phase, the operating system may receive an opposite-direction wheel event even though the wheel kept moving in the original direction.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Likely Cause', 'Next Check'],
      rows: [
        ['Page jumps upward while scrolling down', 'Encoder bounce or dirt inside the wheel mechanism', 'Run a slow downward pass and watch the reversal counter'],
        ['Only one application scrolls badly', 'Application smoothing, zoom mode, or custom mouse shortcut', 'Try the test in a browser and compare with another app'],
        ['Wheel is fine after blowing air, then fails again', 'Temporary debris movement or worn encoder contacts', 'Repeat after a few minutes of normal use'],
        ['Horizontal movement appears unexpectedly', 'Tilt wheel noise, touchpad gesture, or driver mapping', 'Check the horizontal axis meter while scrolling vertically'],
        ['Wireless mouse scrolls erratically', 'Low battery, receiver distance, or interference', 'Retest with a fresh battery and receiver close to the mouse'],
      ],
    },
    {
      type: 'title',
      text: 'How to Test Reliably',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Put the pointer inside the capture pad before scrolling so the page can prevent normal page movement',
        'Test one direction at a time: scroll slowly upward for 10 to 20 wheel notches without changing direction',
        'Reset or pause, then repeat the same one-direction pass downward',
        'Do not alternate rapidly between up and down, because intentional fast direction changes can look like reverse jumps',
        'If reversals appear, repeat the failing direction several times to confirm it is reproducible',
        'Compare with another mouse on the same computer if you need to separate hardware from software',
      ],
    },
    {
      type: 'title',
      text: 'Interpreting the Score',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The stability score is a quick summary. A high score means the tool saw consistent direction and few tiny uncertain deltas. A low score does not automatically prove the mouse is broken, especially on touchpads or high-resolution smooth wheels, but repeated reverse jumps during a slow one-direction test are strong evidence of a real wheel problem.',
    },
    {
      type: 'table',
      headers: ['Result', 'Meaning', 'Recommended Action'],
      rows: [
        ['No reversals and long clean runs', 'The wheel signal looks consistent', 'Keep testing only if symptoms appear in real use'],
        ['One isolated reversal', 'Could be accidental direction change or one noisy event', 'Repeat the same direction slowly'],
        ['Several reversals in the same pass', 'Likely encoder bounce, dirt, or wheel wear', 'Retest on another computer and document the result'],
        ['Many jitter events but no reversals', 'Sensitivity may be too low for the device type', 'Raise sensitivity for touchpad or smooth-scroll devices'],
        ['Horizontal events during vertical wheel use', 'Possible tilt wheel or driver mapping noise', 'Disable custom mouse software and retest'],
      ],
    },
    {
      type: 'title',
      text: 'Mechanical Wheel Versus Touchpad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A notched mechanical wheel normally produces clear directional steps. A touchpad or free-spin wheel can produce many small deltas because the operating system applies smooth scrolling. That is why this tool includes sensitivity control: raising it ignores tiny movement and makes the test focus on direction changes large enough to matter.',
    },
    {
      type: 'title',
      text: 'What to Try Before Replacing the Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Test in another browser to rule out a page-specific wheel handler',
        'Disable vendor mouse software, scroll acceleration, or macro layers during diagnosis',
        'For wireless mice, use a fresh battery and move the receiver closer',
        'Clean around the wheel with compressed air while the mouse is unplugged or powered off',
        'If the mouse is under warranty, record the repeated reversal pattern as evidence',
      ],
    },
    {
      type: 'paragraph',
      html: 'Browser-based testing cannot inspect the encoder electrically, but it can show exactly what your normal software receives. If the browser receives wrong-direction wheel events during a careful one-way scroll, other applications can receive them too.',
    },
  ],
  ui: {
    badge: 'Wheel Signal Lab',
    captureTitle: 'Scroll inside the signal pad',
    captureHint: 'Use steady one-way wheel passes to expose reverse jumps',
    focusLockTitle: 'Activate this scroll zone',
    focusLockText: 'Click this zone, then scroll here. The page will not move while this zone is active.',
    stabilityScore: 'Stability score',
    statusIdle: 'Scroll over the pad to start measuring wheel consistency',
    statusClean: 'Wheel direction is stable in the captured samples',
    statusWarning: 'Reverse jumps detected during recent scrolling',
    statusMixed: 'Many tiny deltas detected; tune sensitivity for this device',
    directionNote: 'Test one direction at a time. Rapidly switching up and down can create false reverse-jump readings.',
    totalTicks: 'Ticks',
    reversals: 'Reversals',
    longestRun: 'Best run',
    lastDelta: 'Last delta',
    verticalAxis: 'Vertical',
    horizontalAxis: 'Horizontal',
    dominantDirection: 'Last direction',
    upward: 'Up',
    downward: 'Down',
    leftward: 'Left',
    rightward: 'Right',
    noDirection: 'No movement',
    noDataValue: '-',
    sensitivityLabel: 'Jitter sensitivity',
    sensitivityUnit: 'delta',
    reset: 'Reset',
    logTitle: 'Wheel event stream',
    emptyLog: 'Scroll over the pad with slow, steady wheel movement.',
    cleanEvent: 'clean',
    reversalEvent: 'reverse jump',
    jitterEvent: 'tiny delta',
  },
};
