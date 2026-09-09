import { UILink } from "@/components/ui/UILink";
import { sanitizeUrlForDisplay } from "@/lib/format";

type ProjectActionsProps = {
  primaryUrl: string | null;
  officialUrl?: string;
  previewUrl?: string;
  showPreviewAction: boolean;
  viewProjectLabel: string;
  previewLabel: string;
};

export function ProjectActions({
  primaryUrl,
  officialUrl,
  previewUrl,
  showPreviewAction,
  viewProjectLabel,
  previewLabel,
}: ProjectActionsProps) {
  if (!primaryUrl && !officialUrl && !showPreviewAction) {
    return null;
  }

  return (
    <footer className="mt-auto flex flex-col gap-3 border-t pt-6 sm:flex-row sm:flex-wrap sm:items-center">
      {primaryUrl && (
        <UILink
          href={primaryUrl}
          underline={false}
          className="inline-flex items-center justify-center bg-black px-5 py-3 text-sm text-white transition hover:bg-neutral-800"
        >
          {viewProjectLabel}
        </UILink>
      )}

      {officialUrl && officialUrl !== primaryUrl && (
        <UILink
          href={officialUrl}
          underline={false}
          className="inline-flex items-center justify-center border px-5 py-3 text-sm transition hover:border-black"
        >
          {sanitizeUrlForDisplay(officialUrl)}
        </UILink>
      )}

      {showPreviewAction && previewUrl && (
        <UILink
          href={previewUrl}
          underline={false}
          className="inline-flex items-center justify-center px-2 py-3 text-sm transition hover:text-muted"
        >
          {previewLabel}
        </UILink>
      )}
    </footer>
  );
}
