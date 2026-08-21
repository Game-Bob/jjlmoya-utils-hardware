import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-resistor-led';
const title = 'Calculadora de resistor para LED';
const description = 'Calcula o resistor em série de um LED a partir da tensão de alimentação, da tensão direta e da corrente. Dá-te o valor E12 ou E24 mais próximo e uma potência com folga.';

const faqData = [
  { question: 'Que resistor leva um LED vermelho num pino de 5 V do Arduino?', answer: 'Um LED vermelho de 5 mm típico, a 2,0 V e 20 mA em 5 V, pede 150 ohms e dissipa uns 60 mW. Chega um de película metálica de 125 mW ou 250 mW. Na gaveta costuma haver 220 ohms: o LED fica um pouco mais frouxo e aguenta melhor se a tensão direta for mais baixa do que o habitual.' },
  { question: 'Como se calcula o resistor de um LED?', answer: 'Subtrai a tensão direta à de alimentação e divide pela corrente em amperes. Para um LED vermelho de 2 V e 20 mA a 5 V, o resistor exacto é (5 - 2) / 0,02 = 150 ohms.' },
  { question: 'Que tensão direta devo usar?', answer: 'A típica da folha de dados à corrente que queres. As cores desta ferramenta são lotes habituais, não o teu LED. Pontos de partida: cerca de 1,3 V no infravermelho, 2,0 V no vermelho, 2,2 V no amarelo ou verde e 3,2 V no azul ou branco.' },
  { question: 'Porque aparece um valor E12 ou E24 em vez dos ohms exactos?', answer: 'Os resistores vendem-se em séries de valores preferenciais. Entre dois valores E12 há cerca de 20 por cento; entre dois E24, cerca de 10. A calculadora escolhe o mais próximo e, em empate, o mais alto para não forçar o LED.' },
  { question: 'Vários LED em paralelo podem partilhar um resistor?', answer: 'Não. O de menor tensão direta come quase toda a corrente e pode queimar. Põe-nos em série com um resistor, ou dá a cada ramo paralelo o seu.' },
  { question: 'Quando é que um resistor em série não chega?', answer: 'Esquece um único resistor em emissores de 1 W, fitas LED, cadeias longas de automóvel e qualquer carga que queira corrente estável quando a tensão cai. Aí precisas de um driver de corrente constante. O resistor limita um LED testemunho numa alimentação rígida; não é uma fonte de corrente.' },
];

const howToData = [
  { name: 'Escolhe a cor do LED', text: 'Toca no díodo que se parece com a peça na mesa. Carrega uma tensão direta típica e 20 mA de corrente de testemunho.' },
  { name: 'Escolhe a alimentação', text: 'Arduino 5 V ou micro 3,3 V para pinos lógicos; 9 V, 12 V ou 24 V para quadros e painéis.' },
  { name: 'Lê a peça na placa', text: 'O resistor mostra o valor a comprar, a potência e as faixas de cor. Abre a folha de dados só se o teu LED for diferente.' },
  { name: 'Vê a polaridade antes de soldar', text: 'A corrente entra pelo ânodo e sai pelo cátodo para a massa. Confirma a folha de dados se a queda ficar abaixo de 1 V ou o resistor aquecer.' },
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
  inLanguage: 'pt',
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
    { type: 'title', text: 'Calculadora de resistor em série para LED', level: 2 },
    { type: 'paragraph', html: 'Um LED discreto é um díodo governado por corrente. O resistor em série fixa essa corrente com a lei de Ohm: <code>R = (Vs - n x Vf) / If</code>. Esta calculadora resolve-o no navegador, encaixa uma peça E12 ou E24, pinta as faixas de cor e propõe uma potência com o dobro de folga.' },
    { type: 'title', text: 'Um LED vermelho num pino de 5 V do Arduino', level: 3 },
    { type: 'paragraph', html: 'O que as pessoas procuram de verdade é "que resistor para um LED vermelho a 5 V". A Vf típica é 2,0 V a 20 mA, logo <code>(5 - 2) / 0,02 = 150 ohms</code> e 60 mW no resistor. Compra 150 ohms, 125 mW ou 250 mW. Um 220 ohms da gaveta também serve: a corrente cai para uns 14 mA e o LED fica mais frouxo, o que costuma convir num pino de estado.' },
    { type: 'table', headers: ['Cor do LED', 'Vf típica', 'If típica', 'Resistor a 5 V'], rows: [['Infravermelho', '1,3 V', '20 mA', '180 ohms'], ['Vermelho', '2,0 V', '20 mA', '150 ohms'], ['Amarelo ou verde', '2,2 V', '20 mA', '150 ohms'], ['Azul ou branco', '3,2 V', '20 mA', '91 ohms'], ['Ultravioleta', '3,4 V', '20 mA', '82 ohms']] },
    { type: 'title', text: 'Valores preferenciais E12 e E24', level: 3 },
    { type: 'paragraph', html: 'Os resistores seguem as séries de números preferenciais IEC. E12 é o conjunto habitual de 10 por cento: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 e as suas décadas. E24 preenche o conjunto de 5 por cento com 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75 e 91. A ferramenta toma o valor mais próximo e, em empate, o mais alto para o LED ficar um pouco mais frouxo em vez de mais quente.' },
    { type: 'title', text: 'Quando um resistor em série não chega', level: 3 },
    { type: 'paragraph', html: 'Um resistor não é uma fonte de corrente. Só fixa a corrente para uma alimentação e uma Vf concretas. Não partilhes um resistor entre LED em paralelo: o de menor Vf leva a corrente. Não uses um único resistor num emissor de 1 W, numa fita LED ou numa cadeia longa de 12 V de automóvel. Aí precisas de um driver de corrente constante. As cores são lotes típicos; a Vf da tua folha de dados à corrente nominal é o número que conta.' },
    { type: 'list', items: ['Mantém os LED testemunho perto de 10 mA a 20 mA, salvo se a folha de dados permitir mais.', 'Dá a cada LED em paralelo o seu resistor.', 'Se a queda ficar abaixo de 1 V, uma mudança pequena de Vf mexe muito na corrente.', 'A 12 V o resistor pede muitas vezes 0,5 W, não uma película de 125 mW.', 'Confirma ânodo, cátodo, corrente de pico e potência antes de soldar.'] },
    { type: 'tip', title: 'A Vf típica não é a do teu lote', html: 'Os chips vermelho, azul e branco daqui são um ponto de partida para testemunhos de 5 mm. Mede ou lê a curva do fabricante se a alimentação for 3,3 V, o LED for de potência ou a peça for infravermelha.' },
    { type: 'diagnostic', variant: 'warning', title: 'Um resistor não é uma fonte de corrente', html: 'Se a alimentação cair, a Vf andar com a temperatura ou houver vários LED em paralelo, a corrente mexe. Usa a placa como arranque na bancada e depois mede.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: 'Vermelho',
    colorOrange: 'Laranja',
    colorYellow: 'Amarelo',
    colorGreen: 'Verde',
    colorBlue: 'Azul',
    colorWhite: 'Branco',
    colorUv: 'UV',
    supplyHeader: 'Alim.',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3,3 V micro',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Vf folha',
    forwardUnit: 'V',
    currentHeader: 'If folha',
    currentUnit: 'mA',
    countHeader: 'LED em série',
    seriesHeader: 'Série',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: 'Folha de dados',
    hideDatasheet: 'Ocultar folha',
    buyLabel: 'Valor',
    powerLabel: 'Potência',
    seriesShort: 'Série',
    statusTight: 'Fica pouca tensão',
    statusHotter: 'O resistor vai aquecer',
    statusOverdriven: 'Corrente alta',
    statusNoHeadroom: 'A alim. não acende o LED',
    statusInvalid: 'Revê os dados',
    supplyLabel: 'Alim.',
    resistorLabel: 'Resistor',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: 'As cores usam Vf típica, não a do teu lote. Não partilhes um resistor entre LED em paralelo.',
  },
};
