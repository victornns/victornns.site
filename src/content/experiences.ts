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
  items: Experience[];
};

export const experiencesContent: Record<Locale, ExperiencesContent> = {
  pt: {
    title: "Experiência",
    description: "Histórico profissional",
    technologiesLabel: "Stack principal",
    mainClientLabel: "Cliente",
    contractTypeLabel: "Contratação",
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
          "Atuei em uma operação dedicada ao Bradesco, dando continuidade ao trabalho que já desenvolvia para o banco, agora com maior autonomia e responsabilidade técnica na condução de diferentes projetos e iniciativas dos canais digitais.",
          "Defini arquitetura e padrões de implementação, realizei code reviews e acompanhei a qualidade das entregas junto aos times de desenvolvimento, design e cliente.",
        ],
        highlights: [
          "Colaborei na evolução e consolidação do Design System de e-mails do Bradesco, estruturado a partir de mais de 30 componentes HTML reutilizáveis, responsivos e acessíveis. Adotado como padrão para as comunicações por e-mail do banco, passou a ser utilizado por diferentes agências na composição de templates para seus produtos e serviços.",
          "Conduzi o frontend do Onboarding Classic, experiência de boas-vindas para clientes da conta digital, apresentando recursos, funcionalidades e canais do Bradesco. Na homologação, conduzi os ajustes decorrentes de pentests e defendi as decisões de arquitetura junto ao time de segurança do banco.",
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
          "Responsável técnico pela área de tecnologia da agência, com atuação na definição de soluções, levantamento de requisitos, arquitetura e direcionamento técnico dos projetos. Fui referência para decisões relacionadas a aplicações, ferramentas, infraestrutura, serviços e novas iniciativas de tecnologia.",
        ],
        highlights: [
          "Conduzi projetos end-to-end, da definição técnica à publicação e manutenção, atuando principalmente com React, Next.js, Node.js, Strapi e PostgreSQL.",
          "Coordenei colaboradores e frentes de desenvolvimento, com gestão de tarefas, code review, acompanhamento das entregas, onboarding e suporte técnico.",
          "Participei de discovery e pré-venda, apoiando levantamento de requisitos, definição de soluções e estimativas técnicas para propostas comerciais.",
          "Estruturei ambientes e processos de publicação com Docker e participei da consolidação da infraestrutura em AWS, envolvendo serviços de aplicação, storage, CDN, bancos de dados, DNS e permissões.",
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
          "Atuei como parceiro técnico no desenvolvimento end-to-end do novo site do Banco Digimais durante o processo de rebranding, conduzindo arquitetura, tecnologias, padrões de implementação e os alinhamentos com os times de marketing, design, infraestrutura e segurança.",
        ],
        highlights: [
          "Estruturei a nova solução com React e Next.js integrada a um headless CMS em Strapi e PostgreSQL, incluindo a modelagem de conteúdo e as áreas gerenciáveis do site.",
          "Antes da nova implementação, atuei na remediação técnica do site legado em PHP/Laravel após pentest, corrigindo vulnerabilidades críticas e documentando as decisões junto ao time de segurança.",
          "Defini a estrutura de execução da aplicação com Docker e os requisitos técnicos para publicação, conduzindo os ajustes decorrentes de novos pentests e a homologação até a entrada do site em produção.",
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
          "Atuei no time de interface responsável por campanhas digitais, landing pages e páginas para o portal do Bradesco, seguindo os padrões técnicos e visuais do banco, com implementação pixel-perfect e instrumentação de métricas utilizadas pelos times de BI na construção de dashboards.",
          "As entregas também passavam por validações de qualidade com Lighthouse, Core Web Vitals e critérios WCAG de acessibilidade, seguindo os padrões exigidos pelo banco.",
        ],
        highlights: [
          "Participei da criação do Template Bradesco 1.0, substituindo e-mails baseados em imagens por componentes HTML responsivos e compatíveis com diferentes clientes de e-mail. Essa estrutura deu origem ao trabalho que posteriormente evoluiu para o Design System de e-mails do banco.",
          "Fui responsável pela configuração e republicação do Blog Saber para Crescer em ambiente Linux, diretamente nos servidores do Bradesco, restabelecendo o serviço após uma indisponibilidade.",
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
          "Atuei no desenvolvimento frontend de projetos para diferentes clientes, incluindo sites, landing pages e CMSs.",
        ],
        highlights: [
          "Conduzi o frontend do e-commerce da Galápagos Jogos, desenvolvido do zero em conjunto com o time de backend do cliente, respondendo pela camada de interface e suas integrações.",
          "Atuei no portal da Galeria do Rock, estruturando páginas e templates do tema em WordPress para apresentação das lojas e conteúdos do espaço.",
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
          "Atuei no desenvolvimento e manutenção frontend de e-commerces em VTEX, implementando funcionalidades e melhorias de interface, performance e estabilidade.",
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
          "Atuei no desenvolvimento frontend de sites, portais e projetos em WordPress, com destaque para o Portal Franquia Dia, uma plataforma voltada à rede de franqueados, com diversas páginas de produtos, informações sobre franquias, indicadores e conteúdos de apoio ao negócio.",
          "Também colaborei com a Metlycs, plataforma própria de automação de marketing da agência, principalmente em testes e atividades de suporte ao desenvolvimento.",
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
    description: "Professional history",
    technologiesLabel: "Main stack",
    mainClientLabel: "Customer",
    contractTypeLabel: "Employment type",
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
          total: "2 years and 5 months",
        },
        summary: [
          "Worked on a dedicated operation for Bradesco, continuing the work I had already been doing for the bank, now with greater autonomy and technical ownership leading different projects and initiatives across the digital channels.",
          "Defined architecture and implementation standards, ran code reviews, and oversaw delivery quality together with the development, design, and client teams.",
        ],
        highlights: [
          "Contributed to the evolution and consolidation of Bradesco's email Design System, built from more than 30 reusable, responsive, and accessible HTML components. Adopted as the standard for the bank's email communications, it came to be used by different agencies to compose templates for their products and services.",
          "Led the frontend of Onboarding Classic, a welcome experience for digital account customers, showcasing Bradesco's features, functionality, and channels. During certification, I addressed pentest findings and defended architecture decisions with the bank's security team.",
        ],
        technologies: [
          "TypeScript",
          "React/Next.js",
          "Vue/Nuxt.js",
          "Node.js",
          "Tailwind CSS",
          "HTML for email",
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
          total: "4 years and 8 months",
        },
        summary: [
          "Technical lead for the agency's technology area, working on solution definition, requirements gathering, architecture, and technical direction for projects. I was the go-to reference for decisions on applications, tools, infrastructure, services, and new technology initiatives.",
        ],
        highlights: [
          "Led end-to-end projects, from technical definition through launch and maintenance, working mainly with React, Next.js, Node.js, Strapi, and PostgreSQL.",
          "Coordinated team members and development workstreams, managing tasks, code reviews, delivery tracking, onboarding, and technical support.",
          "Took part in discovery and pre-sales, supporting requirements gathering, solution definition, and technical estimates for commercial proposals.",
          "Set up deployment environments and processes with Docker and contributed to consolidating the AWS infrastructure, covering application services, storage, CDN, databases, DNS, and permissions.",
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
          total: "1 year and 8 months",
        },
        summary: [
          "Worked as a technical partner on the end-to-end development of Banco Digimais' new website during its rebranding, leading architecture, technologies, implementation standards, and alignment with the marketing, design, infrastructure, and security teams.",
        ],
        highlights: [
          "Structured the new solution with React and Next.js integrated with a headless CMS in Strapi and PostgreSQL, including content modeling and the site's manageable areas.",
          "Before the new implementation, worked on the technical remediation of the legacy PHP/Laravel site after a pentest, fixing critical vulnerabilities and documenting decisions with the security team.",
          "Defined the application's runtime setup with Docker and the technical requirements for launch, leading the adjustments from subsequent pentests and certification through the site's production release.",
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
          total: "4 years and 5 months",
        },
        summary: [
          "Worked on the interface team responsible for digital campaigns, landing pages, and pages for Bradesco's portal, following the bank's technical and visual standards, with pixel-perfect implementation and metrics instrumentation used by the BI teams to build dashboards.",
          "Deliveries also went through quality checks with Lighthouse, Core Web Vitals, and WCAG accessibility criteria, following the standards required by the bank.",
        ],
        highlights: [
          "Took part in creating Template Bradesco 1.0, replacing image-based emails with responsive HTML components compatible with different email clients. This structure gave rise to the work that later evolved into the bank's email Design System.",
          "Was responsible for configuring and republishing the Blog Saber para Crescer on a Linux environment, directly on Bradesco's servers, restoring the service after an outage.",
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
          total: "7 months",
        },
        summary: [
          "Worked on frontend development of projects for different clients, including websites, landing pages, and CMS platforms.",
        ],
        highlights: [
          "Led the frontend of the Galápagos Jogos e-commerce store, built from scratch alongside the client's backend team, responsible for the interface layer and its integrations.",
          "Worked on the Galeria do Rock portal, structuring theme pages and templates in WordPress to showcase the venue's stores and content.",
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
          total: "3 months",
        },
        summary: [
          "Worked on the frontend development and maintenance of VTEX e-commerce stores, implementing features and improvements to interface, performance, and stability.",
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
          total: "1 year and 8 months",
        },
        summary: [
          "Worked on frontend development of websites, portals, and WordPress projects, notably Portal Franquia Dia, a platform for the brand's franchisee network featuring multiple product pages, franchise information, performance indicators, and business support content.",
          "Also contributed to Metlycs, the agency's own marketing automation platform, mainly through testing and development support activities.",
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
