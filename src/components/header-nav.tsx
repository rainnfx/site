"use client";
import React from "react";
import { NAV_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { TbArrowUpRight } from "react-icons/tb";

export default function HeaderNav() {
  const segment = useSelectedLayoutSegment();

  return (
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
            target={item.type === "link" ? "_blank" : undefined} // Add target=_blank for links
            rel={item.type === "link" ? "noopener noreferrer" : undefined} // Add rel attribute for security
            className={cn(
              "font-semibold text-sm flex justify-between items-center hover:bg-foreground/15 ease-in-out mt-2 p-1.5 rounded-md",
              (segment === null || segment === "") && item.path === "/"
                ? "bg-foreground/15"
                : `/${segment}` === item.path
                  ? "bg-foreground/15"
                  : "text-muted-foreground"
            )}
          >
            {/* Left side: Main icon and label */}
            <div className="flex items-center">
              {item.icon && <item.icon className="mr-2 size-4" />}
              <span>{item.label}</span>
            </div>

            {/* Right side: Special link icon for "link" types */}
            {item.type === "link" && (
              <TbArrowUpRight className="size-4 text-muted-foreground" />
            )}
          </Link>
        )
      )}
    </nav>
  );
}
