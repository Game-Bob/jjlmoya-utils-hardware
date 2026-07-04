import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobile-sensor-test';
const title = '모바일 센서 테스트';
const description = '자이로스코프, 가속도계, 모션 센서, 수평계 온라인 테스트를 휴대폰에서 실행하여 기울기, 회전, 드리프트 및 센서 보정 문제를 확인하세요.';

const faqData = [
  {
    question: '휴대폰 자이로스코프를 온라인으로 테스트하려면 어떻게 하나요?',
    answer: '휴대폰에서 테스트를 열고 보정 시작을 탭한 다음, 메시지가 표시되면 모션 접근을 허용하고 기기를 회전하고 기울이세요. 정상 작동하는 자이로스코프와 방향 센서는 alpha, beta, gamma를 멈춤이나 급격한 점프 없이 부드럽게 업데이트해야 합니다.',
  },
  {
    question: '수평계로 가속도계를 테스트할 수 있나요?',
    answer: '네. 테스트를 시작한 후 휴대폰을 평평한 탁자 위에 놓으세요. 버블이 중앙 근처에 안착하고 가속도 값이 안정적으로 유지되어야 합니다. 휴대폰이 가만히 있는데도 버블이 심하게 흔들리면 가속도계 보정이 필요하거나 케이스, 탁자 또는 기기 하드웨어가 간섭하는 것일 수 있습니다.',
  },
  {
    question: 'iPhone이 모션 권한을 요청하는 이유는 무엇인가요?',
    answer: 'iPhone 및 iPad의 Safari는 웹사이트가 모션 및 방향 센서에 접근하기 전에 탭을 요구합니다. 권한이 거부되면 모션 접근을 허용할 때까지 테스트에서 자이로스코프나 가속도계 데이터를 읽을 수 없습니다.',
  },
  {
    question: '고장난 나침반을 수리하거나 보정할 수 있나요?',
    answer: '어떤 브라우저 도구도 하드웨어를 수리하거나 시스템 나침반 보정을 강제할 수 없습니다. 이 테스트는 증상 식별에 도움이 됩니다: 정지된 판독값, 노이즈가 많은 움직임, 드리프트, 권한 부족, 센서를 노출하지 않는 브라우저.',
  },
];

const howToData = [
  { name: '휴대폰에서 테스트 열기', text: '진단하려는 동일한 iPhone, iPad, Android 휴대폰 또는 태블릿을 사용하세요. 데스크톱 브라우저에는 일반적으로 모션 센서가 노출되지 않습니다.' },
  { name: '모션 접근 허용', text: '보정 시작을 탭하고 브라우저가 표시하는 모션 또는 방향 권한 프롬프트를 수락하세요.' },
  { name: '기울기와 회전 테스트', text: '휴대폰을 앞으로 기울이고, 좌우로 굴린 다음, 탁자 위에서 평평하게 회전시키세요. alpha, beta, gamma 및 가속도의 부드러운 변화를 관찰하세요.' },
  { name: '평평한 표면에서 드리프트 확인', text: '휴대폰을 몇 초 동안 가만히 두세요. 정상적인 센서는 계속 움직이거나, 스파이크가 발생하거나, 멈추는 대신 안정되어야 합니다.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '휴대폰용 온라인 자이로스코프 및 가속도계 테스트', level: 2 },
    {
      type: 'paragraph',
      html: '화면 회전이 이상하게 느껴지거나, 게임이나 AR 앱이 드리프트하거나, 수평계 앱이 부정확해 보이거나, 내비게이션이 잘못된 방향을 가리키거나, 휴대폰이 기울기에 올바르게 반응하지 않을 때 이 모바일 센서 테스트를 사용하세요. 테스트는 자이로스코프, 가속도계, 회전, 수평계 동작을 실시간으로 표시하여 브라우저 권한 문제와 실제 센서 또는 보정 문제를 구별할 수 있게 해줍니다.',
    },
    {
      type: 'stats',
      items: [
        { label: '주요 검색 의도', value: '자이로스코프 온라인 테스트' },
        { label: '함께 확인', value: '가속도계 드리프트' },
        { label: '최적 기기', value: '휴대폰 또는 태블릿' },
      ],
    },
    { type: 'title', text: '각 센서 판독값이 알려주는 것', level: 3 },
    {
      type: 'table',
      headers: ['판독값', '유용한 용도', '경고 신호'],
      rows: [
        ['Alpha', '수직 축 주변 회전 확인, 나침반 같은 움직임과 방향 변경에 유용.', '휴대폰을 평평하게 회전시켜도 변하지 않거나, 큰 폭으로 점프하거나, 0에서 멈춤.'],
        ['Beta', '앞뒤 기울기 확인. 화면 회전, 게임, 카메라 수평 맞추기, AR 제어에 유용.', '잘못된 방향으로 움직이거나, 한 값에 고정되거나, 휴대폰이 가만히 있는데도 계속 드리프트함.'],
        ['Gamma', '좌우 롤 확인. 가로 회전, 레이싱 게임, 수평계 앱, 안정화기에 유용.', '한쪽이 다르게 반응하거나, 값에 노이즈가 많거나, 평평한 탁자에서 버블이 중앙으로 돌아오지 않음.'],
        ['가속도 X/Y/Z', '가속도계 응답, 흔들림 감지, 중력 방향, 움직임 안정성 확인.', '정지 상태에서 큰 스파이크 발생, 움직임에 반응 없음, 케이스 제거 후 판독값 불안정.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '이 테스트가 진단에 도움이 되는 증상',
      html: '<p>실시간 값을 사용하여 자동 회전이 작동하지 않음, 자이로스코프가 지연되는 느낌, 가속도계 드리프트, 나침반 보정 경고, AR 추적이 미끄러짐, 카메라 수평 오류, 한쪽으로 쏠리는 모션 컨트롤, 네이티브 앱에서만 움직임을 보고하고 브라우저에서는 보고하지 않는 휴대폰을 조사하세요.</p>',
    },
    { type: 'title', text: '자이로스코프 vs 가속도계 vs 나침반', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: '자이로스코프', description: '회전 속도를 측정합니다. AR, 게임, 카메라 안정화, 모션 컨트롤, 부드러운 방향 전환에 중요합니다.' },
        { title: '가속도계', description: '가속도와 중력 방향을 측정합니다. 기울기, 흔들림 감지, 걸음 감지, 디지털 수평계 동작을 지원합니다.' },
        { title: '나침반 / 자력계', description: '방향 추정에 도움이 되지만 자석, 금속 물체, 차량 거치대, 케이스, 스피커, 노트북, 주변 전자기기에 의해 방해받을 수 있습니다.' },
      ],
    },
    { type: 'title', text: '센서 보정을 올바르게 테스트하는 방법', level: 3 },
    {
      type: 'list',
      items: [
        '테스트 전에 자석 케이스, MagSafe 지갑, 금속 거치대, 컨트롤러 클립, 액세서리를 제거하세요.',
        '휴대폰을 단단하고 평평한 탁자 위에 놓고 드리프트를 판단하기 전에 몇 초간 기다리세요.',
        '즉시 흔들지 말고 각 축을 따라 휴대폰을 천천히 회전시키세요.',
        '브라우저가 데이터를 표시하지 않으면 Safari 또는 Chrome을 네이티브 센서 또는 나침반 앱과 비교하세요.',
        '여러 앱에서 판독값이 멈춘 경우 기기를 다시 시작하고 테스트를 반복하세요.',
      ],
    },
    {
      type: 'tip',
      title: 'iPhone 및 Android 권한 참고 사항',
      html: 'iPhone 및 iPad에서 Safari는 탭 후 모션 및 방향 권한을 요청할 수 있습니다. Android에서 Chrome은 일반적으로 모션 센서를 더 직접적으로 노출하지만, 개인정보 보호 설정, 브라우저 플래그, 배터리 절약 모드, 임베디드 WebView가 여전히 센서 데이터를 차단하거나 줄일 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['문제', '가능한 원인', '다음 단계'],
      rows: [
        ['값이 전혀 변하지 않음', '권한 거부, 지원되지 않는 브라우저, 데스크톱 기기, 제한된 WebView.', '휴대폰 자체에서 열고 Safari 또는 Chrome을 사용하며, 모션 접근을 허용하고 페이지를 새로고침하세요.'],
        ['탁자 위에서 버블이 드리프트함', '보정 문제, 고르지 않은 표면, 케이스 간섭, 가속도계 노이즈.', '케이스를 제거하고, 알려진 평평한 표면을 사용하며, 다시 시작하고 네이티브 수평계 앱과 비교하세요.'],
        ['나침반 방향이 잘못됨', '자기 간섭 또는 시스템 나침반 보정.', '금속/전자기기에서 멀리 이동하고 운영 체제의 나침반 보정 흐름을 사용하세요.'],
        ['값이 점프하거나 스파이크 발생', '센서 노이즈, 손상된 하드웨어, 공격적인 브라우저 제한, 갑작스러운 물리적 움직임.', '정지 상태에서 테스트하고, 무거운 앱을 닫고, 다른 브라우저나 네이티브 앱과 비교하세요.'],
      ],
    },
    {
      type: 'summary',
      title: '이 테스트의 유용한 용도',
      items: [
        '앱 설치 없이 휴대폰 자이로스코프를 온라인으로 테스트.',
        '실시간 수평계로 가속도계 드리프트 확인.',
        '모션 컨트롤 실패가 하드웨어, 보정, 권한, 브라우저 지원 중 무엇 때문인지 파악.',
        'AR, 게임, 카메라 수평 맞추기, 내비게이션, 화면 회전 문제 해결을 위해 휴대폰 준비.',
      ],
    },
  ],
  ui: {
    startButton: '보정 시작',
    permissionHint: '한 번 탭하여 모션 센서 잠금 해제',
    privacyBadge: '로컬 센서 데이터',
    privacyCopy: '방향 및 움직임 판독값은 이 브라우저 세션 내에 유지됩니다.',
    orientationPanel: '방향',
    motionPanel: '모션',
    bubblePanel: '디지털 수평계',
    statusReady: '센서 권한 준비 완료',
    statusWaiting: '브라우저 권한 대기 중',
    statusDenied: '센서 접근이 거부되었거나 사용할 수 없음',
    statusUnsupported: '이 브라우저는 모션 센서를 노출하지 않음',
    statusActive: '실시간 센서 스트림 활성',
    steadyLabel: '안정적',
    movingLabel: '움직이는 중',
    shakingLabel: '흔들리는 중',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: '레벨 오프셋',
    motionMagnitudeLabel: '모션 크기',
    cubeLabel: '3D 기기 방향 큐브',
    bubbleLabel: '수평계 표시기',
    calibrationLabel: '실시간 각도',
  },
};
