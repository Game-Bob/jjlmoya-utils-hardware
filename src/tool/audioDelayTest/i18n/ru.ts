import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-zaderzhki-zvuka';
const title = 'Тест задержки звука';
const description = 'Проверьте задержку звука в колонках, наушниках, Bluetooth-устройствах и синхронизацию видео с помощью локального импульсного теста в браузере.';

const faq = [
  {
    question: 'Что именно измеряет этот тест задержки звука?',
    answer: 'Режим микрофона оценивает интервал между импульсом браузера и его улавливанием микрофоном. Ручной режим позволяет настроить синхронность на слух.',
  },
  {
    question: 'Можно ли проверить задержку Bluetooth без микрофона?',
    answer: 'Да. Запустите импульсы, выберите Bluetooth и двигайте ползунок выравнивания, пока вспышка и щелчок не совпадут.',
  },
  {
    question: 'Почему режиму микрофона требуется разрешение?',
    answer: 'Браузеру нужен доступ к микрофону для фиксации звукового сигнала. Вся обработка происходит локально.',
  },
  {
    question: 'Почему результаты микрофона могут различаться?',
    answer: 'Отражения в комнате, обработка микрофона и буферы ОС влияют на измерение.',
  },
  {
    question: 'Какой режим тестирования выбрать?',
    answer: 'Выберите Колонки для помещения, Проводные наушники для прямого выхода, Bluetooth для беспроводных устройств и Синхронизация видео для плееров.',
  },
  {
    question: 'Отправляется ли аудио с микрофона на сервер?',
    answer: 'Нет. Аудиопоток обрабатывается исключительно в локальной памяти браузера и файлы не загружаются.',
  },
];

const howTo = [
  {
    name: 'Выберите путь воспроизведения',
    text: 'Выберите колонки, проводные наушники, Bluetooth или синхронизацию видео.',
  },
  {
    name: 'Начните с ручного импульса',
    text: 'Нажмите Начать тест, слушайте щелчок и настройте ползунок совмещения.',
  },
  {
    name: 'Включите измерение микрофоном при необходимости',
    text: 'Нажмите Включить микрофон, предоставьте доступ и разместите микрофон в точке прослушивания.',
  },
  {
    name: 'Считайте результат как оценку',
    text: 'Используйте медианную задержку и уровень доверия для сравнения настроек.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Тест задержки звука для Bluetooth и синхронизации видео', level: 2 },
    {
      type: 'paragraph',
      html: 'Этот браузерный тест задержки звука помогает проверить рассинхронизацию между визуальным сигналом и звуком.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Старт без доступа к микрофону',
      badge: 'Локально и конфиденциально',
      html: '<p>Ручной тест работает без микрофона. Следите за маркером и настройте ползунок совмещения.</p>',
    },
    {
      type: 'title',
      text: 'Как проверить задержку звука Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Выберите Bluetooth и установите комфортную громкость.',
        'Запустите импульсы в вашем браузере.',
        'Сравните визуальную вспышку со звуком щелчка.',
        'Двигайте ползунок выравнивания до полного совпадения.',
        'Повторите тест при изменении кодека или устройства.',
      ],
    },
    {
      type: 'table',
      headers: ['Режим', 'Лучше всего для', 'Главное ограничение'],
      rows: [
        ['Колонки', 'Акустика комнаты и ТВ', 'Расстояние и отражения комнаты влияют на замер.'],
        ['Проводные наушники', 'Прямой аналоговый выход', 'Микрофону сложно уловить звук закрытых наушников.'],
        ['Bluetooth', 'Беспроводные устройства', 'Буферизация кодека меняется от устройства.'],
        ['Синхронизация видео', 'Совмещение экрана и плеера', 'Видеоплеер может добавлять собственную задержку.'],
      ],
    },
    {
      type: 'title',
      text: 'Дополнительное измерение микрофоном',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'При включении микрофона инструмент измеряет время до акустического пика и рассчитывает медиану.',
    },
    {
      type: 'tip',
      title: 'Расположите микрофон в точке прослушивания',
      html: 'Для колонок разместите микрофон там, где вы обычно сидите.',
    },
    {
      type: 'title',
      text: 'Почему результаты задержки звука различаются',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Задержка звука зависит от всей цепочки: часов AudioContext, буферов ОС, кодека Bluetooth и динамиков.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Интерпретация результатов',
      badge: 'Оценочный показатель',
      html: '<p>Используйте значение для сравнения настроек. Это не заменяет профессиональное оборудование.</p>',
    },
  ],
  ui: {
    badge: 'Обсерватория задержки',
    modeLabel: 'Путь воспроизведения',
    modeSpeakers: 'Колонки',
    modeWired: 'Кабель',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Синхронизация видео',
    startTest: 'Начать тест',
    stopTest: 'Остановить тест',
    enableMic: 'Включить микрофон',
    micEnabled: 'Микрофон готов',
    calibrationTitle: 'Коррекция совмещения',
    calibrationHint: 'Двигайте ползунок, пока вспышка и щелчок не совпадут',
    calibrationEarly: 'Звук опережает',
    calibrationLate: 'Картинка опережает',
    calibrationCenter: 'Выровнено',
    visualLane: 'Видео',
    audioLane: 'Аудио',
    statusReady: 'Готово',
    statusRunning: 'Выполнение серии импульсов',
    statusWaiting: 'Ожидание импульса',
    resultTitle: 'Текущий замер',
    latencyLabel: 'Измеренная задержка',
    alignmentLabel: 'Коррекция совмещения',
    confidenceLabel: 'Достоверность',
    samplesLabel: 'Образцы',
    notMeasured: 'Не измерено',
    manualConfidence: 'Только вручную',
    lowConfidence: 'Низкая достоверность',
    mediumConfidence: 'Средняя достоверность',
    highConfidence: 'Высокая достоверность',
    noMic: 'Вход микрофона недоступен в этом браузере',
    permissionDenied: 'Доступ к микрофону не предоставлен',
    limitationTitle: 'Считывайте результат как оценку',
    limitationText: 'Отражения в комнате и буферы ОС меняют задержку. Записи звука не отправляются.',
    copyReport: 'Скопировать отчет',
    copied: 'Скопировано',
    reset: 'Сбросить',
    safety: 'Начните с низкой громкости. Остановите при искажениях.',
    pulse: 'СИНХРО',
  },
};
