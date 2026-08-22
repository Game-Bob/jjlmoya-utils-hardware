import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'testador-taxa-atualizacao-controle-hertz';
const title = 'Testador de Polling Rate e Hertz para Controles';
const description = 'Meça a taxa de atualização observada no navegador, o intervalo entre relatórios e a estabilidade temporal do seu controle USB ou Bluetooth.';

const faq = [
  {
    question: 'O que este testador de taxa de atualização de controle mede?',
    answer: 'Ele mede as variações de marca temporal da Gamepad API no navegador enquanto você move um analógico. O valor em Hertz exibe a frequência observada na página e não uma medição elétrica direta do barramento USB.',
  },
  {
    question: 'O navegador pode certificar se um controle roda a 1000 Hz?',
    answer: 'Ele pode verificar se as atualizações chegam de forma fluida à página, mas não pode certificar um overclocking USB de hardware. O temporizador do navegador e o sistema operacional podem agrupar relatórios.',
  },
  {
    question: 'Por que é necessário mover o analógico em círculos?',
    answer: 'O movimento circular contínuo altera ambos os eixos constantemente e gera um fluxo constante de novos estados. Deixar o analógico parado gera poucas alterações.',
  },
  {
    question: 'É possível comparar o desempenho entre USB e Bluetooth?',
    answer: 'Sim, execute o teste com a mesma duração e movimento circular em cada conexão no mesmo navegador para comparar frequência, intervalo e jitter.',
  },
];

const howTo = [
  {
    name: 'Conectar e ativar o controle',
    text: 'Conecte o controle por cabo USB ou Bluetooth e pressione qualquer botão para que o navegador o detecte via Gamepad API.',
  },
  {
    name: 'Selecionar o dispositivo e a duração',
    text: 'Escolha o controle na lista e defina uma duração de dez segundos para uma medição inicial equilibrada.',
  },
  {
    name: 'Girar um analógico continuamente',
    text: 'Inicie o teste e faça círculos suaves com o analógico esquerdo até que o anel de progresso seja concluído.',
  },
  {
    name: 'Analisar a taxa observada e a estabilidade',
    text: 'Compare os Hertz médios, o intervalo em milissegundos e o jitter em condições de teste idênticas.',
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

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas frequentes sobre polling rate de controles',
  faq,
  bibliographyTitle: 'Referências técnicas',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Meça a taxa de atualização do controle no seu navegador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta monitora as marcas temporais de alta resolução do controle selecionado enquanto o analógico está em movimento. Ela descarta oscilações anômalas, calcula o intervalo médio entre relatórios e converte para Hertz observados (1000 dividido por milissegundos). Todo o processo roda localmente.',
    },
    {
      type: 'table',
      headers: ['Leitura', 'O que este valor indica', 'O que não demonstra por si só'],
      rows: [
        ['Taxa observada', 'Frequência de relatórios lidos pela página a cada segundo', 'O polling rate elétrico direto da porta USB'],
        ['Intervalo médio', 'Tempo médio decorrido entre atualizações de marca temporal', 'A latência total de entrada até a tela'],
        ['Jitter (variação)', 'Diferença de tempo entre o 5º e o 95º percentil', 'Um defeito de hardware definitivo por si só'],
        ['Confiança', 'Volume e regularidade da amostra coletada no teste', 'Uma precisão de calibração de laboratório'],
      ],
    },
    {
      type: 'title',
      text: 'Como realizar um teste de Hertz repetível e confiável',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Feche tarefas pesadas em segundo plano, mantenha a aba focada e gire o mesmo analógico de forma constante em cada tentativa. Use o mesmo navegador e a mesma duração ao comparar cabos, adaptadores Bluetooth ou configurações do sistema.',
    },
    {
      type: 'tip',
      title: 'Compare sempre nas mesmas condições',
      html: 'Faça pelo menos dois testes após trocar de cabo ou porta USB. Um pico isolado é menos relevante do que uma taxa estável com baixo jitter.',
    },
    {
      type: 'title',
      text: 'Por que este não é um teste de latência total de entrada',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A Gamepad API lê os dados do controle após serem processados pelo sistema operacional e pelo navegador. Ela não mede a resposta elétrica do cabo nem o tempo de exibição do monitor. O intervalo observado é excelente para comparações web, mas não representa a latência total.',
    },
  ],
  ui: {
    privacyNote: 'Processamento de sinal 100% local',
    stepConnect: 'Conectar e pressionar um botão',
    stepMove: 'Girar um analógico em círculos',
    stepRead: 'Comparar frequência e estabilidade',
    deviceLabel: 'Controle ativo detectado',
    devicePlaceholder: 'Pressione um botão no controle para detectar',
    deviceFallback: 'Controle conectado',
    durationLabel: 'Janela de medição',
    durationFive: '5 seg',
    durationTen: '10 seg',
    durationTwenty: '20 seg',
    startAction: 'Iniciar teste',
    stopAction: 'Parar',
    resetAction: 'Redefinir',
    orbitInstruction: 'Gire o analógico esquerdo em círculos durante a medição',
    traceLabel: 'Traço de tempo em tempo real',
    observedRateLabel: 'Taxa observada',
    intervalLabel: 'Intervalo médio',
    jitterLabel: 'Variação (Jitter)',
    samplesLabel: 'Amostras válidas',
    confidenceLabel: 'Confiança da medição',
    confidenceLow: 'Baixa',
    confidenceMedium: 'Média',
    confidenceHigh: 'Alta',
    statusWaiting: 'Aguardando um controle compatível',
    statusReady: 'Controle pronto. Clique em iniciar com o polegar no analógico.',
    statusMeasuring: 'Registrando marcas temporais localmente',
    statusNeedsMovement: 'Gire o analógico em círculos mais amplos para coletar dados',
    statusComplete: 'Teste concluído. Repita nas mesmas condições para comparar.',
    statusUnsupported: 'Seu navegador não suporta a Gamepad API',
    statusDisconnected: 'Nenhum controle ativo. Conecte um e pressione um botão.',
    statusStopped: 'Teste interrompido. O resultado parcial permanece visível.',
    limitHeading: 'Limite técnico da medição no navegador',
    limitBody: 'Mede atualizações visíveis via Gamepad API. Não certifica overclock USB ou latência total.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'intervalos',
    progressLabel: 'Progresso da medição',
  },
};
