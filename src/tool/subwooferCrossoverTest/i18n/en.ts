import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'subwoofer-crossover-test';
const title = 'Subwoofer Crossover Test';
const description =
  'Run a 200 Hz to 10 Hz sine sweep in your browser to find where your subwoofer fades, drops out, or hands off to your main speakers.';

const faqData = [
  {
    question: 'What does a subwoofer crossover test measure?',
    answer:
      'It helps you hear the point where bass stops sounding continuous between your main speakers and subwoofer. A gap, sudden level change, or missing range can point to an incorrect crossover frequency, phase issue, room cancellation, or subwoofer limit.',
  },
  {
    question: 'Why does this test sweep from 200 Hz down to 10 Hz?',
    answer:
      'Most home theater crossovers sit between 60 Hz and 120 Hz, while many compact speakers start losing output above or below that range. Sweeping down from 200 Hz makes the speaker-to-subwoofer handoff easy to hear before the tone reaches deep sub-bass.',
  },
  {
    question: 'Can this online subwoofer bass test damage speakers?',
    answer:
      'Yes, very low frequencies at high volume can overdrive small speakers or stress a subwoofer. Start quietly, avoid boosted bass modes, and stop immediately if you hear rattling, knocking, or mechanical distress.',
  },
  {
    question: 'Is the marked dropout frequency the exact crossover setting I should use?',
    answer:
      'No. Treat it as a listening clue, not a lab measurement. The best crossover setting also depends on speaker specifications, room placement, phase, distance correction, and calibration target.',
  },
];

const howToData = [
  {
    name: 'Set a safe listening level',
    text: 'Lower your system volume first. The sweep uses a generated sine wave, so the bass can become intense even when the browser volume looks modest.',
  },
  {
    name: 'Start the 200 Hz to 10 Hz sweep',
    text: 'Press Start sweep and listen from your normal seat. The tone moves steadily through the bass range where subwoofers, main speakers, and room acoustics overlap.',
  },
  {
    name: 'Listen for the dropout or handoff',
    text: 'Pay attention to the moment where bass becomes weaker, disappears, changes location, or sounds uneven between the subwoofer and main speakers.',
  },
  {
    name: 'Mark the frequency',
    text: 'Press Mark dropout at the first clear problem point. Use that frequency as a clue for adjusting crossover, phase, placement, or room correction.',
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
  step: howToData.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<SubwooferCrossoverTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Find The Bass Gap Between Your Speakers And Subwoofer', level: 2 },
    {
      type: 'paragraph',
      html: 'A subwoofer should not sound like a separate box in the corner. Bass should stay even as notes move from your main speakers into the sub. This test sweeps from <strong>200 Hz down to 10 Hz</strong> so you can hear the exact zone where the handoff becomes weak, boomy, localizable, or silent.',
    },
    {
      type: 'table',
      headers: ['What you hear', 'What it usually means', 'What to try first'],
      rows: [
        ['Bass vanishes around 70-100 Hz', 'Subwoofer and speakers may be cancelling each other near the crossover.', 'Flip phase, adjust distance/delay, then repeat the sweep.'],
        ['Bass gets boomy around one narrow band', 'Room mode or too much overlap between speakers and subwoofer.', 'Lower crossover slightly or move the subwoofer/listening position.'],
        ['Bass seems to come from the subwoofer location', 'Crossover may be too high or subwoofer level may be too hot.', 'Try 80 Hz or lower and reduce subwoofer gain.'],
        ['Deep bass fades below 30-40 Hz', 'Normal extension limit for many subs, especially compact models.', 'Check the subwoofer specification before chasing a problem that may be physical.'],
      ],
    },
    { type: 'title', text: 'What The Dropout Frequency Tells You', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Use the marked frequency as a tuning clue',
      badge: 'Listening clues',
      html: '<p>If the marked point is close to your AVR crossover, the problem is probably integration: phase, distance, polarity, level, or the slope of the filters. If the marked point is much lower, you may be hearing the subwoofer running out of output. If the problem changes a lot when you move your head, the room is dominating the result.</p>',
    },
    {
      type: 'title',
      text: 'Common Crossover Ranges',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Speaker type', 'Typical crossover starting point', 'Why'],
      rows: [
        ['Small satellites', '100-150 Hz', 'Tiny cabinets usually cannot play clean upper bass at theater levels.'],
        ['Bookshelf speakers', '70-100 Hz', 'Often enough bass for a clean handoff without making the sub easy to locate.'],
        ['Floorstanding speakers', '50-80 Hz', 'Larger woofers can handle more mid-bass, but the room may still prefer subwoofer bass management.'],
        ['THX-style setup', '80 Hz', 'A practical default that works well for many systems and keeps deep bass routed to the sub.'],
      ],
    },
    { type: 'title', text: 'Crossover Problem Or Room Problem?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Crossover or phase issue',
          description: 'The weak spot appears near the crossover frequency and improves after changing phase, polarity, distance, or crossover setting.',
          points: ['Usually repeatable from the same seat.', 'Often centered around 60-120 Hz.'],
        },
        {
          title: 'Room cancellation',
          description: 'The weak spot changes dramatically when you move your head, change seats, or move the subwoofer a short distance.',
          points: ['Very position dependent.', 'Often solved by placement more than settings.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Best way to run the test',
      html: 'Sit where you actually watch movies or listen to music. Do not stand next to the subwoofer. A crossover that sounds good beside the cabinet can still leave a hole at the sofa.',
    },
    {
      type: 'summary',
      title: 'What to change after the sweep',
      items: [
        'If the hole is near the current crossover, try 10 Hz changes and repeat the sweep.',
        'Try the subwoofer phase switch or delay setting if the weak band sits near the crossover.',
        'If the bass gets stronger in one seat and disappears in another, move the subwoofer before changing every AVR setting.',
        'After placement or crossover changes, rerun room correction so the receiver measures the new setup.',
        'Use the marked frequency to guide tuning, then confirm with music, movies, and familiar bass lines.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Subwoofer low-frequency sweep',
    currentFrequency: 'Current frequency',
    targetFrequency: 'Target',
    elapsed: 'Elapsed',
    statusReady: 'Ready for low sweep',
    statusRunning: 'Sweeping down',
    statusStopped: 'Sweep stopped',
    start: 'Start sweep',
    stop: 'Stop sweep',
    markDropout: 'Mark dropout',
    reset: 'Reset',
    volume: 'Output level',
    duration: 'Sweep duration',
    safeStart: 'Start at low volume, then mark the first frequency where bass becomes hard to hear.',
    roomNote: 'Room position and phase can change the result dramatically.',
    dropoutLabel: 'Marked point',
    dropoutEmpty: 'Not marked yet',
    crossoverEstimate: 'Estimated dropout point',
  },
};
