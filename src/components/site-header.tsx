"use client";
import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NAV_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";
import { TbArrowUpRight } from "react-icons/tb";

export default function SiteHeader() {
  const segment = useSelectedLayoutSegment();
  return (
    <header className="flex-col">
      <div
        className="flex-col w-72 h-screen border border-r-zinc-800 p-4"
        style={{ backgroundColor: "var(--sidebarmain)" }}
      >
        <div className="flex-col">
          <Link href="/" className="flex-col">
            <span className="text-sm font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className=" border-r-foreground">
          <nav className="mt-5 flex-col">
            {NAV_LIST.map((item, index) =>
              item.separator ? (
                <div
                  key={`separator-${index}`}
                  className="mt-4 px-1 mb-2 text-foreground font-bold text-xs"
                >
                  {item.separator}
                </div>
              ) : (
                <Link
                  key={(item.label ?? "default-label") + item.path}
                  href={item.path ?? "/"}
                  target={item.type === "link" ? "_blank" : undefined}
                  rel={item.type === "link" ? "noopener noreferrer" : undefined}
                  className={cn(
                    "font-semibold text-sm flex justify-between items-center hover:bg-foreground/15 ease-in-out mt-2 p-1.5 rounded-md",
                    (segment === null || segment === "") && item.path === "/"
                      ? "bg-foreground/15"
                      : `/${segment}` === item.path
                        ? "bg-foreground/15"
                        : "text-muted-foreground"
                  )}
                >
                  <div className="flex items-center">
                    {item.icon && <item.icon className="mr-2 size-4" />}
                    <span>{item.label}</span>
                  </div>

                  {item.type === "link" && (
                    <TbArrowUpRight className="size-4 text-muted-foreground" />
                  )}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
