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
  ],
};
