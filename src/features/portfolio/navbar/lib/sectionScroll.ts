import type { Locale } from "@/i18n/config";
import {
  getSectionFragment,
  sectionOrder,
  type SectionId,
} from "@/i18n/sections";

/**
 * Returns whichever About page section the reader is currently positioned
 * in, using a line a quarter of the way down the viewport as the reference:
 * the active section is the one whose top has scrolled past that line but is
 * closest to it. So a section is picked up once its top reaches the upper
 * quarter of the screen, not only once it nears the top. Returns `null`
 * before any section has reached it yet, or on pages without these sections.
 */
export function getActiveSectionId(locale: Locale): SectionId | null {
  const activeLine = window.innerHeight / 4;

  let activeId: SectionId | null = null;
  let activeTop = -Infinity;

  for (const sectionId of sectionOrder) {
    const section = document.getElementById(
      getSectionFragment(locale, sectionId),
    );
    if (!section) continue;

    const top = section.getBoundingClientRect().top;
    if (top <= activeLine && top > activeTop) {
      activeId = sectionId;
      activeTop = top;
    }
  }

  return activeId;
}
