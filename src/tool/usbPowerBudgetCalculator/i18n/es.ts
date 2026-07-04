import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-presupuesto-energia-usb';
const title = 'Calculadora de Presupuesto de Energía USB';
const description = 'Comprueba si un puerto USB, cargador, hub, cable o perfil USB-C PD puede alimentar tus dispositivos de forma segura tras considerar el margen de reserva y la caída de tensión del cable.';

const faqData = [
  {
    question: '¿Cómo sé si un puerto USB puede alimentar mi dispositivo?',
    answer: 'Compara la potencia total del dispositivo con la potencia de la fuente USB, reserva un margen de seguridad y estima la caída de tensión del cable. Una configuración puede fallar incluso cuando los vatios nominales parecen altos si el cable es largo, fino o transporta alta corriente a 5 voltios.',
  },
  {
    question: '¿Por qué importa la longitud del cable para la alimentación USB?',
    answer: 'La corriente que fluye por el cobre crea una caída de tensión. Los cables largos y los conductores finos tienen más resistencia, por lo que el dispositivo puede recibir menos tensión de la que proporciona el cargador. Esto es especialmente importante para placas Raspberry Pi, discos duros, tiras LED, docks y hubs autoalimentados por bus.',
  },
  {
    question: '¿Qué margen de reserva debo usar?',
    answer: 'Usa al menos un 20 por ciento para electrónica normal, un 30 por ciento para motores, unidades, radios o placas con cargas de ráfaga, y más si la calidad del adaptador es desconocida o el dispositivo debe funcionar de forma continua.',
  },
  {
    question: '¿Puede esto reemplazar las pruebas de negociación USB-C PD?',
    answer: 'No. La calculadora verifica el presupuesto eléctrico. No verifica si un cargador, e-marker de cable, dispositivo o hub negocia realmente un perfil de Power Delivery específico.',
  },
];

const howToData = [
  { name: 'Elige un perfil de fuente', text: 'Selecciona un perfil USB o USB-C PD común, o edita la tensión y corriente manualmente.' },
  { name: 'Describe el cable', text: 'Introduce la longitud del cable y el calibre del conductor. Los cables finos de alto AWG causan más caída de tensión.' },
  { name: 'Añade la carga', text: 'Introduce una carga de dispositivo en vatios y el número de dispositivos que comparten la misma fuente.' },
  { name: 'Lee el estado', text: 'Usa el estado, la caída del cable, la tensión final, la utilización y el margen para decidir si la configuración es segura.' },
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

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'La energía USB es un presupuesto, no una etiqueta', level: 2 },
    {
      type: 'paragraph',
      html: 'Un cargador USB marcado como 15 W, 45 W o 100 W describe lo que la fuente puede ofrecer en condiciones ideales. Tu dispositivo solo ve el resultado tras la negociación del protocolo, los límites de corriente, la resistencia del cable, la calidad del conector, las pérdidas del hub y los picos de carga. Esta calculadora se centra en la pregunta eléctrica práctica: tras la caída del cable y el margen de reserva, ¿queda suficiente energía para el hardware que quieres usar?',
    },
    {
      type: 'stats',
      items: [
        { label: 'Corriente predeterminada USB 2.0', value: '0,5 A' },
        { label: 'Máximo predeterminado USB-C a 5 V', value: '3 A' },
        { label: 'Reserva recomendada', value: '20%+' },
      ],
    },
    { type: 'title', text: 'Cómo interpretar el resultado', level: 3 },
    {
      type: 'table',
      headers: ['Estado', 'Significado', 'Mejor paso siguiente'],
      rows: [
        ['Seguro', 'La carga encaja dentro de la capacidad de la fuente tras la reserva seleccionada y la tensión estimada del dispositivo se mantiene saludable.', 'Usa la configuración, pero vigila el calor si el adaptador es pequeño o está encerrado.'],
        ['Ajustado', 'La carga está cerca del límite reservado o la caída del cable empieza a ser significativa.', 'Acorta el cable, elige conductores más gruesos, reduce la carga o pasa a un perfil de mayor potencia.'],
        ['Sobrepresupuesto', 'La carga supera la potencia útil de la fuente o la tensión en el dispositivo probablemente sea demasiado baja.', 'Usa un cargador más potente, un hub alimentado, un cable más corto o un dispositivo que negocie una tensión USB-C PD más alta.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Cuando los vatios son suficientes pero el dispositivo aún se reinicia',
      html: '<p>La corriente de arranque puede ser mucho mayor que la potencia media impresa en la etiqueta del dispositivo. Una fuente de 5 V pierde tensión más rápido que un perfil PD de 20 V para la misma potencia porque debe transportar más corriente. Muchos cables baratos usan conductores de potencia finos incluso cuando la cubierta exterior parece gruesa, y los hubs autoalimentados por bus comparten un presupuesto de subida entre todos los dispositivos conectados.</p>',
    },
    { type: 'title', text: 'Caída de tensión del cable en términos simples', level: 3 },
    {
      type: 'paragraph',
      html: 'La caída de tensión es la pérdida creada cuando la corriente fluye a través de la resistencia del cable. La alimentación USB tiene dos conductores en el camino de potencia, por lo que la calculadora usa la longitud de ida y vuelta. Un cable de un metro equivale eléctricamente a dos metros de cobre para el bucle de potencia. Los números AWG más bajos son más gruesos y generalmente mejores para cargas de alta corriente.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Cable corto y grueso', description: 'Ideal para placas Raspberry Pi, carcasas SSD, kits de desarrollo y docks USB-C que consumen corriente de ráfaga.' },
        { title: 'Cable largo y fino', description: 'Aceptable para sensores de bajo consumo o carga lenta, pero arriesgado para unidades, cargas LED y placas de computación.' },
        { title: 'PD de mayor tensión', description: 'Reduce la corriente para la misma potencia, lo que disminuye la pérdida del cable, pero solo si la fuente, el cable y el dispositivo lo negocian.' },
      ],
    },
    {
      type: 'tip',
      title: 'Regla práctica',
      html: 'Si la calculadora dice que la configuración está ajustada, trátalo como una advertencia de campo. Los fallos USB a menudo aparecen como desconexiones aleatorias, caídas de tensión, carga lenta, audio con ruido o errores de almacenamiento antes de parecer un problema claro de alimentación.',
    },
    {
      type: 'summary',
      title: 'Para qué sirve mejor esta calculadora',
      items: [
        'Planificar hubs USB, ordenadores de placa única, unidades externas, placas de desarrollo, luces, ventiladores y pequeñas configuraciones de laboratorio.',
        'Comparar perfiles de fuente USB 2.0, USB 3.x, USB-C y USB Power Delivery.',
        'Estimar si un cable es demasiado largo o demasiado fino para una carga.',
        'Elegir una reserva sensata antes de comprar un cargador o hub alimentado.',
      ],
    },
  ],
  ui: {
    profileLabel: 'Perfil de fuente USB',
    metricUnits: 'Métrico',
    imperialUnits: 'EE. UU.',
    voltageLabel: 'Tensión de fuente (V)',
    currentLabel: 'Corriente de fuente (A)',
    cableLengthLabel: 'Longitud del cable',
    wireGaugeLabel: 'Calibre del cable de potencia',
    deviceLoadLabel: 'Carga por dispositivo (W)',
    devicesLabel: 'Dispositivos',
    headroomLabel: 'Margen de reserva (%)',
    sourcePower: 'Potencia de fuente',
    requiredPower: 'Potencia requerida',
    cableDrop: 'Caída del cable',
    deviceVoltage: 'Tensión del dispositivo',
    headroom: 'Margen',
    utilization: 'Utilización',
    safeStatus: 'El presupuesto de energía parece seguro',
    tightStatus: 'El presupuesto de energía está ajustado',
    overStatus: 'Sobrepresupuesto o riesgo de caída de tensión',
    safeAdvice: 'La carga encaja con el margen seleccionado. Usa un cable de calidad y comprueba el calor en funcionamientos largos.',
    tightAdvice: 'Estás cerca del límite. Reduce la longitud del cable, usa conductores más gruesos, baja la carga o selecciona un perfil más potente.',
    overAdvice: 'Es probable que esta configuración sufra caídas de tensión o limitación. Usa un hub alimentado, un adaptador más potente o un perfil USB-C PD de mayor tensión.',
    busLane: 'Fuente USB',
    loadLane: 'Carga del dispositivo',
    cableLane: 'caída',
    boardEyebrow: 'Ruta de energía USB en vivo',
    sourceSocket: 'Conector de fuente',
    deviceSocket: 'Carga de hardware',
    energyFlow: 'flujo de energía',
    reservedLabel: 'utilizable tras reserva',
  },
};
