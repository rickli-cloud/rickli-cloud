import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from "astro-netlify-cms";

const SITE = "www.rickli.cloud";

// https://astro.build/config
export default defineConfig({
  site: `https://${SITE}}`,
  integrations: [
    mdx(),
    sitemap(),
    NetlifyCMS({
      config: {
        backend: {
          name: "github",
          repo: "rickli-cloud/rickli-cloud",
          branch: "main",
          // base_url: "https://github-oauth.rickli.cloud",
        },
        site_url: SITE,
        media_folder: "public",
        public_folder: "/",
        logo_url: `/logo.svg`,
        locale: "de",
        collections: [
          /* {
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
          }, */
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
