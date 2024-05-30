/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E156E6",
        primary_hover: "#D532DB",
        text: "#d9d9d9",
        title: "#fff",
        bg_dark: "#030308",
      },
      fontFamily: {
        title: '"Bebas Neue", sans-serif',
        text: '"Roboto", sans-serif',
      },
      boxShadow: {
        primary: "#919eab4d 0 0 2px, #919eab1f 0 12px 24px -4px",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1024px",
      },
      backgroundImage: (theme) => ({
        "bgCards": "linear-gradient(125deg, #1C1C1C , #050505 )",
        "benefits-linear": "linear-gradient(to right, #D532DB 48%, rgba(213, 50, 219, 0) )",
        "card-linear": "linear-gradient(45deg, #1C1C1C, #050505)",
        "steps-linear": "linear-gradient(to bottom, #030308 10%, rgba(0,0,0,0) 50%, #030308)"
      }),
      backgroundPosition: {
        "center-2": "120% 20%",
        "center_bottom": "center bottom"
      }
    },
  },
  plugins: [],
};
