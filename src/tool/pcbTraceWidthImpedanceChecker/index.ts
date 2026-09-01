import { pcbTraceWidthImpedanceChecker } from "./entry";
import type { ToolDefinition } from "../../types";

export * from "./entry";

export const PCB_TRACE_WIDTH_IMPEDANCE_CHECKER_TOOL: ToolDefinition = {
  entry: pcbTraceWidthImpedanceChecker,
  Component: () => import("./component.astro"),
  SEOComponent: () => import("./seo.astro"),
  BibliographyComponent: () => import("./bibliography.astro"),
};
