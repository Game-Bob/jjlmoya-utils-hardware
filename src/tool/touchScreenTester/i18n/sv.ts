import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pekskarmstest';
const title = 'Pekskärmstest';
const description = 'Rita på en helskärmsyta för att testa döda zoner på pekskärmen, missade tryck, kantrespons, handflatsstörningar och hur många samtidiga multitouch-punkter din telefon eller surfplatta kan upptäcka.';

const faqData = [
  {
    question: 'Hur testar jag döda zoner på en pekskärm?',
    answer: 'Öppna testverktyget på enheten, dra ett finger långsamt över hela skärmen och leta efter tomma luckor där linjen bryts. Upprepa längs kanterna, tangentbordsområdet, hörnen och alla ställen som ofta missar tryck.',
  },
  {
    question: 'Hur kan jag köra ett multitouch-test online?',
    answer: 'Placera flera fingrar på ritytan samtidigt. Räknaren för aktiva tryck visar hur många kontakter webbläsaren tar emot just nu, och toppräknaren registrerar det högsta antalet samtidiga kontakter som uppnåtts under sessionen.',
  },
  {
    question: 'Kan det här verktyget reparera en pekskärm som inte svarar?',
    answer: 'Nej. Verktyget reparerar inte hårdvara och kalibrerar inte digitaliseraren. Det hjälper till att dokumentera symtom så att du kan avgöra om problemet är ett skärmskydd, smutsigt glas, ett mjukvarufel, tryck från skalet eller skadad pekhårdvara.',
  },
  {
    question: 'Varför upptäcker min telefon färre fingrar än förväntat?',
    answer: 'Vissa paneler, webbläsare, operativsystem, skärmskydd, laddare och tillgänglighetsinställningar begränsar eller filtrerar pekkontakter. Prova testet utan skal, på batteridrift, efter rengöring av glaset och i en annan webbläsare innan du antar att panelen är defekt.',
  },
];

const howToData = [
  { name: 'Rengör glaset och ta bort uppenbara störningar', text: 'Torka av skärmen, torka fingrarna, koppla ur störande laddare och ta av tjocka handskar eller ledande tillbehör innan du testar.' },
  { name: 'Rita långsamma horisontella och vertikala drag', text: 'Täck skärmen med parallella streck från kant till kant. En frisk panel bör lämna sammanhängande linjer utan avbrott.' },
  { name: 'Kontrollera hörn och gestzoner', text: 'Följ ramarna, tangentbordsområdet, aviseringsytan och navigeringsgestzonerna, eftersom dessa områden ofta först avslöjar partiellt digitaliserarfel.' },
  { name: 'Mät samtidiga tryck', text: 'Placera två, tre, fyra, fem eller fler fingrar på ritytan och följ toppräknaren för multitouch.' },
  { name: 'Använd helskärmsläge för slutlig bekräftelse', text: 'Gå till helskärmsläge och upprepa testet så att webbläsarens gränssnitt inte döljer de övre eller nedre pekområdena.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Pekskärmstest online för döda zoner och multitouch', level: 2 },
    {
      type: 'paragraph',
      html: 'En pekpanel kan fela på sätt som är svåra att bevisa vid normal appanvändning. En tangentbordstangent kan bara missa vid nedre kanten, en ritapp kan hoppa över en tunn vertikal remsa, eller spel kan tappa ett andra finger bara när tummen redan trycker på en kontroll. Det här testverktyget gör hela sidan till en rityta så att varje lucka, brutet streck och gräns för samtidiga kontakter blir synlig omedelbart.',
    },
    {
      type: 'paragraph',
      html: 'Använd det för sökningar som <strong>pekskärmstest</strong>, <strong>multitouch-test online</strong>, <strong>test pantalla tactil</strong> och <strong>comprobar zonas muertas pantalla</strong>. Ritytan registrerar fingerrörelser lokalt i webbläsaren; den laddar inte upp ritningar, pekpositioner, enhetsidentifierare eller diagnostiska resultat.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 installationer', label: 'Körs direkt i webbläsaren' },
        { value: 'Live', label: 'Räknare för aktiva tryck' },
        { value: 'Rityta', label: 'Visuell karta över döda zoner' },
      ],
    },
    { type: 'title', text: 'Så identifierar du döda zoner på pekskärmen', level: 3 },
    {
      type: 'paragraph',
      html: 'En död zon är ett område där digitaliseraren inte rapporterar kontakt pålitligt. Det kan vara en helt tom remsa, ett hörn som ignorerar tryck eller en liten fläck som bara fungerar med hårt tryck. Rita långsamma, överlappande linjer över skärmen. Om linjen konsekvent försvinner på samma ställe behöver det området mer testning.',
    },
    {
      type: 'list',
      items: [
        'Börja med horisontella streck från vänster kant till höger kant, med bara ett litet mellanrum mellan dragen.',
        'Upprepa med vertikala streck från överkant till nederkant för att avslöja smala kolumner som horisontell testning kan missa.',
        'Följ skärmens exakta kant, eftersom kantelektroder och gestzoner är vanliga felpunkter.',
        'Rita cirklar runt misstänkta områden för att se om avbrottet följer samma fysiska plats.',
        'Rotera enheten och testa igen för att skilja ett app-layoutproblem från ett fysiskt hårdvaruproblem.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'En upprepad tom linje är mer talande än ett enstaka missat streck',
      html: '<p>En kort lucka kan uppstå om fingret är torrt, rör sig för snabbt eller lämnar glaset. En hårdvarurelaterad död zon uppträder vanligtvis upprepade gånger på samma fysiska plats, över olika streckriktningar och efter rengöring av skärmen.</p>',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Trolig betydelse', 'Vad du ska prova härnäst'],
      rows: [
        ['Linjen bryts i samma vertikala remsa', 'Möjligt kolumnfel i digitaliseraren eller bubbla under skärmskyddet.', 'Ta bort skyddet om möjligt, rengör glaset och testa igen i helskärmsläge.'],
        ['Kanterna missar tryck men mitten fungerar', 'Tryck från skal, gestavvisning eller kant-elektrodproblem.', 'Ta bort skalet och upprepa långsamma kantsvep.'],
        ['Endast snabba rörelser hoppas över', 'Webbläsarens händelsebegränsning, låg bildfrekvens eller fingret lyfter från glaset.', 'Rör dig långsamt och jämför med en annan webbläsare.'],
        ['Slumpmässiga prickar visas utan beröring', 'Spökpekning, fukt, laddningsstörning eller skadad panel.', 'Torka skärmen, koppla ur laddaren, starta om och upprepa.'],
      ],
    },
    { type: 'title', text: 'Så mäter du stöd för multitouch', level: 3 },
    {
      type: 'paragraph',
      html: 'Multitouch-stöd är det maximala antalet oberoende kontakter som enheten kan rapportera samtidigt. En telefon kan spåra fem, tio eller fler kontakter, medan vissa billiga surfplattor, kiosker, handskar, fjärrskrivbordslager eller inbäddade webbläsare kan rapportera färre. Den aktiva räknaren visar antalet som just nu upptäcks; toppräknaren sparar det högsta antalet som uppnåtts sedan senaste rensningen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Tvåpunktsgester', description: 'Behövs för nypzoom, tvåfingersrotation, kartor, bildredigerare och tillgänglighetszoom.' },
        { title: 'Tre till fem tryck', description: 'Användbart för rytmspel, delade kontroller, ritappar, pianoklaviatur och kreativa surfplatteflöden.' },
        { title: 'Tiopunktspaneler', description: 'Vanliga på moderna telefoner och surfplattor, men filtrering från webbläsare eller operativsystem kan ändå minska antalet.' },
      ],
    },
    {
      type: 'tip',
      title: 'Bästa sättet att undvika ett falskt lågt antal',
      html: 'Placera fingrarna ett i taget och håll dem stilla i en sekund. Om du placerar alla fingrar samtidigt kan vissa operativsystem tolka gesten som handflatinmatning, zoomavsikt eller systemnavigering och kan dämpa delar av kontaktsetet.',
    },
    {
      type: 'proscons',
      title: 'Online testare jämfört med en inbyggd diagnosapp',
      items: [
        { pro: 'Körs direkt utan att installera något eller ge breda enhetsbehörigheter.', con: 'Den kan bara visa de pekhändelser som webbläsaren och operativsystemet exponerar.' },
        { pro: 'Lätt att dela med en reparationsverkstad eller köpare eftersom ritmönstret är synligt.', con: 'Den kan inte läsa fabrikskalibreringstabeller eller lågnivå-felkoder från digitaliseraren.' },
        { pro: 'Helskärmsläge täcker mer av den användbara skärmytan än en vanlig sida.', con: 'Systemfält, sensorpaneler och skyddade gestregioner kan fortfarande reservera vissa pixlar.' },
      ],
    },
    { type: 'title', text: 'Vanliga orsaker till missade tryck', level: 3 },
    {
      type: 'paragraph',
      html: 'Ett dåligt pekresultat betyder inte alltid att skärmen är trasig. Kapacitiva paneler förlitar sig på ett stabilt elektriskt fält genom glas, lim, skydd, hud och enhetsjord. Allt som förändrar det fältet kan orsaka luckor, falska tryck eller svag multitouch-spårning. Därför är det viktigt att testa under flera förhållanden.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Digitaliserare', definition: 'Det transparenta sensorlagret som rapporterar pekkoordinater till enheten.' },
        { term: 'Död zon', definition: 'Ett fysiskt skärmområde där tryck inte upptäcks eller bara upptäcks sporadiskt.' },
        { term: 'Spökpekning', definition: 'En pekhändelse som rapporteras av enheten när inget finger avsiktligt rör den punkten.' },
        { term: 'Handflatsavvisning', definition: 'Mjukvarufiltrering som ignorerar bred eller oavsiktlig kontakt, särskilt på surfplattor och pennenheter.' },
        { term: 'Peksamplarfrekvens', definition: 'Hur ofta enheten skannar peklagret. Högre frekvenser kan göra ritande och spel mer responsiva.' },
      ],
    },
    {
      type: 'table',
      headers: ['Orsak', 'Typiskt tecken', 'Snabb kontroll'],
      rows: [
        ['Skärmskydd', 'Dött område följer en bubbla, spricka, dammkant eller tjock glaskant.', 'Ta bort eller lyft skyddet endast om det är säkert och utbytbart.'],
        ['Fukt eller olja', 'Slumpmässiga hopp, glidande tryck eller missade knackningar efter regn, svett eller rengöringsspray.', 'Torka glaset och händerna helt och testa sedan igen.'],
        ['Laddningsstörning', 'Spökpekningar uppstår vid inkopplad laddare och försvinner på batteri.', 'Koppla ur laddaren eller använd en certifierad adapter och kabel.'],
        ['Tryck från skal', 'Tryck misslyckas nära hörn eller böjda kanter.', 'Ta bort skalet och testa samma kant igen.'],
        ['Hårdvaruskada', 'Samma remsa felfungerar efter rengöring, omstart och borttagning av skärmskydd.', 'Dokumentera resultatet och kontakta reparationssupport.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'Tryck är inte samma sak som pekprecision',
      html: 'De flesta pekskärmar på telefoner och surfplattor är kapacitiva, så hårdare tryck borde inte behövas. Om en plats bara fungerar när du trycker hårt kan problemet vara svag kontakt genom ett skydd, panelskada, problem med flexkabeln eller mjukvarufiltrering snarare än normalt pekskärmsbeteende.',
    },
    { type: 'title', text: 'Testa kanter, hörn och tangentbordszoner', level: 3 },
    {
      type: 'paragraph',
      html: 'Många verkliga klagomål börjar i intensivt använda områden: tangentbordets nedre rad, backsteg, navigeringsgester, aviseringspanelen, snabbinställningar, tumzoner i spel och surfplattehörn som används för ritgenvägar. Använd helskärmsläge innan du bedömer övre och nedre områden, eftersom webbläsarens kontroller annars kan dölja delar av skärmen.',
    },
    {
      type: 'list',
      items: [
        'Rita en rektangel en fingerbredd innanför skärmkanten.',
        'Gör korta vertikala streck över tangentbordsraderna där missade bokstäver uppstår.',
        'Håll en tumme i en spelkontrollposition och rita med ett annat finger för att testa kontaktkonflikt.',
        'Testa nära laddningsporten först urkopplad, sedan inkopplad, för att kontrollera jordningsstörningar.',
        'Om en penna används, testa fingerinmatning separat från penninmatning eftersom de kan använda olika avkänningsvägar.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'När helskärmsläge ändrar resultatet',
      html: '<p>Om skärmen fungerar i helskärmsläge men inte i den normala webbläsarvyn är hårdvaran troligen inte den enda faktorn. Adressfält, dra-för-att-uppdatera, systemnavigering och webbläsarens gesthantering kan fånga upp tryck nära vyportens övre eller nedre kant.</p>',
    },
    { type: 'title', text: 'Så dokumenterar du ett reparations- eller garantiärende', level: 3 },
    {
      type: 'paragraph',
      html: 'För garantisupport är konsekvens viktigare än ett enda dramatiskt fel. Rensa ritytan, rita ett enkelt rutnät och ta ett foto eller gör en skärminspelning när samma fysiska område vägrar rita. Inkludera om telefonen laddade, om ett skärmskydd var monterat och om problemet kvarstår efter omstart.',
    },
    {
      type: 'summary',
      title: 'Användbar bevisföring att samla in',
      items: [
        'En ren helskärmsrita som visar upprepade luckor på samma plats.',
        'Toppantalet för multitouch som uppnåtts med flera fingrar placerade försiktigt.',
        'En jämförelse med och utan skal, skärmskydd, laddare eller handskar.',
        'Enhetsmodell, webbläsare, operativsystemversion och om problemet även uppstår i appar.',
      ],
    },
    {
      type: 'message',
      title: 'Sekretessinformation',
      html: 'Ritningen och räknarna genereras på klientsidan. Testverktyget är utformat för omedelbar diagnos, inte för kontobaserad loggning, fjärrreparation eller uppladdning av känsliga skärminteraktionsmönster.',
    },
    { type: 'title', text: 'Checklista för resultattolkning', level: 3 },
    {
      type: 'table',
      headers: ['Resultat', 'Tolkning', 'Säkerhet'],
      rows: [
        ['Sammanhängande streck överallt', 'Peklagret är troligen friskt under nuvarande förhållanden.', 'Hög för grundläggande fingerinmatning.'],
        ['En upprepningsbar tom remsa', 'Möjlig fysisk digitaliserarskada eller hinder från skärmskydd.', 'Hög om det upprepas efter rengöring och omstart.'],
        ['Låg multitouch-topp endast i en webbläsare', 'Begränsning i webbläsare, sekretess, webbvy eller gesthantering.', 'Medel. Testa i en annan webbläsare.'],
        ['Spökpekningar vid laddning', 'Elektriskt brus, jordningsproblem eller defekt laddare.', 'Medel till hög om urkoppling löser problemet.'],
        ['Fel endast med skärmskydd', 'Skyddets tjocklek, limglipa, spricka eller lyft kant.', 'Hög om borttagning av skyddet löser problemet.'],
      ],
    },
    {
      type: 'summary',
      title: 'Snabb diagnosväg',
      items: [
        'Rita ett fullständigt rutnät långsamt.',
        'Ringa in varje lucka som upprepas.',
        'Rensa ritytan och upprepa i helskärmsläge.',
        'Ta bort variabler som skal eller skärmskydd när det är möjligt.',
        'Mät det högsta antalet samtidiga tryck.',
        'Jämför med en annan webbläsare eller app innan du fastställer hårdvarufel.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Aktiva tryck',
    peakTouchesLabel: 'Multitouch-topp',
    coverageLabel: 'Ritytans täckning',
    statusReady: 'Rita varsomhelst för att avslöja döda zoner',
    statusDrawing: 'Pekinmatning upptäckt',
    statusCleared: 'Ritytan rensad',
    clearButton: 'Rensa ritytan',
    fullscreenButton: 'Helskärm',
    exitFullscreenButton: 'Avsluta helskärm',
    canvasLabel: 'Rityta för pekskärmstest',
    unsupportedTouch: 'Pekhändelser är inte tillgängliga i den här webbläsaren',
  },
};
