import { ListView } from "@/components/ListView";

import { projects } from "@/data/projects";
import { ProjectItem } from "@/components/ProjectItem";

import { experiences } from "@/data/experiences";
import { ExperienceItem } from "@/components/ExperienceItem";

import { contacts } from "@/data/contacts";
import { ContactItem } from "@/components/ContactItem";

import { UISectionHeader } from "@/components/ui/UISectionHeader";

export default function Portfolio() {
  return (
    <main className="flex flex-col gap-16 py-16 px-6 md:px-12">
      <section>
        <UISectionHeader title="Victor Nascimento" description="Desenvolvedor front-end com 8+ anos de experiência em projetos web." />
        <p className="italic">Atuo na construção de interfaces web, além de colaborar em decisões técnicas e arquitetura.</p>
        <p className="italic">Também atuo como full-stack freelancer, conduzindo projetos sob demanda com parceiros e equipes externas.</p>
      </section>

      <ListView title="Experiências" description="Histórico profissional">
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

      <ListView title="Contatos">
        {contacts.map((contact) => (
          <li key={contact.slug}>
            <ContactItem data={contact} />
          </li>
        ))}
      </ListView>
    </main>
  );
}
