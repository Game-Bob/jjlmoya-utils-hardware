import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-test';
const title = '온라인 게임패드 및 컨트롤러 테스트';
const description = 'Xbox, PlayStation 또는 PC 컨트롤러를 테스트하세요. 데드존, 조이스틱 드리프트 및 버튼 입력을 시각화합니다.';

const faqData = [
  {
    question: '조이스틱 드리프트(Drift) 현상이란 무엇인가요?',
    answer: '드리프트는 조이스틱을 만지지 않았는데도 컨트롤러가 움직임을 감지하는 현상입니다. 내부 가변저항(potentiometer)의 마모로 인해 일정한 방향으로 잘못된 전기 신호를 보내면서 발생합니다.',
  },
  {
    question: '소프트웨어로 드리프트를 해결할 수 있나요?',
    answer: '드리프트가 미미한 경우 게임 설정에서 "데드존(Dead Zone)"을 더 크게 설정하여 해결할 수 있습니다. 이는 중앙부의 미세한 스틱 움직임을 무시하도록 합니다.',
  },
  {
    question: 'PS5, Xbox, Switch 컨트롤러와 호환되나요?',
    answer: '네. 당사의 도구는 최신 브라우저의 표준 Gamepad API를 사용하여 DualSense, DualShock 4, Xbox 컨트롤러 등 USB 또는 블루투스로 연결된 거의 모든 컨트롤러를 감지합니다.',
  },
  {
    question: '브라우저가 컨트롤러를 감지하지 못합니다.',
    answer: '보안상의 이유로 브라우저는 첫 번째 버튼 입력이 있을 때까지 게임패드를 활성화하지 않습니다. 표시되지 않는다면 아무 버튼(A 또는 X 등)이나 누르고 시크릿 모드 설정을 확인하세요.',
  },
];

const howToData = [
  {
    name: '컨트롤러 연결',
    text: '컨트롤러를 USB로 연결하거나 컴퓨터와 블루투스로 페어링하세요.',
  },
  {
    name: '감지 활성화',
    text: '브라우저가 장치를 인식할 수 있도록 조이스틱을 움직이거나 아무 버튼이나 누르세요.',
  },
  {
    name: '데드존 테스트',
    text: '조이스틱을 놓고 화면의 축 값을 확인하세요. 값이 0.0000이 아니라면 미세한 드리프트가 있는 것입니다.',
  },
  {
    name: '버튼 및 진동 확인',
    text: '모든 버튼과 트리거를 눌러보세요. 시각적 표시등이 켜져야 하며, 지원되는 컨트롤러라면 진동 모터도 테스트할 수 있습니다.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<TestMandoUI> = {
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
      text: '온라인 게임패드 테스트: 드리프트 및 스틱 불량 감지',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Xbox, PlayStation, Switch 등 모든 컨트롤러 무료 테스트. 데드존 시각화, 드리프트 감지 및 진동 테스트 기능을 제공합니다.',
    },
    {
      type: 'title',
      text: '조이스틱 드리프트란 무엇인가',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '드리프트는 아날로그 스틱을 만지지 않아도 움직임이 입력되는 흔한 결함입니다. 내부 부품의 마모가 주된 원인입니다.',
    },
    {
      type: 'title',
      text: '컨트롤러 호환성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Xbox One, Xbox Series X/S, PS4, PS5(DualSense), 닌텐도 스위치 프로콘 및 거의 모든 현대적 USB/블루투스 게임패드와 호환됩니다.',
    },
  ],
  ui: {
    badge: '입력 테스트',
    title: '게임패드 및 컨트롤러 테스트',
    description: '컨트롤러를 테스트하고 결함을 찾아보세요.',
    connectionMessage: 'USB 또는 블루투스 장치를 연결하세요',
    connectionStatus: '연결됨',
    axisLabel: '스틱 축',
    buttonsLabel: '버튼',
    vibrationTitle: '진동 테스트',
    vibrationDescription: '브라우저 지원 및 호환 가능한 게임패드가 필요합니다.',
    vibrationLow: '낮음 (Rumble)',
    vibrationHigh: '높음 (Buzz)',
    eventHistoryTitle: '이벤트 기록',
    eventHistoryClear: '지우기',
    eventWaiting: '이벤트를 기다리는 중...',
    gameStartBtn: '챌린지 시작',
    gameControllerWarning: '게임패드를 연결하거나 키보드를 사용하세요',
    gameTimer: '타이머',
    gameScore: '점수',
    gameInstruction: '빨리 누르세요',
    gameCompleted: '챌린지 완료',
    gameNewRecord: '신기록 달성!',
    gameRestartBtn: '다시 시도',
    gameFeedback: '당신은 버튼의 전설입니다',
    gameIntroTitlePre: '프로 게이머급 ',
    gameIntroHighlight: '반사신경',
    gameIntroTitlePost: '?',
    gameIntroDescPre: '컨트롤러 로딩 지연과 반응 속도를 테스트합니다. ',
    gameIntroDescSeconds: '30초',
    gameIntroDescPost: ' 동안 버튼을 마스터하세요.',
    gameShareBtn: '랭킹 공유',
    gameLogConnected: '연결됨',
    gameLogDisconnected: '연결 끊김',
    gameLogCleared: '로그 삭제됨...',
    gameLogBtnPrefix: '버튼',
    gameVibNotSupported: '진동이 지원되지 않습니다.',
    gameVibLow: '낮음',
    gameVibHigh: '높음',
    gameMoveStick: '스틱을 움직이세요',
    gamePress: '누르기',
    rankLegendaryName: '전설 (LEGENDARY)',
    rankLegendaryDesc: '당신의 손가락은 음속으로 움직입니다.',
    rankLegendaryFlavor: '컨트롤러가 날아다녀요!',
    rankProName: '프로 (PRO GAMER)',
    rankProDesc: '강철 같은 반사신경과 잘 보정된 컨트롤러를 가졌군요.',
    rankProFlavor: '컨트롤러가 날아다녀요!',
    rankGamerName: '게이머 (GAMER)',
    rankGamerDesc: '나쁘지 않네요, 하지만 경쟁전을 위해서는 더 많은 연습이 필요합니다.',
    rankGamerFlavor: '거의 다 왔어요!',
    rankNoobName: '뉴비 (NOOB)',
    rankNoobDesc: '컨트롤러 전원이 켜져 있는지 확인해 보셨나요?',
    rankNoobFlavor: '컨트롤러 상태가 안 좋았을 뿐이에요!',
    gameShareText: '저를 이길 수 있나요?',
    gameShareScorePrefix: '제 점수는',
    gameShareScoreSuffix: '점입니다',
    gameShareTitle: '온라인 게임패드 테스트',
  },
};
