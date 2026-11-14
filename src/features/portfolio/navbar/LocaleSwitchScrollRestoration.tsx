"use client";

import { useEffect } from "react";

import {
  consumeSavedScrollPosition,
  saveScrollStateBeforeUnload,
} from "@/lib/localeSwitchState";

type LocaleSwitchScrollRestorationProps = {
  /** Locale-independent id for the current content (page or project id). */
  identity: string;
};

// The fragment tells apart different sections of the same page, so landing
// on another section isn't pinned to the scroll position of the previous one.
function getLocationIdentity(identity: string): string {
  return `${identity}${window.location.hash}`;
}

/**
 * Behavior-only helper (renders nothing), mounted once per portfolio page.
 * If a scroll position was saved for this same `identity` (see
 * `localeSwitchState` — either from clicking a locale-switch link, or from
 * any other unload, e.g. manually editing the locale out of the URL), it
 * restores it instantly. The new page is a full reload under a different
 * `[locale]` segment, so without this the reader would visibly land
 * elsewhere and lose their place.
 */
export function LocaleSwitchScrollRestoration({
  identity,
}: LocaleSwitchScrollRestorationProps) {
  useEffect(() => {
    function handleBeforeUnload() {
      saveScrollStateBeforeUnload(getLocationIdentity(identity));
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [identity]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const savedScrollY = consumeSavedScrollPosition(
        getLocationIdentity(identity),
      );
      if (savedScrollY === null) {
        return;
      }

      // Force an instant jump regardless of the global smooth scroll-behavior.
      const html = document.documentElement;
      const previousScrollBehavior = html.style.scrollBehavior;

      html.style.scrollBehavior = "auto";
      window.scrollTo({ top: savedScrollY, behavior: "auto" });

      requestAnimationFrame(() => {
        html.style.scrollBehavior = previousScrollBehavior;
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [identity]);

  return null;
}
