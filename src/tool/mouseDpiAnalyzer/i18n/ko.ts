import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-dpi-analyzer';
const title = '마우스 DPI 분석기';
const description =
  '알려진 물리적 거리만큼 마우스를 움직여 캡처된 포인터 이동(픽셀)과 비교하여 실제 마우스 DPI를 온라인으로 측정합니다.';

const faqData = [
  {
    question: '온라인 마우스 DPI 테스터는 어떻게 작동하나요?',
    answer:
      '알려진 물리적 거리만큼 마우스를 움직이도록 요청하고, 브라우저 이동 이벤트를 기록하며, devicePixelRatio로 캡처된 값을 보정한 후, 결과 픽셀을 거리(인치)로 나눕니다.',
  },
  {
    question: '실제 DPI가 마우스에 표시된 값과 다른 이유는 무엇인가요?',
    answer:
      '센서 공차, 펌웨어 단계, 표면 동작, 운영체제 스케일링, 포인터 가속, 게임 프로필 설정이 측정된 움직임을 소프트웨어에서 선택한 공칭 DPI와 다르게 만들 수 있습니다.',
  },
  {
    question: '테스트 전에 포인터 가속을 비활성화해야 하나요?',
    answer:
      '네. 깨끗한 DPI 측정을 원한다면 Windows의 포인터 정밀도 향상과 모든 벤더 가속 곡선을 비활성화하세요. 일반 설정이 어떻게 동작하는지 의도적으로 확인하려는 경우에만 활성화 상태로 두세요.',
  },
  {
    question: '어떤 물리적 거리를 사용해야 하나요?',
    answer:
      '더 긴 거리는 손의 오차를 줄입니다. 신용카드 너비는 편리하지만, 책상에 충분한 공간이 있다면 100mm 또는 4인치 자를 사용하는 것이 보통 더 재현성이 높습니다.',
  },
];

const howToData = [
  {
    name: '물리적 기준 선택하기',
    text: '매우 높은 DPI에는 5 또는 10mm를, 일반 테스트에는 1인치를, 책상 공간이 충분할 때는 더 긴 기준을 사용하세요.',
  },
  {
    name: '캡처 버튼을 누르고 있기',
    text: '화면의 캡처 대상을 누른 상태에서 선택한 거리만큼 마우스를 물리적으로 오른쪽으로 움직이세요.',
  },
  {
    name: '물리적 표시에서 놓기',
    text: '마우스가 책상 위의 실제 물리적 표시에 도달하면 버튼을 놓으세요. 도구가 인치당 픽셀을 계산하고 측정된 DPI를 보고합니다.',
  },
  {
    name: '다른 속도로 반복하기',
    text: '느린 패스와 빠른 패스를 실행하세요. DPI가 크게 변하면 포인터 가속이나 센서 스무딩이 결과에 영향을 미치고 있을 수 있습니다.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '온라인 마우스 DPI 테스터: 실제 센서 감도 측정', level: 2 },
    {
      type: 'paragraph',
      html: '마우스는 800, 1600, 3200, 26000 DPI를 광고할 수 있지만, 게임과 정밀 작업에서 중요한 것은 실제로 컴퓨터에 도달하는 움직임입니다. 이 온라인 마우스 DPI 테스터는 알려진 물리적 움직임과 브라우저에서 캡처된 포인터 움직임을 비교하여 실용적인 값을 측정합니다. 결과는 인치당 픽셀로 표시되며, 이는 마우스 DPI나 CPI에 대해 이야기할 때 일반적으로 사용되는 단위와 동일합니다.',
    },
    {
      type: 'paragraph',
      html: '테스트는 의도적으로 로컬에서 간단하게 작동합니다. 캡처 대상을 누른 상태에서 선택한 물리적 거리만큼 마우스를 정확히 오른쪽으로 움직인 후 놓으세요. 이 도구는 폴링 레이트 스크립트나 일반 마우스 테스트 대신 네이티브 이동 델타를 누적합니다. 계산은 브라우저에서 실행되므로 드라이버 다운로드, 계정, 클라우드 업로드가 필요하지 않습니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '중요한 테스트 조건',
      html: '깨끗한 DPI 측정을 위해서는 운영체제 포인터 가속과 벤더 가속 곡선을 비활성화하세요. 가속이 활성화된 상태로 두면 결과는 순수한 센서 설정이 아닌 현재 포인터 동작을 설명합니다.',
    },
    { type: 'title', text: '실제 DPI 계산 방식', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI는 인치당 도트 수를 의미합니다. 마우스 맥락에서는 마우스가 물리적으로 1인치 이동할 때 생성되는 카운트 또는 포인터 픽셀 수를 설명하기 위해 DPI와 CPI가 종종 같은 의미로 사용됩니다. 이 분석기는 제어된 패스 동안 수평 이동을 기록하고, 선택된 거리를 인치로 변환한 다음, 캡처된 픽셀을 인치로 나눕니다. 예를 들어, 2인치 동안 마우스가 3200 보정 픽셀을 보고하면 측정값은 약 1600 DPI입니다.',
    },
    {
      type: 'list',
      items: [
        '매우 높은 DPI에는 10mm와 같은 짧은 기준을, 낮은 DPI에는 더 긴 기준을 선택하세요.',
        '중앙 캡처 컨트롤을 누르고 있어 패스 중에만 브라우저가 움직임을 기록하도록 하세요.',
        '가능한 한 직선 경로를 유지하며 물리적으로 오른쪽으로 움직이세요.',
        '실제 물리적 표시에서 놓고 계산된 DPI를 읽으세요.',
        '한 번의 패스만 신뢰하지 말고 여러 번 반복하여 일관된 실행의 평균을 내세요.',
      ],
    },
    {
      type: 'table',
      headers: ['캡처된 움직임', '물리적 거리', '측정 DPI'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm 신용카드 너비', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: '깔끔한 스트로크 만들기',
      html: '긴 거리보다 단일 수평 스트로크가 더 중요합니다. 매우 높은 DPI의 경우 5mm 또는 10mm 프리셋을 사용하세요. 움직임을 화면 안에 머물 정도로 작게 유지하면서도 계산기에 알려진 물리적 기준을 제공합니다. 진행 표시줄은 입력 신호 측정기일 뿐입니다. 책상 위의 자나 카드가 정지 지점입니다.',
    },
    { type: 'title', text: '측정 DPI가 광고된 DPI와 다른 이유', level: 3 },
    {
      type: 'paragraph',
      html: '광고된 DPI는 종종 선택 가능한 펌웨어 단계일 뿐이며, 모든 표면과 모든 개별 유닛에 대해 연구실에서 인증된 값은 아닙니다. 동일한 공칭 DPI로 설정된 두 마우스라도 센서, 펌웨어 스케일링, 피트 높이, 표면 질감, 리프트오프 동작, 운영체제 설정이 다르면 다르게 느껴질 수 있습니다. 작은 편차는 정상입니다. 큰 편차는 일반적으로 테스트 설정이나 소프트웨어 경로가 측정에 영향을 미치고 있음을 의미합니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '공칭 DPI',
          description: '마우스 소프트웨어에 표시되거나 제품 페이지에 인쇄된 값. 출발점으로 유용하지만 실제 동작 출력을 증명하지는 않습니다.',
          points: ['읽기 쉬움', '펌웨어 스케일링을 숨길 수 있음', '프로필에 따라 달라질 수 있음'],
        },
        {
          title: '측정 DPI',
          description: '물리적 이동 거리와 캡처된 포인터 움직임을 바탕으로 계산된 값. 한 마우스를 다른 마우스에 맞추는 데 가장 적합합니다.',
          highlight: true,
          points: ['실용적이고 재현 가능', '손의 정확도에 민감', '실제 설정 동작을 보여줌'],
        },
        {
          title: '게임 내 감도',
          description: '게임이 마우스 입력을 자체 감도 값으로 곱한 후의 최종 카메라 또는 커서 응답.',
          points: ['실제로 느끼는 것', '게임별로 다름', '센서 측정이 아님'],
        },
      ],
    },
    {
      type: 'proscons',
      title: '브라우저 기반 DPI 측정의 장단점',
      items: [
        { pro: '드라이버 설치가 필요 없음', con: '브라우저는 전기적 센서 신호가 아닌 처리된 포인터 움직임을 봄' },
        { pro: '마우스와 프로필을 빠르게 비교하기 좋음', con: '가속 설정이 활성화된 상태로 두면 결과가 왜곡될 수 있음' },
        { pro: '일반적인 물리적 기준과 함께 작동', con: '손 정렬과 책상 표시가 재현성에 영향을 미침' },
      ],
    },
    { type: 'title', text: 'Windows, macOS 및 마우스 소프트웨어 준비', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI 측정기를 사용하기 전에 입력 경로를 가능한 한 중립적으로 만드세요. Windows에서는 원시 동작을 원할 경우 포인터 정밀도 향상을 끕니다. 벤더 소프트웨어에서는 의도적으로 측정하려는 경우가 아니라면 각도 스냅, 가속, 리플 제어, 스무딩, 표면별 보조 기능을 비활성화하세요. macOS에서는 포인터 가속이 일반 커서 경로의 일부이므로, 그 값은 순수한 센서 결과가 아닌 실용적인 시스템 결과로 간주해야 합니다.',
    },
    {
      type: 'table',
      headers: ['설정', '순수 DPI 권장', '이유'],
      rows: [
        ['포인터 가속', '끄기', '가속은 속도에 따라 이동 출력을 변화시킴'],
        ['마우스 소프트웨어 DPI 단계', '고정 단일 단계', '테스트 중 실수로 프로필이 변경되는 것을 방지'],
        ['각도 스냅', '끄기', '대각선 움직임을 수정하고 자연스러운 센서 출력을 숨길 수 있음'],
        ['운영체제 스케일링', '정상 유지, 도구가 devicePixelRatio로 보정', '분석기는 계산 시 브라우저 줌과 디스플레이 픽셀 비율을 중화함'],
        ['게임 오버레이 또는 매크로', '끄기', '추가 소프트웨어가 입력을 가로채어 패스가 일관되지 않게 만들 수 있음'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: '두 마우스 맞추기',
      html: '기존 마우스를 세 번 측정하고 평균을 기록한 다음, 새 마우스의 측정값이 비슷해질 때까지 DPI 단계를 조정하세요. 실제 센서 출력이 다를 수 있으므로, 벤더 앱 간에 숫자를 복사하는 것보다 더 유용한 경우가 많습니다.',
    },
    { type: 'title', text: '적절한 물리적 기준 선택하기', level: 3 },
    {
      type: 'paragraph',
      html: '인터페이스에는 높은 DPI를 위한 짧은 기준과 낮은 DPI를 위한 더 긴 기준이 포함되어 있습니다. 아주 작은 손 움직임으로 포인터가 화면을 가로지르는 경우 5 또는 10mm를 사용하세요. 마우스가 일반 데스크톱 또는 전술 슈팅 게임 값에 가깝게 설정된 경우 1인치, 50mm 또는 85.6mm 카드 너비를 사용하세요.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: '1인치의 밀리미터' },
        { value: '85.6', label: '일반 신용카드 너비(밀리미터)' },
        { value: '3+', label: '프로필을 신뢰하기 전에 권장되는 반복 패스 횟수' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: '인치당 도트 수. 마우스가 1인치 이동할 때 생성되는 포인터 움직임을 설명하는 데 일반적으로 사용됩니다.' },
        { term: 'CPI', definition: '인치당 카운트 수. 센서 중심 용어로, 기술적으로 마우스에 대해 더 정확한 경우가 많습니다.' },
        { term: '가속', definition: '이동 속도에 따라 포인터 출력을 변경하는 설정 또는 곡선.' },
        { term: 'devicePixelRatio', definition: 'CSS 픽셀과 물리적 디스플레이 픽셀 간의 브라우저 비율. 여기서는 줌 및 디스플레이 스케일링 효과를 정규화하는 데 사용됩니다.' },
        { term: '각도 스냅', definition: '움직임을 직선으로 보정하는 펌웨어 또는 소프트웨어 보정. 그리기에 유용할 때도 있지만 많은 경쟁 플레이어에게는 선호되지 않습니다.' },
      ],
    },
    { type: 'title', text: '가속 표시기 읽기', level: 3 },
    {
      type: 'paragraph',
      html: '가속 표시기는 운영체제 곡선에 대한 연구실 수준의 증명이 아닙니다. 캡처된 패스 중 이동 속도의 변동을 기반으로 한 실용적인 경고입니다. 느린 패스와 빠른 패스에서 DPI 값이 크게 다르게 나오면 가속, 스무딩, 표면 동작, 또는 일관되지 않은 손 움직임이 관련되었을 수 있습니다. 좋은 원시 설정은 물리적 거리가 동일할 때 여러 패스에서 비슷한 측정 DPI를 생성해야 합니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '결과가 크게 변동할 때',
      html: '동일한 거리에서 한 패스는 780 DPI, 다음 패스는 950 DPI라고 나오면 즉시 마우스를 탓하지 마세요. 가속 설정을 확인하고, 테스트 거리를 늘리고, 마우스 경로를 수평으로 유지하고, 패스 중에 포인터가 화면 가장자리에 닿지 않도록 하세요.',
    },
    {
      type: 'summary',
      title: '신뢰할 수 있는 DPI 테스트 체크리스트',
      items: [
        '가급적 100mm 이상의 측정된 물리적 기준을 사용하세요.',
        '수평으로 오른쪽으로 움직이고 표시에서 정확히 멈추세요.',
        '원시 프로필 비교를 위해 가속을 비활성화하세요.',
        '최소 세 번의 패스를 실행하고 분산을 비교하세요.',
        '광고된 DPI 레이블만이 아닌 측정 DPI를 사용하여 마우스를 맞추세요.',
      ],
    },
    {
      type: 'message',
      title: '개인정보 보호 참고',
      html: '이 마우스 가속 테스트와 DPI 계산은 브라우저에서 로컬로 실행됩니다. 도구는 드라이버 접근, 장치 일련번호, 업로드된 입력 로그가 필요하지 않습니다.',
    },
  ],
  ui: {
    badge: '실제 DPI 랩',
    referenceLabel: '기준',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: '카드',
    lineStart: '시작',
    holdButton: '누른 상태에서 선택한 거리만큼 이동',
    holdHint: '실제 자나 카드를 책상 위에 놓고 사용하세요. 바가 채워졌다고 멈추지 마세요.',
    progressLabel: '입력 신호',
    activeHint: '움직임 추적 중',
    dpiLabel: '측정 DPI',
    pixelsLabel: '보정된 움직임',
    distanceReadout: '물리적 거리',
    ratioLabel: '픽셀 비율',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: '캡처 준비 완료',
    statusTracking: '움직임 추적 중...',
    statusDone: '측정 완료',
    reset: '초기화',
    accelerationTitle: '가속 신호',
    accelerationHint: '느린 속도와 빠른 속도로 반복하여 일관성을 비교하세요.',
    accelerationLow: '안정적',
    accelerationMedium: '가변적',
    accelerationHigh: '높은 드리프트',
    sampleCount: '샘플',
  },
};
