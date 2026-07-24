"use client";

import * as Dialog from "@radix-ui/react-dialog";

import type { ReactNode } from "react";

interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  contentClassName?: string;
  closeLabel?: string;
  closeButtonClassName?: string;
  showCloseButton?: boolean;
}

function joinClassNames(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Drawer({
  open,
  onOpenChange,
  title,
  children,
  contentClassName,
  closeLabel = "Close",
  closeButtonClassName,
  showCloseButton = true,
}: DrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/18 backdrop-blur-sm data-[state=closed]:animate-overlay-fade-out data-[state=open]:animate-overlay-fade-in" />

        <Dialog.Content
          className={joinClassNames(
            "fixed inset-y-0 right-0 z-[70] w-[var(--drawer-panel-width,100vw)] max-w-full overflow-y-auto border-l border-neutral-200 bg-white px-6 pb-8 pt-16 shadow-2xl outline-none transform-gpu data-[state=closed]:animate-drawer-slide-out data-[state=open]:animate-drawer-slide-in md:px-8",
            contentClassName,
          )}
        >
          <Dialog.Title className="sr-only">{title}</Dialog.Title>

          {showCloseButton && (
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label={closeLabel}
                className={joinClassNames(
                  "absolute right-[var(--drawer-close-right,1.5rem)] top-[var(--drawer-close-top,1.25rem)] inline-flex h-8 w-8 items-center justify-center text-neutral-700 transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                  closeButtonClassName,
                )}
              >
                <span className="relative block h-4 w-4" aria-hidden="true">
                  <span className="absolute left-1/2 top-1/2 block h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-1/2 top-1/2 block h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </Dialog.Close>
          )}

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
