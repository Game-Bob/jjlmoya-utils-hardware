import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-teclado';
const title = 'Test de Teclado y Ghosting Online';
const description = 'Comprueba si tu teclado sufre de Ghosting o Key Jamming. Visualizador de teclas en tiempo real y contador N-Key Rollover.';

const faqData = [
  {
    question: '¿Qué es el Ghosting en un teclado?',
    answer: 'Es un defecto que ocurre cuando pulsas varias teclas a la vez y el ordenador no registra alguna de ellas. Se debe a limitaciones en la matriz eléctrica interna del teclado que no puede procesar ciertas combinaciones.',
  },
  {
    question: '¿Qué significa N-Key Rollover (NKRO)?',
    answer: 'NKRO significa que el teclado puede registrar tantas teclas como puedas pulsar simultáneamente sin fallar. Es una característica premium, común en teclados mecánicos de alta gama y gaming.',
  },
  {
    question: '¿Por qué mi teclado falla al pulsar 3 teclas a la vez?',
    answer: 'La mayoría de teclados de oficina baratos tienen un rollover de 2 o 3 teclas (2-Key Rollover). Esto es suficiente para escribir, pero insuficiente para gaming intensivo o atajos complejos.',
  },
  {
    question: '¿Cómo puedo arreglar una tecla que no responde?',
    answer: 'Si el test no detecta la pulsación, puede ser por suciedad bajo el switch, un fallo en el contacto eléctrico o el cable dañado. Intenta limpiar el teclado con aire comprimido antes de darlo por perdido.',
  },
];

const howToData = [
  {
    name: 'Enfocar el visualizador',
    text: 'Haz clic en cualquier parte de la página para asegurar que el navegador tenga el foco y pueda capturar las pulsaciones de hardware.',
  },
  {
    name: 'Realizar el test de respuesta',
    text: 'Presiona cada tecla del teclado una por una. La tecla correspondiente en pantalla se iluminará en verde si funciona correctamente.',
  },
  {
    name: 'Comprobar el ghosting',
    text: 'Pulsa varias teclas comunes de gaming (W, A, S, D, Espacio, Shift) a la vez para ver si se bloquean o si todas se iluminan.',
  },
  {
    name: 'Verificar el rollover máximo',
    text: 'Intenta pulsar tantas teclas como puedas con ambas manos y observa el contador de máxima pulsación simultánea.',
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

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Test de Teclado Online: Detecta Ghosting y N-Key Rollover',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una herramienta interactiva para diagnóstico de teclados. Verifica si tu periférico sufre de ghosting, jamming o limitaciones de rollover. Visualmente clara con soporte para todos los tipos de teclado.',
    },
    {
      type: 'title',
      text: '¿Qué es el Ghosting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El ghosting ocurre cuando pulsas una combinación específica de teclas y el teclado registra una pulsación fantasma que no realizaste. Esto se debe a limitaciones en la matriz de circuitos internos.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover y Rollover Máximo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Permite registrar todas las teclas pulsadas simultáneamente. <strong>6KRO:</strong> Límite del estándar USB antiguo. <strong>2-3KRO:</strong> Común en teclados baratos, suficiente para escribir.',
    },
    {
      type: 'title',
      text: 'Teclados Mecánicos vs Membrana',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los teclados mecánicos tienen switches individuales con diodos aislados, eliminando ghosting. Los de membrana comparten pistas conductoras, causando fallos en combinaciones simultáneas.',
    },
  ],
  ui: {
    badge: 'Input Test',
    title: 'Test de Teclado y Ghosting',
    description: 'Verifica el N-Key Rollover y detecta teclas fallidas.',
    simultaneousLabel: 'Simultáneas',
    eventLogLabel: 'Log de Eventos',
    resetBtn: 'Reiniciar',
  },
};
