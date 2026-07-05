import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'reparador-quemado-pantalla-oled';
const title = 'Reparador de Quemado de Pantalla OLED';
const description =
  'Ejecuta un reparador de quemado OLED a pantalla completa y un ejercitador de píxeles atascados LCD con ciclos rápidos de color RGB, ruido blanco, una advertencia obligatoria de fotosensibilidad y un temporizador nativo.';

const faqData = [
  {
    question: '¿Puede un reparador de quemado OLED eliminar el quemado permanente?',
    answer:
      'Ninguna herramienta de navegador puede revertir el desgaste permanente de los subpíxeles OLED. Un ejercitador de píxeles puede reducir la retención temporal de imagen, hacer menos visible un leve efecto fantasma o ayudar a diagnosticar si una marca es retención temporal o quemado permanente.',
  },
  {
    question: '¿Es seguro para personas con epilepsia fotosensible?',
    answer:
      'La prueba utiliza colores que parpadean rápidamente y estática de alto contraste. Las personas con epilepsia fotosensible, sensibilidad a migrañas, riesgo de convulsiones o molestias con luces parpadeantes no deben ejecutarla.',
  },
  {
    question: '¿Puede esto reparar un píxel atascado LCD?',
    answer:
      'A veces puede ayudar a un píxel atascado que permanece rojo, verde, azul o blanco al cambiar rápidamente el estado del subpíxel. No puede reparar un píxel muerto negro ni daños físicos del panel.',
  },
  {
    question: '¿Cuánto tiempo debo ejecutar el ejercitador de píxeles?',
    answer:
      'Comienza con 5 a 10 minutos para un píxel atascado o una retención de imagen leve. Las sesiones más largas deben ser supervisadas, con un brillo razonable y permitiendo que la pantalla se enfríe.',
  },
  {
    question: '¿Por qué la herramienta usa canvas en lugar de video?',
    answer:
      'Los patrones se generan directamente en HTML5 Canvas, por lo que la página no necesita archivos de video pesados. Eso mantiene la carga rápida y hace que el ciclo de color y ruido responda al tamaño de pantalla completa.',
  },
];

const howToData = [
  {
    name: 'Lee la advertencia de fotosensibilidad',
    text: 'No continúes si la luz parpadeante, los patrones de alto contraste, las migrañas o el riesgo de convulsiones pudieran afectarte a ti o a alguien cercano.',
  },
  {
    name: 'Configura una primera ejecución corta',
    text: 'Elige de 5 a 10 minutos para una primera pasada, selecciona el modo Híbrido y mantén el brillo a un nivel cómodo.',
  },
  {
    name: 'Inicia la reparación a pantalla completa',
    text: 'Confirma la advertencia, pulsa Iniciar Reparación y deja que el canvas recorra los colores RGB y la estática sin mover otras ventanas sobre la pantalla.',
  },
  {
    name: 'Inspecciona la marca después',
    text: 'Detén la prueba, muestra pantallas de gris neutro, blanco, negro, rojo, verde y azul, y compara si la imagen fantasma o el píxel atascado cambió.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'Reparador de Quemado OLED y Ejercitador de Píxeles Atascados LCD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este reparador de quemado de pantalla OLED es un ejercitador de píxeles a pantalla completa para retención temporal de imagen, imágenes fantasma tenues y algunos píxeles atascados LCD. Genera patrones rápidos de rojo, verde, azul, blanco, negro, amarillo y estática directamente en HTML5 Canvas. No hay archivos de video, ni recursos de imagen externos, ni paso de descarga: el navegador pinta cada fotograma al tamaño actual de la pantalla.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Advertencia de fotosensibilidad',
      icon: 'mdi:alert',
      badge: 'Obligatorio',
      html: 'El patrón de reparación utiliza destellos rápidos, transiciones de alto contraste y estática blanca. No lo ejecutes si padeces epilepsia fotosensible, riesgo de convulsiones, sensibilidad a migrañas, mareos provocados por luces parpadeantes o si alguien cercano pudiera verse afectado. Detenlo inmediatamente si sientes fatiga visual, náuseas, dolor de cabeza o molestias.',
    },
    {
      type: 'paragraph',
      html: 'La herramienta es útil cuando la pregunta es práctica: <strong>¿es esta marca retención temporal que puede atenuarse o desgaste permanente del panel?</strong> Una ejecución corta supervisada a veces puede reducir una imagen fantasma causada por elementos estáticos de la interfaz retenidos, y a veces puede despertar un subpíxel que está atascado en un color. No puede reconstruir material OLED desgastado, reparar una capa agrietada, restaurar una línea de control muerta ni garantizar la recuperación.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: 'archivos de video cargados', icon: 'mdi:speedometer' },
        { value: 'RGB', label: 'ejercicio de subpíxeles primarios', icon: 'mdi:palette' },
        { value: '1-120 min', label: 'temporizador de sesión nativo', icon: 'mdi:timer-outline' },
        { value: '100%', label: 'ejecución en el lado del cliente', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'Qué significan el quemado, la retención de imagen y el efecto fantasma',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Quemado OLED',
          definition: 'Desgaste desigual permanente de los subpíxeles orgánicos. Un logotipo estático, una barra de tareas, una barra de navegación o un HUD de juego pueden dejar una forma visible porque esos píxeles envejecieron de forma diferente al resto del panel.',
        },
        {
          term: 'Retención temporal de imagen',
          definition: 'Una imagen fantasma de corta duración que permanece después de que desaparece el contenido estático. Puede atenuarse con contenido mixto normal, un ciclo de compensación o un patrón de ejercicio de píxeles.',
        },
        {
          term: 'Píxel atascado LCD',
          definition: 'Un píxel o subpíxel atascado mostrando rojo, verde, azul, blanco u otro color fijo. Los cambios rápidos de estado a veces pueden liberarlo si el problema no es un daño físico.',
        },
        {
          term: 'Píxel muerto',
          definition: 'Un píxel que permanece negro porque ya no emite ni transmite luz correctamente. Un ejercitador de píxeles de navegador normalmente no puede revivir un píxel realmente muerto.',
        },
        {
          term: 'Ghosting LCD',
          definition: 'Estelas de movimiento causadas por una respuesta lenta del píxel. Es diferente del quemado de pantalla, aunque los usuarios suelen describir ambos como imágenes fantasma.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Retención temporal',
          description: 'Suele atenuarse tras contenido mixto, rutinas de refresco de pantalla o una sesión corta de RGB y ruido.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Visible tras contenido estático', 'A menudo más suave en los bordes', 'Puede mejorar en minutos u horas'],
        },
        {
          title: 'Quemado permanente',
          description: 'Desgaste OLED desigual que permanece visible tras reposo, ciclos de compensación y contenido variado.',
          icon: 'mdi:contrast-circle',
          points: ['Coincide con IU estática de larga duración', 'Más visible en colores planos', 'No desaparece tras el ejercicio'],
        },
        {
          title: 'Píxel atascado',
          description: 'Un solo punto o pequeño grupo bloqueado en un color en lugar de una gran imagen fantasma.',
          icon: 'mdi:grain',
          points: ['A menudo de un píxel de ancho', 'Puede ser rojo, verde, azul o blanco', 'A veces responde a cambios rápidos de color'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo usar el ejercitador de píxeles de forma segura',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Reduce el brillo antes de la primera ejecución, especialmente en móviles OLED, televisores OLED y portátiles con panel OLED.',
        'Comienza con 5 a 10 minutos; no dejes la pantalla sin supervisión durante sesiones largas.',
        'Usa pantalla completa para que el área afectada reciba el mismo patrón que el resto del panel.',
        'Avisa a quienes estén en la habitación sobre la luz parpadeante; no ejecutes la prueba cerca de personas que no hayan dado su consentimiento.',
        'Detén la prueba si el panel se calienta de forma inusual, si el navegador se entrecorta mucho o si sientes molestias.',
        'Tras la ejecución, inspecciona pantallas de gris neutro, blanco, negro, rojo, verde y azul para comparar resultados.',
      ],
    },
    {
      type: 'table',
      headers: ['Problema', 'Primer modo', 'Primera duración', 'Recomendación de brillo'],
      rows: [
        ['Imagen fantasma OLED tenue', 'Híbrido RGB más estática', '5-10 minutos', 'Cómodo, no al máximo'],
        ['Retención reciente de logotipo estático', 'Ciclo RGB', '10-20 minutos', 'Brillo moderado'],
        ['Píxel atascado LCD de un solo color', 'Estática o Híbrido', '5-15 minutos', 'Brillo normal de escritorio'],
        ['Quemado permanente antiguo', 'Híbrido solo para diagnóstico', '5 minutos', 'Evita ejecuciones largas con brillo alto'],
        ['Píxel muerto negro', 'No recomendado como reparación', 'Solo inspección', 'Ningún ejercitador puede garantizar la recuperación'],
      ],
    },
    {
      type: 'tip',
      title: 'Usa sesiones cortas primero',
      html: 'Una sesión de parpadeo larga no es automáticamente mejor. Si una marca es temporal, a menudo se ve algún cambio tras una pasada corta. Si nada cambia después de una prueba razonable y una rutina normal de refresco del panel, el problema puede ser desgaste permanente o un defecto de hardware.',
    },
    {
      type: 'title',
      text: 'Elegir entre ciclo RGB, ruido blanco y modo híbrido',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Distintos artefactos responden a distintos patrones. Un ciclo rojo, verde y azul ejercita los subpíxeles primarios en una secuencia controlada. El ruido blanco alterna rápidamente la luminancia en muchas áreas pequeñas, lo que puede ayudar a exponer y ejercitar píxeles atascados aislados. El modo híbrido alterna entre ambos, lo que lo convierte en la mejor primera opción cuando no sabes si el problema es retención de imagen o un subpíxel perezoso.',
    },
    {
      type: 'table',
      headers: ['Modo', 'Qué hace', 'Ideal para', 'A tener en cuenta'],
      rows: [
        ['Ciclo RGB', 'Campos de colores primarios y alto contraste a pantalla completa', 'Retención OLED e inspección de canales de color', 'Parpadeo visible'],
        ['Ruido blanco', 'Estática aleatoria de negro a blanco en todo el panel', 'Píxeles atascados únicos y grupos pequeños', 'Mayor intensidad visual'],
        ['Híbrido', 'Alterna campos de color y estática', 'Flujo de trabajo general de reparación de quemado OLED', 'Usa un temporizador corto primero'],
      ],
    },
    {
      type: 'proscons',
      title: 'Ejercitador de píxeles en línea: beneficios y límites realistas',
      items: [
        {
          pro: 'Se ejecuta al instante en el navegador sin instalar software ni cargar archivos de video.',
          con: 'No puede revertir el desgaste permanente del material OLED ni los daños físicos del panel.',
        },
        {
          pro: 'El canvas a pantalla completa cubre la pantalla con fotogramas RGB y estática generados.',
          con: 'La temporización del navegador, el rendimiento del dispositivo y el soporte de pantalla completa pueden afectar la consistencia de la animación.',
        },
        {
          pro: 'Útil para un primer diagnóstico antes de probar rutinas de mantenimiento del fabricante.',
          con: 'No debe sustituir el servicio de garantía para paneles nuevos con defectos evidentes.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Recomendaciones específicas para OLED',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los píxeles OLED emiten su propia luz. Cuando un elemento estático permanece en pantalla durante muchas horas, los subpíxeles bajo ese elemento pueden envejecer a un ritmo diferente. Por eso el quemado suele seguir la forma de logotipos de canales de televisión, barras de estado del móvil, botones de navegación, HUDs de juegos, barras laterales de apps de streaming o barras de tareas del escritorio. Un ejercitador de píxeles puede acelerar la desaparición de la retención temporal, pero el envejecimiento diferencial permanente sigue siendo un problema del material.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Revisa primero el cuidado de panel integrado',
      html: 'Muchos televisores, monitores, portátiles y teléfonos OLED incluyen refresco de píxeles, refresco de panel, atenuación de logotipos, desplazamiento de pantalla, atenuación de barra de tareas o ciclos de compensación. Usa la rutina del fabricante según sus instrucciones, especialmente si la pantalla está en garantía. Esta herramienta en línea se entiende mejor como un diagnóstico suave y un ejercicio de retención temporal, no como un sustituto del firmware de cuidado del panel.',
    },
    {
      type: 'list',
      items: [
        'Si la imagen fantasma es reciente, deja que la pantalla muestre contenido variado o repose antes de asumir un quemado permanente.',
        'Si la marca coincide con un logotipo estático de hace años, es improbable que un ejercitador de píxeles la elimine por completo.',
        'Si el panel tiene un ciclo de refresco integrado, ejecútalo solo con la frecuencia que recomiende el fabricante.',
        'Evita ejecutar patrones de prueba al máximo brillo durante horas; el calor y el brillo contribuyen al desgaste.',
        'Oculta las barras de tareas, activa los salvapantallas y reduce el brillo de la IU estática para prevenir la recurrencia.',
      ],
    },
    {
      type: 'title',
      text: 'Recomendaciones para píxeles atascados LCD',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los paneles LCD no se queman de la misma manera que los paneles OLED, pero pueden presentar píxeles atascados, marcas de presión, defectos del panel y persistencia temporal de imagen. Un píxel atascado que permanece rojo, verde, azul, cian, magenta, amarillo o blanco puede deberse a que un subpíxel no cambia correctamente. Los cambios rápidos a veces pueden ayudar, aunque no hay una reparación en línea garantizada.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Píxel muerto frente a píxel atascado',
      icon: 'mdi:information-outline',
      badge: 'Diagnóstico',
      html: 'Un punto de color tiene más posibilidades que uno negro. Un píxel negro en todos los colores de prueba suele estar muerto o bloqueado. Un píxel coloreado que cambia en algunos fondos pero no en otros puede ser un subpíxel atascado y es mejor candidato para una sesión corta de ejercicio de píxeles.',
    },
    {
      type: 'summary',
      title: 'Antes de usar presión o métodos físicos',
      items: [
        'No presiones fuerte sobre paneles OLED, pantallas táctiles ni pantallas frágiles de portátiles.',
        'Evita herramientas afiladas, bolígrafos envueltos en tela y cualquier método que pueda rayar la superficie.',
        'Usa primero el ejercicio por software y luego el soporte de garantía si el defecto persiste.',
        'Documenta el defecto con fotos macro si la pantalla es nueva y aún aplican las políticas de devolución.',
      ],
    },
    {
      type: 'title',
      text: 'Por qué Canvas es mejor que un video de reparación pesado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un reparador de quemado basado en video tiene que descargar fotogramas codificados, decodificarlos, escalarlos a la pantalla y confiar en que la compresión no haya suavizado las transiciones exactas. Esta herramienta genera cada fotograma directamente en el navegador. Los campos RGB son sólidos, el ruido se crea para el tamaño actual del canvas y la página evita archivos multimedia grandes que ralentizarían la carga o reducirían el PageSpeed.',
    },
    {
      type: 'list',
      items: [
        'Sin archivo de video externo significa primer renderizado más rápido y menor dependencia de la red.',
        'La salida del canvas se escala a la superficie de pantalla completa en lugar de estar limitada por una resolución de video.',
        'El temporizador puede detener la reparación automáticamente en lugar de reproducir un video en bucle indefinidamente.',
        'El modo, la velocidad, la duración y la intensidad pueden cambiarse sin cargar otro recurso.',
      ],
    },
    {
      type: 'message',
      title: 'Una expectativa práctica',
      ariaLabel: 'Expectativa del reparador de quemado',
      html: 'Usa esta utilidad como un primer paso controlado: reduce la retención temporal, ejercita un posible píxel atascado y recopila evidencia. Si la marca sobrevive a contenido variado, a las rutinas de refresco integradas del panel y a sesiones cortas y cuidadosas de ejercicio, trátala como un problema de hardware o de garantía.',
    },
  ],
  ui: {
    safetyTitle: 'Advertencia de luz parpadeante',
    safetyBody: 'Este patrón de reparación emite rápidamente colores sólidos y estática de alto contraste. No lo uses si tú o alguien cercano pudiera verse afectado por epilepsia fotosensible, convulsiones, migrañas, mareos o sensibilidad a la luz parpadeante.',
    safetyChecklist: 'Mantén un brillo razonable, supervisa la sesión y detenla inmediatamente si sientes molestias.',
    safetyConfirm: 'Entiendo el riesgo de fotosensibilidad y quiero habilitar el botón de reparación.',
    safetyContinue: 'Continuar a la configuración',
    startRepair: 'Iniciar reparación (Pantalla completa)',
    controlsLabel: 'Controles de reparación de pantalla OLED',
    modeLabel: 'Modo de patrón',
    modeCycle: 'Ciclo RGB',
    modeNoise: 'Ruido blanco',
    modeHybrid: 'Híbrido',
    modeCycleDescription: 'Colores primarios sólidos para retención de imagen y comprobación de canales.',
    modeNoiseDescription: 'Estática de alta frecuencia para píxeles atascados únicos y grupos pequeños.',
    modeHybridDescription: 'Mejor primera pasada: alterna campos RGB con textura de estática.',
    speedLabel: 'Velocidad del ciclo',
    durationLabel: 'Duración',
    durationShort: '5 min',
    durationStandard: '10 min',
    durationDeep: '20 min',
    durationShortDescription: 'Comprobación rápida',
    durationStandardDescription: 'Recomendado',
    durationDeepDescription: 'Ejecución supervisada',
    fullscreenHint: 'Canvas de reparación de quemado OLED a pantalla completa',
    intensityLabel: 'Intensidad de la estática',
    warningBadge: 'Contenido parpadeante',
  },
};
