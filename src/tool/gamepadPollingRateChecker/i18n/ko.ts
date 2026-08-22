import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-polling-rate-checker';
const title = '게임패드 폴링레이트 & Hz 측정기';
const description = 'USB 및 블루투스 게임패드의 브라우저 감지 업데이트 주율, 보고 간격, 밀리초 단위의 타이밍 안정성을 측정합니다.';

const faq = [
  {
    question: '이 게임패드 폴링레이트 측정기는 무엇을 측정하나요?',
    answer: '아날로그 스틱을 조작하는 동안 브라우저 Gamepad API가 수신하는 타임스탬프의 변경 빈도를 측정합니다. 표시되는 Hz 수치는 브라우저에서 관찰된 업데이트 주율이며, USB 신호의 직접적인 전기적 측정이 아닙니다.',
  },
  {
    question: '브라우저로 컨트롤러의 1000Hz 오버클럭을 증명할 수 있나요?',
    answer: '타임스탬프 업데이트가 페이지에 고주파수로 안정되게 도착하는지 확인할 수는 있지만, 1000Hz USB 하드웨어 오버클럭을 보증할 수는 없습니다. 브라우저 타이머와 OS 스케줄링이 보고서를 묶어서 처리할 수 있습니다.',
  },
  {
    question: '왜 아날로그 스틱을 원형으로 계속 돌려야 하나요?',
    answer: '연속적인 원운동을 해야 양쪽 축의 값이 계속 변경되어 새로운 입력 상태 데이터가 안정적으로 발생합니다. 스틱을 멈춰 두면 상태 변화가 거의 없어 정확한 측정이 어렵습니다.',
  },
  {
    question: 'USB 연결과 블루투스 연결 성능을 비교할 수 있나요?',
    answer: '네, 동일한 브라우저, 측정 시간, 원운동 조건에서 각각 테스트하여 관측 주율, 평균 간격, 지터(변동폭)를 상대 비교할 수 있습니다.',
  },
];

const howTo = [
  {
    name: '컨트롤러 연결 및 활성화',
    text: 'USB 케이블이나 블루투스로 게임패드를 연결한 후 임의의 버튼을 눌러 브라우저 Gamepad API에 인식시킵니다.',
  },
  {
    name: '장치 및 측정 시간 선택',
    text: '목록에서 대상 컨트롤러를 선택하고 첫 측정을 위해 10초를 설정합니다.',
  },
  {
    name: '아날로그 스틱을 원형으로 돌리기',
    text: '측정을 시작하고 진행률 링이 찰 때까지 왼쪽 스틱을 원형으로 원활하게 돌립니다.',
  },
  {
    name: '관측 주율 및 안정성 확인',
    text: '평균 Hz, 밀리초 간격, 지터, 측정 신뢰도를 확인하고 동일 조건에서 재측정합니다.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: '게임패드 폴링레이트 자주 묻는 질문',
  faq,
  bibliographyTitle: '기술 참고 자료',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: '브라우저 감지 게임패드 업데이트 주율 측정',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '본 도구는 스틱 조작 중 Gamepad API의 고해상도 타임스탬프를 실시간으로 추적합니다. 극단적 이상치를 제거하고 평균 보고 간격을 계산한 뒤 "1000 ÷ 밀리초" 수식으로 관측 Hz를 산출합니다. 모든 연산은 브라우저 내부에서 진행됩니다.',
    },
    {
      type: 'table',
      headers: ['측정 항목', '수치가 의미하는 바', '증명할 수 없는 사항'],
      rows: [
        ['관측 주율 (Hz)', '페이지가 1초 동안 수신한 입력 보고서 빈도', 'USB 포트의 직접적 전기적 폴링레이트'],
        ['평균 간격 (ms)', '타임스탬프가 변경되는 데 걸린 평균 시간', '버튼 입력부터 화면 출력까지의 전체 지연시간'],
        ['지터 (변동폭)', '5백분위수와 95백분위수 간의 시간 격차', '하드웨어의 결정적 고장 여부'],
        ['신뢰도', '측정 시간 동안 수집된 샘플 수와 규칙성', '산업용 정밀 측정 장비 수준의 절대 오차'],
      ],
    },
    {
      type: 'title',
      text: '재현성 높은 Hz 테스트 실행 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '무거운 백그라운드 프로그램을 종료하고 탭을 활성화한 상태에서 항상 일정한 속도로 스틱을 크게 돌려주세요. 케이블, 블루투스 동글, OS 설정을 비교할 때는 동일 브라우저와 동일 측정 시간을 유지해야 합니다.',
    },
    {
      type: 'tip',
      title: '항상 동일한 조건에서 비교하세요',
      html: '연결 방식을 변경한 후에는 최소 2회 이상 테스트하세요. 순간적인 최고 수치보다 지터가 적은 안정적인 수치가 중요합니다.',
    },
    {
      type: 'title',
      text: '이 테스트가 전체 입력 지연(Input Lag)이 아닌 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gamepad API는 OS와 브라우저 처리를 거친 후의 데이터를 읽습니다. 케이블 전송 시간이나 디스플레이 잔상/전기적 지연은 포함하지 않습니다. 웹 기반의 상대 성능 비교에는 유용하지만 전체 입력 지연시간 자체는 아닙니다.',
    },
  ],
  ui: {
    privacyNote: '100% 로컬 신호 처리',
    stepConnect: '연결 후 버튼 누르기',
    stepMove: '스틱을 원형으로 돌리기',
    stepRead: '주율 및 안정성 비교',
    deviceLabel: '감지된 활성 게임패드',
    devicePlaceholder: '컨트롤러 버튼을 눌러 감지하세요',
    deviceFallback: '연결된 게임패드',
    durationLabel: '측정 시간',
    durationFive: '5초',
    durationTen: '10초',
    durationTwenty: '20초',
    startAction: '측정 시작',
    stopAction: '정지',
    resetAction: '초기화',
    orbitInstruction: '측정 동안 왼쪽 스틱을 원형으로 원활하게 돌리세요',
    traceLabel: '실시간 타임스탬프 궤적',
    observedRateLabel: '관측 주율',
    intervalLabel: '평균 보고 간격',
    jitterLabel: '변동폭 (Jitter)',
    samplesLabel: '유효 샘플 수',
    confidenceLabel: '측정 신뢰도',
    confidenceLow: '낮음',
    confidenceMedium: '보통',
    confidenceHigh: '높음',
    statusWaiting: '호환되는 컨트롤러 연결 대기 중',
    statusReady: '준비 완료. 스틱에 손을 올리고 시작을 누르세요.',
    statusMeasuring: '타임스탬프 로컬 기록 중',
    statusNeedsMovement: '더 많은 상태 변화를 위해 스틱을 더 크게 돌려주세요',
    statusComplete: '측정 완료. 동일 조건에서 재테스트하여 비교하세요.',
    statusUnsupported: '이 브라우저는 Gamepad API를 지원하지 않습니다',
    statusDisconnected: '활성 컨트롤러가 없습니다. 연결 후 버튼을 누르세요.',
    statusStopped: '측정 정지. 부분 결과가 유지됩니다.',
    limitHeading: '브라우저 측정상의 기술적 한계',
    limitBody: 'Gamepad API로 확인 가능한 업데이트를 측정합니다. USB 오버클럭이나 전체 입력 지연시간을 증명하지는 않습니다.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: '회',
    progressLabel: '측정 진행률',
  },
};
