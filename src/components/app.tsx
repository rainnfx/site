"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import SiteHeader from "@/components/site-header";
import MobileNav from "@/components/mobile-nav";

export default function App({ children }: PropsWithChildren) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the device is mobile by checking the window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen space-y-6 overflow-hidden">
      {isMobile ? <MobileNav /> : <SiteHeader />}
      <main className="container flex-1">{children}</main>
    </div>
  );
}
