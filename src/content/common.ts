import type { Locale } from "@/i18n/config";

export interface CommonContent {
  viewProject: string;
  present: string;
  mainTechnologies: string;
}

export const commonContent: Record<Locale, CommonContent> = {
  pt: {
    viewProject: "Ver projeto",
    present: "Atualmente",
    mainTechnologies: "Principais tecnologias",
  },
  en: {
    viewProject: "View project",
    present: "Present",
    mainTechnologies: "Main technologies",
  },
};
