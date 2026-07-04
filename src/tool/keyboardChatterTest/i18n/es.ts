import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-chatter-teclado';
const title = 'Test de Chatter de Teclado';
const description = 'Detecta chattering en teclados mecánicos, doble escritura y rebote de interruptor defectuoso comprobando cuán rápido aparece la misma tecla dos veces.';

const faqData = [
  {
    question: '¿Qué es el chattering de teclado?',
    answer: 'El chattering de teclado es un fallo de hardware donde una pulsación física se registra como múltiples pulsaciones. Es común en interruptores mecánicos sucios, desgastados, oxidados o mal debounced.',
  },
  {
    question: '¿Cómo funciona este test de chattering de teclado?',
    answer: 'Presiona la misma tecla sospechosa lentamente, una pulsación a la vez. Si el registro muestra pulsaciones repetidas a solo unos milisegundos de distancia, el interruptor puede estar rebotando y produciendo dobles letras.',
  },
  {
    question: '¿Qué delta significa que mi teclado está haciendo doble escritura?',
    answer: 'Una pulsación repetida por debajo de 30 ms es fuertemente sospechosa de chattering. Repeticiones de 30 a 50 ms merecen atención. Las repeticiones intencionadas normales suelen estar por encima de 50 ms para la mayoría de usuarios.',
  },
  {
    question: '¿Por qué la primera pulsación no muestra delta?',
    answer: 'Un delta necesita una pulsación previa de la misma tecla. La primera pulsación establece la línea base, y las posteriores muestran el intervalo de tiempo en milisegundos.',
  },
  {
    question: '¿Puede el software arreglar el chattering de teclado?',
    answer: 'El software de debounce puede ocultar algunos síntomas, pero no repara el interruptor. Limpiar, reasentar interruptores hot-swap, reemplazar el interruptor o reparar la PCB del teclado puede ser necesario.',
  },
];

const howToData = [
  {
    name: 'Abre la herramienta y presiona teclas normalmente',
    text: 'No hay botón de inicio. Haz clic en la herramienta si es necesario, luego presiona la tecla que ha estado escribiendo doble.',
  },
  {
    name: 'Pulsa la tecla sospechosa de una en una',
    text: 'Presiona la tecla que escribe doble. Si una pulsación física crea varias filas en el registro con deltas diminutos, el interruptor probablemente está haciendo chattering.',
  },
  {
    name: 'Lee el código de colores',
    text: 'Verde significa normal por encima de 50 ms, amarillo significa sospechoso de 30 a 50 ms y rojo significa chattering detectado por debajo de 30 ms.',
  },
  {
    name: 'Exporta el registro si es necesario',
    text: 'Usa el botón de descarga para guardar un registro CSV que puede ayudar a comparar teclas o documentar un fallo intermitente.',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
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
      text: 'Test de Doble Escritura de Teclado Mecánico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este test de chattering de teclado ayuda a diagnosticar un teclado mecánico que escribe dos letras de una pulsación, pierde liberaciones limpias o produce caracteres repetidos sin que pulses dos veces intencionalmente. Úsalo antes de limpiar interruptores, cambiar la configuración de debounce del firmware, abrir una reclamación de garantía o reemplazar un interruptor hot-swap.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cómo leer el resultado',
      badge: 'Umbrales de delta',
      html: '<p><strong>Normal</strong> significa que la repetición fue superior a 50 ms y suele ser intencionada. <strong>Sospechoso</strong> significa 30-50 ms y debe volver a probarse en la misma tecla. <strong>Chattering detectado</strong> significa por debajo de 30 ms, lo que probablemente es una pulsación física que rebota en múltiples contactos eléctricos.</p>',
    },
    {
      type: 'title',
      text: 'Por Qué los Interruptores Mecánicos Hacen Chattering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un interruptor mecánico no se cierra como una señal digital perfectamente limpia. Los contactos metálicos pueden rebotar durante unos milisegundos antes de asentarse. El firmware del teclado normalmente filtra ese rebote con una ventana de debounce. El chattering ocurre cuando el contacto está sucio, desgastado, oxidado, flojo, agrietado o mal ajustado hasta el punto de que el teclado reporta pulsaciones extra después de que el filtro de debounce debería haberlas manejado.',
    },
    {
      type: 'table',
      headers: ['Síntoma', 'Causa probable', 'Qué intentar primero'],
      rows: [
        ['Una tecla escribe la misma letra dos veces', 'Contacto del interruptor sucio o desgastado', 'Retira la tecla, sopla el polvo y prueba de nuevo antes de reemplazar el interruptor.'],
        ['Varias teclas hot-swap hacen chattering tras una construcción', 'Pines del interruptor no asentados correctamente', 'Extrae y reasienta el interruptor, verificando pines doblados o un socket flojo.'],
        ['Solo ocurre después de derrames o humedad', 'Oxidación o residuos en los contactos', 'Desconecta el teclado y limpia según la guía del fabricante.'],
        ['Muchas teclas muestran deltas diminutos', 'Debounce del firmware demasiado bajo o problema de escaneo', 'Compara en otro puerto USB y revisa la configuración de debounce del firmware si está disponible.'],
      ],
    },
    {
      type: 'title',
      text: 'Método de Prueba que Reduce Falsos Positivos',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Prueba una tecla sospechosa a la vez en lugar de escribir frases completas.',
        'Presiona la tecla una vez, suéltala completamente y espera un momento antes de la siguiente pulsación.',
        'Compara la tecla sospechosa con una tecla cercana que se sienta sana.',
        'Ignora la primera fila de una tecla porque no tiene una pulsación previa con la que comparar.',
        'Si la misma tecla muestra repetidamente filas rojas por debajo de 30 ms con pulsaciones únicas, trátalo como un fallo de hardware.',
        'Si solo aparecen filas amarillas, repite la prueba más despacio y comprueba si tu ritmo de tecleo está causando el intervalo corto.',
      ],
    },
    {
      type: 'title',
      text: 'Chattering vs. Escritura Rápida Intencionada',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Chattering',
          description: 'Agrupado en una tecla, a menudo por debajo de 30 ms, y aparece cuando pretendías una sola pulsación.',
          points: ['Inspecciona el interruptor o socket.', 'Compara con una tecla sana cercana.'],
        },
        {
          title: 'Escritura rápida',
          description: 'Afecta a muchas teclas, sigue tu ritmo y tiende a situarse por encima de 50 ms entre pulsaciones repetidas de la misma tecla.',
          points: ['Generalmente uso normal.', 'Vuelve a probar con pulsaciones únicas más lentas.'],
        },
        {
          title: 'Repetición de tecla del SO',
          description: 'Aparece al mantener una tecla presionada y generalmente se repite con un ritmo regular establecido por tu sistema operativo.',
          points: ['Suelta completamente entre pulsaciones.', 'Verifica la configuración de repetición de teclado por separado.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Qué Hacer Cuando una Tecla Falla',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Guarda un registro CSV antes de cambiar nada para poder comparar resultados antes y después.',
        'Retira la tecla e inspecciona si hay suciedad, residuos de líquido o un vástago que no retorna suavemente.',
        'Para teclados hot-swap, reasienta o reemplaza el interruptor y prueba la misma posición de nuevo.',
        'Para teclados soldados, compara las opciones de debounce del firmware antes de asumir que la PCB necesita reparación.',
        'Prueba otro cable y puerto USB si múltiples teclas no relacionadas muestran deltas imposibles.',
        'Para soporte de garantía, incluye la tecla afectada, los valores delta repetidos, el modelo de teclado, la versión de firmware y si el fallo sigue al interruptor o al socket de la PCB.',
      ],
    },
    {
      type: 'summary',
      title: 'Regla rápida',
      items: [
        'Una sola fila roja es una pista, no un veredicto.',
        'Filas rojas repetidas por debajo de 30 ms en la misma tecla física son fuerte evidencia de chattering de teclado.',
        'Usa pulsaciones únicas deliberadas y compara el interruptor sospechoso con una tecla sana cercana antes de reemplazar hardware.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Presiona cualquier tecla',
    statusListening: 'Midiendo deltas de tecla',
    statusChatter: 'Chattering detectado',
    totalPresses: 'Pulsaciones totales',
    chatterEvents: 'Eventos de chattering',
    worstDelta: 'Peor delta',
    watchWindow: 'Filas conservadas',
    keyColumn: 'Tecla',
    deltaColumn: 'Delta',
    verdictColumn: 'Veredicto',
    timeColumn: 'Tiempo',
    normal: 'Normal',
    suspect: 'Sospechoso',
    chatter: 'Chattering',
    waiting: 'Esperando',
    clear: 'Limpiar registro',
    exportLog: 'Exportar CSV',
    hint: 'El registro conserva las 80 filas más recientes para que las sesiones largas sean rápidas. La repetición de tecla mantenida se ignora; las filas rojas provienen de pulsaciones separadas que ocurrieron demasiado juntas.',
    captureNotice: 'Sin botón de inicio. Pulsa una tecla sospechosa una vez y observa el delta desde su pulsación anterior.',
    keyboardAriaLabel: 'Actividad reciente de teclas',
    logAriaLabel: 'Registro de eventos de chattering de teclado',
    escapeKey: 'Esc',
    backspaceKey: 'Retro',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Mayús',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Espacio',
    csvHeader: 'tecla,código,delta_ms,gravedad,hora',
  },
};
