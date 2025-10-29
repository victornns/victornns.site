import { about } from "@/content/about";
import { TOKENS } from "@/lib/constants";

import { UISection } from "@/components/ui/UISection";

export function AboutSection() {
  const details = about.description.join(TOKENS.separator.weak);

  return <UISection title={about.title} headingLevel={1} description={details} />;
}
