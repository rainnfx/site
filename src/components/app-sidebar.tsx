import { Camera, Home, Inbox, Book, Folder, ScrollText } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { url } from "inspector";
import Link from "next/link";

// Menu items.
const items1 = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Posts",
    url: "/posts",
    icon: Inbox,
  },
];

const items2 = [
  {
    title: "Projects",
    url: "/projects",
    icon: Folder,
  },
  {
    title: "Reading",
    url: "/reading",
    icon: Book,
  },
  {
    title: "Photography",
    url: "/photos",
    icon: Camera,
  },
  {
    title: "Writing",
    url: "/writing",
    icon: ScrollText,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-sm text-foreground">
            Matteo's Site
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="font-semibold">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground font-semibold">
            Me
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="font-semibold">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <span className="px-2 py-2 text-sm font-semibold text-muted-foreground">
          Source is on{" "}
          <Link
            href="https://github.com/rainnfx"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Github
          </Link>
          .
        </span>
      </SidebarFooter>
    </Sidebar>
  );
}
