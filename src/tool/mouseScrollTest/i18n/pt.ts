import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-scroll-mouse';
const title = 'Teste de Scroll do Mouse';
const description = 'Diagnostique saltos da roda de scroll, saltos inversos, direção de rolagem inconsistente e sinais fracos do codificador com um teste local de roda de scroll no navegador.';

const faqData = [
  {
    question: 'O que um teste de scroll do mouse detecta?',
    answer: 'Um teste de scroll regista os eventos da roda e procura mudanças de direção instáveis, pequenos deltas fracos e rolagem inconsistente. Estes sintomas aparecem frequentemente quando o codificador da roda está sujo, gasto, desalinhado ou com ruído eletrónico.',
  },
  {
    question: 'O que é um salto de scroll inverso?',
    answer: 'Um salto inverso ocorre quando faz scroll numa direção mas o computador recebe um curto evento na direção oposta. Se se repetir durante uma rolagem constante, é um forte sinal de ressalto do codificador ou contaminação.',
  },
  {
    question: 'Este teste funciona com touchpads?',
    answer: 'Sim, mas o resultado é mais significativo para rodas físicas do mouse. Touchpads e rodas de rolagem suave criam muitos pequenos deltas, por isso o controlo de sensibilidade ajuda a separar o movimento fino intencional do jitter suspeito.',
  },
  {
    question: 'O teste carrega os meus dados do mouse?',
    answer: 'Não. O cálculo é executado localmente no seu navegador. A ferramenta apenas utiliza eventos da roda enquanto o ponteiro está dentro da área de captura.',
  },
];

const howToData = [
  {
    name: 'Coloque o ponteiro sobre o painel de captura',
    text: 'Mova o cursor para dentro da área do laboratório de scroll para que a página possa capturar eventos da roda sem mover o documento.',
  },
  {
    name: 'Faça scroll constante numa direção',
    text: 'Teste uma direção de cada vez: role lentamente para cima durante vários cliques, reinicie ou pause, depois teste para baixo separadamente. Mudanças rápidas e intencionais de direção podem criar falsas leituras de salto inverso.',
  },
  {
    name: 'Observe os saltos inversos',
    text: 'Se o contador de inversões aumentar enquanto o seu dedo ainda se move numa direção, repita o mesmo movimento para confirmar o padrão.',
  },
  {
    name: 'Ajuste a sensibilidade',
    text: 'Aumente a sensibilidade para touchpads suaves ou reduza-a para testes rigorosos de roda mecânica. A pontuação de estabilidade atualiza-se imediatamente.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Teste de Scroll do Mouse: Encontre Saltos e Inversões de Rolagem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma roda de scroll com defeito raramente falha de uma vez. Normalmente começa com pequenos sintomas: um clique faz scroll na direção errada, a página salta para cima enquanto faz scroll para baixo, ou a roda parece normal mas o navegador recebe eventos inconsistentes. Este teste de scroll regista o sinal que chega ao navegador e destaca os padrões relevantes para o diagnóstico.',
    },
    {
      type: 'paragraph',
      html: 'O objetivo não é medir quanto a página se moveu. O sinal útil é a <strong>consistência da direção</strong>. Quando roda uma roda mecânica constantemente para baixo, o fluxo de eventos deve manter-se nessa direção. Eventos curtos na direção oposta numa janela temporal estreita são suspeitos porque correspondem à forma como codificadores sujos ou gastos interpretam mal o movimento da roda.',
    },
    {
      type: 'title',
      text: 'O Que a Ferramenta Mede',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Total de cliques da roda capturados dentro do painel de teste',
        'Saltos inversos: mudanças rápidas de sinal enquanto a direção anterior ainda é recente',
        'Maior sequência limpa: quantos eventos consecutivos permaneceram numa direção consistente',
        'Último delta: direção e amplitude em bruto do evento mais recente da roda',
        'Atividade vertical versus horizontal, útil para rodas basculantes e touchpads',
      ],
    },
    {
      type: 'table',
      headers: ['Sinal', 'Padrão Saudável', 'Padrão Suspeito'],
      rows: [
        ['Roda vertical', 'Longas sequências de eventos para cima ou baixo durante rolagem constante', 'Eventos alternados cima/baixo enquanto o dedo mantém uma direção'],
        ['Basculação horizontal', 'Eventos esquerda ou direita apenas ao usar gestos de basculação', 'Movimento lateral inesperado durante o uso normal da roda vertical'],
        ['Pequenos deltas', 'Valores pequenos ocasionais em rodas suaves ou touchpads', 'Alta percentagem de valores minúsculos instáveis numa roda mecânica com entalhes'],
        ['Pontuação de estabilidade', 'Mantém-se alta em várias passagens deliberadas', 'Cai repetidamente porque ocorrem inversões no mesmo teste de direção'],
      ],
    },
    {
      type: 'title',
      text: 'Causas Comuns de Saltos da Roda de Scroll',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A maioria das rodas de mouse usa um codificador que converte a rotação em impulsos. Pó, oxidação, contactos gastos, um eixo da roda solto, problemas de filtragem do firmware ou um cabo danificado podem tornar esses impulsos inconsistentes. Quando o codificador reporta brevemente a fase errada, o sistema operativo pode receber um evento na direção oposta embora a roda continuasse a mover-se na direção original.',
    },
    {
      type: 'table',
      headers: ['Sintoma', 'Causa Provável', 'Próxima Verificação'],
      rows: [
        ['A página salta para cima ao fazer scroll para baixo', 'Ressalto do codificador ou sujidade no mecanismo', 'Faça uma passagem lenta para baixo e observe o contador de inversões'],
        ['Apenas uma aplicação faz scroll mal', 'Suavização da aplicação, modo zoom ou atalho de mouse personalizado', 'Teste no navegador e compare com outra aplicação'],
        ['A roda funciona após soprar ar, depois falha novamente', 'Movimento temporário de detritos ou contactos do codificador gastos', 'Repita após alguns minutos de uso normal'],
        ['Aparece movimento horizontal inesperado', 'Ruído da roda basculante, gesto do touchpad ou mapeamento do driver', 'Verifique o medidor do eixo horizontal enquanto faz scroll vertical'],
        ['O mouse sem fios faz scroll errático', 'Bateria fraca, distância do recetor ou interferência', 'Repita o teste com bateria nova e recetor próximo do mouse'],
      ],
    },
    {
      type: 'title',
      text: 'Como Testar de Forma Fiável',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Coloque o ponteiro dentro do painel de captura antes de fazer scroll para que a página impeça o movimento normal da página',
        'Teste uma direção de cada vez: faça scroll lentamente para cima durante 10-20 cliques sem mudar de direção',
        'Reinicie ou pause, depois repita a mesma passagem unidirecional para baixo',
        'Não alterne rapidamente entre cima e baixo, porque mudanças rápidas intencionais podem parecer saltos inversos',
        'Se aparecerem inversões, repita a direção problemática várias vezes para confirmar que é reprodutível',
        'Compare com outro mouse no mesmo computador se precisar de separar hardware de software',
      ],
    },
    {
      type: 'title',
      text: 'Interpretar a Pontuação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A pontuação de estabilidade é um resumo rápido. Uma pontuação alta significa que a ferramenta viu direção consistente e poucos deltas minúsculos incertos. Uma pontuação baixa não prova automaticamente que o mouse está avariado, especialmente em touchpads ou rodas suaves de alta resolução, mas saltos inversos repetidos durante um teste lento unidirecional são uma forte evidência de um problema real na roda.',
    },
    {
      type: 'table',
      headers: ['Resultado', 'Significado', 'Ação Recomendada'],
      rows: [
        ['Sem inversões e longas sequências limpas', 'O sinal da roda parece consistente', 'Continue a testar apenas se os sintomas aparecerem no uso real'],
        ['Uma inversão isolada', 'Pode ser mudança acidental de direção ou um evento ruidoso', 'Repita a mesma direção lentamente'],
        ['Várias inversões na mesma passagem', 'Provável ressalto do codificador, sujidade ou desgaste da roda', 'Repita o teste noutro computador e documente o resultado'],
        ['Muitos eventos de jitter mas sem inversões', 'A sensibilidade pode ser demasiado baixa para o tipo de dispositivo', 'Aumente a sensibilidade para touchpads ou dispositivos de rolagem suave'],
        ['Eventos horizontais durante o uso da roda vertical', 'Possível ruído da roda basculante ou mapeamento do driver', 'Desative o software personalizado do mouse e repita o teste'],
      ],
    },
    {
      type: 'title',
      text: 'Roda Mecânica vs Touchpad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma roda mecânica com entalhes produz normalmente passos direcionais claros. Um touchpad ou uma roda de rotação livre pode produzir muitos pequenos deltas porque o sistema operativo aplica rolagem suave. É por isso que esta ferramenta inclui controlo de sensibilidade: aumentá-lo ignora movimentos minúsculos e faz o teste focar-se em mudanças de direção suficientemente grandes para serem relevantes.',
    },
    {
      type: 'title',
      text: 'O Que Tentar Antes de Substituir o Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Teste noutro navegador para excluir um manipulador de roda específico da página',
        'Desative o software do fabricante do mouse, a aceleração de scroll ou camadas de macro durante o diagnóstico',
        'Para mouses sem fios, use uma bateria nova e aproxime o recetor',
        'Limpe ao redor da roda com ar comprimido enquanto o mouse está desligado',
        'Se o mouse estiver na garantia, registe o padrão de inversão repetido como evidência',
      ],
    },
    {
      type: 'paragraph',
      html: 'Os testes baseados no navegador não podem inspecionar o codificador eletricamente, mas podem mostrar exatamente o que o seu software normal recebe. Se o navegador receber eventos da roda na direção errada durante uma rolagem cuidadosa e unidirecional, outras aplicações também os podem receber.',
    },
  ],
  ui: {
    badge: 'Laboratório de Sinal da Roda',
    captureTitle: 'Faça scroll dentro do painel de sinal',
    captureHint: 'Use passagens constantes numa direção para expor saltos inversos',
    focusLockTitle: 'Ativar esta zona de scroll',
    focusLockText: 'Clique nesta zona e faça scroll aqui. A página não se moverá enquanto esta zona estiver ativa.',
    stabilityScore: 'Pontuação de estabilidade',
    statusIdle: 'Faça scroll sobre o painel para começar a medir a consistência da roda',
    statusClean: 'A direção da roda está estável nas amostras capturadas',
    statusWarning: 'Saltos inversos detetados durante o scroll recente',
    statusMixed: 'Muitos pequenos deltas detetados; ajuste a sensibilidade para este dispositivo',
    directionNote: 'Teste uma direção de cada vez. Alternar rapidamente entre cima e baixo pode criar falsos saltos inversos.',
    totalTicks: 'Cliques',
    reversals: 'Inversões',
    longestRun: 'Melhor sequência',
    lastDelta: 'Último delta',
    verticalAxis: 'Vertical',
    horizontalAxis: 'Horizontal',
    dominantDirection: 'Última direção',
    upward: 'Cima',
    downward: 'Baixo',
    leftward: 'Esquerda',
    rightward: 'Direita',
    noDirection: 'Sem movimento',
    noDataValue: '-',
    sensitivityLabel: 'Sensibilidade ao jitter',
    sensitivityUnit: 'delta',
    reset: 'Reiniciar',
    logTitle: 'Registo de eventos da roda',
    emptyLog: 'Faça scroll sobre o painel com um movimento lento e constante da roda.',
    cleanEvent: 'limpo',
    reversalEvent: 'salto inverso',
    jitterEvent: 'delta minúsculo',
  },
};
