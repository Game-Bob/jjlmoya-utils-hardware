import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-resistor-calculator';
const title = 'LED直列抵抗計算機';
const description = '電源、順電圧、電流からLEDの直列抵抗を求め、安全な電力で最も近いE12またはE24値を選びます。';

const faqData = [
  { question: '5 VのArduinoピンの赤色LEDには何オーム必要ですか?', answer: '典型的な赤色5 mm LEDは2.0 V、20 mA、5 Vで150オーム、抵抗側は約60 mWです。125 mWまたは250 mWの金属皮膜で足ります。引き出しの220オームも使えます。順電圧が低めなら少し暗く、より安全です。' },
  { question: 'LEDの抵抗はどう計算しますか?', answer: '電源から順電圧を引き、アンペア単位の電流で割ります。5 Vで2 V、20 mAの赤色LEDなら (5 - 2) / 0.02 = 150オームです。' },
  { question: 'どの順電圧を使えばよいですか?', answer: '欲しい電流でのデータシートの典型Vfです。ここの色チップは典型ロットであり、手元のLEDそのものではありません。目安は赤外1.3 V、赤2.0 V、黄または緑2.2 V、青または白3.2 Vです。' },
  { question: 'なぜ正確なオームではなくE12やE24なのですか?', answer: '抵抗は優先数系列で売られます。E12は約20パーセント、E24は約10パーセント刻みです。計算機は最も近い値を取り、同点なら高い方を選び、LEDを過駆動しません。' },
  { question: '並列LEDは抵抗を共有できますか?', answer: 'できません。Vfが最も低いLEDがほとんど電流を奪い、焼損します。直列にするか、枝ごとに抵抗を付けてください。' },
  { question: '直列抵抗では足りないのはいつですか?', answer: '1 W級、LEDテープ、長い車載列、電圧が落ちても安定電流が必要な負荷では単抵抗を避けます。定電流ドライバが必要です。抵抗は硬いレール上の表示LEDを制限するだけで、電流源ではありません。' },
];

const howToData = [
  { name: 'LEDの色を選ぶ', text: '机上の部品に近いダイオードをタップします。典型Vfと20 mAの表示電流が入ります。' },
  { name: 'レールを選ぶ', text: '論理ピンはArduino 5 Vまたは3.3 V MCU、パネルは9 V、12 V、24 Vです。' },
  { name: '基板上の部品を読む', text: '抵抗は買う値、電力、色帯を示します。手元のLEDが違うときだけデータシート値を開きます。' },
  { name: 'はんだ付け前に極性を見る', text: '電流はアノードから入りカソードからグランドへ出ます。降下1 V未満や抵抗が熱いときはデータシートを確認します。' },
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
  inLanguage: 'ja',
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
    { type: 'title', text: 'LED直列抵抗計算機', level: 2 },
    { type: 'paragraph', html: 'ディスクリートLEDは電流で動くダイオードです。直列抵抗がその電流をオームの法則で決めます。<code>R = (Vs - n x Vf) / If</code>。この計算機はブラウザで解き、E12またはE24に合わせ、色帯を描き、二倍の余裕がある電力を示します。' },
    { type: 'title', text: 'Arduino 5 Vピンの赤色LED', level: 3 },
    { type: 'paragraph', html: '実際の検索は「5 Vの赤色LEDに何オーム」です。典型Vfは20 mAで2.0 Vなので <code>(5 - 2) / 0.02 = 150オーム</code>、抵抗は60 mW。150オームの125 mWまたは250 mWを買います。引き出しの220オームも使えます。電流は約14 mAに落ち、LEDは暗くなり、状態ピンではそれが望ましいことが多いです。' },
    { type: 'table', headers: ['LED色', '典型Vf', '典型If', '5 Vでの抵抗'], rows: [['赤外', '1.3 V', '20 mA', '180オーム'], ['赤', '2.0 V', '20 mA', '150オーム'], ['黄または緑', '2.2 V', '20 mA', '150オーム'], ['青または白', '3.2 V', '20 mA', '91オーム'], ['紫外', '3.4 V', '20 mA', '82オーム']] },
    { type: 'title', text: 'E12とE24の優先値', level: 3 },
    { type: 'paragraph', html: '抵抗はIECの優先数系列に従います。E12はよくある10パーセント組で、10、12、15、18、22、27、33、39、47、56、68、82とその桁です。E24は5パーセントを11、13、16、20、24、30、36、43、51、62、75、91で埋めます。ツールは最も近い値を取り、同点なら高い方を選び、LEDが熱くなるより少し暗くなるようにします。' },
    { type: 'title', text: '直列抵抗では足りないとき', level: 3 },
    { type: 'paragraph', html: '抵抗は電流源ではありません。選んだ電源とVfに対してだけ電流を決めます。並列LEDで抵抗を共有しないでください。最も低いVfが電流を奪います。1 W級、LEDテープ、長い12 V車載列に単抵抗を使わないでください。定電流ドライバが必要です。色プリセットは典型ロットです。定格電流でのデータシートVfが本物です。' },
    { type: 'list', items: ['データシートが許さない限り、表示LEDは10 mAから20 mA付近に保つ。', '並列の各LEDに自分の抵抗を付ける。', '降下が1 V未満なら、小さなVfでも電流が大きく動く。', '12 Vでは抵抗が0.5 Wを欲しがることが多く、125 mWフィルムでは足りない。', 'はんだ付け前にアノード、カソード、ピーク電流、電力を確認する。'] },
    { type: 'tip', title: '典型Vfはあなたのロットではない', html: '赤、青、白チップは5 mm表示の出発点です。レールが3.3 V、高出力、または赤外ならメーカー曲線を測るか読んでください。' },
    { type: 'diagnostic', variant: 'warning', title: '抵抗は電流源ではない', html: '電源が落ちる、Vfが温度で動く、複数LEDが並列だと電流は変わります。基板を机上の出発点にし、そのあと測ってください。' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: '赤',
    colorOrange: '橙',
    colorYellow: '黄',
    colorGreen: '緑',
    colorBlue: '青',
    colorWhite: '白',
    colorUv: 'UV',
    supplyHeader: 'レール',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3.3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'データシート Vf',
    forwardUnit: 'V',
    currentHeader: 'データシート If',
    currentUnit: 'mA',
    countHeader: '直列LED',
    seriesHeader: '優先系列',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: 'データシート値',
    hideDatasheet: 'データシートを隠す',
    buyLabel: '部品',
    powerLabel: '電力',
    seriesShort: '系列',
    statusTight: '電圧余裕が少ない',
    statusHotter: '抵抗が熱くなる',
    statusOverdriven: '電流が高い',
    statusNoHeadroom: '電源がLEDを点灯できない',
    statusInvalid: '入力を確認',
    supplyLabel: '電源',
    resistorLabel: '抵抗',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: '色は典型Vfであり、手元のロットではありません。並列LEDで抵抗を共有しないでください。',
  },
};
