import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-input-lag';



const title = '인풋렉 및 시스템 지연 시간 측정 테스트';
const description = '정밀 타이머와 프레임 동기화를 이용한 온라인 인풋렉 및 모니터 지연 시간 측정 도구.';

const faqData = [
  {
    question: '인풋렉이란 무엇인가요?',
    answer: '사용자의 물리적 입력(마우스 클릭, 키보드 눌림)부터 화면에 시각적으로 반영되기까지의 시간 지연입니다.',
  },
  { question: '게임에서 좋은 지연 시간은 얼마인가요?', answer: '10 ms 미만은 매우 빠릅니다. 10에서 20 ms는 빠르고 20에서 35 ms는 보통이며 그 이상은 느껴질 수 있습니다.' },
  { question: '입력 지연을 줄이려면 어떻게 하나요?', answer: '화면 주사율, VSync, VRR과 USB 폴링을 확인하고 한 번에 한 설정만 바꾼 뒤 다시 측정하세요.' },
  { question: '주사율이 입력 지연에 영향을 주나요?', answer: '그렇습니다. 60 Hz는 프레임당 16.67 ms, 240 Hz는 4.17 ms가 걸립니다. 렌더링과 패널 지연도 더해집니다.' },
  { question: 'Jitter를 확인해야 하는 이유는 무엇인가요?', answer: '측정값의 변동을 보여 주기 때문입니다. 평균이 조금 높아도 안정적인 구성이 더 자연스럽게 느껴질 수 있습니다.' },
];

const howToData = [
  {
    name: '모드 선택',
    text: '즉각 반응, 키보드 지연 시간, 시각 반응 모드 중 선택합니다.',
  },
  { name: '입력 실행', text: '테스트 영역을 클릭하거나 키를 눌러 입력 이벤트를 발생시키세요.' },
  { name: '통계 확인', text: '여러 번 입력한 뒤 평균, 최소, 최대와 jitter를 확인하세요.' },
  { name: '다시 측정하고 비교', text: '설정을 바꾼 뒤 같은 조건에서 측정을 반복하세요.' },
  { name: '측정의 한계 이해', text: '결과는 구성을 비교하는 참고값이며 패널의 광학 지연을 직접 나타내지는 않습니다.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: '시스템 지연 시간',
  modeInstant: '즉각 반응 모드',
  modeKey: '키보드 지연 시간',
  modeVisual: '시각 반응 테스트',
  targetClickPrompt: '이 영역을 클릭하여 입력 지연 시간을 측정하세요',
  targetKeyPrompt: '아무 키나 눌러 키보드 지연 시간을 측정하세요',
  targetWaitPrompt: '초록색 화면을 기다리세요...',
  targetNowPrompt: '지금 클릭하세요!',
  labelAvgLatency: '평균 지연 시간',
  labelMinLatency: '최소 지연 시간',
  labelMaxLatency: '최대 지연 시간',
  labelJitter: '지터 (표준편차)',
  labelFps: '현재 FPS',
  labelFrameTime: '프레임 시간',
  labelSamples: '샘플 수',
  labelGrade: '지연 등급',
  gradeUltraFast: '초고속 (<10ms)',
  gradeFast: '빠름 (10-20ms)',
  gradeModerate: '보통 (20-35ms)',
  gradeHigh: '느림 (>35ms)',
  btnReset: '측정 초기화',
  btnCopyReport: '리포트 복사',
  reportCopied: '복사 완료!',
  historyTitle: '최근 측정 기록',
  pipelineTitle: '하드웨어 지연 파이프라인 분석',
  distributionTitle: '빈도 분포 그래프',
  sampleCol: '샘플',
  typeCol: '입력 유형',
  latencyCol: '측정된 지연 시간',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: '인풋렉 및 시스템 지연 시간 측정 테스트',
    },
    {
      type: 'paragraph',
      html: '게이밍 마우스, 키보드 및 모니터의 입력 반응 속도를 실시간으로 측정하세요.',
    },
    { type: 'stats', items: [
      { value: '< 10 ms', label: 'e스포츠 목표', trend: '경쟁 환경 기준' },
      { value: '1000 Hz', label: '일반 USB 폴링', trend: '입력 간격 1 ms' },
      { value: '240 Hz', label: '고주사율 모니터', trend: '프레임 간격 4.16 ms' },
      { value: '16.6 ms', label: '60 Hz 간격', trend: '프레임당 기본값' },
    ], columns: 4 },
    { type: 'card', title: '브라우저에서 지연을 측정하는 방법', html: '이 테스트는 pointerdown 및 keydown 이벤트와 requestAnimationFrame 화면 갱신을 비교합니다. 입력이 감지된 순간부터 문서가 다시 그려질 때까지의 로컬 시간을 추정합니다.' },
    { type: 'title', text: '입력 지연 신호가 시스템을 통과하는 과정' },
    { type: 'paragraph', html: '전체 지연은 주변기기 스위치에서 화면의 픽셀까지 누적됩니다. 각 단계를 나누어 보면 원인이 장치, 운영체제, 렌더링 또는 디스플레이에 있는지 확인하기 쉽습니다.' },
    { type: 'table', headers: ['구성 요소', '일반 범위', '주요 병목', '개선 방향'], rows: [
      ['스위치', '0.2에서 5.0 ms', '기계적 바운스', '디바운스 시간 줄이기'],
      ['USB 폴링', '0.125에서 8.0 ms', '낮은 주기', '지원된다면 주기 높이기'],
      ['운영체제 큐', '0.5에서 3.0 ms', '백그라운드 작업', '불필요한 프로세스 닫기'],
      ['그래픽 엔진', '4.0에서 20.0 ms', 'CPU 제한 프레임', '렌더링 부하 줄이기'],
      ['GPU 큐', '8.0에서 33.0 ms', 'VSync와 다중 버퍼', 'VSync와 VRR 비교하기'],
      ['디스플레이 처리', '1.0에서 15.0 ms', '스케일링과 보정', '게임 모드 사용하기'],
    ] },
    { type: 'tip', title: 'GPU 렌더링 큐 줄이기', html: 'GPU 사용률이 한계에 도달하면 여러 프레임을 미리 준비할 수 있습니다. 최대 성능보다 약간 낮게 프레임을 제한하고 Reflex 또는 Anti Lag를 시험한 뒤 다시 측정하세요.' },
    { type: 'title', text: '입력 장치의 지연 비교하기' },
    { type: 'paragraph', html: '마우스, 키보드와 터치 화면은 연결 방식과 전자 회로, 스캔 주기에 따라 지연 특성이 다릅니다. 같은 화면과 설정에서 장치를 비교해야 결과가 의미 있습니다.' },
    { type: 'comparative', columns: 3, items: [
      { title: '게이밍 마우스', description: '높은 주기의 유선 또는 무선 연결입니다.', highlight: '0.5에서 2 ms', points: ['1000 Hz 이상 폴링', '광학 스위치', '빠른 처리를 지원하는 센서'] },
      { title: '기계식 키보드', description: '디바운스를 조절할 수 있는 키 매트릭스입니다.', highlight: '1에서 10 ms', points: ['자기식 스위치', '설정 가능한 매트릭스 스캔', '조절 가능한 작동 거리'] },
      { title: '터치 화면', description: '패널 위에 배치된 정전식 디지타이저입니다.', highlight: '15에서 45 ms', points: ['터치 샘플링 주기', '디스플레이 컨트롤러 처리', '오작동 터치 필터'] },
    ] },
    { type: 'title', text: '주사율이 추가하는 화면 지연 이해하기' },
    { type: 'paragraph', html: '주사율은 두 화면 갱신 사이의 최소 간격을 결정합니다. 60 Hz는 240 Hz보다 입력 표시가 느리지만 렌더링과 동기화 방식도 결과에 영향을 줍니다.' },
    { type: 'list', items: ['60 Hz는 프레임당 16.67 ms', '120 Hz는 프레임당 8.33 ms', '144 Hz는 프레임당 6.94 ms', '240 Hz는 프레임당 4.17 ms', '360 Hz는 프레임당 2.78 ms', '540 Hz는 프레임당 1.85 ms'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: '물리적 동작부터 화면에 결과가 보일 때까지의 시간입니다.' },
      { term: 'Jitter', definition: '측정값의 흔들림으로 시스템 시간의 안정성을 나타냅니다.' },
      { term: 'VSync', definition: '화면 찢김을 줄이는 수직 동기화지만 대기 시간을 늘릴 수 있습니다.' },
      { term: 'VRR', definition: 'GPU 출력에 맞춰 화면 주사율을 바꾸는 기능입니다.' },
      { term: '픽셀 응답 시간', definition: '픽셀이 다른 색으로 바뀌는 데 필요한 시간입니다.' },
    ] },
    { type: 'title', text: '브라우저 측정의 장점과 한계' },
    { type: 'paragraph', html: '전용 오실로스코프나 고속 카메라 없이 설정을 비교할 수 있습니다. 다만 드라이버, 게임, 패널의 내부 광학 지연을 모두 직접 측정할 수는 없습니다.' },
    { type: 'proscons', title: '웹 측정 평가', items: [
      { pro: '특수 장비 없이 사용할 수 있음', con: '브라우저 이벤트 처리에 영향을 받음' },
      { pro: '주변기기를 빠르게 비교할 수 있음', con: '픽셀 응답을 직접 측정하지 못함' },
      { pro: '고해상도 로컬 타이머를 사용함', con: '브라우저가 타이머 정밀도를 낮출 수 있음' },
      { pro: '갱신의 안정성을 보여 줌', con: '비활성 탭은 느려질 수 있음' },
    ] },
    { type: 'title', text: '높은 입력 지연 진단하기' },
    { type: 'paragraph', html: '평균이 30 ms를 넘거나 jitter가 크면 창을 활성화한 상태에서 다시 측정하고 VSync, 그래픽 가속, USB 주기와 CPU 작업을 확인하세요.' },
    { type: 'diagnostic', variant: 'warning', title: '입력 지연 진단 알림', html: '데스크톱에서 평균이 35 ms를 넘으면 화면 모드와 하드웨어 가속을 확인해야 합니다. 원인을 찾으려면 한 번에 한 설정만 바꾸세요.' },
    { type: 'title', text: '시스템 지연을 단계적으로 낮추기' },
    { type: 'paragraph', html: '주변기기, 화면과 시스템을 따로 조정합니다. 변경할 때마다 같은 조건에서 새 샘플을 모아 실제 개선인지 확인하세요.' },
    { type: 'summary', title: '지연 최적화 확인 목록', items: ['알맞은 USB 폴링 선택', '화면의 게임 모드 활성화', '불필요한 이미지 필터 끄기', 'VSync와 VRR 비교', '프레임 속도 안정화', '무거운 백그라운드 작업 닫기', '변경 후 테스트 반복'] },
    { type: 'message', title: '결과 비교를 위한 좋은 방법', html: '백그라운드 앱을 닫고 테스트 창을 활성화한 뒤 최소 15회 측정하세요. 한 번의 우연한 값보다 평균, 중앙값과 jitter를 함께 확인하는 것이 좋습니다.' },
  ],
};
