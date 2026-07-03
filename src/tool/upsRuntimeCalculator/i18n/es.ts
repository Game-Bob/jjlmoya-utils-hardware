import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-autonomia-sai';
const title = 'Calculadora de Autonomía de SAI';
const description = 'Calcula la autonomía del SAI, la carga total protegida, los vatios-hora útiles y el tamaño en VA recomendado para PCs, monitores, routers, NAS y hardware de laboratorio doméstico.';

const faqData = [
  {
    question: '¿Cómo se calcula la autonomía de un SAI?',
    answer: 'Suma el consumo en vatios de cada dispositivo conectado al SAI, multiplica los vatios-hora de la batería por la eficiencia del inversor, réstale la reserva que quieras conservar y divide los vatios-hora útiles entre los vatios de carga. El resultado en horas se multiplica por 60 para obtener los minutos.',
  },
  {
    question: '¿Por qué la autonomía real difiere del cálculo estimado?',
    answer: 'La autonomía varía con la edad de la batería, la temperatura, la tasa de descarga, la eficiencia del inversor, los picos de carga y la tensión de corte del fabricante. Toma el resultado como una estimación para planificar y verifícalo con una prueba de apagado controlada.',
  },
  {
    question: '¿Debo dimensionar un SAI por vatios o por VA?',
    answer: 'Comprueba ambos. Los vatios indican la potencia real que el SAI puede entregar, mientras que los VA incluyen el factor de potencia. El SAI debe superar tu carga en vatios y disponer de suficiente margen en VA para el equipo conectado.',
  },
  {
    question: '¿Cuánto margen debo dejar en el SAI?',
    answer: 'Un objetivo práctico es mantener la carga normal por debajo del 70-80% de la potencia nominal en vatios del SAI. Esto deja margen para picos de arranque, envejecimiento de la batería y futuros dispositivos.',
  },
  {
    question: '¿Puedo conectar impresoras o calefactores a un SAI?',
    answer: 'Evita impresoras láser, calefactores y otras cargas de alto pico a menos que el SAI esté específicamente indicado para ello. Pueden sobrecargar el inversor y reducir drásticamente la autonomía.',
  },
];

const howToData = [
  {
    name: 'Enumera los dispositivos protegidos',
    text: 'Introduce los dispositivos que deben permanecer encendidos durante un apagón, como el ordenador, monitor, router, módem, NAS y switch de red.',
  },
  {
    name: 'Introduce el consumo real en vatios',
    text: 'Usa la medida real de la toma de pared siempre que sea posible. Si solo tienes la potencia nominal de la fuente de alimentación, redúcela a la carga operativa esperada en lugar de usar el valor máximo de la etiqueta.',
  },
  {
    name: 'Configura la capacidad de la batería y los parámetros',
    text: 'Introduce los vatios-hora de la batería del SAI, la eficiencia del inversor, el factor de potencia y el porcentaje de reserva que quieres conservar para un apagado seguro.',
  },
  {
    name: 'Lee la autonomía y la recomendación de VA',
    text: 'Usa los minutos estimados y los VA recomendados como guía de compra o configuración, y luego valida la instalación con un simulacro de apagón seguro.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Autonomía de SAI: Estima el Tiempo de Respaldo de Batería',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Estimar la autonomía de un SAI responde a dos preguntas prácticas: cuánto tiempo puede mantenerse encendido tu hardware durante un corte de luz, y si el SAI tiene el tamaño suficiente para la carga conectada. Esta calculadora combina el consumo en vatios de los dispositivos, los vatios-hora de la batería, la eficiencia del inversor, el factor de potencia y la reserva de apagado para que el resultado se acerque más a una planificación real que a una simple división de la capacidad de la batería.',
    },
    {
      type: 'title',
      text: 'La Fórmula de la Autonomía',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La autonomía estimada en horas es <strong>vatios-hora útiles de batería divididos entre la carga total en W</strong>. Los vatios-hora útiles no son la capacidad impresa de la batería: deben ajustarse por las pérdidas del inversor y la reserva que se desea mantener para un apagado controlado. Por ejemplo, una batería de 432 Wh con un 86% de eficiencia y un 20% de reserva proporciona unos 297 Wh de energía útil.',
    },
    {
      type: 'table',
      headers: ['Parámetro', 'Por qué importa', 'Orientación práctica'],
      rows: [
        ['Vatios de carga', 'Controla directamente la autonomía', 'Mide con un medidor de pared siempre que sea posible, especialmente en PCs gaming y sistemas NAS.'],
        ['Wh de batería', 'Define la reserva de energía', 'Usa los datos del fabricante o la tensión nominal multiplicada por los amperios-hora.'],
        ['Eficiencia', 'Compensa las pérdidas del inversor', 'Un rango del 80-90% es razonable para muchos SAI de consumo.'],
        ['Factor de potencia', 'Convierte vatios a VA', 'Usa la especificación del SAI si se conoce; 0,6-0,8 es habitual en modelos básicos y de gama media.'],
        ['Reserva', 'Mantiene el margen de apagado', 'Entre un 10-25% es sensato para un apagado controlado de PC o servidor.'],
      ],
    },
    {
      type: 'title',
      text: '¿Cuánta Autonomía Necesitas?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 minutos: suficiente para soportar microcortes o apagar un ordenador de sobremesa de forma segura.',
        '10-20 minutos: útil para routers, módems, NAS y pequeños nodos de laboratorio doméstico.',
        '30+ minutos: mejor para continuidad de red, teletrabajo y ubicaciones con cortes frecuentes.',
        'Varias horas: normalmente requiere un sistema de baterías más grande, no solo un SAI de sobremesa.',
      ],
    },
    {
      type: 'title',
      text: 'Vatios frente a VA al Elegir un SAI',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los nombres de los productos SAI suelen anunciar los VA, pero la potencia en vatios es el límite real para el equipo conectado. Un SAI de 900 VA puede soportar solo 540 W, mientras que otro modelo de 900 VA puede llegar a 600 W o más. Comprueba ambas potencias y mantén el funcionamiento normal por debajo del máximo para evitar alarmas de sobrecarga, reducción de la vida útil de la batería y fallos de transferencia durante un corte.',
    },
    {
      type: 'title',
      text: 'Cargas que Distorsionan las Estimaciones de Autonomía',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Los PC gaming pueden pasar de un consumo bajo en reposo a un consumo alto de GPU en segundos.',
        'Los monitores varían mucho según el brillo, el modo HDR y el tamaño del panel.',
        'Los dispositivos NAS consumen más durante el arranque de discos y las reconstrucciones.',
        'Las impresoras láser, calefactores, bombas y compresores son malas cargas para un SAI salvo soporte específico.',
        'Las baterías viejas pueden ofrecer mucha menos autonomía de la que sugiere su capacidad original.',
      ],
    },
    {
      type: 'title',
      text: 'Lista de Verificación para una Prueba Segura',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Carga el SAI completamente antes de probar.',
        'Guarda el trabajo abierto y evita probar durante escrituras críticas o actualizaciones de firmware.',
        'Desenchufa la alimentación de pared, no el equipo, y observa el porcentaje de carga del SAI y la estimación de batería.',
        'Confirma que tu PC, NAS o servidor recibe la señal de apagado antes de que la batería se agote.',
        'Repite la prueba cada pocos meses porque las baterías de plomo-ácido de los SAI envejecen rápidamente.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Carga protegida',
    addDevice: 'Añadir dispositivo',
    deviceName: 'Dispositivo',
    watts: 'Vatios',
    remove: 'Eliminar dispositivo',
    batteryWh: 'Capacidad de la batería (Wh)',
    efficiency: 'Eficiencia del inversor',
    powerFactor: 'Factor de potencia',
    reserve: 'Reserva de apagado',
    totalLoad: 'Carga total',
    runtime: 'Autonomía estimada',
    recommendedUps: 'Tamaño recomendado',
    usableEnergy: 'Energía útil',
    minutes: 'min',
    hours: 'h',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'Parámetros del SAI',
    presetDesktop: 'PC de escritorio',
    presetMonitor: 'Monitor de 27 pulgadas',
    presetRouter: 'Router y módem',
    presetNas: 'NAS de dos bahías',
    percentUnit: '%',
    bandLight: 'ventana de respaldo cómoda con un SAI recomendado cercano a',
    bandBalanced: 'ventana de respaldo equilibrada con un SAI recomendado cercano a',
    bandHeavy: 'ventana de respaldo corta; considera una batería mayor o reduce la carga cercana a',
    summaryPrefix: 'Esta configuración tiene una',
  },
};
