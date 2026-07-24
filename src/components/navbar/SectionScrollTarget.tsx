"use client";

import { useEffect } from "react";
import type { SectionId } from "@/content/navbar";
import { scrollToSection } from "@/components/navbar/scrollToSection";
import {
  consumeSavedScrollPosition,
  saveScrollStateBeforeUnload,
} from "@/components/navbar/localeSwitchState";

type SectionScrollTargetProps = {
  /** Omitted on the bare portfolio route, which has no specific section to land on. */
  sectionId?: SectionId;
  /** Locale-independent id for the current content (project id, section id, or "portfolio"). */
  identity: string;
};

/**
 * Behavior-only helper (renders nothing), mounted once for every portfolio
 * page. Two jobs, in priority order:
 *  - If a scroll position was saved for this same `identity` (see
 *    `localeSwitchState` — either from clicking a locale-switch link, or from
 *    any other unload, e.g. manually editing the locale out of the URL),
 *    restore it instantly. The new page is a full reload under a different
 *    `[locale]` segment, so without this the reader would visibly land at the
 *    top and (if a section target applies) scroll all the way back down again.
 *  - Otherwise, on a normal visit to a friendly section URL (e.g.
 *    `/projetos`, `/en/projects`), smoothly scroll to that section, the same
 *    way clicking a navbar link does.
 */
export function SectionScrollTarget({
  sectionId,
  identity,
}: SectionScrollTargetProps) {
  useEffect(() => {
    function handleBeforeUnload() {
      saveScrollStateBeforeUnload(identity);
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [identity]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const savedScrollY = consumeSavedScrollPosition(identity);

      if (savedScrollY === null) {
        if (sectionId) {
          scrollToSection(sectionId, "auto");
        }
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
  }, [sectionId, identity]);

  return null;
}
