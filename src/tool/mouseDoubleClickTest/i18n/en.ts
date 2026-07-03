import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-double-click-test';
const title = 'Mouse Double Click Test';
const description =
  'Test every mouse button and detect unwanted double-clicks, worn switches, and contact bounce with per-button timing in your browser.';

const faqData = [
  {
    question: 'What is a mouse double-click problem?',
    answer:
      'A double-click problem happens when one physical press is reported as two clicks. It can affect the left button, right button, wheel click, or side buttons, and is usually caused by switch wear, contact bounce, firmware debounce settings, or wireless signal instability.',
  },
  {
    question: 'What gap counts as suspicious?',
    answer:
      'Very short gaps between clicks are suspicious because human double-clicks usually take more time. This tool starts at an 80 ms threshold, but you can adjust it depending on the mouse and your testing style.',
  },
  {
    question: 'Can a browser prove the switch is broken?',
    answer:
      'A browser cannot inspect the electrical switch directly, but it can record the click events your operating system receives. Repeated suspicious gaps during single-click testing are strong evidence of bounce or unwanted double-clicking.',
  },
  {
    question: 'How should I test correctly?',
    answer:
      'Click slowly and deliberately, aiming for single presses. If the suspicious counter rises even when you are not intentionally double-clicking, repeat the test on another USB port, another browser, and another computer if possible.',
  },
];

const howToData = [
  {
    name: 'Set the detection threshold',
    text: 'Start with 80 ms. Lower it for strict switch-bounce detection or raise it if your device produces slightly wider accidental gaps.',
  },
  {
    name: 'Click like a normal single-click',
    text: 'Press each mouse button one click at a time over the mouse visual. Do not intentionally double-click during the first pass.',
  },
  {
    name: 'Watch the suspicious counter',
    text: 'If suspicious events appear while you are making single clicks, check which visual button was highlighted and compare it with the compact event chips.',
  },
  {
    name: 'Compare with another device',
    text: 'A healthy mouse should keep a high score under the same threshold. Comparing devices helps separate hardware faults from software settings.',
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

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
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
      text: 'Mouse Double Click Test: Diagnose Button Bounce Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A mouse that double-clicks when you press once is not just annoying. It can open folders by accident, cancel drag-and-drop actions, fire two shots in a game, close browser tabs, or make right-click menus appear and disappear before you can use them. This online mouse double click test focuses on the useful diagnostic signal: <strong>the time gap between button events reported by your operating system</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Unlike a basic click counter, this tool tracks every button independently: left click, right click, wheel click, browser back, and browser forward. That matters because a mouse can have a failing right button while the left button is still healthy, or a worn side button that only misfires after months of gaming or productivity shortcuts.',
    },
    {
      type: 'title',
      text: 'What This Mouse Button Test Measures',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When you press a mouse button, the browser receives a pointer event containing the button code. The tool stores the last timestamp for that same physical button and compares it with the next press of the same button. If the gap is shorter than your selected threshold, the event is marked as suspicious because a normal intentional second click usually takes longer.',
    },
    {
      type: 'list',
      items: [
        'Left button: useful for detecting accidental double-clicks when opening files, selecting text, or dragging windows',
        'Right button: useful when context menus flicker, open twice, or close immediately',
        'Wheel button: useful for mice where middle-click opens multiple tabs or fails after heavy browsing',
        'Back and Forward buttons: useful for gaming mice and productivity mice with side switches',
        'Per-button timing: avoids mixing a left click with a right click and calling it a false double-click',
      ],
    },
    {
      type: 'title',
      text: 'Why Mice Start Double-Clicking',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Most mice use small mechanical switches under each button. When the switch contacts close, the metal can bounce electrically for a very short period before settling. The mouse firmware normally filters that noise with debounce logic. As the switch wears out, the bounce can become longer, noisier, or inconsistent, so the computer receives two button presses even though your finger made one physical press.',
    },
    {
      type: 'paragraph',
      html: 'Double-clicking is not always caused by the same thing. It may be mechanical switch wear, firmware debounce set too aggressively, dust or oxidation inside the switch, wireless packet instability, macro software, a damaged cable, or an operating system setting that makes accidental double-clicks easier to notice.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Likely Cause', 'What to Test'],
      rows: [
        ['One click opens files as if double-clicked', 'Left switch bounce or OS double-click speed confusion', 'Test Left with slow single presses at 80 ms'],
        ['Right-click menu flashes or closes', 'Right switch bounce or software intercepting context menus', 'Test Right and disable mouse utilities temporarily'],
        ['Middle-click opens two tabs', 'Wheel switch wear', 'Test Wheel with deliberate single presses'],
        ['Back button jumps two pages', 'Side switch bounce or browser shortcut repeat', 'Test Back and Forward separately'],
        ['Only happens wirelessly', 'Wireless interference, low battery, or receiver placement', 'Retest wired or move receiver closer'],
      ],
    },
    {
      type: 'title',
      text: 'Choosing the Right Debounce Threshold',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The threshold is the maximum gap that this tool still considers suspicious. The default value, <strong>80 ms</strong>, is a practical middle ground: strict enough to catch many unwanted duplicate events, but not so aggressive that every normal deliberate double-click becomes a hardware failure.',
    },
    {
      type: 'table',
      headers: ['Threshold', 'Best For', 'How to Interpret It'],
      rows: [
        ['30-50 ms', 'Strict electrical bounce checks', 'Good for confirming very fast duplicate events from a worn switch'],
        ['60-90 ms', 'General mouse double-click diagnosis', 'Best default range for most gaming and office mice'],
        ['100-140 ms', 'Intermittent worn switches', 'Useful when the mouse sometimes creates wider accidental gaps'],
        ['150-180 ms', 'Stress testing and weak switches', 'Use carefully, because fast intentional double-clicks can fall into this range'],
      ],
    },
    {
      type: 'title',
      text: 'How to Run a Reliable Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For the first pass, do not intentionally double-click. Press each mouse button slowly and deliberately, one button at a time, while the cursor is over the mouse visual. A healthy switch should produce stable single events. If the suspicious counter increases during slow single presses, repeat the same button test several times to confirm the pattern.',
    },
    {
      type: 'list',
      items: [
        'Test Left for 20 to 30 slow presses, then Right, then Wheel, then side buttons',
        'Do not drag the mouse while testing button bounce, because movement can distract from the timing result',
        'If a button shows suspicious events, repeat the same test after changing USB port or browser',
        'For wireless mice, test with a fresh battery and the receiver close to the mouse',
        'If only one button fails repeatedly, the fault is probably that specific switch rather than the whole device',
      ],
    },
    {
      type: 'title',
      text: 'Interpreting the Results',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Result', 'Meaning', 'Recommended Next Step'],
      rows: [
        ['0 suspicious events after many presses', 'The tested buttons look healthy under the selected threshold', 'Keep the default threshold or test again later if symptoms return'],
        ['1 isolated suspicious event', 'Could be a real bounce or an accidental fast press', 'Repeat the same button slowly before drawing conclusions'],
        ['Repeated suspicious events on one button', 'Strong sign of switch bounce or worn contacts', 'Test on another computer and document the result'],
        ['Suspicious events on every button', 'Could be software, driver, macro utility, or browser environment', 'Disable mouse software and retest'],
        ['Only wireless mode fails', 'Likely battery, receiver placement, or interference', 'Try wired mode or move the receiver closer'],
      ],
    },
    {
      type: 'paragraph',
      html: 'The health score is a quick summary, not a final verdict. The most important evidence is <strong>which button</strong> produced suspicious events and whether the pattern repeats when you press that same button slowly. A single bad event during a rushed test is less meaningful than five suspicious right-click events during deliberate single presses.',
    },
    {
      type: 'title',
      text: 'Before You Replace the Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Check whether your mouse software has a debounce-time setting and test again after changing it',
        'Disable macros, rapid-fire profiles, or button remapping utilities during diagnosis',
        'Try a different USB port, especially if you use a hub or front-panel connector',
        'For wireless mice, test with the dongle on an extension cable near the mouse pad',
        'Compare with another mouse on the same computer to separate hardware failure from software behavior',
      ],
    },
    {
      type: 'title',
      text: 'Repair, Warranty, and Evidence',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If the fault is mechanical, cleaning the outside shell rarely fixes it permanently because the problem is inside the switch contacts. Some users replace the microswitch, but that requires soldering and is not worth it for every mouse. If the mouse is under warranty, repeated suspicious gaps on the same button are useful evidence when explaining the issue to support.',
    },
    {
      type: 'paragraph',
      html: 'For warranty claims, record a short screen capture while you press the failing button slowly. Make sure the event chips show the button label and the suspicious timing. This is clearer than saying "my mouse double-clicks sometimes" because it demonstrates the actual button and the approximate timing of the unwanted duplicate event.',
    },
    {
      type: 'title',
      text: 'Limitations of a Browser-Based Mouse Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This test measures the events that reach the browser. It cannot directly inspect the electrical waveform inside the switch, and it cannot bypass every driver, operating system, or vendor utility. That is still useful: if the browser receives duplicate events, your normal applications can receive them too. For engineering-level validation, hardware tools such as oscilloscopes or switch testers provide deeper evidence, but they are not necessary for most user diagnostics.',
    },
  ],
  ui: {
    badge: 'Switch Bounce Lab',
    clickTarget: 'Button Matrix',
    clickTargetHint: 'Press left, right, wheel, back, and forward',
    totalClicks: 'Total',
    suspiciousClicks: 'Suspicious',
    fastestGap: 'Fastest gap',
    healthScore: 'Health score',
    thresholdLabel: 'Detection threshold',
    thresholdUnit: 'ms',
    cleanEvent: 'clean',
    suspiciousEvent: 'suspect',
    reset: 'Reset',
    statusIdle: 'Press each mouse button to test it independently',
    statusClean: 'No suspicious button bounce detected',
    statusWarning: 'Suspicious bounce detected on a mouse button',
    lastGap: 'Last event',
    logTitle: 'Recent button events',
    emptyLog: 'Press any mouse button over the mouse body.',
    leftButton: 'Left',
    middleButton: 'Wheel',
    rightButton: 'Right',
    backButton: 'Back',
    forwardButton: 'Forward',
    otherButton: 'Other',
  },
};
