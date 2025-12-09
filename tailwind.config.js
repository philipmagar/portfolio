/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  // include additional template and stylesheet types so Tailwind scans them
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#3F1D38",
        secondary: "#D89279",
        accent: "#F7C5A0",
      },
    },
  },
  plugins: [],
};
