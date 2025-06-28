import { ListView } from "@/components/ListView";

import { projects } from "@/data/projects";
import { ProjectItem } from "@/components/ProjectItem";

export default function Portfolio() {
  return (
    <>
      <div className="container">
        <section className="mb-10">
          <h1 className="mb-5">Front-end Developer | 8+ anos em Web | React, Next.js, Vue, TypeScript, Tailwind | SSR/SSG, APIs, UI Thinking e Performance</h1>
          <div>
            <p>Desenvolvedor front-end e entusiasta da criação de experiências digitais.</p>
            <p>8+ anos de experiência em projetos web, atuo na construção de interfaces performáticas e alinhadas ao produto, além de colaborar em decisões técnicas e arquitetura.</p>
            <p>Também atuo como full-stack freelancer, conduzindo projetos sob demanda do levantamento de requisitos à entrega final, com autonomia técnica e colaboração com parceiros e equipes externas.</p>
          </div>
        </section>

        <ListView title="Projetos" description="Magni facere officia ad ut, sequi nulla eius vero, sunt expedita deleniti esse hic fugit exercitationem iure laborum rerum, rem id vel.">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectItem data={project} />
            </li>
          ))}
        </ListView>
      </div>
    </>
  );
}
