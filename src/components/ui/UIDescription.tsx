interface UIDescriptionProps {
  description: string;
}

export function UIDescription({ description }: UIDescriptionProps) {
  return <p className="text-base max-w-screen-lg">{description}</p>;
}
