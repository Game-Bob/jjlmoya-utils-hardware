import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'private-webcam-camera-test-online';
const title = '비공개 웹캠 테스트';
const description = '화상 회의나 방송 전에 카메라 권한, 라이브 비디오, 해상도, 화면 비율, 방향 및 프레임 전달 상태를 확인하세요.';

const faq = [
  {
    question: '이 웹캠 테스트는 비디오를 녹화하거나 업로드하나요?',
    answer: '아니요. 이 페이지는 로컬 미리보기를 위한 라이브 비디오 트랙만 요청하며 마이크 오디오는 요청하지 않습니다. 녹화나 캡처를 수행하거나 서버로 데이터를 전송하지 않습니다.',
  },
  {
    question: '브라우저가 카메라 권한을 요청하는 이유는 무엇인가요?',
    answer: '웹사이트는 브라우저 권한 없이 카메라를 열 수 없습니다. 권한 요청을 통해 이 페이지가 임시 로컬 비디오 스트림을 수신하도록 허용할 수 있습니다.',
  },
  {
    question: '설정 FPS와 측정 FPS의 차이는 무엇인가요?',
    answer: '설정 FPS는 미리보기에 요청된 목표치입니다. 측정 FPS는 탭이 활성화되어 있는 동안 실제 수신되는 프레임 수를 추정한 값입니다.',
  },
  {
    question: '사용 가능한 해상도가 카메라 사양과 다른 이유는 무엇인가요?',
    answer: '운영체제, 카메라 드라이버 및 브라우저가 호환 가능한 모드를 함께 선택합니다. 다른 앱 사용이나 전력 제한으로 인해 해상도가 낮아질 수 있습니다.',
  },
];

const howTo = [
  {
    name: '비공개 미리보기 열기',
    text: '카메라 열기를 선택하고 브라우저 팝업에서 비디오 접근을 허용합니다. 오디오는 요청되지 않습니다.',
  },
  {
    name: '구도 및 화질 점검',
    text: '라이브 미리보기에서 초점, 조명, 배경 및 시선 위치를 확인합니다. 필요한 경우 미러 모드나 구도 가이드를 켭니다.',
  },
  {
    name: '비디오 스트림 검증',
    text: '해상도, 화면 비율, 방향, 설정 FPS 및 수신 프레임 상태를 확인합니다.',
  },
  {
    name: '카메라 변경 또는 정지',
    text: '비교를 위해 다른 카메라를 선택하거나 카메라 정지를 눌러 모든 비디오 트랙을 닫습니다.',
  },
];

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

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: '웹캠 테스트 자주 묻는 질문',
  faq,
  bibliographyTitle: '카메라 설정 및 문제 해결 출처',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: '화상 회의 전 웹캠 미리 테스트',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '미팅 전에 로컬 미리보기를 사용하여 카메라가 올바르게 작동하는지, 원하는 기기가 선택되었는지, 얼굴 조명이 화사한지, 화면이 부드럽게 움직이는지 미리 확인하세요.',
    },
    {
      type: 'list',
      items: [
        '여러 카메라가 연결되어 있다면 올바른 기기 선택하기',
        '카메라를 눈높이에 맞추고 얼굴을 화면 상단 1/3 영역에 배치하기',
        '밝은 창문을 등지지 말고 정면 조명을 활용하기',
        '카메라가 이미 사용 중이라면 다른 미팅 앱 종료하기',
        '해상도와 프레임 수신 상태를 화면에서 직접 확인하기',
      ],
    },
    {
      type: 'title',
      text: '화면이 검게 나오거나 카메라를 사용할 수 없을 때 해결 방법',
      level: 3,
    },
    {
      type: 'table',
      headers: ['증상', '원인', '권장 조치'],
      rows: [
        ['권한 거부됨', '브라우저나 시스템 개인정보 설정에서 접근이 차단됨', '브라우저 설정에서 카메라 접근을 허용한 후 페이지를 새로고침하세요'],
        ['검은 화면 또는 사용 중', '다른 화상 회의 앱이 카메라를 사용 중임', 'Zoom, Teams, Meet 등 실행 중인 미팅 앱을 닫고 다시 시도하세요'],
        ['잘못된 영상', '가상 카메라나 서브 기기가 선택됨', '카메라 소스 선택 메뉴에서 다른 입력 기기를 선택하세요'],
        ['어둡거나 노이즈가 많음', '정면 조명이 부족하거나 역광이 심함', '정면에 스탠드를 켜거나 창문 쪽을 바라보고 앉으세요'],
        ['끊기는 비디오', '조명 부족 또는 시스템 리소스 부족', '조명을 추가하고 사용하지 않는 프로그램을 종료하세요'],
      ],
    },
    {
      type: 'title',
      text: '해상도 및 프레임 레이트 이해하기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '일반적인 화상 미팅에는 1280 × 720 해상도로 충분합니다. 1920 × 1080 은 더 선명하지만 안정적인 네트워크가 필요합니다. 설정 FPS는 요청한 목표값이며, 측정 FPS는 탭 활성화 시 실제 수신되는 성능을 의미합니다.',
    },
    {
      type: 'tip',
      title: '실제 회의 환경과 동일하게 테스트',
      html: '실제 미팅을 진행할 시간대와 동일한 조명 조건에서 테스트하세요. 미팅 앱에 따라 화면 화질 조정이 발생하므로 미팅 앱 자체 미리보기도 함께 확인하는 것이 좋습니다.',
    },
    {
      type: 'title',
      text: '최적의 구도 및 위치 배치',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '카메라 위치를 눈높이 정도로 높이고 머리 위쪽에 약간의 여백을 두세요. 정면 조명을 유지하고 배경을 깔끔하게 정리하세요. 안경을 쓰신 경우 빛 반사를 피하기 위해 조명을 약간 측면으로 이동시키는 것이 좋습니다.',
    },
  ],
  ui: {
    privacyNote: '녹화 없음 · 업로드 없음 · 오디오 없음',
    permissionHeading: '카메라를 테스트할 준비가 되셨나요?',
    permissionBody: '비공개 라이브 미리보기를 열어 이 탭에서 제공되는 화질 및 비디오 모드를 확인하세요. 카메라 정지를 누르면 즉시 닫힙니다.',
    startAction: '카메라 열기',
    stopAction: '카메라 정지',
    retryAction: '다시 시도',
    deviceLabel: '카메라 소스',
    devicePlaceholder: '카메라 선택',
    defaultDevice: '카메라',
    mirrorAction: '미러 모드',
    guideAction: '구도 가이드',
    stageLabel: '비공개 웹캠 미리보기 영역',
    resolutionLabel: '해상도',
    aspectLabel: '화면 비율',
    orientationLabel: '방향',
    configuredFpsLabel: '설정 FPS',
    observedFpsLabel: '측정 FPS',
    frameDeliveryLabel: '프레임 전달',
    landscapeValue: '가로 모드',
    portraitValue: '세로 모드',
    squareValue: '정사각형',
    frameStable: '목표치에 근접',
    frameReduced: '목표치 하회',
    frameConstrained: '크게 저하됨',
    framePending: '프레임 대기 중',
    statusIdle: '카메라가 닫혀 있습니다. 미리보기를 확인할 준비가 되면 열어주세요.',
    statusStarting: '권한 승인 및 첫 비디오 프레임 대기 중',
    statusReady: '라이브 미리보기 활성화됨. 초점, 조명, 구도, 부드러움을 확인하세요.',
    statusStopped: '카메라 정지됨. 이 테스트의 모든 비디오 트랙이 닫혔습니다.',
    statusHidden: '정확한 FPS 측정을 위해 이 탭을 활성화 상태로 유지하세요.',
    statusUnsupported: '이 브라우저는 카메라 접근을 지원하지 않습니다.',
    errorPermissionDenied: '카메라 권한이 거부되었습니다. 브라우저 설정에서 허용 후 다시 시도하세요.',
    errorNoCamera: '사용 가능한 카메라를 찾을 수 없습니다. 기기를 연결 후 다시 시도하세요.',
    errorInUse: '카메라를 시작할 수 없습니다. 사용 중인 다른 앱을 닫고 다시 시도하세요.',
    errorSecureContext: '카메라 접근은 HTTPS 또는 localhost 환경이 필요합니다.',
    errorGeneric: '카메라를 열 수 없습니다. 권한 및 기기 연결 상태를 확인하세요.',
    limitHeading: '이 테스트가 확인해 주는 항목',
    limitBody: '현재 탭에서 제공되는 화면 화질 및 부드러움을 확인합니다. 렌즈 자체의 성능이나 미팅 앱의 보정 기술을 평가하지는 않습니다.',
    localOnlyLabel: '비공개 카메라 점검',
    emptyValue: '사용 불가',
    fpsUnit: 'FPS',
  },
};
