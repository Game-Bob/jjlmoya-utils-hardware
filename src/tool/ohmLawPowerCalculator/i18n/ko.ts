import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '옴의 법칙 및 소비 전력 계산기',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '이 옴의 법칙 계산기로 무엇을 계산할 수 있나요?',
      acceptedAnswer: { '@type': 'Answer', text: '전압, 전류, 저항, 전력 중 알고 있는 두 개의 양수 값을 입력하면 나머지 두 값을 자동으로 계산합니다.' },
    },
    {
      '@type': 'Question',
      name: '계산기는 어떤 단위를 사용하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '전압은 볼트(V), 전류는 암페어(A), 저항은 옴(Ω), 전력은 와트(W)를 사용합니다.' },
    },
    {
      '@type': 'Question',
      name: '전력과 저항을 입력값으로 사용할 수 있나요?',
      acceptedAnswer: { '@type': 'Answer', text: '네. 제곱근 공식을 사용하여 전력과 저항으로부터 전압과 전류를 산출합니다.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '옴의 법칙을 이용한 전기량 계산 방법',
  step: [
    { '@type': 'HowToStep', name: '알고 있는 두 값 선택', text: '전압, 전류, 저항, 전력 중에서 이미 알고 있는 두 값을 선택합니다.' },
    { '@type': 'HowToStep', name: '측정값 입력', text: '활성화된 입력 칸에 양수 값을 입력합니다.' },
    { '@type': 'HowToStep', name: '결과 확인', text: '회로도와 표시창에 계산된 값과 적용된 공식이 표시됩니다.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: '회로의 전압 전류 저항 전력 계산', level: 2 },
  { type: 'paragraph', html: '단순 회로에서 두 개의 전기량을 알고 있다면 나머지 두 값을 구하기에 충분한 정보를 구비한 것입니다. 알고 있는 한 쌍을 입력하면 이 옴의 법칙 계산기가 볼트, 암페어, 옴, 와트 단위로 미지의 값을 구합니다.' },
  { type: 'paragraph', html: '예를 들어 12 V와 2 A를 입력하면 6 Ω과 24 W가 계산됩니다. 5 V와 10 W를 입력하면 2 A와 2.5 Ω을 얻을 수 있습니다. 저항값 확인, LED 전류 예측, 앰프 부하 전력 확인 시 유용합니다.' },
  { type: 'title', text: '어떤 옴의 법칙 공식을 사용해야 하나요', level: 3 },
  { type: 'paragraph', html: '알맞은 공식은 이용 가능한 두 측정값에 따라 달라집니다. 모두 옴의 법칙 V = I x R과 전력 공식 P = V x I의 변형입니다.' },
  { type: 'table', headers: ['알고 있는 값', '계산되는 값', '사용 공식'], rows: [
    ['전압과 전류', '저항과 전력', 'R = V / I 및 P = V x I'],
    ['전압과 저항', '전류와 전력', 'I = V / R 및 P = V² / R'],
    ['전압과 전력', '전류와 저항', 'I = P / V 및 R = V² / P'],
    ['전류와 저항', '전압과 전력', 'V = I x R 및 P = I² x R'],
    ['전류와 전력', '전압과 저항', 'V = P / I 및 R = P / I²'],
    ['저항과 전력', '전압과 전류', 'V = √(P x R) 및 I = √(P / R)'],
  ] },
  { type: 'tip', title: '소비 전력을 확인하여 안전한 부품 선택', html: '계산 결과가 24 W라면 해당 부품은 최소 그만큼의 전력을 열로 방출할 수 있어야 합니다. 항상 안전 마진을 고려하세요.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'ohm-law-power-calculator',
  title: '옴의 법칙 및 소비 전력 계산기',
  description: '알고 있는 두 값으로 전압, 전류, 저항, 전력을 구하는 옴의 법칙 계산기.',
  ui: {
    instructions: '알고 있는 두 값을 선택하여 입력하세요. 회로가 나머지 한 쌍을 SI 단위로 계산합니다.',
    knownLabel: '알고 있는 두 값 선택',
    useAsKnownLabel: '알고 있는 값으로 사용',
    voltageLabel: '전압',
    currentLabel: '전류',
    resistanceLabel: '저항',
    powerLabel: '전력',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: '회로 완성',
    resultHint: '두 개의 알려진 단자가 미지의 한 쌍을 계산합니다.',
    formulaTitle: '회로 표시창',
    formulaHint: '점등된 단자는 알려진 값입니다. 동박 패턴이 공식을 나타냅니다.',
    statusTitle: '계산 상태',
    statusEmpty: '시작하려면 두 개의 양수 값을 입력하세요.',
    statusInvalid: '알려진 두 값 모두 0보다 커야 합니다.',
    statusReady: '회로 관계 계산이 완료되었습니다.',
    presetTitle: '실제 부하에서 시작',
    presetLed: 'LED 표시등',
    presetUsb: 'USB 부하',
    presetAmplifier: '앰프 부하',
    resetLabel: '초기화',
    orbitCaption: '두 단자를 선택하여 회로를 닫으세요.',
    knownBadge: '알려짐',
    solvedBadge: '계산됨',
    unitVoltage: '볼트',
    unitCurrent: '암페어',
    unitResistance: '옴',
    unitPower: '와트',
    formulaVoltageCurrent: 'R = V / I 및 P = V x I',
    formulaVoltageResistance: 'I = V / R 및 P = V² / R',
    formulaVoltagePower: 'I = P / V 및 R = V² / P',
    formulaCurrentResistance: 'V = I x R 및 P = I² x R',
    formulaCurrentPower: 'V = P / I 및 R = P / I²',
    formulaResistancePower: 'V = √(P x R) 및 I = √(P / R)',
    seoTitle: '옴의 법칙 계산기',
  },
  seo,
  faqTitle: '옴의 법칙 자주 묻는 질문',
  faq: [
    { question: '전압과 전류를 알고 있습니다. 무엇을 얻나요?', answer: '저항과 전력을 얻습니다. 예를 들어 12 V와 2 A는 6 Ω과 24 W를 산출합니다.' },
    { question: '저항에서 소모되는 전력을 계산할 수 있나요?', answer: '네. 전압과 저항 또는 전류와 저항을 입력하면 와트 단위의 소비 전력을 계산할 수 있습니다.' },
    { question: '전력과 전압을 입력값으로 쓸 수 있나요?', answer: '네. 둘 다 입력하면 전류(I = P / V)와 저항(R = V² / P)이 산출됩니다.' },
    { question: '옴의 법칙은 모든 부품에 적용되나요?', answer: '아니요. 이 도구는 단순 옴 부품을 모델링합니다. 다이오드 등은 비선형 특성을 갖습니다.' },
  ],
  bibliographyTitle: '공식 출처',
  bibliography,
  howTo: [
    { name: '알고 있는 두 값 선택', text: '알고 있는 두 전기량을 선택합니다.' },
    { name: '양수 측정값 입력', text: '볼트, 암페어, 옴, 와트를 입력합니다.' },
    { name: '결과 확인', text: '계산된 값과 적용된 공식을 확인합니다.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
