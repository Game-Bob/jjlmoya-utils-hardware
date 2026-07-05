import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'backlight-bleed-blooming-test';
const title = 'Backlight Bleed and Blooming Test';
const description =
  'Run a pure black fullscreen backlight bleed test and a draggable white local dimming blooming test for OLED, Mini LED, IPS, VA, monitors, laptops, and TVs.';

const faqData = [
  {
    question: 'How do I test backlight bleed online?',
    answer:
      'Turn off room lights, set the display brightness high, clean the screen, open the pure black test in fullscreen, wait for the cursor to disappear, and inspect the edges and corners for fixed light leaks.',
  },
  {
    question: 'What is the difference between backlight bleed and IPS glow?',
    answer:
      'Backlight bleed is usually a fixed bright patch near the frame caused by panel pressure or imperfect assembly. IPS glow changes strongly with viewing angle and eye position, especially in the corners.',
  },
  {
    question: 'What does blooming look like on a Mini LED TV or monitor?',
    answer:
      'Blooming is a visible halo around a bright object on a black background. It appears when a local dimming zone lights up a larger area than the object itself.',
  },
  {
    question: 'Can OLED panels have backlight bleed?',
    answer:
      'OLED panels do not use a traditional backlight, so they should not show LCD-style backlight bleed. They can still show near-black uniformity issues, tinting, vertical banding, or raised blacks from source or display settings.',
  },
  {
    question: 'Should I return a monitor with light bleed?',
    answer:
      'Return decisions depend on severity, panel type, price, and warranty policy. A visible bright corner during normal movies or games is more serious than a faint patch only visible in a long-exposure photo.',
  },
];

const howToData = [
  {
    name: 'Prepare the room',
    text: 'Turn off lamps, close curtains, clean the screen, and let your eyes adapt for a minute so dust and reflections do not look like panel defects.',
  },
  {
    name: 'Raise display brightness',
    text: 'Set brightness to 100 percent or to the HDR mode you want to inspect. Disable aggressive ambient light sensors while testing.',
  },
  {
    name: 'Run the black test',
    text: 'Start the backlight bleed mode. The page enters fullscreen and shows exact black. Inspect the bezel, corners, and any fixed patches.',
  },
  {
    name: 'Run the blooming test',
    text: 'Start the local dimming mode, then drag the white circle across the screen. Watch for halos, delayed dimming, grid-shaped zones, and raised blacks.',
  },
  {
    name: 'Exit cleanly',
    text: 'Press Escape to leave native fullscreen. The setup interface returns and the test state resets.',
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

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: 'Backlight Bleed Test Online: What to Look For on a New Monitor or TV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>backlight bleed test online</strong> is most useful during the return window of a new monitor, gaming laptop, or television. The test shows a browser-generated <code>#000000</code> fullscreen field so the LCD backlight is the only possible source of unwanted light. If the panel, diffuser stack, bezel pressure, or frame assembly leaks light, you will usually see it as brighter corners, cloudy edges, or patches that remain in the same physical position.',
    },
    {
      type: 'paragraph',
      html: 'Use the test with realistic expectations. LCD panels need a backlight, and very small variation can be normal, especially on budget IPS and VA displays. The practical question is not whether a long-exposure phone photo can exaggerate a patch. The question is whether the light leak is visible to your eyes during dark films, game loading screens, night scenes, black desktop backgrounds, or letterboxed video.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Do this before judging the panel',
      badge: 'Setup',
      html: 'Turn off the room lights, clean the glass, set brightness to 100 percent, disable ambient light sensors, and wait a few seconds for your eyes to adapt. Reflections, fingerprints, and a mouse cursor can all create false positives during a black uniformity inspection.',
    },
    {
      type: 'list',
      items: [
        'Check the top and bottom edges where bezel pressure often creates fixed glow',
        'Inspect all four corners for triangular or crescent-shaped light leaks',
        'Move your head slightly to separate viewing-angle glow from fixed bleed',
        'Take notes with your eyes first, because cameras can overexpose black screens',
        'Retest after the panel has warmed up for 15 to 30 minutes if the result is borderline',
      ],
    },
    {
      type: 'title',
      text: 'Backlight Bleed, IPS Glow, Clouding, and Black Uniformity',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Issue', 'What you see', 'How it behaves', 'Most common panels'],
      rows: [
        ['Backlight bleed', 'Fixed bright edge or corner patch', 'Stays in the same place as you move your head', 'IPS, VA, TN LCD'],
        ['IPS glow', 'Milky glow from corners on dark images', 'Changes strongly with viewing angle and distance', 'IPS LCD'],
        ['Clouding', 'Large uneven cloudy areas across black', 'Usually fixed, sometimes reduced by lower brightness', 'Edge-lit LCD TVs and monitors'],
        ['VA black crush/smearing', 'Dark details disappear or smear in motion', 'Depends on content and pixel transition', 'VA LCD'],
        ['OLED near-black banding', 'Vertical or horizontal bands near black', 'Visible on near-black gray, not pure black', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'The most common mistake is calling every dark-room artifact backlight bleed. <strong>IPS glow</strong> is optical: it becomes stronger when you sit close, view the panel off-axis, or look at corners from a steep angle. True backlight bleed is mechanical or assembly-related: it stays attached to the same bezel area even if your eye position changes. This distinction matters because many retailers treat severe bleed differently from normal IPS glow.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Wide viewing angles, frequent corner glow, and visible bleed if the frame presses the panel unevenly.',
          points: ['Best checked from your normal seating distance', 'Glow changes with head position', 'Edge bleed can be warranty-relevant if severe'],
        },
        {
          title: 'VA',
          description: 'Higher native contrast, usually less IPS-style glow, but can show clouding and slow dark transitions.',
          points: ['Black looks deeper than IPS', 'Uniformity can still vary by unit', 'Blooming appears on local dimming models'],
        },
        {
          title: 'OLED',
          description: 'No LCD backlight, so pure black should be off, but near-black uniformity and tint can still matter.',
          points: ['Pure black should disappear in a dark room', 'Test gray slides separately for banding', 'Avoid confusing raised source black with panel bleed'],
        },
      ],
    },
    {
      type: 'title',
      text: 'How to Run a Reliable Pure Black Test',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The black test mode deliberately removes the normal interface. Once started, the glass panel disappears, pointer events are disabled on the setup interface, the page requests native fullscreen, and the test layer uses exact black. After two seconds without mouse movement, the cursor is hidden so it does not create a white reference point or contaminate a dark-room inspection.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'test background color' },
        { value: '2 s', label: 'cursor idle timeout' },
        { value: '100%', label: 'recommended brightness' },
        { value: '0', label: 'external assets in test mode' },
      ],
    },
    {
      type: 'summary',
      title: 'Black test checklist',
      items: [
        'Use native resolution and disable browser zoom if the display is scaled oddly',
        'Set SDR brightness high enough to reveal defects, or test HDR in the exact mode you plan to use',
        'Inspect from your normal viewing position first, then from slightly farther away',
        'Do not judge from a phone photo unless exposure is locked and resembles what your eyes see',
        'Press Escape to leave fullscreen and repeat the test after changing monitor settings',
      ],
    },
    {
      type: 'tip',
      title: 'Camera photos can make good panels look terrible',
      html: 'Automatic phone exposure tries to brighten a black screen, which exaggerates faint glow and can turn normal LCD behavior into a dramatic-looking image. If you need warranty evidence, lock exposure manually and include a note describing whether the issue is visible during real content.',
    },
    {
      type: 'title',
      text: 'Local Dimming Blooming Test for Mini LED and FALD Displays',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The <strong>blooming test monitor</strong> mode places a pure white circle on a pure black background. On a Mini LED, FALD LCD, or TV with local dimming, that small object forces one or more backlight zones to brighten while neighboring zones try to remain black. If the dimming algorithm, zone count, diffuser, or panel contrast cannot isolate the light, you see a halo around the circle.',
    },
    {
      type: 'paragraph',
      html: 'Dragging the circle is important. Static blooming is only one part of the story. A moving highlight reveals dimming lag, zone transitions, pumping, crushed star fields, raised subtitles, and grid-shaped behavior. A good local dimming system should keep the object bright while minimizing haze around it and avoiding delayed bright patches after the circle moves away.',
    },
    {
      type: 'table',
      headers: ['Artifact', 'What to watch for', 'Likely explanation'],
      rows: [
        ['Halo', 'Soft glow around the white circle', 'Local dimming zone is larger than the bright object'],
        ['Zone grid', 'Square or rectangular blocks appear around movement', 'Low zone count or visible mini LED layout'],
        ['Dimming lag', 'Bright patch follows the circle late', 'Algorithm responds slowly to motion'],
        ['Black lift', 'Whole screen becomes gray when the circle appears', 'Global dimming or weak contrast control'],
        ['Subtitle bloom', 'Large haze around small white text or UI', 'Aggressive brightness with limited local zones'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'Best use case',
      html: 'Connect the laptop or console to the expensive TV you actually use, open this local dimming tester in the browser, and drag the highlight across the exact screen size. A tiny embedded preview cannot stress local dimming zones the same way fullscreen black and white can.',
    },
    {
      type: 'title',
      text: 'Panel Type Expectations: OLED, Mini LED, IPS, and VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'What each technology tends to do well and poorly',
      items: [
        {
          pro: 'OLED turns individual pixels off for true black and should not show LCD backlight bleed.',
          con: 'OLED can show near-black banding, tinting, automatic brightness limiting, and burn-in risk under static content.',
        },
        {
          pro: 'Mini LED can reach high HDR brightness and reduce large-area haze compared with edge-lit LCD.',
          con: 'Mini LED still uses zones, so small bright objects can bloom when zone count or algorithm quality is limited.',
        },
        {
          pro: 'IPS is stable for color and viewing angle, which is helpful for desktop work and shared viewing.',
          con: 'IPS glow and edge bleed are common complaints on dark scenes, especially when sitting close.',
        },
        {
          pro: 'VA often has much better native contrast than IPS and can look deeper in dark rooms.',
          con: 'VA may show dark smearing, clouding, or blooming on local dimming versions.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Backlight bleed', definition: 'Unwanted light escaping through the LCD stack, usually near the bezel, visible on black images.' },
        { term: 'Blooming', definition: 'A halo around a bright object caused by local dimming zones lighting a larger area than the object.' },
        { term: 'IPS glow', definition: 'Angle-dependent milky brightening in dark scenes on IPS panels.' },
        { term: 'FALD', definition: 'Full array local dimming, where an LCD backlight is divided into independently controlled zones.' },
        { term: 'Mini LED', definition: 'An LCD backlight using many small LEDs to increase zone count and HDR brightness.' },
        { term: 'Black uniformity', definition: 'How evenly a display renders black or near-black content across the whole screen.' },
      ],
    },
    {
      type: 'title',
      text: 'When a Defect Is Serious Enough to Return',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Return window red flags',
      badge: 'Warranty',
      html: 'Consider documenting the issue quickly if a bright corner is visible from normal seating distance, the same patch distracts you in movies or games, local dimming creates obvious halos around subtitles, or an expensive HDR display performs worse than typical reviews for the same model.',
    },
    {
      type: 'paragraph',
      html: 'A fair decision uses real content and the product tier. A low-cost office IPS monitor may have mild corner glow that is normal for the class. A premium Mini LED monitor or high-end TV should control black levels and blooming much better. If the defect is obvious in letterboxed films, dark game menus, space scenes, or desktop work, it is not just a lab curiosity.',
    },
    {
      type: 'list',
      items: [
        'Check the same content on another display to rule out the source',
        'Reset picture settings before assuming the panel is defective',
        'Try local dimming low, medium, and high because algorithms differ by mode',
        'Record brightness, HDR mode, local dimming mode, and viewing distance in your notes',
        'If returning, describe what your eyes see rather than only sending overexposed photos',
      ],
    },
    {
      type: 'title',
      text: 'Why This Test Uses Code Instead of Video',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Video files can introduce compression artifacts, browser decoding work, buffering, color-range conversion, and frame pacing changes. A panel defect test should not depend on an MP4 file. This tool uses client-side HTML and CSS only for the test states: exact black for the background and exact white for the moving circle. That keeps the workload low and avoids network activity after the page has loaded.',
    },
    {
      type: 'paragraph',
      html: 'The blooming circle position is applied through <code>requestAnimationFrame</code>, which synchronizes visual updates with the browser refresh loop. Pointer, mouse, and touch input update target coordinates, then the next animation frame moves the white circle. This makes dragging feel consistent on high-refresh monitors, tablets, and OLED phones without doing unnecessary work on every raw input event.',
    },
    {
      type: 'message',
      title: 'Privacy and performance note',
      ariaLabel: 'Privacy and performance note',
      html: 'The active test states do not need tracking, videos, remote images, or measurement uploads. They are intentionally simple so older laptops, TV browsers, and living-room setups can stress the display panel instead of the CPU.',
    },
    {
      type: 'title',
      text: 'Troubleshooting Incorrect Results',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Symptom during the test', 'Possible cause', 'What to try'],
      rows: [
        ['Black screen is not truly black', 'Display limited RGB range, raised black setting, HDR tone mapping, or browser overlay', 'Set full RGB output, disable dynamic contrast, and confirm no OS night filter is active'],
        ['Mouse cursor remains visible', 'Movement reset the idle timer or browser blocked cursor hiding briefly', 'Stop moving the mouse for two seconds or use a remote/keyboard'],
        ['Fullscreen does not start', 'Browser denied fullscreen outside direct click or TV browser limitation', 'Press the start button again or use the browser fullscreen shortcut'],
        ['Blooming changes between modes', 'Local dimming setting changes zone behavior', 'Retest Low, Medium, High, and Off to understand the tradeoff'],
        ['OLED looks gray', 'Video range mismatch, room reflections, or raised black picture mode', 'Check source range, black level, brightness, and ambient reflections'],
      ],
    },
    {
      type: 'summary',
      title: 'Practical interpretation',
      items: [
        'Backlight bleed is most convincing when it is fixed in place and visible in real dark content',
        'IPS glow changes with angle, so test from the position where you actually sit',
        'Blooming is a local dimming limitation, not a dead pixel problem',
        'OLED should pass the pure black test, but it still needs separate near-black uniformity checks',
        'A good test setup is dark, fullscreen, high brightness, and free of reflections',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Backlight bleed',
    bleedDescription: 'Fullscreen exact black for edge leaks, IPS glow, clouding, and black uniformity checks.',
    bloomingTitle: 'Local dimming',
    bloomingDescription: 'A draggable white circle stresses Mini LED, FALD, OLED near-black handling, and TV dimming zones.',
    startBleed: 'Start black test',
    startBlooming: 'Start blooming test',
    prepTitle: 'Before you start',
    prepBrightness: 'Set monitor or TV brightness to 100%.',
    prepRoom: 'Turn off room lights and remove reflections.',
    prepFullscreen: 'Press Escape to leave fullscreen and reset the test.',
    panelLabel: 'Panel defect preview',
    parametersLabel: 'Test parameters',
    modeControlsLabel: 'Backlight test modes',
    blackLevelLabel: 'Black',
    blackLevelValue: '#000000',
    brightnessLabel: 'Brightness',
    brightnessValue: '100%',
    idleLabel: 'Cursor',
    idleValue: '2s',
    fullscreenLabel: 'Fullscreen',
    fullscreenValue: 'API',
    escapeHint: 'Pure black test running. Stop moving the mouse for 2 seconds to hide the cursor. Press Esc to exit.',
    dragHint: 'Drag or touch the white circle. Watch for halos, zone grids, and delayed dimming. Press Esc to exit.',
  },
};
