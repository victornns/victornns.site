import { defaultLocale, isValidLocale, type Locale } from "@/i18n/config";

import { AboutSection } from "@/views/AboutSection";
import { ContactsSection } from "@/views/ContactsSection";
import { ExperienceSection } from "@/views/ExperienceSection";
import { ProjectsSection } from "@/views/ProjectsSection";

type PortfolioPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale;

  return (
    <>
      <AboutSection locale={locale} />
      <ContactsSection locale={locale} />
      <ExperienceSection locale={locale} />
      <ProjectsSection locale={locale} />
    </>
  );
}
