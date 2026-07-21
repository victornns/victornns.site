import { redirect } from "next/navigation";

import { defaultLocale, isValidLocale } from "@/i18n/config";

type LocaleIndexPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleIndexPage({ params }: LocaleIndexPageProps) {
  const { locale } = await params;

  redirect(`/${isValidLocale(locale) ? locale : defaultLocale}/portfolio`);
}
