// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import remarkToc from "remark-toc";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rickli.cloud",
  integrations: [
    mdx(),
    svelte(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !/\/admin(\/.*)?$/.test(page),
    }),
  ],
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: "Contents", maxDepth: 6, tight: true }],
    ],
  },
});

// remarkToc({ })
