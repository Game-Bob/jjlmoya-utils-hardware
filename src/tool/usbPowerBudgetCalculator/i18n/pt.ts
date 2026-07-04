import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-orcamento-energia-usb';
const title = 'Calculadora de Orçamento de Energia USB';
const description = 'Verifique se uma porta USB, carregador, hub, cabo ou perfil USB-C PD pode alimentar seus dispositivos com segurança após a margem de reserva e a queda de tensão do cabo.';

const faqData = [
  {
    question: 'Como sei se uma porta USB pode alimentar meu dispositivo?',
    answer: 'Compare a potência total do dispositivo com a potência da fonte USB, reserve uma margem de segurança e estime a queda de tensão do cabo. Uma configuração pode falhar mesmo quando os watts nominais parecem altos se o cabo for longo, fino ou transportar alta corrente a 5 volts.',
  },
  {
    question: 'Por que o comprimento do cabo importa para a alimentação USB?',
    answer: 'A corrente fluindo pelo cobre cria queda de tensão. Cabos longos e condutores finos têm mais resistência, então o dispositivo pode receber menos tensão do que o carregador fornece. Isso é especialmente importante para placas Raspberry Pi, discos rígidos, fitas de LED, docks e hubs alimentados por barramento.',
  },
  {
    question: 'Qual margem de reserva devo usar?',
    answer: 'Use pelo menos 20 por cento para eletrônicos normais, 30 por cento para motores, unidades, rádios ou placas com cargas de rajada, e mais se a qualidade do adaptador for desconhecida ou o dispositivo precisar funcionar continuamente.',
  },
  {
    question: 'Isso pode substituir os testes de negociação USB-C PD?',
    answer: 'Não. A calculadora verifica o orçamento elétrico. Ela não verifica se um carregador, e-marker de cabo, dispositivo ou hub realmente negocia um perfil Power Delivery específico.',
  },
];

const howToData = [
  { name: 'Escolha um perfil de fonte', text: 'Selecione um perfil USB ou USB-C PD comum ou edite a tensão e corrente manualmente.' },
  { name: 'Descreva o cabo', text: 'Informe o comprimento do cabo e a bitola do condutor. Fios finos de AWG alto causam mais queda de tensão.' },
  { name: 'Adicione a carga', text: 'Informe uma carga de dispositivo em watts e o número de dispositivos compartilhando a mesma fonte.' },
  { name: 'Leia o status', text: 'Use o status, queda do cabo, tensão final, utilização e margem para decidir se a configuração é segura.' },
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'A energia USB é um orçamento, não um rótulo', level: 2 },
    {
      type: 'paragraph',
      html: 'Um carregador USB marcado como 15 W, 45 W ou 100 W descreve o que a fonte pode oferecer nas condições certas. Seu dispositivo só vê o resultado após a negociação do protocolo, limites de corrente, resistência do cabo, qualidade do conector, perdas do hub e picos de carga. Esta calculadora foca na pergunta elétrica prática: após a queda do cabo e a margem de reserva, ainda há energia suficiente para o hardware que você deseja usar?',
    },
    {
      type: 'stats',
      items: [
        { label: 'Corrente padrão USB 2.0', value: '0,5 A' },
        { label: 'Máximo padrão USB-C a 5 V', value: '3 A' },
        { label: 'Reserva recomendada', value: '20%+' },
      ],
    },
    { type: 'title', text: 'Como interpretar o resultado', level: 3 },
    {
      type: 'table',
      headers: ['Status', 'Significado', 'Melhor próximo passo'],
      rows: [
        ['Seguro', 'A carga se encaixa na capacidade da fonte após a reserva selecionada e a tensão estimada do dispositivo permanece saudável.', 'Use a configuração, mas fique atento ao calor se o adaptador for pequeno ou fechado.'],
        ['Apertado', 'A carga está próxima do limite reservado ou a queda do cabo está se tornando significativa.', 'Encurte o cabo, escolha condutores mais grossos, reduza a carga ou mude para um perfil de potência mais alto.'],
        ['Acima do orçamento', 'A carga excede a potência útil da fonte ou a tensão no dispositivo provavelmente está muito baixa.', 'Use um carregador mais forte, hub alimentado, cabo mais curto ou um dispositivo que negocie uma tensão USB-C PD mais alta.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Quando os watts são suficientes mas o dispositivo ainda reinicia',
      html: '<p>A corrente de partida pode ser muito maior que a potência média impressa na etiqueta de um dispositivo. Uma fonte de 5 V perde tensão mais rapidamente que um perfil PD de 20 V para a mesma potência porque precisa transportar mais corrente. Muitos cabos baratos usam condutores de potência finos mesmo quando a capa externa parece substancial, e hubs alimentados por barramento compartilham um orçamento upstream entre todos os dispositivos downstream.</p>',
    },
    { type: 'title', text: 'Queda de tensão do cabo em termos simples', level: 3 },
    {
      type: 'paragraph',
      html: 'Queda de tensão é a perda criada quando a corrente flui através da resistência do cabo. A alimentação USB tem dois condutores no caminho de potência, então a calculadora usa o comprimento de ida e volta. Um cabo de um metro é eletricamente dois metros de cobre para o circuito de potência. Números AWG mais baixos são mais grossos e geralmente melhores para cargas de alta corrente.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Cabo curto e grosso', description: 'Ideal para placas Raspberry Pi, gabinetes SSD, kits de desenvolvimento e docks USB-C que consomem corrente de rajada.' },
        { title: 'Cabo longo e fino', description: 'Aceitável para sensores de baixa potência ou carregamento lento, mas arriscado para unidades, cargas de LED e placas de computação.' },
        { title: 'PD de tensão mais alta', description: 'Reduz a corrente para a mesma potência, o que diminui a perda no cabo, mas apenas se a fonte, o cabo e o dispositivo negociarem isso.' },
      ],
    },
    {
      type: 'tip',
      title: 'Regra prática',
      html: 'Se a calculadora disser que a configuração está apertada, trate como um aviso de campo. Falhas USB geralmente aparecem como desconexões aleatórias, quedas de tensão, carregamento lento, áudio com ruído ou erros de armazenamento antes de parecerem um problema claro de energia.',
    },
    {
      type: 'summary',
      title: 'Para que esta calculadora é mais adequada',
      items: [
        'Planejar hubs USB, computadores de placa única, unidades externas, placas de desenvolvimento, luzes, ventiladores e pequenas montagens de laboratório.',
        'Comparar perfis de fonte USB 2.0, USB 3.x, USB-C e USB Power Delivery.',
        'Estimar se um cabo é muito longo ou muito fino para uma carga.',
        'Escolher uma reserva sensata antes de comprar um carregador ou hub alimentado.',
      ],
    },
  ],
  ui: {
    profileLabel: 'Perfil de fonte USB',
    metricUnits: 'Métrico',
    imperialUnits: 'EUA',
    voltageLabel: 'Tensão da fonte (V)',
    currentLabel: 'Corrente da fonte (A)',
    cableLengthLabel: 'Comprimento do cabo',
    wireGaugeLabel: 'Bitola do fio de potência',
    deviceLoadLabel: 'Carga por dispositivo (W)',
    devicesLabel: 'Dispositivos',
    headroomLabel: 'Margem de reserva (%)',
    sourcePower: 'Potência da fonte',
    requiredPower: 'Potência necessária',
    cableDrop: 'Queda do cabo',
    deviceVoltage: 'Tensão do dispositivo',
    headroom: 'Margem',
    utilization: 'Utilização',
    safeStatus: 'Orçamento de energia parece seguro',
    tightStatus: 'Orçamento de energia está apertado',
    overStatus: 'Acima do orçamento ou risco de queda de tensão',
    safeAdvice: 'A carga se encaixa com a margem selecionada. Use um cabo de qualidade e verifique o calor durante longas execuções.',
    tightAdvice: 'Você está próximo do limite. Reduza o comprimento do cabo, use condutores mais grossos, diminua a carga ou selecione um perfil mais forte.',
    overAdvice: 'Esta configuração provavelmente sofrerá quedas de tensão ou limitação. Use um hub alimentado, adaptador mais forte ou um perfil USB-C PD de tensão mais alta.',
    busLane: 'Fonte USB',
    loadLane: 'Carga do dispositivo',
    cableLane: 'queda',
    boardEyebrow: 'Caminho de energia USB ao vivo',
    sourceSocket: 'Tomada de fonte',
    deviceSocket: 'Carga de hardware',
    energyFlow: 'fluxo de energia',
    reservedLabel: 'utilizável após reserva',
  },
};
