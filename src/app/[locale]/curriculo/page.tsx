import { Resume } from "@/features/resume/Resume";
import type { Locale } from "@/i18n/config";

type CurriculoPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function CurriculoPage({ params }: CurriculoPageProps) {
  const { locale } = await params;

  return <Resume locale={locale} />;
}
