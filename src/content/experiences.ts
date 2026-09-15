import type { OrganizationId } from "@/content/organizations";
import type { Locale } from "@/i18n/config";

export type Experience = {
  id: string;
  role: string;
  organizationId: OrganizationId;
  /** Main client the engagement was dedicated to, when applicable. */
  mainClient?: string;
  /** e.g. "Contrato PJ", when the engagement wasn't a standard employment contract. */
  contractType?: string;
  period: {
    start: string;
    end?: string;
    /** Human-readable duration, e.g. "2 anos e 5 meses". */
    total: string;
  };
  summary: string[];
  /** Bullet-point achievements, shown below the summary paragraphs. */
  highlights?: string[];
  technologies: string[];
};

export type ExperiencesContent = {
  title: string;
  description: string;
  technologiesLabel: string;
  mainClientLabel: string;
  items: Experience[];
};

export const experiencesContent: Record<Locale, ExperiencesContent> = {
  pt: {
    title: "Experiência",
    description: "Histórico profissional",
    technologiesLabel: "Stack principal",
    mainClientLabel: "Cliente principal",
    items: [
      {
        id: "one-bra-frontend-developer",
        role: "Frontend Engineer",
        organizationId: "one-bra-agency",
        mainClient: "Bradesco",
        period: {
          start: "Out.2023",
          end: "Fev.2026",
          total: "2 anos e 5 meses",
        },
        summary: [
          "Atuei em uma operação dedicada ao Bradesco, trabalhando diretamente com o cliente no desenvolvimento de soluções para os canais digitais do banco.",
          "Passei a atuar com maior autonomia, conduzindo frentes frontend, definindo arquitetura e padrões, realizando code reviews e acompanhando a qualidade das entregas junto aos times de desenvolvimento, design e cliente.",
        ],
        highlights: [
          "Colaborei na evolução e consolidação do Design System de e-mails do Bradesco, substituindo modelos baseados em imagens por componentes HTML reutilizáveis, responsivos e acessíveis, com fallbacks e testes de renderização em diferentes clientes de e-mail. A nova estrutura aumentou a consistência das comunicações e ajudou a reduzir problemas de entrega, além de melhorar a leitura em diferentes dispositivos e provedores.",
          "Conduzi o frontend de projetos de alto tráfego, incluindo o Onboarding Classic, utilizado na jornada de clientes após a emissão de novos cartões do Bradesco. Durante a homologação do projeto, atuei sobre os resultados de pentests, defendendo a arquitetura e as escolhas técnicas do projeto e realizando os ajustes necessários para atender aos requisitos de segurança do banco.",
        ],
        technologies: [
          "TypeScript",
          "React",
          "Next.js",
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
        contractType: "Contrato PJ",
        period: {
          start: "Mar.2021",
          end: "Out.2025",
          total: "4 anos e 8 meses",
        },
        summary: [
          "Responsável técnico pela área de tecnologia da agência, com atuação em definição de soluções, levantamento de requisitos, arquitetura e direcionamento técnico dos projetos. Fui referência para decisões relacionadas a aplicações, ferramentas, infraestrutura, serviços e novas iniciativas de tecnologia.",
        ],
        highlights: [
          "Conduzi projetos end-to-end, da definição técnica à publicação e manutenção, atuando em frontend, backend, CMS, infraestrutura e deploy.",
          "Coordenei colaboradores e frentes de desenvolvimento, com gestão de tarefas, code review, acompanhamento das entregas e suporte técnico.",
          "Desenvolvi sites, plataformas e aplicações web com foco em React e Next.js, além de soluções full-stack com Node.js, Strapi, APIs REST e PostgreSQL.",
          "Estruturei ambientes e processos de publicação com AWS, DigitalOcean e Docker, incluindo configuração de domínios e serviços.",
        ],
        technologies: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "Strapi",
          "PostgreSQL",
          "REST APIs",
          "Docker",
          "Docker Compose",
          "AWS",
          "DigitalOcean",
          "Vue.js",
          "Nuxt.js",
        ],
      },
      {
        id: "digimais-fullstack-software-engineer",
        role: "Full-Stack Software Engineer (Frontend-Leaning)",
        organizationId: "banco-digimais",
        contractType: "Contrato PJ",
        period: {
          start: "Out.2023",
          end: "Mai.2025",
          total: "1 ano e 8 meses",
        },
        summary: [
          "Atuei no desenvolvimento end-to-end do novo site do Banco Digimais durante o processo de rebranding do banco, sendo responsável pela implementação técnica da nova experiência web.",
          "Conduzi tecnicamente o projeto, definindo arquitetura, tecnologias e padrões de implementação, além dos alinhamentos com design, infraestrutura e segurança.",
        ],
        highlights: [
          "Estruturei a solução web com React e Next.js integrada ao headless CMS em Strapi e PostgreSQL, definindo a modelagem de conteúdo, as áreas gerenciáveis e a estrutura do blog.",
          "Implementei templates de e-mail em HTML responsivo seguindo os novos padrões visuais e de comunicação definidos durante o rebranding.",
          "Defini a estrutura de execução da aplicação com Docker e os requisitos técnicos necessários para o processo de deploy conduzido pelo time de infraestrutura do banco.",
          "Conduzi os ajustes técnicos decorrentes dos pentests e defendi as decisões de arquitetura junto ao time de segurança durante o processo de homologação.",
        ],
        technologies: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
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
        period: {
          start: "Jun.2019",
          end: "Out.2023",
          total: "4 anos e 5 meses",
        },
        summary: [
          "Atuei no time de interface responsável por campanhas digitais, landing pages e páginas para o portal do Bradesco, com foco na implementação e qualidade da camada frontend. Trabalhei seguindo os padrões técnicos e visuais do cliente em entregas para diferentes canais digitais do banco.",
        ],
        highlights: [
          "Desenvolvi interfaces e componentes para campanhas e páginas do portal do Bradesco, mantendo responsividade, acessibilidade, performance e consistência visual entre as entregas.",
          "Atuei na criação e desenvolvimento inicial do Template Bradesco 1.0, migrando os e-mails de modelos baseados em imagens para componentes HTML responsivos e compatíveis com diferentes clientes de e-mail e dispositivos. Essa estrutura deu origem ao trabalho que continuou evoluindo como Design System de e-mails do banco.",
          "Fui responsável pela configuração e republicação do Blog Saber para Crescer em ambiente Linux, diretamente nos servidores do Bradesco na Cidade de Deus, restabelecendo a aplicação WordPress após uma indisponibilidade.",
        ],
        technologies: [
          "JavaScript",
          "HTML",
          "Sass",
          "Vue.js",
          "WordPress",
          "Linux",
          "Figma",
        ],
      },
      {
        id: "cave-digital-frontend-developer",
        role: "Mid-level Frontend Developer",
        organizationId: "cave-digital-agency",
        period: {
          start: "Ago.2018",
          end: "Fev.2019",
          total: "7 meses",
        },
        summary: [
          "Atuei no desenvolvimento frontend de projetos baseados em WordPress, construindo interfaces, temas e CMS para diferentes clientes da agência.",
        ],
        highlights: [
          "Conduzi a frente frontend de uma aplicação desenvolvida do zero junto ao time backend do cliente, sendo responsável pela implementação da camada de interface durante o projeto.",
          "Desenvolvi o portal da Galeria do Rock, estruturado sobre WordPress para gerenciamento e apresentação de lojas e conteúdos.",
          "Atuei pontualmente no desenvolvimento de uma aplicação híbrida utilizando Ionic e Vue.js.",
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
        period: {
          start: "Jun.2018",
          end: "Ago.2018",
          total: "3 meses",
        },
        summary: [
          "Atuei no desenvolvimento e manutenção frontend de e-commerces em VTEX, implementando funcionalidades, mantendo interfaces e atuando em melhorias de performance e testes de estabilidade.",
        ],
        technologies: ["VTEX", "JavaScript", "jQuery"],
      },
      {
        id: "l4u-frontend-developer",
        role: "Junior Web Developer",
        organizationId: "l4u-agency",
        period: {
          start: "Set.2016",
          end: "Abr.2018",
          total: "1 ano e 8 meses",
        },
        summary: [
          "Atuei no desenvolvimento frontend de sites, portais, landing pages e projetos em WordPress.",
        ],
        highlights: [
          "Mapeei e implementei as páginas do Portal Franquia Dia em WordPress, projeto voltado à rede de franqueados da marca.",
          "Atuei no desenvolvimento e nos testes da Metlycs, plataforma própria de automação de marketing da agência.",
          "Estruturei estilos utilizando Sass, BEM e OOCSS, aplicando padrões de organização e reutilização de código frontend.",
        ],
        technologies: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Sass",
          "BEM",
          "OOCSS",
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
    mainClientLabel: "Main client",
    items: [
      {
        id: "one-bra-frontend-developer",
        role: "Frontend Engineer",
        organizationId: "one-bra-agency",
        mainClient: "Bradesco",
        period: {
          start: "Oct.2023",
          end: "Feb.2026",
          total: "2 years and 5 months",
        },
        summary: [
          "Worked on a dedicated operation for Bradesco, engaging directly with the client on solutions for the bank's digital channels.",
          "Took on greater autonomy, leading frontend workstreams, defining architecture and standards, running code reviews, and overseeing delivery quality together with the development, design, and client teams.",
        ],
        highlights: [
          "Contributed to the evolution and consolidation of Bradesco's email Design System, replacing image-based templates with reusable, responsive, and accessible HTML components, complete with fallbacks and rendering tests across different email clients. The new structure increased communication consistency, helped reduce delivery issues, and improved readability across devices and providers.",
          "Led the frontend of high-traffic projects, including Onboarding Classic, used in the customer journey after new Bradesco card issuance. During the project's certification process, I addressed pentest findings, defending the architecture and technical decisions and making the adjustments needed to meet the bank's security requirements.",
        ],
        technologies: [
          "TypeScript",
          "React",
          "Next.js",
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
        contractType: "PJ contract",
        period: {
          start: "Mar.2021",
          end: "Oct.2025",
          total: "4 years and 8 months",
        },
        summary: [
          "Technical lead for the agency's technology area, working on solution definition, requirements gathering, architecture, and technical direction for projects. I was the go-to reference for decisions on applications, tools, infrastructure, services, and new technology initiatives.",
        ],
        highlights: [
          "Led end-to-end projects, from technical definition through launch and maintenance, working across frontend, backend, CMS, infrastructure, and deployment.",
          "Coordinated team members and development workstreams, managing tasks, code reviews, delivery tracking, and technical support.",
          "Built websites, platforms, and web applications focused on React and Next.js, along with full-stack solutions using Node.js, Strapi, REST APIs, and PostgreSQL.",
          "Set up hosting environments and deployment processes with AWS, DigitalOcean, and Docker, including domain and service configuration.",
        ],
        technologies: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "Strapi",
          "PostgreSQL",
          "REST APIs",
          "Docker",
          "Docker Compose",
          "AWS",
          "DigitalOcean",
          "Vue.js",
          "Nuxt.js",
        ],
      },
      {
        id: "digimais-fullstack-software-engineer",
        role: "Full-Stack Software Engineer (Frontend-Leaning)",
        organizationId: "banco-digimais",
        contractType: "PJ contract",
        period: {
          start: "Oct.2023",
          end: "May.2025",
          total: "1 year and 8 months",
        },
        summary: [
          "Worked on the end-to-end development of Banco Digimais' new website during the bank's rebranding, responsible for the technical implementation of the new web experience.",
          "Technically led the project, defining architecture, technologies, and implementation standards, as well as alignment with design, infrastructure, and security.",
        ],
        highlights: [
          "Structured the web solution with React and Next.js integrated with a headless CMS in Strapi and PostgreSQL, defining content modeling, manageable areas, and the blog structure.",
          "Implemented responsive HTML email templates following the new visual and communication standards defined during the rebranding.",
          "Defined the application's runtime setup with Docker and the technical requirements for the deployment process led by the bank's infrastructure team.",
          "Led the technical adjustments arising from pentests and defended architecture decisions with the security team during the certification process.",
        ],
        technologies: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
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
        period: {
          start: "Jun.2019",
          end: "Oct.2023",
          total: "4 years and 5 months",
        },
        summary: [
          "Worked on the interface team responsible for digital campaigns, landing pages, and pages for Bradesco's portal, focused on the implementation and quality of the frontend layer. Followed the client's technical and visual standards across deliveries for different digital channels of the bank.",
        ],
        highlights: [
          "Developed interfaces and components for Bradesco portal campaigns and pages, maintaining responsiveness, accessibility, performance, and visual consistency across deliveries.",
          "Worked on the creation and initial development of Template Bradesco 1.0, migrating emails from image-based templates to responsive HTML components compatible with different email clients and devices. This structure gave rise to the work that continued evolving into the bank's email Design System.",
          "Was responsible for configuring and republishing the Blog Saber para Crescer on a Linux environment, directly on Bradesco's servers at Cidade de Deus, restoring the WordPress application after an outage.",
        ],
        technologies: [
          "JavaScript",
          "HTML",
          "Sass",
          "Vue.js",
          "WordPress",
          "Linux",
          "Figma",
        ],
      },
      {
        id: "cave-digital-frontend-developer",
        role: "Mid-level Frontend Developer",
        organizationId: "cave-digital-agency",
        period: {
          start: "Aug.2018",
          end: "Feb.2019",
          total: "7 months",
        },
        summary: [
          "Worked on the frontend development of WordPress-based projects, building interfaces, themes, and CMS for different agency clients.",
        ],
        highlights: [
          "Led the frontend workstream of an application built from scratch alongside the client's backend team, responsible for the interface layer implementation throughout the project.",
          "Developed the Galeria do Rock portal, built on WordPress for managing and showcasing stores and content.",
          "Occasionally worked on developing a hybrid application using Ionic and Vue.js.",
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
        period: {
          start: "Jun.2018",
          end: "Aug.2018",
          total: "3 months",
        },
        summary: [
          "Worked on the frontend development and maintenance of VTEX e-commerce stores, implementing features, maintaining interfaces, and working on performance improvements and stability testing.",
        ],
        technologies: ["VTEX", "JavaScript", "jQuery"],
      },
      {
        id: "l4u-frontend-developer",
        role: "Junior Web Developer",
        organizationId: "l4u-agency",
        period: {
          start: "Sep.2016",
          end: "Apr.2018",
          total: "1 year and 8 months",
        },
        summary: [
          "Worked on frontend development of websites, portals, landing pages, and WordPress projects.",
        ],
        highlights: [
          "Mapped and implemented the Portal Franquia Dia pages on WordPress, a project for the brand's franchisee network.",
          "Worked on the development and testing of Metlycs, the agency's own marketing automation platform.",
          "Structured styles using Sass, BEM, and OOCSS, applying frontend code organization and reuse standards.",
        ],
        technologies: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Sass",
          "BEM",
          "OOCSS",
          "WordPress",
          "Node.js",
          "Docker",
        ],
      },
    ],
  },
};
