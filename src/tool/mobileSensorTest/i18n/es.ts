import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-sensores-movil';
const title = 'Test de Sensores del Móvil';
const description = 'Ejecuta una prueba online de giroscopio, acelerómetro, sensor de movimiento y nivel de burbuja en tu teléfono para comprobar inclinación, rotación, deriva y problemas de calibración de sensores.';

const faqData = [
  {
    question: '¿Cómo puedo probar el giroscopio de mi teléfono online?',
    answer: 'Abre el test en el teléfono, pulsa Iniciar Calibración, permite el acceso a los sensores de movimiento si se solicita y luego gira e inclina el dispositivo. Un giroscopio y sensor de orientación en buen estado deben actualizar alpha, beta y gamma con suavidad, sin congelarse ni dar saltos bruscos.',
  },
  {
    question: '¿Puedo probar el acelerómetro con un nivel de burbuja?',
    answer: 'Sí. Coloca el teléfono sobre una mesa plana después de iniciar el test. La burbuja debería situarse cerca del centro y los valores de aceleración deben permanecer estables. Si la burbuja se desvía mucho mientras el teléfono está quieto, el acelerómetro podría necesitar calibración o la funda, la mesa o el hardware del dispositivo pueden estar interfiriendo.',
  },
  {
    question: '¿Por qué el iPhone pide permiso de movimiento?',
    answer: 'Safari en iPhone y iPad requiere un toque antes de que los sitios web puedan acceder a los sensores de movimiento y orientación. Si se deniega el permiso, el test no podrá leer los datos del giroscopio ni del acelerómetro hasta que permitas el acceso al movimiento.',
  },
  {
    question: '¿Puede esto arreglar o calibrar una brújula averiada?',
    answer: 'Ninguna herramienta de navegador puede reparar hardware ni forzar la calibración de la brújula del sistema. Este test te ayuda a identificar síntomas: lecturas congeladas, movimiento ruidoso, deriva, falta de permisos o un navegador que no expone los sensores.',
  },
];

const howToData = [
  { name: 'Abre el test en tu teléfono', text: 'Usa el mismo iPhone, iPad, teléfono Android o tableta que quieras diagnosticar. Los navegadores de escritorio normalmente no exponen sensores de movimiento.' },
  { name: 'Permite el acceso al movimiento', text: 'Pulsa Iniciar Calibración y acepta el aviso de permiso de movimiento u orientación si tu navegador lo muestra.' },
  { name: 'Prueba la inclinación y rotación', text: 'Inclina el teléfono hacia delante, gíralo a izquierda y derecha, luego rótalo en plano sobre una mesa. Observa si los cambios de alpha, beta, gamma y aceleración son suaves.' },
  { name: 'Comprueba la deriva en superficie plana', text: 'Deja el teléfono quieto durante varios segundos. Un sensor en buen estado debe estabilizarse en lugar de vagar constantemente, dar picos o congelarse.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Test online de giroscopio y acelerómetro para teléfonos', level: 2 },
    {
      type: 'paragraph',
      html: 'Usa este test de sensores móviles cuando la rotación de pantalla no funcione bien, los juegos o apps de RA se desvíen, una app de nivel de burbuja parezca inexacta, la navegación apunte en dirección equivocada o el teléfono no reaccione correctamente a la inclinación. El test muestra en vivo el comportamiento del giroscopio, acelerómetro, rotación y nivel para que puedas distinguir un problema de permisos del navegador de un fallo real del sensor o de calibración.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Intención de búsqueda principal', value: 'probar giroscopio online' },
        { label: 'También comprueba', value: 'deriva del acelerómetro' },
        { label: 'Mejor dispositivo', value: 'teléfono o tableta' },
      ],
    },
    { type: 'title', text: 'Qué indica cada lectura del sensor', level: 3 },
    {
      type: 'table',
      headers: ['Lectura', 'Útil para', 'Señales de alerta'],
      rows: [
        ['Alpha', 'Comprobar la rotación alrededor del eje vertical, útil para movimientos tipo brújula y cambios de rumbo.', 'No cambia al girar el teléfono en plano, salta en grandes intervalos o se queda congelada en cero.'],
        ['Beta', 'Comprobar la inclinación adelante-atrás para rotación de pantalla, juegos, nivelación de cámara y controles de RA.', 'Se mueve en dirección incorrecta, se queda atascada en un valor o sigue derivando mientras el teléfono está quieto.'],
        ['Gamma', 'Comprobar el balanceo izquierda-derecha para rotación horizontal, juegos de carreras, apps de nivel y estabilizadores.', 'Un lado responde de forma diferente, los valores son ruidosos o la burbuja nunca se centra sobre una mesa plana.'],
        ['Aceleración X/Y/Z', 'Comprobar la respuesta del acelerómetro, detección de sacudidas, dirección de la gravedad y estabilidad del movimiento.', 'Picos grandes estando quieto, falta de respuesta al movimiento o lecturas inestables tras quitar la funda.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Síntomas que este test ayuda a diagnosticar',
      html: '<p>Usa los valores en vivo para investigar fallos de rotación automática, un giroscopio con retardo, deriva del acelerómetro, avisos de calibración de brújula, seguimiento de RA que se desliza, errores de nivel de cámara, controles de movimiento que tiran hacia un lado o un teléfono que solo reporta movimiento en apps nativas pero no en el navegador.</p>',
    },
    { type: 'title', text: 'Giroscopio vs acelerómetro vs brújula', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Giroscopio', description: 'Mide la velocidad de rotación. Es clave para RA, juegos, estabilización de cámara, controles de movimiento y cambios suaves de orientación.' },
        { title: 'Acelerómetro', description: 'Mide la aceleración y la dirección de la gravedad. Permite la inclinación, la detección de sacudidas, el conteo de pasos y el comportamiento del nivel de burbuja digital.' },
        { title: 'Brújula / magnetómetro', description: 'Ayuda a estimar el rumbo, pero puede verse alterado por imanes, objetos metálicos, soportes de coche, fundas, altavoces, portátiles y dispositivos electrónicos cercanos.' },
      ],
    },
    { type: 'title', text: 'Cómo probar correctamente la calibración del sensor', level: 3 },
    {
      type: 'list',
      items: [
        'Retira fundas magnéticas, carteras MagSafe, soportes metálicos, clips de mando y accesorios antes de probar.',
        'Coloca el teléfono sobre una mesa firme y plana y espera varios segundos antes de juzgar la deriva.',
        'Gira el teléfono lentamente en cada eje en lugar de sacudirlo de inmediato.',
        'Compara Safari o Chrome con una app nativa de sensores o brújula si el navegador no muestra datos.',
        'Reinicia el dispositivo y repite el test si las lecturas están congeladas en varias apps.',
      ],
    },
    {
      type: 'tip',
      title: 'Nota sobre permisos en iPhone y Android',
      html: 'En iPhone y iPad, Safari puede solicitar permiso de movimiento y orientación tras un toque. En Android, Chrome suele exponer los sensores de movimiento de forma más directa, pero ajustes de privacidad, flags del navegador, modos de ahorro de batería y webviews integradas pueden bloquear o reducir los datos del sensor.',
    },
    {
      type: 'table',
      headers: ['Problema', 'Causa probable', 'Siguiente paso'],
      rows: [
        ['Ningún valor cambia', 'Permiso denegado, navegador no compatible, dispositivo de escritorio o webview restringida.', 'Abre en el propio teléfono, usa Safari o Chrome, permite el acceso al movimiento y recarga la página.'],
        ['La burbuja deriva sobre una mesa', 'Problema de calibración, superficie irregular, interferencia de la funda o ruido del acelerómetro.', 'Quita la funda, usa una superficie plana conocida, reinicia y compara con una app de nivel nativa.'],
        ['La dirección de la brújula es incorrecta', 'Interferencia magnética o calibración de la brújula del sistema.', 'Aléjate de metales y dispositivos electrónicos y usa el flujo de calibración de brújula del sistema operativo.'],
        ['Los valores saltan o dan picos', 'Ruido del sensor, hardware dañado, limitación agresiva del navegador o movimiento físico repentino.', 'Prueba estando quieto, cierra apps pesadas y compara con otro navegador o app nativa.'],
      ],
    },
    {
      type: 'summary',
      title: 'Para qué sirve este test',
      items: [
        'Probar el giroscopio de un teléfono online sin instalar ninguna app.',
        'Comprobar la deriva del acelerómetro con un nivel de burbuja en vivo.',
        'Averiguar si los controles de movimiento fallan por hardware, calibración, permisos o compatibilidad del navegador.',
        'Preparar un teléfono para RA, juegos, nivelación de cámara, navegación o solución de problemas de rotación de pantalla.',
      ],
    },
  ],
  ui: {
    startButton: 'Iniciar Calibración',
    permissionHint: 'Toca una vez para desbloquear los sensores de movimiento',
    privacyBadge: 'Datos locales del sensor',
    privacyCopy: 'Las lecturas de orientación y movimiento permanecen dentro de esta sesión del navegador.',
    orientationPanel: 'Orientación',
    motionPanel: 'Movimiento',
    bubblePanel: 'Nivel de burbuja digital',
    statusReady: 'Listo para permiso de sensor',
    statusWaiting: 'Esperando permiso del navegador',
    statusDenied: 'Acceso al sensor denegado o no disponible',
    statusUnsupported: 'Los sensores de movimiento no están expuestos por este navegador',
    statusActive: 'Flujo de sensor en vivo activo',
    steadyLabel: 'Estable',
    movingLabel: 'En movimiento',
    shakingLabel: 'Agitando',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Desviación de nivel',
    motionMagnitudeLabel: 'Magnitud de movimiento',
    cubeLabel: 'Cubo 3D de orientación del dispositivo',
    bubbleLabel: 'Indicador de nivel de burbuja',
    calibrationLabel: 'Grados en vivo',
  },
};
