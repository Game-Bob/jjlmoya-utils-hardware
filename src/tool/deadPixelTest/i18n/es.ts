import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pixeles-pantalla';
const title = 'Test de Píxeles Muertos y Reparador de Pantalla';
const description =
  'Comprueba si tu monitor tiene píxeles muertos o atascados y repáralos con nuestra herramienta de parpadeo (Strobe) online.';

const faqData = [
  {
    question: '¿Cuál es la diferencia entre un píxel muerto y uno atascado?',
    answer:
      'Un píxel muerto es negro permanentemente porque no le llega energía (transistor fundido). Un píxel atascado suele ser de color brillante (rojo, verde o azul) y puede volver a la vida mediante estimulación por parpadeo rápido (Strobe).',
  },
  {
    question: '¿Cómo funciona la herramienta de reparación (Strobe)?',
    answer:
      'Nuestra herramienta genera un parpadeo de colores primarios a alta velocidad. Esto puede forzar al cristal líquido del píxel atascado a desbloquearse. Se recomienda dejarlo actuar entre 10 y 30 minutos.',
  },
  {
    question: '¿Pueden aparecer píxeles muertos por la temperatura?',
    answer:
      'Sí, temperaturas extremas pueden afectar al panel. Sin embargo, lo más común es por defectos de fabricación o golpes físicos que dañan los contactos eléctricos del cristal líquido.',
  },
  {
    question: '¿Cuántos píxeles muertos cubren la garantía?',
    answer:
      'Depende del fabricante y la norma ISO 9241-307. Generalmente, las marcas consideran "normal" hasta 2 o 3 píxeles brillantes en paneles Clase 1, mientras que en paneles Clase 0 no se permite ninguno.',
  },
];

const howToData = [
  {
    name: 'Limpiar la pantalla',
    text: 'Antes de empezar, limpia bien tu monitor con un paño de microfibra para no confundir polvo con un píxel muerto.',
  },
  {
    name: 'Entrar en modo pantalla completa',
    text: 'Pulsa F11 o el botón de pantalla completa para que la interfaz del navegador no interfiera en la búsqueda de defectos.',
  },
  {
    name: 'Alternar colores',
    text: 'Cambia entre los fondos negro, blanco, rojo, verde y azul. Busca cualquier punto que no coincida con el color del fondo.',
  },
  {
    name: 'Iniciar el ciclo de reparación',
    text: 'Si encuentras un punto de color brillante, sitúa la herramienta Strobe sobre él y déjala funcionar durante al menos 20 minutos.',
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

export const content: ToolLocaleContent<PixelesPantallaUI> = {
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
      text: 'Guía Completa: Píxeles Muertos, Atascados y Cómo Repararlos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '¿Has notado un punto extraño en tu pantalla que no cambia de color? Podría ser un defecto en el panel. Esta herramienta te ayuda a diagnosticar si tu monitor tiene <strong>píxeles muertos</strong> o <strong>píxeles atascados</strong> y ofrece una solución para intentar repararlos.',
    },
    {
      type: 'title',
      text: '¿Cuál es la diferencia entre un Píxel Muerto y uno Atascado?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existen dos tipos principales de defectos de píxeles en los monitores modernos, cada uno con características y soluciones distintas.',
    },
    {
      type: 'title',
      text: 'Píxel Atascado (Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Es el defecto más común. Ocurre cuando uno o más subpíxeles (Rojo, Verde o Azul) se quedan fijos en estado encendido. <strong>Síntoma:</strong> Verás un punto brillante de color rojo, verde, azul o blanco permanente sobre fondo oscuro. <strong class="text-emerald-600">A menudo reparable.</strong> El cristal líquido aún responde, simplemente está "bloqueado" en una polarización específica. Nuestro reparador Strobe intenta desbloquearlo con estimulación rápida de voltaje.',
    },
    {
      type: 'title',
      text: 'Píxel Muerto (Dead Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Ocurre cuando el transistor que controla el píxel falla completamente y no deja pasar luz. <strong>Síntoma:</strong> Un punto negro permanente, visible sobre todo en fondos claros o blancos. <strong class="text-red-600">Difícil de reparar (normalmente permanente).</strong> El daño es a nivel de hardware (circuito quemado). No hay estimulación eléctrica que pueda repararlo. Generalmente requiere reemplazo del panel completo.',
    },
    {
      type: 'title',
      text: '¿Cómo funciona el reparador (Strobe)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La función de "Reparar Píxel" de esta herramienta utiliza una técnica conocida como <strong>Pixel Exercising</strong>. Genera un patrón de ruido aleatorio de alta frecuencia (parpadeo rápido de colores) en la zona afectada.',
    },
    {
      type: 'title',
      text: 'El Mecanismo: Cristal Líquido y Voltaje',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Los monitores LCD usan cristales líquidos que cambian su transparencia según el voltaje aplicado. Cuando un subpíxel queda atascado, significa que el cristal está "congelado" en una polarización específica. El cambio rápido de voltaje (conseguido mediante cambios rápidos de colores primarios) intenta "ejercitar" el cristal y forzarlo a cambiar de estado.',
    },
    {
      type: 'title',
      text: 'Recomendaciones de Uso',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>Se recomienda dejar la herramienta funcionando sobre la zona afectada durante al menos <strong>10 a 20 minutos</strong>.</li><li>Si no funciona, intenta sesiones más largas (hasta 1 hora) o aplica una presión muy suave con un paño de microfibra sobre el píxel (bajo tu propia responsabilidad).</li><li>En algunos casos, calentar ligeramente el monitor con un secador (a baja temperatura) antes de activar el Strobe mejora los resultados.</li></ul>',
    },
    {
      type: 'title',
      text: 'Advertencia de Epilepsia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El modo de reparación utiliza luces parpadeantes a alta velocidad. Si tienes epilepsia fotosensible o sensibilidad a la luz, <strong>NO uses esa función</strong>. La exposición a patrones parpadeantes puede desencadenar convulsiones en personas susceptibles.',
    },
    {
      type: 'title',
      text: 'Cuándo Buscar Garantía o Reemplazo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si confirmas que tienes píxeles defectuosos (especialmente múltiples píxeles muertos), puedes usar nuestro test como evidencia para reclamaciones de garantía. Muchos fabricantes consideran que más de 2-3 píxeles brillantes o 1 píxel muerto es un defecto de fabricación que califica para reemplazo bajo la norma ISO 9241-307 (Clase 1).',
    },
    {
      type: 'title',
      text: 'Historial de Normas de Píxeles Defectuosos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Durante décadas, los monitores LCD han sufrido defectos de píxeles debido a la complejidad de fabricación. Un panel Full HD (1920×1080) contiene 6.220.800 píxeles (18.662.400 subpíxeles). La probabilidad estadística de defectos es inevitable. Por eso existen normas como ISO 9241-307 que definen "píxeles muertos aceptables" según la clase del monitor.',
    },
  ],
  ui: {
    badge: 'Utilidad de Pantalla',
    title: '¿Píxeles Muertos o Atascados?',
    description:
      'Verifica el estado de tu monitor con colores sólidos puros y repara píxeles atascados con nuestra herramienta de estimulación de alta frecuencia.',
    btnStartTest: 'Iniciar Test',
    btnStartFix: 'Reparar Píxel',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Pantalla Completa',
    kbdSpace: 'Espacio',
    kbdSpaceLabel: 'Cambiar Color',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Salir',
    colorBlack: 'Negro',
    colorWhite: 'Blanco',
    colorRed: 'Rojo',
    colorGreen: 'Verde',
    colorBlue: 'Azul',
    btnToggleFixer: 'Abrir Reparador (Strobe)',
    btnExit: 'Salir (ESC)',
  },
};
