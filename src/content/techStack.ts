import type { Locale } from "@/i18n/config";

export interface TechStackCategory {
  id: string;
  title: string;
  items: string[];
}

export interface TechStackContent {
  title: string;
  description: string;
  categories: TechStackCategory[];
}

export const techStackContent: Record<Locale, TechStackContent> = {
  pt: {
    title: "Tecnologias",
    description: "Stack técnica e especialidades",
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Design Systems",
          "SSR / SSG / ISR",
          "React Server Components",
          "Performance Web",
          "SEO Técnico",
          "E-mail HTML",
        ],
      },
      {
        id: "backend",
        title: "Backend",
        items: [
          "Node.js",
          "APIs REST",
          "GraphQL",
          "Strapi",
          "WordPress",
          "CMS",
          "Integrações com APIs",
          "OpenAI API",
        ],
      },
      {
        id: "infra",
        title: "Infra & DevOps",
        items: [
          "Git",
          "GitHub",
          "GitHub Actions",
          "Docker",
          "Docker Compose",
          "Vercel",
          "CI/CD",
          "Deploys Automatizados",
          "Playwright",
          "Linux / Terminal",
        ],
      },
      {
        id: "design",
        title: "Design & Ferramentas",
        items: [
          "Figma",
          "UI Design",
          "Responsive Design",
          "Pixel-perfect Implementation",
          "VS Code",
          "ESLint",
          "Prettier",
          "GitHub Copilot",
          "Claude",
          "n8n",
          "Baserow",
        ],
      },
    ],
  },
  en: {
    title: "Stack",
    description: "Technical stack and specialties",
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Design Systems",
          "SSR / SSG / ISR",
          "React Server Components",
          "Performance Web",
          "Technical SEO",
          "HTML Email",
        ],
      },
      {
        id: "backend",
        title: "Backend",
        items: [
          "Node.js",
          "REST APIs",
          "GraphQL",
          "Strapi",
          "WordPress",
          "CMS",
          "API Integrations",
          "OpenAI API",
        ],
      },
      {
        id: "infra",
        title: "Infra & DevOps",
        items: [
          "Git",
          "GitHub",
          "GitHub Actions",
          "Docker",
          "Docker Compose",
          "Vercel",
          "CI/CD",
          "Automated Deployments",
          "Playwright",
          "Linux / Terminal",
        ],
      },
      {
        id: "design",
        title: "Design & Tools",
        items: [
          "Figma",
          "UI Design",
          "Responsive Design",
          "Pixel-perfect Implementation",
          "VS Code",
          "ESLint",
          "Prettier",
          "GitHub Copilot",
          "Claude",
          "n8n",
          "Baserow",
        ],
      },
    ],
  },
};
