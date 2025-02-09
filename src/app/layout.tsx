import type { Metadata } from "next";
import "@/styles/globals.css";
import React from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: {
    template: "%s | Matteo's Site",
    default: "Matteo's Site",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <nav className="sticky top-0 z-10 bg-inherit/20 backdrop-blur-lg md:hidden">
                <div className="flex items-center justify-between p-2">
                  <SidebarTrigger />
                </div>
                <Separator />
              </nav>
              <div className="flex justify-between">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
