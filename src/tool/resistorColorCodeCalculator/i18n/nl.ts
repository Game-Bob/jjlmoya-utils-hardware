import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "weerstand-kleurcode-calculator";
const title = "Weerstand kleurcode calculator";
const description = "Decodeer de kleurbanden van een weerstand en bereken weerstand, tolerantie, bereik en temperatuurcoëfficiënt. Werk ook terug vanaf een doelwaarde of lees SMD-markeringen.";

const faqData = [{"question":"Hoe lees je de kleurbanden van een weerstand?","answer":"Begin aan de kant tegenover de tolerantieband, die vaak iets verder uit elkaar staat. De eerste twee of drie banden geven de cijfers, daarna volgen vermenigvuldiger en tolerantie."},{"question":"Wat betekent een code met vier banden?","answer":"De eerste twee banden zijn significante cijfers, de derde is de vermenigvuldiger en de vierde geeft de tolerantie aan."},{"question":"Welke tolerantie heeft een weerstand met drie banden?","answer":"Zonder tolerantieband wordt een code met drie banden meestal gelezen als plus of min 20 procent."},{"question":"Wat is het verschil tussen vijf en zes banden?","answer":"Vijf banden gebruiken drie cijfers en een tolerantie. De zesde band voegt de temperatuurcoëfficiënt in ppm per graad Celsius toe."},{"question":"Kan deze tool SMD-markeringen lezen?","answer":"Ja. Voer drie of vier cijfers in, of een notatie zoals 4R7. De R markeert de decimale positie."},{"question":"Bewijst het resultaat dat een weerstand veilig is?","answer":"Nee. Controleer ook vermogen, werkspanning, temperatuurbereik, tolerantie en de eisen van het circuit."}];

const howToData = [{"name":"Kies het aantal banden","text":"Selecteer drie, vier, vijf of zes banden volgens het onderdeel dat je bekijkt."},{"name":"Kies elke kleur","text":"Activeer een bandpositie en kies de kleur uit het palet. De tekening verandert direct."},{"name":"Lees het resultaat","text":"Gebruik de grote waarde voor de weerstand en de kleinere velden voor tolerantie, bereik en temperatuurcoëfficiënt."},{"name":"Controleer de richting","text":"Houd de tolerantieband indien mogelijk rechts en vergelijk de uitkomst met schema of datasheet."}];

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
  inLanguage: "nl",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"Weerstand kleurcode calculator","level":2},{"type":"paragraph","html":"Decodeer weerstanden met drie, vier, vijf of zes banden direct in de browser. Elke kleur wordt omgezet in cijfers, vermenigvuldiger, tolerantie, weerstandsbereik en temperatuurcoëfficiënt."},{"type":"title","text":"Een weerstandskleurcode lezen","level":3},{"type":"paragraph","html":"Begin tegenover de tolerantieband. Twee of drie banden vormen de cijfers, de volgende band geeft de vermenigvuldiger en de tolerantieband beschrijft de verwachte afwijking van de nominale waarde."},{"type":"table","headers":["Aantal banden","Significante cijfers","Extra aanduiding","Typisch gebruik"],"rows":[["Drie banden","Twee","20 procent standaardtolerantie","Algemene identificatie"],["Vier banden","Twee","Tolerantie","Veelvoorkomende bedrade weerstanden"],["Vijf banden","Drie","Tolerantie","Precisieweerstanden"],["Zes banden","Drie","Tolerantie en temperatuurcoëfficiënt","Precisieschakelingen"]]},{"type":"title","text":"Terugrekenen vanaf een doelwaarde","level":3},{"type":"paragraph","html":"Gebruik de terugwerkmodus als je de gewenste weerstand kent. De tool rondt af naar een waarde die met het gekozen aantal banden kan worden weergegeven en toont de bijbehorende kleuren."},{"type":"title","text":"SMD-weerstandsmarkeringen","level":3},{"type":"paragraph","html":"SMD-weerstanden gebruiken vaak drie of vier cijfers. Het laatste cijfer is de macht van tien voor de eerste cijfers. R vervangt de decimale komma, dus 4R7 betekent 4,7 ohm."},{"type":"title","text":"Controleren voor installatie","level":2},{"type":"list","items":["Vergelijk de waarde met het schema of de servicedocumentatie.","Controleer tolerantie en vermogen in het datasheet.","Gebruik de afstand van de tolerantieband om de leesrichting te bevestigen.","Meet een losgenomen onderdeel als de markering beschadigd of onduidelijk is.","Een kleurcode bewijst niet dat een onderdeel elektrisch veilig is."]},{"type":"tip","title":"Tip","html":"De tool identificeert de markering. Hij meet geen echte weerstand, vermogen, isolatiespanning of betrouwbaarheid op lange termijn."}],
  ui: {"sceneKicker":"EIA kleurenspectrumlab","hint":"Tik op een band en kies een kleur. De weerstand antwoordt meteen.","decodeMode":"Bandcodes decoderen","reverseMode":"Terugrekenen","smdMode":"SMD decoderen","bandCount":"Aantal banden","bandCount3":"3 banden","bandCount4":"4 banden","bandCount5":"5 banden","bandCount6":"6 banden","selectBand":"Kies een band","colorPalette":"Kleurenpalet","bandLabel":"Band","resistance":"Weerstand","tolerance":"Tolerantie","range":"Toegestaan bereik","temperatureCoefficient":"Temperatuurcoëfficiënt","noTempco":"Niet gecodeerd","targetResistance":"Doelweerstand in ohm","targetHint":"Voer een getal in zoals 4700.","targetUnit":"ohm","toleranceChoice":"Doeltolerantie","tolerance20":"20 procent","tolerance10":"10 procent","tolerance5":"5 procent","tolerance2":"2 procent","tolerance1":"1 procent","smdCode":"SMD-markering","smdHint":"Gebruik 472 voor 4,7 kΩ of 4R7 voor 4,7 Ω.","decodeSmd":"Markering decoderen","valueUnit":"Ω","ohms":"ohm","kiloohms":"kiloohm","megaohms":"megaohm","gigaohms":"gigaohm","minValue":"Minimum","maxValue":"Maximum","actualValue":"Gecodeerde waarde","requestedValue":"Gevraagde waarde","status":"Status","statusReady":"Klaar om te lezen","statusCheck":"Dichtstbijzijnde weergeefbare waarde","statusInvalid":"Ongeldige combinatie","orientationNote":"Richtingshint: houd de iets losstaande tolerantieband rechts. Goud en zilver zijn geen cijferbanden.","reverseNote":"De terugwerkmodus kiest een weergeefbare waarde en toont de gemaakte kleurcode.","smdNote":"Deze compacte weergave leest de SMD-markering, maar de code bevat geen tolerantie.","colorBlack":"Zwart","colorBrown":"Bruin","colorRed":"Rood","colorOrange":"Oranje","colorYellow":"Geel","colorGreen":"Groen","colorBlue":"Blauw","colorViolet":"Violet","colorGray":"Grijs","colorWhite":"Wit","colorGold":"Goud","colorSilver":"Zilver"},
};
