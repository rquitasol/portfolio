/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mova: ["mova", "sans"],
      },

      spacing: {
        700: "700px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#292524",
          secondary: "#FFFFFF",
          accent: "#fde68a",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
