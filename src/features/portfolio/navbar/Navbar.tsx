"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavbarLabels } from "@/content/navbar";
import { DesktopNav } from "@/features/portfolio/navbar/components/DesktopNav";
import { MenuToggleButton } from "@/features/portfolio/navbar/components/mobile/MenuToggleButton";
import { MobileMenuDrawer } from "@/features/portfolio/navbar/components/mobile/MobileMenuDrawer";
import { useMobileMenu } from "@/features/portfolio/navbar/components/mobile/useMobileMenu";
import {
  isSamePageTopLink,
  scrollToTopOfPage,
} from "@/features/portfolio/navbar/lib/pageTopScroll";
import type {
  NavbarItem,
  NavbarItemId,
} from "@/features/portfolio/navbar/model";
import { useActiveSection } from "@/features/portfolio/navbar/useActiveSection";
import { useLocationHash } from "@/features/portfolio/navbar/useLocationHash";
import { LocaleSwitchLinks } from "@/features/portfolio/ui/LocaleSwitchLinks";
import type { Locale } from "@/i18n/config";
import { getLocaleSwitchHrefs } from "@/i18n/localeSwitch";
import { getPagePath } from "@/i18n/routes";
import { isPlainLeftClick } from "@/lib/navigation";
import { joinClassNames, tw } from "@/lib/tailwind";

import type { MouseEvent } from "react";

// Fixed height instead of padding, so the toggle button (which shares this
// same height) can center itself with flexbox no matter the value.
const NAVBAR_ROW_HEIGHT_CLASSNAME = tw`h-12 lg:h-16`;

type NavbarProps = {
  locale: Locale;
  items: NavbarItem[];
  labels: NavbarLabels;
};

export function Navbar({ locale, items, labels }: NavbarProps) {
  const pathname = usePathname();
  const [hash, setHash] = useLocationHash();
  const localeHref = getLocaleSwitchHrefs(pathname, hash, locale);
  const mobileMenu = useMobileMenu();
  const { activeSectionId, markActive } = useActiveSection(locale);

  const projectsPath = getPagePath(locale, "projects");
  const isProjectsPage =
    pathname === projectsPath || pathname.startsWith(`${projectsPath}/`);
  const activeItemId: NavbarItemId | null = isProjectsPage
    ? "projects"
    : activeSectionId;

  function handleNavigate(item: NavbarItem) {
    if (item.id !== "projects") {
      markActive(item.id);
    }
    setHash(new URL(item.href, window.location.href).hash);
  }

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    const logoHref = getPagePath(locale, "about");
    if (!isPlainLeftClick(event) || !isSamePageTopLink(logoHref)) {
      return;
    }

    event.preventDefault();
    scrollToTopOfPage(logoHref);
    setHash("");
  }

  return (
    <header>
      <nav
        aria-label={labels.navigation}
        className="fixed inset-x-0 top-0 z-navbar bg-white px-6 lg:px-12"
      >
        <div
          className={joinClassNames(
            "flex w-full items-center justify-between border-b",
            NAVBAR_ROW_HEIGHT_CLASSNAME,
          )}
        >
          <div className="flex items-center gap-4">
            <Link
              href={getPagePath(locale, "about")}
              onClick={handleLogoClick}
              className="text-wide-tracking shrink-0 text-xs font-semibold leading-none sm:text-base"
            >
              {labels.logo}
            </Link>

            <LocaleSwitchLinks
              variant="boxed"
              locale={locale}
              localeHref={localeHref}
            />
          </div>

          <DesktopNav
            locale={locale}
            items={items}
            activeItemId={activeItemId}
            onNavigate={handleNavigate}
          />
        </div>
      </nav>

      {/* The nav above is fixed, so this sibling reserves its height in the flow. */}
      <div aria-hidden="true" className={NAVBAR_ROW_HEIGHT_CLASSNAME} />

      <MenuToggleButton
        isOpen={mobileMenu.isOpen}
        label={mobileMenu.isOpen ? labels.closeMenu : labels.openMenu}
        className={NAVBAR_ROW_HEIGHT_CLASSNAME}
        onToggle={mobileMenu.toggle}
      />

      <MobileMenuDrawer
        open={mobileMenu.isOpen}
        onOpenChange={mobileMenu.setIsOpen}
        items={items}
        activeItemId={activeItemId}
        onNavigate={handleNavigate}
        labels={labels}
        locale={locale}
        localeHref={localeHref}
        skipEnterAnimation={mobileMenu.skipEnterAnimation}
      />
    </header>
  );
}
