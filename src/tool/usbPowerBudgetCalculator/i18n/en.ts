import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'usb-power-budget-calculator';
const title = 'USB Power Budget Calculator';
const description = 'Check whether a USB port, charger, hub, cable, or USB-C PD profile can safely power your devices after headroom and cable voltage drop.';

const faqData = [
  {
    question: 'How do I know if a USB port can power my device?',
    answer: 'Compare the total device wattage with the USB source wattage, then reserve headroom and estimate cable voltage drop. A setup can fail even when nominal watts look high if the cable is long, thin, or carrying high current at 5 volts.',
  },
  {
    question: 'Why does cable length matter for USB power?',
    answer: 'Current flowing through copper creates voltage drop. Long cables and thin conductors have more resistance, so the device may receive less voltage than the charger provides. This is especially important for Raspberry Pi boards, hard drives, LED strips, docks, and bus-powered hubs.',
  },
  {
    question: 'What headroom should I use?',
    answer: 'Use at least 20 percent for normal electronics, 30 percent for motors, drives, radios, or boards with burst loads, and more if the adapter quality is unknown or the device must run continuously.',
  },
  {
    question: 'Can this replace USB-C PD negotiation testing?',
    answer: 'No. The calculator checks the electrical budget. It does not verify whether a charger, cable e-marker, device, or hub actually negotiates a specific Power Delivery profile.',
  },
];

const howToData = [
  { name: 'Choose a source profile', text: 'Select a common USB or USB-C PD profile, or edit voltage and current manually.' },
  { name: 'Describe the cable', text: 'Enter cable length and conductor gauge. Thin high-number AWG wires cause more voltage drop.' },
  { name: 'Add the load', text: 'Enter one device load in watts and the number of devices sharing the same source.' },
  { name: 'Read the status', text: 'Use the status, cable drop, end voltage, utilization, and headroom to decide whether the setup is safe.' },
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

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'USB power is a budget, not a label', level: 2 },
    {
      type: 'paragraph',
      html: 'A USB charger marked 15 W, 45 W, or 100 W describes what the source can offer under the right conditions. Your device only sees the result after protocol negotiation, current limits, cable resistance, connector quality, hub losses, and load spikes. This calculator focuses on the practical electrical question: after cable drop and reserve margin, is there enough power left for the hardware you want to run?',
    },
    {
      type: 'stats',
      items: [
        { label: 'USB 2.0 default current', value: '0.5 A' },
        { label: 'USB-C default maximum at 5 V', value: '3 A' },
        { label: 'Recommended reserve', value: '20%+' },
      ],
    },
    { type: 'title', text: 'How to interpret the result', level: 3 },
    {
      type: 'table',
      headers: ['Status', 'Meaning', 'Best next step'],
      rows: [
        ['Safe', 'The load fits inside the source rating after the selected reserve, and the estimated device voltage remains healthy.', 'Use the setup, but keep an eye on heat if the adapter is small or enclosed.'],
        ['Tight', 'The load is close to the reserved limit or the cable drop is becoming meaningful.', 'Shorten the cable, choose thicker conductors, reduce the load, or move to a higher power profile.'],
        ['Over budget', 'The load exceeds the usable source power or the device-end voltage is likely too low.', 'Use a stronger charger, powered hub, shorter cable, or a device that negotiates a higher USB-C PD voltage.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'When watts are enough but the device still resets',
      html: '<p>Startup current can be much higher than the average wattage printed on a device label. A 5 V supply loses voltage faster than a 20 V PD profile for the same wattage because it must carry more current. Many low-cost cables use thin power conductors even when the outer jacket looks substantial, and bus-powered hubs share one upstream budget across every downstream device.</p>',
    },
    { type: 'title', text: 'Cable voltage drop in plain terms', level: 3 },
    {
      type: 'paragraph',
      html: 'Voltage drop is the loss created when current flows through cable resistance. USB power has two conductors in the power path, so the calculator uses round-trip length. A one-meter cable is electrically two meters of copper for the power loop. Lower AWG numbers are thicker and usually better for high current loads.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Short thick cable', description: 'Best for Raspberry Pi boards, SSD enclosures, development kits, and USB-C docks that draw burst current.' },
        { title: 'Long thin cable', description: 'Acceptable for low power sensors or charging slowly, but risky for drives, LED loads, and compute boards.' },
        { title: 'Higher voltage PD', description: 'Reduces current for the same wattage, which lowers cable loss, but only if the source, cable, and device negotiate it.' },
      ],
    },
    {
      type: 'tip',
      title: 'Practical rule',
      html: 'If the calculator says the setup is tight, treat it as a field warning. USB failures often appear as random disconnects, brownouts, slow charging, noisy audio, or storage errors before they look like a clear power problem.',
    },
    {
      type: 'summary',
      title: 'What this calculator is best for',
      items: [
        'Planning USB hubs, single-board computers, external drives, development boards, lights, fans, and small lab setups.',
        'Comparing USB 2.0, USB 3.x, USB-C, and USB Power Delivery source profiles.',
        'Estimating whether a cable is too long or too thin for a load.',
        'Choosing a sensible reserve before buying a charger or powered hub.',
      ],
    },
  ],
  ui: {
    profileLabel: 'USB source profile',
    metricUnits: 'Metric',
    imperialUnits: 'US',
    voltageLabel: 'Source voltage (V)',
    currentLabel: 'Source current (A)',
    cableLengthLabel: 'Cable length',
    wireGaugeLabel: 'Power wire gauge',
    deviceLoadLabel: 'Load per device (W)',
    devicesLabel: 'Devices',
    headroomLabel: 'Reserve headroom (%)',
    sourcePower: 'Source power',
    requiredPower: 'Required power',
    cableDrop: 'Cable drop',
    deviceVoltage: 'Device voltage',
    headroom: 'Headroom',
    utilization: 'Utilization',
    safeStatus: 'Power budget looks safe',
    tightStatus: 'Power budget is tight',
    overStatus: 'Over budget or voltage drop risk',
    safeAdvice: 'The load fits with the selected reserve. Use a quality cable and check heat during long runs.',
    tightAdvice: 'You are close to the limit. Reduce cable length, use thicker conductors, lower the load, or select a stronger profile.',
    overAdvice: 'This setup is likely to brown out or throttle. Use a powered hub, stronger adapter, or a higher voltage USB-C PD profile.',
    busLane: 'USB source',
    loadLane: 'Device load',
    cableLane: 'drop',
    boardEyebrow: 'Live USB power path',
    sourceSocket: 'Supply socket',
    deviceSocket: 'Hardware load',
    energyFlow: 'energy flow',
    reservedLabel: 'usable after reserve',
  },
};
