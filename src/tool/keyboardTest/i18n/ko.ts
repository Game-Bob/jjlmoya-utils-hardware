import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';

const slug = 'keyboard-test';
const title = '온라인 키보드 테스트 및 고스트 감지기';
const description = '키보드에 고스트 현상이나 키 씹힘 현상이 있는지 확인하세요. 실시간 키 시각화 및 무한 동시 입력(N-Key Rollover) 카운터.';

const faqData = [
  {
    question: '키보드 고스트(Ghosting) 현상이란 무엇인가요?',
    answer: '여러 키를 동시에 눌렀을 때 컴퓨터가 그중 일부를 인식하지 못하는 결함을 말합니다. 이는 특정 조합을 처리할 수 없는 키보드 내부 전기 회로망(matrix)의 한계 때문입니다.',
  },
  {
    question: '무한 동시 입력(NKRO, N-Key Rollover)이란 무엇인가요?',
    answer: 'NKRO는 사용자가 동시에 누를 수 있는 모든 키를 오류 없이 인식할 수 있음을 의미합니다. 주로 고급 기계식 키보드나 게이밍 키보드에서 볼 수 있는 기능입니다.',
  },
  {
    question: '왜 3개의 키를 한꺼번에 누르면 실패하나요?',
    answer: '대부분의 저렴한 사무용 키보드는 2개 또는 3개 키 동시 입력까지만 지원합니다. 이는 일반적인 타이핑에는 충분하지만, 집중적인 게임이나 복잡한 단축키 사용에는 부족합니다.',
  },
  {
    question: '응답하지 않는 키를 고칠 수 있나요?',
    answer: '테스트에서 키 눌림이 감지되지 않는다면 스위치 아래의 먼지, 전기 접점 불량 또는 케이블 손상일 수 있습니다. 포기하기 전에 에어 스프레이 등으로 키보드를 청소해 보세요.',
  },
];

const howToData = [
  {
    name: '시각화 화면 포커스',
    text: '페이지의 아무 곳이나 클릭하여 브라우저가 포커스를 유지하고 하드웨어 키 입력을 캡처할 수 있도록 하세요.',
  },
  {
    name: '응답 테스트 실행',
    text: '키보드의 각 키를 하나씩 눌러보세요. 정상적으로 작동하면 화면의 해당 키가 녹색으로 켜집니다.',
  },
  {
    name: '고스트 현상 확인',
    text: '게임에서 자주 사용하는 키들(W, A, S, D, Space, Shift)을 한꺼번에 눌러 고스트 현상이 생기는지 확인하세요.',
  },
  {
    name: '최대 동시 입력 확인',
    text: '양손으로 최대한 많은 키를 동시에 눌러보고 최대 동시 입력 키 카운터를 확인하세요.',
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

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '기술 참조',
  bibliography: [
    {
      name: 'USB Keyboard/Keypad Page - HID Usage Tables',
      url: 'https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf',
    },
    {
      name: 'Mechanical vs Membrane Keyboards - Technical Deep Dive',
      url: 'https://deskthority.net/wiki/Rollover',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '온라인 키보드 테스트: 고스트 및 동시 입력 한계 자가 진단',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '키보드 진단을 위한 대화형 도구입니다. 고스트 현상, 씹힘 현상 또는 동시 입력 제한을 확인하세요. 모든 키보드 유형을 지원하며 시각적으로 명확한 피드백을 제공합니다.',
    },
    {
      type: 'title',
      text: '고스트 현상이란?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '고스트 현상은 특정 키 조합을 누를 때 누르지 않은 환상(phantom) 키가 입력되는 현상을 말합니다. 이는 내부 회로망의 한계로 인해 발생합니다.',
    },
    {
      type: 'title',
      text: '무한 동시 입력 및 최대 입력 한계',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> 누른 모든 키를 동시에 인식합니다. <strong>6KRO:</strong> 구형 USB 표준의 한계입니다. <strong>2-3KRO:</strong> 저가형 키보드에서 흔하며 일반 타이핑에 적합합니다.',
    },
    {
      type: 'title',
      text: '기계식 vs 멤버레인 키보드',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '기계식 키보드는 다이오드가 있는 개별 스위치를 사용하여 고스트 현상을 제거합니다. 멤브레인 키보드는 전기 신호 통로를 공유하므로 동시 입력 시 오류가 발생할 수 있습니다.',
    },
  ],
  ui: {
    badge: '입력 테스트',
    title: '키보드 테스트 및 고스트 감지기',
    description: '동시 입력을 확인하고 불량 키를 찾아보세요.',
    simultaneousLabel: '동시 입력',
    eventLogLabel: '이벤트 로그',
    resetBtn: '초기화',
  },
};
