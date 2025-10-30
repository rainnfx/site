import type { Metadata } from "next";
import "./globals.css";

import { radio_canada } from "../lib/fonts";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "matteo",
  description: "built by matteo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${radio_canada.className} bg-background min-h-screen overflow-y-hidden`}
      >
        <div className="flex h-screen">
          <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-col flex-1 min-h-0">
              <main className="flex-1 min-h-0">{children}</main>
              <Footer />
            </div>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
