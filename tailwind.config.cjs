module.exports = {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: [
      ,
      /* "black",  */ /*  "light", "dark" */ {
        light: {
          primary: "#0530ad",
          secondary: "#0076CE",
          accent: "#87CEFA",
          neutral: "#F5F5F5",
          "base-100": "#F0F0F0",
          info: "#00BFFF",
          success: "#1DB954",
          warning: "#FDC72C",
          error: "#D90429",
        },
        dark: {
          primary: "#0530ad",
          secondary: "#0076CE",
          accent: "#87CEFA",
          neutral: "#000000",
          "base-100": "#141414",
          info: "#00BFFF",
          success: "#1DB954",
          warning: "#FDC72C",
          error: "#D90429",
        },
      },
    ],
  },
};
