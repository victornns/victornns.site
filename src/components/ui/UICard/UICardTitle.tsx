import { ReactNode } from "react";

interface UICardTitleProps {
  children: ReactNode;
}

export const UICardTitle = function ({ children }: UICardTitleProps) {
  return <h3 className="mb-2 text-lg font-semibold">{children}</h3>;
};
