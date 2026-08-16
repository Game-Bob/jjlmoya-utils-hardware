import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-input-lag';
const title = 'Medidor de Input Lag e Latência do Sistema';
const description = 'Ferramenta online para medição de input lag e latência de tela usando alta precisão de sincronização de quadros.';

const faqData = [
  {
    question: 'O que é input lag e latência do sistema?',
    answer: 'É o tempo de atraso entre uma ação física do usuário (clique do mouse ou tecla) e a atualização visual na tela.',
  },
  {
    question: 'Como esta ferramenta mede a latência no navegador?',
    answer: 'Utiliza performance.now() em eventos de hardware e calcula o atraso até a sincronização com requestAnimationFrame.',
  },
  { question: 'Que latência é boa para jogar?', answer: 'Abaixo de 10 ms é muito rápido. De 10 a 20 ms é rápido, de 20 a 35 ms é moderado e valores superiores tornam-se percetíveis.' },
  { question: 'Como reduzir a latência de entrada?', answer: 'Verifique a frequência do ecrã, VSync, VRR e polling USB. Altere uma definição e volte a medir.' },
  { question: 'A frequência do ecrã afeta o input lag?', answer: 'Sim. A 60 Hz cada frame demora 16.67 ms e a 240 Hz demora 4.17 ms. O processamento e o painel também acrescentam atraso.' },
];

const howToData = [
  {
    name: 'Selecionar modo de teste',
    text: 'Escolha Resposta Instantânea, Latência de Teclado ou Reação Visual.',
  },
  {
    name: 'Realizar ações',
    text: 'Clique na área de teste ou pressione teclas para capturar eventos.',
  },
  { name: 'Verificar estatísticas', text: 'Consulte a média, o mínimo, o máximo e o jitter após várias tentativas.' },
  { name: 'Repetir a medição', text: 'Faça nova série depois de cada alteração e mantenha as mesmas condições.' },
  { name: 'Interpretar os limites', text: 'Use o resultado para comparar configurações, não como medição ótica absoluta.' },
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latência do Sistema',
  modeInstant: 'Resposta Instantânea',
  modeKey: 'Latência de Teclado',
  modeVisual: 'Reação Visual',
  targetClickPrompt: 'Clique aqui para medir a latência de entrada',
  targetKeyPrompt: 'Pressione qualquer tecla para medir a latência de teclado',
  targetWaitPrompt: 'Aguarde a tela verde...',
  targetNowPrompt: 'CLIQUE AGORA!',
  labelAvgLatency: 'Latência Média',
  labelMinLatency: 'Latência Mínima',
  labelMaxLatency: 'Latência Máxima',
  labelJitter: 'Jitter (Desvio Padrão)',
  labelFps: 'FPS Atual',
  labelFrameTime: 'Tempo de Quadro',
  labelSamples: 'Amostras',
  labelGrade: 'Classificação',
  gradeUltraFast: 'Ultra Rápido (<10ms)',
  gradeFast: 'Rápido (10-20ms)',
  gradeModerate: 'Moderado (20-35ms)',
  gradeHigh: 'Alto (>35ms)',
  btnReset: 'Reiniciar Medição',
  btnCopyReport: 'Copiar Relatório',
  reportCopied: 'Relatório Copiado!',
  historyTitle: 'Medições Recentes',
  pipelineTitle: 'Detalhamento do Pipeline de Hardware',
  distributionTitle: 'Distribuição de Frequência',
  sampleCol: 'Amostra',
  typeCol: 'Tipo de Entrada',
  latencyCol: 'Latência Medida',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Medição de Input Lag e Latência de Tela',
    },
    {
      type: 'paragraph',
      html: 'Avalie a resposta de entrada do seu sistema e periféricos em tempo real.',
    },
    { type: 'stats', items: [
      { value: '< 10 ms', label: 'Meta de esports', trend: 'Referência competitiva' },
      { value: '1000 Hz', label: 'Polling USB comum', trend: 'Intervalo de 1 ms' },
      { value: '240 Hz', label: 'Monitor de alta frequência', trend: 'Frame a cada 4.16 ms' },
      { value: '16.6 ms', label: 'Intervalo a 60 Hz', trend: 'Base por frame' },
    ], columns: 4 },
    { type: 'card', title: 'Como o navegador mede a latência', html: 'O teste compara os eventos pointerdown e keydown com as atualizações de requestAnimationFrame. Assim, estima o intervalo local entre a deteção da entrada e a pintura da página.' },
    { type: 'title', text: 'Como o sinal de latência atravessa o sistema' },
    { type: 'paragraph', html: 'A latência total acumula se desde o interruptor do periférico até ao pixel visível. Separar cada etapa ajuda a perceber se o atraso vem do dispositivo, do sistema operativo, do processamento gráfico ou do ecrã.' },
    { type: 'table', headers: ['Componente', 'Intervalo comum', 'Principal obstáculo', 'Possível melhoria'], rows: [
      ['Interruptor', '0.2 a 5.0 ms', 'Ressalto mecânico', 'Reduzir o debounce'],
      ['Polling USB', '0.125 a 8.0 ms', 'Frequência baixa', 'Aumentar a frequência disponível'],
      ['Fila do sistema', '0.5 a 3.0 ms', 'Tarefas em segundo plano', 'Fechar processos desnecessários'],
      ['Motor gráfico', '4.0 a 20.0 ms', 'Frames limitados pela CPU', 'Reduzir a carga de renderização'],
      ['Fila da GPU', '8.0 a 33.0 ms', 'VSync e vários buffers', 'Comparar VSync com VRR'],
      ['Processamento do ecrã', '1.0 a 15.0 ms', 'Escala e filtros', 'Ativar o modo de jogo'],
    ] },
    { type: 'tip', title: 'Reduzir a fila de renderização da GPU', html: 'Uma GPU saturada pode preparar vários frames antecipadamente. Limitar a taxa ligeiramente abaixo do máximo e testar Reflex ou Anti Lag pode reduzir a espera.' },
    { type: 'title', text: 'Comparar periféricos de entrada' },
    { type: 'paragraph', html: 'Ratos, teclados e ecrãs táteis têm latências diferentes devido à ligação, à eletrónica e à frequência de varrimento. Use o mesmo ecrã e as mesmas definições durante a comparação.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Ratos gaming', description: 'Ligação com fio ou sem fio de alta frequência.', highlight: '0.5 a 2 ms', points: ['Polling de 1000 Hz ou superior', 'Interruptores óticos', 'Sensor de processamento rápido'] },
      { title: 'Teclados mecânicos', description: 'Matriz de teclas com debounce ajustável.', highlight: '1 a 10 ms', points: ['Interruptores magnéticos', 'Varredura da matriz configurável', 'Distância de atuação regulável'] },
      { title: 'Ecrãs táteis', description: 'Digitalizador capacitivo sobre o painel.', highlight: '15 a 45 ms', points: ['Frequência de amostragem tátil', 'Processamento do controlador', 'Filtros contra toques acidentais'] },
    ] },
    { type: 'title', text: 'Perceber o atraso causado pela frequência do ecrã' },
    { type: 'paragraph', html: 'A frequência de atualização define o intervalo mínimo entre imagens. Um ecrã de 60 Hz mostra uma entrada mais tarde do que um de 240 Hz, mas o processamento e a sincronização também contam.' },
    { type: 'list', items: ['60 Hz corresponde a 16.67 ms por frame', '120 Hz corresponde a 8.33 ms por frame', '144 Hz corresponde a 6.94 ms por frame', '240 Hz corresponde a 4.17 ms por frame', '360 Hz corresponde a 2.78 ms por frame', '540 Hz corresponde a 1.85 ms por frame'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: 'Tempo entre a ação física e o resultado visível no ecrã.' },
      { term: 'Jitter', definition: 'Variação das medições que mostra a estabilidade do sistema.' },
      { term: 'VSync', definition: 'Sincronização vertical que pode reduzir tearing mas acrescentar espera.' },
      { term: 'VRR', definition: 'Frequência variável que adapta o ecrã à saída da GPU.' },
      { term: 'Tempo do pixel', definition: 'Tempo necessário para um pixel mudar de tonalidade.' },
    ] },
    { type: 'title', text: 'Vantagens e limites da medição no navegador' },
    { type: 'paragraph', html: 'A prova permite comparar definições sem osciloscópio ou câmara rápida. Não observa diretamente todos os atrasos internos do controlador, do jogo ou da emissão ótica do painel.' },
    { type: 'proscons', title: 'Avaliação da medição web', items: [
      { pro: 'Não exige equipamento especializado', con: 'Depende do ciclo de eventos do navegador' },
      { pro: 'Compara periféricos rapidamente', con: 'Não mede diretamente a resposta do pixel' },
      { pro: 'Usa um temporizador local de alta resolução', con: 'O navegador pode reduzir a precisão' },
      { pro: 'Mostra a estabilidade das atualizações', con: 'Um separador inativo pode ser abrandado' },
    ] },
    { type: 'title', text: 'Diagnosticar uma latência elevada' },
    { type: 'paragraph', html: 'Se a média ultrapassar 30 ms ou o jitter for elevado, repita a série com a janela ativa e verifique VSync, aceleração gráfica, polling USB e tarefas do processador.' },
    { type: 'diagnostic', variant: 'warning', title: 'Aviso de diagnóstico da latência', html: 'Uma média acima de 35 ms num computador de secretária exige verificar o modo do ecrã e a aceleração de hardware. Altere uma só definição de cada vez.' },
    { type: 'title', text: 'Reduzir a latência passo a passo' },
    { type: 'paragraph', html: 'Ajuste o periférico, o ecrã e o sistema separadamente. Depois de cada alteração, recolha novos dados nas mesmas condições para confirmar a melhoria.' },
    { type: 'summary', title: 'Lista de verificação para otimizar a latência', items: ['Escolher um polling USB adequado', 'Ativar o modo de jogo do ecrã', 'Desativar filtros de imagem desnecessários', 'Comparar VSync e VRR', 'Manter a taxa de frames estável', 'Fechar tarefas pesadas em segundo plano', 'Repetir a medição após cada alteração'] },
    { type: 'message', title: 'Boa prática para comparar resultados', html: 'Feche aplicações em segundo plano, mantenha a janela ativa e recolha pelo menos 15 amostras. Consulte a mediana, a média e o jitter, pois uma medição isolada pode ser casual.' },
  ],
};
