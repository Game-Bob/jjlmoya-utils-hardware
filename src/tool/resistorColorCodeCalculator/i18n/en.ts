import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'resistor-color-code-calculator';
const title = 'Resistor Color Code Calculator';
const description = 'Decode resistor bands into resistance, tolerance, range, and temperature coefficient, or work backwards from a target value.';

const faqData = [
  { question: 'How do I read resistor color bands?', answer: 'Read the bands from the end with the tolerance band set slightly apart. The first two or three bands give the significant digits, the next band gives the multiplier, and the tolerance band gives the allowed variation.' },
  { question: 'What does a four band resistor code mean?', answer: 'A four band code uses two significant digits, one multiplier band, and one tolerance band. Yellow violet red gold means 47 multiplied by 100 ohms with a 5 percent tolerance.' },
  { question: 'What is the default tolerance of a three band resistor?', answer: 'A three band code has two significant digits and a multiplier. When no tolerance band is present, the common interpretation is plus or minus 20 percent.' },
  { question: 'How are five and six band resistors different?', answer: 'Five band resistors use three significant digits and a tolerance band. Six band resistors add a temperature coefficient band, expressed in parts per million per degree Celsius.' },
  { question: 'Can this tool decode SMD resistor markings?', answer: 'Yes. Enter a three or four digit SMD code, or a code such as 4R7 where R marks the decimal point. The result is a decoded resistance and does not invent a tolerance that is not present in the code.' },
  { question: 'Does the result prove that a resistor is safe to use?', answer: 'No. The color code identifies a nominal resistance and markings. Check power rating, working voltage, temperature range, tolerance, physical damage, and circuit requirements before replacing or installing a resistor.' },
];

const howToData = [
  { name: 'Choose the band count', text: 'Select three, four, five, or six bands based on the resistor you are examining.' },
  { name: 'Select each band color', text: 'Tap a band position and choose its color from the palette. The resistor drawing updates as each color is selected.' },
  { name: 'Read the decoded value', text: 'Use the large readout for resistance and the smaller readouts for tolerance, range, and temperature coefficient.' },
  { name: 'Check the orientation', text: 'Keep the tolerance band at the right when possible, then compare the result with the printed value or the component datasheet.' },
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

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Resistor Color Code Calculator', level: 2 },
    { type: 'paragraph', html: 'Decode three, four, five, and six band resistors in the browser. The calculator turns each color into significant digits, a multiplier, tolerance, resistance range, and temperature coefficient when a sixth band is present.' },
    { type: 'title', text: 'How to Read a Resistor Color Code', level: 3 },
    { type: 'paragraph', html: 'Start at the end opposite the tolerance band. Two or three bands provide the significant digits, the next band supplies the multiplier, and the tolerance band describes the expected variation around the nominal value.' },
    { type: 'table', headers: ['Band count', 'Significant digits', 'Extra marking', 'Typical use'], rows: [['Three bands', 'Two', 'Twenty percent default tolerance', 'General purpose identification'], ['Four bands', 'Two', 'Tolerance', 'Common leaded resistors'], ['Five bands', 'Three', 'Tolerance', 'Precision resistors'], ['Six bands', 'Three', 'Tolerance and temperature coefficient', 'Precision and temperature sensitive circuits']] },
    { type: 'title', text: 'Decode or Work Backwards from a Value', level: 3 },
    { type: 'paragraph', html: 'Use Decode when you have a physical resistor. Use Work backwards when you know the resistance and want a practical color sequence. The reverse mode rounds to a representable significant value and shows the resulting code.' },
    { type: 'title', text: 'SMD Resistor Markings', level: 3 },
    { type: 'paragraph', html: 'Surface mount resistors commonly use three or four digits. The final digit is the power of ten applied to the leading digits. The letter R marks the decimal point, so 4R7 means 4.7 ohms.' },
    { type: 'title', text: 'Verification Before You Install a Resistor', level: 3 },
    { type: 'list', items: ['Compare the decoded value with the circuit diagram or service documentation.', 'Check tolerance and power rating on the component datasheet.', 'Use the physical spacing of the tolerance band to confirm reading direction.', 'Measure an isolated component when the marking is damaged or ambiguous.', 'Do not treat a color code as proof that a replacement is electrically safe.'] },
    { type: 'tip', title: 'A visual code is a starting point', html: 'The calculator identifies the marking. It does not test resistance, power handling, insulation, working voltage, or long term reliability.' },
  ],
  ui: {
    sceneKicker: 'EIA color spectrum lab',
    hint: 'Tap a band, then choose a color. The resistor answers immediately.',
    decodeMode: 'Decode bands',
    reverseMode: 'Work backwards',
    smdMode: 'Decode SMD',
    bandCount: 'Band count',
    bandCount3: '3 bands',
    bandCount4: '4 bands',
    bandCount5: '5 bands',
    bandCount6: '6 bands',
    selectBand: 'Select a band',
    colorPalette: 'Color palette',
    bandLabel: 'Band',
    resistance: 'Resistance',
    tolerance: 'Tolerance',
    range: 'Allowed range',
    temperatureCoefficient: 'Temperature coefficient',
    noTempco: 'Not encoded',
    targetResistance: 'Target resistance in ohms',
    targetHint: 'Enter a number such as 4700.',
    targetUnit: 'ohms',
    toleranceChoice: 'Target tolerance',
    tolerance20: '20 percent',
    tolerance10: '10 percent',
    tolerance5: '5 percent',
    tolerance2: '2 percent',
    tolerance1: '1 percent',
    smdCode: 'SMD marking',
    smdHint: 'Use 472 for 4.7 kΩ or 4R7 for 4.7 Ω.',
    decodeSmd: 'Decode marking',
    valueUnit: 'Ω',
    ohms: 'ohms',
    kiloohms: 'kilohms',
    megaohms: 'megohms',
    gigaohms: 'gigaohms',
    minValue: 'Minimum',
    maxValue: 'Maximum',
    actualValue: 'Decoded value',
    requestedValue: 'Requested value',
    status: 'Status',
    statusReady: 'Ready to read',
    statusCheck: 'Nearest representable value',
    statusInvalid: 'Invalid combination',
    orientationNote: 'Orientation clue: keep the tolerance band slightly separated and at the right. Gold and silver cannot be significant digit bands.',
    reverseNote: 'The reverse mode chooses a representable significant value and shows the code that will be produced.',
    smdNote: 'SMD markings do not encode a tolerance in this compact view.',
    colorBlack: 'Black',
    colorBrown: 'Brown',
    colorRed: 'Red',
    colorOrange: 'Orange',
    colorYellow: 'Yellow',
    colorGreen: 'Green',
    colorBlue: 'Blue',
    colorViolet: 'Violet',
    colorGray: 'Gray',
    colorWhite: 'White',
    colorGold: 'Gold',
    colorSilver: 'Silver',
  },
};

