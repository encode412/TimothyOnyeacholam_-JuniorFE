/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#00678F",
        darkyellow: "#F8A434",
        lightGray: "#D9D9D980",
        darkGray: "#53585B",
      },
      keyframes: {
       
        slide_up: {
          "0%": {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          "50%": {
            opacity: "50",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "100",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slide_up: "slide_up .7s ease-out",
      },
    },
  },
  plugins: [],
}

