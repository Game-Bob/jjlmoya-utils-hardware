import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-autonomia-ups';
const title = 'Calculadora de Autonomia de UPS';
const description = 'Calcule a autonomia do UPS, a carga total protegida, os watts-hora úteis e o tamanho em VA recomendado para PCs, monitores, routers, NAS e hardware de laboratório doméstico.';

const faqData = [
  {
    question: 'Como calcular a autonomia de um UPS?',
    answer: 'Some a potência em watts de cada dispositivo ligado ao UPS, multiplique os watts-hora da bateria pela eficiência do inversor, subtraia a reserva que pretende manter e divida os watts-hora úteis pelos watts de carga. O resultado em horas pode ser multiplicado por 60 para obter minutos.',
  },
  {
    question: 'Por que a autonomia real do UPS difere da estimativa?',
    answer: 'A autonomia varia com a idade da bateria, a temperatura, a taxa de descarga, a eficiência do inversor, os picos de carga e a tensão de corte do fabricante. Trate o resultado como uma estimativa de planeamento e verifique-o com um teste de desligamento controlado.',
  },
  {
    question: 'Devo dimensionar um UPS por watts ou VA?',
    answer: 'Verifique ambos. Os watts indicam a potência real que o UPS pode fornecer, enquanto os VA incluem o fator de potência. O UPS deve exceder a sua carga em watts e ter margem de VA suficiente para o equipamento ligado.',
  },
  {
    question: 'Quanta margem de UPS devo manter?',
    answer: 'Um objetivo prático é manter a carga normal abaixo de cerca de 70-80% da potência nominal em watts do UPS. Isto deixa margem para picos de arranque, envelhecimento da bateria e dispositivos futuros.',
  },
  {
    question: 'Posso ligar impressoras ou aquecedores a um UPS?',
    answer: 'Evite impressoras laser, aquecedores e outras cargas de alto pico, a menos que o UPS seja explicitamente concebido para as suportar. Podem sobrecarregar o inversor e reduzir drasticamente a autonomia.',
  },
];

const howToData = [
  {
    name: 'Listar os dispositivos protegidos',
    text: 'Introduza os dispositivos que devem permanecer ligados durante uma falha de energia, como o computador, monitor, router, modem, NAS e switch de rede.',
  },
  {
    name: 'Introduza uma potência realista em watts',
    text: 'Use a medição real da tomada sempre que possível. Se tiver apenas a potência nominal da fonte de alimentação, reduza-a para a carga operacional esperada em vez de usar o valor máximo da etiqueta.',
  },
  {
    name: 'Defina a capacidade da bateria e os pressupostos',
    text: 'Introduza os watts-hora da bateria do UPS, a eficiência do inversor, o fator de potência e a percentagem de reserva que deseja manter para um desligamento controlado.',
  },
  {
    name: 'Leia a autonomia e a recomendação de VA',
    text: 'Use os minutos estimados e os VA recomendados como guia de compra ou configuração e valide a instalação com um teste de corte de energia em segurança.',
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

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Autonomia de UPS: Estime o Tempo de Backup da Bateria',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma estimativa de autonomia de UPS responde a duas perguntas práticas: quanto tempo o seu hardware pode permanecer ligado durante um corte de energia e se o UPS é suficientemente grande para a carga ligada. Esta calculadora combina a potência dos dispositivos, os watts-hora da bateria, a eficiência do inversor, o fator de potência e a reserva de desligamento, para que o resultado se aproxime mais de um planeamento real do que uma simples divisão da capacidade da bateria.',
    },
    {
      type: 'title',
      text: 'A Fórmula da Autonomia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A autonomia estimada em horas é <strong>watts-hora úteis da bateria divididos pela carga total em W</strong>. Os watts-hora úteis não correspondem à capacidade impressa na bateria: devem ser ajustados para as perdas do inversor e a reserva que pretende manter para um desligamento controlado. Por exemplo, uma bateria de 432 Wh com 86% de eficiência e 20% de reserva fornece cerca de 297 Wh de energia útil.',
    },
    {
      type: 'table',
      headers: ['Entrada', 'Por que é importante', 'Orientação prática'],
      rows: [
        ['Watts de carga', 'Controla diretamente a autonomia', 'Meça com um medidor de tomada sempre que possível, especialmente para PCs gaming e sistemas NAS.'],
        ['Wh da bateria', 'Define a reserva de energia', 'Use os dados do fabricante ou a tensão nominal multiplicada pelos amperes-hora.'],
        ['Eficiência', 'Compensa as perdas do inversor', '80-90% é um intervalo de planeamento razoável para muitos UPS de consumo.'],
        ['Fator de potência', 'Converte watts em VA', 'Use a especificação do UPS se a conhecer; 0,6-0,8 é comum em modelos de entrada e gama média.'],
        ['Reserva', 'Mantém a margem de desligamento', '10-25% é sensato para um desligamento controlado de PC ou servidor.'],
      ],
    },
    {
      type: 'title',
      text: 'De Quanta Autonomia Precisa?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 minutos: suficiente para suportar breves oscilações ou desligar um computador de secretária em segurança.',
        '10-20 minutos: útil para routers, modems, NAS e pequenos nós de laboratório doméstico.',
        '30+ minutos: melhor para continuidade de rede, trabalho remoto e locais com cortes frequentes.',
        'Várias horas: normalmente requer um sistema de bateria maior, não apenas um UPS de secretária.',
      ],
    },
    {
      type: 'title',
      text: 'Watts vs VA ao Escolher um UPS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os nomes dos produtos UPS frequentemente destacam os VA, mas a potência em watts é o limite real para o equipamento. Um UPS de 900 VA pode suportar apenas 540 W, enquanto outro modelo de 900 VA pode suportar 600 W ou mais. Verifique ambos os valores e mantenha o funcionamento normal abaixo do máximo para evitar alarmes de sobrecarga, redução da vida útil da bateria e falhas de transferência durante um corte.',
    },
    {
      type: 'title',
      text: 'Cargas que Distorcem as Estimativas de Autonomia',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'PCs gaming podem passar de baixo consumo em inatividade para alto consumo da GPU em segundos.',
        'Monitores variam bastante conforme o brilho, modo HDR e tamanho do painel.',
        'Dispositivos NAS consomem mais energia durante o arranque dos discos e reconstruções.',
        'Impressoras laser, aquecedores, bombas e compressores são más cargas para UPS, salvo suporte explícito.',
        'Baterias antigas podem fornecer muito menos autonomia do que a sua capacidade original sugere.',
      ],
    },
    {
      type: 'title',
      text: 'Lista de Verificação para um Teste Seguro',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Carregue totalmente o UPS antes de testar.',
        'Guarde o trabalho aberto e evite testar durante escritas críticas ou atualizações de firmware.',
        'Desligue a alimentação da tomada, não o equipamento, e observe a percentagem de carga do UPS e a estimativa da bateria.',
        'Confirme que o seu PC, NAS ou servidor recebe o sinal de desligamento antes de a bateria se esgotar.',
        'Repita o teste a cada poucos meses, pois as baterias de chumbo-ácido dos UPS envelhecem rapidamente.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Carga protegida',
    addDevice: 'Adicionar dispositivo',
    deviceName: 'Dispositivo',
    watts: 'Watts',
    remove: 'Remover dispositivo',
    batteryWh: 'Capacidade da bateria (Wh)',
    efficiency: 'Eficiência do inversor',
    powerFactor: 'Fator de potência',
    reserve: 'Reserva de desligamento',
    totalLoad: 'Carga total',
    runtime: 'Autonomia estimada',
    recommendedUps: 'Tamanho recomendado',
    usableEnergy: 'Energia útil',
    minutes: 'min',
    hours: 'h',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'Pressupostos do UPS',
    presetDesktop: 'PC de secretária',
    presetMonitor: 'Monitor de 27 polegadas',
    presetRouter: 'Router e modem',
    presetNas: 'NAS de duas baias',
    percentUnit: '%',
    bandLight: 'janela de backup confortável com um UPS recomendado próximo de',
    bandBalanced: 'janela de backup equilibrada com um UPS recomendado próximo de',
    bandHeavy: 'janela de backup curta; considere uma bateria maior ou reduza a carga próxima de',
    summaryPrefix: 'Esta configuração tem uma',
  },
};
