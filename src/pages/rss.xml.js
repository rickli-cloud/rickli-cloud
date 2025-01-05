import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

import { SITE_TITLE } from "$lib/consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: `${SITE_TITLE} rss feed`,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
