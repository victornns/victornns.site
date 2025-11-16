import { ReactNode } from "react";

interface UICardLabelProps {
  children: ReactNode;
}

export const UICardLabel = function ({ children }: UICardLabelProps) {
  return <p className="font-light text-xs">{children}</p>;
};
