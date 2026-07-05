import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'probador-fase-altavoces';
const title = 'Probador de Fase de Altavoces';
const description =
  'Reproduce señales de prueba estéreo en fase e invertidas 180 grados en tu navegador para comprobar la polaridad de los altavoces, errores de cableado y cancelación de fase.';

const faqData = [
  {
    question: '¿Cómo sé si la polaridad de mis altavoces es correcta?',
    answer:
      'Reproduce la señal normal y luego la señal invertida desde la misma posición de escucha. Con altavoces correctamente cableados, el modo invertido debería sonar más débil, hueco o menos centrado porque los canales izquierdo y derecho se cancelan parcialmente en la sala. Si el modo invertido suena más lleno o fuerte, es posible que uno de los altavoces ya esté conectado con la polaridad invertida.',
  },
  {
    question: '¿Qué significa fase invertida en esta prueba?',
    answer:
      'La herramienta envía la misma señal a ambos canales y luego multiplica un canal por -1 en el modo invertido. Eso invierte la forma de onda 180 grados sin necesidad de descargar un archivo de audio. El resultado físico equivale a invertir los terminales positivo y negativo de un altavoz para la señal de prueba.',
  },
  {
    question: '¿Puede esta prueba verificar todos los altavoces de un cine en casa?',
    answer:
      'Es ideal para comprobar un par estéreo o los altavoces frontales izquierdo y derecho de un sistema más grande. Para sistemas envolventes completos, prueba los pares uno a uno y combina el resultado con la prueba de canales de tu receptor AV, la calibración de distancia y un micrófono de medición o sonómetro si está disponible.',
  },
  {
    question: '¿Debería usar ruido rosa o un tono sinusoidal?',
    answer:
      'El ruido rosa suele ser más fácil para las comprobaciones de polaridad porque cubre un rango amplio de frecuencias y hace que la cancelación sea evidente. Un tono sinusoidal puede ayudar a centrarse en una frecuencia concreta, pero los modos de sala pueden hacer que un solo tono sea engañoso.',
  },
  {
    question: '¿Es seguro para altavoces y auriculares?',
    answer:
      'Sí, a niveles moderados. Empieza bajo, evita la ganancia máxima del amplificador y no reproduzcas tonos continuos a alto volumen con auriculares, altavoces pequeños de portátil o altavoces desconocidos. Detén la reproducción inmediatamente si oyes distorsión o esfuerzo mecánico.',
  },
];

const howToData = [
  {
    name: 'Colócate en la posición de escucha',
    text: 'Siéntate donde escuchas normalmente para que la cancelación acústica que percibas coincida con la sala y la ubicación real de los altavoces.',
  },
  {
    name: 'Reproduce la señal normal',
    text: 'Pulsa Reproducir En Fase y observa la imagen central, el volumen y el cuerpo tonal.',
  },
  {
    name: 'Reproduce la señal invertida',
    text: 'Pulsa Reproducir Fuera De Fase. Los altavoces correctamente cableados deberían sonar generalmente más difusos, huecos o silenciosos.',
  },
  {
    name: 'Revisa el cableado si el resultado se invierte',
    text: 'Si el modo invertido suena más fuerte que el normal, comprueba los terminales positivo y negativo de un altavoz, los bornes del amplificador, los adaptadores y las placas de pared.',
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
  step: howToData.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Prueba Online de Fase y Polaridad de Altavoces', level: 2 },
    {
      type: 'paragraph',
      html: 'Este probador de fase de altavoces compara una señal estéreo normal con una versión en la que uno de los canales se invierte <strong>180 grados</strong>. El objetivo práctico es sencillo: confirmar si los dos altavoces de un par se mueven juntos cuando deben. Cuando los altavoces izquierdo y derecho están cableados con la misma polaridad, los graves y los medios se refuerzan entre sí y la imagen central se percibe estable. Cuando un altavoz está cableado al revés, los conos se mueven en direcciones opuestas para la misma forma de onda, lo que puede hacer que las voces pierdan cuerpo, los graves desaparezcan y la escena estéreo se sienta extrañamente ancha o hueca.',
    },
    {
      type: 'paragraph',
      html: 'La prueba se genera localmente en el navegador. No transmite ningún archivo de audio pesado. En modo normal, ambos canales reciben el mismo ruido rosa o tono sinusoidal. En modo invertido, un canal se multiplica por <code>-1</code>, lo que crea una forma de onda matemáticamente invertida. Si el cableado real de tus altavoces es correcto, esa inversión artificial debería crear una cancelación evidente. Si tu cableado físico ya está invertido, el botón invertido puede corregir parcialmente el error, por lo que podría sonar más fuerte, más sólido o más centrado que el botón normal.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Interpretación rápida',
      badge: 'Regla básica',
      html: '<p>Si <strong>Fuera De Fase</strong> suena más débil, distante, hueco o silencioso que <strong>En Fase</strong>, tu par izquierdo/derecho probablemente esté bien cableado. Si Fuera De Fase suena más lleno o fuerte, revisa los terminales rojo y negro de un altavoz, el amplificador, los conectores banana, las placas de pared, el arnés del coche o cualquier adaptador en la cadena.</p>',
    },
    {
      type: 'table',
      headers: ['Lo que oyes', 'Significado probable', 'Siguiente paso'],
      rows: [
        ['Normal suena lleno, invertido suena hueco', 'Los dos altavoces probablemente tienen la polaridad correcta.', 'Deja el cableado como está y continúa con la colocación o calibración.'],
        ['Invertido suena más lleno que normal', 'Es posible que un altavoz esté físicamente cableado al revés.', 'Comprueba los terminales positivo y negativo solo en un lado del par.'],
        ['Ambos modos suenan casi igual', 'Los altavoces pueden estar demasiado separados, dominan los reflejos de la sala o la salida es mono.', 'Siéntate en la posición de escucha, desactiva el procesamiento mono y prueba con ruido rosa.'],
        ['Ambos modos suenan débiles en graves', 'La cancelación de sala, la fase del subwoofer, el crossover o la colocación pueden ser el problema principal.', 'Haz un barrido de graves y comprueba la polaridad del subwoofer por separado.'],
      ],
    },
    { type: 'title', text: 'Por Qué Suena Mal la Polaridad Invertida de los Altavoces', level: 2 },
    {
      type: 'paragraph',
      html: 'Un altavoz convierte una forma de onda eléctrica en movimiento del cono. Para una onda de presión positiva, dos altavoces iguales deberían empujar el aire en la misma dirección al mismo tiempo. Si un altavoz tiene los cables positivo y negativo intercambiados, ese altavoz se mueve hacia dentro mientras el otro se mueve hacia fuera para la misma señal. En un par estéreo, esto no solo hace que el sonido sea más silencioso en todas partes; la sala, la distancia entre altavoces, la longitud de onda y la posición de escucha deciden dónde es más fuerte la cancelación. Los síntomas más notorios suelen ser la reducción de graves, un centro fantasma débil y voces que parecen despegarse del espacio entre los altavoces.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Las voces principales y los diálogos deben anclarse cerca del centro cuando ambos altavoces reproducen la misma señal mono.',
        'El bombo, el bajo y las notas graves del piano deben tener cuerpo en lugar de sonar ligeros.',
        'La imagen estéreo no debería sentirse artificialmente ancha cuando la fuente es mono.',
        'Mover ligeramente la cabeza no debería hacer que la imagen central colapse por completo.',
        'Un par correctamente cableado debería hacer que la prueba invertida suene menos natural que la normal.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polaridad', definition: 'La orientación positiva o negativa de la señal eléctrica que alimenta el driver de un altavoz.' },
        { term: 'Fase', definition: 'La relación temporal entre dos formas de onda, a menudo descrita en grados a lo largo de un ciclo.' },
        { term: 'Inversión de 180 grados', definition: 'Una forma de onda volteada verticalmente, de modo que la presión positiva se convierte en presión negativa en el mismo instante.' },
        { term: 'Cancelación', definition: 'Una reducción del nivel de sonido cuando dos formas de onda similares llegan con polaridad o tiempo opuestos.' },
        { term: 'Centro fantasma', definition: 'La imagen central aparente creada cuando un sonido idéntico llega a los altavoces izquierdo y derecho de manera uniforme.' },
      ],
    },
    {
      type: 'tip',
      title: 'No hagas la prueba desde el lado de un altavoz',
      html: 'Siéntate en la posición de escucha normal. La cancelación de fase es espacial: un resultado obtenido a medio metro del altavoz izquierdo puede ser completamente diferente del resultado en el sofá, la silla de estudio o el asiento del conductor.',
    },
    { type: 'title', text: 'Ruido Rosa Frente a Tono Sinusoidal Para Comprobaciones de Polaridad', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ruido rosa',
          description: 'Ruido de banda ancha con más energía en las octavas bajas que el ruido blanco. Facilita juzgar de oído el cuerpo tonal general, la imagen central y la cancelación.',
          highlight: true,
          points: ['Mejor primera opción para comprobaciones rápidas de polaridad.', 'Menos probable que esté dominado por un solo modo de sala.', 'Útil para cine en casa, monitores de estudio y audio de coche.'],
        },
        {
          title: 'Tono sinusoidal',
          description: 'Un tono de frecuencia única que puede exponer la cancelación en una frecuencia elegida, pero también puede exagerar los picos y nulos de la sala.',
          points: ['Útil para investigar un problema específico de crossover o graves.', 'Puede ser engañoso si la sala tiene un nulo fuerte en esa frecuencia.', 'Mantén el volumen moderado porque los tonos puros se vuelven fatigantes.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Para una comprobación rápida de polaridad, empieza con ruido rosa. El ruido rosa distribuye la energía por todo el espectro, por lo que juzgas el par de altavoces como un sistema en lugar de juzgar una frecuencia que podría estar en un nulo de sala. Usa el control de tono sinusoidal solo cuando quieras centrarte en una banda problemática conocida, como una cancelación en el rango vocal alrededor de 300 Hz o un problema de cruce de graves cerca de 80 Hz. Si el resultado del tono sinusoidal cambia drásticamente al mover la cabeza unos centímetros, la sala está influyendo fuertemente en esa frecuencia.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: 'Inversión matemática aplicada a un canal', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Multiplicador de ganancia usado para el canal invertido', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: 'Descargas de audio necesarias para la señal de prueba', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Lista de Verificación Para Cine en Casa y Monitores de Estudio', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Altavoces frontales de cine en casa',
      html: 'Usa los botones normal e invertido solo con los altavoces frontales izquierdo y derecho activos. Desactiva los upmixers, el sonido envolvente virtual, el modo noche, la mejora de diálogo y la corrección de sala si quieres aislar primero el cableado sin procesar. Después de confirmar la polaridad, vuelve a activar la calibración y verifica que el diálogo permanezca centrado.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Monitores de estudio',
      html: 'Envía la señal del navegador a través de las mismas salidas de interfaz que usa tu DAW. Comprueba que ambos cables balanceados estén cableados de forma consistente y que los interruptores de polaridad del controlador de monitores no estén activados. Un monitor invertido puede hacer que las decisiones de compatibilidad mono no sean fiables durante la mezcla.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Audio de coche',
      html: 'Los habitáculos de los coches crean reflejos intensos y asimetría en los asientos, así que escucha desde el asiento del conductor y repite desde el asiento del pasajero si es necesario. Los adaptadores de arnés de fábrica, los reemplazos de altavoces de puerta y las instalaciones de amplificadores son lugares habituales donde los cables positivo y negativo pueden intercambiarse.',
    },
    {
      type: 'proscons',
      title: 'Ventajas y límites de la prueba de fase en navegador',
      items: [
        { pro: 'Comprobación inmediata sin instalar software ni descargar archivos de audio.', con: 'No puede identificar qué cable físico está mal a menos que inspecciones el sistema.' },
        { pro: 'Funciona bien para un par estéreo, auriculares, monitores de campo cercano y comprobaciones rápidas de instalación.', con: 'La acústica de la sala puede ocultar o exagerar el efecto en algunos asientos.' },
        { pro: 'El ruido rosa hace que la cancelación amplia sea más fácil de oír que un solo tono de prueba.', con: 'Los sistemas envolventes de múltiples altavoces aún necesitan verificación canal por canal.' },
      ],
    },
    { type: 'title', text: 'Cómo Solucionar Una Prueba de Polaridad Fallida', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Apaga el amplificador antes de cambiar cables de altavoz o conectores banana.',
        'Elige un altavoz del par y traza rojo con rojo y negro con negro desde el amplificador hasta el altavoz.',
        'Inspecciona cualquier placa de pared, borne de resorte, adaptador, conector speakON o arnés de coche entre el amplificador y el altavoz.',
        'Si el cable de altavoz tiene una raya, nervadura, texto impreso o lado de cobre/plata, usa el mismo conductor para el positivo en ambos extremos.',
        'Después de cambiar un lado, vuelve a ejecutar los modos normal e invertido desde la posición de escucha.',
        'Si el resultado sigue siendo ambiguo, coloca temporalmente los altavoces más juntos y repite a bajo volumen.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Los subwoofers necesitan una comprobación de fase independiente',
      badge: 'Sistemas de graves',
      html: '<p>Esta herramienta compara un par izquierdo/derecho. Un crossover de subwoofer puede ser eléctricamente correcto pero acústicamente estar fuera de fase porque la distancia, el retardo DSP, la pendiente del crossover y la colocación modifican la sincronización. Usa esta prueba para el par principal y luego utiliza un barrido de crossover o la calibración del receptor para la transición del subwoofer.</p>',
    },
    {
      type: 'message',
      title: 'Regla práctica de escucha',
      ariaLabel: 'Regla práctica de escucha para pruebas de fase',
      html: 'En instalaciones reales, el ajuste correcto es el que hace que el material mono suene centrado, lleno y estable en la posición de escucha real. El modo invertido es un contraste de diagnóstico, no un modo de escucha.',
    },
    {
      type: 'summary',
      title: 'Resumen del diagnóstico de polaridad de altavoces',
      items: [
        'El modo normal debería sonar más fuerte y centrado que el invertido cuando el par de altavoces está bien cableado.',
        'Que el modo invertido suene más fuerte es una fuerte pista de que una conexión física de altavoz está invertida.',
        'El ruido rosa es la mejor primera señal porque reduce la probabilidad de juzgar solo una frecuencia de sala.',
        'Los tonos sinusoidales son útiles para solución de problemas específicos, pero pueden estar dominados por los modos de sala.',
        'Baja siempre el volumen antes de cambiar de modo, especialmente con auriculares o amplificadores de alta potencia.',
      ],
    },
  ],
  ui: {
    normal: 'En Fase',
    inverted: 'Invertido',
    stop: 'Parar',
    pause: 'Pausa',
    volume: 'Nivel de salida',
    noiseColor: 'Señal de prueba',
    pinkNoise: 'Ruido rosa',
    sineTone: 'Tono sinusoidal',
    frequency: 'Frecuencia del tono',
    statusReady: 'Listo',
    statusNormal: 'En fase',
    statusInverted: 'Invertido',
    instruction:
      'Invertido debería sonar más débil. Más fuerte indica revisar cableado.',
    channelLabel: 'Probador de fase de altavoces',
    leftChannel: 'Canal izquierdo',
    rightChannel: 'Canal derecho',
    leftShort: 'I',
    rightShort: 'D',
    polarityNormal: '0° alineado',
    polarityInverted: '180° invertido',
    safety: 'Empieza bajo. Las pruebas de polaridad pueden volverse fuertes con amplificadores, monitores de estudio, sistemas de audio de coche y auriculares.',
  },
};
