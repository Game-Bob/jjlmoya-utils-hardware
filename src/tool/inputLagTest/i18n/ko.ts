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
];

const howToData = [
  {
    name: '모드 선택',
    text: '즉각 반응, 키보드 지연 시간, 시각 반응 모드 중 선택합니다.',
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
  ],
};
