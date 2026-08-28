import { getLocale } from "@/i18n/config";

import { AboutSection } from "@/views/AboutSection";
import { ContactsSection } from "@/views/ContactsSection";
import { ExperienceSection } from "@/views/ExperienceSection";
import { EducationSection } from "@/views/EducationSection";

type CurriculoPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function CurriculoPage({ params }: CurriculoPageProps) {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);

  return (
    <div className="flex flex-col gap-24 pt-24">
      <AboutSection locale={locale} variant="resume" />
      <ExperienceSection locale={locale} />
      <EducationSection locale={locale} />
      <ContactsSection locale={locale} />
    </div>
  );
}
