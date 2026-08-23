import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'prueba-microfono-analizador-espectro';
const title = 'Prueba de micrófono y analizador de espectro';
const description = 'Prueba la entrada de tu micrófono, nivel en tiempo real, saturación, ruido de la habitación y respuesta en frecuencia localmente en tu navegador con un espectro privado.';

const faq = [
  {
    question: '¿Esta prueba de micrófono graba o sube mi voz?',
    answer: 'No. La señal del micrófono en directo se conecta únicamente a un analizador dentro de tu navegador. La herramienta no crea archivos de audio, no conecta la entrada a la salida de sonido ni envía muestras a ningún servidor.',
  },
  {
    question: '¿Qué significa dBFS en el medidor de nivel?',
    answer: 'dBFS significa decibelios respecto a la escala completa digital (Full Scale). El valor cero dBFS es el pico digital máximo representable, por lo que las lecturas normales son negativas. No es lo mismo que una medición calibrada de presión sonora en dB SPL.',
  },
  {
    question: '¿Cómo sé si mi micrófono está saturando o distorsionando?',
    answer: 'Habla al volumen máximo que esperes utilizar. Si los picos alcanzan repetidamente el estado rojo de saturación cerca de cero dBFS, reduce la ganancia del micrófono, aléjate ligeramente o desactiva procesamientos agresivos en tu sistema operativo.',
  },
  {
    question: '¿Qué muestra la medición del ruido ambiente?',
    answer: 'La captura de tres segundos calcula el nivel medio RMS digital mientras permaneces en silencio. Ayuda a comparar ajustes dentro del mismo navegador y habitación, aunque el control automático de ganancia y la supresión de ruido pueden alterar el resultado.',
  },
  {
    question: '¿Por qué cambia la frecuencia dominante mientras hablo?',
    answer: 'La voz humana contiene una frecuencia fundamental cambiante, armónicos, consonantes y ruido. La lectura muestra el contenedor de frecuencia más potente entre 60 Hz y 12 kHz, por lo que la variación es el comportamiento esperado.',
  },
  {
    question: '¿Puede este analizador de espectro certificar la calidad de un micrófono?',
    answer: 'No. Se trata de una comprobación práctica en navegador para verificar entrada, nivel, saturación, ruido y actividad espectral visible. Certificar la respuesta en frecuencia o la presión sonora requiere hardware calibrado, señales de prueba controladas y un entorno de medición profesional.',
  },
];

const howTo = [
  {
    name: 'Concede permiso de acceso al micrófono',
    text: 'Haz clic en Iniciar micrófono y aprueba el permiso del navegador. El procesamiento comenzará únicamente tras esta acción explícita.',
  },
  {
    name: 'Habla a tu distancia habitual de trabajo',
    text: 'Utiliza tu voz o nivel de instrumento habitual y observa la lectura en dBFS, el pico máximo y el movimiento del espectro.',
  },
  {
    name: 'Comprueba el momento de mayor volumen',
    text: 'Eleva la voz o toca el pasaje más fuerte que preveas. Intenta evitar la saturación en rojo mientras mantienes un nivel limpio y saludable.',
  },
  {
    name: 'Captura el ruido de la habitación',
    text: 'Mantente en silencio y pulsa Capturar tres segundos. Compara el suelo de ruido guardado tras cambiar de espacio, dispositivo, ganancia o ajustes de voz.',
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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Cómo probar un micrófono en tu navegador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta prueba de micrófono resuelve las primeras preguntas de diagnóstico sin instalar aplicaciones: ¿produce señal la entrada seleccionada?, ¿el nivel es utilizable?, ¿satura en los momentos fuertes?, ¿cómo es el ruido ambiente de la sala y qué frecuencias están activas? Pulsa Iniciar micrófono, habla desde tu posición habitual y consulta el observatorio en tiempo real. El analizador funciona en la página actual y no genera ningún archivo de audio.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Análisis local y privado',
      badge: 'Sin grabación',
      html: '<p>Tu navegador solicita permiso de micrófono porque la entrada de audio es sensible. Esta herramienta conecta esa señal exclusivamente a un analizador local. No envía muestras a ningún servidor y detiene todas las pistas de audio en cuanto pulsas Detener micrófono.</p>',
    },
    {
      type: 'title',
      text: 'Cómo interpretar el nivel de micrófono en dBFS',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El valor principal en tiempo real es una estimación RMS que representa la energía en la ventana de tiempo actual. El indicador de pico muestra la muestra absoluta más alta en ese intervalo. Ambos utilizan dBFS, donde cero representa la escala completa digital y los sonidos más suaves muestran valores negativos crecientes. Las etiquetas del indicador son una guía práctica para esta prueba y no una norma universal de grabación.',
    },
    {
      type: 'table',
      headers: ['Lectura', 'Qué indica', 'Qué comprobar'],
      rows: [
        ['Silencio o por debajo de -60 dBFS', 'La entrada seleccionada no produce una señal útil de prueba', 'Revisa el dispositivo, el botón de silencio, el permiso y el nivel de entrada del sistema operativo'],
        ['Bajo por debajo de -35 dBFS', 'La señal puede ser difícil de usar sin ganancia adicional', 'Acércate al micrófono o aumenta la ganancia de entrada vigilando el pico'],
        ['Saludable', 'La señal actual tiene un nivel adecuado y margen dinámico visible', 'Repite la prueba con el volumen de voz o pasaje más fuerte esperado'],
        ['Caliente por encima de -6 dBFS pico', 'Queda poco margen digital disponible', 'Reduce la ganancia o aumenta la distancia antes de un momento de gran volumen'],
        ['Saturación cerca de 0 dBFS', 'Una o varias muestras han alcanzado el techo digital', 'Disminuye la ganancia y repite el momento de mayor volumen'],
      ],
    },
    {
      type: 'title',
      text: 'Uso del espectro de micrófono en directo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El espectro curvo distribuye los contenedores del analizador desde 60 Hz hasta 12 kHz en un arco logarítmico, mientras que la cinta luminosa muestra la forma de onda actual. Utiliza esta visualización para confirmar que los graves, medios y agudos llegan al navegador. Una frecuencia dominante en movimiento es totalmente normal al hablar o cantar.',
    },
    {
      type: 'tip',
      title: 'Compara los cambios de uno en uno',
      html: 'Captura el ruido ambiente, modifica un solo parámetro de tu configuración y vuelve a medir desde la misma posición. La cancelación de ruido del sistema operativo y el control automático de ganancia pueden hacer que un micrófono parezca más silencioso alterando su sonido, por lo que es recomendable escuchar la señal en tu aplicación final.',
    },
    {
      type: 'title',
      text: 'Por qué no es un sonómetro o medidor calibrado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las muestras recogidas por el navegador representan la señal digital tras pasar por el micrófono, la interfaz, el controlador y el procesamiento del sistema. No reflejan la presión sonora acústica en la cápsula del micrófono. Por este motivo la herramienta indica dBFS en lugar de dB SPL y evita certificar una respuesta en frecuencia oficial o un nivel de ruido absoluto.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Utiliza equipos calibrados para mediciones oficiales',
      badge: 'Solo prueba práctica',
      html: '<p>Utiliza esta herramienta para solucionar problemas en llamadas, transmisiones, grabaciones y selección de dispositivos. Para certificar especificaciones de producto, salud auditiva, normativas o análisis acústico profesional de salas, recurre a un micrófono de medición calibrado y un entorno controlado.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Permite el micrófono',
    journeySpeak: '2. Habla con naturalidad',
    journeyInspect: '3. Inspecciona nivel y espectro',
    startMicrophone: 'Iniciar micrófono',
    stopMicrophone: 'Detener micrófono',
    deviceLabel: 'Dispositivo de entrada',
    defaultDevice: 'Micrófono predeterminado',
    statusIdle: 'Esperando permiso',
    statusRequesting: 'Solicitando acceso al micrófono',
    statusLive: 'Escuchando localmente',
    statusUnsupported: 'El acceso al micrófono no está disponible en este navegador',
    statusDenied: 'No se ha concedido permiso para el micrófono',
    statusError: 'No se ha podido iniciar el micrófono',
    levelLabel: 'Nivel en directo',
    peakLabel: 'Pico',
    frequencyLabel: 'Frecuencia dominante',
    noiseFloorLabel: 'Ruido ambiente',
    captureNoise: 'Capturar tres segundos',
    capturingNoise: 'Mantente en silencio mientras se mide el ruido ambiente',
    noiseCaptured: 'Ruido ambiente capturado',
    roomToneHint: 'Mantén la posición y ganancia habituales y guarda silencio durante tres segundos.',
    unmeasured: 'Sin medir',
    noSignalLevel: 'Sin señal',
    noSignalPeak: 'Sin señal',
    noSignalFrequency: 'Sin señal',
    silentSignal: 'Sin señal útil',
    quietSignal: 'Entrada débil',
    healthySignal: 'Margen saludable',
    hotSignal: 'Señal elevada',
    clippingSignal: 'Saturación detectada',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Espectro logarítmico de micrófono y forma de onda en tiempo real',
    limitationTitle: 'Un navegador no es un sonómetro calibrado',
    limitationText: 'Las lecturas muestran dBFS digitales tras el procesado del dispositivo, no dB SPL acústicos. La señal se procesa exclusivamente en tu navegador y no se sube a internet. Utiliza el resultado para comparar configuraciones.',
  },
};
