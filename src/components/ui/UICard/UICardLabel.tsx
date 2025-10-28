import { ReactNode } from "react";

interface UICardLabelProps {
  children: ReactNode;
}

export const UICardLabel = function ({ children }: UICardLabelProps) {
  return <p className="lowercase font-light text-xs">{children}</p>;
};
