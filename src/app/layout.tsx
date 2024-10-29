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
    <html>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
