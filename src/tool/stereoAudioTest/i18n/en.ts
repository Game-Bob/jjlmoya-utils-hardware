import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'stereo-audio-test';
const title = 'Stereo Audio Test';
const description = 'Check left and right speaker channels, stereo balance, wiring direction, and headphone imaging with browser-generated test tones.';

const faqData = [
  {
    question: 'How do I test left and right speakers online?',
    answer: 'Start with low volume, press Left, then Right. The left tone should come only from the left speaker or earcup, and the right tone should come only from the right side. Use Center to confirm both sides play evenly.',
  },
  {
    question: 'Why do both speakers play during the left or right test?',
    answer: 'Some devices, operating systems, Bluetooth speakers, mono modes, accessibility settings, or audio enhancements downmix stereo to mono. Check system balance, mono audio settings, cable wiring, and app-specific audio effects.',
  },
  {
    question: 'Can this diagnose swapped speaker cables?',
    answer: 'Yes. If the Left button plays from the right speaker and the Right button plays from the left speaker, the output path is reversed somewhere between the computer, cable, amplifier, speakers, or headphones.',
  },
  {
    question: 'Is a sine tone safe for speakers and headphones?',
    answer: 'A short sine tone at moderate volume is normally safe. Avoid high volume, long sessions, or very high frequencies, especially with headphones, small laptop speakers, or unknown amplifiers.',
  },
  {
    question: 'Does the browser affect stereo testing?',
    answer: 'The tool uses the Web Audio API StereoPannerNode. It is reliable in modern browsers, but final output still depends on operating system routing, drivers, Bluetooth codecs, external DACs, and speaker wiring.',
  },
];

const howToData = [
  {
    name: 'Set a quiet starting volume',
    text: 'Lower your system volume and use the tool volume slider before playing any test tone.',
  },
  {
    name: 'Test each side',
    text: 'Press Left and Right. Each tone should be clearly isolated to the matching speaker or headphone side.',
  },
  {
    name: 'Check center balance',
    text: 'Press Center. The tone should appear centered between both speakers, not pulled strongly to one side.',
  },
  {
    name: 'Use the sweep',
    text: 'Run Sweep to hear movement across the stereo field and spot dropouts, reversed wiring, or uneven imaging.',
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
  inLanguage: 'en',
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
      text: 'Left and Right Speaker Test Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Use this online stereo audio test to check whether your left and right speakers, headphones, earbuds, soundbar, DAC, amplifier, or monitor speakers are routed correctly. The tool plays browser-generated tones through the left channel, right channel, both channels, or a moving stereo sweep so you can quickly detect reversed channels, mono output, weak speakers, balance problems, and wiring mistakes without installing audio software.',
    },
    {
      type: 'paragraph',
      html: 'A correct stereo setup preserves direction: the left test tone should come from the left speaker or left earcup only, the right test tone should come from the right side only, and the center tone should sound equally balanced between both sides. If the sound appears on the wrong side, both sides at once, or much louder on one side, the issue is usually in output settings, mono accessibility mode, cable wiring, Bluetooth routing, speaker placement, or audio enhancement software.',
    },
    {
      type: 'table',
      headers: ['Button', 'What you should hear', 'Use it to diagnose'],
      rows: [
        ['Left', 'Tone only from the left speaker, left headphone driver, or left earbud.', 'Reversed cables, wrong speaker placement, mono output, or channel remapping.'],
        ['Right', 'Tone only from the right speaker, right headphone driver, or right earbud.', 'Swapped outputs, incorrect adapter wiring, or driver effects changing channel order.'],
        ['Center', 'Tone appears in the middle because both channels play evenly.', 'System balance offset, one weak speaker, blocked earbud mesh, or unequal amplifier gain.'],
        ['Sweep', 'Tone moves smoothly across the stereo image from side to side.', 'Dropouts, unstable Bluetooth links, phase issues, virtual surround artifacts, or uneven imaging.'],
      ],
    },
    {
      type: 'title',
      text: 'Most Common Stereo Problems This Test Finds',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Left and right channels are reversed: the left button plays on the right side, or the right button plays on the left side.',
        'Stereo has collapsed to mono: left, right, and center all sound almost identical from both speakers.',
        'One side is quieter: center audio pulls toward one speaker even when the system balance slider looks centered.',
        'Headphones are wired or worn incorrectly: game footsteps, music panning, and video calls feel spatially confusing.',
        'Bluetooth or USB audio is being processed: soundbars, docks, headsets, and TV modes may downmix or virtualize the signal.',
        'Speaker placement is misleading: a speaker too close to a wall, blocked by furniture, or farther away can make the center image drift.',
      ],
    },
    {
      type: 'title',
      text: 'How to Fix Reversed Left and Right Audio',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'For wired speakers, swap the left and right plugs at the amplifier, audio interface, DAC, or computer output.',
        'For passive speakers, confirm the left speaker is connected to the left amplifier terminals and the right speaker to the right terminals.',
        'For headphones, check that they are worn in the correct orientation and test without adapters, extension cables, or splitter cables.',
        'For Windows or macOS, check output balance and disable mono audio in accessibility or sound settings.',
        'For Bluetooth speakers and soundbars, disable virtual surround, party mode, dual audio, room correction, or TV sound modes while testing.',
        'For audio interfaces, DAWs, and mixers, check channel routing, pan controls, monitor mix settings, and any software mixer supplied by the manufacturer.',
      ],
    },
    {
      type: 'title',
      text: 'How to Interpret the Center Speaker Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The center tone is not a separate physical center speaker in a normal two-channel setup. It is the same signal sent evenly to left and right. On headphones it should feel centered inside your head; on speakers it should form a phantom center between them. If it leans left or right, check system balance, speaker distance, speaker angle, volume knobs, amplifier trim, earbud fit, dust in the driver grille, and whether one speaker is partially blocked or failing.',
    },
    {
      type: 'table',
      headers: ['What happens', 'Likely cause', 'Next step'],
      rows: [
        ['Left plays from both sides', 'Mono audio, downmixing, or spatial audio processing.', 'Disable mono output and virtual surround, then test again.'],
        ['Left plays from the right side', 'Channels are swapped somewhere in the playback chain.', 'Swap cables or change channel routing in the driver, mixer, or amplifier.'],
        ['Center is louder on one side', 'Balance, placement, driver damage, ear fit, or blocked speaker grille.', 'Compare with another headset or speaker pair and inspect physical placement.'],
        ['Sweep jumps or disappears', 'Bluetooth instability, audio enhancement artifacts, or a failing cable/connector.', 'Test with wired output or another cable to isolate the weak link.'],
      ],
    },
    {
      type: 'title',
      text: 'Headphone and Earbud Left Right Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For headphones and earbuds, the left/right test is especially useful before gaming, editing audio, watching films, or joining calls. Put the headset on normally, start at low volume, press Left and Right, and confirm each tone lands on the correct ear. If both sides sound the same, your device may be using mono audio. If one side is dull or quieter, clean the earbud mesh, reseat the ear tip, check the cable, and compare against another output device.',
    },
    {
      type: 'title',
      text: 'Safe Audio Testing Tips',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Start with low system volume, especially on headphones.',
        'Use Loop until Stop only when you actively need continuous sound for cable tracing, placement, or balance adjustment.',
        'Keep test tones short when using small speakers; continuous sine waves can become uncomfortable quickly.',
        'Avoid maximum gain on small laptop speakers and unknown amplifiers.',
        'Do not place headphones on your ears until you have confirmed the volume is safe.',
        'After changing cables or settings, repeat left, right, center, and sweep tests in that order.',
        'For studio or home theater calibration, combine this quick test with an SPL meter or the receiver calibration routine.',
      ],
    },
    {
      type: 'title',
      text: 'Fast Diagnosis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If left and right are swapped, inspect physical wiring first because that is the fastest fix for desktop speakers, amplifiers, and audio interfaces. If both buttons play from both sides, look for mono output, spatial audio, virtual surround, or a device that intentionally downmixes stereo. If center is off-center but left and right are correctly routed, the problem is usually balance, placement, ear fit, blocked grilles, or unequal speaker output.',
    },
  ],
  ui: {
    left: 'Left',
    center: 'Center',
    right: 'Right',
    sweep: 'Sweep',
    stop: 'Stop',
    volume: 'Volume',
    duration: 'Duration',
    infiniteMode: 'Loop until Stop',
    infiniteModeHint: 'Keep any channel playing for continuous testing.',
    secondsUnit: 's',
    hertzUnit: 'Hz',
    tone: 'Tone',
    balance: 'Balance',
    activeIdle: 'Ready',
    activeLeft: 'Playing left channel',
    activeCenter: 'Playing centered tone',
    activeRight: 'Playing right channel',
    activeSweep: 'Sweeping across stereo field',
    safety: 'Start low. Test tones can be loud through headphones, amplifiers, and small laptop speakers.',
    leftSpeaker: 'Left speaker',
    rightSpeaker: 'Right speaker',
    centerLine: 'Stereo field',
  },
};
