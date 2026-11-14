import { LocaleSwitchScrollRestoration } from "@/features/portfolio/navbar/LocaleSwitchScrollRestoration";
import { AboutSection } from "@/features/portfolio/sections/about/AboutSection";
import { EducationSection } from "@/features/portfolio/sections/education/EducationSection";
import { ExperienceSection } from "@/features/portfolio/sections/experience/ExperienceSection";
import { TechStackSection } from "@/features/portfolio/sections/techStack/TechStackSection";
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
