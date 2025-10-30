import { ReactNode } from "react";

interface UICardTitleProps {
  children: ReactNode;
}

export const UICardTitle = function ({ children }: UICardTitleProps) {
  return <h3 className="font-semibold text-lg mb-2">{children}</h3>;
};
