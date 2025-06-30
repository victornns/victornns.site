import { Experience } from "@/types/experience";

interface ExperienceItemProps {
  data: Experience;
}

export function ExperienceItem({ data }: ExperienceItemProps) {
  return (
    <div className="flex flex-col">
      <GenericPeriod startDate={data.startDate} endDate={data.endDate} />
      <GenericTitle data={{ title: data.title }} />
      <GenericCompany data={data.company} />
      <GenericDescription data={data.description} />
    </div>
  );
}

// ==================
// Subcomponentes
// ==================

function GenericPeriod({ startDate, endDate }: { startDate: string; endDate?: string }) {
  const period = endDate ? `${startDate} - ${endDate}` : `${startDate} - Present`;

  return <time>{period}</time>;
}

function GenericTitle({ data }: { data: { title: string } }) {
  return <h3>{data.title}</h3>;
}

function GenericCompany({ data }: { data: string }) {
  return (
    <p>
      <strong>{data}</strong>
    </p>
  );
}

function GenericDescription({ data }: { data?: string }) {
  if (!data) return null;

  return <p>{data}</p>;
}
