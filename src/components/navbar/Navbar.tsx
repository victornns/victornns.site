"use client";

import Link from "next/link";

import { MobileMenuDrawer } from "@/components/navbar/MobileMenuDrawer";
import { NavbarLink } from "@/components/navbar/NavbarLink";
import { useNavbar } from "@/components/navbar/useNavbar";
import type { SectionId } from "@/content/navbar";
import type { Locale } from "@/i18n/config";

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

// Fixed height instead of padding, so the toggle button below (which shares
// this same height) can center itself with flexbox no matter the value.
const NAVBAR_ROW_HEIGHT_CLASSNAME = "h-12 lg:h-16";

const MOBILE_MENU_BUTTON_CLASSNAME = `fixed right-6 top-0 z-[80] w-8 ${NAVBAR_ROW_HEIGHT_CLASSNAME} inline-flex items-center justify-center pointer-events-auto text-black transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden lg:right-12`;

const DESKTOP_LINK_CLASSNAME = `
  relative inline-block py-3 leading-none
  after:absolute after:inset-x-0 after:bottom-0 after:h-0.5
  after:origin-center after:scale-x-0 after:bg-black
  after:transition-transform after:duration-200
  hover:after:scale-x-100
`;

const DESKTOP_LINK_ACTIVE_CLASSNAME = "after:scale-x-100";

export function Navbar({ locale, items }: NavbarProps) {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    skipMobileMenuEnterAnimation,
    activeSectionId,
    setActiveSectionId,
    logo,
    resumeHref,
    portfolioHref,
    localeHref,
    labels,
    handleLocaleSwitchClick,
  } = useNavbar(locale);

  return (
    <>
      <nav
        data-portfolio-navbar="true"
        className="fixed inset-x-0 top-0 z-30 bg-white px-6 lg:px-12"
      >
        <div
          className={`flex w-full items-center justify-between border-b ${NAVBAR_ROW_HEIGHT_CLASSNAME}`}
        >
          <div className="flex items-center gap-4">
            <Link
              href={portfolioHref}
              className="shrink-0 font-semibold uppercase leading-none"
            >
              {logo}
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href={localeHref.pt}
                aria-label={labels.switchToPortuguese}
                onClick={handleLocaleSwitchClick}
                scroll={false}
                className={
                  locale === "pt"
                    ? "inline-flex min-w-9 items-center justify-center border border-black bg-black px-2 py-1 text-xs leading-none text-white"
                    : "inline-flex min-w-9 items-center justify-center border px-2 py-1 text-xs leading-none text-black transition-colors hover:border-black"
                }
              >
                PT
              </Link>

              <Link
                href={localeHref.en}
                aria-label={labels.switchToEnglish}
                onClick={handleLocaleSwitchClick}
                scroll={false}
                className={
                  locale === "en"
                    ? "inline-flex min-w-9 items-center justify-center border border-black bg-black px-2 py-1 text-xs leading-none text-white"
                    : "inline-flex min-w-9 items-center justify-center border px-2 py-1 text-xs leading-none text-black transition-colors hover:border-black"
                }
              >
                EN
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {items.map((item) => (
                <li key={item.id}>
                  <NavbarLink
                    item={item}
                    className={DESKTOP_LINK_CLASSNAME}
                    activeClassName={DESKTOP_LINK_ACTIVE_CLASSNAME}
                    isActive={item.id === activeSectionId}
                    onNavigate={() => setActiveSectionId(item.id)}
                  />
                </li>
              ))}
            </ul>

            <div className="h-8 w-px bg-neutral-300" />

            <Link
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-black px-5 py-3 leading-none text-white"
            >
              {labels.resume}
            </Link>
          </div>
        </div>
      </nav>

      {/*
        The nav above is `fixed` (no space in the flow), so this reserves its
        exact height instead of leaving content to sit underneath it.
        -mb-16 cancels out the gap-24 the page's flex layout (see layout.tsx)
        would otherwise also add right after this spacer.
      */}
      <div aria-hidden="true" className={`${NAVBAR_ROW_HEIGHT_CLASSNAME}`} />

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

      <MobileMenuDrawer
        open={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
        items={items}
        activeSectionId={activeSectionId}
        setActiveSectionId={setActiveSectionId}
        resumeHref={resumeHref}
        labels={labels}
        locale={locale}
        localeHref={localeHref}
        skipEnterAnimation={skipMobileMenuEnterAnimation}
      />
    </>
  );
}
