import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'subwoofer-crossover-test';
const title = '서브우퍼 크로스오버 테스트';
const description =
  '브라우저에서 200Hz에서 10Hz까지 사인 스위프를 실행하여 서브우퍼가 약해지거나, 끊기거나, 메인 스피커로 전환되는 지점을 찾으세요.';

const faqData = [
  {
    question: '서브우퍼 크로스오버 테스트는 무엇을 측정하나요?',
    answer:
      '메인 스피커와 서브우퍼 사이에서 저음이 연속적으로 들리지 않는 지점을 찾는 데 도움이 됩니다. 갭, 급격한 레벨 변화 또는 누락된 범위는 잘못된 크로스오버 주파수, 위상 문제, 룸 캔슬레이션 또는 서브우퍼 한계를 나타낼 수 있습니다.',
  },
  {
    question: '이 테스트는 왜 200Hz에서 10Hz까지 스위프하나요?',
    answer:
      '대부분의 홈시어터 크로스오버는 60Hz에서 120Hz 사이에 위치하며, 많은 컴팩트 스피커는 해당 범위 위나 아래에서 출력을 잃기 시작합니다. 200Hz부터 스위프하면 톤이 깊은 서브베이스에 도달하기 전에 스피커-서브우퍼 전환을 쉽게 들을 수 있습니다.',
  },
  {
    question: '이 온라인 서브우퍼 베이스 테스트가 스피커를 손상시킬 수 있나요?',
    answer:
      '예, 높은 볼륨에서 매우 낮은 주파수는 작은 스피커를 과부하시키거나 서브우퍼에 무리를 줄 수 있습니다. 조용히 시작하고, 증폭된 베이스 모드를 피하며, 덜거덕거림, 두드림 또는 기계적 스트레스가 들리면 즉시 중지하세요.',
  },
  {
    question: '표시된 드롭아웃 주파수가 사용해야 할 정확한 크로스오버 설정인가요?',
    answer:
      '아니요. 실험실 측정이 아닌 청취 단서로 취급하세요. 최적의 크로스오버 설정은 스피커 사양, 룸 배치, 위상, 거리 보정 및 캘리브레이션 목표에 따라서도 달라집니다.',
  },
];

const howToData = [
  {
    name: '안전한 청취 레벨 설정하기',
    text: '먼저 시스템 볼륨을 낮추세요. 스위프는 생성된 사인파를 사용하므로 브라우저 볼륨이 낮아 보여도 저음이 강해질 수 있습니다.',
  },
  {
    name: '200Hz에서 10Hz 스위프 시작하기',
    text: '스위프 시작을 누르고 평소 자리에서 들으세요. 톤은 서브우퍼, 메인 스피커 및 룸 어쿠스틱이 겹치는 저음 범위를 꾸준히 이동합니다.',
  },
  {
    name: '드롭아웃 또는 전환 듣기',
    text: '저음이 약해지거나, 사라지거나, 위치가 바뀌거나, 서브우퍼와 메인 스피커 사이에서 불균일하게 들리는 순간에 주의를 기울이세요.',
  },
  {
    name: '주파수 표시하기',
    text: '첫 번째 명확한 문제 지점에서 드롭아웃 표시를 누르세요. 해당 주파수를 크로스오버, 위상, 배치 또는 룸 보정 조정을 위한 단서로 사용하세요.',
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
  step: howToData.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<SubwooferCrossoverTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '스피커와 서브우퍼 사이의 저음 갭 찾기', level: 2 },
    {
      type: 'paragraph',
      html: '서브우퍼는 구석에 있는 별도의 상자처럼 들리지 않아야 합니다. 노트가 메인 스피커에서 서브로 이동할 때 저음은 균일하게 유지되어야 합니다. 이 테스트는 <strong>200Hz에서 10Hz</strong>까지 스위프하므로 전환이 약해지거나, 웅웅거리거나, 위치를 알 수 있게 되거나, 조용해지는 정확한 영역을 들을 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['들리는 것', '일반적으로 의미하는 것', '먼저 시도할 것'],
      rows: [
        ['70-100Hz 부근에서 저음이 사라짐', '서브우퍼와 스피커가 크로스오버 근처에서 서로 상쇄될 수 있습니다.', '위상을 반전하고, 거리/지연을 조정한 다음 스위프를 반복하세요.'],
        ['좁은 대역에서 저음이 웅웅거림', '룸 모드 또는 스피커와 서브우퍼 간 과도한 중첩.', '크로스오버를 약간 낮추거나 서브우퍼/청취 위치를 이동하세요.'],
        ['저음이 서브우퍼 위치에서 들리는 것 같음', '크로스오버가 너무 높거나 서브우퍼 레벨이 너무 높을 수 있습니다.', '80Hz 이하를 시도하고 서브우퍼 게인을 줄이세요.'],
        ['30-40Hz 이하에서 깊은 저음이 사라짐', '많은 서브, 특히 컴팩트 모델의 정상적인 확장 한계.', '물리적일 수 있는 문제를 추적하기 전에 서브우퍼 사양을 확인하세요.'],
      ],
    },
    { type: 'title', text: '드롭아웃 주파수가 알려주는 것', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '표시된 주파수를 튜닝 단서로 사용하세요',
      badge: '청취 단서',
      html: '<p>표시된 지점이 AVR 크로스오버에 가까우면 문제는 통합일 가능성이 높습니다: 위상, 거리, 극성, 레벨 또는 필터의 기울기. 표시된 지점이 훨씬 낮으면 서브우퍼가 출력 한계에 도달하는 것을 듣고 있을 수 있습니다. 머리를 움직일 때 문제가 크게 변하면 룸이 결과를 지배하는 것입니다.</p>',
    },
    {
      type: 'title',
      text: '일반적인 크로스오버 범위',
      level: 3,
    },
    {
      type: 'table',
      headers: ['스피커 유형', '일반적인 크로스오버 시작점', '이유'],
      rows: [
        ['소형 새틀라이트', '100-150 Hz', '작은 인클로저는 일반적으로 시어터 레벨에서 깨끗한 상부 저음을 재생할 수 없습니다.'],
        ['북쉘프 스피커', '70-100 Hz', '서브의 위치를 알 수 없게 하면서 깨끗한 전환을 위한 충분한 저음이 있는 경우가 많습니다.'],
        ['플로어스탠딩 스피커', '50-80 Hz', '더 큰 우퍼가 더 많은 미드베이스를 처리할 수 있지만, 룸은 여전히 서브우퍼 베이스 관리를 선호할 수 있습니다.'],
        ['THX 스타일 설정', '80 Hz', '많은 시스템에서 잘 작동하고 깊은 저음을 서브로 라우팅하는 실용적인 기본값입니다.'],
      ],
    },
    { type: 'title', text: '크로스오버 문제인가요, 룸 문제인가요?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '크로스오버 또는 위상 문제',
          description: '약점이 크로스오버 주파수 근처에 나타나며 위상, 극성, 거리 또는 크로스오버 설정을 변경한 후 개선됩니다.',
          points: ['일반적으로 같은 좌석에서 반복 가능합니다.', '종종 60-120Hz 부근에 집중됩니다.'],
        },
        {
          title: '룸 캔슬레이션',
          description: '약점은 머리를 움직이거나, 좌석을 바꾸거나, 서브우퍼를 짧은 거리 이동할 때 극적으로 변합니다.',
          points: ['위치에 매우 의존적입니다.', '종종 설정보다 배치로 더 많이 해결됩니다.'],
        },
      ],
    },
    {
      type: 'tip',
      title: '테스트를 실행하는 가장 좋은 방법',
      html: '실제로 영화를 보거나 음악을 듣는 곳에 앉으세요. 서브우퍼 옆에 서 있지 마세요. 캐비닛 옆에서 좋게 들리는 크로스오버도 소파에서는 여전히 갭을 남길 수 있습니다.',
    },
    {
      type: 'summary',
      title: '스위프 후 변경할 사항',
      items: [
        '갭이 현재 크로스오버에 가까우면 10Hz 변경을 시도하고 스위프를 반복하세요.',
        '약한 대역이 크로스오버 근처에 있으면 서브우퍼 위상 스위치 또는 지연 설정을 시도하세요.',
        '저음이 한 좌석에서 강해지고 다른 좌석에서 사라지면 모든 AVR 설정을 변경하기 전에 서브우퍼를 이동하세요.',
        '배치 또는 크로스오버 변경 후, 리시버가 새 설정을 측정하도록 룸 보정을 다시 실행하세요.',
        '표시된 주파수를 튜닝 가이드로 사용하고, 음악, 영화 및 익숙한 베이스 라인으로 확인하세요.',
      ],
    },
  ],
  ui: {
    sweepLabel: '서브우퍼 저주파 스위프',
    currentFrequency: '현재 주파수',
    targetFrequency: '목표',
    elapsed: '경과',
    statusReady: '저역 스위프 준비 완료',
    statusRunning: '하향 스위프 중',
    statusStopped: '스위프 정지됨',
    start: '스위프 시작',
    stop: '스위프 정지',
    markDropout: '드롭아웃 표시',
    reset: '초기화',
    volume: '출력 레벨',
    duration: '스위프 시간',
    safeStart: '낮은 볼륨으로 시작한 다음, 저음이 들리기 어려워지는 첫 번째 주파수를 표시하세요.',
    roomNote: '룸 위치와 위상은 결과를 극적으로 바꿀 수 있습니다.',
    dropoutLabel: '표시된 지점',
    dropoutEmpty: '아직 표시되지 않음',
    crossoverEstimate: '추정 드롭아웃 지점',
  },
};
