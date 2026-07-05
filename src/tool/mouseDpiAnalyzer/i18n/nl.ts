import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'muis-dpi-analyse';
const title = 'Muis DPI Analyse';
const description =
  'Meet de echte DPI van je muis online door de muis een bekende fysieke afstand te verplaatsen en de vastgelegde beweging van de aanwijzer in pixels te vergelijken.';

const faqData = [
  {
    question: 'Hoe werkt een online muis-DPI-analysetool?',
    answer:
      'De tool vraagt je om de muis over een bekende fysieke afstand te bewegen, registreert de bewegingsgebeurtenissen van de browser, corrigeert de vastgelegde waarden met devicePixelRatio en deelt de resulterende pixels door de afstand in inches.',
  },
  {
    question: 'Waarom kan de echte DPI afwijken van de waarde die op de muis staat?',
    answer:
      'Sensortoleranties, firmwarestappen, oppervlaktegedrag, schaling van het besturingssysteem, aanwijzerversnelling en spelprofielen kunnen ervoor zorgen dat de gemeten beweging verschilt van de nominale DPI die in de software is geselecteerd.',
  },
  {
    question: 'Moet ik aanwijzerversnelling uitschakelen voor de test?',
    answer:
      'Ja. Schakel Aanwijzerprecisie verbeteren in Windows en elke versnellingscurve van de fabrikant uit als je een zuivere DPI-meting wilt. Laat het alleen aan staan als je bewust wilt zien hoe je normale instellingen zich gedragen.',
  },
  {
    question: 'Welke fysieke afstand moet ik gebruiken?',
    answer:
      'Langere afstanden verminderen handfouten. De breedte van een creditcard is handig, maar een doorgang met een liniaal van 100 mm of 4 inch is meestal beter herhaalbaar als je bureau genoeg ruimte heeft.',
  },
];

const howToData = [
  {
    name: 'Kies een fysieke referentie',
    text: 'Gebruik 5 of 10 mm voor zeer hoge DPI, 1 inch voor conventionele tests of langere referenties als je voldoende bureauruimte hebt.',
  },
  {
    name: 'Houd de vastlegknop ingedrukt',
    text: 'Houd het vastlegdoel op het scherm ingedrukt en beweeg de muis fysiek naar rechts over precies de gekozen afstand.',
  },
  {
    name: 'Laat los bij de fysieke markering',
    text: 'Laat de knop los wanneer de muis de echte fysieke markering op je bureau bereikt. De tool berekent pixels per inch en toont de gemeten DPI.',
  },
  {
    name: 'Herhaal op verschillende snelheden',
    text: 'Voer langzame en snelle doorgangen uit. Als de DPI sterk verandert, kunnen aanwijzerversnelling of sensorafvlakking het resultaat beïnvloeden.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Muis DPI Online Testen: Meet de Echte Sensorgevoeligheid', level: 2 },
    {
      type: 'paragraph',
      html: 'Een muis kan 800, 1600, 3200 of 26000 DPI adverteren, maar de waarde die telt in games en precisiewerk is de beweging die daadwerkelijk de computer bereikt. Deze online muis-DPI-analysetool meet die praktische waarde door een bekende fysieke beweging te vergelijken met de beweging van de aanwijzer zoals vastgelegd in de browser. Het resultaat wordt uitgedrukt in pixels per inch, dezelfde eenheid die vaak wordt gebruikt bij het spreken over muis-DPI of CPI.',
    },
    {
      type: 'paragraph',
      html: 'De test is bewust lokaal en eenvoudig: houd het vastlegdoel ingedrukt, beweeg de muis precies naar rechts over de geselecteerde fysieke afstand en laat los. De tool verzamelt native bewegingsdelta\'s in plaats van een polling-snelheidsscript of een generieke muistest te gebruiken. Omdat de berekening in je browser draait, is er geen download van stuurprogramma\'s, account of cloud-upload nodig.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Belangrijke testvoorwaarde',
      html: 'Voor een zuivere DPI-meting schakel je de aanwijzerversnelling van het besturingssysteem en de versnellingscurves van de fabrikant uit. Als versnelling ingeschakeld blijft, beschrijft het resultaat je huidige aanwijzergedrag in plaats van de ruwe sensorinstelling.',
    },
    { type: 'title', text: 'Hoe de Echte DPI-Berekening Werkt', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI betekent dots per inch. In de context van muizen worden DPI en CPI vaak door elkaar gebruikt om te beschrijven hoeveel tellen of aanwijzerpixels worden geproduceerd wanneer de muis één fysieke inch aflegt. Deze analysetool registreert de horizontale beweging tijdens een gecontroleerde doorgang, zet de geselecteerde afstand om naar inches en deelt vervolgens de vastgelegde pixels door de inches. Als de muis bijvoorbeeld 3200 gecorrigeerde pixels over 2 inches rapporteert, is de gemeten waarde ongeveer 1600 DPI.',
    },
    {
      type: 'list',
      items: [
        'Kies een korte referentie zoals 10 mm voor zeer hoge DPI of een langere voor lage DPI.',
        'Houd de centrale vastlegknop ingedrukt zodat de browser alleen beweging tijdens de doorgang registreert.',
        'Beweeg fysiek naar rechts en houd het pad zo recht mogelijk.',
        'Laat los bij de echte fysieke markering en lees de berekende DPI.',
        'Herhaal meerdere keren en middeld consistente doorgangen in plaats van op één doorgang te vertrouwen.',
      ],
    },
    {
      type: 'table',
      headers: ['Vastgelegde beweging', 'Fysieke afstand', 'Gemeten DPI'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm creditcardbreedte', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Maak een zuivere beweging',
      html: 'Een enkele horizontale beweging is belangrijker dan een lange afstand. Gebruik voor zeer hoge DPI de 5 mm of 10 mm voorinstelling: het houdt de beweging klein genoeg om binnen het scherm te blijven en geeft de rekenmodule toch een bekende fysieke referentie. De voortgangsbalk is slechts een ingangssignaalmeter; de liniaal of kaart op het bureau is het stoppunt.',
    },
    { type: 'title', text: 'Waarom Gemeten DPI Kan Afwijken van Geadverteerde DPI', level: 3 },
    {
      type: 'paragraph',
      html: 'Geadverteerde DPI is vaak een selecteerbare firmwarestap, geen laboratoriumgecertificeerde waarde voor elk oppervlak en elke eenheid. Twee muizen ingesteld op dezelfde nominale DPI kunnen anders aanvoelen als hun sensoren, firmwareschaling, voethoogte, oppervlaktetextuur, lift-off-gedrag of besturingssysteeminstellingen verschillen. Kleine variatie is normaal; grote variatie betekent meestal dat de testopstelling of het softwarepad de meting beïnvloedt.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nominale DPI',
          description: 'De waarde die in de muissoftware wordt getoond of op de productpagina staat. Handig als startpunt, maar geen bewijs van daadwerkelijke bewegingsoutput.',
          points: ['Makkelijk af te lezen', 'Kan firmwareschaling verbergen', 'Varieert per profiel'],
        },
        {
          title: 'Gemeten DPI',
          description: 'De waarde berekend uit fysieke verplaatsing en vastgelegde aanwijzerbeweging. Ideaal om de ene muis op de andere af te stemmen.',
          highlight: true,
          points: ['Praktisch en herhaalbaar', 'Gevoelig voor handnauwkeurigheid', 'Toont het echte gedrag van de instellingen'],
        },
        {
          title: 'Gevoeligheid in game',
          description: 'De uiteindelijke camera- of cursorrespons nadat het spel de muisinvoer vermenigvuldigt met zijn eigen gevoeligheidswaarde.',
          points: ['Wat je echt voelt', 'Spelspecifiek', 'Geen sensormeting'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Voordelen en nadelen van browsergebaseerde DPI meting',
      items: [
        { pro: 'Geen driverinstallatie nodig', con: 'De browser ziet verwerkte aanwijzerbeweging, niet het elektrische sensorsignaal' },
        { pro: 'Goed om muizen en profielen snel te vergelijken', con: 'Versnellingsinstellingen kunnen het resultaat vertekenen als ze aan blijven staan' },
        { pro: 'Werkt met alledaagse fysieke referenties', con: 'Handuitlijning en bureaumarkeringen beïnvloeden de herhaalbaarheid' },
      ],
    },
    { type: 'title', text: 'Windows, macOS en Muisssoftware Voorbereiden', level: 3 },
    {
      type: 'paragraph',
      html: 'Maak voor gebruik van een DPI-analysetool het invoerpad zo neutraal mogelijk. Schakel op Windows Aanwijzerprecisie verbeteren uit als je ruw gedrag wilt. Schakel in de fabrikantsoftware hoekcorrectie, versnelling, rimpelcontrole, afvlakking of oppervlaktespecifieke hulpmiddelen uit, tenzij je ze bewust wilt meten. Op macOS maakt aanwijzerversnelling deel uit van het normale cursortraject, dus de waarde moet worden behandeld als een praktisch systeemresultaat, niet als een ruw sensorresultaat.',
    },
    {
      type: 'table',
      headers: ['Instelling', 'Aanbevolen voor ruwe DPI', 'Reden'],
      rows: [
        ['Aanwijzerversnelling', 'Uit', 'Versnelling verandert de bewegingsoutput afhankelijk van de snelheid'],
        ['Muisssoftware DPI-stap', 'Vaste enkele stap', 'Voorkomt onbedoelde profielwijzigingen tijdens het testen'],
        ['Hoekcorrectie', 'Uit', 'Kan diagonale beweging wijzigen en natuurlijke sensoroutput maskeren'],
        ['Besturingssysteemschaling', 'Normaal laten, tool corrigeert met devicePixelRatio', 'De analysetool neutraliseert browserzoom en beeldschermpixelverhouding in zijn berekening'],
        ['Game-overlays of macro\'s', 'Uit', 'Extra software kan invoer onderscheppen en doorgangen inconsistent maken'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'Twee muizen op elkaar afstemmen',
      html: 'Meet de oude muis drie keer, noteer het gemiddelde en pas vervolgens de DPI-stap van de nieuwe muis aan totdat de gemeten waarde dichtbij ligt. Dit is vaak nuttiger dan het nummer van de ene fabrikant-app naar de andere te kopiëren, omdat de echte sensoroutput kan verschillen.',
    },
    { type: 'title', text: 'De Juiste Fysieke Referentie Kiezen', level: 3 },
    {
      type: 'paragraph',
      html: 'De interface bevat korte referenties voor hoge DPI en langere referenties voor lagere DPI. Gebruik 5 of 10 mm wanneer je aanwijzer het scherm oversteekt met een minimale handbeweging. Gebruik 1 inch, 50 mm of de 85.6 mm kaartbreedte wanneer de muis is ingesteld dichter bij gangbare desktopwaarden of tactische shooter-waarden.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'millimeter in één inch' },
        { value: '85.6', label: 'millimeter in een gangbare creditcardbreedte' },
        { value: '3+', label: 'herhaalde doorgangen aanbevolen voordat je een profiel vertrouwt' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'Dots per inch, vaak gebruikt om de aanwijzerbeweging te beschrijven die wordt geproduceerd door één inch muisverplaatsing.' },
        { term: 'CPI', definition: 'Counts per inch, een sensorgeoriënteerde term die technisch vaak nauwkeuriger is voor muizen.' },
        { term: 'Versnelling', definition: 'Een instelling of curve die de aanwijzeroutput verandert afhankelijk van de bewegingssnelheid.' },
        { term: 'devicePixelRatio', definition: 'De browserverhouding tussen CSS-pixels en fysieke beeldschermpixels, hier gebruikt om zoom- en schalingseffecten te normaliseren.' },
        { term: 'Hoekcorrectie', definition: 'Firmware- of softwarecorrectie die beweging recht trekt, soms handig voor tekenen maar afgewezen door veel competitieve spelers.' },
      ],
    },
    { type: 'title', text: 'De Versnellingsindicator Aflezen', level: 3 },
    {
      type: 'paragraph',
      html: 'De versnellingsindicator is geen laboratoriumbewijs van de besturingssysteemcurve. Het is een praktische waarschuwing gebaseerd op variatie in bewegingssnelheid tijdens de vastgelegde doorgang. Als langzame en snelle doorgangen zeer verschillende DPI-waarden produceren, kunnen versnelling, afvlakking, oppervlaktegedrag of inconsistente handbeweging een rol spelen. Een goede ruwe opstelling moet vergelijkbare gemeten DPI over meerdere doorgangen produceren wanneer de fysieke afstand hetzelfde is.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wanneer het resultaat sterk schommelt',
      html: 'Als de ene doorgang 780 DPI aangeeft en de volgende 950 DPI met dezelfde afstand, geef dan niet meteen de muis de schuld. Controleer de versnellingsinstellingen, vergroot de testafstand, houd het muispad horizontaal en zorg ervoor dat de aanwijzer tijdens de doorgang niet tegen een schermrand botst.',
    },
    {
      type: 'summary',
      title: 'Controlelijst voor betrouwbare DPI meting',
      items: [
        'Gebruik een gemeten fysieke referentie, bij voorkeur 100 mm of langer.',
        'Beweeg horizontaal naar rechts en stop precies op de markering.',
        'Schakel versnelling uit voor ruwe profielvergelijkingen.',
        'Voer minstens drie doorgangen uit en vergelijk de spreiding.',
        'Gebruik gemeten DPI om muizen op elkaar af te stemmen, niet alleen geadverteerde DPI-labels.',
      ],
    },
    {
      type: 'message',
      title: 'Privacy opmerking',
      html: 'Deze muisversnellingstest en DPI-berekening worden lokaal in de browser uitgevoerd. De tool heeft geen driver-toegang, serienummers van apparaten of geüploade invoerlogboeken nodig.',
    },
  ],
  ui: {
    badge: 'Echt DPI Lab',
    referenceLabel: 'Referentie',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Kaart',
    lineStart: 'Start',
    holdButton: 'Houd ingedrukt en beweeg de geselecteerde afstand',
    holdHint: 'Gebruik een echte liniaal/kaart op het bureau. Stop niet omdat de balk volloopt.',
    progressLabel: 'Ingangssignaal',
    activeHint: 'Beweging volgen',
    dpiLabel: 'Gemeten DPI',
    pixelsLabel: 'Gecorrigeerde beweging',
    distanceReadout: 'Fysieke afstand',
    ratioLabel: 'Pixelverhouding',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Klaar om te meten',
    statusTracking: 'Beweging volgen...',
    statusDone: 'Meting voltooid',
    reset: 'Reset',
    accelerationTitle: 'Versnellingssignaal',
    accelerationHint: 'Herhaal op lage en hoge snelheid om de consistentie te vergelijken.',
    accelerationLow: 'stabiel',
    accelerationMedium: 'variabel',
    accelerationHigh: 'hoge drift',
    sampleCount: 'Samples',
  },
};
