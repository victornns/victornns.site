import type { Locale } from "@/i18n/config";

import { PortfolioView } from "./PortfolioView";

type PortfolioPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;

  return <PortfolioView locale={locale} />;
}
