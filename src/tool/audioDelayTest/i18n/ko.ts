import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'audio-delay-test';
const title = '오디오 지연 테스트';
const description = '스피커, 헤드폰, 블루투스 기기 및 비디오 재생의 인지 지연 시간을 브라우저 펄스 테스트로 측정하고 조정합니다.';

const faq = [
  {
    question: '이 오디오 지연 테스트는 무엇을 측정하나요?',
    answer: '마이크 모드는 브라우저가 출력한 클릭음과 마이크로 수신된 클릭음 사이의 시간을 추정합니다. 수동 모드는 귀로 맞추는 기능을 제공합니다.',
  },
  {
    question: '마이크 없이 블루투스 지연을 테스트할 수 있나요?',
    answer: '네. 펄스를 시작하고 블루투스를 선택한 후 섬광과 클릭음이 일치할 때까지 슬라이더를 조절하면 보정값이 저장됩니다.',
  },
  {
    question: '마이크 모드에 권한이 필요한 이유는 무엇인가요?',
    answer: '스피커에서 출력된 소리를 듣고 지연을 계산하기 위해 마이크 접근 권한이 필요합니다. 오디오는 브라우저 내부에서만 처리됩니다.',
  },
  {
    question: '마이크 측정 결과가 변하는 이유는 무엇인가요?',
    answer: '방의 반사음, 마이크 처리, 자동 가인 제어 및 운영체제 버퍼링에 의해 측정값이 달라질 수 있습니다.',
  },
  {
    question: '어떤 테스트 모드를 선택해야 하나요?',
    answer: '방 음향은 스피커, 유선 연결은 유선 헤드폰, 무선 기기는 블루투스, 영상 확인은 비디오 동기화를 선택하세요.',
  },
  {
    question: '마이크 음성이 서버로 전송되나요?',
    answer: '아닙니다. 음성 데이터는 브라우저 메모리에서만 분석되며 전송되지 않습니다.',
  },
];

const howTo = [
  {
    name: '재생 경로 선택',
    text: '스피커, 유선 헤드폰, 블루투스, 비디오 동기화 중 하나를 선택합니다.',
  },
  {
    name: '수동 펄스로 측정 시작',
    text: '테스트 시작을 누르고 시각적 펄스와 클릭음이 맞춰지도록 슬라이더를 조절합니다.',
  },
  {
    name: '필요 시 마이크 측정 활성화',
    text: '마이크 활성화를 누르고 권한을 허용한 뒤 청취 위치에 마이크를 놓습니다.',
  },
  {
    name: '결과 확인',
    text: '중앙값과 신뢰도를 참고하여 설정을 비교하세요.',
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

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '블루투스 및 비디오 동기화를 위한 오디오 지연 테스트', level: 2 },
    {
      type: 'paragraph',
      html: '브라우저 기반 오디오 지연 테스트를 통해 화면과 소리의 시차를 손쉽게 측정하고 보정할 수 있습니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '마이크 없이 시작 가능',
      badge: '로컬 처리',
      html: '<p>수동 펄스 테스트는 마이크 권한 없이도 동작합니다. 시각 마커와 클릭음에 맞춰 슬라이더를 조절하세요.</p>',
    },
    {
      type: 'title',
      text: '블루투스 오디오 지연 측정 방법',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        '블루투스를 선택하고 적절한 볼륨을 설정합니다.',
        '사용 중인 브라우저에서 펄스 테스트를 실행합니다.',
        '화면의 반짝임과 클릭음의 타이밍을 비교합니다.',
        '두 신호가 맞물릴 때까지 슬라이더를 이동합니다.',
        '코덱이나 재생 기기를 변경한 경우 다시 측정합니다.',
      ],
    },
    {
      type: 'table',
      headers: ['모드', '추천 용도', '주요 제한 사항'],
      rows: [
        ['스피커', '방 안 스피커 및 TV', '공간 거리와 반사음이 측정에 영향을 줍니다.'],
        ['유선 헤드폰', '직접 헤드폰 출력', '밀폐형 헤드폰은 마이크 수신이 어려울 수 있습니다.'],
        ['블루투스', '무선 헤드폰 및 스피커', '코덱 버퍼링은 기기에 따라 변동됩니다.'],
        ['비디오 동기화', '디스플레이와 플레이어 동기화', '플레이어 자체 지연이 추가될 수 있습니다.'],
      ],
    },
    {
      type: 'title',
      text: '마이크 측정 기능',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '마이크를 활성화하면 출력음부터 피크 감지까지의 시간을 추정하고 중앙값을 제공합니다.',
    },
    {
      type: 'tip',
      title: '실제 청취 위치에 마이크 배치',
      html: '스피커 측정 시 주로 앉는 위치에 마이크를 놓고 조용한 환경에서 진행하세요.',
    },
    {
      type: 'title',
      text: '오디오 지연 측정값이 변하는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '오디오 지연은 브라우저 시계, OS 버퍼, 코덱 및 스피커 특성이 복합적으로 작용한 결과입니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '측정 결과 해석',
      badge: '추정치',
      html: '<p>결과는 설정 비교용 참고치로 활용하세요. 전문 장비의 측정을 대체하지 않습니다.</p>',
    },
  ],
  ui: {
    badge: '레이턴시 관측소',
    modeLabel: '재생 경로',
    modeSpeakers: '스피커',
    modeWired: '유선',
    modeBluetooth: '블루투스',
    modeVideo: '비디오 동기화',
    startTest: '테스트 시작',
    stopTest: '테스트 중지',
    enableMic: '마이크 활성화',
    micEnabled: '마이크 준비 완료',
    calibrationTitle: '정렬 보정',
    calibrationHint: '화면 반짝임과 클릭음이 일치할 때까지 슬라이더를 이동하세요',
    calibrationEarly: '오디오가 빠름',
    calibrationLate: '시각 신호가 빠름',
    calibrationCenter: '정렬됨',
    visualLane: '시각 신호',
    audioLane: '오디오',
    statusReady: '준비 완료',
    statusRunning: '펄스 테스트 실행 중',
    statusWaiting: '펄스 대기 중',
    resultTitle: '현재 측정값',
    latencyLabel: '측정된 지연',
    alignmentLabel: '보정치',
    confidenceLabel: '신뢰도',
    samplesLabel: '샘플 수',
    notMeasured: '측정되지 않음',
    manualConfidence: '수동 전용',
    lowConfidence: '신뢰도 낮음',
    mediumConfidence: '신뢰도 보통',
    highConfidence: '신뢰도 높음',
    noMic: '이 브라우저에서는 마이크를 사용할 수 없습니다',
    permissionDenied: '마이크 권한이 허용되지 않았습니다',
    limitationTitle: '결과를 설정 추정치로 참고하세요',
    limitationText: '공간 반사음과 버퍼링으로 인해 측정값이 변할 수 있습니다. 오디오는 업로드되지 않습니다.',
    copyReport: '보고서 복사',
    copied: '복사됨',
    reset: '재설정',
    safety: '낮은 볼륨으로 시작하세요. 왜곡이 발생하면 중지하세요.',
    pulse: '동기화',
  },
};
