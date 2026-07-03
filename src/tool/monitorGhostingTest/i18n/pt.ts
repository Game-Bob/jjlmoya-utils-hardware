import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-ghosting-monitor';
const title = 'Teste de Ghosting do Monitor';
const description =
  'Teste o ghosting do monitor, borrao de movimento, rastros de overdrive e comportamento de resposta de pixels com barras moveis, texto e padroes de movimento em tela cheia.';

const faqData = [
  {
    question: 'O que e ghosting do monitor?',
    answer:
      'Ghosting do monitor e um rastro visivel que segue objetos em movimento quando os pixels nao conseguem fazer a transicao com rapidez suficiente. E comum em paineis LCD lentos, modos overdrive mal ajustados e monitores operando abaixo da taxa de atualizacao ideal.',
  },
  {
    question: 'Este teste pode medir o tempo de resposta exato?',
    answer:
      'Um teste de navegador nao pode substituir equipamentos de laboratorio como uma camera de perseguicao ou fotodiodo, mas pode revelar artefatos de movimento visiveis, comparar configuracoes do monitor e ajuda-lo a escolher o modo overdrive menos borrado.',
  },
  {
    question: 'Por que o overdrive as vezes cria rastros brilhantes?',
    answer:
      'O overdrive força mais os pixels para acelerar as transicoes. Se ultrapassar o tom alvo, voce pode ver ghosting inverso: um halo brilhante ou colorido atras dos objetos em movimento.',
  },
  {
    question: 'Devo testar em fundo escuro ou claro?',
    answer:
      'Ambos. Alguns paineis mancham mais as transicoes escuro-para-cinza do que as claro-para-escuro, entao mudar o fundo revela artefatos que um unico padrao pode esconder.',
  },
];

const howToData = [
  {
    name: 'Ajuste a velocidade de movimento',
    text: 'Comece proximo a velocidade padrao e aumente ate que os rastros fiquem faceis de inspecionar sem perder o objeto de vista.',
  },
  {
    name: 'Altere a forca do rastro',
    text: 'Use o controle de rastro para tornar a persistencia mais facil de ver ao comparar configuracoes do monitor.',
  },
  {
    name: 'Teste varios fundos',
    text: 'Alterne entre fundos escuro, claro e grade para revelar manchas pretas, ghosting inverso e halos de overdrive.',
  },
  {
    name: 'Compare configuracoes de overdrive',
    text: 'Abra o OSD do monitor e teste os modos Desligado, Normal, Rapido e Extremo. Escolha o modo com o movimento mais nitido e menos halos.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
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
      text: 'Teste de Ghosting do Monitor: Verifique Borrao de Movimento e Resposta de Pixels',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O ghosting do monitor aparece quando objetos em movimento deixam um rastro visivel. Pode fazer os jogos parecerem manchados, tornar o texto de rolagem mais dificil de ler e fazer um monitor de alta taxa de atualizacao parecer pior do que o esperado. Este teste de ghosting oferece barras moveis, texto e padroes de alto contraste para comparar modos overdrive, taxas de atualizacao, fundos e velocidades sem instalar software.',
    },
    {
      type: 'paragraph',
      html: 'O teste foi projetado para inspecao pratica. Nao pretende fornecer tempos de resposta cinza-a-cinza de nivel laboratorial, mas ajuda a responder a pergunta que a maioria dos usuarios realmente tem: <strong>qual configuracao do monitor parece mais limpa aos meus olhos nesta tela?</strong>',
    },
    {
      type: 'title',
      text: 'Como o Ghosting se Apresenta',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Uma sombra escura seguindo o objeto em movimento, frequentemente chamada de mancha preta',
        'Um halo palido ou colorido atras do objeto, frequentemente causado por overdrive excessivo',
        'Um longo rastro translucido que faz as bordas parecerem suaves',
        'Varias copias tenues do objeto, especialmente em monitores com resposta lenta de pixels',
        'Nitidez desigual entre fundos escuro, claro e grade',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Borrao de Movimento e Ghosting Inverso',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artefato', 'O Que Voce Ve', 'Causa Comum'],
      rows: [
        ['Ghosting', 'Uma copia mais escura ou desbotada segue o objeto', 'A resposta dos pixels e muito lenta para a velocidade do movimento'],
        ['Borrao de movimento', 'Todo o objeto em movimento parece suave', 'Borrao sample-and-hold, baixa taxa de atualizacao ou borrao de rastreamento ocular'],
        ['Ghosting inverso', 'Halo brilhante ou rastros de ultrapassagem coloridos', 'A configuracao de overdrive esta muito agressiva'],
        ['Mancha preta', 'Cenas escuras deixam sombras pesadas', 'As transicoes escuras dos paineis VA sao lentas'],
        ['Gagueira', 'O movimento salta em vez de fluir', 'Frame pacing, FPS baixo ou carga do navegador/sistema'],
      ],
    },
    {
      type: 'title',
      text: 'Um Fluxo de Trabalho de Diagnostico Pratico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Comece com o monitor configurado em sua resolucao nativa e na maior taxa de atualizacao estavel. Se possui um monitor 144Hz, 165Hz, 240Hz ou 360Hz, confirme que o sistema operacional esta realmente usando esse modo antes de julgar a nitidez do movimento. Abra o teste em tela cheia, escolha o alvo barras de nitidez e observe a borda traseira do objeto em movimento. A borda traseira e onde os rastros fantasmas, manchas escuras e halos brilhantes de overdrive sao mais faceis de comparar.',
    },
    {
      type: 'list',
      items: [
        'Use fundo escuro para revelar manchas pretas e transicoes escuras lentas',
        'Use fundo claro para revelar halos de overdrive coloridos',
        'Use fundo de grade para inspecionar a nitidez das bordas contra linhas de referencia de alto contraste',
        'Use o alvo de texto quando seu problema real for rolagem borrada ou texto dificil de ler em movimento',
        'Use tela cheia antes de julgar um monitor, porque a borda do navegador e a escala podem distrair dos artefatos de movimento',
        'Aumente a velocidade somente depois que conseguir seguir o objeto confortavelmente',
        'Compare uma configuracao do monitor por vez para saber o que mudou',
      ],
    },
    {
      type: 'title',
      text: 'Escolhendo a Melhor Configuracao de Overdrive para Seu Monitor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A maioria dos monitores gamer inclui uma configuracao de overdrive chamada Desligado, Normal, Rapido, Mais Rapido, Extremo, Tempo de Resposta ou Trace Free. A opcao mais rapida nem sempre e a melhor. Uma configuracao moderada geralmente oferece o melhor equilibrio: menos borrao que Desligado, mas menos halos que Extremo.',
    },
    {
      type: 'table',
      headers: ['Modo Overdrive', 'Resultado Esperado', 'Recomendacao'],
      rows: [
        ['Desligado', 'Menos ultrapassagem, mas mais borrao', 'Linha de base util para comparacao'],
        ['Normal', 'Reducao moderada de borrao', 'Geralmente melhor para uso diario'],
        ['Rapido', 'Movimento mais nitido com algum risco de halo', 'Bom se os rastros permanecerem limpos'],
        ['Extremo', 'Menor tempo de resposta alegado, maior risco de ultrapassagem', 'Evitar se rastros inversos brilhantes aparecerem'],
        ['Adaptativo/Variavel', 'O comportamento muda com a taxa de atualizacao', 'Teste novamente na faixa de FPS que voce realmente usa'],
      ],
    },
    {
      type: 'title',
      text: 'O Que Mudar Quando o Teste Parece Ruim',
      level: 3,
    },
    {
      type: 'table',
      headers: ['O Que Voce Ve', 'Causa Provavel', 'O Que Tentar'],
      rows: [
        ['Longo rastro escuro atras do alvo', 'Transicoes de pixels escuros lentas ou overdrive fraco', 'Tente um modo overdrive mais forte, teste novamente em fundos escuro e grade'],
        ['Halo brilhante ou contorno colorido atras do alvo', 'Ultrapassagem de overdrive ou ghosting inverso', 'Reduza o overdrive um nivel e compare na sua taxa de atualizacao real'],
        ['O movimento parece saltitante em vez de borrado', 'Frame pacing, carga do navegador ou incompatibilidade de taxa', 'Feche apps pesados, ative tela cheia, confirme a taxa do SO'],
        ['O texto fica ilegivel durante o movimento', 'Borrao sample-and-hold, baixa taxa ou resposta lenta', 'Aumente a taxa, teste padrao de texto, compare modos overdrive'],
        ['Artefatos mudam quando o FPS muda', 'Comportamento VRR ou overdrive adaptativo', 'Teste novamente na faixa de FPS em que voce realmente joga ou trabalha'],
      ],
    },
    {
      type: 'title',
      text: 'Por Que a Taxa de Atualizacao e Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Taxas de atualizacao mais altas reduzem o tempo que cada quadro permanece visivel, o que pode tornar o movimento mais nitido. No entanto, a taxa de atualizacao por si so nao elimina o ghosting. Um monitor de 240Hz com transicoes de pixels lentas ainda pode manchar, enquanto um painel de 144Hz bem ajustado pode parecer mais limpo do que um painel mais rapido mal ajustado.',
    },
    {
      type: 'table',
      headers: ['Taxa de Atualizacao', 'Tempo de Quadro', 'O Que Esperar'],
      rows: [
        ['60Hz', '16,7 ms', 'Facil ver o borrao sample-and-hold e o movimento mais lento'],
        ['120Hz', '8,3 ms', 'Muito mais suave, mas a resposta dos pixels ainda importa'],
        ['144Hz', '6,9 ms', 'Linha de base gamer comum para nitidez de movimento'],
        ['240Hz', '4,2 ms', 'Muito suave se o ajuste de resposta for bom'],
        ['360Hz', '2,8 ms', 'Exigente: o mau ajuste de overdrive se torna obvio'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Gaming e Testes no Mundo Real',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A taxa de atualizacao variavel pode mudar o comportamento de um monitor porque alguns monitores usam ajustes de overdrive diferentes em taxas de atualizacao diferentes. Se o seu problema aparece apenas em jogos, nao teste apenas na taxa maxima do desktop. Teste novamente na faixa de FPS em que voce realmente joga, especialmente em torno de 60 FPS, 90 FPS, 120 FPS e qualquer limite de quadros que voce use.',
    },
    {
      type: 'list',
      items: [
        'Se o ghosting e pior em FPS baixo, o monitor pode ter um ajuste fraco de overdrive variavel',
        'Se halos aparecem apenas em taxas altas, o modo overdrive pode estar muito agressivo',
        'Se o movimento gagueja enquanto o rastro permanece curto, o problema provavelmente e frame pacing em vez de resposta de pixels',
        'Se a tela cheia parece diferente do modo janela, verifique a escala do navegador, a escala do SO e o comportamento do compositor',
      ],
    },
    {
      type: 'title',
      text: 'Solucionando Resultados Ruins',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Confirme se o cabo do monitor suporta a taxa de atualizacao alvo',
        'Desative a suavizacao de movimento, Black Frame Insertion ou modos MPRT ao comparar o overdrive normal',
        'Teste novamente apos colocar o monitor em sua resolucao nativa',
        'Use tela cheia ou reduza o zoom do navegador se o movimento parecer inconsistente',
        'Feche aplicativos pesados em segundo plano se a animacao gaguejar',
        'Teste o mesmo padrao apos alterar as configuracoes de taxa de atualizacao no painel de controle da GPU',
        'Tente outro cabo ou porta se o monitor nao conseguir atingir a taxa anunciada',
        'Teste novamente com VRR ligado e desligado quando o ghosting mudar entre desktop e jogos',
      ],
    },
    {
      type: 'title',
      text: 'Limites de um Teste de Ghosting Online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um teste de ghosting baseado em navegador depende do tempo de animacao do navegador, carga da GPU, composicao do sistema operacional e sua configuracao de exibicao. E excelente para comparacao visual, mas medicoes exatas de tempo de resposta exigem equipamentos especializados, como cameras de perseguicao, fotodiodos ou metodos baseados em osciloscopio. Use este teste para escolher configuracoes e identificar artefatos obvios, nao para certificar as alegacoes de tempo de resposta do fabricante.',
    },
  ],
  ui: {
    badge: 'Nitidez de Movimento',
    speedLabel: 'Velocidade de movimento',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Forca do rastro',
    backgroundLabel: 'Fundo',
    backgroundDark: 'Escuro',
    backgroundLight: 'Claro',
    backgroundGrid: 'Grade',
    patternLabel: 'Alvo de teste',
    patternBars: 'Barras de nitidez',
    patternText: 'Bloco de texto',
    patternUfo: 'OVNI',
    pursuitLabel: 'Guia de perseguicao',
    pursuitOn: 'Ativado',
    pursuitOff: 'Desativado',
    fullscreen: 'Tela cheia',
    exitFullscreen: 'Sair da tela cheia',
    pause: 'Pausar',
    resume: 'Retomar',
    targetText: 'MOVIMENTO',
    estimatedBlur: 'borrao estimado',
    frameStep: 'Passo de quadro',
    persistence: 'Persistencia',
    sampleCount: 'Amostras de rastro',
    instructions: 'Observe a borda traseira do alvo em movimento enquanto altera velocidade, forca do rastro, fundo, modo tela cheia e configuracoes de overdrive do monitor.',
    reset: 'Redefinir',
  },
};
