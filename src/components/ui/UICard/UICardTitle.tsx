import { ReactNode } from "react";

interface UICardTitleProps {
  children: ReactNode;
}

export const UICardTitle = function ({ children }: UICardTitleProps) {
  return <span className="font-semibold">{children}</span>;
};
