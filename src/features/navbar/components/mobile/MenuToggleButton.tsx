import { MOBILE_MENU_DRAWER_ID } from "@/features/navbar/components/mobile/MobileMenuDrawer";
import { joinClassNames, tw } from "@/lib/tailwind";

const MENU_TOGGLE_BUTTON_CLASSNAME = tw`pointer-events-auto fixed right-5 top-0 z-menu-toggle inline-flex w-8 items-center justify-center text-black transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:right-12 xl:hidden`;

const BAR_CLASSNAME = tw`absolute left-0 block h-px w-5 bg-current`;

const BARS = {
  open: [
    tw`top-1/2 -translate-y-1/2 rotate-45 transition-transform duration-200`,
    tw`top-1/2 -translate-y-1/2 -rotate-45 transition-transform duration-200`,
    tw`bottom-0 opacity-0 transition-opacity duration-150`,
  ],
  closed: [
    tw`top-0 transition-transform duration-200`,
    tw`top-1/2 -translate-y-1/2 transition-transform duration-200`,
    tw`bottom-0 transition-opacity duration-150`,
  ],
};

type MenuToggleButtonProps = {
  isOpen: boolean;
  label: string;
  /** Shares the navbar row height so the button centers itself within it. */
  className: string;
  onToggle: () => void;
};

export function MenuToggleButton({
  isOpen,
  label,
  className,
  onToggle,
}: MenuToggleButtonProps) {
  const bars = isOpen ? BARS.open : BARS.closed;

  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={isOpen}
      aria-controls={MOBILE_MENU_DRAWER_ID}
      className={joinClassNames(MENU_TOGGLE_BUTTON_CLASSNAME, className)}
      onClick={onToggle}
    >
      <span className="relative block h-3.5 w-5" aria-hidden="true">
        {bars.map((barClassName, index) => (
          <span
            key={index}
            className={joinClassNames(BAR_CLASSNAME, barClassName)}
          />
        ))}
      </span>
    </button>
  );
}
