import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tangentbord-chatter-test';
const title = 'Tangentbords Chatter Test';
const description = 'Upptäck mekaniskt tangentbordschatter, dubbelskrivning och felaktig switchstuds genom att kontrollera hur snabbt samma tangent visas två gånger.';

const faqData = [
  {
    question: 'Vad är tangentbordschatter?',
    answer: 'Tangentbordschatter är ett hårdvarufel där en fysisk tryckning registreras som flera tryckningar. Det är vanligt på smutsiga, slitna, oxiderade eller dåligt debouncade mekaniska switchar.',
  },
  {
    question: 'Hur fungerar detta tangentbordschatter-test?',
    answer: 'Tryck på samma misstänkta tangent långsamt, en tryckning i taget. Om loggen visar upprepade tryckningar med bara några millisekunders mellanrum kan switchen studsa och producera dubbla bokstäver.',
  },
  {
    question: 'Vilket delta betyder att mitt tangentbord dubbelskriver?',
    answer: 'En upprepad tryckning under 30 ms är starkt misstänkt för chatter. Upprepningar från 30 till 50 ms förtjänar uppmärksamhet. Normala avsiktliga upprepade tryckningar är vanligtvis över 50 ms för de flesta användare.',
  },
  {
    question: 'Varför visar den första tryckningen inget delta?',
    answer: 'Ett delta behöver en tidigare tryckning av samma tangent. Den första tryckningen etablerar baslinjen, och senare tryckningar visar tidsgapet i millisekunder.',
  },
  {
    question: 'Kan mjukvara fixa tangentbordschatter?',
    answer: 'Debounce-mjukvara kan dölja vissa symptom, men den reparerar inte switchen. Rengöring, återmontering av hot-swap-switchar, byte av switchen eller reparation av tangentbordets PCB kan behövas.',
  },
];

const howToData = [
  {
    name: 'Öppna verktyget och tryck på tangenter normalt',
    text: 'Det finns ingen startknapp. Klicka i verktyget om det behövs, tryck sedan på tangenten som har skrivit dubbelt.',
  },
  {
    name: 'Tryck på den misstänkta tangenten en i taget',
    text: 'Tryck på tangenten som dubbelskriver. Om en fysisk tryckning skapar flera loggrader med små deltan, chatter switchen troligen.',
  },
  {
    name: 'Läs färgkoden',
    text: 'Grönt betyder normal över 50 ms, gult betyder misstänkt från 30 till 50 ms och rött betyder chatter upptäckt under 30 ms.',
  },
  {
    name: 'Exportera loggen vid behov',
    text: 'Använd nedladdningsknappen för att spara en CSV-logg som kan hjälpa till att jämföra tangenter eller dokumentera ett intermittent fel.',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mekaniskt Tangentbord Dubbelskrivningstest',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Detta tangentbordschatter-test hjälper till att diagnostisera ett mekaniskt tangentbord som skriver två bokstäver från en tryckning, missar rena släpp eller producerar upprepade tecken utan att du avsiktligt tryckte två gånger. Använd det innan du rengör switchar, ändrar firmwarens debounce-inställningar, öppnar ett garantianspråk eller byter en hot-swap-switch.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hur man läser resultatet',
      badge: 'Delta-trösklar',
      html: '<p><strong>Normal</strong> betyder att upprepningen var över 50 ms och är vanligtvis avsiktlig. <strong>Misstänkt</strong> betyder 30-50 ms och bör testas om på samma tangent. <strong>Chatter upptäckt</strong> betyder under 30 ms, vilket mycket sannolikt är en fysisk tryckning som studsar i flera elektriska kontakter.</p>',
    },
    {
      type: 'title',
      text: 'Varför Mekaniska Switchar Chattrar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En mekanisk switch stänger inte som en perfekt ren digital signal. Metallkontakterna kan studsa i några millisekunder innan de sätter sig. Tangentbordets firmware filtrerar normalt den studsen med ett debounce-fönster. Chattering sker när kontakten är smutsig, sliten, oxiderad, lös, sprucken eller dåligt justerad så att tangentbordet rapporterar extra tryckningar efter att debounce-filtret borde ha hanterat dem.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Trolig orsak', 'Vad att prova först'],
      rows: [
        ['En tangent skriver samma bokstav två gånger', 'Smutsig eller sliten switchkontakt', 'Ta bort knapplocket, blås bort damm och testa igen innan du byter switchen.'],
        ['Flera hot-swap-tangenter chattrar efter ett bygge', 'Switchpinnar inte korrekt monterade', 'Dra ut och återmontera switchen, kontrollera böjda pinnar eller en lös sockel.'],
        ['Händer bara efter spill eller fukt', 'Oxidation eller rester på kontakter', 'Koppla bort tangentbordet och rengör enligt tillverkarens anvisningar.'],
        ['Många tangenter visar små deltan', 'Firmware-debounce för låg eller skanningsproblem', 'Jämför på en annan USB-port och granska firmwarens debounce-inställningar om tillgängliga.'],
      ],
    },
    {
      type: 'title',
      text: 'Testmetod Som Minskar Falska Positiva',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Testa en misstänkt tangent i taget istället för att skriva hela meningar.',
        'Tryck tangenten en gång, släpp den helt och vänta ett ögonblick före nästa tryckning.',
        'Jämför den misstänkta tangenten med en närliggande tangent som känns frisk.',
        'Ignorera den första raden för en tangent eftersom det inte finns någon tidigare tryckning att jämföra med.',
        'Om samma tangent upprepade gånger visar röda rader under 30 ms från enstaka tryck, behandla det som ett hårdvarufel.',
        'Om endast gula rader visas, upprepa testet långsammare och kontrollera om din tryckrytm orsakar det korta intervallet.',
      ],
    },
    {
      type: 'title',
      text: 'Chatter vs. Avsiktlig Snabb Skrivning',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Chatter',
          description: 'Samlat på en tangent, ofta under 30 ms, och visas när du avsåg en tryckning.',
          points: ['Inspektera switchen eller sockeln.', 'Jämför med en närliggande frisk tangent.'],
        },
        {
          title: 'Snabb skrivning',
          description: 'Påverkar många tangenter, följer din rytm och tenderar att ligga över 50 ms mellan upprepade tryckningar av samma tangent.',
          points: ['Vanligtvis normal användning.', 'Testa om med långsammare enstaka tryck.'],
        },
        {
          title: 'OS tangentupprepning',
          description: 'Visas när man håller en tangent nedtryckt och upprepas vanligtvis i en regelbunden rytm som ställs in av ditt operativsystem.',
          points: ['Släpp helt mellan trycken.', 'Kontrollera tangentbordets upprepningsinställningar separat.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Vad Man Gör När en Tangent Misslyckas',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Spara en CSV-logg innan du ändrar något så att du kan jämföra resultat före och efter.',
        'Ta bort knapplocket och inspektera smuts, vätskerester eller en stam som inte återgår mjukt.',
        'För hot-swap-tangentbord, återmontera eller byt switchen och testa samma tangentposition igen.',
        'För lödda tangentbord, jämför firmwarens debounce-alternativ innan du antar att PCB behöver reparation.',
        'Prova en annan kabel och USB-port om flera orelaterade tangenter visar omöjliga deltan.',
        'För garantisupport, inkludera den påverkade tangenten, upprepade delta-värden, tangentbordsmodell, firmwareversion och om felet följer switchen eller PCB-sockeln.',
      ],
    },
    {
      type: 'summary',
      title: 'Snabb regel',
      items: [
        'En enda röd rad är en ledtråd, inte en dom.',
        'Upprepade röda rader under 30 ms på samma fysiska tangent är starka bevis på tangentbordschatter.',
        'Använd avsiktliga enstaka tryck och jämför den misstänkta switchen med en närliggande frisk tangent innan du byter hårdvara.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Tryck på valfri tangent',
    statusListening: 'Mäter tangentdeltan',
    statusChatter: 'Chatter upptäckt',
    totalPresses: 'Totalt tryck',
    chatterEvents: 'Chatterhändelser',
    worstDelta: 'Sämsta delta',
    watchWindow: 'Rader behållna',
    keyColumn: 'Tangent',
    deltaColumn: 'Delta',
    verdictColumn: 'Bedömning',
    timeColumn: 'Tid',
    normal: 'Normal',
    suspect: 'Misstänkt',
    chatter: 'Chatter',
    waiting: 'Väntar',
    clear: 'Rensa logg',
    exportLog: 'Exportera CSV',
    hint: 'Loggen behåller de 80 senaste raderna så att långa sessioner förblir snabba. Hållen tangentupprepning ignoreras; röda rader kommer från separata tryckningar som inträffade för nära varandra.',
    captureNotice: 'Ingen startknapp. Tryck på en misstänkt tangent en gång och observera deltat från dess föregående tryckning.',
    keyboardAriaLabel: 'Senaste tangentaktivitet',
    logAriaLabel: 'Tangentbords chatter händelselogg',
    escapeKey: 'Esc',
    backspaceKey: 'Back',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Caps',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Mellanslag',
    csvHeader: 'tangent,kod,delta_ms,allvarlighet,tid',
  },
};
