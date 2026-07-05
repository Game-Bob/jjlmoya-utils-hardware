import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-tela-sensivel-toque';
const title = 'Teste de tela sensível ao toque';
const description = 'Desenhe numa tela inteira para testar zonas mortas do ecrã tátil, toques perdidos, resposta nos cantos, interferência da palma e quantos pontos multitoque simultâneos o seu telemóvel ou tablet consegue detetar.';

const faqData = [
  {
    question: 'Como testo as zonas mortas de uma tela sensível ao toque?',
    answer: 'Abra o testador no dispositivo, arraste um dedo lentamente por todo o ecrã e procure espaços em branco onde a linha para. Repita ao longo dos cantos, área do teclado, cantos do ecrã e qualquer ponto onde os toques costumam falhar.',
  },
  {
    question: 'Como posso fazer um teste multitoque online?',
    answer: 'Coloque vários dedos na tela ao mesmo tempo. O contador de toques ativos mostra quantos contactos o navegador está a receber agora, e o contador de pico regista o número máximo de contactos simultâneos alcançado durante a sessão.',
  },
  {
    question: 'Esta ferramenta repara uma tela tátil que não responde?',
    answer: 'Não. A ferramenta não repara o hardware nem recalibra o digitalizador. Ajuda a documentar os sintomas para que possa decidir se o problema é uma película protetora, vidro sujo, falha de software, pressão da capa ou danos no hardware tátil.',
  },
  {
    question: 'Por que é que o meu telemóvel deteta menos dedos do que o esperado?',
    answer: 'Alguns painéis, navegadores, sistemas operativos, películas protetoras, carregadores e definições de acessibilidade limitam ou filtram os contactos táteis. Experimente o teste sem capa, com bateria, depois de limpar o vidro e noutro navegador antes de assumir que o painel está defeituoso.',
  },
];

const howToData = [
  { name: 'Limpe o vidro e remova interferências óbvias', text: 'Limpe o ecrã, seque os dedos, desligue carregadores ruidosos e remova luvas grossas ou acessórios condutores antes de testar.' },
  { name: 'Faça traços lentos horizontais e verticais', text: 'Cubra o ecrã com traços paralelos de ponta a ponta. Um painel saudável deve deixar linhas contínuas sem interrupções.' },
  { name: 'Verifique os cantos e as zonas de gestos', text: 'Trace as margens, a área do teclado, a área de notificações e as zonas de gestos de navegação, pois estas regiões costumam revelar primeiro uma falha parcial do digitalizador.' },
  { name: 'Meça os toques simultâneos', text: 'Coloque dois, três, quatro, cinco ou mais dedos na tela e observe o contador de pico multitoque.' },
  { name: 'Use o modo de ecrã inteiro para confirmação final', text: 'Entre no modo de ecrã inteiro e repita o teste para que os elementos do navegador não escondam as regiões táteis superiores ou inferiores.' },
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

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Teste online de tela tátil para zonas mortas e multitoque', level: 2 },
    {
      type: 'paragraph',
      html: 'Um painel tátil pode falhar de formas difíceis de provar apenas com o uso normal das aplicações. Uma tecla pode falhar só perto do canto inferior, uma aplicação de desenho pode saltar uma faixa vertical fina, ou os jogos podem perder um segundo dedo apenas quando o polegar já está a premir um controlo. Este testador transforma a página inteira numa superfície de desenho para que cada lacuna, traço quebrado e limite de contactos simultâneos se torne imediatamente visível.',
    },
    {
      type: 'paragraph',
      html: 'Use-o para pesquisas como <strong>teste de tela sensível ao toque</strong>, <strong>teste multitoque online</strong>, <strong>test pantalla tactil</strong> e <strong>comprobar zonas muertas pantalla</strong>. A tela regista o movimento dos dedos localmente no navegador; não envia desenhos, posições de toque, identificadores de dispositivo ou resultados de diagnóstico.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 instalações', label: 'Funciona diretamente no navegador' },
        { value: 'Ao vivo', label: 'Contador de toques ativos' },
        { value: 'Tela', label: 'Mapa visual de zonas mortas' },
      ],
    },
    { type: 'title', text: 'Como identificar zonas mortas da tela tátil', level: 3 },
    {
      type: 'paragraph',
      html: 'Uma zona morta é uma área onde o digitalizador não comunica o contacto de forma fiável. Pode ser uma faixa completamente em branco, um canto que ignora os toques ou uma pequena mancha que só funciona com pressão forte. Desenhe linhas lentas e sobrepostas por todo o ecrã. Se a linha desaparecer consistentemente no mesmo sítio, essa área merece mais testes.',
    },
    {
      type: 'list',
      items: [
        'Comece com traços horizontais do canto esquerdo ao direito, deixando apenas um pequeno espaço entre cada passagem.',
        'Repita com traços verticais do topo à base para revelar colunas estreitas que o teste horizontal pode não detetar.',
        'Trace a borda exata do ecrã, pois os elétrodos de margem e as zonas de gestos são pontos de falha comuns.',
        'Desenhe círculos à volta das áreas suspeitas para ver se a quebra segue sempre a mesma localização física.',
        'Rode o dispositivo e teste novamente para distinguir um problema de layout da aplicação de um problema físico do hardware.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Uma linha em branco repetida é mais significativa do que um traço isolado',
      html: '<p>Uma pequena lacuna pode acontecer se o dedo estiver seco, se mover demasiado rápido ou se se soltar do vidro. Uma zona morta de hardware geralmente aparece repetidamente na mesma área física, em diferentes direções de traço e após limpar o ecrã.</p>',
    },
    {
      type: 'table',
      headers: ['Sintoma', 'Significado provável', 'O que tentar a seguir'],
      rows: [
        ['A linha quebra sempre na mesma faixa vertical', 'Possível falha na coluna do digitalizador ou bolha na película protetora.', 'Remova a película se possível, limpe o vidro e teste novamente em ecrã inteiro.'],
        ['Os cantos falham, mas o centro funciona', 'Pressão da capa, rejeição de gestos ou problema no elétrodo de margem.', 'Retire a capa e repita os traços lentos nos cantos.'],
        ['Só o movimento rápido é ignorado', 'Limitação de eventos do navegador, baixa taxa de fotogramas ou descolamento do dedo.', 'Mova-se lentamente e compare com outro navegador.'],
        ['Aparecem pontos aleatórios sem tocar', 'Toque fantasma, humidade, ruído do carregador ou painel danificado.', 'Seque o ecrã, desligue o carregador, reinicie e repita.'],
      ],
    },
    { type: 'title', text: 'Como medir o suporte a multitoque', level: 3 },
    {
      type: 'paragraph',
      html: 'O suporte a multitoque é o número máximo de contactos independentes que o dispositivo consegue comunicar ao mesmo tempo. Um telemóvel pode registar cinco, dez ou mais contactos, enquanto alguns tablets de baixo custo, quiosques, luvas, camadas de ambiente de trabalho remoto ou navegadores integrados podem comunicar menos. O contador ativo mostra o número atualmente detetado; o contador de pico guarda o valor mais alto alcançado desde a última limpeza.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Gestos de dois toques', description: 'Necessários para zoom de pinça, rotação com dois dedos, mapas, editores de imagem e zoom de acessibilidade.' },
        { title: 'Três a cinco toques', description: 'Úteis para jogos de ritmo, controlos divididos, aplicações de desenho, teclados de piano e fluxos criativos em tablet.' },
        { title: 'Painéis de dez toques', description: 'Comuns em telemóveis e tablets modernos, mas a filtragem do navegador ou do sistema operativo ainda pode reduzir a contagem.' },
      ],
    },
    {
      type: 'tip',
      title: 'A melhor forma de evitar uma contagem falsamente baixa',
      html: 'Coloque os dedos um a um e mantenha-os parados durante um segundo. Se colocar todos os dedos ao mesmo tempo, alguns sistemas operativos interpretam o gesto como entrada da palma, intenção de zoom ou navegação do sistema e podem suprimir parte do conjunto de contactos.',
    },
    {
      type: 'proscons',
      title: 'Testador online versus uma aplicação de diagnóstico nativa',
      items: [
        { pro: 'Funciona instantaneamente sem instalar nada nem conceder permissões amplas do dispositivo.', con: 'Só pode mostrar os eventos táteis expostos pelo navegador e pelo sistema operativo.' },
        { pro: 'Fácil de partilhar com uma loja de reparações ou comprador, pois o padrão de desenho é visível.', con: 'Não consegue ler tabelas de calibração de fábrica nem códigos de erro de baixo nível do digitalizador.' },
        { pro: 'O modo de ecrã inteiro cobre mais área útil do ecrã do que uma página normal.', con: 'As barras do sistema, notches e regiões de gestos protegidas ainda podem reservar alguns píxeis.' },
      ],
    },
    { type: 'title', text: 'Causas comuns de toques perdidos', level: 3 },
    {
      type: 'paragraph',
      html: 'Um mau resultado no teste tátil nem sempre significa que o ecrã está avariado. Os painéis capacitivos dependem de um campo elétrico estável através do vidro, adesivo, película, pele e massa do dispositivo. Qualquer coisa que altere esse campo pode causar lacunas, toques falsos ou mau seguimento multitoque. É por isso que testar em várias condições é importante.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Digitalizador', definition: 'A camada de sensor transparente que comunica as coordenadas de toque ao dispositivo.' },
        { term: 'Zona morta', definition: 'Uma área física do ecrã onde os toques não são detetados ou são detetados apenas intermitentemente.' },
        { term: 'Toque fantasma', definition: 'Um evento de toque comunicado pelo dispositivo quando nenhum dedo está intencionalmente a tocar esse ponto.' },
        { term: 'Rejeição de palma', definition: 'Filtragem de software que ignora o contacto amplo ou acidental, especialmente em tablets e dispositivos com caneta.' },
        { term: 'Taxa de amostragem tátil', definition: 'A frequência com que o dispositivo lê a camada tátil. Taxas mais altas podem tornar o desenho e os jogos mais responsivos.' },
      ],
    },
    {
      type: 'table',
      headers: ['Causa', 'Pista típica', 'Verificação rápida'],
      rows: [
        ['Película protetora', 'A zona morta segue uma bolha, fissura, margem de pó ou borda grossa de vidro.', 'Remova ou levante a película apenas se for seguro e esta for substituível.'],
        ['Humidade ou oleosidade', 'Saltos aleatórios, toques a deslizar ou toques perdidos após chuva, transpiração ou spray de limpeza.', 'Seque completamente o vidro e as mãos e teste novamente.'],
        ['Ruído do carregador', 'Toques fantasma ocorrem com o carregador ligado e desaparecem com bateria.', 'Desligue o carregador ou use um adaptador e cabo certificados.'],
        ['Pressão da capa', 'Os toques falham perto dos cantos ou margens curvas.', 'Retire a capa e teste a mesma margem novamente.'],
        ['Dano no hardware', 'A mesma faixa falha após limpar, reiniciar e remover a película.', 'Documente o resultado e contacte o suporte de reparação.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'Pressão não é o mesmo que precisão tátil',
      html: 'A maioria das telas táteis de telemóveis e tablets é capacitiva, portanto pressionar com mais força não deveria ser necessário. Se um local só funciona quando pressiona com firmeza, o problema pode ser mau contacto através de uma película, dano no painel, problema no cabo flex ou filtragem de software, e não o comportamento normal da tela tátil.',
    },
    { type: 'title', text: 'Testar margens, cantos e zonas do teclado', level: 3 },
    {
      type: 'paragraph',
      html: 'Muitas queixas reais começam em áreas de uso intenso: a fila inferior do teclado, a tecla de apagar, os gestos de navegação, o painel de notificações, as definições rápidas, as zonas de polegar nos jogos e os cantos do tablet usados para atalhos de desenho. Use o modo de ecrã inteiro antes de avaliar as áreas superiores e inferiores, pois os controlos do navegador podem esconder parte do ecrã.',
    },
    {
      type: 'list',
      items: [
        'Trace um retângulo à distância de um dedo da borda do ecrã.',
        'Desenhe traços verticais curtos sobre as filas do teclado onde as letras costumam falhar.',
        'Mantenha um polegar na posição de controlo de jogo e desenhe com outro dedo para testar conflitos de contacto.',
        'Teste perto da porta de carregamento com e sem o carregador ligado para verificar ruído de ligação à terra.',
        'Se usar uma caneta, teste a entrada do dedo separadamente da caneta, pois podem usar caminhos de deteção diferentes.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quando o ecrã inteiro altera o resultado',
      html: '<p>Se o ecrã funcionar em modo de ecrã inteiro mas não na visualização normal do navegador, o hardware provavelmente não é o único fator. As barras de endereço, o gesto de arrastar para atualizar, a navegação do sistema e o tratamento de gestos do navegador podem intercetar toques perto do topo ou da base da janela de visualização.</p>',
    },
    { type: 'title', text: 'Como documentar um problema para reparação ou garantia', level: 3 },
    {
      type: 'paragraph',
      html: 'Para o suporte de garantia, a consistência é mais importante do que uma única falha dramática. Limpe a tela, desenhe uma grelha simples e tire uma fotografia ou grave o ecrã quando a mesma área física se recusar a desenhar. Inclua se o telemóvel estava a carregar, se tinha película instalada e se o problema aparece após reiniciar.',
    },
    {
      type: 'summary',
      title: 'Evidências úteis para recolher',
      items: [
        'Uma tela de ecrã inteiro limpa mostrando lacunas repetidas na mesma localização.',
        'A contagem de pico multitoque alcançada com vários dedos colocados cuidadosamente.',
        'Uma comparação com e sem a capa, película, carregador ou luvas.',
        'O modelo do dispositivo, navegador, versão do sistema operativo e se o problema também ocorre nas aplicações.',
      ],
    },
    {
      type: 'message',
      title: 'Nota de privacidade',
      html: 'O desenho e os contadores são gerados no lado do cliente. O testador foi concebido para diagnóstico imediato, não para registo baseado em conta, reparação remota ou envio de padrões sensíveis de interação com o ecrã.',
    },
    { type: 'title', text: 'Lista de verificação para interpretação de resultados', level: 3 },
    {
      type: 'table',
      headers: ['Resultado', 'Interpretação', 'Confiança'],
      rows: [
        ['Traços contínuos em todo o ecrã', 'A camada tátil está provavelmente saudável nas condições atuais.', 'Alta para entrada básica por dedo.'],
        ['Uma faixa em branco repetível', 'Possível dano físico no digitalizador ou obstrução da película.', 'Alta se repetir após limpar e reiniciar.'],
        ['Pico multitoque baixo apenas num navegador', 'Limitação do navegador, privacidade, webview ou tratamento de gestos.', 'Média. Teste noutro navegador.'],
        ['Toques fantasma ao carregar', 'Ruído elétrico, problema de ligação à terra ou carregador defeituoso.', 'Média a alta se desligar resolver o problema.'],
        ['Falha apenas com película protetora', 'Espessura da película, folga do adesivo, fissura ou margem levantada.', 'Alta se a remoção resolver a área.'],
      ],
    },
    {
      type: 'summary',
      title: 'Percurso rápido de diagnóstico',
      items: [
        'Desenhe uma grelha completa lentamente.',
        'Circule qualquer lacuna que se repita.',
        'Limpe a tela e repita em ecrã inteiro.',
        'Remova as variáveis de capa ou película quando possível.',
        'Meça a contagem mais alta de toques simultâneos.',
        'Compare com outro navegador ou aplicação antes de declarar falha de hardware.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Toques ativos',
    peakTouchesLabel: 'Pico multitoque',
    coverageLabel: 'Cobertura da tela',
    statusReady: 'Desenhe em qualquer lugar para revelar zonas mortas',
    statusDrawing: 'Toque detetado',
    statusCleared: 'Tela limpa',
    clearButton: 'Limpar tela',
    fullscreenButton: 'Ecrã inteiro',
    exitFullscreenButton: 'Sair do ecrã inteiro',
    canvasLabel: 'Tela de desenho para teste de ecrã tátil',
    unsupportedTouch: 'Eventos de toque não disponíveis neste navegador',
  },
};
