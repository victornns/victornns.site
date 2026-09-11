import type { Locale } from "@/i18n/config";

export type ResumeContent = {
  label: string;
  url: string;
};

export const resumeContent: Record<Locale, ResumeContent> = {
  pt: {
    label: "Currículo",
    url: "https://www.victornns.com/pdf/victor-nascimento-curriculo.pdf",
  },
  en: {
    label: "Resume",
    url: "https://www.victornns.com/pdf/victor-nascimento-resume.pdf",
  },
};
