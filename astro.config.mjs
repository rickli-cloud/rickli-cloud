import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import NetlifyCMS from "astro-netlify-cms";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import serviceWorker from "astrojs-service-worker";
import compress from "astro-compress";

import { SITE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    mdx(),
    tailwind(),
    serviceWorker(),
    compress({}),
    sitemap({
      filter: (page) => !/\/admin(\/.*)?$/.test(page),
    }),
    NetlifyCMS({
      disableIdentityWidgetInjection: true,
      config: {
        backend: {
          name: "github",
          repo: "LucaRickli/www.rickli.cloud",
          branch: "main",
          base_url: "https://github-oauth.rickli.cloud",
        },
        site_url: SITE,
        media_folder: "public/assets",
        public_folder: "/assets",
        logo_url: `${SITE}/logo.svg`,
        locale: "de",
        collections: [
          {
            name: "pages",
            label: "Pages",
            files: [
              {
                name: "datenschutz",
                label: "Datenschutz",
                file: "src/pages/datenschutz.md",
                fields: [
                  {
                    name: "layout",
                    label: "Layout",
                    widget: "string",
                  },
                  {
                    name: "title",
                    label: "Title",
                    widget: "string",
                  },
                  {
                    name: "body",
                    widget: "markdown",
                    label: "Body",
                  },
                ],
              },
              {
                name: "impressum",
                label: "Impressum",
                file: "src/pages/impressum.md",
                fields: [
                  {
                    name: "layout",
                    label: "Layout",
                    widget: "string",
                  },
                  {
                    name: "title",
                    label: "Title",
                    widget: "string",
                  },
                  {
                    name: "body",
                    widget: "markdown",
                    label: "Body",
                  },
                ],
              },
            ],
          },
          {
            name: "blog",
            label: "Blog Posts",
            label_singular: "Blog Post",
            folder: "src/content/blog",
            create: true,
            delete: true,
            preview_path: "/blog/{{slug}}",
            fields: [
              {
                name: "title",
                widget: "string",
                label: "Post Title",
              },
              {
                name: "description",
                widget: "string",
                label: "Description",
              },
              {
                name: "pubDate",
                widget: "datetime",
                format: "MMM DD YYYY",
                date_format: "MMM DD YYYY",
                time_format: false,
                label: "Publish Date",
              },
              {
                name: "heroImage",
                widget: "string",
                label: "Hero image",
                required: false,
              },
              {
                name: "body",
                widget: "markdown",
                label: "Post Body",
              },
            ],
          },
        ],
      },
    }),
  ],
});
