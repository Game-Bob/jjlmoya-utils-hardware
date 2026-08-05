export interface PipelineBreakdown {
  usbMs: number;
  osMs: number;
  frameMs: number;
  displayMs: number;
  totalMs: number;
  usbPct: number;
  osPct: number;
  framePct: number;
  displayPct: number;
}

export class PipelineEstimator {
  public static calculateBreakdown(totalLatencyMs: number, currentFps: number): PipelineBreakdown {
    const validTotal = Math.max(1, totalLatencyMs);
    const validFps = Math.max(30, currentFps);

    const frameWindowMs = 1000 / validFps;
    const frameMs = Number((frameWindowMs / 2).toFixed(2));
    const usbMs = 0.5;
    const osMs = 1.0;
    const displayMs = Number(Math.max(0.5, validTotal - (usbMs + osMs + frameMs)).toFixed(2));

    const sum = usbMs + osMs + frameMs + displayMs;

    return {
      usbMs,
      osMs,
      frameMs,
      displayMs,
      totalMs: Number(sum.toFixed(2)),
      usbPct: Math.round((usbMs / sum) * 100),
      osPct: Math.round((osMs / sum) * 100),
      framePct: Math.round((frameMs / sum) * 100),
      displayPct: Math.round((displayMs / sum) * 100),
    };
  }
}
