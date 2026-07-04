import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'keyboard-chatter-test';
const title = '키보드 채터링 테스트';
const description = '동일한 키가 두 번 나타나는 속도를 확인하여 기계식 키보드의 채터링, 이중 입력 및 결함 있는 스위치 바운스를 감지합니다.';

const faqData = [
  {
    question: '키보드 채터링이란 무엇인가요?',
    answer: '키보드 채터링은 한 번의 물리적 누름이 여러 번의 누름으로 등록되는 하드웨어 결함입니다. 더럽거나, 마모되었거나, 산화되었거나, 디바운스가 부적절한 기계식 스위치에서 흔히 발생합니다.',
  },
  {
    question: '이 키보드 채터링 테스트는 어떻게 작동하나요?',
    answer: '의심스러운 키를 한 번에 하나씩 천천히 누르세요. 로그에 몇 밀리초 간격으로 반복 누름이 표시되면 스위치가 바운스되어 이중 문자가 생성될 수 있습니다.',
  },
  {
    question: '어떤 델타 값이 키보드 이중 입력을 의미하나요?',
    answer: '30ms 미만의 반복 누름은 채터링이 강력히 의심됩니다. 30~50ms의 반복은 주의가 필요합니다. 정상적인 의도적 반복은 대부분의 사용자에게 50ms 이상입니다.',
  },
  {
    question: '첫 번째 누름에 델타가 표시되지 않는 이유는 무엇인가요?',
    answer: '델타는 동일한 키의 이전 누름이 필요합니다. 첫 번째 누름이 기준선을 설정하고, 이후 누름이 밀리초 단위의 시간 간격을 표시합니다.',
  },
  {
    question: '소프트웨어로 키보드 채터링을 해결할 수 있나요?',
    answer: '디바운스 소프트웨어는 일부 증상을 숨길 수 있지만 스위치를 수리하지는 않습니다. 청소, 핫스왑 스위치 재장착, 스위치 교체 또는 키보드 PCB 수리가 필요할 수 있습니다.',
  },
];

const howToData = [
  {
    name: '도구를 열고 정상적으로 키를 누르세요',
    text: '시작 버튼이 없습니다. 필요한 경우 도구 내부를 클릭한 다음 이중 입력이 발생한 키를 누르세요.',
  },
  {
    name: '의심스러운 키를 한 번에 하나씩 탭하세요',
    text: '이중 입력이 발생하는 키를 누르세요. 한 번의 물리적 누름이 작은 델타로 여러 로그 행을 생성하면 스위치가 채터링 중일 가능성이 높습니다.',
  },
  {
    name: '색상 코드를 읽으세요',
    text: '녹색은 50ms 초과의 정상, 노란색은 30~50ms의 의심, 빨간색은 30ms 미만의 채터링 감지를 의미합니다.',
  },
  {
    name: '필요한 경우 로그 내보내기',
    text: '다운로드 버튼을 사용하여 키를 비교하거나 간헐적 결함을 문서화하는 데 도움이 되는 CSV 로그를 저장하세요.',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
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
      text: '기계식 키보드 이중 입력 테스트',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 키보드 채터링 테스트는 한 번의 누름으로 두 글자를 입력하거나, 깨끗한 릴리스를 놓치거나, 의도적으로 두 번 탭하지 않았는데도 반복 문자가 생성되는 기계식 키보드를 진단하는 데 도움이 됩니다. 스위치 청소, 펌웨어 디바운스 설정 변경, 보증 청구 개시 또는 핫스왑 스위치 교체 전에 사용하세요.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '결과 읽는 방법',
      badge: '델타 임계값',
      html: '<p><strong>정상</strong>은 반복이 50ms 초과이며 일반적으로 의도적임을 의미합니다. <strong>의심</strong>은 30~50ms이며 동일한 키에서 재테스트해야 합니다. <strong>채터링 감지</strong>는 30ms 미만으로, 한 번의 물리적 누름이 여러 전기 접점으로 바운스되었을 가능성이 매우 높습니다.</p>',
    },
    {
      type: 'title',
      text: '기계식 스위치가 채터링하는 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '기계식 스위치는 완벽하게 깨끗한 디지털 신호로 닫히지 않습니다. 금속 접점은 안정되기 전에 몇 밀리초 동안 바운스할 수 있습니다. 키보드 펌웨어는 일반적으로 디바운스 창으로 그 바운스를 필터링합니다. 채터링은 접점이 더럽거나, 마모되었거나, 산화되었거나, 느슨하거나, 균열되었거나, 잘못 조정되어 디바운스 필터가 처리했어야 할 여분의 누름을 키보드가 보고할 때 발생합니다.',
    },
    {
      type: 'table',
      headers: ['증상', '가능한 원인', '먼저 시도할 것'],
      rows: [
        ['한 키가 같은 문자를 두 번 입력함', '더럽거나 마모된 스위치 접점', '키캡을 제거하고 먼지를 불어낸 후 스위치 교체 전에 다시 테스트하세요.'],
        ['빌드 후 여러 핫스왑 키가 채터링함', '스위치 핀이 깨끗하게 장착되지 않음', '스위치를 뽑아 다시 장착하고 구부러진 핀이나 느슨한 소켓을 확인하세요.'],
        ['유출 또는 습기 후에만 발생함', '접점의 산화 또는 잔류물', '키보드를 분리하고 제조업체 지침에 따라 청소하세요.'],
        ['많은 키가 작은 델타를 표시함', '펌웨어 디바운스가 너무 낮거나 스캔 문제', '다른 USB 포트에서 비교하고 가능한 경우 펌웨어 디바운스 설정을 검토하세요.'],
      ],
    },
    {
      type: 'title',
      text: '오탐지를 줄이는 테스트 방법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '전체 문장을 입력하는 대신 의심스러운 키를 한 번에 하나씩 테스트하세요.',
        '키를 한 번 누르고 완전히 놓은 후 다음 누름 전에 잠시 기다리세요.',
        '의심스러운 키를 건강하게 느껴지는 근처 키와 비교하세요.',
        '이전 누름이 없어 비교할 수 없으므로 키의 첫 번째 행은 무시하세요.',
        '동일한 키가 단일 탭에서 30ms 미만의 빨간 행을 반복적으로 표시하면 하드웨어 결함으로 처리하세요.',
        '노란 행만 나타나면 테스트를 더 천천히 반복하고 탭 리듬이 짧은 간격을 유발하는지 확인하세요.',
      ],
    },
    {
      type: 'title',
      text: '채터링 vs 의도적 빠른 타이핑',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '채터링',
          description: '한 키에 집중되며, 종종 30ms 미만이고, 한 번의 누름을 의도했을 때 나타납니다.',
          points: ['스위치 또는 소켓을 검사하세요.', '근처의 건강한 키와 비교하세요.'],
        },
        {
          title: '빠른 타이핑',
          description: '많은 키에 영향을 미치고, 리듬을 따르며, 동일한 키의 반복 누름 간에 50ms 이상인 경향이 있습니다.',
          points: ['일반적으로 정상적인 사용입니다.', '더 느린 단일 탭으로 재테스트하세요.'],
        },
        {
          title: 'OS 키 반복',
          description: '키를 누르고 있을 때 나타나며 일반적으로 운영 체제에서 설정한 규칙적인 리듬으로 반복됩니다.',
          points: ['탭 사이에 완전히 놓으세요.', '키보드 반복 설정을 별도로 확인하세요.'],
        },
      ],
    },
    {
      type: 'title',
      text: '키가 실패했을 때 해야 할 일',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '변경하기 전에 CSV 로그를 저장하여 전후 결과를 비교할 수 있도록 하세요.',
        '키캡을 제거하고 먼지, 액체 잔류물 또는 부드럽게 돌아오지 않는 스템이 있는지 검사하세요.',
        '핫스왑 키보드의 경우 스위치를 재장착하거나 교체하고 동일한 위치를 다시 테스트하세요.',
        '납땜된 키보드의 경우 PCB 수리가 필요하다고 가정하기 전에 펌웨어 디바운스 옵션을 비교하세요.',
        '관련 없는 여러 키가 불가능한 델타를 표시하면 다른 케이블과 USB 포트를 시도하세요.',
        '보증 지원을 위해 영향을 받는 키, 반복된 델타 값, 키보드 모델, 펌웨어 버전 및 결함이 스위치를 따르는지 PCB 소켓을 따르는지 포함하세요.',
      ],
    },
    {
      type: 'summary',
      title: '빠른 규칙',
      items: [
        '단일 빨간 행은 단서이지 판결이 아닙니다.',
        '동일한 물리적 키에서 30ms 미만의 반복된 빨간 행은 키보드 채터링의 강력한 증거입니다.',
        '하드웨어를 교체하기 전에 의도적인 단일 탭을 사용하고 의심스러운 스위치를 근처의 건강한 키와 비교하세요.',
      ],
    },
  ],
  ui: {
    statusIdle: '아무 키나 누르세요',
    statusListening: '키 델타 측정 중',
    statusChatter: '채터링 감지됨',
    totalPresses: '총 누름 횟수',
    chatterEvents: '채터링 이벤트',
    worstDelta: '최악의 델타',
    watchWindow: '유지된 행',
    keyColumn: '키',
    deltaColumn: '델타',
    verdictColumn: '판정',
    timeColumn: '시간',
    normal: '정상',
    suspect: '의심',
    chatter: '채터링',
    waiting: '대기 중',
    clear: '로그 지우기',
    exportLog: 'CSV 내보내기',
    hint: '로그는 최신 80행을 유지하므로 긴 세션도 빠르게 유지됩니다. 키를 누르고 있을 때의 반복은 무시되며, 빨간 행은 너무 가깝게 발생한 별도의 누름에서 비롯됩니다.',
    captureNotice: '시작 버튼이 없습니다. 의심스러운 키를 한 번 탭하고 이전 누름으로부터의 델타를 관찰하세요.',
    keyboardAriaLabel: '최근 키 활동',
    logAriaLabel: '키보드 채터링 이벤트 로그',
    escapeKey: 'Esc',
    backspaceKey: 'Back',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Caps',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Space',
    csvHeader: '키,코드,델타_ms,심각도,시간',
  },
};
