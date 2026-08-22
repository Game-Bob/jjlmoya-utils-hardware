import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-atraso-audio';
const title = 'Teste de atraso de áudio';
const description = 'Teste o atraso de áudio percebido em alto-falantes, fones de ouvido, dispositivos Bluetooth e sincronização de vídeo com um teste local no navegador.';

const faq = [
  {
    question: 'O que mede exatamente este teste de atraso de áudio?',
    answer: 'O modo de microfone opcional estima o intervalo entre um pulso agendado pelo navegador e sua captação pelo microfone.',
  },
  {
    question: 'Posso testar a latência do Bluetooth sem microfone?',
    answer: 'Sim. Inicie a sequência de impulsos, selecione Bluetooth e mova o deslizador de alinhamento até que o flash e o clique pareçam simultâneos.',
  },
  {
    question: 'Por que o modo de microfone precisa de permissão?',
    answer: 'O navegador precisa de acesso ao microfone para ouvir o clique de teste após sua propagação acústica.',
  },
  {
    question: 'Por que a medição pelo microfone pode variar?',
    answer: 'Reflexões da sala, processamento do microfone e buffers do sistema operacional alteram o resultado.',
  },
  {
    question: 'Qual modo de teste devo escolher?',
    answer: 'Escolha Alto-falantes para o ambiente, Fones com fio para conexão direta, Bluetooth para sem fio e Sincronização de vídeo para players.',
  },
  {
    question: 'O áudio do meu microfone é enviado para algum servidor?',
    answer: 'Não. O fluxo do microfone é analisado exclusivamente na memória do navegador e nenhuma gravação é enviada.',
  },
];

const howTo = [
  {
    name: 'Selecione o caminho de reprodução',
    text: 'Escolha alto-falantes, fones com fio, Bluetooth ou sincronização de vídeo.',
  },
  {
    name: 'Comece com o pulso manual',
    text: 'Pressione Iniciar teste, ouça o clique e mova o deslizador até alinhar com o pulso visual.',
  },
  {
    name: 'Ative a medição por microfone se necessário',
    text: 'Clique em Ativar microfone, conceda permissão e posicione o microfone no local de escuta.',
  },
  {
    name: 'Leia o resultado como uma estimativa',
    text: 'Use a latência mediana e o nível de confiança para comparar suas configurações.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Teste de atraso de áudio para Bluetooth e sincronização de vídeo', level: 2 },
    {
      type: 'paragraph',
      html: 'Este teste de atraso de áudio no navegador permite verificar o descompasso entre o sinal visual e o som no seu equipamento atual.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Teste inicial sem acesso ao microfone',
      badge: 'Privado e local',
      html: '<p>O teste manual funciona sem microfone. Siga o marcador ciano e ajuste o deslizador até alinhar o som com a imagem.</p>',
    },
    {
      type: 'title',
      text: 'Como testar a latência de áudio Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Selecione Bluetooth e defina um volume confortável.',
        'Execute a sequência de pulsos no seu navegador.',
        'Compare o flash visual com o clique audível.',
        'Ajuste o deslizador de alinhamento até a simultaneidade.',
        'Repita o teste ao alterar codecs ou dispositivos.',
      ],
    },
    {
      type: 'table',
      headers: ['Modo', 'Recomendado para', 'Limitação principal'],
      rows: [
        ['Alto-falantes', 'Ambientes e TV', 'Distância e reflexões da sala afetam a medição.'],
        ['Fones com fio', 'Saída analógica direta', 'O microfone pode ter dificuldade com fones fechados.'],
        ['Bluetooth', 'Dispositivos sem fio', 'O buffer do codec varia conforme o dispositivo.'],
        ['Sincronização vídeo', 'Alinhamento de tela e player', 'O reprodutor de vídeo pode adicionar seu próprio atraso.'],
      ],
    },
    {
      type: 'title',
      text: 'Medição opcional com microfone',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Com a permissão do microfone, a ferramenta mede o tempo entre o pulso e o pico acústico, calculando a mediana dos valores.',
    },
    {
      type: 'tip',
      title: 'Posicione o microfone no ponto de escuta',
      html: 'Para alto-falantes, coloque o microfone no local onde você costuma sentar.',
    },
    {
      type: 'title',
      text: 'Por que os resultados de latência variam',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O atraso de áudio vem de toda a cadeia: relógio do AudioContext, buffers do sistema, codec Bluetooth e drivers.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Interpretação dos dados',
      badge: 'Valor estimativo',
      html: '<p>Use este número para comparar configurações. Não substitui um sistema de medição profissional.</p>',
    },
  ],
  ui: {
    badge: 'Observatório de latência',
    modeLabel: 'Caminho de reprodução',
    modeSpeakers: 'Alto-falantes',
    modeWired: 'Fio',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Sincronização de vídeo',
    startTest: 'Iniciar teste',
    stopTest: 'Parar teste',
    enableMic: 'Ativar microfone',
    micEnabled: 'Microfone pronto',
    calibrationTitle: 'Correção de alinhamento',
    calibrationHint: 'Mova o deslizador até que o flash e o clique coincidam',
    calibrationEarly: 'Áudio adiantado',
    calibrationLate: 'Visual adiantado',
    calibrationCenter: 'Alinhado',
    visualLane: 'Visual',
    audioLane: 'Áudio',
    statusReady: 'Pronto',
    statusRunning: 'Sequência de pulsos em andamento',
    statusWaiting: 'Aguardando pulso',
    resultTitle: 'Leitura atual',
    latencyLabel: 'Atraso medido',
    alignmentLabel: 'Correção de alinhamento',
    confidenceLabel: 'Confiança',
    samplesLabel: 'Amostras',
    notMeasured: 'Não medido',
    manualConfidence: 'Apenas manual',
    lowConfidence: 'Confiança baixa',
    mediumConfidence: 'Confiança média',
    highConfidence: 'Confiança alta',
    noMic: 'Entrada de microfone indisponível neste navegador',
    permissionDenied: 'Permissão de microfone não concedida',
    limitationTitle: 'Considere o resultado como estimativa',
    limitationText: 'Reflexões e buffers alteram a medição. Nenhum áudio é enviado online.',
    copyReport: 'Copiar relatório',
    copied: 'Copiado',
    reset: 'Redefinir',
    safety: 'Comece com volume baixo. Pare se houver distorção.',
    pulse: 'SINCRO',
  },
};
