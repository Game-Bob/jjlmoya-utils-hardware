import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de ley de Ohm y potencia eléctrica',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué resuelve esta calculadora de la ley de Ohm?',
      acceptedAnswer: { '@type': 'Answer', text: 'Introduce dos valores positivos de tensión, corriente, resistencia o potencia. La calculadora obtiene los otros dos valores para un componente óhmico.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué unidades utiliza la calculadora?',
      acceptedAnswer: { '@type': 'Answer', text: 'Utiliza voltios para la tensión, amperios para la corriente, ohmios para la resistencia y vatios para la potencia.' },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar potencia y resistencia como valores conocidos?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. La calculadora aplica las relaciones con raíz cuadrada para derivar tensión y corriente a partir de potencia y resistencia.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo calcular magnitudes eléctricas con la ley de Ohm',
  step: [
    { '@type': 'HowToStep', name: 'Elige dos valores conocidos', text: 'Activa las dos magnitudes que ya conoces: tensión, corriente, resistencia o potencia.' },
    { '@type': 'HowToStep', name: 'Introduce las mediciones', text: 'Escribe valores positivos en los dos campos activos en voltios, amperios, ohmios y vatios.' },
    { '@type': 'HowToStep', name: 'Lee los resultados', text: 'El esquema del circuito y el panel muestran los dos valores calculados mediante la ley de Ohm y las fórmulas de potencia.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Calcula tensión corriente resistencia o potencia en un circuito', level: 2 },
  { type: 'paragraph', html: 'Conociendo dos magnitudes eléctricas de un circuito simple se dispone de información suficiente para calcular las otras dos. Introduce la pareja de datos disponible y esta calculadora de la ley de Ohm obtiene los valores restantes en voltios, amperios, ohmios y vatios.' },
  { type: 'paragraph', html: 'Por ejemplo, introduce 12 V y 2 A para obtener 6 Ω y 24 W. Introduce 5 V y 10 W para obtener 2 A y 2,5 Ω. Resulta muy útil al verificar una resistencia, estimar la corriente de un LED, calcular la carga de una fuente USB o comprobar la potencia que disipa un amplificador.' },
  { type: 'title', text: 'Qué fórmula de la ley de Ohm debes aplicar', level: 3 },
  { type: 'paragraph', html: 'La ecuación adecuada depende de las dos mediciones disponibles. Todas son despejes directos de la ley de Ohm, V = I x R, y de la relación de potencia P = V x I.' },
  { type: 'table', headers: ['Si conoces', 'Puedes calcular', 'Fórmula utilizada'], rows: [
    ['Tensión y corriente', 'Resistencia y potencia', 'R = V / I y P = V x I'],
    ['Tensión y resistencia', 'Corriente y potencia', 'I = V / R y P = V² / R'],
    ['Tensión y potencia', 'Corriente y resistencia', 'I = P / V y R = V² / P'],
    ['Corriente y resistencia', 'Tensión y potencia', 'V = I x R y P = I² x R'],
    ['Corriente y potencia', 'Tensión y resistencia', 'V = P / I y R = P / I²'],
    ['Resistencia y potencia', 'Tensión y corriente', 'V = √(P x R) e I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Calcula la potencia para elegir componentes seguros', html: 'Si la calculadora indica 24 W, el componente debe ser capaz de disipar al menos esa potencia. En la práctica conviene dejar un margen de seguridad y recordar que elementos como los diodos no tienen una resistencia fija u óhmica.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'calculadora-ley-ohm-potencia',
  title: 'Calculadora de ley de Ohm y potencia eléctrica',
  description: 'Calculadora de la ley de Ohm para calcular tensión, corriente, resistencia y potencia eléctrica a partir de dos valores conocidos.',
  ui: {
    instructions: 'Elige las dos magnitudes conocidas e introdúcelas. El circuito calculará la pareja restante en unidades del SI.',
    knownLabel: 'Elige dos valores conocidos',
    useAsKnownLabel: 'Usar como conocido',
    voltageLabel: 'Tensión',
    currentLabel: 'Corriente',
    resistanceLabel: 'Resistencia',
    powerLabel: 'Potencia',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: 'Completar el circuito',
    resultHint: 'Dos terminales conocidos generan el par restante.',
    formulaTitle: 'Lectura del circuito',
    formulaHint: 'Los terminales iluminados son conocidos. Las pistas de cobre muestran las ecuaciones.',
    statusTitle: 'Estado del cálculo',
    statusEmpty: 'Introduce dos valores positivos para comenzar.',
    statusInvalid: 'Ambos valores conocidos deben ser mayores que cero.',
    statusReady: 'Relación del circuito resuelta.',
    presetTitle: 'Empezar desde una carga real',
    presetLed: 'Indicador LED',
    presetUsb: 'Carga USB',
    presetAmplifier: 'Carga de amplificador',
    resetLabel: 'Restablecer',
    orbitCaption: 'Elige dos terminales para completar el circuito.',
    knownBadge: 'Conocido',
    solvedBadge: 'Resuelto',
    unitVoltage: 'voltios',
    unitCurrent: 'amperios',
    unitResistance: 'ohmios',
    unitPower: 'vatios',
    formulaVoltageCurrent: 'R = V / I y P = V x I',
    formulaVoltageResistance: 'I = V / R y P = V² / R',
    formulaVoltagePower: 'I = P / V y R = V² / P',
    formulaCurrentResistance: 'V = I x R y P = I² x R',
    formulaCurrentPower: 'V = P / I y R = P / I²',
    formulaResistancePower: 'V = √(P x R) e I = √(P / R)',
    seoTitle: 'Calculadora de la ley de Ohm',
  },
  seo,
  faqTitle: 'Preguntas frecuentes sobre la calculadora de ley de Ohm',
  faq: [
    { question: 'Conozco tensión y corriente. ¿Qué obtengo?', answer: 'Obtienes resistencia y potencia. Por ejemplo, 12 V y 2 A producen 6 Ω y 24 W.' },
    { question: '¿Sirve para calcular la potencia disipada por una resistencia?', answer: 'Sí. Introduce tensión y resistencia, o corriente y resistencia, para calcular los vatios que disipa la resistencia.' },
    { question: '¿Puedo usar potencia y tensión como datos de entrada?', answer: 'Sí. Introduce ambos valores y la calculadora obtendrá la corriente con I = P / V y la resistencia con R = V² / P.' },
    { question: '¿La ley de Ohm se aplica a todos los componentes electrónicos?', answer: 'No. Esta calculadora modela un componente óhmico simple. Dispositivos como los diodos presentan una relación no lineal entre tensión y corriente.' },
  ],
  bibliographyTitle: 'Referencias de fórmulas',
  bibliography,
  howTo: [
    { name: 'Elige dos valores conocidos', text: 'Activa las dos magnitudes que ya conoces.' },
    { name: 'Introduce mediciones positivas', text: 'Escribe voltios, amperios, ohmios o vatios en los campos activos.' },
    { name: 'Lee los resultados', text: 'Consulta el esquema del circuito y el panel para ver los valores restantes y la fórmula aplicada.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
