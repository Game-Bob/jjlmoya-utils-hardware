import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'speaker-phase-tester';
const title = 'Speaker Phase Tester';
const description =
  'Play in-phase and 180 degree inverted stereo test signals in your browser to check speaker polarity, wiring mistakes, and phase cancellation.';

const faqData = [
  {
    question: 'How do I know if my speaker polarity is correct?',
    answer:
      'Play the normal signal, then the inverted signal from the same listening position. With correctly wired speakers, the inverted mode should sound weaker, hollow, or less centered because the left and right channels partially cancel in the room. If inverted sounds fuller or louder, one speaker may already be wired with reversed polarity.',
  },
  {
    question: 'What does inverted phase mean in this test?',
    answer:
      'The tool sends the same signal to both channels, then multiplies one channel by -1 in inverted mode. That flips the waveform 180 degrees without downloading an audio file. The physical result is equivalent to reversing positive and negative on one speaker for the test signal.',
  },
  {
    question: 'Can this test prove every speaker in a home theater is wired correctly?',
    answer:
      'It is best for checking a stereo pair or the front left and right speakers of a larger system. For full surround systems, test pairs one at a time and combine the result with your AV receiver channel test, distance calibration, and an SPL or measurement microphone when available.',
  },
  {
    question: 'Should I use pink noise or a sine tone?',
    answer:
      'Pink noise is usually easier for polarity checks because it covers a broad range of frequencies and makes cancellation obvious. A sine tone can help you focus on one frequency, but room modes can make a single tone misleading.',
  },
  {
    question: 'Is this safe for speakers and headphones?',
    answer:
      'Yes at moderate levels. Start low, avoid maximum amplifier gain, and do not run continuous tones loudly through headphones, small laptop speakers, or unknown speakers. Stop immediately if you hear distortion or mechanical stress.',
  },
];

const howToData = [
  {
    name: 'Place yourself at the listening position',
    text: 'Sit where you normally listen so the acoustic cancellation you hear matches the actual room and speaker placement.',
  },
  {
    name: 'Play the normal signal',
    text: 'Press Reproduce In Phase and note the center image, loudness, and tonal body.',
  },
  {
    name: 'Play the inverted signal',
    text: 'Press Reproduce Out Of Phase. Correctly wired speakers should usually sound more diffuse, hollow, or quieter.',
  },
  {
    name: 'Inspect wiring if the result is reversed',
    text: 'If inverted sounds stronger than normal, check positive and negative terminals on one speaker, amplifier binding posts, adapters, and wall plates.',
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
  step: howToData.map((step, index) => ({
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

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Online Speaker Phase And Polarity Test', level: 2 },
    {
      type: 'paragraph',
      html: 'This speaker phase tester compares a normal stereo signal with a version where one channel is inverted by <strong>180 degrees</strong>. The practical goal is simple: confirm whether the two speakers in a pair move together when they should. When the left and right speakers are wired with the same polarity, bass and midrange energy reinforce between them and the center image feels stable. When one speaker is wired backward, the cones move in opposite directions for the same waveform, which can make vocals lose body, bass disappear, and stereo placement feel strangely wide or hollow.',
    },
    {
      type: 'paragraph',
      html: 'The test is generated locally in the browser. It does not stream a heavy audio file. In normal mode, both channels receive the same pink noise or sine tone. In inverted mode, one channel is multiplied by <code>-1</code>, which creates a mathematically inverted waveform. If your real speaker wiring is correct, that artificial inversion should create obvious cancellation. If your physical wiring is already reversed, the inverted button can partly correct the mistake, so it may sound louder, more solid, or more centered than the normal button.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Fast interpretation',
      badge: 'Core rule',
      html: '<p>If <strong>Out Of Phase</strong> sounds thin, distant, hollow, or quieter than <strong>In Phase</strong>, your left/right pair is probably wired correctly. If Out Of Phase sounds fuller or louder, inspect the red and black terminals on one speaker, the amplifier, banana plugs, wall plates, car audio harness, or any adapter in the chain.</p>',
    },
    {
      type: 'table',
      headers: ['What you hear', 'Likely meaning', 'Next step'],
      rows: [
        ['Normal is full, inverted is hollow', 'The two speakers are probably wired with matching polarity.', 'Leave wiring as-is and continue with placement or calibration.'],
        ['Inverted is fuller than normal', 'One speaker may be physically wired backward.', 'Check positive and negative terminals on only one side of the pair.'],
        ['Both modes sound almost identical', 'Speakers may be too far apart, room reflections dominate, or output is mono.', 'Move to the listening seat, disable mono processing, and try pink noise.'],
        ['Both modes sound weak in bass', 'Room cancellation, subwoofer phase, crossover, or placement may be the bigger issue.', 'Run a bass sweep and test subwoofer polarity separately.'],
      ],
    },
    { type: 'title', text: 'Why Reversed Speaker Polarity Sounds Wrong', level: 2 },
    {
      type: 'paragraph',
      html: 'A loudspeaker turns an electrical waveform into cone movement. For a positive pressure wave, two matching speakers should generally push air in the same direction at the same time. If one speaker has its positive and negative leads swapped, that speaker moves inward while the other moves outward for the same signal. In a stereo pair, this does not simply make the sound quieter everywhere; the room, speaker spacing, wavelength, and listening position decide where cancellation is strongest. The most noticeable symptoms are usually reduced bass, a weak phantom center, and vocals that feel detached from the space between the speakers.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Lead vocals and dialogue should lock near the center when both speakers play the same mono signal.',
        'Kick drum, bass guitar, and lower piano notes should have body instead of sounding lightweight.',
        'The stereo image should not feel artificially wide when the source is mono.',
        'Moving your head slightly should not make the center image collapse completely.',
        'A correctly wired pair should make the inverted test sound less natural than the normal test.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polarity', definition: 'The positive or negative orientation of the electrical signal feeding a speaker driver.' },
        { term: 'Phase', definition: 'The timing relationship between two waveforms, often described in degrees across one cycle.' },
        { term: '180 degree inversion', definition: 'A waveform flipped vertically, so positive pressure becomes negative pressure at the same moment.' },
        { term: 'Cancellation', definition: 'A reduction in sound level when two similar waveforms arrive with opposite polarity or timing.' },
        { term: 'Phantom center', definition: 'The apparent center image created when identical sound reaches the left and right speakers evenly.' },
      ],
    },
    {
      type: 'tip',
      title: 'Do not test from beside one speaker',
      html: 'Sit at the normal listening position. Phase cancellation is spatial: a result heard one foot from the left speaker can be completely different from the result at the sofa, studio chair, or driver seat.',
    },
    { type: 'title', text: 'Pink Noise Versus Sine Tone For Polarity Checks', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Pink noise',
          description: 'Broadband noise with more energy in lower octaves than white noise. It makes overall tonal body, center image, and cancellation easier to judge by ear.',
          highlight: true,
          points: ['Best first choice for quick polarity checks.', 'Less likely to be dominated by one room mode.', 'Useful for home cinema, studio monitors, and car audio.'],
        },
        {
          title: 'Sine tone',
          description: 'A single frequency tone that can expose cancellation at one chosen frequency but can also exaggerate room peaks and nulls.',
          points: ['Useful when chasing a specific crossover or bass problem.', 'Can be misleading if the room has a strong null at that frequency.', 'Keep volume modest because pure tones become fatiguing.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'For a one-click polarity check, start with pink noise. Pink noise spreads energy across the spectrum, so you are judging the speaker pair as a system rather than judging one frequency that may be sitting in a room null. Use the sine control only when you want to focus on a known problem band, such as a vocal-range cancellation around 300 Hz or a bass handoff issue around 80 Hz. If the sine result changes dramatically when you move your head a few inches, the room is influencing that frequency strongly.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180 deg', label: 'Mathematical inversion applied to one channel', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Gain multiplier used for the inverted channel', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: 'Audio downloads required for the test signal', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Home Theater And Studio Monitor Checklist', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Home cinema front speakers',
      html: 'Use the normal and inverted buttons with only the front left and front right speakers active. Disable upmixers, virtual surround, night mode, dialogue enhancement, and room correction if you want to isolate raw wiring first. After confirming polarity, enable calibration again and verify that dialogue stays centered.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Studio monitors',
      html: 'Feed the browser through the same interface outputs used by your DAW. Check that both balanced cables are wired consistently and that monitor controller polarity switches are not engaged. A reversed monitor can make mono compatibility decisions unreliable during mixing.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Car audio',
      html: 'Car cabins create severe reflections and seat asymmetry, so listen from the driver seat and repeat from the passenger seat if needed. Factory harness adapters, door speaker replacements, and amplifier installs are common places for positive and negative leads to be swapped.',
    },
    {
      type: 'proscons',
      title: 'Browser phase test strengths and limits',
      items: [
        { pro: 'Immediate check without installing software or downloading audio files.', con: 'It cannot identify which physical cable is wrong unless you inspect the system.' },
        { pro: 'Works well for a stereo pair, headphones, nearfields, and quick install checks.', con: 'Room acoustics can hide or exaggerate the effect at some seats.' },
        { pro: 'Pink noise makes broad cancellation easier to hear than a single test tone.', con: 'Multi-speaker surround systems still need channel-by-channel verification.' },
      ],
    },
    { type: 'title', text: 'How To Fix A Failed Polarity Test', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Turn the amplifier off before changing speaker wires or banana plugs.',
        'Pick one speaker in the pair and trace red-to-red and black-to-black from amplifier to speaker.',
        'Inspect any wall plate, spring terminal, adapter, speakON connector, or car harness between the amplifier and speaker.',
        'If the speaker wire has a stripe, rib, printed text, or copper/silver side, use the same conductor for positive at both ends.',
        'After changing one side, rerun normal and inverted modes from the listening position.',
        'If the result is still ambiguous, temporarily place the speakers closer together and repeat at low volume.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Subwoofers need a separate phase check',
      badge: 'Bass systems',
      html: '<p>This tool compares a left/right pair. A subwoofer crossover can be electrically correct yet acoustically out of phase because distance, DSP delay, crossover slope, and placement shift timing. Use this test for the main pair, then use a crossover sweep or receiver calibration for the subwoofer handoff.</p>',
    },
    {
      type: 'message',
      title: 'Practical listening rule',
      ariaLabel: 'Practical listening rule for phase testing',
      html: 'For real installations, the correct setting is the one that makes mono material sound focused, full, and stable in the actual listening position. The inverted mode is a diagnostic contrast, not a listening mode.',
    },
    {
      type: 'summary',
      title: 'Speaker polarity diagnosis summary',
      items: [
        'Normal should sound stronger and more centered than inverted when the speaker pair is wired correctly.',
        'Inverted sounding stronger is a strong clue that one physical speaker connection is reversed.',
        'Pink noise is the best first signal because it reduces the chance of judging only one room frequency.',
        'Sine tones are useful for focused troubleshooting but can be dominated by room modes.',
        'Always lower volume before changing modes, especially on headphones or high-power amplifiers.',
      ],
    },
  ],
  ui: {
    normal: 'In Phase',
    inverted: 'Inverted',
    stop: 'Stop',
    pause: 'Pause',
    volume: 'Output level',
    noiseColor: 'Test signal',
    pinkNoise: 'Pink noise',
    sineTone: 'Sine tone',
    frequency: 'Tone frequency',
    statusReady: 'Ready',
    statusNormal: 'In phase',
    statusInverted: 'Inverted',
    instruction:
      'Inverted should sound thinner. Louder means check wiring.',
    channelLabel: 'Speaker phase tester',
    leftChannel: 'Left channel',
    rightChannel: 'Right channel',
    leftShort: 'L',
    rightShort: 'R',
    polarityNormal: '0 deg aligned',
    polarityInverted: '180 deg inverted',
    safety: 'Start low. Polarity tests can become loud through amplifiers, studio monitors, car audio systems, and headphones.',
  },
};
