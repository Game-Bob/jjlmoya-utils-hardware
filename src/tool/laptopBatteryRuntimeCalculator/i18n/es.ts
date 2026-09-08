import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'calculadora-autonomia-bateria-portatil';
const title = 'Calculadora de autonomía de batería del portátil';
const description = 'Estima cuánto tiempo puede funcionar tu portátil con la carga actual en tareas ligeras, equilibradas e intensas.';
const faq = [
  { question: '¿Qué estima esta calculadora de autonomía de batería?', answer: 'Divide la energía disponible en la batería entre los vatios que introduces para cada escenario. Es una estimación para planificar, no una lectura en directo ni una garantía del fabricante.' },
  { question: '¿Dónde encuentro la capacidad y la salud de la batería?', answer: 'Busca la capacidad de diseño y la capacidad a carga completa en el informe de batería o en la documentación del fabricante. La salud es la capacidad actual a carga completa expresada como porcentaje de la capacidad original.' },
  { question: '¿Por qué cambia la autonomía según el uso?', answer: 'Un portátil que consume más vatios gasta la misma energía almacenada más rápido. Las videollamadas, los juegos, una pantalla externa, el brillo alto y la carga sostenida de CPU o GPU elevan el consumo medio.' },
  { question: '¿Puede leer automáticamente la batería del portátil?', answer: 'No. La herramienta funciona en el navegador y utiliza los valores que introduces. Sustituye los ejemplos por un informe reciente o por una medición media si necesitas una estimación mejor.' },
];
const howTo = [
  { name: 'Leer la capacidad original', text: 'Introduce la capacidad de diseño en vatios-hora. Si solo conoces miliamperios-hora y voltios, conviértelos antes con Wh = V × Ah.' },
  { name: 'Describir la batería actual', text: 'Indica la capacidad a carga completa como porcentaje de la capacidad original y escribe el porcentaje de carga que tendrás al salir del cargador.' },
  { name: 'Ajustar consumos realistas', text: 'Elige el preset más parecido y edita los vatios de cada escenario si tienes una medición del portátil o de un medidor de consumo.' },
  { name: 'Tomar una decisión de movilidad', text: 'Lee las tres líneas y planifica con la más corta para tu tarea exigente. Si aparece un margen justo o urgente, reduce consumo, lleva el cargador o programa una pausa.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'es' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Qué mide realmente una estimación de autonomía', level: 2 },
    { type: 'paragraph', html: 'Una batería de portátil almacena energía en vatios-hora. El equipo consume esa energía a una velocidad medida en vatios. La calculadora convierte ambos datos en una duración para decidir si una carga basta para un viaje, una reunión, una clase o una sesión de trabajo.' },
    { type: 'paragraph', html: 'El modelo estima primero la capacidad actual a carga completa usando la capacidad original y la salud de la batería. Después aplica el porcentaje de carga previsto al empezar. Ese presupuesto de energía se reparte entre las líneas de uso.' },
    { type: 'title', text: 'Elegir datos fiables para las entradas', level: 2 },
    { type: 'paragraph', html: 'Usa un informe de batería o la especificación del fabricante. La capacidad de diseño, la capacidad actual a carga completa y la carga restante son datos distintos. Si solo tienes voltios y amperios-hora, convierte con <strong>Wh = V × Ah</strong>; 1.000 mAh equivalen a 1 Ah.' },
    { type: 'list', items: ['Calcula la salud dividiendo la capacidad actual a carga completa entre la capacidad de diseño.', 'Introduce la carga que realmente tendrás al comenzar la sesión.', 'Usa un consumo medio medido cuando la sesión sea larga o importante.', 'Incluye pantalla externa, dock o aplicación exigente en el escenario elegido.'] },
    { type: 'title', text: 'Leer la autonomía como un margen de planificación', level: 2 },
    { type: 'paragraph', html: 'La línea ligera representa lectura y documentos sencillos; la equilibrada, multitarea normal; y la intensa, el coste de mantener un consumo alto. Compara la línea que usarás con el tiempo que necesitas y planifica con el resultado creíble más corto, no con el más optimista.' },
    { type: 'table', headers: ['Señal', 'Qué significa', 'Qué hacer'], rows: [['Cómodo', 'Seis horas o más con ese consumo', 'Hay un margen amplio para la sesión.'], ['Viable', 'Entre tres y seis horas', 'Sirve para una sesión concreta, pero prepara un cargador.'], ['Justo', 'Entre una y tres horas', 'Reduce consumo o programa una pausa de carga.'], ['Urgente', 'Menos de una hora', 'Considera el escenario dependiente del cargador.']] },
    { type: 'title', text: 'Lo que la estimación no puede prometer', level: 2 },
    { type: 'paragraph', html: 'El consumo real cambia segundo a segundo. Brillo, conexiones inalámbricas, temperatura, procesos en segundo plano, firmware y reservas del sistema alteran la hora de agotamiento. La herramienta no lee sensores, no modela la química de la batería ni certifica una duración concreta.' },
    { type: 'tip', title: 'Consejo de medición', html: 'Anota el porcentaje de batería y el tiempo transcurrido durante una sesión representativa. Sustituye los vatios del preset por el consumo medio observado y repite el cálculo para cada tipo de trabajo.' },
  ],
  ui: {
    batteryInputsLabel: 'Punto de partida de la batería', designCapacityLabel: 'Capacidad original de la batería', designCapacityHint: 'Energía de la batería nueva', healthLabel: 'Salud de la batería', healthHint: 'Carga completa actual frente a la original', chargeLabel: 'Carga al empezar', chargeHint: 'Carga prevista cuando comience el trabajo', scenariosLabel: 'Autonomía por uso', scenariosHint: 'Edita el consumo medio de cada tipo de trabajo', powerLabel: 'Consumo medio', wattsSuffix: 'W', presetsLabel: 'Empezar con un conjunto', presetBalanced: 'Trabajo diario', presetTravel: 'Ahorro en viaje', presetCreative: 'Creatividad intensa', runwayLabel: 'Recorrido de energía', runwayCaption: 'Cada línea indica cuándo ese uso agotaría la misma carga inicial.', availableEnergyLabel: 'Energía disponible ahora', fullCapacityLabel: 'Capacidad actual a carga completa', shortestScenarioLabel: 'Planificar alrededor de', runtimeLabel: 'Autonomía estimada', loadLabel: 'Consumo', healthStateExcellent: 'Estado de batería excelente', healthStateGood: 'Estado de batería bueno', healthStateAging: 'Batería envejecida', healthStateWorn: 'Batería desgastada', statusComfortable: 'Margen cómodo', statusWorkable: 'Sesión viable', statusTight: 'Margen justo', statusUrgent: 'Depende del cargador', scenarioLight: 'Trabajo ligero', scenarioBalanced: 'Trabajo equilibrado', scenarioIntense: 'Trabajo intenso', sceneBatteryLabel: 'Carga inicial', sceneEnergyLabel: 'Energía disponible', sceneTimeLabel: 'Tiempo de autonomía', noteLabel: 'Límite del modelo', noteText: 'Es una estimación de planificación basada en tus datos. El consumo real y las reservas del sistema pueden reducirla.',
  },
};
