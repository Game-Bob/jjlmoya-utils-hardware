import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';

const slug = 'test-klaviatury-online';
const title = 'Онлайн тест клавиатуры и детектор гостинга';
const description = 'Проверьте клавиатуру на гостинг или залипание клавиш. Визуализатор клавиш в реальном времени и счетчик N-Key Rollover.';

const faqData = [
  {
    question: 'Что такое гостинг (Ghosting) на клавиатуре?',
    answer: 'Это дефект, возникающий при нажатии нескольких клавиш одновременно, когда компьютер не регистрирует некоторые из них. Это связано с ограничениями во внутренней электрической матрице клавиатуры, которая не может обработать определенные комбинации.',
  },
  {
    question: 'Что означает N-Key Rollover (NKRO)?',
    answer: 'NKRO означает, что клавиатура может безошибочно регистрировать столько клавиш, сколько вы можете нажать одновременно. Это премиальная функция, распространенная в высококлассных механических и игровых клавиатурах.',
  },
  {
    question: 'Почему моя клавиатура не работает при нажатии 3 клавиш одновременно?',
    answer: 'Большинство дешевых офисных клавиатур имеют 2- или 3-клавишный ролловер. Этого достаточно для набора текста, но недостаточно для интенсивных игр или сложных сочетаний клавиш.',
  },
  {
    question: 'Как исправить клавишу, которая не реагирует?',
    answer: 'Если тест не обнаруживает нажатие, это может быть грязь под переключателем, неисправность электрического контакта или поврежденный кабель. Попробуйте очистить клавиатуру сжатым воздухом, прежде чем сдаваться.',
  },
];

const howToData = [
  {
    name: 'Сфокусируйтесь на визуализаторе',
    text: 'Нажмите в любом месте страницы, чтобы убедиться, что браузер находится в фокусе и может фиксировать нажатия клавиш.',
  },
  {
    name: 'Запустите тест отклика',
    text: 'Нажимайте каждую клавишу на клавиатуре по одной. Соответствующая клавиша на экране загорится зеленым, если она работает правильно.',
  },
  {
    name: 'Проверьте на гостинг',
    text: 'Нажмите основные игровые клавиши (W, A, S, D, Пробел, Shift) одновременно, чтобы увидеть, не блокируются ли они и все ли они загораются.',
  },
  {
    name: 'Проверьте максимальный ролловер',
    text: 'Попробуйте нажать как можно больше клавиш обеими руками и следите за счетчиком максимального количества одновременных нажатий.',
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
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Технические справки',
  bibliography: [
    {
      name: 'USB Keyboard/Keypad Page - HID Usage Tables',
      url: 'https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf',
    },
    {
      name: 'Mechanical vs Membrane Keyboards - Technical Deep Dive',
      url: 'https://deskthority.net/wiki/Rollover',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Тест клавиатуры онлайн: обнаружение гостинга и N-Key Rollover',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Интерактивный инструмент для диагностики клавиатуры. Проверьте устройство на наличие гостинга, блокировки или ограничений ролловера. Визуально понятный интерфейс с поддержкой всех типов клавиатур.',
    },
    {
      type: 'title',
      text: 'Что такое гостинг?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Гостинг возникает, когда вы нажимаете определенную комбинацию клавиш, и клавиатура регистрирует ложное нажатие, которого вы не совершали. Это связано с ограничениями внутренней схемной матрицы.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover и максимальный ролловер',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Позволяет регистрировать все нажатые клавиши одновременно. <strong>6KRO:</strong> Старый лимит стандарта USB. <strong>2-3KRO:</strong> Обычное явление для дешевых клавиатур, достаточно для набора текста.',
    },
    {
      type: 'title',
      text: 'Механические клавиатуры против мембранных',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Механические клавиатуры имеют индивидуальные переключатели с изолированными диодами, что исключает гостинг. Мембранные клавиатуры используют общие проводящие дорожки, что приводит к ошибкам при одновременных нажатиях.',
    },
  ],
  ui: {
    badge: 'Тест ввода',
    title: 'Тест клавиатуры и детектор гостинга',
    description: 'Проверьте N-Key Rollover и выявите неисправные клавиши.',
    simultaneousLabel: 'Одновременно',
    eventLogLabel: 'Лог событий',
    resetBtn: 'Сброс',
  },
};
