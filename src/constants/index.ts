import { siteConfig } from "@/config/site";
import { Bot, Newspaper, Rss } from "lucide-react";
import { HiHome } from "react-icons/hi";
import { RiFilePaper2Fill } from "react-icons/ri";
import { IoIosCamera } from "react-icons/io";
import { GrGithub } from "react-icons/gr";

export const NAV_LIST = [
  { label: "Home", type: "page", path: "/", icon: HiHome },
  { label: "Posts", type: "page", path: "/posts", icon: RiFilePaper2Fill },
  { separator: "Me" },
  {
    label: "Reading List",
    type: "page",
    path: "/reading",
    icon: RiFilePaper2Fill,
  },
  {
    label: "Photos",
    type: "page",
    path: "/photos",
    icon: IoIosCamera,
  },
  { separator: "Online" },
  {
    label: "GitHub",
    path: "https://github.com/rainnfx",
    icon: GrGithub,
    type: "link",
  },
];
