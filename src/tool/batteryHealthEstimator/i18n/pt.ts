import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-saude-bateria-litio';
const title = 'Calculadora de Saúde da Bateria de Lítio';
const description =
  'Calcule o Estado de Saúde (SoH) da sua bateria de lítio com base em ciclos, voltagem e temperatura. Guia científico para maximizar a longevidade energética.';

const faqData = [
  {
    question: 'O que é a degradação química da bateria?',
    answer:
      'Com cada ciclo de carga e descarga, as células de lítio sofrem microfissuras e acumulação de sedimentos químicos (S.E.I.) que reduzem a sua capacidade de armazenamento de energia. É um processo inevitável, mas que pode ser retardado com bons hábitos.',
  },
  {
    question: 'Por que é recomendado carregar até 80%?',
    answer:
      'As baterias de lítio sofrem mais stress em voltagens extremas (0% e 100%). Manter a carga entre 20% e 80% pode triplicar a vida útil da célula, reduzindo o calor e a pressão interna.',
  },
  {
    question: 'Como o calor afeta a vida útil da bateria?',
    answer:
      'O calor é o inimigo número um. Para cada aumento de 10 graus acima da temperatura ambiente ideal (25 graus), a taxa de degradação química duplica aproximadamente.',
  },
  {
    question: 'O que é um ciclo de carga completo?',
    answer:
      'Um ciclo é a utilização de 100% da capacidade da bateria, mas não precisa de ser tudo de uma vez. Se usar 50% hoje, carregá-la e usar 50% amanhã, completou 1 ciclo total.',
  },
];

const howToData = [
  {
    name: 'Identificar a capacidade original',
    text: 'Procure na caixa do seu dispositivo ou no site do fabricante os mAh que a sua bateria tinha quando era nova.',
  },
  {
    name: 'Verificar ciclos atuais',
    text: 'Muitos sistemas (como iOS ou Android 14) permitem-lhe ver quantos ciclos de carga a sua bateria acumulou.',
  },
  {
    name: 'Introduzir dados técnicos',
    text: 'Ajuste a voltagem atual, ciclos e temperatura para que o nosso motor de cálculo possa estimar o SoH.',
  },
  {
    name: 'Analisar o diagnóstico',
    text: 'Verifique a percentagem de saúde. Se estiver abaixo de 80%, poderá começar a notar quedas de desempenho ou encerramentos inesperados.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'A química do tempo: por que as baterias de lítio morrem', level: 2 },
    {
      type: 'paragraph',
      html: 'Uma bateria de iões de lítio não é uma caixa de energia estática, mas um ecossistema químico dinâmico em constante degradação desde o momento do fabrico. Cada ciclo de carga e descarga, cada variação de temperatura e cada minuto em voltagens extremas contribui para subprodutos que prejudicam o fluxo de iões.',
    },
    { type: 'title', text: 'Principais mecanismos de degradação', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Camada SEI:</strong> a interface de eletrólito sólido cresce ao longo do tempo, consumindo lítio ativo e aumentando a resistência interna. <strong>Oxidação do eletrólito:</strong> voltagens acima de 4.1V aceleram a oxidação e podem inchar a bateria. <strong>Lithium Plating:</strong> o carregamento a baixas temperaturas deposita lítio de forma metálica, criando dendrites que podem perfurar o separador.',
    },
    { type: 'title', text: 'O mito dos 100%: por que carregar durante a noite é um erro', level: 3 },
    {
      type: 'paragraph',
      html: 'Para um ião de lítio, estar com 100% de carga (4.2V) é um estado de alto stress. Pesquisas mostram que a vida útil do ciclo duplica ou triplica ao manter o dispositivo entre <strong>20% e 80%</strong>. Além disso, para cada 10°C acima de 25°C, a taxa de degradação química duplica aproximadamente.',
    },
    { type: 'title', text: 'Protocolo de sobrevivência energética', level: 3 },
    {
      type: 'paragraph',
      html: 'Nunca carregue uma bateria abaixo de 0°C: o lítio deposita-se no ânodo causando danos permanentes. O carregamento rápido gera calor localizado e stress mecânico; utilize-o apenas quando estritamente necessário. Para armazenamento a longo prazo, mantenha a bateria a 50% num local fresco.',
    },
  ],
  ui: {
    badge: 'Bateria Li-Ion',
    title: 'Estimador de Saúde da Bateria',
    description: 'Diagnóstico técnico de degradação para células de iões de lítio.',
    paramsTitle: 'Parâmetros da Célula',
    voltageLabel: 'Voltagem Atual',
    cyclesLabel: 'Ciclos de Carga',
    tempLabel: 'Temperatura',
    voltageHint: 'Gama nominal: 3.0V (vazia) a 4.2V (cheia).',
    labelUsefulLife: 'Vida Útil',
    yearsPrefix: 'Est.',
    yearsSuffix: 'anos',
    metricThermalStress: 'Stress Térmico',
    metricVoltageStress: 'Stress de Voltagem',
    metricLithiumPlating: 'Lithium Plating',
    statusExcelente: 'Estado Excelente',
    statusBueno: 'Estado Bom',
    statusRegular: 'Estado Regular',
    statusCritico: 'Estado Crítico',
    indicatorTempNormal: 'Normal',
    indicatorTempCritical: 'Crítico',
    indicatorVoltageHigh: 'Alta',
    indicatorVoltageLow: 'Baixa',
    indicatorPlatingRisk: 'Alto Risco',
    indicatorPlatingOk: 'Sem Risco',
    recTemp: 'Reduza a temperatura ambiente ou melhore a ventilação para evitar a oxidação do eletrólito.',
    recVoltageHigh: 'Evite manter a bateria com 100% de carga (4.2V) por períodos prolongados.',
    recVoltageLow: 'Evite descargas profundas; ciclos entre 20% e 80% duplicam a vida útil da bateria.',
    recSohLow: 'A capacidade caiu abaixo do padrão ideal. Considere uma substituição se a autonomia for insuficiente.',
    recDefault: 'Mantenha os seus hábitos atuais -a sua bateria está numa gama de funcionamento ideal.',
  },
};
