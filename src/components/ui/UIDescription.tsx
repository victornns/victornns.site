interface UIDescriptionProps {
  description: string;
}

export function UIDescription({ description }: UIDescriptionProps) {
  return <p className="max-w-screen-lg text-sm">{description}</p>;
}
