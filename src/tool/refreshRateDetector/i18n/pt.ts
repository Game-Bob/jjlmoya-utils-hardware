import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'detector-taxa-atualizacao-monitor';
const title = 'Detector de Taxa de Atualização do Monitor';
const description = 'Detecte instantaneamente a taxa de atualização do seu monitor com precisão usando requestAnimationFrame. Teste a estabilidade dos frames e compare com os padrões da indústria.';

const faqData = [
  {
    question: 'O que é taxa de atualização (Hz)?',
    answer: 'A taxa de atualização é o número de vezes por segundo que o seu monitor atualiza a imagem. Um monitor de 60Hz atualiza 60 vezes por segundo, enquanto um de 144Hz atualiza 144 vezes. Taxas mais altas resultam em movimentos mais suaves.',
  },
  {
    question: 'Qual é a precisão deste detector?',
    answer: 'Esta ferramenta usa requestAnimationFrame, que se sincroniza com o ciclo de atualização do seu monitor. A precisão depende da carga do sistema. O modo estável mede por períodos mais longos para maior precisão.',
  },
  {
    question: 'Qual é a diferença entre o modo Estável e o Rápido?',
    answer: 'O modo Rápido mede durante um curto período (~3 segundos) para feedback rápido. O modo Estável demora mais tempo (~10 segundos) para filtrar o ruído do sistema e fornecer resultados mais fiáveis.',
  },
  {
    question: 'Por que o Hz detetado é diferente do que o meu monitor diz?',
    answer: 'Isto pode acontecer se: a conexão do cabo estiver solta, os drivers estiverem desatualizados ou a escala do SO interferir. Tente desconectar e reconectar o cabo do monitor ou atualizar os drivers da GPU.',
  },
  {
    question: 'Quais taxas de atualização os monitores modernos suportam?',
    answer: 'Os padrões comuns são 60Hz (básico), 75Hz, 120Hz, 144Hz (gaming), 240Hz (gaming competitivo) e 360Hz (eSports profissionais).',
  },
];

const howToData = [
  {
    name: 'Carregue a ferramenta',
    text: 'Basta abrir esta página. O detector começa a medir imediatamente.',
  },
  {
    name: 'Aguarde a estabilização',
    text: 'Escolha o modo Estável ou Rápido. Deixe a medição terminar sem mover a janela.',
  },
  {
    name: 'Verifique o velocímetro',
    text: 'A taxa de atualização do seu monitor aparece como um mostrador suave, com estatísticas de referência (mín/máx/méd).',
  },
  {
    name: 'Compare com os padrões',
    text: 'A ferramenta mostra com qual padrão o seu monitor coincide (60, 75, 120, 144, 240, 360Hz).',
  },
  {
    name: 'Opcional: teste de salto de frames',
    text: 'Observe o quadrado animado cruzando o ecrã para confirmar visualmente a fluidez.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Detector de Taxa de Atualização do Monitor: Teste os Hz do seu Ecrã Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Detecte instantaneamente a taxa de atualização do seu monitor (60Hz, 144Hz, 240Hz, etc.) com precisão. Teste a estabilidade dos frames e verifique se o seu monitor está a funcionar de acordo com as especificações nominais.',
    },
    {
      type: 'title',
      text: 'Por que a Taxa de Atualização do Monitor é Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A taxa de atualização determina o quão suave o movimento aparece no seu ecrã. Os jogadores beneficiam de monitores de 144Hz+, enquanto os utilizadores gerais consideram 60Hz adequados. Esta ferramenta ajuda a confirmar que o seu monitor está realmente a oferecer a taxa de atualização anunciada.',
    },
    {
      type: 'title',
      text: 'Como Detectar a sua Taxa de Atualização',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Carregue este detector – a medição começa imediatamente',
        'Escolha entre o modo de medição Rápido (3s) ou Estável (10s)',
        'Leia os Hz do seu monitor no mostrador do velocímetro',
        'Compare com os padrões da indústria (60, 75, 120, 144, 240, 360Hz)',
      ],
    },
    {
      type: 'title',
      text: 'Padrões Comuns de Taxa de Atualização',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Padrão', 'Caso de Uso', 'Utilizador Típico'],
      rows: [
        ['60Hz', 'Computação Geral', 'Escritório, Navegação Web'],
        ['75Hz', 'Gaming Ligeiro', 'Jogadores Casuais'],
        ['120Hz', 'Multimédia', 'Consolas, Streaming'],
        ['144Hz', 'Gaming Competitivo', 'FPS, Jogos de Ritmo Rápido'],
        ['240Hz+', 'eSports Profissionais', 'Jogadores Pro, Streamers'],
      ],
    },
    {
      type: 'title',
      text: 'Resolução de Problemas: O Ecrã Mostra menos Hz do que o Esperado',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Verifique as conexões do cabo HDMI/DisplayPort – cabos soltos reduzem a largura de banda',
        'Atualize os drivers da sua GPU (NVIDIA, AMD, Intel)',
        'Verifique as configurações de ecrã do SO para garantir que a alta taxa de atualização está ativada',
        'Tente diferentes cabos ou portas no seu monitor',
        'Reinicie o seu computador e teste novamente',
      ],
    },
    {
      type: 'title',
      text: 'A Tecnologia Por Trás deste Detector',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta utiliza a API requestAnimationFrame do navegador, que se sincroniza diretamente com o ciclo de atualização do seu monitor. Ao medir o tempo entre os frames da animação, calculamos a sua taxa de atualização exata com alta precisão – sem necessidade de hardware especial.',
    },
  ],
  ui: {
    badge: 'Teste de Ecrã',
    title: 'Detector de Taxa de Atualização',
    description: 'Detecte a taxa de atualização do seu ecrã instantaneamente',
    modeStable: 'Estável (10s, preciso)',
    modeFast: 'Rápido (3s, ágil)',
    measurementStatus: 'A medir...',
    currentHz: 'Atual',
    averageHz: 'Média',
    maxHz: 'Máximo',
    minHz: 'Mínimo',
    standardDetected: 'Padrão Detectado',
    frameSkippingTest: 'Teste de Salto de Frames',
    startMeasurement: 'Iniciar Medição',
    resetMeasurement: 'Repor',
    copyResult: 'Copiar Resultado',
    copiedFeedback: 'Copiado para a área de transferência!',
    optimalConfiguration: '[OK] Configuração Ideal',
    suboptimalConfiguration: '[AVISO] Abaixo do Ideal',
    unstableRefreshRate: '[AVISO] Taxa de Atualização Instável',
    measurementNotStarted: 'Pronto para medir',
    switchMonitorHint: 'Arraste a janela para outro monitor para o testar',
    incompatibleBrowserMsg: 'O seu navegador não suporta requestAnimationFrame',
  },
};
