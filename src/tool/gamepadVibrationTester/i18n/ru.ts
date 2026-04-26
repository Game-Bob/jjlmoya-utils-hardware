import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-vibracii-gejmpada-online';
const title = 'Онлайн тест вибрации геймпада';
const description =
  'Проверьте тактильные моторы и вибрацию Dual-Rumble вашего геймпада в браузере. Поддерживает Xbox, DualShock, DualSense и обычные контроллеры.';

const faqData = [
  {
    question: 'Что мне нужно, чтобы протестировать геймпад онлайн?',
    answer:
      'Просто подключите геймпад к компьютеру или мобильному устройству через USB-кабель или соедините его по Bluetooth. После подключения нажмите любую кнопку, чтобы устройство было обнаружено.',
  },
  {
    question: 'Работает ли это с любой моделью геймпада?',
    answer:
      'Большинство современных геймпадов известных брендов (таких как PlayStation или Xbox) совместимы, если ваше устройство и операционная система поддерживают их.',
  },
  {
    question: 'Правая сторона моего геймпада вибрирует меньше левой, это нормально?',
    answer:
      'Да, совершенно нормально. Геймпады обычно имеют асимметричную конструкцию, где одна сторона отвечает за сильную, глубокую вибрацию, а другая -за быструю, легкую вибрацию.',
  },
  {
    question: 'Сильно ли эти тесты расходуют заряд батареи?',
    answer:
      'Вибрация -одна из самых энергоемких функций беспроводного геймпада. Проведение непрерывных длительных тестов разрядит батарею быстрее, чем обычно.',
  },
];

const howToData = [
  {
    name: 'Подключите и включите геймпад',
    text: 'Подключите геймпад к ПК, Mac или мобильному телефону через USB-кабель или Bluetooth.',
  },
  {
    name: 'Нажмите кнопку на геймпаде',
    text: 'Браузеры требуют нажатия хотя бы одной кнопки, чтобы геймпад был обнаружен и началась веб-коммуникация.',
  },
  {
    name: 'Настройте вибромоторы',
    text: 'Настройте мощность сильного мотора (Low) и точного мотора (High) независимо друг от друга.',
  },
  {
    name: 'Запустите паттерны',
    text: 'Нажмите на один из пресетов или вручную настройте параметры и отправьте сигнал, чтобы почувствовать каждый компонент.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Как проверить вибрацию геймпада', level: 2 },
    {
      type: 'paragraph',
      html: 'Тактильная отдача -один из самых захватывающих элементов игрового оборудования. Когда мотор выходит из строя, первыми признаками обычно являются ненормальное жужжание или асимметричная вибрация. Ранняя диагностика предотвращает серьезные поломки.',
    },
    { type: 'title', text: 'Зачем проводить тест вибрации?', level: 3 },
    {
      type: 'paragraph',
      html: 'При покупке подержанного геймпада, после обновления драйверов или после падения тестирование тактильных моторов помогает отличить реальные аппаратные сбои от проблем с программным обеспечением. Совместим с Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro и обычными USB-геймпадами.',
    },
    { type: 'title', text: 'Dual-Rumble против архитектуры линейного привода', level: 3 },
    {
      type: 'paragraph',
      html: 'Классические геймпады (Xbox, DualShock) используют два асимметричных микромотора: левый создает глубокую, грохочущую вибрацию; правый производит быстрое, высокое жужжание. Продвинутые устройства, такие как DualSense, используют линейные приводы, имитирующие текстуру и сопротивление.',
    },
    { type: 'title', text: 'Руководство по диагностике симптомов', level: 3 },
    {
      type: 'paragraph',
      html: 'Активируйте каждый мотор независимо на 100%. Если оба звучат одинаково, геймпад может быть подделкой с одним мотором. Если один не отвечает, проверьте соединение перед вскрытием корпуса. Проверьте промежуточную интенсивность: качественные моторы реагируют плавно, а не как обычный выключатель.',
    },
  ],
  ui: {
    badge: 'Тест вибрации',
    title: 'Тестер вибрации геймпада',
    description: 'Прямое управление мотором Dual-Rumble вашего геймпада.',
    deviceDisconnected: 'Геймпад отключен',
    deviceDisconnectedSub: 'Нажмите кнопку на геймпаде, чтобы начать',
    deviceFallback: 'Геймпад подключен',
    deviceConnectedSub: 'Соединение стабильно. Готов к тесту.',
    noSupportWarning: "В вашем браузере не обнаружена поддержка Dual-Rumble. Используется базовая общая вибрация.",
    tabPresets: 'Лучшие пресеты',
    tabCustom: 'Чистая точность',
    presetHeavyTitle: 'Удар молота',
    presetHeavyDesc: 'Тяжелый мотор на максимум на 300 мс. Имитирует сильный удар.',
    presetLightTitle: 'Жужжание пчелы',
    presetLightDesc: 'Только правый мотор. Идеально для обнаружения необычного жужжания.',
    presetHeartbeatTitle: 'Биение сердца',
    presetHeartbeatDesc: 'Тонкие последовательные импульсы. Идеально для проверки инерционного удержания.',
    presetSongTitle: 'Ритм монет',
    presetSongDesc: 'Имитирует последовательные звуки монет. Коротко и тактильно.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Классика Queen в ваших руках: бум, бум, хлоп!",
    presetEarthquakeTitle: 'Максимальное землетрясение!',
    presetEarthquakeDesc: 'Оба мотора на 100% взрывной силы. ОЧЕНЬ интенсивно.',
    customStrongLabel: 'Сильный мотор (Левый)',
    customWeakLabel: 'Слабый мотор (Правый)',
    customDurationLabel: 'Длительность импульса',
    btnSendSignal: 'ОТПРАВИТЬ СИГНАЛ',
  },
};
