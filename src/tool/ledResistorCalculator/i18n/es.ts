import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-resistencia-led';
const title = 'Calculadora de resistencia para LED';
const description = 'Calcula la resistencia en serie adecuada para un LED a partir de la tensión de alimentación, la tensión directa y la corriente objetivo. Obtén el valor E12 o E24 más cercano y la potencia de disipación recomendada.';

const faqData = [
  { question: '¿Qué resistencia necesito para un LED rojo en un pin de 5 V de Arduino?', answer: 'Un LED rojo estándar de 5 mm (Vf de 2,0 V a 20 mA) conectado a una línea de 5 V requiere una resistencia de 150 ohmios con una disipación aproximada de 60 mW. Es suficiente una resistencia de película metálica de 0,125 W o 0,25 W. Frecuentemente se emplea un valor comercial de 220 ohmios: el LED emitirá ligeramente menos luz y trabajará con mayor margen de seguridad.' },
  { question: '¿Cómo se calcula la resistencia para un LED?', answer: 'Se resta la tensión directa del LED (Vf) a la tensión de alimentación (Vs) y el resultado se divide entre la corriente en amperios (If): R = (Vs - Vf) / If. Para un LED rojo de 2 V y 20 mA a 5 V, el valor exacto es (5 - 2) / 0,02 = 150 ohmios.' },
  { question: '¿Qué tensión directa (Vf) debo utilizar?', answer: 'Debes consultar la tensión directa típica especificada en la hoja de datos del fabricante para la corriente deseada. Las opciones predefinidas de esta herramienta son valores genéricos orientativos: 1,3 V para infrarrojos, 2,0 V para rojo, 2,2 V para amarillo/verde y 3,2 V para azul/blanco.' },
  { question: '¿Por qué la herramienta sugiere un valor E12 o E24 en lugar de los ohmios exactos?', answer: 'Las resistencias comerciales se fabrican en series normalizadas según la norma IEC. La serie E12 ofrece escalones del 10 % de tolerancia y la E24 del 5 %. La calculadora selecciona el valor comercial más cercano y, en caso de empate, la resistencia inmediatamente superior para proteger el LED.' },
  { question: '¿Se pueden conectar varios LED en paralelo compartiendo una sola resistencia?', answer: 'No se recomienda. El LED con la tensión directa más baja absorberá la mayor parte de la corriente y terminará dañándose. Es necesario conectar los LED en serie con una única resistencia o colocar una resistencia independiente en cada rama en paralelo.' },
  { question: '¿Cuándo no es suficiente utilizar una resistencia en serie?', answer: 'No debe usarse una única resistencia para LED de alta potencia (1 W o superior), tiras LED, matrices de iluminación o instalaciones donde la tensión de entrada sufra fluctuaciones importantes. Estos casos requieren un controlador o driver de corriente constante.' },
];

const howToData = [
  { name: 'Selecciona el color del LED', text: 'Haz clic en el color del LED para cargar automáticamente su tensión directa (Vf) y corriente de prueba (20 mA) estándar.' },
  { name: 'Define la tensión de alimentación', text: 'Indica el valor de tu fuente o selecciona uno de los ajustes preestablecidos (Arduino 5 V, MCU 3,3 V, 9 V, 12 V o 24 V).' },
  { name: 'Consulta las especificaciones de la resistencia', text: 'Revisa el valor comercial recomendado (E12/E24), la potencia mínima de disipación y el código de colores correspondiente.' },
  { name: 'Verifica la polaridad antes de soldar', text: 'Asegúrate de conectar el ánodo al lado positivo y el cátodo a masa. Si la caída en la resistencia es muy pequeña (<1 V) o se calienta en exceso, revisa los datos del circuito.' },
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

export const content: ToolLocaleContent<LedResistorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Calculadora de resistencia en serie para LED', level: 2 },
    { type: 'paragraph', html: 'Un LED es un diodo emisor de luz controlado por corriente. La función de la resistencia en serie es limitar la corriente mediante la ley de Ohm: <code>R = (Vs - n x Vf) / If</code>. Esta calculadora determina el valor necesario en el navegador, lo ajusta a las series comerciales E12 o E24, representa el código de colores en las bandas y calcula la potencia de disipación adecuada con margen de seguridad.' },
    { type: 'title', text: 'Ejemplo: LED rojo en un pin de 5 V de Arduino', level: 3 },
    { type: 'paragraph', html: 'Para un LED rojo común con Vf de 2,0 V a 20 mA en un rail de 5 V: <code>(5 - 2) / 0,02 = 150 ohmios</code> con una potencia disipada de 60 mW. El valor comercial a adquirir es de 150 Ω (0,125 W o 0,25 W). Emplear una resistencia habitual de 220 Ω reduce la corriente a unos 14 mA, disminuyendo ligeramente el brillo y aumentando la vida útil del componente.' },
    { type: 'table', headers: ['Color del LED', 'Tensión directa (Vf)', 'Corriente típica (If)', 'Resistencia a 5 V'], rows: [['Infrarrojo', '1,3 V', '20 mA', '180 Ω'], ['Rojo', '2,0 V', '20 mA', '150 Ω'], ['Amarillo / Verde', '2,2 V', '20 mA', '150 Ω'], ['Azul / Blanco', '3,2 V', '20 mA', '91 Ω'], ['Ultravioleta', '3,4 V', '20 mA', '82 Ω']] },
    { type: 'title', text: 'Valores normalizados E12 y E24', level: 3 },
    { type: 'paragraph', html: 'Las resistencias se comercializan según las series normalizadas IEC. La serie E12 comprende 12 valores por década (10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82). La serie E24 añade valores intermedios (11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75, 91). Ante distancias idénticas entre dos valores, la calculadora elige el valor superior para evitar sobrecargas térmicas.' },
    { type: 'title', text: 'Consideraciones de diseño e inconvenientes', level: 3 },
    { type: 'paragraph', html: 'Una resistencia en serie no actúa como fuente de corriente constante. No debes conectar LED en paralelo compartiendo una única resistencia debido a las diferencias de Vf entre componentes. Para LED de alta potencia o fuentes inestables, se requiere un driver específico. Los preajustes de color de la herramienta son de referencia; siempre prevalecen los datos de la hoja técnica de tu componente.' },
    { type: 'list', items: ['Mantén la corriente de LED de señalización entre 10 mA y 20 mA.', 'Conecta una resistencia dedicada para cada rama de LED.', 'Si la caída en la resistencia es menor de 1 V, pequeñas variaciones de tensión alterarán significativamente la corriente.', 'En circuitos de 12 V o 24 V, comprueba la potencia requerida (puede superar 0,5 W).', 'Verifica siempre la polaridad (ánodo y cátodo) antes de soldar.'] },
    { type: 'tip', title: 'Hoja de datos del fabricante', html: 'Los valores de tensiones e intensidades varían según el fabricante y el lote. Consulta siempre la documentación del componente si se trata de LED de alta luminosidad o aplicaciones críticas.' },
    { type: 'diagnostic', variant: 'warning', title: 'Limitación de corriente', html: 'La resistencia se calcula para una tensión de alimentación estable. Si la fuente varía o la temperatura cambia, la corriente de trabajo también lo hará.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'Infrarrojo',
    colorRed: 'Rojo',
    colorOrange: 'Naranja',
    colorYellow: 'Amarillo',
    colorGreen: 'Verde',
    colorBlue: 'Azul',
    colorWhite: 'Blanco',
    colorUv: 'Ultravioleta',
    supplyHeader: 'Tensión de alimentación',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: 'MCU 3,3 V',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Tensión directa (Vf)',
    forwardUnit: 'V',
    currentHeader: 'Corriente objetivo (If)',
    currentUnit: 'mA',
    countHeader: 'LEDs en serie',
    seriesHeader: 'Serie comercial',
    seriesE12: 'E12 (10 %)',
    seriesE24: 'E24 (5 %)',
    showDatasheet: 'Ajustes de hoja de datos',
    hideDatasheet: 'Ocultar hoja de datos',
    buyLabel: 'Resistencia',
    powerLabel: 'Potencia',
    seriesShort: 'Serie',
    statusTight: 'Margen de tensión reducido',
    statusHotter: 'La resistencia generará calor',
    statusOverdriven: 'Corriente elevada',
    statusNoHeadroom: 'Tensión insuficiente para encender el LED',
    statusInvalid: 'Revisa los datos introducidos',
    supplyLabel: 'Fuente',
    resistorLabel: 'Resistencia',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'Ánodo (+)',
    cathodeLabel: 'Cátodo (-)',
    note: 'Los preajustes usan Vf orientativos. No conectes LED en paralelo compartiendo una sola resistencia.',
  },
};
