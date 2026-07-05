import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'oled-screen-burn-in-fixer';
const title = 'OLED Screen Burn In Fixer';
const description =
  'Run a fullscreen OLED burn-in fixer and LCD stuck pixel exerciser with rapid RGB color cycles, white noise, a required photosensitivity warning, and a native timer.';

const faqData = [
  {
    question: 'Can an OLED burn-in fixer remove permanent burn-in?',
    answer:
      'No browser tool can reverse permanent OLED subpixel wear. A pixel exerciser may reduce temporary image retention, make mild ghosting less visible, or help diagnose whether a mark is temporary retention or permanent burn-in.',
  },
  {
    question: 'Is this safe for people with photosensitive epilepsy?',
    answer:
      'The test uses rapidly flashing colors and high-contrast static. People with photosensitive epilepsy, migraine sensitivity, seizure risk, or discomfort from flashing lights should not run it.',
  },
  {
    question: 'Can this repair a stuck LCD pixel?',
    answer:
      'It can sometimes help a stuck pixel that remains red, green, blue, or white by rapidly changing the subpixel state. It cannot repair a dead black pixel or physical panel damage.',
  },
  {
    question: 'How long should I run the pixel exerciser?',
    answer:
      'Start with 5 to 10 minutes for a stuck pixel or light image retention. Longer runs should be supervised, with brightness kept reasonable and the screen allowed to cool.',
  },
  {
    question: 'Why does the tool use canvas instead of video?',
    answer:
      'The patterns are generated directly in HTML5 Canvas, so the page does not need heavy video assets. That keeps loading fast and makes the color/noise cycle responsive to fullscreen size.',
  },
];

const howToData = [
  {
    name: 'Read the photosensitivity warning',
    text: 'Do not continue if flashing light, high contrast patterns, migraines, or seizure risk could affect you or someone nearby.',
  },
  {
    name: 'Set a short first run',
    text: 'Choose 5 to 10 minutes for an initial pass, select Hybrid mode, and keep brightness at a comfortable level.',
  },
  {
    name: 'Start fullscreen repair',
    text: 'Confirm the warning, press Start Repair, and let the canvas cycle through RGB colors and static without moving other windows over the display.',
  },
  {
    name: 'Inspect the mark afterward',
    text: 'Stop the test, show neutral gray, white, black, red, green, and blue screens, then compare whether the ghost image or stuck pixel changed.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'OLED Burn-In Fixer and LCD Stuck Pixel Exerciser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This OLED screen burn-in fixer is a fullscreen pixel exerciser for temporary image retention, faint ghost images, and some LCD stuck pixels. It generates rapid red, green, blue, white, black, yellow, and static patterns directly in HTML5 Canvas. There are no video files, no external image assets, and no download step: the browser paints every frame at the current screen size.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Photosensitivity warning',
      icon: 'mdi:alert',
      badge: 'Required',
      html: 'The repair pattern uses fast flashes, high contrast transitions, and white static. Do not run it if you have photosensitive epilepsy, seizure risk, migraine sensitivity, dizziness triggered by flashing lights, or if someone nearby could be affected. Stop immediately if you feel eye strain, nausea, headache, or discomfort.',
    },
    {
      type: 'paragraph',
      html: 'The tool is useful when the question is practical: <strong>is this mark temporary retention that may fade, or permanent panel wear?</strong> A short supervised run can sometimes reduce a ghost image caused by retained static UI elements, and it can sometimes wake a subpixel that is stuck on one color. It cannot rebuild worn OLED material, repair a cracked layer, restore a dead driver line, or guarantee recovery.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: 'video assets loaded', icon: 'mdi:speedometer' },
        { value: 'RGB', label: 'primary subpixel exercise', icon: 'mdi:palette' },
        { value: '1-120 min', label: 'native session timer', icon: 'mdi:timer-outline' },
        { value: '100%', label: 'client-side execution', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'What Burn-In, Image Retention, and Ghosting Mean',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'OLED burn-in',
          definition: 'Permanent uneven wear of organic subpixels. A static logo, taskbar, navigation bar, or game HUD can leave a visible shape because those pixels aged differently from the rest of the panel.',
        },
        {
          term: 'Temporary image retention',
          definition: 'A short-lived ghost image that remains after static content disappears. It may fade with normal mixed content, a compensation cycle, or a pixel exercise pattern.',
        },
        {
          term: 'LCD stuck pixel',
          definition: 'A pixel or subpixel stuck showing red, green, blue, white, or another fixed color. Rapid state changes can sometimes free it if the issue is not physical damage.',
        },
        {
          term: 'Dead pixel',
          definition: 'A pixel that stays black because it no longer emits or transmits light correctly. A browser pixel exerciser normally cannot revive a truly dead pixel.',
        },
        {
          term: 'LCD ghosting',
          definition: 'Motion trails caused by slow pixel response. That is different from screen burn-in, although users often describe both as ghost images.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Temporary retention',
          description: 'Usually fades after mixed content, screen refresh routines, or a short RGB/noise session.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Visible after static content', 'Often softer at the edges', 'May improve within minutes or hours'],
        },
        {
          title: 'Permanent burn in',
          description: 'Uneven OLED wear that remains visible after rest, compensation cycles, and varied content.',
          icon: 'mdi:contrast-circle',
          points: ['Matches long-term static UI', 'Most visible on flat colors', 'Does not disappear after exercising'],
        },
        {
          title: 'Stuck pixel',
          description: 'A single point or tiny cluster locked on one color rather than a large ghost image.',
          icon: 'mdi:grain',
          points: ['Often one pixel wide', 'May be red, green, blue, or white', 'Sometimes responds to rapid color changes'],
        },
      ],
    },
    {
      type: 'title',
      text: 'How to Use the Pixel Exerciser Safely',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Lower brightness before the first run, especially on OLED phones, OLED TVs, and laptop OLED panels.',
        'Start with 5 to 10 minutes; do not leave the display unattended for long sessions.',
        'Use fullscreen so the affected area receives the same pattern as the rest of the panel.',
        'Keep the room aware of flashing light; do not run the test around people who have not consented to it.',
        'Stop if the panel becomes unusually warm, if the browser stutters heavily, or if you feel discomfort.',
        'After the run, inspect neutral gray, white, black, red, green, and blue screens to compare results.',
      ],
    },
    {
      type: 'table',
      headers: ['Problem', 'First Mode', 'First Duration', 'Brightness Guidance'],
      rows: [
        ['Faint OLED ghost image', 'Hybrid RGB plus static', '5-10 minutes', 'Comfortable, not maximum'],
        ['Fresh static logo retention', 'RGB cycle', '10-20 minutes', 'Moderate brightness'],
        ['Single colored stuck LCD pixel', 'Static or Hybrid', '5-15 minutes', 'Normal desktop brightness'],
        ['Old permanent burn-in', 'Hybrid for diagnosis only', '5 minutes', 'Avoid long high-brightness runs'],
        ['Dead black pixel', 'Not recommended as a repair', 'Inspect only', 'No pixel exerciser can guarantee recovery'],
      ],
    },
    {
      type: 'tip',
      title: 'Use short sessions first',
      html: 'A long flashing session is not automatically better. If a mark is temporary, you often see some change after a short pass. If nothing changes after a sensible trial and a normal panel refresh routine, the issue may be permanent wear or a hardware defect.',
    },
    {
      type: 'title',
      text: 'Choosing RGB Cycle, White Noise, or Hybrid Mode',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Different artifacts respond to different patterns. A red-green-blue cycle exercises the primary subpixels in a controlled sequence. White noise rapidly alternates luminance across many small areas, which can help expose and exercise isolated stuck pixels. Hybrid mode alternates between both, making it the best first choice when you are unsure whether the problem is image retention or a lazy subpixel.',
    },
    {
      type: 'table',
      headers: ['Mode', 'What It Does', 'Best For', 'Watch For'],
      rows: [
        ['RGB cycle', 'Full-screen primary and high-contrast fields', 'OLED retention and color-channel inspection', 'Visible flashing'],
        ['White noise', 'Random black-to-white static across the panel', 'Single stuck pixels and tiny clusters', 'Higher visual intensity'],
        ['Hybrid', 'Alternates color fields and static', 'General OLED burn-in fixer workflow', 'Use a short timer first'],
      ],
    },
    {
      type: 'proscons',
      title: 'Online pixel exerciser: realistic benefits and limits',
      items: [
        {
          pro: 'Runs instantly in the browser without installing software or loading video files.',
          con: 'Cannot reverse permanent OLED material wear or physical panel damage.',
        },
        {
          pro: 'Fullscreen canvas covers the display with generated RGB and static frames.',
          con: 'Browser timing, device performance, and fullscreen support can affect animation consistency.',
        },
        {
          pro: 'Useful for first-pass diagnosis before trying manufacturer panel maintenance routines.',
          con: 'Should not replace warranty service for new panels with obvious defects.',
        },
      ],
    },
    {
      type: 'title',
      text: 'OLED-Specific Guidance',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'OLED pixels emit their own light. When a static element remains on screen for many hours, the subpixels under that element can age at a different rate. That is why burn-in often follows the shape of TV channel logos, phone status bars, navigation buttons, game HUDs, streaming app sidebars, or desktop taskbars. A pixel exerciser can make temporary retention fade faster, but permanent differential aging remains a material issue.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Check built in panel care first',
      html: 'Many OLED TVs, monitors, laptops, and phones include pixel refresh, panel refresh, logo dimming, screen shift, taskbar dimming, or compensation cycles. Use the manufacturer routine according to its instructions, especially if the display is under warranty. This online tool is best treated as a gentle diagnostic and temporary-retention exercise, not a replacement for panel care firmware.',
    },
    {
      type: 'list',
      items: [
        'If the ghost image is new, let the display show varied content or rest before assuming permanent burn-in.',
        'If the mark matches a years-old static logo, a pixel exerciser is unlikely to remove it completely.',
        'If the panel has a built-in refresh cycle, run it only as often as the manufacturer recommends.',
        'Avoid running maximum brightness test patterns for hours; heat and brightness contribute to wear.',
        'Hide taskbars, enable screen savers, and reduce static UI brightness to prevent recurrence.',
      ],
    },
    {
      type: 'title',
      text: 'LCD Stuck Pixel Guidance',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'LCD panels do not burn in the same way as OLED panels, but they can show stuck pixels, pressure marks, panel defects, and temporary image persistence. A stuck pixel that remains red, green, blue, cyan, magenta, yellow, or white may be caused by a subpixel failing to switch correctly. Rapid changes can sometimes help, although there is no guaranteed online repair.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Dead pixel versus stuck pixel',
      icon: 'mdi:information-outline',
      badge: 'Diagnosis',
      html: 'A colored point has a better chance than a black point. A black pixel on every test color is usually dead or blocked. A colored pixel that changes on some backgrounds but not others may be a stuck subpixel and is a better candidate for a short pixel exercise session.',
    },
    {
      type: 'summary',
      title: 'Before using pressure or physical methods',
      items: [
        'Do not press hard on OLED panels, touchscreens, or fragile laptop screens.',
        'Avoid sharp tools, cloth-wrapped pens, and any method that could scratch the surface.',
        'Use software exercise first, then warranty support if the defect remains.',
        'Document the defect with macro photos if the display is new and return policies still apply.',
      ],
    },
    {
      type: 'title',
      text: 'Why Canvas Is Better Than a Heavy Repair Video',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A video-based burn-in fixer has to download encoded frames, decode them, scale them to the screen, and hope the compression did not soften the exact transitions. This tool generates each frame directly in the browser. The RGB fields are solid, the noise is created for the current canvas size, and the page avoids large media files that would slow loading or reduce PageSpeed.',
    },
    {
      type: 'list',
      items: [
        'No external video file means faster first render and less network dependency.',
        'Canvas output scales to the fullscreen surface instead of being limited by a video resolution.',
        'The timer can stop the repair automatically instead of looping a video forever.',
        'Mode, speed, duration, and intensity can change without loading another asset.',
      ],
    },
    {
      type: 'message',
      title: 'A practical expectation',
      ariaLabel: 'Burn-in fixer expectation',
      html: 'Use this utility as a controlled first step: reduce temporary retention, exercise a possible stuck pixel, and gather evidence. If the mark survives varied content, built-in panel refresh routines, and careful short exercise sessions, treat it as a hardware or warranty issue.',
    },
  ],
  ui: {
    safetyTitle: 'Flashing light warning',
    safetyBody: 'This repair pattern rapidly flashes solid colors and high-contrast static. Do not use it if you or anyone nearby may be affected by photosensitive epilepsy, seizures, migraines, dizziness, or flashing-light sensitivity.',
    safetyChecklist: 'Keep brightness reasonable, supervise the session, and stop immediately if you feel discomfort.',
    safetyConfirm: 'I understand the photosensitivity risk and want to enable the repair button.',
    safetyContinue: 'Continue to settings',
    startRepair: 'Start Repair (Fullscreen)',
    controlsLabel: 'OLED screen repair controls',
    modeLabel: 'Pattern mode',
    modeCycle: 'RGB cycle',
    modeNoise: 'White noise',
    modeHybrid: 'Hybrid',
    modeCycleDescription: 'Solid primary colors for image retention and channel checks.',
    modeNoiseDescription: 'High-frequency static for single stuck pixels and tiny clusters.',
    modeHybridDescription: 'Best first pass: alternates RGB fields with static texture.',
    speedLabel: 'Cycle speed',
    durationLabel: 'Duration',
    durationShort: '5 min',
    durationStandard: '10 min',
    durationDeep: '20 min',
    durationShortDescription: 'Quick check',
    durationStandardDescription: 'Recommended',
    durationDeepDescription: 'Supervised run',
    fullscreenHint: 'Fullscreen OLED burn-in repair canvas',
    intensityLabel: 'Static intensity',
    warningBadge: 'Flashing content',
  },
};
