import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-refresh-rate-detector';
const title = '모니터 주사율 측정기';
const description = 'requestAnimationFrame을 사용하여 모니터의 주사율을 즉시 정확하게 감지합니다. 프레임 안정성을 테스트하고 업계 표준과 비교해 보세요.';

const faqData = [
  {
    question: '주사율(Hz)이란 무엇인가요?',
    answer: '주사율은 모니터가 초당 화면을 업데이트하는 횟수를 의미합니다. 60Hz 모니터는 초당 60회, 144Hz 모니터는 144회 업데이트됩니다. 주사율이 높을수록 움직임이 더 부드러워집니다.',
  },
  {
    question: '이 측정기는 얼마나 정확한가요?',
    answer: '이 도구는 모니터의 재생 주기와 동기화되는 requestAnimationFrame을 사용합니다. 정확도는 시스템 부하에 따라 달라질 수 있습니다. 안정 모드는 더 긴 시간 동안 측정하여 정밀도를 높입니다.',
  },
  {
    question: '안정 모드와 빠른 모드의 차이점은 무엇인가요?',
    answer: '빠른 모드는 짧은 시간(~3초) 동안 측정하여 빠른 결과를 보여줍니다. 안정 모드는 더 긴 시간(~10초) 동안 측정하여 시스템 노이즈를 걸러내고 더 신뢰할 수 있는 결과를 제공합니다.',
  },
  {
    question: '감지된 주사율이 모니터 사양과 다른 이유는 무엇인가요?',
    answer: '케이블 연결 불량, 오래된 드라이버, 또는 OS의 배율 설정 간섭 등이 원인일 수 있습니다. 디스플레이 케이블을 다시 연결하거나 GPU 드라이버를 업데이트해 보세요.',
  },
  {
    question: '최신 모니터는 어떤 주사율을 지원하나요?',
    answer: '일반적인 표준은 60Hz(기본), 75Hz, 120Hz, 144Hz(게이밍), 240Hz(고성능 게이밍), 360Hz(전문 e스포츠) 등이 있습니다.',
  },
];

const howToData = [
  {
    name: '도구 실행',
    text: '이 페이지를 열기만 하면 됩니다. 측정기가 즉시 측정을 시작합니다.',
  },
  {
    name: '안정화 대기',
    text: '안정 또는 빠른 모드를 선택하세요. 창을 옮기지 말고 측정이 완료될 때까지 기다리세요.',
  },
  {
    name: '계기판 확인',
    text: '모니터의 주사율이 부드러운 다이얼과 벤치마크 통계(최소/최대/평균)와 함께 표시됩니다.',
  },
  {
    name: '표준과 비교',
    text: '내 모니터가 어떤 표준(60, 75, 120, 144, 240, 360Hz)에 해당하는지 보여줍니다.',
  },
  {
    name: '선택 사항: 프레임 스킵 테스트',
    text: '화면을 가로지르는 애니메이션 사각형을 보며 시각적으로 부드러움을 확인하세요.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '모니터 주사율 측정기: 온라인 디스플레이 Hz 테스트',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '모니터의 주사율(60Hz, 144Hz, 240Hz 등)을 즉시 정밀하게 감지합니다. 프레임 안정성을 테스트하고 디스플레이가 정격 사양대로 작동하는지 확인하세요.',
    },
    {
      type: 'title',
      text: '모니터 주사율이 중요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '주사율은 화면의 움직임이 얼마나 부드럽게 보이는지를 결정합니다. 게이머는 144Hz 이상의 모니터에서 큰 혜택을 보며, 일반 사용자는 60Hz로도 충분합니다. 이 도구는 모니터가 실제로 광고된 주사율을 제공하는지 확인하는 데 도움이 됩니다.',
    },
    {
      type: 'title',
      text: '주사율 감지 방법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '이 측정기를 로드하면 즉시 측정이 시작됩니다',
        '빠른(3초) 또는 안정(10초) 측정 모드 중 하나를 선택하세요',
        '계기판 다이얼에서 모니터의 주사율을 확인하세요',
        '업계 표준(60, 75, 120, 144, 240, 360Hz)과 비교해 보세요',
      ],
    },
    {
      type: 'title',
      text: '일반적인 주사율 표준',
      level: 3,
    },
    {
      type: 'table',
      headers: ['표준', '용도', '일반적인 사용자'],
      rows: [
        ['60Hz', '일반 컴퓨터 사용', '사무용, 웹 서핑'],
        ['75Hz', '가벼운 게이밍', '캐주얼 게이머'],
        ['120Hz', '멀티미디어', '콘솔, 스트리밍'],
        ['144Hz', '전문 게이밍', 'FPS, 빠른 화면 전환 게임'],
        ['240Hz+', '프로 e스포츠', '프로 게이머, 스트리머'],
      ],
    },
    {
      type: 'title',
      text: '문제 해결: 주사율이 예상보다 낮게 표시될 때',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'HDMI/DisplayPort 케이블 연결을 확인하세요. 연결이 헐거우면 대역폭이 줄어듭니다.',
        'GPU 드라이버(NVIDIA, AMD, Intel)를 업데이트하세요.',
        'OS 디스플레이 설정에서 높은 주사율이 활성화되어 있는지 확인하세요.',
        '다른 케이블이나 모니터 포트를 시도해 보세요.',
        '컴퓨터를 재부팅한 후 다시 테스트해 보세요.',
      ],
    },
    {
      type: 'title',
      text: '이 측정기에 적용된 기술',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 도구는 모니터의 재생 주기와 직접 동기화되는 브라우저의 requestAnimationFrame API를 사용합니다. 애니메이션 프레임 간의 시간을 측정하여 별도의 하드웨어 없이도 정확한 주사율을 높은 정밀도로 계산합니다.',
    },
  ],
  ui: {
    badge: '디스플레이 테스트',
    title: '모니터 주사율 측정',
    description: '디스플레이 주사율을 즉시 감지하세요',
    modeStable: '안정(10초, 정밀)',
    modeFast: '빠른(3초, 퀵)',
    measurementStatus: '측정 중...',
    currentHz: '현재',
    averageHz: '평균',
    maxHz: '최대',
    minHz: '최소',
    standardDetected: '감지된 표준',
    frameSkippingTest: '프레임 스킵 테스트',
    startMeasurement: '측정 시작',
    resetMeasurement: '초기화',
    copyResult: '결과 복사',
    copiedFeedback: '클립보드에 복사되었습니다!',
    optimalConfiguration: '[OK] 최적의 구성',
    suboptimalConfiguration: '[경고] 최적 사양 미달',
    unstableRefreshRate: '[경고] 불안정한 주사율',
    measurementNotStarted: '측정 준비 완료',
    switchMonitorHint: '창을 다른 모니터로 드래그하여 테스트해 보세요',
    incompatibleBrowserMsg: '브라우저가 requestAnimationFrame을 지원하지 않습니다',
  },
};
