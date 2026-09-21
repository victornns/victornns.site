import { SEPARATORS } from "@/lib/format";
import { joinClassNames } from "@/lib/tailwind";

type UICardMetaProps = {
  label: string;
  items: string[];
  separator?: string;
  className?: string;
};

export function UICardMeta({
  label,
  items,
  separator = SEPARATORS.list,
  className,
}: UICardMetaProps) {
  return (
    <p className={joinClassNames("text-xs text-muted", className)}>
      <b>{label}:</b> {items.join(separator)}
    </p>
  );
}
