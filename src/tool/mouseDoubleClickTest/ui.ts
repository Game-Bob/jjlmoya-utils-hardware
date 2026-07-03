export interface MouseDoubleClickTestUI extends Record<string, string> {
  badge: string;
  clickTarget: string;
  clickTargetHint: string;
  totalClicks: string;
  suspiciousClicks: string;
  fastestGap: string;
  healthScore: string;
  thresholdLabel: string;
  thresholdUnit: string;
  cleanEvent: string;
  suspiciousEvent: string;
  reset: string;
  statusIdle: string;
  statusClean: string;
  statusWarning: string;
  lastGap: string;
  logTitle: string;
  emptyLog: string;
  leftButton: string;
  middleButton: string;
  rightButton: string;
  backButton: string;
  forwardButton: string;
  otherButton: string;
}
