import type { SectionId } from "@/content/navbar";

const NAVBAR_SELECTOR = "[data-portfolio-navbar='true']";
const EXTRA_OFFSET_PX = 25;

function getNavbarHeight(): number {
  const navbar = document.querySelector<HTMLElement>(NAVBAR_SELECTOR);
  return navbar?.offsetHeight ?? 0;
}

/**
 * Scrolls to a portfolio section while compensating the fixed navbar height.
 */
export function scrollToSection(
  sectionId: SectionId,
  behavior: ScrollBehavior = "smooth",
): boolean {
  const section = document.getElementById(sectionId);
  if (!section) return false;

  const top =
    section.getBoundingClientRect().top +
    window.scrollY -
    getNavbarHeight() -
    EXTRA_OFFSET_PX;

  window.scrollTo({
    top: Math.max(0, top),
    behavior,
  });

  return true;
}

/**
 * Returns whichever of `sectionIds` the reader is currently positioned in,
 * using the middle of the viewport as the reference line: the active section
 * is the one whose top has scrolled past that line but is closest to it. So
 * a section is picked up as soon as it reaches the vertical center of the
 * screen, not only once it nears the top. Returns `null` before any section
 * has reached it yet (e.g. while still reading the intro).
 */
export function getActiveSectionId(sectionIds: SectionId[]): SectionId | null {
  const activeLine = window.innerHeight / 4;

  let activeId: SectionId | null = null;
  let activeTop = -Infinity;

  for (const sectionId of sectionIds) {
    const section = document.getElementById(sectionId);
    if (!section) continue;

    const top = section.getBoundingClientRect().top;
    if (top <= activeLine && top > activeTop) {
      activeId = sectionId;
      activeTop = top;
    }
  }

  return activeId;
}
