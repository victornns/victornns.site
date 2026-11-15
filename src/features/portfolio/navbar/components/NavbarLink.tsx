"use client";

import Link from "next/link";

import type { NavbarItem } from "@/features/portfolio/navbar/model";
import { isPlainLeftClick } from "@/lib/navigation";
import { joinClassNames } from "@/lib/tailwind";

import type { MouseEvent } from "react";

/** A link to the current page without a `#fragment`: Next.js would jump to the top instantly instead of scrolling there like the fragment links do. */
function isSamePageTopLink(href: string): boolean {
  const { pathname, hash } = new URL(href, window.location.href);
  return pathname === window.location.pathname && hash === "";
}

function scrollToTopOfPage(href: string) {
  if (window.location.hash) {
    window.history.pushState(null, "", href);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

type NavbarLinkProps = {
  item: NavbarItem;
  className?: string;
  /** Extra classes applied on top of `className` while `isActive` is true. */
  activeClassName?: string;
  /** Whether the reader is currently on this item's page or section. */
  isActive?: boolean;
  onNavigate?: () => void;
};

export function NavbarLink({
  item,
  className = "",
  activeClassName = "",
  isActive = false,
  onNavigate,
}: NavbarLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isPlainLeftClick(event)) {
      return;
    }

    if (isSamePageTopLink(item.href)) {
      event.preventDefault();
      scrollToTopOfPage(item.href);
    }

    onNavigate?.();
  }

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "location" : undefined}
      className={joinClassNames(className, isActive && activeClassName)}
      onClick={handleClick}
    >
      {item.label}
    </Link>
  );
}
