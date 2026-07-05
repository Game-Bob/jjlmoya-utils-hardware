import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'testador-fase-altifalantes';
const title = 'Testador de Fase de Altifalantes';
const description =
  'Reproduza sinais de teste estéreo em fase e invertidos a 180 graus no seu navegador para verificar a polaridade das colunas, erros de cablagem e cancelamento de fase.';

const faqData = [
  {
    question: 'Como sei se a polaridade das minhas colunas está correta?',
    answer:
      'Reproduza o sinal normal e depois o sinal invertido a partir da mesma posição de escuta. Com colunas corretamente ligadas, o modo invertido deve soar mais fraco, oco ou menos centrado porque os canais esquerdo e direito se cancelam parcialmente na sala. Se o modo invertido soar mais cheio ou mais alto, é possível que uma coluna já esteja ligada com a polaridade invertida.',
  },
  {
    question: 'O que significa fase invertida neste teste?',
    answer:
      'A ferramenta envia o mesmo sinal para ambos os canais e depois multiplica um canal por -1 no modo invertido. Isso inverte a forma de onda em 180 graus sem necessidade de transferir um ficheiro de áudio. O resultado físico equivale a inverter os terminais positivo e negativo numa coluna para o sinal de teste.',
  },
  {
    question: 'Este teste pode verificar todas as colunas de um home theater?',
    answer:
      'É ideal para verificar um par estéreo ou as colunas frontais esquerda e direita de um sistema maior. Para sistemas surround completos, teste os pares um de cada vez e combine o resultado com o teste de canais do seu recetor AV, a calibração de distância e um microfone de medição ou sonómetro, se disponível.',
  },
  {
    question: 'Devo usar ruído rosa ou um tom sinusoidal?',
    answer:
      'O ruído rosa costuma ser mais fácil para verificações de polaridade porque abrange uma vasta gama de frequências e torna o cancelamento evidente. Um tom sinusoidal pode ajudar a focar numa frequência específica, mas os modos de sala podem tornar um único tom enganador.',
  },
  {
    question: 'É seguro para colunas e auscultadores?',
    answer:
      'Sim, a níveis moderados. Comece baixo, evite o ganho máximo do amplificador e não reproduza tons contínuos em volume alto através de auscultadores, pequenas colunas de portátil ou colunas desconhecidas. Pare imediatamente se ouvir distorção ou esforço mecânico.',
  },
];

const howToData = [
  {
    name: 'Posicione-se no ponto de escuta',
    text: 'Sente-se onde costuma ouvir para que o cancelamento acústico que perceciona corresponda à sala real e à colocação das colunas.',
  },
  {
    name: 'Reproduza o sinal normal',
    text: 'Prima Reproduzir Em Fase e observe a imagem central, o volume e o corpo tonal.',
  },
  {
    name: 'Reproduza o sinal invertido',
    text: 'Prima Reproduzir Fora de Fase. As colunas corretamente ligadas devem soar geralmente mais difusas, ocas ou silenciosas.',
  },
  {
    name: 'Inspecione a cablagem se o resultado for invertido',
    text: 'Se o modo invertido soar mais forte do que o normal, verifique os terminais positivo e negativo numa coluna, os bornes do amplificador, as fichas banana, as placas de parede e os adaptadores.',
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

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Teste Online de Fase e Polaridade de Altifalantes', level: 2 },
    {
      type: 'paragraph',
      html: 'Este testador de fase de altifalantes compara um sinal estéreo normal com uma versão onde um canal é invertido em <strong>180 graus</strong>. O objetivo prático é simples: confirmar se as duas colunas de um par se movem juntas quando devem. Quando as colunas esquerda e direita estão ligadas com a mesma polaridade, a energia dos graves e médios reforça-se entre elas e a imagem central parece estável. Quando uma coluna está ligada ao contrário, os cones movem-se em direções opostas para a mesma forma de onda, o que pode fazer as vozes perderem corpo, os graves desaparecerem e a imagem estéreo parecer estranhamente larga ou oca.',
    },
    {
      type: 'paragraph',
      html: 'O teste é gerado localmente no navegador. Não transmite nenhum ficheiro de áudio pesado. No modo normal, ambos os canais recebem o mesmo ruído rosa ou tom sinusoidal. No modo invertido, um canal é multiplicado por <code>-1</code>, o que cria uma forma de onda matematicamente invertida. Se a cablagem real das colunas estiver correta, essa inversão artificial deve criar um cancelamento evidente. Se a cablagem física já estiver invertida, o botão invertido pode corrigir parcialmente o erro, podendo soar mais alto, mais sólido ou mais centrado do que o botão normal.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Interpretação rápida',
      badge: 'Regra base',
      html: '<p>Se <strong>Fora de Fase</strong> soar mais fraco, distante, oco ou silencioso do que <strong>Em Fase</strong>, o par esquerdo/direito provavelmente está bem ligado. Se Fora de Fase soar mais cheio ou mais alto, inspecione os terminais vermelho e preto numa coluna, o amplificador, as fichas banana, as placas de parede, a cablagem do automóvel ou qualquer adaptador na cadeia.</p>',
    },
    {
      type: 'table',
      headers: ['O que ouve', 'Significado provável', 'Próximo passo'],
      rows: [
        ['O normal é cheio, o invertido é oco', 'As duas colunas provavelmente têm a polaridade correspondente.', 'Deixe a cablagem como está e prossiga com o posicionamento ou a calibração.'],
        ['O invertido é mais cheio do que o normal', 'Uma coluna pode estar fisicamente ligada ao contrário.', 'Verifique os terminais positivo e negativo apenas num lado do par.'],
        ['Ambos os modos soam quase iguais', 'As colunas podem estar demasiado afastadas, as reflexões da sala dominam ou a saída é mono.', 'Desloque-se para o ponto de escuta, desative o processamento mono e experimente o ruído rosa.'],
        ['Ambos os modos soam fracos nos graves', 'O cancelamento da sala, a fase do subwoofer, o crossover ou o posicionamento podem ser o maior problema.', 'Execute um varrimento de graves e teste a polaridade do subwoofer separadamente.'],
      ],
    },
    { type: 'title', text: 'Porque é Que a Polaridade Invertida das Colunas Soa Mal', level: 2 },
    {
      type: 'paragraph',
      html: 'Um altifalante transforma um sinal elétrico em movimento do cone. Para uma onda de pressão positiva, duas colunas iguais devem geralmente empurrar o ar na mesma direção ao mesmo tempo. Se uma coluna tiver os fios positivo e negativo trocados, essa coluna move-se para dentro enquanto a outra se move para fora para o mesmo sinal. Num par estéreo, isto não torna simplesmente o som mais baixo em todo o lado; a sala, a distância entre colunas, o comprimento de onda e a posição de escuta decidem onde o cancelamento é mais forte. Os sintomas mais notórios são geralmente graves reduzidos, um centro fantasma fraco e vozes que parecem desprender-se do espaço entre as colunas.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'As vozes principais e os diálogos devem ancorar-se perto do centro quando ambas as colunas reproduzem o mesmo sinal mono.',
        'O bombo, o baixo e as notas graves do piano devem ter corpo em vez de soarem leves.',
        'A imagem estéreo não deve parecer artificialmente larga quando a fonte é mono.',
        'Mover ligeiramente a cabeça não deve fazer a imagem central colapsar completamente.',
        'Um par corretamente ligado deve fazer o teste invertido soar menos natural do que o teste normal.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polaridade', definition: 'A orientação positiva ou negativa do sinal elétrico que alimenta o driver de um altifalante.' },
        { term: 'Fase', definition: 'A relação temporal entre duas formas de onda, frequentemente descrita em graus ao longo de um ciclo.' },
        { term: 'Inversão de 180 graus', definition: 'Uma forma de onda invertida verticalmente, de modo que a pressão positiva se torna pressão negativa no mesmo instante.' },
        { term: 'Cancelamento', definition: 'Uma redução no nível sonoro quando duas formas de onda semelhantes chegam com polaridade ou tempo opostos.' },
        { term: 'Centro fantasma', definition: 'A imagem central aparente criada quando um som idêntico atinge as colunas esquerda e direita de forma uniforme.' },
      ],
    },
    {
      type: 'tip',
      title: 'Não teste ao lado de uma coluna',
      html: 'Sente-se na posição de escuta normal. O cancelamento de fase é espacial: um resultado ouvido a meio metro da coluna esquerda pode ser completamente diferente do resultado no sofá, na cadeira de estúdio ou no banco do condutor.',
    },
    { type: 'title', text: 'Ruído Rosa Versus Tom Sinusoidal Para Verificações de Polaridade', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ruído rosa',
          description: 'Ruído de banda larga com mais energia nas oitavas baixas do que o ruído branco. Torna mais fácil julgar de ouvido o corpo tonal geral, a imagem central e o cancelamento.',
          highlight: true,
          points: ['Melhor primeira escolha para verificações rápidas de polaridade.', 'Menos probabilidade de ser dominado por um único modo de sala.', 'Útil para home cinema, monitores de estúdio e áudio automóvel.'],
        },
        {
          title: 'Tom sinusoidal',
          description: 'Um tom de frequência única que pode expor o cancelamento numa frequência escolhida, mas também pode exagerar os picos e nulos da sala.',
          points: ['Útil para investigar um problema específico de crossover ou graves.', 'Pode ser enganador se a sala tiver um nulo forte nessa frequência.', 'Mantenha o volume moderado porque os tons puros tornam-se fatigantes.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Para uma verificação rápida da polaridade, comece com o ruído rosa. O ruído rosa distribui a energia pelo espetro, por isso está a avaliar o par de colunas como um sistema em vez de avaliar uma frequência que pode estar num nulo da sala. Use o controlo de tom sinusoidal apenas quando quiser focar-se numa banda problemática conhecida, como um cancelamento na gama vocal por volta dos 300 Hz ou um problema de transição de graves por volta dos 80 Hz. Se o resultado do tom sinusoidal mudar drasticamente ao mover a cabeça alguns centímetros, a sala está a influenciar fortemente essa frequência.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: 'Inversão matemática aplicada a um canal', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Multiplicador de ganho usado para o canal invertido', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: 'Transferências de áudio necessárias para o sinal de teste', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Lista de Verificação Para Home Cinema e Monitores de Estúdio', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Colunas frontais de home cinema',
      html: 'Use os botões normal e invertido apenas com as colunas frontais esquerda e direita ativas. Desative os upmixers, o surround virtual, o modo noturno, o melhoramento de diálogo e a correção de sala se quiser isolar primeiro a cablagem simples. Após confirmar a polaridade, volte a ativar a calibração e verifique se o diálogo permanece centrado.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Monitores de estúdio',
      html: 'Envie o sinal do navegador através das mesmas saídas de interface usadas pelo seu DAW. Verifique se ambos os cabos balanceados estão ligados de forma consistente e se os interruptores de polaridade do controlador de monitores não estão ativados. Um monitor invertido pode tornar as decisões de compatibilidade mono pouco fiáveis durante a mistura.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Áudio automóvel',
      html: 'Os habitáculos dos automóveis criam reflexões intensas e assimetria de bancos, por isso ouça do banco do condutor e repita do banco do passageiro, se necessário. Os adaptadores de cablagem de fábrica, as substituições de altifalantes de porta e as instalações de amplificadores são locais comuns onde os fios positivo e negativo podem ser trocados.',
    },
    {
      type: 'proscons',
      title: 'Vantagens e limites do teste de fase no navegador',
      items: [
        { pro: 'Verificação imediata sem instalar software ou transferir ficheiros de áudio.', con: 'Não consegue identificar qual o cabo físico errado sem inspecionar o sistema.' },
        { pro: 'Funciona bem para um par estéreo, auscultadores, monitores de campo próximo e verificações rápidas de instalação.', con: 'A acústica da sala pode ocultar ou exagerar o efeito em alguns lugares de escuta.' },
        { pro: 'O ruído rosa torna o cancelamento amplo mais fácil de ouvir do que um único tom de teste.', con: 'Os sistemas surround com várias colunas ainda precisam de verificação canal a canal.' },
      ],
    },
    { type: 'title', text: 'Como Corrigir um Teste de Polaridade Falhado', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Desligue o amplificador antes de mudar os cabos das colunas ou as fichas banana.',
        'Escolha uma coluna do par e siga vermelho com vermelho e preto com preto desde o amplificador até à coluna.',
        'Inspecione qualquer placa de parede, borne de mola, adaptador, conector speakON ou cablagem automóvel entre o amplificador e a coluna.',
        'Se o cabo da coluna tiver uma risca, nervura, texto impresso ou lado cobre/prata, use o mesmo condutor para o positivo em ambas as extremidades.',
        'Depois de mudar um lado, volte a executar os modos normal e invertido a partir da posição de escuta.',
        'Se o resultado ainda for ambíguo, aproxime temporariamente as colunas e repita com volume baixo.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Os subwoofers precisam de um teste de fase separado',
      badge: 'Sistemas de graves',
      html: '<p>Esta ferramenta compara um par esquerdo/direito. Um crossover de subwoofer pode estar eletricamente correto mas acusticamente fora de fase porque a distância, o atraso DSP, a inclinação do crossover e o posicionamento alteram a temporização. Use este teste para o par principal e depois use um varrimento de crossover ou a calibração do recetor para a transição do subwoofer.</p>',
    },
    {
      type: 'message',
      title: 'Regra prática de escuta',
      ariaLabel: 'Regra prática de escuta para teste de fase',
      html: 'Para instalações reais, a configuração correta é aquela que faz o material mono soar focado, cheio e estável na posição de escuta real. O modo invertido é um contraste de diagnóstico, não um modo de escuta.',
    },
    {
      type: 'summary',
      title: 'Resumo do diagnóstico de polaridade de altifalantes',
      items: [
        'O modo normal deve soar mais forte e centrado do que o invertido quando o par de colunas está corretamente ligado.',
        'O modo invertido a soar mais forte é um forte indício de que uma ligação física de coluna está invertida.',
        'O ruído rosa é o melhor primeiro sinal porque reduz a probabilidade de avaliar apenas uma frequência da sala.',
        'Os tons sinusoidais são úteis para resolução de problemas direcionada, mas podem ser dominados pelos modos de sala.',
        'Baixe sempre o volume antes de mudar de modo, especialmente em auscultadores ou amplificadores de alta potência.',
      ],
    },
  ],
  ui: {
    normal: 'Em Fase',
    inverted: 'Invertido',
    stop: 'Parar',
    pause: 'Pausa',
    volume: 'Nível de saída',
    noiseColor: 'Sinal de teste',
    pinkNoise: 'Ruído rosa',
    sineTone: 'Tom sinusoidal',
    frequency: 'Frequência do tom',
    statusReady: 'Pronto',
    statusNormal: 'Em fase',
    statusInverted: 'Invertido',
    instruction:
      'O invertido deve soar mais fraco. Mais alto significa verificar a cablagem.',
    channelLabel: 'Testador de fase de altifalantes',
    leftChannel: 'Canal esquerdo',
    rightChannel: 'Canal direito',
    leftShort: 'E',
    rightShort: 'D',
    polarityNormal: '0° alinhado',
    polarityInverted: '180° invertido',
    safety: 'Comece baixo. Os testes de polaridade podem ficar altos com amplificadores, monitores de estúdio, sistemas de áudio automóvel e auscultadores.',
  },
};
