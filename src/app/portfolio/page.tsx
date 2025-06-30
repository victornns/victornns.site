import { ListView } from "@/components/ListView";

import { projects } from "@/data/projects";
import { ProjectItem } from "@/components/ProjectItem";

import { experiences } from "@/data/experiences";
import { ExperienceItem } from "@/components/ExperienceItem";

export default function Portfolio() {
  return (
    <main className="flex flex-col gap-16 py-16">
      <section>
        <div className="container">
          <header className="mb-5">
            <h1 className="text-2xl">
              Victor Nascimento,
              <br />
              desenvolvedor front-end com 8+ anos de experiência em projetos web.
            </h1>
          </header>
          <div className="text-xl">
            <p>Atuo na construção de interfaces web, além de colaborar em decisões técnicas e arquitetura.</p>
            <p>Também atuo como full-stack freelancer, conduzindo projetos sob demanda com parceiros e equipes externas.</p>
          </div>
        </div>
      </section>

      <ListView title="Experiência" description="Histórico profissional">
        {experiences.map((experience) => (
          <li key={experience.slug}>
            <ExperienceItem data={experience} />
          </li>
        ))}
      </ListView>

      <ListView title="Trabalhos Recentes" description="Uma seleção de projetos">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectItem data={project} />
          </li>
        ))}
      </ListView>
    </main>
  );
}
