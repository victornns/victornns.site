import Link from "next/link";
import type { MouseEvent } from "react";

import { prepareLocaleSwitch } from "@/components/navbar/localeSwitchState";
import type { Locale } from "@/i18n/config";

interface LocaleSwitchLinksProps {
  locale: Locale;
  localeHref: Record<Locale, string>;
  switchToPortuguese: string;
  switchToEnglish: string;
  /** Set when this instance lives inside the mobile menu, so it reopens after the switch instead of staying closed. */
  reopenMobileMenu?: boolean;
  className?: string;
}

function linkClassName(active: boolean) {
  return active
    ? "text-black"
    : "text-neutral-400 transition-colors hover:text-black";
}

/**
 * Plain-text pt/en switcher (no border/box), reused wherever the boxed
 * navbar version isn't appropriate: the project drawer and the mobile menu.
 */
export function LocaleSwitchLinks({
  locale,
  localeHref,
  switchToPortuguese,
  switchToEnglish,
  reopenMobileMenu,
  className,
}: LocaleSwitchLinksProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    prepareLocaleSwitch(event, { reopenMobileMenu });
  }

  return (
    <div
      className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] ${className ?? ""}`}
    >
      <Link
        href={localeHref.pt}
        aria-label={switchToPortuguese}
        onClick={handleClick}
        scroll={false}
        className={linkClassName(locale === "pt")}
      >
        PT
      </Link>

      <Link
        href={localeHref.en}
        aria-label={switchToEnglish}
        onClick={handleClick}
        scroll={false}
        className={linkClassName(locale === "en")}
      >
        EN
      </Link>
    </div>
  );
}
