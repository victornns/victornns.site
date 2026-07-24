import { notFound } from "next/navigation";

import { getLocale } from "@/i18n/config";
import { getSectionIdFromSlug } from "@/components/navbar";

import { PortfolioPage } from "../PortfolioPage";

type PortfolioSectionPageProps = {
  params: Promise<{ locale: string; section: string }>;
};

export default async function PortfolioSectionPage({ params }: PortfolioSectionPageProps) {
  const { locale: rawLocale, section } = await params;
  const locale = getLocale(rawLocale);

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
