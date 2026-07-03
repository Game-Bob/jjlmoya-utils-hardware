import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mus-dubbelklick-test';
const title = 'Mus Dubbelklick Test';
const description =
  'Testa varje musknapp och upptäck oönskade dubbelklick, slitna brytare och kontaktstuds med per-knapp tidtagning i din webbläsare.';

const faqData = [
  {
    question: 'Vad är ett mus-dubbelklickproblem?',
    answer:
      'Ett dubbelklickproblem uppstår när ett fysiskt tryck rapporteras som två klick. Det kan påverka vänsterknappen, högerknappen, hjulklick eller sidoknappar och orsakas vanligtvis av brytarslitage, kontaktstuds, firmware-avstudsinställningar eller instabil trådlös signal.',
  },
  {
    question: 'Vilket gap räknas som misstänkt?',
    answer:
      'Mycket korta mellanrum mellan klick är misstänkta eftersom mänskliga dubbelklick vanligtvis tar längre tid. Detta verktyg börjar med en tröskel på 80 ms, men du kan justera den beroende på musen och din teststil.',
  },
  {
    question: 'Kan en webbläsare bevisa att brytaren är trasig?',
    answer:
      'En webbläsare kan inte inspektera den elektriska brytaren direkt, men den kan registrera de klickhändelser som ditt operativsystem tar emot. Upprepade misstänkta mellanrum under enkelklickstestning är starka bevis på studs eller oönskat dubbelklickande.',
  },
  {
    question: 'Hur bör jag testa korrekt?',
    answer:
      'Klicka långsamt och medvetet, med målet att göra enkelklick. Om den misstänkta räknaren ökar även när du inte avsiktligt dubbelklickar, upprepa testet på en annan USB-port, en annan webbläsare och en annan dator om möjligt.',
  },
];

const howToData = [
  {
    name: 'Ställ in detektionströskeln',
    text: 'Börja med 80 ms. Sänk den för strikt brytarstudsdetektion eller höj den om din enhet producerar något bredare oavsiktliga mellanrum.',
  },
  {
    name: 'Klicka som ett normalt enkelklick',
    text: 'Tryck på varje musknapp ett klick i taget ovanför musvisualiseringen. Dubbelklicka inte avsiktligt under den första omgången.',
  },
  {
    name: 'Titta på den misstänkta räknaren',
    text: 'Om misstänkta händelser visas medan du gör enkelklick, kontrollera vilken visuell knapp som markerades och jämför med de kompakta händelsechippen.',
  },
  {
    name: 'Jämför med en annan enhet',
    text: 'En frisk mus bör hålla en hög poäng under samma tröskel. Att jämföra enheter hjälper till att skilja hårdvarufel från mjukvaruinställningar.',
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

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
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
      text: 'Mus Dubbelklick Test: Diagnostisera Knappstuds Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En mus som dubbelklickar när du trycker en gång är inte bara irriterande. Den kan öppna mappar av misstag, avbryta dra-och-släpp-åtgärder, avfyra två skott i ett spel, stänga webbläsarflikar eller få snabbmenyer att visas och försvinna innan du kan använda dem. Detta online-test för mus-dubbelklick fokuserar på den användbara diagnostiska signalen: <strong>tidsgapet mellan knapptryckningar som rapporteras av ditt operativsystem</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Till skillnad från en enkel klickräknare spårar detta verktyg varje knapp oberoende: vänsterklick, högerklick, hjulklick, webbläsarens bakåtknapp och framåtknapp. Det spelar roll eftersom en mus kan ha en trasig högerknapp medan vänsterknappen fortfarande är frisk, eller en sliten sidoknapp som bara slår fel efter månader av spelande eller användning av produktivitetsgenvägar.',
    },
    {
      type: 'title',
      text: 'Vad Detta Musknappstest Mäter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När du trycker på en musknapp tar webbläsaren emot en pekarhändelse som innehåller knappkoden. Verktyget lagrar den senaste tidsstämpeln för samma fysiska knapp och jämför den med nästa tryck på samma knapp. Om gapet är kortare än den valda tröskeln markeras händelsen som misstänkt eftersom ett normalt avsiktligt andra klick vanligtvis tar längre tid.',
    },
    {
      type: 'list',
      items: [
        'Vänsterknapp: användbar för att upptäcka oavsiktliga dubbelklick vid öppning av filer, markering av text eller dragning av fönster',
        'Högerknapp: användbar när snabbmenyer flimrar, öppnas två gånger eller stängs omedelbart',
        'Hjulknapp: användbar för möss där mittklick öppnar flera flikar eller misslyckas efter mycket surfande',
        'Bakåt- och Framåtknappar: användbara för gamingmöss och produktivitetsmöss med sidobrytare',
        'Per-knapp tidtagning: undviker att blanda ett vänsterklick med ett högerklick och kalla det ett falskt dubbelklick',
      ],
    },
    {
      type: 'title',
      text: 'Varför Möss Börjar Dubbelklicka',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De flesta möss använder små mekaniska brytare under varje knapp. När brytarkontakterna stängs kan metallen studsa elektriskt under en mycket kort period innan den stabiliseras. Musens firmware filtrerar normalt bort detta brus med avstudslogik. När brytaren slits ut kan studsen bli längre, bullrigare eller inkonsekvent, så att datorn tar emot två knapptryckningar trots att ditt finger bara gjorde ett fysiskt tryck.',
    },
    {
      type: 'paragraph',
      html: 'Dubbelklick orsakas inte alltid av samma sak. Det kan vara mekaniskt brytarslitage, för aggressivt inställd firmware-avstudsning, damm eller oxidation inuti brytaren, instabila trådlösa paket, makroprogramvara, en skadad kabel eller en operativsysteminställning som gör oavsiktliga dubbelklick lättare att märka.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Trolig Orsak', 'Vad att Testa'],
      rows: [
        ['Ett klick öppnar filer som vid dubbelklick', 'Vänsterbrytarstuds eller förvirring kring operativsystemets dubbelklickshastighet', 'Testa Vänster med långsamma enkelklick vid 80 ms'],
        ['Högerklickmenyn flimrar eller stängs', 'Högerbrytarstuds eller programvara som fångar upp snabbmenyer', 'Testa Höger och inaktivera mustillfälligt'],
        ['Mittklick öppnar två flikar', 'Hjulbrytarslitage', 'Testa Hjul med medvetna enkelklick'],
        ['Bakåtknappen hoppar två sidor', 'Sidobrytarstuds eller upprepning av webbläsargenväg', 'Testa Bakåt och Framåt separat'],
        ['Händer bara trådlöst', 'Trådlös störning, lågt batteri eller mottagarplacering', 'Testa igen med kabel eller flytta mottagaren närmare'],
      ],
    },
    {
      type: 'title',
      text: 'Välja Rätt Avstuds-Tröskel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tröskeln är det maximala gap som detta verktyg fortfarande anser vara misstänkt. Standardvärdet, <strong>80 ms</strong>, är en praktisk medelväg: tillräckligt strikt för att fånga många oönskade dubbla händelser, men inte så aggressivt att varje normalt avsiktligt dubbelklick blir ett hårdvarufel.',
    },
    {
      type: 'table',
      headers: ['Tröskel', 'Bäst För', 'Hur man Tolkar Det'],
      rows: [
        ['30-50 ms', 'Strikta elektriska studskontroller', 'Bra för att bekräfta mycket snabba dubbla händelser från en sliten brytare'],
        ['60-90 ms', 'Allmän mus-dubbelklickdiagnos', 'Bästa standardintervall för de flesta gaming- och kontorsmöss'],
        ['100-140 ms', 'Intermittent slitna brytare', 'Användbart när musen ibland skapar bredare oavsiktliga mellanrum'],
        ['150-180 ms', 'Stresstest och svaga brytare', 'Använd försiktigt, eftersom snabba avsiktliga dubbelklick kan hamna i detta intervall'],
      ],
    },
    {
      type: 'title',
      text: 'Hur man Utför ett Tillförlitligt Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Under den första omgången, dubbelklicka inte avsiktligt. Tryck på varje musknapp långsamt och medvetet, en knapp i taget, medan markören är över musvisualiseringen. En frisk brytare bör producera stabila enkelhändelser. Om den misstänkta räknaren ökar under långsamma enkelklick, upprepa samma knapptest flera gånger för att bekräfta mönstret.',
    },
    {
      type: 'list',
      items: [
        'Testa Vänster med 20 till 30 långsamma tryck, sedan Höger, sedan Hjul, sedan sidoknapparna',
        'Dra inte musen medan du testar knappstuds, eftersom rörelse kan distrahera från tidsresultatet',
        'Om en knapp visar misstänkta händelser, upprepa samma test efter att ha bytt USB-port eller webbläsare',
        'För trådlösa möss, testa med ett nytt batteri och mottagaren nära musen',
        'Om bara en knapp misslyckas upprepade gånger, är felet troligen den specifika brytaren snarare än hela enheten',
      ],
    },
    {
      type: 'title',
      text: 'Tolka Resultaten',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Resultat', 'Betydelse', 'Rekommenderat Nästa Steg'],
      rows: [
        ['0 misstänkta händelser efter många tryck', 'De testade knapparna verkar friska under den valda tröskeln', 'Behåll standardtröskeln eller testa igen senare om symtomen återkommer'],
        ['1 isolerad misstänkt händelse', 'Kan vara verklig studs eller ett oavsiktligt snabbt tryck', 'Upprepa samma knapp långsamt innan du drar slutsatser'],
        ['Upprepade misstänkta händelser på en knapp', 'Starkt tecken på brytarstuds eller slitna kontakter', 'Testa på en annan dator och dokumentera resultatet'],
        ['Misstänkta händelser på varje knapp', 'Kan vara programvara, drivrutin, makroverktyg eller webbläsarmiljö', 'Inaktivera musprogramvara och testa igen'],
        ['Endast trådlöst läge misslyckas', 'Troligen batteri, mottagarplacering eller störning', 'Prova trådbundet läge eller flytta mottagaren närmare'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Hälsopoängen är en snabb sammanfattning, inte en slutgiltig dom. Det viktigaste beviset är <strong>vilken knapp</strong> som producerade misstänkta händelser och om mönstret upprepas när du trycker på samma knapp långsamt. En enda dålig händelse under ett stressat test är mindre betydelsefull än fem misstänkta högerklickhändelser under medvetna enkelklick.',
    },
    {
      type: 'title',
      text: 'Innan Du Byter Musen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kontrollera om din musprogramvara har en inställning för avstudsningstid och testa igen efter att ha ändrat den',
        'Inaktivera makron, rapid-fire-profiler eller knappomtilldelning under diagnos',
        'Prova en annan USB-port, särskilt om du använder en hub eller frontpanelanslutning',
        'För trådlösa möss, testa med dongeln på en förlängningskabel nära musmattan',
        'Jämför med en annan mus på samma dator för att skilja hårdvarufel från mjukvarubeteende',
      ],
    },
    {
      type: 'title',
      text: 'Reparation, Garanti och Bevis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om felet är mekaniskt löser rengöring av det yttre skalet det sällan permanent eftersom problemet finns inuti brytarkontakterna. Vissa användare byter mikrobrytaren, men det kräver lödning och är inte värt det för varje mus. Om musen är under garanti är upprepade misstänkta mellanrum på samma knapp användbara bevis när du förklarar problemet för supporten.',
    },
    {
      type: 'paragraph',
      html: 'För garantianspråk, spela in en kort skärminspelning medan du trycker långsamt på den felande knappen. Se till att händelsechippen visar knappetiketten och den misstänkta tidpunkten. Detta är tydligare än att säga "min mus dubbelklickar ibland" eftersom det visar den faktiska knappen och den ungefärliga tidpunkten för den oönskade dubbla händelsen.',
    },
    {
      type: 'title',
      text: 'Begränsningar med ett Webbaserat Mustest',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Detta test mäter de händelser som når webbläsaren. Det kan inte direkt inspektera den elektriska vågformen inuti brytaren och det kan inte kringgå varje drivrutin, operativsystem eller leverantörsverktyg. Det är fortfarande användbart: om webbläsaren tar emot dubbla händelser kan dina vanliga program också ta emot dem. För validering på tekniknivå ger hårdvaruverktyg som oscilloskop eller brytartestare djupare bevis, men de är inte nödvändiga för de flesta användardiagnoser.',
    },
  ],
  ui: {
    badge: 'Avstudsningslabb',
    clickTarget: 'Knappmatris',
    clickTargetHint: 'Tryck vänster, höger, hjul, bakåt och framåt',
    totalClicks: 'Totalt',
    suspiciousClicks: 'Misstänkta',
    fastestGap: 'Snabbaste gap',
    healthScore: 'Hälsopoäng',
    thresholdLabel: 'Detektionströskel',
    thresholdUnit: 'ms',
    cleanEvent: 'ren',
    suspiciousEvent: 'misstänkt',
    reset: 'Återställ',
    statusIdle: 'Tryck på varje musknapp för att testa den oberoende',
    statusClean: 'Ingen misstänkt knappstuds upptäckt',
    statusWarning: 'Misstänkt studs upptäckt på en musknapp',
    lastGap: 'Senaste händelse',
    logTitle: 'Senaste knapphändelser',
    emptyLog: 'Tryck på valfri musknapp ovanför muskroppen.',
    leftButton: 'Vänster',
    middleButton: 'Hjul',
    rightButton: 'Höger',
    backButton: 'Bakåt',
    forwardButton: 'Framåt',
    otherButton: 'Annan',
  },
};
