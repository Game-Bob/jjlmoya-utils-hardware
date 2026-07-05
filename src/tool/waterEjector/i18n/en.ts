import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'water-ejector-speaker-cleaner';
const title = 'Water Ejector Speaker Cleaner';
const description =
  'Play a low-frequency 165 Hz tone to help push water, dust or loose debris out of phone, tablet and laptop speakers.';

const faqData = [
  {
    question: 'What frequency should I use to eject water from a speaker?',
    answer:
      'A low tone around 165 Hz is a practical starting point because it moves small speaker diaphragms visibly without relying on piercing high frequencies. Some devices respond better between 145 Hz and 190 Hz, so the tool includes all three presets.',
  },
  {
    question: 'Can a sound tone remove all water from my phone?',
    answer:
      'No. It can help shake droplets out of the speaker grille or acoustic chamber, but it cannot dry liquid behind seals, inside ports or under a display. If the device was submerged, power it down and follow the manufacturer drying guidance.',
  },
  {
    question: 'Is this safe for speakers?',
    answer:
      'Use short sessions, start below maximum volume and stop if you hear scraping, rattling or distortion. A tiny phone speaker is not designed for long high-output bass playback, so repeated short cycles are safer than one long blast.',
  },
  {
    question: 'Why does my speaker sound muffled after getting wet?',
    answer:
      'A water film adds mass and damping to the speaker diaphragm and can block the grille openings. That reduces treble, weakens speech clarity and makes bass sound fuzzy until the droplets move or evaporate.',
  },
  {
    question: 'Should I use rice after my phone gets wet?',
    answer:
      'Rice is not a reliable repair method and can leave starch or particles in ports. Use airflow, absorbent lint-free cloth and manufacturer instructions instead. Sound ejection is only for the speaker outlet, not the whole device.',
  },
];

const howToData = [
  {
    name: 'Remove cases and face the speaker downward',
    text: 'Take off any case that covers the grille, hold the device so gravity helps droplets leave the speaker opening, and keep ports unobstructed.',
  },
  {
    name: 'Start with the standard 165 Hz preset',
    text: 'Press Start and let the tone run for 30 seconds. The diaphragm movement can dislodge droplets trapped in the grille mesh or shallow speaker chamber.',
  },
  {
    name: 'Try gentle or deep presets if needed',
    text: 'If the sound remains muffled, test 145 Hz or 190 Hz for a short cycle. Different speaker sizes resonate at different points.',
  },
  {
    name: 'Stop if the speaker distorts',
    text: 'Lower volume or stop immediately if the tone becomes harsh, buzzy or mechanically strained. Distortion means the driver is being pushed too hard.',
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
  inLanguage: 'en',
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
    { type: 'title', text: 'How a Water Ejector Tone Works', level: 2 },
    {
      type: 'paragraph',
      html: 'A phone speaker is a tiny moving diaphragm. When a low-frequency tone plays, the diaphragm moves forward and backward many times per second. At <strong>165 Hz</strong>, that movement happens 165 times every second. If water is sitting on the grille or trapped just inside the acoustic outlet, the moving air can break the droplet surface tension and push it toward the opening.',
    },
    {
      type: 'paragraph',
      html: 'The process is mechanical, not chemical. The sound does not evaporate liquid and it does not make internal electronics waterproof. It is best understood as a controlled vibration cycle for the speaker outlet, useful when speech, notifications or music sound muffled after rain, a splash, a shower room or a quick rinse.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'standard starting frequency', icon: 'mdi:sine-wave' },
        { value: '30 s', label: 'short first cleaning cycle', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'practical tuning range', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'What the tone can and cannot do',
      badge: 'Scope',
      icon: 'mdi:information',
      html: 'The tone can help move loose droplets in the speaker path. It cannot remove liquid from charging ports, SIM trays, microphones, camera modules, adhesive seams or the space beneath the display.',
    },
    { type: 'title', text: 'When to Use It', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'The speaker sounds quiet, muffled or bubbly after a splash.',
        'One side of a stereo phone speaker sounds weaker than the other.',
        'A laptop or tablet speaker grille collected droplets after cleaning.',
        'Dust or lint is visibly loose on the grille and normal playback sounds dull.',
        'The device is working normally, charges normally and shows no warning about liquid in a port.',
      ],
    },
    {
      type: 'tip',
      title: 'Best physical position',
      html: 'Face the speaker grille downward or slightly downward. The tone provides movement, but gravity decides where the freed droplet goes. Removing a case also matters because many cases create a shallow pocket that catches water near the outlet.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Why phone speakers are affected quickly',
      html: 'Modern phones use compact high-excursion drivers and tiny acoustic channels. A droplet that would be harmless on a large desktop speaker can cover a meaningful part of a phone grille, changing pressure and damping the diaphragm enough to make voices sound distant.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Likely cause', 'What to try'],
      rows: [
        ['Muffled speech', 'Water film over grille', 'Run 165 Hz for 30 seconds, speaker facing down'],
        ['Buzzing during the tone', 'Droplet moving or driver overdriven', 'Lower volume; stop if buzzing remains'],
        ['One speaker quieter', 'Only one outlet is blocked', 'Rotate the device so that outlet points downward'],
        ['No sound at all', 'Muted output, Bluetooth route or hardware fault', 'Check audio route before repeating cycles'],
      ],
    },
    { type: 'title', text: 'Choosing the Right Frequency', level: 2 },
    {
      type: 'paragraph',
      html: 'There is no universal magic number because speaker size, grille shape, waterproof membrane design and case geometry differ. The reason <strong>165 Hz</strong> is popular is that it sits low enough to create visible cone travel on many small speakers while remaining within a range most devices can reproduce loudly.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz gentle',
          description: 'Useful for very small or strained speakers where the standard tone sounds rough.',
          icon: 'mdi:leaf',
          points: ['Lower pitch', 'Less aggressive movement', 'Good first retry'],
        },
        {
          title: '165 Hz standard',
          description: 'Balanced starting point for phones, tablets and many laptop speaker openings.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Default preset', 'Strong diaphragm travel', 'Best first cycle'],
        },
        {
          title: '190 Hz deep clean',
          description: 'A slightly higher push that may work when a particular speaker resonates above 165 Hz.',
          icon: 'mdi:waves',
          points: ['Tighter vibration', 'Useful second pass', 'Avoid long cycles'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Low frequencies versus high frequencies',
      items: [
        { pro: 'Low tones move more air and diaphragm distance on small speakers.', con: 'They can distort sooner at maximum volume.' },
        { pro: 'High tones are easier to hear through some grilles.', con: 'They usually move less air and can be unpleasant or inaudible to some users.' },
        { pro: 'A short low tone is easy to judge by ear.', con: 'It should not be looped for many minutes without pauses.' },
      ],
    },
    {
      type: 'message',
      title: 'Frequency tuning rule',
      ariaLabel: 'Frequency tuning rule',
      html: 'If the speaker sounds clean after one 30-second cycle, stop. More cycles are not a maintenance routine; they are only a recovery aid after liquid or debris reaches the speaker opening.',
    },
    { type: 'title', text: 'Safe Cleaning Procedure', level: 2 },
    {
      type: 'paragraph',
      html: 'Begin below maximum system volume, especially on laptops and tablets with larger speakers. Increase only until the tone is clearly audible and the device vibrates slightly. If you hear a sharp rattle, scraping sound or sudden volume drop, stop the tool and let the device dry naturally.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Disconnect headphones and Bluetooth speakers so the tone plays through the wet speaker.',
        'Dry the outside with a lint-free cloth before playing sound.',
        'Hold the speaker outlet downward and keep your hand clear of the grille.',
        'Run 30 seconds at 165 Hz.',
        'Wait a minute, test normal speech audio, then repeat once only if needed.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Do not use heat or compressed air',
      badge: 'Avoid',
      icon: 'mdi:alert',
      html: 'Hair dryers, ovens and high-pressure compressed air can push moisture deeper, deform seals or damage membranes. The sound tone is gentler because it works from the speaker motion already designed into the device.',
    },
    {
      type: 'summary',
      title: 'Quick safety checklist',
      items: [
        'Short cycles are better than long continuous playback.',
        'Lower volume if the tone buzzes harshly.',
        'Stop if the device shows liquid detection warnings.',
        'Sound ejection helps the speaker outlet only, not the whole phone.',
      ],
    },
    { type: 'title', text: 'Water Resistance Is Not Waterproofing', level: 2 },
    {
      type: 'paragraph',
      html: 'Many phones advertise water resistance, but that rating is measured under defined laboratory conditions. Real water exposure includes movement, soap, salt, heat, pressure, age, impacts and worn seals. A speaker cleaner tone does not restore a seal and does not validate that a phone is safe to charge.',
    },
    {
      type: 'table',
      headers: ['Exposure', 'Speaker tone usefulness', 'Extra action'],
      rows: [
        ['Light rain', 'Often helpful if audio is muffled', 'Dry exterior and run one short cycle'],
        ['Clean water splash', 'Helpful for droplets near grille', 'Keep ports dry before charging'],
        ['Pool or sea water', 'Limited; residue can remain', 'Rinse only if manufacturer allows, then service if needed'],
        ['Soap, soda or coffee', 'Low; sticky residue changes the grille', 'Power down and seek cleaning guidance'],
        ['Full submersion', 'Not enough', 'Follow manufacturer emergency steps'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diaphragm', definition: 'The moving surface inside a speaker that pushes air to create sound.' },
        { term: 'Resonance', definition: 'A frequency where a physical system moves more efficiently because its shape and mass favor that vibration.' },
        { term: 'Surface tension', definition: 'The force that lets a droplet cling to a grille or membrane instead of flowing away immediately.' },
        { term: 'Acoustic chamber', definition: 'The tiny internal path that guides speaker sound from the driver to the device opening.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Why it can sound louder after cleaning',
      html: 'Water blocks high frequencies first because small wavelengths are easily scattered by grille obstructions. Once droplets move, consonants, notification chimes and voice detail often return before bass changes noticeably.',
    },
    { type: 'title', text: 'Dust and Debris Cleaning', level: 2 },
    {
      type: 'paragraph',
      html: 'The same vibration can loosen dry dust, lint or powder sitting on a speaker mesh, but it should not replace careful physical cleaning. If debris is sticky, oily or packed into the grille, vibration alone may only move it around. Use a soft dry brush around the exterior and avoid inserting metal tools into the opening.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sound vibration',
          description: 'Good for loose particles and droplets that can move freely.',
          icon: 'mdi:sine-wave',
          points: ['No contact with grille', 'Fast', 'Best for recent splashes'],
        },
        {
          title: 'Soft exterior brushing',
          description: 'Better for visible lint or dust sitting on the mesh surface.',
          icon: 'mdi:brush',
          points: ['Works without loud sound', 'Avoids overdriving speaker', 'Needs care around membranes'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'After dusty environments',
      html: 'Run the tone at moderate volume, then wipe the exterior grille with a dry microfiber cloth. Do not add alcohol or liquid cleaner unless the device maker explicitly recommends it for that surface.',
    },
    { type: 'title', text: 'Device-Specific Notes', level: 2 },
    {
      type: 'paragraph',
      html: 'Phones, tablets and laptops place speakers in different acoustic layouts. A bottom-firing phone speaker usually has a short outlet near the charging port, so water can leave quickly when the grille faces downward. A tablet may use a longer side channel, which means the tone can make the sound clearer gradually rather than in one obvious burst. A laptop speaker often fires through a keyboard deck or underside slot, so the liquid may be on a fabric layer, plastic mesh or external grille rather than directly on the driver.',
    },
    {
      type: 'paragraph',
      html: 'For a phone, rotate the device until the speaker that sounds muffled is the lowest point. For a tablet, try both portrait and landscape orientation because the blocked opening may be on a different edge than expected. For a laptop, keep the machine on a stable dry surface and avoid tilting liquid toward the keyboard, hinge or vents. The tone should help the speaker path; it should not encourage water to travel across the device.',
    },
    {
      type: 'table',
      headers: ['Device type', 'Recommended orientation', 'Cycle advice'],
      rows: [
        ['Phone', 'Speaker grille downward, case removed', 'One 30-second cycle, then test voice audio'],
        ['Tablet', 'Blocked edge facing down', 'Start at moderate volume because speakers are larger'],
        ['Laptop', 'Normal stable position unless liquid is on an external grille', 'Use lower volume and stop if chassis vibrates strongly'],
        ['Smartwatch', 'Follow manufacturer water-lock guidance first', 'Use web tone only if the browser can route sound to the watch speaker'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Bluetooth and audio routing check',
      badge: 'Before start',
      icon: 'mdi:bluetooth-audio',
      html: 'If wireless earbuds, a car system or an external speaker is connected, the tone may play through the wrong output. Disconnect Bluetooth audio before starting, then confirm a normal ringtone or short video plays from the wet speaker.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Why the microphone is different',
      html: 'A microphone port is an input path with protective mesh and a tiny pressure sensor, not a speaker diaphragm that can push air outward. Do not assume a water ejector tone will clear muffled microphone recordings. Let the device dry and avoid poking the microphone hole.',
    },
    { type: 'title', text: 'Volume, Distortion and Hearing Comfort', level: 2 },
    {
      type: 'paragraph',
      html: 'A water ejector tone is intentionally repetitive and can be uncomfortable in a quiet room. The goal is not maximum loudness; the goal is enough diaphragm movement to disturb droplets. If the tone is painful, reduce volume or place the device farther away while keeping the speaker outlet unobstructed. Hearing comfort matters because a successful cleaning cycle should take seconds, not prolonged exposure.',
    },
    {
      type: 'paragraph',
      html: 'Distortion is a useful warning sign. A clean low tone sounds steady, even if the phone body vibrates. A bad tone sounds crackly, rough, metallic or unstable. That can happen because water is moving, because the speaker is hitting its travel limit, or because the device amplifier is clipping. Lowering volume is the first correction; repeating louder is the wrong move.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Use the device volume buttons and the tool volume slider together; either one can make the output too loud.',
        'Avoid placing the speaker against a table, pillow or hand because blocked airflow increases rattling.',
        'Pause between cycles so the driver and amplifier are not held at high output continuously.',
        'If normal music still crackles after drying time, treat it as a repair symptom rather than a cleaning problem.',
      ],
    },
    {
      type: 'message',
      title: 'Comfort rule',
      ariaLabel: 'Comfort rule',
      html: 'If the tone feels too loud for your ears, it is already louder than needed for a first attempt. Water ejection depends on motion and orientation, not on punishing volume.',
    },
    { type: 'title', text: 'Troubleshooting After the Tone', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Seek repair if these signs appear',
      badge: 'Stop',
      icon: 'mdi:close-octagon',
      html: 'Stop using sound ejection if the device heats abnormally, shuts down, shows liquid warnings, has no output after route checks, or the speaker rattles during normal speech. Those symptoms can indicate damage beyond droplets in the grille.',
    },
    {
      type: 'table',
      headers: ['Result after 30 seconds', 'Meaning', 'Next step'],
      rows: [
        ['Clearer sound', 'Droplet likely moved', 'Stop and let the device rest'],
        ['Small improvement', 'Some moisture remains', 'Wait, then repeat one short cycle'],
        ['No change', 'Blockage may be deeper or sticky', 'Dry naturally and inspect route/settings'],
        ['Worse distortion', 'Driver may be stressed or damaged', 'Stop and lower volume; consider service'],
      ],
    },
    {
      type: 'summary',
      title: 'Practical takeaway',
      items: [
        'Use 165 Hz first because it balances movement and compatibility.',
        'Point the grille downward and keep the cycle short.',
        'Treat the tone as speaker recovery, not full-device drying.',
        'Manufacturer liquid guidance wins over any web tool.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Ready to eject',
    statusPlaying: 'Tone running',
    statusComplete: 'Cycle complete',
    frequencyLabel: 'Frequency',
    volumeLabel: 'Volume',
    durationLabel: 'Duration',
    startButton: 'Start water ejector',
    stopButton: 'Stop tone',
    hertzUnit: 'Hz',
    secondsShort: 'sec',
    presetGentle: 'Gentle',
    presetStandard: '165 Hz',
    presetDeep: 'Deep',
    safetyTitle: 'Safe first',
    safetyText: 'Start below maximum volume and stop if the speaker rattles or distorts.',
    bestResult: 'Best result',
    bestResultText: 'Remove the case, point the speaker downward and run one short cycle.',
  },
};
