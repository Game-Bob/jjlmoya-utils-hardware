import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'analizador-dpi-raton';
const title = 'Analizador de DPI de ratón';
const description =
  'Mide los DPI reales de tu ratón online moviéndolo una distancia física conocida y comparando el movimiento capturado del puntero en píxeles.';

const faqData = [
  {
    question: '¿Cómo funciona un medidor de DPI de ratón online?',
    answer:
      'Te pide que muevas el ratón una distancia física conocida, registra los eventos de movimiento del navegador, corrige los valores capturados con devicePixelRatio y divide los píxeles resultantes por la distancia en pulgadas.',
  },
  {
    question: '¿Por qué los DPI reales pueden diferir del valor impreso en el ratón?',
    answer:
      'Las tolerancias del sensor, los escalones del firmware, el comportamiento de la superficie, el escalado del sistema operativo, la aceleración del puntero y los perfiles de juego pueden hacer que el movimiento medido difiera de los DPI nominales seleccionados en el programa.',
  },
  {
    question: '¿Debo desactivar la aceleración del puntero antes de la prueba?',
    answer:
      'Sí. Desactiva Mejorar precisión del puntero en Windows y cualquier curva de aceleración del fabricante si quieres una medición limpia de DPI. Déjala activada solo si quieres ver intencionadamente cómo se comporta tu configuración habitual.',
  },
  {
    question: '¿Qué distancia física debería usar?',
    answer:
      'Las distancias más largas reducen el error de mano. El ancho de una tarjeta de crédito es cómodo, pero un pase de regla de 100 mm o 4 pulgadas suele ser más repetible si tu escritorio tiene espacio suficiente.',
  },
];

const howToData = [
  {
    name: 'Elige una referencia física',
    text: 'Usa 5 o 10 mm para DPI muy altos, 1 pulgada para pruebas convencionales o referencias más largas cuando tengas suficiente espacio en el escritorio.',
  },
  {
    name: 'Mantén pulsado el botón de captura',
    text: 'Mantén pulsado el objetivo de captura en pantalla y mueve el ratón físicamente hacia la derecha justo la distancia elegida.',
  },
  {
    name: 'Suelta en la marca física',
    text: 'Suelta el botón cuando el ratón alcance la marca física real en tu escritorio. La herramienta calcula los píxeles por pulgada y muestra los DPI medidos.',
  },
  {
    name: 'Repite a diferentes velocidades',
    text: 'Haz pases lentos y rápidos. Si los DPI cambian mucho, la aceleración del puntero o el suavizado del sensor pueden estar influyendo en el resultado.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Medidor de DPI de ratón online: mide la sensibilidad real del sensor', level: 2 },
    {
      type: 'paragraph',
      html: 'Un ratón puede anunciar 800, 1600, 3200 o 26000 DPI, pero el valor que importa en juegos y trabajo de precisión es el movimiento que realmente llega al ordenador. Este medidor de DPI de ratón online mide ese valor práctico comparando un movimiento físico conocido con el movimiento del puntero capturado en el navegador. El resultado se expresa en píxeles por pulgada, la misma unidad usada habitualmente al hablar de DPI o CPI de ratón.',
    },
    {
      type: 'paragraph',
      html: 'La prueba es intencionadamente local y sencilla: mantén pulsado el objetivo de captura, mueve el ratón exactamente hacia la derecha la distancia física seleccionada y suelta. La herramienta acumula deltas de movimiento nativos en lugar de usar un script de tasa de sondeo o una prueba de ratón genérica. Como el cálculo se ejecuta en tu navegador, no implica descarga de drivers, cuenta ni subida a la nube.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Condición importante para la prueba',
      html: 'Para una medición limpia de DPI, desactiva la aceleración del puntero del sistema operativo y las curvas de aceleración del fabricante. Si la aceleración permanece activada, el resultado describe el comportamiento actual de tu puntero en lugar del ajuste puro del sensor.',
    },
    { type: 'title', text: 'Cómo funciona el cálculo real de DPI', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI significa puntos por pulgada. En el contexto de los ratones, se suele usar DPI y CPI indistintamente para describir cuántos conteos o píxeles de puntero se producen cuando el ratón se desplaza una pulgada física. Este analizador registra el movimiento horizontal durante un pase controlado, convierte la distancia seleccionada a pulgadas y luego divide los píxeles capturados por las pulgadas. Por ejemplo, si el ratón informa 3200 píxeles corregidos en 2 pulgadas, el valor medido es aproximadamente 1600 DPI.',
    },
    {
      type: 'list',
      items: [
        'Elige una referencia corta como 10 mm para DPI muy altos o una más larga para DPI bajos.',
        'Mantén pulsado el control de captura central para que el navegador registre el movimiento solo durante el pase.',
        'Muévete físicamente hacia la derecha, manteniendo la trayectoria lo más recta posible.',
        'Suelta en la marca física real y lee los DPI calculados.',
        'Repite varias veces y promedia los pases consistentes en lugar de confiar en un solo pase.',
      ],
    },
    {
      type: 'table',
      headers: ['Movimiento capturado', 'Distancia física', 'DPI medidos'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm ancho de tarjeta de crédito', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Haz un trazo limpio',
      html: 'Un solo trazo horizontal es más importante que una distancia larga. Para DPI muy altos, usa el preajuste de 5 mm o 10 mm: mantiene el movimiento lo bastante pequeño para quedarse dentro de la pantalla y a la vez da al calculador una referencia física conocida. La barra de progreso es solo un medidor de señal de entrada; la regla o tarjeta sobre el escritorio es el punto de parada.',
    },
    { type: 'title', text: 'Por qué los DPI medidos pueden diferir de los DPI anunciados', level: 3 },
    {
      type: 'paragraph',
      html: 'Los DPI anunciados suelen ser un escalón de firmware seleccionable, no un valor certificado en laboratorio para cada superficie y cada unidad. Dos ratones configurados con los mismos DPI nominales pueden sentirse distintos si sus sensores, escalado de firmware, altura de los deslizadores, textura de la superficie, comportamiento de elevación o configuración del sistema operativo difieren. Una pequeña variación es normal; una variación grande suele significar que la configuración de la prueba o la ruta del software está influyendo en la medición.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'DPI nominales',
          description: 'El valor mostrado en el programa del ratón o impreso en la página del producto. Útil como punto de partida, pero no prueba la salida de movimiento real.',
          points: ['Fácil de leer', 'Puede ocultar escalado de firmware', 'Varía según el perfil'],
        },
        {
          title: 'DPI medidos',
          description: 'El valor calculado a partir del desplazamiento físico y el movimiento del puntero capturado. Ideal para igualar un ratón con otro.',
          highlight: true,
          points: ['Práctico y repetible', 'Sensible a la precisión manual', 'Muestra el comportamiento real de la configuración'],
        },
        {
          title: 'Sensibilidad en juego',
          description: 'La respuesta final de cámara o cursor después de que el juego multiplique la entrada del ratón por su propio valor de sensibilidad.',
          points: ['Lo que realmente sientes', 'Específica del juego', 'No es una medición del sensor'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Ventajas e inconvenientes de medir DPI desde el navegador',
      items: [
        { pro: 'No requiere instalar drivers', con: 'El navegador ve el movimiento del puntero procesado, no la señal eléctrica del sensor' },
        { pro: 'Bueno para comparar ratones y perfiles rápidamente', con: 'Los ajustes de aceleración pueden distorsionar el resultado si se dejan activados' },
        { pro: 'Funciona con referencias físicas comunes', con: 'La alineación de la mano y las marcas en el escritorio afectan a la repetibilidad' },
      ],
    },
    { type: 'title', text: 'Preparar Windows, macOS y el programa del ratón', level: 3 },
    {
      type: 'paragraph',
      html: 'Antes de usar un medidor de DPI, haz que la ruta de entrada sea lo más neutra posible. En Windows, desactiva Mejorar precisión del puntero si quieres un comportamiento sin procesar. En el programa del fabricante, desactiva el ajuste de ángulo, aceleración, control de ondulación, suavizado o asistencias específicas de superficie a menos que quieras medirlas deliberadamente. En macOS, la aceleración del puntero forma parte de la ruta normal del cursor, por lo que el valor debe tratarse como un resultado práctico del sistema, no como un resultado puro del sensor.',
    },
    {
      type: 'table',
      headers: ['Ajuste', 'Recomendado para DPI puros', 'Motivo'],
      rows: [
        ['Aceleración del puntero', 'Desactivado', 'La aceleración modifica la salida de movimiento según la velocidad'],
        ['Escalón de DPI del programa del ratón', 'Un solo escalón fijo', 'Evita cambios accidentales de perfil durante la prueba'],
        ['Ajuste de ángulo', 'Desactivado', 'Puede modificar el movimiento diagonal y enmascarar la salida natural del sensor'],
        ['Escalado del sistema operativo', 'Dejar normal, la herramienta corrige con devicePixelRatio', 'El analizador neutraliza el zoom del navegador y la relación de píxeles de pantalla en su cálculo'],
        ['Superposiciones de juego o macros', 'Desactivado', 'El software adicional puede interceptar la entrada y hacer que los pases sean inconsistentes'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'Igualar dos ratones',
      html: 'Mide el ratón antiguo tres veces, anota la media y luego ajusta el escalón de DPI del ratón nuevo hasta que su valor medido sea cercano. Esto suele ser más útil que copiar el número de una aplicación de fabricante a otra, porque la salida real del sensor puede diferir.',
    },
    { type: 'title', text: 'Elegir la referencia física adecuada', level: 3 },
    {
      type: 'paragraph',
      html: 'La interfaz incluye referencias cortas para DPI altos y referencias más largas para DPI bajos. Usa 5 o 10 mm cuando el puntero cruce la pantalla con un movimiento minúsculo de mano. Usa 1 pulgada, 50 mm o el ancho de tarjeta de 85.6 mm cuando el ratón esté configurado más cerca de los valores habituales de escritorio o juegos tácticos.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'milímetros en una pulgada' },
        { value: '85.6', label: 'milímetros en el ancho de una tarjeta de crédito común' },
        { value: '3+', label: 'pases repetidos recomendados antes de confiar en un perfil' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'Puntos por pulgada, usado habitualmente para describir el movimiento del puntero producido por una pulgada de desplazamiento del ratón.' },
        { term: 'CPI', definition: 'Conteos por pulgada, un término orientado al sensor que suele ser más preciso técnicamente para ratones.' },
        { term: 'Aceleración', definition: 'Un ajuste o curva que modifica la salida del puntero según la velocidad de movimiento.' },
        { term: 'devicePixelRatio', definition: 'La relación del navegador entre píxeles CSS y píxeles físicos de pantalla, usada aquí para normalizar los efectos de zoom y escalado de pantalla.' },
        { term: 'Ajuste de ángulo', definition: 'Corrección por firmware o programa que endereza el movimiento, a veces útil para dibujo pero rechazada por muchos jugadores competitivos.' },
      ],
    },
    { type: 'title', text: 'Interpretar el indicador de aceleración', level: 3 },
    {
      type: 'paragraph',
      html: 'El indicador de aceleración no es una prueba de laboratorio de la curva del sistema operativo. Es un aviso práctico basado en la variación de la velocidad de movimiento durante el pase capturado. Si pases lentos y rápidos producen valores de DPI muy diferentes, puede haber aceleración, suavizado, comportamiento de superficie o movimiento manual inconsistente. Una buena configuración sin procesar debería producir DPI medidos similares en varios pases cuando la distancia física es la misma.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Cuando el resultado da saltos',
      html: 'Si un pase dice 780 DPI y el siguiente dice 950 DPI con la misma distancia, no culpes inmediatamente al ratón. Revisa los ajustes de aceleración, aumenta la distancia de prueba, mantén la trayectoria del ratón horizontal y asegúrate de que el puntero no choque contra el borde de la pantalla durante el pase.',
    },
    {
      type: 'summary',
      title: 'Lista de comprobación para una medición fiable de DPI',
      items: [
        'Usa una referencia física medida, preferiblemente de 100 mm o más.',
        'Muévete horizontalmente hacia la derecha y para exactamente en la marca.',
        'Desactiva la aceleración para comparaciones de perfil sin procesar.',
        'Haz al menos tres pases y compara la dispersión.',
        'Usa los DPI medidos para igualar ratones, no solo las etiquetas de DPI anunciados.',
      ],
    },
    {
      type: 'message',
      title: 'Nota de privacidad',
      html: 'Esta prueba de aceleración de ratón y cálculo de DPI se ejecutan localmente en el navegador. La herramienta no necesita acceso a drivers, números de serie del dispositivo ni registros de entrada subidos.',
    },
  ],
  ui: {
    badge: 'Laboratorio de DPI reales',
    referenceLabel: 'Referencia',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Tarjeta',
    lineStart: 'Inicio',
    holdButton: 'Mantén pulsado y mueve la distancia seleccionada',
    holdHint: 'Usa una regla o tarjeta real sobre el escritorio. No te pares porque la barra se llene.',
    progressLabel: 'Señal de entrada',
    activeHint: 'Siguiendo movimiento',
    dpiLabel: 'DPI medidos',
    pixelsLabel: 'Movimiento corregido',
    distanceReadout: 'Distancia física',
    ratioLabel: 'Relación de píxeles',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Listo para capturar',
    statusTracking: 'Siguiendo movimiento...',
    statusDone: 'Medición completada',
    reset: 'Reiniciar',
    accelerationTitle: 'Señal de aceleración',
    accelerationHint: 'Repite a velocidades lenta y rápida para comparar la consistencia.',
    accelerationLow: 'estable',
    accelerationMedium: 'variable',
    accelerationHigh: 'deriva alta',
    sampleCount: 'Muestras',
  },
};
