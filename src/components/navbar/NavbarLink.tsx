import Link from "next/link";

import { scrollToSection } from "@/components/navbar/scrollToSection";

import type { MouseEvent } from "react";

import type { NavbarItem } from "@/components/navbar/Navbar";

interface NavbarLinkProps {
  item: NavbarItem;
  className?: string;
  /** Extra classes applied on top of `className` while `isActive` is true. */
  activeClassName?: string;
  /** Whether the reader is currently scrolled to this item's section. */
  isActive?: boolean;
  onNavigate?: () => void;
}

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

export function NavbarLink({
  item,
  className = "",
  activeClassName = "",
  isActive = false,
  onNavigate,
}: NavbarLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      isModifiedEvent(event)
    ) {
      return;
    }

    event.preventDefault();

    const nextPathname = new URL(item.href, window.location.origin).pathname;

    if (window.location.pathname !== nextPathname) {
      window.history.pushState(null, "", nextPathname);
    }

    scrollToSection(item.id, "smooth");
    onNavigate?.();
  }

  return (
    <Link
      href={item.href}
      scroll={false}
      aria-current={isActive ? "location" : undefined}
      className={isActive ? `${className} ${activeClassName}`.trim() : className}
      onClick={handleClick}
    >
      {item.label}
    </Link>
  );
}
