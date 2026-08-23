import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora da Lei de Ohm e Potência Elétrica',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que esta calculadora da lei de Ohm calcula?',
      acceptedAnswer: { '@type': 'Answer', text: 'Insira dois valores positivos de tensão, corrente, resistência ou potência. A calculadora obtém os outros dois valores.' },
    },
    {
      '@type': 'Question',
      name: 'Quais unidades a calculadora utiliza?',
      acceptedAnswer: { '@type': 'Answer', text: 'Utiliza volts para tensão, amperes para corrente, ohms para resistência e watts para potência.' },
    },
    {
      '@type': 'Question',
      name: 'Posso usar potência e resistência como valores conhecidos?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. A calculadora usa fórmulas com raiz quadrada para calcular tensão e corrente.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como calcular grandezas elétricas com a lei de Ohm',
  step: [
    { '@type': 'HowToStep', name: 'Escolha dois valores conhecidos', text: 'Ative as duas grandezze que você já conhece: tensão, corrente, resistência ou potência.' },
    { '@type': 'HowToStep', name: 'Insira as medições', text: 'Digite valores positivos nos campos ativos.' },
    { '@type': 'HowToStep', name: 'Leia os resultados', text: 'O esquema do circuito e o painel mostram os valores calculados.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Calcular tensão corrente resistência ou potência num circuito', level: 2 },
  { type: 'paragraph', html: 'Conhecendo duas grandezas elétricas num circuito simples, você tem informação suficiente para calcular as outras duas. Insira o par de dados disponível e esta calculadora da lei de Ohm obtém os valores restantes em volts, amperes, ohms e watts.' },
  { type: 'paragraph', html: 'Por exemplo, insira 12 V e 2 A para obter 6 Ω e 24 W. Insira 5 V e 10 W para obter 2 A e 2,5 Ω. Muito útil para verificar um resistor, estimar a corrente de um LED ou calcular a carga de fontes USB.' },
  { type: 'title', text: 'Qual fórmula da lei de Ohm utilizar', level: 3 },
  { type: 'paragraph', html: 'A equação adequada depende dos dois valores conhecidos. Todas são derivações da lei de Ohm V = I x R e da fórmula de potência P = V x I.' },
  { type: 'table', headers: ['Se conhece', 'Pode calcular', 'Fórmula utilizada'], rows: [
    ['Tensão e corrente', 'Resistência e potência', 'R = V / I e P = V x I'],
    ['Tensão e resistência', 'Corrente e potência', 'I = V / R e P = V² / R'],
    ['Tensão e potência', 'Corrente e resistência', 'I = P / V e R = V² / P'],
    ['Corrente e resistência', 'Tensão e potência', 'V = I x R e P = I² x R'],
    ['Corrente e potência', 'Tensão e resistência', 'V = P / I e R = P / I²'],
    ['Resistência e potência', 'Tensão e corrente', 'V = √(P x R) e I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Verifique a potência para escolher componentes seguros', html: 'Se a calculadora indicar 24 W, o componente deve ser capaz de dissipar pelo menos essa potência. Mantenha uma margem de segurança e lembre-se de que diodos não são puramente ôhmicos.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'calculadora-lei-ohm-potencia',
  title: 'Calculadora da Lei de Ohm e Potência Elétrica',
  description: 'Calculadora da lei de Ohm para encontrar tensão, corrente, resistência e potência elétrica a partir de dois valores conhecidos.',
  ui: {
    instructions: 'Escolha as duas grandezas conhecidas e insira seus valores. O circuito calculará o par restante em unidades do SI.',
    knownLabel: 'Escolha dois valores conhecidos',
    useAsKnownLabel: 'Usar como conhecido',
    voltageLabel: 'Tensão',
    currentLabel: 'Corrente',
    resistanceLabel: 'Resistência',
    powerLabel: 'Potência',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: 'Completar o circuito',
    resultHint: 'Dois terminais conhecidos geram o par restante.',
    formulaTitle: 'Leitura do circuito',
    formulaHint: 'Os terminais iluminados são conhecidos. As trilhas de cobre mostram as equações.',
    statusTitle: 'Status do cálculo',
    statusEmpty: 'Insira dois valores positivos para começar.',
    statusInvalid: 'Ambos os valores conhecidos devem ser maiores que zero.',
    statusReady: 'Cálculo do circuito concluído.',
    presetTitle: 'Começar com uma carga real',
    presetLed: 'Indicador LED',
    presetUsb: 'Carga USB',
    presetAmplifier: 'Carga de amplificador',
    resetLabel: 'Redefinir',
    orbitCaption: 'Escolha dois terminais para fechar o circuito.',
    knownBadge: 'Conhecido',
    solvedBadge: 'Calculado',
    unitVoltage: 'volts',
    unitCurrent: 'amperes',
    unitResistance: 'ohms',
    unitPower: 'watts',
    formulaVoltageCurrent: 'R = V / I e P = V x I',
    formulaVoltageResistance: 'I = V / R e P = V² / R',
    formulaVoltagePower: 'I = P / V e R = V² / P',
    formulaCurrentResistance: 'V = I x R e P = I² x R',
    formulaCurrentPower: 'V = P / I e R = P / I²',
    formulaResistancePower: 'V = √(P x R) e I = √(P / R)',
    seoTitle: 'Calculadora da lei de Ohm',
  },
  seo,
  faqTitle: 'Perguntas frequentes sobre a lei de Ohm',
  faq: [
    { question: 'Conheço tensão e corrente. O que obtenho?', answer: 'Você obtém resistência e potência. Por exemplo, 12 V e 2 A produzem 6 Ω e 24 W.' },
    { question: 'Posso calcular a potência dissipada por um resistor?', answer: 'Sim. Insira tensão e resistência, ou corrente e resistência, para calcular a potência em watts.' },
    { question: 'Posso usar potência e tensão como entrada?', answer: 'Sim. Insira ambos e a calculadora obterá corrente (I = P / V) e resistência (R = V² / P).' },
    { question: 'A lei de Ohm se aplica a todos os componentes?', answer: 'Não. Esta calculadora modela componentes ôhmicos simples. Diodos apresentam resposta não linear.' },
  ],
  bibliographyTitle: 'Referências de fórmulas',
  bibliography,
  howTo: [
    { name: 'Escolha dois valores conhecidos', text: 'Ative as duas grandezas conhecidas.' },
    { name: 'Insira medições positivas', text: 'Digite volts, amperes, ohms ou watts nos campos ativos.' },
    { name: 'Leia os resultados', text: 'Veja o esquema do circuito e a fórmula utilizada.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
