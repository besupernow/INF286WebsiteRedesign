/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        sailHudson: {
          "primary": "#6493d9",
          "secondary": "#fc6a6a",
          "accent": "#37cdbe",
          "neutral": "#e8efff",
          "base-100": "#ffffff",
          "background":"#0f141f",
          "base-300":"#121821",
          "base-200":"#171d26",
        },
      },
    ],
  },
}