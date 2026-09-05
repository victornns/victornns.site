import type { Locale } from "@/i18n/config";

import { UIPageMain } from "@/components/ui/UIPageMain";
import { AboutSection } from "@/views/AboutSection";
import { ContactsSection } from "@/views/ContactsSection";
import { ExperienceSection } from "@/views/ExperienceSection";
import { EducationSection } from "@/views/EducationSection";
import { TechStackSection } from "@/views/TechStackSection";

type CurriculoPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function CurriculoPage({ params }: CurriculoPageProps) {
  const { locale } = await params;

  return (
    <UIPageMain>
      <AboutSection locale={locale} />
      <TechStackSection locale={locale} />
      <ExperienceSection locale={locale} />
      <EducationSection locale={locale} />
      <ContactsSection locale={locale} />
    </UIPageMain>
  );
}
