import type { ReactNode } from "react";

type UICardTitleProps = {
  children: ReactNode;
};

export function UICardTitle({ children }: UICardTitleProps) {
  return <h3 className="mb-2 text-lg font-semibold">{children}</h3>;
}
