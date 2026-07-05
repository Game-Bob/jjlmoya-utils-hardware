import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'midi-keyboard-testare-online';
const title = 'WebMIDI Keyboard Tester';
const description = 'Testa ett USB MIDI-keyboard, synth, pad-kontroller, pitch wheel, modulationshjul, anslagsstyrka och hängande toner direkt i webbläsaren med Web MIDI.';

const faqData = [
  {
    question: 'Kan den här MIDI-keyboard-testaren läsa mitt USB-keyboard utan att installera programvara?',
    answer: 'Ja, i webbläsare som stöder Web MIDI, till exempel Chrome och Edge. Webbläsaren ber om tillstånd, sedan lyssnar verktyget efter not-, anslagsstyrke-, pitch bend- och modulationsmeddelanden från den valda MIDI-ingången.',
  },
  {
    question: 'Laddar webbplatsen upp mina MIDI-noter eller speldatan?',
    answer: 'Nej. MIDI-händelser bearbetas i den aktuella webbläsarfliken. Noter, anslagsstyrkevärden, kontrollermeddelanden, enhetsnamn och loggar laddas inte upp eller lagras av webbplatsen.',
  },
  {
    question: 'Varför syns mitt MIDI-keyboard men inga tangenter lyser?',
    answer: 'Enheten kan vara ansluten som ett kontrollgränssnitt, webbläsaren kan ha valt fel ingångsport, keyboardet kan använda ett annat läge, eller kabeln/hubben kan leverera ström men inte MIDI-data.',
  },
  {
    question: 'Kan jag testa pitch bend- och modulationshjul?',
    answer: 'Ja. Testaren visar pitch bend som ett centrerat signerat värde och modulation som MIDI CC1. När du rör på dessa kontroller ska deras mätare uppdateras omedelbart om enheten skickar standard MIDI-meddelanden.',
  },
  {
    question: 'Vilka MIDI-meddelanden visas?',
    answer: 'Livegränssnittet markerar Note On- och Note Off-meddelanden, registrerar anslagsstyrka, detekterar pitch bend och spårar modulationshjulets CC1. Andra kontrollermeddelanden kan dyka upp i händelseloggen när de är relevanta för de testade kontrollerna.',
  },
];

const howToData = [
  {
    name: 'Anslut MIDI-hårdvaran',
    text: 'Koppla in keyboardet, synthen, pad-kontrollern eller USB MIDI-interfacet i datorn innan du öppnar tillståndsprompten. Undvik oanslutna hubbar när du felsöker enheter som tappar anslutningen.',
  },
  {
    name: 'Ge webbläsaren MIDI-åtkomst',
    text: 'Tryck på Anslut MIDI-ingång och godkänn webbläsarens behörighetsbegäran. Använd Chrome eller Edge över HTTPS eller localhost eftersom Web MIDI är behörighetsbegränsat.',
  },
  {
    name: 'Spela tangenter över hela omfånget',
    text: 'Tryck på låga, mellersta och höga toner. Skärmkeyboardet expanderar runt de toner det tar emot och lyser upp varje tangent enligt anslagsstyrkan.',
  },
  {
    name: 'Kontrollera hjul och uttryckskontroller',
    text: 'Flytta pitch wheel, modulationshjul och prestandakontroller. Pitch ska återgå till centrum, medan modulation ska röra sig från 0 till 127.',
  },
  {
    name: 'Läs händelseloggen',
    text: 'Använd händelseloggen för att upptäcka saknade Note Off-meddelanden, oväntade kanaler, låga anslagsvärden eller kontroller som skickar ett annat MIDI-meddelande än förväntat.',
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
  inLanguage: 'sv',
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
    { type: 'title', text: 'MIDI-keyboard-testare online för riktig USB-hårdvara', level: 2 },
    {
      type: 'paragraph',
      html: 'En pålitlig <strong>MIDI-keyboard-testare online</strong> ska snabbt besvara en fråga: skickar det fysiska instrumentet de meddelanden som en DAW, sampler, synth eller ljusrigg förväntar sig? Denna WebMIDI-testare lyssnar på webbläsarens MIDI-ingång och visar Note On, Note Off, anslagsstyrka, pitch bend och modulationshjulsdata i realtid. Den är utformad för USB MIDI-keyboard, DIN-till-USB-interfaces, syntar, pad-kontroller, scenpianon, MIDI-gitarrer, triggers för trummor och kompakta kontroller som används i hemmastudios eller live-riggar.',
    },
    {
      type: 'message',
      title: 'Privat lokal MIDI diagnostik',
      html: 'Testet körs helt på klientsidan. Webbplatsen laddar inte upp notnummer, anslagskurvor, kontrollerarrörelser, enhetsnamn eller händelseloggar. Webbläsaren exponerar MIDI först efter att du godkänt behörighetsbegäran, och värdena stannar i den aktuella fliken.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'MIDI-anslagsområde' },
        { value: '128', label: 'standardnotnummer' },
        { value: '14-bitars', label: 'pitch bend-upplösning' },
        { value: 'CC1', label: 'modulationshjulskontroll' },
      ],
    },
    {
      type: 'table',
      headers: ['Signal', 'Vad testaren visar', 'Förväntat beteende'],
      rows: [
        ['Note On', 'Tangentnamn, notnummer, kanal och anslagsstyrka.', 'Varje fysisk tangent lyser en gång när den trycks och använder en anslagsstyrka över noll.'],
        ['Note Off', 'Släpphändelse i loggen och tangentljuset återställs.', 'Varje nedtryckt tangent släcks vid släpp; inga toner förblir visuellt hängande.'],
        ['Anslagsstyrka', 'Direktmätare plus en rullande kurva.', 'Mjukt spel ger lägre värden och hårt spel når högre värden utan slumpmässiga hopp.'],
        ['Pitch bend', 'Centrerad signerad mätare från negativt till positivt.', 'Hjulet sveper mjukt och återgår nära noll när det släpps.'],
        ['Modulation', 'CC1-mätare från 0 till 127.', 'Hjulet eller remsan rör sig förutsägbart genom hela omfånget.'],
      ],
    },
    { type: 'title', text: 'Hur man testar MIDI-keyboard utan en DAW', level: 2 },
    {
      type: 'paragraph',
      html: 'Att söka efter <em>testa MIDI-keyboard</em> innebär ofta att användaren ännu inte vet om felet ligger i kontrollern, kabeln, operativsystemet eller musikprogramvaran. En DAW lägger till många extra variabler: spårstatus, ingångsfilter, MIDI-kanalrouting, virtuella instrument, monitorering, mallar och drivrutinsinställningar. En webbläsartestare tar bort större delen av den stacken. Om WebMIDI-behörighetsprompten ser enheten och keyboardet lyser upp toner på skärmen, är den fysiska MIDI-sökvägen aktiv.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Använd detta innan du ändrar DAW inställningar',
      html: 'Bekräfta först att kontrollern skickar rå MIDI. Felsök sedan musikapplikationen. Om testaren tar emot toner men DAW:en inte gör det, kontrollera MIDI-ingångsaktivering, vald spåringång, kanalfilter, kontrollgränssnittsskript och instrumentmonitorering.',
    },
    {
      type: 'list',
      items: [
        'Anslut keyboardet direkt till datorn när det är möjligt, särskilt om busströmmen är otillräcklig.',
        'Öppna testaren i Chrome eller Edge, eftersom Web MIDI-stödet varierar mellan webbläsare och plattformar.',
        'Tryck på Anslut MIDI-ingång och välj musikenheten eller MIDI-interfacet från behörighetsprompten.',
        'Spela kromatiska toner över hela keyboardet för att upptäcka döda tangenter, delade zoner eller oktavtransponeringsöverraskningar.',
        'Flytta pitch- och modulationshjulen långsamt, sedan snabbt, för att upptäcka brusiga sensorer eller dåligt returbeteende.',
        'Rensa loggen mellan tester när du jämför kablar, USB-portar, keyboardpresets eller kontrollerlägen.',
      ],
    },
    {
      type: 'tip',
      title: 'Snabb kabelkontroll',
      html: 'Om enheten får ström men ingen MIDI-ingång visas, prova en annan USB-kabel. Många billiga USB-kablar är endast laddningskablar och överför inte data, vilket får en kontroller att verka aktiv fastän inga MIDI-meddelanden når datorn.',
    },
    { type: 'title', text: 'Läsa anslagskurvor och dynamisk respons', level: 2 },
    {
      type: 'paragraph',
      html: 'Anslagsstyrka är inte ljudstyrka i sig; det är ett prestandavärde som skickas med en not, vanligtvis från 1 till 127. Ett pianoplugin kan mappa anslagsstyrka till volym, sampellager, ljushet, hammarljud, attacktid eller allt samtidigt. När en kontroller har dålig anslagsskanning kan en spelare uppleva att mjuka toner försvinner, medelstarka toner är för höga eller hårda toner aldrig når det uttrycksfulla toppskiktet. Den rullande anslagskurvan hjälper till att avslöja om hårdvaran producerar en användbar spridning av värden.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Frisk klaviatur',
          description: 'Mjuka, medelstarka och hårda anslag producerar synligt olika anslagsband med repeterbara värden för liknande spelkraft.',
          highlight: true,
        },
        {
          title: 'Komprimerad respons',
          description: 'De flesta tonerna klumpar ihop sig i ett smalt intervall, som 70-95, vilket får piano- och truminstrument att kännas platta eller svåra att kontrollera.',
        },
        {
          title: 'Oregelbunden respons',
          description: 'Angränsande toner eller upprepade anslag hoppar oförutsägbart, vilket tyder på smutsiga kontakter, felande sensorer, dålig skanning eller instabil firmware.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Observerat anslagsmönster', 'Trolig tolkning', 'Nästa test'],
      rows: [
        ['Alltid 127', 'Fast anslagsstyrkeläge är aktiverat eller kontrollern är konfigurerad för orgel/synth-triggning.', 'Kontrollera keyboardets globala inställningar, pad-läge eller kontrollerredigerare.'],
        ['Alltid mycket låg', 'Anslagskurvan är för mjuk, sensorkalibreringen är fel eller klaviaturen fungerar dåligt.', 'Växla anslagskurvor och jämför svarta/vita tangenter över oktaver.'],
        ['En tangent avviker kraftigt', 'En lokal kontakt, gummidom, optisk sensor eller tangentmekanism kan vara smutsig eller skadad.', 'Upprepa den tangenten med flera styrkor och jämför med grannnoter.'],
        ['Värdena sjunker efter att en hubb används', 'Ström- eller datastabiliteten kan vara otillräcklig.', 'Testa igen med en direkt USB-port och en känd datakabel.'],
      ],
    },
    {
      type: 'card',
      title: 'Varför Note Off är viktigt',
      html: 'En hängande ton är ofta ett saknat eller fördröjt Note Off-meddelande. Vissa instrument skickar Note On med anslagsstyrka 0 istället för ett separat Note Off-kommando; båda är giltigt MIDI-beteende. Denna testare behandlar anslagsstyrkanoll Note On som tonsläpp, så genuint hängande tangenter förblir synliga tills korrekt släppmeddelande anländer.',
    },
    { type: 'title', text: 'Testa pitch bend, modulation och prestandakontroller', level: 2 },
    {
      type: 'paragraph',
      html: 'Pitch bend är ett MIDI-meddelande med högre upplösning än vanlig 7-bitars kontrollerdata. Det kombinerar två databytes till ett 14-bitars omfång centrerat runt 8192. Den extra upplösningen är viktig eftersom pitchrörelse ska låta smidigt, särskilt när man böjer en leadsynth, bas eller orkesterinstrument. Testaren konverterar den inkommande böjen till en centrerad mätare, vilket gör det enkelt att se om hjulet når båda ytterligheterna och återgår till neutral.',
    },
    {
      type: 'paragraph',
      html: 'Modulationshjulet är normalt MIDI continuous controller 1, vanligen skrivet som CC1. Många synth-patchar använder det för vibrato, filterrörelse, vågformsposition, tremolo eller orkesterdynamik. Om hjulet inte uppdaterar CC1-mätaren när du rör det, kan kontrollern vara tilldelad en annan CC, använda ett leverantörsspecifikt läge eller dirigeras genom programvara som mappar om prestandakontroller.',
    },
    {
      type: 'proscons',
      title: 'Webbläsar MIDI test jämfört med DAW monitorering',
      items: [
        { pro: 'Snabb behörighetsbaserad hårdvarukonfirmation utan projektinställning.', con: 'Emulerar inte all DAW-routing, skript eller instrumentmappning.' },
        { pro: 'Tydlig vy över noter, anslagsstyrka, pitch bend och CC1-modulation.', con: 'Avancerad aftertouch, NRPN, MPE, SysEx och anpassade kontrollkartor kan kräva specialistverktyg.' },
        { pro: 'Bra för support-samtal, köp av begagnad utrustning och kabelkontroll.', con: 'Webbläsarstöd beror på Web MIDI-tillgänglighet på den aktuella plattformen.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pitch hjulet återgår inte till noll',
      html: 'Om pitch-mätaren vilar på ett positivt eller negativt värde efter släpp, kan det fysiska hjulet, fjädern, potentiometern, hallsensorn, kalibreringen eller firmwarens dödzon behöva åtgärdas. Testa samma kontroller i en annan port och preset innan du antar att sensorn är felaktig.',
    },
    { type: 'title', text: 'Vanliga MIDI-keyboard-fel som denna testare kan upptäcka', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Död tangent', definition: 'En fysisk tangent som inte skickar något Note On-meddelande när den trycks.' },
        { term: 'Hängande ton', definition: 'En ton som får Note On men inget matchande släppmeddelande, vilket lämnar ljudet aktivt i instrument.' },
        { term: 'Anslagspik', definition: 'Ett plötsligt värde mycket högre eller lägre än förväntat för ett liknande anslag.' },
        { term: 'MIDI-kanal', definition: 'En av 16 logiska kanaler som används för att separera delar, zoner eller enheter i en MIDI-ström.' },
        { term: 'Control Change', definition: 'En familj av MIDI-meddelanden som används av vred, pedaler, hjul, reglar och omkopplare.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Enhet upptäckt, inga meddelanden',
      html: 'Om webbläsaren listar en MIDI-ingång men tangentspel inte ger några logginlägg, kontrollera om den valda porten är en kontrollgränssnittsingång istället för keyboardingången. Vissa gränssnitt exponerar flera portar med liknande namn.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Möjlig orsak', 'Praktisk åtgärd'],
      rows: [
        ['Ingen behörighetsprompt', 'Webbläsare som inte stöds, osäkert ursprung eller blockerad MIDI-behörighet.', 'Använd Chrome/Edge över HTTPS och kontrollera webbplatsbehörigheter.'],
        ['Enhet saknas', 'Kabel, hubb, drivrutin, klasskompatibilitet eller strömproblem.', 'Prova en annan USB-datakabel, port eller strömsatt hubb.'],
        ['Endast vissa oktaver fungerar', 'Split/lager-läge, transponeringsinställning, hårdvarumatrisfel eller lokalt kontrolläge.', 'Återställ preseten och testa kromatiskt från låga till höga toner.'],
        ['Fel tonnamn', 'Kontrollern är transponerad eller skickar från en zon med oktavförskjutning.', 'Kontrollera global transponering, zonoktav och DAW-mallinställningar.'],
        ['Modulationshjulet tyst', 'Hjulet är tilldelat ett annat kontrollnummer eller inaktiverat av preset.', 'Ladda en standardpreset eller kontrollerredigerare och mappa tillbaka det till CC1.'],
      ],
    },
    {
      type: 'summary',
      title: 'Bästa diagnostisk ordning',
      items: [
        'Bekräfta att webbläsaren ser MIDI-ingången.',
        'Spela noter och verifiera matchande tryck-/släppbeteende.',
        'Inspektera anslagsfördelning med upprepade mjuka, medelstarka och hårda anslag.',
        'Flytta pitch bend- och modulationskontroller över hela deras rörelseomfång.',
        'Justera därefter DAW-routing, inställningar för virtuella instrument eller kontroller-mallar.',
      ],
    },
    { type: 'title', text: 'Integritet, webbläsarstöd och begränsningar', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI är avsiktligt behörighetsbegränsat. En sida kan inte tyst läsa anslutna musikenheter i bakgrunden utan att webbläsaren exponerar ett åtkomstflöde. Den exakta prompten och beständigheten av behörigheten beror på webbläsare, operativsystem och användarinställningar. För de flesta musiker är det praktiska resultatet enkelt: klicka på anslut-knappen, välj MIDI-ingången, kör testet och stäng fliken när du är klar.',
    },
    {
      type: 'list',
      items: [
        'Ingen MIDI-händelsedata skickas till någon extern server.',
        'Testaren kräver inte SysEx-åtkomst, vilket håller behörighetsomfånget smalare.',
        'Enhetsnamn som webbläsaren visar kan identifiera hårdvarumodeller, så skärmdumpar ska delas med eftertanke.',
        'Chrome och Edge ger generellt det bästa Web MIDI-stödet; Safari- och Firefox-stöd kan vara begränsat eller saknas beroende på plattform.',
        'Nativa verktyg kan fortfarande behövas för firmware-uppdateringar, djup kontrollerredigering, MPE-analys, SysEx-dumpar eller leverantörsspecifik diagnostik.',
      ],
    },
    {
      type: 'card',
      title: 'När detta verktyg räcker',
      html: 'För att köpa en begagnad kontroller, kontrollera en studiokabel, validera ett USB MIDI-interface, testa en reparerad klaviatur eller bevisa att ett keyboard skickar meddelanden innan du öppnar en DAW, är en WebMIDI-keyboard-testare oftast det snabbaste första steget.',
    },
  ],
  ui: {
    connectButton: 'Anslut MIDI-ingång',
    refreshButton: 'Uppdatera ingångar',
    clearButton: 'Rensa logg',
    unsupportedTitle: 'Web MIDI är inte tillgängligt',
    unsupportedBody: 'Använd en Chromium-baserad webbläsare som Chrome eller Edge, och öppna sidan över HTTPS eller localhost.',
    secureContext: 'Web MIDI kräver en säker HTTPS-sida eller localhost innan webbläsaren kan exponera MIDI-ingångar.',
    statusIdle: 'Redo att begära MIDI-åtkomst',
    statusPermission: 'Väntar på webbläsarens MIDI-behörighet',
    statusReady: 'MIDI-åtkomst beviljad',
    statusNoInputs: 'Ingen MIDI-ingång upptäckt',
    statusConnected: 'MIDI-ingång upptäckt',
    statusDisconnected: 'MIDI-enhet frånkopplad',
    statusError: 'MIDI-åtkomst misslyckades',
    detectedLabel: 'Enhet upptäckt',
    noDevice: 'Ingen MIDI-enhet vald',
    inputLabel: 'Ingång',
    inputIdle: 'ingen',
    channelLabel: 'Kanal',
    notesLabel: 'Noter',
    velocityLabel: 'Anslagsstyrka',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modulation',
    lastEventLabel: 'Senaste händelse',
    octaveRangeLabel: 'Synligt omfång',
    velocityCurveTitle: 'Anslagskurva',
    activeNotesTitle: 'Aktiva noter',
    eventLogTitle: 'MIDI-händelselogg',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Spela en tangent eller flytta ett hjul för att se inkommande MIDI-meddelanden.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'Alla kanaler',
  },
};
