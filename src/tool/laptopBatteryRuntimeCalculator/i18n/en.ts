import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'laptop-battery-runtime-calculator';
const title = 'Laptop Battery Runtime Calculator';
const description = 'Estimate how long your laptop can run from its current battery charge across light, balanced, and intense workloads.';

const faq = [
  {
    question: 'What does this laptop battery runtime calculator estimate?',
    answer: 'It divides the energy currently available in your battery by the wattage you enter for each workload. It is a planning estimate, not a live reading from your laptop or a manufacturer guarantee.',
  },
  {
    question: 'Where can I find my battery capacity and health?',
    answer: 'Look for the design capacity and full charge capacity in your laptop battery report or manufacturer documentation. Battery health is the current full charge capacity expressed as a percentage of the original design capacity.',
  },
  {
    question: 'Why do different workloads show different runtimes?',
    answer: 'A laptop that draws more watts uses the same stored energy faster. Video calls, gaming, external displays, high brightness, and sustained processor or graphics work can all move the real average draw above a light office estimate.',
  },
  {
    question: 'Can this tool read my laptop battery automatically?',
    answer: 'No. The tool stays client side and uses the values you provide. This keeps your data local, but it means you should replace the example values with a recent battery report or a measured average draw when accuracy matters.',
  },
];

const howTo = [
  {
    name: 'Read the battery label or report',
    text: 'Enter the original design capacity in watt hours. If your device reports milliamp hours and volts instead, convert them to watt hours before entering the value.',
  },
  {
    name: 'Describe the battery you have now',
    text: 'Set battery health to the current full charge capacity as a percentage of the original capacity, then set the charge percentage you expect to have when you leave the charger.',
  },
  {
    name: 'Set realistic workload draws',
    text: 'Choose the closest preset and edit the light, balanced, and intense watt values if you have a measured average from your laptop or a power meter.',
  },
  {
    name: 'Choose a travel decision',
    text: 'Read the three runway lines and use the shortest one for your demanding task. If it is tight or urgent, lower the workload, carry the charger, or plan a power break.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
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

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug,
  title,
  description,
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'What a laptop runtime estimate actually measures', level: 2 },
    {
      type: 'paragraph',
      html: 'A laptop battery stores energy, measured here in watt hours. Your device spends that energy at a rate measured in watts. The calculator turns those two pieces into a time estimate so you can decide whether a charge is enough for a journey, meeting, lecture, or work session.',
    },
    {
      type: 'paragraph',
      html: 'The model first estimates today\'s full charge capacity from the original capacity and battery health. It then applies the charge percentage you expect to have available. The result is the energy budget that each workload line on the runway must consume.',
    },
    { type: 'title', text: 'How to choose inputs you can trust', level: 2 },
    {
      type: 'paragraph',
      html: 'Use a battery report or the manufacturer\'s specification for capacity. Windows battery reports and battery APIs distinguish original design capacity, current full charge capacity, and remaining capacity. If you only know voltage and ampere hours, convert with <strong>Wh = V × Ah</strong> and remember that 1,000 mAh equals 1 Ah.',
    },
    {
      type: 'list',
      items: [
        'Use the current full charge capacity divided by the design capacity for battery health.',
        'Enter the charge percentage you will actually have when the session starts.',
        'Use a measured average watt draw when a long session matters more than a quick estimate.',
        'Include an external display, dock, or demanding application in the workload you model.',
      ],
    },
    { type: 'title', text: 'Read the runway as a planning range', level: 2 },
    {
      type: 'paragraph',
      html: 'The light line is useful for reading and simple documents, the balanced line represents ordinary multitasking, and the intense line is a warning that sustained high draw consumes the same charge quickly. Compare the line you expect to use with the time you need, then plan around the shortest credible result rather than the most flattering one.',
    },
    {
      type: 'table',
      headers: ['Signal', 'What it means', 'What to do'],
      rows: [
        ['Comfortable', 'Six hours or more at that draw', 'The session has a wide planning margin.'],
        ['Workable', 'Three to six hours', 'Suitable for a defined session, but keep a charger plan.'],
        ['Tight', 'One to three hours', 'Reduce draw or schedule a power break.'],
        ['Urgent', 'Less than one hour', 'Treat the workload as charger dependent.'],
      ],
    },
    { type: 'title', text: 'What the estimate cannot promise', level: 2 },
    {
      type: 'paragraph',
      html: 'Real power draw changes second by second. Brightness, wireless radios, thermals, background tasks, battery temperature, firmware limits, and the operating system reserve all move the finish time. The calculator does not access sensors, model battery chemistry, or certify that a laptop will last for a stated number of hours.',
    },
    {
      type: 'tip',
      title: 'Evidence tip',
      html: 'For a better personal estimate, record the battery percentage and elapsed time during a representative session. The average draw is approximately the energy used divided by the hours observed. Replace the preset watts with that measured value and repeat the calculation for each kind of work.',
    },
  ],
  ui: {
    batteryInputsLabel: 'Battery starting point',
    designCapacityLabel: 'Original battery capacity',
    designCapacityHint: 'The battery energy when new',
    healthLabel: 'Battery health',
    healthHint: 'Current full charge compared with new',
    chargeLabel: 'Charge at departure',
    chargeHint: 'The charge you expect to have when work starts',
    scenariosLabel: 'Workload runway',
    scenariosHint: 'Edit the average power draw for each kind of work',
    powerLabel: 'Average draw',
    wattsSuffix: 'W',
    presetsLabel: 'Start with a workload set',
    presetBalanced: 'Everyday work',
    presetTravel: 'Travel saver',
    presetCreative: 'Heavy creative',
    runwayLabel: 'Energy runway',
    runwayCaption: 'Each line shows when that workload would reach empty from the same starting charge.',
    availableEnergyLabel: 'Energy available now',
    fullCapacityLabel: 'Full charge capacity now',
    shortestScenarioLabel: 'Plan around',
    runtimeLabel: 'Estimated runtime',
    loadLabel: 'Power draw',
    healthStateExcellent: 'Battery condition excellent',
    healthStateGood: 'Battery condition good',
    healthStateAging: 'Battery condition aging',
    healthStateWorn: 'Battery condition worn',
    statusComfortable: 'Comfortable margin',
    statusWorkable: 'Workable session',
    statusTight: 'Tight margin',
    statusUrgent: 'Charger dependent',
    scenarioLight: 'Light work',
    scenarioBalanced: 'Balanced work',
    scenarioIntense: 'Intense work',
    sceneBatteryLabel: 'Starting charge',
    sceneEnergyLabel: 'Available energy',
    sceneTimeLabel: 'Runway time',
    noteLabel: 'Model boundary',
    noteText: 'This is a planning estimate from your inputs. Real draw and operating system reserves can shorten it.',
  },
};
