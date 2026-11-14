"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Tracks `window.location.hash`, which Next.js doesn't expose through its
 * navigation hooks. The browser only reports hash changes for its own
 * navigations (address bar, back/forward); hash links handled by Next.js
 * `<Link>` update history silently, so their caller reports the new hash
 * through the returned setter.
 */
export function useLocationHash() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    function syncHash() {
      setHash(window.location.hash);
    }

    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, []);

  return [hash, setHash] as const;
}
