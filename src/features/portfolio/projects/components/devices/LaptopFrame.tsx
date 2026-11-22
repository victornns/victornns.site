import { joinClassNames, tw } from "@/lib/tailwind";

import type { ReactNode } from "react";

const LID_CLASSNAME = tw`mx-[7%] rounded-t-[2.2cqw] bg-neutral-900 p-[1.8cqw] pb-[2.6cqw] ring-1 ring-inset ring-neutral-700`;

const SCREEN_CLASSNAME = tw`relative aspect-[16/10] overflow-hidden rounded-[0.4cqw] bg-white`;

// The notch is where the lid opens, centred on the base's front edge.
const BASE_CLASSNAME = tw`relative h-[2.2cqw] rounded-b-[3cqw] bg-gradient-to-b from-neutral-200 to-neutral-400 shadow-[0_3cqw_4cqw_-2cqw_rgba(0,0,0,0.45)] after:absolute after:left-1/2 after:top-0 after:h-[0.8cqw] after:w-[14%] after:-translate-x-1/2 after:rounded-b-[1cqw] after:bg-neutral-400`;

type LaptopFrameProps = {
  className?: string;
  children: ReactNode;
};

export function LaptopFrame({ className, children }: LaptopFrameProps) {
  return (
    <div className={joinClassNames("[container-type:inline-size]", className)}>
      <div className={LID_CLASSNAME}>
        <div className={SCREEN_CLASSNAME}>{children}</div>
      </div>
      <div className={BASE_CLASSNAME} />
    </div>
  );
}
