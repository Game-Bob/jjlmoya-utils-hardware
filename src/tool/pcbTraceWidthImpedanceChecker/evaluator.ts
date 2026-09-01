import { calculateTrace, type TraceInputs, type TraceResult } from "./logic";

export type TraceStatus = "empty" | "invalid" | "ready";

export interface TraceEvaluation {
  status: TraceStatus;
  result: TraceResult | null;
}

export function evaluateTrace(input: TraceInputs): TraceEvaluation {
  const result = calculateTrace(input);
  if (!result) {
    const hasValues = Object.values(input).some(
      (value) => typeof value === "number" && value > 0,
    );
    return { status: hasValues ? "invalid" : "empty", result: null };
  }
  return { status: "ready", result };
}
