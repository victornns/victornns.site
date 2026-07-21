import type { OrganizationId } from "./organizations";
import type { Locale } from "@/i18n/config";

export interface Experience {
  id: string;
  role: string;
  organizationId: OrganizationId;
  period: {
    start: string;
    end?: string;
  };
  summary: string[];
  technologies: string[];
}

export interface ExperiencesContent {
  title: string;
  description: string;
  items: Experience[];
}

export const experiencesContent: Record<Locale, ExperiencesContent> = {
  pt: {
    title: "Experiência",
    description: "Histórico profissional",
    items: [
      {
        id: "one-bra-frontend-developer",
        role: "Front-end Developer | UI Architecture, Design Systems e Performance Web",
        organizationId: "one-bra-agency",
        period: {
          start: "Out.2023",
          end: "Fev.2026",
        },
        summary: ["Atuação no time de front-end da Bespoke One.bra (Leo Burnett), alocado diretamente no Bradesco, com foco na padronização técnica, definição de padrões de codificação e desenvolvimento de páginas e e-mails das campanhas do banco."],
        technologies: ["SSR/SSG", "TypeScript", "React.js", "Next.js", "Node.js", "ES6+", "Design System", "Tailwind CSS", "Figma", "GraphQL", "API REST", "Vue.js", "Acessibilidade digital", "Web Performance"],
      },
      {
        id: "one-digital-frontend-developer",
        role: "Front-end Developer | Projetos Web, CMS e Performance",
        organizationId: "one-digital-agency",
        period: {
          start: "Jun.2019",
          end: "Out.2023",
        },
        summary: ["Atuei no time de interface com foco em performance, responsividade, acessibilidade e fidelidade visual (pixel perfect). Desenvolvi sites institucionais, landing pages, e-mails marketing e CMS personalizados para diferentes clientes da agência."],
        technologies: ["SSR/SSG", "Vue.js", "Nuxt.js", "Node.js", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "API REST", "GraphQL", "Strapi CMS", "PostgreSQL", "E-mails em HTML", "Axios", "Web Performance", "Figma"],
      },
      {
        id: "cave-digital-frontend-developer",
        role: "Front-end Developer | Aplicações híbridas e CMS customizados",
        organizationId: "cave-digital-agency",
        period: {
          start: "Ago.2018",
          end: "Fev.2019",
        },
        summary: ["Desenvolvimento e manutenção de sites institucionais, landing pages e CMS customizados com WordPress (Sage9/Understrap), além da sustentação de projetos legados."],
        technologies: ["WordPress", "Sage9", "Understrap", "Ionic Framework", "Oracle Commerce Cloud", "Webpack", "ES6+"],
      },
      {
        id: "profit-e-frontend-developer",
        role: "Front-end Developer | E-commerce em VTEX",
        organizationId: "profit-e-agency",
        period: {
          start: "Jun.2018",
          end: "Ago.2018",
        },
        summary: ["Atuação focada em implementação de novas funcionalidades e manutenção de e-commerces na plataforma VTEX. Participei de entregas voltadas para performance e testes de estabilidade."],
        technologies: ["VTEX", "jQuery"],
      },
      {
        id: "l4u-frontend-developer",
        role: "Front-end Developer | Sites, E-mails e Plataforma Web",
        organizationId: "l4u-agency",
        period: {
          start: "Set.2016",
          end: "Abr.2018",
        },
        summary: ["Desenvolvimento de sites, blogs, e-mails marketing e landing pages. Contribuição no desenvolvimento e testes da Metlycs, plataforma de automação de marketing criada como produto próprio da agência."],
        technologies: ["HTML5", "CSS3", "CSS Animations", "SASS", "BEMCSS", "OOCSS", "JavaScript", "WordPress", "Node.js", "Servidor Apache", "Docker", "Git", "GitLab", "Heroku", "Linux (Debian-based)"],
      },
    ],
  },
  en: {
    title: "Experience",
    description: "Professional history",
    items: [
      {
        id: "one-bra-frontend-developer",
        role: "Front-end Developer | UI Architecture, Design Systems, and Web Performance",
        organizationId: "one-bra-agency",
        period: {
          start: "Oct.2023",
          end: "Feb.2026",
        },
        summary: ["Worked on the front-end team at Bespoke One.bra (Leo Burnett), allocated directly to Bradesco, focusing on technical standardization, coding guidelines, and development of pages and emails for the bank's campaigns."],
        technologies: ["SSR/SSG", "TypeScript", "React.js", "Next.js", "Node.js", "ES6+", "Design System", "Tailwind CSS", "Figma", "GraphQL", "REST API", "Vue.js", "Digital Accessibility", "Web Performance"],
      },
      {
        id: "one-digital-frontend-developer",
        role: "Front-end Developer | Web Projects, CMS, and Performance",
        organizationId: "one-digital-agency",
        period: {
          start: "Jun.2019",
          end: "Oct.2023",
        },
        summary: ["Worked on the interface team focusing on performance, responsiveness, accessibility, and pixel-perfect visual fidelity. Developed institutional websites, landing pages, marketing emails, and custom CMS solutions for various agency clients."],
        technologies: ["SSR/SSG", "Vue.js", "Nuxt.js", "Node.js", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "REST API", "GraphQL", "Strapi CMS", "PostgreSQL", "HTML Emails", "Axios", "Web Performance", "Figma"],
      },
      {
        id: "cave-digital-frontend-developer",
        role: "Front-end Developer | Hybrid Applications and Custom CMS",
        organizationId: "cave-digital-agency",
        period: {
          start: "Aug.2018",
          end: "Feb.2019",
        },
        summary: ["Development and maintenance of institutional websites, landing pages, and custom CMS built with WordPress (Sage9/Understrap), as well as support for legacy projects."],
        technologies: ["WordPress", "Sage9", "Understrap", "Ionic Framework", "Oracle Commerce Cloud", "Webpack", "ES6+"],
      },
      {
        id: "profit-e-frontend-developer",
        role: "Front-end Developer | E-commerce on VTEX",
        organizationId: "profit-e-agency",
        period: {
          start: "Jun.2018",
          end: "Aug.2018",
        },
        summary: ["Focused on implementing new features and maintaining e-commerce stores on the VTEX platform. Contributed to deliveries focused on performance and stability testing."],
        technologies: ["VTEX", "jQuery"],
      },
      {
        id: "l4u-frontend-developer",
        role: "Front-end Developer | Websites, Emails, and Web Platform",
        organizationId: "l4u-agency",
        period: {
          start: "Sep.2016",
          end: "Apr.2018",
        },
        summary: ["Development of websites, blogs, marketing emails, and landing pages. Contributed to the development and testing of Metlycs, a marketing automation platform created as the agency's own product."],
        technologies: ["HTML5", "CSS3", "CSS Animations", "SASS", "BEMCSS", "OOCSS", "JavaScript", "WordPress", "Node.js", "Apache Server", "Docker", "Git", "GitLab", "Heroku", "Linux (Debian-based)"],
      },
    ],
  },
};
