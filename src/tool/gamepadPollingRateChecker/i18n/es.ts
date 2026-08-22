import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'comprobador-tasa-sondeo-mando-hertzios';
const title = 'Comprobador de Polling Rate y Hertzios para Mandos';
const description = 'Mide la frecuencia de refresco captada en navegador, el intervalo entre actualizaciones y la estabilidad de tiempo de tu mando por USB o Bluetooth.';

const faq = [
  {
    question: '¿Qué mide exactamente este comprobador de tasa de sondeo de mandos?',
    answer: 'Mide las variaciones de tiempo de la Gamepad API en el navegador mientras mueves un joystick analógico. Los hertzios mostrados representan la frecuencia observada en la página y no una medición eléctrica directa del bus USB.',
  },
  {
    question: '¿Puede el navegador certificar si un mando funciona a 1000 Hz?',
    answer: 'Puede verificar si las actualizaciones llegan de forma fluida y constante a la página, pero no certifica un overclocking de USB a nivel de hardware. Los temporizadores del navegador y el sistema operativo pueden agrupar eventos.',
  },
  {
    question: '¿Por qué es necesario mover el joystick en círculos?',
    answer: 'El movimiento circular continuo hace cambiar ambos ejes de forma constante y genera un flujo continuo de estados. Dejar el joystick quieto no produce suficientes eventos de cambio para una medición estable.',
  },
  {
    question: '¿Se puede comparar el rendimiento entre USB y Bluetooth?',
    answer: 'Sí, realiza la prueba con la misma duración y movimiento circular en ambas conexiones dentro del mismo navegador para comparar la frecuencia observada, el intervalo y la variación en milisegundos.',
  },
];

const howTo = [
  {
    name: 'Conectar y activar el mando',
    text: 'Conecta el mando por cable USB o Bluetooth y pulsa un botón para que el navegador lo detecte mediante la Gamepad API.',
  },
  {
    name: 'Seleccionar dispositivo y ventana de tiempo',
    text: 'Elige el mando deseado en el desplegable y selecciona una duración de diez segundos para una medición inicial equilibrada.',
  },
  {
    name: 'Mover un joystick en círculos',
    text: 'Inicia el trazado y gira el joystick izquierdo de forma continua hasta que el anillo de progreso complete la vuelta.',
  },
  {
    name: 'Analizar la tasa observada y la estabilidad',
    text: 'Revisa los hertzios medios, el intervalo en milisegundos y el jitter, y repite la prueba en las mismas condiciones si lo necesitas.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas frecuentes sobre la tasa de sondeo en mandos',
  faq,
  bibliographyTitle: 'Referencias técnicas sobre la Gamepad API',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Mide la tasa de actualización de tu mando en el navegador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta utilidad monitoriza las marca de tiempo de alta resolución asociadas al mando seleccionado mientras el joystick analógico está en movimiento. Descarta intervalos anómalos, calcula el tiempo medio entre informes y convierte ese valor en hertzios observados (1000 dividido entre los milisegundos). Todo el análisis se ejecuta localmente en la página.',
    },
    {
      type: 'table',
      headers: ['Lectura', 'Qué indica este valor', 'Qué no demuestra por sí solo'],
      rows: [
        ['Tasa observada', 'Frecuencia de informes leídos por la página cada segundo', 'El polling rate eléctrico directo del puerto USB'],
        ['Intervalo medio', 'Tiempo promedio transcurrido entre actualizaciones', 'El latencia total de entrada hasta la pantalla'],
        ['Jitter o variación', 'Diferencia de tiempo entre los percentiles 5 y 95', 'Un fallo de hardware definitivo por sí solo'],
        ['Nivel de confianza', 'Consistencia y volumen de datos obtenidos en la prueba', 'Una precisión de laboratorio de calibración industrial'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo realizar una prueba de hertzios repetible y fiable',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cierra tareas pesadas en segundo plano, mantén esta pestaña enfocada y mueve el mismo joystick realizando círculos amplios y constantes durante cada toma. Utiliza el mismo navegador y la misma ventana de tiempo al comparar firmwares, modos de conexión o ajustes de sistema operativo.',
    },
    {
      type: 'tip',
      title: 'Compara siempre bajo las mismas condiciones',
      html: 'Realiza al menos dos pasadas tras cambiar de cable, adaptador Bluetooth o puerto USB. Un pico aislado es menos útil que una tasa sostenida con bajo nivel de jitter.',
    },
    {
      type: 'title',
      text: 'Por qué esta prueba no mide el input lag total',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La Gamepad API expone los datos del controlador después de que el sistema operativo y el navegador los hayan procesado. No mide la respuesta eléctrica del cable ni el tiempo de renderizado de la pantalla. El intervalo observado es ideal para diagnósticos comparativos en web pero no debe confundirse con la latencia total del sistema.',
    },
  ],
  ui: {
    privacyNote: 'Procesamiento de señal 100% local',
    stepConnect: 'Conecta y pulsa un botón',
    stepMove: 'Mueve un joystick en círculos',
    stepRead: 'Compara frecuencia y estabilidad',
    deviceLabel: 'Mando activo detectado',
    devicePlaceholder: 'Pulsa cualquier botón del mando para detectarlo',
    deviceFallback: 'Mando conectado',
    durationLabel: 'Ventana de prueba',
    durationFive: '5 seg',
    durationTen: '10 seg',
    durationTwenty: '20 seg',
    startAction: 'Iniciar prueba',
    stopAction: 'Detener',
    resetAction: 'Reiniciar',
    orbitInstruction: 'Gira el joystick izquierdo en círculos durante la medición',
    traceLabel: 'Traza de tiempo en vivo',
    observedRateLabel: 'Frecuencia observada',
    intervalLabel: 'Intervalo medio',
    jitterLabel: 'Variación (Jitter)',
    samplesLabel: 'Muestras válidas',
    confidenceLabel: 'Fiabilidad del test',
    confidenceLow: 'Baja',
    confidenceMedium: 'Media',
    confidenceHigh: 'Alta',
    statusWaiting: 'Esperando a que conectes o actives un mando',
    statusReady: 'Mando listo. Pulsa iniciar con la mano preparada en el joystick.',
    statusMeasuring: 'Registrando marcas de tiempo en tiempo real',
    statusNeedsMovement: 'Gira el joystick con círculos más amplios para recoger cambios',
    statusComplete: 'Prueba completada. Repite en las mismas condiciones para comparar.',
    statusUnsupported: 'Tu navegador no admite la Gamepad API',
    statusDisconnected: 'Sin mando activo. Conecta uno y pulsa cualquier botón.',
    statusStopped: 'Prueba detenida. El resultado parcial se mantiene visible.',
    limitHeading: 'Límite técnico de medición en navegador',
    limitBody: 'Esta herramienta mide las actualizaciones visibles mediante la Gamepad API. No certifica la tasa eléctrica del puerto USB ni la latencia de renderizado.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'intervalos',
    progressLabel: 'Progreso de la medición',
  },
};
