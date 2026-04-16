import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';

const slug = 'gamepad-vibration-tester';
const title = '온라인 게임패드 진동 테스트';
const description =
  '브라우저에서 게임패드의 햅틱 모터와 Dual-Rumble 진동을 테스트하세요. Xbox, DualShock, DualSense 및 일반 컨트롤러를 지원합니다.';

const faqData = [
  {
    question: '온라인으로 게임패드를 테스트하려면 무엇이 필요한가요?',
    answer:
      '게임패드를 USB 케이블로 컴퓨터나 모바일 기기에 연결하거나 블루투스로 페어링하기만 하면 됩니다. 연결되면 아무 버튼이나 눌러 인식되도록 하세요.',
  },
  {
    question: '모든 게임패드 모델에서 작동하나요?',
    answer:
      '기기와 운영체제가 지원하는 경우, 유명 브랜드(PlayStation 또는 Xbox 등)의 대부분의 최신 게임패드는 호환됩니다.',
  },
  {
    question: '게임패드의 오른쪽 진동이 왼쪽보다 약한데 정상인가요?',
    answer:
      '네, 완전히 정상입니다. 게임패드는 대개 비대칭 설계로 되어 있어 한쪽은 강하고 깊은 진동을, 다른 한쪽은 빠르고 섬세한 진동을 담당합니다.',
  },
  {
    question: '이 테스트를 실행하면 배터리가 많이 소모되나요?',
    answer:
      '진동은 무선 게임패드에서 가장 에너지를 많이 소비하는 기능 중 하나입니다. 연속적으로 긴 테스트를 실행하면 배터리가 평소보다 빨리 소모됩니다.',
  },
];

const howToData = [
  {
    name: '게임패드 연결 및 전원 켜기',
    text: 'USB 케이블이나 블루투스를 통해 게임패드를 PC, Mac 또는 모바일에 연결하십시오.',
  },
  {
    name: '게임패드 버튼 누르기',
    text: '브라우저에서 게임패드를 인식하고 웹 통신을 시작하려면 최소 하나의 버튼을 눌러야 합니다.',
  },
  {
    name: '진동 모터 조정',
    text: '강한 모터(Low)와 미세 모터(High)의 세기를 각각 독립적으로 설정하십시오.',
  },
  {
    name: '패턴 실행',
    text: '사전 설정 중 하나를 누르거나 수동으로 매개변수를 설정하고 신호를 보내 각 부품의 느낌을 확인하십시오.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참조',
  bibliography: [
    {
      name: '햅틱 진동 작동 원리 — HobbyConsolas',
      url: 'https://www.hobbyconsolas.com/reportajes/como-funciona-vibracion-haptica-mando-dualsense-ps5-757673',
    },
    {
      name: 'Gamepad API — W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '게임용 패드 진동을 점검하는 방법', level: 2 },
    {
      type: 'paragraph',
      html: '햅틱 피드백은 게이밍 하드웨어에서 가장 몰입감을 주는 요소 중 하나입니다. 모터가 고장 나면 대개 비정상적인 소음이나 비대칭 진동이 첫 증상으로 나타납니다. 조기 진단은 큰 고장을 예방합니다.',
    },
    { type: 'title', text: '왜 진동 테스트를 실행해야 하나요?', level: 3 },
    {
      type: 'paragraph',
      html: '중고 게임패드를 구매했을 때, 드라이버 업데이트 후 또는 낙하 후 햅틱 모터를 테스트하면 실제 하드웨어 고장과 소프트웨어 문제를 구분하는 데 도움이 됩니다. Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro 및 일반 USB 게임패드와 호환됩니다.',
    },
    { type: 'title', text: 'Dual-Rumble 대 선형 액추에이터 구조', level: 3 },
    {
      type: 'paragraph',
      html: '클래식 게임패드(Xbox, DualShock)는 두 개의 비대칭 마이크로 모터를 사용합니다. 왼쪽은 깊고 울리는 진동을, 오른쪽은 빠르고 높은 소음의 진동을 생성합니다. DualSense와 같은 고급 기기는 질감과 저항을 시뮬레이션하는 선형 액추에이터를 사용합니다.',
    },
    { type: 'title', text: '증상 기반 진단 가이드', level: 3 },
    {
      type: 'paragraph',
      html: '각 모터를 독립적으로 100% 강도로 작동시켜 보십시오. 두 모터의 소리가 같다면 해당 패드는 모터가 하나뿐인 복제품일 가능성이 있습니다. 한쪽이 반응하지 않는다면 분해하기 전에 연결 상태를 확인하십시오. 강도 단계를 테스트해 보십시오. 품질이 좋은 모터는 On/Off 스위치처럼 작동하지 않고 점진적으로 반응합니다.',
    },
  ],
  ui: {
    badge: '진동 테스트',
    title: '게임패드 진동 테스터',
    description: '게임패드의 Dual-Rumble 모터를 직접 제어하세요.',
    deviceDisconnected: '게임패드 연결 끊김',
    deviceDisconnectedSub: '시작하려면 게임패드의 버튼을 누르세요',
    deviceFallback: '게임패드 연결됨',
    deviceConnectedSub: '연결이 안정적입니다. 테스트 준비 완료.',
    noSupportWarning: "브라우저에서 Dual-Rumble 지원이 감지되지 않았습니다. 기본 일반 진동을 사용합니다.",
    tabPresets: '추천 프리셋',
    tabCustom: '정밀 설정',
    presetHeavyTitle: '망치 타격',
    presetHeavyDesc: '강한 모터를 최대치로 300ms 동안 작동합니다. 강한 충격을 시뮬레이션합니다.',
    presetLightTitle: '벌의 윙윙거림',
    presetLightDesc: '오른쪽 모터만 작동합니다. 비정상적인 소음을 감지하는 데 적합합니다.',
    presetHeartbeatTitle: '심장 박동',
    presetHeartbeatDesc: '미세한 연속 펄스입니다. 관성 유지를 확인하는 데 완벽합니다.',
    presetSongTitle: '코인 리듬',
    presetSongDesc: '연속적인 코인 소리를 시뮬레이션합니다. 짧고 촉각적입니다.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "퀸(Queen)의 클래식을 손안에서: 쿵, 쿵, 짝!",
    presetEarthquakeTitle: '최대 지진!',
    presetEarthquakeDesc: '두 모터를 100% 폭발적인 힘으로 작동합니다. 매우 강렬합니다.',
    customStrongLabel: '강한 힘 (왼쪽)',
    customWeakLabel: '약한 힘 (오른쪽)',
    customDurationLabel: '펄스 지속 시간',
    btnSendSignal: '신호 전송',
  },
};
