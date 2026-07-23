"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

import { scrollToSection } from "@/components/navbar/scrollToSection";
import type { SectionId } from "@/content/navbar";
import { TOKENS } from "@/lib/constants";

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
  className = `
    relative inline-block py-3 leading-none
    after:absolute after:inset-x-0 after:bottom-0 after:h-0.5
    after:origin-center after:scale-x-0 after:bg-black
    after:transition-transform after:duration-200
    hover:after:scale-x-100
  `,
}: NavbarLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
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
  return (
    <nav
      data-portfolio-navbar="true"
      className="fixed inset-x-0 top-0 z-50 bg-white px-6 md:px-12"
    >
      <div
        className="
          flex w-full items-center justify-between
          border-b border-neutral-200 py-3
        "
        style={{ maxWidth: TOKENS.layout.maxWidth }}
      >
        <Link
          href="/"
          className="shrink-0 font-semibold uppercase leading-none"
        >
          Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li key={item.id}>
                <NavbarLink item={item} />
              </li>
            ))}
          </ul>

          <div className="h-8 w-px bg-neutral-300" />

          <Link
            href="/resume"
            className="shrink-0 bg-black px-5 py-3 leading-none text-white"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
