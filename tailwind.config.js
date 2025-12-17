/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  // include additional template and stylesheet types so Tailwind scans them
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css,html}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-bg-primary)",
        surface: "var(--color-bg-secondary)",
        text: "var(--color-text-primary)",
        "text-muted": "var(--color-text-secondary)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
