import type { FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ohm Law and Electrical Power Calculator',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does this Ohm law calculator solve?',
      acceptedAnswer: { '@type': 'Answer', text: 'Enter any two positive values for voltage, current, resistance, or power. The calculator derives the other two values for an ohmic component.' },
    },
    {
      '@type': 'Question',
      name: 'Which units does the calculator use?',
      acceptedAnswer: { '@type': 'Answer', text: 'Use volts for voltage, amperes for current, ohms for resistance, and watts for power.' },
    },
    {
      '@type': 'Question',
      name: 'Can I use power and resistance as my two known values?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The calculator uses the square root relationships to derive voltage and current from power and resistance.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to calculate an electrical value with Ohm law',
  step: [
    { '@type': 'HowToStep', name: 'Choose two known values', text: 'Activate the two quantities you already know: voltage, current, resistance, or power.' },
    { '@type': 'HowToStep', name: 'Enter the measurements', text: 'Type positive values in the two active fields using volts, amperes, ohms, and watts.' },
    { '@type': 'HowToStep', name: 'Read the result', text: 'The circuit diagram and readout show the two values calculated from Ohm law and electrical power relationships.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Need a voltage current resistance or power calculation', level: 2 },
  { type: 'paragraph', html: 'If you know two values in a simple circuit, you already have enough information to find the other two. Enter the pair you have and this Ohm law calculator works out the missing values in volts, amperes, ohms, and watts.' },
  { type: 'paragraph', html: 'For example, enter 12 V and 2 A to get 6 Ω and 24 W. Enter 5 V and 10 W to get 2 A and 2.5 Ω. That makes it useful when checking a resistor, estimating LED current, finding the load on a USB supply, or checking how much power a small amplifier load consumes.' },
  { type: 'title', text: 'Which Ohm law formula should you use', level: 3 },
  { type: 'paragraph', html: 'The right equation depends on the two measurements available. These are all rearrangements of Ohm law, V = I × R, and the power relationship P = V × I.' },
  { type: 'table', headers: ['If you know', 'You can find', 'Use'], rows: [
    ['Voltage and current', 'Resistance and power', 'R = V / I and P = V × I'],
    ['Voltage and resistance', 'Current and power', 'I = V / R and P = V² / R'],
    ['Voltage and power', 'Current and resistance', 'I = P / V and R = V² / P'],
    ['Current and resistance', 'Voltage and power', 'V = I × R and P = I² × R'],
    ['Current and power', 'Voltage and resistance', 'V = P / I and R = P / I²'],
    ['Resistance and power', 'Voltage and current', 'V = √(P × R) and I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Use power to choose a safer component', html: 'If the calculator gives 24 W, the component must be able to dissipate at least that much power. In practice, leave a safety margin and remember that a diode is not an ohmic component with one fixed resistance.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'ohm-law-power-calculator',
  title: 'Ohm Law and Electrical Power Calculator',
  description: 'An Ohm law calculator for finding voltage, current, resistance, and electrical power from any two values you know.',
  ui: {
    instructions: 'Choose the two values you know, then enter them. The circuit derives the remaining pair in SI units.',
    knownLabel: 'Choose two known values',
    useAsKnownLabel: 'Use as known',
    voltageLabel: 'Voltage',
    currentLabel: 'Current',
    resistanceLabel: 'Resistance',
    powerLabel: 'Power',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: 'Complete the circuit',
    resultHint: 'Two known terminals create the missing pair.',
    formulaTitle: 'Circuit readout',
    formulaHint: 'Lit terminals are known. Copper traces show the equations.',
    statusTitle: 'Calculation status',
    statusEmpty: 'Enter two positive values to begin.',
    statusInvalid: 'Both known values must be greater than zero.',
    statusReady: 'The circuit relationship is solved.',
    presetTitle: 'Start from a real load',
    presetLed: 'LED indicator',
    presetUsb: 'USB load',
    presetAmplifier: 'Amplifier load',
    resetLabel: 'Reset',
    orbitCaption: 'Choose two terminals to complete the circuit.',
    knownBadge: 'Known',
    solvedBadge: 'Solved',
    unitVoltage: 'volts',
    unitCurrent: 'amperes',
    unitResistance: 'ohms',
    unitPower: 'watts',
    formulaVoltageCurrent: 'R = V / I and P = V × I',
    formulaVoltageResistance: 'I = V / R and P = V² / R',
    formulaVoltagePower: 'I = P / V and R = V² / P',
    formulaCurrentResistance: 'V = I × R and P = I² × R',
    formulaCurrentPower: 'V = P / I and R = P / I²',
    formulaResistancePower: 'V = √(P × R) and I = √(P / R)',
    seoTitle: 'Ohm law calculator',
  },
  seo,
  faqTitle: 'Common Ohm law calculator questions',
  faq: [
    { question: 'I know voltage and current. What do I get?', answer: 'You get resistance and power. For example, 12 V and 2 A produce 6 Ω and 24 W.' },
    { question: 'Can this calculate the wattage for a resistor?', answer: 'Yes. Enter the voltage and resistance, or the current and resistance, to calculate the power the resistor dissipates.' },
    { question: 'Can I use power and voltage as my inputs?', answer: 'Yes. Enter both values and the calculator derives current with I = P / V and resistance with R = V² / P.' },
    { question: 'Does Ohm law apply to every electronic component?', answer: 'No. This calculator models a simple ohmic component. Devices such as diodes have a nonlinear relationship between voltage and current.' },
  ],
  bibliographyTitle: 'Formula references',
  bibliography,
  howTo: [
    { name: 'Choose two known values', text: 'Activate the two quantities already known to you.' },
    { name: 'Enter positive measurements', text: 'Enter volts, amperes, ohms, or watts in the active fields.' },
    { name: 'Read the result', text: 'Use the circuit diagram and readout to see the remaining values and the equation used.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
