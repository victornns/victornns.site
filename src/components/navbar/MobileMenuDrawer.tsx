"use client";

import Link from "next/link";

import { Drawer } from "@/components/drawer/Drawer";
import { LocaleSwitchLinks } from "@/components/LocaleSwitchLinks";
import { NavbarLink } from "@/components/navbar/NavbarLink";

import type { NavbarItem, SectionId } from "@/components/navbar/Navbar";
import type { Locale } from "@/i18n/config";

const MOBILE_LINK_ACTIVE_CLASSNAME = "font-semibold text-black";

interface MobileMenuDrawerLabels {
  close: string;
  menu: string;
  navigation: string;
  resume: string;
  switchToPortuguese: string;
  switchToEnglish: string;
}

interface MobileMenuDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: NavbarItem[];
  activeSectionId: SectionId | null;
  setActiveSectionId: (sectionId: SectionId) => void;
  resumeHref: string;
  labels: MobileMenuDrawerLabels;
  locale: Locale;
  localeHref: Record<Locale, string>;
  skipEnterAnimation?: boolean;
}

export function MobileMenuDrawer({
  open,
  onOpenChange,
  items,
  activeSectionId,
  setActiveSectionId,
  resumeHref,
  labels,
  locale,
  localeHref,
  skipEnterAnimation,
}: MobileMenuDrawerProps) {
  function closeDrawer() {
    onOpenChange(false);
  }

  return (
    <Drawer
      id="mobile-menu-drawer"
      open={open}
      onOpenChange={onOpenChange}
      title={labels.menu}
      closeLabel={labels.close}
      contentClassName="[--drawer-panel-width:82vw] max-w-sm pt-20"
      showCloseButton={false}
      skipEnterAnimation={skipEnterAnimation}
    >
      <div className="flex min-h-full flex-col gap-10">
        <header className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-wide-tracking text-muted">
              {labels.navigation}
            </p>

            <LocaleSwitchLinks
              locale={locale}
              localeHref={localeHref}
              switchToPortuguese={labels.switchToPortuguese}
              switchToEnglish={labels.switchToEnglish}
              reopenMobileMenu
            />
          </div>
          <h2 className="text-3xl font-semibold leading-none">{labels.menu}</h2>
        </header>

        <nav aria-label={labels.menu}>
          <ul className="flex flex-col border-t">
            {items.map((item) => (
              <li key={item.id}>
                <NavbarLink
                  item={item}
                  onNavigate={() => {
                    closeDrawer();
                    setActiveSectionId(item.id);
                  }}
                  isActive={item.id === activeSectionId}
                  activeClassName={MOBILE_LINK_ACTIVE_CLASSNAME}
                  className="flex items-center justify-between border-b py-4 text-lg leading-none transition hover:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                />
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center bg-black px-5 py-4 text-sm text-wide-tracking text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          onClick={closeDrawer}
        >
          {labels.resume}
        </Link>
      </div>
    </Drawer>
  );
}
