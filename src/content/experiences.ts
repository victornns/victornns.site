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
          "Atuação em operação dedicada ao Bradesco, com responsabilidade por arquitetura frontend, padrões de implementação, code review e qualidade técnica de projetos dos canais digitais.",
        ],
        highlights: [
          "Evolução e consolidação do Design System de e-mails do Bradesco, com mais de 30 componentes HTML reutilizáveis, responsivos e acessíveis, utilizados nas comunicações de produtos, campanhas e demais iniciativas do banco.",
          "Condução técnica do frontend do site Onboarding Classic, experiência de boas-vindas de alto tráfego para clientes da conta digital, com decisões de arquitetura e ajustes decorrentes de pentests junto ao time de segurança até a homologação do projeto.",
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
          "Responsável técnico pela área de tecnologia da agência, conduzindo arquitetura, definição de soluções, requisitos e coordenação das frentes de desenvolvimento.",
        ],
        highlights: [
          "Condução end-to-end de sites, plataformas e aplicações, da definição técnica à publicação e manutenção.",
          "Coordenação de colaboradores, com gestão de tarefas, code review, acompanhamento de entregas, onboarding e suporte técnico.",
          "Atuação em discovery e pré-venda técnica, traduzindo requisitos em soluções e estimativas para propostas comerciais.",
          "Estruturação de ambientes com Docker e consolidação da infraestrutura em AWS, unificando aplicação, storage, CDN, bancos de dados, DNS e permissões em um ambiente padronizado.",
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
          "DigitalOcean",
          "Vue/Nuxt.js",
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
          "Parceiro técnico no rebranding digital do Banco Digimais, responsável pela arquitetura e implementação end-to-end do novo site e pelos alinhamentos com marketing, design, infraestrutura e segurança.",
        ],
        highlights: [
          "Definição e implementação da arquitetura headless com React/Next.js, Strapi e PostgreSQL, incluindo modelagem de conteúdo e áreas gerenciáveis.",
          "Remediação do site legado em PHP/Laravel após pentest, com correção de vulnerabilidades críticas e documentação técnica junto ao time de segurança.",
          "Estruturação da aplicação com Docker e definição dos requisitos de publicação, acompanhando pentests e homologação até a entrada em produção.",
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
          "PHP/Laravel",
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
          "Atuação no time de interface da operação Bradesco, responsável por campanhas digitais, landing pages e páginas do portal seguindo os padrões técnicos e visuais do banco.",
        ],
        highlights: [
          "Implementação pixel-perfect e instrumentação de tracking, incluindo events, tags e data layer para consumo pelos times de BI.",
          "Validação das entregas com Lighthouse, Core Web Vitals e critérios WCAG de acessibilidade.",
          "Criação do Template Bradesco 1.0, migrando e-mails baseados em imagens para componentes HTML responsivos e compatíveis, base do Design System consolidado posteriormente.",
          "Configuração e republicação do Blog Saber para Crescer em ambiente Linux nos servidores do Bradesco, restabelecendo o serviço após uma indisponibilidade.",
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
          "Desenvolvimento frontend de sites, landing pages e CMSs para diferentes clientes da agência.",
        ],
        highlights: [
          "Condução do frontend do e-commerce da Galápagos Jogos, desenvolvido do zero em conjunto com o time de backend, incluindo interfaces e integrações.",
          "Desenvolvimento de páginas e templates em WordPress para o portal da Galeria do Rock, voltado à apresentação das lojas e conteúdos do espaço.",
        ],
        technologies: [
          "JavaScript",
          "WordPress",
          "Sage 9",
          "Understrap",
          "Vue.js",
          "Ionic",
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
          "Desenvolvimento e manutenção frontend de e-commerces em VTEX, com implementação de funcionalidades e melhorias de interface, performance e funcionamento contínuo das lojas.",
        ],
        technologies: ["VTEX", "JavaScript", "jQuery"],
      },
      {
        id: "l4u-frontend-developer",
        role: "Junior Web Developer",
        organizationId: "l4u-agency",
        contractType: "CLT",
        period: {
          start: "Set.2016",
          end: "Abr.2018",
          total: "1 ano e 8 meses",
        },
        summary: [
          "Desenvolvimento frontend de sites, portais e projetos em WordPress.",
        ],
        highlights: [
          "Desenvolvimento do Portal Franquia Dia, plataforma de conteúdo e cadastro para interessados em se tornar franqueados, com informações sobre produtos, operação e oportunidades de franquia.",
          "Colaboração na Metlycs, plataforma própria de automação de marketing da agência, dando suporte a testes e ao desenvolvimento.",
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
    technologiesLabel: "Core stack",
    mainClientLabel: "Client",
    contractTypeLabel: "Employment",
    contractTypeLabels: {
      CLT: "Full-time",
      PJ: "Contractor",
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
          "Worked on a dedicated team supporting Bradesco, with ownership of frontend architecture, implementation standards, code reviews, and technical quality across digital-channel projects.",
        ],
        highlights: [
          "Evolved and consolidated Bradesco's Email Design System, with 30+ reusable, responsive, and accessible HTML components used across product, campaign, and other bank communications.",
          "Led the frontend of Onboarding Classic, a high-traffic onboarding experience for digital banking customers, covering architecture decisions and pentest remediation with the security team through project approval.",
        ],
        technologies: [
          "TypeScript",
          "React/Next.js",
          "Vue/Nuxt.js",
          "Node.js",
          "Tailwind CSS",
          "HTML email",
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
          "Technical lead for the agency's technology practice, overseeing architecture, solution design, requirements, and development workstreams.",
        ],
        highlights: [
          "Led end-to-end delivery of websites, platforms, and applications, from technical definition through deployment and ongoing maintenance.",
          "Coordinated contributors across development workstreams, including task management, code reviews, delivery oversight, onboarding, and technical support.",
          "Contributed to discovery and technical pre-sales, translating requirements into technical solutions and effort estimates for client proposals.",
          "Standardized project environments with Docker and consolidated infrastructure on AWS, bringing application services, storage, CDN, databases, DNS, and permissions into a consistent environment.",
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
          "DigitalOcean",
          "Vue/Nuxt.js",
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
          "Technical partner on Banco Digimais' digital rebrand, owning the architecture and end-to-end implementation of the new website while working across marketing, design, infrastructure, and security teams.",
        ],
        highlights: [
          "Designed and implemented a headless architecture with React/Next.js, Strapi, and PostgreSQL, including content modeling and CMS-managed areas.",
          "Remediated the legacy PHP/Laravel website following a pentest, fixing critical vulnerabilities and documenting technical decisions with the security team.",
          "Structured the application with Docker and defined deployment requirements, supporting pentests and security review through production launch.",
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
          "PHP/Laravel",
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
          "Worked on the frontend team supporting Bradesco's digital operation, delivering campaigns, landing pages, and portal pages under the bank's technical and visual standards.",
        ],
        highlights: [
          "Built pixel-perfect interfaces and implemented tracking instrumentation, including events, tags, and data layers consumed by BI teams.",
          "Validated releases against Lighthouse, Core Web Vitals, and WCAG accessibility criteria.",
          "Created Bradesco Template 1.0, migrating email communications from image-based layouts to responsive, cross-client HTML components that later became the foundation of the Email Design System.",
          "Reconfigured and republished the Saber para Crescer Blog in a Linux environment on Bradesco servers, restoring service after an outage.",
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
          "Developed frontend solutions for websites, landing pages, and CMS-based projects across multiple agency clients.",
        ],
        highlights: [
          "Led frontend development for the Galápagos Jogos e-commerce platform, built from the ground up alongside the client's backend team, covering interfaces and integrations.",
          "Built WordPress pages and templates for the Galeria do Rock portal, supporting store listings and editorial content.",
        ],
        technologies: [
          "JavaScript",
          "WordPress",
          "Sage 9",
          "Understrap",
          "Vue.js",
          "Ionic",
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
          "Developed and maintained VTEX e-commerce storefronts, implementing features and improving interfaces, performance, and storefront reliability.",
        ],
        technologies: ["VTEX", "JavaScript", "jQuery"],
      },
      {
        id: "l4u-frontend-developer",
        role: "Junior Web Developer",
        organizationId: "l4u-agency",
        contractType: "CLT",
        period: {
          start: "Sep.2016",
          end: "Apr.2018",
          total: "1 yr 8 mos",
        },
        summary: ["Developed websites, portals, and WordPress-based projects."],
        highlights: [
          "Built Portal Franquia Dia, a content and registration platform for prospective franchisees, providing information on products, operations, and franchise opportunities.",
          "Contributed to Metlycs, the agency's marketing automation platform, supporting testing and development activities.",
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
