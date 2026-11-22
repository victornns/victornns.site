import { SEPARATORS } from "@/lib/format";

const VISIBLE_TECHNOLOGIES_LIMIT = 3;

type ProjectTechnologiesProps = {
  technologies?: string[];
};

/** The project's main technologies; the drawer lists all of them. */
export function ProjectTechnologies({
  technologies,
}: ProjectTechnologiesProps) {
  if (!technologies?.length) return null;

  return (
    <p className="text-wide-tracking text-xs leading-loose text-muted">
      {technologies
        .slice(0, VISIBLE_TECHNOLOGIES_LIMIT)
        .join(SEPARATORS.default)}
    </p>
  );
}
