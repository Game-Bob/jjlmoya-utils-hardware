import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-fuga-retroiluminacao-blooming';
const title = 'Teste de Fuga de Retroiluminação e Blooming';
const description =
  'Execute um teste de fuga de retroiluminação com ecrã negro puro em ecrã completo e um teste de blooming com círculo branco arrastável para OLED, Mini LED, IPS, VA, monitores, portáteis e TVs.';

const faqData = [
  {
    question: 'Como testo fugas de retroiluminação online?',
    answer:
      'Desligue as luzes da sala, coloque o brilho no máximo, limpe o ecrã, abra o teste negro puro em ecrã completo, espere o cursor desaparecer e inspecione os cantos e bordas à procura de fugas de luz fixas.',
  },
  {
    question: 'Qual é a diferença entre fuga de retroiluminação e glow IPS?',
    answer:
      'A fuga de retroiluminação é geralmente uma mancha brilhante fixa perto da moldura causada por pressão no painel ou montagem imperfeita. O glow IPS muda muito com o ângulo de visão e a posição dos olhos, especialmente nos cantos.',
  },
  {
    question: 'Como é o blooming num televisor ou monitor Mini LED?',
    answer:
      'O blooming é um halo visível ao redor de um objeto brilhante sobre fundo negro. Aparece quando uma zona de local dimming ilumina uma área maior que o próprio objeto.',
  },
  {
    question: 'Os painéis OLED podem ter fugas de retroiluminação?',
    answer:
      'Os painéis OLED não usam retroiluminação tradicional, pelo que não devem mostrar fugas de luz típicas de LCD. Podem ainda apresentar problemas de uniformidade perto do preto, tonalidades, bandas verticais ou pretos elevados devido às definições da fonte ou do ecrã.',
  },
  {
    question: 'Devo devolver um monitor com fuga de luz?',
    answer:
      'A decisão de devolução depende da gravidade, tipo de painel, preço e política de garantia. Um canto brilhante visível durante filmes ou jogos normais é mais grave do que uma mancha ténue apenas visível numa foto de longa exposição.',
  },
];

const howToData = [
  {
    name: 'Preparar a sala',
    text: 'Desligue as lâmpadas, feche as cortinas, limpe o ecrã e deixe os seus olhos adaptarem-se por um minuto para que o pó e os reflexos não pareçam defeitos do painel.',
  },
  {
    name: 'Aumentar o brilho do ecrã',
    text: 'Ajuste o brilho para 100 por cento ou para o modo HDR que pretende inspecionar. Desative sensores de luz ambiente agressivos durante o teste.',
  },
  {
    name: 'Executar o teste negro',
    text: 'Inicie o modo de fuga de retroiluminação. A página entra em ecrã completo e mostra preto exato. Inspecione o bisel, os cantos e quaisquer manchas fixas.',
  },
  {
    name: 'Executar o teste de blooming',
    text: 'Inicie o modo de local dimming e arraste o círculo branco pelo ecrã. Observe halos, escurecimento retardado, zonas em forma de grelha e pretos elevados.',
  },
  {
    name: 'Sair de forma limpa',
    text: 'Pressione Escape para sair do ecrã completo nativo. A interface de configuração retorna e o estado do teste é reposto.',
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

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: 'Teste de Fuga de Retroiluminação Online: O Que Procurar num Novo Monitor ou TV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um <strong>teste de fuga de retroiluminação online</strong> é mais útil durante o período de devolução de um novo monitor, portátil gaming ou televisor. O teste mostra um campo de ecrã completo gerado pelo navegador em <code>#000000</code> para que a retroiluminação LCD seja a única fonte possível de luz indesejada. Se o painel, a pilha de difusores, a pressão do bisel ou a montagem deixarem passar luz, verá geralmente cantos mais claros, bordas nubladas ou manchas que permanecem na mesma posição física.',
    },
    {
      type: 'paragraph',
      html: 'Utilize o teste com expectativas realistas. Os painéis LCD precisam de retroiluminação, e variações muito pequenas podem ser normais, especialmente em ecrãs IPS e VA económicos. A questão prática não é se uma foto de telemóvel de longa exposição pode exagerar uma mancha. A questão é se a fuga de luz é visível aos seus olhos durante filmes escuros, ecrãs de carregamento de jogos, cenas noturnas, fundos de ambiente de trabalho pretos ou vídeos com barras negras.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Faça isto antes de julgar o painel',
      badge: 'Configuração',
      html: 'Desligue as luzes da sala, limpe o vidro, ajuste o brilho para 100 por cento, desative os sensores de luz ambiente e aguarde alguns segundos para os seus olhos se adaptarem. Reflexos, impressões digitais e o cursor do rato podem criar falsos positivos durante uma inspeção de uniformidade de preto.',
    },
    {
      type: 'list',
      items: [
        'Verifique as bordas superior e inferior onde a pressão do bisel cria frequentemente brilhos fixos',
        'Inspecione os quatro cantos à procura de fugas de luz triangulares ou em forma de meia-lua',
        'Mova ligeiramente a cabeça para separar o brilho de ângulo de visão da fuga fixa',
        'Tire notas primeiro com os seus olhos, porque as câmaras podem sobre-expor ecrãs pretos',
        'Volte a testar depois de o painel ter aquecido durante 15 a 30 minutos se o resultado for duvidoso',
      ],
    },
    {
      type: 'title',
      text: 'Fuga de Retroiluminação, Glow IPS, Clouding e Uniformidade de Preto',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Problema', 'O que vê', 'Como se comporta', 'Painéis mais comuns'],
      rows: [
        ['Fuga de retroiluminação', 'Mancha brilhante fixa na borda ou canto', 'Permanece no mesmo local ao mover a cabeça', 'IPS, VA, TN LCD'],
        ['Glow IPS', 'Brilho leitoso nos cantos em imagens escuras', 'Muda muito com o ângulo de visão e distância', 'IPS LCD'],
        ['Clouding', 'Grandes áreas nubladas irregulares sobre preto', 'Geralmente fixo, às vezes reduzido com menor brilho', 'TVs e monitores LCD edge-lit'],
        ['Esmagamento de pretos VA', 'Detalhes escuros desaparecem ou arrastam em movimento', 'Depende do conteúdo e da transição de pixels', 'VA LCD'],
        ['Banding OLED perto do preto', 'Bandas verticais ou horizontais perto do preto', 'Visível em cinza perto do preto, não em preto puro', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'O erro mais comum é chamar a qualquer artefacto visível no escuro fuga de retroiluminação. O <strong>glow IPS</strong> é ótico: torna-se mais forte quando se senta perto, olha para o painel fora do eixo ou observa os cantos de um ângulo acentuado. A verdadeira fuga de retroiluminação é mecânica ou de montagem: fica presa à mesma área do bisel mesmo que a posição dos seus olhos mude. Esta distinção é importante porque muitos vendedores tratam fugas graves de forma diferente do glow IPS normal.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Ângulos de visão amplos, brilho frequente nos cantos e fugas visíveis se a moldura pressionar o painel de forma desigual.',
          points: ['Melhor verificado à sua distância de visualização normal', 'O glow muda com a posição da cabeça', 'Fugas nas bordas podem ser relevantes para a garantia se graves'],
        },
        {
          title: 'VA',
          description: 'Maior contraste nativo, geralmente menos glow tipo IPS, mas pode mostrar clouding e transições escuras lentas.',
          points: ['O preto parece mais profundo que o IPS', 'A uniformidade ainda pode variar por unidade', 'O blooming aparece em modelos com local dimming'],
        },
        {
          title: 'OLED',
          description: 'Sem retroiluminação LCD, pelo que o preto puro deve estar desligado, mas a uniformidade perto do preto e a tonalidade ainda podem importar.',
          points: ['O preto puro deve desaparecer numa sala escura', 'Teste slides cinza separadamente para banding', 'Evite confundir preto elevado da fonte com fuga do painel'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Como Executar um Teste de Preto Puro Fiável',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O modo de teste preto remove deliberadamente a interface normal. Uma vez iniciado, o painel de vidro desaparece, os eventos de ponteiro são desativados na interface de configuração, a página solicita ecrã completo nativo e a camada de teste utiliza preto exato. Após dois segundos sem movimento do rato, o cursor é ocultado para não criar um ponto de referência branco nem contaminar uma inspeção em sala escura.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'cor de fundo do teste' },
        { value: '2 s', label: 'tempo limite de inatividade do cursor' },
        { value: '100%', label: 'brilho recomendado' },
        { value: '0', label: 'recursos externos em modo de teste' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificação do teste preto',
      items: [
        'Use a resolução nativa e desative o zoom do navegador se o ecrã estiver a escalar de forma estranha',
        'Ajuste o brilho SDR suficientemente alto para revelar defeitos, ou teste HDR no modo exato que planeia usar',
        'Inspecione primeiro da sua posição de visualização normal, depois de um pouco mais longe',
        'Não julgue a partir de uma foto de telemóvel a menos que a exposição esteja bloqueada e se pareça com o que os seus olhos veem',
        'Pressione Escape para sair do ecrã completo e repita o teste após alterar as definições do monitor',
      ],
    },
    {
      type: 'tip',
      title: 'Fotos de câmara podem fazer bons painéis parecerem terríveis',
      html: 'A exposição automática do telemóvel tenta clarear um ecrã preto, o que exagera o brilho ténue e pode transformar o comportamento normal do LCD numa imagem dramática. Se precisar de provas para a garantia, bloqueie a exposição manualmente e inclua uma nota a descrever se o problema é visível durante conteúdo real.',
    },
    {
      type: 'title',
      text: 'Teste de Blooming com Local Dimming para Ecrãs Mini LED e FALD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O modo <strong>teste de blooming para monitor</strong> coloca um círculo branco puro sobre um fundo preto puro. Num Mini LED, LCD FALD ou TV com local dimming, esse pequeno objeto força uma ou mais zonas de retroiluminação a iluminarem-se enquanto as zonas vizinhas tentam permanecer pretas. Se o algoritmo de dimming, o número de zonas, o difusor ou o contraste do painel não conseguirem isolar a luz, vê um halo ao redor do círculo.',
    },
    {
      type: 'paragraph',
      html: 'Arrastar o círculo é importante. O blooming estático é apenas uma parte da história. Um destaque em movimento revela atraso de dimming, transições de zona, bombeamento, campos estelares esmagados, legendas elevadas e comportamento em forma de grelha. Um bom sistema de local dimming deve manter o objeto brilhante enquanto minimiza a névoa ao redor e evita manchas brilhantes atrasadas após o círculo se afastar.',
    },
    {
      type: 'table',
      headers: ['Artefacto', 'O que observar', 'Explicação provável'],
      rows: [
        ['Halo', 'Brilho suave ao redor do círculo branco', 'A zona de local dimming é maior que o objeto brilhante'],
        ['Grelha de zonas', 'Blocos quadrados ou retangulares aparecem ao redor do movimento', 'Baixo número de zonas ou layout Mini LED visível'],
        ['Atraso de dimming', 'Mancha brilhante segue o círculo com atraso', 'O algoritmo responde lentamente ao movimento'],
        ['Elevação de preto', 'Todo o ecrã fica cinza quando o círculo aparece', 'Dimming global ou controlo de contraste fraco'],
        ['Bloom de legendas', 'Grande névoa ao redor de texto branco pequeno ou UI', 'Brilho agressivo com zonas locais limitadas'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'Melhor caso de uso',
      html: 'Ligue o portátil ou consola à TV cara que realmente usa, abra este testador de local dimming no navegador e arraste o destaque pelo tamanho exato do ecrã. Uma pequena pré-visualização incorporada não consegue stressar as zonas de local dimming como um ecrã completo em preto e branco.',
    },
    {
      type: 'title',
      text: 'Expectativas por Tipo de Painel: OLED, Mini LED, IPS e VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'O que cada tecnologia costuma fazer bem e mal',
      items: [
        {
          pro: 'OLED desliga pixels individuais para preto verdadeiro e não deve mostrar fugas de retroiluminação LCD.',
          con: 'OLED pode mostrar banding perto do preto, tonalidades, limitação automática de brilho e risco de burn-in sob conteúdo estático.',
        },
        {
          pro: 'Mini LED pode atingir alto brilho HDR e reduzir a névoa em grandes áreas em comparação com LCD edge-lit.',
          con: 'Mini LED ainda usa zonas, pelo que objetos brilhantes pequenos podem causar blooming quando o número de zonas ou a qualidade do algoritmo são limitados.',
        },
        {
          pro: 'IPS é estável para cor e ângulo de visão, o que é útil para trabalho de secretária e visualização partilhada.',
          con: 'O glow IPS e as fugas nas bordas são queixas comuns em cenas escuras, especialmente quando se senta perto.',
        },
        {
          pro: 'VA frequentemente tem um contraste nativo muito melhor que o IPS e pode parecer mais profundo em salas escuras.',
          con: 'VA pode mostrar arrastamento escuro, clouding ou blooming nas versões com local dimming.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fuga de retroiluminação', definition: 'Luz indesejada que escapa através da pilha LCD, geralmente perto do bisel, visível em imagens pretas.' },
        { term: 'Blooming', definition: 'Um halo ao redor de um objeto brilhante causado por zonas de local dimming que iluminam uma área maior que o objeto.' },
        { term: 'Glow IPS', definition: 'Clareamento leitoso dependente do ângulo em cenas escuras nos painéis IPS.' },
        { term: 'FALD', definition: 'Full Array Local Dimming, escurecimento local de matriz completa, onde a retroiluminação LCD é dividida em zonas controladas independentemente.' },
        { term: 'Mini LED', definition: 'Uma retroiluminação LCD que utiliza muitos LEDs pequenos para aumentar o número de zonas e o brilho HDR.' },
        { term: 'Uniformidade de preto', definition: 'A igualdade com que um ecrã reproduz conteúdo preto ou perto do preto em toda a superfície do ecrã.' },
      ],
    },
    {
      type: 'title',
      text: 'Quando um Defeito É Grave o Suficiente para Devolver',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Sinais de alarme no período de devolução',
      badge: 'Garantia',
      html: 'Considere documentar rapidamente o problema se um canto brilhante for visível da distância de visualização normal, a mesma mancha o distrair em filmes ou jogos, o local dimming criar halos óbvios ao redor de legendas ou um ecrã HDR caro tiver um desempenho pior do que as análises típicas para o mesmo modelo.',
    },
    {
      type: 'paragraph',
      html: 'Uma decisão justa usa conteúdo real e o escalão do produto. Um monitor IPS de escritório barato pode ter um brilho ligeiro nos cantos que é normal para a classe. Um monitor Mini LED premium ou uma TV de topo devem controlar os níveis de preto e o blooming muito melhor. Se o defeito for óbvio em filmes com barras negras, menus escuros de jogos, cenas espaciais ou trabalho de secretária, não é apenas uma curiosidade de laboratório.',
    },
    {
      type: 'list',
      items: [
        'Verifique o mesmo conteúdo noutro ecrã para excluir a fonte',
        'Reponha as definições de imagem antes de assumir que o painel está defeituoso',
        'Experimente local dimming baixo, médio e alto porque os algoritmos diferem por modo',
        'Registe o brilho, modo HDR, modo de local dimming e distância de visualização nas suas notas',
        'Se devolver, descreva o que os seus olhos veem em vez de enviar apenas fotos sobre-expostas',
      ],
    },
    {
      type: 'title',
      text: 'Porque É Que Este Teste Usa Código em Vez de Vídeo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Os ficheiros de vídeo podem introduzir artefactos de compressão, trabalho de descodificação do navegador, buffering, conversão de gama de cores e variações de pacing de frames. Um teste de defeitos de painel não deve depender de um ficheiro MP4. Esta ferramenta utiliza apenas HTML e CSS do lado do cliente para os estados de teste: preto exato para o fundo e branco exato para o círculo em movimento. Isto mantém a carga de trabalho baixa e evita atividade de rede após o carregamento da página.',
    },
    {
      type: 'paragraph',
      html: 'A posição do círculo de blooming é aplicada através de <code>requestAnimationFrame</code>, que sincroniza as atualizações visuais com o ciclo de atualização do navegador. A entrada de ponteiro, rato e toque atualiza as coordenadas alvo, depois o próximo frame de animação move o círculo branco. Isto faz com que o arrasto pareça consistente em monitores de alto refresh, tablets e telemóveis OLED sem fazer trabalho desnecessário a cada evento de entrada bruto.',
    },
    {
      type: 'message',
      title: 'Nota de privacidade e desempenho',
      ariaLabel: 'Nota de privacidade e desempenho',
      html: 'Os estados de teste ativos não precisam de rastreamento, vídeos, imagens remotas ou envios de medições. São intencionalmente simples para que portáteis antigos, navegadores de TV e configurações de sala de estar possam stressar o painel do ecrã em vez do CPU.',
    },
    {
      type: 'title',
      text: 'Resolução de Problemas com Resultados Incorretos',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Sintoma durante o teste', 'Causa possível', 'O que tentar'],
      rows: [
        ['O ecrã preto não é verdadeiramente preto', 'Gama RGB limitada, definição de preto elevado, mapeamento tonal HDR ou sobreposição do navegador', 'Defina saída RGB completa, desative o contraste dinâmico e confirme que nenhum filtro noturno do SO está ativo'],
        ['O cursor do rato permanece visível', 'O movimento reiniciou o temporizador de inatividade ou o navegador bloqueou brevemente a ocultação do cursor', 'Pare de mover o rato por dois segundos ou use um telecomando/teclado'],
        ['O ecrã completo não inicia', 'O navegador negou ecrã completo fora de um clique direto ou limitação do navegador da TV', 'Pressione o botão iniciar novamente ou use o atalho de ecrã completo do navegador'],
        ['O blooming muda entre modos', 'A definição de local dimming altera o comportamento das zonas', 'Volte a testar Baixo, Médio, Alto e Desligado para entender o compromisso'],
        ['OLED parece cinzento', 'Desajuste de gama de vídeo, reflexos da sala ou modo de imagem com pretos elevados', 'Verifique a gama da fonte, nível de preto, brilho e reflexos ambientais'],
      ],
    },
    {
      type: 'summary',
      title: 'Interpretação prática',
      items: [
        'A fuga de retroiluminação é mais convincente quando está fixa no lugar e é visível em conteúdo escuro real',
        'O glow IPS muda com o ângulo, por isso teste da posição onde realmente se senta',
        'O blooming é uma limitação do local dimming, não um problema de pixels mortos',
        'OLED deve passar no teste de preto puro, mas ainda precisa de verificações separadas de uniformidade perto do preto',
        'Uma boa configuração de teste é escura, em ecrã completo, com brilho alto e livre de reflexos',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Fuga de retroiluminação',
    bleedDescription: 'Preto exato em ecrã completo para detetar fugas nas bordas, glow IPS, clouding e verificações de uniformidade de preto.',
    bloomingTitle: 'Local dimming',
    bloomingDescription: 'Um círculo branco arrastável que stressa Mini LED, FALD, gestão de perto do preto OLED e zonas de dimming de TV.',
    startBleed: 'Iniciar teste preto',
    startBlooming: 'Iniciar teste de blooming',
    prepTitle: 'Antes de começar',
    prepBrightness: 'Ajuste o brilho do monitor ou TV para 100%.',
    prepRoom: 'Desligue as luzes da sala e remova reflexos.',
    prepFullscreen: 'Pressione Escape para sair do ecrã completo e repor o teste.',
    panelLabel: 'Pré-visualização de defeitos do painel',
    parametersLabel: 'Parâmetros do teste',
    modeControlsLabel: 'Modos de teste de retroiluminação',
    blackLevelLabel: 'Preto',
    blackLevelValue: '#000000',
    brightnessLabel: 'Brilho',
    brightnessValue: '100%',
    idleLabel: 'Cursor',
    idleValue: '2s',
    fullscreenLabel: 'Ecrã completo',
    fullscreenValue: 'API',
    escapeHint: 'Teste de preto puro em execução. Pare de mover o rato por 2 segundos para ocultar o cursor. Pressione Esc para sair.',
    dragHint: 'Arraste ou toque no círculo branco. Observe halos, grelhas de zonas e escurecimento retardado. Pressione Esc para sair.',
  },
};
