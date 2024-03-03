/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      keyframes: {
        "slide-down": {
          "10%": {
            top: "0px",
          },
          "20%": {
            top: "74px",
          },
          "30%": {
            top: "148px",
          },
          "40%": {
            top: "222px",
          },
          "50%": {
            top: "296px",
          },
          "70%": {
            top: "320px",
          },
          "93.75%": {
            top: "320px",
          },
        },
      },
      animation: {
        "slide-down": "slide-down 10s linear 2.75s normal infinite",
      },
    },
  },
  plugins: [],
};
