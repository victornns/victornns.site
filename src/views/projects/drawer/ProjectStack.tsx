type ProjectStackProps = {
  label: string;
  technologies?: string[];
};

export function ProjectStack({ label, technologies }: ProjectStackProps) {
  if (!technologies?.length) {
    return null;
  }

  return (
    <aside className="space-y-4">
      <h3 className="text-wide-tracking text-xs text-muted">{label}</h3>

      <ul className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li key={technology} className="border px-3 py-2 text-sm text-muted">
            {technology}
          </li>
        ))}
      </ul>
    </aside>
  );
}
