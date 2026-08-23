import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-atraso-audio';
const title = 'Teste de Atraso de Áudio';
const description = 'Teste o atraso de áudio percebido em alto-falantes, fones de ouvido, dispositivos Bluetooth e reprodução de vídeo com um teste de impulso local no navegador.';

const faq = [
  {
    question: 'O que exatamente este teste de atraso de áudio mede?',
    answer: 'O modo opcional de microfone estima o intervalo entre um clique agendado pelo navegador e sua captação pelo microfone. O modo manual ajuda a alinhar o sinal visual e sonoro de ouvido. Nenhum dos modos é uma medição laboratorial industrial de toda a cadeia do seu dispositivo.',
  },
  {
    question: 'Posso testar a latência Bluetooth sem microfone?',
    answer: 'Sim. Inicie a sequência de impulsos, escolha Bluetooth e mova o controle de alinhamento até que o piscar e o clique pareçam coincidentes. O resultado é salvo como uma correção de alinhamento em vez de fingir ser uma latência de hardware absoluta.',
  },
  {
    question: 'Por que o modo de microfone precisa de permissão?',
    answer: 'O navegador precisa de acesso ao microfone para ouvir o clique de teste após ele viajar pelos alto-falantes ou pelo ambiente acústico. O áudio é processado localmente no navegador e não é enviado para servidores.',
  },
  {
    question: 'Por que o resultado do microfone pode variar?',
    answer: 'Reflexões do ambiente, processamento do microfone, controle automático de ganho e buffers do sistema operacional afetam o resultado. Considere o número como uma estimativa para a configuração atual.',
  },
  {
    question: 'Qual modo de teste devo escolher?',
    answer: 'Escolha Alto-falantes para reprodução no ambiente, Fones com fio para saída direta, Bluetooth para dispositivos sem fio e Sincronização de vídeo ao checar telas e reprodutores.',
  },
  {
    question: 'O teste envia o áudio do meu microfone para um servidor?',
    answer: 'Não. O fluxo do microfone é lido localmente pelo analisador do navegador e o teste não envia gravações de áudio.',
  },
];

const howTo = [
  {
    name: 'Escolher o caminho de reprodução',
    text: 'Selecione alto-falantes, fones com fio, Bluetooth ou sincronização de vídeo para definir a configuração testada.',
  },
  {
    name: 'Começar com o impulso manual',
    text: 'Clique em Iniciar teste e ouça o clique curto enquanto observa o impulso visual ciano. Ajuste o controle até parecerem simultâneos.',
  },
  {
    name: 'Adicionar medição por microfone se útil',
    text: 'Clique em Ativar microfone, conceda a permissão, posicione o microfone onde você escuta e execute a sequência novamente.',
  },
  {
    name: 'Ler o resultado como estimativa',
    text: 'Use o atraso mediano e o nível de confiança como uma orientação para sua configuração atual.',
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
    { type: 'title', text: 'Teste de Atraso de Áudio Para Bluetooth e Sincronização de Vídeo', level: 2 },
    {
      type: 'paragraph',
      html: 'Este teste de atraso de áudio no navegador ajuda você a verificar a diferença de tempo entre um sinal visual e o som no seu dispositivo atual. É útil para fones Bluetooth, caixas de som sem fio, fones com fio e checagens de sincronia de vídeo. A ferramenta gera um clique curto localmente no navegador sem exigir download de arquivos.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Início sem acesso ao microfone',
      badge: 'Privado e local',
      html: '<p>O teste de impulso manual funciona sem microfone. Observe o marcador visual e ajuste o controle deslizante até sentir que o tom e o piscar coincidem. Isso fornece uma correção útil para sua configuração sem fingir medir latência física absoluta.</p>',
    },
    {
      type: 'title',
      text: 'Como Testar a Latência de Áudio Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Selecione Bluetooth e defina um volume confortável antes de começar.',
        'Execute a sequência de impulsos do mesmo navegador e dispositivo que você usa para reprodução.',
        'Compare o impulso visual diretamente com o clique em vez de julgar uma música longa.',
        'Mova o controle de alinhamento até que os dois sinais se encontrem e anote a correção.',
        'Repita o teste após alterar o codec, o sistema operacional, o navegador ou a distância.',
      ],
    },
    {
      type: 'table',
      headers: ['Modo', 'Recomendado para', 'Limitação principal'],
      rows: [
        ['Alto-falantes', 'Reprodução no ambiente e caixas de TV', 'A distância e as reflexões do ambiente afetam o caminho acústico.'],
        ['Fones com fio', 'Saída direta de fones', 'O microfone pode ter dificuldade para captar som em fones fechados.'],
        ['Bluetooth', 'Fones e caixas de som sem fio', 'O buffer do codec varia entre dispositivos, sistemas e aplicativos.'],
        ['Sincronização de vídeo', 'Alinhamento de tela e reprodutor', 'O reprodutor de vídeo pode adicionar seu próprio atraso de renderização.'],
      ],
    },
    {
      type: 'title',
      text: 'Medição Opcional por Microfone',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando o acesso ao microfone é ativado, a ferramenta monitora o analisador local para cada clique e registra o tempo decorrido do evento agendado até o pico acústico detectado. O resultado usa a mediana das amostras para evitar que reflexões isoladas comprometam a estimativa.',
    },
    {
      type: 'tip',
      title: 'Posicionar o microfone no local de escuta',
      html: 'Para alto-falantes, coloque o microfone onde você costuma sentar e mantenha o ambiente silencioso. Em testes de sincronia de vídeo, use a disposição habitual.',
    },
    {
      type: 'title',
      text: 'Por Que os Resultados de Atraso de Áudio Variam',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O atraso de áudio se acumula ao longo de toda a cadeia: relógio AudioContext do navegador, buffers do sistema operacional, codificação de hardware e alto-falantes. O microfone adiciona seu próprio caminho de captura. Portanto, o teste descreve a combinação atual do seu equipamento.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Trate o resultado como uma estimativa',
      badge: 'Apenas estimativa',
      html: '<p>Use o resultado para comparar configurações ou resolver problemas claros de sincronia. Ele não substitui uma especificação de fabricante ou uma medição de laboratório.</p>',
    },
  ],
  ui: {
    badge: 'Observatório de latência',
    modeLabel: 'Caminho de reprodução',
    modeSpeakers: 'Alto-falantes',
    modeWired: 'Com fio',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Sincronização de vídeo',
    startTest: 'Iniciar teste',
    stopTest: 'Parar teste',
    enableMic: 'Ativar microfone',
    micEnabled: 'Microfone pronto',
    calibrationTitle: 'Correção de alinhamento',
    calibrationHint: 'Mova o controle até que o piscar e o clique coincidam',
    calibrationEarly: 'Áudio adiantado',
    calibrationLate: 'Visual adiantado',
    calibrationCenter: 'Alinhado',
    visualLane: 'Visual',
    audioLane: 'Áudio',
    statusReady: 'Pronto',
    statusRunning: 'Sequência em andamento',
    statusWaiting: 'Aguardando impulso',
    resultTitle: 'Medição atual',
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
    limitationTitle: 'Leia o resultado como estimativa',
    limitationText: 'Reflexões do ambiente, processamento do microfone e buffers alteram o atraso medido. Nenhum áudio é enviado.',
    copyReport: 'Copiar relatório',
    copied: 'Copiado',
    reset: 'Redefinir',
    safety: 'Comece com volume baixo. Pare se houver distorção.',
    pulse: 'SINCRONIA',
  },
};
