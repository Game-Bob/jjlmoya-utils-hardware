import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'audio-delay-test';
const title = 'Audio Delay Test';
const description = 'Test perceived audio delay on speakers, headphones, Bluetooth devices, and video playback with a local browser pulse test.';

const faq = [
  {
    question: 'What does this audio delay test measure?',
    answer: 'The optional microphone mode estimates the time between a browser scheduled click and the click picked up by your microphone. The manual mode helps you tune visual and audio alignment by ear. Neither mode is a laboratory measurement of every part of your device chain.',
  },
  {
    question: 'Can I test Bluetooth latency without a microphone?',
    answer: 'Yes. Start the pulse sequence, choose Bluetooth, and move the alignment slider until the flash and click appear to coincide. The result is saved as an alignment correction rather than being presented as a precise measured latency.',
  },
  {
    question: 'Why does the microphone mode need permission?',
    answer: 'The browser needs access to the microphone to hear the test click after it has travelled through your speakers or another acoustic path. Audio is processed in the browser and is not uploaded by this tool.',
  },
  {
    question: 'Why can the microphone result be inaccurate?',
    answer: 'Room reflections, microphone processing, automatic gain control, operating system buffering, browser scheduling, and the distance between the speaker and microphone can all change the result. Treat the number as an estimate for the current setup.',
  },
  {
    question: 'Which test mode should I choose?',
    answer: 'Choose Speakers for room playback, Wired headphones for a direct headphone path, Bluetooth for wireless headphones or speakers, and Video sync when checking a player or display combination.',
  },
  {
    question: 'Does the test send my microphone audio to a server?',
    answer: 'No. The microphone stream is read locally by the browser analyser and the test does not upload an audio recording.',
  },
];

const howTo = [
  {
    name: 'Choose the playback path',
    text: 'Select speakers, wired headphones, Bluetooth, or video sync so the report describes the setup you are checking.',
  },
  {
    name: 'Start with the manual pulse',
    text: 'Press Start test and listen for the short click while watching the cyan visual pulse. Use the calibration slider until they appear aligned.',
  },
  {
    name: 'Add microphone measurement when useful',
    text: 'Press Enable microphone, allow permission, place the microphone where the sound is heard, and run the pulse sequence again.',
  },
  {
    name: 'Read the result with its limitation',
    text: 'Use the median delay and confidence only as a setup estimate. Repeat the test after changing device, browser, volume, or room position.',
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

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Audio Delay Test For Bluetooth And Video Sync', level: 2 },
    {
      type: 'paragraph',
      html: 'This browser based audio delay test helps you inspect the gap between a visual cue and a sound on the device you are using now. It is useful for Bluetooth headphones, wireless speakers, wired headphones, room playback, and video sync checks. The tool generates a short click locally instead of asking you to download a test file.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Start without microphone access',
      badge: 'Private by default',
      html: '<p>The manual pulse test works without a microphone. Watch the cyan visual marker and listen for the amber click, then move the alignment slider until they feel simultaneous. This produces a useful setup correction without pretending to identify a precise hardware latency.</p>',
    },
    {
      type: 'title',
      text: 'How To Test Bluetooth Audio Latency',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Select Bluetooth and set a comfortable listening level before starting.',
        'Run the pulse sequence from the same browser and device you use for playback.',
        'Compare the visual pulse with the click rather than judging a long piece of music.',
        'Move the alignment slider until the two cues meet, then note the signed correction.',
        'Repeat after changing codec, operating system, browser, volume mode, or distance.',
      ],
    },
    {
      type: 'table',
      headers: ['Mode', 'Best for', 'Main limitation'],
      rows: [
        ['Speakers', 'Room playback and television speakers', 'Room distance and reflections affect the acoustic path.'],
        ['Wired headphones', 'Direct headphone output', 'The microphone may not hear a closed headphone signal.'],
        ['Bluetooth', 'Wireless headphones and speakers', 'Codec buffering can change between devices and apps.'],
        ['Video sync', 'Display and player alignment', 'The player may add its own video frame and rendering delay.'],
      ],
    },
    {
      type: 'title',
      text: 'Optional Microphone Measurement',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When microphone access is available, the tool watches the local microphone analyser for each click and records the elapsed time from the scheduled audio event to the detected acoustic peak. The result uses the median of the samples because one reflection or operating system interruption should not dominate the estimate. The confidence badge also considers the spread between the tenth and ninetieth percentiles.',
    },
    {
      type: 'tip',
      title: 'Keep the microphone where you actually listen',
      html: 'For speakers, place the microphone at the listening position and keep the room quiet. For a video sync check, use the same speaker and display arrangement that produces the problem. Microphone processing and room reflections can be larger than the delay you are trying to compare.',
    },
    {
      type: 'title',
      text: 'Why Browser Audio Delay Results Vary',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Audio delay is a path rather than a single permanent number. The browser schedules audio against an AudioContext clock, the operating system buffers it, the device may encode and decode it, and the speaker or headphone driver turns it into sound. A microphone adds its own capture and processing path. The test therefore describes the current browser, device, room, and settings instead of making a universal claim about a product.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Do not treat this as a specification',
      badge: 'Estimate only',
      html: '<p>Use the result to compare setups or troubleshoot an obvious sync problem. It does not replace a manufacturer specification, a calibrated measurement system, or a professional audio interface loopback test.</p>',
    },
  ],
  ui: {
    badge: 'Latency observatory',
    modeLabel: 'Playback path',
    modeSpeakers: 'Speakers',
    modeWired: 'Wired',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Video sync',
    startTest: 'Start test',
    stopTest: 'Stop test',
    enableMic: 'Enable microphone',
    micEnabled: 'Microphone ready',
    calibrationTitle: 'Alignment correction',
    calibrationHint: 'Move the slider until the flash and click meet',
    calibrationEarly: 'Audio leads',
    calibrationLate: 'Visual leads',
    calibrationCenter: 'Aligned',
    visualLane: 'Visual',
    audioLane: 'Audio',
    statusReady: 'Ready',
    statusRunning: 'Pulse sequence running',
    statusWaiting: 'Waiting for a pulse',
    resultTitle: 'Current reading',
    latencyLabel: 'Measured delay',
    alignmentLabel: 'Alignment correction',
    confidenceLabel: 'Confidence',
    samplesLabel: 'Samples',
    notMeasured: 'Not measured',
    manualConfidence: 'Manual only',
    lowConfidence: 'Low confidence',
    mediumConfidence: 'Medium confidence',
    highConfidence: 'High confidence',
    noMic: 'Microphone input is unavailable in this browser',
    permissionDenied: 'Microphone permission was not granted',
    limitationTitle: 'Read the result as a setup estimate',
    limitationText: 'Room reflections, microphone processing, browser scheduling, and device buffering can all change the observed delay. No audio is uploaded.',
    copyReport: 'Copy report',
    copied: 'Copied',
    reset: 'Reset',
    safety: 'Start at a low volume. Stop if the signal is uncomfortable or your equipment distorts.',
    pulse: 'SYNC',
  },
};
