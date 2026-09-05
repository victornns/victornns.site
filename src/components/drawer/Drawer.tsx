"use client";

import * as Dialog from "@radix-ui/react-dialog";

import type { ReactNode } from "react";

interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  /** Applied to the dialog content itself, e.g. so a toggle button elsewhere can reference it via aria-controls. */
  id?: string;
  contentClassName?: string;
  closeLabel: string;
  closeButtonClassName?: string;
  showCloseButton?: boolean;
  /** Skip the entrance animation for this open (e.g. it was already open on load, so there's nothing "opening" from the reader's perspective). The close animation is unaffected. */
  skipEnterAnimation?: boolean;
  /**
   * Raises this drawer above the mobile menu toggle button (z-[80] in
   * Navbar.tsx). That button normally sits above every drawer's default
   * z-index so it keeps working as the mobile menu's own close control, but
   * a drawer with its own close button (like project details) doesn't need
   * the toggle showing through on top of it.
   */
  elevated?: boolean;
}

function joinClassNames(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Drawer({
  open,
  onOpenChange,
  title,
  children,
  id,
  contentClassName,
  closeLabel,
  closeButtonClassName,
  showCloseButton = true,
  skipEnterAnimation = false,
  elevated = false,
}: DrawerProps) {
  const overlayZIndexClassName = elevated ? "z-[85]" : "z-[60]";
  const contentZIndexClassName = elevated ? "z-[90]" : "z-[70]";

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={joinClassNames(
            "fixed inset-0 bg-black/25 backdrop-blur-[2px] data-[state=closed]:animate-overlay-fade-out",
            overlayZIndexClassName,
            !skipEnterAnimation && "data-[state=open]:animate-overlay-fade-in",
          )}
        />

        <Dialog.Content
          id={id}
          className={joinClassNames(
            "fixed inset-y-0 right-0 w-[var(--drawer-panel-width,100vw)] max-w-full transform-gpu overflow-y-auto border-l bg-white px-6 pb-8 pt-16 shadow-2xl outline-none will-change-transform [backface-visibility:hidden] [contain:paint] data-[state=closed]:animate-drawer-slide-out",
            contentZIndexClassName,
            !skipEnterAnimation && "data-[state=open]:animate-drawer-slide-in",
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
                  "absolute right-[var(--drawer-close-right,1.5rem)] top-[var(--drawer-close-top,1.25rem)] inline-flex h-8 w-8 items-center justify-center text-muted transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
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
