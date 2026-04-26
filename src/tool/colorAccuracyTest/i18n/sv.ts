import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'fargprecision-test';
const title = 'Färgprecisionstest - Spectrum Canvas';
const description =
  'Kalibrera din display med precision. Testa sRGB- och DCI-P3-färgrymder, upptäck färgförskjutningar, mät noggrannhet med Delta E-metriker och generera professionella kalibreringsrapporter.';

const faqData = [
  {
    question: 'Vad är färgprecision och varför spelar det roll?',
    answer:
      'Färgprecision mäter hur troget en display återger färger jämfört med en standardreferens. För designers, fotografer och innehållsskapare är exakta färger avgörande för att säkerställa att arbetet ser konsekvent ut på olika enheter.',
  },
  {
    question: 'Vad är skillnaden mellan sRGB och DCI-P3?',
    answer:
      'sRGB är standardfärgrymden för webben och konsumentskärmar. DCI-P3 är ett bredare färgomfång som används inom digital bio och professionella displayer. DCI-P3 täcker ungefär 25 % fler färger än sRGB.',
  },
  {
    question: 'Vad är Delta E och hur mäts det?',
    answer:
      'Delta E (ΔE) är ett numeriskt mått på färgskillnaden som uppfattas av det mänskliga ögat. En Delta E under 1 är ouppfattbar, under 2 är mycket bra, under 4 är acceptabel och över 4 blir den märkbar. Vårt test använder CIE 1976 Delta E-beräkningar.',
  },
  {
    question: 'Kan jag använda detta verktyg för att kalibrera min hårdvara?',
    answer:
      'Detta verktyg ger en visuell kalibreringsreferens och precisionsmätningar. För professionell kalibrering bör du kombinera dessa resultat med hårdvarukalibreringsverktyg (kolorimetrar) och dedikerad programvara som ColorThink eller Datacolor SpyderCheckr.',
  },
  {
    question: 'Vilka färgrymder testas?',
    answer:
      'Vi testar sRGB (standard), DCI-P3 (bio) och vitpunktsprecision via standardljuskällorna D65 (6500K) och D93 (9300K). Testet inkluderar även verifiering av gammakorrigering.',
  },
];

const howToData = [
  {
    name: 'Välj ditt färgomfång',
    text: 'Välj mellan sRGB (standard webb/konsument) eller DCI-P3 (professionell bio). Din display anpassar sin testpalett därefter.',
  },
  {
    name: 'Namnge din hårdvara (valfritt)',
    text: 'Ange ett beskrivande namn för din monitor eller enhet (t.ex. "MacBook Pro 16 M1"). Detta personifierar din rapport.',
  },
  {
    name: 'Gå till helskärmsläge',
    text: 'Tryck på F11 eller helskärmsknappen för att eliminera webbläsarens användargränssnitt och säkerställa maximal visningsyta för korrekta tester.',
  },
  {
    name: 'Genomför färgtesterna',
    text: 'Gå igenom spektral renhet (enfärgade ytor), gradientdynamik (mjuka övergångar), black crush-detektering (skuggdetaljer) och vitpunktskalibrering.',
  },
  {
    name: 'Granska resultat och exportera',
    text: 'Generera en visuell rapport med 3D-gamutvisualisering, Delta E-metriker och kalibreringsrekommendationer. Exportera som PDF för arkivering.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Professionellt färgprecisionstest: Kalibrera din display med precision',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas är ett professionellt verktyg för test av färgprecision designat för alla som arbetar med färgkritiska projekt. Oavsett om du är fotograf, designer, innehållsskapare eller hårdvaruentusiast hjälper detta verktyg dig att <strong>diagnostisera färgförskjutningar</strong>, <strong>mäta displayens noggrannhet</strong> och <strong>generera kalibreringsrapporter</strong>.',
    },
    {
      type: 'title',
      text: 'Varför färgprecision är viktigt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bara en procentenhets skillnad i färgåtergivning kan vara skillnaden mellan ett "wow"-ögonblick och en reaktion av typen "det där ser fel ut". Professionella displayer levererar noggrannhet inom <strong>Delta E &lt; 2</strong>. Konsumentskärmar driver ofta iväg till Delta E 4-6+, vilket orsakar:',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Fotografier som ser livfulla ut på din monitor men matta i tryck</li><li>Videoredigeringar som inte matchar kundens förväntningar</li><li>Webbdesignskisser som inte stämmer överens med varumärkets specifikationer</li><li>Hårdvaruprojekt där färgindikatorer feltolkas</li></ul>',
    },
    {
      type: 'title',
      text: 'Förstå färgrymder: sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (Standard Color Space)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'sRGB etablerades av Microsoft och HP 1996 och är den <strong>universella standarden för konsumentelektronik</strong> och webben. Den använder ett triangulärt färgomfång definierat av tre primärfärger (Röd: 0.6400x 0.3300, Grön: 0.3000 0.6000, Blå: 0.1500 0.0600).',
    },
    {
      type: 'paragraph',
      html: '<strong>Egenskaper:</strong><ul><li>Täcker ~35 % av det synliga färgspektrumet</li><li>Optimerad för typiska omgivande ljusförhållanden</li><li>Gamma: 2.2 (matchar de flesta konsumentskärmar)</li><li>Lämplig för: webb, sociala medier, konsumentfoton</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Digital Cinema Gamut)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'DCI-P3 utvecklades av Digital Cinema Initiatives-konsortiet och är en <strong>färgrymd i bioklass</strong> designad för biografprojektion och professionella displayer. Den omfattar ~25 % fler färger än sRGB.',
    },
    {
      type: 'paragraph',
      html: '<strong>Egenskaper:</strong><ul><li>Täcker ~53 % av det synliga färgspektrumet</li><li>Optimerad för mörka biografmiljöer</li><li>Gamma: 2.6 (gammakorrigerad för hög kontrast)</li><li>Lämplig för: filmskapande, professionell fotografi, HDR-innehåll</li></ul>',
    },
    {
      type: 'title',
      text: 'Vad är Delta E? Kvantifiera färgskillnader',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E (ΔE) är <strong>måttet på mänskligt uppfattbara färgskillnader</strong> i CIE LAB-färgrymden. Den visar hur nära din displays output är en standardreferensfärg.',
    },
    {
      type: 'paragraph',
      html: '<strong>Delta E-skala (CIE 1976):</strong><ul><li>0–1: Ouppfattbar för det mänskliga ögat</li><li>1–2: Knappt märkbar</li><li>2–4: Märkbar men acceptabel för allmän användning</li><li>4–6: Tydlig färgförskjutning</li><li>&gt;6: Mycket tydlig skillnad</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'Professionella displayer kalibreras för att bibehålla <strong>Delta E &lt; 2</strong> över hela det synliga omfånget. Konsumentskärmar uppnår vanligtvis Delta E 3-5.',
    },
    {
      type: 'title',
      text: 'Spectrum Canvas testsvit',
      level: 3,
    },
    {
      type: 'title',
      text: 'Spektral renhetstest',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Visar rena primär- och sekundärfärger (röd, grön, blå, cyan, magenta, gul) och mäter hur din monitor återger dem. Färgfyllnadsanimationer avslöjar konsekvent färgåtergivning över hela skärmen.',
    },
    {
      type: 'title',
      text: 'Gradientdynamik',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Mjuka gradienter som övergår genom hela färgrymden. Leta efter <strong>banding-artefakter</strong> (synliga steg istället för mjuka övergångar), vilket tyder på otillräckligt färgbitsdjup eller dålig gammakorrigering.',
    },
    {
      type: 'title',
      text: 'Black Crush-detektering (Black Hole Test)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Ren svart (0,0,0) bakgrund med knappt synliga nyanser nära svart. Om skuggdetaljer flyter ihop (crushar), förlorar din monitor information i mörka toner – vanligt på mobilskärmar och billigare paneler.',
    },
    {
      type: 'title',
      text: 'Vitpunktskalibrering',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Testar olika korrelerade färgtemperaturer (D65 vid 6500K = dagsljus, D93 at 9300K = studio), vilket avslöjar eventuell färgtemperaturdrift eller termisk instabilitet.',
    },
    {
      type: 'title',
      text: 'Tolka dina resultat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas genererar en snygg och utskriftsvänlig rapport med:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>3D Gamut-visualisering:</strong> Ett roterande 3D-diagram som visar displayens faktiska färgvolym jämfört med referensstandarden</li><li><strong>Delta E-värmekarta:</strong> Var i spektrumet din display driver iväg</li><li><strong>Gammakurva:</strong> Ljusstyrkans linearitet över intervallet 0–255</li><li><strong>Kalibreringspoäng:</strong> Ett "Spectrum Grade" (Elite, Cinematic, Studio, Standard) baserat på övergripande noggrannhet</li></ul>',
    },
    {
      type: 'title',
      text: 'Avancerat: Tips för manuell kalibrering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om dina resultat visar drift, prova dessa justeringar i monitorns OSD-meny (On-Screen Display):',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Färgtemperatur:</strong> Skifta mot "Warm" om färgerna är för kalla/blåa; mot "Cool" om de är för varma/gula</li><li><strong>Kontrast:</strong> Öka om svärtan ser urvattnad ut; minska om detaljer går förlorade (crushas)</li><li><strong>Ljusstyrka:</strong> Justera för att uppnå en neutral grå utan färgstick vid 50 % ljusstyrka</li><li><strong>Mättnad:</strong> Om färgerna är övermättade, minska; om de är matta, öka</li></ul>',
    },
    {
      type: 'title',
      text: 'Begränsningar och bästa praxis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Detta verktyg ger en visuell och statistisk referens</strong>. För professionellt arbete som kräver certifierad kalibrering, använd hårdvarubaserade färgmätare (spektrofotometer eller kolorimeter) och dedikerad kalibreringsprogramvara.',
    },
    {
      type: 'paragraph',
      html: '<strong>Bästa praxis:</strong><ul><li>Låt din monitor värma upp i 30 minuter före testet (termisk drift stabiliseras)</li><li>Testa under konsekventa ljusförhållanden i omgivningen</li><li>Undvik bländning; använd en skärmhuv om möjligt</li><li>Upprepa testerna varje vecka för att spåra drift över tid</li><li>Spara ett digitalt arkiv med rapporter för framtida jämförelser</li></ul>',
    },
  ],
  ui: {
    badge: 'Displaykalibrering',
    title: 'Spectrum Canvas - Färgprecisionstest',
    description:
      'Professionell displaykalibrering möter biokänsla. Testa sRGB och DCI-P3, mät Delta E-noggrannhet, upptäck färgförskjutningar och generera en visuell rapport som förvandlar data till insikt.',
    btnStartCalibration: 'Starta kalibrering',
    btnFullscreen: 'Helskärm',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Helskärmsläge',
    kbdReset: 'R',
    kbdResetLabel: 'Återställ test',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Avsluta',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Färgrymd',
    hardwareName: 'Hårdvaru-/monitornamn',
    hardwareNamePlaceholder: 't.ex. MacBook Pro 16" M1 Max',
    purityTest: 'Spektral renhet',
    gradientTest: 'Gradientdynamik',
    blackHoleTest: 'Black Crush-detektering',
    whitePointTest: 'Vitpunktskalibrering',
    colorCheckpoint: 'Färgkontrollpunkt',
    generateReport: 'Generera rapport',
    viewResults: 'Visa resultat',
    btnExit: 'Avsluta (ESC)',
    compareSideBySide: 'Jämför sida vid sida',
  },
};
