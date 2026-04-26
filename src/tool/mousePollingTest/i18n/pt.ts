import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-polling-rate-rato-online';
const title = 'Teste de Polling Rate de Rato Online';
const description =
  'Verifique os Hz reais do seu rato. Verifique se o seu rato de gaming funciona a 1000Hz ou mais com a nossa ferramenta profissional.';

const faqData = [
  {
    question: 'O que é o Polling Rate de um rato?',
    answer:
      'É a frequência com que o rato comunica a sua posição ao computador, medida em Hz. Um polling rate de 1000Hz significa que o rato envia dados a cada 1 milissegundo, proporcionando um movimento muito mais fluido.',
  },
  {
    question: 'Porque é que o meu teste não atinge 1000Hz constantemente?',
    answer:
      'O navegador só consegue medir o polling rate quando o rato está em movimento. Se o mover lentamente ou se o seu CPU estiver muito ocupado, a medição pode flutuar. Mova o rato em círculos rápidos para obter o pico máximo real.',
  },
  {
    question: 'É melhor ter o polling rate mais alto possível?',
    answer:
      'Geralmente sim para gaming (1000Hz ou mais), pois reduz o lag. No entanto, taxas extremamente altas (4000Hz ou 8000Hz) consomem muitos recursos do CPU e nem todos os jogos estão otimizados para elas.',
  },
  {
    question: 'Como é que a taxa de atualização do monitor afeta o rato?',
    answer:
      'Se tiver um monitor de 144Hz ou 240Hz, um polling rate baixo (125Hz) fará com que o ponteiro pareça tremido. Para monitores de alta frequência, é essencial usar pelo menos 500Hz ou 1000Hz.',
  },
];

const howToData = [
  {
    name: 'Preparar a área de teste',
    text: 'Coloque o cursor dentro da zona de captura da ferramenta.',
  },
  {
    name: 'Mover o rato rapidamente',
    text: 'Faça movimentos circulares rápidos e amplos. A ferramenta calculará os intervalos entre cada evento de movimento do rato enviado pelo hardware.',
  },
  {
    name: 'Observar o gráfico de estabilidade',
    text: 'Verifique se a linha dos Hz é constante ou se tem quebras repentinas, o que poderia indicar interferências em ratos sem fios ou problemas do CPU.',
  },
  {
    name: 'Analisar o tempo de resposta',
    text: 'Verifique o atraso médio em milissegundos. Um bom rato de gaming deve manter uma latência média próxima de 1ms.',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Guia Definitivo do Polling Rate', level: 2 },
    {
      type: 'paragraph',
      html: 'Quando move fisicamente o seu rato no tapete, esse movimento analógico deve ser traduzido em sinais digitais que o seu computador entenda. O <strong>Polling Rate</strong> é a frequência com que o rato "comunica" a sua posição ao PC. É medido em Hertz (Hz).',
    },
    { type: 'title', text: 'Níveis de Polling Rate e Seus Usos', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> -O rato comunica a cada 8 milissegundos. Bom para uso de escritório, mas parece tremido em monitores de 144Hz. <strong>1000 Hz</strong> -O padrão de ouro do gaming: comunica a cada 1 ms. Movimento fluido sem atraso percetível. <strong>8000 Hz</strong> -Tecnologia de ponta (Razer, Logitech). Comunica a cada 0,125 ms, mas requer um CPU potente.',
    },
    { type: 'title', text: 'Porque é que os meus Hz flutuam?', level: 3 },
    {
      type: 'paragraph',
      html: 'Completamente normal. A maioria dos ratos modernos tem um polling rate dinâmico para poupar energia. Se mover o rato lentamente, ele envia menos comunicações porque há menos dados novos. Apenas movimentos rápidos e contínuos levam o sensor ao seu pico máximo real.',
    },
    { type: 'title', text: 'Polling Rate vs DPI: A Grande Confusão', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong> é a sensibilidade: quantos píxeis o cursor se move por polegada de movimento físico. <strong>Hz (Polling Rate)</strong> é a frequência de atualização: quão fluida e atempadamente esse movimento é comunicado. Ambos os parâmetros são independentes e complementares.',
    },
  ],
  ui: {
    badge: 'Teste de Rato',
    title: 'Verificador de Polling Rate',
    description: 'Mova o rato em círculos rápidos para medir os Hz.',
    labelAvg: 'Média',
    labelPeak: 'Pico',
    placeholder: 'Mova o rato aqui',
  },
};
