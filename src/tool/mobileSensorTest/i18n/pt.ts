import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-sensores-celular';
const title = 'Teste de Sensores do Celular';
const description = 'Execute um teste online de giroscópio, acelerômetro, sensor de movimento e nível de bolha no seu celular para verificar inclinação, rotação, deriva e problemas de calibração dos sensores.';

const faqData = [
  {
    question: 'Como posso testar o giroscópio do meu celular online?',
    answer: 'Abra o teste no celular, toque em Iniciar Calibração, permita o acesso ao movimento se solicitado e gire e incline o dispositivo. Um giroscópio e sensor de orientação funcionando devem atualizar alpha, beta e gamma suavemente, sem travar ou pular bruscamente.',
  },
  {
    question: 'Posso testar o acelerômetro com um nível de bolha?',
    answer: 'Sim. Coloque o celular em uma mesa plana após iniciar o teste. A bolha deve se estabilizar perto do centro e os valores de aceleração devem permanecer estáveis. Se a bolha derivar muito enquanto o celular estiver parado, o acelerômetro pode precisar de calibração ou a capa, a mesa ou o hardware do dispositivo podem estar interferindo.',
  },
  {
    question: 'Por que o iPhone pede permissão de movimento?',
    answer: 'O Safari no iPhone e iPad exige um toque antes que os sites possam acessar os sensores de movimento e orientação. Se a permissão for negada, o teste não pode ler os dados do giroscópio ou acelerômetro até que você permita o acesso ao movimento.',
  },
  {
    question: 'Isso pode consertar ou calibrar uma bússola com defeito?',
    answer: 'Nenhuma ferramenta de navegador pode reparar hardware ou forçar a calibração da bússola do sistema. Este teste ajuda a identificar sintomas: leituras travadas, movimento ruidoso, deriva, permissão ausente ou um navegador que não expõe os sensores.',
  },
];

const howToData = [
  { name: 'Abra o teste no seu celular', text: 'Use o mesmo iPhone, iPad, celular Android ou tablet que você deseja diagnosticar. Navegadores de desktop geralmente não expõem sensores de movimento.' },
  { name: 'Permita o acesso ao movimento', text: 'Toque em Iniciar Calibração e aceite o aviso de permissão de movimento ou orientação se o navegador mostrar um.' },
  { name: 'Teste inclinação e rotação', text: 'Incline o celular para frente, role para esquerda e direita e depois gire-o plano sobre uma mesa. Observe mudanças suaves de alpha, beta, gamma e aceleração.' },
  { name: 'Verifique a deriva em uma superfície plana', text: 'Deixe o celular parado por vários segundos. Um sensor saudável deve se estabilizar em vez de vaguear constantemente, dar picos ou travar.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Teste online de giroscópio e acelerômetro para celulares', level: 2 },
    {
      type: 'paragraph',
      html: 'Use este teste de sensores móveis quando a rotação da tela parecer errada, jogos ou apps de RA derivarem, um app de nível de bolha parecer impreciso, a navegação apontar na direção errada ou o celular não reagir corretamente à inclinação. O teste mostra ao vivo o comportamento do giroscópio, acelerômetro, rotação e nível para que você possa distinguir um problema de permissão do navegador de um problema real de sensor ou calibração.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Intenção de busca principal', value: 'testar giroscópio online' },
        { label: 'Também verifica', value: 'deriva do acelerômetro' },
        { label: 'Melhor dispositivo', value: 'celular ou tablet' },
      ],
    },
    { type: 'title', text: 'O que cada leitura do sensor indica', level: 3 },
    {
      type: 'table',
      headers: ['Leitura', 'Útil para', 'Sinais de alerta'],
      rows: [
        ['Alpha', 'Verificar a rotação em torno do eixo vertical, útil para movimentos tipo bússola e mudanças de direção.', 'Não muda ao girar o celular plano, salta em grandes quantidades ou trava no zero.'],
        ['Beta', 'Verificar a inclinação frente-trás para rotação de tela, jogos, nivelamento de câmera e controles de RA.', 'Move-se na direção errada, trava em um valor ou continua derivando enquanto o celular está parado.'],
        ['Gamma', 'Verificar o rolamento esquerda-direita para rotação paisagem, jogos de corrida, apps de nível e estabilizadores.', 'Um lado responde de forma diferente, os valores são ruidosos ou a bolha nunca centraliza em uma mesa plana.'],
        ['Aceleração X/Y/Z', 'Verificar a resposta do acelerômetro, detecção de sacudidas, direção da gravidade e estabilidade do movimento.', 'Picos grandes estando parado, sem resposta ao movimento ou leituras instáveis após remover a capa.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sintomas que este teste ajuda a diagnosticar',
      html: '<p>Use os valores ao vivo para investigar falhas na rotação automática, giroscópio com atraso, deriva do acelerômetro, avisos de calibração da bússola, rastreamento RA que desliza, erros de nível da câmera, controles de movimento puxando para um lado ou um celular que só relata movimento em apps nativos, mas não no navegador.</p>',
    },
    { type: 'title', text: 'Giroscópio vs acelerômetro vs bússola', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Giroscópio', description: 'Mede a velocidade de rotação. É essencial para RA, jogos, estabilização de câmera, controles de movimento e mudanças suaves de orientação.' },
        { title: 'Acelerômetro', description: 'Mede a aceleração e a direção da gravidade. Permite a inclinação, detecção de sacudidas, contagem de passos e o comportamento do nível de bolha digital.' },
        { title: 'Bússola / magnetômetro', description: 'Ajuda a estimar a direção, mas pode ser perturbado por ímãs, objetos metálicos, suportes de carro, capas, alto-falantes, laptops e eletrônicos próximos.' },
      ],
    },
    { type: 'title', text: 'Como testar a calibração do sensor corretamente', level: 3 },
    {
      type: 'list',
      items: [
        'Remova capas magnéticas, carteiras MagSafe, suportes metálicos, clipes de controle e acessórios antes de testar.',
        'Coloque o celular em uma mesa firme e plana e aguarde vários segundos antes de julgar a deriva.',
        'Gire o celular lentamente em cada eixo em vez de sacudi-lo imediatamente.',
        'Compare o Safari ou Chrome com um app nativo de sensor ou bússola se o navegador não mostrar dados.',
        'Reinicie o dispositivo e repita o teste se as leituras estiverem travadas em vários apps.',
      ],
    },
    {
      type: 'tip',
      title: 'Nota sobre permissões no iPhone e Android',
      html: 'No iPhone e iPad, o Safari pode solicitar permissão de movimento e orientação após um toque. No Android, o Chrome geralmente expõe os sensores de movimento de forma mais direta, mas configurações de privacidade, flags do navegador, modos de economia de bateria e webviews incorporadas ainda podem bloquear ou reduzir os dados do sensor.',
    },
    {
      type: 'table',
      headers: ['Problema', 'Causa provável', 'Próximo passo'],
      rows: [
        ['Nenhum valor muda', 'Permissão negada, navegador não suportado, dispositivo desktop ou webview restrita.', 'Abra no próprio celular, use Safari ou Chrome, permita o acesso ao movimento e recarregue a página.'],
        ['Bolha deriva em uma mesa', 'Problema de calibração, superfície irregular, interferência da capa ou ruído do acelerômetro.', 'Remova a capa, use uma superfície plana conhecida, reinicie e compare com um app de nível nativo.'],
        ['Direção da bússola está errada', 'Interferência magnética ou calibração da bússola do sistema.', 'Afaste-se de metais/eletrônicos e use o fluxo de calibração da bússola do sistema operacional.'],
        ['Valores saltam ou dão picos', 'Ruído do sensor, hardware danificado, limitação agressiva do navegador ou movimento físico repentino.', 'Teste parado, feche apps pesados e compare com outro navegador ou app nativo.'],
      ],
    },
    {
      type: 'summary',
      title: 'Para que este teste é útil',
      items: [
        'Testar o giroscópio de um celular online sem instalar um app.',
        'Verificar a deriva do acelerômetro com um nível de bolha ao vivo.',
        'Descobrir se os controles de movimento falham por hardware, calibração, permissão ou suporte do navegador.',
        'Preparar um celular para RA, jogos, nivelamento de câmera, navegação ou solução de problemas de rotação de tela.',
      ],
    },
  ],
  ui: {
    startButton: 'Iniciar Calibração',
    permissionHint: 'Toque uma vez para desbloquear os sensores de movimento',
    privacyBadge: 'Dados locais do sensor',
    privacyCopy: 'As leituras de orientação e movimento permanecem dentro desta sessão do navegador.',
    orientationPanel: 'Orientação',
    motionPanel: 'Movimento',
    bubblePanel: 'Nível de bolha digital',
    statusReady: 'Pronto para permissão do sensor',
    statusWaiting: 'Aguardando permissão do navegador',
    statusDenied: 'Acesso ao sensor negado ou indisponível',
    statusUnsupported: 'Os sensores de movimento não são expostos por este navegador',
    statusActive: 'Fluxo de sensores ao vivo ativo',
    steadyLabel: 'Estável',
    movingLabel: 'Em movimento',
    shakingLabel: 'Sacudindo',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Desvio de nível',
    motionMagnitudeLabel: 'Magnitude do movimento',
    cubeLabel: 'Cubo 3D de orientação do dispositivo',
    bubbleLabel: 'Indicador de nível de bolha',
    calibrationLabel: 'Graus ao vivo',
  },
};
