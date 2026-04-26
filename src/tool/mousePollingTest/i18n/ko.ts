import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-polling-rate-test';
const title = '온라인 마우스 폴링 레이트 테스트';
const description =
  '마우스의 실제 Hz를 확인하세요. 당사의 전문 도구를 사용하여 사용자의 게이밍 마우스가 1000Hz 이상으로 작동하는지 검증할 수 있습니다.';

const faqData = [
  {
    question: '마우스 폴링 레이트(Polling Rate)란 무엇인가요?',
    answer:
      '마우스가 자신의 위치를 컴퓨터에 보고하는 빈도를 의미하며, Hz 단위로 측정됩니다. 1000Hz 폴링 레이트는 마우스가 1밀리초마다 데이터를 전송하여 훨씬 부드러운 움직임을 제공함을 의미합니다.',
  },
  {
    question: '테스트 결과가 왜 항상 1000Hz에 도달하지 않나요?',
    answer:
      '브라우저는 마우스가 움직일 때만 폴링 레이트를 측정할 수 있습니다. 천천히 움직이거나 CPU 부하가 높은 경우 측정값이 변동될 수 있습니다. 실제 최대 피크를 확인하려면 마우스를 빠른 원형으로 움직여보세요.',
  },
  {
    question: '폴링 레이트는 높을수록 좋은가요?',
    answer:
      '일반적으로 게임용(1000Hz 이상)으로는 지연 시간을 줄여주기 때문에 좋습니다. 하지만 4000Hz나 8000Hz와 같은 초고속 레이트는 CPU 자원을 많이 소모하며, 모든 게임이 이에 최적화된 것은 아닙니다.',
  },
  {
    question: '모니터 주사율이 마우스에 어떤 영향을 미치나요?',
    answer:
      '144Hz 또는 240Hz 모니터를 사용하는 경우 낮은 폴링 레이트(125Hz)에서는 포인터가 끊겨 보일 수 있습니다. 고주사율 모니터의 경우 최소 500Hz 또는 1000Hz를 사용하는 것이 필수적입니다.',
  },
];

const howToData = [
  {
    name: '테스트 영역 준비',
    text: '도구의 캡처 영역 안에 커서를 놓으세요.',
  },
  {
    name: '마우스를 빠르게 이동',
    text: '빠르고 넓게 원을 그리듯 움직이세요. 도구는 하드웨어에서 보낸 각 mousemove 이벤트 사이의 간격을 계산합니다.',
  },
  {
    name: '안정성 그래프 확인',
    text: 'Hz 라인이 일정한지 또는 갑작스러운 하락이 있는지 확인하세요. 이는 무선 마우스의 간섭이나 CPU 문제를 나타낼 수 있습니다.',
  },
  {
    name: '응답 시간 분석',
    text: '밀리초 단위의 평균 지연(Delay)을 확인하세요. 좋은 게이밍 마우스는 평균 1ms에 가까운 지연 시간을 유지해야 합니다.',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '폴링 레이트에 대한 결정적 가이드', level: 2 },
    {
      type: 'paragraph',
      html: '마우스패드 위에서 마우스를 물리적으로 움직일 때, 그 아날로그적인 움직임은 컴퓨터가 이해할 수 있는 디지털 신호로 변환되어야 합니다. <strong>폴링 레이트(Polling Rate)</strong>는 마우스가 PC에 자신의 위치를 "보고"하는 빈도입니다. Hz(헤르츠) 단위로 측정됩니다.',
    },
    { type: 'title', text: '폴링 레이트 단계 및 용도', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> -마우스가 8밀리초마다 보고합니다. 사무용으로는 괜찮지만 144Hz 모니터에서는 끊겨 보일 수 있습니다. <strong>1000 Hz</strong> -게이밍의 표준: 1ms마다 보고합니다. 눈에 띄는 지연 없는 부드러운 움직임을 제공합니다. <strong>8000 Hz</strong> -최첨단 기술(Razer, Logitech). 0.125ms마다 보고하지만 고성능 CPU가 필요합니다.',
    },
    { type: 'title', text: 'Hz 수치가 왜 변동하나요?', level: 3 },
    {
      type: 'paragraph',
      html: '완전히 정상입니다. 대부분의 현대적인 마우스는 전력 절약을 위해 가변 폴링 레이트를 사용합니다. 마우스를 천천히 움직이면 새로운 데이터가 적기 때문에 보고 횟수도 줄어듭니다. 빠르고 지속적인 움직임만이 센서를 실제 최대 피크까지 끌어올릴 수 있습니다.',
    },
    { type: 'title', text: '폴링 레이트 vs DPI: 흔한 혼동', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong>는 감도입니다. 마우스를 1인치 움직일 때 커서가 몇 픽셀을 이동하는지를 나타냅니다. <strong>Hz (폴링 레이트)</strong>는 업데이트 주사율입니다. 그 움직임이 얼마나 부드럽고 실시간으로 보고되는지를 나타냅니다. 두 파라미터는 독립적이며 서로 보완적입니다.',
    },
  ],
  ui: {
    badge: '마우스 테스트',
    title: '폴링 레이트 측정기',
    description: 'Hz를 측정하기 위해 마우스를 빠른 원형으로 움직이세요.',
    labelAvg: '평균',
    labelPeak: '최대',
    placeholder: '마우스를 여기서 움직이세요',
  },
};
