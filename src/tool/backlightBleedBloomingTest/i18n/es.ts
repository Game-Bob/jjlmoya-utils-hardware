import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-fugas-retroiluminacion-blooming';
const title = 'Test de Fugas de Retroiluminación y Blooming';
const description =
  'Ejecuta un test de fugas de retroiluminación con pantalla negra pura a pantalla completa y un test de blooming con círculo blanco arrastrable para OLED, Mini LED, IPS, VA, monitores, portátiles y televisores.';

const faqData = [
  {
    question: '¿Cómo pruebo las fugas de retroiluminación online?',
    answer:
      'Apaga las luces de la habitación, pon el brillo al máximo, limpia la pantalla, abre la prueba negra pura en pantalla completa, espera a que desaparezca el cursor e inspecciona los bordes y esquinas en busca de fugas de luz fijas.',
  },
  {
    question: '¿Cuál es la diferencia entre fuga de retroiluminación y el glow IPS?',
    answer:
      'La fuga de retroiluminación suele ser una mancha brillante fija cerca del marco causada por presión del panel o ensamblaje imperfecto. El glow IPS cambia mucho con el ángulo de visión y la posición de los ojos, sobre todo en las esquinas.',
  },
  {
    question: '¿Cómo se ve el blooming en un televisor o monitor Mini LED?',
    answer:
      'El blooming es un halo visible alrededor de un objeto brillante sobre fondo negro. Aparece cuando una zona de atenuación local ilumina un área más grande que el propio objeto.',
  },
  {
    question: '¿Pueden los paneles OLED tener fugas de retroiluminación?',
    answer:
      'Los paneles OLED no usan retroiluminación tradicional, por lo que no deberían mostrar fugas de luz típicas de LCD. Pero pueden presentar problemas de uniformidad en negros cercanos, tintes, bandas verticales o negros elevados por configuración de fuente o pantalla.',
  },
  {
    question: '¿Debo devolver un monitor con fuga de luz?',
    answer:
      'La decisión de devolución depende de la gravedad, el tipo de panel, el precio y la política de garantía. Una esquina brillante visible durante películas o juegos normales es más grave que una mancha tenue solo visible en una foto de larga exposición.',
  },
];

const howToData = [
  {
    name: 'Preparar la habitación',
    text: 'Apaga las lámparas, cierra las cortinas, limpia la pantalla y deja que tus ojos se adapten un minuto para que el polvo y los reflejos no parezcan defectos del panel.',
  },
  {
    name: 'Subir el brillo de la pantalla',
    text: 'Ajusta el brillo al 100 por ciento o al modo HDR que quieras inspeccionar. Desactiva los sensores de luz ambiente agresivos mientras pruebas.',
  },
  {
    name: 'Ejecutar la prueba negra',
    text: 'Inicia el modo de fuga de retroiluminación. La página entra en pantalla completa y muestra negro exacto. Inspecciona el bisel, las esquinas y cualquier mancha fija.',
  },
  {
    name: 'Ejecutar la prueba de blooming',
    text: 'Inicia el modo de atenuación local y arrastra el círculo blanco por la pantalla. Observa si hay halos, atenuación retardada, zonas en forma de cuadrícula y negros elevados.',
  },
  {
    name: 'Salir limpiamente',
    text: 'Pulsa Escape para salir de la pantalla completa nativa. La interfaz de configuración vuelve y el estado de la prueba se reinicia.',
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

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Test de Fugas de Retroiluminación Online: Qué Buscar en un Monitor o TV Nuevo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un <strong>test de fugas de retroiluminación online</strong> es más útil durante el período de devolución de un monitor, portátil gaming o televisor nuevo. La prueba muestra un campo a pantalla completa generado por el navegador en <code>#000000</code> para que la retroiluminación LCD sea la única fuente posible de luz no deseada. Si el panel, la pila de difusores, la presión del bisel o el ensamblaje del marco fugan luz, normalmente lo verás como esquinas más brillantes, bordes nublados o manchas que permanecen en la misma posición física.',
    },
    {
      type: 'paragraph',
      html: 'Usa la prueba con expectativas realistas. Los paneles LCD necesitan retroiluminación, y una variación muy pequeña puede ser normal, especialmente en pantallas IPS y VA económicas. La pregunta práctica no es si una foto del móvil de larga exposición puede exagerar una mancha. La pregunta es si la fuga de luz es visible para tus ojos durante películas oscuras, pantallas de carga de juegos, escenas nocturnas, fondos de escritorio negros o vídeos con bandas negras.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Haz esto antes de juzgar el panel',
      badge: 'Configuración',
      html: 'Apaga las luces de la habitación, limpia el cristal, ajusta el brillo al 100 por ciento, desactiva los sensores de luz ambiente y espera unos segundos a que tus ojos se adapten. Los reflejos, las huellas dactilares y el cursor del ratón pueden crear falsos positivos durante una inspección de uniformidad negra.',
    },
    {
      type: 'list',
      items: [
        'Revisa los bordes superior e inferior donde la presión del bisel suele crear brillos fijos',
        'Inspecciona las cuatro esquinas en busca de fugas de luz triangulares o en forma de media luna',
        'Mueve ligeramente la cabeza para separar el brillo por ángulo de visión de la fuga fija',
        'Toma notas primero con tus ojos, porque las cámaras pueden sobreexponer pantallas negras',
        'Vuelve a probar después de que el panel se haya calentado durante 15 a 30 minutos si el resultado es dudoso',
      ],
    },
    {
      type: 'title',
      text: 'Fuga de Retroiluminación, Glow IPS, Nublado y Uniformidad del Negro',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Problema', 'Lo que ves', 'Cómo se comporta', 'Paneles más comunes'],
      rows: [
        ['Fuga de retroiluminación', 'Mancha brillante fija en borde o esquina', 'Permanece en el mismo lugar al mover la cabeza', 'IPS, VA, TN LCD'],
        ['Glow IPS', 'Brillo lechoso en esquinas sobre imágenes oscuras', 'Cambia mucho con el ángulo de visión y la distancia', 'IPS LCD'],
        ['Nublado', 'Grandes áreas nubosas irregulares sobre negro', 'Generalmente fijo, a veces se reduce bajando el brillo', 'TVs y monitores LCD con retroiluminación lateral'],
        ['Aplastamiento de negros VA', 'Los detalles oscuros desaparecen o se emborronan en movimiento', 'Depende del contenido y la transición de píxeles', 'VA LCD'],
        ['Bandeo OLED en negros cercanos', 'Bandas verticales u horizontales cerca del negro', 'Visible en grises cercanos al negro, no en negro puro', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'El error más común es llamar a cualquier artefacto visible en habitación oscura fuga de retroiluminación. El <strong>glow IPS</strong> es óptico: se vuelve más fuerte cuando te sientas cerca, miras el panel fuera de eje o ves las esquinas desde un ángulo pronunciado. La verdadera fuga de retroiluminación es mecánica o de ensamblaje: permanece fija en la misma zona del bisel aunque cambie la posición de tus ojos. Esta distinción importa porque muchos vendedores tratan las fugas graves de forma diferente al glow IPS normal.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Ángulos de visión amplios, glow frecuente en esquinas y fugas visibles si el marco presiona el panel de forma desigual.',
          points: ['Se comprueba mejor desde tu distancia de visionado normal', 'El glow cambia con la posición de la cabeza', 'Las fugas en bordes pueden ser relevantes para la garantía si son graves'],
        },
        {
          title: 'VA',
          description: 'Mayor contraste nativo, normalmente menos glow tipo IPS, pero puede mostrar nublado y transiciones oscuras lentas.',
          points: ['El negro se ve más profundo que en IPS', 'La uniformidad puede variar por unidad', 'Aparece blooming en modelos con atenuación local'],
        },
        {
          title: 'OLED',
          description: 'Sin retroiluminación LCD, por lo que el negro puro debería apagarse, pero la uniformidad en negros cercanos y el tinte aún importan.',
          points: ['El negro puro debería desaparecer en una habitación oscura', 'Prueba diapositivas grises por separado para ver bandas', 'Evita confundir negros elevados de fuente con fugas del panel'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo Ejecutar una Prueba Negra Pura Fiable',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El modo de prueba negra elimina deliberadamente la interfaz normal. Una vez iniciado, el panel de cristal desaparece, los eventos de puntero se desactivan en la interfaz de configuración, la página solicita pantalla completa nativa y la capa de prueba usa negro exacto. Después de dos segundos sin movimiento del ratón, el cursor se oculta para que no cree un punto de referencia blanco ni contamine una inspección en habitación oscura.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'color de fondo de prueba' },
        { value: '2 s', label: 'tiempo de espera del cursor' },
        { value: '100%', label: 'brillo recomendado' },
        { value: '0', label: 'recursos externos en modo prueba' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificación de la prueba negra',
      items: [
        'Usa resolución nativa y desactiva el zoom del navegador si la pantalla escala de forma extraña',
        'Ajusta el brillo SDR lo suficiente para revelar defectos, o prueba HDR en el modo exacto que planeas usar',
        'Inspecciona primero desde tu posición de visionado normal, luego desde un poco más lejos',
        'No juzgues por una foto del móvil a menos que la exposición esté bloqueada y se parezca a lo que ven tus ojos',
        'Pulsa Escape para salir de pantalla completa y repite la prueba tras cambiar la configuración del monitor',
      ],
    },
    {
      type: 'tip',
      title: 'Las fotos con cámara pueden hacer que paneles buenos parezcan terribles',
      html: 'La exposición automática del móvil intenta aclarar una pantalla negra, lo que exagera el brillo tenue y puede convertir el comportamiento normal de un LCD en una imagen dramática. Si necesitas pruebas para la garantía, bloquea la exposición manualmente e incluye una nota que describa si el problema es visible durante contenido real.',
    },
    {
      type: 'title',
      text: 'Test de Blooming por Atenuación Local para Pantallas Mini LED y FALD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El modo <strong>test de blooming para monitor</strong> coloca un círculo blanco puro sobre un fondo negro puro. En un Mini LED, LCD FALD o televisor con atenuación local, ese pequeño objeto obliga a una o más zonas de retroiluminación a iluminarse mientras las zonas vecinas intentan permanecer en negro. Si el algoritmo de atenuación, el número de zonas, el difusor o el contraste del panel no pueden aislar la luz, se ve un halo alrededor del círculo.',
    },
    {
      type: 'paragraph',
      html: 'Arrastrar el círculo es importante. El blooming estático es solo una parte de la historia. Un punto brillante en movimiento revela retardo de atenuación, transiciones de zona, bombeo, campos estelares aplastados, subtítulos elevados y comportamiento en forma de cuadrícula. Un buen sistema de atenuación local debe mantener el objeto brillante mientras minimiza la neblina a su alrededor y evita manchas brillantes retardadas después de que el círculo se haya movido.',
    },
    {
      type: 'table',
      headers: ['Artefacto', 'Qué observar', 'Explicación probable'],
      rows: [
        ['Halo', 'Resplandor suave alrededor del círculo blanco', 'La zona de atenuación local es más grande que el objeto brillante'],
        ['Cuadrícula de zonas', 'Aparecen bloques cuadrados o rectangulares alrededor del movimiento', 'Bajo número de zonas o disposición Mini LED visible'],
        ['Retardo de atenuación', 'Una mancha brillante sigue al círculo con retraso', 'El algoritmo responde lentamente al movimiento'],
        ['Elevación del negro', 'Toda la pantalla se vuelve gris cuando aparece el círculo', 'Atenuación global o control de contraste débil'],
        ['Bloom de subtítulos', 'Gran neblina alrededor de texto blanco pequeño o interfaz', 'Brillo agresivo con zonas locales limitadas'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'Mejor caso de uso',
      html: 'Conecta el portátil o consola al televisor caro que realmente usas, abre este comprobador de atenuación local en el navegador y arrastra el punto brillante por el tamaño de pantalla exacto. Una vista previa pequeña incrustada no puede estresar las zonas de atenuación local igual que una pantalla completa en negro y blanco.',
    },
    {
      type: 'title',
      text: 'Expectativas por Tipo de Panel: OLED, Mini LED, IPS y VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Lo que cada tecnología suele hacer bien y mal',
      items: [
        {
          pro: 'OLED apaga píxeles individuales para un negro verdadero y no debería mostrar fugas de retroiluminación LCD.',
          con: 'OLED puede mostrar bandeo en negros cercanos, tintes, limitación automática de brillo y riesgo de quemado bajo contenido estático.',
        },
        {
          pro: 'Mini LED puede alcanzar alto brillo HDR y reducir la neblina en áreas grandes en comparación con LCD con retroiluminación lateral.',
          con: 'Mini LED sigue usando zonas, por lo que objetos brillantes pequeños pueden generar blooming cuando el número de zonas o la calidad del algoritmo son limitados.',
        },
        {
          pro: 'IPS es estable en color y ángulo de visión, útil para trabajo de escritorio y visionado compartido.',
          con: 'El glow IPS y las fugas en bordes son quejas comunes en escenas oscuras, especialmente al sentarse cerca.',
        },
        {
          pro: 'VA suele tener mucho mejor contraste nativo que IPS y puede verse más profundo en habitaciones oscuras.',
          con: 'VA puede mostrar emborronamiento oscuro, nublado o blooming en versiones con atenuación local.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fuga de retroiluminación', definition: 'Luz no deseada que escapa a través de la pila LCD, normalmente cerca del bisel, visible en imágenes negras.' },
        { term: 'Blooming', definition: 'Un halo alrededor de un objeto brillante causado por zonas de atenuación local que iluminan un área mayor que el objeto.' },
        { term: 'Glow IPS', definition: 'Aclarado lechoso dependiente del ángulo en escenas oscuras en paneles IPS.' },
        { term: 'FALD', definition: 'Full Array Local Dimming, atenuación local de matriz completa, donde la retroiluminación LCD se divide en zonas controladas independientemente.' },
        { term: 'Mini LED', definition: 'Una retroiluminación LCD que usa muchos LEDs pequeños para aumentar el número de zonas y el brillo HDR.' },
        { term: 'Uniformidad del negro', definition: 'La igualdad con la que una pantalla reproduce contenido negro o cercano al negro en toda la superficie.' },
      ],
    },
    {
      type: 'title',
      text: 'Cuándo un Defecto Es lo Suficientemente Grave para Devolver',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Señales de alarma en período de devolución',
      badge: 'Garantía',
      html: 'Considera documentar el problema rápidamente si una esquina brillante es visible desde la distancia de visionado normal, la misma mancha te distrae en películas o juegos, la atenuación local crea halos evidentes alrededor de subtítulos o una pantalla HDR cara rinde peor que las reseñas típicas del mismo modelo.',
    },
    {
      type: 'paragraph',
      html: 'Una decisión justa usa contenido real y la categoría del producto. Un monitor IPS de oficina económico puede tener un glow suave en esquinas que sea normal para su clase. Un monitor Mini LED premium o un televisor de gama alta deberían controlar los niveles de negro y el blooming mucho mejor. Si el defecto es evidente en películas con bandas negras, menús de juego oscuros, escenas espaciales o trabajo de escritorio, no es solo una curiosidad de laboratorio.',
    },
    {
      type: 'list',
      items: [
        'Comprueba el mismo contenido en otra pantalla para descartar la fuente',
        'Restablece los ajustes de imagen antes de asumir que el panel está defectuoso',
        'Prueba atenuación local baja, media y alta porque los algoritmos difieren según el modo',
        'Anota el brillo, modo HDR, modo de atenuación local y distancia de visionado en tus notas',
        'Si devuelves, describe lo que ven tus ojos en lugar de enviar solo fotos sobreexpuestas',
      ],
    },
    {
      type: 'title',
      text: 'Por Qué Esta Prueba Usa Código en Lugar de Vídeo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Los archivos de vídeo pueden introducir artefactos de compresión, trabajo de decodificación del navegador, buffering, conversión de rango de color y cambios de ritmo de fotogramas. Una prueba de defectos de panel no debería depender de un archivo MP4. Esta herramienta usa solo HTML y CSS del lado del cliente para los estados de prueba: negro exacto para el fondo y blanco exacto para el círculo en movimiento. Esto mantiene baja la carga de trabajo y evita actividad de red después de que la página se ha cargado.',
    },
    {
      type: 'paragraph',
      html: 'La posición del círculo de blooming se aplica mediante <code>requestAnimationFrame</code>, que sincroniza las actualizaciones visuales con el bucle de refresco del navegador. La entrada de puntero, ratón y táctil actualiza las coordenadas objetivo, luego el siguiente fotograma de animación mueve el círculo blanco. Esto hace que el arrastre se sienta consistente en monitores de alto refresco, tabletas y teléfonos OLED sin hacer trabajo innecesario en cada evento de entrada sin procesar.',
    },
    {
      type: 'message',
      title: 'Nota de privacidad y rendimiento',
      ariaLabel: 'Nota de privacidad y rendimiento',
      html: 'Los estados de prueba activos no necesitan seguimiento, vídeos, imágenes remotas ni cargas de mediciones. Son intencionadamente simples para que portátiles antiguos, navegadores de TV y configuraciones de salón puedan estresar el panel de pantalla en lugar de la CPU.',
    },
    {
      type: 'title',
      text: 'Solución de Problemas con Resultados Incorrectos',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Síntoma durante la prueba', 'Causa posible', 'Qué probar'],
      rows: [
        ['La pantalla negra no es realmente negra', 'Rango RGB limitado, ajuste de negro elevado, mapeo de tonos HDR o superposición del navegador', 'Configura salida RGB completa, desactiva el contraste dinámico y confirma que no haya filtro nocturno del SO activo'],
        ['El cursor del ratón sigue visible', 'El movimiento reinició el temporizador de inactividad o el navegador bloqueó brevemente la ocultación del cursor', 'Deja de mover el ratón durante dos segundos o usa un mando a distancia/teclado'],
        ['La pantalla completa no se inicia', 'El navegador denegó pantalla completa fuera de un clic directo o limitación del navegador de TV', 'Pulsa el botón de inicio de nuevo o usa el atajo de pantalla completa del navegador'],
        ['El blooming cambia entre modos', 'El ajuste de atenuación local cambia el comportamiento de las zonas', 'Vuelve a probar Bajo, Medio, Alto y Apagado para entender el equilibrio'],
        ['OLED se ve gris', 'Desajuste de rango de vídeo, reflejos de la habitación o modo de imagen con negros elevados', 'Comprueba el rango de fuente, nivel de negro, brillo y reflejos ambientales'],
      ],
    },
    {
      type: 'summary',
      title: 'Interpretación práctica',
      items: [
        'La fuga de retroiluminación es más convincente cuando está fija en su lugar y es visible en contenido oscuro real',
        'El glow IPS cambia con el ángulo, así que prueba desde la posición donde realmente te sientas',
        'El blooming es una limitación de la atenuación local, no un problema de píxeles muertos',
        'OLED debería pasar la prueba de negro puro, pero aún necesita comprobaciones separadas de uniformidad en negros cercanos',
        'Una buena configuración de prueba es oscura, a pantalla completa, con alto brillo y libre de reflejos',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Fuga de retroiluminación',
    bleedDescription: 'Negro exacto a pantalla completa para detectar fugas en bordes, glow IPS, nublado y comprobaciones de uniformidad negra.',
    bloomingTitle: 'Atenuación local',
    bloomingDescription: 'Un círculo blanco arrastrable que estresa Mini LED, FALD, manejo de negros cercanos OLED y zonas de atenuación de TV.',
    startBleed: 'Iniciar prueba negra',
    startBlooming: 'Iniciar prueba de blooming',
    prepTitle: 'Antes de empezar',
    prepBrightness: 'Ajusta el brillo del monitor o TV al 100%.',
    prepRoom: 'Apaga las luces de la habitación y elimina reflejos.',
    prepFullscreen: 'Pulsa Escape para salir de pantalla completa y reiniciar la prueba.',
    panelLabel: 'Vista previa de defectos del panel',
    parametersLabel: 'Parámetros de prueba',
    modeControlsLabel: 'Modos de prueba de retroiluminación',
    blackLevelLabel: 'Negro',
    blackLevelValue: '#000000',
    brightnessLabel: 'Brillo',
    brightnessValue: '100%',
    idleLabel: 'Cursor',
    idleValue: '2s',
    fullscreenLabel: 'Pantalla completa',
    fullscreenValue: 'API',
    escapeHint: 'Prueba negra pura en ejecución. Deja de mover el ratón durante 2 segundos para ocultar el cursor. Pulsa Esc para salir.',
    dragHint: 'Arrastra o toca el círculo blanco. Observa halos, cuadrículas de zonas y atenuación retardada. Pulsa Esc para salir.',
  },
};
