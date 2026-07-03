import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ups-runtime-calculator';
const title = 'UPS Runtime Calculator';
const description = 'Estimate UPS battery runtime, total protected load, usable watt-hours, and recommended VA size for PCs, monitors, routers, NAS devices, and home lab hardware.';

const faqData = [
  {
    question: 'How do I calculate UPS runtime?',
    answer: 'Add the wattage of every device connected to the UPS, multiply the UPS battery watt-hours by inverter efficiency, subtract the reserve you want to keep, then divide usable watt-hours by load watts. The result in hours can be multiplied by 60 for minutes.',
  },
  {
    question: 'Why does real UPS runtime differ from the estimate?',
    answer: 'Runtime changes with battery age, temperature, discharge rate, inverter efficiency, load spikes, and manufacturer cutoff voltage. Treat the result as a planning estimate, then verify with a controlled shutdown test.',
  },
  {
    question: 'Should I size a UPS by watts or VA?',
    answer: 'Check both. Watts tell you the real power the UPS can deliver, while VA includes power factor. A UPS must exceed your load in watts and have enough VA headroom for the connected equipment.',
  },
  {
    question: 'How much UPS headroom should I keep?',
    answer: 'A practical target is to keep normal load below about 70-80% of the UPS watt rating. This leaves room for startup spikes, battery aging, and future devices.',
  },
  {
    question: 'Can I plug printers or heaters into a UPS?',
    answer: 'Avoid laser printers, heaters, and other high-surge loads unless the UPS is explicitly rated for them. They can overload the inverter and sharply reduce runtime.',
  },
];

const howToData = [
  {
    name: 'List protected devices',
    text: 'Enter the devices that must stay online during an outage, such as the computer, monitor, router, modem, NAS, and network switch.',
  },
  {
    name: 'Enter realistic wattage',
    text: 'Use measured wall power when possible. If you only have power supply ratings, reduce them to the expected operating load instead of using the maximum label value.',
  },
  {
    name: 'Set battery capacity and assumptions',
    text: 'Enter the UPS battery watt-hours, inverter efficiency, power factor, and reserve percentage you want to keep for graceful shutdown.',
  },
  {
    name: 'Read runtime and VA recommendation',
    text: 'Use the estimated minutes and recommended VA as a purchasing or configuration guide, then validate the setup with a safe outage drill.',
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

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
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
      text: 'UPS Runtime Calculator: Estimate Battery Backup Time',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A UPS runtime estimate answers two practical questions: how long your hardware can stay online during a power cut, and whether the UPS is large enough for the connected load. This calculator combines device wattage, battery watt-hours, inverter efficiency, power factor, and shutdown reserve so the result is closer to real planning than a simple battery-size division.',
    },
    {
      type: 'title',
      text: 'The Runtime Formula',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Estimated runtime in hours is <strong>usable battery Wh divided by total load W</strong>. Usable battery Wh is not the printed battery capacity: it should be adjusted for inverter losses and the reserve you want to keep for graceful shutdown. For example, a 432Wh battery at 86% efficiency with 20% reserve provides about 297Wh of usable energy.',
    },
    {
      type: 'table',
      headers: ['Input', 'Why it matters', 'Practical guidance'],
      rows: [
        ['Load watts', 'Directly controls runtime', 'Measure with a wall meter when possible, especially for gaming PCs and NAS systems.'],
        ['Battery Wh', 'Sets the energy pool', 'Use manufacturer battery data or nominal voltage multiplied by amp-hours.'],
        ['Efficiency', 'Accounts for inverter loss', '80-90% is a reasonable planning range for many consumer UPS units.'],
        ['Power factor', 'Converts watts to VA', 'Use the UPS spec if known; 0.6-0.8 is common for budget and midrange units.'],
        ['Reserve', 'Keeps shutdown margin', '10-25% is sensible for controlled PC or server shutdown.'],
      ],
    },
    {
      type: 'title',
      text: 'How Much Runtime Do You Need?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 minutes: enough to ride through short flickers or shut down a desktop safely.',
        '10-20 minutes: useful for routers, modems, NAS units, and small home lab nodes.',
        '30+ minutes: better for network continuity, remote work, and locations with frequent outages.',
        'Several hours: usually calls for a larger battery system, not just a desktop UPS.',
      ],
    },
    {
      type: 'title',
      text: 'Watts vs VA When Choosing a UPS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'UPS product names often advertise VA, but the watt rating is the harder limit for real equipment. A 900VA UPS might only support 540W, while another 900VA model may support 600W or more. Check both ratings and keep normal operation below the maximum to avoid overload alarms, shortened battery life, and failed transfers during an outage.',
    },
    {
      type: 'title',
      text: 'Loads That Distort Runtime Estimates',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Gaming PCs can swing from low idle draw to high GPU draw in seconds.',
        'Monitors vary sharply with brightness, HDR mode, and panel size.',
        'NAS devices draw extra power during disk spin-up and rebuilds.',
        'Laser printers, heaters, pumps, and compressors are poor UPS loads unless specifically supported.',
        'Old batteries can deliver far less runtime than their original capacity suggests.',
      ],
    },
    {
      type: 'title',
      text: 'Safe Validation Checklist',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Charge the UPS fully before testing.',
        'Save open work and avoid testing during critical writes or firmware updates.',
        'Unplug wall power, not the equipment, and watch UPS load percentage and battery estimate.',
        'Confirm your PC, NAS, or server receives the shutdown signal before battery is exhausted.',
        'Repeat the test every few months because lead-acid UPS batteries age quickly.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Protected load',
    addDevice: 'Add device',
    deviceName: 'Device',
    watts: 'Watts',
    remove: 'Remove device',
    batteryWh: 'Battery capacity (Wh)',
    efficiency: 'Inverter efficiency',
    powerFactor: 'Power factor',
    reserve: 'Shutdown reserve',
    totalLoad: 'Total load',
    runtime: 'Estimated runtime',
    recommendedUps: 'Recommended size',
    usableEnergy: 'Usable energy',
    minutes: 'min',
    hours: 'hr',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'UPS assumptions',
    presetDesktop: 'Desktop PC',
    presetMonitor: '27-inch monitor',
    presetRouter: 'Router and modem',
    presetNas: 'Two-bay NAS',
    percentUnit: '%',
    bandLight: 'comfortable backup window with a recommended UPS near',
    bandBalanced: 'balanced backup window with a recommended UPS near',
    bandHeavy: 'short backup window; consider a larger battery or reduce load near',
    summaryPrefix: 'This setup has a',
  },
};
