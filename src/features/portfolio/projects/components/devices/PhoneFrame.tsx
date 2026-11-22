import { BrowserBar } from "@/features/portfolio/projects/components/devices/BrowserBar";
import { joinClassNames, tw } from "@/lib/tailwind";

import type { ReactNode } from "react";

const BODY_CLASSNAME = tw`rounded-[16cqw] bg-neutral-950 p-[3.5cqw] shadow-xl ring-1 ring-neutral-700`;

const SCREEN_CLASSNAME = tw`relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[12.5cqw] bg-white`;

const ISLAND_CLASSNAME = tw`absolute left-1/2 top-[3cqw] z-10 h-[8cqw] w-[30cqw] -translate-x-1/2 rounded-full bg-neutral-950`;

type PhoneFrameProps = {
  /** Shown in a browser bar along the bottom of the screen. */
  address?: string;
  className?: string;
  children: ReactNode;
};

export function PhoneFrame({ address, className, children }: PhoneFrameProps) {
  return (
    <div className={joinClassNames("[container-type:inline-size]", className)}>
      <div className={BODY_CLASSNAME}>
        <div className={SCREEN_CLASSNAME}>
          <span className={ISLAND_CLASSNAME} />
          <div className="relative flex-1">{children}</div>
          {address && <BrowserBar address={address} variant="phone" />}
        </div>
      </div>
    </div>
  );
}
