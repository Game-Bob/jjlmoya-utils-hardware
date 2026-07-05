import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'probador-teclado-midi';
const title = 'Probador de teclado MIDI con WebMIDI';
const description = 'Prueba un teclado MIDI USB, sintetizador, controlador de pads, rueda de pitch bend, rueda de modulación, velocidad de notas y notas atascadas directamente en el navegador con Web MIDI.';

const faqData = [
  {
    question: '¿Este probador de teclados MIDI puede leer mi teclado USB sin instalar software?',
    answer: 'Sí, en navegadores compatibles con Web MIDI, como Chrome y Edge. El navegador solicita permiso y luego la herramienta escucha los mensajes de nota, velocidad, pitch bend y modulación del dispositivo MIDI seleccionado.',
  },
  {
    question: '¿La web sube mis notas MIDI o los datos de mi interpretación?',
    answer: 'No. Los eventos MIDI se procesan en la pestaña actual del navegador. Las notas, los valores de velocidad, los mensajes de controlador, los nombres de dispositivo y los registros no se suben ni se almacenan en el sitio web.',
  },
  {
    question: '¿Por qué mi teclado MIDI aparece pero no se ilumina ninguna tecla?',
    answer: 'Puede que el dispositivo esté conectado como superficie de control, que el navegador haya seleccionado un puerto de entrada incorrecto, que el teclado esté usando otro modo o que el cable o hub pase alimentación pero no datos MIDI.',
  },
  {
    question: '¿Puedo probar las ruedas de pitch bend y modulación?',
    answer: 'Sí. El probador muestra el pitch bend como un valor con signo centrado y la modulación como CC1 MIDI. Al mover esos controles, sus medidores deberían actualizarse de inmediato cuando el dispositivo envía mensajes MIDI estándar.',
  },
  {
    question: '¿Qué mensajes MIDI se muestran?',
    answer: 'La interfaz en directo resalta los mensajes de Note On y Note Off, registra la velocidad, detecta el pitch bend y sigue la rueda de modulación CC1. Otros mensajes de controlador pueden aparecer en el registro de eventos cuando sean relevantes para los controles evaluados.',
  },
];

const howToData = [
  {
    name: 'Conecta el hardware MIDI',
    text: 'Enchufa el teclado, sintetizador, controlador de pads o interfaz MIDI USB al ordenador antes de abrir la solicitud de permiso. Evita los hubs sin alimentación al diagnosticar dispositivos intermitentes.',
  },
  {
    name: 'Concede el acceso MIDI al navegador',
    text: 'Pulsa Conectar entrada MIDI y aprueba la solicitud de permiso del navegador. Usa Chrome o Edge a través de HTTPS o localhost, porque Web MIDI está protegido por permisos.',
  },
  {
    name: 'Toca teclas en todo el rango',
    text: 'Pulsa notas graves, medias y agudas. El teclado en pantalla se expande alrededor de las notas que recibe e ilumina cada tecla según la velocidad.',
  },
  {
    name: 'Revisa las ruedas y controles de expresión',
    text: 'Mueve la rueda de pitch bend, la rueda de modulación y los controles de interpretación. El pitch bend debe regresar al centro, mientras que la modulación debe recorrer de 0 a 127.',
  },
  {
    name: 'Lee el registro de eventos',
    text: 'Usa el registro de eventos para detectar mensajes Note Off ausentes, canales inesperados, valores de velocidad bajos o controles que envían un mensaje MIDI distinto al esperado.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Probador de teclados MIDI online para hardware USB real', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>probador de teclados MIDI online</strong> fiable debe responder rápido a una pregunta: ¿está el instrumento físico enviando los mensajes que un DAW, sampler, sintetizador o sistema de iluminación espera? Este probador WebMIDI escucha la entrada MIDI del navegador y muestra en tiempo real los datos de Note On, Note Off, velocidad, pitch bend y rueda de modulación. Está pensado para teclados MIDI USB, interfaces DIN a USB, sintetizadores, controladores de pads, pianos de escenario, guitarras MIDI, triggers de batería y controladores compactos usados en estudios domésticos o en directo.',
    },
    {
      type: 'message',
      title: 'Diagnóstico MIDI local y privado',
      html: 'La prueba se ejecuta totalmente en el lado del cliente. El sitio web no sube números de nota, curvas de velocidad, movimientos de controlador, nombres de dispositivo ni registros de eventos. El navegador expone MIDI solo después de que apruebes el aviso de permiso, y los valores permanecen en la pestaña actual.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'Rango de velocidad MIDI' },
        { value: '128', label: 'números de nota estándar' },
        { value: '14 bits', label: 'resolución de pitch bend' },
        { value: 'CC1', label: 'control de rueda de modulación' },
      ],
    },
    {
      type: 'table',
      headers: ['Señal', 'Qué muestra el probador', 'Comportamiento sano'],
      rows: [
        ['Note On', 'Nombre de tecla, número de nota, canal y velocidad.', 'Cada tecla física se ilumina una vez al pulsarse y muestra un valor de velocidad superior a cero.'],
        ['Note Off', 'Evento de liberación en el registro y reseteo de la iluminación.', 'Cada tecla pulsada se apaga al soltarse; ninguna nota queda visualmente atascada.'],
        ['Velocidad', 'Medidor en directo más una curva continua.', 'Las pulsaciones suaves producen valores bajos y las firmes alcanzan valores altos sin saltos aleatorios.'],
        ['Pitch bend', 'Medidor con signo centrado de negativo a positivo.', 'La rueda barre suavemente y vuelve cerca de cero al soltarse.'],
        ['Modulación', 'Medidor CC1 de 0 a 127.', 'La rueda o tira se desplaza de forma predecible por todo el rango.'],
      ],
    },
    { type: 'title', text: 'Cómo probar un teclado MIDI sin un DAW', level: 2 },
    {
      type: 'paragraph',
      html: 'Buscar <em>probar teclado MIDI</em> suele significar que el usuario aún no sabe si el fallo está en el controlador, el cable, el sistema operativo o el programa de música. Un DAW añade muchas variables extra: estado de armado de pista, filtros de entrada, enrutamiento de canal MIDI, instrumentos virtuales, monitorización, plantillas y preferencias de driver. Un probador de navegador elimina casi toda esa pila. Si el aviso de permiso WebMIDI detecta el dispositivo y el teclado ilumina notas en pantalla, la ruta MIDI física está viva.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Usa esto antes de modificar la configuración del DAW',
      html: 'Primero confirma que el controlador envía MIDI puro. Luego diagnostica la aplicación de música. Si el probador recibe notas pero el DAW no, revisa la habilitación de entrada MIDI, la entrada de pista seleccionada, los filtros de canal, los scripts de superficie de control y la monitorización del instrumento.',
    },
    {
      type: 'list',
      items: [
        'Conecta el teclado directamente al ordenador siempre que sea posible, sobre todo si la alimentación por bus es justa.',
        'Abre el probador en Chrome o Edge, porque el soporte de Web MIDI varía según navegador y plataforma.',
        'Pulsa Conectar entrada MIDI y elige el dispositivo musical o la interfaz MIDI en el aviso de permiso.',
        'Toca notas cromáticas por todo el teclado para descubrir teclas muertas, zonas divididas o sorpresas de transposición de octava.',
        'Mueve las ruedas de pitch y modulación despacio y luego rápido para detectar sensores ruidosos o un mal retorno al centro.',
        'Limpia el registro entre pruebas al comparar cables, puertos USB, presets de teclado o modos de controlador.',
      ],
    },
    {
      type: 'tip',
      title: 'Comprobación rápida de cable',
      html: 'Si el dispositivo se enciende pero no aparece ninguna entrada MIDI, prueba con otro cable USB. Muchos cables USB baratos son solo de carga y no transmiten datos, lo que hace que el controlador parezca vivo sin que ningún mensaje MIDI llegue al ordenador.',
    },
    { type: 'title', text: 'Lectura de curvas de velocidad y respuesta dinámica', level: 2 },
    {
      type: 'paragraph',
      html: 'La velocidad no es el volumen por sí misma; es un valor de interpretación que se envía con la nota, normalmente de 1 a 127. Un plugin de piano puede mapear la velocidad al volumen, la capa de muestreo, el brillo, el ruido de martillo, el tiempo de ataque o todo a la vez. Cuando un controlador tiene un escaneo de velocidad deficiente, el músico puede sentir que las notas suaves desaparecen, las medias suenan demasiado fuerte o las fuertes nunca alcanzan la capa expresiva superior. La curva de velocidad continua ayuda a revelar si el hardware produce una dispersión utilizable de valores.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Teclado sano',
          description: 'Las pulsaciones suaves, medias y fuertes producen bandas de velocidad visiblemente distintas, con valores repetibles para una fuerza de toque similar.',
          highlight: true,
        },
        {
          title: 'Respuesta comprimida',
          description: 'La mayoría de notas se agrupan en un rango estrecho, como 70-95, haciendo que los instrumentos de piano y batería se sientan planos o difíciles de controlar.',
        },
        {
          title: 'Respuesta errática',
          description: 'Notas adyacentes o golpes repetidos saltan de forma impredecible, lo que sugiere contactos sucios, sensores defectuosos, mal escaneo o firmware inestable.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Patrón de velocidad observado', 'Interpretación probable', 'Prueba siguiente'],
      rows: [
        ['Siempre 127', 'El modo de velocidad fija está activado o el controlador está configurado para disparo de órgano/sintetizador.', 'Revisa los ajustes globales del teclado, el modo de pads o el editor del controlador.'],
        ['Siempre muy bajo', 'La curva de velocidad es demasiado suave, la calibración del sensor es incorrecta o el teclado está fallando.', 'Cambia las curvas de velocidad y compara teclas blancas y negras en varias octavas.'],
        ['Una tecla difiere mucho', 'Un contacto local, cúpula de goma, sensor óptico o mecanismo de tecla puede estar sucio o dañado.', 'Repite esa tecla con varias intensidades y compárala con las notas vecinas.'],
        ['Los valores caen al usar un hub', 'La alimentación o la estabilidad de datos pueden ser insuficientes.', 'Vuelve a probar con un puerto USB directo y un cable de datos que sepas que funciona.'],
      ],
    },
    {
      type: 'card',
      title: 'Por qué importa el Note Off',
      html: 'Una nota atascada suele ser un mensaje Note Off ausente o retrasado. Algunos instrumentos envían Note On con velocidad 0 en lugar de un comando Note Off separado; ambos comportamientos son válidos en MIDI. Este probador trata el Note On con velocidad cero como liberación de nota, así que las teclas realmente atascadas permanecen visibles hasta que llegue el mensaje de liberación correcto.',
    },
    { type: 'title', text: 'Prueba de pitch bend, modulación y controles de interpretación', level: 2 },
    {
      type: 'paragraph',
      html: 'El pitch bend es un mensaje MIDI de mayor resolución que los datos de controlador de 7 bits normales. Combina dos bytes de datos en un rango de 14 bits centrado alrededor de 8192. Esa resolución extra importa porque el movimiento de pitch debe sonar suave, especialmente al doblar un sintetizador solista, un bajo o un instrumento orquestal. El probador convierte el bend entrante en un medidor centrado, lo que facilita ver si la rueda alcanza ambos extremos y regresa a la posición neutra.',
    },
    {
      type: 'paragraph',
      html: 'La rueda de modulación es normalmente el controlador continuo MIDI 1, escrito habitualmente como CC1. Muchos patches de sintetizador la usan para vibrato, movimiento de filtro, posición de wavetable, trémolo o dinámicas orquestales. Si mover la rueda no actualiza el medidor CC1, puede que el controlador esté asignado a otro CC, use un modo específico del fabricante o esté enrutado a través de un software que reasigna los controles de interpretación.',
    },
    {
      type: 'proscons',
      title: 'Prueba MIDI en navegador frente a monitorización en DAW',
      items: [
        { pro: 'Confirmación rápida del hardware basada en permisos, sin configuración de proyecto.', con: 'No emula cada enrutamiento de DAW, script o mapeo de instrumento.' },
        { pro: 'Vista clara de notas, velocidad, pitch bend y modulación CC1.', con: 'La postpulsación avanzada, NRPN, MPE, SysEx y mapas de control personalizados pueden requerir herramientas especializadas.' },
        { pro: 'Útil para llamadas de soporte, compra de equipo de segunda mano y comprobación de cables.', con: 'El soporte del navegador depende de la disponibilidad de Web MIDI en la plataforma actual.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La rueda de pitch no regresa a cero',
      html: 'Si el medidor de pitch se queda en un valor positivo o negativo tras soltar la rueda, puede que la rueda física, el muelle, el potenciómetro, el sensor de efecto Hall, la calibración o la zona muerta del firmware necesiten atención. Prueba el mismo controlador en otro puerto y preset antes de asumir que el sensor está averiado.',
    },
    { type: 'title', text: 'Fallos comunes de teclado MIDI que este probador puede revelar', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Tecla muerta', definition: 'Una tecla física que no produce ningún mensaje Note On al pulsarse.' },
        { term: 'Nota atascada', definition: 'Una nota que recibe Note On pero ningún mensaje de liberación correspondiente, dejando el sonido activo en los instrumentos.' },
        { term: 'Pico de velocidad', definition: 'Un valor repentino mucho más alto o más bajo de lo esperado para un golpe similar.' },
        { term: 'Canal MIDI', definition: 'Uno de los 16 canales lógicos usados para separar partes, zonas o dispositivos en un flujo MIDI.' },
        { term: 'Control Change', definition: 'Una familia de mensajes MIDI usada por potenciómetros, pedales, ruedas, deslizadores e interruptores.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Dispositivo detectado, sin mensajes',
      html: 'Si el navegador muestra una entrada MIDI pero al tocar teclas no aparecen entradas en el registro, comprueba si el puerto seleccionado es una entrada de superficie de control en lugar de la entrada de notas del teclado. Algunas interfaces exponen varios puertos con nombres similares.',
    },
    {
      type: 'table',
      headers: ['Síntoma', 'Causa posible', 'Acción práctica'],
      rows: [
        ['Sin aviso de permiso', 'Navegador no compatible, origen inseguro o permiso MIDI bloqueado.', 'Usa Chrome/Edge sobre HTTPS y revisa los permisos del sitio.'],
        ['Dispositivo ausente', 'Problema de cable, hub, driver, cumplimiento de clase o alimentación.', 'Prueba otro cable USB de datos, otro puerto o un hub con alimentación.'],
        ['Solo funcionan algunas octavas', 'Modo de división/capa, ajuste de transposición, fallo de matriz de hardware o modo de control local.', 'Restaura el preset y prueba cromáticamente de grave a agudo.'],
        ['Nombres de nota incorrectos', 'El controlador está transpuesto o envía desde una zona con desplazamiento de octava.', 'Revisa la transposición global, la octava de zona y los ajustes de plantilla del DAW.'],
        ['Rueda de modulación silenciosa', 'Rueda asignada a otro número de controlador o deshabilitada por el preset.', 'Carga un preset por defecto o el editor del controlador y asígnala de nuevo a CC1.'],
      ],
    },
    {
      type: 'summary',
      title: 'Mejor orden de diagnóstico',
      items: [
        'Confirma que el navegador ve la entrada MIDI.',
        'Toca notas y verifica que las pulsaciones y liberaciones coinciden.',
        'Inspecciona la distribución de velocidad con golpes repetidos suaves, medios y fuertes.',
        'Mueve los controles de pitch bend y modulación en todo su recorrido.',
        'Solo entonces ajusta el enrutamiento del DAW, los ajustes de instrumento virtual o las plantillas del controlador.',
      ],
    },
    { type: 'title', text: 'Privacidad, compatibilidad con navegadores y límites', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI está protegido por permisos intencionadamente. Una página no puede leer en silencio los dispositivos musicales conectados en segundo plano sin que el navegador exponga un flujo de acceso. El aviso exacto y la persistencia del permiso dependen del navegador, el sistema operativo y los ajustes del usuario. Para la mayoría de músicos, el resultado práctico es simple: pulsa el botón de conectar, elige la entrada MIDI, ejecuta la prueba y cierra la pestaña al terminar.',
    },
    {
      type: 'list',
      items: [
        'Ningún dato de evento MIDI se envía a ningún servidor externo.',
        'El probador no requiere acceso SysEx, lo que reduce el alcance del permiso.',
        'Los nombres de dispositivo que muestra el navegador pueden identificar modelos de hardware, así que comparte capturas de pantalla con cuidado.',
        'Chrome y Edge suelen ofrecer el mejor soporte de Web MIDI; el soporte de Safari y Firefox puede ser limitado o inexistente según la plataforma.',
        'Pueden seguir siendo necesarias utilidades nativas para actualizaciones de firmware, edición avanzada de controladores, análisis MPE, volcados SysEx o diagnósticos específicos del fabricante.',
      ],
    },
    {
      type: 'card',
      title: 'Cuándo esta herramienta es suficiente',
      html: 'Para comprar un controlador de segunda mano, revisar un cable de estudio, validar una interfaz MIDI USB, probar un teclado reparado o demostrar que un teclado envía mensajes antes de abrir un DAW, un probador de teclado WebMIDI suele ser el primer paso más rápido.',
    },
  ],
  ui: {
    connectButton: 'Conectar entrada MIDI',
    refreshButton: 'Actualizar entradas',
    clearButton: 'Limpiar registro',
    unsupportedTitle: 'Web MIDI no está disponible',
    unsupportedBody: 'Usa un navegador basado en Chromium como Chrome o Edge y abre la página a través de HTTPS o localhost.',
    secureContext: 'Web MIDI requiere una página HTTPS segura o localhost antes de que el navegador pueda exponer entradas MIDI.',
    statusIdle: 'Listo para solicitar acceso MIDI',
    statusPermission: 'Esperando permiso MIDI del navegador',
    statusReady: 'Acceso MIDI concedido',
    statusNoInputs: 'No se detectó entrada MIDI',
    statusConnected: 'Entrada MIDI detectada',
    statusDisconnected: 'Dispositivo MIDI desconectado',
    statusError: 'Fallo de acceso MIDI',
    detectedLabel: 'Dispositivo detectado',
    noDevice: 'Ningún dispositivo MIDI seleccionado',
    inputLabel: 'Entrada',
    inputIdle: 'ninguna',
    channelLabel: 'Canal',
    notesLabel: 'Notas',
    velocityLabel: 'Velocidad',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modulación',
    lastEventLabel: 'Último evento',
    octaveRangeLabel: 'Rango visible',
    velocityCurveTitle: 'Curva de velocidad',
    activeNotesTitle: 'Notas activas',
    eventLogTitle: 'Registro de eventos MIDI',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Toca una tecla o mueve una rueda para ver los mensajes MIDI entrantes.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'Todos los canales',
  },
};
