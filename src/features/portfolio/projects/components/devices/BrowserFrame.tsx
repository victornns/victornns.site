import { BrowserBar } from "@/features/portfolio/projects/components/devices/BrowserBar";
import { joinClassNames, tw } from "@/lib/tailwind";

import type { ReactNode } from "react";

const WINDOW_CLASSNAME = tw`overflow-hidden rounded-[1.6cqw] bg-white shadow-xl ring-1 ring-black/5`;

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
        <BrowserBar address={address} />
        <div className="relative aspect-[16/10]">{children}</div>
      </div>
    </div>
  );
}
