import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  readingTime: {
    type: "number",
    resolve: (doc) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const content = String(doc.body.raw)
      const wordsPerMinute = 200
      const numberOfWords = content.split(/\s/g).length
      const minutes = numberOfWords / wordsPerMinute
      return Math.ceil(minutes)
    },
  },
}

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the project',
      required: true
    },
    description: {
      type: 'string',
      description: 'The description of the project',
      required: true
    },
    homepage: {
      type: 'string',
      description: "The link to the project's homepage",
      required: false
    },
    github: {
      type: 'string',
      description: "The url to the project's github page",
      required: true
    },
    icon: {
      type: 'string',
      description: 'The name of the icon to use',
      required: true
    },
    image: {
      type: 'string',
      description: 'Image for the project',
      required: true
    },
    repo: {
      type: 'string',
      description: 'The name of the repo of the project',
      required: true
    },
    techstack: {
      type: 'list',
      of: Techstack,
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields,
}))

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    avatar: {
      type: "string",
      required: true,
    },
    twitter: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}))

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}))

export const Uses = defineDocumentType(() => ({
  name: "Uses",
  filePathPattern: `uses/**/*.mdx`,
  contentType: "mdx",
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post, Author, Page, Uses],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (node?.type === "element" && node?.tagName === "pre") {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            const [codeEl] = node.children
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (codeEl.tagName !== "code") return

            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            node.raw = codeEl.children?.[0].value
          }
        })
      },
      [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore weird types in rehype-pretty-code
        rehypePrettyCode,
        {
          theme: { dark: "one-dark-pro", light: "github-light" },

          /**
           * @param {{ children: string | any[]; }} node
           */
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          /**
           * @param {{ properties: { className: string[]; }; }} node
           */
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          /**
           * @param {{ properties: { className: string[]; }; }} node
           */
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (node?.type === "element" && node?.tagName === "div") {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (!("data-rehype-pretty-code-fragment" in node.properties)) return

            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            for (const child of node.children) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              if (child.tagName === "pre") {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                child.properties["raw"] = node.raw
              }
            }
          }
        })
      },
    ],
  },
})