import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';

const slug = 'estimador-salud-bateria';
const title = 'Calculadora de Salud de Batería de Litio';
const description =
  'Calcula el estado de salud (SoH) de tu batería de litio basándote en ciclos, voltaje y temperatura. Guía científica para maximizar la longevidad energética.';

const faqData = [
  {
    question: '¿Qué es la degradación química de las baterías?',
    answer:
      'Con cada ciclo de carga y descarga, las celdas de litio sufren microrroturas y acumulación de sedimentos químicos (S.E.I.) que reducen su capacidad de almacenar energía. Es un proceso inevitable pero que se puede ralentizar con buenos hábitos.',
  },
  {
    question: '¿Por qué se recomienda cargar hasta el 80%?',
    answer:
      'Las baterías de litio sufren más estrés en sus voltajes extremos (0% y 100%). Mantener la carga entre el 20% y el 80% puede triplicar la vida útil de la celda al reducir el calor y la presión interna.',
  },
  {
    question: '¿Cómo afecta el calor a la vida de la batería?',
    answer:
      'El calor es el enemigo número uno. Por cada 10 grados de aumento sobre la temperatura ambiente óptima (25 grados), la velocidad de degradación química se duplica aproximadamente.',
  },
  {
    question: '¿Qué es un ciclo de carga completo?',
    answer:
      'Un ciclo es el uso del 100% de la capacidad de la batería, pero no tiene por qué ser de una vez. Si usas el 50% hoy, la cargas, y usas el 50% mañana, habrás completado 1 ciclo total.',
  },
];

const howToData = [
  {
    name: 'Identificar la capacidad original',
    text: 'Busca en la caja de tu dispositivo o en la web del fabricante los mAh que tenía tu batería cuando era nueva.',
  },
  {
    name: 'Consultar ciclos actuales',
    text: 'Muchos sistemas (como iOS o Android 14) permiten ver cuántos ciclos de carga lleva acumulados la batería.',
  },
  {
    name: 'Introducir datos técnicos',
    text: 'Ajusta el voltaje actual, los ciclos y la temperatura para que nuestro motor de cálculo estime el SoH.',
  },
  {
    name: 'Analizar el diagnóstico',
    text: 'Consulta el porcentaje de salud. Si estás por debajo del 80%, es posible que empieces a notar caídas de rendimiento o apagones inesperados.',
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

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    {
      name: 'Journal of Power Sources',
      url: 'https://www.sciencedirect.com/journal/journal-of-power-sources',
    },
    {
      name: 'IEEE Xplore — Lithium-Ion Battery Life Prediction',
      url: 'https://ieeexplore.ieee.org/abstract/document/11090151',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'La química del tiempo: por qué mueren las baterías de litio', level: 2 },
    {
      type: 'paragraph',
      html: 'Una batería de iones de litio no es una caja estática de energía, sino un ecosistema químico dinámico en constante degradación desde el momento de su fabricación. Cada ciclo de carga y descarga, cada variación de temperatura y cada minuto en voltajes extremos contribuye a la formación de subproductos que dificultan el flujo de iones.',
    },
    { type: 'title', text: 'Mecanismos de degradación principales', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Capa SEI:</strong> la interfaz de electrolito sólido crece con el tiempo, consume litio activo y aumenta la resistencia interna. <strong>Oxidación del electrolito:</strong> voltajes superiores a 4.1V aceleran la oxidación y pueden hinchar la batería. <strong>Lithium Plating:</strong> cargar a baja temperatura deposita litio en forma metálica, creando dendritas que pueden perforar el separador.',
    },
    { type: 'title', text: 'El mito del 100%: por qué cargar toda la noche es un error', level: 3 },
    {
      type: 'paragraph',
      html: 'Para un ion de litio, estar al 100% de carga (4.2V) es un estado de alta tensión. Las investigaciones muestran que los ciclos de vida se duplican o triplican si se mantiene el dispositivo entre el <strong>20% y el 80%</strong>. Además, por cada 10°C por encima de los 25°C, la velocidad de degradación química se duplica aproximadamente.',
    },
    { type: 'title', text: 'Protocolo de supervivencia energética', level: 3 },
    {
      type: 'paragraph',
      html: 'Nunca cargues una batería por debajo de 0°C: el litio se deposita en el ánodo causando daños permanentes. La carga rápida genera calor localizado y estrés mecánico; úsala solo cuando sea estrictamente necesario. Para almacenamiento prolongado, guarda la batería al 50% y en frío.',
    },
  ],
  ui: {
    badge: 'Batería Li-Ion',
    title: 'Estimador de Salud de Batería',
    description: 'Diagnóstico técnico de degradación para celdas de Iones de Litio.',
    paramsTitle: 'Parámetros de Celda',
    voltageLabel: 'Voltaje Actual',
    cyclesLabel: 'Ciclos de Carga',
    tempLabel: 'Temperatura',
    voltageHint: 'Rango nominal: 3.0V (vacío) a 4.2V (lleno).',
    labelUsefulLife: 'Vida Útil',
    yearsPrefix: 'Est.',
    yearsSuffix: 'años',
    metricThermalStress: 'Estrés Térmico',
    metricVoltageStress: 'Estrés de Voltaje',
    metricLithiumPlating: 'Plating de Litio',
    statusExcelente: 'Estado Excelente',
    statusBueno: 'Estado Bueno',
    statusRegular: 'Estado Regular',
    statusCritico: 'Estado Crítico',
    indicatorTempNormal: 'Normal',
    indicatorTempCritical: 'Crítico',
    indicatorVoltageHigh: 'Alto',
    indicatorVoltageLow: 'Bajo',
    indicatorPlatingRisk: 'Alto Riesgo',
    indicatorPlatingOk: 'Sin Riesgo',
    recTemp: 'Reduce la temperatura o mejora la ventilación para evitar la oxidación del electrolito.',
    recVoltageHigh: 'Evita mantener la batería al 100% de carga (4.2V) por periodos prolongados.',
    recVoltageLow: 'Evita descargas profundas; los ciclos entre 20% y 80% duplican la vida útil.',
    recSohLow: 'La capacidad ha caído por debajo del estándar óptimo. Considera un reemplazo si la autonomía es insuficiente.',
    recDefault: 'Mantén los hábitos actuales, tu batería está en un rango de operación ideal.',
  },
};
