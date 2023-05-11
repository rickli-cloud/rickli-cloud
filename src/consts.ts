// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const UMAMI_SRC = "https://umami.rickli.cloud/script.js";
export const UMAMI_ID = "b00c8785-ed3a-48a0-86c1-b51bcc7c0742";

export const SITE_TITLE = "rickli.cloud";
export const SITE_DESCRIPTION = "";

export const ROUTES: { href: string; name: string; regex: RegExp }[] = [
  {
    href: "/",
    name: "Home",
    regex: /^\/$/,
  },
  {
    href: "/blog",
    name: "Blog",
    regex: /^\/blog(\/[^\/]*$)?/,
  },
  {
    href: "/about",
    name: "About",
    regex: /^\/about\/?$/,
  },
];
