import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "calculadora-codigo-cores-resistor";
const title = "Calculadora de código de cores de resistores";
const description = "Descodifica as faixas coloridas de um resistor e calcula resistência, tolerância, faixa permitida e coeficiente de temperatura. Também permite calcular a partir de um valor alvo ou ler marcações SMD.";

const faqData = [{"question":"Como ler as faixas de cores de um resistor?","answer":"Comece pelo lado oposto à faixa de tolerância, que costuma ficar um pouco afastada. As duas ou três primeiras faixas formam os algarismos, depois vem o multiplicador e por fim a tolerância."},{"question":"O que significa um código de quatro faixas?","answer":"As duas primeiras faixas são algarismos significativos, a terceira é o multiplicador e a quarta indica a tolerância."},{"question":"Qual é a tolerância de um resistor de três faixas?","answer":"Quando não há faixa de tolerância, um código de três faixas costuma ser interpretado como mais ou menos 20 por cento."},{"question":"Qual é a diferença entre cinco e seis faixas?","answer":"Cinco faixas usam três algarismos e uma tolerância. A sexta acrescenta o coeficiente de temperatura em ppm por grau Celsius."},{"question":"A ferramenta lê marcações de resistores SMD?","answer":"Sim. Digite três ou quatro algarismos ou uma notação como 4R7. A letra R indica a posição decimal."},{"question":"O resultado prova que um resistor é seguro?","answer":"Não. Verifique também potência, tensão de trabalho, temperatura, tolerância e os requisitos do circuito."}];

const howToData = [{"name":"Escolha o número de faixas","text":"Selecione três, quatro, cinco ou seis faixas conforme o componente analisado."},{"name":"Escolha cada cor","text":"Ative uma posição e escolha a cor na paleta. O desenho é atualizado imediatamente."},{"name":"Leia o resultado","text":"Veja o valor principal e depois a tolerância, a faixa permitida e o coeficiente térmico, quando existir."},{"name":"Confirme a orientação","text":"Mantenha a faixa de tolerância à direita quando possível e compare o resultado com o esquema ou datasheet."}];

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
  inLanguage: "pt",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"Calculadora de código de cores de resistores","level":2},{"type":"paragraph","html":"Descodifique resistores de três, quatro, cinco e seis faixas diretamente no navegador. A calculadora transforma cada cor em algarismos, multiplicador, tolerância, faixa de resistência e coeficiente de temperatura."},{"type":"title","text":"Como ler um código de cores","level":3},{"type":"paragraph","html":"Comece no lado oposto à faixa de tolerância. Duas ou três faixas fornecem os algarismos, a seguinte fornece o multiplicador e a faixa de tolerância indica a variação esperada em torno do valor nominal."},{"type":"table","headers":["Faixas","Algarismos significativos","Indicação adicional","Uso comum"],"rows":[["Três faixas","Dois","Tolerância padrão de 20 por cento","Identificação geral"],["Quatro faixas","Dois","Tolerância","Resistores com terminais comuns"],["Cinco faixas","Três","Tolerância","Resistores de precisão"],["Seis faixas","Três","Tolerância e coeficiente térmico","Circuitos de precisão"]]},{"type":"title","text":"Calcular o código a partir de um valor","level":3},{"type":"paragraph","html":"Use o modo inverso quando souber a resistência desejada. A ferramenta arredonda para um valor representável e mostra a sequência de cores correspondente."},{"type":"title","text":"Marcações de resistores SMD","level":3},{"type":"paragraph","html":"Resistores SMD costumam usar três ou quatro algarismos. O último algarismo é a potência de dez aplicada aos algarismos iniciais. R substitui a vírgula decimal, por isso 4R7 significa 4,7 ohms."},{"type":"title","text":"Verificações antes da instalação","level":2},{"type":"list","items":["Compare o valor com o esquema ou a documentação de serviço.","Verifique tolerância e potência no datasheet.","Use o espaço da faixa de tolerância para confirmar a direção de leitura.","Meça o componente isolado se a marcação estiver danificada ou ambígua.","Um código de cores não comprova segurança elétrica."]},{"type":"tip","title":"Nota","html":"A ferramenta identifica a marcação. Ela não mede resistência real, potência, tensão de isolamento nem confiabilidade a longo prazo."}],
  ui: {"sceneKicker":"Laboratório do espectro EIA","hint":"Toque numa faixa e escolha uma cor. O resistor responde imediatamente.","decodeMode":"Decodificar faixas","reverseMode":"Calcular ao contrário","smdMode":"Decodificar SMD","bandCount":"Número de faixas","bandCount3":"3 faixas","bandCount4":"4 faixas","bandCount5":"5 faixas","bandCount6":"6 faixas","selectBand":"Escolha uma faixa","colorPalette":"Paleta de cores","bandLabel":"Faixa","resistance":"Resistência","tolerance":"Tolerância","range":"Faixa permitida","temperatureCoefficient":"Coeficiente de temperatura","noTempco":"Não codificado","targetResistance":"Resistência alvo em ohms","targetHint":"Digite um número como 4700.","targetUnit":"ohms","toleranceChoice":"Tolerância alvo","tolerance20":"20 por cento","tolerance10":"10 por cento","tolerance5":"5 por cento","tolerance2":"2 por cento","tolerance1":"1 por cento","smdCode":"Marcação SMD","smdHint":"Use 472 para 4,7 kΩ ou 4R7 para 4,7 Ω.","decodeSmd":"Decodificar marcação","valueUnit":"Ω","ohms":"ohms","kiloohms":"quilo-ohms","megaohms":"mega-ohms","gigaohms":"giga-ohms","minValue":"Mínimo","maxValue":"Máximo","actualValue":"Valor descodificado","requestedValue":"Valor solicitado","status":"Estado","statusReady":"Pronto para ler","statusCheck":"Valor representável mais próximo","statusInvalid":"Combinação inválida","orientationNote":"Dica de orientação: mantenha a faixa de tolerância, ligeiramente afastada, à direita. Dourado e prateado não são faixas de algarismos.","reverseNote":"O modo inverso escolhe um valor representável e mostra o código de cores produzido.","smdNote":"Esta vista compacta lê a marcação SMD, mas o código não contém a tolerância.","colorBlack":"Preto","colorBrown":"Castanho","colorRed":"Vermelho","colorOrange":"Laranja","colorYellow":"Amarelo","colorGreen":"Verde","colorBlue":"Azul","colorViolet":"Violeta","colorGray":"Cinzento","colorWhite":"Branco","colorGold":"Dourado","colorSilver":"Prateado"},
};
