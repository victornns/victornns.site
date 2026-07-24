import { getLocale } from "@/i18n/config";

import { PortfolioPage } from "./PortfolioPage";

type PortfolioPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Portfolio({ params }: PortfolioPageProps) {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);

  return <PortfolioPage locale={locale} />;
}
