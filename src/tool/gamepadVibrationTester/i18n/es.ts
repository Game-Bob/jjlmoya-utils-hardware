import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';

const slug = 'probador-vibracion-mando';
const title = 'Probador de Vibración de Mando Online';
const description =
  'Verifica el funcionamiento de los motores hápticos y vibración (Dual-Rumble) de tu mando en el navegador. Soporta Xbox, DualShock, DualSense y genéricos.';

const faqData = [
  {
    question: '¿Qué necesito para probar mi mando en la web?',
    answer:
      'Solo necesitas conectar tu mando al ordenador o móvil mediante un cable USB o emparejarlo por Bluetooth. Una vez enlazado, pulsa cualquier botón para que sea detectado.',
  },
  {
    question: '¿Funciona con cualquier modelo de mando?',
    answer:
      'La mayoría de mandos modernos de marcas reconocidas (como los de PlayStation o Xbox) son compatibles si tu dispositivo y sistema operativo lo permiten.',
  },
  {
    question: 'El lado derecho de mi mando vibra menos que el izquierdo, ¿es normal?',
    answer:
      'Sí, es completamente normal. Los mandos suelen tener un diseño asimétrico donde un lado se encarga de las vibraciones fuertes y profundas, y el otro de las vibraciones rápidas y sutiles.',
  },
  {
    question: '¿Gasta mucha batería realizar estas pruebas?',
    answer:
      'La vibración es una de las funciones que más energía consume en un mando inalámbrico. Realizar pruebas continuas y largas agotará la batería más rápido de lo habitual.',
  },
];

const howToData = [
  {
    name: 'Conecta y enciende tu mando',
    text: 'Enlaza tu mando al PC, Mac o móvil por cable USB o vía Bluetooth.',
  },
  {
    name: 'Pulsa un botón del Gamepad',
    text: 'Los navegadores requieren que pulses al menos un botón para que el mando se detecte y empiece la comunicación web.',
  },
  {
    name: 'Ajusta los motores de vibración',
    text: 'Configura la potencia del Motor Fuerte (Grave) y del Motor Fino (Agudo) de forma independiente.',
  },
  {
    name: 'Ejecuta los patrones',
    text: 'Pulsa uno de los presets o configura manualmente los parámetros y envía la señal para sentir cada componente.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    {
      name: 'Cómo funciona la vibración háptica — HobbyConsolas',
      url: 'https://www.hobbyconsolas.com/reportajes/como-funciona-vibracion-haptica-mando-dualsense-ps5-757673',
    },
    {
      name: 'Gamepad API — W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Cómo auditar la vibración de tu mando gaming', level: 2 },
    {
      type: 'paragraph',
      html: 'La respuesta háptica es uno de los elementos más envolventes del hardware gaming. Cuando el motor falla, los primeros síntomas suelen ser zumbidos anormales o vibraciones asimétricas. Diagnosticarlos a tiempo previene averías mayores.',
    },
    { type: 'title', text: '¿Por qué es importante hacer el test de vibración?', level: 3 },
    {
      type: 'paragraph',
      html: 'Al comprar un mando de segunda mano, al actualizar drivers o tras una caída, auditar los motores hápticos permite distinguir fallos físicos reales de problemas de software. Compatible con Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro y mandos USB genéricos.',
    },
    { type: 'title', text: 'Arquitectura Dual-Rumble vs. Actuadores Lineales', level: 3 },
    {
      type: 'paragraph',
      html: 'Los mandos clásicos (Xbox, DualShock) usan dos micromotores asimétricos: el izquierdo genera vibraciones graves y profundas; el derecho produce zumbidos agudos y rápidos. Los dispositivos avanzados como el DualSense usan actuadores lineales que simulan texturas y resistencia.',
    },
    { type: 'title', text: 'Guía de diagnóstico por síntomas', level: 3 },
    {
      type: 'paragraph',
      html: 'Activa cada motor de forma independiente al 100%. Si ambos suenan igual, el mando puede ser una réplica con un único motor. Si uno no responde, revisa la conexión antes de abrir el chasis. Prueba intensidades fraccionadas: los motores de calidad responden de forma gradual, no como un interruptor on/off.',
    },
  ],
  ui: {
    badge: 'Test de Vibración',
    title: 'Probador de Vibración de Mando',
    description: 'Control directo sobre el motor Dual-Rumble de tu gamepad.',
    deviceDisconnected: 'Mando Desconectado',
    deviceDisconnectedSub: 'Toca un botón en tu mando para comenzar',
    deviceFallback: 'Gamepad Enlazado',
    deviceConnectedSub: 'Conexión estable. Listo para testear.',
    noSupportWarning: "No detectamos soporte para Dual-Rumble en tu navegador. Usaremos la vibración básica genérica.",
    tabPresets: 'Presets Top',
    tabCustom: 'Precisión Pura',
    presetHeavyTitle: 'Golpe de Martillo',
    presetHeavyDesc: 'Motor pesado 300ms al máximo. Simula un golpe fuerte.',
    presetLightTitle: 'Zumbido de Abeja',
    presetLightDesc: 'Solo motor derecho activo. Ideal para detectar zumbidos extraños.',
    presetHeartbeatTitle: 'Corazón a Mil',
    presetHeartbeatDesc: 'Palpitaciones sutiles consecutivas. Perfecto para ver retenciones inerciales.',
    presetSongTitle: 'Ritmo Moneda',
    presetSongDesc: 'Simula el ruido de monedas consecutivas. Corto y táctil.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "El clásico de Queen en tus manos: pum, pum, ¡clap!",
    presetEarthquakeTitle: '¡Terremoto Máximo!',
    presetEarthquakeDesc: 'Ambos motores al 100% de fuerza explosiva. MUY intenso.',
    customStrongLabel: 'Fuerza Grave (Izquierda)',
    customWeakLabel: 'Fuerza Aguda (Derecha)',
    customDurationLabel: 'Duración del Pulso',
    btnSendSignal: 'ENVIAR SEÑAL AHORA',
  },
};
