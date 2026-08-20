import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "resistor-color-code-calculator";
const title = "电阻色环计算器";
const description = "解读电阻色环并计算阻值、容差、允许范围和温度系数。也可以从目标阻值反推色环，或读取贴片电阻标记。";

const faqData = [{"question":"如何读取电阻色环？","answer":"从与容差环相反的一端开始读取。容差环通常会稍微分开。前两环或前三环表示数字，下一环表示倍率，最后一环表示容差。"},{"question":"四环电阻代码是什么意思？","answer":"前两环表示有效数字，第三环表示倍率，第四环表示容差。"},{"question":"三环电阻的容差是多少？","answer":"如果没有容差环，三环代码通常按正负20%的容差解释。"},{"question":"五环和六环有什么区别？","answer":"五环包含三位数字和容差。第六环增加以每摄氏度ppm表示的温度系数。"},{"question":"可以读取贴片电阻标记吗？","answer":"可以。输入三位或四位数字，也可以输入4R7这样的写法。字母R表示小数点位置。"},{"question":"计算结果能证明电阻可以安全使用吗？","answer":"不能。安装或更换之前还要检查功率、工作电压、温度范围、容差和电路要求。"}];

const howToData = [{"name":"选择色环数量","text":"根据正在检查的元件选择三环、四环、五环或六环。"},{"name":"选择每个颜色","text":"激活一个色环位置，再从调色板选择颜色。电阻图形会立即更新。"},{"name":"读取结果","text":"查看主要阻值，并检查容差、允许范围和温度系数。"},{"name":"确认读取方向","text":"如果条件允许，将容差环放在右侧，再与电路图或数据手册比较。"}];

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
  inLanguage: "zh",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"电阻色环计算器","level":2},{"type":"paragraph","html":"在浏览器中解读三环、四环、五环和六环电阻。工具会将颜色转换为有效数字、倍率、容差、阻值范围和温度系数。"},{"type":"title","text":"如何读取电阻色环代码","level":3},{"type":"paragraph","html":"从容差环的另一侧开始。两环或三环组成数字，下一环给出倍率，容差环表示相对于标称值的变化范围。"},{"type":"table","headers":["色环数量","有效数字","额外信息","常见用途"],"rows":[["三环","两位","默认20%容差","一般识别"],["四环","两位","容差","常见直插电阻"],["五环","三位","容差","精密电阻"],["六环","三位","容差和温度系数","精密电路"]]},{"type":"title","text":"从目标阻值反推代码","level":3},{"type":"paragraph","html":"知道需要的阻值时，可以使用反推模式。工具会将目标值舍入到所选色环数量能够表示的数值，并显示对应的颜色顺序。"},{"type":"title","text":"贴片电阻标记","level":3},{"type":"paragraph","html":"贴片电阻通常使用三位或四位数字。最后一位表示应用于前面数字的十次幂。R代替小数点，因此4R7表示4.7欧姆。"},{"type":"title","text":"安装前的检查","level":2},{"type":"list","items":["将结果与电路图或维修资料比较。","在数据手册中确认容差和功率。","利用容差环的间距确认读取方向。","标记损坏或不明确时，拆下元件后再测量。","色环代码不能证明电气安全性。"]},{"type":"tip","title":"提示","html":"此工具用于识别标记，不会测量实际阻值、功率、绝缘电压或长期可靠性。"}],
  ui: {"sceneKicker":"EIA色谱实验室","hint":"选择一个色环，再选择颜色。电阻会立即给出答案。","decodeMode":"解读色环","reverseMode":"从目标值反推","smdMode":"解读贴片标记","bandCount":"色环数量","bandCount3":"3环","bandCount4":"4环","bandCount5":"5环","bandCount6":"6环","selectBand":"选择色环","colorPalette":"颜色调色板","bandLabel":"色环","resistance":"阻值","tolerance":"容差","range":"允许范围","temperatureCoefficient":"温度系数","noTempco":"未编码","targetResistance":"目标阻值（欧姆）","targetHint":"输入4700这样的数字。","targetUnit":"欧姆","toleranceChoice":"目标容差","tolerance20":"20%","tolerance10":"10%","tolerance5":"5%","tolerance2":"2%","tolerance1":"1%","smdCode":"贴片标记","smdHint":"4.7kΩ使用472，4.7Ω使用4R7。","decodeSmd":"解读标记","valueUnit":"Ω","ohms":"欧姆","kiloohms":"千欧","megaohms":"兆欧","gigaohms":"吉欧","minValue":"最小值","maxValue":"最大值","actualValue":"解码值","requestedValue":"目标值","status":"状态","statusReady":"可以读取","statusCheck":"最接近的可表示值","statusInvalid":"请检查代码","orientationNote":"方向提示：将稍微分开的容差环放在右侧。金色和银色不能表示有效数字。","reverseNote":"反推模式会选择可表示的数值，并显示生成的色环代码。","smdNote":"此简洁视图可以读取贴片标记，但不会从代码中虚构容差。","colorBlack":"黑色","colorBrown":"棕色","colorRed":"红色","colorOrange":"橙色","colorYellow":"黄色","colorGreen":"绿色","colorBlue":"蓝色","colorViolet":"紫色","colorGray":"灰色","colorWhite":"白色","colorGold":"金色","colorSilver":"银色"},
};
