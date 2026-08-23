import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'spanningsdeler-rekenmachine';
const title = 'Spanningsdeler rekenmachine';
const description = 'Bereken de onbelaste uitgangsspanning, stroom, vermogensdissipatie of de onderste weerstand voor een gewenste uitgangsspanning.';

const faqData = [
  { question: 'Wat doet een spanningsdeler rekenmachine?', answer: 'Het berekent de onbelaste uitgangsspanning van twee in serie geschakelde weerstanden. Voer de voedingsspanning, R1 en R2 in om Vout te berekenen, of voer Vout in om R2 te berekenen.' },
  { question: 'Hoe bereken je de uitgangsspanning?', answer: 'Gebruik Vout = Vs x R2 / (R1 + R2), waarbij R1 met de voeding is verbonden en R2 met massa.' },
  { question: 'Hoe bereken je de weerstand voor een gewenste spanning?', answer: 'Als R1 bekend is, gebruik R2 = R1 x Vtarget / (Vs - Vtarget). De gewenste spanning moet tussen nul en Vs liggen.' },
  { question: 'Hoeveel stroom verbruikt een spanningsdeler?', answer: 'De stroom is I = Vs / (R1 + R2). Dit is de continue stroom die uit de bron wordt getrokken.' },
  { question: 'Hoe controleer je het vermogen van de weerstanden?', answer: 'Het gedissipeerde vermogen is P = I² x R. Kies weerstanden met een voldoende vermogenswaarde.' },
  { question: 'Kun je een spanningsdeler als voeding gebruiken?', answer: 'Meestal niet. Een belasting op Vout verandert de effectieve weerstand. Gebruik een buffer of spanningsregelaar bij stroomafname.' },
];

const howToData = [
  { name: 'Kies de berekeningsmodus', text: 'Gebruik Vout voorspellen wanneer beide weerstanden bekend zijn. Gebruik R2 zoeken wanneer de voeding, R1 en Vout bekend zijn.' },
  { name: 'Voer voeding en R1 in', text: 'Voer de voedingsspanning in volt in en de bovenste weerstand R1 in ohm.' },
  { name: 'Voer R2 of gewenste spanning in', text: 'Voer in modus Vout voorspellen R2 in. Voer in modus R2 zoeken de gewenste spanning in.' },
  { name: 'Lees de resultaten af', text: 'Bekijk de uitgangsspanning, stroom en het vermogen van elke weerstand.' },
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<VoltageDividerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Berekeningen en werking van een spanningsdeler', level: 2 },
    { type: 'paragraph', html: 'Een spanningsdeler van twee in serie geschakelde weerstanden zet een voedingsspanning om in een kleinere uitgangsspanning op het knooppunt. Wanneer de bovenste weerstand <code>R1</code> is aangesloten op de voeding en de onderste weerstand <code>R2</code> op massa is aangesloten, berekent u de ideale onbelaste uitgangsspanning volgens de formule <code>Vout = Vs x R2 / (R1 + R2)</code>. Deze rekenmachine toont ook de continue stroom en het vermogen dat als warmte in beide weerstanden wordt gedissipeerd.' },
    { type: 'title', text: 'De benodigde weerstand voor een gewenste spanning berekenen', level: 3 },
    { type: 'paragraph', html: 'Selecteer de modus R2 zoeken wanneer u de voedingsspanning, de bovenste weerstand R1 en de gewenste uitgangsspanning op het knooppunt kent. De rekenmachine vormt de formule om naar <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>. Een gewenste spanning dicht bij de voedingsspanning vereist een aanzienlijk grotere R2, terwijl een spanning dicht bij nul een kleinere R2 vraagt.' },
    { type: 'title', text: 'Delerstroom en vermogensdissipatie analyseren', level: 3 },
    { type: 'paragraph', html: 'De spanningsdeler trekt een continue stroom van <code>I = Vs / (R1 + R2)</code> uit de spanningsbron. Elke weerstand dissipeert vermogen volgens <code>P = I² x R</code>. Controleer beide waarden zorgvuldig ten opzichte van het nominale vermogen van de gekozen componenten, vooral bij gebruik op hogere spanningsrails.' },
    { type: 'title', text: 'Invloed van een aangesloten belasting en circuit', level: 3 },
    { type: 'paragraph', html: 'De berekende resultaten gaan uit van een onbelaste spanningsdeler. Elk circuit dat op Vout wordt aangesloten staat parallel aan R2, waardoor de effectieve onderste weerstand afneemt en zowel de spanning als de stroom veranderen. Gebruik voor signalen of referenties die stroom moeten leveren aan een volgende trap een op-amp buffer of een spanningsregelaar.' },
    { type: 'list', items: ['Houd de gewenste spanning strikt tussen nul en de voedingsspanning.', 'Gebruik steeds dezelfde weerstandseenheden voor R1 en R2.', 'Controleer het vermogen van beide weerstanden afzonderlijk.', 'Houd rekening met toleranties van onderdelen en schommelingen in de voeding.', 'Beschouw het resultaat als een onbelaste spanning totdat de belasting is meegeboetseerd.'] },
    { type: 'tip', title: 'Het knooppunt is geen vermogensbron', html: 'Een spanningsdeler is een eenvoudige manier om een referentiesignaal te maken of een signaal te verzwakken, maar heeft een niet-nul uitgangsimpedantie. Voeg een buffer toe bij stroomafname.' },
  ],
  ui: {
    modeHeader: 'Berekeningsmodus',
    modePredict: 'Vout voorspellen',
    modeTarget: 'R2 zoeken',
    inputHeader: 'Circuitparameters',
    supplyLabel: 'Voedingsspanning Vs',
    topLabel: 'Bovenste weerstand R1',
    bottomLabel: 'Onderste weerstand R2',
    targetLabel: 'Gewenste uitgangsspanning Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Spanningsverloop',
    outputLabel: 'Uitgangsspanning',
    currentLabel: 'Delerstroom',
    totalPowerLabel: 'Totaal vermogen',
    topPowerLabel: 'Vermogen R1',
    bottomPowerLabel: 'Vermogen R2',
    ratioLabel: 'van voeding',
    statusNominal: 'Geldige berekening',
    statusInvalid: 'Controleer invoer',
    statusTargetInvalid: 'Gewenste spanning moet onder Vs liggen',
    formulaHeader: 'Toegepaste formule',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). Het oplichtende punt toont de uitgangsspanning.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Berekent de benodigde R2.',
    supplyNode: 'INGANG',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'MASSA',
    hint: 'Voer R1 en R2 in om Vout te berekenen.',
    targetHint: 'Kies een gewenste spanning tussen nul en Vs.',
    note: 'Onbelaste deler. Een belasting verandert de uitgangsspanning.',
  },
};
