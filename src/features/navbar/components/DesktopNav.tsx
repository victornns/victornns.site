import { NavbarLink } from "@/features/navbar/components/NavbarLink";
import { ResumeButton } from "@/features/navbar/components/ResumeButton";
import type { NavbarItem } from "@/features/navbar/model";
import type { Locale } from "@/i18n/config";
import type { SectionId } from "@/i18n/sections";
import { tw } from "@/lib/tailwind";

const DESKTOP_LINK_CLASSNAME = tw`relative inline-block py-3 leading-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-black after:transition-transform after:duration-200 hover:after:scale-x-100`;

const DESKTOP_LINK_ACTIVE_CLASSNAME = tw`after:scale-x-100`;

type DesktopNavProps = {
  locale: Locale;
  items: NavbarItem[];
  activeSectionId: SectionId | null;
  onNavigate: (sectionId: SectionId) => void;
};

export function DesktopNav({
  locale,
  items,
  activeSectionId,
  onNavigate,
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
              onNavigate={() => onNavigate(item.id)}
            />
          </li>
        ))}
      </ul>

      <div className="h-8 w-px bg-neutral-300" />

      <ResumeButton locale={locale} />
    </div>
  );
}
