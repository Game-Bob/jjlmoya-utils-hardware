import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'touch-screen-tester';
const title = 'Touch Screen Tester';
const description = 'Draw on a full-screen canvas to test touchscreen dead zones, missed taps, edge response, palm interference, and how many simultaneous multi-touch points your phone or tablet can detect.';

const faqData = [
  {
    question: 'How do I test for dead zones on a touch screen?',
    answer: 'Open the tester on the device, drag a finger slowly across the whole display, and look for blank gaps where the line stops. Repeat along the edges, keyboard area, corners, and any spot that often misses taps.',
  },
  {
    question: 'How can I run a multi touch test online?',
    answer: 'Place several fingers on the canvas at the same time. The active touch counter shows how many contacts the browser is receiving now, and the peak counter records the highest simultaneous count reached during the session.',
  },
  {
    question: 'Can this repair an unresponsive touchscreen?',
    answer: 'No. The tool does not repair hardware or recalibrate the digitizer. It helps document symptoms so you can decide whether the issue is a screen protector, dirty glass, software glitch, case pressure, or damaged touch hardware.',
  },
  {
    question: 'Why does my phone detect fewer fingers than expected?',
    answer: 'Some panels, browsers, operating systems, screen protectors, chargers, and accessibility settings limit or filter touch contacts. Try the test without a case, on battery power, after cleaning the glass, and in another browser before assuming the panel is defective.',
  },
];

const howToData = [
  { name: 'Clean the glass and remove obvious interference', text: 'Wipe the screen, dry your fingers, unplug noisy chargers, and remove thick gloves or conductive accessories before testing.' },
  { name: 'Draw slow horizontal and vertical passes', text: 'Cover the display with parallel strokes from edge to edge. A healthy panel should leave continuous lines without breaks.' },
  { name: 'Check corners and gesture zones', text: 'Trace the bezels, keyboard area, notification area, and navigation gesture zones because these regions often reveal partial digitizer failure first.' },
  { name: 'Measure simultaneous touches', text: 'Place two, three, four, five, or more fingers on the canvas and watch the peak multi-touch counter.' },
  { name: 'Use fullscreen for final confirmation', text: 'Enter fullscreen mode and repeat the test so browser chrome does not hide the top or bottom touch regions.' },
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

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Online touch screen test for dead zones and multi-touch', level: 2 },
    {
      type: 'paragraph',
      html: 'A touch panel can fail in ways that are hard to prove from normal app use. A keyboard key may miss only near the lower edge, a drawing app may skip a thin vertical strip, or games may lose a second finger only when the thumb is already pressing a control. This tester turns the entire page into a drawing surface so every gap, broken stroke, and simultaneous contact limit becomes visible immediately.',
    },
    {
      type: 'paragraph',
      html: 'Use it for searches such as <strong>touch screen tester</strong>, <strong>multi touch test online</strong>, <strong>test pantalla tactil</strong>, and <strong>comprobar zonas muertas pantalla</strong>. The canvas records finger movement locally in the browser; it does not upload drawings, touch positions, device identifiers, or diagnostic results.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 installs', label: 'Runs directly in the browser' },
        { value: 'Live', label: 'Active touch counter' },
        { value: 'Canvas', label: 'Visual dead-zone map' },
      ],
    },
    { type: 'title', text: 'How to identify touchscreen dead zones', level: 3 },
    {
      type: 'paragraph',
      html: 'A dead zone is an area where the digitizer does not report contact reliably. It may be a complete blank strip, a corner that ignores taps, or a small patch that works only with heavy pressure. Draw slow, overlapping lines across the screen. If the line consistently disappears in the same place, that area deserves more testing.',
    },
    {
      type: 'list',
      items: [
        'Start with horizontal strokes from the left edge to the right edge, leaving only a small gap between passes.',
        'Repeat with vertical strokes from the top edge to the bottom edge to reveal narrow columns that horizontal testing can miss.',
        'Trace the exact border of the display because edge electrodes and gesture zones are common failure points.',
        'Draw circles around suspicious areas to see whether the break follows the same physical location.',
        'Rotate the device and test again to distinguish an app layout issue from a hardware location issue.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'A repeated blank line is more meaningful than one skipped stroke',
      html: '<p>One short gap can happen if a finger is dry, moving too fast, or leaving the glass. A hardware dead zone usually appears repeatedly in the same physical area, across different stroke directions, and after cleaning the display.</p>',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Likely meaning', 'What to try next'],
      rows: [
        ['Line breaks in the same vertical strip', 'Possible digitizer column failure or screen protector bubble.', 'Remove the protector if possible, clean the glass, and retest in fullscreen.'],
        ['Edges miss taps but center works', 'Case pressure, gesture rejection, or edge electrode problem.', 'Remove the case and repeat slow border traces.'],
        ['Only fast movement skips', 'Browser event throttling, low frame rate, or finger contact lifting.', 'Move slowly and compare with another browser.'],
        ['Random speckles appear without touching', 'Ghost touch, moisture, charger noise, or damaged panel.', 'Dry the screen, unplug charger, reboot, and repeat.'],
      ],
    },
    { type: 'title', text: 'How to measure multi-touch support', level: 3 },
    {
      type: 'paragraph',
      html: 'Multi-touch support is the maximum number of independent contacts the device can report at the same time. A phone may track five, ten, or more contacts, while some low-cost tablets, kiosks, gloves, remote desktop layers, or embedded browsers may report fewer. The active counter shows the number currently detected; the peak counter stores the highest count reached since the last clear.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Two-touch gestures', description: 'Needed for pinch zoom, two-finger rotation, maps, image editors, and accessibility zoom.' },
        { title: 'Three to five touches', description: 'Useful for rhythm games, split controls, drawing apps, piano keyboards, and tablet creative workflows.' },
        { title: 'Ten-touch panels', description: 'Common on modern phones and tablets, but browser or operating system filtering can still reduce the count.' },
      ],
    },
    {
      type: 'tip',
      title: 'Best way to avoid a false low count',
      html: 'Place fingers one by one and keep them still for a second. If you drop all fingers at once, some operating systems interpret the gesture as palm input, zoom intent, or system navigation and may suppress part of the contact set.',
    },
    {
      type: 'proscons',
      title: 'Online tester versus a native diagnostic app',
      items: [
        { pro: 'Runs instantly without installing anything or granting broad device permissions.', con: 'It can only show the touch events exposed by the browser and operating system.' },
        { pro: 'Easy to share with a repair shop or buyer because the drawing pattern is visible.', con: 'It cannot read factory calibration tables or low-level digitizer error codes.' },
        { pro: 'Fullscreen mode covers more of the usable display than a normal page.', con: 'System bars, notches, and protected gesture regions may still reserve some pixels.' },
      ],
    },
    { type: 'title', text: 'Common causes of missed touches', level: 3 },
    {
      type: 'paragraph',
      html: 'A bad touch result does not always mean the screen is broken. Capacitive panels rely on a stable electrical field through glass, adhesive, protector, skin, and device ground. Anything that changes that field can cause gaps, false touches, or weak multi-touch tracking. That is why testing under several conditions matters.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Digitizer', definition: 'The transparent sensor layer that reports touch coordinates to the device.' },
        { term: 'Dead zone', definition: 'A physical screen area where touches are not detected or are detected only intermittently.' },
        { term: 'Ghost touch', definition: 'A touch event reported by the device when no finger is intentionally touching that spot.' },
        { term: 'Palm rejection', definition: 'Software filtering that ignores broad or accidental contact, especially on tablets and stylus devices.' },
        { term: 'Touch sampling rate', definition: 'How often the device scans the touch layer. Higher rates can make drawing and games feel more responsive.' },
      ],
    },
    {
      type: 'table',
      headers: ['Cause', 'Typical clue', 'Quick check'],
      rows: [
        ['Screen protector', 'Dead area follows a bubble, crack, dust edge, or thick glass border.', 'Remove or lift the protector only if it is safe and replaceable.'],
        ['Moisture or oil', 'Random jumps, sliding touches, or missed taps after rain, sweat, or cleaning spray.', 'Dry the glass and hands completely, then retest.'],
        ['Charger noise', 'Ghost touches happen while plugged in and vanish on battery.', 'Unplug the charger or use a certified adapter and cable.'],
        ['Case pressure', 'Touches fail near corners or curved edges.', 'Remove the case and test the same border again.'],
        ['Hardware damage', 'The same strip fails after cleaning, rebooting, and protector removal.', 'Document the result and contact repair support.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'Pressure is not the same as touch accuracy',
      html: 'Most phone and tablet touchscreens are capacitive, so pressing harder should not be required. If a location works only when you press firmly, the problem may be weak contact through a protector, panel damage, flex cable trouble, or software filtering rather than normal touchscreen behavior.',
    },
    { type: 'title', text: 'Testing edges, corners, and keyboard zones', level: 3 },
    {
      type: 'paragraph',
      html: 'Many real complaints start in areas that get heavy use: the keyboard bottom row, backspace, navigation gestures, notification shade, quick settings, game thumb zones, and tablet corners used for drawing shortcuts. Use fullscreen mode before judging top and bottom areas, because browser controls can otherwise hide part of the screen.',
    },
    {
      type: 'list',
      items: [
        'Trace a rectangle one finger-width inside the display border.',
        'Draw short vertical strokes over the keyboard rows where missed letters happen.',
        'Hold one thumb in a game-control position and draw with another finger to test contact conflict.',
        'Test near the charging port while unplugged, then plugged in, to check for grounding noise.',
        'If a stylus is involved, test finger input separately from stylus input because they may use different sensing paths.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'When fullscreen changes the result',
      html: '<p>If the screen works in fullscreen but not in the normal browser view, the hardware is probably not the only factor. Address bars, pull-to-refresh, system navigation, and browser gesture handling can intercept touches near the top or bottom of the viewport.</p>',
    },
    { type: 'title', text: 'How to document a repair or warranty issue', level: 3 },
    {
      type: 'paragraph',
      html: 'For warranty support, consistency matters more than a dramatic single failure. Clear the canvas, draw a simple grid, and take a photo or screen recording when the same physical area refuses to draw. Include whether the phone was charging, whether a protector was installed, and whether the issue appears after a reboot.',
    },
    {
      type: 'summary',
      title: 'Useful evidence to capture',
      items: [
        'A clean full-screen canvas showing repeated gaps in the same location.',
        'The peak multi-touch count reached with several fingers placed carefully.',
        'A comparison with and without the case, protector, charger, or gloves.',
        'The device model, browser, operating system version, and whether the issue happens in apps too.',
      ],
    },
    {
      type: 'message',
      title: 'Privacy note',
      html: 'The drawing and counters are generated client-side. The tester is designed for immediate diagnosis, not account-based logging, remote repair, or uploading sensitive screen interaction patterns.',
    },
    { type: 'title', text: 'Result interpretation checklist', level: 3 },
    {
      type: 'table',
      headers: ['Result', 'Interpretation', 'Confidence'],
      rows: [
        ['Continuous strokes everywhere', 'The touch layer is probably healthy under current conditions.', 'High for basic finger input.'],
        ['One repeatable blank strip', 'Possible physical digitizer damage or protector obstruction.', 'High if repeated after cleaning and rebooting.'],
        ['Low multi-touch peak only in one browser', 'Browser, privacy, webview, or gesture handling limitation.', 'Medium. Test another browser.'],
        ['Ghost touches while charging', 'Electrical noise, grounding issue, or faulty charger.', 'Medium to high if unplugging fixes it.'],
        ['Failure only with screen protector', 'Protector thickness, adhesive gap, crack, or border lift.', 'High if removal fixes the area.'],
      ],
    },
    {
      type: 'summary',
      title: 'Fast diagnosis path',
      items: [
        'Draw a full grid slowly.',
        'Circle any gap that repeats.',
        'Clear the canvas and repeat in fullscreen.',
        'Remove case or protector variables when practical.',
        'Measure the highest simultaneous touch count.',
        'Compare with another browser or app before declaring hardware failure.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Active touches',
    peakTouchesLabel: 'Peak multi-touch',
    coverageLabel: 'Canvas coverage',
    statusReady: 'Draw anywhere to reveal dead zones',
    statusDrawing: 'Touch input detected',
    statusCleared: 'Canvas cleared',
    clearButton: 'Clear canvas',
    fullscreenButton: 'Fullscreen',
    exitFullscreenButton: 'Exit fullscreen',
    canvasLabel: 'Touch screen test drawing canvas',
    unsupportedTouch: 'Touch events are not available in this browser',
  },
};
