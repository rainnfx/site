"use client";
import React from "react";
import { NAV_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function HeaderNav() {
  const segment = useSelectedLayoutSegment();
  return (
    <nav className="mt-5 flex-col">
      {NAV_LIST.map((item) => (
        <Link
          key={item.label + item.path}
          href={item.path}
          className={cn(
            "font-semibold text-sm flex items-center hover:bg-foreground/15 ease-in-out mt-2 p-2 rounded-md",
            (segment === null || segment === "") && item.path === "/"
              ? "bg-foreground/15"
              : `/${segment}` === item.path
                ? "bg-foreground/15"
                : "text-muted-foreground"
          )}
        >
          <item.icon className="mr-2 size-4" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
