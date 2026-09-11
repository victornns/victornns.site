"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LocaleSwitchLinks } from "@/components/LocaleSwitchLinks";
import type { NavbarLabels } from "@/content/navbar";
import { DesktopNav } from "@/features/navbar/components/DesktopNav";
import { MenuToggleButton } from "@/features/navbar/components/mobile/MenuToggleButton";
import { MobileMenuDrawer } from "@/features/navbar/components/mobile/MobileMenuDrawer";
import { useMobileMenu } from "@/features/navbar/components/mobile/useMobileMenu";
import type { NavbarItem } from "@/features/navbar/model";
import { useActiveSection } from "@/features/navbar/useActiveSection";
import type { Locale } from "@/i18n/config";
import { getLocaleSwitchHrefs } from "@/i18n/routes";
import { getPortfolioPath } from "@/i18n/sections";
import { joinClassNames, tw } from "@/lib/tailwind";

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
  const localeHref = getLocaleSwitchHrefs(pathname, locale);
  const mobileMenu = useMobileMenu();
  const { activeSectionId, markActive } = useActiveSection();

  return (
    <header>
      <nav
        data-portfolio-navbar="true"
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
              href={getPortfolioPath(locale)}
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
            activeSectionId={activeSectionId}
            onNavigate={markActive}
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
        activeSectionId={activeSectionId}
        onNavigate={markActive}
        labels={labels}
        locale={locale}
        localeHref={localeHref}
        skipEnterAnimation={mobileMenu.skipEnterAnimation}
      />
    </header>
  );
}
