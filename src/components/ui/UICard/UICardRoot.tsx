import { ReactNode } from "react";

interface UICardRootProps {
  children: ReactNode;
}

export const UICardRoot = function ({ children }: UICardRootProps) {
  return <div className="border-b-[1px] py-5">{children}</div>;
};
