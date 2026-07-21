"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { TOKENS } from "@/lib/constants";
import { scrollToSection } from "@/components/navbar/scrollToSection";
import type { SectionId } from "@/content/navbar";

export type { SectionId };

export interface NavbarItem {
  id: SectionId;
  label: string;
  href: string;
}

export interface NavbarProps {
  items: NavbarItem[];
}

interface NavbarLinkProps {
  item: NavbarItem;
  className?: string;
}

function NavbarLink({
  item,
  className = "hover:underline underline-offset-4",
}: NavbarLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented) return;

    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const nextPathname = new URL(item.href, window.location.origin).pathname;

    if (window.location.pathname !== nextPathname) {
      window.history.pushState(null, "", nextPathname);
    }

    scrollToSection(item.id, "smooth");
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

export function Navbar({ items }: NavbarProps) {
  const links = (
    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
      {items.map((item) => (
        <li key={item.id}>
          <NavbarLink item={item} />
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      data-portfolio-navbar="true"
      className="fixed left-0 top-0 w-full z-50"
    >
      <div
        className="w-full px-6 py-3 md:px-12 bg-white"
        style={{ maxWidth: TOKENS.layout.maxWidth }}
      >
        {links}
      </div>
    </nav>
  );
}
