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
      id: "testing",
      title: "Testing",
      items: ["Playwright (E2E)"],
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
        "AWS (S3, CloudFront, Route 53, EC2)",
        "Nginx",
        "Linux",
      ],
    },
    {
      id: "design-tools",
      title: "Design & Tools",
      items: ["Figma", "AI-assisted Development (Claude)"],
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
