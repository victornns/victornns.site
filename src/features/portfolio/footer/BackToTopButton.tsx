"use client";

import { tw } from "@/lib/tailwind";

const BUTTON_CLASSNAME = tw`text-wide-tracking shrink-0 text-xs text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`;

type BackToTopButtonProps = {
  label: string;
};

export function BackToTopButton({ label }: BackToTopButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={BUTTON_CLASSNAME}
    >
      {label} <span aria-hidden="true">↑</span>
    </button>
  );
}
