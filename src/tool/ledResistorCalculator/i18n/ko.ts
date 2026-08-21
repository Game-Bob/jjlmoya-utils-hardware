import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-resistor-calculator';
const title = 'LED 직렬 저항 계산기';
const description = '전원, 순방향 전압, 전류로 LED 직렬 저항을 구하고 안전한 전력으로 가장 가까운 E12 또는 E24 값을 고릅니다.';

const faqData = [
  { question: '5 V 아두이노 핀의 빨간 LED에는 어떤 저항이 필요합니까?', answer: '전형적인 빨간 5 mm LED는 2.0 V, 20 mA, 5 V에서 150옴이 필요하고 저항에는 약 60 mW가 걸립니다. 125 mW 또는 250 mW 금속막이면 됩니다. 서랍의 220옴도 씁니다. 실제 Vf가 낮으면 LED가 조금 어둡고 더 안전합니다.' },
  { question: 'LED 저항은 어떻게 계산합니까?', answer: '전원에서 순방향 전압을 빼고 암페어 단위 전류로 나눕니다. 5 V에서 2 V, 20 mA 빨간 LED면 (5 - 2) / 0.02 = 150옴입니다.' },
  { question: '어떤 순방향 전압을 써야 합니까?', answer: '원하는 전류에서 데이터시트의 전형 Vf입니다. 여기 색 칩은 전형 로트이지 당신 LED가 아닙니다. 기준은 적외 1.3 V, 빨강 2.0 V, 노랑 또는 초록 2.2 V, 파랑 또는 하양 3.2 V입니다.' },
  { question: '정확한 옴 대신 E12나 E24를 보여주는 이유는?', answer: '저항은 선호 수 계열로 팝니다. E12는 약 20퍼센트, E24는 약 10퍼센트 간격입니다. 계산기는 가장 가까운 값을 고르고 동점이면 더 높은 쪽을 골라 LED를 과구동하지 않습니다.' },
  { question: '병렬 LED가 저항을 공유할 수 있습니까?', answer: '안 됩니다. Vf가 가장 낮은 LED가 거의 모든 전류를 가져가 타 버릴 수 있습니다. 직렬로 두거나 가지마다 저항을 주십시오.' },
  { question: '직렬 저항으로 부족한 때는?', answer: '1 W급, LED 스트립, 긴 차량 열, 전압이 떨어져도 안정 전류가 필요한 부하에서는 단일 저항을 피하십시오. 정전류 드라이버가 필요합니다. 저항은 단단한 레일의 표시 LED를 제한할 뿐 전류원이 아닙니다.' },
];

const howToData = [
  { name: 'LED 색을 고르십시오', text: '작업대 부품과 비슷한 다이오드를 탭합니다. 전형 Vf와 20 mA 표시 전류가 올라갑니다.' },
  { name: '레일을 고르십시오', text: '논리 핀은 Arduino 5 V 또는 3.3 V MCU, 패널은 9 V, 12 V, 24 V입니다.' },
  { name: '보드에서 부품을 읽으십시오', text: '저항이 살 값, 전력, 색띠를 보여 줍니다. LED가 다를 때만 데이터시트 값을 여십시오.' },
  { name: '납땜 전에 극성을 확인하십시오', text: '전류는 애노드로 들어가 캐소드로 접지에 나갑니다. 강하가 1 V 미만이거나 저항이 뜨거우면 데이터시트를 보십시오.' },
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

export const content: ToolLocaleContent<LedResistorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'LED 직렬 저항 계산기', level: 2 },
    { type: 'paragraph', html: '개별 LED는 전류로 움직이는 다이오드입니다. 직렬 저항이 옴의 법칙으로 그 전류를 정합니다. <code>R = (Vs - n x Vf) / If</code>. 이 계산기는 브라우저에서 풀고 E12 또는 E24에 맞추며 색띠를 그리고 두 배 여유의 전력을 말합니다.' },
    { type: 'title', text: 'Arduino 5 V 핀의 빨간 LED', level: 3 },
    { type: 'paragraph', html: '실제 검색은 "5 V 빨간 LED에 몇 옴"입니다. 전형 Vf는 20 mA에서 2.0 V이므로 <code>(5 - 2) / 0.02 = 150옴</code>이고 저항은 60 mW입니다. 150옴 125 mW 또는 250 mW를 사십시오. 서랍의 220옴도 됩니다. 전류는 약 14 mA로 떨어지고 LED는 어두워져 상태 핀에 자주 맞습니다.' },
    { type: 'table', headers: ['LED 색', '전형 Vf', '전형 If', '5 V 저항'], rows: [['적외', '1.3 V', '20 mA', '180옴'], ['빨강', '2.0 V', '20 mA', '150옴'], ['노랑 또는 초록', '2.2 V', '20 mA', '150옴'], ['파랑 또는 하양', '3.2 V', '20 mA', '91옴'], ['자외', '3.4 V', '20 mA', '82옴']] },
    { type: 'title', text: 'E12와 E24 선호값', level: 3 },
    { type: 'paragraph', html: '저항은 IEC 선호수 계열을 따릅니다. E12는 흔한 10퍼센트 세트입니다. 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82와 그 자리입니다. E24는 5퍼센트를 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75, 91로 채웁니다. 도구는 가장 가까운 값을 고르고 동점이면 더 높은 쪽을 골라 LED가 뜨겁기보다 조금 어둡게 갑니다.' },
    { type: 'title', text: '직렬 저항으로 부족한 때', level: 3 },
    { type: 'paragraph', html: '저항은 전류원이 아닙니다. 고른 전원과 Vf에 대해서만 전류를 정합니다. 병렬 LED끼리 저항을 나누지 마십시오. 가장 낮은 Vf가 전류를 가져갑니다. 1 W급, LED 스트립, 긴 12 V 차량 열에 단일 저항을 쓰지 마십시오. 정전류 드라이버가 필요합니다. 색 프리셋은 전형 로트입니다. 정격 전류의 데이터시트 Vf가 진짜입니다.' },
    { type: 'list', items: ['데이터시트가 더 허용하지 않으면 표시 LED를 10 mA에서 20 mA 근처에 두십시오.', '병렬 각 LED에 자기 저항을 주십시오.', '강하가 1 V 미만이면 작은 Vf도 전류를 크게 움직입니다.', '12 V에서는 저항이 종종 0.5 W를 원하고 125 mW 필름으로는 부족합니다.', '납땜 전에 애노드, 캐소드, 피크 전류, 전력을 확인하십시오.'] },
    { type: 'tip', title: '전형 Vf는 당신 로트가 아닙니다', html: '빨강, 파랑, 하양 칩은 5 mm 표시의 출발점입니다. 레일이 3.3 V이거나 고출력이거나 적외이면 제조사 곡선을 재거나 읽으십시오.' },
    { type: 'diagnostic', variant: 'warning', title: '저항은 전류원이 아닙니다', html: '전원이 꺼지거나 Vf가 온도로 움직이거나 여러 LED가 병렬이면 전류가 바뀝니다. 보드를 작업대 출발점으로 쓰고 그다음 재십시오.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: '빨강',
    colorOrange: '주황',
    colorYellow: '노랑',
    colorGreen: '초록',
    colorBlue: '파랑',
    colorWhite: '하양',
    colorUv: 'UV',
    supplyHeader: '레일',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3.3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: '데이터시트 Vf',
    forwardUnit: 'V',
    currentHeader: '데이터시트 If',
    currentUnit: 'mA',
    countHeader: '직렬 LED',
    seriesHeader: '선호 계열',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: '데이터시트 값',
    hideDatasheet: '데이터시트 숨기기',
    buyLabel: '부품',
    powerLabel: '전력',
    seriesShort: '계열',
    statusTight: '전압 여유가 적음',
    statusHotter: '저항이 뜨거워짐',
    statusOverdriven: '전류가 높음',
    statusNoHeadroom: '전원이 LED를 켜지 못함',
    statusInvalid: '입력을 확인',
    supplyLabel: '전원',
    resistorLabel: '저항',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: '색은 전형 Vf이며 당신 로트가 아닙니다. 병렬 LED끼리 저항을 나누지 마십시오.',
  },
};
