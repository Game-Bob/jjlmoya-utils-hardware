import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';

const slug = 'lithium-battery-health-calculator';
const title = '리튬 배터리 수명 진단 계산기';
const description =
  '충전 횟수, 전압, 온도를 바탕으로 리튬 배터리의 건강 상태(SoH)를 계산합니다. 에너지 보존 수명을 극대화하기 위한 과학적 가이드입니다.';

const faqData = [
  {
    question: '배터리의 화학적 퇴화란 무엇인가요?',
    answer:
      '충전과 방전 사이클을 반복할 때마다 리튬 셀에는 미세한 균열이 생기고 화학적 퇴적물(S.E.I.)이 쌓여 에너지 저장 용량이 줄어듭니다. 이는 피할 수 없는 과정이지만 좋은 습관을 통해 늦출 수 있습니다.',
  },
  {
    question: '왜 80%까지만 충전하는 것을 권장하나요?',
    answer:
      '리튬 배터리는 극단적인 전압(0% 및 100%)에서 더 많은 스트레스를 받습니다. 충전량을 20%에서 80% 사이로 유지하면 열과 내부 압력이 줄어들어 셀 수명을 3배까지 늘릴 수 있습니다.',
  },
  {
    question: '열이 배터리 수명에 어떤 영향을 미치나요?',
    answer:
      '열은 배터리의 최대 적입니다. 최적 주변 온도(25도)보다 10도 올라갈 때마다 화학적 퇴화 속도는 대략 두 배로 빨라집니다.',
  },
  {
    question: '전체 충전 사이클이란 무엇인가요?',
    answer:
      '사이클은 배터리 용량의 100%를 사용하는 것을 의미하며, 한 번에 다 쓸 필요는 없습니다. 오늘 50%를 쓰고 충전한 뒤 내일 50%를 쓰면 1 전체 사이클을 완료한 것입니다.',
  },
];

const howToData = [
  {
    name: '원래 용량 확인하기',
    text: '장치 상자나 제조사 웹사이트에서 배터리가 새 제품이었을 때의 용량(mAh)을 확인하세요.',
  },
  {
    name: '현재 사이클 확인하기',
    text: '많은 운영체제(iOS 또는 안드로이드 14 등)에서 배터리의 누적 충전 사이클을 확인할 수 있습니다.',
  },
  {
    name: '기술 데이터 입력하기',
    text: '현재 전압, 사이클, 온도를 조정하여 당사의 계산 엔진이 SoH를 추정할 수 있게 하세요.',
  },
  {
    name: '진단 결과 분석하기',
    text: '수명 백분율을 확인하세요. 80% 미만이라면 성능 저하나 예기치 않은 종료 현상이 나타나기 시작할 수 있습니다.',
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

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'Journal of Power Sources',
      url: 'https://www.sciencedirect.com/journal/journal-of-power-sources',
    },
    {
      name: 'IEEE Xplore — Lithium-Ion Battery Life Prediction',
      url: 'https://ieeexplore.ieee.org/abstract/document/11090151',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '시간의 화학: 리튬 배터리가 노화되는 이유', level: 2 },
    {
      type: 'paragraph',
      html: '리튬 이온 배터리는 고정된 에너지 상자가 아니라 제조 순간부터 끊임없이 퇴화하는 역동적인 화학 생태계입니다. 모든 충방전 사이클, 온도 변화, 극단적 전압 상태에서의 시간은 이온 흐름을 방해하는 부산물을 생성합니다.',
    },
    { type: 'title', text: '주요 퇴화 메커니즘', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>SEI 층:</strong> 고체 전해질 계면이 시간이 지남에 따라 성장하여 활성 리튬을 소비하고 내부 저항을 높입니다. <strong>전해질 산화:</strong> 4.1V 이상의 전압은 산화를 가속화하여 배터리 스웰링(부풀음) 현상을 일으킬 수 있습니다. <strong>리튬 플레이팅:</strong> 저온 충전 시 리튬이 금속 형태로 증착되어 분리막을 뚫을 수 있는 덴드라이트를 형성합니다.',
    },
    { type: 'title', text: '100% 충전의 오해: 밤샘 충전이 실수인 이유', level: 3 },
    {
      type: 'paragraph',
      html: '리튬 이온에게 100% 충전 상태(4.2V)는 높은 스트레스 상태입니다. 연구에 따르면 기기 충전량을 <strong>20%에서 80%</strong> 사이로 유지할 때 사이클 수명이 2~3배 늘어납니다. 또한 25°C보다 10°C 올라갈 때마다 화학적 퇴화 속도는 거의 두 배씩 빨라집니다.',
    },
    { type: 'title', text: '에너지 생존 프로토콜', level: 3 },
    {
      type: 'paragraph',
      html: '0°C 이하에서는 절대 배터리를 충전하지 마세요. 리튬이 음극에 증착되어 영구적인 손상을 입힙니다. 급속 충전은 국부적인 열과 기계적 스트레스를 유발하므로 꼭 필요한 경우에만 사용하세요. 장기 보관 시에는 배터리를 50% 수준으로 유지하여 서늘한 곳에 두십시오.',
    },
  ],
  ui: {
    badge: '리튬 이온 배터리',
    title: '배터리 수명 진단기',
    description: '리튬 이온 셀을 위한 기술적 퇴화 진단.',
    paramsTitle: '셀 매개변수',
    voltageLabel: '현재 전압',
    cyclesLabel: '충전 사이클',
    tempLabel: '온도',
    voltageHint: '공칭 범위: 3.0V(방전) ~ 4.2V(완충).',
    labelUsefulLife: '예상 수명',
    yearsPrefix: '약',
    yearsSuffix: '년',
    metricThermalStress: '열 스트레스',
    metricVoltageStress: '전압 스트레스',
    metricLithiumPlating: '리튬 플레이팅',
    statusExcelente: '최상 상태',
    statusBueno: '양호 상태',
    statusRegular: '보통 상태',
    statusCritico: '교체 권장',
    indicatorTempNormal: '정상',
    indicatorTempCritical: '위험',
    indicatorVoltageHigh: '높음',
    indicatorVoltageLow: '낮음',
    indicatorPlatingRisk: '위험 높음',
    indicatorPlatingOk: '정상',
    recTemp: '전해질 산화를 방지하기 위해 주변 온도를 낮추거나 통풍을 개선하십시오.',
    recVoltageHigh: '배터리를 100% 충전 상태(4.2V)로 오래 방치하지 마세요.',
    recVoltageLow: '완전 방전을 피하세요. 20%에서 80% 사이의 사이클은 배터리 수명을 두 배로 늘립니다.',
    recSohLow: '용량이 최적 표준 아래로 떨어졌습니다. 사용 시간이 부족하다면 교체를 고려하십시오.',
    recDefault: '현재 습관을 유지하세요. 배터리가 이상적인 작동 범위 내에 있습니다.',
  },
};
