import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ejetor-agua-limpeza-altifalante';
const title = 'Ejetor de Água para Limpeza de Altifalante';
const description =
  'Reproduza um tom grave de 165 Hz para ajudar a expulsar água, pó ou detritos soltos dos altifalantes de telemóveis, tablets e portáteis.';

const faqData = [
  {
    question: 'Que frequência devo usar para ejetar água de um altifalante?',
    answer:
      'Um tom grave por volta dos 165 Hz é um bom ponto de partida porque move visivelmente os diafragmas pequenos dos altifalantes sem depender de frequências agudas penetrantes. Alguns dispositivos respondem melhor entre 145 Hz e 190 Hz, por isso a ferramenta inclui as três predefinições.',
  },
  {
    question: 'Um tom sonoro consegue remover toda a água do meu telemóvel?',
    answer:
      'Não. Pode ajudar a sacudir as gotas da grelha do altifalante ou da câmara acústica, mas não seca líquido atrás de vedações, dentro de portas ou por baixo do ecrã. Se o dispositivo foi submerso, desligue-o e siga as instruções de secagem do fabricante.',
  },
  {
    question: 'Isto é seguro para os altifalantes?',
    answer:
      'Use sessões curtas, comece abaixo do volume máximo e pare se ouvir arranhões, chocalhar ou distorção. Um pequeno altifalante de telemóvel não foi concebido para reprodução prolongada de graves em alta potência, por isso ciclos curtos repetidos são mais seguros do que uma rajada longa.',
  },
  {
    question: 'Porque é que o meu altifalante soa abafado depois de se molhar?',
    answer:
      'Uma película de água adiciona massa e amortecimento ao diafragma do altifalante e pode bloquear as aberturas da grelha. Isso reduz os agudos, enfraquece a clareza da fala e faz os graves soarem confusos até que as gotas se movam ou evaporem.',
  },
  {
    question: 'Devo usar arroz depois de o telemóvel se molhar?',
    answer:
      'O arroz não é um método de reparação fiável e pode deixar amido ou partículas nas portas. Use ventilação, um pano absorvente sem fiapos e as instruções do fabricante. A ejeção por som serve apenas para a saída do altifalante, não para o dispositivo inteiro.',
  },
];

const howToData = [
  {
    name: 'Remova as capas e vire o altifalante para baixo',
    text: 'Retire qualquer capa que cubra a grelha, segure o dispositivo de forma a que a gravidade ajude as gotas a sair da abertura do altifalante e mantenha as portas desobstruídas.',
  },
  {
    name: 'Comece com a predefinição padrão de 165 Hz',
    text: 'Prima Iniciar e deixe o tom correr durante 30 segundos. O movimento do diafragma pode desalojar gotas presas na malha da grelha ou na câmara superficial do altifalante.',
  },
  {
    name: 'Experimente as predefinições suave ou profunda, se necessário',
    text: 'Se o som continuar abafado, teste 145 Hz ou 190 Hz num ciclo curto. Altifalantes de tamanhos diferentes ressoam em pontos diferentes.',
  },
  {
    name: 'Pare se o altifalante distorcer',
    text: 'Reduza o volume ou pare imediatamente se o tom se tornar áspero, zumbido ou mecanicamente forçado. A distorção significa que o driver está a ser pressionado com demasiada força.',
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

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Como Funciona um Tom Ejetor de Água', level: 2 },
    {
      type: 'paragraph',
      html: 'O altifalante de um telemóvel é um pequeno diafragma móvel. Quando um tom de baixa frequência é reproduzido, o diafragma move-se para a frente e para trás muitas vezes por segundo. A <strong>165 Hz</strong>, esse movimento acontece 165 vezes a cada segundo. Se houver água na grelha ou presa mesmo à entrada da saída acústica, o ar em movimento pode quebrar a tensão superficial da gota e empurrá-la para a abertura.',
    },
    {
      type: 'paragraph',
      html: 'O processo é mecânico, não químico. O som não evapora líquido e não torna a eletrónica interna impermeável. Deve ser entendido como um ciclo de vibração controlada para a saída do altifalante, útil quando a fala, as notificações ou a música soam abafadas após chuva, um salpico, o duche ou um enxaguamento rápido.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'frequência inicial padrão', icon: 'mdi:sine-wave' },
        { value: '30 s', label: 'primeiro ciclo curto de limpeza', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'intervalo prático de afinação', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'O que o tom pode e não pode fazer',
      badge: 'Âmbito',
      icon: 'mdi:information',
      html: 'O tom pode ajudar a mover gotas soltas no percurso do altifalante. Não pode remover líquido das portas de carregamento, tabuleiros SIM, microfones, módulos de câmara, juntas adesivas ou do espaço por baixo do ecrã.',
    },
    { type: 'title', text: 'Quando Utilizar', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'O altifalante soa baixo, abafado ou borbulhante após um salpico.',
        'Um dos lados do altifalante estéreo do telemóvel soa mais fraco do que o outro.',
        'A grelha do altifalante de um portátil ou tablet acumulou gotas após a limpeza.',
        'Pó ou cotão estão visivelmente soltos na grelha e a reprodução normal soa baça.',
        'O dispositivo funciona normalmente, carrega normalmente e não mostra avisos sobre líquido numa porta.',
      ],
    },
    {
      type: 'tip',
      title: 'Melhor posição física',
      html: 'Vire a grelha do altifalante para baixo ou ligeiramente para baixo. O tom fornece movimento, mas a gravidade decide para onde vai a gota libertada. Remover a capa também é importante porque muitas capas criam um bolso raso que retém água perto da saída.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Porque é que os altifalantes dos telemóveis são afetados rapidamente',
      html: 'Os telemóveis modernos usam drivers compactos de alta excursão e canais acústicos minúsculos. Uma gota que seria inofensiva num grande altifalante de secretária pode cobrir uma parte significativa da grelha de um telemóvel, alterando a pressão e amortecendo o diafragma o suficiente para fazer as vozes soarem distantes.',
    },
    {
      type: 'table',
      headers: ['Sintoma', 'Causa provável', 'O que tentar'],
      rows: [
        ['Fala abafada', 'Película de água sobre a grelha', 'Execute 165 Hz durante 30 segundos, altifalante virado para baixo'],
        ['Zumbido durante o tom', 'Gota em movimento ou driver sobrecarregado', 'Reduza o volume; pare se o zumbido persistir'],
        ['Um altifalante mais baixo', 'Apenas uma saída está bloqueada', 'Rode o dispositivo para que essa saída fique virada para baixo'],
        ['Sem som', 'Saída sem som, rota Bluetooth ou falha de hardware', 'Verifique a rota de áudio antes de repetir ciclos'],
      ],
    },
    { type: 'title', text: 'Escolher a Frequência Certa', level: 2 },
    {
      type: 'paragraph',
      html: 'Não existe um número mágico universal porque o tamanho do altifalante, a forma da grelha, o design da membrana impermeável e a geometria da capa variam. A razão pela qual <strong>165 Hz</strong> é popular é que se situa suficientemente baixo para criar um deslocamento visível do cone em muitos altifalantes pequenos, mantendo-se dentro de um intervalo que a maioria dos dispositivos consegue reproduzir com volume.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz suave',
          description: 'Útil para altifalantes muito pequenos ou sobrecarregados onde o tom padrão soa áspero.',
          icon: 'mdi:leaf',
          points: ['Tom mais grave', 'Movimento menos agressivo', 'Boa primeira repetição'],
        },
        {
          title: '165 Hz padrão',
          description: 'Ponto de partida equilibrado para telemóveis, tablets e muitas aberturas de altifalantes de portáteis.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Predefinição padrão', 'Forte deslocamento do diafragma', 'Melhor primeiro ciclo'],
        },
        {
          title: '190 Hz profundo',
          description: 'Um impulso ligeiramente mais alto que pode funcionar quando um altifalante específico ressoa acima de 165 Hz.',
          icon: 'mdi:waves',
          points: ['Vibração mais firme', 'Útil como segunda passagem', 'Evite ciclos longos'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Frequências baixas versus frequências altas',
      items: [
        { pro: 'Os tons graves movem mais ar e distância do diafragma em altifalantes pequenos.', con: 'Podem distorcer mais cedo no volume máximo.' },
        { pro: 'Os tons agudos são mais fáceis de ouvir através de algumas grelhas.', con: 'Geralmente movem menos ar e podem ser desagradáveis ou inaudíveis para alguns utilizadores.' },
        { pro: 'Um tom grave curto é fácil de avaliar de ouvido.', con: 'Não deve ser repetido em ciclo durante muitos minutos sem pausas.' },
      ],
    },
    {
      type: 'message',
      title: 'Regra de afinação de frequência',
      ariaLabel: 'Regra de afinação de frequência',
      html: 'Se o altifalante soar limpo após um ciclo de 30 segundos, pare. Mais ciclos não são uma rotina de manutenção; são apenas um auxílio de recuperação após líquido ou detritos terem alcançado a abertura do altifalante.',
    },
    { type: 'title', text: 'Procedimento de Limpeza Segura', level: 2 },
    {
      type: 'paragraph',
      html: 'Comece abaixo do volume máximo do sistema, especialmente em portáteis e tablets com altifalantes maiores. Aumente apenas até o tom ser claramente audível e o dispositivo vibrar ligeiramente. Se ouvir um chocalhar agudo, som de arranhão ou queda súbita de volume, pare a ferramenta e deixe o dispositivo secar naturalmente.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Desligue os auriculares e altifalantes Bluetooth para que o tom seja reproduzido pelo altifalante molhado.',
        'Seque o exterior com um pano sem fiapos antes de reproduzir som.',
        'Segure a saída do altifalante para baixo e mantenha a mão afastada da grelha.',
        'Execute 30 segundos a 165 Hz.',
        'Aguarde um minuto, teste áudio de fala normal e depois repita apenas uma vez, se necessário.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Não use calor ou ar comprimido',
      badge: 'Evitar',
      icon: 'mdi:alert',
      html: 'Secadores de cabelo, fornos e ar comprimido de alta pressão podem empurrar a humidade para dentro, deformar vedações ou danificar membranas. O tom sonoro é mais suave porque trabalha a partir do movimento do altifalante já concebido para o dispositivo.',
    },
    {
      type: 'summary',
      title: 'Lista rápida de segurança',
      items: [
        'Ciclos curtos são melhores do que reprodução longa e contínua.',
        'Reduza o volume se o tom zumbir de forma áspera.',
        'Pare se o dispositivo mostrar avisos de deteção de líquido.',
        'A ejeção por som ajuda apenas a saída do altifalante, não o telemóvel inteiro.',
      ],
    },
    { type: 'title', text: 'Resistência à Água Não É Impermeabilização', level: 2 },
    {
      type: 'paragraph',
      html: 'Muitos telemóveis anunciam resistência à água, mas essa classificação é medida em condições laboratoriais definidas. A exposição real à água inclui movimento, sabão, sal, calor, pressão, idade, impactos e vedações gastas. Um tom de limpeza de altifalante não restaura uma vedação e não valida que um telemóvel é seguro para carregar.',
    },
    {
      type: 'table',
      headers: ['Exposição', 'Utilidade do tom do altifalante', 'Ação adicional'],
      rows: [
        ['Chuva ligeira', 'Frequentemente útil se o áudio estiver abafado', 'Seque o exterior e execute um ciclo curto'],
        ['Salpico de água limpa', 'Útil para gotas perto da grelha', 'Mantenha as portas secas antes de carregar'],
        ['Água da piscina ou do mar', 'Limitado; podem ficar resíduos', 'Enxague apenas se o fabricante permitir, depois recorra a assistência se necessário'],
        ['Sabão, refrigerante ou café', 'Baixa; resíduos pegajosos alteram a grelha', 'Desligue e procure orientação de limpeza'],
        ['Submersão total', 'Não é suficiente', 'Siga os passos de emergência do fabricante'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diafragma', definition: 'A superfície móvel dentro de um altifalante que empurra o ar para criar som.' },
        { term: 'Ressonância', definition: 'Uma frequência onde um sistema físico se move de forma mais eficiente porque a sua forma e massa favorecem essa vibração.' },
        { term: 'Tensão superficial', definition: 'A força que permite a uma gota agarrar-se a uma grelha ou membrana em vez de escorrer imediatamente.' },
        { term: 'Câmara acústica', definition: 'O minúsculo percurso interno que guia o som do altifalante desde o driver até à abertura do dispositivo.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Porque pode soar mais alto depois da limpeza',
      html: 'A água bloqueia primeiro as frequências altas porque os comprimentos de onda pequenos são facilmente dispersos por obstruções na grelha. Quando as gotas se movem, as consoantes, os toques de notificação e os detalhes da voz regressam frequentemente antes de os graves mudarem de forma notória.',
    },
    { type: 'title', text: 'Limpeza de Pó e Detritos', level: 2 },
    {
      type: 'paragraph',
      html: 'A mesma vibração pode soltar pó seco, cotão ou partículas depositadas na malha do altifalante, mas não deve substituir uma limpeza física cuidadosa. Se os detritos forem pegajosos, oleosos ou estiverem compactados na grelha, a vibração por si só pode apenas movê-los de um lado para o outro. Use uma escova macia e seca no exterior e evite inserir ferramentas metálicas na abertura.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vibração sonora',
          description: 'Boa para partículas soltas e gotas que podem mover-se livremente.',
          icon: 'mdi:sine-wave',
          points: ['Sem contacto com a grelha', 'Rápido', 'Melhor para salpicos recentes'],
        },
        {
          title: 'Escovagem exterior suave',
          description: 'Melhor para cotão ou pó visível na superfície da malha.',
          icon: 'mdi:brush',
          points: ['Funciona sem som alto', 'Evita sobrecarregar o altifalante', 'Requer cuidado perto de membranas'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Após ambientes com pó',
      html: 'Execute o tom com volume moderado e depois limpe a grelha exterior com um pano de microfibra seco. Não adicione álcool ou produtos de limpeza líquidos a menos que o fabricante do dispositivo o recomende explicitamente para essa superfície.',
    },
    { type: 'title', text: 'Notas Específicas por Dispositivo', level: 2 },
    {
      type: 'paragraph',
      html: 'Os telemóveis, tablets e portáteis colocam os altifalantes em configurações acústicas diferentes. Um altifalante de telemóvel com disparo inferior geralmente tem uma saída curta perto da porta de carregamento, pelo que a água pode sair rapidamente quando a grelha está virada para baixo. Um tablet pode usar um canal lateral mais longo, o que significa que o tom pode tornar o som mais claro gradualmente, em vez de numa explosão óbvia. Um altifalante de portátil geralmente dispara através do teclado ou de uma ranhura inferior, pelo que o líquido pode estar numa camada de tecido, malha de plástico ou grelha externa, em vez de diretamente no driver.',
    },
    {
      type: 'paragraph',
      html: 'Para um telemóvel, rode o dispositivo até que o altifalante que soa abafado fique no ponto mais baixo. Para um tablet, experimente as orientações retrato e paisagem porque a abertura bloqueada pode estar numa borda diferente da esperada. Para um portátil, mantenha o equipamento numa superfície estável e seca e evite inclinar líquido para o teclado, dobradiça ou ventoinhas. O tom deve ajudar o percurso do altifalante; não deve encorajar a água a deslocar-se pelo dispositivo.',
    },
    {
      type: 'table',
      headers: ['Tipo de dispositivo', 'Orientação recomendada', 'Conselho de ciclo'],
      rows: [
        ['Telemóvel', 'Grelha do altifalante para baixo, capa removida', 'Um ciclo de 30 segundos, depois teste áudio de voz'],
        ['Tablet', 'Borda bloqueada virada para baixo', 'Comece com volume moderado porque os altifalantes são maiores'],
        ['Portátil', 'Posição estável normal, a menos que o líquido esteja numa grelha externa', 'Use volume mais baixo e pare se o chassis vibrar fortemente'],
        ['Smartwatch', 'Siga primeiro as instruções de bloqueio de água do fabricante', 'Use o tom web apenas se o navegador conseguir encaminhar som para o altifalante do relógio'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Verificação de Bluetooth e rota de áudio',
      badge: 'Antes de começar',
      icon: 'mdi:bluetooth-audio',
      html: 'Se auriculares sem fios, um sistema de carro ou um altifalante externo estiverem ligados, o tom pode ser reproduzido pela saída errada. Desligue o áudio Bluetooth antes de começar e depois confirme que um toque normal ou um vídeo curto é reproduzido pelo altifalante molhado.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Porque é que o microfone é diferente',
      html: 'A porta do microfone é um percurso de entrada com malha protetora e um minúsculo sensor de pressão, não um diafragma de altifalante que pode empurrar ar para fora. Não assuma que um tom ejetor de água vai limpar gravações de microfone abafadas. Deixe o dispositivo secar e evite enfiar objetos no orifício do microfone.',
    },
    { type: 'title', text: 'Volume, Distorção e Conforto Auditivo', level: 2 },
    {
      type: 'paragraph',
      html: 'Um tom ejetor de água é intencionalmente repetitivo e pode ser desconfortável numa sala silenciosa. O objetivo não é o volume máximo; o objetivo é movimento suficiente do diafragma para perturbar as gotas. Se o tom for doloroso, reduza o volume ou afaste o dispositivo, mantendo a saída do altifalante desobstruída. O conforto auditivo importa porque um ciclo de limpeza bem-sucedido deve durar segundos, não uma exposição prolongada.',
    },
    {
      type: 'paragraph',
      html: 'A distorção é um sinal de aviso útil. Um tom grave limpo soa estável, mesmo que o corpo do telemóvel vibre. Um tom mau soa estalado, áspero, metálico ou instável. Isso pode acontecer porque a água está a mover-se, porque o altifalante está a atingir o seu limite de excursão ou porque o amplificador do dispositivo está a saturar. Reduzir o volume é a primeira correção; repetir mais alto é o movimento errado.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Use os botões de volume do dispositivo e o controlo de volume da ferramenta em conjunto; qualquer um deles pode tornar a saída demasiado alta.',
        'Evite colocar o altifalante contra uma mesa, almofada ou mão porque o fluxo de ar bloqueado aumenta o chocalhar.',
        'Faça pausas entre ciclos para que o driver e o amplificador não sejam mantidos em alta potência continuamente.',
        'Se a música normal ainda estalar após o tempo de secagem, trate isso como um sintoma de reparação e não como um problema de limpeza.',
      ],
    },
    {
      type: 'message',
      title: 'Regra de conforto',
      ariaLabel: 'Regra de conforto',
      html: 'Se o tom soar demasiado alto para os seus ouvidos, já está mais alto do que o necessário para uma primeira tentativa. A ejeção de água depende de movimento e orientação, não de volume punitivo.',
    },
    { type: 'title', text: 'Resolução de Problemas Após o Tom', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Procure reparação se estes sinais aparecerem',
      badge: 'Parar',
      icon: 'mdi:close-octagon',
      html: 'Pare de usar a ejeção por som se o dispositivo aquecer de forma anormal, se desligar, mostrar avisos de líquido, não tiver saída após verificação de rotas ou se o altifalante chocalhar durante a fala normal. Esses sintomas podem indicar danos além de gotas na grelha.',
    },
    {
      type: 'table',
      headers: ['Resultado após 30 segundos', 'Significado', 'Próximo passo'],
      rows: [
        ['Som mais claro', 'A gota provavelmente moveu-se', 'Pare e deixe o dispositivo descansar'],
        ['Pequena melhoria', 'Ainda há alguma humidade', 'Aguarde e depois repita um ciclo curto'],
        ['Sem alteração', 'O bloqueio pode ser mais profundo ou pegajoso', 'Seque naturalmente e inspecione rota/configurações'],
        ['Distorção pior', 'O driver pode estar sobrecarregado ou danificado', 'Pare e reduza o volume; considere assistência'],
      ],
    },
    {
      type: 'summary',
      title: 'Conclusão prática',
      items: [
        'Use 165 Hz primeiro porque equilibra movimento e compatibilidade.',
        'Vire a grelha para baixo e mantenha o ciclo curto.',
        'Trate o tom como recuperação do altifalante, não como secagem total do dispositivo.',
        'As orientações do fabricante sobre líquidos prevalecem sobre qualquer ferramenta web.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Pronto para ejetar',
    statusPlaying: 'Tom em execução',
    statusComplete: 'Ciclo concluído',
    frequencyLabel: 'Frequência',
    volumeLabel: 'Volume',
    durationLabel: 'Duração',
    startButton: 'Iniciar ejetor de água',
    stopButton: 'Parar tom',
    hertzUnit: 'Hz',
    secondsShort: 's',
    presetGentle: 'Suave',
    presetStandard: '165 Hz',
    presetDeep: 'Profundo',
    safetyTitle: 'Segurança primeiro',
    safetyText: 'Comece abaixo do volume máximo e pare se o altifalante vibrar ou distorcer.',
    bestResult: 'Melhor resultado',
    bestResultText: 'Remova a capa, aponte o altifalante para baixo e execute um ciclo curto.',
  },
};
