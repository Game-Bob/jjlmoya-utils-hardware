import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'laptop-accuduur-calculator';
const title = 'Calculator voor de batterijduur van een laptop';
const description = 'Schat hoe lang je laptop meegaat met de huidige lading bij licht, normaal en intensief gebruik.';
const faq = [
  { question: 'Wat schat deze laptopbatterijcalculator?', answer: 'De calculator deelt de beschikbare energie door het ingevoerde vermogen voor elke werklast. Het resultaat helpt bij plannen en is geen live meting of fabrieksgarantie.' },
  { question: 'Waar vind ik de capaciteit en conditie van de batterij?', answer: 'Bekijk een batterijrapport of de gegevens van de fabrikant voor ontwerpcapaciteit en huidige volledige laadcapaciteit. De batterijconditie is de huidige laadcapaciteit als percentage van de oorspronkelijke capaciteit.' },
  { question: 'Waarom verschilt de duur per soort werk?', answer: 'Een laptop die meer watt gebruikt, verbruikt dezelfde opgeslagen energie sneller. Videobellen, gamen, een extern scherm, hoge helderheid en langdurige CPU- of GPU-belasting verhogen het gemiddelde verbruik.' },
  { question: 'Kan de tool mijn laptopbatterij automatisch uitlezen?', answer: 'Nee. De tool werkt lokaal in de browser en gebruikt jouw invoer. Vervang de voorbeeldwaarden door een recent rapport of een gemeten gemiddeld vermogen voor een betere schatting.' },
];
const howTo = [
  { name: 'De oorspronkelijke capaciteit lezen', text: 'Voer de ontwerpcapaciteit in wattuur in. Ken je alleen milliampère-uur en volt, reken dan eerst om met Wh = V × Ah.' },
  { name: 'De huidige batterij beschrijven', text: 'Vul de huidige volledige laadcapaciteit in als percentage van de oorspronkelijke capaciteit en geef de lading bij vertrek op.' },
  { name: 'Realistische verbruiken instellen', text: 'Kies de dichtstbijzijnde preset en pas de wattwaarden aan als je een meting van de laptop of een energiemeter hebt.' },
  { name: 'Een reisbeslissing nemen', text: 'Lees de drie lijnen en gebruik de kortste voor je zwaarste taak. Bij een krap of dringend resultaat verlaag je de belasting of neem je de lader mee.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'nl' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Wat een schatting van de batterijduur echt meet', level: 2 },
    { type: 'paragraph', html: 'Een laptopbatterij slaat energie op in wattuur. De laptop gebruikt die energie met een vermogen in watt. De calculator maakt van die twee waarden een tijdsduur, zodat je kunt bepalen of de lading genoeg is voor een reis, vergadering, college of werksessie.' },
    { type: 'paragraph', html: 'Eerst schat het model de huidige volledige laadcapaciteit op basis van de oorspronkelijke capaciteit en batterijconditie. Daarna past het de verwachte lading bij de start toe. Elke werklast gebruikt een deel van hetzelfde energiebudget.' },
    { type: 'title', text: 'Betrouwbare invoer kiezen', level: 2 },
    { type: 'paragraph', html: 'Gebruik een batterijrapport of de specificaties van de fabrikant. Ontwerpcapaciteit, huidige volledige laadcapaciteit en resterende lading zijn verschillende waarden. Als je alleen volt en ampère-uur kent, gebruik dan <strong>Wh = V × Ah</strong>; 1.000 mAh is 1 Ah.' },
    { type: 'list', items: ['Bereken de batterijconditie als huidige volledige laadcapaciteit gedeeld door ontwerpcapaciteit.', 'Voer de lading in die werkelijk beschikbaar is bij de start.', 'Gebruik een gemeten gemiddeld vermogen voor lange of belangrijke sessies.', 'Neem een extern scherm, dock of zware toepassing op in de gekozen werklast.'] },
    { type: 'title', text: 'De duur als planningsmarge lezen', level: 2 },
    { type: 'paragraph', html: 'De lichte lijn past bij lezen en eenvoudige documenten, de gebalanceerde lijn bij normaal multitasken en de intensieve lijn bij langdurig hoog verbruik. Vergelijk jouw werk met de benodigde tijd en plan met het kortste geloofwaardige resultaat.' },
    { type: 'table', headers: ['Signaal', 'Betekenis', 'Actie'], rows: [['Ruim', 'Zes uur of meer bij dit verbruik', 'De sessie heeft een brede marge.'], ['Haalbaar', 'Drie tot zes uur', 'Geschikt voor een afgebakende sessie, neem een laderplan mee.'], ['Krap', 'Een tot drie uur', 'Verlaag het verbruik of plan een laadpauze.'], ['Dringend', 'Minder dan een uur', 'Beschouw de werklast als laderafhankelijk.']] },
    { type: 'title', text: 'Wat de schatting niet kan beloven', level: 2 },
    { type: 'paragraph', html: 'Het werkelijke verbruik verandert voortdurend. Helderheid, draadloze verbindingen, temperatuur, achtergrondtaken, firmware en systeemreserves verschuiven het moment van leegraken. De tool leest geen sensoren, modelleert geen batterijchemie en garandeert geen vaste duur.' },
    { type: 'tip', title: 'Meetadvies', html: 'Noteer batterijpercentage en verstreken tijd tijdens een representatieve sessie. Vervang de preset-wattwaarden door het waargenomen gemiddelde en bereken elk werktype opnieuw.' },
  ],
  ui: {
    batteryInputsLabel: 'Startpunt batterij', designCapacityLabel: 'Oorspronkelijke batterijcapaciteit', designCapacityHint: 'Energie van de nieuwe batterij', healthLabel: 'Batterijconditie', healthHint: 'Huidige volledige lading vergeleken met nieuw', chargeLabel: 'Lading bij vertrek', chargeHint: 'Lading die je bij de start verwacht', scenariosLabel: 'Batterijduur per werklast', scenariosHint: 'Bewerk het gemiddelde vermogen per soort werk', powerLabel: 'Gemiddeld verbruik', wattsSuffix: 'W', presetsLabel: 'Start met een werklastset', presetBalanced: 'Dagelijks werk', presetTravel: 'Reisspaarstand', presetCreative: 'Intensief creatief werk', runwayLabel: 'Energiepad', runwayCaption: 'Elke lijn toont wanneer die werklast dezelfde startlading verbruikt.', availableEnergyLabel: 'Nu beschikbare energie', fullCapacityLabel: 'Huidige volledige laadcapaciteit', shortestScenarioLabel: 'Plan rond', runtimeLabel: 'Geschatte batterijduur', loadLabel: 'Vermogen', healthStateExcellent: 'Batterijconditie uitstekend', healthStateGood: 'Batterijconditie goed', healthStateAging: 'Batterij veroudert', healthStateWorn: 'Batterij versleten', statusComfortable: 'Ruime marge', statusWorkable: 'Haalbare sessie', statusTight: 'Krappe marge', statusUrgent: 'Lader vereist', scenarioLight: 'Licht werk', scenarioBalanced: 'Gebalanceerd werk', scenarioIntense: 'Intensief werk', sceneBatteryLabel: 'Startlading', sceneEnergyLabel: 'Beschikbare energie', sceneTimeLabel: 'Batterijduur', noteLabel: 'Modelgrens', noteText: 'Dit is een planningsschatting op basis van jouw invoer. Werkelijk verbruik en systeemreserves kunnen de duur verkorten.',
  },
};
