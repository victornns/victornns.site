import { Experience } from "@/types/experience";
import { UIDate, UITitle, UICompany, UIDescription } from "@/components/ui";

interface ExperienceItemProps {
  data: Experience;
}

export function ExperienceItem({ data }: ExperienceItemProps) {
  return (
    <div className="flex flex-col">
      <UIDate date={data.date} />
      <UITitle title={data.title} />
      <UICompany company={data.company} />
      {data.description && <UIDescription description={data.description} />}
    </div>
  );
}
