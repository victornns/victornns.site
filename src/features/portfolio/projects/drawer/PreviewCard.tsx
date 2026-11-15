import { UILink } from "@/components/ui/UILink";
import { sanitizeUrlForDisplay } from "@/lib/format";

type PreviewCardProps = {
  url: string;
  label: string;
};

export function PreviewCard({ url, label }: PreviewCardProps) {
  return (
    <div className="border bg-neutral-50 p-6 md:p-8">
      <p className="text-wide-tracking mb-3 text-xs text-muted">{label}</p>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <p className="text-2xl leading-tight">{sanitizeUrlForDisplay(url)}</p>
          <p className="text-sm text-muted">{url}</p>
        </div>

        <UILink
          href={url}
          underline={false}
          className="inline-flex items-center justify-center border border-black px-4 py-3 text-sm transition hover:bg-black hover:text-white"
        >
          {label}
        </UILink>
      </div>
    </div>
  );
}
