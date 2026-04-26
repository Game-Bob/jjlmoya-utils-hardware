import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dead-pixel-tester';
const title = '불량 화소 테스트 및 화면 복구 도구';
const description =
  '모니터에 데드 픽셀이나 스턱 픽셀이 있는지 확인하고 온라인 고주파 스트로브 도구로 복구를 시도해 보세요.';

const faqData = [
  {
    question: '데드 픽셀과 스턱 픽셀의 차이점은 무엇인가요?',
    answer:
      '데드 픽셀(Dead Pixel)은 전력이 공급되지 않아(트랜지스터 고장) 영구적으로 검은 상태입니다. 스턱 픽셀(Stuck Pixel)은 대개 밝은 색상(빨강, 초록 또는 파랑)으로 나타나며, 빠른 스트로브 자극으로 되살릴 수 있는 경우가 많습니다.',
  },
  {
    question: '복구 도구(Strobe)는 어떻게 작동하나요?',
    answer:
      '당사의 도구는 기본 색상을 고속으로 빠르게 깜빡이게 합니다. 이는 픽셀의 고정된 액정을 강제로 움직여 잠금을 해제하도록 유도합니다. 10분에서 30분 정도 실행하는 것을 권장합니다.',
  },
  {
    question: '온도 때문에 불량 화소가 생길 수 있나요?',
    answer:
      '네, 극한의 온도는 패널에 영향을 줄 수 있습니다. 하지만 가장 흔한 원인은 제조 공정상의 결함이나 액정 전기 접점을 손상시키는 물리적 충격입니다.',
  },
  {
    question: '불량 화소 몇 개부터 보증 수리가 가능한가요?',
    answer:
      '제조사와 ISO 9241-307 표준에 따라 다릅니다. 일반적으로 Class 1 패널의 경우 밝은 픽셀 2~3개까지는 "정상"으로 간주되기도 하지만, Class 0 패널은 단 한 개의 불량도 허용하지 않습니다.',
  },
];

const howToData = [
  {
    name: '화면 청소하기',
    text: '시작하기 전에 먼지를 불량 화소로 오해하지 않도록 마이크로파이버 천으로 모니터를 깨끗이 닦으세요.',
  },
  {
    name: '전체 화면 모드 전환',
    text: '브라우저 인터페이스가 결함 탐색을 방해하지 않도록 F11 키나 전체 화면 버튼을 누르세요.',
  },
  {
    name: '색상 전환하기',
    text: '검정, 흰색, 빨강, 초록, 파랑 배경을 번갈아 확인하세요. 배경색과 일치하지 않는 지점이 있는지 찾습니다.',
  },
  {
    name: '복구 사이클 시작',
    text: '밝은 지점을 발견했다면 그 위치에 스트로브 도구를 놓고 최소 20분간 작동시키세요.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<PixelesPantallaUI> = {
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
      text: '완벽 가이드: 데드 픽셀, 스턱 픽셀 및 복구 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '화면에 색상이 변하지 않는 이상한 점이 있나요? 패널 결함일 수 있습니다. 이 도구는 모니터에 <strong>데드 픽셀</strong>이나 <strong>스턱 픽셀</strong>이 있는지 진단하고 복구를 시도할 수 있는 기능을 제공합니다.',
    },
    {
      type: 'title',
      text: '데드 픽셀과 스턱 픽셀의 차이점은 무엇인가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '현대 모니터에는 두 가지 주요 화소 결함 유형이 있으며, 각각의 특성과 해결 방법이 다릅니다.',
    },
    {
      type: 'title',
      text: '스턱 픽셀(Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '가장 흔한 결함입니다. 하나 이상의 서브 픽셀(빨강, 초록, 파랑)이 "켜짐" 상태로 고정될 때 발생합니다. <strong>증상:</strong> 어두운 배경에서 영구적으로 밝은 색상의 점(빨강, 초록, 파랑 또는 흰색)이 보입니다. <strong>대개 복구가 가능합니다.</strong> 액정 자체는 여전히 반응하며 특정 편광 상태에 "잠겨" 있는 것뿐입니다. 당사의 스트로브 복구 도구는 빠른 전압 자극을 통해 이 잠금을 해제하려고 시도합니다.',
    },
    {
      type: 'title',
      text: '데드 픽셀(Dead Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '픽셀을 제어하는 트랜지스터가 완전히 고장 나 빛을 통과시키지 못할 때 발생합니다. <strong>증상:</strong> 영구적인 검은 점으로, 특히 밝거나 하얀 배경에서 잘 보입니다. <strong>복구가 어렵습니다(대개 영구적임).</strong> 손상이 하드웨어 수준(회로 소손)에서 발생한 것이기 때문입니다. 전기적 자극으로는 고칠 수 없으며 대개 패널 교체가 필요합니다.',
    },
    {
      type: 'title',
      text: '스트로브 복구 도구는 어떻게 작동하나요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '"픽셀 복구" 기능은 <strong>Pixel Exercising</strong>(픽셀 운동)이라고 알려진 기술을 사용합니다. 해당 영역에 고주파 무작위 노이즈 패턴(빠른 색상 깜빡임)을 생성합니다.',
    },
    {
      type: 'title',
      text: '메커니즘: 액정과 전압',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'LCD 모니터는 인가된 전압에 따라 투명도가 변하는 액정을 사용합니다. 서브 픽셀이 고정되었다는 것은 결정이 특정 편광 상태에서 "얼어붙어" 있음을 의미합니다. 빠른 전압 변화(빠른 기본 색상 전환을 통해 달성)를 통해 결정에 "운동"을 주어 상태 변화를 강제하려고 시도합니다.',
    },
    {
      type: 'title',
      text: '권장 사용법',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>해당 영역에 도구를 최소 <strong>10~20분</strong> 동안 실행하는 것이 좋습니다.</li><li>효과가 없다면 더 긴 시간(최대 1시간) 동안 시도하거나, 마이크로파이버 천을 대고 픽셀 위를 아주 살짝 누르는 방법도 있습니다(위험 부담은 사용자에게 있습니다).</li><li>경우에 따라 스트로브를 작동하기 전에 헤어드라이어(저온 설정)로 모니터를 살짝 데워주면 효과가 좋아질 수 있습니다.</li></ul>',
    },
    {
      type: 'title',
      text: '간질 주의 경고',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '복구 모드는 고속으로 빠르게 깜빡이는 빛을 사용합니다. 광과민성 간질이 있거나 빛에 민감한 경우 <strong>이 기능을 사용하지 마세요</strong>. 깜빡이는 패턴에 노출되면 민감한 사람에게 발작을 일으킬 수 있습니다.',
    },
    {
      type: 'title',
      text: '보증 서비스나 교체를 신청해야 할 때',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '결함이 있는 픽셀(특히 여러 개의 데드 픽셀)을 확인한 경우 이 테스트 결과를 보증 청구의 증거로 사용할 수 있습니다. 많은 제조사에서 ISO 9241-307(Class 1) 표준에 따라 2~3개 이상의 밝은 픽셀이나 1개의 데드 픽셀을 교체 가능한 제조 결함으로 간주합니다.',
    },
    {
      type: 'title',
      text: '불량 화소 표준의 역사',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '수십 년 동안 LCD 모니터는 제조 공정의 복잡성으로 인해 화소 결함 문제를 겪어왔습니다. Full HD 패널(1920×1080)에는 6,220,800개의 픽셀(18,662,400개의 서브 픽셀)이 포함되어 있습니다. 통계적으로 결함은 피할 수 없는 부분입니다. 그래서 모니터 등급에 따라 "허용 가능한 불량 화소"를 정의하는 ISO 9241-307과 같은 표준이 존재합니다.',
    },
  ],
  ui: {
    badge: '화면 유틸리티',
    title: '데드 픽셀 또는 스턱 픽셀?',
    description:
      '순수 원색 배경으로 모니터 상태를 확인하고 고주파 자극 도구로 스턱 픽셀 복구를 시도해 보세요.',
    btnStartTest: '테스트 시작',
    btnStartFix: '픽셀 복구',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: '전체 화면',
    kbdSpace: 'Space',
    kbdSpaceLabel: '색상 변경',
    kbdEsc: 'ESC',
    kbdEscLabel: '종료',
    colorBlack: '검정',
    colorWhite: '흰색',
    colorRed: '빨강',
    colorGreen: '초록',
    colorBlue: '파랑',
    btnToggleFixer: '복구 도구 열기 (Strobe)',
    btnExit: '종료 (ESC)',
  },
};
