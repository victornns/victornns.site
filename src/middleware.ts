import { NextResponse } from "next/server";

import { defaultLocale, isValidLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { routeAliases } from "@/i18n/routes";

import type { NextRequest } from "next/server";

/** Reverse of `routeAliases`: the public slug that serves an internal route segment. */
function findCanonicalSlug(locale: Locale, internalSlug: string) {
  return Object.entries(routeAliases[locale]).find(
    ([, internal]) => internal === internalSlug,
  )?.[0];
}

/** Forwards the request, tagging it with the resolved locale so pages (notably `not-found`) can read it. */
function forward(request: NextRequest, locale: Locale, rewriteTo?: URL) {
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);

  return rewriteTo
    ? NextResponse.rewrite(rewriteTo, { request: { headers } })
    : NextResponse.next({ request: { headers } });
}

export function middleware(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const [firstSegment] = segments;
  const hasLocalePrefix = isValidLocale(firstSegment);
  const locale: Locale = hasLocalePrefix ? firstSegment : defaultLocale;
  const [publicSlug, ...rest] = hasLocalePrefix ? segments.slice(1) : segments;

  // The canonical path has the locale's public slug and no prefix for the
  // default locale (/pt/x -> /x). Computing it whole keeps every URL to a
  // single redirect instead of one hop per rule.
  const canonicalSegments = [
    ...(locale === defaultLocale ? [] : [locale]),
    ...(publicSlug
      ? [findCanonicalSlug(locale, publicSlug) ?? publicSlug, ...rest]
      : []),
  ];

  if (canonicalSegments.join("/") !== segments.join("/")) {
    const url = request.nextUrl.clone();
    url.pathname = `/${canonicalSegments.join("/")}`;
    return NextResponse.redirect(url, 308);
  }

  // Public slugs are translated back to the folder names under
  // `src/app/[locale]/`; the default locale also gets its internal prefix.
  const internalSegments = publicSlug
    ? [routeAliases[locale][publicSlug] ?? publicSlug, ...rest]
    : [];

  if (hasLocalePrefix && internalSegments[0] === publicSlug) {
    return forward(request, locale);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${[locale, ...internalSegments].join("/")}`;

  return forward(request, locale, url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
