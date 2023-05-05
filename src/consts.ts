// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

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
