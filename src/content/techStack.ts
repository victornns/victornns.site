import type { Locale } from "@/i18n/config";

export interface TechStackCategory {
  id: string;
  title: string;
  items: string[];
}

export interface TechStackContent {
  title: string;
  description: string;
  /** Categories grouped by column: each inner array renders as one column, top to bottom. */
  columns: TechStackCategory[][];
}

export const techStackContent: Record<Locale, TechStackContent> = {
  pt: {
    title: "Tecnologias",
    description: "Stack técnica e especialidades",
    columns: [
      [
        {
          id: "frontend",
          title: "Frontend",
          items: [
            "TypeScript",
            "React",
            "Next.js",
            "Vue.js",
            "Nuxt.js",
            "Tailwind CSS",
            "Sass",
          ],
        },
        {
          id: "frontend-engineering",
          title: "Frontend Engineering",
          items: [
            "Arquitetura Front-End",
            "Design Systems",
            "SSR / SSG / ISR",
            "React Server Components",
            "Arquitetura de Componentes",
            "Design-to-Code",
            "SEO Técnico",
            "Acessibilidade",
            "Web Performance",
          ],
        },
        {
          id: "backend-apis",
          title: "Backend & APIs",
          items: [
            "Node.js",
            "REST APIs",
            "GraphQL",
            "CMS Headless",
            "WordPress",
            "PostgreSQL",
          ],
        },
        {
          id: "testing",
          title: "Testing",
          items: ["Playwright", "Testes E2E"],
        },
      ],
      [
        {
          id: "cloud-devops",
          title: "Cloud & DevOps",
          items: [
            "Git",
            "GitHub",
            "GitHub Actions",
            "Docker",
            "Docker Compose",
            "Vercel",
            "AWS",
            "CI/CD",
            "Linux",
          ],
        },
        {
          id: "design-tools",
          title: "Design & Tools",
          items: ["Figma", "AI-assisted Development — Claude"],
        },
        {
          id: "security",
          title: "Segurança",
          items: [
            "Autenticação",
            "OAuth",
            "OIDC",
            "Boas práticas de segurança web",
          ],
        },
        {
          id: "other",
          title: "Outros conhecimentos",
          items: ["JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
        },
      ],
    ],
  },
  en: {
    title: "Stack",
    description: "Technical stack and specialties",
    columns: [
      [
        {
          id: "frontend",
          title: "Frontend",
          items: [
            "TypeScript",
            "React",
            "Next.js",
            "Vue.js",
            "Nuxt.js",
            "Tailwind CSS",
            "Sass",
          ],
        },
        {
          id: "frontend-engineering",
          title: "Frontend Engineering",
          items: [
            "Front-End Architecture",
            "Design Systems",
            "SSR / SSG / ISR",
            "React Server Components",
            "Component Architecture",
            "Design-to-Code",
            "Technical SEO",
            "Accessibility",
            "Web Performance",
          ],
        },
        {
          id: "backend-apis",
          title: "Backend & APIs",
          items: [
            "Node.js",
            "REST APIs",
            "GraphQL",
            "Headless CMS",
            "WordPress",
            "PostgreSQL",
          ],
        },
        {
          id: "testing",
          title: "Testing",
          items: ["Playwright", "E2E Testing"],
        },
      ],
      [
        {
          id: "cloud-devops",
          title: "Cloud & DevOps",
          items: [
            "Git",
            "GitHub",
            "GitHub Actions",
            "Docker",
            "Docker Compose",
            "Vercel",
            "AWS",
            "CI/CD",
            "Linux",
          ],
        },
        {
          id: "design-tools",
          title: "Design & Tools",
          items: ["Figma", "AI-assisted Development — Claude"],
        },
        {
          id: "security",
          title: "Security",
          items: [
            "Authentication",
            "OAuth",
            "OIDC",
            "Web Security Best Practices",
          ],
        },
        {
          id: "other",
          title: "Other Skills",
          items: ["JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
        },
      ],
    ],
  },
};
