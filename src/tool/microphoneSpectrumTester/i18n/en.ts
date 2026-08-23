import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'microphone-test-spectrum-analyzer';
const title = 'Microphone Test And Spectrum Analyzer';
const description = 'Test microphone input, live level, clipping, room noise, and frequency response locally in your browser with a private real time spectrum.';

const faq = [
  {
    question: 'Does this microphone test record or upload my voice?',
    answer: 'No. The live microphone stream is connected only to an analyser inside your browser. The tool does not create an audio recording, connect the analyser to an audio output, or upload microphone samples to a server.',
  },
  {
    question: 'What does dBFS mean in the level meter?',
    answer: 'dBFS means decibels relative to digital full scale. Zero dBFS is the maximum representable digital peak, so normal readings are negative. This is not the same as a calibrated sound pressure reading in dB SPL.',
  },
  {
    question: 'How do I know if my microphone is clipping?',
    answer: 'Speak at the loudest level you expect to use. If peaks repeatedly reach the red clipping state near zero dBFS, reduce microphone gain, increase your distance, or disable aggressive input processing in your operating system.',
  },
  {
    question: 'What does the room noise measurement show?',
    answer: 'The three second capture averages the digital RMS level while you stay quiet. It helps compare settings in the same browser and room, but automatic gain control and noise suppression can change the result.',
  },
  {
    question: 'Why does the dominant frequency move while I speak?',
    answer: 'Speech contains a changing fundamental, harmonics, consonants, and noise. The readout reports the strongest current analyser bin between 60 Hz and 12 kHz, so movement is expected rather than a sign of failure.',
  },
  {
    question: 'Can this spectrum analyzer certify microphone quality?',
    answer: 'No. It is a practical browser check for input, level, clipping, noise, and visible frequency activity. A frequency response or sound pressure certification needs calibrated hardware, controlled signals, and a documented measurement environment.',
  },
];

const howTo = [
  {
    name: 'Grant microphone access',
    text: 'Press Start microphone and approve the browser permission. Processing begins only after this explicit action.',
  },
  {
    name: 'Speak at your real working distance',
    text: 'Use your normal voice or instrument level and watch the live dBFS reading, peak orbit, and spectrum movement.',
  },
  {
    name: 'Check the loudest expected moment',
    text: 'Raise your voice or play the loudest passage you expect. Aim to avoid repeated red clipping while preserving a clear healthy signal.',
  },
  {
    name: 'Capture the room tone',
    text: 'Stay quiet and press Capture three seconds. Compare the saved noise floor after changing room, device, gain, or processing settings.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'How To Test A Microphone In Your Browser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This microphone test answers the first troubleshooting questions without installing an app: does the selected input produce a signal, is the level usable, do loud moments clip, what does the room tone look like, and which frequencies are active? Press Start microphone, speak from your real working position, and read the live observatory. The analyser runs on the current page and does not make an audio file.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Private local analysis',
      badge: 'No recording',
      html: '<p>Your browser asks for microphone permission because raw input is sensitive. This tool connects that stream to a local analyser only. It does not send samples to a server and it stops every media track when you press Stop microphone.</p>',
    },
    {
      type: 'title',
      text: 'Reading Microphone Level In dBFS',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The large live value is an RMS estimate, which represents the energy of the current time window. Peak shows the largest absolute sample in that window. Both use dBFS, where zero is digital full scale and quieter signals use increasingly negative values. A healthy badge is a practical guide for this test, not a universal recording standard, because speech style, microphone type, preamp gain, and the destination application all matter.',
    },
    {
      type: 'table',
      headers: ['Reading', 'What it tells you', 'What to try'],
      rows: [
        ['Silent or below minus 60 dBFS', 'The selected input is not producing a useful test signal', 'Check the device, mute switch, permission, and operating system input level'],
        ['Quiet below minus 35 dBFS', 'The signal may be hard to use without extra gain', 'Move closer or raise input gain while watching the peak'],
        ['Healthy', 'The current signal has useful level and visible headroom', 'Repeat with your loudest expected voice or passage'],
        ['Hot above minus 6 dBFS peak', 'There is little remaining digital headroom', 'Lower gain or increase distance before a loud moment'],
        ['Clipping near zero dBFS', 'One or more samples reached the digital ceiling', 'Reduce gain and repeat the loudest part of the test'],
      ],
    },
    {
      type: 'title',
      text: 'Using The Live Microphone Spectrum',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The curved spectrum maps analyser bins from 60 Hz to 12 kHz on a logarithmic arc, while the luminous ribbon shows the current waveform. Use the display to confirm that bass, midrange, and high frequency activity reaches the browser. A moving dominant frequency is normal for speech and music. The display is most useful for comparisons made with the same microphone, gain, room, browser, and speaking distance.',
    },
    {
      type: 'tip',
      title: 'Compare one change at a time',
      html: 'Capture room tone, change one setting, then capture it again from the same position. Operating system noise suppression and automatic gain control can make a microphone look quieter while also changing its sound, so listen in your real application as well as reading this visual test.',
    },
    {
      type: 'title',
      text: 'Why This Is Not A Calibrated Sound Meter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Browser samples describe the digital signal after the microphone, interface, driver, and any automatic processing. They do not reveal the acoustic sound pressure at the microphone capsule. That is why this tool reports dBFS rather than dB SPL and avoids claiming a certified frequency response, self noise specification, or room noise level.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Use calibrated equipment for compliance work',
      badge: 'Practical check only',
      html: '<p>Use this tool to troubleshoot calls, streams, recordings, and device selection. Use a calibrated measurement microphone, acoustic calibrator, controlled signal, and an applicable standard when the result must support product specifications, hearing safety, regulation, or professional room analysis.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Allow the microphone',
    journeySpeak: '2. Speak naturally',
    journeyInspect: '3. Inspect level and spectrum',
    startMicrophone: 'Start microphone',
    stopMicrophone: 'Stop microphone',
    deviceLabel: 'Input device',
    defaultDevice: 'Default microphone',
    statusIdle: 'Waiting for permission',
    statusRequesting: 'Requesting microphone access',
    statusLive: 'Listening locally',
    statusUnsupported: 'Microphone access is unavailable in this browser',
    statusDenied: 'Microphone permission was not granted',
    statusError: 'The microphone could not be started',
    levelLabel: 'Live level',
    peakLabel: 'Peak',
    frequencyLabel: 'Dominant frequency',
    noiseFloorLabel: 'Room tone',
    captureNoise: 'Capture three seconds',
    capturingNoise: 'Stay quiet while the room tone is measured',
    noiseCaptured: 'Room tone captured',
    roomToneHint: 'Keep your normal gain and position, then stay quiet for three seconds.',
    unmeasured: 'Not measured',
    noSignalLevel: 'No signal',
    noSignalPeak: 'No signal',
    noSignalFrequency: 'No signal',
    silentSignal: 'No useful signal',
    quietSignal: 'Quiet input',
    healthySignal: 'Healthy headroom',
    hotSignal: 'Hot signal',
    clippingSignal: 'Clipping detected',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Live logarithmic microphone spectrum and waveform',
    limitationTitle: 'A browser is not a calibrated sound meter',
    limitationText: 'Readings are digital dBFS after device processing, not acoustic dB SPL. The live signal stays in this browser and is not uploaded. Use the result to compare this setup, not to certify a microphone or room.',
  },
};
