import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "resistor-color-code-calculator";
const title = "저항 색상 코드 계산기";
const description = "저항의 색상 밴드를 해석하여 저항값, 허용오차, 범위와 온도 계수를 계산합니다. 목표값에서 역산하거나 SMD 표시도 읽을 수 있습니다.";

const faqData = [{"question":"저항 색상 밴드는 어떻게 읽나요?","answer":"조금 떨어져 있는 허용오차 밴드의 반대쪽에서 읽기 시작합니다. 처음 두세 밴드는 숫자이고 다음은 배수, 마지막은 허용오차입니다."},{"question":"4밴드 저항 코드는 무엇을 뜻하나요?","answer":"처음 두 밴드는 유효 숫자, 세 번째는 배수, 네 번째는 허용오차를 뜻합니다."},{"question":"3밴드 저항의 허용오차는 얼마인가요?","answer":"허용오차 밴드가 없으면 3밴드 코드는 보통 플러스마이너스 20퍼센트로 해석합니다."},{"question":"5밴드와 6밴드는 어떻게 다른가요?","answer":"5밴드는 세 자리 숫자와 허용오차를 사용합니다. 여섯 번째 밴드는 섭씨 1도당 ppm 단위의 온도 계수를 추가합니다."},{"question":"SMD 저항 표시도 읽을 수 있나요?","answer":"예. 3자리 또는 4자리 코드와 4R7 같은 표기를 입력할 수 있습니다. R은 소수점을 뜻합니다."},{"question":"계산 결과만으로 안전한 저항인지 알 수 있나요?","answer":"아니요. 전력, 사용 전압, 온도 범위, 허용오차와 회로 조건을 추가로 확인해야 합니다."}];

const howToData = [{"name":"밴드 수 선택","text":"확인할 부품에 맞춰 3개, 4개, 5개 또는 6개를 선택합니다."},{"name":"각 색상 선택","text":"밴드 위치를 활성화한 뒤 팔레트에서 색상을 누릅니다. 저항 그림이 즉시 바뀝니다."},{"name":"결과 확인","text":"큰 표시에서 저항값을 보고 허용오차, 허용 범위와 온도 계수를 확인합니다."},{"name":"방향 확인","text":"가능하면 허용오차 밴드를 오른쪽에 놓고 회로도나 데이터시트와 비교합니다."}];

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
  inLanguage: "ko",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"저항 색상 코드 계산기","level":2},{"type":"paragraph","html":"브라우저에서 3밴드부터 6밴드까지 저항 색상 코드를 해석하세요. 색상을 유효 숫자, 배수, 허용오차, 저항 범위와 온도 계수로 변환합니다."},{"type":"title","text":"저항 색상 코드 읽는 방법","level":3},{"type":"paragraph","html":"허용오차 밴드의 반대쪽에서 시작합니다. 두세 밴드는 숫자, 다음 밴드는 배수, 허용오차 밴드는 공칭값 주변의 변동을 나타냅니다."},{"type":"table","headers":["밴드 수","유효 숫자","추가 표시","일반적인 용도"],"rows":[["3개","2자리","20퍼센트 기본 허용오차","일반 식별"],["4개","2자리","허용오차","일반 리드 저항"],["5개","3자리","허용오차","정밀 저항"],["6개","3자리","허용오차와 온도 계수","정밀 회로"]]},{"type":"title","text":"목표값에서 코드 만들기","level":3},{"type":"paragraph","html":"원하는 저항값을 알고 있다면 역산 모드를 사용하세요. 선택한 밴드 수로 표현 가능한 값으로 반올림하고 필요한 색상 순서를 보여줍니다."},{"type":"title","text":"SMD 저항 표시","level":3},{"type":"paragraph","html":"SMD 저항은 보통 3자리 또는 4자리를 사용합니다. 마지막 자리는 앞 숫자에 적용할 10의 지수입니다. R은 소수점을 나타내므로 4R7은 4.7Ω입니다."},{"type":"title","text":"설치 전 확인","level":2},{"type":"list","items":["회로도나 정비 문서와 값을 비교하세요.","데이터시트에서 허용오차와 전력을 확인하세요.","허용오차 밴드의 간격으로 읽는 방향을 확인하세요.","표시가 손상되었거나 모호하면 부품을 분리해 측정하세요.","색상 코드만으로 전기적 안전성을 판단하지 마세요."]},{"type":"tip","title":"참고","html":"이 도구는 표시를 해석합니다. 실제 저항, 전력, 절연 전압 또는 장기 신뢰성을 측정하지 않습니다."}],
  ui: {"sceneKicker":"EIA 색상 스펙트럼 연구실","hint":"밴드를 선택하고 색상을 누르세요. 저항이 즉시 답을 보여줍니다.","decodeMode":"밴드 해석","reverseMode":"목표값 역산","smdMode":"SMD 해석","bandCount":"밴드 수","bandCount3":"3밴드","bandCount4":"4밴드","bandCount5":"5밴드","bandCount6":"6밴드","selectBand":"밴드 선택","colorPalette":"색상 팔레트","bandLabel":"밴드","resistance":"저항값","tolerance":"허용오차","range":"허용 범위","temperatureCoefficient":"온도 계수","noTempco":"표시되지 않음","targetResistance":"목표 저항값(Ω)","targetHint":"4700과 같은 숫자를 입력하세요.","targetUnit":"Ω","toleranceChoice":"목표 허용오차","tolerance20":"20퍼센트","tolerance10":"10퍼센트","tolerance5":"5퍼센트","tolerance2":"2퍼센트","tolerance1":"1퍼센트","smdCode":"SMD 표시","smdHint":"4.7kΩ는 472, 4.7Ω는 4R7을 사용합니다.","decodeSmd":"표시 해석","valueUnit":"Ω","ohms":"옴","kiloohms":"킬로옴","megaohms":"메가옴","gigaohms":"기가옴","minValue":"최소","maxValue":"최대","actualValue":"해석된 값","requestedValue":"요청한 값","status":"상태","statusReady":"읽을 준비 완료","statusCheck":"가장 가까운 표현 가능 값","statusInvalid":"코드 확인","orientationNote":"방향 안내: 조금 떨어진 허용오차 밴드를 오른쪽에 둡니다. 금색과 은색은 유효 숫자 밴드가 아닙니다.","reverseNote":"역산 모드는 표현 가능한 값을 선택하고 생성되는 색상 코드를 보여줍니다.","smdNote":"이 간단한 화면은 SMD 표시를 읽지만 코드에 없는 허용오차를 만들지 않습니다.","colorBlack":"검정","colorBrown":"갈색","colorRed":"빨강","colorOrange":"주황","colorYellow":"노랑","colorGreen":"초록","colorBlue":"파랑","colorViolet":"보라","colorGray":"회색","colorWhite":"흰색","colorGold":"금색","colorSilver":"은색"},
};
