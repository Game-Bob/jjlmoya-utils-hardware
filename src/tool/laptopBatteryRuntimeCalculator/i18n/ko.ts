import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'laptop-battery-runtime-calculator';
const title = '노트북 배터리 사용 시간 계산기';
const description = '현재 배터리 충전량으로 가벼운 작업, 일반 작업, 고부하 작업을 얼마나 오래 할 수 있는지 추정합니다.';
const faq = [
  { question: '이 계산기는 무엇을 추정하나요?', answer: '배터리에 남은 에너지를 각 작업에 입력한 소비 전력으로 나눕니다. 계획을 위한 추정치이며 실시간 측정이나 제조사의 보증이 아닙니다.' },
  { question: '배터리 용량과 상태는 어디서 확인하나요?', answer: '배터리 보고서나 제조사 자료에서 설계 용량과 현재 완전 충전 용량을 확인하세요. 배터리 상태는 현재 완전 충전 용량을 초기 용량의 백분율로 나타낸 값입니다.' },
  { question: '작업마다 사용 시간이 다른 이유는 무엇인가요?', answer: '더 많은 와트를 사용하는 노트북은 같은 저장 에너지를 더 빨리 소모합니다. 영상 통화, 게임, 외부 모니터, 높은 밝기, 지속적인 CPU 또는 GPU 작업은 평균 소비 전력을 높입니다.' },
  { question: '배터리를 자동으로 읽을 수 있나요?', answer: '아니요. 브라우저에서 로컬로 작동하며 입력한 값만 사용합니다. 정확도가 중요하다면 최신 보고서나 측정한 평균 전력을 입력하세요.' },
];
const howTo = [
  { name: '원래 용량 확인하기', text: '설계 용량을 와트시로 입력합니다. 밀리암페어시와 볼트만 알고 있다면 Wh = V × Ah로 먼저 변환하세요.' },
  { name: '현재 배터리 상태 입력하기', text: '현재 완전 충전 용량을 초기 용량의 백분율로 설정하고 작업 시작 시의 충전량을 입력합니다.' },
  { name: '현실적인 소비 전력 설정하기', text: '가장 가까운 프리셋을 선택하고 노트북이나 전력계에서 측정한 값이 있다면 각 와트 값을 수정합니다.' },
  { name: '이동 계획 세우기', text: '세 가지 라인을 확인하고 부하가 큰 작업에는 가장 짧은 시간을 사용합니다. 여유가 적으면 부하를 낮추거나 충전기를 가져가세요.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ko' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: '사용 시간 추정치가 실제로 측정하는 것', level: 2 },
    { type: 'paragraph', html: '노트북 배터리는 와트시로 에너지를 저장합니다. 노트북은 와트로 표시되는 전력으로 이 에너지를 사용합니다. 계산기는 두 값을 시간으로 바꾸어 여행, 회의, 수업 또는 작업에 충전량이 충분한지 판단하도록 돕습니다.' },
    { type: 'paragraph', html: '먼저 초기 용량과 배터리 상태로 현재 완전 충전 용량을 추정한 다음 시작 충전 비율을 적용합니다. 각 작업 라인은 같은 에너지 예산을 소비합니다.' },
    { type: 'title', text: '신뢰할 수 있는 입력 고르기', level: 2 },
    { type: 'paragraph', html: '배터리 보고서나 제조사 사양을 사용하세요. 설계 용량, 현재 완전 충전 용량, 잔여 충전량은 서로 다릅니다. 볼트와 암페어시만 알고 있다면 <strong>Wh = V × Ah</strong>로 변환하고 1,000 mAh를 1 Ah로 계산합니다.' },
    { type: 'list', items: ['현재 완전 충전 용량을 설계 용량으로 나누어 상태를 계산합니다.', '세션 시작 시 실제로 남아 있을 충전 비율을 입력합니다.', '긴 작업에는 측정한 평균 소비 전력을 사용합니다.', '외부 모니터, 도크 또는 고부하 앱을 작업 조건에 포함합니다.'] },
    { type: 'title', text: '사용 시간을 계획 여유로 읽기', level: 2 },
    { type: 'paragraph', html: '가벼운 작업 라인은 읽기와 간단한 문서, 일반 작업 라인은 보통의 멀티태스킹, 고부하 라인은 높은 전력 소비가 계속되는 경우를 나타냅니다. 필요한 시간과 비교하고 가장 짧은 현실적인 결과를 기준으로 계획하세요.' },
    { type: 'table', headers: ['신호', '의미', '대응'], rows: [['여유', '해당 소비로 6시간 이상', '세션에 넉넉한 여유가 있습니다.'], ['가능', '3시간에서 6시간', '정해진 세션에 적합하지만 충전기를 준비하세요.'], ['빠듯', '1시간에서 3시간', '소비를 줄이거나 충전 시간을 계획하세요.'], ['긴급', '1시간 미만', '충전기에 의존하는 작업으로 보세요.']] },
    { type: 'title', text: '추정치가 보장할 수 없는 것', level: 2 },
    { type: 'paragraph', html: '실제 소비 전력은 매초 변합니다. 밝기, 무선 통신, 온도, 백그라운드 작업, 펌웨어와 시스템 예비 용량이 종료 시점을 바꿉니다. 이 도구는 센서를 읽거나 배터리 화학을 모델링하지 않으며 특정 시간을 보장하지 않습니다.' },
    { type: 'tip', title: '측정 팁', html: '대표적인 세션에서 배터리 비율과 경과 시간을 기록하세요. 관찰한 평균값으로 프리셋 와트를 바꾸고 작업별로 다시 계산합니다.' },
  ],
  ui: {
    batteryInputsLabel: '배터리 시작 조건', designCapacityLabel: '원래 배터리 용량', designCapacityHint: '새 배터리의 에너지', healthLabel: '배터리 상태', healthHint: '현재 완전 충전과 새 배터리의 비교', chargeLabel: '시작 충전량', chargeHint: '작업 시작 시 예상 충전량', scenariosLabel: '작업별 사용 시간', scenariosHint: '작업별 평균 소비 전력 편집', powerLabel: '평균 소비 전력', wattsSuffix: 'W', presetsLabel: '작업 세트로 시작', presetBalanced: '일상 작업', presetTravel: '여행 절전', presetCreative: '고부하 창작', runwayLabel: '에너지 경로', runwayCaption: '각 라인은 같은 시작 충전량을 해당 작업이 소모하는 시점을 보여줍니다.', availableEnergyLabel: '현재 사용 가능한 에너지', fullCapacityLabel: '현재 완전 충전 용량', shortestScenarioLabel: '계획 기준', runtimeLabel: '예상 사용 시간', loadLabel: '소비 전력', healthStateExcellent: '배터리 상태 매우 좋음', healthStateGood: '배터리 상태 좋음', healthStateAging: '배터리 노화 중', healthStateWorn: '배터리 마모됨', statusComfortable: '여유 있음', statusWorkable: '작업 가능', statusTight: '여유 부족', statusUrgent: '충전기 필요', scenarioLight: '가벼운 작업', scenarioBalanced: '일반 작업', scenarioIntense: '고부하 작업', sceneBatteryLabel: '시작 충전량', sceneEnergyLabel: '사용 가능한 에너지', sceneTimeLabel: '사용 시간', noteLabel: '모델의 한계', noteText: '입력값을 기반으로 한 계획용 추정치입니다. 실제 소비 전력과 시스템 예비 용량에 따라 시간이 짧아질 수 있습니다.',
  },
};
