import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'probador-pantalla-tactil';
const title = 'Probador de pantalla táctil';
const description = 'Dibuja sobre un lienzo a pantalla completa para detectar zonas muertas, pulsaciones perdidas, respuesta en los bordes, interferencia de la palma y cuántos puntos multitáctiles simultáneos puede detectar tu móvil o tableta.';

const faqData = [
  {
    question: '¿Cómo detecto zonas muertas en una pantalla táctil?',
    answer: 'Abre el probador en el dispositivo, arrastra un dedo lentamente por toda la pantalla y busca huecos en blanco donde el trazo se interrumpe. Repite la prueba en los bordes, la zona del teclado, las esquinas y cualquier punto donde suelan fallar las pulsaciones.',
  },
  {
    question: '¿Cómo puedo hacer una prueba multitáctil en línea?',
    answer: 'Coloca varios dedos a la vez sobre el lienzo. El contador de toques activos muestra cuántos contactos está recibiendo el navegador en ese momento, y el contador de picos registra la cifra más alta de toques simultáneos alcanzada durante la sesión.',
  },
  {
    question: '¿Puede esta herramienta reparar una pantalla táctil que no responde?',
    answer: 'No. La herramienta no repara el hardware ni recalibra el digitalizador. Sirve para documentar los síntomas y ayudarte a decidir si el problema se debe a un protector de pantalla, suciedad en el cristal, un fallo de software, presión de la funda o daño en el hardware táctil.',
  },
  {
    question: '¿Por qué mi móvil detecta menos dedos de los que debería?',
    answer: 'Algunos paneles, navegadores, sistemas operativos, protectores de pantalla, cargadores y ajustes de accesibilidad limitan o filtran los contactos táctiles. Prueba sin funda, con batería, después de limpiar el cristal y en otro navegador antes de asumir que el panel está defectuoso.',
  },
];

const howToData = [
  { name: 'Limpia el cristal y elimina interferencias obvias', text: 'Limpia la pantalla, seca los dedos, desconecta cargadores ruidosos y quítate guantes gruesos o accesorios conductores antes de probar.' },
  { name: 'Dibuja pasadas lentas horizontales y verticales', text: 'Cubre la pantalla con trazos paralelos de borde a borde. Un panel en buen estado debe dejar líneas continuas sin interrupciones.' },
  { name: 'Revisa las esquinas y las zonas de gestos', text: 'Repasa los biseles, la zona del teclado, el área de notificaciones y las zonas de gestos de navegación, porque estas regiones suelen revelar primero un fallo parcial del digitalizador.' },
  { name: 'Mide los toques simultáneos', text: 'Coloca dos, tres, cuatro, cinco o más dedos sobre el lienzo y observa el contador de picos multitáctiles.' },
  { name: 'Usa pantalla completa para la confirmación final', text: 'Activa el modo de pantalla completa y repite la prueba para que los controles del navegador no oculten las zonas táctiles superior o inferior.' },
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

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Prueba de pantalla táctil en línea para zonas muertas y multitáctil', level: 2 },
    {
      type: 'paragraph',
      html: 'Un panel táctil puede fallar de formas difíciles de demostrar con el uso normal de las aplicaciones. Una tecla del teclado puede no responder solo cerca del borde inferior, una app de dibujo puede saltarse una franja vertical estrecha, o los juegos pueden perder un segundo dedo justo cuando el pulgar ya está presionando un control. Este probador convierte toda la página en una superficie de dibujo para que cada hueco, trazo interrumpido y límite de contactos simultáneos se haga visible al instante.',
    },
    {
      type: 'paragraph',
      html: 'Úsalo para búsquedas como <strong>probador de pantalla táctil</strong>, <strong>test multitáctil online</strong>, <strong>comprobar zonas muertas pantalla</strong> y <strong>verificar pantalla táctil</strong>. El lienzo registra el movimiento de los dedos localmente en el navegador; no sube dibujos, posiciones táctiles, identificadores de dispositivo ni resultados de diagnóstico.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 instalaciones', label: 'Funciona directamente en el navegador' },
        { value: 'En vivo', label: 'Contador de toques activos' },
        { value: 'Lienzo', label: 'Mapa visual de zonas muertas' },
      ],
    },
    { type: 'title', text: 'Cómo identificar zonas muertas en la pantalla táctil', level: 3 },
    {
      type: 'paragraph',
      html: 'Una zona muerta es un área donde el digitalizador no registra el contacto de forma fiable. Puede ser una franja completamente en blanco, una esquina que ignora las pulsaciones o un pequeño parche que solo funciona con mucha presión. Dibuja líneas lentas y solapadas por toda la pantalla. Si el trazo desaparece siempre en el mismo sitio, esa zona merece más análisis.',
    },
    {
      type: 'list',
      items: [
        'Empieza con trazos horizontales desde el borde izquierdo hasta el derecho, dejando solo un pequeño espacio entre pasadas.',
        'Repite con trazos verticales desde el borde superior hasta el inferior para descubrir columnas estrechas que la prueba horizontal puede pasar por alto.',
        'Repasa justo el borde de la pantalla, porque los electrodos del perímetro y las zonas de gestos son puntos frecuentes de fallo.',
        'Dibuja círculos alrededor de las zonas sospechosas para ver si la interrupción se repite en la misma ubicación física.',
        'Gira el dispositivo y vuelve a probar para distinguir un problema de diseño de la app de un problema de ubicación del hardware.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Una línea en blanco repetida es más significativa que un trazo aislado que falla',
      html: '<p>Un pequeño hueco puede aparecer si el dedo está seco, se mueve demasiado rápido o se separa del cristal. Una zona muerta de hardware suele aparecer repetidamente en la misma zona física, en distintas direcciones de trazo y después de limpiar la pantalla.</p>',
    },
    {
      type: 'table',
      headers: ['Síntoma', 'Causa probable', 'Qué probar a continuación'],
      rows: [
        ['El trazo se corta en la misma franja vertical', 'Posible fallo de columna del digitalizador o burbuja del protector.', 'Retira el protector si es posible, limpia el cristal y repite la prueba en pantalla completa.'],
        ['Los bordes fallan pero el centro funciona', 'Presión de la funda, rechazo de gestos o problema en los electrodos del borde.', 'Quita la funda y repite trazos lentos por los bordes.'],
        ['Solo falla el movimiento rápido', 'Estrangulamiento de eventos del navegador, baja tasa de fotogramas o dedo que se levanta.', 'Muévete despacio y compara con otro navegador.'],
        ['Aparecen motas aleatorias sin tocar', 'Toques fantasma, humedad, ruido del cargador o panel dañado.', 'Seca la pantalla, desconecta el cargador, reinicia y repite.'],
      ],
    },
    { type: 'title', text: 'Cómo medir la capacidad multitáctil', level: 3 },
    {
      type: 'paragraph',
      html: 'La capacidad multitáctil es el número máximo de contactos independientes que el dispositivo puede registrar a la vez. Un móvil puede seguir cinco, diez o más contactos, mientras que algunas tabletas económicas, quioscos, guantes, capas de escritorio remoto o navegadores integrados pueden reportar menos. El contador activo muestra la cifra detectada en este momento; el contador de picos guarda el valor más alto alcanzado desde la última limpieza.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Gestos de dos dedos', description: 'Necesarios para pellizcar, rotar con dos dedos, mapas, editores de imágenes y zoom de accesibilidad.' },
        { title: 'De tres a cinco toques', description: 'Útil para juegos de ritmo, controles divididos, apps de dibujo, teclados de piano y flujos creativos en tableta.' },
        { title: 'Paneles de diez toques', description: 'Comunes en móviles y tabletas modernos, aunque los filtros del navegador o del sistema operativo pueden reducir la cifra.' },
      ],
    },
    {
      type: 'tip',
      title: 'La mejor forma de evitar un conteo bajo falso',
      html: 'Coloca los dedos uno a uno y mantenlos quietos un segundo. Si los pones todos a la vez, algunos sistemas operativos interpretan el gesto como entrada de palma, intención de zoom o navegación del sistema y pueden suprimir parte del conjunto de contactos.',
    },
    {
      type: 'proscons',
      title: 'Probador en línea frente a una app de diagnóstico nativa',
      items: [
        { pro: 'Arranca al instante sin instalar nada ni conceder permisos amplios del dispositivo.', con: 'Solo puede mostrar los eventos táctiles que exponen el navegador y el sistema operativo.' },
        { pro: 'Fácil de compartir con un taller o comprador porque el patrón de dibujo es visible.', con: 'No puede leer las tablas de calibración de fábrica ni los códigos de error de bajo nivel del digitalizador.' },
        { pro: 'El modo pantalla completa cubre más superficie útil que una página normal.', con: 'Las barras del sistema, los notches y las zonas de gestos protegidas pueden seguir reservando algunos píxeles.' },
      ],
    },
    { type: 'title', text: 'Causas frecuentes de pulsaciones perdidas', level: 3 },
    {
      type: 'paragraph',
      html: 'Un mal resultado táctil no siempre significa que la pantalla esté rota. Los paneles capacitivos dependen de un campo eléctrico estable a través del cristal, el adhesivo, el protector, la piel y la masa del dispositivo. Cualquier cosa que altere ese campo puede provocar huecos, falsos toques o un seguimiento multitáctil deficiente. Por eso conviene probar en varias condiciones.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Digitalizador', definition: 'La capa sensora transparente que envía las coordenadas táctiles al dispositivo.' },
        { term: 'Zona muerta', definition: 'Un área física de la pantalla donde los toques no se detectan o solo se detectan de forma intermitente.' },
        { term: 'Toque fantasma', definition: 'Un evento táctil registrado por el dispositivo sin que ningún dedo esté tocando intencionadamente ese punto.' },
        { term: 'Rechazo de palma', definition: 'Filtro de software que ignora el contacto amplio o accidental, especialmente en tabletas y dispositivos con lápiz.' },
        { term: 'Tasa de muestreo táctil', definition: 'Frecuencia con la que el dispositivo escanea la capa táctil. Tasas más altas hacen que el dibujo y los juegos se sientan más reactivos.' },
      ],
    },
    {
      type: 'table',
      headers: ['Causa', 'Pista típica', 'Comprobación rápida'],
      rows: [
        ['Protector de pantalla', 'La zona muerta sigue una burbuja, grieta, borde de polvo o borde de cristal grueso.', 'Retira o levanta el protector solo si es seguro y reemplazable.'],
        ['Humedad o grasa', 'Saltos aleatorios, toques que se deslizan o pulsaciones fallidas tras lluvia, sudor o spray limpiador.', 'Seca bien el cristal y las manos y repite la prueba.'],
        ['Ruido del cargador', 'Los toques fantasma aparecen al estar enchufado y desaparecen con batería.', 'Desconecta el cargador o usa un adaptador y cable certificados.'],
        ['Presión de la funda', 'Los toques fallan cerca de las esquinas o los bordes curvos.', 'Quita la funda y vuelve a probar el mismo borde.'],
        ['Daño del hardware', 'La misma franja falla tras limpiar, reiniciar y quitar el protector.', 'Documenta el resultado y contacta con el soporte de reparación.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'La presión no equivale a la precisión táctil',
      html: 'La mayoría de las pantallas táctiles de móviles y tabletas son capacitivas, por lo que no debería hacer falta apretar más fuerte. Si una zona solo funciona al presionar con firmeza, el problema puede ser un contacto débil a través del protector, daño en el panel, un problema del cable flex o un filtro del software, no el comportamiento normal de la pantalla.',
    },
    { type: 'title', text: 'Prueba de bordes, esquinas y zonas del teclado', level: 3 },
    {
      type: 'paragraph',
      html: 'Muchas quejas reales empiezan en zonas de uso intensivo: la fila inferior del teclado, la tecla de borrar, los gestos de navegación, la cortina de notificaciones, los ajustes rápidos, las zonas del pulgar en juegos y las esquinas de la tableta usadas para atajos de dibujo. Usa el modo de pantalla completa antes de juzgar las zonas superior e inferior, porque los controles del navegador pueden ocultar parte de la pantalla.',
    },
    {
      type: 'list',
      items: [
        'Traza un rectángulo a un dedo de distancia del borde de la pantalla.',
        'Dibuja trazos verticales cortos sobre las filas del teclado donde fallen las letras.',
        'Mantén un pulgar en posición de control de juego y dibuja con otro dedo para comprobar conflictos de contacto.',
        'Prueba cerca del puerto de carga sin cargador y luego con él para detectar ruido de masa.',
        'Si usas un lápiz, prueba la entrada con el dedo por separado de la del lápiz, porque pueden usar rutas de detección distintas.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cuando la pantalla completa cambia el resultado',
      html: '<p>Si la pantalla funciona en modo completo pero no en la vista normal del navegador, es probable que el hardware no sea el único factor. Las barras de dirección, el gesto de arrastrar para recargar, la navegación del sistema y los gestos del navegador pueden interceptar toques cerca de la parte superior o inferior de la ventana.</p>',
    },
    { type: 'title', text: 'Cómo documentar un problema para reparación o garantía', level: 3 },
    {
      type: 'paragraph',
      html: 'Para la garantía, la consistencia importa más que un fallo puntual y espectacular. Limpia el lienzo, dibuja una cuadrícula sencilla y haz una foto o una grabación de pantalla cuando la misma zona física se niegue a dibujar. Indica si el móvil estaba cargando, si tenía un protector puesto y si el problema aparece también tras reiniciar.',
    },
    {
      type: 'summary',
      title: 'Pruebas útiles que capturar',
      items: [
        'Un lienzo limpio a pantalla completa que muestre huecos repetidos en la misma ubicación.',
        'El pico de toques simultáneos alcanzado con varios dedos colocados cuidadosamente.',
        'Una comparación con y sin funda, protector, cargador o guantes.',
        'El modelo del dispositivo, navegador, versión del sistema operativo y si el problema ocurre también en las aplicaciones.',
      ],
    },
    {
      type: 'message',
      title: 'Nota de privacidad',
      html: 'El dibujo y los contadores se generan en el lado del cliente. El probador está diseñado para el diagnóstico inmediato, no para el registro vinculado a cuentas, la reparación remota ni la subida de patrones sensibles de interacción con la pantalla.',
    },
    { type: 'title', text: 'Lista de interpretación de resultados', level: 3 },
    {
      type: 'table',
      headers: ['Resultado', 'Interpretación', 'Fiabilidad'],
      rows: [
        ['Trazos continuos en todas partes', 'La capa táctil probablemente esté sana en las condiciones actuales.', 'Alta para entrada táctil básica.'],
        ['Una franja en blanco repetible', 'Posible daño físico del digitalizador u obstrucción del protector.', 'Alta si se repite tras limpiar y reiniciar.'],
        ['Pico multitáctil bajo solo en un navegador', 'Limitación del navegador, privacidad, WebView o gestión de gestos.', 'Media. Prueba con otro navegador.'],
        ['Toques fantasma al cargar', 'Ruido eléctrico, problema de masa o cargador defectuoso.', 'Media a alta si desaparece al desconectar.'],
        ['Fallo solo con el protector de pantalla', 'Grosor del protector, espacio del adhesivo, grieta o borde levantado.', 'Alta si al retirarlo se soluciona.'],
      ],
    },
    {
      type: 'summary',
      title: 'Ruta rápida de diagnóstico',
      items: [
        'Dibuja una cuadrícula completa lentamente.',
        'Rodea cualquier hueco que se repita.',
        'Limpia el lienzo y repite en pantalla completa.',
        'Elimina la funda o el protector cuando sea práctico.',
        'Mide la cifra más alta de toques simultáneos.',
        'Compara con otro navegador o aplicación antes de declarar un fallo de hardware.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Toques activos',
    peakTouchesLabel: 'Pico multitáctil',
    coverageLabel: 'Cobertura del lienzo',
    statusReady: 'Dibuja en cualquier parte para descubrir zonas muertas',
    statusDrawing: 'Toque detectado',
    statusCleared: 'Lienzo limpiado',
    clearButton: 'Limpiar lienzo',
    fullscreenButton: 'Pantalla completa',
    exitFullscreenButton: 'Salir de pantalla completa',
    canvasLabel: 'Lienzo de prueba de pantalla táctil',
    unsupportedTouch: 'Los eventos táctiles no están disponibles en este navegador',
  },
};
