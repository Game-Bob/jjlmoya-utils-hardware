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
  { question: '¿Afecta la frecuencia de refresco al input lag?', answer: 'Sí. Una pantalla de 60 Hz tarda 16.67 ms por fotograma y una de 240 Hz tarda 4.17 ms, aunque el renderizado y el panel también influyen.' },
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
  { name: 'Comprobar las condiciones de pantalla', text: 'Anota los FPS, el modo de imagen y la frecuencia para comparar mediciones posteriores.' },
  { name: 'Repetir y comparar', text: 'Repite la serie después de cada ajuste y valora la mediana junto con la media.' },
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
    {
      type: 'title',
      text: 'Cómo recorre la señal de latencia el sistema',
    },
    {
      type: 'paragraph',
      html: 'La latencia total se acumula desde el interruptor del periférico hasta el píxel visible. Separar cada tramo ayuda a saber si el retraso procede del dispositivo, del sistema operativo, del renderizado o de la pantalla.',
    },
    {
      type: 'table',
      headers: ['Componente', 'Rango habitual', 'Problema frecuente', 'Mejora posible'],
      rows: [
        ['Interruptor del periférico', '0.2 ms a 5.0 ms', 'Rebote mecánico y antirrebote', 'Usar un interruptor óptico o reducir el antirrebote'],
        ['Frecuencia USB', '0.125 ms a 8.0 ms', 'Sondeo lento', 'Aumentar la frecuencia si el dispositivo lo permite'],
        ['Cola del sistema', '0.5 ms a 3.0 ms', 'Tareas en segundo plano', 'Cerrar procesos innecesarios'],
        ['Motor gráfico', '4.0 ms a 20.0 ms', 'Fotogramas limitados por CPU', 'Reducir carga y mantener una tasa estable'],
        ['Cola de la GPU', '8.0 ms a 33.0 ms', 'VSync y varios búferes', 'Comparar VSync con una opción VRR'],
        ['Procesamiento de pantalla', '1.0 ms a 15.0 ms', 'Escalado y filtros del televisor', 'Activar el modo juego'],
      ],
    },
    {
      type: 'tip',
      title: 'Cómo reducir la cola de renderizado de la GPU',
      html: 'Cuando la GPU está al máximo puede preparar varios fotogramas por adelantado. Limitar la tasa unos fotogramas por debajo del máximo y probar Reflex o Anti Lag puede reducir la espera, aunque cada configuración debe medirse de nuevo.',
    },
    {
      type: 'title',
      text: 'Qué diferencias hay entre los dispositivos de entrada',
    },
    {
      type: 'paragraph',
      html: 'Ratones, teclados y pantallas táctiles tienen retrasos distintos por su conexión, su electrónica y su forma de escanear la entrada. Compara dispositivos con la misma pantalla y las mismas condiciones para que la conclusión sea útil.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Ratones gaming', description: 'Conexión cableada o inalámbrica de alta frecuencia.', highlight: '0.5 ms a 2 ms', points: ['Sondeo de 1000 Hz o superior', 'Interruptores ópticos con menos rebote', 'Sensor con procesamiento rápido'] },
        { title: 'Teclados mecánicos', description: 'Matriz de teclas con control del antirrebote.', highlight: '1 ms a 10 ms', points: ['Interruptores magnéticos con activación rápida', 'Escaneo de matriz configurable', 'Distancia de actuación ajustable'] },
        { title: 'Pantallas táctiles', description: 'Digitalizador capacitivo superpuesto al panel.', highlight: '15 ms a 45 ms', points: ['Frecuencia de muestreo táctil', 'Procesamiento del controlador de pantalla', 'Filtros para rechazar toques accidentales'] },
      ],
    },
    {
      type: 'title',
      text: 'Cuánto retraso añade la frecuencia de refresco',
    },
    {
      type: 'paragraph',
      html: 'La frecuencia de refresco fija el intervalo mínimo entre actualizaciones visibles. Una pantalla de 60 Hz tarda más en presentar una entrada que una pantalla de 240 Hz, pero el resultado también depende del renderizado y del modo de sincronización.',
    },
    {
      type: 'list',
      items: ['60 Hz equivale a 16.67 ms por fotograma', '120 Hz equivale a 8.33 ms por fotograma', '144 Hz equivale a 6.94 ms por fotograma', '240 Hz equivale a 4.17 ms por fotograma', '360 Hz equivale a 2.78 ms por fotograma', '540 Hz equivale a 1.85 ms por fotograma'],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Input lag', definition: 'Tiempo total entre la acción física y su resultado visible en la pantalla.' },
        { term: 'Jitter', definition: 'Variación entre las mediciones que indica si los tiempos son estables.' },
        { term: 'VSync', definition: 'Sincronización vertical que reduce el tearing, pero puede añadir espera.' },
        { term: 'VRR', definition: 'Frecuencia variable que adapta la pantalla a la salida de la GPU.' },
        { term: 'Tiempo de píxel', definition: 'Tiempo que necesita un píxel para cambiar de una tonalidad a otra.' },
      ],
    },
    {
      type: 'title',
      text: 'Ventajas y límites de medir en el navegador',
    },
    {
      type: 'paragraph',
      html: 'La prueba permite comparar periféricos sin instrumentos especiales y sin instalar software. No puede observar directamente todos los retrasos internos del controlador, del juego ni la emisión óptica del panel.',
    },
    {
      type: 'proscons',
      title: 'Evaluación de la medición web',
      items: [
        { pro: 'Es accesible y no requiere equipamiento especial', con: 'Depende del planificador de eventos del navegador' },
        { pro: 'Permite comparar configuraciones rápidamente', con: 'No mide de forma directa el tiempo de respuesta del píxel' },
        { pro: 'Usa un temporizador de alta resolución local', con: 'El navegador puede limitar la precisión del temporizador' },
        { pro: 'Revela la estabilidad entre eventos y repintados', con: 'Una pestaña en segundo plano puede ser ralentizada' },
      ],
    },
    {
      type: 'title',
      text: 'Cómo diagnosticar una latencia elevada',
    },
    {
      type: 'paragraph',
      html: 'Si la media supera 30 ms o el jitter es alto, repite la medición con la ventana enfocada y revisa VSync, aceleración gráfica, frecuencia USB y procesos que consuman CPU.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Aviso de diagnóstico de latencia',
      html: 'Una media superior a 35 ms en un equipo de escritorio merece una comprobación del modo de pantalla y de la aceleración por hardware. Cambia una sola variable cada vez para identificar la causa.',
    },
    {
      type: 'title',
      text: 'Pasos para reducir la latencia del sistema',
    },
    {
      type: 'paragraph',
      html: 'Ajusta el periférico, la pantalla y el sistema por separado. Después de cada cambio toma una nueva serie de muestras y conserva las condiciones para que la comparación sea válida.',
    },
    {
      type: 'summary',
      title: 'Lista de comprobación para optimizar la latencia',
      items: ['Configura una frecuencia USB adecuada', 'Activa el modo juego de la pantalla', 'Evita filtros de imagen innecesarios', 'Compara VSync con VRR', 'Mantén estable la tasa de fotogramas', 'Cierra tareas que carguen la CPU', 'Repite la medición tras cada ajuste'],
    },
    {
      type: 'message',
      title: 'Mejor práctica para comparar resultados',
      html: 'Cierra aplicaciones en segundo plano, mantén la ventana enfocada y recoge al menos 15 muestras. Usa la mediana junto con la media y el jitter, porque una medición aislada puede ser accidental.',
    },
  ],
};
