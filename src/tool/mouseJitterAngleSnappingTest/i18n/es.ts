import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'prueba-temblor-angulo-raton';
const title = 'Prueba de Temblor y Ángulo del Ratón';
const description =
  'Dibuja trazos crudos del ratón en línea para detectar temblor del sensor, seguimiento inestable y corrección de ángulo o predicción que hace el movimiento artificialmente recto.';

const faqData = [
  {
    question: '¿Qué es el temblor del ratón?',
    answer:
      'El temblor del ratón es un movimiento no deseado de sacudida o ruido en la trayectoria del cursor incluso cuando la mano se mueve suavemente. Puede provenir de una ventana del sensor sucia, una mala superficie, comportamiento de elevación alto, ruido eléctrico, inestabilidad inalámbrica o un sensor que tiene dificultades al DPI seleccionado.',
  },
  {
    question: '¿Qué es la corrección de ángulo?',
    answer:
      'La corrección de ángulo, a veces llamada predicción, es una función de corrección donde el firmware del ratón intenta convertir el movimiento humano ligeramente imperfecto en líneas horizontales, verticales o diagonales más rectas. A algunos usuarios de oficina les gusta, pero muchos jugadores y artistas prefieren el movimiento crudo sin predicción.',
  },
  {
    question: '¿Puede esta prueba demostrar que el sensor de mi ratón está averiado?',
    answer:
      'No puede inspeccionar el sensor eléctricamente, pero muestra la trayectoria de movimiento que recibe el navegador. Si pases suaves repetidos crean puntos ruidosos, desviaciones repentinas o segmentos anormalmente rectos, el resultado es evidencia útil para solucionar problemas del ratón, superficie, DPI, conexión inalámbrica o configuración del firmware.',
  },
  {
    question: '¿Cómo debo dibujar para obtener el resultado más fiable?',
    answer:
      'Dibuja líneas diagonales lentas, curvas a velocidad media y pases horizontales largos. Prueba el mismo movimiento varias veces. El temblor es más fácil de ver en líneas lentas controladas, mientras que la corrección de ángulo es más fácil de detectar cuando el movimiento diagonal se vuelve sospechosamente recto o escalonado.',
  },
];

const howToData = [
  {
    name: 'Limpia el sensor y la alfombrilla',
    text: 'Antes de probar, elimina el polvo o pelos de la ventana del sensor y usa una alfombrilla estable o superficie de escritorio.',
  },
  {
    name: 'Dibuja líneas diagonales lentas',
    text: 'Mantén pulsado el botón principal del ratón y dibuja varios trazos diagonales. Un sensor crudo debe mostrar la variación natural de la mano, no una línea forzada perfectamente en un solo ángulo.',
  },
  {
    name: 'Dibuja curvas suaves',
    text: 'Haz círculos, curvas en S y arcos. El temblor aparece como puntos ásperos y ruidosos que saltan fuera de la curva deseada.',
  },
  {
    name: 'Compara DPI y configuraciones de superficie',
    text: 'Repite el mismo movimiento a diferentes niveles de DPI, tasas de sondeo, configuraciones de elevación y superficies para encontrar cuándo aparece el problema.',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
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
      text: 'Prueba de Temblor del Ratón en Línea: Verifica Ruido del Sensor y Corrección de Ángulo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un buen sensor de ratón debe seguir tu mano sin añadir ruido visible ni corregir secretamente la trayectoria. Cuando el sensor está sucio, la superficie es difícil de rastrear, el DPI es demasiado alto para el hardware o el firmware aplica predicción, la trayectoria del cursor puede dejar de sentirse natural. Esta prueba de temblor de ratón te permite dibujar trazos crudos e inspeccionar los puntos de lectura individuales para que los problemas del sensor se vuelvan visibles en lugar de vagos.',
    },
    {
      type: 'paragraph',
      html: 'La forma más útil de probar es simple: dibuja líneas y curvas controladas, luego observa la forma del trazo. Un sensor crudo saludable produce una trayectoria que sigue tu movimiento con pequeñas imperfecciones humanas. Un sensor ruidoso produce puntos ásperos, pequeños picos y bamboleo irregular. Un ratón con corrección de ángulo o predicción puede hacer que el movimiento diagonal u horizontal parezca anormalmente recto, como si el firmware estuviera corrigiendo tu mano.',
    },
    {
      type: 'title',
      text: 'Cómo es el Temblor del Ratón',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El temblor del ratón no es lo mismo que el temblor normal de la mano. Todo el mundo dibuja líneas ligeramente imperfectas. El temblor se vuelve sospechoso cuando los puntos saltan fuera de la dirección del movimiento aunque tu mano se mueva lenta y constantemente. A menudo aparece como un borde borroso alrededor de una línea, pequeños picos laterales o un trazo que parece rasposo en lugar de suave.',
    },
    {
      type: 'table',
      headers: ['Patrón del Trazo', 'Significado Probable', 'Qué Probar Después'],
      rows: [
        ['Pequeños picos aleatorios durante líneas lentas', 'Ruido del sensor, suciedad o problema de seguimiento de superficie', 'Limpia la ventana del sensor y prueba una alfombrilla diferente'],
        ['Temblor solo a DPI alto', 'El sensor o firmware tiene dificultades con esa sensibilidad', 'Vuelve a probar a 400, 800, 1600 y 3200 DPI'],
        ['Movimiento áspero solo en modo inalámbrico', 'Batería, distancia del receptor o interferencia', 'Acerca el receptor y prueba con una batería nueva'],
        ['Ruido cerca del levantamiento o al inclinar el ratón', 'Distancia de elevación o contacto desigual con la superficie', 'Mantén el ratón plano y reduce la distancia de elevación si está disponible'],
        ['Temblor en un escritorio pero no en otro', 'Problema de textura o reflectividad de la superficie', 'Usa una alfombrilla mate diseñada para sensores ópticos'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo es la Corrección de Ángulo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La corrección de ángulo es diferente del temblor. En lugar de añadir ruido, elimina la variación natural. Si dibujas una línea diagonal a mano, un sensor crudo debe preservar pequeñas desviaciones humanas. Con la corrección de ángulo activada, la línea puede bloquearse en una dirección perfectamente recta horizontal, vertical o diagonal. Esto puede facilitar el dibujo en escritorio, pero generalmente no es deseado para puntería competitiva, arte de píxeles, edición de fotos y cualquier tarea donde el cursor debe coincidir exactamente con la mano.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Comportamiento del sensor crudo',
          description: 'El trazo sigue tu mano, incluyendo pequeñas curvas y correcciones naturales. Las líneas diagonales no son matemáticamente perfectas a menos que tu movimiento lo fuera.',
        },
        {
          title: 'Comportamiento con corrección de ángulo',
          description: 'El trazo parece sospechosamente recto durante secciones largas, especialmente cerca de ángulos comunes como horizontal, vertical o 45 grados.',
        },
        {
          title: 'Comportamiento con temblor',
          description: 'El trazo se vuelve ruidoso, borroso o con picos. En lugar de ser demasiado recto, parece inestable y áspero.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo Probar tu Ratón Correctamente',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Comienza con una ventana del sensor limpia y una alfombrilla de buena calidad conocida',
        'Dibuja líneas diagonales lentas de esquina a esquina y repite el mismo movimiento varias veces',
        'Dibuja círculos y curvas en S para revelar temblor que puede no aparecer en líneas rectas',
        'Prueba a múltiples niveles de DPI porque algunos sensores se vuelven más ruidosos a sensibilidad muy alta',
        'Desactiva funciones del software del fabricante como corrección de ángulo, predicción, ajuste de superficie o aceleración cuando sea posible',
        'Compara modos con cable e inalámbrico si tu ratón admite ambos',
        'Compara con otro ratón en la misma superficie para separar fallo del ratón de problemas de superficie',
      ],
    },
    {
      type: 'title',
      text: 'Interpretando las Puntuaciones',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La herramienta muestra una puntuación de temblor, una puntuación de corrección de ángulo, rectitud, desviación media y el número de muestras capturadas. Estos valores se usan mejor de forma comparativa. Dibuja la misma línea con el mismo movimiento de mano después de cambiar una variable: DPI, superficie, ubicación del receptor inalámbrico o configuración del firmware del ratón. Si una puntuación baja después de cambiar la superficie o limpiar el sensor, has encontrado una causa probable.',
    },
    {
      type: 'table',
      headers: ['Resultado', 'Qué Sugiere', 'Acción Práctica'],
      rows: [
        ['Temblor bajo y corrección baja', 'La trayectoria del sensor parece natural y estable', 'Mantén la configuración actual y usa esto como referencia'],
        ['Temblor alto, corrección baja', 'El ratón está rastreando pero la trayectoria es ruidosa', 'Limpia el sensor, cambia la superficie, baja el DPI y vuelve a probar'],
        ['Temblor bajo, corrección alta', 'La trayectoria puede estar corregida por firmware', 'Busca opciones de predicción o corrección de ángulo en el software del ratón'],
        ['Temblor alto y corrección alta', 'El trazo es inestable y puede estar sobrecorregido', 'Restablece los perfiles del software del ratón y vuelve a probar desde la configuración predeterminada'],
        ['Las puntuaciones cambian mucho según la superficie', 'Al sensor no le gusta una textura o reflectividad de superficie', 'Usa la superficie con el trazo más limpio'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, Tasa de Sondeo y Temblor del Ratón',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un DPI alto no significa automáticamente mejor seguimiento. Algunos ratones funcionan limpiamente a DPI moderado pero exponen más ruido visible a DPI muy alto porque pequeños errores del sensor se amplifican en un movimiento de cursor más grande. La tasa de sondeo también puede cambiar la sensación del trazo. Una tasa de sondeo más alta da actualizaciones más frecuentes, pero no puede arreglar un sensor sucio, una mala superficie o la predicción del firmware.',
    },
    {
      type: 'paragraph',
      html: 'Para una comparación justa, mantén el movimiento de tu mano similar y cambia una configuración a la vez. Por ejemplo, dibuja la misma línea diagonal a 800 DPI, 1600 DPI y 3200 DPI. Si la trayectoria se vuelve borrosa solo en el valor más alto, la mejor solución puede ser bajar el DPI y ajustar la sensibilidad en el juego en lugar de reemplazar el ratón.',
    },
    {
      type: 'title',
      text: 'Causas Comunes del Temblor del Sensor del Ratón',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Polvo, pelo o grasa cerca de la ventana del sensor óptico',
        'Superficies brillantes, reflectantes, transparentes o irregulares',
        'Configuraciones de DPI muy altas que amplifican pequeños errores del sensor',
        'Batería baja o interferencia inalámbrica',
        'Receptor colocado lejos del ratón o detrás de una caja de PC metálica',
        'Filtros de firmware, calibración de superficie o perfiles de software del fabricante',
        'Problemas de distancia de elevación cuando el ratón se inclina o se mueve rápidamente',
        'Una lente del sensor desgastada o dañada tras un uso intensivo',
      ],
    },
    {
      type: 'title',
      text: 'Por Qué les Importa a los Jugadores y Diseñadores',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En los juegos, el temblor puede dificultar los microajustes porque la mira no se asienta exactamente donde la mano pretendía. La corrección de ángulo puede ser igual de problemática: puede ayudar a dibujar líneas rectas en el escritorio, pero también puede distorsionar pequeñas correcciones de puntería y hacer que el seguimiento diagonal se sienta filtrado. Para diseñadores, ilustradores, usuarios de CAD y editores de fotos, la corrección del sensor puede hacer que el movimiento a mano alzada se sienta menos honesto y más difícil de controlar.',
    },
    {
      type: 'paragraph',
      html: 'Un ratón no necesita un trazo perfecto para ser bueno. El movimiento humano es naturalmente imperfecto. Las señales de advertencia son repetibles: la misma superficie siempre crea puntos ruidosos, el mismo DPI siempre crea picos, o el mismo ratón siempre hace diagonales sospechosamente rectas mientras que otro ratón no lo hace.',
    },
    {
      type: 'title',
      text: 'Antes de Comprar un Ratón Nuevo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Limpia la ventana del sensor cuidadosamente con el ratón apagado',
        'Prueba una alfombrilla diferente, preferiblemente de tela mate o superficie híbrida para juegos',
        'Baja el DPI y compensa con sensibilidad del software',
        'Desactiva la corrección de ángulo, predicción, precisión del puntero y opciones de aceleración',
        'Acerca el receptor inalámbrico usando un cable de extensión USB',
        'Actualiza o restablece el perfil de firmware del ratón si el software del fabricante lo admite',
        'Prueba otro ratón en el mismo ordenador y superficie para comparar',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La regla de diagnóstico útil',
      html: '<p>Un solo trazo extraño no es suficiente. Un patrón repetible es lo que importa. Si el temblor o la corrección de ángulo aparecen una y otra vez bajo la misma configuración, y luego desaparecen cuando limpias el sensor, cambias la superficie, bajas el DPI o desactivas la predicción, has encontrado la causa más probable.</p>',
    },
  ],
  ui: {
    badge: 'Trazo Crudo del Sensor',
    canvasLabel: 'Área de dibujo para prueba de temblor y corrección de ángulo del ratón',
    canvasHint: 'Dibuja diagonales lentas, círculos y curvas. Los puntos individuales del sensor permanecen visibles para que el seguimiento irregular sea fácil de detectar.',
    pointerPrompt: 'Mantén pulsado y dibuja dentro del área de dibujo',
    samples: 'Muestras',
    jitterScore: 'Temblor',
    snappingScore: 'Corrección',
    straightness: 'Rectitud',
    rawDeviation: 'Desviación media',
    statusIdle: 'Dibuja dentro del campo para capturar el movimiento crudo del ratón',
    statusHealthy: 'El trazo parece natural y estable en las muestras recientes',
    statusJitter: 'Movimiento ruidoso detectado en el trazo reciente',
    statusSnapping: 'Movimiento sospechosamente recto detectado',
    statusMixed: 'Tanto temblor como posible corrección de ángulo aparecen en el trazo',
    reset: 'Reiniciar',
    holdShift: 'Consejo: prueba un cambio a la vez. DPI, superficie, modo inalámbrico y configuración de predicción pueden cambiar el trazo.',
    sensitivity: 'Sensibilidad de detección',
    low: 'estable',
    high: 'estricto',
    traceLog: 'Eventos del trazo',
    emptyLog: 'Dibuja algunos trazos controlados para iniciar el registro de eventos.',
    jitterEvent: 'temblor',
    snappingEvent: 'corrección de ángulo',
    combinedEvent: 'temblor y corrección de ángulo',
    cleanEvent: 'trazo limpio',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
