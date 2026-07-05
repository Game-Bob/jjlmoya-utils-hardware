import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'expulsor-agua-limpiador-altavoces';
const title = 'Expulsor de Agua para Altavoces';
const description =
  'Reproduce un tono grave de 165 Hz para ayudar a expulsar agua, polvo o residuos sueltos de los altavoces del móvil, la tableta y el portátil.';

const faqData = [
  {
    question: '¿Qué frecuencia debo usar para expulsar agua de un altavoz?',
    answer:
      'Un tono grave de unos 165 Hz es un buen punto de partida porque mueve el diafragma de los altavoces pequeños de forma visible sin depender de frecuencias agudas molestas. Algunos dispositivos responden mejor entre 145 Hz y 190 Hz, por eso la herramienta incluye los tres ajustes predefinidos.',
  },
  {
    question: '¿Puede un tono de sonido eliminar toda el agua de mi móvil?',
    answer:
      'No. Puede ayudar a sacudir las gotas de la rejilla del altavoz o de la cámara acústica, pero no seca el líquido que haya detrás de las juntas, dentro de los puertos ni bajo la pantalla. Si el dispositivo se ha sumergido, apágalo y sigue las instrucciones de secado del fabricante.',
  },
  {
    question: '¿Es seguro para los altavoces?',
    answer:
      'Usa sesiones cortas, empieza por debajo del volumen máximo y para si oyes chirridos, traqueteos o distorsión. Un altavoz minúsculo de móvil no está diseñado para reproducir graves prolongados a alto volumen, así que varios ciclos cortos son más seguros que uno largo e intenso.',
  },
  {
    question: '¿Por qué mi altavoz suena apagado después de mojarse?',
    answer:
      'Una película de agua añade masa y amortiguación al diafragma del altavoz y puede obstruir las aberturas de la rejilla. Esto reduce los agudos, debilita la claridad de la voz y hace que los graves suenen borrosos hasta que las gotas se mueven o se evaporan.',
  },
  {
    question: '¿Debería usar arroz después de que mi móvil se moje?',
    answer:
      'El arroz no es un método de reparación fiable y puede dejar almidón o partículas en los puertos. Usa en su lugar ventilación, un paño sin pelusa que no suelte fibras y las instrucciones del fabricante. La expulsión por sonido solo sirve para la salida del altavoz, no para todo el dispositivo.',
  },
];

const howToData = [
  {
    name: 'Quita las fundas y orienta el altavoz hacia abajo',
    text: 'Retira cualquier funda que cubra la rejilla, sujeta el dispositivo de forma que la gravedad ayude a que las gotas salgan por la abertura del altavoz y mantén los puertos despejados.',
  },
  {
    name: 'Empieza con el ajuste estándar de 165 Hz',
    text: 'Pulsa Iniciar y deja que el tono suene durante 30 segundos. El movimiento del diafragma puede desalojar las gotas atrapadas en la malla de la rejilla o en la cámara acústica superficial.',
  },
  {
    name: 'Prueba los ajustes suave o profundo si es necesario',
    text: 'Si el sonido sigue apagado, prueba con 145 Hz o 190 Hz durante un ciclo corto. Cada tamaño de altavoz resuena en un punto distinto.',
  },
  {
    name: 'Para si el altavoz distorsiona',
    text: 'Baja el volumen o detén el tono inmediatamente si se vuelve áspero, zumbante o forzado mecánicamente. La distorsión significa que el transductor está recibiendo demasiada exigencia.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Cómo Funciona un Tono Expulsor de Agua', level: 2 },
    {
      type: 'paragraph',
      html: 'El altavoz de un móvil es un pequeño diafragma móvil. Cuando se reproduce un tono de baja frecuencia, el diafragma se mueve hacia delante y hacia atrás muchas veces por segundo. A <strong>165 Hz</strong>, ese movimiento ocurre 165 veces cada segundo. Si hay agua sobre la rejilla o atrapada justo dentro de la salida acústica, el aire en movimiento puede romper la tensión superficial de la gota y empujarla hacia la abertura.',
    },
    {
      type: 'paragraph',
      html: 'El proceso es mecánico, no químico. El sonido no evapora el líquido ni convierte los componentes electrónicos internos en resistentes al agua. Se entiende mejor como un ciclo de vibración controlada para la salida del altavoz, útil cuando la voz, las notificaciones o la música suenan apagadas tras la lluvia, una salpicadura, el baño o un enjuague rápido.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'frecuencia inicial estándar', icon: 'mdi:sine-wave' },
        { value: '30 s', label: 'primer ciclo corto de limpieza', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'rango práctico de ajuste', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Lo que el tono puede y no puede hacer',
      badge: 'Alcance',
      icon: 'mdi:information',
      html: 'El tono puede ayudar a mover las gotas sueltas en el conducto del altavoz. No puede eliminar líquido de los puertos de carga, bandejas SIM, micrófonos, módulos de cámara, juntas adhesivas ni del espacio bajo la pantalla.',
    },
    { type: 'title', text: 'Cuándo Usarlo', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'El altavoz suena bajo, apagado o con burbujeo tras una salpicadura.',
        'Un lado del altavoz estéreo del móvil suena más flojo que el otro.',
        'La rejilla del altavoz del portátil o la tableta acumuló gotas después de limpiarla.',
        'Se ve polvo o pelusa suelta sobre la rejilla y la reproducción normal suena mate.',
        'El dispositivo funciona con normalidad, carga bien y no muestra avisos de líquido en ningún puerto.',
      ],
    },
    {
      type: 'tip',
      title: 'La mejor posición física',
      html: 'Coloca la rejilla del altavoz hacia abajo o ligeramente inclinada hacia abajo. El tono proporciona el movimiento, pero la gravedad decide hacia dónde va la gota liberada. Quitar la funda también importa, porque muchas fundas crean un pequeño hueco que retiene el agua cerca de la salida.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Por qué los altavoces del móvil se ven afectados tan rápido',
      html: 'Los móviles actuales usan transductores compactos de alta excursión y canales acústicos diminutos. Una gota que sería inofensiva en un altavoz grande de escritorio puede cubrir una parte significativa de la rejilla del móvil, cambiando la presión y amortiguando el diafragma lo suficiente para que las voces suenen lejanas.',
    },
    {
      type: 'table',
      headers: ['Síntoma', 'Causa probable', 'Qué probar'],
      rows: [
        ['Voz apagada', 'Película de agua sobre la rejilla', 'Ejecuta 165 Hz durante 30 segundos, con el altavoz hacia abajo'],
        ['Zumbido durante el tono', 'Gota en movimiento o transductor sobreexigido', 'Baja el volumen; para si el zumbido persiste'],
        ['Un altavoz más bajo', 'Solo una salida está bloqueada', 'Gira el dispositivo para que esa salida apunte hacia abajo'],
        ['Sin sonido', 'Salida silenciada, ruta Bluetooth o fallo de hardware', 'Revisa la ruta de audio antes de repetir ciclos'],
      ],
    },
    { type: 'title', text: 'Elegir la Frecuencia Correcta', level: 2 },
    {
      type: 'paragraph',
      html: 'No hay un número mágico universal porque el tamaño del altavoz, la forma de la rejilla, el diseño de la membrana impermeable y la geometría de la funda varían. La razón por la que <strong>165 Hz</strong> es popular es que se sitúa lo suficientemente grave para crear un desplazamiento visible del cono en muchos altavoces pequeños, dentro de un rango que la mayoría de los dispositivos pueden reproducir con fuerza.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz suave',
          description: 'Útil para altavoces muy pequeños o forzados, donde el tono estándar suena áspero.',
          icon: 'mdi:leaf',
          points: ['Tono más grave', 'Movimiento menos agresivo', 'Buen primer reintento'],
        },
        {
          title: '165 Hz estándar',
          description: 'Punto de partida equilibrado para móviles, tabletas y muchas aberturas de altavoz de portátil.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Ajuste por defecto', 'Fuerte desplazamiento del diafragma', 'Mejor primer ciclo'],
        },
        {
          title: '190 Hz profundo',
          description: 'Un empuje ligeramente más alto que puede funcionar cuando un altavoz concreto resuena por encima de 165 Hz.',
          icon: 'mdi:waves',
          points: ['Vibración más ajustada', 'Segunda pasada útil', 'Evita ciclos largos'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Frecuencias graves frente a frecuencias agudas',
      items: [
        { pro: 'Los tonos graves mueven más aire y recorrido del diafragma en altavoces pequeños.', con: 'Pueden distorsionar antes al volumen máximo.' },
        { pro: 'Los tonos agudos se oyen mejor a través de algunas rejillas.', con: 'Suelen mover menos aire y pueden resultar molestos o inaudibles para algunos usuarios.' },
        { pro: 'Un tono grave corto es fácil de evaluar de oído.', con: 'No debe repetirse en bucle durante muchos minutos sin pausas.' },
      ],
    },
    {
      type: 'message',
      title: 'Regla de ajuste de frecuencia',
      ariaLabel: 'Regla de ajuste de frecuencia',
      html: 'Si el altavoz suena limpio después de un ciclo de 30 segundos, para. Más ciclos no son una rutina de mantenimiento; son solo una ayuda de recuperación cuando ha llegado líquido o suciedad a la abertura del altavoz.',
    },
    { type: 'title', text: 'Procedimiento de Limpieza Seguro', level: 2 },
    {
      type: 'paragraph',
      html: 'Empieza por debajo del volumen máximo del sistema, especialmente en portátiles y tabletas con altavoces más grandes. Sube solo hasta que el tono se oiga con claridad y el dispositivo vibre ligeramente. Si oyes un traqueteo agudo, un chirrido o una caída brusca de volumen, detén la herramienta y deja que el dispositivo se seque de forma natural.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Desconecta auriculares y altavoces Bluetooth para que el tono suene por el altavoz mojado.',
        'Seca el exterior con un paño sin pelusa antes de reproducir el sonido.',
        'Sujeta la salida del altavoz hacia abajo y mantén la mano alejada de la rejilla.',
        'Ejecuta 30 segundos a 165 Hz.',
        'Espera un minuto, prueba el audio de voz normal y repite solo una vez más si es necesario.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'No uses calor ni aire comprimido',
      badge: 'Evitar',
      icon: 'mdi:alert',
      html: 'Los secadores de pelo, los hornos y el aire comprimido a alta presión pueden empujar la humedad más adentro, deformar juntas o dañar membranas. El tono de sonido es más suave porque trabaja a partir del movimiento del altavoz que ya está integrado en el dispositivo.',
    },
    {
      type: 'summary',
      title: 'Lista rápida de seguridad',
      items: [
        'Los ciclos cortos son mejores que una reproducción larga y continua.',
        'Baja el volumen si el tono zumba con fuerza.',
        'Para si el dispositivo muestra avisos de detección de líquido.',
        'La expulsión por sonido solo ayuda a la salida del altavoz, no a todo el móvil.',
      ],
    },
    { type: 'title', text: 'La Resistencia al Agua No Es Impermeabilidad', level: 2 },
    {
      type: 'paragraph',
      html: 'Muchos móviles anuncian resistencia al agua, pero esa certificación se mide en condiciones de laboratorio definidas. La exposición real al agua incluye movimiento, jabón, sal, calor, presión, antigüedad, impactos y juntas desgastadas. Un tono limpiador de altavoces no restaura una junta ni confirma que el móvil sea seguro para cargar.',
    },
    {
      type: 'table',
      headers: ['Exposición', 'Utilidad del tono', 'Acción adicional'],
      rows: [
        ['Lluvia ligera', 'A menudo útil si el audio está apagado', 'Seca el exterior y ejecuta un ciclo corto'],
        ['Salpicadura de agua limpia', 'Útil para gotas cerca de la rejilla', 'Mantén los puertos secos antes de cargar'],
        ['Agua de piscina o mar', 'Limitado; pueden quedar residuos', 'Enjuaga solo si el fabricante lo permite; luego servicio técnico si es necesario'],
        ['Jabón, refresco o café', 'Baja; los residuos pegajosos alteran la rejilla', 'Apaga el dispositivo y busca instrucciones de limpieza'],
        ['Inmersión total', 'No es suficiente', 'Sigue los pasos de emergencia del fabricante'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diafragma', definition: 'La superficie móvil dentro de un altavoz que empuja el aire para crear sonido.' },
        { term: 'Resonancia', definition: 'Frecuencia a la que un sistema físico se mueve con más eficiencia porque su forma y masa favorecen esa vibración.' },
        { term: 'Tensión superficial', definition: 'La fuerza que permite que una gota se adhiera a una rejilla o membrana en lugar de fluir de inmediato.' },
        { term: 'Cámara acústica', definition: 'El diminuto conducto interno que guía el sonido del altavoz desde el transductor hasta la abertura del dispositivo.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Por qué puede sonar más alto después de la limpieza',
      html: 'El agua bloquea primero las frecuencias altas porque las longitudes de onda pequeñas se dispersan fácilmente con las obstrucciones de la rejilla. En cuanto las gotas se mueven, las consonantes, los tonos de notificación y el detalle de la voz suelen recuperarse antes de que los graves cambien de forma apreciable.',
    },
    { type: 'title', text: 'Limpieza de Polvo y Residuos', level: 2 },
    {
      type: 'paragraph',
      html: 'La misma vibración puede aflojar polvo seco, pelusa o partículas sueltas sobre la malla del altavoz, pero no debe sustituir una limpieza física cuidadosa. Si los residuos son pegajosos, aceitosos o están incrustados en la rejilla, la vibración por sí sola puede limitarse a moverlos de un lado a otro. Usa un cepillo suave y seco en el exterior y evita introducir herramientas metálicas en la abertura.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vibración sonora',
          description: 'Buena para partículas sueltas y gotas que pueden moverse libremente.',
          icon: 'mdi:sine-wave',
          points: ['Sin contacto con la rejilla', 'Rápido', 'Ideal para salpicaduras recientes'],
        },
        {
          title: 'Cepillado exterior suave',
          description: 'Mejor para pelusa o polvo visible sobre la superficie de la malla.',
          icon: 'mdi:brush',
          points: ['Funciona sin sonido fuerte', 'Evita sobreexigir el altavoz', 'Requiere cuidado cerca de las membranas'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Después de entornos con polvo',
      html: 'Ejecuta el tono a volumen moderado y luego limpia la rejilla exterior con un paño de microfibra seco. No añadas alcohol ni limpiador líquido a menos que el fabricante del dispositivo lo recomiende expresamente para esa superficie.',
    },
    { type: 'title', text: 'Notas Específicas por Dispositivo', level: 2 },
    {
      type: 'paragraph',
      html: 'Los móviles, las tabletas y los portátiles colocan los altavoces en configuraciones acústicas diferentes. Un altavoz inferior de móvil suele tener una salida corta cerca del puerto de carga, por lo que el agua puede salir rápido cuando la rejilla mira hacia abajo. Una tableta puede usar un canal lateral más largo, lo que significa que el tono puede aclarar el sonido de forma gradual en lugar de en un estallido evidente. Un altavoz de portátil a menudo emite a través de la base del teclado o de una ranura inferior, por lo que el líquido puede estar sobre una capa de tela, una malla de plástico o una rejilla externa en lugar de directamente sobre el transductor.',
    },
    {
      type: 'paragraph',
      html: 'Para un móvil, gira el dispositivo hasta que el altavoz que suena apagado sea el punto más bajo. Para una tableta, prueba tanto la orientación vertical como la horizontal, porque la abertura bloqueada puede estar en un borde distinto del esperado. Para un portátil, mantén el equipo sobre una superficie estable y seca y evita inclinar el líquido hacia el teclado, las bisagras o las rejillas de ventilación. El tono debe ayudar al conducto del altavoz; no debe favorecer que el agua se desplace por todo el dispositivo.',
    },
    {
      type: 'table',
      headers: ['Tipo de dispositivo', 'Orientación recomendada', 'Consejo de ciclo'],
      rows: [
        ['Móvil', 'Rejilla del altavoz hacia abajo, sin funda', 'Un ciclo de 30 segundos, luego prueba el audio de voz'],
        ['Tableta', 'Borde bloqueado hacia abajo', 'Empieza a volumen moderado porque los altavoces son más grandes'],
        ['Portátil', 'Posición normal estable salvo que el líquido esté en una rejilla externa', 'Usa volumen más bajo y para si el chasis vibra con fuerza'],
        ['Smartwatch', 'Sigue primero las indicaciones de expulsión de agua del fabricante', 'Usa el tono web solo si el navegador puede enviar el sonido al altavoz del reloj'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Comprobación de Bluetooth y enrutamiento de audio',
      badge: 'Antes de empezar',
      icon: 'mdi:bluetooth-audio',
      html: 'Si hay auriculares inalámbricos, un sistema de coche o un altavoz externo conectados, el tono puede reproducirse por la salida equivocada. Desconecta el audio Bluetooth antes de empezar y confirma que un tono de llamada normal o un vídeo corto suena por el altavoz mojado.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Por qué el micrófono es diferente',
      html: 'El puerto del micrófono es una vía de entrada con malla protectora y un diminuto sensor de presión, no un diafragma de altavoz que pueda empujar el aire hacia fuera. No des por hecho que un tono expulsor de agua limpiará las grabaciones apagadas del micrófono. Deja que el dispositivo se seque y evita hurgar en el orificio del micrófono.',
    },
    { type: 'title', text: 'Volumen, Distorsión y Comodidad Auditiva', level: 2 },
    {
      type: 'paragraph',
      html: 'Un tono expulsor de agua es intencionadamente repetitivo y puede resultar incómodo en una habitación silenciosa. El objetivo no es el máximo volumen, sino el suficiente movimiento del diafragma para perturbar las gotas. Si el tono resulta doloroso, reduce el volumen o aleja el dispositivo manteniendo la salida del altavoz despejada. La comodidad auditiva importa porque un ciclo de limpieza exitoso debería durar segundos, no una exposición prolongada.',
    },
    {
      type: 'paragraph',
      html: 'La distorsión es una señal de advertencia útil. Un tono grave limpio suena estable, incluso si el cuerpo del móvil vibra. Un tono defectuoso suena crepitante, áspero, metálico o inestable. Eso puede ocurrir porque el agua se está moviendo, porque el altavoz está llegando a su límite de desplazamiento o porque el amplificador del dispositivo está recortando. Bajar el volumen es la primera corrección; repetir más alto es el movimiento equivocado.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Usa los botones de volumen del dispositivo y el control deslizante de la herramienta juntos; cualquiera de los dos puede hacer que la salida sea demasiado alta.',
        'Evita colocar el altavoz contra una mesa, almohada o mano, porque bloquear el flujo de aire aumenta el traqueteo.',
        'Haz pausas entre ciclos para que el transductor y el amplificador no estén a alto rendimiento de forma continua.',
        'Si la música normal sigue crepitando después del tiempo de secado, trátalo como un síntoma de reparación, no como un problema de limpieza.',
      ],
    },
    {
      type: 'message',
      title: 'Regla de comodidad',
      ariaLabel: 'Regla de comodidad',
      html: 'Si el tono te resulta demasiado alto para los oídos, ya es más fuerte de lo necesario para un primer intento. La expulsión de agua depende del movimiento y la orientación, no de un volumen castigador.',
    },
    { type: 'title', text: 'Solución de Problemas Después del Tono', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Busca reparación si aparecen estos signos',
      badge: 'Alto',
      icon: 'mdi:close-octagon',
      html: 'Deja de usar la expulsión por sonido si el dispositivo se calienta de forma anormal, se apaga, muestra avisos de líquido, no tiene salida tras comprobar las rutas o el altavoz traquetea durante la voz normal. Esos síntomas pueden indicar daños que van más allá de las gotas en la rejilla.',
    },
    {
      type: 'table',
      headers: ['Resultado tras 30 segundos', 'Significado', 'Paso siguiente'],
      rows: [
        ['Sonido más claro', 'La gota probablemente se movió', 'Para y deja que el dispositivo repose'],
        ['Pequeña mejora', 'Queda algo de humedad', 'Espera y luego repite un ciclo corto'],
        ['Sin cambios', 'El bloqueo puede ser más profundo o pegajoso', 'Seca de forma natural y revisa la ruta y los ajustes'],
        ['Distorsión peor', 'El transductor puede estar forzado o dañado', 'Para, baja el volumen y valora el servicio técnico'],
      ],
    },
    {
      type: 'summary',
      title: 'Conclusión práctica',
      items: [
        'Usa 165 Hz primero porque equilibra movimiento y compatibilidad.',
        'Apunta la rejilla hacia abajo y mantén el ciclo corto.',
        'Considera el tono como recuperación del altavoz, no como secado completo del dispositivo.',
        'Las indicaciones de líquido del fabricante prevalecen sobre cualquier herramienta web.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Listo para expulsar',
    statusPlaying: 'Tono en ejecución',
    statusComplete: 'Ciclo completado',
    frequencyLabel: 'Frecuencia',
    volumeLabel: 'Volumen',
    durationLabel: 'Duración',
    startButton: 'Iniciar expulsor de agua',
    stopButton: 'Detener tono',
    hertzUnit: 'Hz',
    secondsShort: 's',
    presetGentle: 'Suave',
    presetStandard: '165 Hz',
    presetDeep: 'Profundo',
    safetyTitle: 'Primero, seguro',
    safetyText: 'Empieza por debajo del volumen máximo y detén si el altavoz vibra o distorsiona.',
    bestResult: 'Mejor resultado',
    bestResultText: 'Retira la funda, orienta el altavoz hacia abajo y ejecuta un ciclo corto.',
  },
};
