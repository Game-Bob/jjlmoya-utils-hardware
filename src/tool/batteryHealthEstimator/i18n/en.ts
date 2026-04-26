import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'lithium-battery-health-calculator';
const title = 'Lithium Battery Health Calculator';
const description =
  'Calculate the State of Health (SoH) of your lithium battery based on cycles, voltage and temperature. Scientific guide to maximize energy longevity.';

const faqData = [
  {
    question: 'What is battery chemical degradation?',
    answer:
      'With each charge and discharge cycle, lithium cells suffer micro-fractures and chemical sediment accumulation (S.E.I.) that reduce their energy storage capacity. It is an inevitable process but one that can be slowed with good habits.',
  },
  {
    question: 'Why is it recommended to charge up to 80%?',
    answer:
      'Lithium batteries suffer more stress at extreme voltages (0% and 100%). Keeping the charge between 20% and 80% can triple the cell life by reducing heat and internal pressure.',
  },
  {
    question: 'How does heat affect battery life?',
    answer:
      'Heat is the number one enemy. For every 10 degrees increase above the optimal ambient temperature (25 degrees), the rate of chemical degradation roughly doubles.',
  },
  {
    question: 'What is a full charge cycle?',
    answer:
      'A cycle is the use of 100% of the battery capacity, but it does not have to be all at once. If you use 50% today, charge it, and use 50% tomorrow, you have completed 1 full cycle.',
  },
];

const howToData = [
  {
    name: 'Identify the original capacity',
    text: 'Look on the box of your device or the manufacturer\'s website for the mAh your battery had when new.',
  },
  {
    name: 'Check current cycles',
    text: 'Many systems (like iOS or Android 14) allow you to see how many charge cycles your battery has accumulated.',
  },
  {
    name: 'Enter technical data',
    text: 'Adjust the current voltage, cycles and temperature so our calculation engine can estimate the SoH.',
  },
  {
    name: 'Analyze the diagnosis',
    text: 'Check the health percentage. If you are below 80%, you may start noticing performance drops or unexpected shutdowns.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'The chemistry of time: why lithium batteries die', level: 2 },
    {
      type: 'paragraph',
      html: 'A lithium-ion battery is not a static energy box but a dynamic chemical ecosystem in constant degradation since the moment of manufacture. Every charge and discharge cycle, every temperature variation, and every minute at extreme voltages contributes to by-products that hinder ion flow.',
    },
    { type: 'title', text: 'Main degradation mechanisms', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>SEI layer:</strong> the solid electrolyte interface grows over time, consuming active lithium and increasing internal resistance. <strong>Electrolyte oxidation:</strong> voltages above 4.1V accelerate oxidation and can swell the battery. <strong>Lithium Plating:</strong> charging at low temperatures deposits lithium in metallic form, creating dendrites that can pierce the separator.',
    },
    { type: 'title', text: 'The 100% myth: why charging overnight is a mistake', level: 3 },
    {
      type: 'paragraph',
      html: 'For a lithium ion, being at 100% charge (4.2V) is a high-stress state. Research shows cycle life doubles or triples when keeping the device between <strong>20% and 80%</strong>. Also, for every 10°C above 25°C, the rate of chemical degradation roughly doubles.',
    },
    { type: 'title', text: 'Energy survival protocol', level: 3 },
    {
      type: 'paragraph',
      html: 'Never charge a battery below 0°C: lithium deposits on the anode causing permanent damage. Fast charging generates localized heat and mechanical stress; use it only when strictly necessary. For long-term storage, keep the battery at 50% in a cool place.',
    },
  ],
  ui: {
    badge: 'Li-Ion Battery',
    title: 'Battery Health Estimator',
    description: 'Technical degradation diagnosis for Lithium-Ion cells.',
    paramsTitle: 'Cell Parameters',
    voltageLabel: 'Current Voltage',
    cyclesLabel: 'Charge Cycles',
    tempLabel: 'Temperature',
    voltageHint: 'Nominal range: 3.0V (empty) to 4.2V (full).',
    labelUsefulLife: 'Useful Life',
    yearsPrefix: 'Est.',
    yearsSuffix: 'years',
    metricThermalStress: 'Thermal Stress',
    metricVoltageStress: 'Voltage Stress',
    metricLithiumPlating: 'Lithium Plating',
    statusExcelente: 'Excellent Status',
    statusBueno: 'Good Status',
    statusRegular: 'Fair Status',
    statusCritico: 'Critical Status',
    indicatorTempNormal: 'Normal',
    indicatorTempCritical: 'Critical',
    indicatorVoltageHigh: 'High',
    indicatorVoltageLow: 'Low',
    indicatorPlatingRisk: 'High Risk',
    indicatorPlatingOk: 'No Risk',
    recTemp: 'Reduce ambient temperature or improve ventilation to avoid electrolyte oxidation.',
    recVoltageHigh: 'Avoid keeping the battery at 100% charge (4.2V) for extended periods.',
    recVoltageLow: 'Avoid deep discharges; cycles between 20% and 80% double battery life.',
    recSohLow: 'Capacity has dropped below the optimal standard. Consider a replacement if autonomy is insufficient.',
    recDefault: 'Keep your current habits -your battery is in an ideal operating range.',
  },
};
