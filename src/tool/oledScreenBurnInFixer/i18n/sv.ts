import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'oled-inbranningsfixare';
const title = 'OLED Inbränningsfixare';
const description =
  'Kör en OLED inbränningsfixare i helskärm och en LCD fast pixel tränare med snabba RGB färgcykler, vitt brus, en obligatorisk fotokänslighetsvarning och en inbyggd timer.';

const faqData = [
  {
    question: 'Kan en OLED inbränningsfixare ta bort permanent inbränning?',
    answer:
      'Inget webbläsarverktyg kan återställa permanent organiskt subpixelslitage. En pixeltränare kan minska tillfällig bildretention, göra svag eftersläpning mindre synlig eller hjälpa till att avgöra om ett märke är tillfällig retention eller permanent inbränning.',
  },
  {
    question: 'Är detta säkert för personer med fotokänslig epilepsi?',
    answer:
      'Testet använder snabbt blinkande färger och statiskt brus med hög kontrast. Personer med fotokänslig epilepsi, migränkänslighet, anfallsrisk eller obehag av blinkande ljus ska inte köra det.',
  },
  {
    question: 'Kan detta reparera en fast LCD pixel?',
    answer:
      'Det kan ibland hjälpa en fast pixel som stannar på röd, grön, blå eller vit genom att snabbt ändra subpixeltillståndet. Det kan inte reparera en död svart pixel eller fysiska panelskador.',
  },
  {
    question: 'Hur länge ska jag köra pixeltränaren?',
    answer:
      'Börja med 5 till 10 minuter för en fast pixel eller lätt bildretention. Längre körningar ska övervakas, ljusstyrkan hållas rimlig och skärmen få svalna.',
  },
  {
    question: 'Varför använder verktyget canvas istället för video?',
    answer:
      'Mönstren genereras direkt i HTML5 Canvas, så sidan behöver inga tunga videofiler. Det håller laddningen snabb och gör färg och bruscykeln responsiv mot helskärmsstorleken.',
  },
];

const howToData = [
  {
    name: 'Läs fotokänslighetsvarningen',
    text: 'Fortsätt inte om blinkande ljus, högkontrastmönster, migrän eller anfallsrisk kan påverka dig eller någon i närheten.',
  },
  {
    name: 'Ställ in en kort första körning',
    text: 'Välj 5 till 10 minuter för en första genomgång, välj Hybridläge och håll ljusstyrkan på en bekväm nivå.',
  },
  {
    name: 'Starta helskärmsreparationen',
    text: 'Bekräfta varningen, tryck på Starta reparation och låt canvasen cykla genom RGB färger och brus utan att flytta andra fönster över skärmen.',
  },
  {
    name: 'Inspektera märket efteråt',
    text: 'Stoppa testet, visa neutral grå, vit, svart, röd, grön och blå skärmar och jämför om spökbilden eller den fasta pixeln förändrades.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'OLED Inbränningsfixare och LCD Fast Pixel Tränare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna OLED skärm inbränningsfixare är en helskärms pixeltränare för tillfällig bildretention, svaga spökbilder och vissa fasta LCD pixlar. Den genererar snabba röda, gröna, blå, vita, svarta, gula och statiska mönster direkt i HTML5 Canvas. Det finns inga videofiler, inga externa bildresurser och inget nedladdningssteg: webbläsaren målar varje bildruta i den aktuella skärmstorleken.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fotokänslighetsvarning',
      icon: 'mdi:alert',
      badge: 'Obligatorisk',
      html: 'Reparationsmönstret använder snabba blixtar, högkontrastövergångar och vitt brus. Kör det inte om du har fotokänslig epilepsi, anfallsrisk, migränkänslighet, yrsel utlöst av blinkande ljus eller om någon i närheten kan påverkas. Stoppa omedelbart om du känner ögonansträngning, illamående, huvudvärk eller obehag.',
    },
    {
      type: 'paragraph',
      html: 'Verktyget är användbart när den praktiska frågan är: <strong>är detta märke tillfällig retention som kan blekna eller permanent panelslitage?</strong> En kort övervakad körning kan ibland minska en spökbild orsakad av kvarhållna statiska gränssnittselement, och kan ibland väcka en subpixel som fastnat på en färg. Det kan inte återuppbygga slitet OLED material, reparera ett sprucket lager, återställa en död drivlinje eller garantera återställning.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: 'inlästa videofiler', icon: 'mdi:speedometer' },
        { value: 'RGB', label: 'primär subpixelträning', icon: 'mdi:palette' },
        { value: '1-120 min', label: 'inbyggd sessionstimer', icon: 'mdi:timer-outline' },
        { value: '100%', label: 'klientsidig körning', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'Vad inbränning, bildretention och eftersläpning betyder',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'OLED inbränning',
          definition: 'Permanent ojämnt slitage av organiska subpixlar. En statisk logotyp, ett aktivitetsfält, ett navigeringsfält eller ett spel HUD kan lämna en synlig form eftersom dessa pixlar har åldrats annorlunda än resten av panelen.',
        },
        {
          term: 'Tillfällig bildretention',
          definition: 'En kortvarig spökbild som stannar kvar efter att statiskt innehåll försvinner. Den kan blekna med normalt blandat innehåll, en kompensationscykel eller ett pixelträningsmönster.',
        },
        {
          term: 'LCD fast pixel',
          definition: 'En pixel eller subpixel som fastnat på röd, grön, blå, vit eller en annan fast färg. Snabba tillståndsändringar kan ibland frigöra den om problemet inte är fysisk skada.',
        },
        {
          term: 'Död pixel',
          definition: 'En pixel som förblir svart eftersom den inte längre avger eller överför ljus korrekt. En webbläsarbaserad pixeltränare kan normalt inte återuppliva en verkligt död pixel.',
        },
        {
          term: 'LCD eftersläpning',
          definition: 'Rörelsespår orsakade av långsam pixelrespons. Det skiljer sig från skärminbränning, även om användare ofta beskriver båda som spökbilder.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tillfällig retention',
          description: 'Bleknar vanligtvis efter blandat innehåll, skärmuppdateringsrutiner eller en kort RGB och brussession.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Synlig efter statiskt innehåll', 'Ofta mjukare i kanterna', 'Kan förbättras inom minuter eller timmar'],
        },
        {
          title: 'Permanent inbränning',
          description: 'Ojämnt OLED slitage som förblir synligt efter vila, kompensationscykler och varierat innehåll.',
          icon: 'mdi:contrast-circle',
          points: ['Motsvarar långvarigt statiskt gränssnitt', 'Mest synligt på enfärgade ytor', 'Försvinner inte efter träning'],
        },
        {
          title: 'Fast pixel',
          description: 'En enskild punkt eller liten grupp låst på en färg snarare än en stor spökbild.',
          icon: 'mdi:grain',
          points: ['Ofta en pixel bred', 'Kan vara röd, grön, blå eller vit', 'Svarar ibland på snabba färgbyten'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Så använder du pixeltränaren säkert',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sänk ljusstyrkan före första körningen, särskilt på OLED telefoner, OLED TV apparater och bärbara OLED paneler.',
        'Börja med 5 till 10 minuter; lämna inte skärmen obevakad under långa sessioner.',
        'Använd helskärm så att det drabbade området får samma mönster som resten av panelen.',
        'Informera rummet om det blinkande ljuset; kör inte testet nära personer som inte har gett sitt samtycke.',
        'Stoppa om panelen blir ovanligt varm, om webbläsaren hackar kraftigt eller om du känner obehag.',
        'Inspektera efter körningen neutral grå, vit, svart, röd, grön och blå skärmar för att jämföra resultat.',
      ],
    },
    {
      type: 'table',
      headers: ['Problem', 'Första läge', 'Första varaktighet', 'Ljusstyrkeråd'],
      rows: [
        ['Svag OLED spökbild', 'Hybrid RGB plus brus', '5-10 minuter', 'Bekväm, inte maximal'],
        ['Ny statisk logotypretention', 'RGB cykel', '10-20 minuter', 'Måttlig ljusstyrka'],
        ['Enkel färgad fast LCD pixel', 'Brus eller Hybrid', '5-15 minuter', 'Normal skrivbordsljusstyrka'],
        ['Gammal permanent inbränning', 'Hybrid endast för diagnos', '5 minuter', 'Undvik långa körningar med hög ljusstyrka'],
        ['Död svart pixel', 'Rekommenderas inte som reparation', 'Endast inspektion', 'Ingen pixeltränare kan garantera återställning'],
      ],
    },
    {
      type: 'tip',
      title: 'Använd korta sessioner först',
      html: 'En lång blinkande session är inte automatiskt bättre. Om ett märke är tillfälligt ser man ofta förändring efter en kort genomgång. Om inget förändras efter ett rimligt försök och en normal paneluppdateringsrutin kan problemet vara permanent slitage eller ett hårdvarudefekt.',
    },
    {
      type: 'title',
      text: 'Välja mellan RGB cykel, vitt brus och hybridläge',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Olika artefakter svarar på olika mönster. En röd grön blå cykel tränar de primära subpixlarna i en kontrollerad sekvens. Vitt brus växlar snabbt luminans över många små områden, vilket kan hjälpa till att exponera och träna isolerade fasta pixlar. Hybridläge växlar mellan båda, vilket gör det till det bästa första valet när du är osäker på om problemet är bildretention eller en lat subpixel.',
    },
    {
      type: 'table',
      headers: ['Läge', 'Vad det gör', 'Bäst för', 'Se upp för'],
      rows: [
        ['RGB cykel', 'Helskärms primär och högkontrastfält', 'OLED retention och färgkanalinspektion', 'Synligt blinkande'],
        ['Vitt brus', 'Slumpmässigt svart vitt brus över panelen', 'Enskilda fasta pixlar och små kluster', 'Högre visuell intensitet'],
        ['Hybrid', 'Växlar färgfält och brus', 'Allmänt OLED inbränningsfixarflöde', 'Använd en kort timer först'],
      ],
    },
    {
      type: 'proscons',
      title: 'Online pixeltränare: realistiska fördelar och gränser',
      items: [
        {
          pro: 'Körs direkt i webbläsaren utan att installera programvara eller ladda videofiler.',
          con: 'Kan inte återställa permanent OLED materialslitage eller fysiska panelskador.',
        },
        {
          pro: 'Helskärmscanvas täcker skärmen med genererade RGB och brusbildrutor.',
          con: 'Webbläsarens timing, enhetsprestanda och helskärmsstöd kan påverka animationskonsistensen.',
        },
        {
          pro: 'Användbar för första diagnos innan du provar tillverkarens panelunderhållsrutiner.',
          con: 'Ska inte ersätta garantiservice för nya paneler med uppenbara defekter.',
        },
      ],
    },
    {
      type: 'title',
      text: 'OLED specifik vägledning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'OLED pixlar avger sitt eget ljus. När ett statiskt element förblir på skärmen under många timmar kan subpixlarna under det elementet åldras i olika takt. Det är därför inbränning ofta följer formen av TV kanallogotyper, telefonstatusfält, navigeringsknappar, spel HUDS, streamingapp sidofält eller skrivbordsaktivitetsfält. En pixeltränare kan få tillfällig retention att blekna snabbare, men permanent differentiellt åldrande förblir ett materialproblem.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Kontrollera inbyggd panelvård först',
      html: 'Många OLED TV apparater, skärmar, bärbara datorer och telefoner har pixeluppdatering, paneluppdatering, logotypdämpning, skärmförskjutning, aktivitetsfältsdämpning eller kompensationscykler. Använd tillverkarens rutin enligt instruktionerna, särskilt om skärmen är under garanti. Detta onlineverktyg ses bäst som en mild diagnostik och tillfällig retentionsträning, inte som en ersättning för panelvårdsfirmware.',
    },
    {
      type: 'list',
      items: [
        'Om spökbilden är ny, låt skärmen visa varierat innehåll eller vila innan du antar permanent inbränning.',
        'Om märket motsvarar en årgammal statisk logotyp är det osannolikt att en pixeltränare tar bort den helt.',
        'Om panelen har en inbyggd uppdateringscykel, kör den endast så ofta som tillverkaren rekommenderar.',
        'Undvik att köra testmönster med maximal ljusstyrka i timmar; värme och ljusstyrka bidrar till slitage.',
        'Dölj aktivitetsfält, aktivera skärmsläckare och minska ljusstyrkan på statiskt gränssnitt för att förhindra återfall.',
      ],
    },
    {
      type: 'title',
      text: 'LCD fast pixel vägledning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'LCD paneler bränner inte in på samma sätt som OLED paneler, men de kan visa fasta pixlar, tryckmärken, paneldefekter och tillfällig bildpersistens. En fast pixel som förblir röd, grön, blå, cyan, magenta, gul eller vit kan orsakas av en subpixel som inte växlar korrekt. Snabba förändringar kan ibland hjälpa, även om det inte finns någon garanterad online reparation.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Död pixel kontra fast pixel',
      icon: 'mdi:information-outline',
      badge: 'Diagnos',
      html: 'En färgad punkt har bättre chans än en svart punkt. En svart pixel på varje testfärg är vanligtvis död eller blockerad. En färgad pixel som ändras på vissa bakgrunder men inte andra kan vara en fast subpixel och är en bättre kandidat för en kort pixelträningssession.',
    },
    {
      type: 'summary',
      title: 'Innan du använder tryck eller fysiska metoder',
      items: [
        'Tryck inte hårt på OLED paneler, pekskärmar eller ömtåliga bärbara skärmar.',
        'Undvik vassa verktyg, tygklädda pennor och alla metoder som kan repa ytan.',
        'Använd först mjukvaruträning, sedan garantisupport om defekten kvarstår.',
        'Dokumentera defekten med makrofoton om skärmen är ny och returpolicyer fortfarande gäller.',
      ],
    },
    {
      type: 'title',
      text: 'Varför Canvas är bättre än en tung reparationsvideo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En videobaserad inbränningsfixare måste ladda ner kodade bildrutor, avkoda dem, skala dem till skärmen och hoppas att komprimeringen inte har mjukat upp de exakta övergångarna. Detta verktyg genererar varje bildruta direkt i webbläsaren. RGB fälten är solida, bruset skapas för den aktuella canvasstorleken och sidan undviker stora mediefiler som skulle sakta ner laddningen eller minska PageSpeed.',
    },
    {
      type: 'list',
      items: [
        'Ingen extern videofil betyder snabbare första rendering och mindre nätverksberoende.',
        'Canvasutmatningen skalas till helskärmsytan istället för att begränsas av en videoupplösning.',
        'Timern kan stoppa reparationen automatiskt istället för att loopa en video i all oändlighet.',
        'Läge, hastighet, varaktighet och intensitet kan ändras utan att ladda ett annat media.',
      ],
    },
    {
      type: 'message',
      title: 'En praktisk förväntning',
      ariaLabel: 'Inbränningsfixar förväntning',
      html: 'Använd detta verktyg som ett kontrollerat första steg: minska tillfällig retention, träna en eventuell fast pixel och samla bevis. Om märket överlever varierat innehåll, inbyggda paneluppdateringsrutiner och försiktiga korta träningssessioner, behandla det som ett hårdvaru eller garantiproblem.',
    },
  ],
  ui: {
    safetyTitle: 'Varning för blinkande ljus',
    safetyBody: 'Detta reparationsmönster blinkar snabbt med solida färger och högkontrastbrus. Använd det inte om du eller någon i närheten kan påverkas av fotokänslig epilepsi, anfall, migrän, yrsel eller blinkljuskänslighet.',
    safetyChecklist: 'Håll ljusstyrkan rimlig, övervaka sessionen och stoppa omedelbart om du känner obehag.',
    safetyConfirm: 'Jag förstår fotokänslighetsrisken och vill aktivera reparationsknappen.',
    safetyContinue: 'Fortsätt till inställningar',
    startRepair: 'Starta reparation (Helskärm)',
    controlsLabel: 'OLED skärm reparationskontroller',
    modeLabel: 'Mönsterläge',
    modeCycle: 'RGB cykel',
    modeNoise: 'Vitt brus',
    modeHybrid: 'Hybrid',
    modeCycleDescription: 'Solida primärfärger för bildretention och kanalkontroll.',
    modeNoiseDescription: 'Högfrekvent brus för enskilda fasta pixlar och små kluster.',
    modeHybridDescription: 'Bästa första genomgång: växlar RGB fält med statisk textur.',
    speedLabel: 'Cykelhastighet',
    durationLabel: 'Varaktighet',
    durationShort: '5 min',
    durationStandard: '10 min',
    durationDeep: '20 min',
    durationShortDescription: 'Snabb kontroll',
    durationStandardDescription: 'Rekommenderad',
    durationDeepDescription: 'Övervakad körning',
    fullscreenHint: 'Helskärms OLED inbränningsreparationscanvas',
    intensityLabel: 'Brusintensitet',
    warningBadge: 'Blinkande innehåll',
  },
};
