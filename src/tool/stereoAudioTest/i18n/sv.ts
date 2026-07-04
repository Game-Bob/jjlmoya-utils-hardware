import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'stereo-ljudtest';
const title = 'Stereo ljudtest';
const description = 'Kontrollera vänster och höger högtalarkanaler, stereobalans, kabelriktning och hörlursavbildning med webbläsargenererade testtoner.';

const faqData = [
  {
    question: 'Hur testar jag vänster och höger högtalare online?',
    answer: 'Börja med låg volym, tryck på Vänster och sedan Höger. Den vänstra tonen ska bara komma från den vänstra högtalaren eller vänster öronkåpa, och den högra tonen bara från höger sida. Använd Center för att bekräfta att båda sidor spelar jämnt.',
  },
  {
    question: 'Varför spelar båda högtalarna under vänster- eller högertestet?',
    answer: 'Vissa enheter, operativsystem, Bluetooth-högtalare, monolägen, tillgänglighetsinställningar eller ljudförbättringar nedmixar stereo till mono. Kontrollera systembalans, monoljudinställningar, kabeldragning och appspecifika ljudeffekter.',
  },
  {
    question: 'Kan detta diagnostisera omkastade högtalarkablar?',
    answer: 'Ja. Om Vänster-knappen spelar från den högra högtalaren och Höger-knappen spelar från den vänstra högtalaren är utgångsvägen omvänd någonstans mellan dator, kabel, förstärkare, högtalare eller hörlurar.',
  },
  {
    question: 'Är en sinuston säker för högtalare och hörlurar?',
    answer: 'En kort sinuston vid måttlig volym är normalt säker. Undvik hög volym, långa sessioner eller mycket höga frekvenser, särskilt med hörlurar, små bärbara högtalare eller okända förstärkare.',
  },
  {
    question: 'Påverkar webbläsaren stereotestningen?',
    answer: 'Verktyget använder Web Audio API StereoPannerNode. Det är tillförlitligt i moderna webbläsare, men slututgången beror fortfarande på operativsystemets routing, drivrutiner, Bluetooth-codecs, externa DAC:ar och högtalarkablage.',
  },
];

const howToData = [
  {
    name: 'Ställ in en tyst startvolym',
    text: 'Sänk systemvolymen och använd verktygets volymreglage innan du spelar någon testton.',
  },
  {
    name: 'Testa varje sida',
    text: 'Tryck på Vänster och Höger. Varje ton ska vara tydligt isolerad till matchande högtalare eller hörlurssida.',
  },
  {
    name: 'Kontrollera centerbalansen',
    text: 'Tryck på Center. Tonen ska visas centrerad mellan båda högtalarna, inte starkt dragen åt ena sidan.',
  },
  {
    name: 'Använd svepet',
    text: 'Kör Svep för att höra rörelse över stereofältet och upptäcka avbrott, omvänd kabeldragning eller ojämn avbildning.',
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

export const content: ToolLocaleContent<StereoAudioTestUI> = {
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
      text: 'Vänster och höger högtalartest online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Använd detta online stereo-ljudtest för att kontrollera om dina vänstra och högra högtalare, hörlurar, öronsnäckor, soundbar, DAC, förstärkare eller monitorhögtalare är korrekt routade. Verktyget spelar webbläsargenererade toner genom vänster kanal, höger kanal, båda kanalerna eller ett rörligt stereosvep så att du snabbt kan upptäcka omvända kanaler, mono-utgång, svaga högtalare, balansproblem och kabeldragningsfel utan att installera ljudprogramvara.',
    },
    {
      type: 'paragraph',
      html: 'En korrekt stereouppsättning bevarar riktningen: den vänstra testtonen ska bara komma från den vänstra högtalaren eller vänster öronkåpa, den högra testtonen bara från höger sida, och centertonen ska låta jämnt balanserad mellan båda sidor. Om ljudet visas på fel sida, på båda sidor samtidigt eller mycket högre på ena sidan ligger problemet vanligtvis i utgångsinställningar, mono-tillgänglighetsläge, kabeldragning, Bluetooth-routing, högtalarplacering eller ljudförbättringsprogramvara.',
    },
    {
      type: 'table',
      headers: ['Knapp', 'Vad du bör höra', 'Använd för att diagnostisera'],
      rows: [
        ['Vänster', 'Ton endast från vänster högtalare, vänster hörlursdrivrutin eller vänster öronsnäcka.', 'Omvända kablar, felaktig högtalarplacering, mono-utgång eller kanalomfördelning.'],
        ['Höger', 'Ton endast från höger högtalare, höger hörlursdrivrutin eller höger öronsnäcka.', 'Omkastade utgångar, felaktig adapterdragning eller drivrutinseffekter som ändrar kanalordning.'],
        ['Center', 'Tonen visas i mitten eftersom båda kanalerna spelar jämnt.', 'Systembalansförskjutning, en svag högtalare, blockerat öronsnäcksgaller eller ojämn förstärkarförstärkning.'],
        ['Svep', 'Tonen rör sig smidigt över stereobilden från sida till sida.', 'Avbrott, instabila Bluetooth-länkar, fasproblem, virtuella surround-artefakter eller ojämn avbildning.'],
      ],
    },
    {
      type: 'title',
      text: 'Vanligaste stereoproblem som detta test hittar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Vänster och höger kanaler är omvända: vänster knapp spelar på höger sida, eller höger knapp spelar på vänster sida.',
        'Stereon har kollapsat till mono: vänster, höger och center låter nästan identiskt från båda högtalarna.',
        'En sida är tystare: centerljud drar mot en högtalare även när systemets balansreglage ser centrerat ut.',
        'Hörlurar är felaktigt dragna eller burna: spelfotsteg, musikpanorering och videosamtal känns rumsligt förvirrande.',
        'Bluetooth- eller USB-ljud bearbetas: soundbars, dockor, headset och TV-lägen kan nedmixa eller virtualisera signalen.',
        'Högtalarplacering är missvisande: en högtalare för nära en vägg, blockerad av möbler eller längre bort kan få centerbilden att driva.',
      ],
    },
    {
      type: 'title',
      text: 'Hur man åtgärdar omvänt vänster och höger ljud',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'För trådbundna högtalare, byt vänster och höger kontakter vid förstärkaren, ljudgränssnittet, DAC:n eller datorutgången.',
        'För passiva högtalare, bekräfta att vänster högtalare är ansluten till vänster förstärkarterminaler och höger högtalare till höger terminaler.',
        'För hörlurar, kontrollera att de bärs i rätt orientering och testa utan adaptrar, förlängningskablar eller splitterkablar.',
        'För Windows eller macOS, kontrollera utgångsbalansen och inaktivera monoljud i tillgänglighets- eller ljudinställningar.',
        'För Bluetooth-högtalare och soundbars, inaktivera virtuell surround, partyläge, dubbelljud, rumskorrigering eller TV-ljudlägen under testning.',
        'För ljudgränssnitt, DAWs och mixrar, kontrollera kanalrouting, panoreringskontroller, monitormixinställningar och eventuell programvarumixer från tillverkaren.',
      ],
    },
    {
      type: 'title',
      text: 'Hur man tolkar centerhögtalartestet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Centertonen är inte en separat fysisk centerhögtalare i en normal tvåkanalsuppsättning. Det är samma signal som skickas jämnt till vänster och höger. I hörlurar ska det kännas centrerat inuti huvudet; på högtalare ska det bilda ett fantomcenter mellan dem. Om det lutar åt vänster eller höger, kontrollera systembalans, högtalaravstånd, högtalarvinkel, volymrattar, förstärkarfinjustering, öronsnäckspassform, damm i drivrutinsgallret och om en högtalare är delvis blockerad eller felaktig.',
    },
    {
      type: 'table',
      headers: ['Vad som händer', 'Trolig orsak', 'Nästa steg'],
      rows: [
        ['Vänster spelar från båda sidor', 'Mono-ljud, nedmixning eller rumslig ljudbehandling.', 'Inaktivera mono-utgång och virtuell surround, testa sedan igen.'],
        ['Vänster spelar från höger sida', 'Kanalerna är omkastade någonstans i uppspelningskedjan.', 'Byt kablar eller ändra kanalrouting i drivrutinen, mixern eller förstärkaren.'],
        ['Center är högre på ena sidan', 'Balans, placering, drivrutinsskada, öronpassform eller blockerat högtalargaller.', 'Jämför med ett annat headset eller högtalarpar och inspektera fysisk placering.'],
        ['Svep hoppar eller försvinner', 'Bluetooth-instabilitet, ljudförbättringsartefakter eller en defekt kabel/kontakt.', 'Testa med trådbunden utgång eller en annan kabel för att isolera den svaga länken.'],
      ],
    },
    {
      type: 'title',
      text: 'Hörlurs- och öronsnäcks vänster-höger-test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För hörlurar och öronsnäckor är vänster/höger-testet särskilt användbart före spel, ljudredigering, filmtittande eller samtal. Sätt på headsetet normalt, börja med låg volym, tryck på Vänster och Höger och bekräfta att varje ton landar på rätt öra. Om båda sidor låter likadant kan din enhet använda mono-ljud. Om en sida är dämpad eller tystare, rengör öronsnäcksgallret, sätt tillbaka örontipen, kontrollera kabeln och jämför med en annan utgångsenhet.',
    },
    {
      type: 'title',
      text: 'Säkra ljudtesttips',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Börja med låg systemvolym, särskilt på hörlurar.',
        'Använd Slinga tills stopp endast när du aktivt behöver kontinuerligt ljud för kabelspårning, placering eller balansjustering.',
        'Håll testtoner korta på små högtalare; kontinuerliga sinusvågor kan snabbt bli obekväma.',
        'Undvik maximal förstärkning på små bärbara högtalare och okända förstärkare.',
        'Placera inte hörlurar på öronen förrän du har bekräftat att volymen är säker.',
        'Efter att ha bytt kablar eller inställningar, upprepa vänster, höger, center- och sveptesten i den ordningen.',
        'För studio- eller hemmabiokalibrering, kombinera detta snabbtest med en SPL-mätare eller mottagarens kalibreringsrutin.',
      ],
    },
    {
      type: 'title',
      text: 'Snabb diagnos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om vänster och höger är omkastade, inspektera först den fysiska kabeldragningen eftersom det är den snabbaste lösningen för skrivbordshögtalare, förstärkare och ljudgränssnitt. Om båda knapparna spelar från båda sidor, leta efter mono-utgång, rumsligt ljud, virtuell surround eller en enhet som avsiktligt nedmixar stereo. Om center är off-center men vänster och höger är korrekt routade är problemet vanligtvis balans, placering, öronpassform, blockerade galler eller ojämn högtalarutgång.',
    },
  ],
  ui: {
    left: 'Vänster',
    center: 'Center',
    right: 'Höger',
    sweep: 'Svep',
    stop: 'Stopp',
    volume: 'Volym',
    duration: 'Varaktighet',
    infiniteMode: 'Slinga tills stopp',
    infiniteModeHint: 'Håller valfri kanal spelande för kontinuerlig testning.',
    secondsUnit: 's',
    hertzUnit: 'Hz',
    tone: 'Ton',
    balance: 'Balans',
    activeIdle: 'Redo',
    activeLeft: 'Spelar vänster kanal',
    activeCenter: 'Spelar centrerad ton',
    activeRight: 'Spelar höger kanal',
    activeSweep: 'Sveper över stereofältet',
    safety: 'Börja lågt. Testtoner kan vara höga genom hörlurar, förstärkare och små bärbara högtalare.',
    leftSpeaker: 'Vänster högtalare',
    rightSpeaker: 'Höger högtalare',
    centerLine: 'Stereofält',
  },
};
