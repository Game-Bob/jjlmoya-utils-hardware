import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-tremor-angulo-mouse';
const title = 'Teste de Tremor e Correção de Ângulo do Mouse';
const description =
  'Desenhe traços brutos do mouse online para detectar tremor do sensor, rastreamento instável e correção de ângulo ou predição que torna o movimento artificialmente reto.';

const faqData = [
  {
    question: 'O que é o tremor do mouse?',
    answer:
      'O tremor do mouse é uma oscilação ou ruído indesejado no caminho do cursor, mesmo quando sua mão se move suavemente. Pode vir de uma janela do sensor suja, uma superfície ruim, comportamento de elevação alto, ruído elétrico, instabilidade sem fio ou um sensor que tem dificuldade no DPI selecionado.',
  },
  {
    question: 'O que é a correção de ângulo?',
    answer:
      'A correção de ângulo, às vezes chamada de predição, é um recurso de correção onde o firmware do mouse tenta transformar o movimento humano ligeiramente imperfeito em linhas horizontais, verticais ou diagonais mais retas. Alguns usuários de escritório gostam, mas muitos jogadores e artistas preferem o movimento bruto sem predição.',
  },
  {
    question: 'Este teste pode provar que o sensor do meu mouse está com defeito?',
    answer:
      'Ele não pode inspecionar o sensor eletricamente, mas mostra o caminho de movimento que seu navegador recebe. Se passagens suaves repetidas criarem pontos ruidosos, desvios repentinos ou segmentos anormalmente retos, o resultado é uma evidência útil para solucionar problemas do mouse, superfície, DPI, conexão sem fio ou configurações do firmware.',
  },
  {
    question: 'Como devo desenhar para obter o resultado mais confiável?',
    answer:
      'Desenhe linhas diagonais lentas, curvas em velocidade média e passagens horizontais longas. Teste o mesmo movimento várias vezes. O tremor é mais fácil de ver em linhas lentas controladas, enquanto a correção de ângulo é mais fácil de detectar quando o movimento diagonal se torna suspeitosamente reto ou em escada.',
  },
];

const howToData = [
  {
    name: 'Limpe o sensor e o mousepad',
    text: 'Antes de testar, remova poeira ou pelos da janela do sensor e use um mousepad estável ou superfície da mesa.',
  },
  {
    name: 'Desenhe linhas diagonais lentas',
    text: 'Mantenha pressionado o botão principal do mouse e desenhe vários traços diagonais. Um sensor bruto deve mostrar a variação natural da mão, não uma linha forçada perfeitamente em um único ângulo.',
  },
  {
    name: 'Desenhe curvas suaves',
    text: 'Faça círculos, curvas em S e arcos. O tremor aparece como pontos ásperos e ruidosos que saltam para fora da curva desejada.',
  },
  {
    name: 'Compare DPI e configurações de superfície',
    text: 'Repita o mesmo movimento em diferentes níveis de DPI, taxas de polling, configurações de elevação e superfícies para descobrir quando o problema aparece.',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
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
      text: 'Teste de Tremor do Mouse Online: Verifique Ruído do Sensor e Correção de Ângulo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um bom sensor de mouse deve seguir sua mão sem adicionar ruído visível ou corrigir secretamente o caminho. Quando o sensor está sujo, a superfície é difícil de rastrear, o DPI está muito alto para o hardware ou o firmware aplica predição, o caminho do cursor pode deixar de parecer natural. Este teste de tremor do mouse permite que você desenhe traços brutos e inspecione os pontos de leitura individuais para que os problemas do sensor se tornem visíveis em vez de vagos.',
    },
    {
      type: 'paragraph',
      html: 'A maneira mais útil de testar é simples: desenhe linhas e curvas controladas e depois observe a forma do traço. Um sensor bruto saudável produz um caminho que segue seu movimento com pequenas imperfeições humanas. Um sensor ruidoso produz pontos ásperos, pequenos picos e oscilação irregular. Um mouse com correção de ângulo ou predição pode fazer o movimento diagonal ou horizontal parecer anormalmente reto, como se o firmware estivesse corrigindo sua mão.',
    },
    {
      type: 'title',
      text: 'Como é o tremor do mouse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O tremor do mouse não é o mesmo que o tremor normal da mão. Todo mundo desenha linhas ligeiramente imperfeitas. O tremor se torna suspeito quando os pontos saltam para fora da direção do movimento, mesmo que sua mão esteja se movendo lenta e constantemente. Frequentemente aparece como uma borda borrada ao redor de uma linha, pequenos picos laterais ou um traço que parece áspero em vez de suave.',
    },
    {
      type: 'table',
      headers: ['Padrão do Traço', 'Significado Provável', 'O que Tentar em Seguida'],
      rows: [
        ['Pequenos picos aleatórios durante linhas lentas', 'Ruído do sensor, sujeira ou problema de rastreamento da superfície', 'Limpe a janela do sensor e experimente um mousepad diferente'],
        ['Tremor apenas em DPI alto', 'O sensor ou firmware tem dificuldade nessa sensibilidade', 'Teste novamente em 400, 800, 1600 e 3200 DPI'],
        ['Movimento áspero apenas no modo sem fio', 'Bateria, distância do receptor ou interferência', 'Aproxime o receptor e teste com uma bateria nova'],
        ['Ruído próximo à elevação ou ao inclinar o mouse', 'Distância de elevação ou contato irregular com a superfície', 'Mantenha o mouse plano e reduza a distância de elevação, se disponível'],
        ['Tremor em uma mesa, mas não em outra', 'Problema de textura ou refletividade da superfície', 'Use um mousepad fosco projetado para sensores ópticos'],
      ],
    },
    {
      type: 'title',
      text: 'Como é a correção de ângulo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A correção de ângulo é diferente do tremor. Em vez de adicionar ruído, ela remove a variação natural. Se você desenhar uma linha diagonal à mão, um sensor bruto deve preservar pequenos desvios humanos. Com a correção de ângulo ativada, a linha pode travar em uma direção perfeitamente reta horizontal, vertical ou diagonal. Isso pode facilitar o desenho no desktop, mas geralmente é indesejado para mira competitiva, pixel art, edição de fotos e qualquer tarefa onde o cursor deve corresponder exatamente à mão.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Comportamento do sensor bruto',
          description: 'O traço segue sua mão, incluindo pequenas curvas e correções naturais. As linhas diagonais não são matematicamente perfeitas, a menos que seu movimento tenha sido.',
        },
        {
          title: 'Comportamento com correção de ângulo',
          description: 'O traço parece suspeitosamente reto por longas seções, especialmente perto de ângulos comuns como horizontal, vertical ou 45 graus.',
        },
        {
          title: 'Comportamento com tremor',
          description: 'O traço se torna ruidoso, borrado ou espinhoso. Em vez de ser muito reto, parece instável e áspero.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Como Testar seu Mouse Corretamente',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Comece com uma janela do sensor limpa e um mousepad de boa qualidade conhecida',
        'Desenhe linhas diagonais lentas de canto a canto e repita o mesmo movimento várias vezes',
        'Desenhe círculos e curvas em S para revelar tremor que pode não aparecer em linhas retas',
        'Teste em vários níveis de DPI porque alguns sensores se tornam mais ruidosos em sensibilidade muito alta',
        'Desative recursos do software do fabricante, como correção de ângulo, predição, ajuste de superfície ou aceleração, quando possível',
        'Compare os modos com fio e sem fio se seu mouse suportar ambos',
        'Compare com outro mouse na mesma superfície para separar falha do mouse de problemas de superfície',
      ],
    },
    {
      type: 'title',
      text: 'Interpretando as Pontuações',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A ferramenta mostra uma pontuação de tremor, uma pontuação de correção de ângulo, retidão, desvio médio e o número de amostras capturadas. Esses valores são melhor usados de forma comparativa. Desenhe a mesma linha com o mesmo movimento da mão após mudar uma variável: DPI, superfície, posicionamento do receptor sem fio ou configuração do firmware do mouse. Se uma pontuação cair após mudar a superfície ou limpar o sensor, você encontrou uma causa provável.',
    },
    {
      type: 'table',
      headers: ['Resultado', 'O que Sugere', 'Ação Prática'],
      rows: [
        ['Tremor baixo e correção baixa', 'O caminho do sensor parece natural e estável', 'Mantenha as configurações atuais e use como referência'],
        ['Tremor alto, correção baixa', 'O mouse está rastreando, mas o caminho está ruidoso', 'Limpe o sensor, mude a superfície, abaixe o DPI e teste novamente'],
        ['Tremor baixo, correção alta', 'O caminho pode estar corrigido pelo firmware', 'Procure opções de predição ou correção de ângulo no software do mouse'],
        ['Tremor alto e correção alta', 'O traço está instável e pode estar supercorrigido', 'Redefina os perfis do software do mouse e teste novamente a partir das configurações padrão'],
        ['As pontuações mudam muito conforme a superfície', 'O sensor não gosta de uma textura ou refletividade de superfície', 'Use a superfície com o traço mais limpo'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, Taxa de Polling e Tremor do Mouse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'DPI alto não significa automaticamente melhor rastreamento. Alguns mouses funcionam de forma limpa em DPI moderado, mas expõem mais ruído visível em DPI muito alto porque pequenos erros do sensor são amplificados em um movimento maior do cursor. A taxa de polling também pode mudar a sensação do traço. Uma taxa de polling mais alta fornece atualizações mais frequentes, mas não pode consertar um sensor sujo, uma superfície ruim ou a predição do firmware.',
    },
    {
      type: 'paragraph',
      html: 'Para uma comparação justa, mantenha o movimento da sua mão similar e mude uma configuração por vez. Por exemplo, desenhe a mesma linha diagonal a 800 DPI, 1600 DPI e 3200 DPI. Se o caminho ficar borrado apenas no valor mais alto, a melhor solução pode ser diminuir o DPI e ajustar a sensibilidade no jogo em vez de substituir o mouse.',
    },
    {
      type: 'title',
      text: 'Causas Comuns de Tremor do Sensor do Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Poeira, pelos ou gordura perto da janela do sensor óptico',
        'Superfícies brilhantes, refletivas, transparentes ou irregulares',
        'Configurações de DPI muito altas que amplificam pequenos erros do sensor',
        'Bateria fraca ou interferência sem fio',
        'Receptor colocado longe do mouse ou atrás de um gabinete metálico do PC',
        'Filtros do firmware, calibração de superfície ou perfis do software do fabricante',
        'Problemas de distância de elevação quando o mouse é inclinado ou movido rapidamente',
        'Uma lente do sensor desgastada ou danificada após uso intenso',
      ],
    },
    {
      type: 'title',
      text: 'Por que Jogadores e Designers se Importam',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Em jogos, o tremor pode dificultar microajustes porque a mira não se estabiliza exatamente onde a mão pretendia. A correção de ângulo pode ser igualmente problemática: pode ajudar a desenhar linhas retas no desktop, mas também pode distorcer pequenas correções de mira e fazer o rastreamento diagonal parecer filtrado. Para designers, ilustradores, usuários de CAD e editores de fotos, a correção do sensor pode fazer o movimento à mão livre parecer menos honesto e mais difícil de controlar.',
    },
    {
      type: 'paragraph',
      html: 'Um mouse não precisa de um traço perfeito para ser bom. O movimento humano é naturalmente imperfeito. Os sinais de alerta são repetíveis: a mesma superfície sempre cria pontos ruidosos, o mesmo DPI sempre cria picos, ou o mesmo mouse sempre torna as diagonais suspeitosamente retas enquanto outro mouse não.',
    },
    {
      type: 'title',
      text: 'Antes de Comprar um Mouse Novo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Limpe cuidadosamente a janela do sensor com o mouse desligado',
        'Experimente um mousepad diferente, de preferência de tecido fosco ou superfície híbrida gamer',
        'Reduza o DPI e compense com a sensibilidade do software',
        'Desative a correção de ângulo, predição, precisão do ponteiro e opções de aceleração',
        'Aproxime o receptor sem fio usando um cabo de extensão USB',
        'Atualize ou redefina o perfil de firmware do mouse se o software do fabricante suportar',
        'Teste outro mouse no mesmo computador e superfície para comparação',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'A regra de diagnóstico útil',
      html: '<p>Um único traço estranho não é suficiente. Um padrão repetível é o que importa. Se o tremor ou a correção de ângulo aparecer repetidamente sob as mesmas configurações e desaparecer quando você limpa o sensor, muda a superfície, reduz o DPI ou desativa a predição, você encontrou a causa mais provável.</p>',
    },
  ],
  ui: {
    badge: 'Traço Bruto do Sensor',
    canvasLabel: 'Área de desenho para teste de tremor e correção de ângulo do mouse',
    canvasHint: 'Desenhe diagonais lentas, círculos e curvas. Os pontos individuais do sensor permanecem visíveis para facilitar a detecção de rastreamento irregular.',
    pointerPrompt: 'Segure e desenhe dentro da área de desenho',
    samples: 'Amostras',
    jitterScore: 'Tremor',
    snappingScore: 'Correção',
    straightness: 'Retidão',
    rawDeviation: 'Desvio médio',
    statusIdle: 'Desenhe dentro do campo para capturar o movimento bruto do mouse',
    statusHealthy: 'O traço parece natural e estável nas amostras recentes',
    statusJitter: 'Movimento ruidoso detectado no traço recente',
    statusSnapping: 'Movimento suspeitosamente reto detectado',
    statusMixed: 'Tremor e possível correção de ângulo aparecem no traço',
    reset: 'Redefinir',
    holdShift: 'Dica: teste uma mudança por vez. DPI, superfície, modo sem fio e configurações de predição podem alterar o traço.',
    sensitivity: 'Sensibilidade de detecção',
    low: 'estável',
    high: 'rigoroso',
    traceLog: 'Eventos do traço',
    emptyLog: 'Desenhe alguns traços controlados para iniciar o registro de eventos.',
    jitterEvent: 'tremor',
    snappingEvent: 'correção de ângulo',
    combinedEvent: 'tremor e correção de ângulo',
    cleanEvent: 'traço limpo',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
