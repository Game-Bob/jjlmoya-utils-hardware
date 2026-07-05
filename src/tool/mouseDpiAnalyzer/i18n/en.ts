import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-dpi-analyzer';
const title = 'Mouse DPI Analyzer';
const description =
  'Measure your real mouse DPI online by moving the mouse a known physical distance and comparing the captured pointer movement in pixels.';

const faqData = [
  {
    question: 'How does an online mouse DPI tester work?',
    answer:
      'It asks you to move the mouse across a known physical distance, records the browser movement events, corrects the captured values with devicePixelRatio, and divides the resulting pixels by the distance in inches.',
  },
  {
    question: 'Why can real DPI differ from the value printed on the mouse?',
    answer:
      'Sensor tolerances, firmware steps, surface behavior, operating system scaling, pointer acceleration, and game profile settings can make measured movement differ from the nominal DPI selected in software.',
  },
  {
    question: 'Should pointer acceleration be disabled before testing?',
    answer:
      'Yes. Disable Enhance Pointer Precision on Windows and any vendor acceleration curve if you want a clean DPI measurement. Leave it enabled only when you intentionally want to see how your normal setup behaves.',
  },
  {
    question: 'What physical distance should I use?',
    answer:
      'Longer distances reduce hand error. A credit card width is convenient, but a 100 mm or 4 inch ruler pass is usually more repeatable if your desk has enough space.',
  },
];

const howToData = [
  {
    name: 'Choose a physical reference',
    text: 'Use 5 or 10 mm for very high DPI, 1 inch for conventional testing, or longer references when you have enough desk space.',
  },
  {
    name: 'Hold the capture button',
    text: 'Press and hold the glass capture target, then move the mouse physically to the right by exactly the chosen distance.',
  },
  {
    name: 'Release at the physical mark',
    text: 'Release the button when the mouse reaches the real physical mark on your desk. The tool calculates pixels per inch and reports the measured DPI.',
  },
  {
    name: 'Repeat at different speeds',
    text: 'Run slow and fast passes. If the DPI changes heavily, pointer acceleration or sensor smoothing may be influencing the result.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Mouse DPI Tester Online: Measure Real Sensor Sensitivity', level: 2 },
    {
      type: 'paragraph',
      html: 'A mouse can advertise 800, 1600, 3200, or 26000 DPI, but the value that matters in games and precision work is the movement that actually reaches the computer. This mouse DPI tester online measures that practical value by comparing a known physical movement with pointer movement captured in the browser. The result is expressed as pixels per inch, the same unit commonly used when people talk about mouse DPI or CPI.',
    },
    {
      type: 'paragraph',
      html: 'The test is intentionally local and simple: hold the capture target, move the mouse exactly to the right by the selected physical distance, and release. The tool accumulates native movement deltas instead of using a polling-rate script or a generic mouse test. Because the calculation runs in your browser, no driver download, account, or cloud upload is involved.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Important testing condition',
      html: 'For a clean DPI measurement, disable operating system pointer acceleration and vendor acceleration curves. If acceleration stays enabled, the result describes your current pointer behavior rather than the raw sensor setting.',
    },
    { type: 'title', text: 'How the Real DPI Calculation Works', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI means dots per inch. In a mouse context, users often use DPI and CPI interchangeably to describe how many counts or pointer pixels are produced when the mouse travels one physical inch. This analyzer records horizontal movement during a controlled pass, converts the selected distance to inches, then divides captured pixels by inches. For example, if the mouse reports 3200 corrected pixels across 2 inches, the measured value is approximately 1600 DPI.',
    },
    {
      type: 'list',
      items: [
        'Choose a short reference such as 10 mm for very high DPI or a longer reference for low DPI.',
        'Hold the central capture control so the browser records movement only during the pass.',
        'Move physically to the right, keeping the path as straight as possible.',
        'Release at the real physical mark and read the calculated DPI.',
        'Repeat several times and average consistent runs instead of trusting one pass.',
      ],
    },
    {
      type: 'table',
      headers: ['Captured movement', 'Physical distance', 'Measured DPI'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm credit card width', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Make the stroke clean',
      html: 'A single horizontal stroke is more important than a long distance. For very high DPI, use the 5 mm or 10 mm preset: it keeps the movement small enough to stay inside the screen while still giving the calculator a known physical reference. The progress bar is only an input-signal meter; the ruler or card on the desk is the stop point.',
    },
    { type: 'title', text: 'Why Measured DPI Can Differ From Advertised DPI', level: 3 },
    {
      type: 'paragraph',
      html: 'Advertised DPI is often a selectable firmware step, not a lab-certified value for every surface and every unit. Two mice set to the same nominal DPI can feel different if their sensors, firmware scaling, feet height, surface texture, lift-off behavior, or operating system settings differ. Small variation is normal; large variation usually means the test setup or software path is influencing the measurement.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nominal DPI',
          description: 'The value shown in mouse software or printed on the product page. Useful as a starting point, but not proof of actual motion output.',
          points: ['Easy to read', 'May hide firmware scaling', 'Can vary by profile'],
        },
        {
          title: 'Measured DPI',
          description: 'The value calculated from physical travel and captured pointer movement. Best for matching one mouse to another.',
          highlight: true,
          points: ['Practical and repeatable', 'Sensitive to hand accuracy', 'Shows real setup behavior'],
        },
        {
          title: 'In game sensitivity',
          description: 'The final camera or cursor response after the game multiplies mouse input by its own sensitivity value.',
          points: ['What you actually feel', 'Game-specific', 'Not a sensor measurement'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Browser based DPI measurement tradeoffs',
      items: [
        { pro: 'No driver installation is needed', con: 'The browser sees processed pointer movement, not the electrical sensor signal' },
        { pro: 'Good for comparing mice and profiles quickly', con: 'Acceleration settings can distort the result if left enabled' },
        { pro: 'Works with common physical references', con: 'Hand alignment and desk marks affect repeatability' },
      ],
    },
    { type: 'title', text: 'Preparing Windows, macOS, and Mouse Software', level: 3 },
    {
      type: 'paragraph',
      html: 'Before using a medidor de DPI, make the input path as boring as possible. On Windows, turn off Enhance Pointer Precision if you want raw-style behavior. In vendor software, disable angle snapping, acceleration, ripple control, smoothing, or surface-specific assists unless you deliberately want to measure them. On macOS, pointer acceleration is part of the normal cursor path, so the value should be treated as a practical system result rather than a raw sensor result.',
    },
    {
      type: 'table',
      headers: ['Setting', 'Recommended for raw DPI', 'Reason'],
      rows: [
        ['Pointer acceleration', 'Off', 'Acceleration changes movement output depending on speed'],
        ['Mouse software DPI stage', 'Fixed single stage', 'Prevents accidental profile changes during testing'],
        ['Angle snapping', 'Off', 'Can modify diagonal movement and mask natural sensor output'],
        ['Operating system scaling', 'Leave normal, tool corrects with devicePixelRatio', 'The analyzer neutralizes browser zoom and display pixel ratio in its calculation'],
        ['Game overlays or macros', 'Off', 'Extra software can intercept input and make runs inconsistent'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'Matching two mice',
      html: 'Measure the old mouse three times, note the average, then adjust the new mouse DPI stage until its measured value is close. This is often more useful than copying the number from one vendor app to another because real sensor output can differ.',
    },
    { type: 'title', text: 'Choosing the Right Physical Reference', level: 3 },
    {
      type: 'paragraph',
      html: 'The interface includes short references for high DPI and longer references for lower DPI. Use 5 or 10 mm when your pointer crosses the screen with tiny hand movement. Use 1 inch, 50 mm, or the 85.6 mm card width when the mouse is configured closer to common desktop or tactical shooter values.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'millimeters in one inch' },
        { value: '85.6', label: 'millimeters in a common credit card width' },
        { value: '3+', label: 'repeat passes recommended before trusting a profile' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'Dots per inch, commonly used to describe pointer movement produced by one inch of mouse travel.' },
        { term: 'CPI', definition: 'Counts per inch, a sensor-oriented term that is often more technically accurate for mice.' },
        { term: 'Acceleration', definition: 'A setting or curve that changes pointer output depending on movement speed.' },
        { term: 'devicePixelRatio', definition: 'The browser ratio between CSS pixels and physical display pixels, used here to normalize zoom and display scaling effects.' },
        { term: 'Angle snapping', definition: 'Firmware or software correction that straightens movement, sometimes useful for drawing but disliked by many competitive players.' },
      ],
    },
    { type: 'title', text: 'Reading the Acceleration Indicator', level: 3 },
    {
      type: 'paragraph',
      html: 'The acceleration indicator is not a laboratory proof of the operating system curve. It is a practical warning based on variation in movement speed during the captured pass. If slow and fast passes produce very different DPI values, acceleration, smoothing, surface behavior, or inconsistent hand movement may be involved. A good raw setup should produce similar measured DPI across several passes when the physical distance is the same.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'When the result jumps around',
      html: 'If one pass says 780 DPI and the next says 950 DPI with the same distance, do not immediately blame the mouse. Check acceleration settings, increase the test distance, keep the mouse path horizontal, and make sure the pointer is not hitting a screen edge during the pass.',
    },
    {
      type: 'summary',
      title: 'Reliable DPI testing checklist',
      items: [
        'Use a measured physical reference, preferably 100 mm or longer.',
        'Move horizontally to the right and stop exactly at the mark.',
        'Disable acceleration for raw-profile comparisons.',
        'Run at least three passes and compare the spread.',
        'Use measured DPI to match mice, not just advertised DPI labels.',
      ],
    },
    {
      type: 'message',
      title: 'Privacy note',
      html: 'This mouse acceleration test and DPI calculation run locally in the browser. The tool does not need driver access, device serial numbers, or uploaded input logs.',
    },
  ],
  ui: {
    badge: 'Real DPI Lab',
    referenceLabel: 'Reference',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Card',
    lineStart: 'Start',
    holdButton: 'Hold and move the selected distance',
    holdHint: 'Use a real ruler/card on the desk. Do not stop because the bar fills.',
    progressLabel: 'Input signal',
    activeHint: 'Tracking movement',
    dpiLabel: 'Measured DPI',
    pixelsLabel: 'Corrected movement',
    distanceReadout: 'Physical distance',
    ratioLabel: 'Pixel ratio',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Ready to capture',
    statusTracking: 'Tracking movement...',
    statusDone: 'Measurement complete',
    reset: 'Reset',
    accelerationTitle: 'Acceleration signal',
    accelerationHint: 'Repeat at slow and fast speeds to compare consistency.',
    accelerationLow: 'stable',
    accelerationMedium: 'variable',
    accelerationHigh: 'high drift',
    sampleCount: 'Samples',
  },
};
