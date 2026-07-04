import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-chatter-teclado';
const title = 'Teste de Chatter do Teclado';
const description = 'Detecta chattering de teclado mecânico, digitação dupla e repique de switch com defeito verificando quão rápido a mesma tecla aparece duas vezes.';

const faqData = [
  {
    question: 'O que é chattering de teclado?',
    answer: 'Chattering de teclado é uma falha de hardware onde uma pressão física é registrada como múltiplas pressões. É comum em switches mecânicos sujos, desgastados, oxidados ou com debounce inadequado.',
  },
  {
    question: 'Como funciona este teste de chattering de teclado?',
    answer: 'Pressione a mesma tecla suspeita lentamente, um toque de cada vez. Se o registro mostrar pressões repetidas com apenas alguns milissegundos de diferença, o switch pode estar repicando e produzindo letras duplas.',
  },
  {
    question: 'Qual delta significa que meu teclado está com digitação dupla?',
    answer: 'Uma pressão repetida abaixo de 30 ms é fortemente suspeita de chattering. Repetições de 30 a 50 ms merecem atenção. Repetições intencionais normais geralmente ficam acima de 50 ms para a maioria dos usuários.',
  },
  {
    question: 'Por que a primeira pressão não mostra delta?',
    answer: 'Um delta precisa de uma pressão anterior da mesma tecla. A primeira pressão estabelece a linha de base, e as pressões posteriores mostram o intervalo de tempo em milissegundos.',
  },
  {
    question: 'O software pode corrigir o chattering do teclado?',
    answer: 'O software de debounce pode esconder alguns sintomas, mas não repara o switch. Limpar, reassentar switches hot-swap, substituir o switch ou reparar a PCB do teclado pode ser necessário.',
  },
];

const howToData = [
  {
    name: 'Abra a ferramenta e pressione as teclas normalmente',
    text: 'Não há botão de iniciar. Clique na ferramenta se necessário e pressione a tecla que estava digitando duplo.',
  },
  {
    name: 'Toque a tecla suspeita uma de cada vez',
    text: 'Pressione a tecla que digita duplo. Se uma pressão física criar várias linhas de registro com deltas pequenos, o switch provavelmente está chattering.',
  },
  {
    name: 'Leia o código de cores',
    text: 'Verde significa normal acima de 50 ms, amarelo significa suspeito de 30 a 50 ms e vermelho significa chattering detectado abaixo de 30 ms.',
  },
  {
    name: 'Exporte o registro se necessário',
    text: 'Use o botão de download para salvar um registro CSV que pode ajudar a comparar teclas ou documentar uma falha intermitente.',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
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
      text: 'Teste de Digitação Dupla de Teclado Mecânico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este teste de chattering de teclado ajuda a diagnosticar um teclado mecânico que digita duas letras de uma pressão, perde liberações limpas ou produz caracteres repetidos sem você tocar duas vezes intencionalmente. Use-o antes de limpar switches, alterar configurações de debounce do firmware, abrir uma reivindicação de garantia ou substituir um switch hot-swap.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Como ler o resultado',
      badge: 'Limites de delta',
      html: '<p><strong>Normal</strong> significa que a repetição ficou acima de 50 ms e geralmente é intencional. <strong>Suspeito</strong> significa 30-50 ms e deve ser testado novamente na mesma tecla. <strong>Chattering detectado</strong> significa abaixo de 30 ms, o que é muito provavelmente uma pressão física repicando em múltiplos contatos elétricos.</p>',
    },
    {
      type: 'title',
      text: 'Por Que Switches Mecânicos Fazem Chattering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um switch mecânico não fecha como um sinal digital perfeitamente limpo. Os contatos metálicos podem repicar por alguns milissegundos antes de se estabilizar. O firmware do teclado normalmente filtra esse repique com uma janela de debounce. O chattering acontece quando o contato está sujo, desgastado, oxidado, solto, rachado ou mal ajustado a ponto do teclado reportar pressões extras depois que o filtro de debounce deveria tê-las tratado.',
    },
    {
      type: 'table',
      headers: ['Sintoma', 'Causa provável', 'O que tentar primeiro'],
      rows: [
        ['Uma tecla digita a mesma letra duas vezes', 'Contato do switch sujo ou desgastado', 'Remova a keycap, sopre a poeira e teste novamente antes de substituir o switch.'],
        ['Várias teclas hot-swap chattering após uma montagem', 'Pinos do switch não encaixados corretamente', 'Retire e reassente o switch, verificando pinos tortos ou soquete solto.'],
        ['Só acontece após derramamentos ou umidade', 'Oxidação ou resíduos nos contatos', 'Desconecte o teclado e limpe de acordo com a orientação do fabricante.'],
        ['Muitas teclas mostram deltas pequenos', 'Debounce do firmware muito baixo ou problema de varredura', 'Compare em outra porta USB e revise as configurações de debounce do firmware se disponíveis.'],
      ],
    },
    {
      type: 'title',
      text: 'Método de Teste Que Reduz Falsos Positivos',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Teste uma tecla suspeita por vez em vez de digitar frases completas.',
        'Pressione a tecla uma vez, solte completamente e aguarde um momento antes da próxima pressão.',
        'Compare a tecla suspeita com uma tecla próxima que pareça saudável.',
        'Ignore a primeira linha para uma tecla porque não há pressão anterior para comparar.',
        'Se a mesma tecla mostrar repetidamente linhas vermelhas abaixo de 30 ms de toques únicos, trate como falha de hardware.',
        'Se apenas linhas amarelas aparecerem, repita o teste mais devagar e verifique se seu ritmo de digitação está causando o intervalo curto.',
      ],
    },
    {
      type: 'title',
      text: 'Chattering vs. Digitação Rápida Intencional',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Chattering',
          description: 'Concentrado em uma tecla, frequentemente abaixo de 30 ms, e aparece quando você pretendia uma pressão.',
          points: ['Inspecione o switch ou soquete.', 'Compare com uma tecla saudável próxima.'],
        },
        {
          title: 'Digitação rápida',
          description: 'Afeta muitas teclas, segue seu ritmo e tende a ficar acima de 50 ms entre pressões repetidas da mesma tecla.',
          points: ['Geralmente uso normal.', 'Teste novamente com toques únicos mais lentos.'],
        },
        {
          title: 'Repetição de tecla do sistema',
          description: 'Aparece ao manter uma tecla pressionada e geralmente repete em um ritmo regular definido pelo seu sistema operacional.',
          points: ['Solte completamente entre toques.', 'Verifique as configurações de repetição do teclado separadamente.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'O Que Fazer Quando uma Tecla Falha',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Salve um registro CSV antes de mudar qualquer coisa para poder comparar resultados antes e depois.',
        'Remova a keycap e inspecione sujeira, resíduos de líquido ou uma haste que não retorna suavemente.',
        'Para teclados hot-swap, reassente ou substitua o switch e teste a mesma posição novamente.',
        'Para teclados soldados, compare as opções de debounce do firmware antes de assumir que a PCB precisa de reparo.',
        'Experimente outro cabo e porta USB se várias teclas não relacionadas mostrarem deltas impossíveis.',
        'Para suporte de garantia, inclua a tecla afetada, valores delta repetidos, modelo do teclado, versão do firmware e se a falha segue o switch ou o soquete da PCB.',
      ],
    },
    {
      type: 'summary',
      title: 'Regra rápida',
      items: [
        'Uma única linha vermelha é uma pista, não um veredito.',
        'Linhas vermelhas repetidas abaixo de 30 ms na mesma tecla física são forte evidência de chattering de teclado.',
        'Use toques únicos deliberados e compare o switch suspeito com uma tecla saudável próxima antes de substituir hardware.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Pressione qualquer tecla',
    statusListening: 'Medindo deltas de tecla',
    statusChatter: 'Chattering detectado',
    totalPresses: 'Total de pressões',
    chatterEvents: 'Eventos de chattering',
    worstDelta: 'Pior delta',
    watchWindow: 'Linhas mantidas',
    keyColumn: 'Tecla',
    deltaColumn: 'Delta',
    verdictColumn: 'Veredito',
    timeColumn: 'Tempo',
    normal: 'Normal',
    suspect: 'Suspeito',
    chatter: 'Chattering',
    waiting: 'Aguardando',
    clear: 'Limpar registro',
    exportLog: 'Exportar CSV',
    hint: 'O registro mantém as 80 linhas mais recentes para que sessões longas permaneçam rápidas. A repetição de tecla pressionada é ignorada; linhas vermelhas vêm de pressões separadas que ocorreram muito próximas.',
    captureNotice: 'Sem botão de iniciar. Toque uma tecla suspeita uma vez e observe o delta desde sua pressão anterior.',
    keyboardAriaLabel: 'Atividade recente de teclas',
    logAriaLabel: 'Registro de eventos de chattering do teclado',
    escapeKey: 'Esc',
    backspaceKey: 'Back',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Caps',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Espaço',
    csvHeader: 'tecla,código,delta_ms,gravidade,hora',
  },
};
