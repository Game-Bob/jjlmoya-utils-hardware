import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'muskurv-hopp-vinkel-test';
const title = 'Mustest: Hopp och Vinkelkorrigering';
const description =
  'Rita råa mussignaturer online för att upptäcka sensorhopp, skakig spårning och vinkelkorrigering eller prediktion som gör rörelsen onaturligt rak.';

const faqData = [
  {
    question: 'Vad är mushopp?',
    answer:
      'Mushopp är oönskad skakning eller brus i markörbanan även när handen rör sig mjukt. Det kan komma från ett smutsigt sensorfönster, en dålig yta, högt lyftavståndsbeteende, elektriskt brus, trådlös instabilitet eller en sensor som har svårt vid den valda DPI:n.',
  },
  {
    question: 'Vad är vinkelkorrigering?',
    answer:
      'Vinkelkorrigering, ibland kallad prediktion, är en korrigeringsfunktion där musens firmware försöker omvandla något ofullkomlig mänsklig rörelse till rakare horisontella, vertikala eller diagonala linjer. Vissa kontorsanvändare uppskattar det, men många spelare och artister föredrar rå rörelse utan prediktion.',
  },
  {
    question: 'Kan detta test bevisa att min musensor är dålig?',
    answer:
      'Det kan inte inspektera sensorn elektriskt, men det visar rörelsebanan som din webbläsare tar emot. Om upprepade mjuka passager skapar brusiga punkter, plötsliga avvikelser eller onaturligt raka segment är resultatet användbara bevis för att felsöka musen, ytan, DPI:n, den trådlösa anslutningen eller firmware-inställningarna.',
  },
  {
    question: 'Hur ska jag rita för det mest tillförlitliga resultatet?',
    answer:
      'Rita långsamma diagonala linjer, medelsnabba kurvor och långa horisontella streck. Testa samma rörelse flera gånger. Hopp är lättare att se i långsamma kontrollerade linjer, medan vinkelkorrigering är lättare att upptäcka när diagonal rörelse blir misstänkt rak eller trappstegsformad.',
  },
];

const howToData = [
  {
    name: 'Rengör sensorn och musmattan',
    text: 'Ta bort damm eller hår från sensorfönstret före testning och använd en stabil musmatta eller skrivbordsyta.',
  },
  {
    name: 'Rita långsamma diagonala linjer',
    text: 'Håll ned den primära musknappen och rita flera diagonala streck. En rå sensor bör visa naturlig handvariation, inte en linje som tvingas perfekt i en enda vinkel.',
  },
  {
    name: 'Rita mjuka kurvor',
    text: 'Gör cirklar, S-kurvor och bågar. Hopp visas som ojämna brusiga punkter som hoppar utanför den avsedda kurvan.',
  },
  {
    name: 'Jämför DPI- och ytinställningar',
    text: 'Upprepa samma rörelse vid olika DPI-nivåer, pollingfrekvenser, lyftavståndsinställningar och underlag för att hitta när problemet uppstår.',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
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
      text: 'Mushopptest Online: Kontrollera Sensorbrus och Vinkelkorrigering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En bra musensor bör följa din hand utan att lägga till synligt brus eller i hemlighet korrigera banan. När sensorn är smutsig, ytan är svår att spåra, DPI:n är för hög för hårdvaran eller firmwaren tillämpar prediktion, kan markörbanan sluta kännas naturlig. Detta mushopptest låter dig rita råa spår och inspektera de individuella läspunkterna så att sensorproblem blir synliga istället för vaga.',
    },
    {
      type: 'paragraph',
      html: 'Det mest användbara sättet att testa är enkelt: rita kontrollerade linjer och kurvor och titta sedan på spårformen. En frisk råsensor producerar en bana som följer din rörelse med små mänskliga ofullkomligheter. En brusig sensor producerar ojämna punkter, små spikar och ojämn vingling. En mus med vinkelkorrigering eller prediktion kan få diagonal eller horisontell rörelse att se onaturligt rak ut, som om firmwaren korrigerar din hand.',
    },
    {
      type: 'title',
      text: 'Hur Mushopp Ser Ut',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mushopp är inte samma sak som normal handskakning. Alla ritar lätt ofullkomliga linjer. Hopp blir misstänkt när punkterna hoppar bort från rörelseriktningen trots att din hand rör sig långsamt och stadigt. Det syns ofta som en suddig kant runt en linje, små sidospikar eller ett spår som ser repigt ut istället för jämnt.',
    },
    {
      type: 'table',
      headers: ['Spårmönster', 'Trolig Betydelse', 'Vad du Ska Prova Näst'],
      rows: [
        ['Små slumpmässiga spikar under långsamma linjer', 'Sensorbrus, smuts eller ytspårningsproblem', 'Rengör sensorfönstret och prova en annan musmatta'],
        ['Hopp endast vid hög DPI', 'Sensorn eller firmwaren har svårt för den känsligheten', 'Testa igen vid 400, 800, 1600 och 3200 DPI'],
        ['Ojämn rörelse endast i trådlöst läge', 'Batteri, mottagaravstånd eller störning', 'Flytta mottagaren närmare och testa med ett nytt batteri'],
        ['Brus nära lyft eller vid lutning av musen', 'Lyftavstånd eller ojämn kontaktyta', 'Håll musen platt och sänk lyftavståndet om tillgängligt'],
        ['Hopp på ett skrivbord men inte ett annat', 'Yttextur eller reflektivitetsproblem', 'Använd en matt musmatta utformad för optiska sensorer'],
      ],
    },
    {
      type: 'title',
      text: 'Hur Vinkelkorrigering Ser Ut',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vinkelkorrigering skiljer sig från hopp. Istället för att lägga till brus tar det bort naturlig variation. Om du ritar en diagonal linje för hand bör en rå sensor bevara små mänskliga avvikelser. Med vinkelkorrigering aktiverad kan linjen låsas i en perfekt rak horisontell, vertikal eller diagonal riktning. Detta kan göra skrivbordsritning enklare, men är oftast oönskat för tävlingssikte, pixelkonst, bildredigering och alla uppgifter där markören ska matcha handen exakt.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Råsensorbeteende',
          description: 'Spåret följer din hand, inklusive små naturliga kurvor och korrigeringar. Diagonala linjer är inte matematiskt perfekta om inte din rörelse var det.',
        },
        {
          title: 'Vinkelkorrigeringsbeteende',
          description: 'Spåret ser misstänkt rakt ut över långa sträckor, särskilt nära vanliga vinklar som horisontell, vertikal eller 45 grader.',
        },
        {
          title: 'Hoppbeteende',
          description: 'Spåret blir brusigt, suddigt eller taggigt. Istället för att vara för rakt ser det instabilt och ojämnt ut.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Så Testar du din Mus Korrekt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Börja med ett rent sensorfönster och en känd bra musmatta',
        'Rita långsamma diagonala linjer från hörn till hörn och upprepa samma rörelse flera gånger',
        'Rita cirklar och S-kurvor för att avslöja hopp som kanske inte syns i raka linjer',
        'Testa vid flera DPI-nivåer eftersom vissa sensorer blir brusigare vid mycket hög känslighet',
        'Stäng av leverantörsprogramvarufunktioner som vinkelkorrigering, prediktion, ytjustering eller acceleration när möjligt',
        'Jämför trådbundet och trådlöst läge om din mus stöder båda',
        'Jämför med en annan mus på samma underlag för att skilja musfel från ytproblem',
      ],
    },
    {
      type: 'title',
      text: 'Tolka Poängen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verktyget visar en hoppoäng, en vinkelkorrigeringspoäng, rakhet, genomsnittlig avvikelse och antalet fångade prover. Dessa värden används bäst jämförande. Rita samma linje med samma handrörelse efter att ha ändrat en variabel: DPI, underlag, placering av trådlös mottagare eller musens firmware-inställning. Om en poäng sjunker efter byte av yta eller rengöring av sensorn har du hittat en trolig orsak.',
    },
    {
      type: 'table',
      headers: ['Resultat', 'Vad det Antyder', 'Praktisk Åtgärd'],
      rows: [
        ['Lågt hopp och låg korrigering', 'Sensorspåret ser naturligt och stabilt ut', 'Behåll nuvarande inställningar och använd detta som referens'],
        ['Högt hopp, låg korrigering', 'Musen spårar men banan är brusig', 'Rengör sensorn, byt underlag, sänk DPI och testa igen'],
        ['Lågt hopp, hög korrigering', 'Banan kan vara firmware-korrigerad', 'Leta efter prediktions- eller vinkelkorrigeringsalternativ i musprogramvaran'],
        ['Högt hopp och hög korrigering', 'Spåret är instabilt och kan vara överkorrigerat', 'Återställ musprogramvaruprofilerna och testa igen från standardinställningar'],
        ['Poängen ändras starkt beroende på underlag', 'Sensorn ogillar en yttextur eller reflektivitet', 'Använd underlaget med det renaste spåret'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, Pollingfrekvens och Mushopp',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hög DPI betyder inte automatiskt bättre spårning. Vissa möss fungerar rent vid måttlig DPI men visar mer synligt brus vid mycket hög DPI eftersom små sensorfel förstoras till större markörrörelse. Pollingfrekvensen kan också förändra känslan av spåret. En högre pollingfrekvens ger tätare uppdateringar, men kan inte åtgärda en smutsig sensor, en dålig yta eller firmware-prediktion.',
    },
    {
      type: 'paragraph',
      html: 'För en rättvis jämförelse, håll din handrörelse likartad och ändra en inställning i taget. Rita till exempel samma diagonala linje vid 800 DPI, 1600 DPI och 3200 DPI. Om banan blir suddig endast vid det högsta värdet, kan den bästa lösningen vara att sänka DPI och justera spelkänsligheten istället för att byta mus.',
    },
    {
      type: 'title',
      text: 'Vanliga Orsaker till Mussensorhopp',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Damm, hår eller olja nära det optiska sensorfönstret',
        'Blanka, reflekterande, transparenta eller ojämna underlag',
        'Mycket höga DPI-inställningar som förstärker små sensorfel',
        'Lågt batteri eller trådlös störning',
        'Mottagare placerad långt från musen eller bakom ett metall-PC-chassi',
        'Firmwarefilter, ytkalibrering eller leverantörsprogramvaruprofiler',
        'Lyftavståndsproblem när musen lutas eller flyttas snabbt',
        'En sliten eller skadad sensorlins efter tung användning',
      ],
    },
    {
      type: 'title',
      text: 'Varför Spelare och Formgivare Bryr sig',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I spel kan hopp göra mikrojusteringar svårare eftersom hårkorset inte stannar exakt där handen avsåg. Vinkelkorrigering kan vara lika problematiskt: det kan hjälpa till att rita raka skrivbordslinjer, men det kan också förvränga små siktkorrigeringar och få diagonal spårning att kännas filtrerad. För formgivare, illustratörer, CAD-användare och bildredigerare kan sensorkorrigering göra frihandsrörelser mindre ärliga och svårare att kontrollera.',
    },
    {
      type: 'paragraph',
      html: 'En mus behöver inte ett perfekt spår för att vara bra. Mänsklig rörelse är naturligt ofullkomlig. Varningstecknen är upprepningsbara: samma yta skapar alltid brusiga punkter, samma DPI skapar alltid spikar, eller samma mus gör alltid diagonaler misstänkt raka medan en annan mus inte gör det.',
    },
    {
      type: 'title',
      text: 'Innan du Köper en Ny Mus',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Rengör sensorfönstret försiktigt med musen avstängd',
        'Prova en annan musmatta, helst matt tyg- eller hybrid-spelyta',
        'Sänk DPI och kompensera med programvarukänslighet',
        'Stäng av vinkelkorrigering, prediktion, pekprecisering och accelerationsalternativ',
        'Flytta den trådlösa mottagaren närmare med en USB-förlängningskabel',
        'Uppdatera eller återställ musens firmware-profil om leverantörsprogramvaran stöder det',
        'Testa en annan mus på samma dator och underlag för jämförelse',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Den användbara diagnostiska regeln',
      html: '<p>Ett enda konstigt spår räcker inte. Ett upprepningsbart mönster är vad som räknas. Om hopp eller vinkelkorrigering dyker upp om och om igen under samma inställningar, och sedan försvinner när du rengör sensorn, byter underlag, sänker DPI eller stänger av prediktion, har du hittat den mest troliga orsaken.</p>',
    },
  ],
  ui: {
    badge: 'Rått Sensorspår',
    canvasLabel: 'Rityta för mushopp- och vinkelkorrigeringstest',
    canvasHint: 'Rita långsamma diagonaler, cirklar och kurvor. Individuella sensorpunkter förblir synliga så att grov spårning är lätt att upptäcka.',
    pointerPrompt: 'Håll ned och rita inuti ritytan',
    samples: 'Prover',
    jitterScore: 'Hopp',
    snappingScore: 'Korrigering',
    straightness: 'Rakhet',
    rawDeviation: 'Genomsn. avvikelse',
    statusIdle: 'Rita inuti fältet för att fånga rå musrörelse',
    statusHealthy: 'Spåret ser naturligt och stabilt ut i de senaste proverna',
    statusJitter: 'Brusig rörelse upptäckt i det senaste spåret',
    statusSnapping: 'Misstänkt rak rörelse upptäckt',
    statusMixed: 'Både hopp och möjlig vinkelkorrigering syns i spåret',
    reset: 'Återställ',
    holdShift: 'Tips: testa en förändring i taget. DPI, underlag, trådlöst läge och prediktionsinställningar kan alla förändra spåret.',
    sensitivity: 'Detektionskänslighet',
    low: 'stabil',
    high: 'strikt',
    traceLog: 'Spårhändelser',
    emptyLog: 'Rita några kontrollerade streck för att starta händelseloggen.',
    jitterEvent: 'hopp',
    snappingEvent: 'vinkelkorrigering',
    combinedEvent: 'hopp och vinkelkorrigering',
    cleanEvent: 'rent spår',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
