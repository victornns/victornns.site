"use client";

import Link from "next/link";

import {
  isSamePageTopLink,
  scrollToTopOfPage,
} from "@/features/portfolio/navbar/lib/pageTopScroll";
import type { NavbarItem } from "@/features/portfolio/navbar/model";
import { isPlainLeftClick } from "@/lib/navigation";
import { joinClassNames } from "@/lib/tailwind";

import type { MouseEvent } from "react";

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
