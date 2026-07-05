import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'oled-screen-burn-in-fixer';
const title = 'OLED 화면 번인 수정기';
const description =
  '고속 RGB 색상 주기, 백색 노이즈, 필수 광과민성 경고 및 내장 타이머를 갖춘 전체 화면 OLED 번인 수정기 및 LCD 고정 픽셀 운동기를 실행합니다.';

const faqData = [
  {
    question: 'OLED 번인 수정기가 영구적인 번인을 제거할 수 있나요?',
    answer:
      '어떤 브라우저 도구도 영구적인 유기 서브픽셀 마모를 되돌릴 수 없습니다. 픽셀 운동기는 일시적인 잔상을 줄이거나 가벼운 고스트를 덜 보이게 하거나 흔적이 일시적 잔상인지 영구적 번인인지 진단하는 데 도움을 줄 수 있습니다.',
  },
  {
    question: '광과민성 간질이 있는 사람에게 안전한가요?',
    answer:
      '이 테스트는 빠르게 깜박이는 색상과 고대비 노이즈를 사용합니다. 광과민성 간질, 편두통 민감성, 발작 위험 또는 깜박이는 빛에 불편함이 있는 사람은 실행하지 마십시오.',
  },
  {
    question: 'LCD 고정 픽셀을 수리할 수 있나요?',
    answer:
      '서브픽셀 상태를 빠르게 변경하여 빨간색, 녹색, 파란색 또는 흰색으로 고정된 픽셀을 해방하는 데 도움이 될 수 있습니다. 죽은 검은 픽셀이나 물리적 패널 손상은 수리할 수 없습니다.',
  },
  {
    question: '픽셀 운동기를 얼마나 오래 실행해야 하나요?',
    answer:
      '고정 픽셀이나 가벼운 잔상에는 5~10분으로 시작하세요. 더 긴 세션은 감독해야 하며, 밝기를 적절히 유지하고 화면이 식을 시간을 두어야 합니다.',
  },
  {
    question: '왜 이 도구는 비디오 대신 캔버스를 사용하나요?',
    answer:
      '패턴이 HTML5 Canvas에서 직접 생성되므로 페이지에 무거운 비디오 파일이 필요하지 않습니다. 이로 인해 로딩이 빠르고 색상 및 노이즈 주기가 전체 화면 크기에 반응합니다.',
  },
];

const howToData = [
  {
    name: '광과민성 경고를 읽으세요',
    text: '깜박이는 빛, 고대비 패턴, 편두통 또는 발작 위험이 본인이나 주변 사람에게 영향을 줄 수 있다면 계속하지 마십시오.',
  },
  {
    name: '짧은 첫 실행을 설정하세요',
    text: '첫 번째 패스로 5~10분을 선택하고 하이브리드 모드를 선택한 다음 밝기를 편안한 수준으로 유지하세요.',
  },
  {
    name: '전체 화면 수리 시작',
    text: '경고를 확인하고 수리 시작을 누른 다음 다른 창을 화면 위로 이동하지 않고 캔버스가 RGB 색상과 노이즈를 순환하도록 둡니다.',
  },
  {
    name: '실행 후 흔적을 검사하세요',
    text: '테스트를 중지하고 중간 회색, 흰색, 검은색, 빨간색, 녹색, 파란색 화면을 표시한 다음 고스트 이미지나 고정 픽셀이 변경되었는지 비교합니다.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'OLED 번인 수정기 및 LCD 고정 픽셀 운동기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 OLED 화면 번인 수정기는 일시적인 잔상, 희미한 고스트 이미지 및 일부 LCD 고정 픽셀을 위한 전체 화면 픽셀 운동기입니다. 빨간색, 녹색, 파란색, 흰색, 검은색, 노란색 및 노이즈의 고속 패턴을 HTML5 Canvas에서 직접 생성합니다. 비디오 파일, 외부 이미지 자산, 다운로드 단계가 없습니다. 브라우저가 현재 화면 크기로 각 프레임을 그립니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '광과민성 경고',
      icon: 'mdi:alert',
      badge: '필수',
      html: '수리 패턴은 빠른 깜박임, 고대비 전환 및 백색 노이즈를 사용합니다. 광과민성 간질, 발작 위험, 편두통 민감성, 깜박이는 빛으로 인한 어지러움이 있거나 주변 사람이 영향을 받을 수 있는 경우 실행하지 마십시오. 눈의 피로, 메스꺼움, 두통 또는 불편함을 느끼면 즉시 중지하십시오.',
    },
    {
      type: 'paragraph',
      html: '이 도구는 실용적인 질문이 있을 때 유용합니다: <strong>이 흔적은 사라질 수 있는 일시적 잔상인가, 아니면 영구적인 패널 마모인가?</strong> 감독하에 짧은 실행을 하면 남아 있는 정적 UI 요소로 인한 고스트 이미지를 줄일 수 있고, 한 색상에 고정된 서브픽셀을 깨울 수 있습니다. 마모된 OLED 소재를 재구축하거나, 금이 간 층을 수리하거나, 죽은 드라이버 라인을 복원하거나, 복구를 보장할 수 없습니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: '비디오 자산 로드됨', icon: 'mdi:speedometer' },
        { value: 'RGB', label: '기본 서브픽셀 운동', icon: 'mdi:palette' },
        { value: '1-120분', label: '내장 세션 타이머', icon: 'mdi:timer-outline' },
        { value: '100%', label: '클라이언트 측 실행', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: '번인, 잔상, 고스트의 의미',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'OLED 번인',
          definition: '유기 서브픽셀의 영구적인 불균등 마모. 정적 로고, 작업 표시줄, 탐색 표시줄, 게임 HUD 등이 패널의 나머지 부분과 다르게 노화되어 눈에 보이는 형태를 남깁니다.',
        },
        {
          term: '일시적 잔상',
          definition: '정적 콘텐츠가 사라진 후 남아 있는 단기 고스트 이미지. 일반적인 혼합 콘텐츠, 보정 주기 또는 픽셀 운동 패턴으로 사라질 수 있습니다.',
        },
        {
          term: 'LCD 고정 픽셀',
          definition: '빨간색, 녹색, 파란색, 흰색 또는 기타 고정 색상으로 고정된 픽셀 또는 서브픽셀. 물리적 손상이 아니라면 빠른 상태 변경으로 해방될 수 있습니다.',
        },
        {
          term: '죽은 픽셀',
          definition: '더 이상 빛을 제대로 방출하거나 투과하지 못해 검은색으로 남아 있는 픽셀. 브라우저 픽셀 운동기는 일반적으로 진짜 죽은 픽셀을 되살릴 수 없습니다.',
        },
        {
          term: 'LCD 고스트',
          definition: '느린 픽셀 응답으로 인한 움직임 흔적. 화면 번인과는 다르지만, 사용자들은 종종 둘 다 고스트 이미지로 설명합니다.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '일시적 잔상',
          description: '일반적으로 혼합 콘텐츠, 화면 새로고침 루틴 또는 짧은 RGB 및 노이즈 세션 후에 사라집니다.',
          icon: 'mdi:history',
          highlight: true,
          points: ['정적 콘텐츠 후에 보임', '가장자리가 더 부드러운 경우가 많음', '몇 분 또는 몇 시간 내에 개선될 수 있음'],
        },
        {
          title: '영구적 번인',
          description: '휴식, 보정 주기, 다양한 콘텐츠 후에도 보이는 불균등한 OLED 마모.',
          icon: 'mdi:contrast-circle',
          points: ['장기 정적 UI와 일치', '단색에서 가장 두드러짐', '운동 후에도 사라지지 않음'],
        },
        {
          title: '고정 픽셀',
          description: '큰 고스트 이미지가 아닌 한 가지 색상에 고정된 단일 점 또는 작은 클러스터.',
          icon: 'mdi:grain',
          points: ['보통 1픽셀 너비', '빨간색, 녹색, 파란색, 흰색일 수 있음', '빠른 색상 변화에 반응할 때가 있음'],
        },
      ],
    },
    {
      type: 'title',
      text: '픽셀 운동기를 안전하게 사용하는 방법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '특히 OLED 휴대폰, OLED TV, 노트북 OLED 패널에서는 첫 실행 전에 밝기를 낮추세요.',
        '5~10분으로 시작하세요. 긴 세션 동안 디스플레이를 방치하지 마세요.',
        '영향을 받은 영역이 패널의 나머지 부분과 동일한 패턴을 받도록 전체 화면을 사용하세요.',
        '방 안의 사람들에게 깜박이는 빛에 대해 알리세요. 동의하지 않은 사람 근처에서 테스트를 실행하지 마세요.',
        '패널이 비정상적으로 따뜻해지거나, 브라우저가 심하게 버벅거리거나, 불편함을 느끼면 중지하세요.',
        '실행 후 중간 회색, 흰색, 검은색, 빨간색, 녹색, 파란색 화면을 검사하여 결과를 비교하세요.',
      ],
    },
    {
      type: 'table',
      headers: ['문제', '첫 모드', '첫 지속 시간', '밝기 지침'],
      rows: [
        ['희미한 OLED 고스트', '하이브리드 RGB + 노이즈', '5-10분', '편안한 수준, 최대 아님'],
        ['새로운 정적 로고 잔상', 'RGB 주기', '10-20분', '중간 밝기'],
        ['단일 색상 LCD 고정 픽셀', '노이즈 또는 하이브리드', '5-15분', '일반 데스크톱 밝기'],
        ['오래된 영구적 번인', '진단용 하이브리드만', '5분', '고밝기에서 장시간 실행 피하기'],
        ['죽은 검은 픽셀', '수리로 권장되지 않음', '검사만', '어떤 픽셀 운동기도 복구를 보장할 수 없음'],
      ],
    },
    {
      type: 'tip',
      title: '먼저 짧은 세션을 사용하세요',
      html: '긴 깜박임 세션이 자동으로 더 나은 것은 아닙니다. 흔적이 일시적이라면 짧은 패스 후에도 변화를 볼 수 있습니다. 합리적인 시도와 정상적인 패널 새로고침 루틴 후에도 아무 변화가 없다면, 문제는 영구적 마모 또는 하드웨어 결함일 수 있습니다.',
    },
    {
      type: 'title',
      text: 'RGB 주기, 백색 노이즈, 하이브리드 모드 선택',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '서로 다른 아티팩트는 서로 다른 패턴에 반응합니다. 빨간색 녹색 파란색 주기는 제어된 순서로 기본 서브픽셀을 운동시킵니다. 백색 노이즈는 많은 작은 영역에서 휘도를 빠르게 전환하여 고립된 고정 픽셀을 노출하고 운동시키는 데 도움이 됩니다. 하이브리드 모드는 둘을 번갈아 사용하므로 문제가 잔상인지 느린 서브픽셀인지 확실하지 않을 때 최선의 첫 선택입니다.',
    },
    {
      type: 'table',
      headers: ['모드', '기능', '최적 용도', '주의점'],
      rows: [
        ['RGB 주기', '전체 화면 기본 및 고대비 필드', 'OLED 잔상 및 색상 채널 검사', '눈에 보이는 깜박임'],
        ['백색 노이즈', '패널 전체의 무작위 흑백 노이즈', '단일 고정 픽셀 및 작은 클러스터', '더 높은 시각적 강도'],
        ['하이브리드', '색상 필드와 노이즈를 번갈아 사용', '일반 OLED 번인 수정기 워크플로우', '먼저 짧은 타이머 사용'],
      ],
    },
    {
      type: 'proscons',
      title: '온라인 픽셀 운동기: 현실적인 이점과 한계',
      items: [
        {
          pro: '소프트웨어 설치나 비디오 파일 로드 없이 브라우저에서 즉시 실행됩니다.',
          con: '영구적인 OLED 소재 마모나 물리적 패널 손상을 되돌릴 수 없습니다.',
        },
        {
          pro: '전체 화면 캔버스가 생성된 RGB 및 노이즈 프레임으로 디스플레이를 덮습니다.',
          con: '브라우저 타이밍, 장치 성능 및 전체 화면 지원이 애니메이션 일관성에 영향을 줄 수 있습니다.',
        },
        {
          pro: '제조업체 패널 유지 관리 루틴을 시도하기 전에 첫 번째 진단에 유용합니다.',
          con: '명백한 결함이 있는 새 패널에 대한 보증 서비스를 대체해서는 안 됩니다.',
        },
      ],
    },
    {
      type: 'title',
      text: 'OLED 특정 지침',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'OLED 픽셀은 자체적으로 빛을 방출합니다. 정적 요소가 여러 시간 동안 화면에 남아 있으면, 해당 요소 아래의 서브픽셀이 다른 속도로 노화될 수 있습니다. 그래서 번인은 종종 TV 채널 로고, 전화 상태 표시줄, 탐색 버튼, 게임 HUD, 스트리밍 앱 사이드바 또는 데스크톱 작업 표시줄의 모양을 따릅니다. 픽셀 운동기는 일시적 잔상을 더 빨리 사라지게 할 수 있지만, 영구적인 차등 노화는 소재 문제로 남습니다.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: '먼저 내장 패널 케어를 확인하세요',
      html: '많은 OLED TV, 모니터, 노트북 및 전화에는 픽셀 리프레시, 패널 리프레시, 로고 디밍, 화면 이동, 작업 표시줄 디밍 또는 보정 주기가 포함되어 있습니다. 특히 디스플레이가 보증 기간 중일 때는 제조업체의 지침에 따라 루틴을 사용하세요. 이 온라인 도구는 부드러운 진단 및 일시적 잔상 운동으로 간주되며, 패널 케어 펌웨어의 대체품이 아닙니다.',
    },
    {
      type: 'list',
      items: [
        '고스트 이미지가 새 것이라면, 영구적 번인이라고 가정하기 전에 디스플레이가 다양한 콘텐츠를 표시하거나 휴식하게 하세요.',
        '흔적이 오래된 정적 로고와 일치한다면, 픽셀 운동기가 완전히 제거할 가능성은 낮습니다.',
        '패널에 내장 리프레시 주기가 있다면, 제조업체가 권장하는 빈도로만 실행하세요.',
        '최대 밝기에서 테스트 패턴을 몇 시간 동안 실행하지 마세요. 열과 밝기는 마모에 기여합니다.',
        '작업 표시줄을 숨기고, 화면 보호기를 활성화하고, 정적 UI 밝기를 낮추어 재발을 방지하세요.',
      ],
    },
    {
      type: 'title',
      text: 'LCD 고정 픽셀 지침',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'LCD 패널은 OLED 패널과 같은 방식으로 번인되지 않지만, 고정 픽셀, 압력 자국, 패널 결함 및 일시적 이미지 지속성을 보일 수 있습니다. 빨간색, 녹색, 파란색, 청록색, 자홍색, 노란색 또는 흰색으로 고정된 픽셀은 올바르게 전환되지 않는 서브픽셀로 인해 발생할 수 있습니다. 보장된 온라인 수리는 없지만 빠른 변화가 도움이 될 수 있습니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '죽은 픽셀과 고정 픽셀의 비교',
      icon: 'mdi:information-outline',
      badge: '진단',
      html: '색상이 있는 점이 검은 점보다 가능성이 높습니다. 모든 테스트 색상에서 검은 픽셀은 일반적으로 죽었거나 차단된 것입니다. 일부 배경에서는 변하지만 다른 배경에서는 변하지 않는 색상 픽셀은 고정된 서브픽셀일 수 있으며 짧은 픽셀 운동 세션의 더 나은 후보입니다.',
    },
    {
      type: 'summary',
      title: '압력이나 물리적 방법을 사용하기 전에',
      items: [
        'OLED 패널, 터치스크린 또는 깨지기 쉬운 노트북 화면을 세게 누르지 마세요.',
        '날카로운 도구, 천으로 감싼 펜, 표면을 긁을 수 있는 방법을 피하세요.',
        '먼저 소프트웨어 운동을 사용한 다음, 결함이 지속되면 보증 지원을 받으세요.',
        '디스플레이가 새 제품이고 반품 정책이 아직 적용된다면 매크로 사진으로 결함을 기록하세요.',
      ],
    },
    {
      type: 'title',
      text: '캔버스가 무거운 수리 비디오보다 나은 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '비디오 기반 번인 수정기는 인코딩된 프레임을 다운로드하고, 디코딩하고, 화면에 맞게 크기를 조정하고, 압축이 정확한 전환을 부드럽게 하지 않았기를 바라야 합니다. 이 도구는 각 프레임을 브라우저에서 직접 생성합니다. RGB 필드는 단색이고, 노이즈는 현재 캔버스 크기에 맞게 생성되며, 페이지는 로딩을 느리게 하거나 PageSpeed를 낮출 수 있는 대용량 미디어 파일을 피합니다.',
    },
    {
      type: 'list',
      items: [
        '외부 비디오 파일이 없으므로 첫 렌더링이 더 빠르고 네트워크 의존성이 줄어듭니다.',
        '캔버스 출력이 비디오 해상도에 제한되지 않고 전체 화면 표면으로 크기가 조정됩니다.',
        '타이머가 비디오를 무한 반복하는 대신 수리를 자동으로 중지할 수 있습니다.',
        '모드, 속도, 지속 시간, 강도를 다른 자산 로드 없이 변경할 수 있습니다.',
      ],
    },
    {
      type: 'message',
      title: '현실적인 기대',
      ariaLabel: '번인 수정기 기대',
      html: '이 도구를 통제된 첫 번째 단계로 사용하세요: 일시적 잔상을 줄이고, 가능한 고정 픽셀을 운동시키며, 증거를 수집합니다. 흔적이 다양한 콘텐츠, 내장 패널 새로고침 루틴 및 신중한 짧은 운동 세션을 견디면, 하드웨어 또는 보증 문제로 처리하세요.',
    },
  ],
  ui: {
    safetyTitle: '깜박이는 빛 경고',
    safetyBody: '이 수리 패턴은 빠르게 단색과 고대비 노이즈를 방출합니다. 본인이나 주변 사람이 광과민성 간질, 발작, 편두통, 어지러움 또는 깜박이는 빛 민감성의 영향을 받을 수 있다면 사용하지 마세요.',
    safetyChecklist: '밝기를 적절히 유지하고, 세션을 감독하며, 불편함을 느끼면 즉시 중지하세요.',
    safetyConfirm: '광과민성 위험을 이해하며 수리 버튼을 활성화하고 싶습니다.',
    safetyContinue: '설정으로 계속',
    startRepair: '수리 시작 (전체 화면)',
    controlsLabel: 'OLED 화면 수리 컨트롤',
    modeLabel: '패턴 모드',
    modeCycle: 'RGB 주기',
    modeNoise: '백색 노이즈',
    modeHybrid: '하이브리드',
    modeCycleDescription: '잔상 및 채널 확인을 위한 단색 기본 색상.',
    modeNoiseDescription: '단일 고정 픽셀 및 작은 클러스터를 위한 고주파 노이즈.',
    modeHybridDescription: '최적의 첫 번째 패스: RGB 필드와 정적 텍스처를 번갈아 사용.',
    speedLabel: '주기 속도',
    durationLabel: '지속 시간',
    durationShort: '5분',
    durationStandard: '10분',
    durationDeep: '20분',
    durationShortDescription: '빠른 확인',
    durationStandardDescription: '권장',
    durationDeepDescription: '감독 실행',
    fullscreenHint: '전체 화면 OLED 번인 수리 캔버스',
    intensityLabel: '노이즈 강도',
    warningBadge: '깜박이는 콘텐츠',
  },
};
