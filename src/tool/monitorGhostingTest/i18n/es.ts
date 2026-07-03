import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'prueba-ghosting-monitor';
const title = 'Prueba de Ghosting del Monitor';
const description =
  'Prueba el ghosting, desenfoque de movimiento, estelas de overdrive y respuesta de píxeles del monitor con barras móviles, texto y patrones de movimiento a pantalla completa.';

const faqData = [
  {
    question: '¿Qué es el ghosting del monitor?',
    answer:
      'El ghosting del monitor es una estela visible que sigue a los objetos en movimiento cuando los píxeles no pueden cambiar suficientemente rápido. Es común en paneles LCD lentos, modos overdrive mal ajustados y pantallas que funcionan por debajo de su frecuencia de actualización óptima.',
  },
  {
    question: '¿Puede esta prueba medir el tiempo de respuesta exacto?',
    answer:
      'Una prueba de navegador no puede reemplazar equipos de laboratorio como una cámara de persecución o fotodiodo, pero puede revelar artefactos de movimiento visibles, comparar configuraciones del monitor y ayudarte a elegir el modo overdrive menos borroso.',
  },
  {
    question: '¿Por qué el overdrive a veces crea estelas brillantes?',
    answer:
      'El overdrive fuerza más los píxeles para acelerar las transiciones. Si se pasa del tono objetivo, puedes ver ghosting inverso: un halo brillante o coloreado detrás de los objetos en movimiento.',
  },
  {
    question: '¿Debo probar en fondos oscuros o claros?',
    answer:
      'Ambos. Algunos paneles difuminan más las transiciones oscuro-a-gris que las claro-a-oscuro, por lo que cambiar el fondo revela artefactos que un solo patrón puede ocultar.',
  },
];

const howToData = [
  {
    name: 'Ajusta la velocidad de movimiento',
    text: 'Comienza cerca de la velocidad predeterminada, luego auméntala hasta que las estelas sean fáciles de inspeccionar sin perder de vista el objeto.',
  },
  {
    name: 'Cambia la intensidad de la estela',
    text: 'Usa el control de estela para hacer la persistencia más fácil de ver al comparar configuraciones del monitor.',
  },
  {
    name: 'Prueba varios fondos',
    text: 'Alterna entre fondos oscuro, claro y cuadrícula para revelar difuminado negro, ghosting inverso y halos de overdrive.',
  },
  {
    name: 'Compara configuraciones de overdrive',
    text: 'Abre el OSD de tu monitor y prueba los modos Apagado, Normal, Rápido y Extremo. Elige el modo con el movimiento más claro y menos halos.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
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
      text: 'Prueba de Ghosting del Monitor: Comprueba Desenfoque de Movimiento y Respuesta de Píxeles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El ghosting del monitor aparece cuando los objetos en movimiento dejan una estela visible. Puede hacer que los juegos se vean borrosos, que el texto al desplazarse sea más difícil de leer y que un monitor de alta frecuencia de actualización se vea peor de lo esperado. Esta prueba de ghosting te ofrece barras móviles, texto y patrones de alto contraste para comparar modos overdrive, frecuencias, fondos y velocidades sin instalar software.',
    },
    {
      type: 'paragraph',
      html: 'La prueba está diseñada para inspección práctica. No pretende ofrecer tiempos de respuesta gris a gris de nivel laboratorio, pero ayuda a responder la pregunta que la mayoría de usuarios realmente tiene: <strong>¿qué configuración del monitor se ve más nítida en esta pantalla?</strong>',
    },
    {
      type: 'title',
      text: 'Cómo se ve el Ghosting',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Una sombra oscura siguiendo al objeto en movimiento, a menudo llamada difuminado negro',
        'Un halo pálido o coloreado detrás del objeto, a menudo causado por overdrive excesivo',
        'Una larga estela translúcida que hace que los bordes se vean suaves',
        'Múltiples copias tenues del objeto, especialmente en pantallas con respuesta lenta de píxeles',
        'Claridad desigual entre fondos oscuro, claro y cuadrícula',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Desenfoque de Movimiento y Ghosting Inverso',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artefacto', 'Lo que ves', 'Causa común'],
      rows: [
        ['Ghosting', 'Una copia más oscura o desvaída sigue al objeto', 'La respuesta de píxeles es demasiado lenta para la velocidad de movimiento'],
        ['Desenfoque de movimiento', 'Todo el objeto en movimiento se ve suave', 'Desenfoque sample-and-hold, baja frecuencia o desenfoque por seguimiento ocular'],
        ['Ghosting inverso', 'Halo brillante o estelas de sobretiro coloreadas', 'La configuración de overdrive es demasiado agresiva'],
        ['Difuminado negro', 'Las escenas oscuras dejan sombras intensas', 'Las transiciones oscuras de paneles VA son lentas'],
        ['Tartamudeo', 'El movimiento salta en lugar de fluir', 'Frame pacing, FPS bajos o carga del navegador/sistema'],
      ],
    },
    {
      type: 'title',
      text: 'Un Flujo de Trabajo de Diagnóstico Práctico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Comienza con tu monitor configurado a su resolución nativa y la mayor frecuencia de actualización estable. Si tienes un monitor de 144Hz, 165Hz, 240Hz o 360Hz, confirma que el sistema operativo está usando realmente ese modo antes de juzgar la claridad de movimiento. Abre la prueba en pantalla completa, elige el objetivo de barras de claridad y observa el borde trasero del objeto en movimiento. El borde trasero es donde las estelas fantasma, el difuminado oscuro y los halos brillantes de overdrive son más fáciles de comparar.',
    },
    {
      type: 'list',
      items: [
        'Usa fondo oscuro para revelar difuminado negro y transiciones oscuras lentas',
        'Usa fondo claro para revelar halos de overdrive coloreados',
        'Usa fondo de cuadrícula para inspeccionar la claridad de bordes contra líneas de referencia de alto contraste',
        'Usa el objetivo de texto cuando tu problema real sea el desplazamiento borroso o texto difícil de leer en movimiento',
        'Usa pantalla completa antes de juzgar un monitor, porque el borde del navegador y el escalado pueden distraer de los artefactos de movimiento',
        'Aumenta la velocidad solo después de que puedas seguir el objeto cómodamente',
        'Compara una configuración del monitor a la vez para saber qué ha cambiado',
      ],
    },
    {
      type: 'title',
      text: 'Eligiendo la Mejor Configuración de Overdrive para tu Monitor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La mayoría de monitores gaming incluyen una configuración overdrive llamada Apagado, Normal, Rápido, Más Rápido, Extremo, Tiempo de Respuesta o Trace Free. La opción más rápida no siempre es la mejor. Una configuración moderada a menudo ofrece el mejor equilibrio: menos desenfoque que Apagado, pero menos halos que Extremo.',
    },
    {
      type: 'table',
      headers: ['Modo Overdrive', 'Resultado Esperado', 'Recomendación'],
      rows: [
        ['Apagado', 'Menor sobretiro, pero más desenfoque', 'Línea base útil para comparación'],
        ['Normal', 'Reducción moderada del desenfoque', 'A menudo mejor para uso diario'],
        ['Rápido', 'Movimiento más nítido con cierto riesgo de halo', 'Bueno si las estelas permanecen limpias'],
        ['Extremo', 'Menor tiempo de respuesta declarado, mayor riesgo de sobretiro', 'Evitar si aparecen estelas inversas brillantes'],
        ['Adaptativo/Variable', 'El comportamiento cambia con la frecuencia de actualización', 'Prueba de nuevo en el rango de FPS que realmente usas'],
      ],
    },
    {
      type: 'title',
      text: 'Qué Cambiar Cuando la Prueba se Ve Mal',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Lo que ves', 'Causa Probable', 'Qué Probar'],
      rows: [
        ['Larga estela oscura detrás del objetivo', 'Transiciones de píxeles oscuros lentas o overdrive débil', 'Prueba un modo overdrive más fuerte, vuelve a probar en fondos oscuro y cuadrícula'],
        ['Halo brillante o contorno coloreado detrás del objetivo', 'Sobretiro de overdrive o ghosting inverso', 'Reduce overdrive un nivel y compara a tu frecuencia real'],
        ['El movimiento se ve a saltos en lugar de borroso', 'Frame pacing, carga del navegador o discrepancia de frecuencia', 'Cierra apps pesadas, activa pantalla completa, confirma frecuencia del SO'],
        ['El texto se vuelve ilegible al moverse', 'Desenfoque sample-and-hold, baja frecuencia o respuesta lenta', 'Aumenta la frecuencia, prueba patrón de texto, compara modos overdrive'],
        ['Los artefactos cambian al cambiar los FPS', 'Comportamiento VRR o overdrive adaptativo', 'Prueba de nuevo en el rango de FPS en el que realmente juegas o trabajas'],
      ],
    },
    {
      type: 'title',
      text: 'Por qué Importa la Frecuencia de Actualización',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Las frecuencias de actualización más altas reducen el tiempo que cada fotograma permanece visible, lo que puede hacer que el movimiento se vea más claro. Sin embargo, la frecuencia por sí sola no elimina el ghosting. Un monitor de 240Hz con transiciones de píxeles lentas puede seguir difuminando, mientras que un panel de 144Hz bien ajustado puede verse más limpio que un panel más rápido mal ajustado.',
    },
    {
      type: 'table',
      headers: ['Frecuencia', 'Tiempo por Fotograma', 'Qué Esperar'],
      rows: [
        ['60Hz', '16,7 ms', 'Fácil ver desenfoque sample-and-hold y movimiento más lento'],
        ['120Hz', '8,3 ms', 'Mucho más fluido, pero la respuesta de píxeles sigue importando'],
        ['144Hz', '6,9 ms', 'Línea base gaming común para claridad de movimiento'],
        ['240Hz', '4,2 ms', 'Muy fluido si el ajuste de respuesta es bueno'],
        ['360Hz', '2,8 ms', 'Exigente: el mal ajuste de overdrive se vuelve obvio'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Gaming y Pruebas en el Mundo Real',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La frecuencia de actualización variable puede cambiar el comportamiento de un monitor porque algunas pantallas usan diferente ajuste de overdrive a diferentes frecuencias. Si tu problema aparece solo en juegos, no pruebes solo a la frecuencia máxima de escritorio. Prueba de nuevo en el rango de FPS donde realmente juegas, especialmente alrededor de 60 FPS, 90 FPS, 120 FPS y cualquier límite de fotogramas que uses.',
    },
    {
      type: 'list',
      items: [
        'Si el ghosting es peor a FPS bajos, el monitor puede tener un ajuste débil de overdrive variable',
        'Si los halos aparecen solo a altas frecuencias, el modo overdrive puede ser demasiado agresivo',
        'Si el movimiento tartamudea mientras la estela se mantiene corta, el problema probablemente es frame pacing en lugar de respuesta de píxeles',
        'Si pantalla completa se ve diferente del modo ventana, comprueba el escalado del navegador, del sistema operativo y el comportamiento del compositor',
      ],
    },
    {
      type: 'title',
      text: 'Solución de Problemas con Malos Resultados',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Confirma que tu cable de pantalla soporta la frecuencia objetivo',
        'Desactiva el suavizado de movimiento, Black Frame Insertion o modos MPRT mientras comparas el overdrive normal',
        'Prueba de nuevo después de cambiar el monitor a su resolución nativa',
        'Usa pantalla completa o reduce el zoom del navegador si el movimiento parece inconsistente',
        'Cierra aplicaciones pesadas en segundo plano si la animación tartamudea',
        'Prueba el mismo patrón después de cambiar la configuración de frecuencia en el panel de control de la GPU',
        'Prueba otro cable o puerto si el monitor no alcanza su frecuencia anunciada',
        'Prueba de nuevo con VRR activado y desactivado cuando el ghosting cambie entre escritorio y juegos',
      ],
    },
    {
      type: 'title',
      text: 'Límites de una Prueba de Ghosting Online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una prueba de ghosting basada en navegador depende del tiempo de animación del navegador, la carga de la GPU, la composición del sistema operativo y tu configuración de pantalla. Es excelente para comparación visual, pero las mediciones exactas de tiempo de respuesta requieren equipos especializados como cámaras de persecución, fotodiodos o métodos basados en osciloscopio. Usa esta prueba para elegir configuraciones y detectar artefactos obvios, no para certificar las afirmaciones de tiempo de respuesta del fabricante.',
    },
  ],
  ui: {
    badge: 'Claridad de Movimiento',
    speedLabel: 'Velocidad de movimiento',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Intensidad de estela',
    backgroundLabel: 'Fondo',
    backgroundDark: 'Oscuro',
    backgroundLight: 'Claro',
    backgroundGrid: 'Cuadrícula',
    patternLabel: 'Objetivo de prueba',
    patternBars: 'Barras de claridad',
    patternText: 'Bloque de texto',
    patternUfo: 'OVNI',
    pursuitLabel: 'Guía de persecución',
    pursuitOn: 'Activado',
    pursuitOff: 'Desactivado',
    fullscreen: 'Pantalla completa',
    exitFullscreen: 'Salir de pantalla completa',
    pause: 'Pausa',
    resume: 'Reanudar',
    targetText: 'MOVIMIENTO',
    estimatedBlur: 'desenfoque estimado',
    frameStep: 'Paso de fotograma',
    persistence: 'Persistencia',
    sampleCount: 'Muestras de estela',
    instructions: 'Observa el borde trasero del objetivo en movimiento mientras cambias velocidad, intensidad de estela, fondo, modo pantalla completa y configuración de overdrive del monitor.',
    reset: 'Reiniciar',
  },
};
