import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-retardo-audio';
const title = 'Test de retardo de audio';
const description = 'Prueba el retardo percibido de audio en altavoces, auriculares, dispositivos Bluetooth y sincronización de vídeo con una secuencia de pulsos en el navegador.';

const faq = [
  {
    question: '¿Qué mide exactamente este test de retardo de audio?',
    answer: 'El modo de micrófono opcional estima el intervalo entre un pulso programado por el navegador y su captura por el micrófono. El modo manual ayuda a ajustar a oído la coincidencia visual y sonora. Ninguno de los dos sustituye a un sistema de medición de laboratorio.',
  },
  {
    question: '¿Puedo probar la latencia de Bluetooth sin usar micrófono?',
    answer: 'Sí. Inicia la secuencia de impulsos, selecciona el modo Bluetooth y desplaza el deslizador de alineación hasta que el destello visual y el clic sonoro parezcan simultáneos. El resultado se guarda como corrección de ajuste.',
  },
  {
    question: '¿Por qué el modo de micrófono solicita permiso de acceso?',
    answer: 'El navegador necesita escuchar el clic de prueba tras propagarse por la sala o la cadena de audio. Todo el procesamiento se realiza localmente en el navegador y no se envía ninguna grabación.',
  },
  {
    question: '¿Por qué la medición por micrófono puede variar?',
    answer: 'Las reflexiones de la habitación, el procesado del micrófono, el control automático de ganancia, los búferes del sistema operativo y la distancia al altavoz modifican el resultado. Debe interpretarse como una estimación de la configuración actual.',
  },
  {
    question: '¿Qué modo de prueba debo seleccionar?',
    answer: 'Elige Altavoces para la acústica de la sala, Auriculares por cable para una ruta analógica directa, Bluetooth para auriculares o altavoces inalámbricos, y Sincro de vídeo al comprobar un reproductor o pantalla.',
  },
  {
    question: '¿Se envía el audio de mi micrófono a algún servidor?',
    answer: 'No. El flujo del micrófono se analiza exclusivamente en memoria de forma local por la API Web Audio del navegador y la herramienta no sube ningún archivo de audio.',
  },
];

const howTo = [
  {
    name: 'Selecciona la ruta de reproducción',
    text: 'Elige altavoces, auriculares por cable, Bluetooth o sincronización de vídeo para adaptar el contexto de la prueba a tu equipo.',
  },
  {
    name: 'Comienza con la calibración manual',
    text: 'Pulsa Iniciar test y escucha el clic mientras observas el pulso visual cian. Ajusta el deslizador de alineación hasta percibir la coincidencia exacta.',
  },
  {
    name: 'Activa la medición con micrófono si lo necesitas',
    text: 'Haz clic en Activar micrófono, concede permiso, sitúa el micrófono en el punto de escucha habitual y vuelve a ejecutar la secuencia de pulsos.',
  },
  {
    name: 'Interpreta el resultado como estimación',
    text: 'Utiliza la latencia mediana y el indicador de confianza para comparar configuraciones. Repite la prueba si cambias de navegador, dispositivo o posición.',
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

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Test de retardo de audio para Bluetooth y sincronización de vídeo', level: 2 },
    {
      type: 'paragraph',
      html: 'Este test de retardo de audio en el navegador permite evaluar la diferencia temporal entre una señal visual y un estímulo sonoro en tu equipo actual. Resulta de gran utilidad para auriculares Bluetooth, altavoces inalámbricos, salidas analógicas por cable y pruebas de desincronización en vídeo. La herramienta genera un pulso sonoro local sin necesidad de descargar archivos de prueba.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Prueba inicial sin acceso al micrófono',
      badge: 'Privado por diseño',
      html: '<p>La prueba de pulso manual funciona sin activar el micrófono. Observa el marcador visual cian y escucha el clic sonoro, desplazando el control de alineación hasta que sientas ambos eventos simultáneos. Esto proporciona una corrección útil sin simular una precisión de laboratorio.</p>',
    },
    {
      type: 'title',
      text: 'Cómo medir la latencia de audio en Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Selecciona la opción Bluetooth y ajusta un nivel de volumen cómodo antes de comenzar.',
        'Ejecuta la secuencia de pulsos desde el mismo navegador y dispositivo que usas habitualmente.',
        'Compara el destello visual con el pulso sonoro en lugar de evaluar una pista musical continua.',
        'Mueve el deslizador de calibración hasta alinear ambas señales y anota la corrección en milisegundos.',
        'Repite la verificación si cambias de códec, sistema operativo, navegador o distancia de reproducción.',
      ],
    },
    {
      type: 'table',
      headers: ['Modo', 'Uso recomendado', 'Limitación principal'],
      rows: [
        ['Altavoces', 'Reproducción en sala y altavoces de TV', 'La distancia de la habitación y las reflexiones afectan la señal.'],
        ['Auriculares por cable', 'Conexión analógica directa', 'El micrófono puede no captar el sonido de unos auriculares cerrados.'],
        ['Bluetooth', 'Auriculares y altavoces inalámbricos', 'El búfer del códec varía según el dispositivo y la aplicación.'],
        ['Sincro de vídeo', 'Alineación entre pantalla y reproductor', 'El reproductor puede añadir su propio retardo de renderizado.'],
      ],
    },
    {
      type: 'title',
      text: 'Medición opcional mediante micrófono',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Al activar la entrada de micrófono, la herramienta analiza las muestras de audio para detectar el pico acústico correspondiente al pulso programado. El resultado emplea la mediana de las mediciones para evitar que un ruido aislado o una interrupción del sistema distorsione la cifra final. El nivel de confianza evalúa la dispersión entre percentiles.',
    },
    {
      type: 'tip',
      title: 'Sitúa el micrófono en la posición de escucha real',
      html: 'Para altavoces, coloca el micrófono donde te sientas habitualmente y mantén la estancia en silencio. En pruebas de sincronización de vídeo, conserva la misma disposición de pantalla y altavoces que presenta el problema.',
    },
    {
      type: 'title',
      text: 'Por qué varían los resultados de latencia en el navegador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El retardo de audio es el resultado de una cadena completa de componentes y no una cifra estática del hardware. El navegador programa el evento sobre el reloj de AudioContext, el sistema operativo gestiona sus búferes, el códec codifica y decodifica la señal y el transductor del altavoz la convierte en onda sonora. La herramienta describe el comportamiento del conjunto actual.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Interpretación de los datos',
      badge: 'Estimación técnica',
      html: '<p>Utiliza esta cifra para comparar configuraciones o solucionar problemas evidentes de sincronización. No constituye una especificación de fabricante ni reemplaza una medición con interfaz de audio profesional.</p>',
    },
  ],
  ui: {
    badge: 'Observatorio de latencia',
    modeLabel: 'Ruta de reproducción',
    modeSpeakers: 'Altavoces',
    modeWired: 'Cable',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Sincro de vídeo',
    startTest: 'Iniciar test',
    stopTest: 'Detener test',
    enableMic: 'Activar micrófono',
    micEnabled: 'Micrófono listo',
    calibrationTitle: 'Corrección de alineación',
    calibrationHint: 'Mueve el deslizador hasta hacer coincidir el destello y el clic',
    calibrationEarly: 'Audio adelantado',
    calibrationLate: 'Visual adelantado',
    calibrationCenter: 'Alineado',
    visualLane: 'Visual',
    audioLane: 'Audio',
    statusReady: 'Listo',
    statusRunning: 'Secuencia de pulsos en ejecución',
    statusWaiting: 'Esperando pulso',
    resultTitle: 'Lectura actual',
    latencyLabel: 'Retardo medido',
    alignmentLabel: 'Corrección de ajuste',
    confidenceLabel: 'Confianza',
    samplesLabel: 'Muestras',
    notMeasured: 'No medido',
    manualConfidence: 'Solo manual',
    lowConfidence: 'Confianza baja',
    mediumConfidence: 'Confianza media',
    highConfidence: 'Confianza alta',
    noMic: 'El micrófono no está disponible en este navegador',
    permissionDenied: 'Permiso de micrófono denegado',
    limitationTitle: 'Interpreta la lectura como estimación',
    limitationText: 'Las reflexiones de la sala, el procesamiento del micrófono y los búferes del sistema alteran el retardo observado. No se sube ningún audio.',
    copyReport: 'Copiar informe',
    copied: 'Copiado',
    reset: 'Restablecer',
    safety: 'Empieza con un volumen bajo. Detén la prueba si el sonido resulta molesto o distorsiona.',
    pulse: 'SINCRO',
  },
};
