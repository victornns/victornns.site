import { notFound, redirect } from "next/navigation";

import { locales, type Locale } from "@/i18n/config";
import {
  getSectionIdFromSlug,
  getSectionPath,
  getSectionSlugs,
} from "@/i18n/sections";

import { PortfolioView } from "../PortfolioView";

type PortfolioSectionPageProps = {
  params: Promise<{ locale: Locale; section: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getSectionSlugs(locale).map((section) => ({ locale, section })),
  );
}

/** Resolves `section` as another locale's slug, so a mislocalized URL can redirect to that locale. */
function findSectionInOtherLocale(locale: Locale, section: string) {
  for (const candidate of locales) {
    if (candidate === locale) continue;

    const sectionId = getSectionIdFromSlug(candidate, section);
    if (sectionId) {
      return { locale: candidate, sectionId };
    }
  }

  return undefined;
}

export default async function PortfolioSectionPage({
  params,
}: PortfolioSectionPageProps) {
  const { locale, section } = await params;

  const sectionId = getSectionIdFromSlug(locale, section);
  if (sectionId) {
    return <PortfolioView locale={locale} activeSectionId={sectionId} />;
  }

  const match = findSectionInOtherLocale(locale, section);
  if (match) {
    redirect(getSectionPath(match.locale, match.sectionId));
  }

  notFound();
}
