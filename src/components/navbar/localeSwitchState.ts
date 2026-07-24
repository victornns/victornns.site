import type { MouseEvent } from "react";

const CLICK_SCROLL_KEY = "localeSwitch:scrollY";
const UNLOAD_SCROLL_KEY = "localeSwitch:unloadScrollState";
const REOPEN_MOBILE_MENU_KEY = "localeSwitch:reopenMobileMenu";

function isPlainLeftClick(event: MouseEvent<HTMLAnchorElement>): boolean {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

/**
 * Call from a locale-switch link's onClick. Switching locale is a full page
 * navigation (the locale is part of the route), so the new page mounts from
 * scratch and would otherwise reset scroll (and any open mobile menu) to
 * their defaults. Recording that state here lets the new page restore it
 * instantly instead of visibly resetting under the reader.
 */
export function prepareLocaleSwitch(
  event: MouseEvent<HTMLAnchorElement>,
  options: { reopenMobileMenu?: boolean } = {},
) {
  if (!isPlainLeftClick(event)) {
    return;
  }

  window.sessionStorage.setItem(CLICK_SCROLL_KEY, String(window.scrollY));

  if (options.reopenMobileMenu) {
    window.sessionStorage.setItem(REOPEN_MOBILE_MENU_KEY, "1");
  }
}

/**
 * Records the scroll position on ANY page unload (not just clicking a
 * locale-switch link) — covers e.g. manually editing the locale segment out
 * of the URL, where there's no click to hook into. Tagged with `identity`
 * (the current section/project, locale-independent) so the next page only
 * trusts this value if it turns out to be the very same content, not some
 * unrelated navigation that happened to also unload the page.
 */
export function saveScrollStateBeforeUnload(identity: string) {
  window.sessionStorage.setItem(
    UNLOAD_SCROLL_KEY,
    JSON.stringify({ identity, scrollY: window.scrollY }),
  );
}

/**
 * Reads and clears any saved scroll position for `currentIdentity`. The
 * explicit click-driven save (always for the same content, by construction)
 * is trusted unconditionally; the unload-driven one is only trusted if its
 * saved identity matches, so a genuine navigation to different content isn't
 * mistakenly pinned to the old scroll position.
 */
export function consumeSavedScrollPosition(currentIdentity: string): number | null {
  const clickScrollY = window.sessionStorage.getItem(CLICK_SCROLL_KEY);
  window.sessionStorage.removeItem(CLICK_SCROLL_KEY);
  if (clickScrollY !== null) {
    return Number(clickScrollY);
  }

  const rawUnloadState = window.sessionStorage.getItem(UNLOAD_SCROLL_KEY);
  window.sessionStorage.removeItem(UNLOAD_SCROLL_KEY);
  if (!rawUnloadState) {
    return null;
  }

  try {
    const { identity, scrollY } = JSON.parse(rawUnloadState) as {
      identity: string;
      scrollY: number;
    };
    return identity === currentIdentity ? scrollY : null;
  } catch {
    return null;
  }
}

/** Reads and clears whether the mobile menu should reopen after a locale switch. */
export function consumeShouldReopenMobileMenu(): boolean {
  const shouldReopen =
    window.sessionStorage.getItem(REOPEN_MOBILE_MENU_KEY) === "1";
  window.sessionStorage.removeItem(REOPEN_MOBILE_MENU_KEY);
  return shouldReopen;
}
