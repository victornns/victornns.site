import { BrowserBar } from "@/features/portfolio/projects/components/devices/BrowserBar";
import { joinClassNames, tw } from "@/lib/tailwind";

import type { ReactNode } from "react";

const BODY_CLASSNAME = tw`rounded-[2cqw] bg-gradient-to-b from-neutral-100 to-neutral-300 p-[1.4cqw] pb-[6cqw] shadow-[0_5cqw_8cqw_-4cqw_rgba(0,0,0,0.35)] ring-1 ring-black/5`;

const SCREEN_CLASSNAME = tw`flex aspect-video flex-col overflow-hidden rounded-[0.7cqw] border-[1cqw] border-neutral-950 bg-white`;

const NECK_CLASSNAME = tw`mx-auto h-[10cqw] w-[17%] bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-300 [clip-path:polygon(9%_0,91%_0,100%_100%,0_100%)]`;

const FOOT_CLASSNAME = tw`mx-auto h-[1.3cqw] w-[30%] rounded-b-[0.8cqw] bg-neutral-300 shadow-[0_2.2cqw_2.8cqw_-1.1cqw_rgba(0,0,0,0.4)]`;

type MonitorFrameProps = {
  /** Shown in a browser bar across the top of the screen. */
  address?: string;
  className?: string;
  children: ReactNode;
};

/** An all-in-one desktop: screen with a chin, on a tapered stand. */
export function MonitorFrame({
  address,
  className,
  children,
}: MonitorFrameProps) {
  return (
    <div className={joinClassNames("[container-type:inline-size]", className)}>
      <div className={BODY_CLASSNAME}>
        <div className={SCREEN_CLASSNAME}>
          {address && <BrowserBar address={address} />}
          <div className="relative flex-1">{children}</div>
        </div>
      </div>
      <div className={NECK_CLASSNAME} />
      <div className={FOOT_CLASSNAME} />
    </div>
  );
}
