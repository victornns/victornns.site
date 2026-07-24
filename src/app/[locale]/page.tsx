import { redirect } from "next/navigation";

import { getLocale } from "@/i18n/config";

type LocaleIndexPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleIndexPage({ params }: LocaleIndexPageProps) {
  const { locale } = await params;

  redirect(`/${getLocale(locale)}/portfolio`);
}
