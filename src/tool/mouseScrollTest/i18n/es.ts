import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'prueba-scroll-raton';
const title = 'Test de Rueda de Ratón';
const description = 'Diagnostica saltos de rueda, rebotes inversos, dirección de desplazamiento inconsistente y señales de codificador débiles con un test local de rueda de ratón en el navegador.';

const faqData = [
  {
    question: '¿Qué detecta un test de rueda de ratón?',
    answer: 'Un test de rueda de ratón registra los eventos de la rueda y busca cambios de dirección inestables, deltas débiles diminutos y desplazamiento inconsistente. Estos síntomas suelen aparecer cuando el codificador de la rueda está sucio, desgastado, desalineado o tiene ruido electrónico.',
  },
  {
    question: '¿Qué es un salto de desplazamiento inverso?',
    answer: 'Un salto inverso ocurre cuando desplazas en una dirección pero el ordenador recibe un evento corto en la dirección opuesta. Si se repite durante un desplazamiento constante, es un fuerte indicio de rebote del codificador o suciedad.',
  },
  {
    question: '¿Funciona este test con touchpads?',
    answer: 'Sí, pero el resultado es más significativo para ruedas físicas de ratón. Los touchpads y las ruedas de desplazamiento suave crean muchos deltas pequeños, por lo que el control de sensibilidad ayuda a separar el movimiento fino intencionado del jitter sospechoso.',
  },
  {
    question: '¿El test sube mis datos del ratón?',
    answer: 'No. El cálculo se ejecuta localmente en tu navegador. La herramienta solo usa los eventos de rueda mientras el puntero está dentro del área de captura.',
  },
];

const howToData = [
  {
    name: 'Coloca el puntero sobre el panel de captura',
    text: 'Mueve el cursor dentro del área del laboratorio de desplazamiento para que la página pueda capturar los eventos de rueda sin mover el documento.',
  },
  {
    name: 'Desplázate constantemente en una dirección',
    text: 'Prueba una dirección a la vez: gira lentamente hacia arriba durante varios clics, reinicia o pausa, luego prueba hacia abajo por separado. Los cambios rápidos intencionados de dirección pueden generar falsas lecturas de salto inverso.',
  },
  {
    name: 'Observa los saltos inversos',
    text: 'Si el contador de inversiones aumenta mientras tu dedo sigue moviéndose en una dirección, repite el mismo movimiento para confirmar el patrón.',
  },
  {
    name: 'Ajusta la sensibilidad',
    text: 'Aumenta la sensibilidad para touchpads suaves o redúcela para pruebas estrictas de rueda mecánica. La puntuación de estabilidad se actualiza inmediatamente.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
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
      text: 'Test de Rueda de Ratón: Detecta Saltos e Inversiones de Desplazamiento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una rueda de ratón defectuosa rara vez falla de golpe. Normalmente empieza con síntomas pequeños: un salto desplaza la página en la dirección equivocada, la página sube mientras bajas, o la rueda se siente normal pero el navegador recibe eventos inconsistentes. Este test de rueda de ratón registra la señal que llega al navegador y resalta los patrones relevantes para el diagnóstico.',
    },
    {
      type: 'paragraph',
      html: 'El objetivo no es medir cuánto se movió la página. La señal útil es la <strong>consistencia de dirección</strong>. Cuando giras una rueda mecánica constantemente hacia abajo, los eventos deben mantenerse en esa dirección. Los eventos cortos en dirección opuesta dentro de una ventana de tiempo estrecha son sospechosos porque coinciden con el comportamiento de codificadores sucios o desgastados.',
    },
    {
      type: 'title',
      text: 'Qué Mide la Herramienta',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Total de pulsos de rueda capturados dentro del panel de prueba',
        'Saltos inversos: cambios rápidos de signo mientras la dirección anterior sigue siendo reciente',
        'Racha limpia más larga: cuántos eventos consecutivos se mantuvieron en una dirección consistente',
        'Último delta: la dirección y magnitud en bruto del evento de rueda más reciente',
        'Actividad vertical frente a horizontal, útil para ruedas basculantes y touchpads',
      ],
    },
    {
      type: 'table',
      headers: ['Señal', 'Patrón Saludable', 'Patrón Sospechoso'],
      rows: [
        ['Rueda vertical', 'Rachas largas de eventos arriba o abajo durante desplazamiento constante', 'Eventos alternantes arriba/abajo mientras tu dedo mantiene una dirección'],
        ['Basculación horizontal', 'Eventos izquierda o derecha solo al usar gestos de basculación o horizontales', 'Movimiento lateral inesperado durante el uso normal de la rueda vertical'],
        ['Deltas pequeños', 'Valores pequeños ocasionales en ruedas suaves o touchpads', 'Alta proporción de valores diminutos inestables en una rueda mecánica con muescas'],
        ['Puntuación de estabilidad', 'Se mantiene alta en varias pasadas deliberadas', 'Cae repetidamente porque ocurren inversiones en la misma dirección de prueba'],
      ],
    },
    {
      type: 'title',
      text: 'Causas Comunes del Salto de Rueda de Desplazamiento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La mayoría de las ruedas de ratón usan un codificador que convierte la rotación en pulsos. El polvo, la oxidación, los contactos desgastados, un eje suelto, problemas de filtrado del firmware o un cable dañado pueden hacer que esos pulsos sean inconsistentes. Cuando el codificador reporta brevemente la fase incorrecta, el sistema operativo puede recibir un evento en dirección opuesta aunque la rueda siguiera girando en la dirección original.',
    },
    {
      type: 'table',
      headers: ['Síntoma', 'Causa Probable', 'Siguiente Comprobación'],
      rows: [
        ['La página sube mientras bajas', 'Rebote del codificador o suciedad en el mecanismo', 'Haz una pasada lenta hacia abajo y observa el contador de inversiones'],
        ['Solo una aplicación se desplaza mal', 'Suavizado de la aplicación, modo zoom o atajo de ratón personalizado', 'Prueba en el navegador y compara con otra aplicación'],
        ['La rueda funciona tras soplar aire, luego falla de nuevo', 'Movimiento temporal de residuos o contactos desgastados', 'Repite tras unos minutos de uso normal'],
        ['Aparece movimiento horizontal inesperado', 'Ruido de rueda basculante, gesto de touchpad o mapeo de driver', 'Comprueba el medidor del eje horizontal mientras te desplazas verticalmente'],
        ['El ratón inalámbrico se desplaza erráticamente', 'Batería baja, distancia del receptor o interferencia', 'Repite la prueba con batería nueva y el receptor cerca del ratón'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo Probar de Forma Fiable',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Coloca el puntero dentro del panel de captura antes de desplazarte para que la página evite el movimiento normal',
        'Prueba una dirección a la vez: desplázate lentamente hacia arriba durante 10 a 20 clics sin cambiar de dirección',
        'Reinicia o pausa, luego repite la misma pasada en una dirección hacia abajo',
        'No alternes rápidamente entre arriba y abajo, ya que los cambios rápidos intencionados pueden parecer saltos inversos',
        'Si aparecen inversiones, repite la dirección fallida varias veces para confirmar que es reproducible',
        'Compara con otro ratón en el mismo ordenador si necesitas separar hardware de software',
      ],
    },
    {
      type: 'title',
      text: 'Interpretando la Puntuación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La puntuación de estabilidad es un resumen rápido. Una puntuación alta significa que la herramienta vio dirección consistente y pocos deltas diminutos inciertos. Una puntuación baja no prueba automáticamente que el ratón esté roto, especialmente en touchpads o ruedas suaves de alta resolución, pero los saltos inversos repetidos durante una prueba lenta unidireccional son una fuerte evidencia de un problema real de rueda.',
    },
    {
      type: 'table',
      headers: ['Resultado', 'Significado', 'Acción Recomendada'],
      rows: [
        ['Sin inversiones y rachas limpias largas', 'La señal de la rueda parece consistente', 'Sigue probando solo si aparecen síntomas en uso real'],
        ['Una inversión aislada', 'Podría ser cambio accidental de dirección o un evento ruidoso', 'Repite la misma dirección lentamente'],
        ['Varias inversiones en la misma pasada', 'Probable rebote del codificador, suciedad o desgaste', 'Repite la prueba en otro ordenador y documenta el resultado'],
        ['Muchos eventos de jitter pero sin inversiones', 'La sensibilidad puede ser demasiado baja para el tipo de dispositivo', 'Aumenta la sensibilidad para touchpads o dispositivos de desplazamiento suave'],
        ['Eventos horizontales durante uso de rueda vertical', 'Posible ruido de rueda basculante o mapeo de driver', 'Desactiva el software personalizado del ratón y repite la prueba'],
      ],
    },
    {
      type: 'title',
      text: 'Rueda Mecánica vs Touchpad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una rueda mecánica con muescas normalmente produce pasos direccionales claros. Un touchpad o rueda de giro libre puede producir muchos deltas pequeños porque el sistema operativo aplica desplazamiento suave. Por eso esta herramienta incluye control de sensibilidad: subirlo ignora el movimiento diminuto y hace que la prueba se centre en cambios de dirección lo bastante grandes como para importar.',
    },
    {
      type: 'title',
      text: 'Qué Probar Antes de Reemplazar el Ratón',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Prueba en otro navegador para descartar un manejador de rueda específico de la página',
        'Desactiva el software del fabricante del ratón, la aceleración de desplazamiento o las capas de macro durante el diagnóstico',
        'Para ratones inalámbricos, usa una batería nueva y acerca el receptor',
        'Limpia alrededor de la rueda con aire comprimido mientras el ratón esté desenchufado o apagado',
        'Si el ratón está en garantía, registra el patrón de inversión repetido como evidencia',
      ],
    },
    {
      type: 'paragraph',
      html: 'Las pruebas basadas en navegador no pueden inspeccionar el codificador eléctricamente, pero pueden mostrar exactamente lo que recibe tu software habitual. Si el navegador recibe eventos de rueda en dirección incorrecta durante un desplazamiento cuidadoso y unidireccional, otras aplicaciones también pueden recibirlos.',
    },
  ],
  ui: {
    badge: 'Laboratorio de Señal de Rueda',
    captureTitle: 'Desplázate dentro del panel de señal',
    captureHint: 'Usa pasadas constantes en una dirección para detectar saltos inversos',
    focusLockTitle: 'Activar esta zona de desplazamiento',
    focusLockText: 'Haz clic en esta zona y desplázate aquí. La página no se moverá mientras esta zona esté activa.',
    stabilityScore: 'Puntuación de estabilidad',
    statusIdle: 'Desplázate sobre el panel para empezar a medir la consistencia de la rueda',
    statusClean: 'La dirección de la rueda es estable en las muestras capturadas',
    statusWarning: 'Se detectaron saltos inversos durante el desplazamiento reciente',
    statusMixed: 'Se detectaron muchos deltas pequeños; ajusta la sensibilidad para este dispositivo',
    directionNote: 'Prueba una dirección a la vez. Cambiar rápido entre arriba y abajo puede generar falsos saltos inversos.',
    totalTicks: 'Pulsos',
    reversals: 'Inversiones',
    longestRun: 'Mejor racha',
    lastDelta: 'Último delta',
    verticalAxis: 'Vertical',
    horizontalAxis: 'Horizontal',
    dominantDirection: 'Última dirección',
    upward: 'Arriba',
    downward: 'Abajo',
    leftward: 'Izquierda',
    rightward: 'Derecha',
    noDirection: 'Sin movimiento',
    noDataValue: '-',
    sensitivityLabel: 'Sensibilidad al jitter',
    sensitivityUnit: 'delta',
    reset: 'Reiniciar',
    logTitle: 'Secuencia de eventos de rueda',
    emptyLog: 'Desplázate sobre el panel con un movimiento lento y constante de la rueda.',
    cleanEvent: 'limpio',
    reversalEvent: 'salto inverso',
    jitterEvent: 'delta pequeño',
  },
};
