import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'webmidi-keyboard-tester';
const title = 'WebMIDI 키보드 테스터';
const description = 'USB MIDI 키보드, 신디사이저, 패드 컨트롤러, 피치 벤드 휠, 모듈레이션 휠, 노트 벨로서티, 스턱 노트를 Web MIDI로 브라우저에서 직접 테스트하세요.';

const faqData = [
  {
    question: '이 MIDI 키보드 테스터는 소프트웨어 설치 없이 USB 키보드를 읽을 수 있나요?',
    answer: '네, Chrome, Edge 등 Web MIDI를 지원하는 브라우저에서 가능합니다. 브라우저가 권한을 요청하면 선택한 MIDI 입력의 노트, 벨로서티, 피치 벤드, 모듈레이션 메시지를 도구가 수신합니다.',
  },
  {
    question: '이 웹사이트는 MIDI 노트나 연주 데이터를 업로드하나요?',
    answer: '아니요. MIDI 이벤트는 현재 브라우저 탭에서 처리됩니다. 노트, 벨로서티 값, 컨트롤러 메시지, 장치 이름, 로그는 웹사이트에 의해 업로드되거나 저장되지 않습니다.',
  },
  {
    question: 'MIDI 키보드가 나타나는데 키가 반응하지 않는 이유는 무엇인가요?',
    answer: '장치가 컨트롤 서피스로 연결되었거나, 브라우저가 잘못된 입력 포트를 선택했거나, 키보드가 다른 모드로 작동 중이거나, 케이블/허브가 전원만 공급하고 MIDI 데이터는 전달하지 않을 수 있습니다.',
  },
  {
    question: '피치 벤드와 모듈레이션 휠을 테스트할 수 있나요?',
    answer: '네. 테스터는 피치 벤드를 중앙 기준 부호 값으로, 모듈레이션을 MIDI CC1으로 표시합니다. 장치가 표준 MIDI 메시지를 전송할 때 해당 컨트롤을 움직이면 미터가 즉시 업데이트됩니다.',
  },
  {
    question: '어떤 MIDI 메시지가 표시되나요?',
    answer: '라이브 인터페이스는 Note On 및 Note Off 메시지를 강조 표시하고, 벨로서티를 기록하며, 피치 벤드를 감지하고, 모듈레이션 휠 CC1을 추적합니다. 테스트 중인 컨트롤과 관련된 경우 다른 컨트롤러 메시지가 이벤트 로그에 표시될 수 있습니다.',
  },
];

const howToData = [
  {
    name: 'MIDI 하드웨어 연결하기',
    text: '권한 프롬프트를 열기 전에 키보드, 신디사이저, 패드 컨트롤러 또는 USB MIDI 인터페이스를 컴퓨터에 연결하세요. 간헐적으로 작동하는 장치 문제 해결 시 전원이 공급되지 않는 허브를 피하십시오.',
  },
  {
    name: '브라우저 MIDI 접근 권한 부여하기',
    text: 'Connect MIDI Input을 누르고 브라우저 권한 요청을 승인하세요. Web MIDI는 권한이 필요하므로 HTTPS 또는 localhost에서 Chrome이나 Edge를 사용하십시오.',
  },
  {
    name: '음역대 전체에서 건반 연주하기',
    text: '낮은음, 중간음, 높은음을 눌러보세요. 화면상의 키보드는 수신된 노트를 중심으로 확장되며 벨로서티에 따라 각 건반을 밝힙니다.',
  },
  {
    name: '휠과 익스프레션 컨트롤 확인하기',
    text: '피치 휠, 모듈레이션 휠, 퍼포먼스 컨트롤을 움직여 보세요. 피치는 중앙으로 돌아와야 하고, 모듈레이션은 0에서 127까지 이동해야 합니다.',
  },
  {
    name: '이벤트 로그 확인하기',
    text: '이벤트 로그를 사용하여 누락된 Note Off 메시지, 예상치 못한 채널, 낮은 벨로서티 값, 또는 예상과 다른 MIDI 메시지를 보내는 컨트롤을 찾아보세요.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '실제 USB 하드웨어를 위한 온라인 MIDI 키보드 테스터', level: 2 },
    {
      type: 'paragraph',
      html: '신뢰할 수 있는 <strong>온라인 MIDI 키보드 테스터</strong>는 실제 악기가 DAW, 샘플러, 신디사이저, 조명 장비가 기대하는 메시지를 보내고 있는지 빠르게 확인해 줍니다. 이 WebMIDI 테스터는 브라우저 MIDI 입력을 수신하여 Note On, Note Off, 벨로서티, 피치 벤드, 모듈레이션 휠 데이터를 실시간으로 표시합니다. USB MIDI 키보드, DIN-USB 인터페이스, 신디사이저, 패드 컨트롤러, 스테이지 피아노, MIDI 기타, 드럼 트리거, 홈 스튜디오나 라이브 장비에서 사용되는 소형 컨트롤러에 적합합니다.',
    },
    {
      type: 'message',
      title: '비공개 로컬 MIDI 진단',
      html: '테스트는 완전히 클라이언트 측에서 실행됩니다. 웹사이트는 노트 번호, 벨로서티 커브, 컨트롤러 움직임, 장치 이름, 이벤트 로그를 업로드하지 않습니다. 브라우저는 권한 프롬프트를 승인한 후에만 MIDI를 노출하며, 값은 현재 탭에만 유지됩니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'MIDI 벨로서티 범위' },
        { value: '128', label: '표준 노트 번호' },
        { value: '14-bit', label: '피치 벤드 해상도' },
        { value: 'CC1', label: '모듈레이션 휠 컨트롤' },
      ],
    },
    {
      type: 'table',
      headers: ['신호', '테스터 표시 내용', '정상 동작'],
      rows: [
        ['Note On', '건반명, 노트 번호, 채널, 벨로서티.', '각 물리적 건반은 눌렀을 때 한 번 점등되며 0보다 큰 벨로서티 값을 사용합니다.'],
        ['Note Off', '로그의 릴리즈 이벤트와 건반 점등 리셋.', '눌렀던 모든 건반이 놓으면 해제되며 시각적으로 고정된 노트가 남지 않습니다.'],
        ['벨로서티', '실시간 미터와 롤링 커브.', '약한 연주는 낮은 값을, 강한 연주는 불규칙한 점프 없이 높은 값을 보입니다.'],
        ['피치 벤드', '음수에서 양수까지의 중앙 기준 부호 미터.', '휠이 부드럽게 움직이고 놓으면 0에 가깝게 돌아옵니다.'],
        ['모듈레이션', '0-127 범위의 CC1 미터.', '휠 또는 스트립이 전체 범위에서 예측 가능하게 움직입니다.'],
      ],
    },
    { type: 'title', text: 'DAW 없이 MIDI 키보드 테스트하는 방법', level: 2 },
    {
      type: 'paragraph',
      html: '<em>MIDI 키보드 테스트</em>를 검색하는 경우, 사용자는 문제가 컨트롤러, 케이블, 운영 체제, 음악 소프트웨어 중 어디에 있는지 아직 모르는 경우가 많습니다. DAW는 트랙 암 상태, 입력 필터, MIDI 채널 라우팅, 가상 악기, 모니터링, 템플릿, 드라이버 설정 등 많은 추가 변수를 더합니다. 브라우저 테스터는 그 스택의 대부분을 제거합니다. WebMIDI 권한 프롬프트가 장치를 인식하고 키보드가 화면에서 노트를 점등하면 물리적 MIDI 경로는 살아 있는 것입니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'DAW 설정을 변경하기 전에 이것을 사용하세요',
      html: '먼저 컨트롤러가 원시 MIDI를 전송하는지 확인하세요. 그런 다음 음악 애플리케이션을 문제 해결하세요. 테스터가 노트를 수신하지만 DAW는 수신하지 못하는 경우, MIDI 입력 활성화, 선택한 트랙 입력, 채널 필터, 컨트롤 서피스 스크립트, 악기 모니터링을 점검하세요.',
    },
    {
      type: 'list',
      items: [
        '가능하면 키보드를 컴퓨터에 직접 연결하세요. 특히 버스 전원이 부족한 경우에 유용합니다.',
        'Web MIDI 지원은 브라우저와 플랫폼에 따라 다르므로 Chrome이나 Edge에서 테스터를 여세요.',
        'Connect MIDI Input을 누르고 권한 프롬프트에서 음악 장치 또는 MIDI 인터페이스를 선택하세요.',
        '건반 전체에서 반음계 노트를 연주하여 데드 키, 스플릿 존, 옥타브 트랜스포즈 문제를 발견하세요.',
        '피치 휠과 모듈레이션 휠을 천천히, 그다음 빠르게 움직여 노이즈가 있는 센서나 중앙 복귀 불량을 확인하세요.',
        '케이블, USB 포트, 키보드 프리셋, 컨트롤러 모드를 비교할 때는 테스트 간 로그를 지우세요.',
      ],
    },
    {
      type: 'tip',
      title: '빠른 케이블 점검',
      html: '장치 전원은 켜지는데 MIDI 입력이 나타나지 않으면 다른 USB 케이블을 사용해 보세요. 저렴한 USB 케이블 중 상당수는 충전 전용이라 데이터를 전송하지 않아, 컨트롤러가 작동하는 것처럼 보이지만 MIDI 메시지는 컴퓨터에 도달하지 못합니다.',
    },
    { type: 'title', text: '벨로서티 커브와 다이내믹 응답 읽기', level: 2 },
    {
      type: 'paragraph',
      html: '벨로서티는 그 자체로 음량이 아닙니다. 보통 1에서 127까지의 범위로 노트와 함께 전송되는 연주 값입니다. 피아노 플러그인은 벨로서티를 음량, 샘플 레이어, 밝기, 해머 노이즈, 어택 타임, 또는 이 모든 것에 동시에 매핑할 수 있습니다. 컨트롤러의 벨로서티 스캔이 부실하면 연주자는 약한 노트가 사라지거나, 중간 노트가 너무 크거나, 강한 노트가 표현력 있는 상위 레이어에 도달하지 못한다고 느낄 수 있습니다. 롤링 벨로서티 커브는 하드웨어가 사용 가능한 값의 분포를 생성하는지 확인하는 데 도움이 됩니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '정상적인 건반',
          description: '약, 중, 강 타건이 눈에 띄게 다른 벨로서티 대역을 생성하며, 비슷한 연주 힘에 대해 재현 가능한 값을 보입니다.',
          highlight: true,
        },
        {
          title: '압축된 응답',
          description: '대부분의 노트가 70-95와 같은 좁은 범위에 몰려 피아노와 드럼 악기가 평평하게 느껴지거나 제어하기 어렵습니다.',
        },
        {
          title: '불규칙한 응답',
          description: '인접한 노트나 반복 타건 시 값이 예측 불가하게 점프하여, 접점 오염, 센서 고장, 스캔 불량, 펌웨어 불안정이 의심됩니다.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['관찰된 벨로서티 패턴', '가능한 해석', '다음 테스트'],
      rows: [
        ['항상 127', '고정 벨로서티 모드가 활성화되었거나 오르간/신디 트리거용으로 설정되어 있습니다.', '키보드 글로벌 설정, 패드 모드, 컨트롤러 에디터를 확인하세요.'],
        ['항상 매우 낮음', '벨로서티 커브가 너무 부드럽거나, 센서 캘리브레이션이 잘못되었거나, 건반이 고장 났을 수 있습니다.', '벨로서티 커브를 전환하고 옥타브 전반의 검은 건반과 흰 건반을 비교하세요.'],
        ['특정 키만 크게 다름', '국부적인 접점, 러버 돔, 광학 센서, 키 메커니즘이 오염되거나 손상되었을 수 있습니다.', '해당 키를 여러 강도로 반복 연주하고 인접한 노트와 비교하세요.'],
        ['허브 사용 후 값이 떨어짐', '전원 또는 데이터 안정성이 부족할 수 있습니다.', '직접 USB 포트와 검증된 데이터 케이블로 재테스트하세요.'],
      ],
    },
    {
      type: 'card',
      title: 'Note Off가 중요한 이유',
      html: '스턱 노트는 종종 Note Off 메시지의 누락이나 지연 때문입니다. 일부 악기는 별도의 Note Off 명령 대신 벨로서티 0의 Note On을 보냅니다. 둘 다 유효한 MIDI 동작입니다. 이 테스터는 벨로서티 0의 Note On을 노트 릴리스로 처리하므로, 올바른 릴리스 메시지가 도착할 때까지 실제로 고정된 키가 시각적으로 유지됩니다.',
    },
    { type: 'title', text: '피치 벤드, 모듈레이션, 퍼포먼스 컨트롤 테스트', level: 2 },
    {
      type: 'paragraph',
      html: '피치 벤드는 일반적인 7비트 컨트롤러 데이터보다 고해상도 MIDI 메시지입니다. 두 개의 데이터 바이트를 결합하여 8192를 중심으로 하는 14비트 범위를 만듭니다. 특히 리드 신디, 베이스, 오케스트라 악기를 벤딩할 때 피치 움직임이 부드럽게 들려야 하므로 이 추가 해상도가 중요합니다. 테스터는 수신된 벤드를 중앙 기준 미터로 변환하여 휠이 양쪽 끝에 도달하고 중립으로 돌아오는지 쉽게 확인할 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '모듈레이션 휠은 일반적으로 MIDI 컨트롤 체인지 1, 흔히 CC1으로 표기됩니다. 많은 신디 패치에서 비브라토, 필터 움직임, 웨이브테이블 위치, 트레몰로, 오케스트라 다이내믹에 사용합니다. 휠을 움직여도 CC1 미터가 업데이트되지 않으면, 컨트롤러가 다른 CC에 할당되었거나, 벤더 특정 모드를 사용 중이거나, 퍼포먼스 컨트롤을 다시 매핑하는 소프트웨어를 통해 라우팅되었을 수 있습니다.',
    },
    {
      type: 'proscons',
      title: '브라우저 MIDI 테스트와 DAW 모니터링 비교',
      items: [
        { pro: '프로젝트 설정 없이 권한 기반의 빠른 하드웨어 확인.', con: '모든 DAW 라우팅, 스크립트, 악기 매핑을 에뮬레이트하지는 않습니다.' },
        { pro: '노트, 벨로서티, 피치 벤드, CC1 모듈레이션을 명확하게 표시.', con: '고급 애프터터치, NRPN, MPE, SysEx, 커스텀 컨트롤 맵에는 전문 도구가 필요할 수 있습니다.' },
        { pro: '지원 통화, 중고 장비 구매, 케이블 점검에 유용.', con: '브라우저 지원은 현재 플랫폼의 Web MIDI 사용 가능 여부에 따라 달라집니다.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '피치 휠이 0으로 돌아오지 않음',
      html: '놓은 후 피치 미터가 양수 또는 음수 값에 머물러 있다면, 물리적 휠, 스프링, 포텐쇼미터, 홀 센서, 캘리브레이션, 펌웨어 데드밴드에 문제가 있을 수 있습니다. 센서 결함으로 판단하기 전에 다른 포트와 프리셋에서 동일한 컨트롤러를 테스트하세요.',
    },
    { type: 'title', text: '이 테스터로 발견할 수 있는 일반적인 MIDI 키보드 결함', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: '데드 키', definition: '눌러도 Note On 메시지를 생성하지 않는 물리적 건반.' },
        { term: '스턱 노트', definition: 'Note On은 수신했지만 해당 릴리스 메시지가 없어 악기에서 소리가 계속 나는 노트.' },
        { term: '벨로서티 스파이크', definition: '비슷한 타건에 대해 예상보다 훨씬 높거나 낮게 갑자기 튀는 값.' },
        { term: 'MIDI 채널', definition: 'MIDI 스트림에서 파트, 존, 장치를 분리하는 데 사용되는 16개의 논리 채널 중 하나.' },
        { term: '컨트롤 체인지', definition: '노브, 페달, 휠, 슬라이더, 스위치에서 사용되는 MIDI 메시지 계열.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '장치가 감지되었지만 메시지 없음',
      html: '브라우저에 MIDI 입력이 나열되지만 건반을 연주해도 로그 항목이 생성되지 않는 경우, 선택한 포트가 키보드 노트 입력이 아닌 컨트롤 서피스 입력인지 확인하세요. 일부 인터페이스는 유사한 이름의 여러 포트를 노출합니다.',
    },
    {
      type: 'table',
      headers: ['증상', '가능한 원인', '실제 조치'],
      rows: [
        ['권한 프롬프트가 나타나지 않음', '지원되지 않는 브라우저, 안전하지 않은 출처, 또는 차단된 브라우저 MIDI 권한.', 'HTTPS로 Chrome/Edge를 사용하고 사이트 권한을 확인하세요.'],
        ['장치가 나타나지 않음', '케이블, 허브, 드라이버, 클래스 규격, 또는 전원 문제.', '다른 USB 데이터 케이블, 포트, 전원 허브를 사용해 보세요.'],
        ['특정 옥타브만 작동함', '스플릿/레이어 모드, 트랜스포즈 설정, 하드웨어 매트릭스 결함, 또는 로컬 컨트롤 모드.', '프리셋을 초기화하고 낮은음부터 높은음까지 반음계로 테스트하세요.'],
        ['음정 이름이 잘못됨', '컨트롤러가 트랜스포즈되었거나 옥타브 시프트가 있는 존에서 전송 중.', '글로벌 트랜스포즈, 존 옥타브, DAW 템플릿 설정을 확인하세요.'],
        ['모듈레이션 휠 무응답', '휠이 다른 컨트롤러 번호에 할당되었거나 프리셋에서 비활성화됨.', '기본 프리셋이나 컨트롤러 에디터를 불러와 CC1으로 다시 매핑하세요.'],
      ],
    },
    {
      type: 'summary',
      title: '최적의 진단 순서',
      items: [
        '브라우저가 MIDI 입력을 인식하는지 확인하세요.',
        '노트를 연주하고 누름/해제 동작이 일치하는지 확인하세요.',
        '약, 중, 강 타건을 반복하여 벨로서티 분포를 검사하세요.',
        '피치 벤드와 모듈레이션 컨트롤을 전체 가동 범위에서 움직이세요.',
        '그 후에야 DAW 라우팅, 가상 악기 설정, 컨트롤러 템플릿을 조정하세요.',
      ],
    },
    { type: 'title', text: '개인정보, 브라우저 지원 및 제한 사항', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI는 의도적으로 권한이 필요하도록 설계되었습니다. 브라우저가 접근 흐름을 노출하지 않으면 페이지가 연결된 음악 장치를 백그라운드에서 조용히 읽을 수 없습니다. 권한 프롬프트의 정확한 형태와 지속성은 브라우저, 운영 체제, 사용자 설정에 따라 다릅니다. 대부분의 뮤지션에게 실제 절차는 간단합니다. 연결 버튼을 클릭하고, MIDI 입력을 선택하고, 테스트를 실행한 후, 완료되면 탭을 닫으세요.',
    },
    {
      type: 'list',
      items: [
        'MIDI 이벤트 데이터는 외부 서버로 전송되지 않습니다.',
        '테스터는 SysEx 접근을 요구하지 않으므로 권한 범위가 더 좁게 유지됩니다.',
        '브라우저에 표시되는 장치 이름으로 하드웨어 모델을 식별할 수 있으므로, 스크린샷 공유는 신중하게 하세요.',
        'Chrome과 Edge가 일반적으로 최고의 Web MIDI 지원을 제공합니다. Safari와 Firefox 지원은 플랫폼에 따라 제한되거나 없을 수 있습니다.',
        '펌웨어 업데이트, 심층 컨트롤러 편집, MPE 분석, SysEx 덤프, 벤더별 진단에는 여전히 네이티브 유틸리티가 필요할 수 있습니다.',
      ],
    },
    {
      type: 'card',
      title: '이 도구로 충분한 경우',
      html: '중고 컨트롤러 구매, 스튜디오 케이블 확인, USB MIDI 인터페이스 검증, 수리된 건반 테스트, DAW를 열기 전에 키보드가 메시지를 전송하는지 확인할 때, WebMIDI 키보드 테스터는 보통 가장 빠른 첫 단계입니다.',
    },
  ],
  ui: {
    connectButton: 'MIDI 입력 연결',
    refreshButton: '입력 새로고침',
    clearButton: '로그 지우기',
    unsupportedTitle: 'Web MIDI를 사용할 수 없습니다',
    unsupportedBody: 'Chrome, Edge 등 Chromium 기반 브라우저를 사용하고 HTTPS 또는 localhost로 페이지를 여세요.',
    secureContext: 'Web MIDI는 브라우저가 MIDI 입력을 노출하기 전에 보안 HTTPS 페이지 또는 localhost가 필요합니다.',
    statusIdle: 'MIDI 접근 요청 준비 완료',
    statusPermission: '브라우저 MIDI 권한 대기 중',
    statusReady: 'MIDI 접근 허용됨',
    statusNoInputs: 'MIDI 입력이 감지되지 않음',
    statusConnected: 'MIDI 입력 감지됨',
    statusDisconnected: 'MIDI 장치 연결 해제됨',
    statusError: 'MIDI 접근 실패',
    detectedLabel: '감지된 장치',
    noDevice: '선택된 MIDI 장치 없음',
    inputLabel: '입력',
    inputIdle: '없음',
    channelLabel: '채널',
    notesLabel: '노트',
    velocityLabel: '벨로서티',
    pitchLabel: '피치',
    modulationLabel: '모듈레이션',
    lastEventLabel: '마지막 이벤트',
    octaveRangeLabel: '표시 범위',
    velocityCurveTitle: '벨로서티 커브',
    activeNotesTitle: '활성 노트',
    eventLogTitle: 'MIDI 이벤트 로그',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: '건반을 누르거나 휠을 움직여 수신 MIDI 메시지를 확인하세요.',
    noteOn: '노트 온',
    noteOff: '노트 오프',
    controlChange: '컨트롤 체인지',
    pitchBend: '피치 벤드',
    allChannels: '모든 채널',
  },
};
