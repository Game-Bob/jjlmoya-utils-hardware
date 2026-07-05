import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'testador-teclado-midi';
const title = 'Testador de Teclado MIDI via Web';
const description = 'Teste um teclado MIDI USB, synth, pad controller, pitch wheel, modulation wheel, velocity das notas e notas presas diretamente no navegador com Web MIDI.';

const faqData = [
  {
    question: 'Este testador MIDI consegue ler o meu teclado USB sem instalar software?',
    answer: 'Sim, em navegadores que suportam Web MIDI, como Chrome e Edge. O navegador pede permissão e depois a ferramenta escuta mensagens de nota, velocity, pitch bend e modulation da entrada MIDI selecionada.',
  },
  {
    question: 'O site envia as minhas notas MIDI ou dados de performance?',
    answer: 'Não. Os eventos MIDI são processados na aba atual do navegador. Notas, valores de velocity, mensagens de controle, nomes de dispositivos e registros não são enviados nem armazenados pelo site.',
  },
  {
    question: 'Por que o meu teclado MIDI aparece mas nenhuma tecla acende?',
    answer: 'O dispositivo pode estar conectado como superfície de controle, a porta de entrada errada pode estar selecionada pelo navegador, o teclado pode estar usando um modo diferente, ou o cabo/hub pode estar fornecendo energia mas não dados MIDI.',
  },
  {
    question: 'Posso testar o pitch bend e a modulation wheel?',
    answer: 'Sim. O testador mostra o pitch bend como um valor centralizado com sinal e a modulation como MIDI CC1. Mover esses controles deve atualizar os medidores imediatamente quando o dispositivo envia mensagens MIDI padrão.',
  },
  {
    question: 'Quais mensagens MIDI são exibidas?',
    answer: 'A interface ao vivo destaca as mensagens Note On e Note Off, registra a velocity, detecta o pitch bend e acompanha a modulation wheel CC1. Outras mensagens de controle podem aparecer no log de eventos quando relevantes para os controles testados.',
  },
];

const howToData = [
  {
    name: 'Conecte o hardware MIDI',
    text: 'Conecte o teclado, synth, pad controller ou interface MIDI USB ao computador antes de abrir a solicitação de permissão. Evite hubs sem alimentação ao solucionar problemas com dispositivos intermitentes.',
  },
  {
    name: 'Conceda acesso MIDI ao navegador',
    text: 'Pressione Conectar entrada MIDI e aprove a solicitação de permissão do navegador. Use Chrome ou Edge em HTTPS ou localhost, pois o Web MIDI é protegido por permissão.',
  },
  {
    name: 'Toque teclas em toda a extensão',
    text: 'Pressione notas graves, médias e agudas. O teclado na tela se expande ao redor das notas recebidas e ilumina cada tecla de acordo com a velocity.',
  },
  {
    name: 'Verifique rodas e controles de expressão',
    text: 'Mova a pitch wheel, a modulation wheel e os controles de performance. O pitch deve voltar ao centro, enquanto a modulation deve percorrer de 0 a 127.',
  },
  {
    name: 'Leia o log de eventos',
    text: 'Use o log de eventos para identificar mensagens Note Off ausentes, canais inesperados, valores baixos de velocity ou controles que enviam uma mensagem MIDI diferente da esperada.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Testador Online de Teclado MIDI para Hardware USB Real', level: 2 },
    {
      type: 'paragraph',
      html: 'Um <strong>testador de teclado MIDI online</strong> confiável deve responder rapidamente a uma pergunta: o instrumento físico está enviando as mensagens que uma DAW, sampler, synth ou sistema de iluminação espera? Este testador WebMIDI escuta a entrada MIDI do navegador e mostra Note On, Note Off, velocity, pitch bend e modulation wheel em tempo real. É projetado para teclados MIDI USB, interfaces DIN-para-USB, sintetizadores, pad controllers, pianos de palco, guitarras MIDI, triggers de bateria e controladores compactos usados em home studios ou setups ao vivo.',
    },
    {
      type: 'message',
      title: 'Diagnóstico MIDI local e privado',
      html: 'O teste é executado inteiramente no lado do cliente. O site não envia números de nota, curvas de velocity, movimentos de controle, nomes de dispositivos ou logs de eventos. O navegador expõe o MIDI somente após você aprovar a solicitação de permissão, e os valores permanecem na aba atual.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'faixa de velocity MIDI' },
        { value: '128', label: 'números de nota padrão' },
        { value: '14-bit', label: 'resolução do pitch bend' },
        { value: 'CC1', label: 'controle da modulation wheel' },
      ],
    },
    {
      type: 'table',
      headers: ['Sinal', 'O que o testador exibe', 'Comportamento saudável'],
      rows: [
        ['Note On', 'Nome da nota, número da nota, canal e velocity.', 'Cada tecla física acende uma vez ao ser pressionada e usa um valor de velocity acima de zero.'],
        ['Note Off', 'Evento de liberação no log e reset da iluminação da tecla.', 'Cada tecla pressionada apaga ao ser solta; nenhuma nota permanece visualmente presa.'],
        ['Velocity', 'Medidor ao vivo mais uma curva contínua.', 'Toque suave produz valores mais baixos e toque firme atinge valores mais altos sem saltos aleatórios.'],
        ['Pitch bend', 'Medidor centralizado com sinal de negativo a positivo.', 'A roda desliza suavemente e retorna próxima de zero ao ser solta.'],
        ['Modulation', 'Medidor CC1 de 0 a 127.', 'A roda ou fita se move de forma previsível por todo o percurso.'],
      ],
    },
    { type: 'title', text: 'Como Testar um Teclado MIDI Sem uma DAW', level: 2 },
    {
      type: 'paragraph',
      html: 'Procurar por <em>testar teclado MIDI</em> geralmente significa que o usuário ainda não sabe se a falha está no controlador, no cabo, no sistema operacional ou no software de música. Uma DAW adiciona muitas variáveis extras: estado de armação da faixa, filtros de entrada, roteamento de canal MIDI, instrumentos virtuais, monitoramento, templates e preferências de driver. Um testador no navegador remove a maior parte dessa pilha. Se a solicitação de permissão WebMIDI enxerga o dispositivo e o teclado ilumina as notas na tela, o caminho MIDI físico está funcionando.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Use isto antes de alterar as configurações da DAW',
      html: 'Primeiro confirme que o controlador envia MIDI bruto. Depois resolva problemas no aplicativo de música. Se o testador recebe notas mas a DAW não, verifique a habilitação da entrada MIDI, a entrada da faixa selecionada, filtros de canal, scripts de superfície de controle e monitoramento do instrumento.',
    },
    {
      type: 'list',
      items: [
        'Conecte o teclado diretamente ao computador quando possível, especialmente se a alimentação pelo barramento for marginal.',
        'Abra o testador no Chrome ou Edge, pois o suporte ao Web MIDI varia conforme o navegador e a plataforma.',
        'Pressione Conectar entrada MIDI e escolha o dispositivo musical ou a interface MIDI na solicitação de permissão.',
        'Toque notas cromáticas por todo o teclado para revelar teclas mortas, zonas divididas ou surpresas de transposição de oitava.',
        'Mova a pitch e a modulation wheel lentamente, depois rapidamente, para detectar sensores ruidosos ou mau retorno ao centro.',
        'Limpe o log entre testes ao comparar cabos, portas USB, presets do teclado ou modos do controlador.',
      ],
    },
    {
      type: 'tip',
      title: 'Verificação rápida do cabo',
      html: 'Se o dispositivo liga mas nenhuma entrada MIDI aparece, experimente um cabo USB diferente. Muitos cabos USB baratos são apenas para carga e não transmitem dados, fazendo o controlador parecer ativo enquanto nenhuma mensagem MIDI chega ao computador.',
    },
    { type: 'title', text: 'Interpretando Curvas de Velocity e Resposta Dinâmica', level: 2 },
    {
      type: 'paragraph',
      html: 'Velocity não é apenas volume; é um valor de performance enviado com a nota, geralmente de 1 a 127. Um plugin de piano pode mapear velocity para volume, camada de sample, brilho, ruído do martelo, tempo de ataque ou tudo isso ao mesmo tempo. Quando um controlador tem uma leitura de velocity ruim, o músico pode sentir que notas suaves desaparecem, notas médias são muito altas ou notas fortes nunca alcançam o máximo expressivo. A curva de velocity contínua ajuda a revelar se o hardware produz uma distribuição útil de valores.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Teclado saudável',
          description: 'Toques suaves, médios e fortes produzem faixas de velocity visivelmente distintas com valores repetíveis para força de execução similar.',
          highlight: true,
        },
        {
          title: 'Resposta comprimida',
          description: 'A maioria das notas se agrupa em uma faixa estreita, como 70-95, tornando pianos e baterias sem expressão ou difíceis de controlar.',
        },
        {
          title: 'Resposta errática',
          description: 'Notas adjacentes ou toques repetidos saltam de forma imprevisível, sugerindo contatos sujos, sensores com defeito, leitura ruim ou firmware instável.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Padrão de velocity observado', 'Provável interpretação', 'Próximo teste'],
      rows: [
        ['Sempre 127', 'O modo de velocity fixa está ativo ou o controlador está configurado para órgão/synth.', 'Verifique as configurações globais do teclado, modo pad ou editor do controlador.'],
        ['Sempre muito baixo', 'A curva de velocity está muito suave, a calibração do sensor está errada ou o teclado está com defeito.', 'Altere as curvas de velocity e compare as teclas pretas e brancas em várias oitavas.'],
        ['Uma tecla difere fortemente', 'Um contato local, cúpula de borracha, sensor óptico ou mecanismo da tecla pode estar sujo ou danificado.', 'Repita essa tecla em várias intensidades e compare com as notas vizinhas.'],
        ['Valores caem após usar um hub', 'A estabilidade de energia ou dados pode estar no limite.', 'Teste novamente com uma porta USB direta e um cabo de dados conhecido.'],
      ],
    },
    {
      type: 'card',
      title: 'Por que o Note Off importa',
      html: 'Uma nota presa geralmente é um Note Off ausente ou atrasado. Alguns instrumentos enviam Note On com velocity 0 em vez de um comando Note Off separado; ambos são comportamentos MIDI válidos. Este testador trata o Note On com velocity zero como liberação de nota, então as teclas realmente presas permanecem visíveis até que a mensagem de liberação correta chegue.',
    },
    { type: 'title', text: 'Testando Pitch Bend, Modulation e Controles de Performance', level: 2 },
    {
      type: 'paragraph',
      html: 'O pitch bend é uma mensagem MIDI de resolução mais alta que os dados comuns de controlador de 7 bits. Ele combina dois bytes de dados em uma faixa de 14 bits centrada em torno de 8192. Essa resolução extra é importante porque o movimento do pitch deve soar suave, especialmente ao curvar um synth solo, baixo ou instrumento orquestral. O testador converte o bend recebido em um medidor centralizado, facilitando ver se a roda atinge ambos os extremos e retorna ao neutro.',
    },
    {
      type: 'paragraph',
      html: 'A modulation wheel normalmente é o controlador contínuo MIDI 1, comumente escrito como CC1. Muitos patches de synth a usam para vibrato, movimento de filtro, posição de wavetable, tremolo ou dinâmica orquestral. Se mover a roda não atualizar o medidor CC1, o controlador pode estar atribuído a um CC diferente, usando um modo específico do fabricante ou passando por um software que remapeia controles de performance.',
    },
    {
      type: 'proscons',
      title: 'Teste MIDI no navegador versus monitoramento na DAW',
      items: [
        { pro: 'Confirmação rápida do hardware baseada em permissão, sem configuração de projeto.', con: 'Não emula todo o roteamento, scripts ou mapeamentos de instrumentos da DAW.' },
        { pro: 'Visão clara de notas, velocity, pitch bend e modulation CC1.', con: 'Aftertouch avançado, NRPN, MPE, SysEx e mapas de controle personalizados podem exigir ferramentas especializadas.' },
        { pro: 'Bom para chamadas de suporte, compra de equipamento usado e verificação de cabos.', con: 'O suporte do navegador depende da disponibilidade do Web MIDI na plataforma atual.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'A pitch wheel não retorna ao zero',
      html: 'Se o medidor de pitch repousar em um valor positivo ou negativo após a liberação, a roda física, a mola, o potenciômetro, o sensor hall, a calibração ou a zona morta do firmware podem precisar de atenção. Teste o mesmo controlador em outra porta e com outro preset antes de concluir que o sensor está com defeito.',
    },
    { type: 'title', text: 'Defeitos Comuns em Teclados MIDI que Este Testador Pode Revelar', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Tecla morta', definition: 'Uma tecla física que não produz mensagem Note On quando pressionada.' },
        { term: 'Nota presa', definition: 'Uma nota que recebe Note On mas nenhuma mensagem de liberação correspondente, mantendo o som ativo nos instrumentos.' },
        { term: 'Pico de velocity', definition: 'Um valor repentino muito mais alto ou mais baixo que o esperado para um toque semelhante.' },
        { term: 'Canal MIDI', definition: 'Um dos 16 canais lógicos usados para separar partes, zonas ou dispositivos em um fluxo MIDI.' },
        { term: 'Control Change', definition: 'Uma família de mensagens MIDI usada por knobs, pedais, rodas, sliders e interruptores.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Dispositivo detectado, sem mensagens',
      html: 'Se o navegador lista uma entrada MIDI mas tocar teclas não produz entradas no log, verifique se a porta selecionada é uma entrada de superfície de controle em vez da entrada de notas do teclado. Algumas interfaces expõem múltiplas portas com nomes semelhantes.',
    },
    {
      type: 'table',
      headers: ['Sintoma', 'Possível causa', 'Ação prática'],
      rows: [
        ['Sem solicitação de permissão', 'Navegador não suportado, origem insegura ou permissão MIDI do navegador bloqueada.', 'Use Chrome/Edge em HTTPS e verifique as permissões do site.'],
        ['Dispositivo ausente', 'Problema de cabo, hub, driver, conformidade de classe ou alimentação.', 'Experimente outro cabo de dados USB, porta ou hub alimentado.'],
        ['Apenas algumas oitavas funcionam', 'Modo split/layer, transposição, falha na matriz de hardware ou modo local control.', 'Redefina o preset e teste cromaticamente das notas graves às agudas.'],
        ['Nomes de nota errados', 'O controlador está transposto ou enviando de uma zona com deslocamento de oitava.', 'Verifique a transposição global, oitava de zona e configurações do template da DAW.'],
        ['Modulation wheel sem resposta', 'Roda atribuída a um número de controlador diferente ou desabilitada pelo preset.', 'Carregue um preset padrão ou editor do controlador e mapeie novamente para CC1.'],
      ],
    },
    {
      type: 'summary',
      title: 'Melhor ordem de diagnóstico',
      items: [
        'Confirme que o navegador enxerga a entrada MIDI.',
        'Toque notas e verifique o comportamento de pressionar/soltar.',
        'Inspecione a distribuição de velocity com toques repetidos suaves, médios e fortes.',
        'Mova os controles de pitch bend e modulation por todo o seu percurso.',
        'Só então ajuste o roteamento da DAW, as configurações do instrumento virtual ou os templates do controlador.',
      ],
    },
    { type: 'title', text: 'Privacidade, Suporte do Navegador e Limitações', level: 2 },
    {
      type: 'paragraph',
      html: 'O Web MIDI é intencionalmente protegido por permissão. Uma página não pode ler silenciosamente dispositivos musicais conectados em segundo plano sem que o navegador exponha um fluxo de acesso. O prompt exato e a persistência da permissão dependem do navegador, sistema operacional e configurações do usuário. Para a maioria dos músicos, o resultado prático é simples: clique no botão conectar, escolha a entrada MIDI, execute o teste e feche a aba quando terminar.',
    },
    {
      type: 'list',
      items: [
        'Nenhum dado de evento MIDI é enviado a servidores externos.',
        'O testador não requer acesso SysEx, mantendo o escopo da permissão mais restrito.',
        'Os nomes de dispositivos mostrados pelo navegador podem identificar modelos de hardware, portanto compartilhe capturas de tela com cuidado.',
        'Chrome e Edge geralmente oferecem o melhor suporte ao Web MIDI; o suporte do Safari e Firefox pode ser limitado ou ausente dependendo da plataforma.',
        'Utilitários nativos ainda podem ser necessários para atualizações de firmware, edição avançada de controladores, análise MPE, dumps SysEx ou diagnósticos específicos do fabricante.',
      ],
    },
    {
      type: 'card',
      title: 'Quando esta ferramenta é suficiente',
      html: 'Para comprar um controlador usado, verificar um cabo de estúdio, validar uma interface MIDI USB, testar um teclado reparado ou provar que um teclado envia mensagens antes de abrir uma DAW, um testador de teclado MIDI via Web geralmente é o primeiro passo mais rápido.',
    },
  ],
  ui: {
    connectButton: 'Conectar entrada MIDI',
    refreshButton: 'Atualizar entradas',
    clearButton: 'Limpar log',
    unsupportedTitle: 'Web MIDI não disponível',
    unsupportedBody: 'Use um navegador baseado em Chromium como Chrome ou Edge e abra a página em HTTPS ou localhost.',
    secureContext: 'O Web MIDI requer uma página HTTPS segura ou localhost antes que o navegador possa expor as entradas MIDI.',
    statusIdle: 'Pronto para solicitar acesso MIDI',
    statusPermission: 'Aguardando permissão MIDI do navegador',
    statusReady: 'Acesso MIDI concedido',
    statusNoInputs: 'Nenhuma entrada MIDI detectada',
    statusConnected: 'Entrada MIDI detectada',
    statusDisconnected: 'Dispositivo MIDI desconectado',
    statusError: 'Acesso MIDI falhou',
    detectedLabel: 'Dispositivo detectado',
    noDevice: 'Nenhum dispositivo MIDI selecionado',
    inputLabel: 'Entrada',
    inputIdle: 'nenhuma',
    channelLabel: 'Canal',
    notesLabel: 'Notas',
    velocityLabel: 'Velocity',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modulation',
    lastEventLabel: 'Último evento',
    octaveRangeLabel: 'Extensão visível',
    velocityCurveTitle: 'Curva de velocity',
    activeNotesTitle: 'Notas ativas',
    eventLogTitle: 'Log de eventos MIDI',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Pressione uma tecla ou mova uma roda para ver as mensagens MIDI recebidas.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'Todos os canais',
  },
};
