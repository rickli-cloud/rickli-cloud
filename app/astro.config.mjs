import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { jamstackCmsPlugin } from "@lucarickli/jamstack-cms-astro";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rickli.cloud",
  // base: "",
  integrations: [
    mdx(),
    sitemap(),
    jamstackCmsPlugin({
      backend: {
        force_auth: false,
        git: {
          repo: "rickli-cloud",
          owner: "rickli-cloud",
        },
        auth: "return auth.githubOAuth('ef878b46674dd92c73ad', auth.urlParameter())",
      },
      collections: [
        {
          type: "dir",
          name: "Blog",
          path: "app/src/content/blog",
          actions: {
            create: true,
            delete: true,
          },
          frontmatter: {
            title: "z.string({})",
            description: "z.string().optional()",
            heroImage: "z.string().optional()",
            pubDate: "z.date().default(() => new Date(Date.now()))",
          },
        },
        {
          type: "file",
          name: "Pages",
          actions: {
            delete: true,
          },
          files: [
            { path: "app/src/pages/datenschutz.md" },
            { path: "app/src/pages/impressum.md" },
          ],
        },
      ],
    }),
  ],
});
