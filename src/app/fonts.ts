import { Roboto_Flex } from "next/font/google";
import type { CSSProperties } from "react";

// Exposed as `--font-sans`, which tailwind.config.ts maps `font-sans` to.
export const font = Roboto_Flex({
  subsets: ["latin"],
  axes: ["wdth"],
  // Avoids a flash of un-stretched text: the fallback has no width axis.
  display: "block",
  variable: "--font-sans",
});

// Variable-axis tuning; applied inline on `<html>`.
export const fontStyle: CSSProperties = {
  fontStretch: "150%",
};
