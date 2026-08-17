import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PsuPowerRequirementUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'psu-power-requirement-calculator';
const title = 'PSU Power Requirement Calculator';
const description = 'Estimate PC power supply requirements from component wattage, transient margin, growth headroom, and the power supply already installed.';

const faqData = [
  {
    question: 'How do I calculate the PSU wattage needed for a PC?',
    answer: 'Add the expected wattage of the processor, graphics card, motherboard, storage, fans, and peripherals. Then apply a transient margin and a growth margin before rounding up to a practical power supply size.',
  },
  {
    question: 'Should I use TDP or measured power?',
    answer: 'Use measured or manufacturer stated board power when available. TDP is a planning input, not a guarantee of the maximum power drawn by every workload, so the result should include margin and be checked against the component specifications.',
  },
  {
    question: 'What does the transient margin represent?',
    answer: 'The transient margin represents short power excursions and uncertainty around the sustained component estimates. It helps prevent a build from being sized exactly at its normal load.',
  },
  {
    question: 'Why can a larger PSU be a poor choice?',
    answer: 'A very large unit can cost more and may operate away from its preferred efficiency range. Choose enough sustained wattage and headroom for the build, then verify connector, form factor, rail, and platform requirements.',
  },
  {
    question: 'What is the difference between minimum PSU and recommended PSU?',
    answer: 'Minimum PSU covers the calculated component load plus the transient margin. Recommended PSU also includes growth headroom, so it gives the build more room for upgrades, uncertainty, and changes in workload.',
  },
  {
    question: 'How do GPU power spikes affect PSU sizing?',
    answer: 'A graphics card can briefly draw more than its sustained board power. Use a transient margin, check the graphics card manufacturer guidance, and verify that the PSU has the required connectors and transient response for the platform.',
  },
  {
    question: 'Is a PSU wattage calculator enough to choose a power supply?',
    answer: 'No. Wattage is only one part of the decision. Confirm the PSU form factor, connectors, platform compatibility, protections, efficiency certification, warranty, and independent quality reviews before buying.',
  },
];

const howToData = [
  {
    name: 'Enter component wattage',
    text: 'Add realistic power values for the processor, graphics card, motherboard, storage, fans, and peripherals.',
  },
  {
    name: 'Set the installed PSU',
    text: 'Enter the wattage printed on the power supply you already have, or enter zero when planning a new build.',
  },
  {
    name: 'Adjust planning margins',
    text: 'Use the transient margin for short excursions and growth margin for upgrades, extra drives, or additional cards.',
  },
  {
    name: 'Read the recommendation',
    text: 'Compare the minimum and recommended PSU values with your current unit and use the status badge as a planning signal.',
  },
  {
    name: 'Check the hardware match',
    text: 'Confirm the PSU form factor, connector layout, graphics card requirements, and manufacturer guidance before treating the recommendation as a shopping choice.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<PsuPowerRequirementUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'PSU Power Requirement Calculator for PC Builds', level: 2 },
    { type: 'paragraph', html: 'Estimate the power supply wattage your PC build needs from the expected load of each component. This calculator separates base load, transient margin, upgrade headroom, minimum PSU size, and recommended PSU size so you can compare a real unit with the needs of the build.' },
    { type: 'title', text: 'How the PSU Wattage Estimate Works', level: 3 },
    { type: 'paragraph', html: 'The base load is the sum of the processor, graphics card, motherboard, storage, fans, and peripherals. The calculator adds a transient margin for short excursions and a growth margin for future changes, then rounds the result up to the next practical 50 watt step.' },
    { type: 'table', headers: ['Input', 'Why it matters', 'Planning guidance'], rows: [
      ['Processor watts', 'Sets sustained system demand', 'Use expected package power or a measured workload value.'],
      ['Graphics card watts', 'Often the largest gaming load', 'Use board power when available and consider short excursions.'],
      ['Motherboard and memory', 'Covers platform overhead', 'Include chipset, memory, voltage regulation, and onboard devices.'],
      ['Storage and fans', 'Adds continuous and startup demand', 'Include every drive, pump, and fan that will be installed.'],
      ['Margins', 'Protects against uncertainty and upgrades', 'Increase them when component data is uncertain or the build will grow.'],
    ] },
    { type: 'title', text: 'Choosing a Safe Power Supply Size', level: 3 },
    { type: 'list', items: ['Compare both the minimum and recommended values.', 'Check that the PSU has the required connectors and form factor.', 'Confirm that the unit is suitable for the graphics card power behavior.', 'Treat the result as a planning estimate and verify the final component specifications.'] },
    { type: 'title', text: 'Why the Current PSU Status Matters', level: 3 },
    { type: 'paragraph', html: 'A current unit below the minimum estimate is insufficient for the entered build. A unit between the minimum and recommended values is tight. A recommended unit has practical headroom, while an oversized unit may be more capacity than the build needs.' },
    { type: 'title', text: 'Minimum Versus Recommended Wattage', level: 3 },
    { type: 'paragraph', html: 'The minimum figure is a floor for the entered estimates. It is not a buying target when the component values are uncertain. The recommended figure adds room for short excursions and future changes, then rounds to a practical 50 watt step. A sensible purchase should also match the graphics card connector requirements and the physical form factor of the case.' },
    { type: 'title', text: 'Graphics Card Transients and Platform Checks', level: 3 },
    { type: 'paragraph', html: 'Graphics cards can create short power excursions that do not appear in a simple sustained wattage figure. The transient margin is a planning allowance, not a substitute for the graphics card and PSU manufacturer guidance. For modern builds, check the available PCIe power connectors, cable arrangement, ATX platform requirements, protection features, and independent testing.' },
    { type: 'table', headers: ['Planning situation', 'Useful approach', 'What to verify'], rows: [
      ['Known measured component values', 'Use the measured load and a modest margin', 'Workload, peak behavior, and connector requirements'],
      ['New gaming build', 'Use board power and retain growth headroom', 'GPU transient guidance, PCIe cables, and case form factor'],
      ['Future upgrades planned', 'Increase growth margin before rounding', 'Upgrade path, extra drives, cards, and cooling load'],
      ['Unknown or mixed hardware', 'Use conservative values and do not buy at the floor', 'Manufacturer specifications and independent PSU testing'],
    ] },
    { type: 'title', text: 'What This Calculator Cannot Confirm', level: 3 },
    { type: 'paragraph', html: 'This tool estimates capacity from the values you enter. It cannot determine whether a specific PSU is genuine, quiet, well protected, compatible with a case, or safe under every transient pattern. Treat the recommendation as a planning range, then validate the final part against official specifications and reputable hardware testing.' },
  ],
  ui: {
    sceneKicker: 'Energy constellation',
    deckTitle: 'Tune the channels',
    deckHint: 'Drag a channel to make the sculpture respond',
    presetsHeader: 'Build presets',
    officePreset: 'Office',
    gamingPreset: 'Gaming',
    highEndPreset: 'High end',
    workstationPreset: 'Workstation',
    miniPcPreset: 'Mini PC',
    componentsHeader: 'Component load',
    cpuWatts: 'Processor',
    gpuWatts: 'Graphics card',
    motherboardWatts: 'Motherboard and memory',
    storageWatts: 'Storage',
    fansWatts: 'Fans and cooling',
    peripheralsWatts: 'Peripherals',
    currentPsuWatts: 'Current PSU rating',
    showAdvanced: 'Tune detailed load inputs',
    hideAdvanced: 'Hide detailed load inputs',
    marginsHeader: 'Planning margins',
    transientMargin: 'Transient margin',
    growthMargin: 'Growth margin',
    wattsUnit: 'W',
    baseLoad: 'Base load',
    minimumPsu: 'Minimum PSU',
    recommendedPsu: 'Recommended PSU',
    currentPsu: 'Current PSU',
    headroom: 'Headroom',
    statusLabel: 'Build status',
    statusInsufficient: 'Insufficient',
    statusTight: 'Tight',
    statusRecommended: 'Recommended',
    statusOversized: 'Oversized',
    summaryPrefix: 'Next move:',
    diagramTitle: 'Power observatory',
    currentMarker: 'Current PSU',
    minimumMarker: 'Minimum',
    recommendedMarker: 'Recommended',
    adviceInsufficient: 'Choose a PSU at or above the recommended figure and verify the graphics card connectors.',
    adviceTight: 'The build is close to the limit. Choose the recommended figure if you want room for upgrades.',
    adviceRecommended: 'Your current PSU clears the planning target. Verify connectors, form factor, and platform guidance.',
    adviceOversized: 'The capacity is ample. Check efficiency, physical fit, and connector layout before buying.',
    inputHint: 'Use measured values when possible. The result is a planning estimate, not a substitute for checking the final hardware specifications.',
  },
};
