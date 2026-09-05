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

// The stack itself isn't localized — same list, in English, for every locale.
const techStackColumns: TechStackCategory[][] = [
  [
    {
      id: "frontend",
      title: "Frontend",
      items: [
        "TypeScript",
        "JavaScript (ES6+)",
        "React",
        "Next.js (App Router)",
        "Vue.js",
        "Nuxt.js",
        "Tailwind CSS",
        "Sass",
        "React Server Components",
        "SSR/SSG/ISR",
        "i18n",
      ],
    },
    {
      id: "backend-apis",
      title: "Backend & APIs",
      items: [
        "Node.js",
        "APIs REST",
        "GraphQL",
        "Strapi (Headless CMS)",
        "WordPress",
        "PostgreSQL",
      ],
    },
    {
      id: "web-quality",
      title: "Web Quality",
      items: [
        "Web Performance (Core Web Vitals)",
        "Web Accessibility (WCAG)",
        "Technical SEO",
      ],
    },
  ],
  [
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      items: [
        "Git",
        "CI/CD (GitHub Actions)",
        "Docker",
        "Docker Compose",
        "Vercel",
        "AWS (S3, EC2, Route 53, CloudFront)",
        "Nginx",
        "Linux",
      ],
    },
    {
      id: "design-tools",
      title: "Design & Tools",
      items: ["Figma", "Playwright (E2E)", "AI-assisted Development (Claude)"],
    },
    {
      id: "web-fundamentals",
      title: "Web Fundamentals",
      items: ["HTML5", "CSS3"],
    },
  ],
];

export const techStackContent: Record<Locale, TechStackContent> = {
  pt: {
    title: "Tecnologias",
    description: "Stack e especialidades técnicas",
    columns: techStackColumns,
  },
  en: {
    title: "Stack",
    description: "Technical stack and specialties",
    columns: techStackColumns,
  },
};
