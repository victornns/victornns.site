interface UITagsProps {
  tags: string[];
  prefix?: string;
  separator?: string;
}

export function UITags({ tags, prefix = "Tecnologias:", separator = ", " }: UITagsProps) {
  return (
    <p>
      {prefix} {tags.join(separator)}
    </p>
  );
}
