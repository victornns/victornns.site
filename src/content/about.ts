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
      "Arquitetura Web",
      "Performance",
      "Acessibilidade",
    ],
    summary: [
      "Frontend engineer com 10+ anos de experiência em desenvolvimento web, com forte atuação em TypeScript, React e Next.js.",
      "Trabalho com arquitetura frontend, Design Systems e estratégias de renderização com SSR/SSG/ISR, além de arquitetura de componentes, Design-to-Code, SEO técnico, acessibilidade, performance e testes.",
      "Atuo de forma integrada nas diferentes etapas e áreas envolvidas nos projetos, participando do levantamento de requisitos, das definições técnicas e dos alinhamentos entre clientes, design e desenvolvimento. Também já organizei pequenas equipes e frentes de trabalho, gerenciando tarefas e apoiando decisões técnicas.",
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
      "Web Architecture",
      "Performance",
      "Accessibility",
    ],
    summary: [
      "Frontend engineer with 10+ years of experience in web development, with a strong focus on TypeScript, React, and Next.js.",
      "Experienced in frontend architecture, design systems, SSR/SSG/ISR rendering strategies, component architecture, design-to-code workflows, technical SEO, accessibility, performance, and testing.",
      "Comfortable working across different stages of the development lifecycle, from requirements gathering and technical planning to cross-functional collaboration with clients, design, and engineering teams. Also experienced in coordinating small teams and workstreams, managing tasks, and supporting technical decision-making.",
      "For full-stack projects, I can own end-to-end development when needed, working primarily with Node.js, APIs, headless CMS platforms, and integrations.",
    ],
  },
};
