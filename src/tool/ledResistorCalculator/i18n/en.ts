import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-resistor-calculator';
const title = 'LED Resistor Calculator';
const description = 'Find the series resistor for an LED from supply voltage, forward voltage, and current, then pick the nearest E12 or E24 value and a safe wattage.';

const faqData = [
  { question: 'What resistor do I need for a red LED on a 5 V Arduino pin?', answer: 'A typical red 5 mm LED at 2.0 V and 20 mA on 5 V needs 150 ohms and about 60 mW in the resistor. A 125 mW or 250 mW metal film part is enough. Many junk boxes use 220 ohms instead: the LED runs a little dimmer and stays safer if the forward voltage is lower than typical.' },
  { question: 'How do I calculate the resistor for an LED?', answer: 'Subtract the LED forward voltage from the supply voltage, then divide by the LED current in amps. For a red LED at 2 V and 20 mA on a 5 V rail, the exact resistor is (5 - 2) / 0.02 = 150 ohms.' },
  { question: 'What forward voltage should I use?', answer: 'Use the typical forward voltage from the LED datasheet at the current you want. Color chips in this tool are typical bins, not your specific LED. Starting points are about 1.3 V for infrared, 2.0 V for red, 2.2 V for yellow or green, and 3.2 V for blue or white.' },
  { question: 'Why does the tool show an E12 or E24 value instead of the exact ohms?', answer: 'Through hole and chip resistors are sold in preferred number series. E12 steps are about 20 percent apart and E24 steps are about 10 percent apart. The calculator chooses the nearest preferred value and, on a tie, the higher resistance so the LED is not overdriven.' },
  { question: 'Can parallel LEDs share one resistor?', answer: 'No. The LED with the lowest forward voltage takes most of the current and can burn. Put LEDs in series on one resistor, or give each parallel branch its own resistor.' },
  { question: 'When is a series resistor not enough?', answer: 'Skip a single resistor for 1 W class emitters, LED strips, long automotive strings, and anything that needs a stable current as voltage sags. Those loads need a constant current driver. A resistor is a current limit for one indicator LED on a stiff rail, not a current source.' },
];

const howToData = [
  { name: 'Pick the LED color', text: 'Tap the diode that matches the part on the bench. That loads a typical forward voltage and 20 mA indicator current.' },
  { name: 'Pick the rail', text: 'Use Arduino 5 V or 3.3 V MCU for logic pins, or 9 V, 12 V, or 24 V for panel supplies.' },
  { name: 'Read the part on the board', text: 'The resistor shows the value to buy, the wattage to use, and the color bands. Open datasheet values only if your LED listing differs.' },
  { name: 'Check polarity before soldering', text: 'Current enters the anode and leaves the cathode toward ground. Confirm the datasheet if the drop is under 1 V or the resistor runs warm.' },
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

export const content: ToolLocaleContent<LedResistorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'LED series resistor calculator', level: 2 },
    { type: 'paragraph', html: 'A discrete LED is a current driven diode. The series resistor sets that current from Ohm\'s law: <code>R = (Vs - n x Vf) / If</code>. This calculator solves that in the browser, snaps to an E12 or E24 part, paints the color bands, and names a wattage with a factor of two of headroom.' },
    { type: 'title', text: 'A red LED on an Arduino 5 V pin', level: 3 },
    { type: 'paragraph', html: 'The search people actually type is "what resistor for a red LED on 5 V". Typical Vf is 2.0 V at 20 mA, so <code>(5 - 2) / 0.02 = 150 ohms</code> and 60 mW in the resistor. Buy 150 ohms, 125 mW or 250 mW. A 220 ohm part from the drawer also works: current falls to about 14 mA and the LED is dimmer, which is often what you want on a status pin.' },
    { type: 'table', headers: ['LED color', 'Typical Vf', 'Typical If', 'Resistor on 5 V'], rows: [['Infrared', '1.3 V', '20 mA', '180 ohms'], ['Red', '2.0 V', '20 mA', '150 ohms'], ['Yellow or green', '2.2 V', '20 mA', '150 ohms'], ['Blue or white', '3.2 V', '20 mA', '91 ohms'], ['Ultraviolet', '3.4 V', '20 mA', '82 ohms']] },
    { type: 'title', text: 'E12 and E24 preferred values', level: 3 },
    { type: 'paragraph', html: 'Resistors are manufactured on the IEC preferred number series. E12 is the common 10 percent set: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 and their decades. E24 fills the 5 percent set with extra steps such as 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75, and 91. The tool picks the nearest value and, when two values are equally close, the higher resistance so the LED runs a little dimmer rather than hotter.' },
    { type: 'title', text: 'When a series resistor is not enough', level: 3 },
    { type: 'paragraph', html: 'A resistor is not a current source. It only sets current for a chosen supply and a chosen Vf. Do not share one resistor across parallel LEDs: the lowest Vf hogs the current. Do not use a single resistor on a 1 W emitter, an LED strip, or a long 12 V automotive string. Those need a constant current driver. Color presets are typical bins; your LED\'s datasheet Vf at the rated current is the number that matters.' },
    { type: 'list', items: ['Keep indicator LEDs near 10 mA to 20 mA unless the datasheet allows more.', 'Give each parallel LED its own resistor.', 'If the drop is under 1 V, a small Vf change causes a large current change.', 'On 12 V the resistor often needs 0.5 W, not a 125 mW film part.', 'Confirm anode, cathode, peak current, and wattage before you solder.'] },
    { type: 'tip', title: 'Typical Vf is not your lot', html: 'Red, blue, and white chips here are starting points for 5 mm indicators. Measure or read the manufacturer curve if the rail is 3.3 V, the LED is high power, or the part is infrared.' },
    { type: 'diagnostic', variant: 'warning', title: 'A resistor is not a current source', html: 'If the supply sags, the LED Vf shifts with temperature, or several LEDs are paralleled, the current will move. Use the board as a bench starting point, then measure.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: 'Red',
    colorOrange: 'Orange',
    colorYellow: 'Yellow',
    colorGreen: 'Green',
    colorBlue: 'Blue',
    colorWhite: 'White',
    colorUv: 'UV',
    supplyHeader: 'Rail',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3.3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Datasheet Vf',
    forwardUnit: 'V',
    currentHeader: 'Datasheet If',
    currentUnit: 'mA',
    countHeader: 'LEDs in series',
    seriesHeader: 'Preferred series',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: 'Datasheet values',
    hideDatasheet: 'Hide datasheet values',
    buyLabel: 'Part',
    powerLabel: 'Power',
    seriesShort: 'Series',
    statusTight: 'Little voltage left',
    statusHotter: 'Resistor will run warm',
    statusOverdriven: 'Current is high',
    statusNoHeadroom: 'Supply cannot light the LED',
    statusInvalid: 'Check the inputs',
    supplyLabel: 'Supply',
    resistorLabel: 'Resistor',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: 'Color chips use typical Vf, not your lot. Do not share one resistor across parallel LEDs.',
  },
};
