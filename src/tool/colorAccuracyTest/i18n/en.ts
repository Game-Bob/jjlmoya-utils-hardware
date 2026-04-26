import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'color-accuracy-test';
const title = 'Color Accuracy Test -Spectrum Canvas';
const description =
  'Calibrate your display with precision. Test sRGB and DCI-P3 color spaces, detect color shifts, measure accuracy with Delta E metrics, and generate professional calibration reports.';

const faqData = [
  {
    question: 'What is color accuracy and why does it matter?',
    answer:
      'Color accuracy measures how faithfully a display reproduces colors compared to a standard reference. For designers, photographers, and content creators, accurate colors are essential to ensure your work looks consistent across different devices.',
  },
  {
    question: 'What is the difference between sRGB and DCI-P3?',
    answer:
      'sRGB is the standard color space for web and consumer displays. DCI-P3 is a wider color gamut used in digital cinema and professional displays. DCI-P3 covers approximately 25% more colors than sRGB.',
  },
  {
    question: 'What is Delta E and how is it measured?',
    answer:
      'Delta E (ΔE) is a numerical measurement of the color difference perceived by the human eye. A Delta E below 1 is imperceptible, below 2 is very good, below 4 is acceptable, and above 4 becomes noticeable. Our test uses CIE 1976 Delta E calculations.',
  },
  {
    question: 'Can I use this tool to calibrate my hardware?',
    answer:
      'This tool provides a visual calibration reference and accuracy measurements. For professional calibration, you should combine these results with hardware calibration tools (colorimeters) and dedicated software like ColorThink or Datacolor SpyderCheckr.',
  },
  {
    question: 'What color spaces are tested?',
    answer:
      'We test sRGB (standard), DCI-P3 (cinema), and white point accuracy across standard D65 (6500K) and D93 (9300K) illuminants. The test also includes gamma correction verification.',
  },
];

const howToData = [
  {
    name: 'Select Your Gamut',
    text: 'Choose between sRGB (standard web/consumer) or DCI-P3 (professional cinema). Your display will transition its test palette accordingly.',
  },
  {
    name: 'Name Your Hardware (Optional)',
    text: 'Enter a descriptive name for your monitor or device (e.g., "MacBook Pro 16 M1"). This personalizes your report.',
  },
  {
    name: 'Enter Fullscreen Mode',
    text: 'Press F11 or the fullscreen button to eliminate browser UI and ensure maximum display real estate for accurate testing.',
  },
  {
    name: 'Complete the Color Tests',
    text: 'Proceed through Spectral Purity (solid colors), Gradient Dynamics (smooth transitions), Black Crush Detection (shadow detail), and White Point Calibration.',
  },
  {
    name: 'Review Results & Export',
    text: 'Generate a visual report with 3D Gamut visualization, Delta E metrics, and calibration recommendations. Export as PDF for archival.',
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

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
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
      text: 'Professional Color Accuracy Test: Calibrate Your Display with Precision',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The Spectrum Canvas is a professional-grade color accuracy testing tool designed for anyone who depends on color-critical work. Whether you\'re a photographer, designer, content creator, or hardware enthusiast, this tool helps you <strong>diagnose color shifts</strong>, <strong>measure display accuracy</strong>, and <strong>generate calibration reports</strong>.',
    },
    {
      type: 'title',
      text: 'Why Color Accuracy Matters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A single percentage point difference in color reproduction can mean the difference between a "wow" moment and a "that looks off" reaction. Professional displays deliver accuracy within <strong>Delta E &lt; 2</strong>. Consumer displays often drift into Delta E 4-6+, causing:',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Photography that looks vibrant on your monitor but dull in print</li><li>Video edits that clash with client expectations</li><li>Web design mockups that don\'t match the brand specification</li><li>Hardware projects where color indicators are misinterpreted</li></ul>',
    },
    {
      type: 'title',
      text: 'Understanding Color Spaces: sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (Standard Color Space)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Established by Microsoft and HP in 1996, sRGB is the <strong>universal standard for consumer electronics</strong> and the web. It uses a triangular color gamut defined by three primary colors (Red: 7.7500x 0.8250, Green: 0.2 0.7150, Blue: 0.1400 0.0800).',
    },
    {
      type: 'paragraph',
      html: '<strong>Characteristics:</strong><ul><li>Covers ~35% of the visible color spectrum</li><li>Optimized for typical ambient lighting conditions</li><li>Gamma: 2.2 (matches most consumer displays)</li><li>Suitable for: web, social media, consumer photos</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Digital Cinema Gamut)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Developed by the Digital Cinema Initiatives consortium, DCI-P3 is a <strong>cinema-grade color space</strong> designed for theatrical projection and professional displays. It encompasses ~25% more colors than sRGB.',
    },
    {
      type: 'paragraph',
      html: '<strong>Characteristics:</strong><ul><li>Covers ~53% of the visible color spectrum</li><li>Optimized for dark theater environments</li><li>Gamma: 2.6 (gamma-corrected for high contrast)</li><li>Suitable for: filmmaking, professional photography, HDR content</li></ul>',
    },
    {
      type: 'title',
      text: 'What is Delta E? Quantifying Color Difference',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E (ΔE) is the <strong>metric of human-perceptible color difference</strong> in the CIE LAB color space. It tells you how close your display\'s output is to a standard reference color.',
    },
    {
      type: 'paragraph',
      html: '<strong>Delta E Scale (CIE 1976):</strong><ul><li>0–1: Imperceptible by human eye</li><li>1–2: Barely perceptible</li><li>2–4: Perceptible but acceptable for general use</li><li>4–6: Noticeable color shift</li><li>&gt;6: Very obvious difference</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'Professional displays are calibrated to maintain <strong>Delta E &lt; 2</strong> across the entire visible gamut. Consumer displays typically achieve Delta E 3-5.',
    },
    {
      type: 'title',
      text: 'The Spectrum Canvas Test Suite',
      level: 3,
    },
    {
      type: 'title',
      text: 'Spectral Purity Test',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Displays pure primary and secondary colors (Red, Green, Blue, Cyan, Magenta, Yellow) and measures how your monitor reproduces them. Color "flooding" animations reveal consistent color reproduction across the full screen.',
    },
    {
      type: 'title',
      text: 'Gradient Dynamics',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Smooth gradients that transition through the entire color space. Look for <strong>banding artifacts</strong> (visible steps instead of smooth transitions), which indicate insufficient color bit depth or poor gamma correction.',
    },
    {
      type: 'title',
      text: 'Black Crush Detection (Black Hole Test)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Pure black (0,0,0) background with barely-visible near-black shades. If shadow detail "crushes" together, your monitor is losing information in dark tones—common in mobile displays and cheap panels.',
    },
    {
      type: 'title',
      text: 'White Point Calibration',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Tests different correlated color temperatures (D65 at 6500K = daylight, D93 at 9300K = studio), revealing any color temperature drift or thermal instability.',
    },
    {
      type: 'title',
      text: 'Interpreting Your Results',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The Spectrum Canvas generates a beautiful, print-friendly report with:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>3D Gamut Visualization:</strong> A rotating 3D plot showing your display\'s actual color volume versus the reference standard</li><li><strong>Delta E Heatmap:</strong> Where on the spectrum your display drifts</li><li><strong>Gamma Curve:</strong> Brightness linearity across the 0–255 range</li><li><strong>Calibration Score:</strong> A single "Spectrum Grade" (Elite, Cinematic, Studio, Standard) based on overall accuracy</li></ul>',
    },
    {
      type: 'title',
      text: 'Advanced: Manual Calibration Tips',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If your results show drift, try these adjustments in your monitor\'s OSD (On-Screen Display) menu:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Color Temperature:</strong> Shift toward "Warmer" if colors are too cool/blue; toward "Cooler" if too warm/yellow</li><li><strong>Contrast:</strong> Increase if blacks appear washed out; decrease if detail is crushed</li><li><strong>Brightness:</strong> Adjust to achieve a neutral gray without color tint at 50% brightness</li><li><strong>Saturation:</strong> If colors are oversaturated, reduce; if dull, increase</li></ul>',
    },
    {
      type: 'title',
      text: 'Limitations and Best Practices',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>This tool provides visual and statistical reference</strong>. For professional work requiring certified calibration, use hardware color meters (spectrophotometer or colorimeter) and dedicated calibration software.',
    },
    {
      type: 'paragraph',
      html: '<strong>Best Practices:</strong><ul><li>Allow your monitor 30 minutes to warm up before testing (thermal drift stabilizes)</li><li>Test in consistent ambient lighting</li><li>Avoid glare; use a monitor hood if possible</li><li>Repeat tests weekly to track drift over time</li><li>Keep a digital archive of reports for future comparison</li></ul>',
    },
  ],
  ui: {
    badge: 'Display Calibration',
    title: 'Spectrum Canvas -Color Accuracy Test',
    description:
      'Professional display calibration meets cinema-grade aesthetics. Test sRGB and DCI-P3, measure Delta E accuracy, detect color shifts, and generate a visual report that transforms data into insight.',
    btnStartCalibration: 'Start Calibration',
    btnFullscreen: 'Fullscreen',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Fullscreen Mode',
    kbdReset: 'R',
    kbdResetLabel: 'Reset Test',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Exit',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Color Space',
    hardwareName: 'Hardware/Monitor Name',
    hardwareNamePlaceholder: 'e.g., MacBook Pro 16" M1 Max',
    purityTest: 'Spectral Purity',
    gradientTest: 'Gradient Dynamics',
    blackHoleTest: 'Black Crush Detection',
    whitePointTest: 'White Point Calibration',
    colorCheckpoint: 'Color Checkpoint',
    generateReport: 'Generate Report',
    viewResults: 'View Results',
    btnExit: 'Exit (ESC)',
    compareSideBySide: 'Compare Side-by-Side',
  },
};
