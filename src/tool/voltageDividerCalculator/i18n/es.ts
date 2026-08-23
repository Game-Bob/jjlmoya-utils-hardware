import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-divisor-tension';
const title = 'Calculadora de divisor de tensión';
const description = 'Calcula la tensión de salida sin carga, corriente, disipación de potencia o la resistencia inferior necesaria para una tensión objetivo en un divisor resistivo.';

const faqData = [
  { question: '¿Qué hace una calculadora de divisor de tensión?', answer: 'Calcula la salida sin carga de dos resistencias en serie. Introduce la tensión de alimentación, la resistencia superior y la inferior para obtener Vout, o introduce una Vout objetivo para calcular la resistencia inferior.' },
  { question: '¿Cómo se calcula la tensión de salida?', answer: 'Se usa la fórmula Vout = Vs x R2 / (R1 + R2), donde R1 es la resistencia conectada a la alimentación y R2 la conectada a masa. La salida es el punto intermedio entre ambas.' },
  { question: '¿Cómo se calcula la resistencia necesaria para una tensión objetivo?', answer: 'Si R1 es conocida, se despeja R2 = R1 x Vtarget / (Vs - Vtarget). La tensión objetivo debe ser mayor que cero y menor que la tensión de alimentación.' },
  { question: '¿Mucha corriente consume un divisor de tensión?', answer: 'La corriente del divisor es Vs / (R1 + R2). Es una corriente continua absorbida de la fuente antes de conectar cualquier carga externa.' },
  { question: '¿Cómo compruebo la potencia en cada resistencia?', answer: 'La potencia disipada en cada resistencia es I al cuadrado por R. Elige resistencias con una potencia nominal superior al valor calculado y ten en cuenta la temperatura, la tolerancia y la carga conectada.' },
  { question: '¿Puedo usar un divisor de tensión como fuente de alimentación?', answer: 'Normalmente no. Una carga conectada a Vout modifica la resistencia inferior efectiva y altera la tensión. Usa un amplificador operacional como seguidor, un regulador o una referencia dedicada cuando el circuito necesite suministrar corriente apreciable.' },
];

const howToData = [
  { name: 'Elige el modo de cálculo', text: 'Usa Predecir Vout cuando conozcas ambos valores de resistencia. Usa Buscar R2 cuando conozcas la alimentación, la resistencia superior y la tensión de salida que necesitas.' },
  { name: 'Introduce la alimentación y la resistencia superior', text: 'Escribe la tensión de alimentación en corriente continua y el valor de la resistencia entre la alimentación y la toma intermedia. Mantén las unidades en voltios y ohmios.' },
  { name: 'Introduce el valor inferior o la tensión objetivo', text: 'En Predecir Vout, escribe R2 conectada a masa. En Buscar R2, escribe una tensión objetivo entre cero y la tensión de alimentación.' },
  { name: 'Analiza el esquema del circuito', text: 'Consulta la toma iluminada para ver Vout, la corriente para el consumo de la fuente y los dos valores de potencia para comprobar el calentamiento de las resistencias.' },
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
  inLanguage: 'es',
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
    { type: 'title', text: 'Cálculos en divisores de tensión', level: 2 },
    { type: 'paragraph', html: 'Un divisor de dos resistencias reduce una tensión de alimentación a una tensión intermedia menor. Con la resistencia superior <code>R1</code> conectada a la entrada y la resistencia inferior <code>R2</code> a masa, la salida ideal sin carga es <code>Vout = Vs x R2 / (R1 + R2)</code>. Esta herramienta también muestra la corriente del divisor y el calor generado en cada resistencia.' },
    { type: 'title', text: 'Calcula la resistencia para una tensión objetivo', level: 3 },
    { type: 'paragraph', html: 'Elige Buscar R2 cuando conozcas la tensión de entrada, la resistencia superior y la tensión que deseas en la toma intermedia. La herramienta despeja la ecuación como <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>. Una tensión objetivo cercana a la alimentación requiere una R2 mucho mayor, mientras que un objetivo cercano a cero requiere una R2 menor.' },
    { type: 'title', text: 'Comprobación de corriente y potencia', level: 3 },
    { type: 'paragraph', html: 'El divisor consume una corriente continua de <code>I = Vs / (R1 + R2)</code>. Cada resistencia disipa una potencia de <code>P = I² x R</code>. Verifica ambos valores frente a las especificaciones de potencia de las resistencias, especialmente en líneas de alimentación de mayor tensión.' },
    { type: 'title', text: 'Efecto de la carga conectada', level: 3 },
    { type: 'paragraph', html: 'El resultado obtenido asume que la toma intermedia no tiene carga. Cualquier circuito conectado a Vout queda en paralelo con R2, reduciendo la resistencia equivalente e alterando tanto Vout como la corriente. Para señales o referencias que deban atacar una carga, utiliza un operacional en configuración de seguidor o un regulador adaptado.' },
    { type: 'list', items: ['Mantén la tensión objetivo strictly entre cero y la tensión de alimentación.', 'Utiliza las mismas unidades de resistencia para R1 y R2.', 'Verifica la disipación de potencia en ambas resistencias por separado.', 'Recuerda que la tolerancia de las resistencias y variaciones en la fuente alteran la salida real.', 'Trata el resultado como un cálculo en vacío hasta incluir el circuito receptor en el modelo.'] },
    { type: 'tip', title: 'La toma intermedia no es una fuente de alimentación', html: 'Un divisor de tensión es un método sencillo para crear referencias o reducir niveles de señal, pero su impedancia de salida no es nula. Si el circuito posterior consume corriente, incluye esa impedancia de carga o añade un paso adaptador de impedancia.' },
  ],
  ui: {
    modeHeader: 'Modo de cálculo',
    modePredict: 'Predecir Vout',
    modeTarget: 'Buscar R2',
    inputHeader: 'Parámetros del circuito',
    supplyLabel: 'Tensión de alimentación Vs',
    topLabel: 'Resistencia superior R1',
    bottomLabel: 'Resistencia inferior R2',
    targetLabel: 'Tensión de salida objetivo Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Flujo de tensión',
    outputLabel: 'Salida en la toma',
    currentLabel: 'Corriente del divisor',
    totalPowerLabel: 'Potencia total',
    topPowerLabel: 'Potencia en R1',
    bottomPowerLabel: 'Potencia en R2',
    ratioLabel: 'de la alimentación',
    statusNominal: 'Cálculo equilibrado',
    statusInvalid: 'Revisa los parámetros',
    statusTargetInvalid: 'La tensión objetivo debe ser inferior a la alimentación',
    formulaHeader: 'Fórmula aplicada',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). La toma iluminada representa la fracción de la alimentación disponible en la salida.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Ajusta la tensión objetivo y la resistencia inferior se calculará automáticamente.',
    supplyNode: 'ENTRADA',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'MASA',
    hint: 'Introduce ambas resistencias para obtener el nivel de salida.',
    targetHint: 'Elige una tensión objetivo entre cero y la alimentación para despejar R2.',
    note: 'Divisor ideal sin carga. Conectar un circuito a la salida modifica la tensión y la resistencia equivalente.',
  },
};
