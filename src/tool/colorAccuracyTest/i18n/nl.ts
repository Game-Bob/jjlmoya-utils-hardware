import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kleurnauwkeurigheid-test';
const title = 'Kleurnauwkeurigheidstest: Spectrum Canvas';
const description =
  'Kalibreer uw display met precisie. Test sRGB- en DCI-P3-kleurruimten, detecteer kleurverschuivingen, meet de nauwkeurigheid met Delta E-metrieken en genereer professionele kalibratierapporten.';

const faqData = [
  {
    question: 'Wat is kleurnauwkeurigheid en waarom is het belangrijk?',
    answer:
      'Kleurnauwkeurigheid meet hoe getrouw een display kleuren reproduceert in vergelijking met een standaardreferentie. Voor ontwerpers, fotografen en contentmakers zijn nauwkeurige kleuren essentieel om ervoor te zorgen dat uw werk er consistent uitziet op verschillende apparaten.',
  },
  {
    question: 'Wat is het verschil tussen sRGB en DCI-P3?',
    answer:
      'sRGB is de standaard kleurruimte voor het web en consumentendisplays. DCI-P3 is een breder kleurengamma dat wordt gebruikt in digitale cinema en professionele displays. DCI-P3 dekt ongeveer 25% meer kleuren dan sRGB.',
  },
  {
    question: 'Wat is Delta E en hoe wordt het gemeten?',
    answer:
      'Delta E (ΔE) is een numerieke meting van het kleurverschil dat door het menselijk oog wordt waargenomen. Een Delta E onder de 1 is onwaarneembaar, onder de 2 is zeer goed, onder de 4 is acceptabel en boven de 4 wordt het merkbaar. Onze test maakt gebruik van CIE 1976 Delta E-berekeningen.',
  },
  {
    question: 'Kan ik deze tool gebruiken om mijn hardware te kalibreren?',
    answer:
      'Deze tool biedt een visuele kalibratiereferentie en nauwkeurigheidsmetingen. Voor professionele kalibratie moet u deze resultaten combineren met hardwarematige kalibratietools (colorimeters) en speciale software zoals ColorThink of Datacolor SpyderCheckr.',
  },
  {
    question: 'Welke kleurruimten worden getest?',
    answer:
      'We testen sRGB (standaard), DCI-P3 (cinema) en witpuntnauwkeurigheid via de standaard D65 (6500K) en D93 (9300K) lichtbronnen. De test omvat ook verificatie van gammakorrectie.',
  },
];

const howToData = [
  {
    name: 'Selecteer uw Gamut',
    text: 'Kies tussen sRGB (standaard web/consument) of DCI-P3 (professionele cinema). Uw display zal het testpalet dienovereenkomstig aanpassen.',
  },
  {
    name: 'Geef uw hardware een naam (optioneel)',
    text: 'Voer een beschrijvende naam in voor uw monitor of apparaat (bijv. "MacBook Pro 16 M1"). Dit personaliseert uw rapport.',
  },
  {
    name: 'Activeer de modus Volledig scherm',
    text: 'Druk op F11 of de knop voor volledig scherm om de gebruikersinterface van de browser te verbergen en een maximaal weergaveoppervlak te garanderen voor nauwkeurige tests.',
  },
  {
    name: 'Voltooi de kleurtests',
    text: 'Doorloop de spectrale zuiverheid (effen kleuren), gradiëntdynamiek (vloeiende overgangen), black crush detectie (schaduwdetails) en witpuntkalibratie.',
  },
  {
    name: 'Resultaten bekijken en exporteren',
    text: 'Genereer een visueel rapport met 3D Gamut-visualisatie, Delta E-metrieken en kalibratie-aanbevelingen. Exporteer als PDF voor archivering.',
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
      text: 'Professionele kleurnauwkeurigheidstest: kalibreer uw display met precisie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De Spectrum Canvas is een professionele testtool voor kleurnauwkeurigheid, ontworpen voor iedereen die afhankelijk is van kleurkritisch werk. Of u nu fotograaf, ontwerper, contentmaker of hardware-enthousiasteling bent, deze tool helpt u bij het <strong>diagnosticeren van kleurverschuivingen</strong>, het <strong>meten van de weergavenauwkeurigheid</strong> en het <strong>genereren van kalibratierapporten</strong>.',
    },
    {
      type: 'title',
      text: 'Waarom kleurnauwkeurigheid belangrijk is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een verschil van slechts één procentpunt in kleurweergave kan het verschil betekenen tussen een "wauw"-moment en een "dat ziet er niet goed uit"-reactie. Professionele displays leveren een nauwkeurigheid binnen <strong>Delta E &lt; 2</strong>. Consumentendisplays wijken vaak af naar Delta E 4-6+, wat de volgende problemen veroorzaakt:',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Foto\'s die er levendig uitzien op uw monitor, maar flets in print</li><li>Videobewerkingen die niet overeenkomen met de verwachtingen van de klant</li><li>Webdesign-mockups die niet overeenkomen met de merkspecificaties</li><li>Hardwareprojecten waarbij kleurindicatoren verkeerd worden geïnterpreteerd</li></ul>',
    },
    {
      type: 'title',
      text: 'Kleurruimten begrijpen: sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (standaard kleurruimte)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'sRGB is in 1996 opgericht door Microsoft en HP en is de <strong>universele standaard voor consumentenelektronica</strong> en het web. Het maakt gebruik van een driehoekig kleurengamma dat wordt gedefinieerd door drie primaire kleuren (Rood: 0,6400x 0,3300, Groen: 0,3000 0,6000, Blauw: 0,1500 0,0600).',
    },
    {
      type: 'paragraph',
      html: '<strong>Kenmerken:</strong><ul><li>Dekt ~35% van het zichtbare kleurenspectrum</li><li>Geoptimaliseerd voor typische omgevingslichtomstandigheden</li><li>Gamma: 2,2 (komt overeen met de meeste consumentendisplays)</li><li>Geschikt voor: web, sociale media, consumentenfoto\'s</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Digital Cinema Gamut)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'DCI-P3 is ontwikkeld door het Digital Cinema Initiatives-consortium en is een <strong>kleurruimte van bioscoopkwaliteit</strong>, ontworpen voor theaterprojectie en professionele displays. Het omvat ~25% meer kleuren dan sRGB.',
    },
    {
      type: 'paragraph',
      html: '<strong>Kenmerken:</strong><ul><li>Dekt ~53% van het zichtbare kleurenspectrum</li><li>Geoptimaliseerd voor donkere bioscoopomgevingen</li><li>Gamma: 2,6 (gammakorrectie voor hoog contrast)</li><li>Geschikt voor: filmmaken, professionele fotografie, HDR-content</li></ul>',
    },
    {
      type: 'title',
      text: 'Wat is Delta E? Het kwantificeren van kleurverschil',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E (ΔE) is de <strong>metriek voor menselijk waarneembaar kleurverschil</strong> in de CIE LAB-kleurruimte. Het vertelt u hoe dicht de output van uw display bij een standaard referentiekleur ligt.',
    },
    {
      type: 'paragraph',
      html: '<strong>Delta E-schaal (CIE 1976):</strong><ul><li>0–1: Onwaarneembaar voor het menselijk oog</li><li>1–2: Nauwelijks waarneembaar</li><li>2–4: Waarneembaar maar acceptabel voor algemeen gebruik</li><li>4–6: Merkbare kleurverschuiving</li><li>&gt;6: Zeer duidelijk verschil</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'Professionele displays zijn gekalibreerd om een <strong>Delta E &lt; 2</strong> te behouden over het hele zichtbare gamma. Consumentendisplays behalen doorgaans een Delta E van 3-5.',
    },
    {
      type: 'title',
      text: 'De Spectrum Canvas Test-suite',
      level: 3,
    },
    {
      type: 'title',
      text: 'Spectrale zuiverheidstest',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Toont pure primaire en secundaire kleuren (Rood, Groen, Blauw, Cyaan, Magenta, Geel) en meet hoe uw monitor deze reproduceert. Kleuranimaties onthullen een consistente kleurreproductie over het volledige scherm.',
    },
    {
      type: 'title',
      text: 'Gradiëntdynamiek',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Vloeiende gradiënten die door de hele kleurruimte overgaan. Let op <strong>banding-artefacten</strong> (zichtbare stappen in plaats van vloeiende overgangen), die wijzen op onvoldoende kleurbitdiepte of een slechte gammakorrectie.',
    },
    {
      type: 'title',
      text: 'Black Crush Detectie (Black Hole Test)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Zuivere zwarte (0,0,0) achtergrond met nauwelijks zichtbare bijna-zwarte tinten. Als schaduwdetails "samendrukken", verliest uw monitor informatie in donkere tonen — een veelvoorkomend probleem bij mobiele displays en goedkope panelen.',
    },
    {
      type: 'title',
      text: 'Witpuntkalibratie',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Test verschillende gecorreleerde kleurtemperaturen (D65 bij 6500K = daglicht, D93 bij 9300K = studio), waardoor eventuele kleurtemperatuurdrift of thermische instabiliteit aan het licht komt.',
    },
    {
      type: 'title',
      text: 'Uw resultaten interpreteren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De Spectrum Canvas genereert een prachtig, printvriendelijk rapport met:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>3D Gamut-visualisatie:</strong> Een roterende 3D-plot die het werkelijke kleurvolume van uw display toont ten opzichte van de referentiestandaard</li><li><strong>Delta E Heatmap:</strong> Waar in het spectrum uw display afwijkt</li><li><strong>Gammacurve:</strong> Helderheidslineariteit over het bereik van 0–255</li><li><strong>Kalibratiescore:</strong> Een enkele "Spectrum Grade" (Elite, Cinematic, Studio, Standard) gebaseerd op de algehele nauwkeurigheid</li></ul>',
    },
    {
      type: 'title',
      text: 'Geavanceerd: Tips voor handmatige kalibratie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als uw resultaten afwijkingen vertonen, probeer dan deze aanpassingen in het OSD-menu (On-Screen Display) van uw monitor:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Kleurtemperatuur:</strong> Verschuif naar "Warmer" als kleuren te koel/blauw lijken; naar "Koeler" als ze te warm/geel lijken</li><li><strong>Contrast:</strong> Verhoog als zwarttinten flets lijken; verlaag als details samengedrukt worden</li><li><strong>Helderheid:</strong> Pas aan om een neutraal grijs zonder kleurtint te bereiken bij 50% helderheid</li><li><strong>Verzadiging:</strong> Als kleuren oververzadigd zijn, verlaag dan; als ze dof lijken, verhoog dan</li></ul>',
    },
    {
      type: 'title',
      text: 'Beperkingen en best practices',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Deze tool biedt visuele en statistische referentie</strong>. Gebruik voor professioneel werk dat gecertificeerde kalibratie vereist hardwarematige kleurmeters (spectrofotometer of colorimeter) en speciale kalibratiesoftware.',
    },
    {
      type: 'paragraph',
      html: '<strong>Best practices:</strong><ul><li>Laat uw monitor 30 minuten opwarmen voordat u gaat testen (thermische drift stabiliseert)</li><li>Test onder consistente omgevingslichtomstandigheden</li><li>Vermijd schittering; gebruik indien mogelijk een monitorkap</li><li>Herhaal tests wekelijks om de afwijking in de loop van de tijd te volgen</li><li>Houd een digitaal archief van rapporten bij voor toekomstige vergelijking</li></ul>',
    },
  ],
  ui: {
    badge: 'Display Kalibratie',
    title: 'Spectrum Canvas: Kleurnauwkeurigheidstest',
    description:
      'Professionele displaykalibratie ontmoet bioscoopesthetiek. Test sRGB en DCI-P3, meet Delta E-nauwkeurigheid, detecteer kleurverschuivingen en genereer een visueel rapport dat data in inzicht verandert.',
    btnStartCalibration: 'Start kalibratie',
    btnFullscreen: 'Volledig scherm',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Modus Volledig scherm',
    kbdReset: 'R',
    kbdResetLabel: 'Test resetten',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Afsluiten',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Kleurruimte',
    hardwareName: 'Naam hardware/monitor',
    hardwareNamePlaceholder: 'bijv. MacBook Pro 16" M1 Max',
    purityTest: 'Spectrale zuiverheid',
    gradientTest: 'Gradiëntdynamiek',
    blackHoleTest: 'Black Crush Detectie',
    whitePointTest: 'Witpuntkalibratie',
    colorCheckpoint: 'Kleurcontrolepunt',
    generateReport: 'Rapport genereren',
    viewResults: 'Resultaten bekijken',
    btnExit: 'Afsluiten (ESC)',
    compareSideBySide: 'Naast elkaar vergelijken',
  },
};
