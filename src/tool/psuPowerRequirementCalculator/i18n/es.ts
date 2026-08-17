import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PsuPowerRequirementUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-potencia-fuente-ordenador';
const title = 'Calculadora de potencia para fuente de PC';
const description = 'Estima la potencia que necesita la fuente de alimentación de tu PC según el consumo de sus componentes, el margen para transitorios, la reserva para futuras ampliaciones y la fuente instalada.';

const faqData = [
  { question: '¿Cómo calculo los vatios que necesita la fuente de mi PC?', answer: 'Suma el consumo previsto del procesador, la tarjeta gráfica, la placa base, el almacenamiento, los ventiladores y los periféricos. Después añade un margen para transitorios y otro para crecimiento antes de redondear a una potencia de fuente práctica.' },
  { question: '¿Debo usar el TDP o el consumo medido?', answer: 'Usa el consumo medido o la potencia de placa indicada por el fabricante cuando esté disponible. El TDP sirve para planificar, pero no garantiza el consumo máximo de cada carga, por lo que conviene mantener margen y revisar las especificaciones de los componentes.' },
  { question: '¿Qué representa el margen para transitorios?', answer: 'Representa los picos breves de consumo y la incertidumbre de las estimaciones sostenidas. Evita dimensionar la fuente exactamente al nivel de carga normal del equipo.' },
  { question: '¿Por qué puede ser mala idea elegir una fuente demasiado grande?', answer: 'Una fuente muy sobredimensionada puede costar más y trabajar lejos de su rango de eficiencia preferente. Elige capacidad y reserva suficientes, y comprueba también conectores, formato, raíles y compatibilidad de plataforma.' },
  { question: '¿Cuál es la diferencia entre la fuente mínima y la recomendada?', answer: 'La fuente mínima cubre la carga calculada más el margen para transitorios. La recomendada añade además una reserva de crecimiento, por lo que ofrece más margen para actualizaciones, incertidumbre y cambios de uso.' },
  { question: '¿Cómo afectan los picos de consumo de la GPU al tamaño de la fuente?', answer: 'Una tarjeta gráfica puede superar durante unos instantes su potencia sostenida. Mantén un margen para transitorios, revisa las indicaciones del fabricante y confirma que la fuente tiene los conectores y la respuesta necesarios.' },
  { question: '¿Basta con una calculadora de vatios para elegir una fuente?', answer: 'No. Los vatios son solo una parte de la decisión. Comprueba formato, conectores, compatibilidad, protecciones, certificación de eficiencia, garantía y pruebas independientes antes de comprar.' },
];

const howToData = [
  { name: 'Introduce la potencia de los componentes', text: 'Añade valores realistas para el procesador, la tarjeta gráfica, la placa base, el almacenamiento, los ventiladores y los periféricos.' },
  { name: 'Indica la fuente instalada', text: 'Escribe los vatios que aparecen en la fuente que ya tienes o introduce cero si estás planificando un equipo nuevo.' },
  { name: 'Ajusta los márgenes de planificación', text: 'Usa el margen para transitorios para los picos breves y el margen de crecimiento para futuras ampliaciones, unidades adicionales o tarjetas nuevas.' },
  { name: 'Lee la recomendación', text: 'Compara los valores mínimo y recomendado con tu fuente actual y usa el estado como señal de planificación.' },
  { name: 'Comprueba la compatibilidad física', text: 'Verifica el formato de la fuente, los conectores, los requisitos de la tarjeta gráfica y las indicaciones del fabricante antes de convertir el resultado en una compra.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<PsuPowerRequirementUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Calculadora de potencia de fuente para PC', level: 2 },
    { type: 'paragraph', html: 'Calcula la potencia de fuente que necesita tu PC a partir del consumo previsto de cada componente. Esta herramienta separa la carga base, el margen para transitorios, la reserva para futuras ampliaciones, la fuente mínima y la fuente recomendada para que puedas comparar tu equipo real con sus necesidades.' },
    { type: 'title', text: 'Cómo funciona la estimación de vatios', level: 3 },
    { type: 'paragraph', html: 'La carga base suma el procesador, la tarjeta gráfica, la placa base, el almacenamiento, los ventiladores y los periféricos. La calculadora añade un margen para picos breves y otro para cambios futuros, y después redondea el resultado al siguiente intervalo práctico de 50 vatios.' },
    { type: 'table', headers: ['Entrada', 'Por qué importa', 'Orientación de planificación'], rows: [
      ['Vatios del procesador', 'Define una parte importante de la demanda sostenida', 'Usa la potencia del paquete o un valor medido durante la carga prevista.'],
      ['Vatios de la tarjeta gráfica', 'Suele ser la mayor carga en equipos gaming', 'Usa la potencia de placa cuando esté disponible y contempla los picos breves.'],
      ['Placa base y memoria', 'Cubre el consumo de la plataforma', 'Incluye chipset, memoria, regulación y dispositivos integrados.'],
      ['Almacenamiento y ventiladores', 'Añade consumo continuo y posibles picos de arranque', 'Incluye cada unidad, bomba y ventilador que vayas a instalar.'],
      ['Márgenes', 'Protegen frente a incertidumbre y ampliaciones', 'Auméntalos si los datos son poco seguros o el equipo crecerá.'],
    ] },
    { type: 'title', text: 'Cómo elegir una potencia de fuente segura', level: 3 },
    { type: 'list', items: ['Compara siempre los valores mínimo y recomendado.', 'Comprueba que la fuente tiene los conectores y el formato necesarios.', 'Confirma que el modelo soporta el comportamiento de consumo de la tarjeta gráfica.', 'Trata el resultado como una estimación y verifica las especificaciones finales de cada componente.'] },
    { type: 'title', text: 'Qué significa el estado de la fuente actual', level: 3 },
    { type: 'paragraph', html: 'Una fuente por debajo del mínimo calculado es insuficiente para los valores introducidos. Una fuente entre el mínimo y el recomendado queda justa. Una fuente que alcanza la recomendación ofrece una reserva práctica, mientras que una fuente sobredimensionada puede aportar más capacidad de la necesaria.' },
    { type: 'title', text: 'Potencia mínima frente a potencia recomendada', level: 3 },
    { type: 'paragraph', html: 'La cifra mínima es el suelo calculado para los valores introducidos. No debe tomarse como objetivo de compra cuando los datos son inciertos. La cifra recomendada añade espacio para picos y cambios futuros, y después redondea a un intervalo práctico de 50 vatios. La compra final también debe encajar con los conectores de la GPU y el formato de la caja.' },
    { type: 'title', text: 'Transitorios de la tarjeta gráfica y comprobaciones de plataforma', level: 3 },
    { type: 'paragraph', html: 'Las tarjetas gráficas pueden generar picos breves que no aparecen en una cifra sencilla de potencia sostenida. El margen para transitorios es una reserva de planificación, no sustituye las indicaciones del fabricante de la tarjeta y de la fuente. Comprueba conectores PCIe, distribución de cables, requisitos de la plataforma ATX y protecciones del modelo.' },
    { type: 'table', headers: ['Situación de planificación', 'Enfoque útil', 'Qué verificar'], rows: [
      ['Valores medidos conocidos', 'Usa la carga medida y un margen moderado', 'Carga de trabajo, comportamiento de pico y conectores'],
      ['Equipo gaming nuevo', 'Usa la potencia de placa y conserva reserva de crecimiento', 'Picos de la GPU, cables PCIe y formato de la caja'],
      ['Ampliaciones previstas', 'Aumenta el margen de crecimiento antes de redondear', 'Ruta de actualización, unidades, tarjetas y refrigeración'],
      ['Hardware desconocido o mezclado', 'Usa valores conservadores y no compres al límite mínimo', 'Especificaciones del fabricante y pruebas independientes'],
    ] },
    { type: 'title', text: 'Qué no puede confirmar esta calculadora', level: 3 },
    { type: 'paragraph', html: 'Esta herramienta estima la capacidad a partir de los valores que introduces. No puede confirmar si una fuente concreta es auténtica, silenciosa, segura, compatible con tu caja o adecuada para todos los patrones de transitorios. Usa la recomendación como rango de planificación y valida la pieza final con especificaciones oficiales y pruebas de hardware fiables.' },
  ],
  ui: {
    sceneKicker: 'Constelación energética',
    deckTitle: 'Ajusta los canales',
    deckHint: 'Arrastra un canal y observa cómo responde la escultura',
    presetsHeader: 'Preajustes del equipo',
    officePreset: 'Oficina',
    gamingPreset: 'Gaming',
    highEndPreset: 'Gama alta',
    workstationPreset: 'Estación de trabajo',
    miniPcPreset: 'Mini PC',
    componentsHeader: 'Carga de componentes',
    cpuWatts: 'Procesador',
    gpuWatts: 'Tarjeta gráfica',
    motherboardWatts: 'Placa base y memoria',
    storageWatts: 'Almacenamiento',
    fansWatts: 'Ventiladores y refrigeración',
    peripheralsWatts: 'Periféricos',
    currentPsuWatts: 'Potencia de la PSU actual',
    showAdvanced: 'Ajustar cargas detalladas',
    hideAdvanced: 'Ocultar cargas detalladas',
    marginsHeader: 'Márgenes de planificación',
    transientMargin: 'Margen de transitorios',
    growthMargin: 'Margen de crecimiento',
    wattsUnit: 'W',
    baseLoad: 'Carga base',
    minimumPsu: 'PSU mínima',
    recommendedPsu: 'PSU recomendada',
    currentPsu: 'PSU actual',
    headroom: 'Reserva',
    statusLabel: 'Estado del equipo',
    statusInsufficient: 'Insuficiente',
    statusTight: 'Justa',
    statusRecommended: 'Recomendada',
    statusOversized: 'Sobredimensionada',
    summaryPrefix: 'Siguiente paso:',
    diagramTitle: 'Observatorio de potencia',
    currentMarker: 'PSU actual',
    minimumMarker: 'Mínima',
    recommendedMarker: 'Recomendada',
    adviceInsufficient: 'Elige una PSU igual o superior a la cifra recomendada y verifica los conectores de la tarjeta gráfica.',
    adviceTight: 'El equipo queda cerca del límite. Elige la cifra recomendada si quieres margen para futuras ampliaciones.',
    adviceRecommended: 'La PSU actual supera el objetivo de planificación. Comprueba conectores, formato y compatibilidad de plataforma.',
    adviceOversized: 'La capacidad es amplia. Revisa la eficiencia, el espacio disponible y la distribución de conectores antes de comprar.',
    inputHint: 'Usa valores medidos cuando sea posible. El resultado es una estimación de planificación y no sustituye la comprobación de las especificaciones finales del hardware.',
  },
};
