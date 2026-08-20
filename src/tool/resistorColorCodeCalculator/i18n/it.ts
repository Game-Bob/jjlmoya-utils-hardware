import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "calcolatore-codice-colori-resistenze";
const title = "Calcolatore del codice colori delle resistenze";
const description = "Decodifica le bande colorate di una resistenza e calcola valore, tolleranza, intervallo e coefficiente di temperatura. Puoi anche partire da un valore obiettivo o leggere una sigla SMD.";

const faqData = [{"question":"Come si leggono le bande colorate di una resistenza?","answer":"Inizia dall'estremità opposta alla banda della tolleranza, spesso leggermente distanziata. Le prime due o tre bande formano le cifre, poi viene il moltiplicatore e infine la tolleranza."},{"question":"Che cosa indica un codice a quattro bande?","answer":"Le prime due bande indicano le cifre significative, la terza è il moltiplicatore e la quarta indica la tolleranza."},{"question":"Qual è la tolleranza di un codice a tre bande?","answer":"Quando manca la banda della tolleranza, un codice a tre bande viene normalmente interpretato con più o meno 20 percento."},{"question":"Qual è la differenza tra cinque e sei bande?","answer":"Cinque bande usano tre cifre e una tolleranza. La sesta aggiunge il coefficiente di temperatura in ppm per grado Celsius."},{"question":"Il calcolatore legge le sigle delle resistenze SMD?","answer":"Sì. Inserisci tre o quattro cifre oppure una notazione come 4R7. La lettera R indica il separatore decimale."},{"question":"Il risultato dimostra che una resistenza è sicura?","answer":"No. Controlla anche potenza, tensione di lavoro, temperatura, tolleranza e requisiti del circuito."}];

const howToData = [{"name":"Scegli il numero di bande","text":"Seleziona tre, quattro, cinque o sei bande in base al componente."},{"name":"Scegli ogni colore","text":"Attiva una posizione e scegli il colore dalla tavolozza. Il disegno cambia immediatamente."},{"name":"Leggi il risultato","text":"Controlla il valore principale, poi tolleranza, intervallo ammesso e coefficiente termico quando presente."},{"name":"Verifica l'orientamento","text":"Tieni la banda della tolleranza a destra quando possibile e confronta il risultato con schema o datasheet."}];

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
  inLanguage: "it",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"Calcolatore del codice colori delle resistenze","level":2},{"type":"paragraph","html":"Decodifica resistenze a tre, quattro, cinque e sei bande direttamente nel browser. Ogni colore diventa una cifra significativa, un moltiplicatore, una tolleranza, un intervallo e un coefficiente di temperatura."},{"type":"title","text":"Come leggere il codice colori","level":3},{"type":"paragraph","html":"Inizia dal lato opposto alla banda della tolleranza. Due o tre bande forniscono le cifre, la successiva il moltiplicatore e la banda della tolleranza indica la variazione attesa dal valore nominale."},{"type":"table","headers":["Bande","Cifre significative","Indicazione aggiuntiva","Uso tipico"],"rows":[["Tre bande","Due","Tolleranza predefinita del 20 percento","Identificazione generale"],["Quattro bande","Due","Tolleranza","Resistenze comuni con terminali"],["Cinque bande","Tre","Tolleranza","Resistenze di precisione"],["Sei bande","Tre","Tolleranza e coefficiente termico","Circuiti di precisione"]]},{"type":"title","text":"Partire da un valore obiettivo","level":3},{"type":"paragraph","html":"Usa la modalità inversa quando conosci la resistenza desiderata. Il calcolatore arrotonda a un valore rappresentabile e mostra la sequenza di colori corrispondente."},{"type":"title","text":"Marcature delle resistenze SMD","level":3},{"type":"paragraph","html":"Le resistenze SMD usano spesso tre o quattro cifre. L'ultima cifra è la potenza di dieci applicata alle cifre iniziali. R sostituisce il separatore decimale, quindi 4R7 significa 4,7 ohm."},{"type":"title","text":"Verifiche prima dell'installazione","level":2},{"type":"list","items":["Confronta il valore con lo schema o la documentazione di servizio.","Controlla tolleranza e potenza nel datasheet.","Usa la distanza della banda della tolleranza per confermare il verso di lettura.","Misura il componente isolato se la marcatura è danneggiata o ambigua.","Il codice colori non dimostra la sicurezza elettrica."]},{"type":"tip","title":"Nota","html":"Lo strumento identifica la marcatura. Non misura resistenza reale, potenza, tensione di isolamento o affidabilità nel tempo."}],
  ui: {"sceneKicker":"Laboratorio dello spettro EIA","hint":"Tocca una banda e scegli un colore. La resistenza risponde subito.","decodeMode":"Decodifica bande","reverseMode":"Lavorare a ritroso","smdMode":"Decodifica SMD","bandCount":"Numero di bande","bandCount3":"3 bande","bandCount4":"4 bande","bandCount5":"5 bande","bandCount6":"6 bande","selectBand":"Scegli una banda","colorPalette":"Tavolozza colori","bandLabel":"Banda","resistance":"Resistenza","tolerance":"Tolleranza","range":"Intervallo ammesso","temperatureCoefficient":"Coefficiente di temperatura","noTempco":"Non codificato","targetResistance":"Resistenza obiettivo in ohm","targetHint":"Inserisci un numero come 4700.","targetUnit":"ohm","toleranceChoice":"Tolleranza obiettivo","tolerance20":"20 percento","tolerance10":"10 percento","tolerance5":"5 percento","tolerance2":"2 percento","tolerance1":"1 percento","smdCode":"Marcatura SMD","smdHint":"Usa 472 per 4,7 kΩ o 4R7 per 4,7 Ω.","decodeSmd":"Decodifica marcatura","valueUnit":"Ω","ohms":"ohm","kiloohms":"kiloohm","megaohms":"megaohm","gigaohms":"gigaohm","minValue":"Minimo","maxValue":"Massimo","actualValue":"Valore decodificato","requestedValue":"Valore richiesto","status":"Stato","statusReady":"Pronto da leggere","statusCheck":"Valore rappresentabile più vicino","statusInvalid":"Combinazione non valida","orientationNote":"Indizio di orientamento: tieni a destra la banda della tolleranza, leggermente separata. Oro e argento non sono bande di cifre.","reverseNote":"La modalità inversa sceglie un valore rappresentabile e mostra il codice colori prodotto.","smdNote":"Questa vista compatta legge la marcatura SMD, ma il codice non contiene la tolleranza.","colorBlack":"Nero","colorBrown":"Marrone","colorRed":"Rosso","colorOrange":"Arancione","colorYellow":"Giallo","colorGreen":"Verde","colorBlue":"Blu","colorViolet":"Viola","colorGray":"Grigio","colorWhite":"Bianco","colorGold":"Oro","colorSilver":"Argento"},
};
