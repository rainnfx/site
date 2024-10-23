"use client";
import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NAV_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";
import { TbArrowUpRight, TbMenu2, TbX } from "react-icons/tb";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar is closed by default
  const segment = useSelectedLayoutSegment();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 flex items-center justify-between p-2 text-white"
        style={{ backgroundColor: "var(--sidebarmain)", height: "3rem" }}
      >
        <button className="p-2 text-white md:hidden" onClick={handleToggle}>
          {isOpen ? (
            <TbX className="w-6 h-6" />
          ) : (
            <TbMenu2 className="w-6 h-6" />
          )}
        </button>
      </header>
      <div className="pt-12">
        {" "}
        {/* Add padding-top here */}
        <div
          className={cn(
            "fixed top-14 left-0 z-40 h-full w-72 border border-r-zinc-800 p-4 bg-secondary transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
          style={{ backgroundColor: "var(--sidebarmain)" }}
        >
          <div className="flex-col">
            <Link href="/" className="flex-col" onClick={handleClose}>
              <span className="text-sm font-bold">{siteConfig.name}</span>
            </Link>
          </div>
          <div className="border-r-foreground">
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
                    rel={
                      item.type === "link" ? "noopener noreferrer" : undefined
                    }
                    className={cn(
                      "font-semibold text-sm flex justify-between items-center hover:bg-foreground/15 ease-in-out mt-2 p-1.5 rounded-md",
                      (segment === null || segment === "") && item.path === "/"
                        ? "bg-foreground/15"
                        : `/${segment}` === item.path
                          ? "bg-foreground/15"
                          : "text-muted-foreground"
                    )}
                    onClick={handleClose} // Close the navbar when a link is clicked
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
      </div>
    </>
  );
}
