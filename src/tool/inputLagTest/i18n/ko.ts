import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-input-lag';
const title = '인풋렉 및 시스템 지연 시간 테스트';
const description = '고정밀 성능 타이머와 프레임 동기화를 활용하여 하드웨어 입력 지연 및 시스템 레이턴시를 측정하는 온라인 도구입니다.';

const faqData = [
  {
    question: '인풋렉과 시스템 지연 시간이란 무엇인가요?',
    answer: '인풋렉은 마우스 클릭이나 키보드 누름과 같은 사용자의 물리적 입력이 이루어진 후 화면에 시각적 결과가 나타날 때까지의 총 시간 지연입니다.',
  },
  {
    question: '이 온라인 테스트는 인풋렉을 어떻게 측정하나요?',
    answer: 'performance.now()를 사용하여 하드웨어 이벤트 타임스탬프를 수집하고 이를 requestAnimationFrame 렌더링 주기와 연관시켜 지연 시간을 계산합니다.',
  },
  {
    question: '게이밍에 적합한 인풋렉 기준은 얼마인가요?',
    answer: '10ms 미만은 프로 e스포츠에 초고속 수준입니다. 10ms~20ms는 빠른 편이며, 20ms~35ms는 보통, 35ms 이상은 지연이 체감되는 수준입니다.',
  },
  {
    question: 'PC 인풋렉을 줄이려면 어떻게 해야 하나요?',
    answer: '모니터 주사율을 높이고 VSync를 비활성화하며 G-Sync/FreeSync를 활성화하세요. 마우스 USB 폴링레이트를 1000Hz 이상으로 설정하고 NVIDIA Reflex를 켜세요.',
  },
  {
    question: '화면 주사율이 인풋렉에 영향을 미치나요?',
    answer: '네. 주사율이 높을수록 프레임 표시 간격이 줄어듭니다. 60Hz 화면의 프레임 시간은 16.67ms인 반면, 240Hz 화면은 4.17ms로 표시 지연이 크게 감소합니다.',
  },
];

const howToData = [
  {
    name: '테스트 모드 선택',
    text: '즉각 반응, 키 누름 지연 시간, 또는 시각 반응 지연 시간 모드를 선택합니다.',
  },
  {
    name: '물리적 입력 수행',
    text: '영역 내부를 클릭하거나 키를 눌러 하드웨어 입력 이벤트를 발생시킵니다.',
  },
  {
    name: '실시간 지연 시간 지표 확인',
    text: '평균, 최소, 최대 지연 시간 및 지터(표준편차) 값을 확인합니다.',
  },
  {
    name: '디스플레이 프레임 타이밍 점검',
    text: '현재 FPS와 프레임 타임을 모니터링하여 디스플레이 안정성을 검증합니다.',
  },
  {
    name: '측정 이력 분석',
    text: '샘플 이력 로그를 검토하여 지연 시간 스파이크와 변동을 파악합니다.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: '시스템 레이턴시',
  modeInstant: '즉각 반응',
  modeKey: '키 누름 지연 시간',
  modeVisual: '시각 반응 지연 시간',
  targetClickPrompt: '이 영역 안을 클릭하거나 탭하여 지연 시간을 측정하세요',
  targetKeyPrompt: '아무 키(또는 스페이스바)나 눌러 키보드 지연 시간을 측정하세요',
  targetWaitPrompt: '녹색 배경이 될 때까지 기다리세요...',
  targetNowPrompt: '지금 클릭하세요!',
  labelAvgLatency: '평균 지연 시간',
  labelMinLatency: '최소 지연 시간',
  labelMaxLatency: '최대 지연 시간',
  labelJitter: '지연 지터 (표준편차)',
  labelFps: '현재 FPS',
  labelFrameTime: '프레임 타임',
  labelSamples: '샘플 수',
  labelGrade: '지연 시간 등급',
  gradeUltraFast: '초고속 (<10ms)',
  gradeFast: '빠름 (10-20ms)',
  gradeModerate: '보통 (20-35ms)',
  gradeHigh: '느림 (>35ms)',
  btnReset: '측정 기록 초기화',
  btnCopyReport: '벤치마크 보고서 복사',
  reportCopied: '보고서가 복사되었습니다!',
  historyTitle: '최근 지연 시간 측정 기록',
  pipelineTitle: '하드웨어 신호 파이프라인 지연 분석',
  distributionTitle: '지연 시간 빈도 분포',
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
      text: 'PC 게이밍에서의 인풋렉과 시스템 지연 시간 이해하기',
    },
    {
      type: 'paragraph',
      html: '인풋렉(입력 지연)은 사용자가 마우스 클릭이나 키보드 입력을 한 시점부터 화면에 결과가 반영될 때까지의 정확한 시간 지연입니다. 빠른 반응이 요구되는 게이밍 환경에서 시스템 레이턴시를 최적화하는 것은 조준 정확도와 반응 속도를 향상시키는 핵심 요소입니다. 전체 지연 시간은 USB 폴링, OS 이벤트 처리, 게임 엔진 렌더링, GPU 프레임 버퍼, 디스플레이 반응 속도 등이 누적되어 발생합니다.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'e스포츠 권장 목표치',
          trend: '최적의 반응 속도',
        },
        {
          value: '1000 Hz',
          label: '표준 USB 폴링레이트',
          trend: '1.0 ms 입력 간격',
        },
        {
          value: '240 Hz',
          label: '고주사율 모니터',
          trend: '4.16 ms 프레임 간격',
        },
        {
          value: '16.6 ms',
          label: '60Hz 프레임 간격',
          trend: '디스플레이 기본 지연',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: '브라우저 기반 지연 시간 측정 원리',
      html: '본 도구는 <code>performance.now()</code> 고정밀 타이머와 DOM 입력 이벤트(<code>pointerdown</code> 및 <code>keydown</code>)를 결합하여 측정합니다. <code>requestAnimationFrame</code>을 통해 화면 렌더링 주기와 이벤트를 동기화하여 물리적 입력 시점부터 디스플레이 갱신까지의 시차를 정밀 계산합니다.',
    },
    {
      type: 'title',
      text: '스위치 입력부터 화면 출력까지의 신호 파이프라인',
    },
    {
      type: 'paragraph',
      html: '인풋렉을 효율적으로 줄이기 위해서는 하드웨어 스위치 동작부터 화면 표시까지의 신호 전달 과정을 이해해야 합니다. 총 시스템 지연 시간은 주변기기, OS, 렌더링 파이프라인, 디스플레이 지연의 합산입니다.',
    },
    {
      type: 'table',
      headers: ['파이프라인 단계', '일반적 지연 시간', '주요 병목 원인', '최적화 방법'],
      rows: [
        ['주변기기 스위치', '0.2 ms - 5.0 ms', '디바운스 알고리즘', '광학식 스위치 사용'],
        ['USB 폴링레이트', '0.125 ms - 8.0 ms', '125Hz vs 1000Hz / 8000Hz', '폴링레이트를 1000Hz 이상으로 설정'],
        ['OS 이벤트 큐', '0.5 ms - 3.0 ms', '백그라운드 작업', 'Windows 게임 모드 활성화'],
        ['렌더링 엔진', '4.0 ms - 20.0 ms', 'CPU 과부하, 스레드 동기화', 'NVIDIA Reflex / Anti-Lag 사용'],
        ['GPU 프레임 버퍼', '8.0 ms - 33.0 ms', 'VSync 활성화, 다중 버퍼링', 'VSync 끄기, G-Sync / FreeSync 사용'],
        ['디스플레이 처리', '1.0 ms - 15.0 ms', 'TV 화질 처리, 스케일러 지연', '모니터/TV 게임 모드 활성화'],
      ],
    },
    {
      type: 'tip',
      title: 'GPU 부하가 높을 때 렌더링 지연을 줄이는 방법',
      html: 'GPU 사용률이 99%에 달하면 그래픽 드라이버가 여러 프레임을 미리 버퍼에 쌓아둡니다. 이로 인해 30ms~50ms의 큰 인풋렉이 발생합니다. 프레임을 GPU 최대 성능보다 약간 낮게 제한하거나 NVIDIA Reflex를 켜세요.',
    },
    {
      type: 'title',
      text: '게이밍 마우스, 키보드, 터치스크린 지연 시간 비교',
    },
    {
      type: 'paragraph',
      html: '입력 기기 유형에 따라 적용된 하드웨어 구조 및 통신 프로토콜에 따른 지연 특성이 다릅니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '게이밍 마우스',
          description: '고속 무선 (2.4GHz) 및 유선 연결.',
          highlight: '0.5ms - 2ms 지연 시간',
          points: [
            '1000Hz~8000Hz 폴링레이트',
            '디바운스 지연이 없는 광학 스위치',
            '초저지연 센서 모션',
          ],
        },
        {
          title: '기계식 키보드',
          description: '키 스캔 마트릭스 및 디바운스 제어.',
          highlight: '1ms - 10ms 지연 시간',
          points: [
            '래피드 트리거 지원 홀 효과 자성 스위치',
            '최대 8000Hz 스캔 레이트',
            '입력 지점 조절 가능',
          ],
        },
        {
          title: '모바일 터치스크린',
          description: '정전식 터치 디지타이저 샘플링.',
          highlight: '15ms - 45ms 지연 시간',
          points: [
            '터치 샘플링 레이트 (120Hz - 480Hz)',
            'OS 디스플레이 컴포지터 지연',
            '정전식 필터링 알고리즘',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '모니터 주사율이 디스플레이 지연 시간에 미치는 영향',
    },
    {
      type: 'paragraph',
      html: '화면 주사율은 디스플레이에서 발생 가능한 최소 표시 지연 시간을 결정합니다.',
    },
    {
      type: 'list',
      items: [
        '60 Hz 디스플레이: 1 프레임 = 16.67 ms (평균 표시 지연: ~8.33 ms)',
        '120 Hz 디스플레이: 1 프레임 = 8.33 ms (평균 표시 지연: ~4.16 ms)',
        '144 Hz 디스플레이: 1 프레임 = 6.94 ms (평균 표시 지연: ~3.47 ms)',
        '240 Hz 디스플레이: 1 프레임 = 4.17 ms (평균 표시 지연: ~2.08 ms)',
        '360 Hz 디스플레이: 1 프레임 = 2.78 ms (평균 표시 지연: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: '인풋렉 (Input Lag)',
          definition: '물리적 입력 시점부터 화면 출력까지 걸리는 총 경과 시간.',
        },
        {
          term: '지터 (Jitter)',
          definition: '측정치들의 표준편차로, 시스템 반응의 일관성과 안정성을 의미합니다.',
        },
        {
          term: 'VSync (수직 동기화)',
          definition: '화면 찢어짐을 방지하지만 인풋렉을 크게 증가시킵니다.',
        },
        {
          term: '가변 주사율 (VRR)',
          definition: 'G-Sync 및 FreeSync와 같이 GPU와 모니터 주사율을 동적으로 일치시키는 기술.',
        },
      ],
    },
    {
      type: 'title',
      text: '온라인 브라우저 측정의 장점과 한계',
    },
    {
      type: 'paragraph',
      html: '별도의 장비 없이 웹 브라우저에서 인풋렉 수치를 즉시 점검할 수 있습니다.',
    },
    {
      type: 'proscons',
      title: '브라우저 측정 평가',
      items: [
        {
          pro: '별도 프로그램 설치나 전용 장비가 필요 없음',
          con: '브라우저 이벤트 루프 및 OS 창 관리자의 영향을 받음',
        },
        {
          pro: 'performance.now 기반의 마이크로초 단위 고정밀 타이머',
          con: '디스플레이 패셀의 실제 광학 픽셀 응답 속도를 직접 측정할 수는 없음',
        },
        {
          pro: '서로 다른 입력 기기 간 즉각적인 비교 측정 가능',
          con: '보안 정책에 따른 브라우저 타이머 정밀도 제한',
        },
      ],
    },
    {
      type: 'title',
      text: '높은 인풋렉 발생 시 진단 방법',
    },
    {
      type: 'paragraph',
      html: '측정된 지연 시간이 높은 경우(>30ms) 아래 설정을 확인하세요.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '고지연 시간 진단 안내',
      html: '평균 지연 시간이 35ms를 초과하는 경우, 그래픽 카드 제어판에서 수직동기화(VSync)가 켜져 있는지 확인하세요. 브라우저의 하드웨어 가속이 꺼져 있으면 CPU에 렌더링 부하가 걸려 지연 시간이 급증할 수 있습니다.',
    },
    {
      type: 'title',
      text: '시스템 인풋렉을 최적으로 낮추는 단계별 가이드',
    },
    {
      type: 'paragraph',
      html: '아래 조치를 수행하여 시스템 지연 시간을 단축하세요.',
    },
    {
      type: 'summary',
      title: '시스템 레이턴시 최적화 체크리스트',
      items: [
        '마우스 전용 소프트웨어에서 USB 폴링레이트를 1000Hz 이상으로 설정.',
        'Windows 디스플레이 설정에서 하드웨어 가속 GPU 스케줄링(HAGS) 활성화.',
        '모니터/TV 설정에서 게임 모드를 켜서 내부 보정 지연 우회.',
        '전역 VSync를 끄고 G-Sync / FreeSync 가변 주사율 활성화.',
        '지원되는 게임에서 NVIDIA Reflex 또는 AMD Anti-Lag 활성화.',
        '브라우저 설정에서 하드웨어 가속이 켜져 있는지 확인.',
      ],
    },
    {
      type: 'message',
      title: '정확한 측정을 위한 팁',
      html: '가장 신뢰할 수 있는 수치를 얻으려면 백그라운드 앱을 종료하고 브라우저를 전체 화면으로 설정한 뒤 최소 15~20회 이상 테스트하세요.',
    },
  ],
};
