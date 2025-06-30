interface UITypeProps {
  types: string[];
  prefix?: string;
  separator?: string;
}

export function UIType({ types, prefix = "Tipo de projeto:", separator = ", " }: UITypeProps) {
  return (
    <p>
      {prefix} {types.join(separator)}
    </p>
  );
}
