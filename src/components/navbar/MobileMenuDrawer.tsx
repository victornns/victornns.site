"use client";

import Link from "next/link";

import { Drawer } from "@/components/drawer/Drawer";
import { NavbarLink } from "@/components/navbar/NavbarLink";

import type { NavbarItem } from "@/components/navbar/Navbar";

interface MobileMenuDrawerLabels {
  close: string;
  menu: string;
  navigation: string;
  resume: string;
}

interface MobileMenuDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: NavbarItem[];
  resumeHref: string;
  labels: MobileMenuDrawerLabels;
}

export function MobileMenuDrawer({
  open,
  onOpenChange,
  items,
  resumeHref,
  labels,
}: MobileMenuDrawerProps) {
  function closeDrawer() {
    onOpenChange(false);
  }

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={labels.menu}
      closeLabel={labels.close}
      contentClassName="[--drawer-panel-width:82vw] max-w-sm pt-20"
      showCloseButton={false}
    >
      <div className="flex min-h-full flex-col gap-10">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
            {labels.navigation}
          </p>
          <h2 className="text-3xl font-semibold leading-none">{labels.menu}</h2>
        </header>

        <nav aria-label={labels.menu}>
          <ul className="flex flex-col border-t border-neutral-200">
            {items.map((item) => (
              <li key={item.id}>
                <NavbarLink
                  item={item}
                  onNavigate={closeDrawer}
                  className="flex items-center justify-between border-b border-neutral-200 py-4 text-lg leading-none transition hover:text-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                />
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center bg-black px-5 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          onClick={closeDrawer}
        >
          {labels.resume}
        </Link>
      </div>
    </Drawer>
  );
}
