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
  design: string;
  /** Public URL slug for the resume/curriculo route (external word, not the internal folder name). */
  resumeSlug: string;
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
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
    design: "Design",
    resumeSlug: "curriculo",
    notFound: {
      title: "Página não encontrada",
      description: "O endereço acessado não existe ou foi movido.",
      backHome: "Voltar ao início",
    },
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
    design: "Design",
    resumeSlug: "resume",
    notFound: {
      title: "Page not found",
      description: "The page you requested doesn't exist or has moved.",
      backHome: "Back to home",
    },
  },
};
