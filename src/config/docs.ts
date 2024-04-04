import { DocsConfig } from "@/components/doc/types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Designs",
      href: "/designs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/designs",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Layout",
          href: "/designs/documentation",
        },
        {
          title: "Color Theory",
          href: "/designs/documentation/",
        },
        {
          title: "Typography",
          href: "/designs/documentation/",
        },
        {
          title: "Visual Hierarchy",
          href: "/designs/documentation/",
        },
        {
          title: "Imagery",
          href: "/designs/documentation/",
        },
        {
          title: "Whitespace",
          href: "/designs/documentation/",
        },
        {
          title: "Consistency",
          href: "/designs/documentation/",
        },
        {
          title: "Unity",
          href: "/designs/documentation/",
        },
        {
          title: "Functionality",
          href: "/designs/documentation/",
        },
        {
          title: "Somthing New",
          href: "/designs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
