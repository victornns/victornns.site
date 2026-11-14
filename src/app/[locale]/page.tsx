import { redirect } from "next/navigation";

import type { Locale } from "@/i18n/config";
import { getPagePath } from "@/i18n/routes";

type LocaleIndexPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function LocaleIndexPage({
  params,
}: LocaleIndexPageProps) {
  const { locale } = await params;

  redirect(getPagePath(locale, "about"));
}
