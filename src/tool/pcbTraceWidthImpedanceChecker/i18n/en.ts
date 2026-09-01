import type { FAQPage, HowTo, SoftwareApplication } from "schema-dts";
import type { WithContext } from "schema-dts";
import type { SEOSection } from "../../../types";
import type { PcbTraceWidthImpedanceCheckerLocaleContent } from "../entry";
import { bibliography } from "../bibliography";

const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PCB Trace Width and Impedance Checker",
  description:
    "Screen a PCB trace for thermal width, voltage drop, power loss and a separate controlled impedance estimate.",
  applicationCategory: "EngineeringApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does this PCB trace checker calculate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It estimates the copper width needed for a chosen current and temperature rise, then reports resistance, voltage drop, power loss and the impedance produced by the same width.",
      },
    },
    {
      "@type": "Question",
      name: "Does the checker use the PCB layer type?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. External traces use the microstrip model and the external thermal constant. Internal traces use the stripline model and the more conservative internal thermal constant.",
      },
    },
    {
      "@type": "Question",
      name: "How are repetitive pulses treated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The thermal estimate uses peak current multiplied by the square root of duty cycle as an RMS equivalent. Pulse duration is also used to show I squared R energy for each pulse, but a single transient still needs a transient thermal analysis.",
      },
    },
    {
      "@type": "Question",
      name: "Can the impedance result approve a PCB for fabrication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It is a screening estimate based on nominal geometry and dielectric constant. A fabricator must confirm the finished stackup, tolerances, solder mask, copper profile and test coupon.",
      },
    },
    {
      "@type": "Question",
      name: "Why can the thermal width and impedance width disagree?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thermal sizing grows from current and allowed temperature rise, while impedance depends on width relative to dielectric height, copper thickness and dielectric constant. They are different constraints on the same trace.",
      },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to screen a PCB trace width and impedance",
  step: [
    {
      "@type": "HowToStep",
      name: "Describe the current",
      text: "Choose steady current or repetitive pulse mode, then enter current, pulse duration and duty cycle when applicable.",
    },
    {
      "@type": "HowToStep",
      name: "Describe the copper path",
      text: "Choose external or internal layer, enter copper thickness, allowed temperature rise, route length and the width available on the board.",
    },
    {
      "@type": "HowToStep",
      name: "Review both constraints",
      text: "Compare the thermal width with available space, then compare the impedance at that width with the target and take the result to the fabricator.",
    },
  ],
};

const seo: SEOSection[] = [
  { type: "title", text: "Screen a PCB trace before routing it", level: 2 },
  {
    type: "paragraph",
    html: "A trace can be wide enough to carry current and still be the wrong width for a controlled impedance signal. This PCB trace width calculator keeps those decisions visible together: it sizes copper for a chosen temperature rise, measures the electrical penalty of that width and checks the signal geometry independently.",
  },
  {
    type: "paragraph",
    html: "Enter the current your route actually carries, not the rating printed on a nearby supply. For a steady 2 A route on 35 µm external copper with a 10 °C rise, the thermal model asks for a wider conductor than a small logic trace. The same width then produces a resistance, voltage drop and loss that are easier to judge against the rest of the power path.",
  },
  {
    type: "title",
    text: "Thermal sizing and impedance answer different questions",
    level: 3,
  },
  {
    type: "paragraph",
    html: "The thermal screen uses the familiar empirical relationship I = k × ΔT^0.44 × A^0.725, where A is copper cross section in square mils and k changes between external and internal layers. In pulse mode, the tool uses peak current multiplied by the square root of duty cycle as a repetitive RMS heating proxy. That does not model a one off surge, a via field or a heat sink plane.",
  },
  {
    type: "list",
    items: [
      "Use the finished copper thickness from the fabricator rather than nominal foil weight alone.",
      "Use the smallest allowed temperature rise when nearby components or insulation are temperature sensitive.",
      "Treat negative space margin as a routing conflict, not as a soft recommendation.",
      "If the impedance width and thermal width differ, ask whether the net is a power route, a signal route or two separate design intents.",
    ],
  },
  { type: "title", text: "How to read the trace scene", level: 3 },
  {
    type: "paragraph",
    html: "The solid copper band is the minimum thermal width. The pale band is the width available in your layout. The dashed reference line is the width that would meet the impedance target under the entered stackup assumptions. The result panel also reports impedance at the thermal width, so you can see whether the current carrying decision moved the signal away from its target.",
  },
  { type: "title", text: "What to verify before fabrication", level: 3 },
  {
    type: "paragraph",
    html: "A nominal impedance equation cannot know the finished dielectric thickness, resin content, etch profile, solder mask, adjacent copper or tolerance band. IPC-2152 also points toward chart based conductor sizing that depends on board construction and heat spreading. Use this page to frame the engineering conversation, then use the manufacturer stackup and a field solver or test coupon for a controlled impedance release.",
  },
  {
    type: "tip",
    title: "A screening result is not a fabrication approval",
    html: "Keep the thermal, voltage drop and impedance checks as separate review notes. Confirm vias, neck downs, planes, ambient temperature, pulsed thermal behavior, creepage and the fabricator tolerance before releasing copper geometry.",
  },
];

export const content: PcbTraceWidthImpedanceCheckerLocaleContent = {
  slug: "pcb-trace-width-impedance-calculator",
  title: "PCB Trace Width and Impedance Checker",
  description:
    "Screen a PCB route for thermal copper width, voltage drop, power loss and controlled impedance using its layer and stackup geometry.",
  ui: {
    metricLabel: "Metric",
    imperialLabel: "Imperial",
    steadyLabel: "Steady current",
    pulseLabel: "Repetitive pulse",
    currentProfileTitle: "Current profile",
    steadyCurrentLabel: "Continuous current",
    pulseCurrentLabel: "Peak pulse current",
    pulseDurationLabel: "Pulse duration",
    dutyCycleLabel: "Duty cycle",
    copperPathTitle: "Copper path",
    layerLabel: "Route layer",
    externalLabel: "External",
    internalLabel: "Internal",
    copperThicknessLabel: "Copper thickness",
    temperatureRiseLabel: "Allowed rise",
    lengthLabel: "Trace length",
    availableWidthLabel: "Width available",
    signalGeometryTitle: "Signal geometry",
    targetImpedanceLabel: "Target impedance",
    dielectricHeightLabel: "Dielectric to reference plane",
    dielectricConstantLabel: "Relative permittivity",
    thermalWidthTitle: "Minimum thermal width",
    availableWidthTitle: "Space after thermal width",
    impedanceTitle: "Impedance at thermal width",
    voltageDropTitle: "Voltage drop at peak",
    powerLossTitle: "Copper power loss",
    pulseEnergyTitle: "Energy per pulse",
    statusEmpty: "Enter the route conditions to begin.",
    statusInvalid:
      "Use positive values and keep temperature rise and duty cycle in range.",
    statusReady:
      "Three checks are live: thermal width, electrical loss and impedance.",
    externalModel: "External layer uses microstrip",
    internalModel: "Internal layer uses stripline",
    thermalBadge: "Waiting for thermal fit",
    impedanceBadge: "Waiting for impedance review",
    widthFits: "Fits the available space",
    widthDoesNotFit: "Needs more routing space",
    impedanceClose: "within a 10% screen",
    impedanceFar: "outside a 10% screen",
    resetLabel: "Reset",
    presetTitle: "Load a real routing brief",
    presetLogic: "2 A power rail",
    presetSignal: "50 ohm logic trace",
    presetPulse: "8 A pulse path",
    sceneLabel:
      "Trace width comparison showing thermal, available and impedance widths",
    sceneCaption:
      "Choose the route conditions and the copper will draw itself.",
    referenceLineLabel: "Impedance target width",
    thermalLineLabel: "Thermal minimum",
    availableLineLabel: "Available corridor",
    modelNote: "The layer changes both heat escape and field geometry.",
  },
  seo,
  faqTitle: "PCB trace width and impedance questions",
  faq: [
    {
      question: "Should I enter average current or peak current?",
      answer:
        "Use the continuous current for a steady route. In repetitive pulse mode, enter the peak current, pulse duration and duty cycle so the thermal screen can use an RMS equivalent. A one time inrush still needs a transient review.",
    },
    {
      question: "Why does an internal trace need more copper?",
      answer:
        "The quick empirical thermal model uses a lower constant for internal layers because buried copper generally sheds heat less effectively than an exposed outer trace. Real board construction can change that result.",
    },
    {
      question: "What does width available mean?",
      answer:
        "Enter the corridor your layout can allocate to the finished trace. A negative space result means the thermal minimum is wider than that corridor and needs a wider route, more copper, parallel paths or a different temperature target.",
    },
    {
      question: "Does this calculate a real 50 ohm PCB trace?",
      answer:
        "It estimates nominal microstrip or stripline impedance from width, copper thickness, dielectric height and relative permittivity. The fabricator must confirm finished geometry and tolerance before a controlled impedance release.",
    },
    {
      question: "Why is the voltage drop calculated at peak current?",
      answer:
        "That exposes the worst instantaneous I times R drop for a pulse. The pulse energy readout uses I squared R times duration, while the thermal width uses the repetitive RMS proxy.",
    },
  ],
  bibliographyTitle: "PCB design references",
  bibliography,
  howTo: [
    {
      name: "Describe current behavior",
      text: "Choose steady current or repetitive pulse and fill in the current profile.",
    },
    {
      name: "Enter finished stackup assumptions",
      text: "Choose the layer, copper thickness, temperature rise and dielectric geometry.",
    },
    {
      name: "Make the routing decision",
      text: "Compare the thermal minimum, available corridor and impedance target, then verify the final stackup with your fabricator.",
    },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
