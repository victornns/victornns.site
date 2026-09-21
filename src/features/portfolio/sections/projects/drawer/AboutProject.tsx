type AboutProjectProps = {
  label: string;
  paragraphs: string[];
};

export function AboutProject({ label, paragraphs }: AboutProjectProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-wide-tracking text-xs text-muted">{label}</h3>

      <div className="space-y-4 leading-8 text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
