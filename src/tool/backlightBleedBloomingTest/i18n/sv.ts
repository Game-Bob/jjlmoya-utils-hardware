import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-backlight-bleed-blooming';
const title = 'Backlight Bleed och Bloomingtest';
const description =
  'Kör ett ren svart fullskärms backlight-bleed-test och ett dragbart vitt local dimming-bloomingtest för OLED, Mini LED, IPS, VA, bildskärmar, bärbara datorer och TV-apparater.';

const faqData = [
  {
    question: 'Hur testar jag backlight bleed online?',
    answer:
      'Släck rumsbelysningen, ställ in skärmens ljusstyrka på max, rengör skärmen, öppna det rena svarta testet i fullskärm, vänta tills markören försvinner och inspektera kanter och hörn efter fasta ljusläckor.',
  },
  {
    question: 'Vad är skillnaden mellan backlight bleed och IPS glow?',
    answer:
      'Backlight bleed är oftast en fast ljus fläck nära ramen som orsakas av paneltryck eller ofullständig montering. IPS glow förändras kraftigt med betraktningsvinkel och ögonposition, särskilt i hörnen.',
  },
  {
    question: 'Hur ser blooming ut på en Mini LED-TV eller bildskärm?',
    answer:
      'Blooming är en synlig halo runt ett ljust objekt på svart bakgrund. Det uppstår när en local dimming-zon lyser upp ett större område än själva objektet.',
  },
  {
    question: 'Kan OLED-paneler ha backlight bleed?',
    answer:
      'OLED-paneler använder inte traditionell bakgrundsbelysning, så de bör inte visa LCD-liknande backlight bleed. De kan dock fortfarande visa problem med near-black-uniformitet, färgstick, vertikala band eller upplyfta svartnivåer från käll- eller bildskärmsinställningar.',
  },
  {
    question: 'Bör jag returnera en bildskärm med ljusläckage?',
    answer:
      'Returbeslut beror på allvarlighetsgrad, paneltyp, pris och garantipolicy. Ett synligt ljust hörn under normala filmer eller spel är allvarligare än en svag fläck som bara syns på ett foto med lång exponering.',
  },
];

const howToData = [
  {
    name: 'Förbered rummet',
    text: 'Släck lampor, dra för gardiner, rengör skärmen och låt ögonen anpassa sig i en minut så att damm och reflexer inte ser ut som paneldefekter.',
  },
  {
    name: 'Höj skärmens ljusstyrka',
    text: 'Ställ in ljusstyrkan på 100 procent eller på det HDR-läge du vill inspektera. Inaktivera aggressiva omgivningsljussensorer under testet.',
  },
  {
    name: 'Kör det svarta testet',
    text: 'Starta backlight bleed-läget. Sidan går in i fullskärm och visar exakt svart. Inspektera ramen, hörnen och eventuella fasta fläckar.',
  },
  {
    name: 'Kör bloomingtestet',
    text: 'Starta local dimming-läget och dra den vita cirkeln över skärmen. Leta efter halos, fördröjd dimning, rutnätsformade zoner och upplyfta svartnivåer.',
  },
  {
    name: 'Avsluta rent',
    text: 'Tryck på Escape för att lämna den inbyggda fullskärmen. Inställningsgränssnittet återvänder och testläget återställs.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: 'Backlight Bleed-test Online: Vad Du Ska Leta Efter på en Ny Bildskärm eller TV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett <strong>backlight bleed-test online</strong> är mest användbart under returperioden för en ny bildskärm, gaminglaptop eller TV. Testet visar ett webbläsargenererat <code>#000000</code>-fullskärmsfält så att LCD-bakgrundsbelysningen är den enda möjliga källan till oönskat ljus. Om panelen, diffusorstacken, ramtrycket eller monteringen läcker ljus ser du det oftast som ljusare hörn, grumliga kanter eller fläckar som stannar på samma fysiska position.',
    },
    {
      type: 'paragraph',
      html: 'Använd testet med realistiska förväntningar. LCD-paneler behöver bakgrundsbelysning och mycket små variationer kan vara normala, särskilt på budget-IPS- och VA-skärmar. Den praktiska frågan är inte om ett telefonfoto med lång exponering kan överdriva en fläck. Frågan är om ljusläckaget är synligt för dina ögon under mörka filmer, laddningsskärmar i spel, nattscener, svarta skrivbordsbakgrunder eller video med svarta fält.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gör detta innan du bedömer panelen',
      badge: 'Inställning',
      html: 'Släck rumsbelysningen, rengör glaset, ställ in ljusstyrkan på 100 procent, inaktivera omgivningsljussensorer och vänta några sekunder på att ögonen anpassar sig. Reflexer, fingeravtryck och en muspekare kan alla skapa falska positiva resultat under en inspektion av svartuniformitet.',
    },
    {
      type: 'list',
      items: [
        'Kontrollera övre och nedre kanter där ramtryck ofta skapar fast ljus',
        'Inspektera alla fyra hörn efter triangulära eller halvmåneformade ljusläckor',
        'Rör huvudet lätt för att skilja betraktningsvinkelglöd från fast bleed',
        'Gör anteckningar med ögonen först, eftersom kameror kan överexponera svarta skärmar',
        'Testa igen efter att panelen har värmts upp i 15 till 30 minuter om resultatet är tveksamt',
      ],
    },
    {
      type: 'title',
      text: 'Backlight Bleed, IPS Glow, Clouding och Svartuniformitet',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Problem', 'Vad du ser', 'Hur det beter sig', 'Vanligaste paneler'],
      rows: [
        ['Backlight bleed', 'Fast ljus kant- eller hörnfläck', 'Stannar på samma plats när du rör huvudet', 'IPS, VA, TN LCD'],
        ['IPS glow', 'Mjölkaktig glöd från hörn på mörka bilder', 'Ändras kraftigt med betraktningsvinkel och avstånd', 'IPS LCD'],
        ['Clouding', 'Stora ojämna grumliga områden på svart', 'Oftast fast, ibland minskat med lägre ljusstyrka', 'Edge-lit LCD-TV och bildskärmar'],
        ['VA black crush/smearing', 'Mörka detaljer försvinner eller smetar ut vid rörelse', 'Beror på innehåll och pixelövergång', 'VA LCD'],
        ['OLED near-black banding', 'Vertikala eller horisontella band nära svart', 'Synligt på nästan-svart grått, inte på rent svart', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Det vanligaste misstaget är att kalla varje mörkrum-artefakt för backlight bleed. <strong>IPS glow</strong> är optiskt: det blir starkare när du sitter nära, tittar på panelen off-axis eller ser hörn från en brant vinkel. Äkta backlight bleed är mekaniskt eller monteringsrelaterat: det förblir fäst vid samma ramområde även om din ögonposition ändras. Denna åtskillnad är viktig eftersom många återförsäljare behandlar allvarlig bleed annorlunda än normal IPS glow.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Breda betraktningsvinklar, frekvent hörnglöd och synlig bleed om ramen trycker ojämnt på panelen.',
          points: ['Kontrolleras bäst från ditt normala sittavstånd', 'Glow ändras med huvudposition', 'Kantbleed kan vara garantirelevant om allvarlig'],
        },
        {
          title: 'VA',
          description: 'Högre inbyggd kontrast, oftast mindre IPS-liknande glow, men kan visa clouding och långsamma mörka övergångar.',
          points: ['Svart ser djupare ut än IPS', 'Uniformitet kan variera per enhet', 'Blooming uppträder på modeller med local dimming'],
        },
        {
          title: 'OLED',
          description: 'Ingen LCD-bakgrundsbelysning, så rent svart bör vara av, men near-black-uniformitet och färgstick kan fortfarande ha betydelse.',
          points: ['Rent svart bör försvinna i ett mörkt rum', 'Testa gråskalor separat för banding', 'Förväxla inte upplyft källsvart med panelbleed'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hur Man Kör Ett Tillförlitligt Rent Svart-test',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det svarta testläget tar avsiktligt bort det normala gränssnittet. När det väl är startat försvinner glaspanelen, pekarhändelser inaktiveras på inställningsgränssnittet, sidan begär native fullskärm och testlagret använder exakt svart. Efter två sekunder utan musrörelse döljs markören så att den inte skapar en vit referenspunkt eller kontaminerar en mörkrum-inspektion.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'testbakgrundsfärg' },
        { value: '2 s', label: 'markör-inaktivitetstid' },
        { value: '100%', label: 'rekommenderad ljusstyrka' },
        { value: '0', label: 'externa resurser i testläge' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklista för svart test',
      items: [
        'Använd native upplösning och inaktivera webbläsarzoom om skärmen skalas konstigt',
        'Ställ in SDR-ljusstyrka tillräckligt högt för att avslöja defekter, eller testa HDR i det exakta läge du planerar att använda',
        'Inspektera först från din normala visningsposition, sedan från lite längre bort',
        'Bedöm inte från ett telefonfoto om inte exponeringen är låst och liknar vad dina ögon ser',
        'Tryck på Escape för att lämna fullskärm och upprepa testet efter att ha ändrat bildskärmsinställningarna',
      ],
    },
    {
      type: 'tip',
      title: 'Kamerafoton kan få bra paneler att se hemska ut',
      html: 'Telefonens automatiska exponering försöker ljusa upp en svart skärm, vilket överdriver svaga glöd och kan omvandla normalt LCD-beteende till en dramatisk bild. Om du behöver garantibevis, lås exponeringen manuellt och inkludera en anteckning som beskriver om problemet är synligt under verkligt innehåll.',
    },
    {
      type: 'title',
      text: 'Local Dimming Blooming-test för Mini LED- och FALD-skärmar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Läget <strong>bloomingtest för bildskärm</strong> placerar en ren vit cirkel på en ren svart bakgrund. På en Mini LED, FALD LCD eller TV med local dimming tvingar det lilla objektet en eller flera bakgrundsbelysningszoner att lysa medan angränsande zoner försöker förbli svarta. Om dimningsalgoritmen, zonantalet, diffusorn eller panelkontrasten inte kan isolera ljuset ser du en halo runt cirkeln.',
    },
    {
      type: 'paragraph',
      html: 'Att dra cirkeln är viktigt. Statisk blooming är bara en del av historien. Ett rörligt högdagerelement avslöjar dimningsfördröjning, zonövergångar, pumpning, krossade stjärnfält, upplyfta undertexter och rutnätsformat beteende. Ett bra local dimming-system bör hålla objektet ljust samtidigt som det minimerar diset runt det och undviker fördröjda ljusa fläckar efter att cirkeln har rört sig bort.',
    },
    {
      type: 'table',
      headers: ['Artefakt', 'Vad att titta efter', 'Trolig förklaring'],
      rows: [
        ['Halo', 'Mjuk glöd runt den vita cirkeln', 'Local dimming-zonen är större än det ljusa objektet'],
        ['Zonrutnät', 'Fyrkantiga eller rektangulära block syns runt rörelse', 'Lågt zonantal eller synlig Mini LED-layout'],
        ['Dimningsfördröjning', 'Ljus fläck följer cirkeln för sent', 'Algoritmen svarar långsamt på rörelse'],
        ['Svartlyft', 'Hela skärmen blir grå när cirkeln visas', 'Global dimning eller svag kontrastkontroll'],
        ['Undertext-bloom', 'Stort dis runt liten vit text eller UI', 'Aggressiv ljusstyrka med begränsade lokala zoner'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'Bästa användningsfall',
      html: 'Anslut den bärbara datorn eller konsolen till den dyra TV:n du faktiskt använder, öppna denna local dimming-testare i webbläsaren och dra högdagern över den exakta skärmstorleken. En liten inbäddad förhandsvisning kan inte belasta local dimming-zoner på samma sätt som fullskärm i svart och vitt.',
    },
    {
      type: 'title',
      text: 'Förväntningar per Paneltyp: OLED, Mini LED, IPS och VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Vad varje teknik tenderar att göra bra och dåligt',
      items: [
        {
          pro: 'OLED stänger av enskilda pixlar för äkta svart och bör inte visa LCD backlight bleed.',
          con: 'OLED kan visa near-black banding, färgstick, automatisk ljusstyrkebegränsning och inbränningsrisk under statiskt innehåll.',
        },
        {
          pro: 'Mini LED kan nå hög HDR-ljusstyrka och minska storskaligt dis jämfört med edge-lit LCD.',
          con: 'Mini LED använder fortfarande zoner, så små ljusa objekt kan orsaka blooming när zonantalet eller algoritmkvaliteten är begränsad.',
        },
        {
          pro: 'IPS är stabilt för färg och betraktningsvinkel, vilket är användbart för desktoparbete och delad visning.',
          con: 'IPS glow och kantbleed är vanliga klagomål vid mörka scener, särskilt när man sitter nära.',
        },
        {
          pro: 'VA har ofta mycket bättre inbyggd kontrast än IPS och kan se djupare ut i mörka rum.',
          con: 'VA kan visa mörk smetning, clouding eller blooming på versioner med local dimming.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Backlight bleed', definition: 'Oönskat ljus som tränger igenom LCD-stacken, oftast nära ramen, synligt på svarta bilder.' },
        { term: 'Blooming', definition: 'En halo runt ett ljust objekt orsakad av local dimming-zoner som lyser upp ett större område än objektet.' },
        { term: 'IPS glow', definition: 'Vinkelberoende mjölkaktig uppljusning i mörka scener på IPS-paneler.' },
        { term: 'FALD', definition: 'Full Array Local Dimming, där en LCD-bakgrundsbelysning är uppdelad i oberoende styrda zoner.' },
        { term: 'Mini LED', definition: 'En LCD-bakgrundsbelysning som använder många små LED för att öka zonantalet och HDR-ljusstyrkan.' },
        { term: 'Svartuniformitet', definition: 'Hur jämnt en bildskärm återger svart eller nästan-svart innehåll över hela skärmytan.' },
      ],
    },
    {
      type: 'title',
      text: 'När En Defekt Är Tillräckligt Allvarlig För Att Returneras',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Varningssignaler under returperioden',
      badge: 'Garanti',
      html: 'Överväg att snabbt dokumentera problemet om ett ljust hörn är synligt från normalt sittavstånd, samma fläck distraherar dig i filmer eller spel, local dimming skapar uppenbara halos runt undertexter eller en dyr HDR-skärm presterar sämre än typiska recensioner för samma modell.',
    },
    {
      type: 'paragraph',
      html: 'Ett rättvist beslut använder verkligt innehåll och produktklass. En lågkostnads kontors-IPS-bildskärm kan ha mild hörnglöd som är normal för klassen. En premium Mini LED-bildskärm eller high-end TV bör kontrollera svartnivåer och blooming mycket bättre. Om defekten är uppenbar i letterboxfilmer, mörka spelmenyer, rymdscener eller desktoparbete är det inte bara en labb-kuriositet.',
    },
    {
      type: 'list',
      items: [
        'Kontrollera samma innehåll på en annan skärm för att utesluta källan',
        'Återställ bildinställningar innan du antar att panelen är defekt',
        'Prova local dimming låg, medium och hög eftersom algoritmer skiljer sig per läge',
        'Anteckna ljusstyrka, HDR-läge, local dimming-läge och visningsavstånd i dina anteckningar',
        'Vid retur, beskriv vad dina ögon ser istället för att bara skicka överexponerade foton',
      ],
    },
    {
      type: 'title',
      text: 'Varför Detta Test Använder Kod Istället För Video',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Videofiler kan introducera komprimeringsartefakter, webbläsaravkodning, buffring, färgrymdskonvertering och variationer i bildfrekvens. Ett paneldefekttest borde inte vara beroende av en MP4-fil. Detta verktyg använder endast HTML och CSS på klientsidan för testtillstånden: exakt svart för bakgrunden och exakt vitt för den rörliga cirkeln. Det håller arbetsbelastningen låg och undviker nätverksaktivitet efter att sidan har laddats.',
    },
    {
      type: 'paragraph',
      html: 'Bloomingcirkelns position tillämpas via <code>requestAnimationFrame</code>, som synkroniserar visuella uppdateringar med webbläsarens uppdateringsslinga. Pekar-, mus- och touch-inmatning uppdaterar målkoordinaterna, sedan flyttar nästa animationsruta den vita cirkeln. Detta gör dragning konsekvent på högupplösta bildskärmar, surfplattor och OLED-telefoner utan att göra onödigt arbete vid varje rå inmatningshändelse.',
    },
    {
      type: 'message',
      title: 'Not om integritet och prestanda',
      ariaLabel: 'Not om integritet och prestanda',
      html: 'De aktiva testtillstånden behöver inte spårning, videor, fjärrbilder eller mätningsuppladdningar. De är avsiktligt enkla så att äldre bärbara datorer, TV-webbläsare och vardagsrumsuppsättningar kan belasta bildskärmspanelen istället för processorn.',
    },
    {
      type: 'title',
      text: 'Felsökning av Felaktiga Resultat',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Symptom under testet', 'Möjlig orsak', 'Vad att prova'],
      rows: [
        ['Svart skärm är inte riktigt svart', 'Begränsad RGB-rymd, upplyft svartnivåinställning, HDR tone-mapping eller webbläsaröverlägg', 'Ställ in full RGB-utgång, inaktivera dynamisk kontrast och bekräfta att inget OS-nattfilter är aktivt'],
        ['Muspekaren förblir synlig', 'Rörelse återställde inaktivitetstimern eller webbläsaren blockerade markör-döljning tillfälligt', 'Sluta röra musen i två sekunder eller använd en fjärrkontroll/tangentbord'],
        ['Fullskärm startar inte', 'Webbläsaren nekade fullskärm utanför ett direkt klick eller TV-webbläsarbegränsning', 'Tryck på startknappen igen eller använd webbläsarens fullskärmsgenväg'],
        ['Blooming förändras mellan lägen', 'Local dimming-inställningen ändrar zonbeteende', 'Testa igen Låg, Medium, Hög och Av för att förstå avvägningen'],
        ['OLED ser grå ut', 'Videorymd-missmatch, rumsreflexer eller bildläge med upplyfta svartnivåer', 'Kontrollera källrymd, svartnivå, ljusstyrka och omgivningsreflexer'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktisk tolkning',
      items: [
        'Backlight bleed är mest övertygande när det är fast på plats och synligt i verkligt mörkt innehåll',
        'IPS glow ändras med vinkeln, så testa från den position där du faktiskt sitter',
        'Blooming är en local dimming-begränsning, inte ett döda pixlar-problem',
        'OLED bör klara det rena svarta testet, men behöver fortfarande separata near-black-uniformitetskontroller',
        'En bra testuppsättning är mörk, fullskärm, hög ljusstyrka och fri från reflexer',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Backlight bleed',
    bleedDescription: 'Fullskärm med exakt svart för kantljusläckor, IPS glow, clouding och svartuniformitetskontroller.',
    bloomingTitle: 'Local dimming',
    bloomingDescription: 'En dragbar vit cirkel som belastar Mini LED, FALD, OLED near-black-hantering och TV-dimmningszoner.',
    startBleed: 'Starta svart test',
    startBlooming: 'Starta bloomingtest',
    prepTitle: 'Innan du börjar',
    prepBrightness: 'Ställ in bildskärmens eller TV:ns ljusstyrka på 100%.',
    prepRoom: 'Släck rumsbelysningen och ta bort reflexer.',
    prepFullscreen: 'Tryck på Escape för att lämna fullskärm och återställa testet.',
    panelLabel: 'Panelförhandsvisning',
    parametersLabel: 'Testparametrar',
    modeControlsLabel: 'Backlight-testlägen',
    blackLevelLabel: 'Svart',
    blackLevelValue: '#000000',
    brightnessLabel: 'Ljusstyrka',
    brightnessValue: '100%',
    idleLabel: 'Markör',
    idleValue: '2s',
    fullscreenLabel: 'Fullskärm',
    fullscreenValue: 'API',
    escapeHint: 'Rent svart test pågår. Sluta röra musen i 2 sekunder för att dölja markören. Tryck på Esc för att avsluta.',
    dragHint: 'Dra eller tryck på den vita cirkeln. Leta efter halos, zonrutnät och fördröjd dimning. Tryck på Esc för att avsluta.',
  },
};
