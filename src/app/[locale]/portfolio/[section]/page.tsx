import { notFound, redirect } from "next/navigation";

import { getLocalizedPath, locales, type Locale } from "@/i18n/config";
import { getSectionIdFromSlug, getSectionSlugs } from "@/components/navbar";

import { PortfolioView } from "../PortfolioView";

type PortfolioSectionPageProps = {
  params: Promise<{ locale: Locale; section: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getSectionSlugs(locale).map((section) => ({ locale, section })),
  );
}

export default async function PortfolioSectionPage({
  params,
}: PortfolioSectionPageProps) {
  const { locale, section } = await params;

  const sectionId = getSectionIdFromSlug(locale, section);
  if (sectionId) {
    return <PortfolioView locale={locale} activeSectionId={sectionId} />;
  }

  // `section` may be another locale's slug — if it resolves there, redirect
  // to that locale's URL.
  const matchedLocale = locales.find(
    (candidate) =>
      candidate !== locale && getSectionIdFromSlug(candidate, section),
  );

  if (matchedLocale) {
    redirect(getLocalizedPath(matchedLocale, `portfolio/${section}`));
  }

  notFound();
}
