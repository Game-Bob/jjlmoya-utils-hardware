import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-divisor-tensao';
const title = 'Calculadora de divisor de tensão';
const description = 'Calcule a tensão de saída sem carga, corrente, dissipação de potência ou a resistência inferior necessária para uma tensão desejada.';

const faqData = [
  { question: 'O que faz uma calculadora de divisor de tensão?', answer: 'Calcula a saída sem carga de dois resistores em série. Insira a tensão de alimentação, R1 e R2 para obter Vout, ou defina uma Vout desejada para calcular R2.' },
  { question: 'Como calcular a tensão de saída?', answer: 'Use a fórmula Vout = Vs x R2 / (R1 + R2), onde R1 está conectado à alimentação e R2 à massa.' },
  { question: 'Como calcular o resistor para uma tensão desejada?', answer: 'Se R1 for conhecido, a fórmula é R2 = R1 x Vtarget / (Vs - Vtarget). A tensão desejada deve estar entre zero e Vs.' },
  { question: 'Quanto de corrente um divisor de tensão consome?', answer: 'A corrente do divisor é I = Vs / (R1 + R2), consumida continuamente da fonte.' },
  { question: 'Como verificar a potência dos resistores?', answer: 'A potência dissipada é P = I² x R. Escolha componentes com potência nominal adequada.' },
  { question: 'Posso usar um divisor como fonte de alimentação?', answer: 'Geralmente não. Uma carga conectada a Vout altera a resistência equivalente. Use um buffer ou regulador de tensão.' },
];

const howToData = [
  { name: 'Escolha o modo de cálculo', text: 'Use Prever Vout quando souber os dois resistores. Use Encontrar R2 quando souber a alimentação, R1 e a tensão desejada.' },
  { name: 'Insira a alimentação e o resistor superior', text: 'Informe a tensão de alimentação em volts e R1 em ohms.' },
  { name: 'Insira o resistor inferior ou a tensão desejada', text: 'No modo Prever Vout insira R2. No modo Encontrar R2 informe a tensão objetivo.' },
  { name: 'Leia os resultados', text: 'Veja a tensão de saída, a corrente e a potência dissipada por cada resistor.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<VoltageDividerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Cálculos e funcionamento do divisor de tensão', level: 2 },
    { type: 'paragraph', html: 'Um divisor de tensão composto por dois resistores em série reduz uma tensão de entrada para um valor menor na tomada intermediária. Quando o resistor superior <code>R1</code> está conectado à fonte de alimentação e o resistor inferior <code>R2</code> está conectado à massa, a tensão de saída ideal sem carga é calculada pela fórmula <code>Vout = Vs x R2 / (R1 + R2)</code>. Esta ferramenta também exibe a corrente contínua percorrida no divisor e a potência dissipada em forma de calor por cada resistor.' },
    { type: 'title', text: 'Determinar a resistência necessária para uma tensão desejada', level: 3 },
    { type: 'paragraph', html: 'Selecione o modo Encontrar R2 quando souber a tensão de alimentação, o resistor superior R1 e a tensão de saída pretendida no ponto intermediário. A ferramenta transforma a equação para <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>. Uma tensão desejada próxima da alimentação exige um valor de R2 significativamente maior, enquanto uma tensão próxima de zero requer um resistor inferior menor.' },
    { type: 'title', text: 'Analisar a corrente do divisor e a dissipação de potência', level: 3 },
    { type: 'paragraph', html: 'O divisor drena continuamente uma corrente de <code>I = Vs / (R1 + R2)</code> da fonte de alimentação. Cada resistor dissipa uma potência calculada por <code>P = I² x R</code>. Verifique sempre ambos os valores em relação à potência nominal dos componentes selecionados, especialmente ao utilizar o divisor em barramentos de tensão mais elevada.' },
    { type: 'title', text: 'Efeito de cargas conectadas e circuitos externos', level: 3 },
    { type: 'paragraph', html: 'Os resultados apresentados consideram que o ponto Vout não possui carga conectada. Qual circuito conectado à saída fica em paralelo com R2, diminuindo a resistência equivalente do ramo inferior e alterando a tensão e a corrente. Para sinais ou tensões de referência que precisam fornecer corrente a um estágio seguinte, utilize um buffer com amplificador operacional ou um regulador dedicado.' },
    { type: 'list', items: ['Mantenha a tensão desejada estritamente entre zero e a tensão de alimentação.', 'Utilize as mesmas unidades de resistência tanto para R1 quanto para R2.', 'Verifique a dissipação de potência de cada resistor separadamente.', 'Lembre-se de que a tolerância dos componentes e variações na fonte alteram a tensão real.', 'Considere o resultado como tensão sem carga até que o circuito receptor seja incluído no modelo.'] },
    { type: 'tip', title: 'O nó intermediário não é uma fonte de alimentação', html: 'Um divisor de tensão é um método simples para criar referências de tensão ou atenuar sinais, mas possui impedância de saída não nula. Se o circuito seguinte consumir corrente, adicione um estágio seguidor.' },
  ],
  ui: {
    modeHeader: 'Modo de cálculo',
    modePredict: 'Prever Vout',
    modeTarget: 'Encontrar R2',
    inputHeader: 'Parâmetros do circuito',
    supplyLabel: 'Tensão de alimentação Vs',
    topLabel: 'Resistor superior R1',
    bottomLabel: 'Resistor inferior R2',
    targetLabel: 'Tensão desejada Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Fluxo de tensão',
    outputLabel: 'Tensão de saída',
    currentLabel: 'Corrente do divisor',
    totalPowerLabel: 'Potência total',
    topPowerLabel: 'Potência em R1',
    bottomPowerLabel: 'Potência em R2',
    ratioLabel: 'da alimentação',
    statusNominal: 'Cálculo equilibrado',
    statusInvalid: 'Verifique os parâmetros',
    statusTargetInvalid: 'A tensão desejada deve ser inferior à alimentação',
    formulaHeader: 'Fórmula aplicada',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). O ponto iluminado indica a tensão de saída.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Determina o valor de R2 necessário.',
    supplyNode: 'ENTRADA',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'MASSA',
    hint: 'Insira R1 e R2 para calcular Vout.',
    targetHint: 'Escolha uma tensão desejada entre zero e Vs.',
    note: 'Divisor ideal sem carga. Conectar uma carga altera a tensão de saída.',
  },
};
