import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectItemProps {
  data: Project;
}

export function ProjectItem({ data }: ProjectItemProps) {
  return (
    <div className="flex flex-col">
      <GenericDate data={data.date} />
      <GenericTitle data={{ title: data.title, link: data.link }} />
      <GenericDescription data={data.description} />
      <GenericType data={data.type} />
      <GenericTags data={data.tags} />
      <GenericPartner data={data.partner} />
    </div>
  );
}

// ==================
// Subcomponentes
// ==================

function GenericPartner({ data }: { data?: { name: string; url?: string } }) {
  if (!data) return null;

  return (
    <p>
      Parceiro:{" "}
      {data.url ? (
        <Link href={data.url} target="_blank" rel="noopener noreferrer">
          {data.name}
        </Link>
      ) : (
        data.name
      )}
    </p>
  );
}

function GenericType({ data }: { data?: string[] }) {
  if (!data?.length) return null;

  return <p>Tipo: {data.join(", ")}</p>;
}

function GenericTags({ data }: { data?: string[] }) {
  if (!data?.length) return null;

  return <p>Tags: {data.join(", ")}</p>;
}

function GenericTitle({ data }: { data: { title: string; link?: string } }) {
  return (
    <h3>
      {data.link ? (
        <Link href={data.link} target="_blank" rel="noopener noreferrer">
          {data.title}
        </Link>
      ) : (
        data.title
      )}
    </h3>
  );
}

function GenericDescription({ data }: { data?: string }) {
  if (!data) return null;

  return <p>{data}</p>;
}

function GenericDate({ data }: { data?: string }) {
  if (!data) return null;

  return <time dateTime={data}>{data}</time>;
}
