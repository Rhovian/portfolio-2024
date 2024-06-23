/* eslint-disable @typescript-eslint/no-require-imports */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-gold-light": "#D4BF79",
        "custom-gold-dark": "#A28834",
      },
      fontFamily: {
        sans: ["Cairo", ...defaultTheme.fontFamily.sans],
        bungee: ['"Bungee Spice"', "Cairo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
