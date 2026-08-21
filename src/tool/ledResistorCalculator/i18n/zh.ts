import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-resistor-calculator';
const title = 'LED串联电阻计算器';
const description = '根据电源、正向电压和电流计算LED串联电阻，并选出安全功率下最接近的E12或E24阻值。';

const faqData = [
  { question: 'Arduino 5 V引脚上的红光LED需要多大电阻?', answer: '典型红光5 mm LED在2.0 V、20 mA、5 V时需要150欧，电阻上大约60 mW。125 mW或250 mW金属膜就够。抽屉里常用220欧：LED更暗，若实际Vf偏低也更安全。' },
  { question: 'LED电阻怎么算?', answer: '用电源减去正向电压，再除以安培电流。5 V上2 V、20 mA的红光LED是 (5 - 2) / 0.02 = 150欧。' },
  { question: '该用哪个正向电压?', answer: '数据手册在目标电流下的典型Vf。这里的颜色芯片是典型批次，不是你手头那颗。参考：红外1.3 V、红2.0 V、黄或绿2.2 V、蓝或白3.2 V。' },
  { question: '为什么是E12或E24而不是精确欧姆?', answer: '电阻按优先数系列出售。E12大约20%一档，E24大约10%。计算器取最近值，平局取更大阻值，避免过驱动LED。' },
  { question: '并联LED能共用一只电阻吗?', answer: '不能。Vf最低的那颗会抢走几乎全部电流并可能烧毁。改成串联，或每条支路各自一只电阻。' },
  { question: '什么时候串联电阻不够?', answer: '1 W级、灯带、长车灯串、以及电压下跌仍要稳定电流的负载，不要用单电阻。需要恒流驱动。电阻只是在硬轨上限制指示灯，不是电流源。' },
];

const howToData = [
  { name: '选择LED颜色', text: '点选和工作台上零件相近的二极管。会载入典型Vf和20 mA指示电流。' },
  { name: '选择电源轨', text: '逻辑脚用Arduino 5 V或3.3 V MCU，面板用9 V、12 V或24 V。' },
  { name: '读板上的零件', text: '电阻显示要买的阻值、功率和色环。只有手头LED不同时才打开数据手册。' },
  { name: '焊接前核对极性', text: '电流从阳极进、阴极出到地。压降低于1 V或电阻发烫时查阅数据手册。' },
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
  inLanguage: 'zh',
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
    { type: 'title', text: 'LED串联电阻计算器', level: 2 },
    { type: 'paragraph', html: '分立LED是电流驱动的二极管。串联电阻用欧姆定律设定电流：<code>R = (Vs - n x Vf) / If</code>。本计算器在浏览器里求解，对齐E12或E24，画出色环，并给出带两倍余量的功率。' },
    { type: 'title', text: 'Arduino 5 V脚上的红光LED', level: 3 },
    { type: 'paragraph', html: '人们搜的是"5 V红光LED用多大电阻"。典型Vf在20 mA时是2.0 V，所以 <code>(5 - 2) / 0.02 = 150欧</code>，电阻60 mW。买150欧、125 mW或250 mW。抽屉里的220欧也能用：电流降到大约14 mA，LED更暗，状态脚上往往正好。' },
    { type: 'table', headers: ['LED颜色', '典型Vf', '典型If', '5 V电阻'], rows: [['红外', '1.3 V', '20 mA', '180欧'], ['红', '2.0 V', '20 mA', '150欧'], ['黄或绿', '2.2 V', '20 mA', '150欧'], ['蓝或白', '3.2 V', '20 mA', '91欧'], ['紫外', '3.4 V', '20 mA', '82欧']] },
    { type: 'title', text: 'E12和E24优先值', level: 3 },
    { type: 'paragraph', html: '电阻遵循IEC优先数系列。E12是常见的10%组：10、12、15、18、22、27、33、39、47、56、68、82及其十倍。E24用11、13、16、20、24、30、36、43、51、62、75、91填满5%。工具取最近值，平局取更大，让LED偏暗而不是偏热。' },
    { type: 'title', text: '串联电阻不够的时候', level: 3 },
    { type: 'paragraph', html: '电阻不是电流源。它只对选定电源和Vf设定电流。不要让并联LED共用一只电阻：最低Vf会抢走电流。不要在1 W级、灯带或长12 V车灯串上用单电阻。那些需要恒流驱动。颜色预设是典型批次；额定电流下你的数据手册Vf才算数。' },
    { type: 'list', items: ['除非数据手册允许更大，指示LED保持在10 mA到20 mA附近。', '每颗并联LED各自一只电阻。', '压降低于1 V时，很小的Vf就会大幅改变电流。', '12 V上电阻常常要0.5 W，不是125 mW薄膜。', '焊接前确认阳极、阴极、峰值电流和功率。'] },
    { type: 'tip', title: '典型Vf不是你的批次', html: '红、蓝、白芯片是5 mm指示灯的起点。若轨道是3.3 V、大功率或红外，请测量或阅读厂家曲线。' },
    { type: 'diagnostic', variant: 'warning', title: '电阻不是电流源', html: '电源下跌、Vf随温度漂移、或多颗LED并联时，电流会变。把板子当作台面起点，然后再测量。' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: '红',
    colorOrange: '橙',
    colorYellow: '黄',
    colorGreen: '绿',
    colorBlue: '蓝',
    colorWhite: '白',
    colorUv: 'UV',
    supplyHeader: '电源轨',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3.3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: '手册 Vf',
    forwardUnit: 'V',
    currentHeader: '手册 If',
    currentUnit: 'mA',
    countHeader: '串联LED',
    seriesHeader: '优先系列',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: '数据手册值',
    hideDatasheet: '隐藏手册',
    buyLabel: '零件',
    powerLabel: '功率',
    seriesShort: '系列',
    statusTight: '电压余量很小',
    statusHotter: '电阻会发热',
    statusOverdriven: '电流偏高',
    statusNoHeadroom: '电源点不亮LED',
    statusInvalid: '检查输入',
    supplyLabel: '电源',
    resistorLabel: '电阻',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: '颜色用典型Vf，不是你的批次。并联LED不要共用一只电阻。',
  },
};
