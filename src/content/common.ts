import type { Locale } from "@/i18n/config";

export interface CommonContent {
  viewProject: string;
  present: string;
  mainTechnologies: string;
  aboutProject: string;
  close: string;
  nextProject: string;
  previousProject: string;
  preview: string;
  projectDetails: string;
  stack: string;
}

export const commonContent: Record<Locale, CommonContent> = {
  pt: {
    viewProject: "Ver projeto",
    present: "Atualmente",
    mainTechnologies: "Principais tecnologias",
    aboutProject: "Sobre o projeto",
    close: "Fechar",
    nextProject: "Proximo projeto",
    previousProject: "Projeto anterior",
    preview: "Preview",
    projectDetails: "Detalhes do projeto",
    stack: "Stack",
  },
  en: {
    viewProject: "View project",
    present: "Present",
    mainTechnologies: "Main technologies",
    aboutProject: "About the project",
    close: "Close",
    nextProject: "Next project",
    previousProject: "Previous project",
    preview: "Preview",
    projectDetails: "Project details",
    stack: "Stack",
  },
};
