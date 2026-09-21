import { resumeContent } from "@/content/resume";
import { ExternalLinkIcon } from "@/features/portfolio/ui/icons/ExternalLinkIcon";
import { UIButton } from "@/features/portfolio/ui/UIButton";
import type { Locale } from "@/i18n/config";
import { joinClassNames } from "@/lib/tailwind";

type ResumeButtonProps = {
  locale: Locale;
  className?: string;
  onClick?: () => void;
};

export function ResumeButton({
  locale,
  className,
  onClick,
}: ResumeButtonProps) {
  const { url, label } = resumeContent[locale];

  return (
    <UIButton
      href={url}
      target="_blank"
      icon={<ExternalLinkIcon />}
      onClick={onClick}
      className={joinClassNames("px-3 py-2 text-sm font-semibold", className)}
    >
      {label}
      <span className="rounded-sm bg-neutral-800 px-2 py-1 text-xs text-neutral-300">
        .pdf
      </span>
    </UIButton>
  );
}
