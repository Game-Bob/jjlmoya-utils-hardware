import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'phone-charge-time-calculator';
const title = 'Phone Charge Time Calculator';
const description = 'Estimate how long your phone needs to reach a target battery percentage from its capacity, current charge, charger power, and charging efficiency.';

const faqData = [
  {
    question: 'Can I calculate charging time from the battery percentage alone?',
    answer: 'No. The same percentage represents different amounts of energy on a small phone and a large phone. This calculator also needs the battery capacity, the charger power that can reach the phone, and an efficiency estimate.',
  },
  {
    question: 'Why does my phone sometimes take longer than the estimate?',
    answer: 'The phone may reduce power because the battery is already high, the device is warm, the cable or charging protocol is limiting it, or the phone is being used while charging. The calculator is a planning estimate, not a live measurement of your current charging session.',
  },
  {
    question: 'Should I enter the charger rating or the phone charging rate?',
    answer: 'Use the power that is likely to reach the phone when you know it. If you only know the charger rating, enter that as an upper estimate and expect the real time to be longer when the phone, cable, or charging standard accepts less.',
  },
];

const howToData = [
  {
    name: 'Enter battery capacity',
    text: 'Find the phone battery capacity in its technical specifications and enter the value in mAh. Do not substitute a power bank capacity: its voltage and conversion losses describe a different charging path.',
  },
  {
    name: 'Set the charge range',
    text: 'Enter the battery percentage you have now and the percentage you need later. A short top-up from 20% to 50% will produce a different answer from a full charge, and the target must be higher than the current level.',
  },
  {
    name: 'Add charger power and efficiency',
    text: 'Enter the charger output in watts, or the phone charging rate when it is available. Leave the efficiency near its default unless you have a measured value, because wall power is not transferred to the battery without losses.',
  },
  {
    name: 'Compare the scenarios',
    text: 'Use the result and the 5 W, 15 W, and 30 W reference bars to decide whether your charger gives you enough time. Treat the comparison as a guide: the phone still controls the power it accepts.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = {
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
      text: 'Phone Charge Time Calculator For A Realistic Top-Up',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Use this phone charge time calculator when you need to know whether your battery will reach a useful level before you leave, commute, travel, or start a long call. Enter the capacity printed in your phone specifications, the charge percentage you have now, the target percentage you want, and the charger power in watts. The result estimates the minutes and energy still needed for that top-up, so you can compare the time available with a slower or faster charger.',
    },
    {
      type: 'title',
      text: 'What To Enter For A Useful Estimate',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Battery capacity: use the phone battery specification in mAh, not the capacity printed on a power bank.',
        'Current and target charge: model the top-up you actually need; a target above the current percentage is required.',
        'Power and efficiency: use the phone charging rate when known. Otherwise, the charger wattage is an upper estimate because the phone may accept less.',
      ],
    },
    {
      type: 'title',
      text: 'How To Read The Result',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The main figure is the estimated time from your current percentage to your target. Energy still needed expresses the same top-up in watt hours, while the reference bars show how the estimate changes at 5 W, 15 W, and 30 W. If the available time is shorter than the estimate, lower the target or use a charger and cable that the phone can actually use at a higher rate. The phone, not the wall charger, sets the final charging power.',
    },
    {
      type: 'title',
      text: 'Why Charging Slows Near 100%',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A phone usually does not charge at one constant wattage from empty to full. As the battery approaches a high state of charge, its charging control can reduce current to manage heat and battery stress. That is why a 20% to 80% estimate is often more useful for planning than treating the final few percentage points as if they were linear. Targets above 70% include a small taper allowance, but real devices can taper earlier or more sharply.',
    },
    {
      type: 'title',
      text: 'Estimate Only: What The Calculator Cannot Detect',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'It cannot read your phone model, battery health, charger protocol, cable, temperature, active use, or live charging power.',
        'It does not diagnose a worn battery or certify fast-charging compatibility. For a precise answer, time the same phone, cable, charger, temperature, and charge range in the situation you care about.',
      ],
    },
  ],
  ui: {
    capacityLabel: 'Battery capacity',
    capacityUnit: 'mAh',
    capacityHint: 'Use the phone specification.',
    currentLabel: 'Current charge',
    targetLabel: 'Target charge',
    percentUnit: '%',
    powerLabel: 'Charger power',
    powerUnit: 'W',
    efficiencyLabel: 'Estimated efficiency',
    efficiencyUnit: '%',
    efficiencyHint: 'Includes conversion and heat losses.',
    statusEmpty: 'Enter your phone and charger details.',
    statusReady: 'Updates as you type.',
    statusError: 'Check the highlighted value.',
    resultTitle: 'Estimated time to target',
    energyLabel: 'Energy still needed',
    energyUnit: 'Wh',
    fromCurrentCharge: 'from the current charge',
    startNowLabel: 'Starting now reaches',
    scenarioTitle: 'Reference charger scenarios',
    scenarioAt: 'same phone and charge range',
    assumptionsTitle: 'Assumptions',
    assumptionsText: 'Uses a {voltage} V nominal battery voltage, {efficiency}% efficiency, and about {taper} extra taper allowance above 70%. Your phone may charge differently.',
    errorCapacity: 'Enter a battery capacity above zero.',
    errorCurrent: 'Use a current charge from 0 to 100%.',
    errorTarget: 'Use a target charge from 1 to 100%.',
    errorTargetOrder: 'The target must be higher than the current charge.',
    errorPower: 'Enter charger power above zero.',
    errorEfficiency: 'Use an efficiency between 50% and 100%.',
    targetMarker: 'target',
    chargeProgressLabel: 'Charge range',
    hourUnit: 'h',
    minuteUnit: 'min',
  },
};
