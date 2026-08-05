import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-input-lag';
const title = 'Input Lag & System Latency Test';
const description = 'Online hardware input lag and system latency measurement tool using high-precision performance timing and frame buffer synchronization.';

const faqData = [
  {
    question: 'What is input lag and system latency?',
    answer: 'Input lag is the total time delay between a physical user interaction (clicking a mouse or pressing a key) and the updated visual output appearing on screen.',
  },
  {
    question: 'How does this online latency test measure input lag?',
    answer: 'It captures hardware event timestamps using performance.now() and correlates them with subsequent requestAnimationFrame presentation cycles to calculate event-to-render delta.',
  },
  {
    question: 'What is considered good input lag for gaming?',
    answer: 'Under 10ms is considered ultra-fast for competitive esports. 10ms to 20ms is fast, 20ms to 35ms is moderate, and over 35ms is noticeable input lag.',
  },
  {
    question: 'How can I lower input lag on my PC?',
    answer: 'Increase your monitor refresh rate, disable VSync, enable G-Sync or FreeSync, increase USB mouse polling rate to 1000Hz+, and turn on low latency graphics settings like NVIDIA Reflex.',
  },
  {
    question: 'Does screen refresh rate affect input lag?',
    answer: 'Yes. Higher refresh rates reduce frame duration. A 60Hz screen has a 16.67ms frame time, whereas a 240Hz screen has a 4.17ms frame time, reducing average display delay.',
  },
];

const howToData = [
  {
    name: 'Choose test mode',
    text: 'Select Instant Response, Keypress Latency, or Visual Reaction Latency mode.',
  },
  {
    name: 'Perform physical inputs',
    text: 'Click inside the target box or press keys to generate hardware input events.',
  },
  {
    name: 'Observe real-time latency metrics',
    text: 'Review the calculated average, min, max latency, and jitter (standard deviation).',
  },
  {
    name: 'Check display frame timing',
    text: 'Monitor current FPS and frame time to verify screen refresh stability.',
  },
  {
    name: 'Analyze measurement history',
    text: 'Inspect the sample history log to identify latency spikes and variance.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'System Latency',
  modeInstant: 'Instant Response',
  modeKey: 'Keypress Latency',
  modeVisual: 'Visual Reaction Latency',
  targetClickPrompt: 'Click or tap inside this box to measure input-to-render latency',
  targetKeyPrompt: 'Press any key (or Spacebar) to measure keyboard latency',
  targetWaitPrompt: 'Wait for green background...',
  targetNowPrompt: 'CLICK NOW!',
  labelAvgLatency: 'Average Latency',
  labelMinLatency: 'Minimum Latency',
  labelMaxLatency: 'Maximum Latency',
  labelJitter: 'Latency Jitter (Std Dev)',
  labelFps: 'Current FPS',
  labelFrameTime: 'Frame Time',
  labelSamples: 'Samples',
  labelGrade: 'Latency Rating',
  gradeUltraFast: 'Ultra Fast (<10ms)',
  gradeFast: 'Fast (10-20ms)',
  gradeModerate: 'Moderate (20-35ms)',
  gradeHigh: 'High (>35ms)',
  btnReset: 'Reset Measurements',
  btnCopyReport: 'Copy Benchmark Report',
  reportCopied: 'Report Copied!',
  historyTitle: 'Recent Latency Measurements',
  pipelineTitle: 'Hardware Signal Pipeline Latency Breakdown',
  distributionTitle: 'Latency Frequency Distribution (Bell Curve)',
  sampleCol: 'Sample',
  typeCol: 'Input Type',
  latencyCol: 'Measured Latency',
};


export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'What is Input Lag and System Latency in PC Gaming and Hardware?',
    },
    {
      type: 'paragraph',
      html: 'Input lag represents the exact time delay between a user performing a physical action, such as clicking a mouse button or pressing a keyboard key, and the visual response rendering on the display screen. In competitive esports, high-speed gaming, and real-time interactive software, minimizing system latency is critical for responsiveness, aiming accuracy, and user interaction fidelity. System latency consists of multiple accumulated pipeline delays including peripheral USB polling, operating system event queue processing, game rendering engine delays, GPU frame queue buffers, and display pixel response times.',

    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'Esports Target Latency',
          trend: 'Optimal competitive benchmark',
        },
        {
          value: '1000 Hz',
          label: 'Standard USB Polling Rate',
          trend: '1.0 ms input interval',
        },
        {
          value: '240 Hz',
          label: 'High Refresh Monitor',
          trend: '4.16 ms frame interval',
        },
        {
          value: '16.6 ms',
          label: '60Hz Frame Interval',
          trend: 'Base display delay per frame',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'How Does Client Side Browser Latency Measurement Work?',
      html: 'This test leverages high precision hardware timestamps obtained via <code>performance.now()</code> combined with DOM hardware event listeners (<code>pointerdown</code> and <code>keydown</code>). By synchronizing event registration with subsequent display buffer updates via <code>requestAnimationFrame</code>, the application measures the local timing delta between physical event detection and DOM paint updates directly inside your browser process.',
    },


    {
      type: 'title',
      text: 'How Does the Input Latency Signal Pipeline Work From Switch to Display?',
    },
    {
      type: 'paragraph',
      html: 'To effectively diagnose and reduce input latency, one must understand each component in the signal chain from peripheral switch actuation to display emission. Total system latency is the sum of peripheral latency, operating system processing latency, render pipeline latency, and display panel latency.',
    },
    {
      type: 'table',
      headers: ['Pipeline Component', 'Typical Delay Range', 'Primary Bottlenecks', 'Optimization Strategy'],
      rows: [
        ['Peripheral Switch', '0.2 ms - 5.0 ms', 'Debounce algorithms, mechanical contact bounce', 'Use optical switches or lower debounce delay'],
        ['USB Polling Rate', '0.125 ms - 8.0 ms', '125 Hz vs 1000 Hz / 8000 Hz USB polling rate', 'Increase polling rate to 1000Hz or 4000Hz+'],
        ['OS Event Queue', '0.5 ms - 3.0 ms', 'Background CPU tasks, compositor overhead', 'Enable Game Mode, disable DWM desktop composition'],
        ['Game Render Engine', '4.0 ms - 20.0 ms', 'CPU bound frames, heavy thread synchronization', 'Use Reflex / Anti-Lag, reduce render scale'],
        ['GPU Frame Buffer', '8.0 ms - 33.0 ms', 'VSync enabled, double/triple frame buffering', 'Disable VSync, use G-Sync / FreeSync VRR'],
        ['Display Processing', '1.0 ms - 15.0 ms', 'TV image processing, scaler latency, overdrive', 'Enable Game Mode on TV, optimize pixel overdrive'],
      ],
    },
    {
      type: 'tip',
      title: 'How to Reduce GPU Render Queue Latency and Avoid Buffer Lag?',
      html: 'When GPU utilization reaches 99% or 100%, graphics drivers queue multiple frames in advance to smooth out frame rates. This creates massive input lag (often 30ms to 50ms). To reduce queue lag, cap your frame rate slightly below maximum GPU capability or enable technologies like NVIDIA Reflex or AMD Anti-Lag.',
    },

    {
      type: 'title',
      text: 'How Do Gaming Mice, Keyboards, and Touchscreens Compare in Input Latency?',
    },
    {
      type: 'paragraph',
      html: 'Different input devices exhibit distinct latency characteristics based on hardware architecture, communication protocols, and physical switch mechanisms. Understanding these differences allows gamers and professionals to choose optimal hardware configurations.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Gaming Mice',
          description: 'High polling rate wireless (2.4GHz) or wired connections.',
          highlight: '0.5ms - 2ms Input Lag',
          points: [
            '1000Hz to 8000Hz polling rate',
            'Optical switches eliminate mechanical debounce',
            'Low motion delay sensors',
          ],
        },
        {
          title: 'Mechanical Keyboards',
          description: 'Key matrix scanning with debounce delay control.',
          highlight: '1ms - 10ms Input Lag',
          points: [
            'Hall-effect magnetic switches with rapid trigger',
            'Matrix scan rates from 500Hz to 8000Hz',
            'Configurable actuation distance',
          ],
        },
        {
          title: 'Mobile Touchscreens',
          description: 'Capacitive touch digitizer overlay sampling.',
          highlight: '15ms - 45ms Input Lag',
          points: [
            'Touch sampling rates (120Hz - 480Hz)',
            'Display driver compositor lag',
            'Capacitive filtering algorithms',
          ],
        },
      ],
    },

    {
      type: 'title',
      text: 'How Much Display Lag Does Your Screen Refresh Rate Add?',
    },
    {
      type: 'paragraph',
      html: 'The refresh rate of your screen directly governs the minimum possible display lag. A monitor updates its screen sequentially from top to bottom. The duration between refresh frames defines the baseline display latency penalty.',
    },
    {
      type: 'list',
      items: [
        '60 Hz Display: 1 frame = 16.67 ms frame duration (Average mid-screen display lag: ~8.33 ms)',
        '120 Hz Display: 1 frame = 8.33 ms frame duration (Average mid-screen display lag: ~4.16 ms)',
        '144 Hz Display: 1 frame = 6.94 ms frame duration (Average mid-screen display lag: ~3.47 ms)',
        '240 Hz Display: 1 frame = 4.17 ms frame duration (Average mid-screen display lag: ~2.08 ms)',
        '360 Hz Display: 1 frame = 2.78 ms frame duration (Average mid-screen display lag: ~1.39 ms)',
        '540 Hz Display: 1 frame = 1.85 ms frame duration (Average mid-screen display lag: ~0.92 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Input Lag',
          definition: 'Total elapsed time from a user physical input to the corresponding visual output on the display.',
        },
        {
          term: 'Jitter (Latency Variance)',
          definition: 'The standard deviation of latency measurements across samples, indicating consistency of system timing.',
        },
        {
          term: 'VSync (Vertical Synchronization)',
          definition: 'A display technique that syncs frame rates with monitor refresh rates, preventing screen tearing but introducing significant input latency.',
        },
        {
          term: 'Variable Refresh Rate (VRR)',
          definition: 'Technologies such as G-Sync and FreeSync that dynamically match monitor refresh rate to GPU output, eliminating tearing without VSync input lag.',
        },
        {
          term: 'Pixel Response Time (GtG)',
          definition: 'The time required for a monitor pixel to change from one shade of gray to another. Distinct from input processing lag.',
        },
      ],
    },

    {
      type: 'title',
      text: 'What Are the Pros and Cons of Online Browser-Based Latency Testing?',
    },
    {
      type: 'paragraph',
      html: 'Evaluating input latency within a web browser provides instant accessibility without requiring specialized hardware oscilloscopes or high-speed phantom camera setups. However, users should understand both the advantages and inherent browser environment boundaries.',
    },
    {
      type: 'proscons',
      title: 'Browser Latency Measurement Evaluation',
      items: [
        {
          pro: 'No software installation or special hardware equipment required',
          con: 'Subject to browser event loop scheduling and OS window manager composition',
        },
        {
          pro: 'Real-time high resolution microsecond performance timer (performance.now)',
          con: 'Cannot directly measure physical OLED/LCD optical pixel response emissions',
        },
        {
          pro: 'Instant comparative benchmark between different peripherals and browsers',
          con: 'Browser security timer precision mitigation (coarsened timer accuracy)',
        },
        {
          pro: 'Accurate measurement of local event-to-render DOM update consistency',
          con: 'Background tab throttling if browser window loses focus',
        },
      ],
    },

    {
      type: 'title',
      text: 'How to Diagnose and Troubleshoot High Input Lag and Jitter?',
    },
    {
      type: 'paragraph',
      html: 'If your test results exhibit high latency (>30 ms) or elevated jitter values, review the common culprit diagnostic scenarios below.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'High Latency Diagnostic Notice',
      html: 'If your average input lag exceeds 35ms on a desktop system, check whether VSync is enabled in your graphics driver or browser setting. Hardware acceleration disabled in browser settings can also push DOM rendering onto the CPU, causing severe input lag.',
    },

    {
      type: 'title',
      text: 'How to Lower System Input Lag Step-by-Step for Optimal Performance?',
    },
    {
      type: 'paragraph',
      html: 'Follow these actionable technical steps to reduce system latency across hardware, operating system, graphics drivers, and browser environments.',
    },
    {
      type: 'summary',
      title: 'System Latency Optimization Checklist',
      items: [
        'Set mouse USB polling rate to 1000Hz or higher in peripheral configuration software.',
        'Enable Hardware-Accelerated GPU Scheduling (HAGS) in Windows display settings.',
        'Turn on Game Mode in display monitor settings to bypass internal image scalers.',
        'Use DisplayPort or HDMI 2.1 uncompressed connection cables.',
        'Disable VSync in global 3D graphics control panel and enable G-Sync / FreeSync.',
        'Enable NVIDIA Reflex Low Latency or AMD Anti-Lag in supported games.',
        'Ensure browser Hardware Acceleration is enabled under system settings.',
      ],
    },
    {
      type: 'message',
      title: 'Professional Benchmark Best Practice',
      html: 'For the most accurate test results, close background applications, run the browser window in fullscreen mode, and take at least 15-20 test samples in a single session to ensure statistically reliable averages.',
    },
  ],
};
