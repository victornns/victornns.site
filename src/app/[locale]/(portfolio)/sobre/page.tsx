import { AboutSection } from "@/features/portfolio/about/sections/about/AboutSection";
import { EducationSection } from "@/features/portfolio/about/sections/education/EducationSection";
import { ExperienceSection } from "@/features/portfolio/about/sections/experience/ExperienceSection";
import { TechStackSection } from "@/features/portfolio/about/sections/techStack/TechStackSection";
import { LocaleSwitchScrollRestoration } from "@/features/portfolio/navbar/LocaleSwitchScrollRestoration";
import type { Locale } from "@/i18n/config";
import { getPageAlternates } from "@/i18n/routes";

import type { Metadata } from "next";

type AboutPageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  return { alternates: getPageAlternates(locale, "about") };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  return (
    <>
      <LocaleSwitchScrollRestoration identity="about" />
      <AboutSection locale={locale} />
      <TechStackSection locale={locale} />
      <ExperienceSection locale={locale} />
      <EducationSection locale={locale} />
    </>
  );
}
