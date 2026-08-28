import { redirect } from "next/navigation";

import { getLocalizedPath, type Locale } from "@/i18n/config";

type LocaleIndexPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function LocaleIndexPage({
  params,
}: LocaleIndexPageProps) {
  const { locale } = await params;

  redirect(getLocalizedPath(locale, "portfolio"));
}
