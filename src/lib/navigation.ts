import type { MouseEvent } from "react";

// True when it's safe to intercept the click ourselves — not a modified
// click (which should open normally) and not already handled.
export function isPlainLeftClick(
  event: MouseEvent<HTMLAnchorElement>,
): boolean {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}
