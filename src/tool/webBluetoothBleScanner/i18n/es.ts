import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'escaner-ble-web-bluetooth';
const title = 'Escáner Web Bluetooth BLE';
const description = 'Escanea dispositivos Bluetooth Low Energy cercanos desde el navegador, inspecciona los UUIDs de servicios GATT expuestos y prueba si tu hardware IoT o wearable es detectable.';

const faqData = [
  {
    question: '¿Puede un sitio web escanear dispositivos Bluetooth sin permiso?',
    answer: 'No. Web Bluetooth siempre requiere un gesto del usuario y un selector de permisos del navegador. Esta herramienta solo ve el dispositivo que seleccionas explícitamente y no almacena direcciones MAC, IDs de dispositivo ni resultados del escaneo.',
  },
  {
    question: '¿Por qué el escáner no muestra todos los dispositivos BLE cercanos?',
    answer: 'Los navegadores exponen Bluetooth intencionadamente a través de un selector de permisos, no como un escáner silencioso en segundo plano. Algunos dispositivos también dejan de anunciarse, ocultan su nombre, requieren emparejamiento o exponen servicios solo tras la conexión.',
  },
  {
    question: '¿Qué navegadores admiten Web Bluetooth?',
    answer: 'Web Bluetooth funciona mejor en navegadores de escritorio basados en Chromium como Chrome y Edge. Normalmente requiere HTTPS o localhost y no está disponible en muchas configuraciones de Firefox, Safari y navegadores de iOS.',
  },
  {
    question: '¿Puede leer datos privados de sensores de un wearable?',
    answer: 'Solo si el dispositivo expone servicios GATT compatibles y el navegador concede acceso. Muchos wearables comerciales requieren aplicaciones del fabricante, cifrado, vinculación o características propietarias que un escáner de navegador genérico no puede decodificar.',
  },
  {
    question: '¿Qué son los UUIDs de servicio GATT?',
    answer: 'Un UUID de servicio GATT identifica un grupo de funcionalidades Bluetooth Low Energy, como Servicio de Batería, Frecuencia Cardíaca, Información del Dispositivo o un servicio personalizado del fabricante usado por hardware maker e IoT.',
  },
];

const howToData = [
  {
    name: 'Usa un navegador compatible',
    text: 'Abre la herramienta en Chrome o Edge a través de HTTPS o localhost y asegúrate de que Bluetooth esté activado en el ordenador o teléfono.',
  },
  {
    name: 'Pon el hardware en modo publicitario',
    text: 'Activa el dispositivo BLE, apágalo y enciéndelo, pulsa su botón de emparejamiento o abre su modo publicitario para que aparezca en el selector de permisos del navegador.',
  },
  {
    name: 'Escanea el entorno',
    text: 'Pulsa Escanear Entorno y selecciona el dispositivo BLE que quieres inspeccionar. El diálogo de permisos del navegador controla exactamente qué dispositivo se vuelve visible para la página.',
  },
  {
    name: 'Lee los servicios GATT',
    text: 'Tras la conexión, revisa las tarjetas de UUID de servicio para identificar perfiles Bluetooth estándar, servicios de firmware personalizados y si el dispositivo expone la ruta de datos que esperabas.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<WebBluetoothBleScannerUI> = {
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
      text: 'Probador BLE online para IoT, Wearables y Hardware Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este escáner Web Bluetooth te permite probar si un dispositivo Bluetooth Low Energy cercano es detectable desde un navegador y qué servicios GATT expone tras conceder el permiso. Es útil para depurar firmware ESP32, sketches Arduino BLE, sensores inteligentes, wearables de fitness, teclados, balizas personalizadas, monitores ambientales y hardware prototipo antes de crear una aplicación móvil nativa.',
    },
    {
      type: 'message',
      title: 'Modelo de privacidad',
      html: 'Este sitio web no almacena direcciones MAC, IDs de dispositivo, nombres, UUIDs, datos de señal ni historial de escaneos. El selector de permisos del navegador decide a qué único dispositivo puede acceder la página y los resultados permanecen en tu sesión actual del navegador.',
    },
    {
      type: 'table',
      headers: ['Lo que ves', 'Lo que significa', 'Qué comprobar a continuación'],
      rows: [
        ['Nombre del dispositivo', 'El nombre Bluetooth anunciado, si el hardware lo emite.', 'Si está vacío, revisa los datos publicitarios del firmware o usa un prefijo de nombre conocido durante las pruebas.'],
        ['ID del dispositivo', 'Un identificador con ámbito de navegador, no la dirección MAC pública real.', 'Úsalo solo para esta sesión del navegador; no lo trates como un número de serie universal del hardware.'],
        ['UUIDs de servicio GATT', 'Los grupos de servicios expuestos tras aceptar la conexión.', 'Compara los UUIDs estándar con la lista de Bluetooth SIG o tu tabla de servicios del firmware.'],
        ['Servicio personalizado', 'Un UUID específico del fabricante o del proyecto.', 'Abre tu firmware, perfil de app móvil o documentación BLE para mapear características y permisos.'],
      ],
    },
    {
      type: 'title',
      text: 'Por qué el escaneo Bluetooth del navegador es diferente',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Las aplicaciones nativas de escáner BLE a menudo muestran anuncios continuos de muchos dispositivos cercanos. Web Bluetooth es deliberadamente más estricto: la página debe abrirse en un contexto seguro, el escaneo debe iniciarse con un clic del usuario y el navegador muestra un selector de permisos. Esto protege a los usuarios del seguimiento silencioso a la vez que da a los desarrolladores una forma práctica de conectarse al hardware BLE seleccionado desde JavaScript.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Escáner Web Bluetooth',
          description: 'Ideal para validación rápida de firmware, demos, flujos de soporte, laboratorios educativos y diagnósticos basados en navegador donde importa la fricción de instalación.',
        },
        {
          title: 'App BLE nativa',
          description: 'Mejor para escaneo en segundo plano, registro RSSI, flujos de emparejamiento, protocolos cifrados del fabricante, grandes árboles de características y diagnósticos de campo a largo plazo.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Razones comunes por las que un dispositivo BLE no aparece',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bluetooth está desactivado a nivel del sistema operativo o el navegador no tiene permiso de Bluetooth.',
        'El dispositivo está conectado a otro teléfono, portátil, aplicación del fabricante o pasarela y ha dejado de anunciarse.',
        'El hardware se anuncia solo durante un breve periodo tras el arranque o tras pulsar un botón de emparejamiento.',
        'El navegador no está basado en Chromium, la página no se sirve por HTTPS o la plataforma bloquea Web Bluetooth.',
        'El firmware anuncia datos del fabricante pero oculta el nombre local, por lo que el selector puede mostrar un dispositivo sin nombre.',
        'El dispositivo requiere vinculación, cifrado o autenticación propietaria antes de que los servicios sean legibles.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo usar UUIDs GATT durante la depuración',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una conexión exitosa con UUIDs de servicio te indica que el navegador puede alcanzar el periférico y que el periférico expone al menos parte de su tabla GATT. Los servicios estándar como Servicio de Batería, Información del Dispositivo, Frecuencia Cardíaca, Dispositivo de Interfaz Humana y Detección Ambiental son fáciles de reconocer. Los UUIDs personalizados normalmente apuntan a funciones específicas del firmware y necesitan el mapa de características de tu código fuente o documentación del fabricante.',
    },
    {
      type: 'table',
      headers: ['Síntoma', 'Causa probable', 'Solución práctica'],
      rows: [
        ['El selector de permisos está vacío', 'El dispositivo no se está anunciando o falta soporte del navegador.', 'Reinicia el dispositivo, activa el modo de emparejamiento, acércate o reintenta en Chrome/Edge.'],
        ['La conexión falla inmediatamente', 'El dispositivo está ocupado, fuera de alcance o rechaza la conexión del navegador.', 'Desconecta las aplicaciones del fabricante y mantén el periférico cerca del ordenador.'],
        ['No se listan servicios', 'GATT no está disponible, los servicios están ocultos o no se concedió acceso para esos UUIDs.', 'Añade servicios opcionales conocidos en pruebas de firmware o inspecciona con una herramienta BLE nativa.'],
        ['Solo aparecen UUIDs personalizados', 'El hardware usa servicios de firmware específicos del fabricante.', 'Mapea los UUIDs a constantes del código fuente y documenta los permisos de lectura/escritura de características.'],
      ],
    },
    {
      type: 'title',
      text: 'Límites de seguridad y privacidad',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'La página no puede recopilar silenciosamente dispositivos Bluetooth cercanos en segundo plano.',
        'El navegador puede ocultar las direcciones MAC reales y proporcionar en su lugar un ID de dispositivo con ámbito.',
        'El acceso solo comienza después de que el usuario haga clic en el botón de escanear y elija un dispositivo.',
        'Este sitio web no sube ni almacena los resultados.',
        'Los dispositivos comerciales sensibles pueden requerir cifrado o un flujo de emparejamiento del fabricante que este escáner genérico no puede eludir.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth no está disponible',
    unsupportedBody: 'Prueba Chrome o Edge en escritorio o Android, activa Bluetooth y abre la página a través de HTTPS o localhost.',
    secureContext: 'Web Bluetooth requiere una página HTTPS segura o localhost. Recarga la herramienta desde un origen seguro e inténtalo de nuevo.',
    scanButton: 'Escanear Entorno',
    scanning: 'Escaneando',
    reconnect: 'Escanear de nuevo',
    disconnect: 'Desconectar',
    privacyTitle: 'Privacidad por diseño',
    privacyBody: 'Este sitio web no almacena direcciones MAC, IDs de dispositivo, nombres, UUIDs ni historial de escaneos. El navegador solo expone el dispositivo que tú eliges.',
    deviceLabel: 'Dispositivo seleccionado',
    nameFallback: 'Dispositivo BLE sin nombre',
    idLabel: 'ID de dispositivo del navegador',
    servicesLabel: 'Servicios GATT',
    noServices: 'No se devolvieron servicios primarios legibles para esta conexión.',
    statusIdle: 'Listo para escanear hardware BLE cercano',
    statusPermission: 'Esperando el selector de permisos del navegador',
    statusConnecting: 'Conectando al dispositivo BLE seleccionado',
    statusConnected: 'Conectado y servicios cargados',
    statusDisconnected: 'Dispositivo desconectado',
    statusCancelled: 'No se seleccionó ningún dispositivo BLE o Bluetooth está apagado/no disponible en este dispositivo.',
    statusUnavailable: 'Bluetooth parece estar apagado, bloqueado o ausente en este dispositivo. Activa Bluetooth o prueba desde hardware que tenga un adaptador BLE.',
    statusError: 'Escaneo Bluetooth fallido',
    signalUnknown: 'La intensidad de la señal es controlada por el selector del navegador',
    gattUnavailable: 'Este dispositivo no expuso un servidor GATT al navegador',
    customServiceName: 'Servicio personalizado o específico del fabricante',
    serviceGenericAccess: 'Acceso Genérico',
    serviceGenericAttribute: 'Atributo Genérico',
    serviceDeviceInformation: 'Información del Dispositivo',
    serviceHeartRate: 'Frecuencia Cardíaca',
    serviceBattery: 'Servicio de Batería',
    serviceHumanInterfaceDevice: 'Dispositivo de Interfaz Humana',
    serviceCyclingSpeedCadence: 'Velocidad y Cadencia de Ciclismo',
    serviceEnvironmentalSensing: 'Detección Ambiental',
    serviceUserData: 'Datos de Usuario',
    serviceFitnessMachine: 'Máquina de Fitness',
    uuidHelp: 'Los UUIDs identifican servicios Bluetooth. Los servicios estándar se nombran automáticamente; los UUIDs específicos del fabricante necesitan la documentación de tu firmware o dispositivo.',
    compatibilityHint: 'Funciona mejor en navegadores basados en Chromium con Bluetooth activado. Web Bluetooth está intencionadamente limitado por permisos y puede no mostrar todos los anunciantes cercanos.',
    serviceCountSingular: 'servicio',
    serviceCountPlural: 'servicios',
  },
};
