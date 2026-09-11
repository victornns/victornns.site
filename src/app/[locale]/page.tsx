import { redirect } from "next/navigation";

import type { Locale } from "@/i18n/config";
import { getPortfolioPath } from "@/i18n/sections";

type LocaleIndexPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function LocaleIndexPage({
  params,
}: LocaleIndexPageProps) {
  const { locale } = await params;

  redirect(getPortfolioPath(locale));
}
