import { UIPageMain } from "@/components/ui/UIPageMain";
import { AboutSection } from "@/features/about/AboutSection";
import { EducationSection } from "@/features/education/EducationSection";
import { ExperienceSection } from "@/features/experience/ExperienceSection";
import { TechStackSection } from "@/features/techStack/TechStackSection";
import type { Locale } from "@/i18n/config";

type CurriculoPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function CurriculoPage({ params }: CurriculoPageProps) {
  const { locale } = await params;

  return (
    <UIPageMain>
      <AboutSection locale={locale} showOnlineVersionLink />
      <TechStackSection locale={locale} />
      <ExperienceSection locale={locale} />
      <EducationSection locale={locale} />
    </UIPageMain>
  );
}
