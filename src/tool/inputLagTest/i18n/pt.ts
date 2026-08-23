import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-lag-input-latencia';
const title = 'Teste de Lag de Entrada (Input Lag) e Latência do Sistema';
const description = 'Ferramenta online para medição de latência de entrada de hardware e atraso do sistema usando temporização de alta precisão e sincronização de quadros.';

const faqData = [
  {
    question: 'O que é input lag e latência do sistema?',
    answer: 'Input lag é o atraso de tempo total entre uma ação física do usuário (clicar no mouse ou pressionar uma tecla) e a atualização visual correspondente na tela.',
  },
  {
    question: 'Como este teste online mede o lag de entrada?',
    answer: 'Ele captura marcas temporais de eventos de hardware usando performance.now() e as relaciona com os ciclos de renderização requestAnimationFrame subsequentes.',
  },
  {
    question: 'Qual é um bom valor de input lag para jogos?',
    answer: 'Menos de 10 ms é considerado ultra-rápido para eSports. De 10 ms a 20 ms é rápido, de 20 ms a 35 ms é moderado e acima de 35 ms é um atraso perceptível.',
  },
  {
    question: 'Como posso reduzir o input lag no meu PC?',
    answer: 'Aumente a taxa de atualização do monitor, desative o VSync, ative o G-Sync ou FreeSync, aumente a taxa de amostragem USB do mouse para 1000Hz+ e ative o NVIDIA Reflex.',
  },
  {
    question: 'A taxa de atualização da tela afeta o input lag?',
    answer: 'Sim. Taxas de atualização mais altas reduzem a duração do quadro. Uma tela de 60Hz tem uma duração de quadro de 16,67 ms, enquanto uma tela de 240Hz tem apenas 4,17 ms.',
  },
];

const howToData = [
  {
    name: 'Escolher modo de teste',
    text: 'Selecione Resposta Instantânea, Latência de Tecla ou Latência de Reação Visual.',
  },
  {
    name: 'Realizar ações físicas',
    text: 'Clique dentro da caixa de teste ou pressione teclas para gerar eventos de hardware.',
  },
  {
    name: 'Observar métricas em tempo real',
    text: 'Examine a latência média, mínima, máxima e a variação (jitter) calculadas.',
  },
  {
    name: 'Verificar sincronização da tela',
    text: 'Monitore o FPS atual e o tempo de quadro para verificar a estabilidade.',
  },
  {
    name: 'Analisar histórico de medição',
    text: 'Inspecione o histórico de amostras para identificar picos de latência.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latência do Sistema',
  modeInstant: 'Resposta Instantânea',
  modeKey: 'Latência de Tecla',
  modeVisual: 'Latência de Reação Visual',
  targetClickPrompt: 'Clique ou toque dentro desta caixa para medir a latência',
  targetKeyPrompt: 'Pressione qualquer tecla (ou Espaço) para medir a latência do teclado',
  targetWaitPrompt: 'Aguarde o fundo ficar verde...',
  targetNowPrompt: 'CLIQUE AGORA!',
  labelAvgLatency: 'Latência Média',
  labelMinLatency: 'Latência Mínima',
  labelMaxLatency: 'Latência Máxima',
  labelJitter: 'Jitter de Latência (Desv. Padrão)',
  labelFps: 'FPS Atual',
  labelFrameTime: 'Tempo de Quadro',
  labelSamples: 'Amostras',
  labelGrade: 'Classificação da Latência',
  gradeUltraFast: 'Ultra Rápido (<10ms)',
  gradeFast: 'Rápido (10-20ms)',
  gradeModerate: 'Moderado (20-35ms)',
  gradeHigh: 'Alto (>35ms)',
  btnReset: 'Redefinir Medições',
  btnCopyReport: 'Copiar Relatório de Benchmark',
  reportCopied: 'Relatório Copiado!',
  historyTitle: 'Medições Recentes de Latência',
  pipelineTitle: 'Análise da Cadeia de Sinal de Hardware',
  distributionTitle: 'Distribuição de Frequência de Latência',
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
      text: 'O que é Input Lag e Latência do Sistema em Jogos de PC?',
    },
    {
      type: 'paragraph',
      html: 'O input lag (ou atraso de entrada) representa o atraso de tempo exato que ocorre entre o momento em que um usuário realiza uma ação física (como clicar com o botão do mouse ou pressionar uma tecla no teclado) e a resposta visual correspondente ser exibida na tela do monitor. Em eSports e jogos de alta velocidade, minimizar a latência do sistema é fundamental para a precisão do tiro, a velocidade de reação e o desempenho geral. A latência total do sistema é o resultado da acumulação de vários atrasos sucessivos: a taxa de amostragem USB do periférico, o processamento de eventos pelo sistema operacional, o motor de renderização do jogo, os buffers de quadros da placa de vídeo e o tempo de resposta dos pixels do próprio monitor.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'Meta para eSports',
          trend: 'Valor ideal competitivo',
        },
        {
          value: '1000 Hz',
          label: 'Amostragem USB Padrão',
          trend: 'Intervalo de 1.0 ms entre sinais',
        },
        {
          value: '240 Hz',
          label: 'Monitor de Alta Frequência',
          trend: 'Duração de quadro de 4.16 ms',
        },
        {
          value: '16.6 ms',
          label: 'Duração de Quadro 60Hz',
          trend: 'Atraso base da tela por quadro',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'Como Funciona a Medição da Latência Diretamente no Navegador?',
      html: 'Este teste utiliza marcadores temporais de alta precisão através de <code>performance.now()</code> associados aos escutadores de eventos DOM (<code>pointerdown</code> e <code>keydown</code>). Ao sincronizar o registro dos eventos com os ciclos reais de atualização da tela via <code>requestAnimationFrame</code>, a ferramenta calcula a diferença de tempo exata entre a ação física e a renderização diretamente no seu navegador.',
    },
    {
      type: 'title',
      text: 'O Caminho Detalhado do Sinal do Interruptor até a Tela',
    },
    {
      type: 'paragraph',
      html: 'Para diagnosticar e reduzir o lag de entrada de forma eficaz, deve-se compreender detalhadamente cada etapa da cadeia de sinal. A latência total do sistema é a soma dos atrasos do periférico, do sistema operacional, do motor de renderização, da placa de vídeo e do painel do monitor.',
    },
    {
      type: 'table',
      headers: ['Etapa da Cadeia', 'Atraso Típico', 'Causa Principal do Atraso', 'Estratégia de Otimização'],
      rows: [
        ['Interruptor do Periférico', '0.2 ms - 5.0 ms', 'Debounce mecânico dos contatos', 'Usar interruptores ópticos'],
        ['Taxa de Polling USB', '0.125 ms - 8.0 ms', '125 Hz vs 1000 Hz / 8000 Hz USB', 'Aumentar polling para 1000Hz+'],
        ['Fila do Sistema Operacional', '0.5 ms - 3.0 ms', 'Tarefas em segundo plano do SO', 'Ativar o Modo de Jogo no Windows'],
        ['Motor de Renderização', '4.0 ms - 20.0 ms', 'Carga elevada no processador e sinc', 'Usar NVIDIA Reflex / AMD Anti-Lag'],
        ['Buffer da Placa de Vídeo', '8.0 ms - 33.0 ms', 'VSync ativado, múltiplos buffers', 'Desativar VSync, usar VRR'],
        ['Processamento do Monitor', '1.0 ms - 15.0 ms', 'Processadores de imagem de TV e escala', 'Ativar Modo Jogo no monitor/TV'],
      ],
    },
    {
      type: 'tip',
      title: 'Como Reduzir a Latência de Renderização com Carga Elevada na GPU?',
      html: 'Quando a placa de vídeo opera em 99% de uso, o driver acumula quadros com antecedência. Isso gera um lag de entrada significativo (muitas vezes de 30 ms a 50 ms). Limite a taxa de quadros ligeiramente abaixo da capacidade máxima da GPU ou ative o NVIDIA Reflex.',
    },
    {
      type: 'title',
      text: 'Comparação de Latência entre Mouses, Teclados e Telas Sensíveis ao Toque',
    },
    {
      type: 'paragraph',
      html: 'Diferentes dispositivos de entrada possuem características de latência distintas com base na tecnologia utilizada.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Mouses Gamer',
          description: 'Conexão sem fio 2.4GHz rápida ou com fio.',
          highlight: 'Latência de 0.5ms - 2ms',
          points: [
            'Taxa de polling de 1000Hz a 8000Hz',
            'Interruptores ópticos sem atraso de debounce',
            'Sensores de baixíssimo atraso de movimento',
          ],
        },
        {
          title: 'Teclados Mecânicos',
          description: 'Varredura de matriz com controle de debounce.',
          highlight: 'Latência de 1ms - 10ms',
          points: [
            'Interruptores magnéticos Hall-effect (Rapid Trigger)',
            'Frequência de varredura de até 8000Hz',
            'Ponto de atuação ajustável',
          ],
        },
        {
          title: 'Telas Sensíveis ao Toque',
          description: 'Amostragem capacitiva em dispositivos móveis.',
          highlight: 'Latência de 15ms - 45ms',
          points: [
            'Taxa de amostragem de toque (120Hz - 480Hz)',
            'Atraso do compositor do sistema operacional',
            'Algoritmos de filtragem capacitiva',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Impacto da Taxa de Atualização da Tela no Atraso',
    },
    {
      type: 'paragraph',
      html: 'A taxa de atualização do monitor determina a latência mínima de exibição possível.',
    },
    {
      type: 'list',
      items: [
        'Tela de 60 Hz: 1 quadro = 16.67 ms de duração (Atraso médio: ~8.33 ms)',
        'Tela de 120 Hz: 1 quadro = 8.33 ms de duração (Atraso médio: ~4.16 ms)',
        'Tela de 144 Hz: 1 quadro = 6.94 ms de duração (Atraso médio: ~3.47 ms)',
        'Tela de 240 Hz: 1 quadro = 4.17 ms de duração (Atraso médio: ~2.08 ms)',
        'Tela de 360 Hz: 1 quadro = 2.78 ms de duração (Atraso médio: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Input Lag',
          definition: 'Tempo total entre a ação física e a resposta exibida na tela.',
        },
        {
          term: 'Jitter (Variação de Latência)',
          definition: 'Desvio padrão das medições indicando a consistência do sistema.',
        },
        {
          term: 'VSync (Sincronização Vertical)',
          definition: 'Evita rasgo de imagem, mas aumenta significativamente o input lag.',
        },
        {
          term: 'Variable Refresh Rate (VRR)',
          definition: 'Tecnologias como G-Sync e FreeSync que alinham a atualização da tela à GPU.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Vantagens e Limitações do Teste no Navegador',
    },
    {
      type: 'paragraph',
      html: 'Medir a latência no navegador oferece verificação imediata sem necessidade de equipamento especializado.',
    },
    {
      type: 'proscons',
      title: 'Avaliação da Medição no Navegador',
      items: [
        {
          pro: 'Sem necessidade de instalar software ou comprar hardware especial',
          con: 'Sujeito ao loop de eventos do navegador e ao gerenciador de janelas do SO',
        },
        {
          pro: 'Temporizador de alta precisão em microssegundos (performance.now)',
          con: 'Não mede diretamente o tempo de resposta óptico dos pixels da tela',
        },
        {
          pro: 'Comparação imediata entre diferentes periféricos e navegadores',
          con: 'Mitigação de segurança na precisão do temporizador no navegador',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diagnóstico para Input Lag Elevado',
    },
    {
      type: 'paragraph',
      html: 'Se os seus resultados apresentarem latência alta (>30 ms), verifique as configurações abaixo.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Aviso de Latência Alta',
      html: 'Se a latência média ultrapassar 35 ms, verifique se o VSync está ativado no painel de controle da placa de vídeo. Desativar a aceleração de hardware no navegador também pode sobrecarregar o processador.',
    },
    {
      type: 'title',
      text: 'Passos para Otimizar a Latência do Sistema',
    },
    {
      type: 'paragraph',
      html: 'Siga estes passos para reduzir o atraso de resposta no seu sistema.',
    },
    {
      type: 'summary',
      title: 'Lista de Verificação para Otimização de Latência',
      items: [
        'Defina a taxa de amostragem USB do mouse para 1000Hz ou superior.',
        'Ative o Agendamento de GPU Acelerado por Hardware (HAGS) no Windows.',
        'Ative o Modo de Jogo no monitor ou TV para evitar processamento de imagem.',
        'Desative o VSync global e utilize G-Sync ou FreeSync.',
        'Ative o NVIDIA Reflex ou AMD Anti-Lag em jogos compatíveis.',
        'Certifique-se de que a Aceleração de Hardware do navegador esteja ligada.',
      ],
    },
    {
      type: 'message',
      title: 'Recomendação para Resultados Confiáveis',
      html: 'Para obter a máxima precisão, feche aplicativos em segundo plano, coloque o navegador em tela cheia e faça pelo menos 15 a 20 medições.',
    },
  ],
};
