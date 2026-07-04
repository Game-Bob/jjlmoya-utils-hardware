import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-serie-webusb';
const title = 'Monitor Serie WebUSB';
const description = 'Conéctate a hardware serie USB desde el navegador, lee la salida del terminal en vivo, envía comandos y depura placas Arduino, ESP32, RP2040 y maker sin instalar un terminal de escritorio.';

const faqData = [
  {
    question: '¿Funciona este monitor serie con placas Arduino, ESP32 y Raspberry Pi Pico?',
    answer: 'Sí, cuando la placa expone una interfaz serie USB compatible con Web Serial y el navegador está basado en Chromium. Los adaptadores comunes Arduino, ESP32, RP2040, CH340, CP210x y FTDI suelen funcionar después de que el usuario concede permiso.',
  },
  {
    question: '¿Por qué se llama WebUSB si utiliza Web Serial?',
    answer: 'La mayoría de las placas maker se conectan por USB, pero el acceso al terminal del navegador lo proporciona la API Web Serial. WebUSB es de más bajo nivel y no es la abstracción adecuada para un terminal simple estilo UART.',
  },
  {
    question: '¿Puede un sitio web acceder a mis dispositivos serie sin permiso?',
    answer: 'No. El navegador requiere un clic del usuario y un selector nativo de dispositivos antes de que un sitio pueda abrir un puerto serie. Esta herramienta no almacena registros del terminal ni identificadores de dispositivos.',
  },
  {
    question: '¿Qué navegador debo usar para un terminal serie web?',
    answer: 'Usa Chrome, Edge u otro navegador basado en Chromium mediante HTTPS o localhost. Firefox, Safari y muchos navegadores iOS no exponen la API Web Serial.',
  },
  {
    question: '¿Qué velocidad de baudios debo elegir?',
    answer: 'Elige la velocidad de baudios configurada en tu firmware. Los ejemplos de Arduino suelen usar 9600 o 115200, mientras que registros más rápidos, bootloaders y flujos de sensores de alta velocidad pueden usar 230400, 460800 o 921600.',
  },
];

const howToData = [
  {
    name: 'Conecta el dispositivo serie USB',
    text: 'Enchufa la placa o adaptador y cierra cualquier otro terminal serie que pueda tener el puerto abierto.',
  },
  {
    name: 'Selecciona la velocidad de baudios',
    text: 'Elige la misma velocidad de baudios que usa el firmware, como 115200 para muchos sketches de Arduino, ESP32 y RP2040.',
  },
  {
    name: 'Concede permiso al navegador',
    text: 'Pulsa Conectar, elige el dispositivo serie en el selector del navegador y permite que la página abra el puerto.',
  },
  {
    name: 'Lee y envía datos del terminal',
    text: 'Observa los registros entrantes en el terminal, envía comandos con terminaciones de línea CRLF opcionales y limpia o pausa la salida en vivo cuando sea necesario.',
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

export const content: ToolLocaleContent<WebUsbSerialMonitorUI> = {
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
      text: 'Monitor Serie Online para Hardware USB Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este monitor serie de navegador abre un puerto serie USB directamente desde Chrome o Edge, luego transmite texto desde microcontroladores, puentes USB UART, placas de desarrollo, bootloaders, dispositivos de prueba, sensores y hardware de laboratorio. Está diseñado para diagnósticos rápidos cuando necesitas una consola serie pero no quieres instalar un IDE de escritorio o una aplicación de terminal.',
    },
    {
      type: 'message',
      title: 'Límite de permiso del navegador',
      html: 'La página no puede enumerar ni abrir silenciosamente tus dispositivos serie. El acceso comienza solo después de que pulses Conectar y elijas un puerto en el selector del navegador. Los datos del terminal permanecen en la pestaña actual a menos que los copies tú mismo.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'preajustes de baudios comunes' },
        { value: 'CRLF', label: 'terminación de comando opcional' },
        { value: 'local', label: 'sesión de terminal' },
      ],
    },
    {
      type: 'title',
      text: 'Cuándo es Útil un Terminal Serie Web',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Verificar mensajes de arranque de Arduino, ESP32, ESP8266, RP2040, STM32 o firmware personalizado.',
        'Enviar comandos AT a módems, GPS, LoRa, Wi-Fi, Bluetooth o módulos celulares a través de un adaptador USB UART.',
        'Leer la salida de sensores de un banco de pruebas de fábrica, laboratorio escolar, controlador robótico o prototipo de banco.',
        'Verificar que un controlador de puente serie USB, cable, alimentación de la placa y velocidad de baudios del firmware funcionen juntos.',
        'Recopilar un registro de errores rápido antes de presentar un bug o solicitar soporte de hardware.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Monitor serie web',
          description: 'Ideal para soporte rápido, instrucciones en clase, diagnósticos de campo y flujos de trabajo maker donde abrir una URL es más rápido que instalar un IDE.',
        },
        {
          title: 'Terminal de escritorio',
          description: 'Mejor para protocolos binarios, sesiones largas de captura, scripting, control de flujo por hardware, macros y entornos donde las APIs del navegador están bloqueadas.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Lista de Verificación de Baudios y Fin de Línea',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Configuración', 'Elección típica', 'Qué falla cuando es incorrecto'],
      rows: [
        ['Velocidad de baudios', '115200 para muchas placas modernas, 9600 para ejemplos antiguos.', 'El texto legible se convierte en símbolos aleatorios o no aparece ningún registro útil.'],
        ['Fin de línea', 'CRLF para muchos analizadores de comandos, sin terminación para protocolos de caracteres sin procesar.', 'Los comandos se ignoran porque el firmware espera un terminador.'],
        ['Acceso exclusivo al puerto', 'Cierra Arduino Serial Monitor, PuTTY, screen, minicom o herramientas del fabricante.', 'El selector del navegador abre el puerto pero la lectura o escritura falla.'],
        ['Contexto seguro', 'HTTPS o localhost.', 'La API Serial falta incluso en un navegador compatible.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '¿Sin salida serie?',
      html: 'Confirma que la placa está alimentada y que el cable USB admite datos, no solo carga. Prueba 9600, 57600 y 115200 si no conoces la velocidad de baudios del firmware. Pulsa reset después de conectar porque muchas placas imprimen registros de arranque solo durante el inicio. Cierra otro software que pueda tener el puerto serie abierto e instala el controlador del sistema operativo para CH340, CP210x, FTDI o el fabricante de la placa si el dispositivo nunca aparece.',
    },
    {
      type: 'title',
      text: 'Privacidad, Seguridad y Límites',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Fortalezas y límites de Web Serial',
      items: [
        {
          pro: 'Sin instalación de escritorio para diagnósticos básicos de texto serie.',
          con: 'Requiere un navegador basado en Chromium y un contexto seguro.',
        },
        {
          pro: 'El selector del navegador limita el acceso al puerto específico que elijas.',
          con: 'No está destinado a analizadores de protocolos binarios o capturas largas sin supervisión.',
        },
        {
          pro: 'Funciona bien para registros de texto, líneas de comandos y verificaciones rápidas de hardware.',
          con: 'Algunas políticas corporativas, navegadores móviles y sistemas operativos bloquean Web Serial.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial no está disponible',
    unsupportedBody: 'Usa Chrome o Edge mediante HTTPS o localhost y asegúrate de que tu dispositivo exponga una interfaz serie USB.',
    secureContext: 'Web Serial requiere HTTPS o localhost. Recarga esta página desde un origen seguro e inténtalo de nuevo.',
    statusIdle: 'Elige una velocidad de baudios y conecta un dispositivo serie USB',
    statusPermission: 'Esperando el selector de puerto serie del navegador',
    statusOpening: 'Abriendo puerto serie',
    statusConnected: 'Puerto serie conectado',
    statusDisconnected: 'Puerto serie desconectado',
    statusError: 'Conexión serie fallida',
    connect: 'Conectar Serie',
    disconnect: 'Desconectar',
    send: 'Enviar',
    clear: 'Limpiar',
    pause: 'Pausa',
    resume: 'Reanudar',
    baudRate: 'Baudios',
    newline: 'Añadir CRLF',
    inputPlaceholder: 'Escribe un comando y pulsa Enter',
    portFallback: 'Sin puerto seleccionado',
    portLabel: 'Identidad del puerto',
    connectedDeviceLabel: 'Dispositivo conectado',
    deviceNameFallback: 'Dispositivo serie USB',
    transportLabel: 'Enlace Web Serial',
    bytesLabel: 'Bytes',
    linesLabel: 'Líneas',
    privacyTitle: 'Acceso controlado',
    privacyBody: 'El navegador solo expone el dispositivo serie que seleccionas. Los registros permanecen en esta pestaña a menos que los copies.',
    emptyLog: 'La salida del terminal aparecerá aquí después de conectar un dispositivo serie.',
    copied: 'Copiado',
    copyLog: 'Copiar',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'Terminal en vivo',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' baudios',
    vendorFtdi: 'FTDI USB Serial',
    vendorSilabs: 'Silicon Labs CP210x',
    vendorCh340: 'CH340 USB Serial',
    vendorArduinoUsb: 'Arduino USB Serial',
    vendorAdafruit: 'Adafruit USB Serial',
    vendorRp2040: 'Raspberry Pi RP2040',
    vendorEspressif: 'Espressif USB Serial',
    vendorOpenSource: 'Open Source USB Serial',
  },
};
