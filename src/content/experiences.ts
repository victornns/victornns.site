import type { OrganizationId } from "./organizations";

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

export const experiences: Experience[] = [
  {
    id: "one-bra-frontend-developer",
    role: "Frontend Developer | UI Architecture, Design Systems e Performance Web",
    organizationId: "one-bra-agency",
    period: {
      start: "Out.2023",
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
];
