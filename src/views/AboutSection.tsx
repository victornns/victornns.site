import { UISection } from "@/components/ui/UISection";
import { TOKENS } from "@/lib/constants";

export function AboutSection() {
  const details = ["Victor Nascimento N. Silva", "Desde 1995", "São Paulo, Brasil", "Full-Stack Web Developer", "10+ anos em Web", "Remoto"].join(TOKENS.separator.weak);

  return <UISection title="Dev" headingLevel={1} description={details} />;
}
