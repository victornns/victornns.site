import type { OrganizationId } from "@/content/organizations";
import type { Locale } from "@/i18n/config";

export type ContractType = "CLT" | "PJ";

export type Experience = {
  id: string;
  role: string;
  organizationId: OrganizationId;
  mainClient?: string;
  contractType: ContractType;
  period: {
    start: string;
    end?: string;
    total: string;
  };
  summary: string[];
  highlights?: string[];
  technologies: string[];
};

export type ExperiencesContent = {
  title: string;
  description: string;
  technologiesLabel: string;
  mainClientLabel: string;
  contractTypeLabel: string;
  contractTypeLabels: Record<ContractType, string>;
  items: Experience[];
};

export const experiencesContent: Record<Locale, ExperiencesContent> = {
  pt: {
    title: "Experiência",
    description: "Histórico profissional",
    technologiesLabel: "Stack principal",
    mainClientLabel: "Cliente",
    contractTypeLabel: "Contratação",
    contractTypeLabels: {
      CLT: "CLT",
      PJ: "PJ",
    },
    items: [
      {
        id: "one-bra-frontend-developer",
        role: "Frontend Engineer",
        organizationId: "one-bra-agency",
        mainClient: "Bradesco",
        contractType: "CLT",
        period: {
          start: "Out.2023",
          end: "Fev.2026",
          total: "2 anos e 5 meses",
        },
        summary: [
          "Atuação técnica na operação Bradesco, com responsabilidade por arquitetura frontend, padrões de implementação, code review e qualidade dos projetos digitais.",
        ],
        highlights: [
          "Evolução do Design System de e-mails do Bradesco, com mais de 30 componentes HTML reutilizáveis, reduzindo retrabalho, acelerando implementações e simplificando a manutenção.",
          "Participação na arquitetura e desenvolvimento dos componentes, incluindo testes de responsividade e compatibilidade entre clientes de e-mail.",
          "Definição da arquitetura frontend do Onboarding Classic, experiência de boas-vindas de alto tráfego para clientes da conta digital, incluindo organização de componentes, requisitos de performance e adequações de segurança decorrentes de pentests até a homologação.",
        ],
        technologies: [
          "TypeScript",
          "React/Next.js",
          "Vue/Nuxt.js",
          "Node.js",
          "Tailwind CSS",
          "HTML para e-mail",
          "Figma",
        ],
      },
      {
        id: "aza8-lead-software-engineer",
        role: "Lead Software Engineer (Frontend-Leaning)",
        organizationId: "aza8-agency",
        contractType: "PJ",
        period: {
          start: "Mar.2021",
          end: "Out.2025",
          total: "4 anos e 8 meses",
        },
        summary: [
          "Responsável técnico pela área de tecnologia, com atuação direta junto a clientes em discovery, levantamento de requisitos, definição de soluções e estimativas para propostas comerciais.",
        ],
        highlights: [
          "Condução end-to-end de sites, plataformas e aplicações, da definição técnica à publicação e manutenção.",
          "Gestão de profissionais e fornecedores externos, incluindo contratação, distribuição de tarefas, code review, onboarding e acompanhamento de entregas.",
          "Padronização da infraestrutura com Docker e AWS, consolidando aplicações, armazenamento, CDN, bancos de dados, DNS e permissões, com deploys mais consistentes e menor complexidade operacional.",
        ],
        technologies: [
          "TypeScript",
          "JavaScript",
          "React/Next.js",
          "Node.js",
          "Strapi",
          "PostgreSQL",
          "REST APIs",
          "Docker",
          "AWS",
        ],
      },
      {
        id: "digimais-fullstack-software-engineer",
        role: "Full-Stack Software Engineer (Frontend-Leaning)",
        organizationId: "banco-digimais",
        mainClient: "Banco Digimais",
        contractType: "PJ",
        period: {
          start: "Out.2023",
          end: "Mai.2025",
          total: "1 ano e 8 meses",
        },
        summary: [
          "Atuação técnica no rebranding digital do Banco Digimais, com responsabilidade pelo novo site institucional e alinhamentos com marketing, design, infraestrutura e segurança.",
        ],
        highlights: [
          "Implementação end-to-end do novo site com Next.js, Strapi e PostgreSQL, desde a definição da arquitetura até a entrada em produção.",
          "Adoção de arquitetura headless e CMS gerenciável, ampliando a autonomia na atualização de conteúdos, a flexibilidade na criação de páginas e a facilidade de manutenção.",
          "Correção de vulnerabilidades críticas no sistema legado em PHP/Laravel, além da estruturação de ambientes com Docker e acompanhamento de pentests e homologação do novo site.",
        ],
        technologies: [
          "TypeScript",
          "JavaScript",
          "React/Next.js",
          "Node.js",
          "Strapi",
          "PostgreSQL",
          "REST APIs",
          "Docker",
        ],
      },
      {
        id: "one-digital-frontend-developer",
        role: "Mid-level Frontend Developer",
        organizationId: "one-digital-agency",
        mainClient: "Bradesco",
        contractType: "CLT",
        period: {
          start: "Jun.2019",
          end: "Out.2023",
          total: "4 anos e 5 meses",
        },
        summary: [
          "Desenvolvimento de campanhas, landing pages e interfaces do portal Bradesco, seguindo os padrões técnicos e visuais do banco.",
        ],
        highlights: [
          "Criação do Template Bradesco 1.0, substituindo e-mails baseados em imagens por componentes HTML responsivos, posteriormente utilizados como base para o Design System.",
          "Implementação de interfaces pixel-perfect e instrumentação de tracking com eventos, tags e data layer para análise pelos times de BI.",
          "Validação de performance e acessibilidade com Lighthouse, Core Web Vitals e critérios WCAG.",
          "Restabelecimento do Blog Saber para Crescer após indisponibilidade, com configuração e republicação da aplicação em ambiente Linux nos servidores do Bradesco.",
        ],
        technologies: [
          "JavaScript",
          "HTML",
          "Sass",
          "Vue.js",
          "Linux",
          "Figma",
        ],
      },
      {
        id: "cave-digital-frontend-developer",
        role: "Mid-level Frontend Developer",
        organizationId: "cave-digital-agency",
        contractType: "CLT",
        period: {
          start: "Ago.2018",
          end: "Fev.2019",
          total: "7 meses",
        },
        summary: [
          "Desenvolvimento frontend de sites, blogs, landing pages e CMSs para diferentes clientes, incluindo o e-commerce Galápagos Jogos, em colaboração com o backend, e o portal da Galeria do Rock, com páginas e templates WordPress.",
        ],
        technologies: [
          "JavaScript",
          "WordPress",
          "Sage 9",
          "Understrap",
          "Vue.js",
          "Webpack",
        ],
      },
      {
        id: "profit-e-frontend-developer",
        role: "Frontend Developer",
        organizationId: "profit-e-agency",
        contractType: "CLT",
        period: {
          start: "Jun.2018",
          end: "Ago.2018",
          total: "3 meses",
        },
        summary: [
          "Desenvolvimento e manutenção frontend de lojas VTEX, com implementação de funcionalidades e melhorias de interface para projetos de e-commerce.",
        ],
        technologies: ["VTEX", "JavaScript", "jQuery"],
      },
      {
        id: "l4u-frontend-developer",
        role: "Junior Web Developer",
        organizationId: "l4u-agency",
        contractType: "PJ",
        period: {
          start: "Set.2016",
          end: "Abr.2018",
          total: "1 ano e 8 meses",
        },
        summary: [
          "Desenvolvimento de sites e portais WordPress, incluindo o Portal Franquia Dia, plataforma de conteúdo e cadastro de interessados em franquias.",
        ],
        technologies: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Sass (BEM, OOCSS)",
          "WordPress",
          "Node.js",
          "Docker",
        ],
      },
    ],
  },
  en: {
    title: "Experience",
    description: "Professional Experience",
    technologiesLabel: "Core Technologies",
    mainClientLabel: "Client",
    contractTypeLabel: "Employment",
    contractTypeLabels: {
      CLT: "Full-time Employee",
      PJ: "Independent Contractor",
    },
    items: [
      {
        id: "one-bra-frontend-developer",
        role: "Frontend Engineer",
        organizationId: "one-bra-agency",
        mainClient: "Bradesco",
        contractType: "CLT",
        period: {
          start: "Oct.2023",
          end: "Feb.2026",
          total: "2 yrs 5 mos",
        },
        summary: [
          "Frontend engineering for Bradesco's digital channels, with responsibility for frontend architecture, implementation standards, code reviews, and technical quality.",
        ],
        highlights: [
          "Enhanced Bradesco's email Design System, comprising 30+ reusable HTML components, reducing rework, accelerating development, and simplifying maintenance.",
          "Contributed to component architecture and development, including responsive design testing and compatibility validation across email clients.",
          "Defined the frontend architecture for Onboarding Classic, a high-traffic digital banking onboarding experience, addressing component organization, performance requirements, and security findings from penetration testing through project approval.",
        ],
        technologies: [
          "TypeScript",
          "React/Next.js",
          "Vue/Nuxt.js",
          "Node.js",
          "Tailwind CSS",
          "HTML Email",
          "Figma",
        ],
      },
      {
        id: "aza8-lead-software-engineer",
        role: "Lead Software Engineer (Frontend-Leaning)",
        organizationId: "aza8-agency",
        contractType: "PJ",
        period: {
          start: "Mar.2021",
          end: "Oct.2025",
          total: "4 yrs 8 mos",
        },
        summary: [
          "Technical lead for the agency's engineering operations, working directly with clients on discovery, requirements gathering, solution design, and technical estimates for commercial proposals.",
        ],
        highlights: [
          "Led end-to-end delivery of websites, platforms, and applications, from technical planning through deployment and maintenance.",
          "Managed engineers and external vendors, including hiring, task allocation, code reviews, onboarding, and delivery oversight.",
          "Standardized infrastructure using Docker and AWS, consolidating applications, storage, CDN, databases, DNS, and access permissions, resulting in more consistent deployments and reduced operational complexity.",
        ],
        technologies: [
          "TypeScript",
          "JavaScript",
          "React/Next.js",
          "Node.js",
          "Strapi",
          "PostgreSQL",
          "REST APIs",
          "Docker",
          "AWS",
        ],
      },
      {
        id: "digimais-fullstack-software-engineer",
        role: "Full-Stack Software Engineer (Frontend-Leaning)",
        organizationId: "banco-digimais",
        mainClient: "Banco Digimais",
        contractType: "PJ",
        period: {
          start: "Oct.2023",
          end: "May.2025",
          total: "1 yr 8 mos",
        },
        summary: [
          "Technical contributor to Banco Digimais' digital rebranding, responsible for the new corporate website and cross-functional coordination with marketing, design, infrastructure, and security teams.",
        ],
        highlights: [
          "Delivered the new website end-to-end using Next.js, Strapi, and PostgreSQL, from architecture design through production launch.",
          "Implemented a headless architecture and content management system, enabling greater content management autonomy, more flexible page creation, and easier maintenance.",
          "Remediated critical security vulnerabilities in the legacy PHP/Laravel website, configured Docker environments, and supported penetration testing and security approval through the new site's launch.",
        ],
        technologies: [
          "TypeScript",
          "JavaScript",
          "React/Next.js",
          "Node.js",
          "Strapi",
          "PostgreSQL",
          "REST APIs",
          "Docker",
        ],
      },
      {
        id: "one-digital-frontend-developer",
        role: "Mid-level Frontend Developer",
        organizationId: "one-digital-agency",
        mainClient: "Bradesco",
        contractType: "CLT",
        period: {
          start: "Jun.2019",
          end: "Oct.2023",
          total: "4 yrs 5 mos",
        },
        summary: [
          "Developed digital campaigns, landing pages, and web interfaces for Bradesco, following the bank's technical and design standards.",
        ],
        highlights: [
          "Created Bradesco Template 1.0, replacing image-based emails with responsive HTML components that later became the foundation of the email Design System.",
          "Developed pixel-perfect interfaces and implemented analytics tracking using events, tags, and data layers for business intelligence teams.",
          "Validated web performance and accessibility using Lighthouse, Core Web Vitals, and WCAG guidelines.",
          "Restored the Saber para Crescer blog after a service outage by configuring and redeploying the application on Bradesco's Linux servers.",
        ],
        technologies: [
          "JavaScript",
          "HTML",
          "Sass",
          "Vue.js",
          "Linux",
          "Figma",
        ],
      },
      {
        id: "cave-digital-frontend-developer",
        role: "Mid-level Frontend Developer",
        organizationId: "cave-digital-agency",
        contractType: "CLT",
        period: {
          start: "Aug.2018",
          end: "Feb.2019",
          total: "7 mos",
        },
        summary: [
          "Frontend development of websites, blogs, landing pages, and CMS-based solutions for various clients, including the Galápagos Jogos e-commerce platform, built in collaboration with the backend team, and the Galeria do Rock portal, featuring custom WordPress pages and templates.",
        ],
        technologies: [
          "JavaScript",
          "WordPress",
          "Sage 9",
          "Understrap",
          "Vue.js",
          "Webpack",
        ],
      },
      {
        id: "profit-e-frontend-developer",
        role: "Frontend Developer",
        organizationId: "profit-e-agency",
        contractType: "CLT",
        period: {
          start: "Jun.2018",
          end: "Aug.2018",
          total: "3 mos",
        },
        summary: [
          "Frontend development and maintenance of VTEX-based online stores, implementing new features and UI improvements for e-commerce projects.",
        ],
        technologies: ["VTEX", "JavaScript", "jQuery"],
      },
      {
        id: "l4u-frontend-developer",
        role: "Junior Web Developer",
        organizationId: "l4u-agency",
        contractType: "PJ",
        period: {
          start: "Sep.2016",
          end: "Apr.2018",
          total: "1 yr 8 mos",
        },
        summary: [
          "Developed WordPress websites and content portals, including Portal Franquia Dia, a platform providing franchise information and prospect registration.",
        ],
        technologies: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Sass (BEM, OOCSS)",
          "WordPress",
          "Node.js",
          "Docker",
        ],
      },
    ],
  },
};
