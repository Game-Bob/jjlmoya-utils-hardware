import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "motstand-fargkodskalkylator";
const title = "Kalkylator för motståndets färgkod";
const description = "Avkoda färgband på motstånd och beräkna resistans, tolerans, intervall och temperaturkoefficient. Arbeta även baklänges från ett målvärde eller läs SMD märkning.";

const faqData = [{"question":"Hur läser man färgbanden på ett motstånd?","answer":"Börja från sidan mittemot toleransbandet, som ofta sitter lite längre bort. De första två eller tre banden ger siffrorna, följt av multiplikator och tolerans."},{"question":"Vad betyder en kod med fyra band?","answer":"De två första banden är signifikanta siffror, det tredje är multiplikatorn och det fjärde anger toleransen."},{"question":"Vilken tolerans har ett motstånd med tre band?","answer":"Utan ett toleransband tolkas en kod med tre band vanligtvis som plus eller minus 20 procent."},{"question":"Vad är skillnaden mellan fem och sex band?","answer":"Fem band använder tre siffror och en tolerans. Det sjätte bandet lägger till temperaturkoefficienten i ppm per grad Celsius."},{"question":"Kan verktyget läsa SMD märkningar?","answer":"Ja. Skriv in tre eller fyra siffror eller en notation som 4R7. R markerar decimaltecknets plats."},{"question":"Bevisar resultatet att ett motstånd är säkert?","answer":"Nej. Kontrollera även effekt, arbetsspänning, temperaturintervall, tolerans och kretsens krav."}];

const howToData = [{"name":"Välj antal band","text":"Välj tre, fyra, fem eller sex band beroende på komponenten."},{"name":"Välj varje färg","text":"Aktivera en bandposition och välj färgen i paletten. Bilden uppdateras direkt."},{"name":"Läs resultatet","text":"Kontrollera resistans, tolerans, tillåtet intervall och eventuell temperaturkoefficient."},{"name":"Bekräfta riktningen","text":"Placera toleransbandet till höger om möjligt och jämför med schema eller datablad."}];

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
  inLanguage: "sv",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"Kalkylator för motståndets färgkod","level":2},{"type":"paragraph","html":"Avkoda motstånd med tre, fyra, fem eller sex band direkt i webbläsaren. Varje färg omvandlas till siffror, multiplikator, tolerans, resistansintervall och temperaturkoefficient."},{"type":"title","text":"Så läser du en färgkod för motstånd","level":3},{"type":"paragraph","html":"Börja på motsatt sida från toleransbandet. Två eller tre band bildar siffrorna, nästa band ger multiplikatorn och toleransbandet beskriver avvikelsen från det nominella värdet."},{"type":"table","headers":["Antal band","Signifikanta siffror","Extra markering","Vanlig användning"],"rows":[["Tre band","Två","Standardtolerans på 20 procent","Allmän identifiering"],["Fyra band","Två","Tolerans","Vanliga trådade motstånd"],["Fem band","Tre","Tolerans","Precisionsmotstånd"],["Sex band","Tre","Tolerans och temperaturkoefficient","Precisionskretsar"]]},{"type":"title","text":"Arbeta baklänges från ett värde","level":3},{"type":"paragraph","html":"Använd baklängesläget när du känner till den önskade resistansen. Verktyget avrundar till ett värde som kan representeras och visar motsvarande färgsekvens."},{"type":"title","text":"SMD märkning på motstånd","level":3},{"type":"paragraph","html":"SMD motstånd använder ofta tre eller fyra siffror. Den sista siffran anger tiopotensen för de första siffrorna. R ersätter decimaltecknet, så 4R7 betyder 4,7 ohm."},{"type":"title","text":"Kontroller före montering","level":2},{"type":"list","items":["Jämför värdet med schema eller servic dokumentation.","Kontrollera tolerans och effekt i databladet.","Använd avståndet till toleransbandet för att bekräfta läsriktningen.","Mät en frånkopplad komponent om märkningen är skadad eller oklar.","En färgkod bevisar inte elektrisk säkerhet."]},{"type":"tip","title":"Viktigt","html":"Verktyget identifierar märkningen. Det mäter inte faktisk resistans, effekt, isolationsspänning eller långsiktig tillförlitlighet."}],
  ui: {"sceneKicker":"EIA:s färgspektrumlaboratorium","hint":"Tryck på ett band och välj en färg. Motståndet svarar direkt.","decodeMode":"Avkoda band","reverseMode":"Arbeta baklänges","smdMode":"Avkoda SMD","bandCount":"Antal band","bandCount3":"3 band","bandCount4":"4 band","bandCount5":"5 band","bandCount6":"6 band","selectBand":"Välj ett band","colorPalette":"Färgpalett","bandLabel":"Band","resistance":"Resistans","tolerance":"Tolerans","range":"Tillåtet intervall","temperatureCoefficient":"Temperaturkoefficient","noTempco":"Inte kodad","targetResistance":"Målresistans i ohm","targetHint":"Ange ett tal som 4700.","targetUnit":"ohm","toleranceChoice":"Måltolerans","tolerance20":"20 procent","tolerance10":"10 procent","tolerance5":"5 procent","tolerance2":"2 procent","tolerance1":"1 procent","smdCode":"SMD märkning","smdHint":"Använd 472 för 4,7 kΩ eller 4R7 för 4,7 Ω.","decodeSmd":"Avkoda märkning","valueUnit":"Ω","ohms":"ohm","kiloohms":"kiloohm","megaohms":"megaohm","gigaohms":"gigaohm","minValue":"Minimum","maxValue":"Maximum","actualValue":"Avkodat värde","requestedValue":"Begärt värde","status":"Status","statusReady":"Redo att läsa","statusCheck":"Närmaste representerbara värde","statusInvalid":"Ogiltig kombination","orientationNote":"Riktningsledning: håll det lite avskilda toleransbandet till höger. Guld och silver är inte sifferband.","reverseNote":"Baklängesläget väljer ett representerbart värde och visar den färgkod som skapas.","smdNote":"Den här kompakta vyn läser SMD märkningen, men koden anger ingen tolerans.","colorBlack":"Svart","colorBrown":"Brun","colorRed":"Röd","colorOrange":"Orange","colorYellow":"Gul","colorGreen":"Grön","colorBlue":"Blå","colorViolet":"Violett","colorGray":"Grå","colorWhite":"Vit","colorGold":"Guld","colorSilver":"Silver"},
};

