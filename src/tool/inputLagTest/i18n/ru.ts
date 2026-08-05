import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-zaderzhki-vvoda-input-lag';

const title = 'Тест Задержки Ввода и Системного Lag';
const description = 'Онлайн инструмент для измерения задержки ввода input lag и отклика экрана с использованием точных таймеров.';

const faqData = [
  {
    question: 'Что такое input lag?',
    answer: 'Это задержка между физическим действием пользователя и визуальным обновлением на экране.',
  },
];

const howToData = [
  {
    name: 'Выберите режим',
    text: 'Выберите Мгновенный отклик, Задержка клавиатуры или Визуальная реакция.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
  inLanguage: 'ru',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Системный Lag',
  modeInstant: 'Мгновенный отклик',
  modeKey: 'Задержка клавиатуры',
  modeVisual: 'Визуальная реакция',
  targetClickPrompt: 'Кликните здесь для измерения задержки ввода',
  targetKeyPrompt: 'Нажмите любую клавишу для проверки клавиатуры',
  targetWaitPrompt: 'Ждите зеленый фон...',
  targetNowPrompt: 'НАЖИМАЙТЕ СЕЙЧАС!',
  labelAvgLatency: 'Средняя задержка',
  labelMinLatency: 'Мин. задержка',
  labelMaxLatency: 'Макс. задержка',
  labelJitter: 'Jitter (Колебание)',
  labelFps: 'Текущий FPS',
  labelFrameTime: 'Время кадра',
  labelSamples: 'Измерения',
  labelGrade: 'Оценка',
  gradeUltraFast: 'Ультра быстро (<10ms)',
  gradeFast: 'Быстро (10-20ms)',
  gradeModerate: 'Умеренно (20-35ms)',
  gradeHigh: 'Высоко (>35ms)',
  btnReset: 'Сбросить',
  btnCopyReport: 'Скопировать отчет',
  reportCopied: 'Отчет скопирован!',
  historyTitle: 'Последние измерения',
  pipelineTitle: 'Анализ задержки аппаратуры',
  distributionTitle: 'Распределение частоты',
  sampleCol: 'Замер',
  typeCol: 'Тип ввода',
  latencyCol: 'Задержка',
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
      text: 'Измерение Input Lag и Задержки Системы',
    },
    {
      type: 'paragraph',
      html: 'Оцените точность отклика периферии и скорость вывода изображения на экран.',
    },
  ],
};
