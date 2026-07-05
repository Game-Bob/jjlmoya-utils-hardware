import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'midi-toetsenbordtester';
const title = 'WebMIDI Toetsenbordtester';
const description = 'Test een USB MIDI-keyboard, synth, padcontroller, pitch wheel, modulation wheel, aanslaggevoeligheid en vastzittende noten rechtstreeks in de browser met Web MIDI.';

const faqData = [
  {
    question: 'Kan deze MIDI-toetsenbordtester mijn USB-keyboard uitlezen zonder software te installeren?',
    answer: 'Ja, in browsers die Web MIDI ondersteunen, zoals Chrome en Edge. De browser vraagt toestemming, waarna de tool luistert naar noot-, aanslaggevoeligheids-, pitch bend- en modulation-berichten van de geselecteerde MIDI-ingang.',
  },
  {
    question: 'Uploadt de website mijn MIDI-noten of speeldata?',
    answer: 'Nee. MIDI-gebeurtenissen worden verwerkt in het huidige browsertabblad. Noten, aanslaggevoeligheidswaarden, controllerberichten, apparaatnamen en logs worden niet geüpload of opgeslagen door de website.',
  },
  {
    question: 'Waarom verschijnt mijn MIDI-keyboard maar lichten er geen toetsen op?',
    answer: 'Het apparaat is mogelijk verbonden als bedieningsoppervlak, de verkeerde ingangspoort is geselecteerd door de browser, het keyboard gebruikt mogelijk een andere modus, of de kabel/hub levert wel stroom maar geen MIDI-data.',
  },
  {
    question: 'Kan ik de pitch bend- en modulation-wielen testen?',
    answer: 'Ja. De tester toont pitch bend als een gecentreerde waarde met teken en modulation als MIDI CC1. Het bewegen van die bedieningselementen zou de meters onmiddellijk moeten bijwerken wanneer het apparaat standaard MIDI-berichten verzendt.',
  },
  {
    question: 'Welke MIDI-berichten worden getoond?',
    answer: 'De live-interface markeert Note On- en Note Off-berichten, registreert aanslaggevoeligheid, detecteert pitch bend en volgt het modulation-wiel CC1. Andere controllerberichten kunnen in het gebeurtenissenlog verschijnen wanneer ze relevant zijn voor de geteste bedieningselementen.',
  },
];

const howToData = [
  {
    name: 'Sluit de MIDI-hardware aan',
    text: 'Sluit het keyboard, de synth, padcontroller of USB MIDI-interface aan op de computer voordat u de toestemmingsprompt opent. Vermijd ongevoede hubs bij het oplossen van problemen met onregelmatige apparaten.',
  },
  {
    name: 'Verleen MIDI-toegang aan de browser',
    text: 'Druk op MIDI-ingang verbinden en keur het toestemmingsverzoek van de browser goed. Gebruik Chrome of Edge via HTTPS of localhost, omdat Web MIDI toestemmingsgebonden is.',
  },
  {
    name: 'Speel toetsen over het hele bereik',
    text: 'Druk lage, middelste en hoge noten in. Het toetsenbord op het scherm breidt zich uit rond de ontvangen noten en verlicht elke toets op basis van de aanslaggevoeligheid.',
  },
  {
    name: 'Controleer de wielen en expressiebediening',
    text: 'Beweeg het pitch-wiel, modulation-wiel en de prestatiebediening. Pitch zou naar het midden moeten terugkeren, terwijl modulation van 0 tot 127 zou moeten bewegen.',
  },
  {
    name: 'Lees het gebeurtenissenlog',
    text: 'Gebruik het gebeurtenissenlog om ontbrekende Note Off-berichten, onverwachte kanalen, lage aanslaggevoeligheidswaarden of bedieningselementen die een ander MIDI-bericht verzenden dan verwacht, op te sporen.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'MIDI-Toetsenbordtester Online voor Echte USB-Hardware', level: 2 },
    {
      type: 'paragraph',
      html: 'Een betrouwbare <strong>MIDI-toetsenbordtester online</strong> moet snel één vraag beantwoorden: stuurt het fysieke instrument de berichten die een DAW, sampler, synth of lichtinstallatie verwacht? Deze WebMIDI-tester luistert naar de MIDI-ingang van de browser en toont Note On, Note Off, aanslaggevoeligheid, pitch bend en modulation wheel-gegevens in realtime. Hij is ontworpen voor USB MIDI-keyboards, DIN-naar-USB-interfaces, synthesizers, padcontrollers, podiumpiano\'s, MIDI-gitaren, drumtriggers en compacte controllers die in thuisstudio\'s of live-opstellingen worden gebruikt.',
    },
    {
      type: 'message',
      title: 'Privacyvriendelijke lokale MIDI diagnose',
      html: 'De test draait volledig aan de clientzijde. De website uploadt geen nootnummers, aanslagcurves, controllerbewegingen, apparaatnamen of gebeurtenissenlogs. De browser stelt MIDI alleen bloot nadat u de toestemmingsprompt hebt goedgekeurd en de waarden blijven in het huidige tabblad.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'MIDI aanslagbereik' },
        { value: '128', label: 'standaard nootnummers' },
        { value: '14-bit', label: 'pitch bend-resolutie' },
        { value: 'CC1', label: 'modulation wheel-bediening' },
      ],
    },
    {
      type: 'table',
      headers: ['Signaal', 'Wat de tester weergeeft', 'Gezond gedrag'],
      rows: [
        ['Note On', 'Toetsnaam, nootnummer, kanaal en aanslaggevoeligheid.', 'Elke fysieke toets licht één keer op bij indrukken en gebruikt een aanslagwaarde boven nul.'],
        ['Note Off', 'Loslaatgebeurtenis in het log en reset van de toetsverlichting.', 'Elke ingedrukte toets dooft bij loslaten; geen noten blijven visueel hangen.'],
        ['Velocity', 'Live meter plus een doorlopende curve.', 'Zacht spel levert lagere waarden op en krachtig spel bereikt hogere waarden zonder willekeurige sprongen.'],
        ['Pitch bend', 'Gecentreerde meter met teken van negatief naar positief.', 'Het wiel beweegt soepel en keert terug tot dicht bij nul bij loslaten.'],
        ['Modulation', 'CC1-meter van 0 tot 127.', 'Het wiel of de strip beweegt voorspelbaar over het hele bereik.'],
      ],
    },
    { type: 'title', text: 'Een MIDI-Keyboard Testen Zonder DAW', level: 2 },
    {
      type: 'paragraph',
      html: 'Zoeken naar <em>MIDI-keyboard testen</em> betekent vaak dat de gebruiker nog niet weet of de fout bij de controller, de kabel, het besturingssysteem of de muzieksoftware ligt. Een DAW voegt veel extra variabelen toe: track-armstatus, ingangsfilters, MIDI-kanaalroutering, virtuele instrumenten, monitoring, sjablonen en driver-voorkeuren. Een browsertester verwijdert het grootste deel van die stack. Als de WebMIDI-toestemmingsprompt het apparaat ziet en het keyboard noten op het scherm verlicht, is het fysieke MIDI-pad actief.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gebruik dit voordat u DAW instellingen wijzigt',
      html: 'Bevestig eerst dat de controller ruwe MIDI verzendt. Los daarna problemen met de muziektoepassing op. Als de tester noten ontvangt maar de DAW niet, controleer dan MIDI-ingangsinschakeling, geselecteerde trackingang, kanaalfilters, scripts voor bedieningsoppervlakken en instrumentmonitoring.',
    },
    {
      type: 'list',
      items: [
        'Sluit het keyboard indien mogelijk rechtstreeks op de computer aan, vooral als de busvoeding marginaal is.',
        'Open de tester in Chrome of Edge, omdat de Web MIDI-ondersteuning per browser en platform verschilt.',
        'Druk op MIDI-ingang verbinden en kies het muziekapparaat of de MIDI-interface uit de toestemmingsprompt.',
        'Speel chromatische noten over het hele keyboard om dode toetsen, gesplitste zones of octaaftranspositie-verrassingen te onthullen.',
        'Beweeg de pitch- en modulation-wielen langzaam en vervolgens snel om ruisende sensoren of slecht terugkeren naar het midden op te vangen.',
        'Wis het log tussen tests bij het vergelijken van kabels, USB-poorten, keyboard-presets of controller-modi.',
      ],
    },
    {
      type: 'tip',
      title: 'Snelle kabelcontrole',
      html: 'Als het apparaat aangaat maar er geen MIDI-ingang verschijnt, probeer dan een andere USB-kabel. Veel goedkope USB-kabels zijn alleen voor opladen en dragen geen data, waardoor een controller actief lijkt terwijl er geen MIDI-berichten de computer bereiken.',
    },
    { type: 'title', text: 'Aanslagcurves en Dynamische Respons Lezen', level: 2 },
    {
      type: 'paragraph',
      html: 'Aanslaggevoeligheid is niet simpelweg volume; het is een speelwaarde die met de noot wordt verzonden, meestal van 1 tot 127. Een piano-plugin kan aanslaggevoeligheid toewijzen aan volume, sample-laag, helderheid, hamergeluid, aanvalstijd of al deze tegelijk. Wanneer een controller een slechte aanslagdetectie heeft, kan een speler het gevoel krijgen dat zachte noten verdwijnen, middelzware noten te luid zijn of harde noten nooit het expressieve hoogtepunt bereiken. De doorlopende aanslagcurve helpt te onthullen of de hardware een bruikbare spreiding van waarden produceert.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Gezond klavier',
          description: 'Zachte, middelzware en harde aanslagen produceren zichtbaar verschillende aanslagbanden met herhaalbare waarden voor vergelijkbare speelkracht.',
          highlight: true,
        },
        {
          title: 'Samengedrukte respons',
          description: 'De meeste noten clusteren in een smal bereik, zoals 70-95, waardoor piano- en druminstrumenten vlak aanvoelen of moeilijk te controleren zijn.',
        },
        {
          title: 'Onregelmatige respons',
          description: 'Aangrenzende noten of herhaalde aanslagen springen onvoorspelbaar, wat duidt op vuile contacten, falende sensoren, slechte detectie of instabiele firmware.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Waargenomen aanslagpatroon', 'Waarschijnlijke interpretatie', 'Volgende test'],
      rows: [
        ['Altijd 127', 'Vaste-aanslagmodus is ingeschakeld of de controller is geconfigureerd voor orgel/synth.', 'Controleer de globale keyboard-instellingen, pad-modus of controller-editor.'],
        ['Altijd zeer laag', 'Aanslagcurve is te zacht, sensorkalibratie is onjuist of het klavier is defect.', 'Wissel aanslagcurves en vergelijk zwarte/witte toetsen over octaven.'],
        ['Eén toets wijkt sterk af', 'Een lokaal contact, rubberen koepel, optische sensor of toetsmechanisme is mogelijk vuil of beschadigd.', 'Herhaal die toets op verschillende sterktes en vergelijk aangrenzende noten.'],
        ['Waarden dalen na gebruik van een hub', 'Voedings- of datastabiliteit is mogelijk marginaal.', 'Test opnieuw met een directe USB-poort en een bekende datakabel.'],
      ],
    },
    {
      type: 'card',
      title: 'Waarom Note Off belangrijk is',
      html: 'Een vastzittende noot is vaak een ontbrekend of vertraagd Note Off-bericht. Sommige instrumenten verzenden Note On met aanslagwaarde 0 in plaats van een apart Note Off-commando; beide zijn geldig MIDI-gedrag. Deze tester behandelt een Note On met aanslag nul als noot-loslating, dus echt vastzittende toetsen blijven zichtbaar totdat het juiste loslaatbericht arriveert.',
    },
    { type: 'title', text: 'Pitch Bend, Modulation en Prestatiebediening Testen', level: 2 },
    {
      type: 'paragraph',
      html: 'Pitch bend is een MIDI-bericht met hogere resolutie dan gewone 7-bits controllerdata. Het combineert twee databytes in een 14-bits bereik gecentreerd rond 8192. Die extra resolutie is belangrijk omdat pitch-beweging soepel moet klinken, vooral bij het buigen van een solo-synth, bas of orkestinstrument. De tester zet de binnenkomende bend om in een gecentreerde meter, waardoor eenvoudig te zien is of het wiel beide uitersten bereikt en terugkeert naar neutraal.',
    },
    {
      type: 'paragraph',
      html: 'Het modulation-wiel is normaal gesproken MIDI-continue controller 1, meestal geschreven als CC1. Veel synth-patches gebruiken het voor vibrato, filterbeweging, wavetable-positie, tremolo of orkestrale dynamiek. Als het bewegen van het wiel de CC1-meter niet bijwerkt, is de controller mogelijk toegewezen aan een andere CC, gebruikt hij een leveranciersspecifieke modus of loopt hij via software die prestatiebediening opnieuw toewijst.',
    },
    {
      type: 'proscons',
      title: 'Browser MIDI test versus DAW monitoring',
      items: [
        { pro: 'Snelle toestemmingsgebaseerde hardwarebevestiging zonder projectconfiguratie.', con: 'Het emuleert niet alle DAW-routering, scripts of instrumenttoewijzingen.' },
        { pro: 'Duidelijk overzicht van noten, aanslaggevoeligheid, pitch bend en CC1-modulation.', con: 'Geavanceerde aftertouch, NRPN, MPE, SysEx en aangepaste controlekaarten hebben mogelijk gespecialiseerde tools nodig.' },
        { pro: 'Goed voor ondersteuningsgesprekken, aanschaf van gebruikte apparatuur en kabelcontroles.', con: 'Browserondersteuning hangt af van de beschikbaarheid van Web MIDI op het huidige platform.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pitch wiel keert niet terug naar nul',
      html: 'Als de pitch-meter op een positieve of negatieve waarde blijft rusten na loslaten, hebben het fysieke wiel, de veer, de potentiometer, de hallsensor, de kalibratie of de firmware-dode zone mogelijk aandacht nodig. Test dezelfde controller in een andere poort en met een andere preset voordat u aanneemt dat de sensor defect is.',
    },
    { type: 'title', text: 'Veelvoorkomende MIDI-Keyboardfouten Die Deze Tester Kan Onthullen', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Dode toets', definition: 'Een fysieke toets die geen Note On-bericht produceert bij indrukken.' },
        { term: 'Vastzittende noot', definition: 'Een noot die Note On ontvangt maar geen bijbehorend loslaatbericht, waardoor het geluid actief blijft in instrumenten.' },
        { term: 'Aanslagpiek', definition: 'Een plotselinge waarde die veel hoger of lager is dan verwacht voor een vergelijkbare aanslag.' },
        { term: 'MIDI-kanaal', definition: 'Eén van de 16 logische kanalen die worden gebruikt om partijen, zones of apparaten op een MIDI-stroom te scheiden.' },
        { term: 'Control Change', definition: 'Een MIDI-berichtenfamilie gebruikt door knoppen, pedalen, wielen, schuifregelaars en schakelaars.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Apparaat gedetecteerd, geen berichten',
      html: 'Als de browser een MIDI-ingang toont maar het spelen van toetsen geen logvermeldingen oplevert, controleer dan of de geselecteerde poort een bedieningsoppervlak-ingang is in plaats van de toetsenbordnoot-ingang. Sommige interfaces bieden meerdere poorten met vergelijkbare namen.',
    },
    {
      type: 'table',
      headers: ['Symptoom', 'Mogelijke oorzaak', 'Praktische actie'],
      rows: [
        ['Geen toestemmingsprompt', 'Niet-ondersteunde browser, onveilige oorsprong of geblokkeerde browser-MIDI-toestemming.', 'Gebruik Chrome/Edge via HTTPS en controleer site-machtigingen.'],
        ['Apparaat ontbreekt', 'Probleem met kabel, hub, driver, klasse-compatibiliteit of voeding.', 'Probeer een andere USB-datakabel, poort of gevoede hub.'],
        ['Slechts enkele octaven werken', 'Split-/layermodus, transpositie, hardwarematrixfout of local control-modus.', 'Reset de preset en test chromatisch van lage naar hoge noten.'],
        ['Verkeerde nootnamen', 'De controller is getransponeerd of verzendt vanuit een zone met octaafverschuiving.', 'Controleer globale transpositie, zone-octaaf en DAW-sjablooninstellingen.'],
        ['Modulation-wiel stil', 'Wiel toegewezen aan een ander controllernummer of uitgeschakeld door preset.', 'Laad een standaardpreset of controller-editor en wijs het terug naar CC1.'],
      ],
    },
    {
      type: 'summary',
      title: 'Beste diagnostische volgorde',
      items: [
        'Bevestig dat de browser de MIDI-ingang ziet.',
        'Speel noten en controleer of indrukken/loslaten overeenkomt.',
        'Inspecteer de aanslagverdeling met herhaalde zachte, middelzware en harde aanslagen.',
        'Beweeg pitch bend- en modulation-bediening over hun volledige bereik.',
        'Pas pas daarna DAW-routering, virtuele-instrumentinstellingen of controller-sjablonen aan.',
      ],
    },
    { type: 'title', text: 'Privacy, Browserondersteuning en Beperkingen', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI is bewust toestemmingsgebonden. Een pagina kan niet stilletjes verbonden muziekapparaten op de achtergrond uitlezen zonder dat de browser een toegangsstroom blootlegt. De exacte prompt en persistentie van de toestemming zijn afhankelijk van browser, besturingssysteem en gebruikersinstellingen. Voor de meeste muzikanten is het praktische resultaat eenvoudig: klik op de verbindingsknop, kies de MIDI-ingang, voer de test uit en sluit het tabblad wanneer u klaar bent.',
    },
    {
      type: 'list',
      items: [
        'Er worden geen MIDI-gebeurtenisgegevens naar externe servers verzonden.',
        'De tester vereist geen SysEx-toegang, waardoor de toestemmingsreikwijdte smaller blijft.',
        'Apparaatnamen die door de browser worden getoond, kunnen hardwaremodellen identificeren, dus deel screenshots met beleid.',
        'Chrome en Edge bieden over het algemeen de beste Web MIDI-ondersteuning; Safari- en Firefox-ondersteuning kan beperkt of afwezig zijn, afhankelijk van het platform.',
        'Systeemeigen hulpprogramma\'s kunnen nog steeds nodig zijn voor firmware-updates, geavanceerde controllerbewerking, MPE-analyse, SysEx-dumps of leveranciersspecifieke diagnostiek.',
      ],
    },
    {
      type: 'card',
      title: 'Wanneer deze tool voldoende is',
      html: 'Voor het kopen van een gebruikte controller, het controleren van een studiokabel, het valideren van een USB MIDI-interface, het testen van een gerepareerd klavier of het aantonen dat een keyboard berichten verzendt voordat u een DAW opent, is een WebMIDI-toetsenbordtester meestal de snelste eerste stap.',
    },
  ],
  ui: {
    connectButton: 'MIDI-ingang verbinden',
    refreshButton: 'Ingangen vernieuwen',
    clearButton: 'Log wissen',
    unsupportedTitle: 'Web MIDI is niet beschikbaar',
    unsupportedBody: 'Gebruik een op Chromium gebaseerde browser zoals Chrome of Edge en open de pagina via HTTPS of localhost.',
    secureContext: 'Web MIDI vereist een beveiligde HTTPS-pagina of localhost voordat de browser MIDI-ingangen kan blootstellen.',
    statusIdle: 'Klaar om MIDI-toegang aan te vragen',
    statusPermission: 'Wachten op browser-MIDI-toestemming',
    statusReady: 'MIDI-toegang verleend',
    statusNoInputs: 'Geen MIDI-ingang gedetecteerd',
    statusConnected: 'MIDI-ingang gedetecteerd',
    statusDisconnected: 'MIDI-apparaat losgekoppeld',
    statusError: 'MIDI-toegang mislukt',
    detectedLabel: 'Apparaat gedetecteerd',
    noDevice: 'Geen MIDI-apparaat geselecteerd',
    inputLabel: 'Ingang',
    inputIdle: 'geen',
    channelLabel: 'Kanaal',
    notesLabel: 'Noten',
    velocityLabel: 'Aanslag',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modulation',
    lastEventLabel: 'Laatste gebeurtenis',
    octaveRangeLabel: 'Zichtbaar bereik',
    velocityCurveTitle: 'Aanslagcurve',
    activeNotesTitle: 'Actieve noten',
    eventLogTitle: 'MIDI-gebeurtenissenlog',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Druk een toets in of beweeg een wiel om inkomende MIDI-berichten te zien.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'Alle kanalen',
  },
};
