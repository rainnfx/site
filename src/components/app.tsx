import React, { PropsWithChildren } from "react";
import SiteHeader from "@/components/site-header";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function App({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen space-y-6 overflow-hidden">
      <SiteHeader />
      <main className="container flex-1">{children}</main>
    </div>
  );
}
