import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';

const slug = 'teste-gamepad-online';
const title = 'Teste de Gamepad e Comando Online';
const description = 'Teste o seu comando de Xbox, PlayStation ou PC. Visualize zonas mortas, drift do joystick e botões.';

const faqData = [
  {
    question: 'O que é o Drift do Joystick?',
    answer: 'O drift ocorre quando o comando regista movimento sem que o joystick seja tocado. É causado pelo desgaste nos potenciómetros internos, que enviam um sinal elétrico falso numa direção constante.',
  },
  {
    question: 'Como posso corrigir o drift através de software?',
    answer: 'Se o drift for ligeiro, pode configurar uma "Zona Morta" (Dead Zone) maior nas definições do seu jogo. Isto ignora pequenos movimentos do joystick no centro.',
  },
  {
    question: 'É compatível com comandos de PS5, Xbox e Switch?',
    answer: 'Sim. A nossa ferramenta utiliza a Gamepad API padrão dos navegadores modernos, que deteta quase qualquer comando ligado via USB ou Bluetooth, incluindo DualSense, DualShock 4 e comandos Xbox.',
  },
  {
    question: 'Porque é que o navegador não deteta o meu comando?',
    answer: 'Por segurança, os navegadores apenas ativam o gamepad após o primeiro premir de um botão. Se não aparecer, prima qualquer botão (como A ou X) e certifique-se de que não está no modo de navegação anónima estrito.',
  },
];

const howToData = [
  {
    name: 'Ligar o comando',
    text: 'Ligue o seu gamepad via USB ou emparelhe-o por Bluetooth com o seu computador.',
  },
  {
    name: 'Ativar a deteção',
    text: 'Mova os joysticks ou prima qualquer botão para que o navegador reconheça o dispositivo ligado.',
  },
  {
    name: 'Testar zonas mortas',
    text: 'Solte os joysticks e observe os eixos no ecrã. Se os valores não estiverem em 0.0000, tem um ligeiro drift.',
  },
  {
    name: 'Verificar botões e vibração',
    text: 'Prima cada botão e gatilho. Os indicadores visuais devem acender-se e, se o seu comando o suportar, pode testar o motor de vibração.',
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

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências Técnicas',
  bibliography: [
    {
      name: 'Gamepad API Standard - W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
    {
      name: 'Vibration API - MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Teste de Gamepad Online: Detete Drift e Problemas de Joystick',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ferramenta gratuita para testar comandos de Xbox, PlayStation, Switch e outros. Visualize zonas mortas, detete drift e teste a vibração.',
    },
    {
      type: 'title',
      text: 'O que é o Drift do Joystick',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O drift é um defeito comum em joysticks analógicos onde o stick regista movimento sem ser tocado. É causado pelo desgaste nos potenciómetros internos.',
    },
    {
      type: 'title',
      text: 'Compatibilidade de Comandos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Compatível com Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro e praticamente qualquer gamepad USB ou Bluetooth moderno.',
    },
  ],
  ui: {
    badge: 'Teste de Input',
    title: 'Teste de Gamepad e Comando',
    description: 'Teste o seu comando e detete problemas.',
    connectionMessage: 'Ligue o seu dispositivo USB ou Bluetooth',
    connectionStatus: 'Ligado',
    axisLabel: 'Eixos',
    buttonsLabel: 'Botões',
    vibrationTitle: 'Teste de Vibração',
    vibrationDescription: 'Requer suporte do navegador e um gamepad compatível.',
    vibrationLow: 'Baixa (Rumble)',
    vibrationHigh: 'Alta (Buzz)',
    eventHistoryTitle: 'Histórico de Eventos',
    eventHistoryClear: 'Limpar',
    eventWaiting: 'A aguardar eventos...',
    gameStartBtn: 'INICIAR DESAFIO',
    gameControllerWarning: 'Ligue um gamepad ou use o teclado',
    gameTimer: 'Temporizador',
    gameScore: 'Pontuação',
    gameInstruction: 'Prima rápido',
    gameCompleted: 'Desafio Concluído',
    gameNewRecord: 'NOVO RECORDE',
    gameRestartBtn: 'Repetir',
    gameFeedback: 'És uma lenda dos botões',
    gameIntroTitlePre: 'Reflexos de ',
    gameIntroHighlight: 'Pro Gamer',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Teste a latência do seu comando e a sua velocidade de reação. Tem ',
    gameIntroDescSeconds: '30 segundos',
    gameIntroDescPost: ' para dominar os botões.',
    gameShareBtn: 'PARTILHAR RATING',
    gameLogConnected: 'Ligado',
    gameLogDisconnected: 'Desligado',
    gameLogCleared: 'Log limpo...',
    gameLogBtnPrefix: 'Botão',
    gameVibNotSupported: 'Vibração não suportada.',
    gameVibLow: 'Baixa',
    gameVibHigh: 'Alta',
    gameMoveStick: 'MOVER STICK',
    gamePress: 'PREMIR',
    rankLegendaryName: 'LENDÁRIO',
    rankLegendaryDesc: 'Os teus dedos movem-se à velocidade do som.',
    rankLegendaryFlavor: 'O meu comando está a voar!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'Tens reflexos de aço e um comando bem calibrado.',
    rankProFlavor: 'O meu comando está a voar!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'Nada mau, mas precisas de mais prática para o jogo competitivo.',
    rankGamerFlavor: 'Quase lá!',
    rankNoobName: 'NOOB',
    rankNoobDesc: 'Tens a certeza de que tens o comando ligado?',
    rankNoobFlavor: 'O comando está contra mim!',
    gameShareText: 'Consegues vencer-me?',
    gameShareScorePrefix: 'Consegui',
    gameShareScoreSuffix: 'toques',
    gameShareTitle: 'Teste de Gamepad Online',
  },
};
