import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'prueba-cruce-subwoofer';
const title = 'Prueba de Cruce de Subwoofer';
const description =
  'Ejecuta un barrido sinusoidal de 200 Hz a 10 Hz en tu navegador para encontrar dónde se desvanece, desaparece o se solapa tu subwoofer con los altavoces principales.';

const faqData = [
  {
    question: '¿Qué mide una prueba de cruce de subwoofer?',
    answer:
      'Te ayuda a escuchar el punto donde los graves dejan de sonar continuos entre los altavoces principales y el subwoofer. Un hueco, un cambio brusco de nivel o un rango ausente puede indicar una frecuencia de cruce incorrecta, un problema de fase, cancelación por la sala o el límite del subwoofer.',
  },
  {
    question: '¿Por qué esta prueba barre de 200 Hz hasta 10 Hz?',
    answer:
      'La mayoría de los cruces de cine en casa se sitúan entre 60 Hz y 120 Hz, mientras que muchos altavoces compactos empiezan a perder salida por encima o por debajo de ese rango. Barrer desde 200 Hz hace que la transición altavoz-subwoofer sea fácil de oír antes de que el tono llegue a los subgraves profundos.',
  },
  {
    question: '¿Esta prueba de graves para subwoofer puede dañar los altavoces?',
    answer:
      'Sí, las frecuencias muy bajas a alto volumen pueden sobrecargar altavoces pequeños o forzar un subwoofer. Empieza con volumen bajo, evita modos de graves realzados y para inmediatamente si oyes traqueteos, golpeteos o esfuerzo mecánico.',
  },
  {
    question: '¿La frecuencia de caída marcada es el ajuste exacto de cruce que debo usar?',
    answer:
      'No. Trátala como una pista auditiva, no como una medición de laboratorio. El mejor ajuste de cruce también depende de las especificaciones del altavoz, la colocación en la sala, la fase, la corrección de distancia y el objetivo de calibración.',
  },
];

const howToData = [
  {
    name: 'Ajusta un nivel de escucha seguro',
    text: 'Baja primero el volumen del sistema. El barrido usa una onda sinusoidal generada, por lo que los graves pueden volverse intensos incluso cuando el volumen del navegador parece moderado.',
  },
  {
    name: 'Inicia el barrido de 200 Hz a 10 Hz',
    text: 'Pulsa Iniciar barrido y escucha desde tu asiento habitual. El tono se mueve de forma constante a través del rango de graves donde se solapan subwoofers, altavoces principales y la acústica de la sala.',
  },
  {
    name: 'Escucha la caída o la transición',
    text: 'Presta atención al momento en que los graves se debilitan, desaparecen, cambian de ubicación o suenan desiguales entre el subwoofer y los altavoces principales.',
  },
  {
    name: 'Marca la frecuencia',
    text: 'Pulsa Marcar caída en el primer punto problemático claro. Usa esa frecuencia como pista para ajustar el cruce, la fase, la colocación o la corrección de sala.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<SubwooferCrossoverTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Encuentra El Hueco De Graves Entre Tus Altavoces Y El Subwoofer', level: 2 },
    {
      type: 'paragraph',
      html: 'Un subwoofer no debería sonar como una caja separada en la esquina. Los graves deben mantenerse uniformes a medida que las notas pasan de los altavoces principales al sub. Esta prueba barre de <strong>200 Hz a 10 Hz</strong> para que puedas oír la zona exacta donde la transición se vuelve débil, retumbante, localizable o silenciosa.',
    },
    {
      type: 'table',
      headers: ['Lo que oyes', 'Lo que suele significar', 'Qué probar primero'],
      rows: [
        ['Los graves desaparecen sobre 70-100 Hz', 'El subwoofer y los altavoces pueden estar cancelándose mutuamente cerca del cruce.', 'Invierte la fase, ajusta la distancia/retardo y repite el barrido.'],
        ['Los graves retumban en una banda estrecha', 'Modo de sala o demasiado solapamiento entre altavoces y subwoofer.', 'Baja ligeramente el cruce o mueve el subwoofer/la posición de escucha.'],
        ['Los graves parecen venir del subwoofer', 'El cruce puede ser demasiado alto o el nivel del subwoofer demasiado elevado.', 'Prueba 80 Hz o menos y reduce la ganancia del subwoofer.'],
        ['Los graves profundos se desvanecen por debajo de 30-40 Hz', 'Límite de extensión normal para muchos subs, especialmente modelos compactos.', 'Revisa las especificaciones del subwoofer antes de perseguir un problema que puede ser físico.'],
      ],
    },
    { type: 'title', text: 'Qué Te Dice La Frecuencia De Caída', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Usa la frecuencia marcada como pista de ajuste',
      badge: 'Pistas auditivas',
      html: '<p>Si el punto marcado está cerca del cruce de tu AVR, el problema probablemente es de integración: fase, distancia, polaridad, nivel o la pendiente de los filtros. Si el punto marcado es mucho más bajo, puede que estés oyendo el subwoofer quedándose sin salida. Si el problema cambia mucho al mover la cabeza, la sala está dominando el resultado.</p>',
    },
    {
      type: 'title',
      text: 'Rangos De Cruce Habituales',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo de altavoz', 'Punto de partida típico del cruce', 'Por qué'],
      rows: [
        ['Satélites pequeños', '100-150 Hz', 'Los gabinetes diminutos normalmente no pueden reproducir graves medios limpios a niveles de cine.'],
        ['Altavoces de estantería', '70-100 Hz', 'Suelen tener suficiente graves para una transición limpia sin hacer el sub localizable.'],
        ['Altavoces de torre', '50-80 Hz', 'Los woofers más grandes manejan más medios-graves, pero la sala puede seguir prefiriendo gestión de graves con subwoofer.'],
        ['Configuración estilo THX', '80 Hz', 'Un valor predeterminado práctico que funciona bien para muchos sistemas y mantiene los graves profundos dirigidos al sub.'],
      ],
    },
    { type: 'title', text: '¿Problema De Cruce O Problema De Sala?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Problema de cruce o fase',
          description: 'El punto débil aparece cerca de la frecuencia de cruce y mejora al cambiar fase, polaridad, distancia o ajuste de cruce.',
          points: ['Normalmente repetible desde el mismo asiento.', 'A menudo centrado alrededor de 60-120 Hz.'],
        },
        {
          title: 'Cancelación por sala',
          description: 'El punto débil cambia drásticamente al mover la cabeza, cambiar de asiento o mover el subwoofer una distancia corta.',
          points: ['Muy dependiente de la posición.', 'A menudo se resuelve más con la colocación que con los ajustes.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'La mejor forma de ejecutar la prueba',
      html: 'Siéntate donde realmente ves películas o escuchas música. No te pongas junto al subwoofer. Un cruce que suena bien al lado del mueble puede dejar un hueco en el sofá.',
    },
    {
      type: 'summary',
      title: 'Qué cambiar después del barrido',
      items: [
        'Si el hueco está cerca del cruce actual, prueba cambios de 10 Hz y repite el barrido.',
        'Prueba el interruptor de fase del subwoofer o el ajuste de retardo si la banda débil está cerca del cruce.',
        'Si los graves se refuerzan en un asiento y desaparecen en otro, mueve el subwoofer antes de cambiar cada ajuste del AVR.',
        'Después de cambios de colocación o cruce, vuelve a ejecutar la corrección de sala para que el receptor mida la nueva configuración.',
        'Usa la frecuencia marcada para guiar el ajuste y luego confirma con música, películas y líneas de bajo familiares.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Barrido de baja frecuencia del subwoofer',
    currentFrequency: 'Frecuencia actual',
    targetFrequency: 'Objetivo',
    elapsed: 'Transcurrido',
    statusReady: 'Listo para barrido bajo',
    statusRunning: 'Barriendo hacia abajo',
    statusStopped: 'Barrido detenido',
    start: 'Iniciar barrido',
    stop: 'Detener barrido',
    markDropout: 'Marcar caída',
    reset: 'Reiniciar',
    volume: 'Nivel de salida',
    duration: 'Duración del barrido',
    safeStart: 'Empieza con volumen bajo y marca la primera frecuencia donde los graves se vuelven difíciles de oír.',
    roomNote: 'La posición en la sala y la fase pueden cambiar drásticamente el resultado.',
    dropoutLabel: 'Punto marcado',
    dropoutEmpty: 'Aún no marcado',
    crossoverEstimate: 'Punto de caída estimado',
  },
};
