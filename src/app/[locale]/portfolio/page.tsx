import { defaultLocale, isValidLocale, type Locale } from "@/i18n/config";

import { PortfolioPage } from "@/views/PortfolioPage";

type PortfolioPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Portfolio({ params }: PortfolioPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale;

  return <PortfolioPage locale={locale} />;
}
