import { Experience } from "@/types/experience";
import { UIDate, UITitle, UIDescription } from "@/components/ui";

interface ExperienceItemProps {
  data: Experience;
}

export function ExperienceItem({ data }: ExperienceItemProps) {
  return (
    <div>
      <UIDate date={data.date} />
      <div>
        <UITitle title={data.title} />
        <span className="mx-1 inline-block">@</span>
        <UITitle title={data.company.name} link={data.company.url} />
      </div>
      {data.description && <UIDescription description={data.description} />}
    </div>
  );
}
