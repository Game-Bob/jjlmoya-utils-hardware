import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'detector-frecuencia-actualizacion-monitor';
const title = 'Detector de Frecuencia de Actualización del Monitor';
const description = 'Detecta instantáneamente la frecuencia de actualización de tu monitor con precisión usando requestAnimationFrame. Prueba la estabilidad de los fotogramas y compárala con los estándares de la industria.';

const faqData = [
  {
    question: '¿Qué es la frecuencia de actualización (Hz)?',
    answer: 'La frecuencia de actualización es la cantidad de veces por segundo que tu monitor actualiza la imagen. Un monitor de 60Hz se actualiza 60 veces por segundo, mientras que uno de 144Hz lo hace 144 veces. Las frecuencias más altas dan como resultado un movimiento más suave.',
  },
  {
    question: '¿Qué tan preciso es este detector?',
    answer: 'Esta herramienta utiliza requestAnimationFrame, que se sincroniza con el ciclo de actualización de tu monitor. La precisión depende de la carga del sistema. El modo estable mide durante períodos más largos para una mayor precisión.',
  },
  {
    question: '¿Cuál es la diferencia entre el modo Estable y el Rápido?',
    answer: 'El modo Rápido mide durante un tiempo corto (~3 segundos) para obtener una respuesta rápida. El modo Estable tarda más (~10 segundos) para filtrar el ruido del sistema y proporcionar resultados más fiables.',
  },
  {
    question: '¿Por qué mi Hz detectado es diferente de lo que dice mi monitor?',
    answer: 'Esto puede suceder si: la conexión de tu cable está floja, los controladores están desactualizados o el escalado de tu sistema operativo interfiere. Intenta desconectar y volver a conectar el cable de la pantalla, o actualizar los controladores de la GPU.',
  },
  {
    question: '¿Qué frecuencias de actualización admiten los monitores modernos?',
    answer: 'Los estándares comunes son 60Hz (básico), 75Hz, 120Hz, 144Hz (gaming), 240Hz (gaming competitivo) y 360Hz (eSports profesionales).',
  },
];

const howToData = [
  {
    name: 'Carga la herramienta',
    text: 'Simplemente abre esta página. El detector comienza a medir inmediatamente.',
  },
  {
    name: 'Espera a la estabilización',
    text: 'Elige el modo Estable o Rápido. Deja que la medición se complete sin mover la ventana.',
  },
  {
    name: 'Revisa el velocímetro',
    text: 'La frecuencia de actualización de tu monitor aparece como un dial suave, con estadísticas de referencia (mín/máx/prom).',
  },
  {
    name: 'Compara con los estándares',
    text: 'La herramienta muestra con qué estándar coincide tu monitor (60, 75, 120, 144, 240, 360Hz).',
  },
  {
    name: 'Opcional: prueba de salto de fotogramas',
    text: 'Observa el cuadrado animado cruzando la pantalla para confirmar visualmente la fluidez.',
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

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
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
      text: 'Detector de Frecuencia de Actualización del Monitor: Prueba los Hz de tu Pantalla Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Detecta instantáneamente la frecuencia de actualización de tu monitor (60Hz, 144Hz, 240Hz, etc.) con precisión. Prueba la estabilidad de los fotogramas y verifica que tu pantalla esté funcionando según sus especificaciones nominales.',
    },
    {
      type: 'title',
      text: 'Por qué es Importante la Frecuencia de Actualización del Monitor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La frecuencia de actualización determina qué tan suave aparece el movimiento en tu pantalla. Los jugadores se benefician de monitores de 144Hz+, mientras que los usuarios generales encuentran adecuados los 60Hz. Esta herramienta ayuda a confirmar que tu monitor realmente ofrece su frecuencia de actualización anunciada.',
    },
    {
      type: 'title',
      text: 'Cómo Detectar tu Frecuencia de Actualización',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Carga este detector: la medición comienza de inmediato',
        'Elige entre el modo de medición Rápido (3s) o Estable (10s)',
        'Lee los Hz de tu monitor en el dial del velocímetro',
        'Compara con los estándares de la industria (60, 75, 120, 144, 240, 360Hz)',
      ],
    },
    {
      type: 'title',
      text: 'Estándares Comunes de Frecuencia de Actualización',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Estándar', 'Caso de Uso', 'Usuario Típico'],
      rows: [
        ['60Hz', 'Informática General', 'Oficina, Navegación Web'],
        ['75Hz', 'Gaming Ligero', 'Jugadores Casuales'],
        ['120Hz', 'Multimedia', 'Consolas, Streaming'],
        ['144Hz', 'Gaming Competitivo', 'FPS, Juegos de Ritmo Rápido'],
        ['240Hz+', 'eSports Profesionales', 'Jugadores Pro, Streamers'],
      ],
    },
    {
      type: 'title',
      text: 'Solución de Problemas: La Pantalla Muestra Menos Hz de los Esperados',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Comprueba las conexiones del cable HDMI/DisplayPort; los cables sueltos reducen el ancho de banda',
        'Actualiza los controladores de tu GPU (NVIDIA, AMD, Intel)',
        'Comprueba la configuración de pantalla del SO para asegurarte de que la alta frecuencia de actualización esté activada',
        'Prueba con diferentes cables o puertos en tu monitor',
        'Reinicia tu ordenador y vuelve a probar',
      ],
    },
    {
      type: 'title',
      text: 'La Tecnología Detrás de este Detector',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta utiliza la API requestAnimationFrame del navegador, que se sincroniza directamente con el ciclo de actualización de tu monitor. Al medir el tiempo entre los fotogramas de animación, calculamos tu frecuencia de actualización exacta con alta precisión, sin necesidad de hardware especial.',
    },
  ],
  ui: {
    badge: 'Prueba de Pantalla',
    title: 'Detector de Frecuencia de Actualización',
    description: 'Detecta la frecuencia de actualización de tu pantalla al instante',
    modeStable: 'Estable (10s, preciso)',
    modeFast: 'Rápido (3s, veloz)',
    measurementStatus: 'Midiendo...',
    currentHz: 'Actual',
    averageHz: 'Promedio',
    maxHz: 'Máximo',
    minHz: 'Mínimo',
    standardDetected: 'Estándar Detectado',
    frameSkippingTest: 'Prueba de Salto de Fotogramas',
    startMeasurement: 'Iniciar Medición',
    resetMeasurement: 'Restablecer',
    copyResult: 'Copiar Resultado',
    copiedFeedback: '¡Copiado al portapapeles!',
    optimalConfiguration: '[OK] Configuración Óptima',
    suboptimalConfiguration: '[AVISO] Por debajo de lo Óptimo',
    unstableRefreshRate: '[AVISO] Frecuencia Inestable',
    measurementNotStarted: 'Listo para medir',
    switchMonitorHint: 'Arrastra la ventana a otro monitor para probarlo',
    incompatibleBrowserMsg: 'Tu navegador no admite requestAnimationFrame',
  },
};
