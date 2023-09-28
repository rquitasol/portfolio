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
          primary: "#FF6000",
          secondary: "#FFA559",
          accent: "#FFE6C7",
          neutral: "#454545",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      "luxury",
      "light",
      "cyberpunk",
    ],
  },
  plugins: [require("daisyui")],
};
