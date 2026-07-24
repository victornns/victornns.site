"use client";

import Link from "next/link";

import { MobileMenuDrawer } from "@/components/navbar/MobileMenuDrawer";
import { NavbarLink } from "@/components/navbar/NavbarLink";
import type { SectionId } from "@/content/navbar";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/i18n/config";

import { useState } from "react";

export type { SectionId };

export interface NavbarItem {
  id: SectionId;
  label: string;
  href: string;
}

export interface NavbarProps {
  locale: Locale;
  items: NavbarItem[];
}

const MOBILE_MENU_BUTTON_CLASSNAME =
  "fixed right-6 top-3 z-[80] inline-flex h-8 w-8 items-center justify-center pointer-events-auto text-black transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:hidden md:right-12";

const DESKTOP_LINK_CLASSNAME = `
  relative inline-block py-3 leading-none
  after:absolute after:inset-x-0 after:bottom-0 after:h-0.5
  after:origin-center after:scale-x-0 after:bg-black
  after:transition-transform after:duration-200
  hover:after:scale-x-100
`;

export function Navbar({ locale, items }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const resumeHref = getLocalizedPath(
    locale,
    locale === "en" ? "resume" : "curriculo",
  );

  const labels = {
    close: locale === "pt" ? "Fechar menu" : "Close menu",
    menu: locale === "pt" ? "Menu" : "Menu",
    navigation: locale === "pt" ? "Navegacao" : "Navigation",
    resume: "Resume",
    openMenu: locale === "pt" ? "Abrir menu" : "Open menu",
  };

  return (
    <>
      <nav
        data-portfolio-navbar="true"
        className="fixed inset-x-0 top-0 z-30 bg-white px-6 md:px-12"
      >
        <div
          className="
            flex w-full items-center justify-between
            border-b border-neutral-200 py-3
          "
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
                  <NavbarLink item={item} className={DESKTOP_LINK_CLASSNAME} />
                </li>
              ))}
            </ul>

            <div className="h-8 w-px bg-neutral-300" />

            <Link
              href={resumeHref}
              className="shrink-0 bg-black px-5 py-3 leading-none text-white"
            >
              {labels.resume}
            </Link>
          </div>
        </div>
      </nav>

      <button
        type="button"
        aria-label={isMobileMenuOpen ? labels.close : labels.openMenu}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu-drawer"
        className={MOBILE_MENU_BUTTON_CLASSNAME}
        onClick={() => setIsMobileMenuOpen((currentOpen) => !currentOpen)}
      >
        <span className="relative block h-3.5 w-5" aria-hidden="true">
          <span
            className={
              isMobileMenuOpen
                ? "absolute left-0 top-1/2 block h-px w-5 -translate-y-1/2 rotate-45 bg-current transition-transform duration-200"
                : "absolute left-0 top-0 block h-px w-5 bg-current transition-transform duration-200"
            }
          />
          <span
            className={
              isMobileMenuOpen
                ? "absolute left-0 top-1/2 block h-px w-5 -translate-y-1/2 -rotate-45 bg-current transition-transform duration-200"
                : "absolute left-0 top-1/2 block h-px w-5 -translate-y-1/2 bg-current transition-transform duration-200"
            }
          />
          <span
            className={
              isMobileMenuOpen
                ? "absolute left-0 bottom-0 block h-px w-5 bg-current opacity-0 transition-opacity duration-150"
                : "absolute left-0 bottom-0 block h-px w-5 bg-current transition-opacity duration-150"
            }
          />
        </span>
      </button>

      <div id="mobile-menu-drawer">
        <MobileMenuDrawer
          open={isMobileMenuOpen}
          onOpenChange={setIsMobileMenuOpen}
          items={items}
          resumeHref={resumeHref}
          labels={labels}
        />
      </div>
    </>
  );
}
