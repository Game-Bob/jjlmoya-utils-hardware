import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-precision-color';
const title = 'Test de Precisión de Color - Spectrum Canvas';
const description =
  'Calibra tu pantalla con precisión. Prueba los espacios de color sRGB y DCI-P3, detecta desviaciones cromáticas, mide la precisión con métricas Delta E y genera informes de calibración profesionales.';

const faqData = [
  {
    question: '¿Qué es la precisión de color y por qué es importante?',
    answer:
      'La precisión de color mide con qué fidelidad una pantalla reproduce los colores en comparación con una referencia estándar. Para diseñadores, fotógrafos y creadores de contenido, los colores precisos son esenciales para garantizar que su trabajo se vea consistente en diferentes dispositivos.',
  },
  {
    question: '¿Cuál es la diferencia entre sRGB y DCI-P3?',
    answer:
      'sRGB es el espacio de color estándar para la web y pantallas de consumo. DCI-P3 es una gama de colores más amplia utilizada en cine digital y pantallas profesionales. DCI-P3 cubre aproximadamente un 25% más de colores que sRGB.',
  },
  {
    question: '¿Qué es Delta E y cómo se mide?',
    answer:
      'Delta E (ΔE) es una medida numérica de la diferencia de color percibida por el ojo humano. Un Delta E inferior a 1 es imperceptible, inferior a 2 es muy bueno, inferior a 4 es aceptable y por encima de 4 se vuelve notorio. Nuestra prueba utiliza los cálculos de Delta E CIE 1976.',
  },
  {
    question: '¿Puedo usar esta herramienta para calibrar mi hardware?',
    answer:
      'Esta herramienta proporciona una referencia de calibración visual y mediciones de precisión. Para una calibración profesional, debe combinar estos resultados con herramientas de calibración de hardware (colorímetros) y software dedicado como ColorThink o Datacolor SpyderCheckr.',
  },
  {
    question: '¿Qué espacios de color se prueban?',
    answer:
      'Probamos sRGB (estándar), DCI-P3 (cine) y la precisión del punto blanco a través de los iluminantes estándar D65 (6500K) y D93 (9300K). La prueba también incluye la verificación de la corrección gamma.',
  },
];

const howToData = [
  {
    name: 'Selecciona tu Gama',
    text: 'Elige entre sRGB (estándar web/consumo) o DCI-P3 (cine profesional). Tu pantalla cambiará su paleta de prueba en consecuencia.',
  },
  {
    name: 'Nombra tu Hardware (Opcional)',
    text: 'Ingresa un nombre descriptivo para tu monitor o dispositivo (por ejemplo, "MacBook Pro 16 M1"). Esto personaliza tu informe.',
  },
  {
    name: 'Entra en Modo Pantalla Completa',
    text: 'Presiona F11 o el botón de pantalla completa para eliminar la interfaz del navegador y garantizar el máximo espacio de visualización para una prueba precisa.',
  },
  {
    name: 'Completa las Pruebas de Color',
    text: 'Procede a través de Pureza Espectral (colores sólidos), Dinámica de Degradados (transiciones suaves), Detección de Black Crush (detalle en sombras) y Calibración del Punto Blanco.',
  },
  {
    name: 'Revisa Resultados y Exporta',
    text: 'Genera un informe visual con visualización de Gama 3D, métricas Delta E y recomendaciones de calibración. Exporta como PDF para archivo.',
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

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
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
      text: 'Test Profesional de Precisión de Color: Calibra tu Pantalla con Precisión',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas es una herramienta de prueba de precisión de color de grado profesional diseñada para cualquier persona que dependa de trabajos donde el color es crítico. Ya seas fotógrafo, diseñador, creador de contenido o entusiasta del hardware, esta herramienta te ayuda a <strong>diagnosticar desviaciones cromáticas</strong>, <strong>medir la precisión de la pantalla</strong> y <strong>generar informes de calibración</strong>.',
    },
    {
      type: 'title',
      text: 'Por qué es Importante la Precisión de Color',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una diferencia de un solo punto porcentual en la reproducción del color puede significar la diferencia entre un momento "wow" y una reacción de "esto se ve raro". Las pantallas profesionales ofrecen una precisión dentro de <strong>Delta E &lt; 2</strong>. Las pantallas de consumo a menudo se desvían a un Delta E de 4-6+, causando:',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Fotografías que se ven vibrantes en tu monitor pero apagadas al imprimirlas</li><li>Ediciones de video que no coinciden con las expectativas del cliente</li><li>Maquetas de diseño web que no coinciden con la especificación de la marca</li><li>Proyectos de hardware donde los indicadores de color se malinterpretan</li></ul>',
    },
    {
      type: 'title',
      text: 'Entendiendo los Espacios de Color: sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (Espacio de Color Estándar)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Establecido por Microsoft y HP en 1996, sRGB es el <strong>estándar universal para la electrónica de consumo</strong> y la web. Utiliza una gama de colores triangular definida por tres colores primarios (Rojo: 0.6400x 0.3300, Verde: 0.3000 0.6000, Azul: 0.1500 0.0600).',
    },
    {
      type: 'paragraph',
      html: '<strong>Características:</strong><ul><li>Cubre ~35% del espectro de color visible</li><li>Optimizado para condiciones típicas de iluminación ambiental</li><li>Gamma: 2.2 (coincide con la mayoría de las pantallas de consumo)</li><li>Adecuado para: web, redes sociales, fotos de consumo</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Gama de Cine Digital)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Desarrollado por el consorcio Digital Cinema Initiatives, DCI-P3 es un <strong>espacio de color de grado cinematográfico</strong> diseñado para proyecciones teatrales y pantallas profesionales. Abarca ~25% más colores que sRGB.',
    },
    {
      type: 'paragraph',
      html: '<strong>Características:</strong><ul><li>Cubre ~53% del espectro de color visible</li><li>Optimizado para entornos de cine oscuros</li><li>Gamma: 2.6 (corregido por gamma para alto contraste)</li><li>Adecuado para: cinematografía, fotografía profesional, contenido HDR</li></ul>',
    },
    {
      type: 'title',
      text: '¿Qué es Delta E? Cuantificando la Diferencia de Color',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E (ΔE) es la <strong>métrica de la diferencia de color perceptible por el ser humano</strong> en el espacio de color CIE LAB. Te indica qué tan cerca está la salida de tu pantalla de un color de referencia estándar.',
    },
    {
      type: 'paragraph',
      html: '<strong>Escala Delta E (CIE 1976):</strong><ul><li>0–1: Imperceptible por el ojo humano</li><li>1–2: Apenas perceptible</li><li>2–4: Perceptible pero aceptable para uso general</li><li>4–6: Desviación de color notable</li><li>&gt;6: Diferencia muy obvia</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'Las pantallas profesionales están calibradas para mantener un <strong>Delta E &lt; 2</strong> en toda la gama visible. Las pantallas de consumo suelen alcanzar un Delta E de 3-5.',
    },
    {
      type: 'title',
      text: 'La Suite de Pruebas de Spectrum Canvas',
      level: 3,
    },
    {
      type: 'title',
      text: 'Prueba de Pureza Espectral',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Muestra colores primarios y secundarios puros (Rojo, Verde, Azul, Cian, Magenta, Amarillo) y mide cómo los reproduce tu monitor. Las animaciones de "inundación" de color revelan una reproducción de color consistente en toda la pantalla.',
    },
    {
      type: 'title',
      text: 'Dinámica de Degradados',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Degradados suaves que transicionan a través de todo el espacio de color. Busca <strong>artefactos de banding</strong> (pasos visibles en lugar de transiciones suaves), que indican una profundidad de bits de color insuficiente o una corrección gamma deficiente.',
    },
    {
      type: 'title',
      text: 'Detección de Black Crush (Prueba del Agujero Negro)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Fondo negro puro (0,0,0) con tonos casi negros apenas visibles. Si el detalle de las sombras se "aplasta", tu monitor está perdiendo información en los tonos oscuros, algo común en pantallas móviles y paneles económicos.',
    },
    {
      type: 'title',
      text: 'Calibración del Punto Blanco',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Prueba diferentes temperaturas de color correlacionadas (D65 a 6500K = luz de día, D93 a 9300K = estudio), revelando cualquier deriva de temperatura de color o inestabilidad térmica.',
    },
    {
      type: 'title',
      text: 'Interpretando tus Resultados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas genera un informe visual y fácil de imprimir con:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Visualización de Gama 3D:</strong> Un gráfico 3D giratorio que muestra el volumen de color real de tu pantalla frente al estándar de referencia</li><li><strong>Mapa de Calor Delta E:</strong> En qué parte del espectro se desvía tu pantalla</li><li><strong>Curva Gamma:</strong> Linealidad del brillo en el rango 0–255</li><li><strong>Puntuación de Calibración:</strong> Una única "Calificación Spectrum" (Élite, Cinematográfica, Estudio, Estándar) basada en la precisión general</li></ul>',
    },
    {
      type: 'title',
      text: 'Avanzado: Consejos de Calibración Manual',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si tus resultados muestran desviaciones, intenta estos ajustes en el menú OSD (On-Screen Display) de tu monitor:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Temperatura de Color:</strong> Cambia hacia "Cálido" si los colores son demasiado fríos/azules; hacia "Frío" si son demasiado cálidos/amarillos</li><li><strong>Contraste:</strong> Aumenta si los negros se ven lavados; disminuye si el detalle se aplasta</li><li><strong>Brillo:</strong> Ajusta para lograr un gris neutro sin tinte de color al 50% de brillo</li><li><strong>Saturación:</strong> Si los colores están sobresaturados, reduce; si están apagados, aumenta</li></ul>',
    },
    {
      type: 'title',
      text: 'Limitaciones y Mejores Prácticas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Esta herramienta proporciona una referencia visual y estadística</strong>. Para trabajos profesionales que requieran una calibración certificada, utiliza medidores de color por hardware (espectrofotómetro o colorímetro) y software de calibración dedicado.',
    },
    {
      type: 'paragraph',
      html: '<strong>Mejores Prácticas:</strong><ul><li>Permite que tu monitor se caliente durante 30 minutos antes de la prueba (la deriva térmica se estabiliza)</li><li>Realiza la prueba en condiciones de iluminación ambiental constantes</li><li>Evita reflejos; usa una visera para monitor si es posible</li><li>Repite las pruebas semanalmente para rastrear la deriva a lo largo del tiempo</li><li>Mantén un archivo digital de informes para futuras comparaciones</li></ul>',
    },
  ],
  ui: {
    badge: 'Calibración de Pantalla',
    title: 'Spectrum Canvas - Test de Precisión de Color',
    description:
      'La calibración de pantalla profesional se une a la estética cinematográfica. Prueba sRGB y DCI-P3, mide la precisión Delta E, detecta desviaciones cromáticas y genera un informe visual que transforma los datos en conocimiento.',
    btnStartCalibration: 'Iniciar Calibración',
    btnFullscreen: 'Pantalla Completa',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Modo Pantalla Completa',
    kbdReset: 'R',
    kbdResetLabel: 'Reiniciar Prueba',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Salir',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Espacio de Color',
    hardwareName: 'Nombre del Hardware/Monitor',
    hardwareNamePlaceholder: 'ej., MacBook Pro 16" M1 Max',
    purityTest: 'Pureza Espectral',
    gradientTest: 'Dinámica de Degradados',
    blackHoleTest: 'Detección de Black Crush',
    whitePointTest: 'Calibración del Punto Blanco',
    colorCheckpoint: 'Punto de Control de Color',
    generateReport: 'Generar Informe',
    viewResults: 'Ver Resultados',
    btnExit: 'Salir (ESC)',
    compareSideBySide: 'Comparar Lado a Lado',
  },
};
