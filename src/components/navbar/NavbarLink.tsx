import Link from "next/link";

import { scrollToSection } from "@/components/navbar/scrollToSection";

import type { MouseEvent } from "react";

import type { NavbarItem } from "@/components/navbar/Navbar";

interface NavbarLinkProps {
  item: NavbarItem;
  className?: string;
  onNavigate?: () => void;
}

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

export function NavbarLink({
  item,
  className = "",
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
      className={className}
      onClick={handleClick}
    >
      {item.label}
    </Link>
  );
}
