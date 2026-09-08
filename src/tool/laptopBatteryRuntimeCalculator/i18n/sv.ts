import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'berakna-laptopens-batteritid';
const title = 'Kalkylator för laptopens batteritid';
const description = 'Uppskatta hur länge din laptop kan fungera med aktuell laddning vid lätt, balanserad och intensiv användning.';
const faq = [
  { question: 'Vad uppskattar den här kalkylatorn?', answer: 'Den delar den tillgängliga batterienergin med den effekt du anger för varje arbetsbelastning. Det är ett planeringsvärde, inte en direktsensor eller en garanti från tillverkaren.' },
  { question: 'Var hittar jag batteriets kapacitet och hälsa?', answer: 'Titta i en batterirapport eller tillverkarens dokumentation efter designkapacitet och aktuell full laddningskapacitet. Batterihälsan är den aktuella fulla kapaciteten som procent av den ursprungliga.' },
  { question: 'Varför varierar tiden mellan olika arbetsuppgifter?', answer: 'En laptop som använder fler watt förbrukar samma lagrade energi snabbare. Videosamtal, spel, extern skärm, hög ljusstyrka och långvarig CPU- eller GPU-belastning ökar medelförbrukningen.' },
  { question: 'Kan verktyget läsa laptopens batteri automatiskt?', answer: 'Nej. Verktyget körs lokalt i webbläsaren och använder dina värden. Byt ut exemplen mot en aktuell rapport eller uppmätt medeleffekt när noggrannheten är viktig.' },
];
const howTo = [
  { name: 'Läs den ursprungliga kapaciteten', text: 'Ange designkapaciteten i wattimmar. Om du bara känner till milliamperetimmar och volt konverterar du först med Wh = V × Ah.' },
  { name: 'Beskriv batteriet du har nu', text: 'Ange aktuell full laddningskapacitet som procent av den ursprungliga och ställ in laddningen när arbetet börjar.' },
  { name: 'Ställ in realistiska förbrukningar', text: 'Välj den närmaste profilen och ändra wattvärdena om du har en mätning från datorn eller en energimätare.' },
  { name: 'Planera för resan', text: 'Läs de tre linjerna och använd den kortaste för den krävande uppgiften. Vid liten marginal bör du minska belastningen eller ta med laddaren.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'sv' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Vad en uppskattning av batteritiden faktiskt mäter', level: 2 },
    { type: 'paragraph', html: 'Ett laptopbatteri lagrar energi i wattimmar. Datorn använder energin med en effekt som mäts i watt. Kalkylatorn omvandlar värdena till en tidsuppskattning så att du kan avgöra om laddningen räcker för en resa, ett möte, en föreläsning eller en arbetssession.' },
    { type: 'paragraph', html: 'Modellen uppskattar först dagens fulla laddningskapacitet från ursprunglig kapacitet och batterihälsa. Sedan används laddningsprocenten vid start. Varje arbetslinje förbrukar en del av samma energibudget.' },
    { type: 'title', text: 'Välj indata du kan lita på', level: 2 },
    { type: 'paragraph', html: 'Använd en batterirapport eller tillverkarens specifikation. Designkapacitet, aktuell full laddning och återstående laddning är olika värden. Om du bara känner till volt och amperetimmar använder du <strong>Wh = V × Ah</strong>; 1 000 mAh är 1 Ah.' },
    { type: 'list', items: ['Beräkna hälsan genom att dela aktuell full kapacitet med designkapaciteten.', 'Ange laddningen som faktiskt finns när sessionen börjar.', 'Använd uppmätt medeleffekt när en lång session behöver planeras.', 'Ta med extern skärm, docka eller krävande program i arbetsbelastningen.'] },
    { type: 'title', text: 'Läs tiden som en planeringsmarginal', level: 2 },
    { type: 'paragraph', html: 'Den lätta linjen passar läsning och enkla dokument, den balanserade vanlig multitasking och den intensiva visar kostnaden för långvarigt hög förbrukning. Jämför arbetet med tiden du behöver och planera efter det kortaste trovärdiga resultatet.' },
    { type: 'table', headers: ['Signal', 'Betydelse', 'Åtgärd'], rows: [['Bekvämt', 'Minst sex timmar vid den belastningen', 'Sessionen har god marginal.'], ['Fungerar', 'Tre till sex timmar', 'Passar en avgränsad session, ta med en laddare.'], ['Snävt', 'En till tre timmar', 'Minska förbrukningen eller planera en laddpaus.'], ['Brådskande', 'Mindre än en timme', 'Räkna med att laddare behövs.']] },
    { type: 'title', text: 'Vad uppskattningen inte kan lova', level: 2 },
    { type: 'paragraph', html: 'Den verkliga förbrukningen ändras hela tiden. Ljusstyrka, trådlösa anslutningar, temperatur, bakgrundsjobb, firmware och systemreserver flyttar sluttiden. Verktyget läser inte sensorer, modellerar inte batterikemi och garanterar ingen viss tid.' },
    { type: 'tip', title: 'Mättips', html: 'Anteckna batteriprocent och förfluten tid under en representativ session. Ersätt profilens watt med det observerade genomsnittet och räkna om varje arbetstyp.' },
  ],
  ui: {
    batteryInputsLabel: 'Batteriets startpunkt', designCapacityLabel: 'Batteriets ursprungliga kapacitet', designCapacityHint: 'Energin i ett nytt batteri', healthLabel: 'Batterihälsa', healthHint: 'Aktuell full laddning jämfört med ny', chargeLabel: 'Laddning vid start', chargeHint: 'Förväntad laddning när arbetet börjar', scenariosLabel: 'Batteritid per arbetsbelastning', scenariosHint: 'Ändra medeleffekten för varje typ av arbete', powerLabel: 'Genomsnittlig förbrukning', wattsSuffix: 'W', presetsLabel: 'Börja med en arbetsprofil', presetBalanced: 'Dagligt arbete', presetTravel: 'Resesparläge', presetCreative: 'Intensivt kreativt arbete', runwayLabel: 'Energibana', runwayCaption: 'Varje linje visar när den arbetsbelastningen skulle tömma samma startladdning.', availableEnergyLabel: 'Tillgänglig energi nu', fullCapacityLabel: 'Aktuell full laddningskapacitet', shortestScenarioLabel: 'Planera efter', runtimeLabel: 'Uppskattad batteritid', loadLabel: 'Effekt', healthStateExcellent: 'Batteriets skick är utmärkt', healthStateGood: 'Batteriets skick är bra', healthStateAging: 'Batteriet åldras', healthStateWorn: 'Batteriet är slitet', statusComfortable: 'God marginal', statusWorkable: 'Fungerande session', statusTight: 'Snäv marginal', statusUrgent: 'Laddare behövs', scenarioLight: 'Lätt arbete', scenarioBalanced: 'Balanserat arbete', scenarioIntense: 'Intensivt arbete', sceneBatteryLabel: 'Startladdning', sceneEnergyLabel: 'Tillgänglig energi', sceneTimeLabel: 'Batteritid', noteLabel: 'Modellens gräns', noteText: 'Detta är en planeringsuppskattning från dina indata. Verklig förbrukning och systemreserver kan förkorta tiden.',
  },
};
