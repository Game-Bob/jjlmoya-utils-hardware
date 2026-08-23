import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Калькулятор закона Ома и электрической мощности',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ru',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Что рассчитывает этот калькулятор закона Ома?',
      acceptedAnswer: { '@type': 'Answer', text: 'Введите любые два положительных значения напряжения, тока, сопротивления или мощности. Калькулятор выведет остальные два значения.' },
    },
    {
      '@type': 'Question',
      name: 'Какие единицы измерения использует калькулятор?',
      acceptedAnswer: { '@type': 'Answer', text: 'Используются вольты для напряжения, амперы для тока, омы для сопротивления и ватты для мощности.' },
    },
    {
      '@type': 'Question',
      name: 'Можно ли использовать мощность и сопротивление как известные величины?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да. Калькулятор использует формулы с квадратным корнем для вычисления напряжения и тока.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Как рассчитать электрические величины по закону Ома',
  step: [
    { '@type': 'HowToStep', name: 'Выберите две известные величины', text: 'Активируйте две величины, которые вам известны: напряжение, ток, сопротивление или мощность.' },
    { '@type': 'HowToStep', name: 'Введите измерения', text: 'Введите положительные значения в активные поля.' },
    { '@type': 'HowToStep', name: 'Считайте результат', text: 'Схема и дисплей покажут рассчитанные значения и примененные формулы.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Расчет напряжения тока сопротивления или мощности в цепи', level: 2 },
  { type: 'paragraph', html: 'Зная две электрические величины в простой цепи, вы располагаете достаточными данными для расчета остальных двух. Введите пару известных значений, и этот калькулятор закона Ома рассчитает недостающие величины в вольтах, амперах, омах и ваттах.' },
  { type: 'paragraph', html: 'Например, введите 12 В и 2 А, чтобы получить 6 Ом и 24 Вт. Введите 5 В и 10 Вт, чтобы получить 2 А и 2,5 Ом. Полезно для проверки резисторов, оценки тока светодиодов или расчета нагрузки усилителей.' },
  { type: 'title', text: 'Какую формулу закона Ома следует использовать', level: 3 },
  { type: 'paragraph', html: 'Подходящее уравнение зависит от двух доступных измерений. Все они являются следствиями закона Ома V = I x R и формулы мощности P = V x I.' },
  { type: 'table', headers: ['Известные данные', 'Вычисляемые величины', 'Формула'], rows: [
    ['Напряжение и ток', 'Сопротивление и мощность', 'R = V / I и P = V x I'],
    ['Напряжение и сопротивление', 'Ток и мощность', 'I = V / R и P = V² / R'],
    ['Напряжение и мощность', 'Ток и сопротивление', 'I = P / V и R = V² / P'],
    ['Ток и сопротивление', 'Напряжение и мощность', 'V = I x R и P = I² x R'],
    ['Ток и мощность', 'Напряжение и сопротивление', 'V = P / I и R = P / I²'],
    ['Сопротивление и мощность', 'Напряжение и ток', 'V = √(P x R) и I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Учитывайте мощность для выбора надежных компонентов', html: 'Если калькулятор показывает 24 Вт, компонент должен рассеивать не менее этой мощности в виде тепла. Всегда оставляйте запас прочности.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'kalkulyator-zakona-oma-moshchnosti',
  title: 'Калькулятор закона Ома и электрической мощности',
  description: 'Калькулятор закона Ома для расчета напряжения, тока, сопротивления и электрической мощности по двум известным значениям.',
  ui: {
    instructions: 'Выберите две известные величины и введите их. Схема рассчитает оставшуюся пару в единицах СИ.',
    knownLabel: 'Выберите две известные величины',
    useAsKnownLabel: 'Использовать как известное',
    voltageLabel: 'Напряжение',
    currentLabel: 'Ток',
    resistanceLabel: 'Сопротивление',
    powerLabel: 'Мощность',
    voltageUnit: 'В',
    currentUnit: 'А',
    resistanceUnit: 'Ом',
    powerUnit: 'Вт',
    resultTitle: 'Завершите схему',
    resultHint: 'Два известных вывода рассчитывают недостающую пару.',
    formulaTitle: 'Индикация схемы',
    formulaHint: 'Подсвеченные выводы известны. Медные дорожки показывают уравнения.',
    statusTitle: 'Статус расчета',
    statusEmpty: 'Введите два положительных значения для начала.',
    statusInvalid: 'Оба известных значения должны быть больше нуля.',
    statusReady: 'Расчет цепи успешно выполнен.',
    presetTitle: 'Начать с реальной нагрузки',
    presetLed: 'Светодиодный индикатор',
    presetUsb: 'Нагрузка USB',
    presetAmplifier: 'Нагрузка усилителя',
    resetLabel: 'Сбросить',
    orbitCaption: 'Выберите два вывода, чтобы замкнуть цепь.',
    knownBadge: 'Известно',
    solvedBadge: 'Рассчитано',
    unitVoltage: 'вольты',
    unitCurrent: 'амперы',
    unitResistance: 'омы',
    unitPower: 'ватты',
    formulaVoltageCurrent: 'R = V / I и P = V x I',
    formulaVoltageResistance: 'I = V / R и P = V² / R',
    formulaVoltagePower: 'I = P / V и R = V² / P',
    formulaCurrentResistance: 'V = I x R и P = I² x R',
    formulaCurrentPower: 'V = P / I и R = P / I²',
    formulaResistancePower: 'V = √(P x R) и I = √(P / R)',
    seoTitle: 'Калькулятор закона Ома',
  },
  seo,
  faqTitle: 'Часто задаваемые вопросы о законе Ома',
  faq: [
    { question: 'Я знаю напряжение и ток. Что я получу?', answer: 'Вы получите сопротивление и мощность. Например, 12 В и 2 А дают 6 Ом и 24 Вт.' },
    { question: 'Можно ли рассчитать мощность, рассеиваемую резистором?', answer: 'Да. Введите напряжение и сопротивление или ток и сопротивление для расчета мощности в ваттах.' },
    { question: 'Можно ли использовать мощность и напряжение в качестве входных данных?', answer: 'Да. Введите оба значения, и калькулятор выведет ток (I = P / V) и сопротивление (R = V² / P).' },
    { question: 'Применим ли закон Ома ко всем компонентам?', answer: 'Нет. Этот инструмент моделирует простые омические компоненты. Диоды имеют нелинейную характеристику.' },
  ],
  bibliographyTitle: 'Источники формул',
  bibliography,
  howTo: [
    { name: 'Выберите две известные величины', text: 'Активируйте две известные величины.' },
    { name: 'Введите положительные измерения', text: 'Введите вольты, амперы, омы или ватты.' },
    { name: 'Считайте результаты', text: 'Посмотрите рассчитанные значения и формулу.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
