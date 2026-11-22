import type { Locale } from "@/i18n/config";

export type About = {
  title: string;
  /** Professional role shown under the name, on two lines. */
  role: {
    title: string;
    subtitle: string;
  };
  /** Short skill/experience tags shown under the name. */
  highlights: string[];
  /** Bio shown on both the portfolio and curriculo pages. */
  summary: string[];
  /** Label shown before the portfolio URL on the curriculo page, e.g. "Portfólio: victornns.com/sobre". */
  onlineVersionLabel: string;
  /** Call to action closing the About section, pointing to the projects page. */
  projectsCta: {
    title: string;
    description: string;
    linkLabel: string;
  };
};

export const PROFILE_NAME = {
  first: "Victor",
  last: "Nascimento N. S.",
  full: "Victor Nascimento N. Silva",
};

export const aboutContent: Record<Locale, About> = {
  pt: {
    title: "Sobre",
    role: {
      title: "Senior Frontend Engineer",
      subtitle: "com experiência full-stack",
    },
    highlights: [
      "10+ anos em web",
      "TypeScript",
      "React & Next.js",
      "Node.js & APIs",
      "SSR/SSG/ISR",
      "Web Performance",
      "Arquitetura Frontend",
    ],
    summary: [
      "Senior Frontend Engineer com 10+ anos de experiência em desenvolvimento web, especializado em TypeScript, React e Next.js, incluindo projetos para canais digitais de bancos.",
      "Atuação em arquitetura frontend, Design Systems e aplicações de alto tráfego, com foco em estratégias de renderização (SSR/SSG/ISR), performance, acessibilidade e SEO técnico.",
      "Experiência em liderança técnica, do relacionamento com clientes e levantamento de requisitos à definição de soluções, gestão de equipes, contratação de profissionais e coordenação de entregas.",
      "Atuação full-stack complementar, com desenvolvimento end-to-end de projetos utilizando Node.js, APIs, CMS headless e integrações.",
    ],
    onlineVersionLabel: "Portfólio",
    projectsCta: {
      title: "Um pouco do que construí.",
      description:
        "Uma seleção de sites, landing pages e plataformas que desenvolvi, com o contexto e as tecnologias de cada projeto.",
      linkLabel: "Ver projetos",
    },
  },
  en: {
    title: "About",
    role: {
      title: "Senior Frontend Engineer",
      subtitle: "with full-stack experience",
    },
    highlights: [
      "10+ years in web",
      "TypeScript",
      "React & Next.js",
      "Node.js & APIs",
      "SSR/SSG/ISR",
      "Web Performance",
      "Frontend Architecture",
    ],
    summary: [
      "Senior Frontend Engineer with 10+ years of experience in web development, specializing in TypeScript, React, and Next.js, including projects for digital banking channels.",
      "Experienced in frontend architecture, Design Systems, and high-traffic web applications, with a focus on rendering strategies (SSR/SSG/ISR), performance optimization, accessibility, and technical SEO.",
      "Background in technical leadership, spanning client communication and requirements gathering to solution design, team management, hiring, and delivery oversight.",
      "Additional full-stack experience, delivering end-to-end projects with Node.js, APIs, headless CMS platforms, and third-party integrations.",
    ],
    onlineVersionLabel: "Portfolio",
    projectsCta: {
      title: "A bit of what I've built.",
      description:
        "A selection of websites, landing pages and platforms I've developed, with the context and technologies behind each project.",
      linkLabel: "View projects",
    },
  },
};
