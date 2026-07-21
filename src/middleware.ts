import { NextResponse } from "next/server";

import { locales, defaultLocale, routeAliases } from "@/i18n/config";

import type { NextRequest } from "next/server";
import type { Locale } from "@/i18n/config";

function findCanonicalSlug(locale: Locale, internalSlug: string) {
  const aliases = routeAliases[locale];
  if (!aliases) return undefined;

  return Object.entries(aliases).find(([, internal]) => internal === internalSlug)?.[0];
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const segments = pathname.split("/").filter(Boolean);
  const hasLocalePrefix = (locales as readonly string[]).includes(segments[0] ?? "");
  const locale: Locale = hasLocalePrefix ? (segments[0] as Locale) : defaultLocale;
  const [slug, ...rest] = hasLocalePrefix ? segments.slice(1) : segments;

  if (slug) {
    const canonicalSlug = findCanonicalSlug(locale, slug);

    if (canonicalSlug && canonicalSlug !== slug) {
      const url = request.nextUrl.clone();
      const newSegments = hasLocalePrefix ? [locale, canonicalSlug, ...rest] : [canonicalSlug, ...rest];
      url.pathname = `/${newSegments.join("/")}`;

      return NextResponse.redirect(url, 308);
    }
  }

  if (hasLocalePrefix) {
    const internalSlug = slug ? routeAliases[locale]?.[slug] : undefined;

    if (!internalSlug) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${[locale, internalSlug, ...rest].join("/")}`;

    return NextResponse.rewrite(url);
  }

  const internalSlug = slug ? (routeAliases[defaultLocale]?.[slug] ?? slug) : undefined;
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${internalSlug ? `/${[internalSlug, ...rest].join("/")}` : ""}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
