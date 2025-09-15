"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    // generate page-specific class from route
    const pageClass =
      pathname === "/"
        ? "home-page"
        : pathname.replace(/\//g, "-").replace(/^-/, "") + "-page";

    // Apply the class to the body element
    document.body.classList.add(pageClass);

    // Cleanup on route change/unmount
    return () => {
      document.body.classList.remove(pageClass);
    };
  }, [pathname]);

  return <>{children}</>;
}
