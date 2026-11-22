import { joinClassNames, tw } from "@/lib/tailwind";

import type { ReactNode } from "react";

const BODY_CLASSNAME = tw`rounded-[16cqw] bg-neutral-950 p-[3.5cqw] shadow-xl ring-1 ring-neutral-700`;

const SCREEN_CLASSNAME = tw`relative aspect-[9/19.5] overflow-hidden rounded-[12.5cqw] bg-white`;

const ISLAND_CLASSNAME = tw`absolute left-1/2 top-[3cqw] z-10 h-[8cqw] w-[30cqw] -translate-x-1/2 rounded-full bg-neutral-950`;

type PhoneFrameProps = {
  className?: string;
  children: ReactNode;
};

export function PhoneFrame({ className, children }: PhoneFrameProps) {
  return (
    <div className={joinClassNames("[container-type:inline-size]", className)}>
      <div className={BODY_CLASSNAME}>
        <div className={SCREEN_CLASSNAME}>
          <span className={ISLAND_CLASSNAME} />
          {children}
        </div>
      </div>
    </div>
  );
}
