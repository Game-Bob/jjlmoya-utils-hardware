import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-mushjul';
const title = 'Test av Mushjul';
const description = 'Diagnostisera mushjulshopp, omvända hopp, inkonsekvent rullningsriktning och svaga enkodersignaler med ett lokalt webbläsarbaserat mushjulstest.';

const faqData = [
  {
    question: 'Vad upptäcker ett mushjulstest?',
    answer: 'Ett mushjulstest registrerar hjulhändelser och letar efter ostabila riktningsförändringar, svaga små deltan och inkonsekvent rullning. Dessa symptom uppträder ofta när hjulencodern är smutsig, sliten, feljusterad eller elektroniskt störd.',
  },
  {
    question: 'Vad är ett omvänt rullningshopp?',
    answer: 'Ett omvänt hopp inträffar när du rullar i en riktning men datorn tar emot en kort händelse i motsatt riktning. Om det upprepas under stadig rullning är det ett starkt tecken på encoderstuds eller förorening.',
  },
  {
    question: 'Fungerar detta test med pekplattor?',
    answer: 'Ja, men resultatet är mest meningsfullt för fysiska mushjul. Pekplattor och mjukrullande hjul skapar många små deltan, så känslighetskontrollen hjälper till att skilja avsiktlig fin rörelse från misstänkt jitter.',
  },
  {
    question: 'Laddar testet upp mina musdata?',
    answer: 'Nej. Beräkningen körs lokalt i din webbläsare. Verktyget använder endast hjulhändelser medan pekaren är inom fångstområdet.',
  },
];

const howToData = [
  {
    name: 'Placera pekaren över fångstpanelen',
    text: 'Flytta markören in i rullningslaboratoriet så att sidan kan fånga hjulhändelser utan att flytta det omgivande dokumentet.',
  },
  {
    name: 'Rulla stadigt i en riktning',
    text: 'Testa en riktning i taget: rulla långsamt uppåt i flera klick, återställ eller pausa och testa sedan nedåt separat. Snabba avsiktliga riktningsbyten kan skapa falska omvända hopp-avläsningar.',
  },
  {
    name: 'Se upp för omvända hopp',
    text: 'Om omvändningsräknaren stiger medan ditt finger fortfarande rör sig i en riktning, upprepa samma rörelse för att bekräfta mönstret.',
  },
  {
    name: 'Justera känsligheten',
    text: 'Öka känsligheten för mjuka pekplattor eller sänk den för strikta mekaniska hjultester. Stabilitetspoängen uppdateras omedelbart.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
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
      text: 'Test av Mushjul: Hitta Hjulhopp och Omvända Hopp',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett defekt mushjul går sällan sönder på en gång. Det börjar vanligtvis med små symptom: en skrollning rullar åt fel håll, sidan hoppar uppåt medan du rullar nedåt, eller hjulet känns normalt men webbläsaren tar emot inkonsekventa händelser. Detta mushjulstest registrerar signalen som når webbläsaren och framhäver de mönster som är relevanta för diagnos.',
    },
    {
      type: 'paragraph',
      html: 'Målet är inte att mäta hur långt en sida har rört sig. Den användbara signalen är <strong>riktningskonsistens</strong>. När du rullar ett mekaniskt hjul stadigt nedåt bör händelseströmmen stanna i den riktningen. Korta motsatt riktningshändelser inom ett smalt tidsfönster är misstänkta eftersom de matchar hur smutsiga eller slitna rullningsencodrar felläser hjulrörelse.',
    },
    {
      type: 'title',
      text: 'Vad Verktyget Mäter',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Totalt antal hjulsteg som fångats i testpanelen',
        'Omvända hopp: snabba teckenändringar som inträffar medan den föregående riktningen fortfarande är aktuell',
        'Längsta rena körning: hur många på varandra följande händelser som stannade i en konsekvent riktning',
        'Senaste delta: den råa riktningen och storleken på den senaste hjulhändelsen',
        'Vertikal kontra horisontell aktivitet, användbart för tilt-hjul och pekplattor',
      ],
    },
    {
      type: 'table',
      headers: ['Signal', 'Hälsosamt Mönster', 'Misstänkt Mönster'],
      rows: [
        ['Vertikalt hjul', 'Långa serier av upp- eller ned-händelser vid stadig rullning', 'Växlande upp/ned-händelser medan fingret håller en riktning'],
        ['Horisontell tilt', 'Vänster- eller högerhändelser endast vid användning av tilt eller horisontella gester', 'Oväntad sidorörelse vid normal vertikal hjulanvändning'],
        ['Små deltan', 'Enstaka små värden på mjuka hjul eller pekplattor', 'Hög andel små ostabila värden på ett mekaniskt hjul med hack'],
        ['Stabilitetspoäng', 'Håller sig högt över flera avsiktliga genomgångar', 'Sjunker upprepade gånger eftersom omvändningar inträffar i samma riktningstest'],
      ],
    },
    {
      type: 'title',
      text: 'Vanliga Orsaker till Mushjulshopp',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De flesta mushjul använder en encoder som omvandlar rotation till pulser. Damm, oxidation, slitna kontakter, en lös hjulaxel, problem med firmware-filtrering eller en skadad kabel kan göra dessa pulser inkonsekventa. När encodern kort rapporterar fel fas kan operativsystemet ta emot en hjulhändelse i motsatt riktning även om hjulet fortsatte att röra sig i den ursprungliga riktningen.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Trolig Orsak', 'Nästa Kontroll'],
      rows: [
        ['Sidan hoppar uppåt vid nedåtrullning', 'Encoderstuds eller smuts i hjulmekanismen', 'Gör en långsam nedåtgenomgång och titta på omvändningsräknaren'],
        ['Endast en applikation rullar dåligt', 'Applikationsutjämning, zoomläge eller anpassad musgenväg', 'Testa i webbläsaren och jämför med en annan app'],
        ['Hjulet fungerar efter att ha blåst luft, misslyckas sedan igen', 'Tillfällig förflyttning av skräp eller slitna encoder-kontakter', 'Upprepa efter några minuters normal användning'],
        ['Oväntad horisontell rörelse visas', 'Tilt-hjulsbrus, pekplattegest eller drivrutinsmappning', 'Kontrollera den horisontella axelmätaren vid vertikal rullning'],
        ['Trådlös mus rullar oregelbundet', 'Svagt batteri, mottagaravstånd eller störningar', 'Testa om med nytt batteri och mottagaren nära musen'],
      ],
    },
    {
      type: 'title',
      text: 'Hur man Testar Tillförlitligt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Placera pekaren inuti fångstpanelen innan du rullar så att sidan kan förhindra normal sidrörelse',
        'Testa en riktning i taget: rulla långsamt uppåt i 10 till 20 hjulsteg utan att ändra riktning',
        'Återställ eller pausa och upprepa sedan samma enriktningsgenomgång nedåt',
        'Alternera inte snabbt mellan upp och ner, eftersom avsiktliga snabba riktningsbyten kan se ut som omvända hopp',
        'Om omvändningar uppträder, upprepa den felande riktningen flera gånger för att bekräfta att det är reproducerbart',
        'Jämför med en annan mus på samma dator om du behöver separera hårdvara från mjukvara',
      ],
    },
    {
      type: 'title',
      text: 'Tolka Poängen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stabilitetspoängen är en snabb sammanfattning. En hög poäng betyder att verktyget såg konsekvent riktning och få små osäkra deltan. En låg poäng bevisar inte automatiskt att musen är trasig, särskilt på pekplattor eller högupplösta mjuka hjul, men upprepade omvända hopp under ett långsamt enriktningstest är starka bevis på ett verkligt hjulproblem.',
    },
    {
      type: 'table',
      headers: ['Resultat', 'Betydelse', 'Rekommenderad Åtgärd'],
      rows: [
        ['Inga omvändningar och långa rena körningar', 'Hjulsignalen verkar konsekvent', 'Fortsätt testa endast om symptom uppträder vid verklig användning'],
        ['En isolerad omvändning', 'Kan vara oavsiktlig riktningsändring eller en störande händelse', 'Upprepa samma riktning långsamt'],
        ['Flera omvändningar i samma genomgång', 'Troligtvis encoderstuds, smuts eller hjulslitage', 'Testa om på en annan dator och dokumentera resultatet'],
        ['Många jitter-händelser men inga omvändningar', 'Känsligheten kan vara för låg för enhetstypen', 'Öka känsligheten för pekplattor eller mjukt rullande enheter'],
        ['Horisontella händelser under vertikal hjulanvändning', 'Möjligt tilt-hjulsbrus eller drivrutinsmappning', 'Inaktivera anpassad musprogramvara och testa om'],
      ],
    },
    {
      type: 'title',
      text: 'Mekaniskt Hjul vs Pekplatta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ett mekaniskt hack-hjul producerar normalt tydliga riktningssteg. En pekplatta eller ett fritt snurrande hjul kan producera många små deltan eftersom operativsystemet tillämpar mjuk rullning. Det är därför detta verktyg innehåller känslighetskontroll: att höja den ignorerar små rörelser och får testet att fokusera på riktningsförändringar som är tillräckligt stora för att spela roll.',
    },
    {
      type: 'title',
      text: 'Vad man Ska Prova Innan man Byter Mus',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Testa i en annan webbläsare för att utesluta en sidspecifik hjulhanterare',
        'Inaktivera tillverkarens musprogramvara, rullningsacceleration eller makrolager under diagnos',
        'Använd ett nytt batteri för trådlösa möss och flytta mottagaren närmare',
        'Rengör runt hjulet med tryckluft medan musen är urkopplad eller avstängd',
        'Om musen är under garanti, spela in det upprepade omvändningsmönstret som bevis',
      ],
    },
    {
      type: 'paragraph',
      html: 'Webbläsarbaserade tester kan inte inspektera encodern elektriskt, men de kan visa exakt vad din normala programvara tar emot. Om webbläsaren tar emot hjulhändelser i fel riktning under försiktig enriktningsrullning kan andra applikationer också ta emot dem.',
    },
  ],
  ui: {
    badge: 'Hjulsignallabb',
    captureTitle: 'Rulla inuti signalpanelen',
    captureHint: 'Använd stadiga enriktnings-hjulgenomgångar för att exponera omvända hopp',
    focusLockTitle: 'Aktivera denna rullningszon',
    focusLockText: 'Klicka på denna zon och rulla här. Sidan kommer inte att röra sig medan denna zon är aktiv.',
    stabilityScore: 'Stabilitetspoäng',
    statusIdle: 'Rulla över panelen för att börja mäta hjulkonsistens',
    statusClean: 'Hjulriktningen är stabil i de fångade proverna',
    statusWarning: 'Omvända hopp upptäcktes under senaste rullning',
    statusMixed: 'Många små deltan upptäcktes; justera känsligheten för denna enhet',
    directionNote: 'Testa en riktning i taget. Att snabbt växla mellan upp och ner kan skapa falska omvända hopp-avläsningar.',
    totalTicks: 'Steg',
    reversals: 'Omvändningar',
    longestRun: 'Bästa körning',
    lastDelta: 'Senaste delta',
    verticalAxis: 'Vertikal',
    horizontalAxis: 'Horisontell',
    dominantDirection: 'Senaste riktning',
    upward: 'Upp',
    downward: 'Ner',
    leftward: 'Vänster',
    rightward: 'Höger',
    noDirection: 'Ingen rörelse',
    noDataValue: '-',
    sensitivityLabel: 'Jitter-känslighet',
    sensitivityUnit: 'delta',
    reset: 'Återställ',
    logTitle: 'Hjulhändelseström',
    emptyLog: 'Rulla över panelen med långsam, stadig hjulrörelse.',
    cleanEvent: 'ren',
    reversalEvent: 'omvänt hopp',
    jitterEvent: 'liten delta',
  },
};
