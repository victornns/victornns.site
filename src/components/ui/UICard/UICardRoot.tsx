import { ReactNode } from "react";

interface UICardRootProps {
  children: ReactNode;
  className?: string;
  spacing?: "compact" | "default";
}

export const UICardRoot = function ({ children, className = "", spacing = "default" }: UICardRootProps) {
  const spacingClasses = {
    compact: "py-4",
    default: "py-6",
  };

  return <div className={`border-b-[1px] ${spacingClasses[spacing]} ${className}`}>{children}</div>;
};
