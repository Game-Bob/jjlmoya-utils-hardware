import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'keyboard-chatter-test';
const title = 'Keyboard Chatter Test';
const description = 'Detect mechanical keyboard chattering, double typing, and faulty switch bounce by checking how quickly the same key appears twice.';

const faqData = [
  {
    question: 'What is keyboard chatter?',
    answer: 'Keyboard chatter is a hardware fault where one physical press is registered as multiple presses. It is common on dirty, worn, oxidized, or poorly debounced mechanical switches.',
  },
  {
    question: 'How does this keyboard chatter test work?',
    answer: 'Press the same suspect key slowly, one tap at a time. If the log shows repeated presses only a few milliseconds apart, the switch may be bouncing and producing double letters.',
  },
  {
    question: 'What delta means my keyboard is double typing?',
    answer: 'A repeated press below 30 ms is strongly suspicious for chatter. Repeats from 30 to 50 ms deserve attention. Normal intentional repeated taps are usually above 50 ms for most users.',
  },
  {
    question: 'Why does the first press show no delta?',
    answer: 'A delta needs a previous press of the same key. The first press establishes the baseline, and later presses show the time gap in milliseconds.',
  },
  {
    question: 'Can software fix keyboard chattering?',
    answer: 'Debounce software can hide some symptoms, but it does not repair the switch. Cleaning, reseating hot-swap switches, replacing the switch, or repairing the keyboard PCB may be needed.',
  },
];

const howToData = [
  {
    name: 'Open the tool and press keys normally',
    text: 'There is no start button. Click into the tool if needed, then press the key that has been typing twice.',
  },
  {
    name: 'Tap the suspect key once at a time',
    text: 'Press the key that double types. If one physical press creates several log rows with tiny deltas, the switch is likely chattering.',
  },
  {
    name: 'Read the color code',
    text: 'Green means normal above 50 ms, yellow means suspicious from 30 to 50 ms, and red means chatter detected below 30 ms.',
  },
  {
    name: 'Export the log if needed',
    text: 'Use the download button to save a CSV log that can help compare keys or document an intermittent fault.',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
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
      text: 'Mechanical Keyboard Double Typing Test',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This keyboard chatter test helps diagnose a mechanical keyboard that types two letters from one press, misses clean releases, or produces repeated characters without you intentionally tapping twice. Use it before cleaning switches, changing firmware debounce settings, opening a warranty claim, or replacing a hot-swap switch.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'How to read the result',
      badge: 'Delta thresholds',
      html: '<p><strong>Normal</strong> means the repeat was above 50 ms and is usually intentional. <strong>Suspicious</strong> means 30-50 ms and should be retested on the same key. <strong>Chatter detected</strong> means below 30 ms, which is very likely one physical press bouncing into multiple electrical contacts.</p>',
    },
    {
      type: 'title',
      text: 'Why Mechanical Switches Chatter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A mechanical switch does not close as a perfectly clean digital signal. The metal contacts can bounce for a few milliseconds before settling. Keyboard firmware normally filters that bounce with a debounce window. Chattering happens when the contact is dirty, worn, oxidized, loose, cracked, or poorly tuned enough that the keyboard reports extra presses after the debounce filter should have handled them.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Likely cause', 'What to try first'],
      rows: [
        ['One key types the same letter twice', 'Dirty or worn switch contact', 'Remove the keycap, blow dust out, and test again before replacing the switch.'],
        ['Several hot-swap keys chatter after a build', 'Switch pins not seated cleanly', 'Pull and reseat the switch, checking for bent pins or a loose socket.'],
        ['Only happens after spills or humidity', 'Oxidation or residue on contacts', 'Disconnect the keyboard and clean according to the manufacturer guidance.'],
        ['Many keys show tiny deltas', 'Firmware debounce too low or scan issue', 'Compare on another USB port and review firmware debounce settings if available.'],
      ],
    },
    {
      type: 'title',
      text: 'Testing Method That Reduces False Positives',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Test one suspect key at a time instead of typing full sentences.',
        'Press the key once, fully release it, and wait a moment before the next press.',
        'Compare the suspect key with a nearby key that feels healthy.',
        'Ignore the first row for a key because it has no previous press to compare against.',
        'If the same key repeatedly shows red rows below 30 ms from single taps, treat it as a hardware fault.',
        'If only yellow rows appear, repeat the test slower and check whether your tapping rhythm is causing the short interval.',
      ],
    },
    {
      type: 'title',
      text: 'Chatter vs Intentional Fast Typing',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Chatter',
          description: 'Clustered on one key, often below 30 ms, and appears when you intended one press.',
          points: ['Inspect the switch or socket.', 'Compare with a nearby healthy key.'],
        },
        {
          title: 'Fast typing',
          description: 'Affects many keys, follows your rhythm, and tends to sit above 50 ms between repeated presses of the same key.',
          points: ['Usually normal use.', 'Retest with slower single taps.'],
        },
        {
          title: 'OS key repeat',
          description: 'Appears when holding a key down and usually repeats at a regular rhythm set by your operating system.',
          points: ['Release fully between taps.', 'Check keyboard repeat settings separately.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'What to Do When a Key Fails',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Save a CSV log before changing anything so you can compare before and after results.',
        'Remove the keycap and inspect for dirt, liquid residue, or a stem that does not return smoothly.',
        'For hot-swap keyboards, reseat or replace the switch and test the same key position again.',
        'For soldered keyboards, compare firmware debounce options before assuming the PCB needs repair.',
        'Try another cable and USB port if multiple unrelated keys show impossible deltas.',
        'For warranty support, include the affected key, repeated delta values, keyboard model, firmware version, and whether the fault follows the switch or the PCB socket.',
      ],
    },
    {
      type: 'summary',
      title: 'Fast rule',
      items: [
        'A single red row is a clue, not a verdict.',
        'Repeated red rows below 30 ms on the same physical key are strong evidence of keyboard chatter.',
        'Use deliberate single taps and compare the suspect switch with a nearby healthy key before replacing hardware.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Press any key',
    statusListening: 'Measuring key deltas',
    statusChatter: 'Chatter detected',
    totalPresses: 'Total presses',
    chatterEvents: 'Chatter events',
    worstDelta: 'Worst delta',
    watchWindow: 'Rows kept',
    keyColumn: 'Key',
    deltaColumn: 'Delta',
    verdictColumn: 'Verdict',
    timeColumn: 'Time',
    normal: 'Normal',
    suspect: 'Suspicious',
    chatter: 'Chatter',
    waiting: 'Waiting',
    clear: 'Clear log',
    exportLog: 'Export CSV',
    hint: 'The log keeps the most recent 80 rows so long sessions stay fast. Held-key repeat is ignored; red rows come from separate presses that happened too close together.',
    captureNotice: 'No start button. Tap a suspect key once and watch the delta from its previous press.',
    keyboardAriaLabel: 'Recent key activity',
    logAriaLabel: 'Keyboard chatter event log',
    escapeKey: 'Esc',
    backspaceKey: 'Back',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Caps',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Space',
    csvHeader: 'key,code,delta_ms,severity,time',
  },
};
