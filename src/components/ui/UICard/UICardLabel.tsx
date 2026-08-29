import { ReactNode } from "react";

interface UICardLabelProps {
  children: ReactNode;
  className?: string;
}

export const UICardLabel = function ({
  children,
  className = "",
}: UICardLabelProps) {
  return <p className={`font-light text-xs ${className}`}>{children}</p>;
};
