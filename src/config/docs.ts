import { DocsConfig } from "@/components/doc/types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Designs",
      href: "/designs",
    },
    {
      title: "Components",
      href: "/components",
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
          title: "Introduction",
          href: "/designs/documentation",
        },
        {
          title: "Contentlayer",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "Components",
          href: "/designs/documentation/components",
        },
        {
          title: "Code Blocks",
          href: "/designs/documentation/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/designs/documentation/style-guide",
        },
        {
          title: "Search",
          href: "/designs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "Introduction",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "Build your own",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "Writing Posts",
          href: "/designs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Dashboard",
      items: [
        {
          title: "Introduction",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "Layouts",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "Server Components",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "Authentication",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "Database with Prisma",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "API Routes",
          href: "/designs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Marketing Site",
      items: [
        {
          title: "Introduction",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "File Structure",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "Tailwind CSS",
          href: "/designs/in-progress",
          disabled: true,
        },
        {
          title: "Typography",
          href: "/designs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
