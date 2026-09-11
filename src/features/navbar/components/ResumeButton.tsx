import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { UIButton } from "@/components/ui/UIButton";
import { resumeContent } from "@/content/resume";
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
      className={joinClassNames("font-semibold", className)}
    >
      {label}
      <span className="rounded-sm bg-neutral-800 px-2 py-1 text-xs text-neutral-300">
        .pdf
      </span>
    </UIButton>
  );
}
