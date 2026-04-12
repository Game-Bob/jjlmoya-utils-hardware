import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';

const slug = 'test-mando';
const title = 'Test de Mando y Gamepad Online';
const description = 'Prueba tu controlador de Xbox, PlayStation o PC. Visualiza zonas muertas, drift de joysticks y botones.';

const faqData = [
  {
    question: '¿Qué es el Drift en los joysticks?',
    answer: 'El drift ocurre cuando el mando registra movimiento sin que estés tocando el joystick. Se debe al desgaste de los potenciómetros internos, que envían una señal eléctrica falsa hacia una dirección constante.',
  },
  {
    question: '¿Cómo puedo arreglar el drift por software?',
    answer: 'Si el drift es leve, puedes configurar una "Zona Muerta" (Deadzone) mayor en los ajustes de tus juegos. Esto ignora los movimientos pequeños del joystick en el centro.',
  },
  {
    question: '¿Es compatible con mandos de PS5, Xbox y Switch?',
    answer: 'Sí. Nuestra herramienta utiliza la Gamepad API estándar de los navegadores modernos, lo que permite detectar casi cualquier mando conectado por USB o Bluetooth, incluidos DualSense, DualShock 4 y Xbox Controllers.',
  },
  {
    question: '¿Por qué el navegador no detecta mi mando?',
    answer: 'Por seguridad, los navegadores solo activan el mando tras la primera pulsación de un botón. Si no aparece, pulsa cualquier botón (como el botón A o X) y asegúrate de no estar en modo incógnito estricto.',
  },
];

const howToData = [
  {
    name: 'Conectar el controlador',
    text: 'Enchufa tu mando por USB o emparéjalo por Bluetooth con tu ordenador.',
  },
  {
    name: 'Activar la detección',
    text: 'Mueve los joysticks o pulsa cualquier botón para que el navegador reconozca el dispositivo conectado.',
  },
  {
    name: 'Test de zonas muertas',
    text: 'Suelta los joysticks y observa los ejes en pantalla (Axis). Si los valores no están en 0.0000, tienes un ligero drift.',
  },
  {
    name: 'Verificar botones y vibración',
    text: 'Presiona cada botón y gatillo. Los indicadores visuales deben encenderse y, si tu mando lo soporta, puedes probar el motor de vibración.',
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

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias Técnicas',
  bibliography: [
    {
      name: 'Gamepad API Standard - W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
    {
      name: 'Vibration API - MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Test de Mando Online: Detecta Drift y Problemas de Joystick',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Herramienta gratuita para probar mandos de Xbox, PlayStation, Switch y otros controladores. Visualiza zonas muertas, detecta drift y prueba vibración.',
    },
    {
      type: 'title',
      text: 'Qué es el Drift en Joysticks',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El drift es un defecto común en los joysticks analógicos donde el stick registra movimiento sin que lo toques. Es causado por el desgaste de los potenciómetros internos.',
    },
    {
      type: 'title',
      text: 'Compatibilidad con Mandos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Compatible con Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro y prácticamente cualquier mando USB o Bluetooth moderno.',
    },
  ],
  ui: {
    badge: 'Test de Entrada',
    title: 'Test de Mando y Gamepad',
    description: 'Prueba tu controlador y detecta problemas.',
    connectionMessage: 'Conecta tu dispositivo USB o Bluetooth',
    connectionStatus: 'Conectado',
    axisLabel: 'Ejes',
    buttonsLabel: 'Botones',
    vibrationTitle: 'Test de Vibración',
    vibrationDescription: 'Requiere soporte del navegador y mando compatible.',
    vibrationLow: 'Grave (Rumble)',
    vibrationHigh: 'Agudo (Buzz)',
    eventHistoryTitle: 'Historial de Eventos',
    eventHistoryClear: 'Limpiar',
    eventWaiting: 'Esperando eventos...',
    gameStartBtn: 'EMPEZAR DESAFÍO',
    gameControllerWarning: 'Conecta un mando o usa el teclado',
    gameTimer: 'Cronómetro',
    gameScore: 'Puntuación',
    gameInstruction: 'Pulsa rápido',
    gameCompleted: 'Desafío Completado',
    gameNewRecord: 'NUEVO RÉCORD',
    gameRestartBtn: 'Reintentar',
    gameFeedback: 'Eres una leyenda de los botones',
    gameIntroTitlePre: '¿Reflejos ',
    gameIntroHighlight: 'Pro Gamer',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Pon a prueba la latencia de tu mando y tu velocidad de reacción. Tienes ',
    gameIntroDescSeconds: '30 segundos',
    gameIntroDescPost: ' para dominar los botones.',
    gameShareBtn: 'COMPARTIR RANGO',
    gameLogConnected: 'Conectado',
    gameLogDisconnected: 'Desconectado',
    gameLogCleared: 'Log limpiado...',
    gameLogBtnPrefix: 'Botón',
    gameVibNotSupported: 'Vibración no soportada.',
    gameVibLow: 'Grave',
    gameVibHigh: 'Agudo',
    gameMoveStick: 'MOVER STICK',
    gamePress: 'PULSA',
    rankLegendaryName: 'LEGENDARIO',
    rankLegendaryDesc: 'Tus dedos se mueven a la velocidad del sonido.',
    rankLegendaryFlavor: 'Mi mando vuela!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'Tienes reflejos de acero y un mando bien calibrado.',
    rankProFlavor: 'Mi mando vuela!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'No está mal, pero para el competitivo te falta calle.',
    rankGamerFlavor: 'Casi lo tengo!',
    rankNoobName: 'MANCO',
    rankNoobDesc: '¿Seguro que tienes el mando encendido?',
    rankNoobFlavor: 'El mando me tiene manía!',
    gameShareText: '¿Me superas?',
    gameShareScorePrefix: 'Hice',
    gameShareScoreSuffix: 'aciertos',
    gameShareTitle: 'Test de Mando Online',
  },
};
