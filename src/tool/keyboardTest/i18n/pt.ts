import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-teclado-online';
const title = 'Teste de Teclado Online e Detetor de Ghosting';
const description = 'Verifique se o seu teclado sofre de Ghosting ou Key Jamming. Visualizador de teclas em tempo real e contador de N-Key Rollover.';

const faqData = [
  {
    question: 'O que é o Ghosting num teclado?',
    answer: 'É um defeito que ocorre quando prime várias teclas ao mesmo tempo e o computador não regista algumas delas. Deve-se a limitações na matriz elétrica interna do teclado que não consegue processar certas combinações.',
  },
  {
    question: 'O que significa N-Key Rollover (NKRO)?',
    answer: 'NKRO significa que o teclado pode registar tantas teclas quantas premir simultaneamente sem falhas. É uma funcionalidade premium, comum em teclados mecânicos e de gaming de gama alta.',
  },
  {
    question: 'Porque é que o meu teclado falha quando primo 3 teclas ao mesmo tempo?',
    answer: 'A maioria dos teclados de escritório baratos tem um rollover de 2 ou 3 teclas. Isto é suficiente para escrever, mas insuficiente para gaming intensivo ou atalhos complexos.',
  },
  {
    question: 'Como posso reparar uma tecla que não responde?',
    answer: 'Se o teste não detetar a pressão da tecla, pode ser sujidade por baixo do interruptor, falha de contacto elétrico ou um cabo danificado. Tente limpar o teclado com ar comprimido antes de desistir.',
  },
];

const howToData = [
  {
    name: 'Focar o visualizador',
    text: 'Clique em qualquer lugar na página para garantir que o navegador tem o foco e pode capturar as pressões de teclas de hardware.',
  },
  {
    name: 'Executar o teste de resposta',
    text: 'Prima cada tecla do seu teclado uma a uma. A tecla correspondente no ecrã ficará verde se funcionar corretamente.',
  },
  {
    name: 'Verificar ghosting',
    text: 'Prima teclas de gaming comuns (W, A, S, D, Espaço, Shift) todas de uma vez para ver se bloqueiam ou se acendem todas.',
  },
  {
    name: 'Verificar rollover máximo',
    text: 'Tente premir o máximo de teclas que conseguir com as duas mãos e observe o contador de pressão simultânea de teclas máxima.',
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

export const content: ToolLocaleContent<TestTecladoUI> = {
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
      text: 'Teste de Teclado Online: Detete Ghosting e N-Key Rollover',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma ferramenta interativa para diagnóstico de teclado. Verifique se o seu periférico sofre de ghosting, bloqueio ou limitações de rollover. Visualmente claro com suporte para todos os tipos de teclado.',
    },
    {
      type: 'title',
      text: 'O que é Ghosting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O ghosting ocorre quando prime uma combinação específica de teclas e o teclado regista uma pressão fantasma que não fez. Isto deve-se a limitações na matriz do circuito interno.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover e Rollover Máximo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Permite registar todas as teclas premidas simultaneamente. <strong>6KRO:</strong> Limite antigo do padrão USB. <strong>2-3KRO:</strong> Comum em teclados baratos, suficiente para escrever.',
    },
    {
      type: 'title',
      text: 'Teclados Mecânicos vs Membrana',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Teclados mecânicos têm interruptores individuais com díodos isolados, eliminando o ghosting. Teclados de membrana partilham trilhos condutores, causando falhas em combinações simultâneas.',
    },
  ],
  ui: {
    badge: 'Teste de Input',
    title: 'Teste de Teclado e Detetor de Ghosting',
    description: 'Verifique o N-Key Rollover e detete teclas com falha.',
    simultaneousLabel: 'Simultâneas',
    eventLogLabel: 'Log de Eventos',
    resetBtn: 'Reset',
  },
};
