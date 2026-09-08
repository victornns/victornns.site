export const SEPARATORS = {
  default: " / ",
  bullet: " • ",
  list: ", ",
  dash: " - ",
} as const;

export function sanitizeUrlForDisplay(url: string): string {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

// Generic period shape, shared by education and experience items.
export function formatPeriod(
  period: { start: string; end?: string },
  present: string,
): string {
  return `${period.start}${SEPARATORS.dash}${period.end || present}`;
}
