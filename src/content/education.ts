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
  /** Optional note about the education level/status (e.g. an unfinished course). */
  status?: string;
  summary: string[];
}

export interface EducationContent {
  title: string;
  description: string;
  items: Education[];
}

export const educationContent: Record<Locale, EducationContent> = {
  pt: {
    title: "Formação acadêmica",
    description: "Formação em tecnologia e desenvolvimento de software",
    items: [
      {
        id: "impacta-ads",
        degree: "Tecnólogo, Análise e Desenvolvimento de Sistemas",
        organizationId: "impacta-tecnologia",
        period: {
          start: "2019",
          end: "2021",
        },
        status: "Curso concluído",
        summary: [
          "Formação voltada para desenvolvimento de software, lógica de programação, modelagem de sistemas e aplicações web.",
        ],
      },
      {
        id: "sao-judas-computer-science",
        degree: "Bacharelado, Ciência da Computação",
        organizationId: "sao-judas-tadeu",
        period: {
          start: "2015",
          end: "2017",
        },
        status: "Curso não concluído",
        summary: [
          "Formação interrompida após dois anos de estudos em fundamentos de computação, estrutura de dados e programação.",
        ],
      },
    ],
  },
  en: {
    title: "Education",
    description: "Academic background",
    items: [
      {
        id: "impacta-ads",
        degree: "Associate Degree, Systems Analysis and Development",
        organizationId: "impacta-tecnologia",
        period: {
          start: "2019",
          end: "2021",
        },
        status: "Course completed",
        summary: [
          "Program focused on software development, programming logic, systems modeling, and web applications.",
        ],
      },
      {
        id: "sao-judas-computer-science",
        degree: "Bachelor's Degree, Computer Science",
        organizationId: "sao-judas-tadeu",
        period: {
          start: "2015",
          end: "2017",
        },
        status: "Course not completed",
        summary: [
          "Studies interrupted after two years covering computing fundamentals, data structures, and programming.",
        ],
      },
    ],
  },
};
