import authorAvatar from "../../public/images/author/devbertskie.png";
export const siteConfig = {
  name: "Matteo's Site",
  description:
    "Matteo's site where he puts a bunch of stuff that he finds interesting.",
  author: "Matteo",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/rainnfx",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;
