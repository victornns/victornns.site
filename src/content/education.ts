import type { OrganizationId } from "./organizations";
import type { Locale } from "@/i18n/config";

export interface Education {
  id: string;
  degree: string;
  organizationId: OrganizationId;
  period: {
    start: string;
    end?: string;
  };
  /** Optional note shown next to the period (e.g. completion status). */
  status?: string;
}

export interface EducationContent {
  title: string;
  description?: string;
  items: Education[];
}

export const educationContent: Record<Locale, EducationContent> = {
  pt: {
    title: "Formação acadêmica",
    items: [
      {
        id: "impacta-ads",
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        organizationId: "impacta-tecnologia",
        period: {
          start: "2019",
          end: "2021",
        },
        status: "Concluído",
      },
      {
        id: "sao-judas-computer-science",
        degree: "Bacharelado em Ciência da Computação",
        organizationId: "sao-judas-tadeu",
        period: {
          start: "2015",
          end: "2017",
        },
        status: "4 semestres cursados",
      },
    ],
  },
  en: {
    title: "Education",
    items: [
      {
        id: "impacta-ads",
        degree: "Technologist Degree in Systems Analysis and Development",
        organizationId: "impacta-tecnologia",
        period: {
          start: "2019",
          end: "2021",
        },
        status: "Completed",
      },
      {
        id: "sao-judas-computer-science",
        degree: "Bachelor’s Degree in Computer Science",
        organizationId: "sao-judas-tadeu",
        period: {
          start: "2015",
          end: "2017",
        },
        status: "4 semesters completed",
      },
    ],
  },
};
