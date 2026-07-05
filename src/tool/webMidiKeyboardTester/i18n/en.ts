import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'webmidi-keyboard-tester';
const title = 'WebMIDI Keyboard Tester';
const description = 'Test a USB MIDI keyboard, synth, pad controller, pitch wheel, modulation wheel, note velocity, and stuck notes directly in the browser with Web MIDI.';

const faqData = [
  {
    question: 'Can this MIDI keyboard tester read my USB keyboard without installing software?',
    answer: 'Yes, in browsers that support Web MIDI, such as Chrome and Edge. The browser asks for permission, then the tool listens to note, velocity, pitch bend, and modulation messages from the selected MIDI input.',
  },
  {
    question: 'Does the website upload my MIDI notes or performance data?',
    answer: 'No. MIDI events are processed in the current browser tab. Notes, velocity values, controller messages, device names, and logs are not uploaded or stored by the website.',
  },
  {
    question: 'Why does my MIDI keyboard appear but no keys light up?',
    answer: 'The device may be connected as a control surface, the wrong input port may be selected by the browser, the keyboard may be using a different mode, or the cable/hub may be passing power but not MIDI data.',
  },
  {
    question: 'Can I test pitch bend and modulation wheels?',
    answer: 'Yes. The tester shows pitch bend as a centered signed value and modulation as MIDI CC1. Moving those controls should update their meters immediately when the device sends standard MIDI messages.',
  },
  {
    question: 'Which MIDI messages are shown?',
    answer: 'The live interface highlights Note On and Note Off messages, records velocity, detects pitch bend, and tracks modulation wheel CC1. Other controller messages may appear in the event log when they are relevant to the tested controls.',
  },
];

const howToData = [
  {
    name: 'Connect the MIDI hardware',
    text: 'Plug the keyboard, synth, pad controller, or USB MIDI interface into the computer before opening the permission prompt. Avoid unpowered hubs when troubleshooting intermittent devices.',
  },
  {
    name: 'Grant browser MIDI access',
    text: 'Press Connect MIDI Input and approve the browser permission request. Use Chrome or Edge over HTTPS or localhost because Web MIDI is permission-gated.',
  },
  {
    name: 'Play keys across the range',
    text: 'Press low, middle, and high notes. The on-screen keyboard expands around the notes it receives and lights each key according to velocity.',
  },
  {
    name: 'Check wheels and expression controls',
    text: 'Move the pitch wheel, modulation wheel, and performance controls. Pitch should return to center, while modulation should travel from 0 to 127.',
  },
  {
    name: 'Read the event log',
    text: 'Use the event log to spot missing Note Off messages, unexpected channels, low velocity values, or controls that send a different MIDI message than expected.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'MIDI Keyboard Tester Online for Real USB Hardware', level: 2 },
    {
      type: 'paragraph',
      html: 'A reliable <strong>MIDI keyboard tester online</strong> should answer one question quickly: is the physical instrument sending the messages a DAW, sampler, synth, or lighting rig expects? This WebMIDI tester listens to the browser MIDI input and shows Note On, Note Off, velocity, pitch bend, and modulation wheel data in real time. It is designed for USB MIDI keyboards, DIN-to-USB interfaces, synthesizers, pad controllers, stage pianos, MIDI guitars, drum triggers, and compact controllers used in home studios or live rigs.',
    },
    {
      type: 'message',
      title: 'Private local MIDI diagnostics',
      html: 'The test runs entirely client-side. The website does not upload note numbers, velocity curves, controller movement, device names, or event logs. The browser exposes MIDI only after you approve the permission prompt, and the values remain in the current tab.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'MIDI velocity range' },
        { value: '128', label: 'standard note numbers' },
        { value: '14-bit', label: 'pitch bend resolution' },
        { value: 'CC1', label: 'modulation wheel control' },
      ],
    },
    {
      type: 'table',
      headers: ['Signal', 'What the tester displays', 'Healthy behavior'],
      rows: [
        ['Note On', 'Key name, note number, channel, and velocity.', 'Each physical key lights once when pressed and uses a velocity value above zero.'],
        ['Note Off', 'Release event in the log and key light reset.', 'Every pressed key clears when released; no notes remain visually stuck.'],
        ['Velocity', 'Live meter plus a rolling curve.', 'Soft playing produces lower values and firm playing reaches higher values without random jumps.'],
        ['Pitch bend', 'Centered signed meter from negative to positive.', 'The wheel sweeps smoothly and returns close to zero when released.'],
        ['Modulation', 'CC1 meter from 0 to 127.', 'The wheel or strip moves predictably through the full range.'],
      ],
    },
    { type: 'title', text: 'How to Probar Teclado MIDI Without a DAW', level: 2 },
    {
      type: 'paragraph',
      html: 'Searching for <em>probar teclado MIDI</em> often means the user does not yet know whether the failure is the controller, the cable, the operating system, or the music software. A DAW adds many extra variables: track arm state, input filters, MIDI channel routing, virtual instruments, monitoring, templates, and driver preferences. A browser tester removes most of that stack. If the WebMIDI permission prompt sees the device and the keyboard lights notes on screen, the physical MIDI path is alive.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Use this before changing DAW settings',
      html: 'First confirm that the controller sends raw MIDI. Then troubleshoot the music application. If the tester receives notes but the DAW does not, inspect MIDI input enablement, selected track input, channel filters, control-surface scripts, and instrument monitoring.',
    },
    {
      type: 'list',
      items: [
        'Connect the keyboard directly to the computer when possible, especially if bus power is marginal.',
        'Open the tester in Chrome or Edge, because Web MIDI support varies by browser and platform.',
        'Press Connect MIDI Input and choose the musical device or MIDI interface from the permission prompt.',
        'Play chromatic notes across the keyboard to reveal dead keys, split zones, or octave transpose surprises.',
        'Move the pitch and modulation wheels slowly, then quickly, to catch noisy sensors or poor return-to-center behavior.',
        'Clear the log between tests when comparing cables, USB ports, keyboard presets, or controller modes.',
      ],
    },
    {
      type: 'tip',
      title: 'Fast cable check',
      html: 'If the device powers on but no MIDI input appears, try a different USB cable. Many cheap USB cables are charge-only and do not carry data, which makes a controller look alive while no MIDI messages can reach the computer.',
    },
    { type: 'title', text: 'Reading Velocity Curves and Dynamic Response', level: 2 },
    {
      type: 'paragraph',
      html: 'Velocity is not loudness by itself; it is a performance value sent with a note, usually from 1 to 127. A piano plugin may map velocity to volume, sample layer, brightness, hammer noise, attack time, or all of those at once. When a controller has poor velocity scanning, a player may feel that soft notes disappear, medium notes are too loud, or hard notes never reach the expressive top layer. The rolling velocity curve helps reveal whether the hardware produces a usable spread of values.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Healthy keybed',
          description: 'Soft, medium, and hard strikes produce visibly different velocity bands with repeatable values for similar playing force.',
          highlight: true,
        },
        {
          title: 'Compressed response',
          description: 'Most notes cluster in a narrow range, such as 70-95, making piano and drum instruments feel flat or difficult to control.',
        },
        {
          title: 'Erratic response',
          description: 'Adjacent notes or repeated strikes jump unpredictably, suggesting dirty contacts, failing sensors, bad scanning, or unstable firmware.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Observed velocity pattern', 'Likely interpretation', 'Next test'],
      rows: [
        ['Always 127', 'Fixed-velocity mode is enabled or the controller is configured for organ/synth triggering.', 'Check the keyboard global settings, pad mode, or controller editor.'],
        ['Always very low', 'Velocity curve is too soft, sensor calibration is wrong, or the keybed is failing.', 'Switch velocity curves and compare black/white keys across octaves.'],
        ['One key differs sharply', 'A local contact, rubber dome, optical sensor, or key mechanism may be dirty or damaged.', 'Repeat that key at several strengths and compare neighboring notes.'],
        ['Values drop after a hub is used', 'Power or data stability may be marginal.', 'Retest with a direct USB port and a known data cable.'],
      ],
    },
    {
      type: 'card',
      title: 'Why Note Off matters',
      html: 'A stuck note is often a missing or delayed Note Off message. Some instruments send Note On with velocity 0 instead of a separate Note Off command; both are valid MIDI behavior. This tester treats velocity-zero Note On as note release, so genuinely stuck keys remain visible until the correct release message arrives.',
    },
    { type: 'title', text: 'Testing Pitch Bend, Modulation, and Performance Controls', level: 2 },
    {
      type: 'paragraph',
      html: 'Pitch bend is a higher-resolution MIDI message than ordinary 7-bit controller data. It combines two data bytes into a 14-bit range centered around 8192. That extra resolution matters because pitch movement should sound smooth, especially when bending a lead synth, bass, or orchestral instrument. The tester converts the incoming bend to a centered meter, making it easy to see whether the wheel reaches both extremes and returns to neutral.',
    },
    {
      type: 'paragraph',
      html: 'The modulation wheel is normally MIDI continuous controller 1, commonly written as CC1. Many synth patches use it for vibrato, filter movement, wavetable position, tremolo, or orchestral dynamics. If moving the wheel does not update the CC1 meter, the controller may be assigned to a different CC, using a vendor-specific mode, or routed through software that remaps performance controls.',
    },
    {
      type: 'proscons',
      title: 'Browser MIDI test versus DAW monitoring',
      items: [
        { pro: 'Fast permission-based hardware confirmation with no project setup.', con: 'It does not emulate every DAW routing, script, or instrument mapping.' },
        { pro: 'Clear view of notes, velocity, pitch bend, and CC1 modulation.', con: 'Advanced aftertouch, NRPN, MPE, SysEx, and custom control maps may need specialist tools.' },
        { pro: 'Good for support calls, buying used gear, and checking cables.', con: 'Browser support depends on Web MIDI availability on the current platform.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pitch wheel does not return to zero',
      html: 'If the pitch meter rests at a positive or negative value after release, the physical wheel, spring, potentiometer, hall sensor, calibration, or firmware deadband may need attention. Test the same controller in another port and preset before assuming the sensor is faulty.',
    },
    { type: 'title', text: 'Common MIDI Keyboard Faults This Tester Can Reveal', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Dead key', definition: 'A physical key that produces no Note On message when pressed.' },
        { term: 'Stuck note', definition: 'A note that receives Note On but no matching release message, leaving the sound active in instruments.' },
        { term: 'Velocity spike', definition: 'A sudden value much higher or lower than expected for a similar strike.' },
        { term: 'MIDI channel', definition: 'One of 16 logical channels used to separate parts, zones, or devices on a MIDI stream.' },
        { term: 'Control Change', definition: 'A MIDI message family used by knobs, pedals, wheels, sliders, and switches.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Device detected, no messages',
      html: 'If the browser lists a MIDI input but playing keys produces no log entries, check whether the selected port is a control-surface input instead of the keyboard note input. Some interfaces expose multiple ports with similar names.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Possible cause', 'Practical action'],
      rows: [
        ['No permission prompt', 'Unsupported browser, insecure origin, or blocked browser MIDI permission.', 'Use Chrome/Edge over HTTPS and inspect site permissions.'],
        ['Device missing', 'Cable, hub, driver, class-compliance, or power problem.', 'Try another USB data cable, port, or powered hub.'],
        ['Only some octaves work', 'Split/layer mode, transpose setting, hardware matrix fault, or local control mode.', 'Reset the preset and test chromatically from low to high notes.'],
        ['Wrong pitch names', 'The controller is transposed or sending from a zone with octave shift.', 'Check global transpose, zone octave, and DAW template settings.'],
        ['Mod wheel silent', 'Wheel assigned to a different controller number or disabled by preset.', 'Load a default preset or controller editor and map it back to CC1.'],
      ],
    },
    {
      type: 'summary',
      title: 'Best diagnostic order',
      items: [
        'Confirm the browser sees the MIDI input.',
        'Play notes and verify matching press/release behavior.',
        'Inspect velocity distribution with repeated soft, medium, and hard strikes.',
        'Move pitch bend and modulation controls through their full travel.',
        'Only then adjust DAW routing, virtual instrument settings, or controller templates.',
      ],
    },
    { type: 'title', text: 'Privacy, Browser Support, and Limits', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI is intentionally permission-gated. A page cannot silently read connected musical devices in the background without the browser exposing an access flow. The exact prompt and persistence of permission depend on browser, operating system, and user settings. For most musicians, the practical result is simple: click the connect button, choose the MIDI input, run the test, and close the tab when finished.',
    },
    {
      type: 'list',
      items: [
        'No MIDI event data is sent to any external server.',
        'The tester does not require SysEx access, which keeps the permission scope narrower.',
        'Device names shown by the browser can identify hardware models, so screenshots should be shared thoughtfully.',
        'Chrome and Edge generally provide the best Web MIDI support; Safari and Firefox support can be limited or absent depending on platform.',
        'Native utilities may still be needed for firmware updates, deep controller editing, MPE analysis, SysEx dumps, or vendor-specific diagnostics.',
      ],
    },
    {
      type: 'card',
      title: 'When this tool is enough',
      html: 'For buying a used controller, checking a studio cable, validating a USB MIDI interface, testing a repaired keybed, or proving that a keyboard sends messages before opening a DAW, a WebMIDI keyboard tester is usually the fastest first step.',
    },
  ],
  ui: {
    connectButton: 'Connect MIDI Input',
    refreshButton: 'Refresh inputs',
    clearButton: 'Clear log',
    unsupportedTitle: 'Web MIDI is not available',
    unsupportedBody: 'Use a Chromium-based browser such as Chrome or Edge, and open the page over HTTPS or localhost.',
    secureContext: 'Web MIDI requires a secure HTTPS page or localhost before the browser can expose MIDI inputs.',
    statusIdle: 'Ready to request MIDI access',
    statusPermission: 'Waiting for browser MIDI permission',
    statusReady: 'MIDI access granted',
    statusNoInputs: 'No MIDI input detected',
    statusConnected: 'MIDI input detected',
    statusDisconnected: 'MIDI device disconnected',
    statusError: 'MIDI access failed',
    detectedLabel: 'Device detected',
    noDevice: 'No MIDI device selected',
    inputLabel: 'Input',
    inputIdle: 'none',
    channelLabel: 'Channel',
    notesLabel: 'Notes',
    velocityLabel: 'Velocity',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modulation',
    lastEventLabel: 'Last event',
    octaveRangeLabel: 'Visible range',
    velocityCurveTitle: 'Velocity curve',
    activeNotesTitle: 'Active notes',
    eventLogTitle: 'MIDI event log',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Play a key or move a wheel to see incoming MIDI messages.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'All channels',
  },
};
