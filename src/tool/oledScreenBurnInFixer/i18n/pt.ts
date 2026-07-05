import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'reparador-queimado-tela-oled';
const title = 'Reparador de Queimado de Tela OLED';
const description =
  'Execute um reparador de queimado OLED em tela cheia e um exercitador de pixels presos LCD com ciclos rápidos de cores RGB, ruído branco, um aviso obrigatório de fotossensibilidade e um temporizador nativo.';

const faqData = [
  {
    question: 'Um reparador de queimado OLED pode remover o queimado permanente?',
    answer:
      'Nenhuma ferramenta de navegador pode reverter o desgaste permanente dos subpixels OLED. Um exercitador de pixels pode reduzir a retenção temporária de imagem, tornar um leve efeito fantasma menos visível ou ajudar a diagnosticar se uma marca é retenção temporária ou queimado permanente.',
  },
  {
    question: 'É seguro para pessoas com epilepsia fotossensível?',
    answer:
      'O teste utiliza cores que piscam rapidamente e estática de alto contraste. Pessoas com epilepsia fotossensível, sensibilidade a enxaquecas, risco de convulsões ou desconforto com luzes intermitentes não devem executá-lo.',
  },
  {
    question: 'Isso pode reparar um pixel LCD preso?',
    answer:
      'Às vezes pode ajudar um pixel preso que permanece vermelho, verde, azul ou branco alterando rapidamente o estado do subpixel. Não pode reparar um pixel preto morto nem danos físicos ao painel.',
  },
  {
    question: 'Por quanto tempo devo executar o exercitador de pixels?',
    answer:
      'Comece com 5 a 10 minutos para um pixel preso ou retenção de imagem leve. Sessões mais longas devem ser supervisionadas, com brilho mantido em nível razoável e o ecrã com tempo para arrefecer.',
  },
  {
    question: 'Por que a ferramenta usa canvas em vez de vídeo?',
    answer:
      'Os padrões são gerados diretamente em HTML5 Canvas, para que a página não precise de ficheiros de vídeo pesados. Isso mantém o carregamento rápido e torna o ciclo de cor e ruído responsivo ao tamanho do ecrã inteiro.',
  },
];

const howToData = [
  {
    name: 'Leia o aviso de fotossensibilidade',
    text: 'Não continue se a luz intermitente, os padrões de alto contraste, as enxaquecas ou o risco de convulsões puderem afetar você ou alguém próximo.',
  },
  {
    name: 'Configure uma primeira execução curta',
    text: 'Escolha 5 a 10 minutos para uma primeira passagem, selecione o modo Híbrido e mantenha o brilho num nível confortável.',
  },
  {
    name: 'Inicie a reparação em tela cheia',
    text: 'Confirme o aviso, pressione Iniciar Reparação e deixe o canvas percorrer as cores RGB e a estática sem mover outras janelas sobre o ecrã.',
  },
  {
    name: 'Inspecione a marca depois',
    text: 'Pare o teste, mostre ecrãs cinzento neutro, branco, preto, vermelho, verde e azul e compare se a imagem fantasma ou o pixel preso mudou.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'Reparador de Queimado OLED e Exercitador de Pixels Presos LCD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este reparador de queimado de ecrã OLED é um exercitador de pixels em tela cheia para retenção temporária de imagem, imagens fantasma ténues e alguns pixels LCD presos. Gera padrões rápidos vermelhos, verdes, azuis, brancos, pretos, amarelos e de estática diretamente em HTML5 Canvas. Não há ficheiros de vídeo, nem recursos de imagem externos, nem etapa de download: o navegador pinta cada fotograma no tamanho atual do ecrã.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Aviso de fotossensibilidade',
      icon: 'mdi:alert',
      badge: 'Obrigatório',
      html: 'O padrão de reparação utiliza flashes rápidos, transições de alto contraste e estática branca. Não o execute se tiver epilepsia fotossensível, risco de convulsões, sensibilidade a enxaquecas, tonturas provocadas por luzes intermitentes ou se alguém próximo puder ser afetado. Pare imediatamente se sentir fadiga ocular, náuseas, dor de cabeça ou desconforto.',
    },
    {
      type: 'paragraph',
      html: 'A ferramenta é útil quando a pergunta é prática: <strong>esta marca é retenção temporária que pode desaparecer ou desgaste permanente do painel?</strong> Uma execução curta supervisionada pode às vezes reduzir uma imagem fantasma causada por elementos estáticos da interface retidos, e pode às vezes despertar um subpixel que está preso numa cor. Não pode reconstruir material OLED desgastado, reparar uma camada rachada, restaurar uma linha de controlo morta nem garantir a recuperação.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: 'ficheiros de vídeo carregados', icon: 'mdi:speedometer' },
        { value: 'RGB', label: 'exercício de subpixels primários', icon: 'mdi:palette' },
        { value: '1-120 min', label: 'temporizador de sessão nativo', icon: 'mdi:timer-outline' },
        { value: '100%', label: 'execução do lado do cliente', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'O que significam o queimado, a retenção de imagem e o ghosting',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Queimado OLED',
          definition: 'Desgaste permanente e desigual dos subpixels orgânicos. Um logótipo estático, uma barra de tarefas, uma barra de navegação ou um HUD de jogo pode deixar uma forma visível porque esses pixels envelheceram de forma diferente do resto do painel.',
        },
        {
          term: 'Retenção temporária de imagem',
          definition: 'Uma imagem fantasma de curta duração que permanece após o desaparecimento do conteúdo estático. Pode desaparecer com conteúdo misto normal, um ciclo de compensação ou um padrão de exercício de pixels.',
        },
        {
          term: 'Pixel LCD preso',
          definition: 'Um pixel ou subpixel preso a mostrar vermelho, verde, azul, branco ou outra cor fixa. Mudanças rápidas de estado podem às vezes libertá-lo se o problema não for dano físico.',
        },
        {
          term: 'Pixel morto',
          definition: 'Um pixel que permanece preto porque já não emite ou transmite luz corretamente. Um exercitador de pixels de navegador normalmente não pode reanimar um pixel verdadeiramente morto.',
        },
        {
          term: 'Ghosting LCD',
          definition: 'Rastos de movimento causados por resposta lenta dos pixels. É diferente do queimado de ecrã, embora os utilizadores descrevam frequentemente ambos como imagens fantasma.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Retenção temporária',
          description: 'Geralmente desaparece após conteúdo misto, rotinas de atualização do ecrã ou uma curta sessão de RGB e ruído.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Visível após conteúdo estático', 'Frequentemente mais suave nas bordas', 'Pode melhorar em minutos ou horas'],
        },
        {
          title: 'Queimado permanente',
          description: 'Desgaste OLED desigual que permanece visível após repouso, ciclos de compensação e conteúdo variado.',
          icon: 'mdi:contrast-circle',
          points: ['Corresponde a IU estática de longa duração', 'Mais visível em cores planas', 'Não desaparece após o exercício'],
        },
        {
          title: 'Pixel preso',
          description: 'Um único ponto ou pequeno grupo bloqueado numa cor em vez de uma grande imagem fantasma.',
          icon: 'mdi:grain',
          points: ['Frequentemente com um pixel de largura', 'Pode ser vermelho, verde, azul ou branco', 'Às vezes responde a mudanças rápidas de cor'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Como usar o exercitador de pixels com segurança',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Reduza o brilho antes da primeira execução, especialmente em telemóveis OLED, TVs OLED e portáteis com painel OLED.',
        'Comece com 5 a 10 minutos; não deixe o ecrã sem supervisão durante sessões longas.',
        'Use o ecrã inteiro para que a área afetada receba o mesmo padrão que o resto do painel.',
        'Avise quem está na sala sobre a luz intermitente; não execute o teste perto de pessoas que não consentiram.',
        'Pare se o painel ficar anormalmente quente, se o navegador engasgar muito ou se sentir desconforto.',
        'Após a execução, inspecione ecrãs cinzento neutro, branco, preto, vermelho, verde e azul para comparar os resultados.',
      ],
    },
    {
      type: 'table',
      headers: ['Problema', 'Primeiro modo', 'Primeira duração', 'Orientação de brilho'],
      rows: [
        ['Imagem fantasma OLED ténue', 'Híbrido RGB mais estática', '5-10 minutos', 'Confortável, não máximo'],
        ['Retenção recente de logótipo estático', 'Ciclo RGB', '10-20 minutos', 'Brilho moderado'],
        ['Pixel LCD preso de cor única', 'Estática ou Híbrido', '5-15 minutos', 'Brilho normal de ambiente de trabalho'],
        ['Queimado permanente antigo', 'Híbrido apenas para diagnóstico', '5 minutos', 'Evite sessões longas com brilho alto'],
        ['Pixel preto morto', 'Não recomendado como reparação', 'Apenas inspeção', 'Nenhum exercitador de pixels pode garantir recuperação'],
      ],
    },
    {
      type: 'tip',
      title: 'Use sessões curtas primeiro',
      html: 'Uma sessão longa com flashes não é automaticamente melhor. Se uma marca é temporária, frequentemente vê-se alguma mudança após uma passagem curta. Se nada mudar após uma tentativa razoável e uma rotina normal de atualização do painel, o problema pode ser desgaste permanente ou um defeito de hardware.',
    },
    {
      type: 'title',
      text: 'Escolher entre ciclo RGB, ruído branco e modo híbrido',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Diferentes artefactos respondem a diferentes padrões. Um ciclo vermelho verde azul exercita os subpixels primários numa sequência controlada. O ruído branco alterna rapidamente a luminância em muitas áreas pequenas, o que pode ajudar a expor e exercitar pixels presos isolados. O modo híbrido alterna entre ambos, tornando-o a melhor primeira escolha quando não tem a certeza se o problema é retenção de imagem ou um subpixel preguiçoso.',
    },
    {
      type: 'table',
      headers: ['Modo', 'O que faz', 'Melhor para', 'A ter em conta'],
      rows: [
        ['Ciclo RGB', 'Campos de ecrã inteiro primários e de alto contraste', 'Retenção OLED e inspeção de canais de cor', 'Flash visível'],
        ['Ruído branco', 'Estática aleatória preto a branco em todo o painel', 'Pixels presos isolados e pequenos grupos', 'Maior intensidade visual'],
        ['Híbrido', 'Alterna campos de cor e estática', 'Fluxo de trabalho geral de reparação de queimado OLED', 'Use um temporizador curto primeiro'],
      ],
    },
    {
      type: 'proscons',
      title: 'Exercitador de pixels online: benefícios e limites realistas',
      items: [
        {
          pro: 'Executa instantaneamente no navegador sem instalar software ou carregar ficheiros de vídeo.',
          con: 'Não pode reverter o desgaste permanente do material OLED ou danos físicos ao painel.',
        },
        {
          pro: 'Canvas em ecrã inteiro cobre o visor com fotogramas RGB e estática gerados.',
          con: 'A temporização do navegador, o desempenho do dispositivo e o suporte a ecrã inteiro podem afetar a consistência da animação.',
        },
        {
          pro: 'Útil para um primeiro diagnóstico antes de experimentar as rotinas de manutenção do painel do fabricante.',
          con: 'Não deve substituir o serviço de garantia para painéis novos com defeitos evidentes.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Orientações específicas para OLED',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os pixels OLED emitem a sua própria luz. Quando um elemento estático permanece no ecrã durante muitas horas, os subpixels sob esse elemento podem envelhecer a um ritmo diferente. É por isso que o queimado segue frequentemente a forma de logótipos de canais de TV, barras de estado de telefones, botões de navegação, HUDs de jogos, barras laterais de aplicações de streaming ou barras de tarefas do ambiente de trabalho. Um exercitador de pixels pode fazer a retenção temporária desaparecer mais rapidamente, mas o envelhecimento diferencial permanente continua a ser um problema material.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Verifique primeiro a manutenção integrada do painel',
      html: 'Muitas TVs, monitores, portáteis e telemóveis OLED incluem atualização de pixels, atualização de painel, escurecimento de logótipos, deslocamento de ecrã, escurecimento da barra de tarefas ou ciclos de compensação. Use a rotina do fabricante de acordo com as suas instruções, especialmente se o ecrã estiver sob garantia. Esta ferramenta online é melhor encarada como um diagnóstico suave e exercício de retenção temporária, não como um substituto do firmware de manutenção do painel.',
    },
    {
      type: 'list',
      items: [
        'Se a imagem fantasma for recente, deixe o ecrã mostrar conteúdo variado ou descansar antes de assumir queimado permanente.',
        'Se a marca corresponder a um logótipo estático com anos, é improvável que um exercitador de pixels a remova completamente.',
        'Se o painel tiver um ciclo de atualização integrado, execute-o apenas com a frequência recomendada pelo fabricante.',
        'Evite executar padrões de teste com brilho máximo durante horas; o calor e o brilho contribuem para o desgaste.',
        'Oculte as barras de tarefas, ative as proteções de ecrã e reduza o brilho da IU estática para prevenir recorrências.',
      ],
    },
    {
      type: 'title',
      text: 'Orientações para pixels LCD presos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os painéis LCD não queimam da mesma forma que os painéis OLED, mas podem apresentar pixels presos, marcas de pressão, defeitos de painel e persistência temporária de imagem. Um pixel preso que permanece vermelho, verde, azul, ciano, magenta, amarelo ou branco pode ser causado por um subpixel que não comuta corretamente. Mudanças rápidas podem às vezes ajudar, embora não haja reparação online garantida.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pixel morto versus pixel preso',
      icon: 'mdi:information-outline',
      badge: 'Diagnóstico',
      html: 'Um ponto colorido tem mais hipóteses do que um ponto preto. Um pixel preto em todas as cores de teste está geralmente morto ou bloqueado. Um pixel colorido que muda em alguns fundos mas não noutros pode ser um subpixel preso e é um melhor candidato para uma curta sessão de exercício de pixels.',
    },
    {
      type: 'summary',
      title: 'Antes de usar pressão ou métodos físicos',
      items: [
        'Não pressione com força painéis OLED, ecrãs táteis ou ecrãs frágeis de portáteis.',
        'Evite ferramentas afiadas, canetas envoltas em pano e qualquer método que possa riscar a superfície.',
        'Use primeiro o exercício por software, depois o suporte da garantia se o defeito persistir.',
        'Documente o defeito com fotos macro se o ecrã for novo e as políticas de devolução ainda se aplicarem.',
      ],
    },
    {
      type: 'title',
      text: 'Por que o Canvas é melhor do que um vídeo de reparação pesado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um reparador de queimado baseado em vídeo tem de descarregar fotogramas codificados, descodificá-los, redimensioná-los para o ecrã e esperar que a compressão não tenha suavizado as transições exatas. Esta ferramenta gera cada fotograma diretamente no navegador. Os campos RGB são sólidos, o ruído é criado para o tamanho atual do canvas e a página evita ficheiros multimédia grandes que retardariam o carregamento ou reduziriam o PageSpeed.',
    },
    {
      type: 'list',
      items: [
        'Sem ficheiro de vídeo externo significa renderização inicial mais rápida e menor dependência da rede.',
        'A saída do canvas dimensiona-se para a superfície de ecrã inteiro em vez de ser limitada por uma resolução de vídeo.',
        'O temporizador pode parar a reparação automaticamente em vez de repetir um vídeo infinitamente.',
        'Modo, velocidade, duração e intensidade podem ser alterados sem carregar outro recurso.',
      ],
    },
    {
      type: 'message',
      title: 'Uma expectativa prática',
      ariaLabel: 'Expectativa do reparador de queimado',
      html: 'Use esta ferramenta como um primeiro passo controlado: reduza a retenção temporária, exercite um possível pixel preso e reúna evidências. Se a marca sobreviver a conteúdo variado, às rotinas de atualização integradas do painel e a curtas sessões de exercício cuidadosas, trate-a como um problema de hardware ou de garantia.',
    },
  ],
  ui: {
    safetyTitle: 'Aviso de luz intermitente',
    safetyBody: 'Este padrão de reparação emite rapidamente cores sólidas e estática de alto contraste. Não o use se você ou alguém próximo puder ser afetado por epilepsia fotossensível, convulsões, enxaquecas, tonturas ou sensibilidade à luz intermitente.',
    safetyChecklist: 'Mantenha um brilho razoável, supervisione a sessão e pare imediatamente se sentir desconforto.',
    safetyConfirm: 'Compreendo o risco de fotossensibilidade e quero ativar o botão de reparação.',
    safetyContinue: 'Continuar para as definições',
    startRepair: 'Iniciar reparação (Ecrã inteiro)',
    controlsLabel: 'Controlos de reparação de ecrã OLED',
    modeLabel: 'Modo de padrão',
    modeCycle: 'Ciclo RGB',
    modeNoise: 'Ruído branco',
    modeHybrid: 'Híbrido',
    modeCycleDescription: 'Cores primárias sólidas para retenção de imagem e verificação de canais.',
    modeNoiseDescription: 'Estática de alta frequência para pixels presos isolados e pequenos grupos.',
    modeHybridDescription: 'Melhor primeira passagem: alterna campos RGB com textura de estática.',
    speedLabel: 'Velocidade do ciclo',
    durationLabel: 'Duração',
    durationShort: '5 min',
    durationStandard: '10 min',
    durationDeep: '20 min',
    durationShortDescription: 'Verificação rápida',
    durationStandardDescription: 'Recomendado',
    durationDeepDescription: 'Execução supervisionada',
    fullscreenHint: 'Canvas de reparação de queimado OLED em ecrã inteiro',
    intensityLabel: 'Intensidade da estática',
    warningBadge: 'Conteúdo intermitente',
  },
};
