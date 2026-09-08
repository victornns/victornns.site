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
          className="inline-flex items-center justify-center bg-black px-5 py-3 text-sm text-white no-underline transition hover:bg-neutral-800"
        >
          {viewProjectLabel}
        </UILink>
      )}

      {officialUrl && officialUrl !== primaryUrl && (
        <UILink
          href={officialUrl}
          className="inline-flex items-center justify-center border px-5 py-3 text-sm no-underline transition hover:border-black"
        >
          {sanitizeUrlForDisplay(officialUrl)}
        </UILink>
      )}

      {showPreviewAction && previewUrl && (
        <UILink
          href={previewUrl}
          className="inline-flex items-center justify-center px-2 py-3 text-sm no-underline transition hover:text-muted"
        >
          {previewLabel}
        </UILink>
      )}
    </footer>
  );
}
