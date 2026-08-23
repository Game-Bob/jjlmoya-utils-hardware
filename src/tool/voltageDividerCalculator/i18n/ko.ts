import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'voltage-divider-calculator';
const title = '전압 분배기 계산기';
const description = '무부하 출력 전압, 소비 전류, 각 저항의 소비 전력 및 목표 전압을 얻기 위해 필요한 하단 저항값을 계산합니다.';

const faqData = [
  { question: '전압 분배기 계산기는 어떤 기능을 하나요?', answer: '직렬 연결된 두 저항의 무부하 출력 전압을 계산합니다. 공급 전압과 저항값 R1, R2를 입력하여 Vout을 구하거나, 목표 전압을 입력하여 R2를 계산할 수 있습니다.' },
  { question: '출력 전압은 어떻게 계산하나요?', answer: '공식 Vout = Vs x R2 / (R1 + R2)를 사용합니다. 여기서 R1은 전원 측, R2는 그라운드 측 저항입니다.' },
  { question: '목표 전압에 필요한 저항값은 어떻게 구하나요?', answer: 'R1값을 알고 있다면 R2 = R1 x Vtarget / (Vs - Vtarget) 공식을 적용합니다. 목표 전압은 0보다 크고 공급 전압보다 낮아야 합니다.' },
  { question: '전압 분배기는 전류를 얼마나 소비하나요?', answer: '분배 회로 전류는 I = Vs / (R1 + R2)이며, 부하 연결 유무와 관계없이 소스로부터 지속적으로 전류를 소모합니다.' },
  { question: '저항의 전력 소비량은 어떻게 확인하나요?', answer: '각 저항에서 소모되는 전력은 P = I² x R 입니다. 계산된 값보다 정격 전력이 충분히 높은 저항을 선택해야 합니다.' },
  { question: '전압 분배기를 전원 공급 장치로 사용할 수 있나요?', answer: '일반적으로 불가능합니다. Vout에 부하가 연결되면 실효 저항이 낮아져 출력 전압이 떨어집니다. 전류를 공급하려면 버퍼나 전압 리귤레이터를 사용하세요.' },
];

const howToData = [
  { name: '계산 모드 선택', text: '두 저항값을 모두 알고 있다면 「Vout 예측」을, 목표 출력 전압이 정해져 있다면 「R2 구하기」를 선택합니다.' },
  { name: '공급 전압 및 R1 입력', text: 'DC 공급 전압(V)과 상단 저항 R1(Ω)을 입력합니다.' },
  { name: 'R2 또는 목표 전압 입력', text: 'Vout 예측 모드에서는 R2를 입력하고, R2 구하기 모드에서는 목표 전압을 입력합니다.' },
  { name: '결과 확인', text: '출력 전압, 회로 전류 및 각 저항의 전력 소모량을 확인합니다.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<VoltageDividerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: '전압 분배 회로 계산', level: 2 },
    { type: 'paragraph', html: '두 개의 저항을 사용한 전압 분배기는 입력 전압을 원하는 비율로 낮춥니다. 이상적인 무부하 출력 전압은 <code>Vout = Vs x R2 / (R1 + R2)</code> 입니다.' },
    { type: 'title', text: '목표 전압을 위한 저항 구하기', level: 3 },
    { type: 'paragraph', html: 'R2 구하기 모드에서는 이항된 공식 <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>을 사용합니다.' },
    { type: 'title', text: '소비 전류 및 저항 전력 소모', level: 3 },
    { type: 'paragraph', html: '회로를 흐르는 전류는 <code>I = Vs / (R1 + R2)</code>이며, 각 저항의 전력 소모는 <code>P = I² x R</code>입니다.' },
    { type: 'title', text: '연결 부하에 의한 영향', level: 3 },
    { type: 'paragraph', html: '계산 결과는 부하가 없는 상태를 가정합니다. 출력단에 부하가 연결되면 합성 저항이 낮아져 출력 전압이 변동합니다.' },
    { type: 'list', items: ['목표 전압은 반드시 0V와 공급 전압 사이로 설정하세요.', 'R1과 R2의 저항 단위를 동일하게 유지하세요.', '두 저항의 허용 전력을 각각 확인하세요.', '저항 오차 및 전원 변동성을 고려하세요.', '전류 공급이 필요한 경우 버퍼 회로를 추가하세요.'] },
    { type: 'tip', title: '전원용으로 사용 불가', html: '전압 분배기는 기준 전압이나 신호 감쇄용으로 적합합니다. 부하 전류가 필요한 경우 전압 리귤레이터를 사용해야 합니다.' },
  ],
  ui: {
    modeHeader: '계산 모드',
    modePredict: 'Vout 예측',
    modeTarget: 'R2 구하기',
    inputHeader: '회로 매개변수',
    supplyLabel: '공급 전압 Vs',
    topLabel: '상단 저항 R1',
    bottomLabel: '하단 저항 R2',
    targetLabel: '목표 출력 전압 Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: '전압 흐름',
    outputLabel: '출력 전압',
    currentLabel: '분배 전류',
    totalPowerLabel: '총 소비 전력',
    topPowerLabel: 'R1 소비 전력',
    bottomPowerLabel: 'R2 소비 전력',
    ratioLabel: '공급 전압 대비',
    statusNominal: '계산 완료',
    statusInvalid: '입력값을 확인하세요',
    statusTargetInvalid: '목표 전압은 공급 전압보다 낮아야 합니다',
    formulaHeader: '적용 공식',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). 점등 노드가 계산된 출력 전압을 표시합니다.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). 필요한 R2 저항값을 구합니다.',
    supplyNode: '전원 입력',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: '그라운드',
    hint: 'R1과 R2를 입력하여 Vout을 계산하세요.',
    targetHint: '0V와 Vs 사이의 목표 전압을 선택하세요.',
    note: '무부하 전압 분배 회로입니다. 부하를 연결하면 출력 전압이 변동합니다.',
  },
};
