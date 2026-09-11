"use client";

import Link from "next/link";

import { switchLocaleLabels } from "@/content/common";
import { locales, type Locale } from "@/i18n/config";
import { prepareLocaleSwitch } from "@/lib/localeSwitchState";
import { joinClassNames, tw } from "@/lib/tailwind";

import type { MouseEvent } from "react";

type LocaleSwitchVariant = "text" | "boxed";

const VARIANT_CLASSNAMES: Record<
  LocaleSwitchVariant,
  { container: string; link: string; active: string; inactive: string }
> = {
  text: {
    container: tw`text-wide-tracking flex items-center gap-3 text-xs`,
    link: "",
    active: tw`text-black`,
    inactive: tw`text-muted transition-colors hover:text-black`,
  },
  boxed: {
    container: tw`flex items-center gap-2`,
    link: tw`inline-flex min-w-9 items-center justify-center border px-2 py-1 text-xs leading-none`,
    active: tw`border-black bg-black text-white`,
    inactive: tw`text-black transition-colors hover:border-black`,
  },
};

type LocaleSwitchLinksProps = {
  locale: Locale;
  localeHref: Record<Locale, string>;
  variant?: LocaleSwitchVariant;
  /** Set when this instance lives inside the mobile menu, so it reopens after the switch instead of staying closed. */
  reopenMobileMenu?: boolean;
  className?: string;
};

export function LocaleSwitchLinks({
  locale,
  localeHref,
  variant = "text",
  reopenMobileMenu,
  className,
}: LocaleSwitchLinksProps) {
  const classNames = VARIANT_CLASSNAMES[variant];

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    prepareLocaleSwitch(event, { reopenMobileMenu });
  }

  return (
    <div className={joinClassNames(classNames.container, className)}>
      {locales.map((targetLocale) => (
        <Link
          key={targetLocale}
          href={localeHref[targetLocale]}
          aria-label={switchLocaleLabels[targetLocale]}
          onClick={handleClick}
          scroll={false}
          className={joinClassNames(
            classNames.link,
            targetLocale === locale ? classNames.active : classNames.inactive,
          )}
        >
          {targetLocale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
