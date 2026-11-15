import { Fragment } from "react";

import { NavbarLink } from "@/features/portfolio/navbar/components/NavbarLink";
import { ResumeButton } from "@/features/portfolio/navbar/components/ResumeButton";
import type {
  NavbarItem,
  NavbarItemId,
} from "@/features/portfolio/navbar/model";
import type { Locale } from "@/i18n/config";
import { tw } from "@/lib/tailwind";

const DESKTOP_LINK_CLASSNAME = tw`relative inline-block py-3 leading-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-black after:transition-transform after:duration-200 hover:after:scale-x-100`;

const DESKTOP_LINK_ACTIVE_CLASSNAME = tw`after:scale-x-100`;

const DESKTOP_SECONDARY_LINK_CLASSNAME = tw`relative inline-block py-3 text-sm leading-none text-muted transition-colors after:absolute after:bottom-0.5 after:left-1/2 after:size-[3px] after:-translate-x-1/2 after:scale-0 after:rounded-full after:bg-black after:transition-transform after:duration-200 hover:text-black`;

const DESKTOP_SECONDARY_LINK_ACTIVE_CLASSNAME = tw`text-black after:scale-100`;

const BRANCH_SEPARATOR_CLASSNAME = tw`relative h-4 w-px bg-neutral-300 after:absolute after:left-full after:top-1/2 after:h-px after:w-1.5 after:bg-neutral-300`;

function NavSeparator({
  previous,
  item,
}: {
  previous?: NavbarItem;
  item: NavbarItem;
}) {
  if (!previous) {
    return null;
  }

  if (item.level === "primary") {
    return <li aria-hidden="true" className="h-4 w-px bg-neutral-300" />;
  }

  if (previous.level === "primary") {
    return <li aria-hidden="true" className={BRANCH_SEPARATOR_CLASSNAME} />;
  }

  if (previous.level === "secondary") {
    return (
      <li aria-hidden="true" className="text-sm text-muted">
        ·
      </li>
    );
  }

  return null;
}

type DesktopNavProps = {
  locale: Locale;
  items: NavbarItem[];
  activeItemId: NavbarItemId | null;
  onNavigate: (item: NavbarItem) => void;
};

export function DesktopNav({
  locale,
  items,
  activeItemId,
  onNavigate,
}: DesktopNavProps) {
  return (
    <div className="hidden items-center gap-8 xl:flex">
      <ul className="flex items-center gap-4">
        {items.map((item, index) => {
          const isPrimary = item.level === "primary";

          return (
            <Fragment key={item.id}>
              <NavSeparator previous={items[index - 1]} item={item} />
              <li>
                <NavbarLink
                  item={item}
                  className={
                    isPrimary
                      ? DESKTOP_LINK_CLASSNAME
                      : DESKTOP_SECONDARY_LINK_CLASSNAME
                  }
                  activeClassName={
                    isPrimary
                      ? DESKTOP_LINK_ACTIVE_CLASSNAME
                      : DESKTOP_SECONDARY_LINK_ACTIVE_CLASSNAME
                  }
                  isActive={item.id === activeItemId}
                  onNavigate={() => onNavigate(item)}
                />
              </li>
            </Fragment>
          );
        })}
      </ul>

      <div className="h-8 w-px bg-neutral-300" />

      <ResumeButton locale={locale} />
    </div>
  );
}
