/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(20, 184, 166, 0.14)"
      }
    }
  },
  plugins: []
};
