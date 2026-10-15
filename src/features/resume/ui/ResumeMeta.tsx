import { SEPARATORS } from "@/lib/format";

type ResumeMetaProps = {
  label: string;
  items: string[];
};

/** One label/value row of a metadata list, meant as a direct child of a `<dl>`. */
export function ResumeMeta({ label, items }: ResumeMetaProps) {
  return (
    <div>
      <dt className="inline font-semibold">{label}:</dt>{" "}
      <dd className="inline">{items.join(SEPARATORS.list)}</dd>
    </div>
  );
}
