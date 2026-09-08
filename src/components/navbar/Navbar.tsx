"use client";

import Link from "next/link";

import { MobileMenuDrawer } from "@/components/navbar/MobileMenuDrawer";
import { NavbarLink } from "@/components/navbar/NavbarLink";
import { useNavbar } from "@/components/navbar/useNavbar";
import type { SectionId } from "@/content/navbar";
import type { Locale } from "@/i18n/config";
import { joinClassNames, tw } from "@/lib/tailwind";

import type { MouseEvent } from "react";

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

// Fixed height instead of padding, so the toggle button (which shares this
// same height) can center itself with flexbox no matter the value.
const NAVBAR_ROW_HEIGHT_CLASSNAME = tw`h-12 lg:h-16`;

const MOBILE_MENU_BUTTON_CLASSNAME = tw`pointer-events-auto fixed right-5 top-0 z-menu-toggle inline-flex w-8 items-center justify-center text-black transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:right-12 xl:hidden ${NAVBAR_ROW_HEIGHT_CLASSNAME}`;

const DESKTOP_LINK_CLASSNAME = tw`relative inline-block py-3 leading-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-black after:transition-transform after:duration-200 hover:after:scale-x-100`;

const DESKTOP_LINK_ACTIVE_CLASSNAME = tw`after:scale-x-100`;

const LOCALE_LINK_CLASSNAME = tw`inline-flex min-w-9 items-center justify-center border px-2 py-1 text-xs leading-none`;

function localeLinkClassName(active: boolean) {
  return joinClassNames(
    LOCALE_LINK_CLASSNAME,
    active
      ? tw`border-black bg-black text-white`
      : tw`text-black transition-colors hover:border-black`,
  );
}

type LocaleToggleProps = {
  locale: Locale;
  localeHref: Record<Locale, string>;
  switchToPortuguese: string;
  switchToEnglish: string;
  onSwitchClick: (event: MouseEvent<HTMLAnchorElement>) => void;
};

function LocaleToggle({
  locale,
  localeHref,
  switchToPortuguese,
  switchToEnglish,
  onSwitchClick,
}: LocaleToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <Link
        href={localeHref.pt}
        aria-label={switchToPortuguese}
        onClick={onSwitchClick}
        scroll={false}
        className={localeLinkClassName(locale === "pt")}
      >
        PT
      </Link>

      <Link
        href={localeHref.en}
        aria-label={switchToEnglish}
        onClick={onSwitchClick}
        scroll={false}
        className={localeLinkClassName(locale === "en")}
      >
        EN
      </Link>
    </div>
  );
}

type DesktopNavProps = {
  items: NavbarItem[];
  activeSectionId: SectionId | null;
  setActiveSectionId: (sectionId: SectionId) => void;
  resumeHref: string;
  resumeLabel: string;
};

function DesktopNav({
  items,
  activeSectionId,
  setActiveSectionId,
  resumeHref,
  resumeLabel,
}: DesktopNavProps) {
  return (
    <div className="hidden items-center gap-8 xl:flex">
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
        {resumeLabel}
      </Link>
    </div>
  );
}

type MenuToggleButtonProps = {
  isOpen: boolean;
  label: string;
  onToggle: () => void;
};

function MenuToggleButton({ isOpen, label, onToggle }: MenuToggleButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={isOpen}
      aria-controls="mobile-menu-drawer"
      className={MOBILE_MENU_BUTTON_CLASSNAME}
      onClick={onToggle}
    >
      <span className="relative block h-3.5 w-5" aria-hidden="true">
        <span
          className={
            isOpen
              ? "absolute left-0 top-1/2 block h-px w-5 -translate-y-1/2 rotate-45 bg-current transition-transform duration-200"
              : "absolute left-0 top-0 block h-px w-5 bg-current transition-transform duration-200"
          }
        />
        <span
          className={
            isOpen
              ? "absolute left-0 top-1/2 block h-px w-5 -translate-y-1/2 -rotate-45 bg-current transition-transform duration-200"
              : "absolute left-0 top-1/2 block h-px w-5 -translate-y-1/2 bg-current transition-transform duration-200"
          }
        />
        <span
          className={
            isOpen
              ? "absolute bottom-0 left-0 block h-px w-5 bg-current opacity-0 transition-opacity duration-150"
              : "absolute bottom-0 left-0 block h-px w-5 bg-current transition-opacity duration-150"
          }
        />
      </span>
    </button>
  );
}

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
    <header>
      <nav
        data-portfolio-navbar="true"
        aria-label={labels.navigation}
        className="fixed inset-x-0 top-0 z-navbar bg-white px-6 lg:px-12"
      >
        <div
          className={`flex w-full items-center justify-between border-b ${NAVBAR_ROW_HEIGHT_CLASSNAME}`}
        >
          <div className="flex items-center gap-4">
            <Link
              href={portfolioHref}
              className="text-wide-tracking shrink-0 text-xs font-semibold leading-none sm:text-base"
            >
              {logo}
            </Link>

            <LocaleToggle
              locale={locale}
              localeHref={localeHref}
              switchToPortuguese={labels.switchToPortuguese}
              switchToEnglish={labels.switchToEnglish}
              onSwitchClick={handleLocaleSwitchClick}
            />
          </div>

          <DesktopNav
            items={items}
            activeSectionId={activeSectionId}
            setActiveSectionId={setActiveSectionId}
            resumeHref={resumeHref}
            resumeLabel={labels.resume}
          />
        </div>
      </nav>

      {/* The nav above is fixed, so this sibling reserves its height in the flow. */}
      <div aria-hidden="true" className={NAVBAR_ROW_HEIGHT_CLASSNAME} />

      <MenuToggleButton
        isOpen={isMobileMenuOpen}
        label={isMobileMenuOpen ? labels.close : labels.openMenu}
        onToggle={() => setIsMobileMenuOpen((currentOpen) => !currentOpen)}
      />

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
    </header>
  );
}
