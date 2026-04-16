import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';

const slug = 'tangentbordstest-online';
const title = 'Online Tangentbordstest & Ghosting detektor';
const description = 'Kontrollera om ditt tangentbord lider av Ghosting eller Key Jamming. Knappvisualisering i realtid och N-Key Rollover-räknare.';

const faqData = [
  {
    question: 'Vad är Ghosting på ett tangentbord?',
    answer: 'Det är ett fel som uppstår när du trycker på flera tangenter samtidigt och datorn inte registrerar några av dem. Det beror på begränsningar i tangentbordets interna elektriska matris som inte kan bearbeta vissa kombinationer.',
  },
  {
    question: 'Vad betyder N-Key Rollover (NKRO)?',
    answer: 'NKRO betyder att tangentbordet kan registrera så många tangenter som du kan trycka på samtidigt utan fel. Det är en premiumfunktion, vanlig i högkvalitativa mekaniska tangentbord och gaming-tangentbord.',
  },
  {
    question: 'Varför fallerar mitt tangentbord när jag trycker på 3 tangenter samtidigt?',
    answer: 'De flesta billiga kontorstangentbord har en 2- eller 3-tangents rollover. Detta är tillräckligt för att skriva men otillräckligt för intensivt spelande eller komplexa kortkommandon.',
  },
  {
    question: 'Hur kan jag fixa en tangent som inte svarar?',
    answer: 'Om testet inte upptäcker tangenttryckningen kan det bero på smuts under brytaren, elektriskt kontaktfel eller en skadad kabel. Försök att rengöra tangentbordet med tryckluft innan du ger upp.',
  },
];

const howToData = [
  {
    name: 'Fokusera visualiseringen',
    text: 'Klicka var som helst på sidan för att säkerställa att webbläsaren har fokus och kan fånga tangenttryckningar.',
  },
  {
    name: 'Kör responstestet',
    text: 'Tryck på varje tangent på ditt tangentbord en efter en. Motsvarande tangent på skärmen kommer att lysa grönt om den fungerar korrekt.',
  },
  {
    name: 'Kontrollera efter ghosting',
    text: 'Tryck på vanliga gaming-tangenter (W, A, S, D, Mellanslag, Skift) samtidigt för att se om de låser sig eller om alla tänds.',
  },
  {
    name: 'Verifiera maximal rollover',
    text: 'Försök att trycka på så många tangenter som möjligt med båda händerna och titta på räknaren för maximalt antal samtidiga tangenttryckningar.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser',
  bibliography: [
    {
      name: 'USB Keyboard/Keypad Page - HID Usage Tables',
      url: 'https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf',
    },
    {
      name: 'Mechanical vs Membrane Keyboards - Technical Deep Dive',
      url: 'https://deskthority.net/wiki/Rollover',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Online Tangentbordstest: Detektera Ghosting och N-Key Rollover',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett interaktivt verktyg för tangentbordsdiagnostik. Kontrollera om din kringutrustning lider av ghosting, jamming eller rollover-begränsningar. Visuellt tydligt med stöd för alla typer av tangentbord.',
    },
    {
      type: 'title',
      text: 'Vad är Ghosting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ghosting uppstår när du trycker på en specifik kombination av tangenter och tangentbordet registrerar ett fantom-tangenttryck som du inte gjorde. Detta beror på begränsningar i den interna kretsmatrisen.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover och maximal rollover',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Tillåter registrering av alla nedtryckta tangenter samtidigt. <strong>6KRO:</strong> Gammal gräns för USB-standard. <strong>2-3KRO:</strong> Vanligt på billiga tangentbord, tillräckligt för att skriva.',
    },
    {
      type: 'title',
      text: 'Mekaniska vs Membran-tangentbord',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mekaniska tangentbord har individuella brytare med isolerade dioder, vilket eliminerar ghosting. Membran-tangentbord delar ledarspår, vilket orsakar fel i samtidiga kombinationer.',
    },
  ],
  ui: {
    badge: 'Inmatningstest',
    title: 'Tangentbordstest och Ghosting detektor',
    description: 'Verifiera N-Key Rollover och detektera felaktiga tangenter.',
    simultaneousLabel: 'Samtidiga',
    eventLogLabel: 'Händelselogg',
    resetBtn: 'Återställ',
  },
};
