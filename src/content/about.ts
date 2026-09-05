import type { Locale } from "@/i18n/config";

export interface About {
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
}

export const PROFILE_NAME = {
  first: "Victor",
  last: "Nascimento N. S.",
  full: "Victor Nascimento N. Silva",
};

export const aboutContent: Record<Locale, About> = {
  pt: {
    title: "Sobre",
    role: {
      title: "Frontend Engineer",
      subtitle: "com experiência full-stack",
    },
    highlights: [
      "10+ anos em web",
      "TypeScript",
      "React & Next.js",
      "Node.js & APIs",
      "SSR/SSG/ISR",
      "Arquitetura Frontend",
      "Web Performance",
    ],
    summary: [
      "Frontend Engineer com 10+ anos de experiência em desenvolvimento web, com foco em TypeScript, React e Next.js.",
      "Atuo na construção de soluções digitais e projetos de alto tráfego, trabalhando com arquitetura frontend e de componentes, Design Systems, estratégias de renderização com SSR/SSG/ISR, Design-to-Code, SEO técnico, acessibilidade e performance.",
      "Participo do levantamento de requisitos e dos alinhamentos entre clientes, design e desenvolvimento. Também coordeno frentes de trabalho, com gestão de tarefas, tomada de decisões técnicas e acompanhamento de parceiros e colaboradores.",
      "Como full-stack, conduzo projetos end-to-end sob demanda, atuando principalmente com Node.js, APIs, CMS headless e integrações.",
    ],
  },
  en: {
    title: "About",
    role: {
      title: "Frontend Engineer",
      subtitle: "with full-stack experience",
    },
    highlights: [
      "10+ years in web",
      "TypeScript",
      "React & Next.js",
      "Node.js & APIs",
      "SSR/SSG/ISR",
      "Frontend Architecture",
      "Web Performance",
    ],
    summary: [
      "Frontend Engineer with 10+ years of experience in web development, focused on TypeScript, React, and Next.js.",
      "Building digital solutions, including high-traffic web projects, with frontend and component architecture, Design Systems, SSR/SSG/ISR rendering strategies, Design-to-Code, technical SEO, accessibility and performance.",
      "I contribute to requirements gathering and cross-functional alignment across clients, design, and development. I also coordinate workstreams, manage tasks, make technical decisions, and work closely with partners and collaborators.",
      "As a full-stack developer, I lead end-to-end projects as needed, primarily working with Node.js, APIs, headless CMS, and integrations.",
    ],
  },
};
