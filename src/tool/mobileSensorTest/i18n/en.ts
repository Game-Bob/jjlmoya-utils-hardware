import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobile-sensor-test';
const title = 'Mobile Sensor Test';
const description = 'Run an online gyroscope, accelerometer, motion sensor, and bubble level test on your phone to check tilt, rotation, drift, and sensor calibration problems.';

const faqData = [
  {
    question: 'How can I test my phone gyroscope online?',
    answer: 'Open the test on the phone, tap Start Calibration, allow motion access if prompted, then rotate and tilt the device. A working gyroscope and orientation sensor should update alpha, beta, and gamma smoothly without freezing or jumping wildly.',
  },
  {
    question: 'Can I test the accelerometer with a bubble level?',
    answer: 'Yes. Put the phone on a flat table after starting the test. The bubble should settle near the center and the acceleration values should remain stable. If the bubble drifts badly while the phone is still, the accelerometer may need calibration or the case, table, or device hardware may be interfering.',
  },
  {
    question: 'Why does iPhone ask for motion permission?',
    answer: 'Safari on iPhone and iPad requires a tap before websites can access motion and orientation sensors. If permission is denied, the test cannot read gyroscope or accelerometer data until you allow motion access.',
  },
  {
    question: 'Can this fix or calibrate a broken compass?',
    answer: 'No browser tool can repair hardware or force system compass calibration. This test helps you identify symptoms: stuck readings, noisy motion, drift, missing permission, or a browser that does not expose the sensors.',
  },
];

const howToData = [
  { name: 'Open the test on your phone', text: 'Use the same iPhone, iPad, Android phone, or tablet you want to diagnose. Desktop browsers usually have no motion sensors to expose.' },
  { name: 'Allow motion access', text: 'Tap Start Calibration and accept the motion or orientation permission prompt if your browser shows one.' },
  { name: 'Test tilt and rotation', text: 'Pitch the phone forward, roll it left and right, then rotate it flat on a table. Watch for smooth alpha, beta, gamma, and acceleration changes.' },
  { name: 'Check for drift on a flat surface', text: 'Leave the phone still for several seconds. A healthy sensor should settle instead of constantly wandering, spiking, or freezing.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Online gyroscope and accelerometer test for phones', level: 2 },
    {
      type: 'paragraph',
      html: 'Use this mobile sensor test when screen rotation feels wrong, games or AR apps drift, a bubble level app looks inaccurate, navigation points the wrong way, or the phone does not react correctly to tilt. The test shows live gyroscope, accelerometer, rotation, and level behavior so you can separate a browser permission problem from a real sensor or calibration issue.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Main search intent', value: 'test gyroscope online' },
        { label: 'Also checks', value: 'accelerometer drift' },
        { label: 'Best device', value: 'phone or tablet' },
      ],
    },
    { type: 'title', text: 'What each sensor reading tells you', level: 3 },
    {
      type: 'table',
      headers: ['Reading', 'Useful for', 'Warning signs'],
      rows: [
        ['Alpha', 'Checking rotation around the vertical axis, useful for compass-like movement and heading changes.', 'Does not change when rotating the phone flat, jumps by large amounts, or freezes at zero.'],
        ['Beta', 'Checking front-to-back tilt for screen rotation, games, camera leveling, and AR controls.', 'Moves in the wrong direction, sticks near one value, or keeps drifting while the phone is still.'],
        ['Gamma', 'Checking left-to-right roll for landscape rotation, racing games, level apps, and stabilizers.', 'One side responds differently, values are noisy, or the bubble never recenters on a flat table.'],
        ['Acceleration X/Y/Z', 'Checking accelerometer response, shake detection, gravity direction, and movement stability.', 'Large spikes while stationary, no response to movement, or unstable readings after removing the case.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Symptoms this test helps diagnose',
      html: '<p>Use the live values to investigate auto-rotate not working, a gyroscope that feels delayed, accelerometer drift, compass calibration warnings, AR tracking that slides away, camera level errors, motion controls that pull to one side, or a phone that only reports motion in native apps but not in the browser.</p>',
    },
    { type: 'title', text: 'Gyroscope vs accelerometer vs compass', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Gyroscope', description: 'Measures rotation rate. It matters for AR, games, camera stabilization, motion controls, and smooth orientation changes.' },
        { title: 'Accelerometer', description: 'Measures acceleration and gravity direction. It powers tilt, shake detection, step detection, and digital bubble level behavior.' },
        { title: 'Compass / magnetometer', description: 'Helps estimate heading, but can be disturbed by magnets, metal objects, car mounts, cases, speakers, laptops, and nearby electronics.' },
      ],
    },
    { type: 'title', text: 'How to test sensor calibration properly', level: 3 },
    {
      type: 'list',
      items: [
        'Remove magnetic cases, MagSafe wallets, metal mounts, controller clips, and accessories before testing.',
        'Place the phone on a firm flat table and wait several seconds before judging drift.',
        'Rotate the phone slowly through each axis instead of shaking it immediately.',
        'Compare Safari or Chrome with a native sensor or compass app if the browser shows no data.',
        'Restart the device and repeat the test if readings are frozen across multiple apps.',
      ],
    },
    {
      type: 'tip',
      title: 'iPhone and Android permission note',
      html: 'On iPhone and iPad, Safari may ask for motion and orientation permission after a tap. On Android, Chrome usually exposes motion sensors more directly, but privacy settings, browser flags, battery saving modes, and embedded webviews can still block or reduce sensor data.',
    },
    {
      type: 'table',
      headers: ['Problem', 'Likely cause', 'Next step'],
      rows: [
        ['No values change', 'Permission denied, unsupported browser, desktop device, or restricted webview.', 'Open on the phone itself, use Safari or Chrome, allow motion access, and reload the page.'],
        ['Bubble drifts on a table', 'Calibration issue, uneven surface, case interference, or accelerometer noise.', 'Remove the case, use a known flat surface, reboot, and compare with a native level app.'],
        ['Compass direction is wrong', 'Magnetic interference or system compass calibration.', 'Move away from metal/electronics and use the operating system compass calibration flow.'],
        ['Values jump or spike', 'Sensor noise, damaged hardware, aggressive browser throttling, or sudden physical movement.', 'Test while stationary, close heavy apps, and compare across another browser or native app.'],
      ],
    },
    {
      type: 'summary',
      title: 'What this test is good for',
      items: [
        'Testing a phone gyroscope online without installing an app.',
        'Checking accelerometer drift with a live bubble level.',
        'Finding whether motion controls fail because of hardware, calibration, permission, or browser support.',
        'Preparing a phone for AR, games, camera leveling, navigation, or screen rotation troubleshooting.',
      ],
    },
  ],
  ui: {
    startButton: 'Start Calibration',
    permissionHint: 'Tap once to unlock motion sensors',
    privacyBadge: 'Local sensor data',
    privacyCopy: 'Orientation and motion readings stay inside this browser session.',
    orientationPanel: 'Orientation',
    motionPanel: 'Motion',
    bubblePanel: 'Digital bubble level',
    statusReady: 'Ready for sensor permission',
    statusWaiting: 'Waiting for browser permission',
    statusDenied: 'Sensor access was denied or unavailable',
    statusUnsupported: 'Motion sensors are not exposed by this browser',
    statusActive: 'Live sensor stream active',
    steadyLabel: 'Steady',
    movingLabel: 'Moving',
    shakingLabel: 'Shaking',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Level offset',
    motionMagnitudeLabel: 'Motion magnitude',
    cubeLabel: '3D device orientation cube',
    bubbleLabel: 'Bubble level indicator',
    calibrationLabel: 'Live degrees',
  },
};
