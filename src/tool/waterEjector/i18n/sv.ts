import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'vattenutdrivare-hogtalarrengoring';
const title = 'Vattenutdrivare för högtalare';
const description =
  'Spela upp en lågfrekvent ton på 165 Hz för att hjälpa till att trycka ut vatten, damm och lösa partiklar ur telefon-, surfplatte- och bärbara datorhögtalare.';

const faqData = [
  {
    question: 'Vilken frekvens ska jag använda för att driva ut vatten ur en högtalare?',
    answer:
      'En låg ton runt 165 Hz är en praktisk utgångspunkt eftersom den synligt rör små högtalarmembran utan genomträngande höga frekvenser. Vissa enheter svarar bättre mellan 145 Hz och 190 Hz, så verktyget innehåller alla tre förinställningarna.',
  },
  {
    question: 'Kan en ljudton ta bort allt vatten från min telefon?',
    answer:
      'Nej. Den kan hjälpa till att skaka ut droppar ur högtalargallret eller den akustiska kammaren, men den kan inte torka vätska bakom tätningar, inuti portar eller under en skärm. Om enheten har sänkts ned, stäng av den och följ tillverkarens torkanvisningar.',
  },
  {
    question: 'Är detta säkert för högtalare?',
    answer:
      'Använd korta sessioner, börja under maximal volym och stoppa om du hör skrapande, skallrande eller distorsion. En liten telefonhögtalare är inte konstruerad för långvarig bashögtalaruppspelning, så upprepade korta cykler är säkrare än en enda lång körning.',
  },
  {
    question: 'Varför låter min högtalare dämpad efter att ha blivit våt?',
    answer:
      'En vattenfilm tillför massa och dämpning till högtalarmembranet och kan blockera galleröppningarna. Det minskar diskant, försämrar taltydlighet och får bas att låta suddig tills dropparna rör sig eller avdunstar.',
  },
  {
    question: 'Bör jag använda ris efter att min telefon blivit våt?',
    answer:
      'Ris är inte en pålitlig reparationsmetod och kan lämna stärkelse eller partiklar i portarna. Använd luftflöde, absorberande luddfri trasa och tillverkarens instruktioner istället. Ljudutdrivning är endast för högtalarutgången, inte hela enheten.',
  },
];

const howToData = [
  {
    name: 'Ta bort skal och rikta högtalaren nedåt',
    text: 'Ta av alla skal som täcker gallret, håll enheten så att gravitationen hjälper droppar att lämna högtalaröppningen och håll portar fria.',
  },
  {
    name: 'Börja med standardförinställningen 165 Hz',
    text: 'Tryck på Start och låt tonen köras i 30 sekunder. Membranrörelsen kan lossa droppar som fastnat i gallernätet eller den grunda högtalarkammaren.',
  },
  {
    name: 'Prova mild eller djup förinställning vid behov',
    text: 'Om ljudet förblir dämpat, testa 145 Hz eller 190 Hz för en kort cykel. Olika högtalarstorlekar resonerar vid olika punkter.',
  },
  {
    name: 'Stoppa om högtalaren distorderar',
    text: 'Sänk volymen eller stoppa omedelbart om tonen blir hård, surrande eller mekaniskt ansträngd. Distorsion betyder att drivaren pressas för hårt.',
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

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Hur en vattenutdrivningston fungerar', level: 2 },
    {
      type: 'paragraph',
      html: 'En telefonhögtalare är ett litet rörligt membran. När en lågfrekvent ton spelas rör sig membranet fram och tillbaka många gånger per sekund. Vid <strong>165 Hz</strong> sker den rörelsen 165 gånger varje sekund. Om vatten sitter på gallret eller har fastnat precis innanför den akustiska öppningen kan den rörliga luften bryta droppens ytspänning och trycka den mot öppningen.',
    },
    {
      type: 'paragraph',
      html: 'Processen är mekanisk, inte kemisk. Ljudet avdunstar inte vätska och gör inte intern elektronik vattentät. Det förstås bäst som en kontrollerad vibrationscykel för högtalarutgången, användbar när tal, aviseringar eller musik låter dämpade efter regn, en stänk, ett duschrum eller en snabb sköljning.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'standard startfrekvens', icon: 'mdi:sine-wave' },
        { value: '30 s', label: 'kort första rengöringscykel', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'praktiskt inställningsområde', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Vad tonen kan och inte kan göra',
      badge: 'Omfattning',
      icon: 'mdi:information',
      html: 'Tonen kan hjälpa till att flytta lösa droppar i högtalarvägen. Den kan inte avlägsna vätska från laddningsportar, SIM-kortplatser, mikrofoner, kameramoduler, limfogar eller utrymmet under skärmen.',
    },
    { type: 'title', text: 'När du ska använda den', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Högtalaren låter tyst, dämpad eller bubblande efter en vattenstänk.',
        'En sida av en stereotelefonhögtalare låter svagare än den andra.',
        'Ett bärbart dator- eller surfplattagaller har samlat droppar efter rengöring.',
        'Damm eller ludd är synligt löst på gallret och normal uppspelning låter dovt.',
        'Enheten fungerar normalt, laddar normalt och visar ingen varning om vätska i en port.',
      ],
    },
    {
      type: 'tip',
      title: 'Bästa fysiska position',
      html: 'Rikta högtalargallret nedåt eller något nedåt. Tonen ger rörelse, men gravitationen avgör vart den frigjorda droppen tar vägen. Att ta av ett skal är också viktigt eftersom många skal skapar en grund ficka som fångar vatten nära utloppet.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Varför telefonhögtalare påverkas snabbt',
      html: 'Moderna telefoner använder kompakta drivare med stort slaglängd och små akustiska kanaler. En droppe som skulle vara ofarlig på en stor skrivbordshögtalare kan täcka en betydande del av ett telefongaller, ändra tryck och dämpa membranet tillräckligt för att röster ska låta avlägsna.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Trolig orsak', 'Vad du ska prova'],
      rows: [
        ['Dämpat tal', 'Vattenfilm över gallret', 'Kör 165 Hz i 30 sekunder, högtalaren vänd nedåt'],
        ['Surrande under tonen', 'Droppe som rör sig eller drivare överbelastad', 'Sänk volymen; stoppa om surrandet kvarstår'],
        ['En högtalare tystare', 'Endast ett utlopp är blockerat', 'Rotera enheten så att utloppet pekar nedåt'],
        ['Inget ljud alls', 'Avstängd utgång, Bluetooth-väg eller hårdvarufel', 'Kontrollera ljudväg innan du upprepar cykler'],
      ],
    },
    { type: 'title', text: 'Välja rätt frekvens', level: 2 },
    {
      type: 'paragraph',
      html: 'Det finns inget universellt magiskt nummer eftersom högtalarstorlek, gallerform, vattentät membrandesign och höljesgeometri skiljer sig åt. Anledningen till att <strong>165 Hz</strong> är populär är att den ligger tillräckligt lågt för att skapa synligt konslag på många små högtalare samtidigt som den förblir inom ett område de flesta enheter kan återge högt.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz mild',
          description: 'Användbart för mycket små eller ansträngda högtalare där standardtonen låter sträv.',
          icon: 'mdi:leaf',
          points: ['Lägre tonhöjd', 'Mindre aggressiv rörelse', 'Bra första omförsök'],
        },
        {
          title: '165 Hz standard',
          description: 'Balanserad utgångspunkt för telefoner, surfplattor och många bärbara datorhögtalare.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Standardförinställning', 'Starkt membranslag', 'Bästa första cykel'],
        },
        {
          title: '190 Hz djuprengöring',
          description: 'En något högre tryck som kan fungera när en viss högtalare resonerar över 165 Hz.',
          icon: 'mdi:waves',
          points: ['Tätare vibration', 'Användbart för andra omgång', 'Undvik långa cykler'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Låga frekvenser jämfört med höga frekvenser',
      items: [
        { pro: 'Låga toner flyttar mer luft och ger större membranavstånd på små högtalare.', con: 'De kan distordera snabbare vid maximal volym.' },
        { pro: 'Höga toner är lättare att höra genom vissa galler.', con: 'De flyttar vanligtvis mindre luft och kan vara obehagliga eller ohörbara för vissa användare.' },
        { pro: 'En kort låg ton är lätt att bedöma med örat.', con: 'Den bör inte loopas i många minuter utan pauser.' },
      ],
    },
    {
      type: 'message',
      title: 'Regel för frekvensinställning',
      ariaLabel: 'Regel för frekvensinställning',
      html: 'Om högtalaren låter ren efter en 30-sekunderscykel, stoppa. Fler cykler är inte en underhållsrutin; de är endast ett återhämtningshjälpmedel efter att vätska eller skräp når högtalaröppningen.',
    },
    { type: 'title', text: 'Säker rengöringsprocedur', level: 2 },
    {
      type: 'paragraph',
      html: 'Börja under maximal systemvolym, särskilt på bärbara datorer och surfplattor med större högtalare. Öka endast tills tonen är tydligt hörbar och enheten vibrerar lätt. Om du hör ett skarpt skaller, skrapljud eller plötslig volymminskning, stoppa verktyget och låt enheten torka naturligt.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Koppla bort hörlurar och Bluetooth-högtalare så att tonen spelas genom den våta högtalaren.',
        'Torka utsidan med en luddfri trasa innan du spelar ljud.',
        'Håll högtalarutloppet nedåt och håll handen borta från gallret.',
        'Kör 30 sekunder vid 165 Hz.',
        'Vänta en minut, testa normalt talljud, upprepa sedan endast en gång vid behov.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Använd inte värme eller tryckluft',
      badge: 'Undvik',
      icon: 'mdi:alert',
      html: 'Hårtorkar, ugnar och högtryckstryckluft kan trycka fukt djupare, deformera tätningar eller skada membran. Ljudtonen är skonsammare eftersom den arbetar från högtalarrörelsen som redan är inbyggd i enheten.',
    },
    {
      type: 'summary',
      title: 'Snabb säkerhetschecklista',
      items: [
        'Korta cykler är bättre än lång kontinuerlig uppspelning.',
        'Sänk volymen om tonen surrar hårt.',
        'Stoppa om enheten visar vätskedetekteringsvarningar.',
        'Ljudutdrivning hjälper endast högtalarutgången, inte hela telefonen.',
      ],
    },
    { type: 'title', text: 'Vattenresistens är inte vattentäthet', level: 2 },
    {
      type: 'paragraph',
      html: 'Många telefoner marknadsförs som vattenresistenta, men den klassningen mäts under definierade laboratorieförhållanden. Verklig vattenexponering inkluderar rörelse, tvål, salt, värme, tryck, ålder, stötar och slitna tätningar. En högtalarrengöringston återställer inte en tätning och bekräftar inte att en telefon är säker att ladda.',
    },
    {
      type: 'table',
      headers: ['Exponering', 'Tonens användbarhet för högtalare', 'Extra åtgärd'],
      rows: [
        ['Lätt regn', 'Ofta hjälpsamt om ljudet är dämpat', 'Torka utsidan och kör en kort cykel'],
        ['Rent vattenstänk', 'Hjälpsamt för droppar nära gallret', 'Håll portar torra före laddning'],
        ['Pool- eller havsvatten', 'Begränsad; rester kan finnas kvar', 'Skölj endast om tillverkaren tillåter, sök sedan service vid behov'],
        ['Tvål, läsk eller kaffe', 'Låg; klibbiga rester förändrar gallret', 'Stäng av och sök rengöringsråd'],
        ['Full nedsänkning', 'Inte tillräckligt', 'Följ tillverkarens nödsteg'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Membran', definition: 'Den rörliga ytan inuti en högtalare som trycker luft för att skapa ljud.' },
        { term: 'Resonans', definition: 'En frekvens där ett fysiskt system rör sig mer effektivt eftersom dess form och massa gynnar den vibrationen.' },
        { term: 'Ytspänning', definition: 'Kraften som får en droppe att klamra sig fast vid ett galler eller membran istället för att rinna av omedelbart.' },
        { term: 'Akustisk kammare', definition: 'Den lilla interna väg som leder högtalarljud från drivaren till enhetsöppningen.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Varför det kan låta högre efter rengöring',
      html: 'Vatten blockerar höga frekvenser först eftersom små våglängder lätt sprids av gallerhinder. När droppar väl rör sig, återvänder ofta konsonanter, aviseringssignaler och röstdetaljer innan basen ändras märkbart.',
    },
    { type: 'title', text: 'Rengöring av damm och skräp', level: 2 },
    {
      type: 'paragraph',
      html: 'Samma vibration kan lossa torrt damm, ludd eller pulver som sitter på ett högtalarnät, men den bör inte ersätta försiktig fysisk rengöring. Om skräp är klibbigt, oljigt eller packat i gallret kan enbart vibration bara flytta runt det. Använd en mjuk torr borste runt utsidan och undvik att föra in metallverktyg i öppningen.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ljudvibration',
          description: 'Bra för lösa partiklar och droppar som kan röra sig fritt.',
          icon: 'mdi:sine-wave',
          points: ['Ingen kontakt med gallret', 'Snabbt', 'Bäst för nyliga stänk'],
        },
        {
          title: 'Mjuk utvändig borstning',
          description: 'Bättre för synligt ludd eller damm som sitter på nätytan.',
          icon: 'mdi:brush',
          points: ['Fungerar utan högt ljud', 'Undviker överbelastning av högtalaren', 'Kräver varsamhet runt membran'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Efter dammiga miljöer',
      html: 'Kör tonen vid måttlig volym, torka sedan av det yttre gallret med en torr mikrofiberduk. Tillsätt inte alkohol eller flytande rengöringsmedel om inte enhetstillverkaren uttryckligen rekommenderar det för den ytan.',
    },
    { type: 'title', text: 'Enhetsspecifika anteckningar', level: 2 },
    {
      type: 'paragraph',
      html: 'Telefoner, surfplattor och bärbara datorer placerar högtalare i olika akustiska layouter. En bottenmonterad telefonhögtalare har vanligtvis ett kort utlopp nära laddningsporten, så vatten kan lämna snabbt när gallret är vänt nedåt. En surfplatta kan använda en längre sidokanal, vilket innebär att tonen kan göra ljudet klarare gradvis snarare än i en enda märkbar stöt. En bärbar datorhögtalare spelar ofta genom ett tangentbordsdäck eller undersidespår, så vätskan kan vara på ett tyglager, plastnät eller externt galler snarare än direkt på drivaren.',
    },
    {
      type: 'paragraph',
      html: 'För en telefon, rotera enheten tills högtalaren som låter dämpad är den lägsta punkten. För en surfplatta, prova både stående och liggande orientering eftersom den blockerade öppningen kan vara på en annan kant än förväntat. För en bärbar dator, håll maskinen på en stabil torr yta och undvik att luta vätska mot tangentbordet, gångjärnet eller ventilerna. Tonen bör hjälpa högtalarvägen; den bör inte uppmuntra vatten att färdas över enheten.',
    },
    {
      type: 'table',
      headers: ['Enhetstyp', 'Rekommenderad orientering', 'Cykelråd'],
      rows: [
        ['Telefon', 'Högtalargaller nedåt, skal borttaget', 'En 30-sekunderscykel, testa sedan röstljud'],
        ['Surfplatta', 'Blockerad kant vänd nedåt', 'Börja vid måttlig volym eftersom högtalarna är större'],
        ['Bärbar dator', 'Normal stabil position om inte vätska är på ett externt galler', 'Använd lägre volym och stoppa om chassit vibrerar kraftigt'],
        ['Smartklocka', 'Följ tillverkarens vattenlås-vägledning först', 'Använd webbton endast om webbläsaren kan dirigera ljud till klockhögtalaren'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Bluetooth och ljudvägskontroll',
      badge: 'Före start',
      icon: 'mdi:bluetooth-audio',
      html: 'Om trådlösa öronsnäckor, ett bilsystem eller en extern högtalare är ansluten kan tonen spelas genom fel utgång. Koppla bort Bluetooth-ljud innan du börjar, bekräfta sedan att en normal ringsignal eller kort video spelas från den våta högtalaren.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Varför mikrofonen är annorlunda',
      html: 'En mikrofonport är en ingångsväg med skyddsnät och en liten trycksensor, inte ett högtalarmembran som kan trycka ut luft. Anta inte att en vattenutdrivningston kommer att rensa dämpade mikrofoninspelningar. Låt enheten torka och undvik att peta i mikrofonhålet.',
    },
    { type: 'title', text: 'Volym, distorsion och hörselkomfort', level: 2 },
    {
      type: 'paragraph',
      html: 'En vattenutdrivningston är avsiktligt repetitiv och kan vara obekväm i ett tyst rum. Målet är inte maximal ljudstyrka; målet är tillräcklig membranrörelse för att störa droppar. Om tonen är smärtsam, minska volymen eller placera enheten längre bort medan du håller högtalarutloppet fritt. Hörselkomfort är viktigt eftersom en framgångsrik rengöringscykel bör ta sekunder, inte långvarig exponering.',
    },
    {
      type: 'paragraph',
      html: 'Distorsion är ett användbart varningstecken. En ren låg ton låter stadig, även om telefonkroppen vibrerar. En dålig ton låter sprakig, sträv, metallisk eller instabil. Det kan hända för att vatten rör sig, för att högtalaren når sin slaglängdsgräns, eller för att enhetsförstärkaren klipper. Att sänka volymen är den första korrigeringen; att upprepa högre är fel drag.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Använd enhetens volymknappar och verktygets volymreglage tillsammans; endera kan göra utgången för hög.',
        'Undvik att placera högtalaren mot ett bord, kudde eller hand eftersom blockerat luftflöde ökar skallrandet.',
        'Pausa mellan cykler så att drivare och förstärkare inte hålls vid hög uteffekt kontinuerligt.',
        'Om normal musik fortfarande sprakar efter torktid, behandla det som ett reparationssymptom snarare än ett rengöringsproblem.',
      ],
    },
    {
      type: 'message',
      title: 'Komfortregel',
      ariaLabel: 'Komfortregel',
      html: 'Om tonen känns för hög för dina öron är den redan högre än vad som behövs för ett första försök. Vattenutdrivning beror på rörelse och orientering, inte på bestraffande volym.',
    },
    { type: 'title', text: 'Felsökning efter tonen', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Sök reparation om dessa tecken visas',
      badge: 'Stopp',
      icon: 'mdi:close-octagon',
      html: 'Sluta använda ljudutdrivning om enheten blir onormalt varm, stängs av, visar vätskevarningar, inte har någon utgång efter vägkontroller, eller om högtalaren skallrar under normalt tal. Dessa symptom kan indikera skada bortom droppar i gallret.',
    },
    {
      type: 'table',
      headers: ['Resultat efter 30 sekunder', 'Betydelse', 'Nästa steg'],
      rows: [
        ['Klarare ljud', 'Droppe har troligen flyttats', 'Stoppa och låt enheten vila'],
        ['Liten förbättring', 'En del fukt finns kvar', 'Vänta, upprepa sedan en kort cykel'],
        ['Ingen förändring', 'Blockering kan vara djupare eller klibbig', 'Torka naturligt och inspektera väg/inställningar'],
        ['Sämre distorsion', 'Drivare kan vara stressad eller skadad', 'Stoppa och sänk volymen; överväg service'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktisk sammanfattning',
      items: [
        'Använd 165 Hz först eftersom den balanserar rörelse och kompatibilitet.',
        'Rikta gallret nedåt och håll cykeln kort.',
        'Behandla tonen som högtalaråterställning, inte fullständig enhetstorkning.',
        'Tillverkarens vätskeanvisningar går före alla webbverktyg.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Redo att trycka ut',
    statusPlaying: 'Ton aktiv',
    statusComplete: 'Cykel klar',
    frequencyLabel: 'Frekvens',
    volumeLabel: 'Volym',
    durationLabel: 'Varaktighet',
    startButton: 'Starta vattenutdrivare',
    stopButton: 'Stoppa ton',
    hertzUnit: 'Hz',
    secondsShort: 's',
    presetGentle: 'Mild',
    presetStandard: '165 Hz',
    presetDeep: 'Djup',
    safetyTitle: 'Säkerhet först',
    safetyText: 'Börja under maxvolym och stoppa om högtalaren skallrar eller förvränger.',
    bestResult: 'Bästa resultat',
    bestResultText: 'Ta av skalet, rikta högtalaren nedåt och kör en kort cykel.',
  },
};
