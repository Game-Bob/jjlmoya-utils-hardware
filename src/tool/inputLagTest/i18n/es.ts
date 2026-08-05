import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'medidor-input-lag';

const title = 'Medidor de Input Lag y Latencia de Pantalla';
const description = 'Prueba online de precisión para medir el input lag del sistema, latencia de teclado y retardo de renderizado gráfico mediante sincronización de fotogramas.';

const faqData = [
  {
    question: '¿Qué es el input lag y la latencia del sistema?',
    answer: 'El input lag es el intervalo de tiempo entre una acción física (clic de ratón o tecla) y la actualización visual visible en la pantalla.',
  },
  {
    question: '¿Cómo mide esta herramienta la latencia en el navegador?',
    answer: 'Utiliza performance.now() en eventos hardware (pointerdown, keydown) y calcula el retardo hasta la sincronización con requestAnimationFrame.',
  },
  {
    question: '¿Qué valores de input lag se consideran óptimos para jugar?',
    answer: 'Menos de 10ms es ultra rápido (esports competitivo). Entre 10ms y 20ms es rápido, de 20ms a 35ms es moderado y más de 35ms resulta notable.',
  },
  {
    question: '¿Cómo puedo reducir la latencia de entrada en PC?',
    answer: 'Aumenta la tasa de refresco del monitor, desactiva VSync, activa G-Sync o FreeSync, configura el ratón a 1000Hz o más y usa NVIDIA Reflex o AMD Anti-Lag.',
  },
];

const howToData = [
  {
    name: 'Seleccionar el modo de prueba',
    text: 'Elige entre Respuesta Instantánea, Latencia de Teclado o Reacción Visual.',
  },
  {
    name: 'Ejecutar pulsaciones de prueba',
    text: 'Haz clic en el área de prueba o pulsa teclas para capturar eventos de entrada.',
  },
  {
    name: 'Analizar estadísticas y fluctuación',
    text: 'Consulta la latencia media, mínima, máxima y la fluctuación o jitter.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latencia del Sistema',
  modeInstant: 'Respuesta Instantánea',
  modeKey: 'Latencia de Teclado',
  modeVisual: 'Reacción Visual',
  targetClickPrompt: 'Haz clic dentro de este cuadro para medir la latencia de entrada',
  targetKeyPrompt: 'Pulsa cualquier tecla para medir la latencia de teclado',
  targetWaitPrompt: 'Espera al fondo verde...',
  targetNowPrompt: '¡PULSA AHORA!',
  labelAvgLatency: 'Latencia Media',
  labelMinLatency: 'Latencia Mínima',
  labelMaxLatency: 'Latencia Máxima',
  labelJitter: 'Jitter (Desviación)',
  labelFps: 'FPS Actuales',
  labelFrameTime: 'Tiempo de Fotograma',
  labelSamples: 'Muestras',
  labelGrade: 'Clasificación',
  gradeUltraFast: 'Ultra Rápido (<10ms)',
  gradeFast: 'Rápido (10-20ms)',
  gradeModerate: 'Moderado (20-35ms)',
  gradeHigh: 'Alto (>35ms)',
  btnReset: 'Reiniciar Mediciones',
  btnCopyReport: 'Copiar Informe Benchmark',
  reportCopied: '¡Informe Copiado!',
  historyTitle: 'Mediciones Recientes',
  pipelineTitle: 'Desglose de Latencia del Pipeline de Hardware',
  distributionTitle: 'Distribución de Frecuencia (Campana de Gauss)',
  sampleCol: 'Muestra',
  typeCol: 'Tipo Entrada',
  latencyCol: 'Latencia Medida',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Medición de Input Lag y Latencia de Pantalla en PC y Consolas',
    },
    {
      type: 'paragraph',
      html: 'El input lag es el retardo entre la acción física del usuario y la representación en pantalla. Reducir esta latencia es fundamental en gaming competitivo para maximizar la velocidad de reacción.',
    },
    {
      type: 'stats',
      items: [
        { value: '< 10 ms', label: 'Objetivo Esports', trend: 'Rendimiento óptimo' },
        { value: '1000 Hz', label: 'Muestreo USB', trend: '1.0 ms intervalo' },
        { value: '240 Hz', label: 'Monitor Gaming', trend: '4.16 ms por fotograma' },
        { value: '16.6 ms', label: 'Base 60Hz', trend: 'Retardo estándar' },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: '¿Cómo Funciona la Medición de Latencia Client Side?',
      html: 'Esta herramienta mide en tiempo real el delta entre eventos de entrada y los ciclos de refresco de pantalla mediante la API performance.now() y requestAnimationFrame.',
    },
  ],
};
