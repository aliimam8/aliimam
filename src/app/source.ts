import { map } from "@/.map";
import { createMDXSource, defaultSchemas } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { PageTree } from "fumadocs-core/server";
import { z } from "zod";

const frontmatterSchema = defaultSchemas.frontmatter.extend({
  updated: z
    .string()
    .or(z.date())
    .transform((value, context) => {
      try {
        return new Date(value);
      } catch {
        context.addIssue({ code: z.ZodIssueCode.custom, message: "Invalid date" });
        return z.NEVER;
      }
    }),
  authors: z.array(z.string()),
});

export const {
  getPage,
  getPages,
  pageTree: originalTree,
} = loader({
  source: createMDXSource(map, { schema: { frontmatter: frontmatterSchema } }),
});

export const pageTree: PageTree.Root = {
  name: "Docs",
  children: [
    { type: "separator", name: "Getting Started" },
    {
      type: "page",
      name: "How to create",
      url: "",
    },
    { type: "separator", name: "Components" },
    ...originalTree.children
      .filter(node => node.type !== "page" || (node.url))
      .sort((a, b) => a.name.localeCompare(b.name)),
  ],
};