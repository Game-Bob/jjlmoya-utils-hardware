import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'voltage-divider-calculator';
const title = 'Voltage Divider Calculator';
const description = 'Calculate a resistor divider output voltage, current, power dissipation, or the lower resistor needed for a target voltage.';

const faqData = [
  { question: 'What does a voltage divider calculator do?', answer: 'It calculates the unloaded output of two resistors in series. Enter the supply, the upper resistor, and the lower resistor to predict Vout, or enter a target Vout to solve for the lower resistor.' },
  { question: 'How do I calculate the output voltage?', answer: 'Use Vout = Vs x R2 / (R1 + R2), where R1 is the resistor connected to the supply and R2 is the resistor connected to ground. The output is the tap between them.' },
  { question: 'How do I calculate the resistor for a target voltage?', answer: 'If R1 is known, solve R2 = R1 x Vtarget / (Vs - Vtarget). The target must be greater than zero and lower than the supply voltage.' },
  { question: 'How much current does a voltage divider use?', answer: 'The divider current is Vs / (R1 + R2). This is continuous current drawn from the source before any external load is connected.' },
  { question: 'How do I check resistor power?', answer: 'The power in each resistor is I squared x R. Choose a resistor with a rating above its calculated dissipation and account for temperature, tolerance, and the load connected to the output.' },
  { question: 'Can I use a divider as a power supply?', answer: 'Usually not. A load connected to Vout changes the effective lower resistance and shifts the voltage. Use a buffer, regulator, or dedicated reference when the output must supply meaningful current.' },
];

const howToData = [
  { name: 'Choose a calculation mode', text: 'Use Predict Vout when both resistor values are known. Use Find R2 when you know the supply, upper resistor, and output voltage you want.' },
  { name: 'Enter the supply and upper resistor', text: 'Enter the DC supply voltage and the resistor between the supply and the output tap. Keep the units in volts and ohms.' },
  { name: 'Enter the lower value or target', text: 'In Predict Vout, enter R2 to ground. In Find R2, enter a target voltage between zero and the supply.' },
  { name: 'Read the circuit scene', text: 'Use the illuminated tap for Vout, the current for source loading, and the two power figures to check resistor heat.' },
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

export const content: ToolLocaleContent<VoltageDividerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Voltage divider calculations', level: 2 },
    { type: 'paragraph', html: 'A two resistor divider turns a source voltage into a smaller tap voltage. With the upper resistor <code>R1</code> connected to the supply and the lower resistor <code>R2</code> connected to ground, the ideal unloaded output is <code>Vout = Vs x R2 / (R1 + R2)</code>. This tool also shows the divider current and the heat in each resistor.' },
    { type: 'title', text: 'Find the resistor for a target voltage', level: 3 },
    { type: 'paragraph', html: 'Choose Find R2 when you know the supply, the upper resistor, and the voltage you want at the tap. The tool rearranges the divider equation to <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>. A target near the supply produces a much larger R2, while a target near zero produces a smaller R2.' },
    { type: 'title', text: 'Read current and resistor power', level: 3 },
    { type: 'paragraph', html: 'The divider draws a continuous current of <code>I = Vs / (R1 + R2)</code>. Each resistor dissipates <code>P = I² x R</code>. Check both values against the resistor rating, especially when the divider is connected across a higher voltage rail.' },
    { type: 'title', text: 'Why the connected load matters', level: 3 },
    { type: 'paragraph', html: 'The result assumes the tap is unloaded. A circuit connected to Vout appears in parallel with R2, lowering the effective resistance and changing both Vout and current. For a signal or reference that must drive a load, use a buffer or a regulator designed for that job.' },
    { type: 'list', items: ['Keep the target voltage strictly between zero and the supply voltage.', 'Use the same resistance units for R1 and R2.', 'Check the power of both resistors, not only the total divider power.', 'Remember that tolerance and supply variation move the real output.', 'Treat the result as unloaded until the connected circuit is included in the model.'] },
    { type: 'tip', title: 'The tap is not a power rail', html: 'A divider is a quiet way to create a reference or measurement signal, but its output impedance is not zero. If the next circuit draws current, include that load or buffer the tap.' },
  ],
  ui: {
    modeHeader: 'Calculation mode',
    modePredict: 'Predict Vout',
    modeTarget: 'Find R2',
    inputHeader: 'Circuit inputs',
    supplyLabel: 'Supply voltage Vs',
    topLabel: 'Upper resistor R1',
    bottomLabel: 'Lower resistor R2',
    targetLabel: 'Target output Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Voltage river',
    outputLabel: 'Tap output',
    currentLabel: 'Divider current',
    totalPowerLabel: 'Total power',
    topPowerLabel: 'R1 power',
    bottomPowerLabel: 'R2 power',
    ratioLabel: 'of supply',
    statusNominal: 'Balanced calculation',
    statusInvalid: 'Check the inputs',
    statusTargetInvalid: 'Target must be below supply',
    formulaHeader: 'How the river is measured',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). The glowing tap marks the fraction of the supply that reaches the output.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Move the target lower or higher and the lower bank changes with it.',
    supplyNode: 'SUPPLY',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'GROUND',
    hint: 'Enter both resistors to see where the tap settles.',
    targetHint: 'Choose a target between zero and the supply to solve R2.',
    note: 'Ideal unloaded divider. A connected load changes the tap voltage and effective R2.',
  },
};
