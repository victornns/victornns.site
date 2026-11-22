import { joinClassNames, tw } from "@/lib/tailwind";

import type { ReactNode } from "react";

const WINDOW_CLASSNAME = tw`overflow-hidden rounded-[1.6cqw] bg-white shadow-xl ring-1 ring-black/5`;

const TOOLBAR_CLASSNAME = tw`flex h-[5.6cqw] items-center gap-[1.2cqw] border-b border-neutral-200 bg-neutral-100 px-[2.6cqw]`;

const TOOLBAR_DOT_CLASSNAME = tw`size-[1.4cqw] rounded-full bg-neutral-300`;

const ADDRESS_BAR_CLASSNAME = tw`mx-auto max-w-[46%] truncate rounded-full bg-neutral-200 px-[2.4cqw] text-[clamp(0.5rem,1.6cqw,0.75rem)] leading-[3cqw] text-neutral-500`;

type BrowserFrameProps = {
  /** Shown in the address bar. */
  address?: string;
  className?: string;
  children: ReactNode;
};

export function BrowserFrame({
  address,
  className,
  children,
}: BrowserFrameProps) {
  return (
    <div className={joinClassNames("[container-type:inline-size]", className)}>
      <div className={WINDOW_CLASSNAME}>
        <div className={TOOLBAR_CLASSNAME}>
          <span className={TOOLBAR_DOT_CLASSNAME} />
          <span className={TOOLBAR_DOT_CLASSNAME} />
          <span className={TOOLBAR_DOT_CLASSNAME} />
          {address && <span className={ADDRESS_BAR_CLASSNAME}>{address}</span>}
        </div>
        <div className="relative aspect-[16/10]">{children}</div>
      </div>
    </div>
  );
}
