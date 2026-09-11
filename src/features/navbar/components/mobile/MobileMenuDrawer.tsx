"use client";

import { Drawer } from "@/components/drawer/Drawer";
import { LocaleSwitchLinks } from "@/components/LocaleSwitchLinks";
import type { NavbarLabels } from "@/content/navbar";
import { NavbarLink } from "@/features/navbar/components/NavbarLink";
import { ResumeButton } from "@/features/navbar/components/ResumeButton";
import type { NavbarItem } from "@/features/navbar/model";
import type { Locale } from "@/i18n/config";
import type { SectionId } from "@/i18n/sections";
import { tw } from "@/lib/tailwind";

export const MOBILE_MENU_DRAWER_ID = "mobile-menu-drawer";

const MOBILE_LINK_CLASSNAME = tw`flex items-center justify-between border-b py-4 text-lg leading-none transition hover:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black`;

const MOBILE_LINK_ACTIVE_CLASSNAME = tw`font-semibold text-black`;

type MobileMenuDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: NavbarItem[];
  activeSectionId: SectionId | null;
  onNavigate: (sectionId: SectionId) => void;
  labels: NavbarLabels;
  locale: Locale;
  localeHref: Record<Locale, string>;
  skipEnterAnimation?: boolean;
};

export function MobileMenuDrawer({
  open,
  onOpenChange,
  items,
  activeSectionId,
  onNavigate,
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
      id={MOBILE_MENU_DRAWER_ID}
      open={open}
      onOpenChange={onOpenChange}
      title={labels.menu}
      closeLabel={labels.closeMenu}
      contentClassName={tw`max-w-sm pt-20 [--drawer-panel-width:82vw]`}
      showCloseButton={false}
      skipEnterAnimation={skipEnterAnimation}
    >
      <div className="flex min-h-full flex-col gap-10">
        <header className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <p className="text-wide-tracking text-xs text-muted">
              {labels.navigation}
            </p>

            <LocaleSwitchLinks
              locale={locale}
              localeHref={localeHref}
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
                  className={MOBILE_LINK_CLASSNAME}
                  activeClassName={MOBILE_LINK_ACTIVE_CLASSNAME}
                  isActive={item.id === activeSectionId}
                  onNavigate={() => {
                    closeDrawer();
                    onNavigate(item.id);
                  }}
                />
              </li>
            ))}
          </ul>
        </nav>

        <ResumeButton locale={locale} onClick={closeDrawer} />
      </div>
    </Drawer>
  );
}
