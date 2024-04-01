import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from 'rehype-slug';
import { visit } from 'unist-util-visit';

/** @type {import('contentlayer/source-files').ComputedFields} */


const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
  },
  readingTime: {
    type: 'number',
    resolve: (doc) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const content = String(doc.body.raw);
      const wordsPerMinute = 200;
      const numberOfWords = content.split(/\s/g).length;
      const minutes = numberOfWords / wordsPerMinute;
      return Math.ceil(minutes);
    }
  }
};

const GalleryPost = defineDocumentType(() => ({
  name: 'GalleryPost',
  filePathPattern: 'gallery/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog post',
      required: true
    },
    date: {
      type: 'string',
      description: 'The date of the assetst',
      required: true
    },
    modifiedTime: {
      type: 'string',
      description: 'The modified time of the assets',
      required: true
    },
    download: {
      type: 'string',
      description: 'The summary of the assets',
      required: true
    },
    dimention: {
      type: 'string',
      description: 'The summary of the assets',
      required: true
    },
    size: {
      type: 'string',
      description: 'The summary of the assets',
      required: true
    },
    summary: {
      type: 'string',
      description: 'The summary of the assets',
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}));

const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog post',
      required: true
    },
    date: {
      type: 'string',
      description: 'The date of the blog post',
      required: true
    },
    modifiedTime: {
      type: 'string',
      description: 'The modified time of the blog post',
      required: true
    },
    summary: {
      type: 'string',
      description: 'The summary of the blog post',
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields,
}))

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `guides/**/*.mdx`,
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
    featured: {
      type: "boolean",
      default: false,
    },
  },
  computedFields,
}))


export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    }
  },
  computedFields
}));


export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Page, Doc, Guide, BlogPost, GalleryPost ],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (node?.type === 'element' && node?.tagName === 'pre') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            const [codeEl] = node.children;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (codeEl.tagName !== 'code') return;

            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            node.raw = codeEl.children?.[0].value;
          }
        });
      },
      [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore weird types in rehype-pretty-code
        rehypePrettyCode,
        {
          theme: { dark: 'one-dark-pro', light: 'github-light' },

          /**
           * @param {{ children: string | any[]; }} node
           */
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          /**
           * @param {{ properties: { className: string[]; }; }} node
           */
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          /**
           * @param {{ properties: { className: string[]; }; }} node
           */
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ]
  }
});
