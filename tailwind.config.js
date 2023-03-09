/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Roboto Mono",
      secondary: "Nunito",
    },
    backgroundImage: {
      main: "linear-gradient(180deg, #1A2A34 7.22%, #1F323D 27.6%, #273F4C 48.94%, #355566 66.59%, #77BDDF 138.62%)",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#1B2C36",
        third: "#2A4452",
        button: "#1A2A34",
        gray: "#D9D9D9",
        lightBlue: "#4A768D",
        alert: "#E5B700",
      },
    },
  },
  plugins: [],
};
