import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'Capacidad de la batería', capacityUnit: 'mAh', capacityHint: 'Usa el dato de las especificaciones del móvil.',
  currentLabel: 'Carga actual', targetLabel: 'Carga objetivo', percentUnit: '%', powerLabel: 'Potencia del cargador', powerUnit: 'W',
  efficiencyLabel: 'Eficiencia estimada', efficiencyUnit: '%', efficiencyHint: 'Incluye las pérdidas de conversión y calor.',
  statusEmpty: 'Introduce los datos del móvil y el cargador.', statusReady: 'Se actualiza mientras escribes.', statusError: 'Revisa el valor marcado.',
  resultTitle: 'Tiempo estimado hasta el objetivo', energyLabel: 'Energía que falta', energyUnit: 'Wh', fromCurrentCharge: 'desde la carga actual', startNowLabel: 'Si empiezas ahora llega a',
  scenarioTitle: 'Escenarios de cargador de referencia', scenarioAt: 'mismo móvil y mismo intervalo de carga', assumptionsTitle: 'Supuestos',
  assumptionsText: 'Usa una tensión nominal de batería de {voltage} V, una eficiencia del {efficiency}% y aproximadamente un {taper}% adicional de ralentización por encima del 70%. Tu móvil puede cargar de otra forma.',
  errorCapacity: 'Introduce una capacidad de batería mayor que cero.', errorCurrent: 'La carga actual debe estar entre 0 y 100%.', errorTarget: 'La carga objetivo debe estar entre 1 y 100%.',
  errorTargetOrder: 'La carga objetivo debe ser mayor que la carga actual.', errorPower: 'Introduce una potencia mayor que cero.', errorEfficiency: 'La eficiencia debe estar entre el 50% y el 100%.',
  targetMarker: 'objetivo', chargeProgressLabel: 'Intervalo de carga', hourUnit: 'h', minuteUnit: 'min',
};

const faq = [
  { question: '¿Puedo calcular el tiempo de carga solo con el porcentaje de batería?', answer: 'No. El mismo porcentaje representa una cantidad de energía distinta en una batería pequeña y en una grande. Por eso el cálculo también necesita la capacidad, la potencia que llega al móvil y una estimación de eficiencia.' },
  { question: '¿Por qué mi móvil tarda a veces más que la estimación?', answer: 'El móvil puede reducir la potencia por tener un nivel de carga alto, estar caliente, usar un cable o protocolo limitante, o estar en uso. El resultado sirve para planificar; no es una medición en directo de tu sesión.' },
  { question: '¿Introduzco la potencia del cargador o la que recibe el móvil?', answer: 'Introduce la potencia que probablemente recibe el móvil cuando la conozcas. Si solo sabes la potencia máxima del cargador, úsala como estimación superior y espera que el tiempo real sea mayor si el móvil, el cable o el estándar aceptan menos.' },
];

const howTo = [
  { name: 'Introduce la capacidad', text: 'Busca la capacidad de la batería en las especificaciones del móvil e introdúcela en mAh. No sustituyas ese dato por la capacidad de una power bank: su tensión y pérdidas de conversión describen otro circuito.' },
  { name: 'Define el intervalo de carga', text: 'Introduce el porcentaje actual y el porcentaje que necesitas alcanzar. Una recarga del 20% al 50% produce un resultado distinto de una carga completa.' },
  { name: 'Añade potencia y eficiencia', text: 'Introduce la potencia en vatios o, si la conoces, la potencia de carga que acepta realmente el móvil. Mantén la eficiencia predeterminada si no tienes una medición propia.' },
  { name: 'Compara los escenarios', text: 'Compara el resultado con las referencias de 5 W, 15 W y 30 W para decidir si el cargador te da tiempo suficiente.' },
];

const seo = [
  { type: 'title' as const, text: 'Calcula cuánto tarda en cargar tu móvil', level: 2 as const },
  { type: 'paragraph' as const, html: 'Usa esta calculadora de tiempo de carga del móvil cuando quieras saber si la batería alcanzará un nivel útil antes de salir, durante un viaje o antes de una llamada larga. Introduce la capacidad de la batería, el porcentaje actual, el objetivo, la potencia del cargador y la eficiencia. El resultado estima los minutos y la energía que necesita exactamente esa recarga, para que puedas compararla con el tiempo disponible y con cargadores más lentos o rápidos.' },
  { type: 'title' as const, text: 'Qué datos introducir', level: 2 as const },
  { type: 'list' as const, items: ['Capacidad: usa la capacidad del móvil en mAh, no la capacidad impresa en una power bank.', 'Carga actual y objetivo: describe la recarga que necesitas; el objetivo debe ser superior al porcentaje actual.', 'Potencia y eficiencia: usa la potencia que recibe el móvil si la conoces. Si no, la potencia del cargador es solo un límite superior.'] },
  { type: 'title' as const, text: 'Cómo interpretar el resultado', level: 2 as const },
  { type: 'paragraph' as const, html: 'La cifra principal es el tiempo estimado desde la carga actual hasta el objetivo. La energía restante expresa esa misma recarga en vatios-hora y las barras de referencia enseñan qué cambia con 5 W, 15 W y 30 W. Si no tienes tanto tiempo, baja el objetivo o usa un cargador y un cable que el móvil pueda aprovechar realmente a una potencia mayor.' },
  { type: 'title' as const, text: 'Por qué la carga se ralentiza cerca del 100%', level: 2 as const },
  { type: 'paragraph' as const, html: 'Un móvil normalmente no carga con la misma potencia desde vacío hasta lleno. Cuando la batería se acerca a un nivel alto, el sistema de carga puede reducir la corriente para controlar el calor y el estrés de la batería. Por eso una estimación del 20% al 80% suele ser más útil para planificar que una extrapolación lineal hasta el 100%. En objetivos superiores al 70%, el cálculo añade una pequeña tolerancia de ralentización.' },
  { type: 'title' as const, text: 'Estimación: qué no puede detectar la calculadora', level: 2 as const },
  { type: 'list' as const, items: ['No puede leer el modelo del móvil, la salud de la batería, el protocolo, el cable, la temperatura, el uso ni la potencia de carga instantánea.', 'No diagnostica una batería gastada ni certifica la compatibilidad con carga rápida. Para una respuesta precisa, cronometra la misma configuración en la situación que te interese.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'es', slug: 'calculadora-tiempo-carga-movil', title: 'Calculadora de tiempo de carga del móvil', description: 'Calcula cuánto tarda en cargar tu móvil hasta un porcentaje objetivo usando la capacidad, la carga actual, la potencia del cargador y la eficiencia.', faq, howTo, seo, ui });
