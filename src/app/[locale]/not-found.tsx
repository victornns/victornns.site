import Link from "next/link";
import { headers } from "next/headers";

import { commonContent } from "@/content/common";
import { getLocale, getLocalizedPath } from "@/i18n/config";

import { UIPageMain } from "@/components/ui/UIPageMain";

export default async function NotFound() {
  const locale = getLocale((await headers()).get("x-locale"));
  const { notFound } = commonContent[locale];

  return (
    <UIPageMain>
      <section className="flex flex-col items-start gap-3">
        <p className="text-wide-tracking text-xs text-muted">404</p>
        <h1 className="text-3xl font-bold uppercase sm:text-5xl">
          {notFound.title}
        </h1>
        <p className="text-muted">{notFound.description}</p>
        <Link
          href={getLocalizedPath(locale, "portfolio")}
          className="mt-4 underline underline-offset-4"
        >
          {notFound.backHome}
        </Link>
      </section>
    </UIPageMain>
  );
}
