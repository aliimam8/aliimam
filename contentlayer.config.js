import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
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

const ColorsPost = defineDocumentType(() => ({
  name: 'ColorsPost',
  filePathPattern: 'colors/**/*.mdx',
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
    color1: {
      type: 'string',
      description: 'The summary of the assets',
      required: true
    },
    color2: {
      type: 'string',
      description: 'The summary of the assets',
      required: true
    },
    color3: {
      type: 'string',
      description: 'The summary of the assets',
      required: true
    },
    color4: {
      type: 'string',
      description: 'The summary of the assets',
      required: true
    },
    color5: {
      type: 'string',
      description: 'The summary of the assets',
      required: true
    },
    color6: {
      type: 'string',
      description: 'The summary of the assets',
      required: true
    },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    draft: { type: 'list', of: { type: 'string' } },
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

const AssetsPost = defineDocumentType(() => ({
  name: 'AssetsPost',
  filePathPattern: 'assets/**/*.mdx',
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
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    draft: { type: 'boolean' },
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
    tags: { type: 'list', of: { type: 'string' }, default: [] },
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

export const Uses = defineDocumentType(() => ({
  name: 'Uses',
  filePathPattern: `uses/**/*.mdx`,
  contentType: 'mdx',
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Page, Uses, BlogPost, AssetsPost, ColorsPost],
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
      () => (tree) => {
        visit(tree, (node) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (node?.type === 'element' && node?.tagName === 'div') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (!('data-rehype-pretty-code-fragment' in node.properties)) return;

            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            for (const child of node.children) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              if (child.tagName === 'pre') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                child.properties['raw'] = node.raw;
              }
            }
          }
        });
      }
    ]
  }
});
