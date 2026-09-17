import { UIParagraphs } from "@/components/ui/UIParagraphs";
import { UISplitColumns } from "@/components/ui/UISplitColumns";

type AboutBioProps = {
  title: string;
  paragraphs: string[];
};

export function AboutBio({ title, paragraphs }: AboutBioProps) {
  return (
    <UISplitColumns
      aside={<h2 className="text-wide-tracking font-bold">{title}</h2>}
      className="gap-4 md:mt-4"
    >
      <UIParagraphs data={paragraphs} className="max-w-screen-md" />
    </UISplitColumns>
  );
}
