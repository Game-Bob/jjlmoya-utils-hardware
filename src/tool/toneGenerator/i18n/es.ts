import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generador-tonos';
const title = 'Generador de Tonos y Frecuencias Online';
const description =
  'Genera ondas sinusoidales, cuadradas, triangulares y de sierra. Prueba tus altavoces, auriculares o subwoofer con frecuencias de 20Hz a 20kHz.';

const faqData = [
  {
    question: '¿Para qué sirve generar frecuencias específicas?',
    answer:
      'Sirve para probar la respuesta de frecuencia de altavoces y auriculares, detectar vibraciones extrañas en muebles (resonancia), encontrar agujeros en tu audición o incluso para calmar el tinnitus mediante terapia de muesca.',
  },
  {
    question: '¿Qué es una onda sinusoidal frente a una onda cuadrada?',
    answer:
      'La onda sinusoidal es un tono puro sin armónicos (suave). La onda cuadrada es rica en armónicos impares y tiene un sonido mucho más agresivo o digital. La triangular es un punto intermedio, útil para síntesis de audio.',
  },
  {
    question: '¿Puedo dañar mis altavoces con esta herramienta?',
    answer:
      'Sí, si usas volúmenes muy altos en frecuencias extremas (especialmente graves por debajo de 30Hz o agudos por encima de 15kHz). Empieza siempre con el volumen del sistema bajo y súbelo gradualmente.',
  },
  {
    question: '¿Cuál es el rango de audición humano?',
    answer:
      'Teóricamente de 20Hz a 20,000Hz (20kHz). Sin embargo, con la edad es normal perder la capacidad de oír por encima de los 15kHz. Este test puede ayudarte a verificar tu límite superior personal.',
  },
];

const howToData = [
  {
    name: 'Seleccionar el tipo de onda',
    text: 'Elige entre Sinusoidal (pura), Cuadrada, Triangular o Diente de Sierra según el tipo de prueba que quieras realizar.',
  },
  {
    name: 'Ajustar la frecuencia',
    text: 'Mueve el control deslizante para navegar por el espectro audible. Usa los atajos de 60Hz, 440Hz o 1kHz para acceder rápidamente a frecuencias de referencia.',
  },
  {
    name: 'Controlar el volumen',
    text: 'Asegúrate de que el volumen de tus altavoces sea bajo antes de pulsar Play. Puedes ajustar la ganancia directamente desde la herramienta.',
  },
  {
    name: 'Analizar la respuesta',
    text: 'Escucha posibles distorsiones o momentos en los que el sonido desaparece. Esto te indicará los límites físicos de tu hardware de audio.',
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Todo sobre Frecuencias y Ondas de Sonido', level: 2 },
    {
      type: 'paragraph',
      html: 'El sonido es física pura en movimiento. Esta herramienta te permite manipular ondas sonoras en tiempo real, desde los graves más profundos que puedes sentir en el pecho hasta los agudos ultrasónicos que solo perciben los animales.',
    },
    { type: 'title', text: 'Rango Auditivo Humano y Presbiacusia', level: 3 },
    {
      type: 'paragraph',
      html: 'El oído humano sano percibe entre <strong>20Hz y 20kHz</strong>. Con la edad, el límite superior cae: la mayoría de adultos mayores de 50 años no superan los 12kHz. El tono de 17.4kHz, conocido como "el tono mosquito", es un test clásico que solo suelen superar los adolescentes.',
    },
    { type: 'title', text: 'Tipos de Ondas y sus Usos', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sinusoidal:</strong> tono puro sin armónicos, usado en tests auditivos médicos y calibración de instrumentos. <strong>Cuadrada:</strong> rica en armónicos impares, suena como consolas retro de 8-bits. <strong>Diente de sierra:</strong> contiene todos los armónicos, base de los sintetizadores de música electrónica. <strong>Triangular:</strong> punto medio entre sinusoidal y cuadrada, más suave que la cuadrada pero con más contenido armónico que la senoidal.',
    },
    { type: 'title', text: 'Test de Altavoces y Limpieza por Vibración', level: 3 },
    {
      type: 'paragraph',
      html: 'Una onda de baja frecuencia (generalmente <strong>165Hz</strong>) a volumen máximo con forma cuadrada o de sierra fuerza al diafragma del altavoz a vibrar violentamente, expulsando mecánicamente las gotas de agua atrapadas en la rejilla. No reproduzcas frecuencias extremadamente agudas a máximo volumen durante mucho tiempo: aunque no las oigas, la energía puede dañar los tweeters de tu equipo.',
    },
  ],
  ui: {
    badge: 'Generador de Audio',
    title: 'Generador de Tonos',
    description: 'Crea frecuencias puras para test de audio.',
    freqLabel: 'Frecuencia',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Subgrave)',
    rangeMax: '20kHz (Ultrasonido)',
    waveLabel: 'Forma de Onda',
    waveSine: 'Sinusoidal',
    waveSquare: 'Cuadrada',
    waveSawtooth: 'Diente de Sierra',
    waveTriangle: 'Triangular',
    volLabel: 'Volumen',
    btnPlay: 'REPRODUCIR TONO',
    btnStop: 'DETENER',
  },
};
