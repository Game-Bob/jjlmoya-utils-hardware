import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-jitter-angle-snapping-test';
const title = 'Mouse Jitter and Angle Snapping Test';
const description =
  'Draw raw mouse traces online to spot sensor jitter, shaky tracking, and angle snapping or prediction that makes movement artificially straight.';

const faqData = [
  {
    question: 'What is mouse jitter?',
    answer:
      'Mouse jitter is unwanted shaking or noisy movement in the cursor path even when your hand is moving smoothly. It can come from a dirty sensor window, a bad surface, high lift-off behavior, electrical noise, wireless instability, or a sensor that struggles at the selected DPI.',
  },
  {
    question: 'What is angle snapping?',
    answer:
      'Angle snapping, sometimes called prediction, is a correction feature where the mouse firmware tries to turn slightly imperfect human movement into straighter horizontal, vertical, or diagonal lines. Some office users like it, but many gamers and artists prefer raw movement without prediction.',
  },
  {
    question: 'Can this test prove my mouse sensor is bad?',
    answer:
      'It cannot inspect the sensor electrically, but it shows the movement path your browser receives. If repeated smooth passes create noisy dots, sudden deviations, or unnaturally straight segments, the result is useful evidence for troubleshooting the mouse, surface, DPI, wireless connection, or firmware settings.',
  },
  {
    question: 'How should I draw for the most reliable result?',
    answer:
      'Draw slow diagonal lines, medium-speed curves, and long horizontal passes. Test the same movement several times. Jitter is easier to see in slow controlled lines, while angle snapping is easier to spot when diagonal movement becomes suspiciously straight or stair-stepped.',
  },
];

const howToData = [
  {
    name: 'Clean the sensor and mouse pad',
    text: 'Before testing, remove dust or hair from the sensor window and use a stable mouse pad or desk surface.',
  },
  {
    name: 'Draw slow diagonal lines',
    text: 'Hold the primary mouse button and draw several diagonal strokes. A raw sensor should show natural hand variation, not a line forced perfectly onto one angle.',
  },
  {
    name: 'Draw smooth curves',
    text: 'Make circles, S-curves, and arcs. Jitter appears as rough noisy points that jump away from the intended curve.',
  },
  {
    name: 'Compare DPI and surface settings',
    text: 'Repeat the same motion at different DPI levels, polling rates, lift-off settings, and surfaces to find when the problem appears.',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
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
      text: 'Mouse Jitter Test Online: Check Sensor Noise and Angle Snapping',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A good mouse sensor should follow your hand without adding visible noise or secretly correcting the path. When the sensor is dirty, the surface is difficult to track, the DPI is too high for the hardware, or the firmware applies prediction, the cursor path can stop feeling natural. This mouse jitter test lets you draw raw traces and inspect the individual reading points so sensor problems become visible instead of vague.',
    },
    {
      type: 'paragraph',
      html: 'The most useful way to test is simple: draw controlled lines and curves, then look at the shape of the trace. A healthy raw sensor produces a path that follows your movement with small human imperfections. A noisy sensor produces rough dots, tiny spikes, and uneven wobble. A mouse with angle snapping or prediction can make diagonal or horizontal movement look unnaturally straight, as if the firmware is correcting your hand.',
    },
    {
      type: 'title',
      text: 'What Mouse Jitter Looks Like',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mouse jitter is not the same as normal hand shake. Everyone draws slightly imperfect lines. Jitter becomes suspicious when the dots jump away from the direction of travel even though your hand is moving slowly and steadily. It often appears as a fuzzy edge around a line, small sideways spikes, or a trace that looks scratchy instead of smooth.',
    },
    {
      type: 'table',
      headers: ['Trace Pattern', 'Likely Meaning', 'What to Try Next'],
      rows: [
        ['Small random spikes during slow lines', 'Sensor noise, dirt, or surface tracking problem', 'Clean the sensor window and try a different mouse pad'],
        ['Jitter only at high DPI', 'Sensor or firmware struggling with that sensitivity', 'Retest at 400, 800, 1600, and 3200 DPI'],
        ['Rough movement only when wireless', 'Battery, receiver distance, or interference', 'Move the receiver closer and test with a fresh battery'],
        ['Noise near lift-off or while tilting the mouse', 'Lift-off distance or uneven contact with the surface', 'Keep the mouse flat and lower lift-off distance if available'],
        ['Jitter on one desk but not another', 'Surface texture or reflectivity problem', 'Use a matte mouse pad designed for optical sensors'],
      ],
    },
    {
      type: 'title',
      text: 'What Angle Snapping Looks Like',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Angle snapping is different from jitter. Instead of adding noise, it removes natural variation. If you draw a diagonal line by hand, a raw sensor should preserve tiny human deviations. With angle snapping enabled, the line may lock into a perfectly straight horizontal, vertical, or diagonal direction. This can make desktop drawing easier, but it is usually unwanted for competitive aim, pixel art, photo editing, and any task where the cursor should match the hand exactly.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Raw sensor behavior',
          description: 'The trace follows your hand, including small natural curves and corrections. Diagonal lines are not mathematically perfect unless your movement was perfect.',
        },
        {
          title: 'Angle snapping behavior',
          description: 'The trace looks suspiciously straight for long sections, especially near common angles such as horizontal, vertical, or 45 degrees.',
        },
        {
          title: 'Jitter behavior',
          description: 'The trace becomes noisy, fuzzy, or spiky. Instead of being too straight, it looks unstable and rough.',
        },
      ],
    },
    {
      type: 'title',
      text: 'How to Test Your Mouse Properly',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Start with a clean sensor window and a known-good mouse pad',
        'Draw slow diagonal lines from corner to corner and repeat the same movement several times',
        'Draw circles and S-curves to reveal jitter that may not appear in straight lines',
        'Test at multiple DPI levels because some sensors become noisier at very high sensitivity',
        'Disable vendor software features such as angle snapping, prediction, surface tuning, or acceleration when possible',
        'Compare wired and wireless modes if your mouse supports both',
        'Compare with another mouse on the same surface to separate mouse failure from surface problems',
      ],
    },
    {
      type: 'title',
      text: 'Interpreting the Scores',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The tool shows a jitter score, an angle snapping score, straightness, average deviation, and the number of samples captured. These values are best used comparatively. Draw the same line with the same hand movement after changing one variable: DPI, surface, wireless receiver placement, or mouse firmware setting. If a score drops after changing the surface or cleaning the sensor, you have found a likely cause.',
    },
    {
      type: 'table',
      headers: ['Result', 'What It Suggests', 'Practical Action'],
      rows: [
        ['Low jitter and low snapping', 'The sensor path looks natural and stable', 'Keep current settings and use this as your baseline'],
        ['High jitter, low snapping', 'The mouse is tracking but the path is noisy', 'Clean sensor, change surface, lower DPI, and retest'],
        ['Low jitter, high snapping', 'The path may be firmware-corrected', 'Look for prediction or angle snapping settings in mouse software'],
        ['High jitter and high snapping', 'The trace is unstable and may also be over-corrected', 'Reset mouse software profiles and retest from default settings'],
        ['Scores change strongly by surface', 'The sensor dislikes one surface texture or reflectivity', 'Use the surface with the cleanest trace'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, Polling Rate, and Mouse Jitter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'High DPI does not automatically mean better tracking. Some mice perform cleanly at moderate DPI but expose more visible noise at very high DPI because tiny sensor errors are amplified into larger cursor movement. Polling rate can also change the feel of the trace. A higher polling rate gives more frequent updates, but it cannot fix a dirty sensor, a bad surface, or firmware prediction.',
    },
    {
      type: 'paragraph',
      html: 'For a fair comparison, keep your hand movement similar and change one setting at a time. For example, draw the same diagonal line at 800 DPI, 1600 DPI, and 3200 DPI. If the path becomes fuzzy only at the highest value, the best solution may be lowering DPI and adjusting in-game sensitivity instead of replacing the mouse.',
    },
    {
      type: 'title',
      text: 'Common Causes of Mouse Sensor Jitter',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Dust, hair, or oil near the optical sensor window',
        'Glossy, reflective, transparent, or uneven surfaces',
        'Very high DPI settings that amplify small sensor errors',
        'Low battery or wireless interference',
        'Receiver placed far from the mouse or behind a metal PC case',
        'Firmware filters, surface calibration, or vendor software profiles',
        'Lift-off distance problems when the mouse is tilted or moved quickly',
        'A worn or damaged sensor lens after heavy use',
      ],
    },
    {
      type: 'title',
      text: 'Why Gamers and Designers Care',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In games, jitter can make micro-adjustments harder because the crosshair does not settle exactly where the hand intended. Angle snapping can be just as problematic: it may help draw straight desktop lines, but it can also distort small aiming corrections and make diagonal tracking feel filtered. For designers, illustrators, CAD users, and photo editors, sensor correction can make freehand motion feel less honest and harder to control.',
    },
    {
      type: 'paragraph',
      html: 'A mouse does not need a perfect trace to be good. Human movement is naturally imperfect. The warning signs are repeatable: the same surface always creates noisy dots, the same DPI always creates spikes, or the same mouse always makes diagonals suspiciously straight while another mouse does not.',
    },
    {
      type: 'title',
      text: 'Before Buying a New Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Clean the sensor window carefully with the mouse powered off',
        'Try a different mouse pad, preferably a matte cloth or hybrid gaming surface',
        'Lower DPI and compensate with software sensitivity',
        'Disable angle snapping, prediction, pointer precision, and acceleration options',
        'Move the wireless receiver closer using a USB extension cable',
        'Update or reset the mouse firmware profile if the vendor software supports it',
        'Test another mouse on the same computer and surface for comparison',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'The useful diagnostic rule',
      html: '<p>A single odd trace is not enough. A repeatable pattern is what matters. If jitter or angle snapping appears again and again under the same settings, then disappears when you clean the sensor, change surface, lower DPI, or disable prediction, you have found the most likely cause.</p>',
    },
  ],
  ui: {
    badge: 'Raw Sensor Trace',
    canvasLabel: 'Mouse jitter and angle snapping drawing area',
    canvasHint: 'Draw slow diagonals, circles, and curves. Individual sensor points stay visible so rough tracking is easy to spot.',
    pointerPrompt: 'Hold and draw inside the drawing area',
    samples: 'Samples',
    jitterScore: 'Jitter',
    snappingScore: 'Snapping',
    straightness: 'Straightness',
    rawDeviation: 'Avg deviation',
    statusIdle: 'Draw inside the field to capture raw mouse movement',
    statusHealthy: 'Trace looks natural and stable in the recent samples',
    statusJitter: 'Noisy movement detected in the recent trace',
    statusSnapping: 'Suspiciously straight movement detected',
    statusMixed: 'Jitter and possible angle snapping both appear in the trace',
    reset: 'Reset',
    holdShift: 'Tip: test one change at a time. DPI, surface, wireless mode, and prediction settings can all change the trace.',
    sensitivity: 'Detection sensitivity',
    low: 'stable',
    high: 'strict',
    traceLog: 'Trace events',
    emptyLog: 'Draw a few controlled strokes to start the event log.',
    jitterEvent: 'jitter',
    snappingEvent: 'angle snapping',
    combinedEvent: 'jitter and angle snapping',
    cleanEvent: 'clean trace',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
