import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'Capacità della batteria', capacityUnit: 'mAh', capacityHint: 'Usa il valore nelle specifiche del telefono.',
  currentLabel: 'Carica attuale', targetLabel: 'Carica obiettivo', percentUnit: '%', powerLabel: 'Potenza del caricatore', powerUnit: 'W',
  efficiencyLabel: 'Efficienza stimata', efficiencyUnit: '%', efficiencyHint: 'Include le perdite di conversione e calore.',
  statusEmpty: 'Inserisci i dati del telefono e del caricatore.', statusReady: 'Si aggiorna mentre scrivi.', statusError: 'Controlla il valore evidenziato.',
  resultTitle: 'Tempo stimato per raggiungere l\'obiettivo', energyLabel: 'Energia ancora necessaria', energyUnit: 'Wh', fromCurrentCharge: 'dalla carica attuale', startNowLabel: 'Partendo ora raggiunge',
  scenarioTitle: 'Scenari di riferimento del caricatore', scenarioAt: 'stesso telefono e stesso intervallo di carica', assumptionsTitle: 'Ipotesi',
  assumptionsText: 'Usa una tensione nominale della batteria di {voltage} V, un\'efficienza dell\'{efficiency}% e circa un {taper}% di rallentamento aggiuntivo oltre il 70%. Il tuo telefono potrebbe comportarsi diversamente.',
  errorCapacity: 'Inserisci una capacità superiore a zero.', errorCurrent: 'La carica attuale deve essere tra 0 e 100%.', errorTarget: 'La carica obiettivo deve essere tra 1 e 100%.',
  errorTargetOrder: 'La carica obiettivo deve essere superiore a quella attuale.', errorPower: 'Inserisci una potenza superiore a zero.', errorEfficiency: 'L\'efficienza deve essere tra il 50% e il 100%.',
  targetMarker: 'obiettivo', chargeProgressLabel: 'Intervallo di carica', hourUnit: 'h', minuteUnit: 'min',
};

const faq = [
  { question: 'Posso calcolare il tempo di ricarica usando solo la percentuale?', answer: 'No. La stessa percentuale rappresenta quantità di energia diverse su batterie piccole e grandi. Servono anche la capacità, la potenza che raggiunge il telefono e una stima dell\'efficienza.' },
  { question: 'Perché il telefono a volte impiega più tempo del previsto?', answer: 'Il telefono può ridurre la potenza quando la carica è alta, la temperatura aumenta, il cavo o il protocollo limitano il collegamento oppure il dispositivo è in uso. Il risultato è una stima per pianificare, non una misurazione dal vivo.' },
  { question: 'Devo inserire la potenza del caricatore o quella ricevuta dal telefono?', answer: 'Inserisci la potenza che probabilmente riceve il telefono quando la conosci. Se conosci solo la potenza nominale del caricatore, usala come stima massima e considera che il tempo reale potrebbe essere maggiore.' },
];

const howTo = [
  { name: 'Inserisci la capacità', text: 'Leggi la capacità della batteria nelle specifiche del telefono e inseriscila in mAh. Non usare la capacità di un power bank: tensione e perdite di conversione descrivono un percorso diverso.' },
  { name: 'Imposta l\'intervallo di carica', text: 'Inserisci la percentuale attuale e quella desiderata. Una ricarica dal 20% al 50% richiede un tempo diverso da una ricarica completa.' },
  { name: 'Aggiungi potenza ed efficienza', text: 'Inserisci la potenza in watt o, se disponibile, la potenza di ricarica effettivamente accettata dal telefono. Mantieni il valore predefinito dell\'efficienza senza una misurazione personale.' },
  { name: 'Confronta gli scenari', text: 'Confronta il risultato con i riferimenti da 5 W, 15 W e 30 W per capire se il caricatore è sufficiente per il tempo che hai a disposizione.' },
];

const seo = [
  { type: 'title' as const, text: 'Calcola il tempo di ricarica del telefono', level: 2 as const },
  { type: 'paragraph' as const, html: 'Usa questo calcolatore del tempo di ricarica quando vuoi sapere se il telefono raggiungerà un livello utile prima di uscire, durante un viaggio o prima di una chiamata lunga. Inserisci capacità, carica attuale, obiettivo, potenza del caricatore ed efficienza. Il risultato stima i minuti e l\'energia necessari per quella ricarica, così puoi confrontare il tempo disponibile con caricabatterie più lenti o più veloci.' },
  { type: 'title' as const, text: 'Quali dati inserire', level: 2 as const },
  { type: 'list' as const, items: ['Capacità: usa il dato del telefono in mAh, non la capacità stampata su un power bank.', 'Carica attuale e obiettivo: descrivi la ricarica che ti serve davvero; l\'obiettivo deve essere superiore al livello attuale.', 'Potenza ed efficienza: usa la potenza che arriva al telefono quando la conosci. Altrimenti la potenza del caricatore è solo un limite massimo.'] },
  { type: 'title' as const, text: 'Come leggere il risultato', level: 2 as const },
  { type: 'paragraph' as const, html: 'Il dato principale è il tempo stimato dalla carica attuale all\'obiettivo. L\'energia ancora necessaria esprime la stessa ricarica in wattora, mentre le barre di riferimento mostrano la differenza tra 5 W, 15 W e 30 W. Se il tempo disponibile non basta, riduci l\'obiettivo oppure usa un caricatore e un cavo che il telefono possa sfruttare a una potenza maggiore.' },
  { type: 'title' as const, text: 'Perché la ricarica rallenta vicino al 100%', level: 2 as const },
  { type: 'paragraph' as const, html: 'Un telefono di solito non mantiene la stessa potenza da scarico a pieno. Avvicinandosi a un livello alto, il controllo della batteria può ridurre la corrente per gestire calore e stress. Per questo una stima dal 20% all\'80% è spesso più utile di una proiezione lineare fino al 100%. Per gli obiettivi oltre il 70%, il calcolo aggiunge una piccola tolleranza di rallentamento.' },
  { type: 'title' as const, text: 'Stima: cosa non può rilevare il calcolatore', level: 2 as const },
  { type: 'list' as const, items: ['Non può leggere modello, salute della batteria, protocollo, cavo, temperatura, uso o potenza di ricarica istantanea.', 'Non diagnostica una batteria usurata e non certifica la compatibilità con la ricarica rapida. Per una risposta precisa, cronometra la stessa configurazione nella situazione reale.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'it', slug: 'calcolatore-tempo-ricarica-telefono', title: 'Calcolatore del tempo di ricarica del telefono', description: 'Stima quanto tempo serve per raggiungere una percentuale obiettivo usando capacità della batteria, carica attuale, potenza del caricatore ed efficienza.', faq, howTo, seo, ui });
