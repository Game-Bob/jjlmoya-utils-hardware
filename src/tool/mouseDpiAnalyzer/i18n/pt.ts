import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'analisador-dpi-mouse';
const title = 'Analisador de DPI de Mouse';
const description =
  'Meça os DPI reais do seu mouse online movendo-o por uma distância física conhecida e comparando o movimento capturado do ponteiro em pixels.';

const faqData = [
  {
    question: 'Como funciona um analisador de DPI de mouse online?',
    answer:
      'Ele pede que você mova o mouse por uma distância física conhecida, registra os eventos de movimento do navegador, corrige os valores capturados com devicePixelRatio e divide os pixels resultantes pela distância em polegadas.',
  },
  {
    question: 'Por que os DPI reais podem diferir do valor impresso no mouse?',
    answer:
      'Tolerâncias do sensor, etapas de firmware, comportamento da superfície, dimensionamento do sistema operacional, aceleração do ponteiro e perfis de jogo podem fazer com que o movimento medido difira dos DPI nominais selecionados no software.',
  },
  {
    question: 'Devo desativar a aceleração do ponteiro antes do teste?',
    answer:
      'Sim. Desative Aprimorar precisão do ponteiro no Windows e qualquer curva de aceleração do fabricante se quiser uma medição limpa de DPI. Deixe-a ativada apenas se quiser ver intencionalmente como sua configuração habitual se comporta.',
  },
  {
    question: 'Qual distância física devo usar?',
    answer:
      'Distâncias mais longas reduzem o erro da mão. A largura de um cartão de crédito é conveniente, mas uma passagem com régua de 100 mm ou 4 polegadas geralmente é mais repetível se sua mesa tiver espaço suficiente.',
  },
];

const howToData = [
  {
    name: 'Escolha uma referência física',
    text: 'Use 5 ou 10 mm para DPI muito altos, 1 polegada para testes convencionais ou referências mais longas quando tiver espaço suficiente na mesa.',
  },
  {
    name: 'Segure o botão de captura',
    text: 'Pressione e segure o alvo de captura na tela e mova o mouse fisicamente para a direita exatamente pela distância escolhida.',
  },
  {
    name: 'Solte na marca física',
    text: 'Solte o botão quando o mouse atingir a marca física real na sua mesa. A ferramenta calcula pixels por polegada e informa os DPI medidos.',
  },
  {
    name: 'Repita em velocidades diferentes',
    text: 'Faça passagens lentas e rápidas. Se os DPI mudarem muito, a aceleração do ponteiro ou a suavização do sensor podem estar influenciando o resultado.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Analisador de DPI de Mouse Online: Meça a Sensibilidade Real do Sensor', level: 2 },
    {
      type: 'paragraph',
      html: 'Um mouse pode anunciar 800, 1600, 3200 ou 26000 DPI, mas o valor que importa em jogos e trabalho de precisão é o movimento que realmente chega ao computador. Este analisador de DPI de mouse online mede esse valor prático comparando um movimento físico conhecido com o movimento do ponteiro capturado no navegador. O resultado é expresso em pixels por polegada, a mesma unidade comumente usada quando se fala de DPI ou CPI do mouse.',
    },
    {
      type: 'paragraph',
      html: 'O teste é intencionalmente local e simples: segure o alvo de captura, mova o mouse exatamente para a direita pela distância física selecionada e solte. A ferramenta acumula deltas de movimento nativos em vez de usar um script de taxa de polling ou um teste de mouse genérico. Como o cálculo é executado no seu navegador, não é necessário baixar drivers, criar conta ou enviar dados para a nuvem.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Condição importante para o teste',
      html: 'Para uma medição limpa de DPI, desative a aceleração do ponteiro do sistema operacional e as curvas de aceleração do fabricante. Se a aceleração permanecer ativada, o resultado descreve o comportamento atual do seu ponteiro em vez da configuração pura do sensor.',
    },
    { type: 'title', text: 'Como Funciona o Cálculo Real de DPI', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI significa pontos por polegada. No contexto dos mouses, costuma-se usar DPI e CPI de forma intercambiável para descrever quantas contagens ou pixels do ponteiro são produzidos quando o mouse percorre uma polegada física. Este analisador registra o movimento horizontal durante uma passagem controlada, converte a distância selecionada para polegadas e depois divide os pixels capturados pelas polegadas. Por exemplo, se o mouse informa 3200 pixels corrigidos em 2 polegadas, o valor medido é aproximadamente 1600 DPI.',
    },
    {
      type: 'list',
      items: [
        'Escolha uma referência curta como 10 mm para DPI muito altos ou uma mais longa para DPI baixos.',
        'Mantenha pressionado o controle de captura central para que o navegador registre o movimento apenas durante a passagem.',
        'Mova-se fisicamente para a direita, mantendo a trajetória o mais reta possível.',
        'Solte na marca física real e leia os DPI calculados.',
        'Repita várias vezes e faça a média das passagens consistentes em vez de confiar em uma única passagem.',
      ],
    },
    {
      type: 'table',
      headers: ['Movimento capturado', 'Distância física', 'DPI medidos'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm largura do cartão de crédito', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Faça um traço limpo',
      html: 'Um único traço horizontal é mais importante do que uma longa distância. Para DPI muito altos, use a predefinição de 5 mm ou 10 mm: ela mantém o movimento pequeno o suficiente para permanecer dentro da tela e ainda assim fornece ao calculador uma referência física conhecida. A barra de progresso é apenas um medidor de sinal de entrada; a régua ou o cartão sobre a mesa é o ponto de parada.',
    },
    { type: 'title', text: 'Por que os DPI Medidos Podem Diferir dos DPI Anunciados', level: 3 },
    {
      type: 'paragraph',
      html: 'Os DPI anunciados geralmente são uma etapa de firmware selecionável, não um valor certificado em laboratório para cada superfície e cada unidade. Dois mouses configurados com os mesmos DPI nominais podem parecer diferentes se seus sensores, dimensionamento de firmware, altura dos pés, textura da superfície, comportamento de elevação ou configurações do sistema operacional forem diferentes. Uma pequena variação é normal; uma grande variação geralmente significa que a configuração do teste ou o caminho do software está influenciando a medição.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'DPI nominais',
          description: 'O valor mostrado no software do mouse ou impresso na página do produto. Útil como ponto de partida, mas não prova a saída real de movimento.',
          points: ['Fácil de ler', 'Pode ocultar dimensionamento de firmware', 'Varia conforme o perfil'],
        },
        {
          title: 'DPI medidos',
          description: 'O valor calculado a partir do deslocamento físico e do movimento do ponteiro capturado. Ideal para igualar um mouse ao outro.',
          highlight: true,
          points: ['Prático e repetível', 'Sensível à precisão manual', 'Mostra o comportamento real da configuração'],
        },
        {
          title: 'Sensibilidade no jogo',
          description: 'A resposta final da câmera ou cursor após o jogo multiplicar a entrada do mouse pelo seu próprio valor de sensibilidade.',
          points: ['O que você realmente sente', 'Específica do jogo', 'Não é uma medição do sensor'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Vantagens e desvantagens da medição de DPI pelo navegador',
      items: [
        { pro: 'Não requer instalação de drivers', con: 'O navegador vê o movimento do ponteiro processado, não o sinal elétrico do sensor' },
        { pro: 'Bom para comparar mouses e perfis rapidamente', con: 'As configurações de aceleração podem distorcer o resultado se deixadas ativadas' },
        { pro: 'Funciona com referências físicas comuns', con: 'O alinhamento da mão e as marcas na mesa afetam a repetibilidade' },
      ],
    },
    { type: 'title', text: 'Preparando Windows, macOS e o Software do Mouse', level: 3 },
    {
      type: 'paragraph',
      html: 'Antes de usar um analisador de DPI, torne o caminho de entrada o mais neutro possível. No Windows, desative Aprimorar precisão do ponteiro se quiser um comportamento não processado. No software do fabricante, desative o ajuste de ângulo, aceleração, controle de ondulação, suavização ou assistências específicas de superfície, a menos que você queira medi-los deliberadamente. No macOS, a aceleração do ponteiro faz parte do caminho normal do cursor, portanto o valor deve ser tratado como um resultado prático do sistema, não como um resultado puro do sensor.',
    },
    {
      type: 'table',
      headers: ['Configuração', 'Recomendada para DPI puros', 'Motivo'],
      rows: [
        ['Aceleração do ponteiro', 'Desativada', 'A aceleração modifica o movimento de saída dependendo da velocidade'],
        ['Etapa de DPI do software do mouse', 'Etapa única fixa', 'Evita alterações acidentais de perfil durante o teste'],
        ['Ajuste de ângulo', 'Desativado', 'Pode modificar o movimento diagonal e mascarar a saída natural do sensor'],
        ['Dimensionamento do sistema operacional', 'Deixar normal, a ferramenta corrige com devicePixelRatio', 'O analisador neutraliza o zoom do navegador e a proporção de pixels da tela em seu cálculo'],
        ['Sobreposições de jogo ou macros', 'Desativadas', 'Software adicional pode interceptar a entrada e tornar as passagens inconsistentes'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'Igualando dois mouses',
      html: 'Meça o mouse antigo três vezes, anote a média e depois ajuste a etapa de DPI do mouse novo até que seu valor medido fique próximo. Isso geralmente é mais útil do que copiar o número de um aplicativo de fabricante para outro, porque a saída real do sensor pode ser diferente.',
    },
    { type: 'title', text: 'Escolhendo a Referência Física Adequada', level: 3 },
    {
      type: 'paragraph',
      html: 'A interface inclui referências curtas para DPI altos e referências mais longas para DPI baixos. Use 5 ou 10 mm quando o ponteiro cruzar a tela com um movimento minúsculo da mão. Use 1 polegada, 50 mm ou a largura do cartão de 85.6 mm quando o mouse estiver configurado mais próximo dos valores habituais de desktop ou jogos táticos.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'milímetros em uma polegada' },
        { value: '85.6', label: 'milímetros na largura de um cartão de crédito comum' },
        { value: '3+', label: 'passagens repetidas recomendadas antes de confiar em um perfil' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'Pontos por polegada, comumente usado para descrever o movimento do ponteiro produzido por uma polegada de deslocamento do mouse.' },
        { term: 'CPI', definition: 'Contagens por polegada, um termo orientado ao sensor que costuma ser tecnicamente mais preciso para mouses.' },
        { term: 'Aceleração', definition: 'Uma configuração ou curva que modifica o movimento do ponteiro dependendo da velocidade de deslocamento.' },
        { term: 'devicePixelRatio', definition: 'A proporção do navegador entre pixels CSS e pixels físicos da tela, usada aqui para normalizar os efeitos de zoom e dimensionamento da tela.' },
        { term: 'Ajuste de ângulo', definition: 'Correção por firmware ou software que endireita o movimento, às vezes útil para desenho, mas rejeitada por muitos jogadores competitivos.' },
      ],
    },
    { type: 'title', text: 'Lendo o Indicador de Aceleração', level: 3 },
    {
      type: 'paragraph',
      html: 'O indicador de aceleração não é uma prova de laboratório da curva do sistema operacional. É um aviso prático baseado na variação da velocidade de movimento durante a passagem capturada. Se passagens lentas e rápidas produzirem valores de DPI muito diferentes, podem estar envolvidos aceleração, suavização, comportamento da superfície ou movimento manual inconsistente. Uma boa configuração não processada deve produzir DPI medidos semelhantes em várias passagens quando a distância física for a mesma.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Quando o resultado oscila',
      html: 'Se uma passagem indica 780 DPI e a seguinte indica 950 DPI com a mesma distância, não culpe imediatamente o mouse. Verifique as configurações de aceleração, aumente a distância de teste, mantenha a trajetória do mouse horizontal e certifique-se de que o ponteiro não esteja batendo na borda da tela durante a passagem.',
    },
    {
      type: 'summary',
      title: 'Lista de verificação para uma medição confiável de DPI',
      items: [
        'Use uma referência física medida, de preferência de 100 mm ou mais.',
        'Mova-se horizontalmente para a direita e pare exatamente na marca.',
        'Desative a aceleração para comparações de perfil não processado.',
        'Execute pelo menos três passagens e compare a dispersão.',
        'Use os DPI medidos para igualar mouses, não apenas os rótulos de DPI anunciados.',
      ],
    },
    {
      type: 'message',
      title: 'Nota de privacidade',
      html: 'Este teste de aceleração de mouse e o cálculo de DPI são executados localmente no navegador. A ferramenta não precisa de acesso a drivers, números de série do dispositivo ou registros de entrada enviados.',
    },
  ],
  ui: {
    badge: 'Laboratório de DPI reais',
    referenceLabel: 'Referência',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Cartão',
    lineStart: 'Início',
    holdButton: 'Pressione e mova a distância selecionada',
    holdHint: 'Use uma régua ou cartão real sobre a mesa. Não pare porque a barra enche.',
    progressLabel: 'Sinal de entrada',
    activeHint: 'Rastreando movimento',
    dpiLabel: 'DPI medidos',
    pixelsLabel: 'Movimento corrigido',
    distanceReadout: 'Distância física',
    ratioLabel: 'Proporção de pixels',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Pronto para capturar',
    statusTracking: 'Rastreando movimento...',
    statusDone: 'Medição concluída',
    reset: 'Reiniciar',
    accelerationTitle: 'Sinal de aceleração',
    accelerationHint: 'Repita em velocidades lenta e rápida para comparar a consistência.',
    accelerationLow: 'estável',
    accelerationMedium: 'variável',
    accelerationHigh: 'deriva alta',
    sampleCount: 'Amostras',
  },
};
