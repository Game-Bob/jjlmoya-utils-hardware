import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'verifica-audio-stereo';
const title = 'Test audio stereo';
const description = 'Controlla i canali degli altoparlanti sinistro e destro, il bilanciamento stereo, la direzione del cablaggio e l\'immagine delle cuffie con toni di prova generati dal browser.';

const faqData = [
  {
    question: 'Come posso testare gli altoparlanti sinistro e destro online?',
    answer: 'Inizia con volume basso, premi Sinistra e poi Destra. Il tono sinistro dovrebbe provenire solo dall\'altoparlante o dal padiglione sinistro, e il tono destro solo dal lato destro. Usa Centro per confermare che entrambi i lati suonino in modo bilanciato.',
  },
  {
    question: 'Perché entrambi gli altoparlanti suonano durante il test sinistro o destro?',
    answer: 'Alcuni dispositivi, sistemi operativi, altoparlanti Bluetooth, modalità mono, impostazioni di accessibilità o miglioramenti audio convertono lo stereo in mono. Controlla il bilanciamento di sistema, le impostazioni audio mono, il cablaggio e gli effetti audio specifici delle app.',
  },
  {
    question: 'Può diagnosticare cavi degli altoparlanti invertiti?',
    answer: 'Sì. Se il pulsante Sinistra suona dall\'altoparlante destro e il pulsante Destra suona dall\'altoparlante sinistro, il percorso di uscita è invertito da qualche parte tra computer, cavo, amplificatore, altoparlanti o cuffie.',
  },
  {
    question: 'Un tono sinusoidale è sicuro per altoparlanti e cuffie?',
    answer: 'Un breve tono sinusoidale a volume moderato è normalmente sicuro. Evita volume alto, sessioni lunghe o frequenze molto elevate, specialmente con cuffie, piccoli altoparlanti per laptop o amplificatori sconosciuti.',
  },
  {
    question: 'Il browser influisce sul test stereo?',
    answer: 'Lo strumento utilizza lo StereoPannerNode dell\'API Web Audio. È affidabile nei browser moderni, ma l\'uscita finale dipende comunque dal routing del sistema operativo, dai driver, dai codec Bluetooth, dai DAC esterni e dal cablaggio degli altoparlanti.',
  },
];

const howToData = [
  {
    name: 'Imposta un volume iniziale basso',
    text: 'Abbassa il volume di sistema e usa il cursore del volume dello strumento prima di riprodurre qualsiasi tono di prova.',
  },
  {
    name: 'Testa ogni lato',
    text: 'Premi Sinistra e Destra. Ogni tono dovrebbe essere chiaramente isolato sull\'altoparlante o sul lato delle cuffie corrispondente.',
  },
  {
    name: 'Controlla il bilanciamento centrale',
    text: 'Premi Centro. Il tono dovrebbe apparire centrato tra entrambi gli altoparlanti, senza essere fortemente spostato da un lato.',
  },
  {
    name: 'Usa la scansione',
    text: 'Esegui Scansione per sentire il movimento attraverso il campo stereo e individuare interruzioni, cablaggio invertito o immagine non uniforme.',
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
  inLanguage: 'it',
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
      text: 'Test altoparlante sinistro e destro online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Usa questo test audio stereo online per verificare se i tuoi altoparlanti sinistro e destro, cuffie, auricolari, soundbar, DAC, amplificatore o monitor sono instradati correttamente. Lo strumento riproduce toni generati dal browser attraverso il canale sinistro, il canale destro, entrambi i canali o una scansione stereo mobile in modo da poter rilevare rapidamente canali invertiti, uscita mono, altoparlanti deboli, problemi di bilanciamento ed errori di cablaggio senza installare software audio.',
    },
    {
      type: 'paragraph',
      html: 'Una configurazione stereo corretta preserva la direzione: il tono di prova sinistro dovrebbe provenire solo dall\'altoparlante o dal padiglione sinistro, il tono destro solo dal lato destro e il tono centrale dovrebbe suonare equamente bilanciato tra entrambi i lati. Se il suono appare dal lato sbagliato, da entrambi i lati contemporaneamente o molto più forte da un lato, il problema è solitamente nelle impostazioni di uscita, nella modalità di accessibilità mono, nel cablaggio, nel routing Bluetooth, nel posizionamento degli altoparlanti o nel software di miglioramento audio.',
    },
    {
      type: 'table',
      headers: ['Pulsante', 'Cosa dovresti sentire', 'Usalo per diagnosticare'],
      rows: [
        ['Sinistra', 'Tono solo dall\'altoparlante sinistro, driver sinistro delle cuffie o auricolare sinistro.', 'Cavi invertiti, posizionamento errato degli altoparlanti, uscita mono o rimappatura dei canali.'],
        ['Destra', 'Tono solo dall\'altoparlante destro, driver destro delle cuffie o auricolare destro.', 'Uscite scambiate, cablaggio adattatore errato o effetti driver che cambiano l\'ordine dei canali.'],
        ['Centro', 'Il tono appare al centro perché entrambi i canali suonano bilanciati.', 'Offset del bilanciamento di sistema, un altoparlante debole, griglia auricolare ostruita o guadagno amplificatore disuguale.'],
        ['Scansione', 'Il tono si sposta dolcemente attraverso l\'immagine stereo da un lato all\'altro.', 'Interruzioni, collegamenti Bluetooth instabili, problemi di fase, artefatti surround virtuale o immagine non uniforme.'],
      ],
    },
    {
      type: 'title',
      text: 'Problemi stereo più comuni rilevati da questo test',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'I canali sinistro e destro sono invertiti: il pulsante sinistro suona sul lato destro, o il pulsante destro suona sul lato sinistro.',
        'Lo stereo è collassato in mono: sinistra, destra e centro suonano quasi identici da entrambi gli altoparlanti.',
        'Un lato è più basso: l\'audio centrale tende verso un altoparlante anche quando il cursore del bilanciamento di sistema appare centrato.',
        'Le cuffie sono cablate o indossate in modo errato: i passi di gioco, il panning musicale e le videochiamate risultano spazialmente confusi.',
        'L\'audio Bluetooth o USB viene elaborato: soundbar, dock, cuffie e modalità TV possono convertire o virtualizzare il segnale.',
        'Il posizionamento degli altoparlanti è fuorviante: un altoparlante troppo vicino a una parete, bloccato da mobili o più lontano può far deviare l\'immagine centrale.',
      ],
    },
    {
      type: 'title',
      text: 'Come risolvere l\'audio sinistro e destro invertito',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Per altoparlanti cablati, scambia le spine sinistra e destra sull\'amplificatore, interfaccia audio, DAC o uscita del computer.',
        'Per altoparlanti passivi, conferma che l\'altoparlante sinistro sia collegato ai terminali sinistri dell\'amplificatore e l\'altoparlante destro ai terminali destri.',
        'Per le cuffie, controlla che siano indossate nell\'orientamento corretto e prova senza adattatori, cavi di prolunga o splitter.',
        'Per Windows o macOS, controlla il bilanciamento in uscita e disattiva l\'audio mono nelle impostazioni di accessibilità o audio.',
        'Per altoparlanti Bluetooth e soundbar, disattiva il surround virtuale, la modalità party, l\'audio duale, la correzione ambiente o le modalità audio TV durante il test.',
        'Per interfacce audio, DAW e mixer, controlla il routing dei canali, i controlli di pan, le impostazioni del mix monitor e qualsiasi mixer software fornito dal produttore.',
      ],
    },
    {
      type: 'title',
      text: 'Come interpretare il test dell\'altoparlante centrale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il tono centrale non è un altoparlante centrale fisico separato in una normale configurazione a due canali. È lo stesso segnale inviato uniformemente a sinistra e destra. In cuffia dovrebbe risultare centrato nella testa; sugli altoparlanti dovrebbe formare un centro fantasma tra di essi. Se tende a sinistra o destra, controlla il bilanciamento di sistema, la distanza degli altoparlanti, l\'angolazione, le manopole del volume, il trim dell\'amplificatore, la vestibilità degli auricolari, la polvere nella griglia del driver e se un altoparlante è parzialmente bloccato o difettoso.',
    },
    {
      type: 'table',
      headers: ['Cosa succede', 'Causa probabile', 'Passo successivo'],
      rows: [
        ['Sinistra suona da entrambi i lati', 'Audio mono, downmixing o elaborazione audio spaziale.', 'Disattiva l\'uscita mono e il surround virtuale, poi prova di nuovo.'],
        ['Sinistra suona dal lato destro', 'I canali sono scambiati da qualche parte nella catena di riproduzione.', 'Scambia i cavi o modifica il routing dei canali nel driver, mixer o amplificatore.'],
        ['Il centro è più forte su un lato', 'Bilanciamento, posizionamento, danno al driver, vestibilità dell\'orecchio o griglia dell\'altoparlante ostruita.', 'Confronta con un altro paio di cuffie o altoparlanti e ispeziona il posizionamento fisico.'],
        ['La scansione salta o scompare', 'Instabilità Bluetooth, artefatti di miglioramento audio o un cavo/connettore difettoso.', 'Prova con uscita cablata o un altro cavo per isolare l\'anello debole.'],
      ],
    },
    {
      type: 'title',
      text: 'Test sinistro destro per cuffie e auricolari',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per cuffie e auricolari, il test sinistro/destro è particolarmente utile prima di giocare, modificare audio, guardare film o partecipare a chiamate. Indossa le cuffie normalmente, inizia con volume basso, premi Sinistra e Destra e conferma che ogni tono arrivi all\'orecchio corretto. Se entrambi i lati suonano uguali, il tuo dispositivo potrebbe usare l\'audio mono. Se un lato è ovattato o più basso, pulisci la griglia dell\'auricolare, riposiziona il gommino, controlla il cavo e confronta con un altro dispositivo di uscita.',
    },
    {
      type: 'title',
      text: 'Consigli per test audio sicuri',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Inizia con volume di sistema basso, soprattutto con le cuffie.',
        'Usa Ciclo fino all\'arresto solo quando hai attivamente bisogno di suono continuo per il tracciamento dei cavi, il posizionamento o la regolazione del bilanciamento.',
        'Mantieni brevi i toni di prova con altoparlanti piccoli; le onde sinusoidali continue possono diventare rapidamente fastidiose.',
        'Evita il guadagno massimo su piccoli altoparlanti per laptop e amplificatori sconosciuti.',
        'Non mettere le cuffie sulle orecchie finché non hai confermato che il volume è sicuro.',
        'Dopo aver cambiato cavi o impostazioni, ripeti i test sinistra, destra, centro e scansione in quest\'ordine.',
        'Per la calibrazione in studio o home theater, combina questo test rapido con un fonometro o la routine di calibrazione del ricevitore.',
      ],
    },
    {
      type: 'title',
      text: 'Diagnosi rapida',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se sinistra e destra sono invertiti, ispeziona prima il cablaggio fisico perché è la soluzione più rapida per altoparlanti da scrivania, amplificatori e interfacce audio. Se entrambi i pulsanti suonano da entrambi i lati, cerca uscita mono, audio spaziale, surround virtuale o un dispositivo che converte intenzionalmente lo stereo in mono. Se il centro è fuori centro ma sinistra e destra sono instradati correttamente, il problema è solitamente il bilanciamento, il posizionamento, la vestibilità delle cuffie, le griglie ostruite o l\'uscita non uniforme degli altoparlanti.',
    },
  ],
  ui: {
    left: 'Sinistra',
    center: 'Centro',
    right: 'Destra',
    sweep: 'Scansione',
    stop: 'Stop',
    volume: 'Volume',
    duration: 'Durata',
    infiniteMode: 'Ciclo fino allo stop',
    infiniteModeHint: 'Mantiene qualsiasi canale in riproduzione per test continui.',
    secondsUnit: 's',
    hertzUnit: 'Hz',
    tone: 'Tono',
    balance: 'Bilanciamento',
    activeIdle: 'Pronto',
    activeLeft: 'Riproduzione canale sinistro',
    activeCenter: 'Riproduzione tono centrato',
    activeRight: 'Riproduzione canale destro',
    activeSweep: 'Scansione del campo stereo',
    safety: 'Inizia basso. I toni di prova possono essere forti attraverso cuffie, amplificatori e piccoli altoparlanti per laptop.',
    leftSpeaker: 'Altoparlante sinistro',
    rightSpeaker: 'Altoparlante destro',
    centerLine: 'Campo stereo',
  },
};
