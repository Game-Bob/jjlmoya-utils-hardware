import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'prueba-doble-clic-raton';
const title = 'Prueba de Doble Clic del Ratón';
const description =
  'Prueba cada botón del ratón y detecta dobles clics no deseados, interruptores desgastados y rebote de contactos con medición de tiempo por botón en tu navegador.';

const faqData = [
  {
    question: '¿Qué es un problema de doble clic del ratón?',
    answer:
      'Un problema de doble clic ocurre cuando una pulsación física se registra como dos clics. Puede afectar al botón izquierdo, derecho, clic de rueda o botones laterales, y suele deberse al desgaste del interruptor, rebote de contactos, configuración de antirrebote del firmware o inestabilidad de la señal inalámbrica.',
  },
  {
    question: '¿Qué intervalo se considera sospechoso?',
    answer:
      'Los intervalos muy cortos entre clics son sospechosos porque los dobles clics humanos suelen tardar más. Esta herramienta comienza con un umbral de 80 ms, pero puedes ajustarlo según el ratón y tu estilo de prueba.',
  },
  {
    question: '¿Puede un navegador demostrar que el interruptor está roto?',
    answer:
      'Un navegador no puede inspeccionar directamente el interruptor eléctrico, pero puede registrar los eventos de clic que recibe el sistema operativo. Intervalos sospechosos repetidos durante pruebas de clic simple son una fuerte evidencia de rebote o doble clic no deseado.',
  },
  {
    question: '¿Cómo debo probar correctamente?',
    answer:
      'Haz clic lenta y deliberadamente, buscando pulsaciones simples. Si el contador de sospechosos aumenta incluso cuando no estás haciendo doble clic intencionadamente, repite la prueba en otro puerto USB, otro navegador y otro ordenador si es posible.',
  },
];

const howToData = [
  {
    name: 'Establece el umbral de detección',
    text: 'Comienza con 80 ms. Bájalo para una detección estricta de rebotes o súbelo si tu dispositivo produce intervalos accidentales ligeramente más amplios.',
  },
  {
    name: 'Haz clic como un clic simple normal',
    text: 'Pulsa cada botón del ratón de uno en uno sobre la imagen del ratón. No hagas doble clic intencionadamente durante la primera pasada.',
  },
  {
    name: 'Observa el contador de sospechosos',
    text: 'Si aparecen eventos sospechosos mientras haces clics simples, comprueba qué botón visual se resaltó y compáralo con los chips de eventos.',
  },
  {
    name: 'Compara con otro dispositivo',
    text: 'Un ratón sano debería mantener una puntuación alta bajo el mismo umbral. Comparar dispositivos ayuda a distinguir fallos de hardware de configuraciones de software.',
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

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Prueba de Doble Clic del Ratón: Diagnostica el Rebote de Botones Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un ratón que hace doble clic cuando pulsas una vez no es solo molesto. Puede abrir carpetas por accidente, cancelar acciones de arrastrar y soltar, disparar dos veces en un juego, cerrar pestañas del navegador o hacer que los menús contextuales aparezcan y desaparezcan antes de que puedas usarlos. Esta prueba online de doble clic del ratón se centra en la señal diagnóstica útil: <strong>el intervalo de tiempo entre los eventos de botón reportados por tu sistema operativo</strong>.',
    },
    {
      type: 'paragraph',
      html: 'A diferencia de un simple contador de clics, esta herramienta registra cada botón de forma independiente: clic izquierdo, clic derecho, clic de rueda, retroceso y avance del navegador. Esto importa porque un ratón puede tener el botón derecho defectuoso mientras el izquierdo sigue sano, o un botón lateral desgastado que solo falla tras meses de uso en juegos o atajos de productividad.',
    },
    {
      type: 'title',
      text: 'Qué Mide Esta Prueba de Botones del Ratón',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando pulsas un botón del ratón, el navegador recibe un evento de puntero con el código del botón. La herramienta almacena la última marca de tiempo de ese mismo botón físico y la compara con la siguiente pulsación del mismo botón. Si el intervalo es más corto que el umbral seleccionado, el evento se marca como sospechoso porque un segundo clic normal e intencionado suele tardar más.',
    },
    {
      type: 'list',
      items: [
        'Botón izquierdo: útil para detectar dobles clics accidentales al abrir archivos, seleccionar texto o arrastrar ventanas',
        'Botón derecho: útil cuando los menús contextuales parpadean, se abren dos veces o se cierran inmediatamente',
        'Botón de rueda: útil para ratones donde el clic central abre múltiples pestañas o falla tras una navegación intensa',
        'Botones de retroceso y avance: útiles para ratones gaming y de productividad con interruptores laterales',
        'Medición por botón: evita mezclar un clic izquierdo con un clic derecho y llamarlo falso doble clic',
      ],
    },
    {
      type: 'title',
      text: 'Por Qué los Ratones Empiezan a Hacer Doble Clic',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La mayoría de los ratones usan pequeños interruptores mecánicos bajo cada botón. Cuando los contactos del interruptor se cierran, el metal puede rebotar eléctricamente durante un período muy breve antes de estabilizarse. El firmware del ratón normalmente filtra ese ruido con lógica antirrebote. A medida que el interruptor se desgasta, el rebote puede volverse más largo, más ruidoso o inconsistente, por lo que el ordenador recibe dos pulsaciones aunque tu dedo haya hecho una sola pulsación física.',
    },
    {
      type: 'paragraph',
      html: 'El doble clic no siempre tiene la misma causa. Puede ser desgaste mecánico del interruptor, antirrebote del firmware demasiado agresivo, polvo u oxidación dentro del interruptor, inestabilidad de paquetes inalámbricos, software de macros, un cable dañado o una configuración del sistema operativo que hace más notorios los dobles clics accidentales.',
    },
    {
      type: 'table',
      headers: ['Síntoma', 'Causa Probable', 'Qué Probar'],
      rows: [
        ['Un clic abre archivos como si fuera doble clic', 'Rebote del interruptor izquierdo o confusión de velocidad de doble clic del SO', 'Prueba Izquierdo con pulsaciones simples lentas a 80 ms'],
        ['El menú de clic derecho parpadea o se cierra', 'Rebote del interruptor derecho o software que intercepta menús contextuales', 'Prueba Derecho y desactiva temporalmente las utilidades del ratón'],
        ['El clic central abre dos pestañas', 'Desgaste del interruptor de rueda', 'Prueba Rueda con pulsaciones simples deliberadas'],
        ['El botón de retroceso salta dos páginas', 'Rebote del interruptor lateral o repetición de atajo del navegador', 'Prueba Retroceso y Avance por separado'],
        ['Solo ocurre de forma inalámbrica', 'Interferencia inalámbrica, batería baja o ubicación del receptor', 'Vuelve a probar con cable o acerca el receptor'],
      ],
    },
    {
      type: 'title',
      text: 'Eligiendo el Umbral de Antirrebote Adecuado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El umbral es el intervalo máximo que esta herramienta aún considera sospechoso. El valor predeterminado, <strong>80 ms</strong>, es un punto medio práctico: lo bastante estricto para detectar muchos eventos duplicados no deseados, pero no tan agresivo como para que cada doble clic deliberado normal se convierta en un fallo de hardware.',
    },
    {
      type: 'table',
      headers: ['Umbral', 'Ideal Para', 'Cómo Interpretarlo'],
      rows: [
        ['30-50 ms', 'Pruebas estrictas de rebote eléctrico', 'Bueno para confirmar eventos duplicados muy rápidos de un interruptor desgastado'],
        ['60-90 ms', 'Diagnóstico general de doble clic del ratón', 'Mejor rango predeterminado para la mayoría de ratones gaming y de oficina'],
        ['100-140 ms', 'Interruptores desgastados intermitentes', 'Útil cuando el ratón a veces crea intervalos accidentales más amplios'],
        ['150-180 ms', 'Pruebas de estrés e interruptores débiles', 'Usar con cuidado, porque los dobles clics intencionados rápidos pueden caer en este rango'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo Realizar una Prueba Fiable',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En la primera pasada, no hagas doble clic intencionadamente. Pulsa cada botón del ratón lenta y deliberadamente, uno cada vez, con el cursor sobre la imagen del ratón. Un interruptor sano debería producir eventos simples estables. Si el contador de sospechosos aumenta durante pulsaciones simples lentas, repite la misma prueba de botón varias veces para confirmar el patrón.',
    },
    {
      type: 'list',
      items: [
        'Prueba Izquierdo con 20 a 30 pulsaciones lentas, luego Derecho, luego Rueda, luego los botones laterales',
        'No arrastres el ratón mientras pruebas el rebote de botones, ya que el movimiento puede distraer del resultado de tiempo',
        'Si un botón muestra eventos sospechosos, repite la misma prueba tras cambiar de puerto USB o navegador',
        'Para ratones inalámbricos, prueba con una batería nueva y el receptor cerca del ratón',
        'Si solo un botón falla repetidamente, el fallo probablemente está en ese interruptor específico y no en todo el dispositivo',
      ],
    },
    {
      type: 'title',
      text: 'Interpretando los Resultados',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Resultado', 'Significado', 'Siguiente Paso Recomendado'],
      rows: [
        ['0 eventos sospechosos tras muchas pulsaciones', 'Los botones probados parecen sanos bajo el umbral seleccionado', 'Mantén el umbral predeterminado o vuelve a probar más tarde si los síntomas reaparecen'],
        ['1 evento sospechoso aislado', 'Podría ser un rebote real o una pulsación rápida accidental', 'Repite el mismo botón lentamente antes de sacar conclusiones'],
        ['Eventos sospechosos repetidos en un botón', 'Fuerte indicio de rebote de interruptor o contactos desgastados', 'Prueba en otro ordenador y documenta el resultado'],
        ['Eventos sospechosos en cada botón', 'Podría ser software, controlador, utilidad de macros o entorno del navegador', 'Desactiva el software del ratón y vuelve a probar'],
        ['Solo falla el modo inalámbrico', 'Probablemente batería, ubicación del receptor o interferencia', 'Prueba el modo con cable o acerca el receptor'],
      ],
    },
    {
      type: 'paragraph',
      html: 'La puntuación de salud es un resumen rápido, no un veredicto final. La evidencia más importante es <strong>qué botón</strong> produjo eventos sospechosos y si el patrón se repite al pulsar ese mismo botón lentamente. Un solo evento malo durante una prueba apresurada es menos significativo que cinco eventos sospechosos de clic derecho durante pulsaciones simples deliberadas.',
    },
    {
      type: 'title',
      text: 'Antes de Reemplazar el Ratón',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Comprueba si el software de tu ratón tiene un ajuste de tiempo de antirrebote y prueba de nuevo tras cambiarlo',
        'Desactiva macros, perfiles de disparo rápido o reasignaciones de botones durante el diagnóstico',
        'Prueba un puerto USB diferente, especialmente si usas un hub o conector del panel frontal',
        'Para ratones inalámbricos, prueba con el dongle en un cable extensor cerca de la alfombrilla',
        'Compara con otro ratón en el mismo ordenador para distinguir fallo de hardware de comportamiento de software',
      ],
    },
    {
      type: 'title',
      text: 'Reparación, Garantía y Evidencias',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si el fallo es mecánico, limpiar la carcasa exterior rara vez lo soluciona de forma permanente porque el problema está dentro de los contactos del interruptor. Algunos usuarios reemplazan el microinterruptor, pero eso requiere soldadura y no merece la pena para todos los ratones. Si el ratón está en garantía, los intervalos sospechosos repetidos en el mismo botón son una evidencia útil al explicar el problema al soporte.',
    },
    {
      type: 'paragraph',
      html: 'Para reclamaciones de garantía, graba una breve captura de pantalla mientras pulsas el botón defectuoso lentamente. Asegúrate de que los chips de eventos muestren la etiqueta del botón y el tiempo sospechoso. Esto es más claro que decir "mi ratón a veces hace doble clic" porque demuestra el botón real y el tiempo aproximado del evento duplicado no deseado.',
    },
    {
      type: 'title',
      text: 'Limitaciones de una Prueba de Ratón Basada en Navegador',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta prueba mide los eventos que llegan al navegador. No puede inspeccionar directamente la forma de onda eléctrica dentro del interruptor, y no puede eludir todos los controladores, sistemas operativos o utilidades del fabricante. Aun así es útil: si el navegador recibe eventos duplicados, tus aplicaciones normales también pueden recibirlos. Para una validación a nivel de ingeniería, herramientas de hardware como osciloscopios o probadores de interruptores proporcionan evidencia más profunda, pero no son necesarias para la mayoría de diagnósticos de usuario.',
    },
  ],
  ui: {
    badge: 'Laboratorio de Rebote',
    clickTarget: 'Matriz de Botones',
    clickTargetHint: 'Pulsa izquierdo, derecho, rueda, retroceso y avance',
    totalClicks: 'Total',
    suspiciousClicks: 'Sospechosos',
    fastestGap: 'Intervalo más rápido',
    healthScore: 'Puntuación de salud',
    thresholdLabel: 'Umbral de detección',
    thresholdUnit: 'ms',
    cleanEvent: 'limpio',
    suspiciousEvent: 'sospechoso',
    reset: 'Reiniciar',
    statusIdle: 'Pulsa cada botón del ratón para probarlo independientemente',
    statusClean: 'No se detectó rebote de botón sospechoso',
    statusWarning: 'Rebote sospechoso detectado en un botón del ratón',
    lastGap: 'Último evento',
    logTitle: 'Eventos de botón recientes',
    emptyLog: 'Pulsa cualquier botón del ratón sobre el cuerpo del ratón.',
    leftButton: 'Izquierdo',
    middleButton: 'Rueda',
    rightButton: 'Derecho',
    backButton: 'Retroceso',
    forwardButton: 'Avance',
    otherButton: 'Otro',
  },
};
