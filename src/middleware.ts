import { NextResponse } from "next/server";

import { locales, defaultLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { getLegacyRedirectPath } from "@/i18n/legacyRoutes";
import { routeAliases } from "@/i18n/routes";

import type { NextRequest } from "next/server";

function findCanonicalSlug(locale: Locale, internalSlug: string) {
  const aliases = routeAliases[locale];
  if (!aliases) return undefined;

  return Object.entries(aliases).find(
    ([, internal]) => internal === internalSlug,
  )?.[0];
}

function redirectTo(request: NextRequest, path: string) {
  const target = new URL(path, request.nextUrl);
  const url = request.nextUrl.clone();
  url.pathname = target.pathname;
  url.hash = target.hash;

  return NextResponse.redirect(url, 308);
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
  const { pathname } = request.nextUrl;

  const segments = pathname.split("/").filter(Boolean);
  const hasLocalePrefix = (locales as readonly string[]).includes(
    segments[0] ?? "",
  );
  const locale: Locale = hasLocalePrefix
    ? (segments[0] as Locale)
    : defaultLocale;
  const routeSegments = hasLocalePrefix ? segments.slice(1) : segments;
  const [slug, ...rest] = routeSegments;

  const legacyRedirectPath = getLegacyRedirectPath(locale, routeSegments);
  if (legacyRedirectPath) {
    return redirectTo(request, legacyRedirectPath);
  }

  if (slug) {
    const canonicalSlug = findCanonicalSlug(locale, slug);

    if (canonicalSlug && canonicalSlug !== slug) {
      const url = request.nextUrl.clone();
      const newSegments = hasLocalePrefix
        ? [locale, canonicalSlug, ...rest]
        : [canonicalSlug, ...rest];
      url.pathname = `/${newSegments.join("/")}`;

      return NextResponse.redirect(url, 308);
    }
  }

  if (hasLocalePrefix) {
    // The default locale is canonical without a prefix: /pt/x -> /x, /pt -> /.
    if (locale === defaultLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/${[slug, ...rest].filter(Boolean).join("/")}`;
      return NextResponse.redirect(url, 308);
    }

    const internalSlug = slug ? routeAliases[locale]?.[slug] : undefined;

    if (!internalSlug) {
      return forward(request, locale);
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${[locale, internalSlug, ...rest].join("/")}`;

    return forward(request, locale, url);
  }

  const internalSlug = slug
    ? (routeAliases[defaultLocale]?.[slug] ?? slug)
    : undefined;
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${internalSlug ? `/${[internalSlug, ...rest].join("/")}` : ""}`;

  return forward(request, locale, url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
