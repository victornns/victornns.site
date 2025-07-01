import { Project } from "@/types/project";
import { UIDate, UITitle, UIDescription, UIType, UITags, UIPartner } from "@/components/ui";

interface ProjectItemProps {
  data: Project;
}

export function ProjectItem({ data }: ProjectItemProps) {
  return (
    <div>
      {data.date && <UIDate date={data.date} />}
      <UITitle title={data.title} link={data.link} />
      {data.description && <UIDescription description={data.description} />}

      <div className="hidden">
        {data.type && data.type.length > 0 && <UIType types={data.type} />}
        {data.tags && data.tags.length > 0 && <UITags tags={data.tags} />}
        {data.partner && <UIPartner name={data.partner.name} url={data.partner.url} />}
      </div>
    </div>
  );
}
