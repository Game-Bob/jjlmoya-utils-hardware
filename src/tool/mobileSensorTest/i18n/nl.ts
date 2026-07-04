import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobile-sensor-test';
const title = 'Mobiele Sensor Test';
const description = 'Voer een online gyroscoop-, versnellingsmeter-, bewegingssensor- en waterpastest uit op je telefoon om kanteling, rotatie, drift en sensor kalibratieproblemen te controleren.';

const faqData = [
  {
    question: 'Hoe kan ik mijn telefoon gyroscoop online testen?',
    answer: 'Open de test op de telefoon, tik op Kalibratie Starten, sta bewegings-toegang toe indien gevraagd en draai en kantel vervolgens het apparaat. Een werkende gyroscoop en oriëntatiesensor moeten alpha, beta en gamma soepel bijwerken zonder te bevriezen of wild te springen.',
  },
  {
    question: 'Kan ik de versnellingsmeter testen met een waterpas?',
    answer: 'Ja. Leg de telefoon op een vlakke tafel na het starten van de test. De bel moet zich nabij het midden nestelen en de versnellings-waarden moeten stabiel blijven. Als de bel sterk afdrijft terwijl de telefoon stil ligt, moet de versnellingsmeter mogelijk gekalibreerd worden of het hoesje, de tafel of de hardware van het apparaat kan storen.',
  },
  {
    question: 'Waarom vraagt iPhone om bewegings-toestemming?',
    answer: 'Safari op iPhone en iPad vereist een tik voordat websites toegang krijgen tot bewegings- en oriëntatiesensoren. Als toestemming wordt geweigerd, kan de test geen gyroscoop- of versnellingsmetergegevens lezen totdat je bewegings-toegang toestaat.',
  },
  {
    question: 'Kan dit een kapot kompas repareren of kalibreren?',
    answer: 'Geen enkele browsertool kan hardware repareren of systeem kompas kalibratie forceren. Deze test helpt je symptomen te identificeren: vastzittende metingen, ruisende beweging, drift, ontbrekende toestemming of een browser die de sensoren niet blootstelt.',
  },
];

const howToData = [
  { name: 'Open de test op je telefoon', text: 'Gebruik dezelfde iPhone, iPad, Android-telefoon of tablet die je wilt diagnosticeren. Desktopbrowsers hebben meestal geen bewegingssensoren om bloot te stellen.' },
  { name: 'Sta bewegings-toegang toe', text: 'Tik op Kalibratie Starten en accepteer de prompt voor bewegings- of oriëntatietoestemming als je browser die toont.' },
  { name: 'Test kanteling en rotatie', text: 'Kantel de telefoon naar voren, rol hem naar links en rechts, draai hem dan plat op een tafel. Let op soepele veranderingen in alpha, beta, gamma en versnelling.' },
  { name: 'Controleer op drift op een vlak oppervlak', text: 'Laat de telefoon enkele seconden stil liggen. Een gezonde sensor zou moeten stabiliseren in plaats van constant te dwalen, pieken te vertonen of te bevriezen.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Online gyroscoop- en versnellingsmetertest voor telefoons', level: 2 },
    {
      type: 'paragraph',
      html: 'Gebruik deze mobiele sensortest wanneer schermrotatie verkeerd aanvoelt, games of AR-apps afdrijven, een waterpas-app onnauwkeurig lijkt, navigatie de verkeerde kant op wijst of de telefoon niet correct reageert op kanteling. De test toont live gedrag van gyroscoop, versnellingsmeter, rotatie en waterpas zodat je een browser toestemmingsprobleem kunt onderscheiden van een echt sensor- of kalibratieprobleem.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Hoofd zoekintentie', value: 'test gyroscoop online' },
        { label: 'Controleert ook', value: 'versnellingsmeter drift' },
        { label: 'Beste apparaat', value: 'telefoon of tablet' },
      ],
    },
    { type: 'title', text: 'Wat elke sensormeting je vertelt', level: 3 },
    {
      type: 'table',
      headers: ['Meting', 'Nuttig voor', 'Waarschuwingssignalen'],
      rows: [
        ['Alpha', 'Controle van rotatie rond de verticale as, nuttig voor kompas-achtige beweging en koerswijzigingen.', 'Verandert niet bij het plat draaien van de telefoon, springt met grote stappen of bevriest op nul.'],
        ['Beta', 'Controle van voor-achterwaartse kanteling voor schermrotatie, games, camera-waterpassing en AR-bediening.', 'Beweegt in de verkeerde richting, blijft hangen op één waarde of blijft afdrijven terwijl de telefoon stil ligt.'],
        ['Gamma', 'Controle van links-rechts rollen voor landschapsrotatie, racegames, waterpas-apps en stabilisatoren.', 'Eén kant reageert anders, waarden zijn ruisend of de bel centereert nooit op een vlakke tafel.'],
        ['Versnelling X/Y/Z', 'Controle van versnellingsmeterrespons, schuddetectie, zwaartekrachtrichting en bewegingsstabiliteit.', 'Grote pieken tijdens stilstand, geen reactie op beweging of onstabiele metingen na het verwijderen van het hoesje.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Symptomen die deze test helpt diagnosticeren',
      html: '<p>Gebruik de live waarden om niet-werkende automatische rotatie, een traag aanvoelende gyroscoop, versnellingsmeter drift, kompas kalibratiewaarschuwingen, wegglijdende AR-tracking, camera waterpas fouten, bewegingsbediening die naar één kant trekt of een telefoon die alleen beweging rapporteert in native apps maar niet in de browser te onderzoeken.</p>',
    },
    { type: 'title', text: 'Gyroscoop vs versnellingsmeter vs kompas', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Gyroscoop', description: 'Meet rotatiesnelheid. Belangrijk voor AR, games, camera-stabilisatie, bewegingsbediening en soepele oriëntatiewijzigingen.' },
        { title: 'Versnellingsmeter', description: 'Meet versnelling en zwaartekrachtrichting. Drijft kanteling, schuddetectie, stappendetectie en digitaal waterpas gedrag aan.' },
        { title: 'Kompas / magnetometer', description: 'Helpt bij het schatten van de koers, maar kan worden verstoord door magneten, metalen voorwerpen, autohouders, hoesjes, luidsprekers, laptops en nabije elektronica.' },
      ],
    },
    { type: 'title', text: 'Hoe sensorkalibratie correct te testen', level: 3 },
    {
      type: 'list',
      items: [
        'Verwijder magnetische hoesjes, MagSafe-portemonnees, metalen houders, controllerclips en accessoires voor het testen.',
        'Leg de telefoon op een stevige vlakke tafel en wacht enkele seconden voordat je drift beoordeelt.',
        'Draai de telefoon langzaam door elke as in plaats van hem meteen te schudden.',
        'Vergelijk Safari of Chrome met een native sensor- of kompas-app als de browser geen gegevens toont.',
        'Start het apparaat opnieuw op en herhaal de test als de metingen in meerdere apps bevroren zijn.',
      ],
    },
    {
      type: 'tip',
      title: 'iPhone en Android toestemmingsopmerking',
      html: 'Op iPhone en iPad kan Safari na een tik om bewegings- en oriëntatietoestemming vragen. Op Android stelt Chrome bewegingssensoren doorgaans directer bloot, maar privacy-instellingen, browser-vlaggen, batterijbesparingsmodi en ingebedde webviews kunnen sensorgegevens nog steeds blokkeren of verminderen.',
    },
    {
      type: 'table',
      headers: ['Probleem', 'Waarschijnlijke oorzaak', 'Volgende stap'],
      rows: [
        ['Geen waarden veranderen', 'Toestemming geweigerd, niet-ondersteunde browser, desktopapparaat of beperkte webview.', 'Open op de telefoon zelf, gebruik Safari of Chrome, sta bewegings-toegang toe en herlaad de pagina.'],
        ['Bel drijft af op een tafel', 'Kalibratieprobleem, oneffen oppervlak, hoesje storing of versnellingsmeter ruis.', 'Verwijder het hoesje, gebruik een bekend vlak oppervlak, herstart en vergelijk met een native waterpas-app.'],
        ['Kompasrichting is verkeerd', 'Magnetische interferentie of systeem kompas kalibratie.', 'Ga weg van metaal/elektronica en gebruik de kompas kalibratie flow van het besturingssysteem.'],
        ['Waarden springen of vertonen pieken', 'Sensorruis, beschadigde hardware, agressieve browser beperking of plotselinge fysieke beweging.', 'Test terwijl stil, sluit zware apps en vergelijk met een andere browser of native app.'],
      ],
    },
    {
      type: 'summary',
      title: 'Waar deze test goed voor is',
      items: [
        'Een telefoon gyroscoop online testen zonder een app te installeren.',
        'Versnellingsmeter drift controleren met een live waterpas.',
        'Uitzoeken of bewegingsbediening faalt door hardware, kalibratie, toestemming of browserondersteuning.',
        'Een telefoon voorbereiden op AR, games, camera-waterpassing, navigatie of schermrotatie probleemoplossing.',
      ],
    },
  ],
  ui: {
    startButton: 'Kalibratie Starten',
    permissionHint: 'Tik eenmaal om bewegingssensoren te ontgrendelen',
    privacyBadge: 'Lokale sensorgegevens',
    privacyCopy: 'Oriëntatie- en bewegingsmetingen blijven binnen deze browsersessie.',
    orientationPanel: 'Oriëntatie',
    motionPanel: 'Beweging',
    bubblePanel: 'Digitale waterpas',
    statusReady: 'Klaar voor sensortoestemming',
    statusWaiting: 'Wachten op browsertoestemming',
    statusDenied: 'Sensortoegang geweigerd of niet beschikbaar',
    statusUnsupported: 'Bewegingssensoren worden niet blootgesteld door deze browser',
    statusActive: 'Live sensorstroom actief',
    steadyLabel: 'Stabiel',
    movingLabel: 'Bewegend',
    shakingLabel: 'Schuddend',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Waterpas afwijking',
    motionMagnitudeLabel: 'Bewegingsgrootte',
    cubeLabel: '3D-apparaat oriëntatiekubus',
    bubbleLabel: 'Waterpas indicator',
    calibrationLabel: 'Live graden',
  },
};
