import { headers } from "next/headers";
import Link from "next/link";

import { commonContent } from "@/content/common";
import { getHomePath, getLocale } from "@/i18n/config";

export default async function NotFound() {
  const locale = getLocale((await headers()).get("x-locale"));
  const { notFound } = commonContent[locale];

  return (
    <main className="flex flex-col items-center gap-3 px-6 py-16 text-center">
      <p className="text-wide-tracking text-xs text-muted">404</p>
      <h1 className="text-3xl font-semibold uppercase">{notFound.title}</h1>
      <p className="text-muted">{notFound.description}</p>
      <Link href={getHomePath(locale)} className="mt-4 underline">
        {notFound.backHome}
      </Link>
    </main>
  );
}
