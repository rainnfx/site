import type { Metadata } from "next";
import "./globals.css";

import { radio_canada } from "../lib/fonts";

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
      <body className={radio_canada.className}>{children}</body>
    </html>
  );
}
