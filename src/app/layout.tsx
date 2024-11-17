import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <div className="sticky top-0 z-10 bg-inherit md:hidden">
                <SidebarTrigger />
              </div>
              <div className="flex justify-between">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
