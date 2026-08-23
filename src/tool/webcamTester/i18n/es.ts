import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'prueba-camara-web-privada-en-linea';
const title = 'Prueba de cámara web privada';
const description = 'Verifica permisos de cámara, vista previa en directo, resolución, relación de aspecto, orientación y fluidez de fotogramas antes de una llamada o transmisión.';

const faq = [
  {
    question: '¿Esta prueba de cámara web graba o sube mi vídeo?',
    answer: 'No. La página solicita únicamente un flujo de vídeo en directo para la vista previa local y jamás pide acceso al micrófono. No realiza grabaciones, ni captura fotos, ni envía datos a ningún servidor. Al detener la prueba se cierran inmediatamente todas las pistas de vídeo.',
  },
  {
    question: '¿Por qué solicita el navegador permiso de acceso a la cámara?',
    answer: 'Ningún sitio web puede acceder a la cámara sin la autorización explícita del usuario en el navegador. El aviso permite decidir si esta página recibe una transmisión local temporal. Puedes revocar el acceso en cualquier momento desde los ajustes del sitio.',
  },
  {
    question: '¿Qué diferencia hay entre los FPS configurados y los FPS observados?',
    answer: 'Los FPS configurados son el objetivo solicitado para esta vista previa. Los FPS observados estiman cuántos fotogramas se reciben realmente mientras la pestaña permanece visible. Una iluminación deficiente, una CPU sobrecargada o una conexión USB débil pueden reducir los FPS observados.',
  },
  {
    question: '¿Por qué la resolución disponible difiere de la especificación de la cámara?',
    answer: 'El sistema operativo, el controlador de la cámara y la aplicación eligen conjuntamente un modo compatible. Otras aplicaciones en uso, una cámara virtual o límites de energía pueden hacer que la resolución sea inferior. Esta herramienta muestra lo disponible aquí, no todas las especificaciones de la caja.',
  },
];

const howTo = [
  {
    name: 'Abre la vista previa privada',
    text: 'Haz clic en Abrir cámara y concede permiso de vídeo en el aviso del navegador. No se solicita acceso de audio.',
  },
  {
    name: 'Inspecciona el encuadre y la imagen',
    text: 'Comprueba el enfoque, la iluminación, el fondo y la posición de los ojos. Activa la guía de composición o la vista espejo si te resulta útil.',
  },
  {
    name: 'Verifica la transmisión recibida',
    text: 'Consulta la resolución, relación de aspecto, orientación, FPS configurados y fotogramas entregados. Mantén la pestaña visible mientras se estabilizan los FPS.',
  },
  {
    name: 'Cambia o detén la cámara',
    text: 'Selecciona otra cámara disponible para comparar o pulsa Detener cámara para cerrar todas las pistas de vídeo antes de salir.',
  },
];

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

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas frecuentes sobre la prueba de cámara web',
  faq,
  bibliographyTitle: 'Fuentes y guías de configuración de cámara',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Prueba tu cámara web antes de una videollamada',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utiliza esta vista previa local para comprobar los aspectos fundamentales antes de una reunión: si la cámara responde, si se ha seleccionado el dispositivo correcto, si tu rostro se ve con claridad y si el vídeo fluye sin tirones. Realiza la comprobación con la misma luz y desde el mismo escritorio que usarás en la llamada.',
    },
    {
      type: 'list',
      items: [
        'Selecciona la cámara correcta si tienes más de un dispositivo conectado',
        'Sitúa la cámara a la altura de los ojos y mantén el rostro en el tercio superior de la imagen',
        'Ilumina tu cara desde el frente en lugar de sentarte de espaldas a una ventana muy brillante',
        'Cierra Zoom, Teams o Meet si la cámara aparece ocupada o no responde',
        'Comprueba la resolución y la entrega de fotogramas directamente en la pantalla',
      ],
    },
    {
      type: 'title',
      text: 'Soluciones para una cámara en negro o no disponible',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Síntoma observado', 'Causa probable', 'Acción recomendada'],
      rows: [
        ['Permiso denegado', 'El acceso a la cámara está bloqueado en la web o en la privacidad del sistema', 'Permite el acceso a la cámara en el navegador, recarga la página y vuelve a probar'],
        ['Vista previa en negro u ocupada', 'Otra aplicación de reuniones o pestaña del navegador tiene abierta la cámara', 'Cierra Zoom, Meet, Teams y otras pestañas activas de vídeo, luego reintenta'],
        ['Imagen incorrecta', 'Se seleccionó una cámara virtual o un dispositivo secundario', 'Elige otra fuente disponible en el selector de cámaras'],
        ['Imagen oscura o granulada', 'Poca luz frontal o un contraluz excesivamente fuerte detrás de ti', 'Orienta tu mesa hacia una ventana o coloca una lámpara frente a la pantalla'],
        ['Vídeo lento o a tirones', 'Iluminación escasa, alta carga del sistema o conexión USB inestable', 'Añade luz, cierra programas pesados y conecta la cámara a un puerto directo'],
      ],
    },
    {
      type: 'title',
      text: 'Comprensión de la resolución y tasa de fotogramas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una imagen de 1280 × 720 resulta suficiente para la mayoría de llamadas de trabajo. Una resolución de 1920 × 1080 aporta mayor nitidez, pero únicamente si la app de reuniones y la conexión conservan esa calidad. Los FPS configurados representan la tasa solicitada; los FPS observados estiman los fotogramas reales que llegan mientras la pestaña está visible.',
    },
    {
      type: 'tip',
      title: 'Reproduce las condiciones reales de tu llamada',
      html: 'Haz la prueba a la misma hora y con la misma luz de la reunión. Las aplicaciones de videollamada pueden recortar la imagen o desenfocar el fondo, por lo que conviene hacer un chequeo final en la propia app.',
    },
    {
      type: 'title',
      text: 'Encuadre y posicionamiento óptimo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eleva la cámara cerca del nivel de la mirada, deja un pequeño espacio sobre la cabeza e incluye los hombros para un encuadre natural. Mantén la luz principal frente a ti y simplifica un fondo recargado. Si llevas gafas, orienta la fuente de luz ligeramente hacia un lado para evitar reflejos directos en los cristales.',
    },
  ],
  ui: {
    privacyNote: 'Sin grabación · Sin subida · Sin audio',
    permissionHeading: '¿Listo para probar tu cámara?',
    permissionBody: 'Abre una vista previa privada en directo para verificar la imagen y los formatos de vídeo disponibles en esta pestaña. Al detener la cámara se cierra todo acceso inmediatamente.',
    startAction: 'Abrir cámara',
    stopAction: 'Detener cámara',
    retryAction: 'Reintentar',
    deviceLabel: 'Fuente de cámara',
    devicePlaceholder: 'Seleccionar cámara',
    defaultDevice: 'Cámara',
    mirrorAction: 'Modo espejo',
    guideAction: 'Guía de encuadre',
    stageLabel: 'Vista previa privada de cámara web',
    resolutionLabel: 'Resolución',
    aspectLabel: 'Relación de aspecto',
    orientationLabel: 'Orientación',
    configuredFpsLabel: 'FPS configurados',
    observedFpsLabel: 'FPS observados',
    frameDeliveryLabel: 'Entrega de fotogramas',
    landscapeValue: 'Horizontal',
    portraitValue: 'Vertical',
    squareValue: 'Cuadrada',
    frameStable: 'Cercana a la tasa configurada',
    frameReduced: 'Por debajo de la tasa configurada',
    frameConstrained: 'Fuertemente reducida',
    framePending: 'Esperando fotogramas',
    statusIdle: 'Cámara cerrada. Ábrela cuando estés listo para revisar la vista previa.',
    statusStarting: 'Esperando permiso de cámara y primer fotograma de vídeo',
    statusReady: 'Vista previa en directo. Comprueba el enfoque, la luz, el encuadre y la fluidez.',
    statusStopped: 'Cámara detenida. Todas las pistas de vídeo de esta prueba están cerradas.',
    statusHidden: 'Mantén esta pestaña visible para obtener una medición real de fotogramas.',
    statusUnsupported: 'Este navegador no expone el acceso a la cámara en la página.',
    errorPermissionDenied: 'Permiso de cámara denegado. Permite el acceso en los controles de privacidad del navegador y reintenta.',
    errorNoCamera: 'No se encontró ninguna cámara disponible. Conecta un dispositivo y reintenta.',
    errorInUse: 'La cámara no pudo iniciarse. Cierra otras aplicaciones que la estén usando y reintenta.',
    errorSecureContext: 'El acceso a la cámara requiere una conexión segura HTTPS o localhost.',
    errorGeneric: 'No se pudo abrir la cámara. Comprueba los permisos y la disponibilidad del dispositivo.',
    limitHeading: 'Qué puede confirmar esta prueba',
    limitBody: 'Confirma la imagen y la fluidez de vídeo disponibles en esta pestaña. No evalúa el enfoque automático de la lente ni el procesado posterior de apps como Zoom, Teams o Meet.',
    localOnlyLabel: 'Chequeo privado de cámara',
    emptyValue: 'No disponible',
    fpsUnit: 'FPS',
  },
};
