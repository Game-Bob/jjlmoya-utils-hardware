import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gerador-tons-frequencia-online';
const title = 'Gerador de Tons e Frequências Online';
const description =
  'Gere ondas sinusoidais, quadradas, triangulares e dente de serra. Teste as suas colunas, auscultadores ou subwoofer com frequências de 20Hz a 20kHz.';

const faqData = [
  {
    question: 'Para que serve um gerador de frequência?',
    answer:
      'É utilizado para testar a resposta de frequência de colunas e auscultadores, detetar ressonâncias indesejadas em móveis, encontrar falhas na sua audição ou até ajudar a acalmar o tinido através da terapia notch.',
  },
  {
    question: 'O que é uma onda sinusoidal versus uma onda quadrada?',
    answer:
      'Uma onda sinusoidal é um tom puro sem harmónicas (suave e redonda). Uma onda quadrada é rica em harmónicas ímpares e soa muito mais agressiva ou digital. A onda triangular situa-se no meio, sendo útil para síntese de áudio.',
  },
  {
    question: 'Posso danificar as minhas colunas com esta ferramenta?',
    answer:
      'Sim, se usar volumes muito altos em frequências extremas (especialmente graves abaixo de 30Hz ou agudos acima de 15kHz). Comece sempre com um volume de sistema baixo e aumente gradualmente.',
  },
  {
    question: 'Qual é o alcance da audição humana?',
    answer:
      'Teoricamente de 20Hz a 20.000Hz (20kHz). No entanto, com a idade é normal perder a capacidade de ouvir acima de 15kHz. Este teste pode ajudar a verificar o seu limite superior pessoal.',
  },
];

const howToData = [
  {
    name: 'Selecionar o tipo de forma de onda',
    text: 'Escolha entre Sinusoidal (pura), Quadrada, Triangular ou Dente de serra, dependendo do tipo de teste que deseja realizar.',
  },
  {
    name: 'Ajustar a frequência',
    text: 'Mova o cursor para navegar no espetro audível. Use os atalhos de 60Hz, 440Hz ou 1kHz para aceder rapidamente a frequências de referência.',
  },
  {
    name: 'Controlar o volume',
    text: 'Certifique-se de que o volume das suas colunas está baixo antes de premir Reproduzir. Pode ajustar o ganho diretamente na ferramenta.',
  },
  {
    name: 'Analisar a resposta',
    text: 'Preste atenção a possíveis distorções ou momentos em que o som desaparece. Isto indicará os limites físicos do seu hardware de áudio.',
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

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Tudo Sobre Frequências e Ondas Sonoras', level: 2 },
    {
      type: 'paragraph',
      html: 'O som é pura física em movimento. Esta ferramenta permite manipular ondas sonoras em tempo real, desde os graves mais profundos que pode sentir no peito até aos agudos ultrassónicos que apenas os animais conseguem detetar.',
    },
    { type: 'title', text: 'Alcance da Audição Humana e Presbiacusia', level: 3 },
    {
      type: 'paragraph',
      html: 'Um ouvido humano saudável deteta sons entre <strong>20Hz e 20kHz</strong>. Com a idade, o limite superior desce: a maioria dos adultos com mais de 50 anos não consegue ouvir acima de 12kHz. O tom de 17,4kHz, conhecido como "mosquito tone", é um teste clássico que normalmente apenas adolescentes conseguem passar.',
    },
    { type: 'title', text: 'Tipos de Onda e Seus Usos', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sinusoidal:</strong> tom puro sem harmónicas, usado em testes de audição médicos e calibração de instrumentos. <strong>Quadrada:</strong> rica em harmónicas ímpares, soa como consolas retro de 8 bits. <strong>Dente de serra:</strong> contém todas as harmónicas, a base dos sintetizadores de música eletrónica. <strong>Triangular:</strong> ponto médio entre sinusoidal e quadrada — mais suave que a quadrada, mas com mais conteúdo harmónico que a sinusoidal.',
    },
    { type: 'title', text: 'Teste de Colunas e Limpeza por Vibração', level: 3 },
    {
      type: 'paragraph',
      html: 'Uma onda de baixa frequência (normalmente <strong>165Hz</strong>) no volume máximo com forma quadrada ou dente de serra força o diafragma da coluna a vibrar violentamente, expelindo mecanicamente gotas de água presas na grelha. Não reproduza frequências extremamente altas no volume máximo por longos períodos: mesmo que não as consiga ouvir, a energia pode danificar os tweeters do seu equipamento.',
    },
  ],
  ui: {
    badge: 'Gerador de Áudio',
    title: 'Gerador de Tons',
    description: 'Gere frequências puras para testes de áudio.',
    freqLabel: 'Frequência',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Sub-bass)',
    rangeMax: '20kHz (Ultrassom)',
    waveLabel: 'Forma de onda',
    waveSine: 'Sinusoidal',
    waveSquare: 'Quadrada',
    waveSawtooth: 'Dente de serra',
    waveTriangle: 'Triangular',
    volLabel: 'Volume',
    btnPlay: 'REPRODUZIR TOM',
    btnStop: 'STOP',
  },
};
