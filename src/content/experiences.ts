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
    role: "Frontend Developer Pl. | UI Architecture, Design Systems e Performance Web",
    organizationId: "one-bra-agency",
    period: {
      start: "Out.2023",
    },
    summary: [
      "Desenvolvimento no time de front-end da Bespoke One.bra (Leo Burnett), alocado diretamente no cliente Bradesco, com responsabilidade para a construção de sistemas de componentes e padronização técnica.",
      "Contribuição direta na criação de um design system para e-mails do Bradesco, definindo padrões de codificação, estrutura visual e testes de renderização entre diferentes dispositivos e clientes.",
    ],
    technologies: ["SSR/SSG", "TypeScript", "React.js", "Next.js", "Node.js", "ES6+", "Design System", "Tailwind CSS", "Figma", "GraphQL", "API REST", "Vue.js", "Acessibilidade digital", "Web Performance"],
  },
  {
    id: "one-digital-frontend-developer",
    role: "Front-end Developer Pl. | Projetos Web, CMSs e Performance",
    organizationId: "one-digital-agency",
    period: {
      start: "Jun.2019",
      end: "Out.2023",
    },
    summary: [
      "Atuei no time de interface com foco em performance, responsividade, acessibilidade e fidelidade visual (pixel perfect). Desenvolvi sites institucionais, landing pages, e-mails marketing e CMSs personalizados para diferentes clientes da agência.",
      "Trabalhei em times ágeis com CI/CD já estruturado, contribuindo na organização de componentes, integração com APIs e na entrega de soluções digitais.",
    ],
    technologies: ["SSR/SSG", "Vue.js", "Nuxt.js", "Node.js", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "API REST", "GraphQL", "Strapi CMS", "PostgreSQL", "E-mails em HTML", "Axios", "Web Performance", "Figma"],
  },
  {
    id: "cave-digital-frontend-developer",
    role: "Front-end Developer Jr. | Aplicações híbridas e CMSs customizados",
    organizationId: "cave-digital-agency",
    period: {
      start: "Ago.2018",
      end: "Fev.2019",
    },
    summary: ["Desenvolvimento e manutenção de sites institucionais, landing pages e CMSs customizados com WordPress (Sage9/Understrap), além da sustentação de projetos legados."],
    technologies: ["WordPress", "Sage9", "Understrap", "Ionic Framework", "Oracle Commerce Cloud", "Webpack", "ES6+"],
  },
  {
    id: "profit-e-frontend-developer",
    role: "Front-end Developer Jr. | E-commerce em VTEX",
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
    role: "Front-end Developer Jr. | Sites, E-mails e Plataforma Web",
    organizationId: "l4u-agency",
    period: {
      start: "Set.2016",
      end: "Abr.2018",
    },
    summary: ["Criação de sites institucionais, e-mails marketing e landing pages. Também trabalhei em projetos legados e na plataforma Metlycs, realizando testes, ajustes e melhorias contínuas.", "Envolvimento direto com ferramentas de versionamento e containers para desenvolvimento e deploy."],
    technologies: ["HTML5", "CSS3", "CSS Animations", "SASS", "BEMCSS", "OOCSS", "JavaScript", "WordPress", "Node.js", "Servidor Apache", "Docker", "Git", "GitLab", "Heroku", "Linux (Debian-based)"],
  },
];
