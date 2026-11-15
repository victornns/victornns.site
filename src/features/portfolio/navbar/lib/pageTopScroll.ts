/** A link to the current page without a `#fragment`: Next.js would jump to the top instantly instead of scrolling there like the fragment links do. */
export function isSamePageTopLink(href: string): boolean {
  const { pathname, hash } = new URL(href, window.location.href);
  return pathname === window.location.pathname && hash === "";
}

export function scrollToTopOfPage(href: string) {
  if (window.location.hash) {
    window.history.pushState(null, "", href);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
