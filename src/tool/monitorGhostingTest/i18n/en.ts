import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-ghosting-test';
const title = 'Monitor Ghosting Test';
const description =
  'Test monitor ghosting, motion blur, overdrive trails, and pixel response behavior with moving bars, text, and fullscreen motion patterns.';

const faqData = [
  {
    question: 'What is monitor ghosting?',
    answer:
      'Monitor ghosting is a visible trail that follows moving objects when pixels cannot transition quickly enough. It is common on slow LCD panels, poorly tuned overdrive modes, and displays running below their optimal refresh rate.',
  },
  {
    question: 'Can this test measure exact response time?',
    answer:
      'A browser test cannot replace lab equipment such as a pursuit camera or photodiode, but it can reveal visible motion artifacts, compare monitor settings, and help you choose the least blurry overdrive mode.',
  },
  {
    question: 'Why does overdrive sometimes create bright trails?',
    answer:
      'Overdrive pushes pixels harder to make transitions faster. If it overshoots the target shade, you may see inverse ghosting: a bright or colored halo behind moving objects.',
  },
  {
    question: 'Should I test on dark or light backgrounds?',
    answer:
      'Both. Some panels smear dark-to-gray transitions more than light-to-dark transitions, so changing the background reveals artifacts that a single pattern can hide.',
  },
];

const howToData = [
  {
    name: 'Set the motion speed',
    text: 'Start near the default speed, then increase it until trails become easy to inspect without losing track of the object.',
  },
  {
    name: 'Change the trail strength',
    text: 'Use the trail control to make persistence easier to see while comparing monitor settings.',
  },
  {
    name: 'Test multiple backgrounds',
    text: 'Switch between dark, light, and grid backgrounds to reveal black smearing, inverse ghosting, and overdrive halos.',
  },
  {
    name: 'Compare overdrive settings',
    text: 'Open your monitor OSD and test Off, Normal, Fast, and Extreme modes. Choose the mode with the clearest motion and least halo.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
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
      text: 'Monitor Ghosting Test: Check Motion Blur and Pixel Response',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Monitor ghosting appears when moving objects leave a visible trail behind them. It can make games feel smeared, make scrolling text harder to read, and make a high-refresh-rate monitor look worse than expected. This monitor ghosting test gives you moving bars, text, and high-contrast patterns so you can compare overdrive modes, refresh rates, backgrounds, and motion speeds without installing software.',
    },
    {
      type: 'paragraph',
      html: 'The test is designed for practical inspection. It does not claim laboratory-grade gray-to-gray response times, but it helps answer the question most users actually have: <strong>which monitor setting looks cleanest to my eyes on this display?</strong>',
    },
    {
      type: 'title',
      text: 'What Ghosting Looks Like',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'A dark shadow following the moving object, often called black smearing',
        'A pale or colored halo behind the object, often caused by excessive overdrive',
        'A long translucent trail that makes edges look soft',
        'Multiple faint copies of the object, especially on displays with slow pixel response',
        'Uneven clarity between dark, light, and grid backgrounds',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Motion Blur, and Inverse Ghosting',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artifact', 'What You See', 'Common Cause'],
      rows: [
        ['Ghosting', 'A darker or faded copy follows the object', 'Pixel response is too slow for the motion speed'],
        ['Motion blur', 'The whole moving object looks soft', 'Sample-and-hold blur, low refresh rate, or eye tracking blur'],
        ['Inverse ghosting', 'Bright halo or colored overshoot trails', 'Overdrive setting is too aggressive'],
        ['Black smearing', 'Dark scenes leave heavy shadows', 'VA panel dark transitions are slow'],
        ['Stutter', 'Motion jumps instead of flowing', 'Frame pacing, low FPS, or browser/system load'],
      ],
    },
    {
      type: 'title',
      text: 'A Practical Diagnostic Workflow',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Start with your monitor set to its native resolution and highest stable refresh rate. If you own a 144Hz, 165Hz, 240Hz, or 360Hz monitor, confirm the operating system is actually using that mode before judging motion clarity. Open the test in fullscreen, choose the clarity bars target, and watch the rear edge of the moving object. The rear edge is where ghost trails, dark smearing, and bright overdrive halos are easiest to compare.',
    },
    {
      type: 'list',
      items: [
        'Use dark background to reveal black smearing and slow dark transitions',
        'Use light background to reveal colored overdrive halos',
        'Use grid background to inspect edge clarity against high-contrast reference lines',
        'Use the text target when your real problem is blurry scrolling or hard-to-read motion',
        'Use fullscreen before judging a monitor, because browser chrome and scaling can distract from motion artifacts',
        'Increase speed only after you can follow the object comfortably',
        'Compare one monitor setting at a time so you know what changed',
      ],
    },
    {
      type: 'title',
      text: 'Choosing the Best Overdrive Setting for Your Monitor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Most gaming monitors include an overdrive setting called Off, Normal, Fast, Faster, Extreme, Response Time, or Trace Free. The fastest option is not always best. A moderate setting often gives the best balance: less blur than Off, but fewer halos than Extreme.',
    },
    {
      type: 'table',
      headers: ['Overdrive Mode', 'Expected Result', 'Recommendation'],
      rows: [
        ['Off', 'Least overshoot, but more blur', 'Useful baseline for comparison'],
        ['Normal', 'Moderate blur reduction', 'Often best for daily use'],
        ['Fast', 'Sharper motion with some risk of halo', 'Good if trails remain clean'],
        ['Extreme', 'Lowest response time claim, highest overshoot risk', 'Avoid if bright inverse trails appear'],
        ['Adaptive/Variable', 'Behavior changes with refresh rate', 'Retest at the FPS range you actually use'],
      ],
    },
    {
      type: 'title',
      text: 'What to Change When the Test Looks Bad',
      level: 3,
    },
    {
      type: 'table',
      headers: ['What You See', 'Likely Cause', 'What to Try'],
      rows: [
        ['Long dark trail behind the target', 'Slow dark pixel transitions or weak overdrive', 'Try a stronger overdrive mode, retest on dark and grid backgrounds'],
        ['Bright halo or colored outline behind the target', 'Overdrive overshoot or inverse ghosting', 'Lower overdrive one step and compare at your real refresh rate'],
        ['Motion looks jumpy instead of blurry', 'Frame pacing, browser load, or refresh-rate mismatch', 'Close heavy apps, enable fullscreen, confirm OS refresh rate'],
        ['Text becomes unreadable while moving', 'Sample-and-hold blur, low refresh rate, or slow response', 'Increase refresh rate, test text pattern, compare overdrive modes'],
        ['Artifacts change when FPS changes', 'VRR or adaptive overdrive behavior', 'Retest at the FPS range you actually play or work in'],
      ],
    },
    {
      type: 'title',
      text: 'Why Refresh Rate Matters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Higher refresh rates reduce the time each frame remains visible, which can make motion look clearer. However, refresh rate alone does not eliminate ghosting. A 240Hz monitor with slow pixel transitions can still smear, while a well-tuned 144Hz panel may look cleaner than a badly tuned faster panel.',
    },
    {
      type: 'table',
      headers: ['Refresh Rate', 'Frame Time', 'What to Expect'],
      rows: [
        ['60Hz', '16.7 ms', 'Easy to see sample-and-hold blur and slower motion'],
        ['120Hz', '8.3 ms', 'Much smoother, but pixel response still matters'],
        ['144Hz', '6.9 ms', 'Common gaming baseline for motion clarity'],
        ['240Hz', '4.2 ms', 'Very smooth if response tuning is good'],
        ['360Hz', '2.8 ms', 'Demanding: poor overdrive tuning becomes obvious'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Gaming, and Real-World Testing',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Variable refresh rate can change how a monitor behaves because some displays use different overdrive tuning at different refresh rates. If your problem appears only in games, do not test only at the desktop maximum refresh rate. Test again at the FPS range where you actually play, especially around 60 FPS, 90 FPS, 120 FPS, and any capped frame rate you use.',
    },
    {
      type: 'list',
      items: [
        'If ghosting is worse at low FPS, the monitor may have weak variable-overdrive tuning',
        'If halos appear only at high refresh rates, the overdrive mode may be too aggressive',
        'If motion stutters while the trail stays short, the issue is probably frame pacing rather than pixel response',
        'If fullscreen looks different from windowed mode, check browser scaling, operating-system scaling, and compositor behavior',
      ],
    },
    {
      type: 'title',
      text: 'Troubleshooting Bad Results',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Confirm your display cable supports the target refresh rate',
        'Disable motion smoothing, black frame insertion, or MPRT modes while comparing normal overdrive',
        'Retest after switching the monitor to its native resolution',
        'Use fullscreen or reduce browser zoom if motion appears inconsistent',
        'Close heavy background apps if the animation stutters',
        'Test the same pattern after changing GPU control panel refresh-rate settings',
        'Try another cable or port if the monitor cannot reach its advertised refresh rate',
        'Retest with VRR on and off when ghosting changes between desktop and games',
      ],
    },
    {
      type: 'title',
      text: 'Limits of an Online Ghosting Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A browser-based ghosting test depends on browser animation timing, GPU load, operating system composition, and your display configuration. It is excellent for visual comparison, but exact response-time measurements require specialized equipment such as pursuit cameras, photodiodes, or oscilloscope-based methods. Use this test to choose settings and spot obvious artifacts, not to certify manufacturer response-time claims.',
    },
  ],
  ui: {
    badge: 'Motion Clarity',
    speedLabel: 'Motion speed',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Trail strength',
    backgroundLabel: 'Background',
    backgroundDark: 'Dark',
    backgroundLight: 'Light',
    backgroundGrid: 'Grid',
    patternLabel: 'Test target',
    patternBars: 'Clarity bars',
    patternText: 'Text block',
    patternUfo: 'UFO',
    pursuitLabel: 'Pursuit guide',
    pursuitOn: 'On',
    pursuitOff: 'Off',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit fullscreen',
    pause: 'Pause',
    resume: 'Resume',
    targetText: 'MOTION',
    estimatedBlur: 'estimated blur',
    frameStep: 'Frame step',
    persistence: 'Persistence',
    sampleCount: 'Trail samples',
    instructions: 'Watch the rear edge of the moving target while changing speed, trail strength, background, fullscreen mode, and monitor overdrive settings.',
    reset: 'Reset',
  },
};
