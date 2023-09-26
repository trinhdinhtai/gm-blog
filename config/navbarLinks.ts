import { ContentNavItem, NavItem } from "@/types"

const moreContent: ContentNavItem[] = [
  {
    title: "Stats",
    href: "/stats",
    description: "My personal statistics about coding and other things.",
  },
  {
    title: "Uses",
    href: "/uses",
    description: "My hardware, software, and other tools.",
  },
]

export const navbarLinks: NavItem[] = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "More",
    content: moreContent,
  },
]
