import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from "astro-compress"

import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: 'https://astro-advanced-blog-template.vercel.app',
  integrations: [
    mdx(),
    compress({
      html: {
        removeComments: true
      }
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    rehypePlugins: [['rehype-external-links', {
      target: '_blank'
    }]]
  }
})
