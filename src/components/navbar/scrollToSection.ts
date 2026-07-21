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
