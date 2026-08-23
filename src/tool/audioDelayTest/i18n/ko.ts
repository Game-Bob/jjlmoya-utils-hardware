import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'audio-delay-test';
const title = '오디오 지연 테스트';
const description = '스피커, 헤드폰, 블루투스 기기 및 비디오 재생의 인지 오디오 지연 시간을 브라우저 로컬 펄스 테스트로 확인하세요.';

const faq = [
  {
    question: '이 오디오 지연 테스트는 무엇을 측정하나요?',
    answer: '마이크 옵션 모드는 브라우저가 예약한 클릭 소리와 마이크가 수신한 오디오 사이의 시간을 추정합니다. 수동 모드는 눈과 귀로 시각적 및 음향적 동기화를 조정하도록 돕습니다. 두 모드 모두 모든 기기 체인의 절대적인 실험실 측정값은 아닙니다.',
  },
  {
    question: '마이크 없이 블루투스 지연 시간을 테스트할 수 있나요?',
    answer: '네. 펄스 시퀀스를 시작하고 블루투스를 선택한 후 섬광과 클릭 소리가 동시에 느껴질 때까지 조정 슬라이더를 이동하세요. 결과는 정밀 정밀 측정값 대신 보정치로 저장됩니다.',
  },
  {
    question: '마이크 모드에 권한이 필요한 이유는 무엇인가요?',
    answer: '스피커나 공간을 통해 전달된 테스트 클릭 음을 수신하기 위해 브라우저 마이크 접근 권한이 필요합니다. 오디오는 브라우저 내부에서만 로컬로 처리되며 외부로 업로드되지 않습니다.',
  },
  {
    question: '마이크 측정 결과가 변동될 수 있는 이유는 무엇인가요?',
    answer: '반사음, 마이크 처리, 자동 게인 제어, OS 버퍼링 및 거리 차이가 영향을 줄 수 있습니다. 현재 설정 환경에 대한 추정치로 참고하세요.',
  },
  {
    question: '어떤 테스트 모드를 선택해야 하나요?',
    answer: '공간 재생에는 스피커, 유선 직접 출력에는 유선 헤드폰, 무선 기기에는 블루투스, 화면 및 플레이어 동기화 확인에는 비디오 동기화를 선택하세요.',
  },
  {
    question: '테스트 중 마이크 오디오가 서버로 전송되나요?',
    answer: '아니요. 마이크 스트림은 브라우저 분석기에서 로컬로만 읽히며 오디오 샘플을 서버로 업로드하지 않습니다.',
  },
];

const howTo = [
  {
    name: '재생 경로 선택',
    text: '스피커, 유선 헤드폰, 블루투스 또는 비디오 동기화를 선택합니다.',
  },
  {
    name: '수동 펄스로 시작',
    text: '테스트 시작을 누르고 시각 펄스와 클릭 소리가 일치하도록 슬라이더를 조정합니다.',
  },
  {
    name: '필요 시 마이크 측정 추가',
    text: '마이크 활성화를 누르고 권한을 허용한 뒤 마이크를 청취 위치에 놓고 다시 실행합니다.',
  },
  {
    name: '결과를 추정치로 확인',
    text: '중앙값 지연 시간과 신뢰도를 설정을 위한 참고치로 활용하세요.',
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
    { type: 'title', text: '블루투스 및 비디오 싱크용 오디오 지연 테스트', level: 2 },
    {
      type: 'paragraph',
      html: '이 브라우저 기반 오디오 지연 테스트는 현재 사용하는 기기에서 시각 신호와 오디오 사이의 시차를 점검하도록 돕습니다. 블루투스 헤드폰, 무선 스피커, 유선 헤드폰 및 비디오 동기화 점검에 유용합니다. 테스트 파일 다운로드 없이 브라우저 내에서 로컬로 펄스 음을 생성합니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '마이크 권한 없이 시작 가능',
      badge: '로컬 전용 안전 처리',
      html: '<p>수동 펄스 테스트는 마이크 없이 작동합니다. 시각 표식과 클릭 소리를 관찰하고 동시에 느껴질 때까지 보정 슬라이더를 이동하세요. 절대적인 하드웨어 지연 시간을 왜곡하여 보여주지 않고 유용한 보정치를 제공합니다.</p>',
    },
    {
      type: 'title',
      text: '블루투스 오디오 레이턴시 테스트 방법',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        '시작 전 블루투스를 선택하고 편안한 듣기 볼륨으로 설정하세요.',
        '재생에 사용하는 것과 동일한 브라우저 및 기기에서 펄스를 실행하세요.',
        '긴 음악을 평가하는 대신 시각 펄스와 클릭 소리를 직접 비교하세요.',
        '두 신호가 만날 때까지 보정 슬라이더를 이동한 뒤 보정치를 확인하세요.',
        '코덱, OS, 브라우저, 거리가 변경되면 테스트를 다시 수행하세요.',
      ],
    },
    {
      type: 'table',
      headers: ['모드', '권장 용도', '주요 제한 사항'],
      rows: [
        ['스피커', '룸 재생 및 TV 스피커', '공간 거리와 반사음이 음향 경로에 영향을 줍니다.'],
        ['유선 헤드폰', '직접 헤드폰 출력', '밀폐형 헤드폰의 경우 마이크가 소리를 감지하기 어려울 수 있습니다.'],
        ['블루투스', '무선 헤드폰 및 스피커', '코덱 버퍼링은 기기와 앱에 따라 달라질 수 있습니다.'],
        ['비디오 동기화', '디스플레이 및 플레이어 동기화', '플레이어 자체적인 프레임 렌더링 지연이 추가될 수 있습니다.'],
      ],
    },
    {
      type: 'title',
      text: '마이크를 사용한 옵션 측정',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '마이크 권한이 활성화되면 도구는 로컬 마이크 분석기를 모니터링하여 오디오 이벤트부터 감지된 음향 피크까지의 경과 시간을 기록합니다. 단일 반사음으로 인한 오차를 줄이기 위해 샘플의 중앙값을 사용합니다.',
    },
    {
      type: 'tip',
      title: '실제 청취 위치에 마이크 배치',
      html: '스피커의 경우 실제 앉아서 듣는 위치에 마이크를 놓고 공간을 조용히 유지하세요. 비디오 싱크 점검 시에는 평소 이용 환경 그대로 배치합니다.',
    },
    {
      type: 'title',
      text: '브라우저 오디오 지연 결과가 변동되는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '오디오 지연은 단일 고정값이 아니라 브라우저 오디오 클록, OS 버퍼링, 코덱 인코딩, 스피커 드라이버까지의 전체 경로합입니다. 따라서 본 테스트는 현재 환경에서의 실효 추정치를 제공합니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '제조사 사양의 대체재로 사용하지 마세요',
      badge: '추정치 전용',
      html: '<p>결과는 설정 비교나 뚜렷한 싱크 문제 해결용으로 참고하세요. 제조사 공식 사양이나 전문 캘리브레이션 시스템을 대체하지 않습니다.</p>',
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
    stopTest: '테스트 정지',
    enableMic: '마이크 활성화',
    micEnabled: '마이크 준비 완료',
    calibrationTitle: '동기화 보정',
    calibrationHint: '섬광과 클릭 소리가 일치할 때까지 슬라이더 이동',
    calibrationEarly: '오디오가 빠름',
    calibrationLate: '시각 신호가 빠름',
    calibrationCenter: '동기화됨',
    visualLane: '시각',
    audioLane: '오디오',
    statusReady: '준비됨',
    statusRunning: '펄스 시퀀스 실행 중',
    statusWaiting: '펄스 대기 중',
    resultTitle: '현재 측정 결과',
    latencyLabel: '측정된 지연 시간',
    alignmentLabel: '동기화 보정치',
    confidenceLabel: '신뢰도',
    samplesLabel: '샘플 수',
    notMeasured: '측정 안 됨',
    manualConfidence: '수동 보정 전용',
    lowConfidence: '낮은 신뢰도',
    mediumConfidence: '중간 신뢰도',
    highConfidence: '높은 신뢰도',
    noMic: '이 브라우저에서는 마이크 입력을 사용할 수 없습니다',
    permissionDenied: '마이크 접근 권한이 거부되었습니다',
    limitationTitle: '결과는 설정 추정치로 참고하세요',
    limitationText: '반사음, 마이크 처리, 버퍼링에 의해 측정치가 달라질 수 있습니다. 오디오 전송은 없습니다.',
    copyReport: '보고서 복사',
    copied: '복사됨',
    reset: '초기화',
    safety: '낮은 볼륨에서 시작하세요. 음 왜곡 발생 시 테스트를 정지하세요.',
    pulse: '동기화',
  },
};
