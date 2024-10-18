import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Bot, Newspaper, Rss } from "lucide-react";
import { HiHome, HiNewspaper } from "react-icons/hi";
import { RiFilePaper2Fill } from "react-icons/ri";

export const NAV_LIST = [
  { label: "Home", path: "/", icon: HiHome },
  { label: "Posts", path: "/posts", icon: RiFilePaper2Fill },
];

export const SOCIALS = [
  { label: "Github", path: siteConfig.social.github, icon: Icons.github },
  { label: "Facebook", path: siteConfig.social.facebook, icon: Icons.facebook },
  { label: "Twitter", path: siteConfig.social.twitter, icon: Icons.x },
];
