import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';

const slug = 'test-gejmpada-online';
const title = 'Онлайн тест геймпада и контроллера';
const description = 'Проверьте свой контроллер Xbox, PlayStation или ПК. Визуализируйте мертвые зоны, дрифт стиков и кнопки.';

const faqData = [
  {
    question: 'Что такое дрифт джойстика (стики)?',
    answer: 'Дрифт возникает, когда контроллер регистрирует движение без прикосновения к стику. Это вызвано износом внутренних потенциометров, которые посылают ложный электрический сигнал в постоянном направлении.',
  },
  {
    question: 'Как исправить дрифт программно?',
    answer: 'Если дрифт незначительный, вы можете настроить увеличенную «Мертвую зону» (Deadzone) в настройках игры. Это позволит игнорировать небольшие движения стика в центре.',
  },
  {
    question: 'Совместим ли тест с контроллерами PS5, Xbox и Switch?',
    answer: 'Да. Наш инструмент использует стандартный Gamepad API современных браузеров, который обнаруживает практически любой контроллер, подключенный через USB или Bluetooth, включая DualSense, DualShock 4 и контроллеры Xbox.',
  },
  {
    question: 'Почему браузер не видит мой контроллер?',
    answer: 'В целях безопасности браузеры включают геймпад только после первого нажатия кнопки. Если он не появляется, нажмите любую кнопку (например, A или X) и убедитесь, что вы не находитесь в строгом режиме инкогнито.',
  },
];

const howToData = [
  {
    name: 'Подключите контроллер',
    text: 'Подключите геймпад через USB или сопрягите его по Bluetooth с вашим компьютером.',
  },
  {
    name: 'Активируйте обнаружение',
    text: 'Пошевелите стиками или нажмите любую кнопку, чтобы браузер распознал подключенное устройство.',
  },
  {
    name: 'Проверьте мертвые зоны',
    text: 'Отпустите стики и наблюдайте за осями на экране. Если значения не равны 0.0000, у вас есть небольшой дрифт.',
  },
  {
    name: 'Проверьте кнопки и вибрацию',
    text: 'Нажмите каждую кнопку и триггер. Визуальные индикаторы должны загореться, и если ваш контроллер поддерживает это, вы можете проверить вибромотор.',
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

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Технические Справки',
  bibliography: [
    {
      name: 'Стандарт Gamepad API - W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
    {
      name: 'Vibration API - MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Тест геймпада онлайн: обнаружение дрифта и проблем со стиками',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Бесплатный инструмент для проверки контроллеров Xbox, PlayStation, Switch и других. Визуализация мертвых зон, обнаружение дрифта и проверка вибрации.',
    },
    {
      type: 'title',
      text: 'Что такое дрифт джойстика',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Дрифт — это распространенный дефект аналоговых стиков, при котором регистрируется движение без прикосновения к джойстику. Это вызвано износом внутренних потенциометров.',
    },
    {
      type: 'title',
      text: 'Совместимость контроллеров',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Совместим с Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro и практически любым современным USB или Bluetooth геймпадом.',
    },
  ],
  ui: {
    badge: 'Тест ввода',
    title: 'Тест геймпада и контроллера',
    description: 'Проверьте свой контроллер и выявите проблемы.',
    connectionMessage: 'Подключите устройство USB или Bluetooth',
    connectionStatus: 'Подключено',
    axisLabel: 'Оси',
    buttonsLabel: 'Кнопки',
    vibrationTitle: 'Тест вибрации',
    vibrationDescription: 'Требуется поддержка браузера и совместимый геймпад.',
    vibrationLow: 'Низкая (Rumble)',
    vibrationHigh: 'Высокая (Buzz)',
    eventHistoryTitle: 'История событий',
    eventHistoryClear: 'Очистить',
    eventWaiting: 'Ожидание событий...',
    gameStartBtn: 'НАЧАТЬ ИСПЫТАНИЕ',
    gameControllerWarning: 'Подключите геймпад или используйте клавиатуру',
    gameTimer: 'Таймер',
    gameScore: 'Счет',
    gameInstruction: 'Нажимай быстро',
    gameCompleted: 'Испытание завершено',
    gameNewRecord: 'НОВЫЙ РЕКОРД',
    gameRestartBtn: 'Повторить',
    gameFeedback: 'Ты легенда кнопок',
    gameIntroTitlePre: 'Рефлексы ',
    gameIntroHighlight: 'Pro Gamer',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Проверьте задержку вашего контроллера и скорость вашей реакции. У вас есть ',
    gameIntroDescSeconds: '30 секунд',
    gameIntroDescPost: ', чтобы освоить кнопки.',
    gameShareBtn: 'ПОДЕЛИТЬСЯ РАНГОМ',
    gameLogConnected: 'Подключено',
    gameLogDisconnected: 'Отключено',
    gameLogCleared: 'Лог очищен...',
    gameLogBtnPrefix: 'Кнопка',
    gameVibNotSupported: 'Вибрация не поддерживается.',
    gameVibLow: 'Низкая',
    gameVibHigh: 'Высокая',
    gameMoveStick: 'ДВИГАЙ СТИК',
    gamePress: 'НАЖМИ',
    rankLegendaryName: 'ЛЕГЕНДАРНЫЙ',
    rankLegendaryDesc: 'Твои пальцы движутся со скоростью звука.',
    rankLegendaryFlavor: 'Мой контроллер летает!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'У тебя стальные рефлексы и хорошо откалиброванный контроллер.',
    rankProFlavor: 'Мой контроллер летает!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'Неплохо, но тебе нужно больше практики для соревновательной игры.',
    rankGamerFlavor: 'Почти получилось!',
    rankNoobName: 'NOOB',
    rankNoobDesc: 'Ты уверен, что включил контроллер?',
    rankNoobFlavor: 'Контроллер против меня!',
    gameShareText: 'Сможешь побить мой рекорд?',
    gameShareScorePrefix: 'Мой результат:',
    gameShareScoreSuffix: 'нажатий',
    gameShareTitle: 'Онлайн-тест геймпада',
  },
};
