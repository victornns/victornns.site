import { AboutSection } from "@/views/AboutSection";
import { ContactsSection } from "@/views/ContactsSection";
import { ExperienceSection } from "@/views/ExperienceSection";
import { ProjectsSection } from "@/views/ProjectsSection";

export default function Portfolio() {
  const mainClasses = "flex flex-col gap-16 py-16 px-6 md:px-12";

  return (
    <main className={mainClasses}>
      <AboutSection />
      <ContactsSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
