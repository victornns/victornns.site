import { notFound, redirect } from "next/navigation";

import { getLocale, getLocalizedPath, locales } from "@/i18n/config";
import { getSectionIdFromSlug } from "@/components/navbar";

import { PortfolioPage } from "../PortfolioPage";

type PortfolioSectionPageProps = {
  params: Promise<{ locale: string; section: string }>;
};

export default async function PortfolioSectionPage({ params }: PortfolioSectionPageProps) {
  const { locale: rawLocale, section } = await params;
  const locale = getLocale(rawLocale);

  const sectionId = getSectionIdFromSlug(locale, section);
  if (sectionId) {
    return <PortfolioPage locale={locale} activeSectionId={sectionId} />;
  }

  // `section` might be another locale's own word for it (e.g. the URL
  // dropped its locale prefix but kept that locale's section slug) — redirect
  // to the fully-qualified URL for the locale it actually belongs to.
  const matchedLocale = locales.find(
    (candidate) => candidate !== locale && getSectionIdFromSlug(candidate, section),
  );

  if (matchedLocale) {
    redirect(getLocalizedPath(matchedLocale, `portfolio/${section}`));
  }

  notFound();
}
