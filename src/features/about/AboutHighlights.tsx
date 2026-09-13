import { Fragment } from "react";

import { SEPARATORS } from "@/lib/format";

type AboutHighlightsProps = {
  items: string[];
};

export function AboutHighlights({ items }: AboutHighlightsProps) {
  return (
    <div className="text-wide-tracking flex flex-wrap gap-x-5 gap-y-2 border-y py-4 text-xs text-muted md:text-sm xl:justify-between">
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 && <span aria-hidden="true">{SEPARATORS.bullet}</span>}
          <span>{item}</span>
        </Fragment>
      ))}
    </div>
  );
}
