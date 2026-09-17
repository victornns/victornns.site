import { joinClassNames } from "@/lib/tailwind";

type UIParagraphsProps = {
  data: string[];
  className?: string;
};

export function UIParagraphs({ data, className }: UIParagraphsProps) {
  return (
    <div className={joinClassNames("flex flex-col gap-4", className)}>
      {data.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
