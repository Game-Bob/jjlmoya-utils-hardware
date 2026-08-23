import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'private-webcam-camera-test-online';
const title = 'Private Webcam Test';
const description = 'Check camera permission, live video, resolution, aspect ratio, orientation and observed frame delivery before a meeting or stream.';

const faq = [
  {
    question: 'Does this webcam test record or upload my video?',
    answer: 'No. The page requests a live video track for the local preview and never requests microphone audio. It does not create a recording, take a snapshot or upload camera frames. Stopping the test closes every active media track.',
  },
  {
    question: 'Why does the browser ask for camera permission?',
    answer: 'A website cannot open a camera without browser permission. The prompt lets you choose whether this page may receive a temporary local video stream. You can revoke access from the browser site controls at any time.',
  },
  {
    question: 'What is the difference between configured and observed FPS?',
    answer: 'Configured FPS is the rate selected for this preview. Observed FPS estimates how many frames are actually arriving while the tab is visible. Poor light, a busy computer or a weak camera connection can make the observed rate lower.',
  },
  {
    question: 'Why can the available resolution differ from the camera specification?',
    answer: 'The operating system, camera driver and current app choose a compatible mode together. Another app, a virtual camera, power limits or the camera connection can result in a lower resolution. This test shows what is available here, not every mode printed on the camera box.',
  },
];

const howTo = [
  {
    name: 'Open the private preview',
    text: 'Select Open camera and allow video access in the browser permission prompt. Audio is not requested.',
  },
  {
    name: 'Inspect framing and image',
    text: 'Check focus, exposure, background and eye position in the live preview. Toggle the composition guide or mirror view if helpful.',
  },
  {
    name: 'Verify the delivered stream',
    text: 'Read resolution, aspect ratio, orientation, configured FPS and observed frame delivery. Keep the tab visible while frame delivery settles.',
  },
  {
    name: 'Switch or stop the camera',
    text: 'Choose another available camera for comparison, or select Stop camera to close all video tracks before leaving.',
  },
];

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

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Webcam Test Questions',
  faq,
  bibliographyTitle: 'Webcam Setup and Troubleshooting Sources',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Test Your Webcam Before a Video Call',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Use the preview to answer the questions that matter before a call: does the camera open, is it the correct camera, is your face clear, and does the picture move smoothly? Test from the same desk, browser and lighting you plan to use in the meeting.',
    },
    {
      type: 'list',
      items: [
        'Choose the correct camera if more than one is connected',
        'Put the camera near eye level and keep your eyes around the upper third of the frame',
        'Light your face from the front instead of sitting with a bright window behind you',
        'Close meeting apps and other browser tabs if the camera is already in use',
        'Check resolution and frame delivery, then judge the actual picture with your own eyes',
      ],
    },
    {
      type: 'title',
      text: 'Fix a Webcam That Is Black or Unavailable',
      level: 3,
    },
    {
      type: 'table',
      headers: ['What you see', 'Likely cause', 'What to try'],
      rows: [
        ['Permission denied', 'Camera access is blocked for this site or in system privacy settings', 'Allow camera access in both places, reload the page and try again'],
        ['Black preview or camera busy', 'Another meeting app or browser tab is using the camera', 'Close Zoom, Meet, Teams and other camera tabs, then retry'],
        ['Wrong image', 'A virtual camera or another connected webcam was selected', 'Choose another source when the camera selector appears'],
        ['Dark or grainy picture', 'Your face has too little front light or a bright light is behind you', 'Face a window or place a soft lamp behind the screen'],
        ['Soft or stuttering video', 'Low light, computer load or an unstable USB connection', 'Add light, close heavy apps and connect the camera directly'],
      ],
    },
    {
      type: 'title',
      text: 'Understand Resolution and Frame Delivery',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A 1280 × 720 picture is usually enough for a normal call. A 1920 × 1080 picture can look sharper, but only when the meeting app, computer and connection preserve that quality. Configured FPS is the target for this preview; observed FPS estimates the frames that are arriving while this tab remains visible. Neither number can score autofocus, skin tone, lens quality or how another meeting app will process the image.',
    },
    {
      type: 'tip',
      title: 'Match the real meeting setup',
      html: 'Test at the same time of day, with the same camera position and light. Meeting apps can crop the frame, blur the background or choose a different quality, so run their own preview as a final check too.',
    },
    {
      type: 'title',
      text: 'Frame and Light Yourself Clearly',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Raise the camera close to eye level, leave a little space above your head and include your shoulders so the frame does not feel cramped. Keep the strongest light in front of you and simplify a distracting background. If you wear glasses, raise the lamp or move it slightly to the side until reflections leave your eyes.',
    },
  ],
  ui: {
    privacyNote: 'No recording · No upload · No audio',
    permissionHeading: 'Ready to check your camera?',
    permissionBody: 'Open a private live preview to check the picture and video format available in this tab. Stop camera closes it immediately.',
    startAction: 'Open camera',
    stopAction: 'Stop camera',
    retryAction: 'Try again',
    deviceLabel: 'Camera source',
    devicePlaceholder: 'Choose camera',
    defaultDevice: 'Camera',
    mirrorAction: 'Mirror view',
    guideAction: 'Framing guide',
    stageLabel: 'Private live webcam preview',
    resolutionLabel: 'Resolution',
    aspectLabel: 'Aspect ratio',
    orientationLabel: 'Orientation',
    configuredFpsLabel: 'Configured FPS',
    observedFpsLabel: 'Observed FPS',
    frameDeliveryLabel: 'Frame delivery',
    landscapeValue: 'Landscape',
    portraitValue: 'Portrait',
    squareValue: 'Square',
    frameStable: 'Near configured rate',
    frameReduced: 'Below configured rate',
    frameConstrained: 'Strongly reduced',
    framePending: 'Waiting for frames',
    statusIdle: 'Camera is closed. Open it when you are ready to inspect the preview.',
    statusStarting: 'Waiting for camera permission and the first video frame',
    statusReady: 'Preview is live. Check focus, light, framing and delivery.',
    statusStopped: 'Camera stopped. All video tracks from this test are closed.',
    statusHidden: 'Keep this tab visible for a meaningful observed frame rate.',
    statusUnsupported: 'This browser does not expose camera access to the page.',
    errorPermissionDenied: 'Camera permission was denied. Allow camera access in the browser site controls and try again.',
    errorNoCamera: 'No available camera was found. Connect or enable a webcam and try again.',
    errorInUse: 'The camera could not start. Close other apps using it, then try again.',
    errorSecureContext: 'Camera access requires a secure HTTPS page or localhost.',
    errorGeneric: 'The camera could not be opened. Check browser permission and device availability.',
    limitHeading: 'What this result can prove',
    limitBody: 'It confirms the picture and frame delivery available in this tab. It cannot grade lens quality, autofocus or the processing used by Zoom, Meet, Teams or another app.',
    localOnlyLabel: 'Private camera check',
    emptyValue: 'Not available',
    fpsUnit: 'FPS',
  },
};
