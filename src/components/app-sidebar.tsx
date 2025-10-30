"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

import { usePathname } from "next/navigation";

const sidebar = [
  { name: "Home", link: "/", id: 1 },
  { name: "Bookshelf", link: "/bookshelf", id: 2 },
  { name: "Projects", link: "/projects", id: 3 },
  { name: "Photos", link: "/photos", id: 4 },
  { name: "Notes", link: "/notes", id: 5 },
  { name: "Writing", link: "/writing", id: 6 },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarMenu className="space-y-2">
            {sidebar.map((sidebar) => (
              <SidebarMenuItem
                key={sidebar.id}
                className={
                  "cursor-pointer" +
                  (pathname === sidebar.link
                    ? ""
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                <Link href={sidebar.link}>{sidebar.name}</Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
