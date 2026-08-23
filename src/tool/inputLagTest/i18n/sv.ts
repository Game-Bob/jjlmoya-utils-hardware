import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-test-fordrojning';
const title = 'Input Lag & Systemfördröjningstest';
const description = 'Onlineverktyg för mätning av hårdvaruinmatningsfördröjning och systemlatens med hög precision och bildskärmssynkronisering.';

const faqData = [
  {
    question: 'Vad är input lag och systemfördröjning?',
    answer: 'Input lag är den totala tidsfördröjningen mellan en fysisk användarhandling (att klicka på musen eller trycka på en tangent) och att den uppdaterade bilden visas på skärmen.',
  },
  {
    question: 'Hur mäter detta onlinetest inmatningsfördröjningen?',
    answer: 'Det fångar tidsstämplar från hårdvaruhändelser via performance.now() och korrelerar dem med efterföljande requestAnimationFrame-uppdateringar.',
  },
  {
    question: 'Vad anses vara en bra input lag för gaming?',
    answer: 'Under 10 ms anses vara ultrasnabbt för e-sport. 10 ms till 20 ms är snabbt, 20 ms till 35 ms är måttligt och över 35 ms är en märkbar fördröjning.',
  },
  {
    question: 'Hur kan jag minska input lag på min Dator?',
    answer: 'Öka skärmens uppdateringsfrekvens, inaktivera VSync, aktivera G-Sync eller FreeSync, höj musens USB-rapporteringsfrekvens till 1000Hz+ och aktivera NVIDIA Reflex.',
  },
  {
    question: 'Påverkar skärmens uppdateringsfrekvens input lag?',
    answer: 'Ja. Högre uppdateringsfrekvens minskar bildrutevaraktigheten. En 60Hz-skärm har en bildrutevaraktighet på 16,67 ms, medan en 240Hz-skärm har 4,17 ms.',
  },
];

const howToData = [
  {
    name: 'Välj testläge',
    text: 'Välj Direkt respons, Tangenttryckningslatens eller Visuell reaktionslatens.',
  },
  {
    name: 'Utför fysiska inmatningar',
    text: 'Klicka i målrutan eller tryck på tangenter för att generera inmatningshändelser.',
  },
  {
    name: 'Observera fördröjningsmått i realtid',
    text: 'Granska beräknad genomsnittlig, lägsta, högsta fördröjning samt jitter.',
  },
  {
    name: 'Kontrollera bildskärmssynkronisering',
    text: 'Övervaka aktuell FPS och bildrutetid för att verifiera skärmstabilitet.',
  },
  {
    name: 'Analysera mäthistorik',
    text: 'Granska historikloggen för att identifiera fördröjningstoppar och avvikelser.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Systemfördröjning',
  modeInstant: 'Direkt Respons',
  modeKey: 'Tangenttryckningslatens',
  modeVisual: 'Visuell Reaktionslatens',
  targetClickPrompt: 'Klicka eller tryck i denna ruta för att mäta fördröjningen',
  targetKeyPrompt: 'Tryck på valfri tangent (eller Blanksteg) för att mäta tangentbordslatens',
  targetWaitPrompt: 'Vänta på grön bakgrund...',
  targetNowPrompt: 'KLICKA NU!',
  labelAvgLatency: 'Genomsnittlig Fördröjning',
  labelMinLatency: 'Minsta Fördröjning',
  labelMaxLatency: 'Högsta Fördröjning',
  labelJitter: 'Fördröjnings-jitter (Std. avvikelse)',
  labelFps: 'Aktuell FPS',
  labelFrameTime: 'Bildrutetid',
  labelSamples: 'Mätningar',
  labelGrade: 'Fördröjningsbetyg',
  gradeUltraFast: 'Ultrasnabb (<10ms)',
  gradeFast: 'Snabb (10-20ms)',
  gradeModerate: 'Måttlig (20-35ms)',
  gradeHigh: 'Hög (>35ms)',
  btnReset: 'Återställ Mätningar',
  btnCopyReport: 'Kopiera Benchmark-rapport',
  reportCopied: 'Rapport Kopierad!',
  historyTitle: 'Senaste Fördröjningsmätningar',
  pipelineTitle: 'Hårdvarusignalens Kedjeanalys',
  distributionTitle: 'Frekvensfördelning för Fördröjning',
  sampleCol: 'Prov',
  typeCol: 'Inmatningstyp',
  latencyCol: 'Uppmätt Fördröjning',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Vad är Input Lag och Systemfördröjning vid PC-Gaming?',
    },
    {
      type: 'paragraph',
      html: 'Input lag (eller inmatningsfördröjning) representerar den exakta tidsfördröjningen mellan att en användare utför en fysisk handling (som att klicka på en musknapp eller trycka på en tangent på tangentbordet) och att den motsvarande visuella reaktionen visas på skärmen. I e-sport och snabba spel är minskad systemlatens avgörande för precision vid sikte, snabbhet och övergripande prestatation. Den totala systemfördröjningen består av en ackumulering av fördröjningar: musens/tangentbordets USB-rapporteringsfrekvens, operativsystemets händelsehantering, spelmotorns rendering, grafikkortets bildrutebuffertar samt skärmpanelens egna pikselresponstid.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'E-sport Målvärde',
          trend: 'Optimal tävlingsnivå',
        },
        {
          value: '1000 Hz',
          label: 'Standard USB-Polling',
          trend: '1.0 ms intervall mellan signaler',
        },
        {
          value: '240 Hz',
          label: 'Högskärmsuppdatering',
          trend: '4.16 ms bildrutetid per frame',
        },
        {
          value: '16.6 ms',
          label: '60Hz Bildrutetid',
          trend: 'Grundläggande skärmfördröjning per bild',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'Hur fungerar latensmätning direkt i din webbläsare?',
      html: 'Testet använder högprecisions tidsstämplar via <code>performance.now()</code> kombinerat med DOM-händelselyssnare (<code>pointerdown</code> och <code>keydown</code>). Genom att synkronisera registreringen av händelser med skärmens faktiska uppdatering via <code>requestAnimationFrame</code> beräknar verktyget tidsskillnaden mellan fysisk handling och bildskärmsuppdatering direkt i din webbläsare på ett mycket noggrant sätt.',
    },
    {
      type: 'title',
      text: 'Signalens kompletta väg från knapptryck till skärmvisning',
    },
    {
      type: 'paragraph',
      html: 'För att förstå, diagnostisera och minska inmatningsfördröjningen effektivt måste hela signalkedjan analyseras i detalj. Den totala systemlatensen är summan av fördröjningen i periferiutrustning, operativsystem, spelmotor, grafikkort och bildskärmsbearbetning.',
    },
    {
      type: 'table',
      headers: ['Komponent i Kedjan', 'Typisk Fördröjning', 'Huvudorsak till Fördröjning', 'Optimeringsstrategi'],
      rows: [
        ['Utrustningsknapp', '0.2 ms - 5.0 ms', 'Mekanisk studsfördröjning i kontakten', 'Använd optiska brytare'],
        ['USB-Polling Rate', '0.125 ms - 8.0 ms', '125 Hz vs 1000 Hz / 8000 Hz USB', 'Öka rapporteringsfrekvensen till 1000Hz+'],
        ['Operativsystemets Kö', '0.5 ms - 3.0 ms', 'Bakgrundsprocesser och fönsterhanterare', 'Aktivera Spelläge i Windows'],
        ['Renderingsmotor', '4.0 ms - 20.0 ms', 'CPU-belastning och trådsynkronisering', 'Använd NVIDIA Reflex / AMD Anti-Lag'],
        ['GPU-Bildrutebuffert', '8.0 ms - 33.0 ms', 'VSync aktiverat, dubbel/trippel buffert', 'Inaktivera VSync, använd VRR'],
        ['Bildskärmsbearbetning', '1.0 ms - 15.0 ms', 'Bildbehandling och skalning i TV/Skärm', 'Aktivera Spelläge på skärmen/TV:n'],
      ],
    },
    {
      type: 'tip',
      title: 'Hur minskar jag fördröjningar vid hög grafikbelastning?',
      html: 'När grafikkortet belastas till 99% lagrar drivrutinen flera bildrutor i förväg. Detta skapar en märkbar inmatningsfördröjning (ofta 30 ms till 50 ms). Begränsa bildhastigheten något under grafikkortets maxkapacitet eller aktivera NVIDIA Reflex.',
    },
    {
      type: 'title',
      text: 'Jämförelse av fördröjning mellan möss, tangentbord och pekskärmar',
    },
    {
      type: 'paragraph',
      html: 'Olika inmatningsenheter har olika fördröjningsegenskaper beroende på teknik.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Gamingmöss',
          description: 'Snabb trådlös (2.4GHz) eller trådbunden anslutning.',
          highlight: '0.5ms - 2ms Fördröjning',
          points: [
            '1000Hz till 8000Hz polling rate',
            'Optiska brytare utan studsfördröjning',
            'Sensorer med extremt låg rörelsefördröjning',
          ],
        },
        {
          title: 'Mekaniska Tangentbord',
          description: 'Matrisskanning med studskontroll.',
          highlight: '1ms - 10ms Fördröjning',
          points: [
            'Magnetiska Hall-effect-brytare (Rapid Trigger)',
            'Skanningsfrekvens upp till 8000Hz',
            'Justerbar aktiveringspunkt',
          ],
        },
        {
          title: 'Mobila Pekskärmar',
          description: 'Kapacitiv avläsning på mobila enheter.',
          highlight: '15ms - 45ms Fördröjning',
          points: [
            'Pekavläsningsfrekvens (120Hz - 480Hz)',
            'Fördröjning i operativsystemets grafikhanterare',
            'Kapacitiva filtreringsalgoritmer',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Uppdateringsfrekvensens påverkan på skärmfördröjningen',
    },
    {
      type: 'paragraph',
      html: 'Skärmens uppdateringsfrekvens sätter den teoretiska miniminivån för bildvisningsfördröjningen.',
    },
    {
      type: 'list',
      items: [
        '60 Hz Skärm: 1 bildruta = 16.67 ms (Genomsnittlig fördröjning: ~8.33 ms)',
        '120 Hz Skärm: 1 bildruta = 8.33 ms (Genomsnittlig fördröjning: ~4.16 ms)',
        '144 Hz Skärm: 1 bildruta = 6.94 ms (Genomsnittlig fördröjning: ~3.47 ms)',
        '240 Hz Skärm: 1 bildruta = 4.17 ms (Genomsnittlig fördröjning: ~2.08 ms)',
        '360 Hz Skärm: 1 bildruta = 2.78 ms (Genomsnittlig fördröjning: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Input Lag',
          definition: 'Total tid från fysisk inmatning tills reaktionen visas på skärmen.',
        },
        {
          term: 'Jitter (Fördröjningsvariation)',
          definition: 'Standardavvikelsen för mätningarna som visar systemets stabilitet.',
        },
        {
          term: 'VSync (Vertikal Synchronisering)',
          definition: 'Förhindrar att bilden hackar/slits sönder men ökar input lag avsevärt.',
        },
        {
          term: 'Variable Refresh Rate (VRR)',
          definition: 'Tekniker som G-Sync och FreeSync som anpassar skärmens uppdatering till GPU:n.',
        },
      ],
    },
    {
      type: 'title',
      text: 'För- och nackdelar med webbläsarbaserad latensmätning',
    },
    {
      type: 'paragraph',
      html: 'Att mäta fördröjning i webbläsaren ger snabb tillgång utan specialutrustning.',
    },
    {
      type: 'proscons',
      title: 'Utvärdering av Webbläsarmätning',
      items: [
        {
          pro: 'Ingen mjukvaruinstallation eller specialhårdvara krävs',
          con: 'Påverkas av webbläsarens händelseslinga och operativsystemets fönsterhanterare',
        },
        {
          pro: 'Hög precision tack vare mikrosekundtimer (performance.now)',
          con: 'Kan inte mäta skärmpixelns optiska svart-till-vitt-svarstid direkt',
        },
        {
          pro: 'Omedelbar jämförelse mellan olika möss och tangentbord',
          con: 'Säkerhetsbegränsningar i webbläsarens timerprecision',
        },
      ],
    },
    {
      type: 'title',
      text: 'Felsökning vid hög input lag',
    },
    {
      type: 'paragraph',
      html: 'Om dina resultat visar hög fördröjning (>30 ms), kontrollera inställningarna nedan.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Varning för Hög Fördröjning',
      html: 'Om den genomsnittliga fördröjningen överstiger 35 ms, kontrollera om VSync är aktiverat i grafikkortets kontrollpanel. Inaktiverad hårdvaruacceleration i webbläsaren kan också belasta CPU:n och öka fördröjningen.',
    },
    {
      type: 'title',
      text: 'Steg för att optimera systemfördröjningen',
    },
    {
      type: 'paragraph',
      html: 'Följ dessa steg för att minska fördröjningen på ditt system.',
    },
    {
      type: 'summary',
      title: 'Checklista för Latensoptimering',
      items: [
        'Ställ in musens USB-rapporteringsfrekvens till 1000Hz eller högre.',
        'Aktivera Hårdvaruaccelererad GPU-schemaläggning (HAGS) i Windows-inställningarna.',
        'Aktivera Spelläge på TV:n eller skärmen för att kringgå bildbehandling.',
        'Inaktivera VSync i 3D-inställningarna och använd G-Sync eller FreeSync.',
        'Aktivera NVIDIA Reflex eller AMD Anti-Lag i spel som stöds.',
        'Se till att Hårdvaruacceleration är aktiverat i webbläsarens inställningar.',
      ],
    },
    {
      type: 'message',
      title: 'Bästa praxis för tillförlitliga mätningar',
      html: 'För bästa precision, stäng bakgrundsprogram, kör webbläsaren i fullskärmsläge och gör minst 15 till 20 mätningar.',
    },
  ],
};
