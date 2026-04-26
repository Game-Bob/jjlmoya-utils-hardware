import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-raton';
const title = 'Test de Polling Rate del Ratón Online';
const description =
  'Comprueba los Hz reales de tu ratón. Verifica si tu mouse gaming funciona a 1000Hz o más con nuestra herramienta profesional.';

const faqData = [
  {
    question: '¿Qué es el Polling Rate de un ratón?',
    answer:
      'Es la frecuencia con la que el ratón informa de su posición al ordenador, medida en Hz. Un polling rate de 1000Hz significa que el ratón envía datos cada 1 milisegundo, proporcionando un movimiento mucho más fluido.',
  },
  {
    question: '¿Por qué mi test no llega a 1000Hz constantes?',
    answer:
      'El navegador solo puede medir el polling rate cuando el ratón está en movimiento. Si lo mueves despacio o tu CPU está muy ocupada, la medición puede fluctuar. Mueve el ratón en círculos rápidos para obtener el pico máximo real.',
  },
  {
    question: '¿Es mejor tener el polling rate más alto posible?',
    answer:
      'Generalmente sí para gaming (1000Hz o más), ya que reduce el lag. Sin embargo, tasas extremadamente altas (4000Hz o 8000Hz) consumen muchos recursos de CPU y no todos los juegos están optimizados para ello.',
  },
  {
    question: '¿Cómo afecta la tasa de refresco del monitor al ratón?',
    answer:
      'Si tienes un monitor de 144Hz o 240Hz, un polling rate bajo (125Hz) hará que el puntero se vea a saltos. Para monitores de alta frecuencia, es imprescindible usar al menos 500Hz o 1000Hz.',
  },
];

const howToData = [
  {
    name: 'Preparar el área de test',
    text: 'Sitúa el cursor dentro de la zona de captura de la herramienta.',
  },
  {
    name: 'Mover el ratón rápidamente',
    text: 'Realiza movimientos circulares rápidos y amplios. La herramienta calculará los intervalos entre cada evento mousemove enviado por el hardware.',
  },
  {
    name: 'Observar el gráfico de estabilidad',
    text: 'Revisa si la línea de Hz es constante o si tiene caídas bruscas, lo que podría indicar interferencias en ratones inalámbricos o problemas de CPU.',
  },
  {
    name: 'Analizar el tiempo de respuesta',
    text: 'Verifica el Delay medio en milisegundos. Un buen ratón gaming debe mantenerse cerca de 1ms de latencia media.',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Guía Definitiva sobre Polling Rate (tasa de sondeo)', level: 2 },
    {
      type: 'paragraph',
      html: 'Cuando mueves tu ratón físico sobre la alfombrilla, ese movimiento analógico debe traducirse a señales digitales que tu ordenador entienda. El <strong>Polling Rate</strong> o Tasa de Sondeo es la frecuencia con la que el ratón "reporta" su posición al PC. Se mide en Hercios (Hz).',
    },
    { type: 'title', text: 'Niveles de Polling Rate y sus usos', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> -El ratón informa cada 8 milisegundos. Perfecto para uso de oficina, pero se nota a tirones en monitores de 144Hz. <strong>1000 Hz</strong> -El estándar de oro del gaming: informa cada 1 ms. Movimiento fluido y sin retraso perceptible. <strong>8000 Hz</strong> -Tecnología punta (Razer, Logitech). Informa cada 0.125 ms, pero requiere una CPU potente.',
    },
    { type: 'title', text: '¿Por qué mis Hz fluctúan?', level: 3 },
    {
      type: 'paragraph',
      html: 'Es completamente normal. La mayoría de ratones modernos tienen un polling rate dinámico para ahorrar energía. Si mueves el ratón despacio, enviará menos reportes porque hay menos datos nuevos. Solo cuando haces movimientos rápidos y continuos el sensor alcanza su pico máximo real.',
    },
    { type: 'title', text: 'Polling Rate vs DPI: La gran confusión', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong> es la sensibilidad: cuántos píxeles se mueve el cursor por cada pulgada de movimiento físico. <strong>Hz (Polling Rate)</strong> es la frecuencia de actualización: con qué suavidad y actualidad se reporta ese movimiento. Puedes tener 16.000 DPI con 125 Hz y el movimiento será lento e impreciso. Los dos parámetros son independientes y complementarios.',
    },
  ],
  ui: {
    badge: 'Mouse Test',
    title: 'Polling Rate Checker',
    description: 'Mueve el ratón en círculos rápidos para medir los Hz.',
    labelAvg: 'Promedio',
    labelPeak: 'Pico',
    placeholder: 'Mueve el ratón aquí',
  },
};
