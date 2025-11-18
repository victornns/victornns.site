import { about } from "@/content/about";
import { TOKENS } from "@/lib/constants";

import { UISection } from "@/components/ui/UISection";

export function AboutSection({ children }: { children?: React.ReactNode }) {
  const details = about.description.join(TOKENS.separator.bullet);

  return (
    <>
      <UISection
        title={about.title}
        headingLevel={1}
        description={details}
      >
        <p>Desenvolvedor front-end com 10+ anos de experiência em interfaces, performance e arquitetura web.</p>
        <p>Também atuo como freelancer full-stack, conduzindo projetos end-to-end sob demanda.</p>

        {children}
      </UISection>
    </>
  );
}
