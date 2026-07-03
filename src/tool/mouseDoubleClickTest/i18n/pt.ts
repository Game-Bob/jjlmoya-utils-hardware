import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-clique-duplo-mouse';
const title = 'Teste de Clique Duplo do Mouse';
const description =
  'Teste cada botão do mouse e detecte cliques duplos indesejados, interruptores desgastados e repique de contatos com cronometragem por botão no seu navegador.';

const faqData = [
  {
    question: 'O que é um problema de clique duplo do mouse?',
    answer:
      'Um problema de clique duplo acontece quando um pressionamento físico é registrado como dois cliques. Pode afetar o botão esquerdo, botão direito, clique da roda ou botões laterais e geralmente é causado por desgaste do interruptor, repique de contatos, configurações de anti-repique do firmware ou instabilidade do sinal sem fio.',
  },
  {
    question: 'Qual intervalo é considerado suspeito?',
    answer:
      'Intervalos muito curtos entre cliques são suspeitos porque cliques duplos humanos normalmente levam mais tempo. Esta ferramenta começa com um limite de 80 ms, mas você pode ajustá-lo dependendo do mouse e do seu estilo de teste.',
  },
  {
    question: 'Um navegador pode provar que o interruptor está quebrado?',
    answer:
      'Um navegador não pode inspecionar diretamente o interruptor elétrico, mas pode registrar os eventos de clique que o sistema operacional recebe. Intervalos suspeitos repetidos durante testes de clique simples são uma forte evidência de repique ou clique duplo indesejado.',
  },
  {
    question: 'Como devo testar corretamente?',
    answer:
      'Clique lenta e deliberadamente, visando pressionamentos simples. Se o contador de suspeitos aumentar mesmo quando você não está clicando duas vezes intencionalmente, repita o teste em outra porta USB, outro navegador e outro computador, se possível.',
  },
];

const howToData = [
  {
    name: 'Defina o limite de detecção',
    text: 'Comece com 80 ms. Abaixe para uma detecção rigorosa de repique do interruptor ou aumente se o seu dispositivo produzir intervalos acidentais ligeiramente mais amplos.',
  },
  {
    name: 'Clique como um clique simples normal',
    text: 'Pressione cada botão do mouse um clique de cada vez sobre a representação visual do mouse. Não clique duas vezes intencionalmente durante a primeira passagem.',
  },
  {
    name: 'Observe o contador de suspeitos',
    text: 'Se eventos suspeitos aparecerem enquanto você faz cliques simples, verifique qual botão visual foi destacado e compare com os chips de eventos compactos.',
  },
  {
    name: 'Compare com outro dispositivo',
    text: 'Um mouse saudável deve manter uma pontuação alta com o mesmo limite. Comparar dispositivos ajuda a separar falhas de hardware de configurações de software.',
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

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
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
      text: 'Teste de Clique Duplo do Mouse: Diagnostique o Repique dos Botões Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um mouse que clica duas vezes quando você pressiona uma vez não é apenas irritante. Ele pode abrir pastas por acidente, cancelar ações de arrastar e soltar, disparar dois tiros em um jogo, fechar abas do navegador ou fazer menus de contexto aparecerem e desaparecerem antes que você possa usá-los. Este teste online de clique duplo do mouse foca no sinal diagnóstico útil: <strong>o intervalo de tempo entre os eventos de botão relatados pelo seu sistema operacional</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Diferente de um simples contador de cliques, esta ferramenta rastreia cada botão independentemente: clique esquerdo, clique direito, clique da roda, voltar do navegador e avançar do navegador. Isso importa porque um mouse pode ter o botão direito com falha enquanto o esquerdo ainda está saudável, ou um botão lateral desgastado que só falha após meses de uso em jogos ou atalhos de produtividade.',
    },
    {
      type: 'title',
      text: 'O Que Este Teste de Botões do Mouse Mede',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando você pressiona um botão do mouse, o navegador recebe um evento de ponteiro contendo o código do botão. A ferramenta armazena o último registro de tempo para o mesmo botão físico e o compara com o próximo pressionamento do mesmo botão. Se o intervalo for mais curto que o limite selecionado, o evento é marcado como suspeito porque um segundo clique normal e intencional geralmente leva mais tempo.',
    },
    {
      type: 'list',
      items: [
        'Botão esquerdo: útil para detectar cliques duplos acidentais ao abrir arquivos, selecionar texto ou arrastar janelas',
        'Botão direito: útil quando os menus de contexto piscam, abrem duas vezes ou fecham imediatamente',
        'Botão da roda: útil para mouses onde o clique do meio abre várias abas ou falha após navegação intensa',
        'Botões Voltar e Avançar: úteis para mouses gamer e de produtividade com interruptores laterais',
        'Cronometragem por botão: evita misturar um clique esquerdo com um clique direito e chamá-lo de falso clique duplo',
      ],
    },
    {
      type: 'title',
      text: 'Por Que os Mouses Começam a Clicar Duas Vezes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A maioria dos mouses usa pequenos interruptores mecânicos sob cada botão. Quando os contatos do interruptor se fecham, o metal pode repicar eletricamente por um período muito curto antes de estabilizar. O firmware do mouse normalmente filtra esse ruído com lógica de anti-repique. Conforme o interruptor se desgasta, o repique pode se tornar mais longo, mais ruidoso ou inconsistente, fazendo o computador receber dois pressionamentos de botão mesmo que seu dedo tenha feito apenas um pressionamento físico.',
    },
    {
      type: 'paragraph',
      html: 'O clique duplo nem sempre é causado pela mesma coisa. Pode ser desgaste mecânico do interruptor, anti-repique do firmware configurado de forma muito agressiva, poeira ou oxidação dentro do interruptor, instabilidade de pacotes sem fio, software de macro, um cabo danificado ou uma configuração do sistema operacional que torna os cliques duplos acidentais mais fáceis de notar.',
    },
    {
      type: 'table',
      headers: ['Sintoma', 'Causa Provável', 'O Que Testar'],
      rows: [
        ['Um clique abre arquivos como se fosse clique duplo', 'Repique do interruptor esquerdo ou confusão de velocidade de clique duplo do SO', 'Teste Esquerdo com pressionamentos simples lentos a 80 ms'],
        ['O menu do botão direito pisca ou fecha', 'Repique do interruptor direito ou software interceptando menus de contexto', 'Teste Direito e desative temporariamente os utilitários do mouse'],
        ['O clique do meio abre duas abas', 'Desgaste do interruptor da roda', 'Teste Roda com pressionamentos simples deliberados'],
        ['O botão voltar pula duas páginas', 'Repique do interruptor lateral ou repetição do atalho do navegador', 'Teste Voltar e Avançar separadamente'],
        ['Só acontece sem fio', 'Interferência sem fio, bateria fraca ou posicionamento do receptor', 'Teste novamente com fio ou aproxime o receptor'],
      ],
    },
    {
      type: 'title',
      text: 'Escolhendo o Limite de Anti-Repique Adequado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O limite é o intervalo máximo que esta ferramenta ainda considera suspeito. O valor padrão, <strong>80 ms</strong>, é um meio-termo prático: rigoroso o suficiente para capturar muitos eventos duplicados indesejados, mas não tão agressivo a ponto de cada clique duplo normal e deliberado se tornar uma falha de hardware.',
    },
    {
      type: 'table',
      headers: ['Limite', 'Ideal Para', 'Como Interpretar'],
      rows: [
        ['30-50 ms', 'Verificações rigorosas de repique elétrico', 'Bom para confirmar eventos duplicados muito rápidos de um interruptor desgastado'],
        ['60-90 ms', 'Diagnóstico geral de clique duplo do mouse', 'Melhor faixa padrão para a maioria dos mouses gamer e de escritório'],
        ['100-140 ms', 'Interruptores desgastados intermitentes', 'Útil quando o mouse às vezes cria intervalos acidentais mais amplos'],
        ['150-180 ms', 'Testes de estresse e interruptores fracos', 'Use com cuidado, pois cliques duplos intencionais rápidos podem cair nesta faixa'],
      ],
    },
    {
      type: 'title',
      text: 'Como Realizar um Teste Confiável',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Na primeira passagem, não clique duas vezes intencionalmente. Pressione cada botão do mouse lenta e deliberadamente, um botão por vez, com o cursor sobre a representação visual do mouse. Um interruptor saudável deve produzir eventos simples estáveis. Se o contador de suspeitos aumentar durante pressionamentos simples lentos, repita o mesmo teste de botão várias vezes para confirmar o padrão.',
    },
    {
      type: 'list',
      items: [
        'Teste Esquerdo com 20 a 30 pressionamentos lentos, depois Direito, depois Roda, depois os botões laterais',
        'Não arraste o mouse durante o teste de repique de botão, pois o movimento pode distrair do resultado de tempo',
        'Se um botão mostrar eventos suspeitos, repita o mesmo teste após trocar de porta USB ou navegador',
        'Para mouses sem fio, teste com uma bateria nova e o receptor próximo ao mouse',
        'Se apenas um botão falhar repetidamente, a falha provavelmente está nesse interruptor específico, e não no dispositivo inteiro',
      ],
    },
    {
      type: 'title',
      text: 'Interpretando os Resultados',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Resultado', 'Significado', 'Próximo Passo Recomendado'],
      rows: [
        ['0 eventos suspeitos após muitos pressionamentos', 'Os botões testados parecem saudáveis com o limite selecionado', 'Mantenha o limite padrão ou teste novamente mais tarde se os sintomas retornarem'],
        ['1 evento suspeito isolado', 'Pode ser um repique real ou um pressionamento rápido acidental', 'Repita o mesmo botão lentamente antes de tirar conclusões'],
        ['Eventos suspeitos repetidos em um botão', 'Forte sinal de repique do interruptor ou contatos desgastados', 'Teste em outro computador e documente o resultado'],
        ['Eventos suspeitos em todos os botões', 'Pode ser software, driver, utilitário de macro ou ambiente do navegador', 'Desative o software do mouse e teste novamente'],
        ['Apenas o modo sem fio falha', 'Provavelmente bateria, posicionamento do receptor ou interferência', 'Tente o modo com fio ou aproxime o receptor'],
      ],
    },
    {
      type: 'paragraph',
      html: 'A pontuação de saúde é um resumo rápido, não um veredito final. A evidência mais importante é <strong>qual botão</strong> produziu eventos suspeitos e se o padrão se repete quando você pressiona o mesmo botão lentamente. Um único evento ruim durante um teste apressado é menos significativo do que cinco eventos suspeitos de clique direito durante pressionamentos simples deliberados.',
    },
    {
      type: 'title',
      text: 'Antes de Substituir o Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Verifique se o software do seu mouse tem uma configuração de tempo de anti-repique e teste novamente após alterá-la',
        'Desative macros, perfis de disparo rápido ou remapeamentos de botões durante o diagnóstico',
        'Experimente uma porta USB diferente, especialmente se estiver usando um hub ou conector do painel frontal',
        'Para mouses sem fio, teste com o dongle em um cabo de extensão próximo ao mousepad',
        'Compare com outro mouse no mesmo computador para separar falha de hardware de comportamento de software',
      ],
    },
    {
      type: 'title',
      text: 'Reparo, Garantia e Evidências',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se a falha for mecânica, limpar a carcaça externa raramente resolve permanentemente porque o problema está dentro dos contatos do interruptor. Alguns usuários substituem o microinterruptor, mas isso requer soldagem e não vale a pena para todo mouse. Se o mouse estiver na garantia, intervalos suspeitos repetidos no mesmo botão são evidências úteis ao explicar o problema para o suporte.',
    },
    {
      type: 'paragraph',
      html: 'Para reclamações de garantia, grave uma breve captura de tela enquanto pressiona o botão com falha lentamente. Certifique-se de que os chips de eventos mostrem o rótulo do botão e o tempo suspeito. Isso é mais claro do que dizer "meu mouse às vezes clica duas vezes" porque demonstra o botão real e o tempo aproximado do evento duplicado indesejado.',
    },
    {
      type: 'title',
      text: 'Limitações de um Teste de Mouse Baseado em Navegador',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Este teste mede os eventos que chegam ao navegador. Ele não pode inspecionar diretamente a forma de onda elétrica dentro do interruptor e não pode contornar todos os drivers, sistemas operacionais ou utilitários do fabricante. Isso ainda é útil: se o navegador recebe eventos duplicados, seus aplicativos normais também podem recebê-los. Para validação em nível de engenharia, ferramentas de hardware como osciloscópios ou testadores de interruptores fornecem evidências mais profundas, mas não são necessárias para a maioria dos diagnósticos de usuário.',
    },
  ],
  ui: {
    badge: 'Laboratório de Repique',
    clickTarget: 'Matriz de Botões',
    clickTargetHint: 'Pressione esquerdo, direito, roda, voltar e avançar',
    totalClicks: 'Total',
    suspiciousClicks: 'Suspeitos',
    fastestGap: 'Intervalo mais rápido',
    healthScore: 'Pontuação de saúde',
    thresholdLabel: 'Limite de detecção',
    thresholdUnit: 'ms',
    cleanEvent: 'limpo',
    suspiciousEvent: 'suspeito',
    reset: 'Redefinir',
    statusIdle: 'Pressione cada botão do mouse para testá-lo independentemente',
    statusClean: 'Nenhum repique suspeito de botão detectado',
    statusWarning: 'Repique suspeito detectado em um botão do mouse',
    lastGap: 'Último evento',
    logTitle: 'Eventos recentes dos botões',
    emptyLog: 'Pressione qualquer botão do mouse sobre o corpo do mouse.',
    leftButton: 'Esquerdo',
    middleButton: 'Roda',
    rightButton: 'Direito',
    backButton: 'Voltar',
    forwardButton: 'Avançar',
    otherButton: 'Outro',
  },
};
