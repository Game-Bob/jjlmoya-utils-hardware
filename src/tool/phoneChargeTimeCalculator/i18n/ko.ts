import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: '배터리 용량', capacityUnit: 'mAh', capacityHint: '휴대폰 사양에 표시된 값을 사용하세요.',
  currentLabel: '현재 충전량', targetLabel: '목표 충전량', percentUnit: '%', powerLabel: '충전기 출력', powerUnit: 'W',
  efficiencyLabel: '예상 효율', efficiencyUnit: '%', efficiencyHint: '변환 및 발열 손실을 포함합니다.',
  statusEmpty: '휴대폰과 충전기 정보를 입력하세요.', statusReady: '입력하는 동안 업데이트됩니다.', statusError: '표시된 값을 확인하세요.',
  resultTitle: '목표까지 예상 시간', energyLabel: '남은 필요 에너지', energyUnit: 'Wh', fromCurrentCharge: '현재 충전량부터', startNowLabel: '지금 시작하면 도달',
  scenarioTitle: '충전기 기준 시나리오', scenarioAt: '같은 휴대폰과 충전 범위', assumptionsTitle: '가정',
  assumptionsText: '배터리 공칭 전압 {voltage} V, 효율 {efficiency}%, 70%를 넘는 목표에 약 {taper}%의 추가 충전 지연을 사용합니다. 실제 휴대폰은 다르게 충전될 수 있습니다.',
  errorCapacity: '0보다 큰 배터리 용량을 입력하세요.', errorCurrent: '현재 충전량은 0~100% 사이여야 합니다.', errorTarget: '목표 충전량은 1~100% 사이여야 합니다.',
  errorTargetOrder: '목표 충전량은 현재 충전량보다 높아야 합니다.', errorPower: '0보다 큰 출력을 입력하세요.', errorEfficiency: '효율은 50~100% 사이여야 합니다.',
  targetMarker: '목표', chargeProgressLabel: '충전 범위', hourUnit: '시간', minuteUnit: '분',
};

const faq = [
  { question: '배터리 퍼센트만으로 충전 시간을 계산할 수 있나요?', answer: '아니요. 같은 퍼센트라도 작은 배터리와 큰 배터리는 필요한 에너지 양이 다릅니다. 배터리 용량, 휴대폰에 전달되는 전력, 효율 추정치도 필요합니다.' },
  { question: '휴대폰이 예상보다 오래 충전되는 이유는 무엇인가요?', answer: '충전량이 높거나 기기가 뜨겁거나 케이블·충전 규격에 제한이 있거나 충전 중 휴대폰을 사용하면 휴대폰이 전력을 낮출 수 있습니다. 결과는 실시간 측정이 아닌 계획용 추정치입니다.' },
  { question: '충전기 출력과 휴대폰이 받는 전력 중 무엇을 입력해야 하나요?', answer: '알고 있다면 휴대폰에 실제로 전달될 것으로 예상되는 전력을 입력하세요. 충전기 정격만 알고 있다면 상한값으로 사용하고 실제 시간은 더 길 수 있다고 생각하세요.' },
];

const howTo = [
  { name: '배터리 용량 입력', text: '휴대폰 사양에서 배터리 용량을 확인하고 mAh로 입력하세요. 보조배터리는 전압과 변환 손실이 다르므로 그 용량을 대신 사용하지 마세요.' },
  { name: '충전 범위 설정', text: '현재 퍼센트와 원하는 목표 퍼센트를 입력하세요. 20%에서 50%까지의 충전은 완충과 다른 결과를 냅니다.' },
  { name: '출력과 효율 추가', text: '출력을 와트로 입력하거나 알고 있다면 휴대폰이 실제로 받는 충전 전력을 입력하세요. 직접 측정한 값이 없다면 기본 효율을 유지하세요.' },
  { name: '시나리오 비교', text: '5 W, 15 W, 30 W 기준값과 결과를 비교해 현재 충전기가 주어진 시간에 충분한지 판단하세요.' },
];

const seo = [
  { type: 'title' as const, text: '휴대폰 충전 시간 계산하기', level: 2 as const },
  { type: 'paragraph' as const, html: '외출, 여행 또는 긴 통화 전에 배터리가 필요한 수준까지 도달할 수 있는지 알고 싶을 때 이 휴대폰 충전 시간 계산기를 사용하세요. 배터리 용량, 현재 퍼센트, 목표 퍼센트, 충전기 출력과 효율을 입력하면 해당 충전 범위에 필요한 시간과 에너지를 추정합니다. 사용 가능한 시간과 더 느리거나 빠른 충전기를 비교할 때도 유용합니다.' },
  { type: 'title' as const, text: '입력할 값', level: 2 as const },
  { type: 'list' as const, items: ['용량: 보조배터리가 아니라 휴대폰 사양에 있는 mAh 용량을 사용하세요.', '현재 및 목표: 실제로 필요한 충전 범위를 지정하세요. 목표는 현재보다 높아야 합니다.', '출력 및 효율: 알고 있다면 휴대폰에 전달되는 전력을 사용하세요. 충전기 출력만 아는 경우에는 상한값입니다.'] },
  { type: 'title' as const, text: '결과 해석하기', level: 2 as const },
  { type: 'paragraph' as const, html: '주요 숫자는 현재 퍼센트에서 목표까지 걸리는 예상 시간입니다. 남은 에너지는 같은 충전량을 와트시로 보여 주며, 기준 막대는 5 W, 15 W, 30 W에서 시간이 어떻게 달라지는지 보여 줍니다. 시간이 부족하면 목표를 낮추거나 휴대폰이 실제로 더 높은 출력을 사용할 수 있는 충전기와 케이블을 선택하세요.' },
  { type: 'title' as const, text: '100%에 가까워질수록 충전이 느려지는 이유', level: 2 as const },
  { type: 'paragraph' as const, html: '휴대폰은 보통 방전 상태부터 완충까지 같은 출력으로 충전하지 않습니다. 배터리 잔량이 높아지면 충전 제어가 발열과 배터리 부담을 관리하기 위해 전류를 낮출 수 있습니다. 따라서 20%에서 80%까지의 예상 시간은 100%까지 단순 비례로 계산하는 것보다 계획에 더 유용할 때가 많습니다. 70%를 넘는 목표에는 약간의 지연을 반영합니다.' },
  { type: 'title' as const, text: '추정치: 계산기가 감지할 수 없는 것', level: 2 as const },
  { type: 'list' as const, items: ['휴대폰 모델, 배터리 상태, 충전 규격, 케이블, 온도, 사용 여부 또는 현재 충전 전력을 읽을 수 없습니다.', '배터리 노후화를 진단하거나 고속 충전 호환성을 인증하지 않습니다. 정확한 답이 필요하면 실제 상황에서 같은 구성을 직접 측정하세요.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'ko', slug: 'phone-charge-time-calculator', title: '휴대폰 충전 시간 계산기', description: '배터리 용량, 현재 충전량, 충전기 출력과 효율을 바탕으로 목표 충전량까지 걸리는 시간을 예상합니다.', faq, howTo, seo, ui });
