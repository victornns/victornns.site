import { notFound } from "next/navigation";

import { defaultLocale, isValidLocale, type Locale } from "@/i18n/config";
import { getSectionIdFromSlug } from "@/components/navbar";

import { PortfolioPage } from "@/views/PortfolioPage";

type PortfolioSectionPageProps = {
  params: Promise<{ locale: string; section: string }>;
};

export default async function PortfolioSectionPage({ params }: PortfolioSectionPageProps) {
  const { locale: rawLocale, section } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale;

  const sectionId = getSectionIdFromSlug(locale, section);
  if (!sectionId) {
    notFound();
  }

  return (
    <PortfolioPage
      locale={locale}
      activeSectionId={sectionId}
    />
  );
}
