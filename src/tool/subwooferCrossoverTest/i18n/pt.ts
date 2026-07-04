import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-crossover-subwoofer-online';
const title = 'Teste de Crossover do Subwoofer';
const description =
  'Execute uma varredura senoidal de 200 Hz a 10 Hz no seu navegador para descobrir onde o seu subwoofer se desvanece, desaparece ou faz a transição para as caixas principais.';

const faqData = [
  {
    question: 'O que mede um teste de crossover de subwoofer?',
    answer:
      'Ajuda-o a ouvir o ponto onde os graves deixam de soar contínuos entre as caixas principais e o subwoofer. Uma lacuna, uma mudança súbita de nível ou uma faixa em falta pode indicar uma frequência de crossover incorreta, um problema de fase, cancelamento da sala ou o limite do subwoofer.',
  },
  {
    question: 'Porque é que este teste varre de 200 Hz até 10 Hz?',
    answer:
      'A maioria dos crossovers de home theater situa-se entre 60 Hz e 120 Hz, enquanto muitas caixas compactas começam a perder saída acima ou abaixo dessa faixa. Varrer desde 200 Hz torna a transição caixa-subwoofer fácil de ouvir antes de o tom atingir os subgraves profundos.',
  },
  {
    question: 'Este teste de graves para subwoofer online pode danificar as caixas?',
    answer:
      'Sim, frequências muito baixas com volume alto podem sobrecarregar caixas pequenas ou forçar um subwoofer. Comece com volume baixo, evite modos de graves amplificados e pare imediatamente se ouvir ruídos, batidas ou esforço mecânico.',
  },
  {
    question: 'A frequência de queda marcada é a configuração exata de crossover que devo usar?',
    answer:
      'Não. Trate-a como uma pista auditiva, não como uma medição de laboratório. A melhor configuração de crossover também depende das especificações das caixas, posicionamento na sala, fase, correção de distância e objetivo de calibração.',
  },
];

const howToData = [
  {
    name: 'Defina um nível de audição seguro',
    text: 'Baixe primeiro o volume do sistema. A varredura usa uma onda senoidal gerada, por isso os graves podem tornar-se intensos mesmo quando o volume do navegador parece modesto.',
  },
  {
    name: 'Inicie a varredura de 200 Hz a 10 Hz',
    text: 'Pressione Iniciar varredura e ouça a partir do seu lugar habitual. O tom move-se de forma constante pela faixa de graves onde subwoofers, caixas principais e acústica da sala se sobrepõem.',
  },
  {
    name: 'Ouça a queda ou a transição',
    text: 'Preste atenção ao momento em que os graves ficam mais fracos, desaparecem, mudam de localização ou soam desiguais entre o subwoofer e as caixas principais.',
  },
  {
    name: 'Marque a frequência',
    text: 'Pressione Marcar queda no primeiro ponto problemático claro. Use essa frequência como pista para ajustar o crossover, a fase, o posicionamento ou a correção da sala.',
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
  step: howToData.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<SubwooferCrossoverTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Encontre A Lacuna De Graves Entre As Suas Caixas E O Subwoofer', level: 2 },
    {
      type: 'paragraph',
      html: 'Um subwoofer não deve soar como uma caixa separada no canto. Os graves devem manter-se uniformes à medida que as notas passam das caixas principais para o sub. Este teste varre de <strong>200 Hz a 10 Hz</strong> para que possa ouvir a zona exata onde a transição se torna fraca, retumbante, localizável ou silenciosa.',
    },
    {
      type: 'table',
      headers: ['O que ouve', 'O que geralmente significa', 'O que tentar primeiro'],
      rows: [
        ['Os graves desaparecem por volta de 70-100 Hz', 'O subwoofer e as caixas podem estar a cancelar-se mutuamente perto do crossover.', 'Inverta a fase, ajuste a distância/atraso e repita a varredura.'],
        ['Os graves ficam retumbantes numa banda estreita', 'Modo de sala ou demasiada sobreposição entre caixas e subwoofer.', 'Baixe ligeiramente o crossover ou mova o subwoofer/a posição de audição.'],
        ['Os graves parecem vir da localização do subwoofer', 'O crossover pode estar demasiado alto ou o nível do subwoofer demasiado elevado.', 'Experimente 80 Hz ou menos e reduza o ganho do subwoofer.'],
        ['Os graves profundos desvanecem-se abaixo de 30-40 Hz', 'Limite de extensão normal para muitos subs, especialmente modelos compactos.', 'Verifique as especificações do subwoofer antes de perseguir um problema que pode ser físico.'],
      ],
    },
    { type: 'title', text: 'O Que A Frequência De Queda Lhe Diz', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Use a frequência marcada como pista de afinação',
      badge: 'Pistas auditivas',
      html: '<p>Se o ponto marcado estiver próximo do crossover do seu AVR, o problema é provavelmente de integração: fase, distância, polaridade, nível ou a inclinação dos filtros. Se o ponto marcado for muito mais baixo, pode estar a ouvir o subwoofer a atingir o limite de saída. Se o problema mudar muito ao mover a cabeça, a sala está a dominar o resultado.</p>',
    },
    {
      type: 'title',
      text: 'Faixas De Crossover Comuns',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo de caixa', 'Ponto de partida típico do crossover', 'Porquê'],
      rows: [
        ['Satélites pequenos', '100-150 Hz', 'Gabinetes minúsculos geralmente não conseguem reproduzir graves médios limpos a níveis de cinema.'],
        ['Caixas de estante', '70-100 Hz', 'Frequentemente graves suficientes para uma transição limpa sem tornar o sub localizável.'],
        ['Caixas de coluna', '50-80 Hz', 'Woofers maiores lidam com mais médios-graves, mas a sala pode ainda preferir gestão de graves por subwoofer.'],
        ['Configuração estilo THX', '80 Hz', 'Um valor padrão prático que funciona bem para muitos sistemas e encaminha os graves profundos para o sub.'],
      ],
    },
    { type: 'title', text: 'Problema De Crossover Ou Problema Da Sala?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Problema de crossover ou fase',
          description: 'O ponto fraco aparece perto da frequência de crossover e melhora após alterar fase, polaridade, distância ou configuração do crossover.',
          points: ['Geralmente repetível do mesmo lugar.', 'Frequentemente centrado em torno de 60-120 Hz.'],
        },
        {
          title: 'Cancelamento da sala',
          description: 'O ponto fraco muda drasticamente quando move a cabeça, muda de lugar ou desloca o subwoofer uma curta distância.',
          points: ['Muito dependente da posição.', 'Muitas vezes resolvido mais pelo posicionamento do que pelas configurações.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Melhor forma de executar o teste',
      html: 'Sente-se onde realmente vê filmes ou ouve música. Não fique ao lado do subwoofer. Um crossover que soa bem ao lado do móvel pode ainda deixar uma lacuna no sofá.',
    },
    {
      type: 'summary',
      title: 'O que alterar após a varredura',
      items: [
        'Se a lacuna estiver perto do crossover atual, experimente alterações de 10 Hz e repita a varredura.',
        'Teste o interruptor de fase do subwoofer ou a configuração de atraso se a banda fraca estiver perto do crossover.',
        'Se os graves ficarem mais fortes num lugar e desaparecerem noutro, mova o subwoofer antes de alterar todas as configurações do AVR.',
        'Após alterações de posicionamento ou crossover, execute novamente a correção da sala para que o recetor meça a nova configuração.',
        'Use a frequência marcada para orientar a afinação e depois confirme com música, filmes e linhas de baixo familiares.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Varredura de baixa frequência do subwoofer',
    currentFrequency: 'Frequência atual',
    targetFrequency: 'Alvo',
    elapsed: 'Decorrido',
    statusReady: 'Pronto para varredura baixa',
    statusRunning: 'A varrer para baixo',
    statusStopped: 'Varredura parada',
    start: 'Iniciar varredura',
    stop: 'Parar varredura',
    markDropout: 'Marcar queda',
    reset: 'Repor',
    volume: 'Nível de saída',
    duration: 'Duração da varredura',
    safeStart: 'Comece com volume baixo e marque a primeira frequência onde os graves se tornam difíceis de ouvir.',
    roomNote: 'A posição na sala e a fase podem alterar drasticamente o resultado.',
    dropoutLabel: 'Ponto marcado',
    dropoutEmpty: 'Ainda não marcado',
    crossoverEstimate: 'Ponto de queda estimado',
  },
};
